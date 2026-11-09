import assert from "node:assert/strict";
import { chmodSync, cpSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { spawnSync } from "node:child_process";
import test from "node:test";
import { fileURLToPath } from "node:url";

const REPO = resolve(fileURLToPath(new URL("..", import.meta.url)));
const OATS_URL = "https://github.com/oats-project/oats.git";
// The floor every capability's oats.json declares (the validator checks they agree).
const FLOOR = JSON.parse(readFileSync(join(REPO, "capabilities", "developer", "oats.json"), "utf8"))
  .compatibility.oats.replace(/^>=/, "");
// Kernel features the texts use with no fallback: checkpoints (schedule, wake-hold), what a
// waiter reads when one fires (instance-events, instance-git, status-liveness), retire plans,
// spawn previews with launch.declared/effective, launch configurations, --same-work, and
// `oats soul launch` in the move from v1.18.0.
const FEATURES = ["schedule", "wake-hold", "instance-events", "instance-git", "status-liveness", "lifecycle-plans",
  "spawn-preview-2", "launch-config", "instance-same-work", "soul-launch"];
const atLeast = (version, floor) => {
  const [a, b] = [version, floor].map((v) => v.split(/[.-]/).slice(0, 3).map(Number));
  for (let i = 0; i < 3; i++) if (a[i] !== b[i]) return a[i] > b[i];
  return true;
};

function run(cmd, args, options = {}) {
  const result = spawnSync(cmd, args, { encoding: "utf8", ...options });
  assert.equal(result.status, 0, `${cmd} ${args.join(" ")} failed\nstdout:\n${result.stdout}\nstderr:\n${result.stderr}`);
  return result;
}
function runJson(cmd, args, options = {}) {
  const result = run(cmd, args, options);
  const stdout = result.stdout.trim();
  const start = stdout.lastIndexOf("{\"schemaVersion\"");
  assert.notEqual(start, -1, `no OATS JSON envelope in stdout:\n${result.stdout}\nstderr:\n${result.stderr}`);
  const envelope = JSON.parse(stdout.slice(start));
  assert.equal(envelope.ok, true, envelope.error?.message || result.stderr);
  return envelope.result;
}
function makeRepo(dir, message = "commit") {
  run("git", ["init", "-q"], { cwd: dir });
  run("git", ["config", "user.email", "test@example.com"], { cwd: dir });
  run("git", ["config", "user.name", "Test"], { cwd: dir });
  run("git", ["add", "."], { cwd: dir });
  run("git", ["commit", "-q", "-m", message], { cwd: dir });
}
// A workspace whose member repository is a copy of the template, as ADAPTING.md says: its
// capabilities/ and souls/, composed `from: here`. No package is pinned.
function makeDeployment(t) {
  const tmp = mkdtempSync(join(tmpdir(), "oats-engineering-template-"));
  t.after(() => rmSync(tmp, { recursive: true, force: true }));

  const workspaceSrc = join(tmp, "workspace-src");
  mkdirSync(workspaceSrc);
  writeFileSync(join(workspaceSrc, "oats-workspace.yaml"), `schemaVersion: 2
name: engineering-template-probe
members:
  - file://${tmp}/member.git
defaults:
  knowledge: none
  messaging: none
  tasks: none
`);
  makeRepo(workspaceSrc, "workspace");
  const workspaceBare = join(tmp, "workspace.git");
  run("git", ["clone", "--bare", workspaceSrc, workspaceBare, "-q"]);

  const memberSrc = join(tmp, "member-src");
  mkdirSync(memberSrc);
  for (const dir of ["capabilities", "souls"]) cpSync(join(REPO, dir), join(memberSrc, dir), { recursive: true });
  // The copy's release record (ADAPTING.md, section 4): a plain file the kernel must ignore.
  writeFileSync(join(memberSrc, "capabilities", "TEMPLATE-RELEASE"), "template: oats-project/oats-engineering-coordination\nrelease: template-v2.1.0\n");
  writeFileSync(join(memberSrc, "oats-membership.yaml"), `schemaVersion: 2
workspace: file://${workspaceBare}
`);
  makeRepo(memberSrc, "member");
  run("git", ["clone", "--bare", memberSrc, join(tmp, "member.git"), "-q"]);

  const deploy = join(tmp, "deploy");
  mkdirSync(deploy);
  writeFileSync(join(deploy, "oats-local.yaml"), `schemaVersion: 2
workspace: file://${workspaceBare}
`);
  // The developer soul works in a worktree of the member repository: clone it where OATS looks.
  run("git", ["clone", "-q", join(tmp, "member.git"), join(deploy, "member")]);
  const bin = join(tmp, "bin");
  mkdirSync(bin);
  // Spawn previews refuse a harness whose binary is missing (E_HARNESS_UNAVAILABLE): pi is the
  // default harness and codex is the code-reviewer's launch preference.
  for (const harness of ["pi", "codex"]) {
    const fake = join(bin, harness);
    writeFileSync(fake, `#!/usr/bin/env sh\necho fake ${harness} for spawn-preview tests >&2\n`);
    chmodSync(fake, 0o755);
  }
  return { deploy, env: { ...process.env, PATH: `${bin}:${process.env.PATH || ""}` } };
}
function kernelCli(t, label, ref) {
  if (process.env[`OATS_KERNEL_${label}`]) return process.env[`OATS_KERNEL_${label}`];
  const dir = join(mkdtempSync(join(tmpdir(), `oats-kernel-${label}-`)), "oats");
  t.after(() => rmSync(resolve(dir, ".."), { recursive: true, force: true }));
  run("git", ["clone", "--depth", "1", "--branch", ref, OATS_URL, dir, "-q"], { timeout: 120_000 });
  run("npm", ["install", "--omit=dev", "--silent"], { cwd: dir, timeout: 180_000 });
  return join(dir, "bin", "oats.mjs");
}
const sorted = (list) => [...list].sort();

async function checkKernel(t, label, ref) {
  const cli = kernelCli(t, label, ref);
  const version = JSON.parse(run(process.execPath, [cli, "version", "--json"]).stdout);
  if (ref === "main") {
    // main moves past each release; it must stay at or above the template's floor.
    assert.ok(atLeast(version.version, FLOOR), `${label} kernel version ${version.version} is below ${FLOOR}`);
  } else {
    assert.equal(version.version, ref.replace(/^v/, ""), `${label} kernel version ${version.version}`);
  }
  const missing = FEATURES.filter((f) => !(version.features || []).includes(f));
  assert.deepEqual(missing, [], `${label} kernel lacks features the texts rely on`);

  const { deploy, env } = makeDeployment(t);
  runJson(process.execPath, [cli, "sync", "--dir", deploy, "--json"], { timeout: 120_000, env });
  const preview = (soul) => runJson(process.execPath, [cli, "spawn", soul, "--dir", deploy, "--preview", "--json"], { timeout: 120_000, env });
  const modules = (p) => sorted(p.modules.map((m) => m.name));
  const skills = (p) => sorted(p.skills.map((s) => s.name));

  const dispatcher = preview("dispatcher");
  assert.deepEqual(modules(dispatcher), ["oats.dispatcher", "oats.landing-rules"]);
  assert.deepEqual(skills(dispatcher), ["dispatch"], "the dispatcher leads nothing: no expert or maintainer skills");

  const expert = preview("engineering-expert");
  assert.deepEqual(modules(expert), ["oats.engineering-expert", "oats.landing-rules"]);
  assert.deepEqual(skills(expert), ["across-people", "ask-a-person", "coordinate-developers", "find-the-maintainer", "findings-and-blocks", "hand-off", "land-on-agreement", "plan-and-spec", "send-a-probe", "verify-developer-work"]);

  const dev = preview("developer");
  assert.deepEqual(modules(dev), ["oats.developer", "oats.landing-rules"]);
  assert.deepEqual(skills(dev), ["design-while-writing", "diagnose-before-fixing", "execution-strategy", "maintain-dev-docs", "prove-it-works", "run-the-review-loop", "test-first", "understand-the-spec", "work-the-reviews", "worktrees"]);

  const maintainer = preview("maintainer");
  assert.deepEqual(modules(maintainer), ["oats.landing-rules", "oats.maintainer"]);
  assert.deepEqual(skills(maintainer), ["cross-review-peer", "direction-gate", "keep-it-clean", "launch-work", "maintainer-intake", "plan-release", "pr-review", "ship-release", "support-maintainer"]);

  // The kernel reads each skill's description with its own YAML parser and gives null when the
  // frontmatter doesn't parse, as the harnesses would drop the skill.
  for (const capability of ["oats.dispatcher", "oats.engineering-expert", "oats.developer", "oats.code-review", "oats.maintainer", "oats.landing-rules"]) {
    const shown = runJson(process.execPath, [cli, "capabilities", "show", capability, "--dir", deploy, "--json"], { timeout: 120_000, env });
    const unparsed = (shown.skills || []).filter((s) => typeof s.description !== "string" || !s.description).map((s) => s.name);
    assert.deepEqual(unparsed, [], `${label}: ${capability} has skills whose frontmatter the kernel can't parse`);
  }

  const reviewer = preview("code-reviewer");
  assert.deepEqual(modules(reviewer), ["oats.code-review"], "the reviewer composes only its own role");
  assert.deepEqual(skills(reviewer), ["adversarial-review", "review-dev-docs", "security-review", "simplification-review"]);
  assert.equal(reviewer.launch.effective.harness, "codex", "code-reviewer launches on Codex by default");
  assert.equal(reviewer.launch.effective.model, "gpt-6-astra", "code-reviewer launches on Astra by default");
  assert.equal(reviewer.launch.from, "soul", "the reviewer's launch comes from its soul");
}

test("the template's souls load in real OATS kernels (the floor and main)", { timeout: 420_000 }, async (t) => {
  await t.test(`OATS ${FLOOR}`, { timeout: 240_000 }, (tt) => checkKernel(tt, "FLOOR", `v${FLOOR}`));
  await t.test("OATS main", { timeout: 240_000 }, (tt) => checkKernel(tt, "MAIN", "main"));
});
