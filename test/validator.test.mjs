import assert from "node:assert/strict";
import { cpSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { spawnSync } from "node:child_process";
import test from "node:test";
import { fileURLToPath } from "node:url";

const REPO = resolve(fileURLToPath(new URL("..", import.meta.url)));
const VALIDATOR = join(REPO, "scripts", "validate-template.mjs");

function runValidator(cwd = REPO) {
  return spawnSync(process.execPath, [join(cwd, "scripts", "validate-template.mjs")], { cwd, encoding: "utf8" });
}

function fixture(t) {
  const dir = mkdtempSync(join(tmpdir(), "oats-engineering-validator-"));
  t.after(() => rmSync(dir, { recursive: true, force: true }));
  cpSync(REPO, dir, {
    recursive: true,
    filter: (src) => !src.includes(`${REPO}/.git`) && !src.includes(`${REPO}/node_modules`),
  });
  return dir;
}

function mutate(t, relativePath, fn) {
  const dir = fixture(t);
  const path = join(dir, relativePath);
  writeFileSync(path, fn(readFileSync(path, "utf8")));
  return runValidator(dir);
}

test("validator accepts the real template", () => {
  const result = runValidator();
  assert.equal(result.status, 0, result.stderr);
  assert.match(result.stdout, /^Validated the engineering template at template-v3\.1\.3: 7 capabilities, 34 skills, 5 souls, 25 adapt markers/);
});

test("validator rejects capability manifest schema violations", (t) => {
  const result = mutate(t, "capabilities/developer/oats.json", (text) => text.replace('"oats.developer"', '"Developer"'));
  assert.equal(result.status, 1);
  assert.match(result.stderr, /capabilities\/developer\/oats\.json\/capability/);
});

test("validator rejects helperInjection and team targeting in capability manifests", (t) => {
  const result = mutate(t, "capabilities/developer/oats.json", (text) => text.replace('"requires": []', '"team": "engineering",\n  "helperInjection": { "version": 1, "mode": "omit" },\n  "requires": []'));
  assert.equal(result.status, 1);
  assert.match(result.stderr, /helperInjection/);
  assert.match(result.stderr, /\.team/);
});

test("validator rejects skill frontmatter name mismatch and missing descriptions", (t) => {
  const result = mutate(t, "capabilities/build/skills/worktrees/SKILL.md", (text) => text.replace("name: worktrees", "name: other-name").replace(/description: .+\n/, ""));
  assert.equal(result.status, 1);
  assert.match(result.stderr, /frontmatter name must equal directory/);
  assert.match(result.stderr, /frontmatter must include a description/);
});

test("validator rejects duplicate skill names", (t) => {
  const dir = fixture(t);
  const target = join(dir, "capabilities/code-review/skills/worktrees");
  mkdirSync(target, { recursive: true });
  writeFileSync(join(target, "SKILL.md"), readFileSync(join(dir, "capabilities/build/skills/worktrees/SKILL.md")));
  const manifest = join(dir, "capabilities/code-review/oats.json");
  writeFileSync(manifest, readFileSync(manifest, "utf8").replace('"skills/simplification-review"', '"skills/simplification-review",\n    "skills/worktrees"'));
  const result = runValidator(dir);
  assert.equal(result.status, 1);
  assert.match(result.stderr, /duplicate skill name worktrees/);
});

test("validator rejects unknown slash skill references", (t) => {
  const result = mutate(t, "capabilities/developer/injects/developer.md", (text) => text.replace("/understand-the-spec", "/missing-skill"));
  assert.equal(result.status, 1);
  assert.match(result.stderr, /\/missing-skill names no skill of this template/);
});

test("validator rejects a reference to a skill template-v2.0.0 removed", (t) => {
  const result = mutate(t, "capabilities/engineering-expert/skills/hand-off/SKILL.md", (text) => `${text}\nSee \`/land-your-prs\`.\n`);
  assert.equal(result.status, 1);
  assert.match(result.stderr, /\/land-your-prs names no skill of this template/);
});

test("validator rejects an inject that doesn't name one of its capability's skills", (t) => {
  const result = mutate(t, "capabilities/maintainer/injects/maintainer.md", (text) => text.replaceAll("`/keep-it-clean`", "the cleanliness skill"));
  assert.equal(result.status, 1);
  assert.match(result.stderr, /inject must name its skill \/keep-it-clean/);
});

test("validator rejects bare skill names in code spans", (t) => {
  const result = mutate(t, "capabilities/developer/injects/developer.md", (text) => text.replace("/understand-the-spec", "understand-the-spec"));
  assert.equal(result.status, 1);
  assert.match(result.stderr, /must be written as \/understand-the-spec/);
});

test("validator rejects invalid souls", (t) => {
  const result = mutate(t, "souls/code-reviewer/soul.yaml", (text) => text.replace("schemaVersion: 2", "schemaVersion: 1"));
  assert.equal(result.status, 1);
  assert.match(result.stderr, /soul\.yaml\/schemaVersion/);
});

test("validator rejects broken docs links", (t) => {
  const result = mutate(t, "README.md", (text) => text.replace("docs/how-the-work-flows.md", "docs/missing.md"));
  assert.equal(result.status, 1);
  assert.match(result.stderr, /broken internal link docs\/missing\.md/);
});

test("validator rejects template-local ids in docs that are not defined", (t) => {
  const result = mutate(t, "README.md", (text) => text.replaceAll("oats.developer", "oats.developr"));
  assert.equal(result.status, 1);
  assert.match(result.stderr, /template-local id oats\.developr is named in docs but not defined/);
});

test("validator rejects a skill that commands the messaging layer", (t) => {
  const result = mutate(t, "capabilities/build/skills/worktrees/SKILL.md", (text) => `${text}\nTell your expert with \`aw mail send\`.\n`);
  assert.equal(result.status, 1);
  assert.match(result.stderr, /build\/skills\/worktrees\/SKILL\.md:\d+: commands the aweb CLI/);
});

test("validator rejects an inject that commands the knowledge layer", (t) => {
  const result = mutate(t, "capabilities/engineering-expert/injects/expert.md", (text) => `${text}\nYou are finished when \`oats okf status\` says so.\n`);
  assert.equal(result.status, 1);
  assert.match(result.stderr, /engineering-expert\/injects\/expert\.md:\d+: commands the OKF layer/);
});

test("validator rejects a layer dependency in requires", (t) => {
  const result = mutate(t, "capabilities/developer/oats.json", (text) => text.replace('"requires": []', '"requires": [{ "capability": "oats.aweb", "why": "messaging" }]'));
  assert.equal(result.status, 1);
  assert.match(result.stderr, /capabilities\/developer\/oats\.json\/requires\/0/);
});

test("validator rejects a reviewer whose report needs a messaging layer", (t) => {
  const result = mutate(t, "capabilities/code-review/injects/reviewer.md", (text) => text.replace("otherwise print it as your final message", "and wait for the reply"));
  assert.equal(result.status, 1);
  assert.match(result.stderr, /reviewer\.md: the report must fall back to the reviewer's own session/);
});

test("validator rejects a malformed adapt marker", (t) => {
  const result = mutate(t, "capabilities/build/skills/execution-strategy/SKILL.md", (text) => text.replace("<!-- adapt: How many", "<!-- adapt How many"));
  assert.equal(result.status, 1);
  assert.match(result.stderr, /execution-strategy\/SKILL\.md:\d+: malformed adapt marker/);
});

test("validator rejects an adapt marker ADAPTING.md doesn't list", (t) => {
  const result = mutate(t, "capabilities/build/skills/worktrees/SKILL.md", (text) => `${text}\n<!-- adapt: Where do this organisation's worktrees live? -->\n`);
  assert.equal(result.status, 1);
  assert.match(result.stderr, /worktrees\/SKILL\.md: adapt marker "Where do this organisation's worktrees live\?" is not listed in ADAPTING\.md/);
});

test("validator rejects ADAPTING.md listing a marker that is gone", (t) => {
  const result = mutate(t, "capabilities/maintainer/injects/maintainer.md", (text) => text.replace(/<!-- adapt: Does the organisation run a support desk[^\n]*\n/, ""));
  assert.equal(result.status, 1);
  assert.match(result.stderr, /ADAPTING\.md: lists "Does the organisation run a support desk that hands tickets to a maintainer\?" for capabilities\/maintainer\/injects\/maintainer\.md, which has no such adapt marker/);
});

test("validator rejects an adapt marker outside a capability", (t) => {
  const result = mutate(t, "souls/developer/AGENTS.md", (text) => `${text}\n<!-- adapt: Which repositories does it build in? -->\n`);
  assert.equal(result.status, 1);
  assert.match(result.stderr, /souls\/developer\/AGENTS\.md:\d+: adapt markers belong in a capability's injects and skills/);
});

test("validator rejects a capability that doesn't record its template release", (t) => {
  const result = mutate(t, "capabilities/developer/oats.json", (text) => text.replace(" Copied from the engineering template, template-v3.1.3.", ""));
  assert.equal(result.status, 1);
  assert.match(result.stderr, /capabilities\/developer\/oats\.json\.description: must end with "Copied from the engineering template, template-v3\.1\.3\."/);
});

test("validator rejects a capability whose version isn't the template release", (t) => {
  const result = mutate(t, "capabilities/developer/oats.json", (text) => text.replace('"version": "3.1.3"', '"version": "1.18.0"'));
  assert.equal(result.status, 1);
  assert.match(result.stderr, /capabilities\/developer\/oats\.json\.version: must be the template release 3\.1\.3/);
});

test("validator rejects a soul composing a capability the template lacks", (t) => {
  const result = mutate(t, "souls/developer/soul.yaml", (text) => text.replace("oats.developer: { from: here }", "oats.developr: { from: here }"));
  assert.equal(result.status, 1);
  assert.match(result.stderr, /souls\/developer\/soul\.yaml: from: here names oats\.developr, which is not a capability of this template/);
});

test("validator rejects a soul value YAML would not parse", (t) => {
  const result = mutate(t, "souls/code-reviewer/soul.yaml", (text) => text.replace("proves its findings and reports them with what it checked, as", "proves its findings and reports: as"));
  assert.equal(result.status, 1);
  assert.match(result.stderr, /souls\/code-reviewer\/soul\.yaml:3: a plain YAML value can't contain ": "/);
});

test("validator rejects a skill description YAML would not parse", (t) => {
  const result = mutate(t, "capabilities/build/skills/worktrees/SKILL.md", (text) => text.replace("When and how to use extra worktrees", "Extra worktrees: when and how to use them"));
  assert.equal(result.status, 1);
  assert.match(result.stderr, /capabilities\/build\/skills\/worktrees\/SKILL\.md:3: a plain YAML value can't contain ": "/);
});

test("validator holds skill frontmatter to plain one-line values", (t) => {
  const file = "capabilities/build/skills/worktrees/SKILL.md";
  const cases = [
    ['description: "When', /SKILL\.md:3: a frontmatter value can't start with "/],
    ["description: {text: When", /SKILL\.md:3: a frontmatter value can't start with \{/],
    ["description: 'Read the developer's worktree: when", /SKILL\.md:3: a frontmatter value can't start with '/],
    ["description: {text: [open} When", /SKILL\.md:3: a frontmatter value can't start with \{/],
    ["description: >\n  When", /SKILL\.md:3: a frontmatter value can't start with >/],
    ["description: Extra trees #1 When", /SKILL\.md:3: a plain YAML value can't contain " #"/],
    ["description:When", /SKILL\.md:3: a frontmatter line must be `key: value` on one line, with a space after the colon/],
    ["broken\ndescription: When", /SKILL\.md:3: a frontmatter line must be `key: value` on one line/],
    ["name: other\ndescription: When", /SKILL\.md:3: frontmatter key name appears twice/],
    ["description: 1. When", /SKILL\.md:3: a frontmatter value must read as text/],
  ];
  for (const [replacement, message] of cases) {
    const result = mutate(t, file, (text) => text.replace("description: When", replacement));
    assert.equal(result.status, 1, replacement);
    assert.match(result.stderr, message, replacement);
  }
});

test("validator rejects a skill reference a composing soul can't load", (t) => {
  const result = mutate(t, "capabilities/engineering-expert/injects/expert.md", (text) => `${text}\nSee \`/understand-the-spec\`.\n`);
  assert.equal(result.status, 1);
  assert.match(result.stderr, /expert\.md: skill reference \/understand-the-spec is not a skill every soul composing oats\.engineering-expert has \(engineering-expert\)/);
});

test("validator rejects a build skill naming a skill only the developer has", (t) => {
  // oats.build is composed by the developer and the lead alike, so its skills name only what both load.
  const result = mutate(t, "capabilities/build/skills/test-first/SKILL.md", (text) => `${text}\nSee \`/understand-the-spec\`.\n`);
  assert.equal(result.status, 1);
  assert.match(result.stderr, /test-first\/SKILL\.md: skill reference \/understand-the-spec is not a skill every soul composing oats\.build has \(developer, engineering-expert\)/);
});

test("validator rejects a forge CLI command in a skill", (t) => {
  const result = mutate(t, "capabilities/maintainer/skills/pr-review/SKILL.md", (text) => `${text}\nRun \`gh pr merge 1\`.\n`);
  assert.equal(result.status, 1);
  assert.match(result.stderr, /pr-review\/SKILL\.md:\d+: commands the GitHub CLI/);
});

test("validator reads a skill's references too", (t) => {
  const result = mutate(t, "capabilities/maintainer/skills/pr-review/references/reviewed-delivery.md", (text) => `${text}\nMerge it with \`gh pr merge --squash\`, then load \`/land-your-prs\`.\n`);
  assert.equal(result.status, 1);
  assert.match(result.stderr, /reviewed-delivery\.md: skill reference \/land-your-prs names no skill of this template/);
  assert.match(result.stderr, /reviewed-delivery\.md:\d+: commands the GitHub CLI/);
});

test("validator rejects docs and souls naming a skill or soul the template lacks", (t) => {
  const dir = fixture(t);
  const append = (rel, extra) => writeFileSync(join(dir, rel), readFileSync(join(dir, rel), "utf8") + extra);
  append("souls/developer/AGENTS.md", "\nLoad `/land-your-prs` first.\n");
  append("README.md", "\nThen load `/land-your-prs`.\n");
  const adapting = join(dir, "ADAPTING.md");
  writeFileSync(adapting, readFileSync(adapting, "utf8").replace("the skill `find-the-maintainer`", "the skill `find-the-maintainers`"));
  const roster = join(dir, "souls/dispatcher/AGENTS.md");
  writeFileSync(roster, readFileSync(roster, "utf8").replace("- `engineering-expert`:", "- `backend-expert`:"));
  const result = runValidator(dir);
  assert.equal(result.status, 1);
  assert.match(result.stderr, /souls\/developer\/AGENTS\.md: skill reference \/land-your-prs names no skill/);
  assert.match(result.stderr, /README\.md: skill reference \/land-your-prs names no skill/);
  assert.match(result.stderr, /ADAPTING\.md: names the skill find-the-maintainers, which this template lacks/);
  assert.match(result.stderr, /souls\/dispatcher\/AGENTS\.md: lists the soul backend-expert, which this template lacks/);
});

test("validator rejects an adapt marker in a soul's yaml", (t) => {
  const result = mutate(t, "souls/developer/soul.yaml", (text) => `${text}# <!-- adapt: Which repository does it build in? -->\n`);
  assert.equal(result.status, 1);
  assert.match(result.stderr, /souls\/developer\/soul\.yaml:\d+: adapt markers belong in a capability's injects and skills/);
});

test("validator rejects a skill directory its oats.json doesn't list", (t) => {
  const result = mutate(t, "capabilities/build/oats.json", (text) => text.replace('    "skills/prove-it-works",\n', ""));
  assert.equal(result.status, 1);
  assert.match(result.stderr, /capabilities\/build\/skills\/prove-it-works: skill directory is not listed/);
});
