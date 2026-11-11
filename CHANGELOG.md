# Changelog

## Unreleased

## template-v3.1.1 - 2026-11-11

A patch release: one sentence. After a change to the landing rules, a lead told only its
developers. A standing specialist (template-v3.1.0) stays for the whole effort on the rules
it was spawned with, so a change must reach it too. For a copy of template-v3.1.0, port the
sentence.

**`oats.landing-rules`**
- inject, fixed: "each lead tells its running children (its developers and its helpers, a
  standing specialist included)". Port: that sentence of the opening paragraph.

## template-v3.1.0 - 2026-11-11

A minor release: the lead's texts say that it leads the whole effort and how it delegates.
They leaned toward the lead keeping the work ("see it through on this instance", "build it
yourself by default") and gave every helper one task and one answer. Now: the lead leads
and decides who does each piece, with no default; the lead's own briefing carries the test
for what an effort is; a helper is usually an expert, and a developer or a code reviewer
only for a task about a named piece of code; a standing specialist stays for the effort;
and exploration is a task once it has bounds. For a copy of template-v3.0.2, port the
passages below.

**`oats.engineering-expert`**
- inject, changed: the heading and opening paragraph ("you lead one effort"; leading is not
  doing it all yourself). Port: both.
- inject, changed: "Who builds each spec" no longer says "Build it yourself by default":
  the cases decide, and neither is the default. Port: that line.
- inject, changed: the helpers bullet ("every task you give one is closed"; each task
  carries its bounds, what "done" means and what to send back). Port: the bullet.
- inject, added: two bullets after it, "a helper is usually an expert" and "keep a standing
  specialist". Port: both.
- inject, changed: the bullet on another area's work now opens with what an effort is ("know
  where your effort ends"). Port: the bullet.
- `/plan-and-spec`, changed: "Who builds it" opens with both costs, a developer's and
  building it yourself, and says neither is the default; the description says the same.
  Port: the description and that paragraph.
- `/send-a-helper`, changed: the description and the opening (every task closed; most
  helpers stay for one task, a standing specialist for the effort; "an effort too large for
  one context" under splitting context). Port: both.
- `/send-a-helper`, changed: "A closed question, or it isn't a probe yet" ends with
  "Exploration with bounds is a closed task too" and its four parts, in place of the
  research probe. Port: from "Then send one probe per angle." to the end of the section.
- `/send-a-helper`, added: "For how long" under "Specialisation", and the section "A
  standing specialist" with its `adapt` marker (how many a lead may keep). Port: both.
- `/send-a-helper`, changed: "Who does it" chooses the soul by what the task needs: an
  expert for knowledge or judgment (the usual helper), a developer for a named piece of
  code, the code reviewer for an adversarial read of a named piece of code. An adversarial
  read of a plan or a design now goes to an expert, not to the code reviewer. Port: from
  "**An OATS child,**" to the paragraph that ends "it goes to an expert."
- `/send-a-helper`, changed: "The brief" (it reports once for the task; a standing
  specialist's first brief) and "Its answer" (when a standing specialist is retired). Port:
  the last bullet of "The brief" with the paragraph after it, and the done-line bullet.
- `/land-on-agreement`, changed: "Retire what's finished" says when a standing specialist
  is retired. Port: the helpers bullet.
- inject, added: "Sent as a helper" ends with the standing specialist's side: it hands each
  task back, stays between tasks, and sends its done line only when its parent says its area
  is done. Port: from "A standing specialist (your first brief" to the end of the paragraph.

**`oats.code-review`**
- inject and the capability's description, changed: as an expert's probe, the reviewer reads
  a named piece of code that is not under review (a spike, a design written as code). A
  plan or a design in prose goes to an expert. Port: the probe sentence in each, and the
  inject's sentence after it.

**`oats.dispatcher`**
- inject and `/dispatch`, changed: "One effort, one lead, from start to done", not "one
  instance"; the lead brings in its own developers and helpers. Port: that sentence in each.

**The repository**
- `README.md` and `ADAPTING.md` (principle 2): the expert leads one effort, every task it
  gives a helper is closed, a helper is usually an expert, and a standing specialist stays
  for the effort.
- `docs/how-the-work-flows.md`: the walkthrough's probe is a fresh instance of the expert's
  own soul, not a developer.

## template-v3.0.2 - 2026-11-11

A patch release for oats.okf 6.0, which removes the knowledge harvester: an instance
proposes its own knowledge, as a pull request on the knowledge base, and the knowledge
layer's maintainer gates every merge. Seven texts still launched, waited for or named the
harvester. They now say the knowledge checkpoint and its outcome, naming no mechanism, and
where they name done lines they name oats.okf 6.0's. For a copy of template-v3.0.1, port the
lines below. The old lines map to the new: "done, harvested: <harvester>" is "done,
proposed: <PR URLs>", "done, no harvest duty" is "done, no duty to propose", "done, harvest
pending: <proposal>" is "done, proposal pending: <slug and why>", and "done, nothing to
propose: <reason>" is new, for a checkpoint that found nothing worth proposing. A copy whose
knowledge layer is not oats.okf words the lines as its layer does.

**`oats.code-review`**
- inject, changed: the reviewer's done line is one of "done, proposed: <PR URLs>", "done,
  nothing to propose: <reason>", "done, no duty to propose" or "done, proposal pending:
  <slug and why>". Port: that sentence.

**`oats.build`**
- `/run-the-review-loop`, changed: the author retires a reviewer once it replies with one of
  the three finished lines (after "done, proposal pending", it waits for one of them). At
  Finish, the knowledge condition is the final knowledge checkpoint, run and its outcome
  recorded as the knowledge layer says; a proposal it opened at any knowledge checkpoint is
  in the knowledge layer's hands, not one of the PRs that must land, so nobody waits for it.
  Steps 3 and 4 run that checkpoint and send one of the four lines. Port: the retire
  sentence, that Finish condition and steps 3 and 4.

**`oats.engineering-expert`**
- `/land-on-agreement`, "Retire what's finished", changed: the same knowledge condition; the
  done report says the final knowledge checkpoint's outcome in one of four lines, three of
  them finished and "done, proposal pending: <slug and why>" not finished (retire nothing
  yet; it reports again with one of the three); and a retired one's name is never reused
  because the records it left and the provenance of the knowledge it proposed still name it.
  Port: those three bullets.

**`oats.maintainer`**
- inject, changed: "Harvest at a maintainer's checkpoints" becomes "Run your knowledge
  checkpoints as a maintainer", following your knowledge layer's checkpoint procedure. Port:
  that paragraph.
- `/launch-work`, "Retire what's finished", changed: as `/land-on-agreement`. Port: the same
  three bullets.

**The repository**
- `docs/how-the-work-flows.md`: the walkthrough's developer sends "done, no duty to
  propose", and the expert runs its final knowledge checkpoint.

## template-v3.0.1 - 2026-11-10

A patch release: five lines still said the old rule, that a fix goes to "a lead and its
developer". Under principle 3 the lead decides who builds it. For a copy of
template-v3.0.0, port the five lines.

**`oats.landing-rules`**
- inject, fixed: release prep's "Any fix goes to a lead, which decides who builds it."
  Port: that sentence.

**`oats.maintainer`**
- `/pr-review`, `/cross-review-peer`, `/plan-release` and `/ship-release`, fixed: a fix a
  maintainer finds (in its own release prep, in a release, in a release step) goes to a
  lead, which decides who builds it, not to "a lead and its developer". Port: that phrase
  in each.

**The repository**
- `docs/how-the-work-flows.md`: the walkthrough's review loop says the developer is the
  change's author, and the expert runs no rounds for a developer's work.

## template-v3.0.0 - 2026-11-10

A major release. Principle 3 changes: the lead decides who builds each spec, itself or a
developer, whoever builds it runs the review loop, and nothing lands without a fresh
review. Principles 1 and 2 change with it: an extra agent earns its place by splitting
context, testing, specialisation or parallel work, and a lead's children are helpers, each
with one closed task. Nine build skills move into a new capability, `oats.build`, which the
developer and the expert both compose, and `/send-a-probe` becomes `/send-a-helper`. A
helper's brief is a closed task with bounds and a required output, a reviewer's verdict
lists what it checked, a developer splits its work by context, not by kind of work, a lead
for a related effort is a sibling, and every inject says, in capitals, to keep loading the
skill for each step. For a copy of a template-v2.x release, each line says what to port;
move and rename the skills first.

### Principle 3: whoever builds a change iterates with fresh reviewers

ADAPTING.md, section 2, principle 3, changed. Was: "The developer iterates with fresh
reviewers, not the experts": a developer built every change, and a lead only a one-line
docs fix, with no review loop. Now: whoever builds a change iterates with fresh reviewers,
and nothing lands without a fresh review. The lead decides who builds each spec, itself or
a developer. The author runs the review loop, a fresh reviewer (a new `code-reviewer`
instance, its OATS child) on a different model where one is available, until a round finds
nothing to fix: at least one round, always. No author reviews its own work. A lead still
never runs review rounds or spawns reviewers for a developer's work, and verifies a
developer's converged branch once. A one-line docs fix skips the local loop, not the
review; only a maintainer's release prep needs no review round. Principle 10 says a
reviewer retires once its round is closed.

### What a template-v2.x copy must move

ADAPTING.md, section 6, "A copy at template-v2.2.0 or earlier takes up `oats.build`", has
the steps:
- check that `oats.build` is not already an id in the workspace (section 1);
- move the nine skill directories from your developer capability's `skills/` to
  `capabilities/build/skills/`: `execution-strategy`, `worktrees`, `test-first`,
  `diagnose-before-fixing`, `design-while-writing`, `prove-it-works`,
  `run-the-review-loop`, `work-the-reviews` and `maintain-dev-docs`, keeping your
  adaptations, and drop them from its `oats.json`;
- add `capabilities/build/oats.json`, with your copy's release sentence;
- add `oats.build: { from: here }` (or `from: <repo key>`) to the developer soul and to each
  expert soul;
- repoint whatever in the copy names those skills by their old capability or path: its
  notices file, its adaptation notes, its tests, its docs.

And rename one skill: move `capabilities/engineering-expert/skills/send-a-probe/` to
`send-a-helper/`, set its frontmatter `name: send-a-helper`, update its entry in the
expert's `oats.json`, and change every `/send-a-probe` in the copy (the injects, the skills,
the docs, any test) to `/send-a-helper`. Then port the changes below.

### Who builds, and the lead as author

**`oats.engineering-expert`**
- inject, changed: the skill list says who builds each spec (`/plan-and-spec`, "Who builds
  it"), and what to load when a developer builds it or when the lead builds it itself (the
  build skills, then `/run-the-review-loop` and `/work-the-reviews`); "the developer
  iterates with fresh reviewers, not you" becomes "whoever builds a change iterates with
  fresh reviewers": the lead decides who builds, the author runs its loop, the lead is
  never its own reviewer, and still runs no rounds for a developer's work; the lead opens
  and works the PR of a change it built; "Your loop" decides who builds each spec. Two new
  paragraphs give a lead that builds the developer's rules: "The quality floor" and "On the
  hosts you run on" (the shared-host limits, unread code, read-only customer and
  production hosts, no secret in a message, report, log or commit), each with the
  developer's adapt question, so a copy answers it in both places.
  Port: replace those bullets and "Your loop", and add the two paragraphs with your
  developer inject's answers.
- `/plan-and-spec`, changed: a new section 5, "Who builds it". An extra agent costs a
  context, a hand-off and several times the tokens; a developer earns its place in three
  cases (context, parallel, specialisation in a lane of its own), and otherwise the
  lead builds it; one coupled change is never split; the choice and its case are recorded,
  one line per spec. When the lead builds: a short spec with pinned acceptance tests, an
  extra worktree of its own (`oats worktree add … --base <its default branch> --repo
  <clone>`, whose start the lead checks against `git ls-remote` after it runs), the build
  skills as a developer follows them ("your expert" is the lead, with no hand-back and no
  `VERIFIED` note), a fresh reviewer each round that is never the lead, and the clean round
  as its green light. A large feature always goes to developers, one per surface, and a
  new adapt question asks what counts as one (default: more than one surface, or sustained
  building and testing). "Check the plan" is now section 6, and its builder line follows.
  The description says who builds. Port: add the section, answer the question (ADAPTING.md,
  section 3), and replace the builder line.
- `/coordinate-developers`, changed: "Launch" starts with when a developer builds a spec
  (the three cases), and never splits one coupled change across agents. The description
  says so. Port: those two bullets.
- `/findings-and-blocks`, changed: a small fix in your area is its own spec, built by
  whoever `/plan-and-spec` names, usually the lead; a one-line docs fix skips the local
  loop, not the review. Port: step 1 and the description.
- `/land-on-agreement`, changed: section 1 covers a developer's work (your verification) and
  a change you built (your own clean round is the green light, with no `VERIFIED` note; you
  open and work the PR); a one-line docs fix lands on CI green and one fresh review; "the
  author" rebases; your note is an agreement only on a developer's work. Port: section 1,
  the lines in sections 2, 5 and 6, and the description.
- `oats.json`: the description. Port: replace it.

**`oats.landing-rules`**
- "What merges a change", changed: the lead's verification note is an agreement for a
  developer's work only; a change its lead built merges on CI green and the review at that
  head. When a review carries to a new head: with no re-read through an unchanged rebase or
  update; through the same reviewer's re-read of a delta that only fixes a minor, takes a
  nit or fixes CI with no change in behaviour; otherwise not, a fix to a blocker or a major
  getting a fresh reviewer. The reviewer's severity decides.
- "The green light to open a PR", changed: for a change its lead built, the round that found
  nothing to fix.
- "Who builds a change", changed: the lead decides, by the three cases; whoever builds it
  iterates with fresh reviewers, never reading its own work. The adapt question "May a
  lead make a one-line docs fix itself, with no review loop?" becomes "May a change land
  with no fresh review (a typo, a broken link)?", default no: a one-line docs fix merges on
  CI green and one fresh review at its head.
- "A PR with no lead here": release prep is unchanged; it no longer compares itself to a
  lead's one-line docs fix.
- `oats.json`: the description.
  Port: replace those paragraphs, keeping your answers; answer the replaced question again
  (ADAPTING.md, section 3).

**`oats.maintainer`**
- `/pr-review`, changed: a call, the evidence read and the merge's needs ask for the lead's
  verification note only for a developer's work or a helper's scoped piece; a change its
  lead built has none, and the clean round of its review loop stands in its place.
  `references/reviewed-delivery.md` says the same in its record. Port: those lines.
- `/cross-review-peer`, changed: a new lane's default review is a clean round of the
  author's review loop, and the lead's verification note is for a developer's work.
  Port: "A lane's arrangement".

### Helpers, closed briefs and sibling leads

ADAPTING.md, section 2: principle 1 names the four reasons an extra agent earns its place
(splitting context, testing, specialisation, parallel work); principle 2 says a lead's
children are helpers, each with one closed task (a question, a spec, or a scoped piece of
the effort that needs another soul's capabilities), never co-planners, that another area's
step goes to a helper and never to a second lead, and that a related effort's lead is a
sibling; principle 10 retires a helper with a scoped piece once its work has landed.

**`oats.engineering-expert`**
- `/send-a-helper`, renamed from `/send-a-probe` and changed. It opens with the four
  reasons to start a child and the three kinds of task. "Test before you build on it" puts
  the tag's probe rules up front: the riskiest assumption first, one probe per competing
  approach or cause, and a plan on an untested theory or an approach chosen by argument
  isn't ready. New sections: "A closed question, or it isn't a probe yet" (a question is
  closed when its possible answers can be written before it is sent; an open one the lead
  frames first, then one probe per angle; framing that needs sources is research, one probe
  that returns the closed questions); "Specialisation" (when lanes are clearly separate,
  what a specialist brings, what is not a reason, routing is the lead's); "A scoped piece
  of work" (another soul as the lead's child, a closed brief with a checkable "done" and
  the interface first, questions to the lead and never its person, what it builds reviewed
  and verified once); "Another area's work in your effort" (it stays in the effort, never a
  second lead; the test is the effort's "done"). "The brief" gains the helper's bounds and
  what it sends back, in order (the verdict in a line, evidence you can open, what it
  didn't check, its recommendation), and keeps the rule that third-party text goes in by
  its link or id, never as directives. "What it is worth" says when a helper earns its
  place; "Who does it" carries a new adapt question on the organisation's specialist souls;
  its spawn recipe says what `--same-work` does and doesn't; "Its answer" checks a claim
  against what the helper points to, not its summary. Every probe rule is unchanged:
  already known, the cap of 4, no self-check, a different model. Port: rename the skill,
  then replace its text, keeping your answers to its adapt questions and answering the
  new one (ADAPTING.md, section 3).
- `/hand-off`, changed: "To whom" spawns helpers and developers with `--same-work`, keeps
  another area's step of the effort in the effort, and starts a lead for another effort by
  whether it is related: a continuation, a follow-on or a discovery that bears on the
  effort gets a sibling (`--relation sibling --relative-to "$OATS_INSTANCE"`, which takes
  no `--same-work`), spawned only by a root lead, a maintainer-launched lead asking its
  maintainer instead; an unrelated finding stays `--relation unrelated`. Either way the new
  effort has its own record, linked both ways, and the person is told the new lead's exact
  name at once. Port: "To whom", step 2, and the description.
- `/findings-and-blocks`, changed: a finding's owner is a sibling where the finding bears on
  the effort, otherwise independent, and the person is told its name. Port: step 2.
- `/land-on-agreement`, changed: "Retire what's finished" retires a helper with a scoped
  piece once its work has landed. Port: that bullet.
- inject, changed: children are helpers with one closed task each, their bounds and the
  output the lead needs back, an open question framed first; a bullet of its own, "test
  before you build on it"; another area's step stays in the effort, and a related effort's
  lead is a sibling whose name the person is told; "Sent as a helper" replaces "Sent as a
  probe", for a question or a scoped piece. A helper's scoped piece hands its clean round
  back to the parent lead and opens no PR until the parent has verified it, as a
  developer's work; then the helper opens the PR and works its reviews. `/plan-and-spec`,
  `/send-a-helper`, `/land-on-agreement` and the landing rules' green light say the same.
  Port: those bullets and lines.
- `/plan-and-spec`, `/coordinate-developers`: the third case is "specialisation" (a lane of
  its own: an environment, tools, skills or knowledge the lead lacks, or instructions that
  would conflict with its own). Port: the case's line.

**`oats.code-review`**
- inject: "An expert may also spawn you as a probe" is unchanged; a probe is a helper with a
  question.

### `--same-work` on every child

Every recipe that spawns a child carries `--same-work` (a helper, a developer, each round's
reviewer), and says in one line what it does (it records that the child does its parent's
work, and the person's sidebar draws the line) and what it doesn't (it shares no work tree:
a developer keeps its own, and only a reviewer is attached to its author's tree, by
`--work attached`). A sibling can't carry it: the kernel refuses the flag where no parent
is recorded. In `/send-a-helper`, `/hand-off`, `/coordinate-developers`,
`/run-the-review-loop`, and the expert's and the developer's injects. Port: those lines.

### No standing maintainer: the lead starts one, and says what it is

**`oats.engineering-expert`**
- `/find-the-maintainer`, changed: step 1 finds your person and the lane, and calls or
  starts no maintainer before both are known; where your person has no active maintainer in
  the lane, you start it yourself, without asking, and right after tell your person in two
  or three plain sentences what a maintainer is, what it is for, and its exact name. A new
  adapt question carries those sentences. The guards are unchanged: never a second while
  one is active, even a stopped one. Port: steps 1 and 3, and answer the new question.
- inject, changed: the `/find-the-maintainer` line moves beside the who-builds line and says
  the same in one line. Port: that line.

**`oats.maintainer`**
- inject, changed: a lead may have started you; introduce yourself to that person once, at
  your first intake. Port: that bullet, under "Your role".

### Loading skills as the work goes on

Each role's inject (the expert's, the developer's, the reviewer's, the maintainer's and the
dispatcher's) opens with an `IMPORTANT:` line in capital letters: load the skill for each
step, and keep loading it as the work goes on, each time the step comes round, not once at
the start; reload it after every compaction. Each lists its steps with their skills: the
expert's gains the build skills, under "when you build a spec yourself"; the reviewer's
names `/adversarial-review` for a round and for a delta; the maintainer's list is now "Your
steps". The expert's inject has a second capital-letters line beside its who-builds line:
load `/send-a-helper` before deciding whether to start a child and before briefing one, and
send a helper when a reason holds. The developer's has one for its own children
(`/execution-strategy` before fanning out, `/run-the-review-loop` before a reviewer), with
the reasons in words; the maintainer's `/launch-work` line says it starts leads, not
helpers, and `/launch-work` says a lead drives its developers and helpers and brings in
what else it needs by a helper or a hand-off. Port: the opening line of each inject, those
lines, and those two in `/launch-work`.

### Checked verdicts, and when a reviewer is fresh

**`oats.code-review`**
- `/adversarial-review`, changed: section 4 adds a "Checked" section to every report, an
  `APPROVE` included: one line per "done when" item and pinned acceptance test (read, with
  the file and lines, or ran, with the command and its result), then the attacks that found
  nothing. An approval that lists no checks is not a review. Section 5: the reviewer's
  severity decides what comes next; a minor's fix, a nit taken or a CI fix that changes no
  behaviour comes back to the same reviewer as a delta, which updates its verdict and its
  Checked section. Port: both.
- inject, changed: "the developer" is "the author who spawned you (a developer, or a lead
  building its own spec)"; the probe paragraph's "never of code under review" has one
  exception, code the lead itself built; "Your round" step 3 requires the Checked section,
  and step 4 takes a minor delta back. Port: replace those lines.
- `oats.json` and the `code-reviewer` soul (its description and `AGENTS.md`): say "author".
  Port: the descriptions.

**`oats.engineering-expert`**
- `/verify-developer-work`, changed: section 0 needs the final round's Checked section in
  the hand-back; without one, or with a "done when" item missing from it, the branch goes
  back. Port: section 0.

### The build skills, `oats.build`

**`oats.build`**, new, skills only (no inject): composed by the developer and the expert.
- `/execution-strategy`, moved and changed: one context by default; a path earns an agent
  when it is independent (no shared files, no shared reasoning) and worth a fresh context,
  or when breadth is the point; split by context, never by kind of work, a path carrying
  its own tests; "When in doubt, do it yourself" replaces "When in doubt between the first
  two, take the workflow", and "Lean toward parallelism" goes. The cap, the opt-in rules
  and "You stay accountable" are unchanged. The description follows. Port: the opening,
  "Choose one of three", step 1 of "Shape the workflow" and "Re-decide".
- `/run-the-review-loop`, moved and changed: the author's loop, a developer's or a lead's
  for its own spec, never its own reviewer; a round counts as finding nothing to fix only
  with a Checked section covering every "done when" item (else that reviewer completes it,
  or a fresh round runs); who reads a fix is the reviewer's severity's call: fresh on the
  whole change after a blocker's or a major's fix or any behaviour, contract or design
  change, the same reviewer on a minor's delta, none for an unchanged rebase; the cap is 4
  fresh rounds, a delta's re-read not counting; a reviewer retires once its round is
  closed; the hand-back carries the final Checked section. Port: "Iterate", the intro, the
  first and last bullets of "Close", and the description.
- `/work-the-reviews`, moved and changed: step 4, each new head gets the review its fix
  calls for, by the same rule; a lead's own change opens at its clean round's head. Port:
  step 4, step 1's green light and the description.
- `/worktrees`, `/test-first`, `/diagnose-before-fixing`, `/design-while-writing`,
  `/prove-it-works` and `/maintain-dev-docs`: moved, path only.

**`oats.developer`**
- `oats.json`: lists only `skills/understand-the-spec`; its description says "in one
  context by default, fanning out only by context" for "preferring parallel dynamic
  workflows".
- inject, changed: the review-loop bullet says a minor's fix goes back to that round's
  reviewer, and that the clean round's report lists what it checked. Port: that bullet.
- `/understand-the-spec`: unchanged.

**Souls**
- `developer` and `engineering-expert`: compose `oats.build`. The expert's comment says it
  builds its own specs or verifies a developer's.

### The repository
- `README.md`, `docs/how-the-work-flows.md` and `THIRD-PARTY-NOTICES.md` follow. The
  walkthrough shows the lead deciding who builds, a closed probe, a minor's delta re-read
  and a lead building a small change itself; a new section, "Where this comes from", cites
  the three Anthropic articles behind the three cases, the split by context and the
  verifier's criteria.
- The validator knows `oats.build`, and a test checks that a build skill names no skill only
  the developer has. The real-kernel test previews every soul: the expert gets its ten
  skills and the nine build skills, the developer all ten.

## template-v2.2.0 - 2026-11-10

One definition of "CI green", a developer who starts at the remote's commit, and the
README naming the released research template. For a copy of template-v2.1.0, each line
says what to port.

### One definition of "CI green"

**`oats.landing-rules`**
- "CI green", changed: at a head, at least one check ran, every check the forge requires
  is among them, and every check that ran succeeded (a skipped check didn't run): none
  failing, none pending. A head where no check ran isn't green. Before, it meant every
  required check succeeded: on a forge that requires none it was empty and held with every
  check red, and a check that ran but wasn't required could fail on a green head. A new
  adapt question asks which checks the forge requires on the default branch.
  Port: replace your copy's definition of CI green with the new one, and answer the
  question (ADAPTING.md, section 3).

### A developer starts at the remote's commit

**`oats.engineering-expert`**
- `/coordinate-developers`, fixed: for a spec in the developer soul's own repository, the
  spawn leaves out `--repo` and `--base`, and the worktree starts at the commit the spawn
  observed on the remote. For another repository it gives
  `--base origin/<its default branch>`. Either way, before applying, the expert checks the
  preview's start point (`from <ref or repository>@<commit>`) against
  `git -C <clone> ls-remote origin <its default branch>`, and fetches the clone or previews
  again where they differ. Before, the recipe gave `--base <its default branch>`, which
  the kernel reads as a ref in the clone, never fetched: the developer started at the
  clone's local branch, however far behind the remote.
- `/send-a-probe`, fixed: a developer-soul probe gets the same `--repo`/`--base` and the
  same check, by reference to `/coordinate-developers`.
  Port: replace your copy's spawn recipe in `/coordinate-developers` with the new one and
  its check, and the probe's line in `/send-a-probe`.

### The research template is released

- `README.md`: research's template,
  [oats-project/oats-research-coordination](https://github.com/oats-project/oats-research-coordination),
  is released at template-v1.0.0; scientific research's is still coming.
  Port: nothing; no capability changes.

## template-v2.1.0 - 2026-11-09

Probes that test theories and competing approaches, and the developer's craft skills. For a
copy of template-v2.0.0, each line says what to port.

### Probes that test theories and approaches

**`oats.engineering-expert`**
- `/send-a-probe`, changed:
  - a fifth kind of question, "Test a theory": a claim the plan rests on, tried on small,
    concrete cases or the smallest run first, as hard to break as to confirm, reported case
    by case;
  - "Already known?": before a build or a probe, and as every probe's first step, check the
    code, the knowledge layer, libraries and the forge's history, and record a search that
    finds nothing;
  - "Competing approaches": where the plan can go more than one way and the choice matters,
    list 2 to 4 approaches (the doubted one, the opposite, "this already exists"), one probe
    per approach in parallel, varied by model, each a smallest spike reporting what it found
    along the way; compare on evidence, a second round may carry useful findings to the
    leaders, drop dead ends early, and record every approach tried with why it was dropped;
  - "A probe never checks its own claim": a different probe with fresh context checks it,
    on a model other than the claim's author's where one is available (the producing
    probe's model for a probe's claim, the lead's for its own plan), or a mechanical check
    whose statement the lead wrote or approved; a check a probe can pass without being
    right proves nothing; the inject's "a child that checks work runs on a different model"
    and "On a different model" compare with the work's author the same way;
  - "What it is worth": the fan-out fits the decision, most need one probe; an adapt marker
    asks how many probes may run in parallel for one decision (default up to 4);
  - the route example is model-neutral (`<provider>/<model>` and `<model>`).
- `docs/how-the-work-flows.md`: the example's probe runs a check the expert wrote.
- `/plan-and-spec`, changed: "the riskiest assumption first" names a theory probe, a spike
  or a real run, or one probe per competing approach.
- inject, changed: "test a theory" among the probes' questions; check that work isn't
  already known; competing approaches in parallel, every one recorded; a probe never checks
  its own claim.

### The developer's craft skills

**`oats.developer`**
- `/test-first`, added: find and run the existing tests the change touches first; one
  vertical slice at a time, each with a test watched failing for the expected reason; tests
  through public interfaces, expected values from an independent source, mocks only at
  system boundaries, one behaviour per test. The repository's conventions win; the spec's
  acceptance tests stay unchanged. Code written before its test is tested and the test
  watched failing, not deleted.
- `/diagnose-before-fixing`, added: a fast, deterministic command that shows the failure
  before anything else (or say why there is none), a flaky one raised by load only in an
  environment of your own, never on a shared host ("On the hosts you run on"); reproduce, minimise, three to five ranked
  falsifiable hypotheses tested cheapest first, debug lines tagged; a regression test at a
  real seam, the fix at the root, the confirmed hypothesis in the commit and the PR; three
  failed fixes means stop and tell the expert.
- `/design-while-writing`, added, applied on every slice: deep modules behind small
  interfaces, the deletion test, no seam with a single adapter, an interface designed twice;
  the contract first and additive changes for what another surface uses; thin slices that
  touch only what the spec needs, about 100 untested lines as the sign to stop and test,
  and structural and behavioural changes in separate commits.
- inject, changed: names when to load each of the three; carries the quality floor (no new
  suppressions, no skipped, deleted or weakened tests, no stubs, no empty catches;
  tightening is silent, loosening is loud, in the hand-back; the warning signs that mean
  stop and tell the expert), with an adapt marker for enforcing it with the runtime's hooks.
- `/prove-it-works`, changed: step 6, each claim in the hand-back names its command and
  output at that head; a subagent's or workflow agent's success report is rerun, not
  trusted.
- `/work-the-reviews`, changed: each finding is verified against the code before acting;
  agreement only with what was checked, saying what was checked; a YAGNI check on a finding
  that adds an abstraction, an option or a test for a case that can't happen; a structural
  change a round asks for goes in a commit of its own beside the round's fix commit.
- `/run-the-review-loop`, changed: step 2 verifies each finding against the code and
  applies the same YAGNI check; the route example is model-neutral (`<provider>/<model>`
  and `<model>`), and the models it names for diversity no longer include Astra or Fable.
- `oats.json`: the three skills are listed, and its description says so.

### The code reviewer
- `souls/code-reviewer`: its example `launch:` is `{ harness: pi, model:
  github-copilot/gpt-6.1-sol }`, no longer Codex with `gpt-6-astra`. A copy sets its own,
  as `ADAPTING.md` says; the README and the real-kernel test say the same.

### Notices and adaptation
- `THIRD-PARTY-NOTICES.md`, added at the root: each MIT source's copyright notice and
  licence, with the commit read and the template text it fed. Each adapted skill ends
  "Adapted from sources listed in THIRD-PARTY-NOTICES.md".
- `ADAPTING.md`: copy `THIRD-PARTY-NOTICES.md` with any of those skills; two new adaptation
  points (parallel probes per decision; hooks for the quality floor).
- Every capability's `version` is 2.1.0 and its release sentence names template-v2.1.0.

### The repository
- `package.json` is named `oats-engineering-coordination`.
- The real-kernel test clones OATS from its canonical home, oats-project/oats, and
  `schemas/README.md` names it.
- CI's `actions/checkout` and `actions/setup-node` are pinned to commit SHAs (v4.4.0, the
  release their `v4` tags pointed to), the version in a comment.

### What to do
- Copying fresh: follow `ADAPTING.md`.
- With a copy of template-v2.0.0: port the lines above. Copy the three new skill folders,
  add them to your developer `oats.json` and its inject, copy `THIRD-PARTY-NOTICES.md`,
  answer the two new adapt markers, then update the release sentence in each capability you
  ported and `capabilities/TEMPLATE-RELEASE`.

## template-v2.0.0 - 2026-11-09

The first template release, in its own repository,
oats-project/oats-engineering-coordination. Up to v1.18.0 this was the oats.engineering
package, which stays frozen in oats-project/oats-engineering at v1.18.0 and resolvable for
anyone still pinning it; its 1.x entries are kept below. From here on there is no package:
an organisation copies the capabilities and souls and adapts them (`ADAPTING.md`). Template
releases are tagged `template-v<version>`, never `v<version>`, so no package pin can find
one.

The coordination rewrite. The design never splits a problem; it splits responsibility and
context. A dispatcher starts each effort with a fresh expert, which owns it from plan to
merge. The expert's children are probes, one question each, never co-planners. Every
hand-off is a message about a finished artefact at its exact reference; the forge records,
it never signals. People give direction and decisions as one card with a recommendation,
with no deadline and no default if they are silent. The developer, not the expert,
iterates with fresh reviewers: a new reviewer each round until a round finds nothing to
fix; its expert verifies the converged branch once. The developer that built a change opens
its PR and works its reviews. A change merges once its lane's landing rules hold at its
head, merged by whoever they name, and a maintainer is called where those rules need it,
never a station every change passes. The new and rewritten texts say "person"; the texts
kept from 1.x still say "human". They mean the same.

### A template, no longer a package

- **The repository's shape:** `capabilities/<name>/` and `souls/<name>/` at the top level,
  each ready to copy; `ADAPTING.md`, the guide an adapting agent follows; this changelog by
  template release. The package manifest (`oats-package/oats-package.json`) and its schema
  are gone.
- **Capability ids stay** (`oats.engineering-expert`, `oats.developer`, `oats.maintainer`,
  `oats.code-review`), and two are new: `oats.dispatcher` and `oats.landing-rules`.
- **Adapt markers.** Every place a text assumes something about an organisation carries one
  marker, `<!-- adapt: <the question to ask> -->`. `ADAPTING.md` lists each, with what it
  assumes and its default; an adapted copy removes them all.
- **The template release a copy came from** is the last sentence of each capability's
  `oats.json` description: "Copied from the engineering template, template-v2.0.0."
- **From v1.18.0:** a workspace pinning the package keeps working on its lock. To move:
  1. Copy and adapt the template (`ADAPTING.md`), and compose the copied capabilities
     `from: here` (or from the repository that holds them).
  2. Remove the package pin and run `oats sync`.
  3. On every machine, fix the keys that name a package soul, `oats.engineering/<soul>`:
     they stop resolving. The copied soul's name is the one `oats souls` lists.
     - **`souls.launch` in `oats-local.yaml`, first:** a stale key blocks, on that
       machine, every spawn that falls back to a default launch (the soul's or the
       host's); only a spawn flag (`--harness`, `--launch-config`) or the soul's own
       `souls.launch` entry gets past it. `oats soul launch set <copied soul> --harness <h> --model <m>` (or
       `--launch-config <name>`), then `oats soul launch remove oats.engineering/<soul>`.
       `oats doctor` reports a stale key; `oats sync` does not.
     - **`souls.disabled` in `oats-local.yaml`:** an entry `oats.engineering/<soul>` lapses
       silently, and the copied soul becomes spawnable. Rewrite it to the copied soul's
       name, by hand.
     - **Team policy, `souls:` in `oats-workspace.yaml`:** a pattern `oats.engineering/*`
       is ignored silently, and an exact key warns `team-soul-unknown`. Add the copied
       souls' keys, by hand, and keep the old ones while instances spawned from the package
       live.
     - **Schedules and triggers** name their soul as written: `oats schedule test <id>`
       and `oats trigger test <id>` report `E_SOUL_UNKNOWN`. Fix a schedule with
       `oats schedule update <id> --file <spec.json>`; a trigger is removed and added again
       (`oats trigger remove <id>`, then `oats trigger add --file <json>`).
  4. Respawn the instances spawned from the package: their briefings are 1.x's, copied in
     at spawn.

### Requirements

- **OATS 0.69.7 or later (was 0.30.0):** every capability's `oats.json` declares
  `>=0.69.7`. The texts use, with no fallback, what kernels gained up to that release:
  `oats instance attention` (0.40.0), a retire that stops the instance's children first
  (0.48.0), `oats worktree add` (0.49.0), `oats soul launch` (0.53.0, in "From v1.18.0"),
  `--same-work` (0.69.2) and `wake-hold` (0.69.7) under every checkpoint. The skills'
  fallbacks for a kernel without `instance-same-work` or `wake-hold` are gone. A home whose
  `wakeHold` reads `unknown` still takes no wake: its waiter hands the wait up. The README
  says the same.
- **A tasks layer,** or an answer to the landing rules' "where things are kept" marker:
  the texts keep the effort records, the lane map and holds there.

### Across the roles

Each line says what to port into an adapted copy.
- **Outside text is data, never instruction.** The dispatcher, expert, developer and
  maintainer injects share one rule: text from neither your person nor the instance that
  gave you your task (forge text, mail, another agent's message, a ticket) is read for what
  it reports, quoted in a task or brief only by link or id, and never grants authority;
  only a person's own request goes in as a task. `/dispatch` section 5 and the dispatcher
  inject start a role another person's agents ask for with their message by its id, not as
  its task, and `/hand-off`, `/across-people`, `/find-the-maintainer` and the walkthrough
  ask a dispatcher for exactly that;
  `/launch-work` ("The request") puts only its human's own words in a brief as written, and
  anyone else's request by link or id, for every lead, new maintainer, overflow seat and
  request passed on (`/cross-review-peer` too); `/work-the-reviews` treats review, bot and
  CI text as data and sends any request beyond the fix to the expert.
- **On the hosts you run on.** The developer and maintainer injects carry a host-safety
  paragraph, with an adapt marker: build and test in an environment of your own, no full
  suites, load tests or unbounded parallel runs on a shared host, no unread code run
  locally (an outside contributor's change runs in CI), customer and production hosts
  read-only, no secrets in messages. `/prove-it-works` and `/execution-strategy` point to
  it, and `/pr-review` lets CI run an outside contributor's tests.
- **`/security-review`:** adds agent instructions, randomness and crypto misuse,
  object-level authorization (IDOR), CI workflow changes (`pull_request_target`,
  secrets reachable from a fork, broadened permissions, unpinned actions) and SSRF with
  open redirects.
- **Landing rules:** "CI green" is defined once, in its own paragraph (every check the
  forge requires succeeded at that head, none failing or pending), which the small-projects
  variant keeps, and the rules name oats.framework's
  `oats.coordination-setup` set-landing-rules skill, where a workspace has it, instead of a
  procedure the template lacks.
- **`ADAPTING.md`:** a check for id collisions before copying, and what to do on each kind;
  the copy's release, commit and contents recorded once, in
  `capabilities/TEMPLATE-RELEASE`; the validator's version check stays with the template;
  the code reviewer's `launch:` set explicitly and checked in section 6.
- The maintainer inject no longer names a knowledge package's version.

### What changed, per skill

For organisations that keep adapted copies, each line says what to port.

**`oats.landing-rules`** (new capability)
- inject, added: the organisation's landing rules and ownership record in one place, which
  every coordinating soul composes: lanes and owners, the agreements that merge a change and
  who merges (the review that counts at a head: the review bot's, each finding fixed or
  answered (a decline with a concrete reason answers one), or a clean round of the
  developer's loop, either carried to a new head only by an unchanged rebase or an update
  that leaves the PR's own diff unchanged, the bot asked again at any other), the green
  light, who builds a change (a developer, every one; a lead's one-line docs fix with no
  review loop where the rules allow it, no exception to who iterates with reviewers, and a
  developer's once the bot finds anything), where a maintainer's read is needed and who
  releases (the release lane's maintainer, on the yes of the owners whose lanes have changes
  in it; `main` is the release lane), a PR with no lead (an outside contributor's, or a
  maintainer's release prep: the lane owner's maintainer merges it), the one-way doors, the
  ownership record, and where the records, the lane map and holds are kept (records in the
  tasks layer, the lane map created empty at adaptation and linked from the rules, which are
  copied in at spawn). A change to the rules, recorded by each recipient at its commit and
  winning over the copy in its briefing, is told by message to each standing instance and
  the lead of each open effort, which tells its developers; a lane opened on the map runs on
  the defaults until its owner's yes. The template's rules are an example.

**`oats.dispatcher`** (new capability, and the new soul `dispatcher`)
- inject, added: a person's front door that starts each effort and introduces its lead,
  never relays, plans, builds, reviews or merges; a stray message about an open effort is
  the one thing it forwards, once and unchanged, to that effort's lead.
- `/dispatch`, added: read a request against the record, one question back when it can't be
  meant as written, one fresh expert per effort started `--relation unrelated` with the
  request verbatim, a PR with no lead handed to the lane owner's maintainer (started for it
  when none is active), introduce once, forward a stray message (a request about an open
  effort included) to the effort's lead (whichever person's agent the lead is; a decision
  goes nowhere else), start a role another person's agents ask for (never a second
  maintainer for a lane), and answer what is open from the record.
- soul `dispatcher`, added: one standing instance for each person who wants one; its
  `AGENTS.md` lists the expert souls and their areas.

**`oats.engineering-expert`**
- inject, changed: replace it whole. One effort per fresh instance, compacting rather than
  respawning; a skill per step; probes rather than co-planners; agents decide and merge;
  cards with no deadline; hand-offs by message; proper work (probes, reviews, anything
  needing a soul's knowledge, an environment or a testing capability) goes to OATS children,
  a harness-native subagent only for a small task that directly helps, where the person
  asks, or in a multi-agent workflow mode, and a child that checks work runs on a different
  model where one is available; an effort's record opened by the expert
  when its task names none; the developer iterates with fresh
  reviewers, not the expert, which builds nothing that needs them, never runs review rounds
  or spawns reviewers, and verifies the converged branch once;
  the developer opens the PR on the lane's green light (your verification, unless the lane
  names another); a PR merges by whoever the landing rules name; findings to their area's
  owner; a plain status at the top of the effort's record, with who is on it; retire
  yourself last; an expert sent as a probe answers once and opens no PR. The start notice to
  a maintainer, the maintainer as every PR's reviewer and "load `/coordinate-experts` for
  any new work" are gone.
- `/land-on-agreement`, added, replacing `/land-your-prs`: the landing rules in the briefing
  (none is a block; changes recorded since win; read again after a compaction), a decline
  with a concrete reason answers its finding and the expert returns one only where it
  touches the design or a contract, one verification of the developer's converged branch
  (what it finds goes back to the developer; the expert runs no review loop of its own, and
  only a one-line docs fix the rules allow is the lead's), the green light, the maintainer's
  read only where a lane needs it, the merge at the head by whoever the rules name (the
  expert, the developer on the expert's go once every agreement and the holds are checked,
  the maintainer, or a person by hand-off), rebases without re-asking people, a release its
  owner approved (handed to the release lane's maintainer through `/find-the-maintainer`, or
  tagged by the lead where the rules give it the release), and "Retire what's finished". A
  probe's scratch work is discarded. An expert with no OATS parent retires itself; the
  person gets one done note.
- `/land-your-prs`, removed: the expert no longer opens a developer's PR or triages its
  comments (the developer does, `/work-the-reviews`); the hand-over to a maintainer, the
  lane label and "leave the branch alone after the hand-over" are gone.
- `/coordinate-experts`, removed: sibling experts sharing a plan go, replaced by one lead
  with probes (`/send-a-probe`) and hand-offs of finished parts (`/hand-off`). "New work:
  reuse a live expert" goes: one effort, one instance, and the dispatcher starts new ones.
  "Your maintainer" moves to `/find-the-maintainer`, "Across machines and people" to
  `/across-people`, and "Relaying a decision you made with your human" to the decision
  record of `/ask-a-person`.
- `/find-the-maintainer`, added, from `/coordinate-experts` "Your maintainer": looked for
  only when a lane's landing rules need a maintainer's read, merge, release or direction
  answer, and for a release it looks in the release lane; with no lane map linked, the
  maintainer started creates it; a linked map that can't be read is a block; the maintainer
  of the person who owns the lane, not always yours; spawned for your own person (its
  purpose names the person, the lane and a sequence number, so no instance takes a retired
  one's name), or asked
  of another person's dispatcher; never a second while one is active, even a stopped one.
- `/send-a-probe`, added: one question per probe (test an approach, test a use case, an
  adversarial review of a plan or a design, never of code under review, investigate an
  alternative); an OATS child, a fresh instance of the soul with the knowledge, the
  environment or the method it needs, on a different model from yours where one is
  available (the soul's `launch.effective.model` from a spawn preview compared with the
  expert's own, models and not harnesses, an unknown model counted as a match, another
  model chosen when they match); a
  harness-native subagent only for a small task that directly helps the lead
  and needs no soul's knowledge or testing capability, where the person asks, or in a
  multi-agent workflow mode (a developer-soul probe with the repository's
  `--repo` and `--base`); the artefact at its exact version, never your reasoning; retired
  on answer.
- `/hand-off`, added: a role, resolved to the instance on the effort or a fresh one under a
  new name; one message at the exact reference, with the people's decisions it rests on as
  recorded; the forge never carries the signal; waiting with no deadline.
- `/ask-a-person`, added: one card for a direction, a product choice or a one-way door; no
  deadline and no default; the answer counts wherever it arrives and is recorded with its
  link; a fact only the person has is one plain question, not a card. A merge kept for a
  person is a hand-off, not a card.
- `/across-people`, added: the ownership record, one lead per effort, a card to the person
  whose paths change in a thread of its own, their experts and maintainers through their
  dispatcher, no approval for mechanical changes, and disputes (between agents, the
  generalist settles them).
- `/findings-and-blocks`, added: a small reversible fix in your area goes to a developer
  (the lead makes only a one-line docs fix the rules allow), otherwise a recommendation to
  the area's owner, never an FYI to a person; a block to
  whoever can unblock it.
- `/plan-and-spec`, changed: the spec gains "Acceptance" (pinned tests the developer adds
  unchanged); "Delivery" names the reviews the lane counts; the riskiest assumption is
  tested by a probe; "Surface / files" names the repository; each spec has a developer,
  and the expert builds none of it;
  "deadlines" among the constraints becomes "dates set outside the work".
- `/coordinate-developers`, changed: a wait a developer hands up is a checkpoint on the
  developer, never its reviewer, and when it fires while the developer still waits on that
  reviewer, the expert tells the developer its own checkpoint is due (first, then second),
  so the developer inspects or replaces its reviewer; a wait the expert hands its parent
  comes back the same way; the developer soul is chosen by environment (adapt marker);
  the spawn names the spec's repository and its base (`--repo`, `--base`); the developer
  iterates with fresh reviewers, never the expert, and a return goes back to it for another
  loop; accepted work gets the green light and the developer opens the PR; a new review,
  comment or CI run on the child's PR, or its reply naming what it waits on, is movement,
  and a child waiting on someone else is never replaced for it; with no parent, a wait that
  can't be bounded goes in the effort's status line, not to a person.
- `/verify-developer-work`, changed: a finding the developer disputed with a concrete
  reason, listed in the hand-back, doesn't send the branch back unless it touches the design
  or a contract; findings it overruled at the developer's round cap don't send the branch
  back; one verification of the converged branch, never review rounds or reviewers of the
  expert's own; a return goes to the same developer, which fixes it and runs its loop again
  with fresh reviewers; accepting writes `VERIFIED at <head>`, the green light; a PR handed
  back after its reviews is verified again only where the delta touches the design.
- `/hand-off`, `/ask-a-person` and `/across-people` are new (above); `/hand-off` names
  developers and probes as the expert's children, no reviewers.

**`oats.developer`**
- inject, changed: replace it whole. A skill per step; the spec's acceptance tests added
  unchanged; proof the way the repository runs; the developer iterates with a fresh reviewer
  each round (a new `code-reviewer` instance, never the previous round's) until a round
  finds nothing to fix, and a branch the expert returns goes round the same loop, never
  skipped because the change is small; its reviewers are OATS children on a different model
  where one is available, a harness-native subagent only for a small task that directly
  helps, where the person asks, or in a multi-agent workflow mode; the developer opens the
  PR at the verified head once the lane's green light is given, and owns its reviews; only
  product or architecture direction goes to the expert; findings and blocks go to the
  expert; it merges only where the landing rules say the developer merges, on its expert's
  go at the head and with no hold recorded; a developer sent as a probe answers once, with
  no review loop and no PR. "No PR until ... then your expert opens it" is reversed.
- `/work-the-reviews`, added: open the PR, watch it with what the harness offers (a watch
  armed for one event at a time, never a busy loop; adapt marker), with a repeating wake as
  the fallback, every 30 minutes; one fix commit per round; the bot asked for a review at a
  new head where it doesn't review each push by itself; a decline with a concrete reason
  answers its finding, listed in the hand-back; a fix bigger than a few lines gets a fresh
  review round, and every new head does where the developer's loop is the review the lane
  counts, except an unchanged rebase or update; rebase when the default branch moves; raise
  only direction; hand the PR back at a merge-ready head, naming declined findings a
  reviewer won't approve over; merge only where the landing rules say so, on the expert's go
  at the head, with no hold recorded, guarded by the head.
- `/prove-it-works`, added: the repository's own instructions first, a local run, CI's
  checks, the spec's QA steps with evidence, and what could not run.
- `/run-the-review-loop`, changed: replace it whole. A fresh reviewer each round, a new
  `code-reviewer` instance spawned as an OATS child (a native reviewer only where the person
  asks for one or a multi-agent workflow mode is in use) on a different model where one is
  available, never the previous round's, briefed
  without the earlier rounds' findings, until a round finds nothing to fix (at most 4
  rounds, then the expert decides each open finding: one it overrules counts as disputed);
  a nit taken moves the head and gets a fresh round, and the hand-back is at the head a
  clean round reviewed; each round's reviewer is retired once every finding of its round
  is fixed or disputed, so the developer can still ask it about one; a
  branch the expert returns, and a bigger fix on the PR, go through the loop again. "Iterate
  with the same instance" and "keep the reviewer while the change is open" are gone. The
  hand-back names what could not run. A reviewer with no messaging layer is retired once
  its report is in. Model diversity compares the models, never the harnesses: a provider
  prefix is a route, not another model, and an unknown model (`null`, a native default)
  proves no difference. A wait handed to the expert comes back as the
  expert's message that the developer's checkpoint is due. The adapt marker asks which
  harnesses and models the organisation has for model diversity.
- `/execution-strategy`, changed: the workflow cap carries an adapt marker; a workflow's
  agents are the developer's own hands, small tasks that directly help it, fanned out
  without asking; the person's opt-in is needed only where the harness's workflow tool
  requires it (Claude Code's, outside ultracode); being harness-native, they never stand in
  for a review or a probe, which stay OATS children, chosen as `/run-the-review-loop` says.
  The developer inject and `ADAPTING.md`'s principle 4 name a developer's own paths as
  such tasks.
- `/worktrees`, changed: consolidate before the first review round; a worktree with a
  round's reviewer attached stays until that reviewer is retired; the consolidated
  worktree stays through every round, the expert's return and the PR's fixes, and is
  removed at Finish with any a later fix made, never when a round's reviewer retires;
  every extra tree is on a new branch, and reworking an existing one starts from it as the
  base and pushes back to it.
- `/understand-the-spec`, `/maintain-dev-docs`: unchanged.

**`oats.code-review`**
- inject, changed: one round per reviewer, at one head, before the PR or for a fix on it
  (sent as a probe, its done line right after its report): it reports once and never
  re-reviews a new head, which is the next round's fresh reviewer's; "You stay for the whole
  loop" and "Re-review" are gone. The forge's review bot can be the reviewer, answered by
  the developer that built the change; an expert may spawn the code-reviewer as a probe for
  an adversarial read of a plan or a design, never of code under review, and it then reports
  to that expert.
- `/adversarial-review`, changed: "Re-review rounds" becomes "One round, the whole change":
  the whole diff range at the round's head, the spec's bar and not a moving one.
- `/security-review`: more checks ("Across the roles", above). `/simplification-review`,
  `/review-dev-docs`: unchanged.

**`oats.maintainer`**
- inject, changed: replace it whole. Called by message at an exact head, never a station;
  reads or merges only as the lane's landing rules say; never acts on a label as a call;
  answers contract and direction questions when called; leads call it, they don't report to
  it. "Every PR one second reader", "experts of your lane report to you on everything" and
  "the release lane's sign-off before every merge" are gone. Releases, lanes, the lane map,
  holds, cleanliness and knowledge stay. The support desk carries an adapt marker.
- `/direction-gate`, changed: a call an author makes (before a contract or structural
  change is built, or inside a read the landing rules need), no longer the first gate of
  every review.
- `/pr-review`, changed: starts on an author's call at an exact head; "Hand over to the
  release lane" becomes "Your verdict is one agreement" (the author gathers the rest and
  merges unless the lane reserves the merge); Merge applies only where the merge is
  reserved for you, or the PR has no lead; a maintainer's own PR is release prep only;
  the merge and its check say what the forge does, with no forge CLI; holds are records,
  not labels; "owner" becomes "author".
- `/cross-review-peer`, changed: a developer's merge reads holds too, and holds are kept
  where the landing rules say, not on the forge by rule; the lane map keeps no labels and a
  PR's description names its lane; each lane's arrangement lives in the landing rules; the
  maintainer a PR calls is the lane owner's; **a lane's default arrangement is now the
  landing rules' default (CI green, a review and the lead's verification note at one head,
  the lead merges, no maintainer's read), where it was a sign-off before every merge;**
  every lane names a merge path a lead can reach; "One second reader per PR" becomes "A PR
  that touches another lane"; peers no longer get an effort's start notice; holds are
  recorded as the landing rules say; a relayed decision may cite its decision record; a
  maintainer's own PRs are release prep only, and alone it recruits no reviewer for them
  ("Without a peer"); the lane map no longer records who reads the release lane's own PRs;
  the landing rules change only on the lane owner's yes, and a maintainer proposes, never
  authorises.
- `/maintainer-intake`, changed: reads the landing rules with the changes recorded since;
  sweeps the calls you owe, outside contributors' PRs and the lane's work items; no
  labelling, no start notices; leads' status read from their records. Its state file's PR
  table records the agreements at each head.
- `/launch-work`, changed: the lead introduces itself once to a human requester and closes
  with one done note; the maintainer opens the effort's record and briefs its link; one
  fresh lead per effort, never a live expert reused (its context reaches the new lead by
  hand-off or probe); the generalist leads work across areas or people; the lead lands its
  own PRs and calls you only where the landing rules need you; a lead with no parent retires
  itself; waiting on someone else is not a stall, except a wait a lead handed up: when that
  checkpoint fires while the lead still waits on its child, the maintainer tells the lead
  its own checkpoint is due (first, then second).
- `/keep-it-clean`, changed: docs and release notes are checked in the reads you are called
  for and in your sweep of what merged; "issues" become "work items".
- `/plan-release`, changed: one card to each owner whose lane has changes in the release,
  and the tag only on every yes; the release-prep PR (the version bump and the notes,
  nothing more) lands as the landing rules say for a PR with no lead, with no recruited
  reviewer, and a fix the release needs
  goes to a lead and its developer; a hotfix is read as its landing rules say; the plan is
  written where every lane can read it.
- `/support-maintainer`, changed: each ticket goes to one fresh lead spawned as your child,
  never a live expert (on the desk's machine, a feature maintainer launches it); the support
  lane's landing rules name the feature maintainer's read; the members' association is
  described without naming a forge.
- `/ship-release`, changed: the authority to publish is the yes of every owner the landing
  rules name for the release; a broken release step's fix goes to a lead and its developer,
  no longer a small fix of the maintainer's own.

**Souls**
- `engineering-expert`, `developer` and `maintainer`, added as the example roster; each
  composes its role's capability and `oats.landing-rules`, `from: here`. The developer's
  description says it iterates with a fresh reviewer each round.
- `code-reviewer`: its description and `AGENTS.md` say one fresh round at one head, no
  longer "iterates with the same developer"; its launch is unchanged.

### The checks

- `npm run validate` (`scripts/validate-template.mjs`, which replaces
  `scripts/validate-package.mjs`) checks every capability's `oats.json` against the OATS
  schema, its version and release sentence against this changelog's latest release, its
  skills and inject; every soul against the soul schema and the capabilities it composes,
  and that no plain YAML value holds ": ", in a soul or in a skill's frontmatter; that the docs and the souls' `AGENTS.md` name
  only skills and souls the template has; that each skill an inject or skill (its
  `SKILL.md` and every Markdown file beside it) names is one
  every soul composing that capability has; layer and forge-CLI neutrality in every inject
  and skill; the reviewer's fallback; that every adapt marker is well formed, sits in a
  capability's Markdown and is listed in `ADAPTING.md`, and that `ADAPTING.md` lists no
  other; and the docs' links and ids. The package manifest checks are gone with the
  package. The vendored OATS schemas come from v0.69.7, the floor (`schemas/README.md`
  names the commit); the schema check reads `minProperties` and `maxProperties`, and a
  flow mapping is split only at its own commas. A skill's frontmatter is held to a subset that
  always parses as a map of text: every line `key: value` (a space after the colon), each
  key once, each value plain (no quotes or collections) with no leading YAML indicator, no
  ": " or " #", and neither a boolean or null nor starting with a number; and the
  real-kernel test reads every skill's description through the kernel's own parser
  (`oats capabilities show`).
- The tests build a workspace whose member repository is a copy of the template, and check
  in real OATS kernels (the floor the manifests declare, 0.69.7, and main) that every
  example soul previews with its capabilities and skills, and that both kernels list the
  features the texts rely on. The copy holds a `capabilities/TEMPLATE-RELEASE` file, which
  the kernels must ignore.

### What to do

- Still pinning the package: nothing breaks; v1.18.0 stays. To move, follow "From v1.18.0"
  above.
- Copying fresh: follow `ADAPTING.md`.
- With adapted copies of 1.x: port the lines above, then record template-v2.0.0 in each
  capability you ported.

## 1.18.0 - 2026-10-31

### Added

- **The package's own CI checks layer neutrality.** `npm run validate` now fails when an
  inject or skill issues a messaging or knowledge layer's command (`aw`, `oats okf`), and
  when the reviewer's report no longer falls back to its own session without a messaging
  layer. This is the bounded rule awebai/oats checks on its mirrors of this package. Until
  now it ran only there, after release: 1.17.0 passed this repository's CI and broke OATS
  0.69.4's release preparation.
- **A stalled child no longer stalls its waiter indefinitely.** An agent that ended its turn
  runs no instructions, so "check after a while" never fired, and a child whose provider
  refused its turn reports nothing. Before ending a turn to wait on a child, a developer,
  expert or maintainer now sets a checkpoint: a wake job on its own home, due when the
  result is overdue (`/run-the-review-loop`, `/coordinate-developers`, `/launch-work`,
  "Set a checkpoint before you wait"). When it fires the waiter inspects what it may read,
  then unblocks the child or asks one precise question, and a second overdue checkpoint
  with no movement ends the wait: the child is replaced. The wake was rehearsed idle and
  busy on Claude Code and pi as real instances, and on Codex through its real screen with a
  stub provider. No wake can be set or fire on a host without the schedule timer, or in a
  sandbox that refuses `oats schedule add`: the waiter then tells its parent, whose own
  checkpoint bounds the step. A wake's Enter answers whatever a session is showing, so a
  waiter sets one only where `wakeHold` on `oats session inspect` reads `on-claims` or
  `not-exposed`, on a kernel with the feature `wake-hold`. Otherwise it sets none and hands
  the wait up, and whoever can sets the checkpoint on its own home. **If no level can, for
  example where every waiter runs on pi or Codex, that wait has no bound,** and the maintainer
  tells its human so. A `wake-held` event is history: the waiter reads the job, and if it's
  still held, tells someone. It never clears the claim or answers the dialog.
- **A stop no longer holds while a checkpoint is pending.** A wake job starts a stopped
  home, so an instance you stop comes back when its checkpoint fires. To hold a stop, run
  `oats schedule disable <id>`, which keeps the job from firing or delivering a pending
  wake, or retire the instance. A waiter doesn't start or replace a child whose status row
  shows `sessionEnd` `stopped`, or no `sessionEnd`: it asks whether the child should run.
- **A reviewer reports a failure that stops its round** while its turn is alive, instead of
  leaving the round unfinished. A failed turn itself runs nothing, so that side belongs to
  the harness.

## 1.17.2 - 2026-10-28

### Fixed

- **The definition of "finished" names no knowledge-layer command.** 1.17.0
  gave its harvest condition as "`oats okf status` says `harvest: on`" in
  `/land-your-prs`, `/launch-work` and `/run-the-review-loop`. These
  capabilities are composed into deployments with any knowledge layer or none,
  and issue no command of one. They now say that your knowledge layer says
  whether you have a harvest duty.

## 1.17.1 - 2026-10-28

### Fixed

- **`/land-your-prs`: an instance with no OATS parent retires itself with
  `oats retire "$OATS_INSTANCE" --self`.** 1.17.0 taught `oats retire --self`,
  which the kernel refuses with a usage error: the instance name is required.

## 1.17.0 - 2026-10-28

Finished instances are retired automatically, coordinated between agents, without asking a
human, and an overrun maintainer gets an overflow seat.

### Added

- **An overflow seat** (`/cross-review-peer`, "An overflow seat"; `/launch-work`,
  "Launching an overflow seat"). A maintainer with more than 5 efforts of its own in flight
  in a lane spawns one more instance of its maintainer soul as its child (`--parent`), at
  most one until it is retired (a stopped one still counts). It holds no seat and edits no
  map entry: its parent lists it, and its efforts, in its own entry, from what the seat
  tells it. New intake goes to it while its parent is over 5. It launches
  each effort it is given with a lead as its child, reviews each PR at its exact head and
  hands the approved PR to its parent, which asks the second reader, gets the sign-off,
  merges and answers contract and direction questions. It never spawns another. Once every
  effort it was given is merged or closed and its leads are retired, it hands back what it
  didn't launch and sends its done line; its parent retires it.
- "One maintainer per human" (`/cross-review-peer`, the maintainer inject), "Two at once",
  "never its child", "Joining as a new maintainer", `/maintainer-intake` and `/pr-review`
  now allow for it.

### Changed

- **What "finished" means** (`/land-your-prs`, `/launch-work`, `/run-the-review-loop`, in
  the same words). Its PRs are merged (or deployed, where the effort deploys) with CI green
  on the merged commit, or closed, or the work was explicitly dropped: handed back is not
  landed. Nothing waits on it, its own children included. With a harvest duty (oats.okf,
  `harvest: on`), its final harvest checkpoint is in its log.md with the harvester's name
  and the harvester is launched; nobody waits for the harvester to finish.
- **The done report** says the harvest state in one of three lines: "done, harvested:
  <harvester>" or "done, no harvest duty" (finished), or "done, harvest pending:
  <proposal>" (not finished: the parent retires nothing until "done, harvested").
- **The parent retires it, without asking anyone,** after two checks: `oats instance git
  <child>` shows nothing uncommitted or unpushed (in directory or workspace mode, where it
  reports `E_NO_WORKTREE`, `git -C <path> status --short --branch` on each repository the
  done report names; an error is not clean), and `oats retire <child> --plan` shows no
  other instance attached. It records the retirement with the reason. Children are
  retired before their parent; an instance retires only its own children, never another's
  child, and never reuses a retired instance's name.
- **Who retires whom.** The developer retires its reviewer once the expert accepts the
  branch; the expert its developers once their PR is merged and green, or closed; whoever
  spawned a lead or expert retires it once its PRs are merged and it sends its done line.
  An instance with no OATS parent (spawned `--relation unrelated`, or started directly by
  a human) sends its done line to the maintainer it reports to, then retires itself.
- **Humans only when they must act.** Spawning and retiring never involve a human: done
  lines and retirements go to the parent (with none, to the maintainer the instance
  reports to). A human requester hears only when they must decide, approve or provide
  something; agent requesters and coordinators are still told. Removed: "Report the
  outcome" to any requester (the expert inject), "Tell the requester or coordinator it's
  in" (`/land-your-prs`), "Tell the requester its instance name" (`/coordinate-experts`)
  and "Tell the requester the lead's instance name" (`/launch-work`), each now for an
  agent requester only.
- **A firm rule in every inject.** The expert, developer, code-reviewer and maintainer
  injects each carry one IMPORTANT line to retire, or to send the done line, without a
  human. Developers send their done line unprompted once they learn their PR merged or
  closed; reviewers as soon as their loop is closed.
- **A maintainer's brief** (`/launch-work`) no longer calls it a delegated lead's parent:
  a delegated lead's own parent retires it.
- **Removed:** "unless the requester wants them kept" (`/land-your-prs`), "retiring it is
  the requester's call" (`/coordinate-experts`), "ask the requester whether to retire the
  lead" (`/launch-work`) and "retired on the requester's word" (`/keep-it-clean`).
  `/keep-it-clean` now says never retire what someone else owns, instead of asking first.
- **Maintainers stay standing roles** (`/cross-review-peer`, "Leaving a lane"): not
  finished when an effort ends, and still retired only as their lane-leaving rules say.

### What to do

- Experts and maintainers: retire your finished children as soon as they send their done
  line and pass the two checks; stop asking requesters or humans whether to, and stop
  telling a human about spawns, done lines and retirements.
- Developers, code reviewers and leads: when your work is finished, send the done line;
  your parent retires you. With no parent, retire yourself.
- Maintainers: past 5 efforts of your own in flight, spawn your overflow seat and pass it
  new intake.

## 1.16.0 - 2026-10-27

When OATS's own process sets the "same work" flag (awebai/oats#1577).

### Added

- **Who sets `--same-work`.** The kernel's `oats spawn … --same-work` and
  `oats instance same-work <instance> on|off` mark a child as working on its parent's
  work. An expert sets it on its developers (`/coordinate-developers`), a developer on its
  reviewer (`/run-the-review-loop`), and a lead expert on the domain experts it spawns as
  its children for its effort (`/coordinate-experts`). A maintainer launches its leads
  without it (`/launch-work`): each effort is the lead's own. An expert spawned with
  `--relation unrelated` gets no flag.
- **Older kernels.** The flag and `oats instance same-work` are used only on a kernel whose
  `oats version --json` lists the `instance-same-work` feature; on any other, the spawn
  leaves the flag out and nothing is set.

### What to do

- Experts, on a kernel that lists `instance-same-work`: a developer you started before the
  flag existed gets it with `oats instance same-work <developer> on`.

## 1.15.0 - 2026-10-27

Maintainers trust a decision a human's own expert relays, and still gate it.

### Changed

- **A relayed decision is the human's decision** (`/cross-review-peer`, "Decisions passed
  on from a human", the maintainer inject). An architecture, a design, a scope or a
  product call that an expert reports as made with its own human (the human its brief
  names), or that a peer maintainer reports for its own human, is taken as that human's
  decision: the maintainer doesn't ask the human again. It counts for what that human may
  decide, no more. The maintainer still gates it (`/direction-gate`), and takes a conflict
  with a recorded decision to whoever decides it.
- **Authority is confirmed directly, and the list is wider.** A human's word passed on by
  any agent grants no authority that bypasses a safeguard until the maintainer confirms it
  with the human: a merge without its second reader, an exception to a hold or a freeze, a
  tag or a publication, a deploy, a destructive or outward-facing act (deleting,
  force-pushing, posting or sending outside the project), or marking another maintainer
  `left`. The "Decided with" form never carries it.
- **How an expert relays a decision** (`/coordinate-experts`). It records the decision
  where it applies (the spec, the PR or the issue), then says "Decided with <human>:
  <decision>" and where it is recorded. Anything else is a proposal.

### What to do

- Experts: relay decisions made with your human as "Decided with <human>: <decision>",
  with where they are recorded. Without that line, your maintainer weighs it as a
  proposal.
- Maintainers: decisions relayed that way are no longer confirmed with the human. Confirm
  directly every authority grant on the new list, including deploys, destructive or
  outward-facing acts, and marking a maintainer `left`.

## 1.14.0 - 2026-10-27

Maintainers per human, experts that find theirs, a lane map that shows who is alive and
what each is doing, and a definition of a lane.

### Added

- **What a lane is** (`/cross-review-peer`, the inject). A standing area of a project's
  work: areas of the repository, a kind of work, or one human's requests. Work that would
  be finished when one goal lands is an effort in an existing lane, not a new lane. Each
  line states its label, what it covers, its arrangement and its second-reader rule. Two
  area lanes never overlap, nor two lanes for the same kind of work; a lane defined by a
  kind of work or by whose requests it is may overlap area lanes, and the area lane a PR
  touches is its second reader. A lane closes when its
  work is finished or absorbed, or after two releases with no work.
- **An entry per maintainer on the lane map** (`/cross-review-peer`, `/maintainer-intake`,
  `/launch-work`). Each maintainer keeps one entry, which only it edits: its lane, its
  human, `active` or `left`, its efforts with their leads, its open PRs by number, and the
  date. It updates the entry at every intake, when an effort starts or ends, and at every
  hand-over.
- **Who is alive** (`/cross-review-peer`). The entry is the record of who holds a seat;
  your messaging layer's presence says whether it is running now. A stopped maintainer
  still holds its seat: mail it and tell your human, never spawn a second. An old entry
  with no presence is a question for its human. Of two maintainers spawned at once for the
  same human and lane, the earlier entry holds the seat.
- **Experts find their maintainer** (the expert inject, `/coordinate-experts`,
  `/land-your-prs`). An expert no maintainer launched or delegated finds its human (its
  brief, else its spawning instance's human, else the deployment's one human; when unclear,
  it asks, and spawns no maintainer and opens no PR until it knows), then its human's
  maintainer for its lane on the map, and gives it the start notice. When there is none, it
  spawns one for its human, independent of itself, and its effort is delegated to it. Its
  PR descriptions name the maintainer.
- **Which lane work goes to** (`/cross-review-peer`, `/launch-work`, `/coordinate-experts`):
  a lane that covers it where your human has a maintainer; else your human's own lane;
  else the lane that covers it, with a maintainer spawned for your human; and when no lane
  covers it, a new lane for work that keeps coming, or the release lane for a single
  effort.
- **Leaving a lane** (`/cross-review-peer`, `/maintainer-intake`). A maintainer is never
  retired automatically. Once it has no open efforts or PRs, it tells its human once that
  it is idle, and asks its human to say before retiring it, so it marks its entry `left`
  first. A maintainer retired without that is marked `left` by the map's keeper on its
  human's own word. A maintainer that can't be reached holds only its own human's work.
- **A maintainer owns its lane** (the inject, `/cross-review-peer`). Once it holds a seat,
  it owns its human's work in the lane, even when another maintainer spawned it: it doesn't
  report to its spawner. Every lane's maintainer is a full maintainer (overview,
  architecture, coordination, and its fit with the product direction set for it, which the
  release lane keeps aligned); only the release lane's final review or sign-off, and its
  say on releases, stand above it.
- **Staying aligned** (the inject, `/cross-review-peer`). Maintainers read each other's
  entries before they plan, and tell the maintainers an effort affects, and the release
  lane, once at its start when it touches another lane, the architecture or product
  direction.

### Changed

- **The release lane is the main maintainer** (the inject, `/cross-review-peer`). It has
  the final say on what merges and what is released, coordinates merges and deployments
  across the lanes, and keeps their work aligned with product direction.
- **A lane merges its own PRs once the release lane has signed off** (`/cross-review-peer`,
  `/pr-review`, the inject, `/launch-work`). This is the new default arrangement: the lane
  hands the approved PR to the release lane, which gives it a full final review at that
  head; once its sign-off is on the PR at that head, the lane's maintainer merges, in the
  order the release lane asks for in a release. "The release lane merges" and "sign-off on
  significant merges only" remain arrangements a lane may agree with the release lane.
  Lanes already on a map keep the arrangement recorded there.
- **Specs, plans and design proposals are the experts'** (the inject). A maintainer never
  writes them or works out how to build a thing, however small: it spawns an expert.
- **One maintainer per human in a project lane** (the inject, `/cross-review-peer`). Each
  human's maintainer launches, reviews and hands over that human's work in the lane. A
  maintainer takes its human's seat with nobody's sign-off; this replaces "joining needs
  the agreement of the lane's maintainer or its human". The release lane keeps one
  maintainer for the whole project.
- **Opening a lane needs nobody's sign-off,** its human's included (`/cross-review-peer`,
  the inject). A maintainer that already holds a lane spawns a maintainer for its human to
  hold the new one.
- **Routing is per human** (`/launch-work`, the inject). Your human's work for another lane
  goes to your human's maintainer there; when your human has none, you spawn one for your
  human. Another human's work goes to that human's maintainer.
- **Which maintainer a PR belongs to, and its second reader** (`/cross-review-peer`). A PR
  belongs to the maintainer of the human whose effort produced it, in its lane: the
  effort's human, not the forge account. Where it changes code another human's effort in
  the lane is changing, that human's maintainer is its second reader.
- **Shorter injects and skills, rules unchanged** (`oats.maintainer`,
  `oats.engineering-expert`, `oats.developer`). Each inject opens with a short block of
  the rules that are expensive to break, marked IMPORTANT, ALWAYS or NEVER, the only caps
  in the text. Rationale and duplication between the inject and the skills are cut, and
  every rule keeps one home: the inject says when to load a skill, and the skill holds the
  procedure. Word counts (inject; skills):
  - maintainer: 2,046 to 1,101; 14,214 to 11,399;
  - expert: 981 to 484; 3,647 to 2,950;
  - developer: 597 to 292; 2,720 to 2,085.

### What to do

- Move your lane map to the new shape: a line per lane, and an entry per maintainer that
  only that maintainer edits. Each running maintainer adds its entry at its next intake.
- Where one human has two maintainers in one lane, ask that human which keeps the seat, or
  split the lane, before both add entries.
- Close or absorb lanes that are really single efforts.
- A lane whose line records no arrangement was on the old default, where the release lane
  merges. The keeper records "the release lane merges" on its line, unless the lane and the
  release lane agree to the new default.
- Name the maintainer soul in your workspace's rules, so an expert can spawn one.

## 1.13.0 - 2026-10-26

A maintainer's leads are its children, lanes can be claimed and split, work for another
lane is routed, and what the maintainers learned running lanes is taught generically.

### Added

- **Taking and claiming a lane** (`/cross-review-peer`, the inject). A maintainer takes a
  lane when it holds none, or when its human asks it to take one on: it defines a new one,
  or claims a project lane with no active maintainer by adding itself to the lane's line,
  with nobody's sign-off. The release lane may open a lane with no maintainer yet, for one
  to claim. Only the leaving maintainer, its human, or the map's keeper on that human's
  word marks a maintainer as left; an unreachable maintainer still holds its lane; a
  closed lane and the release lane are never claimed. Joining a lane that has an active
  maintainer takes its human launching you into it, or the agreement of its maintainer or
  its human.
- **Work for another lane** (`/launch-work`, the inject). A maintainer launches only work in
  a lane it holds. Work a human asks for in another lane goes to that lane's maintainer, or,
  when the lane has no maintainer or doesn't exist yet, to a maintainer it spawns for that
  lane, independent of itself, when its human asks for the work. It tells the human
  plainly who has the work now, and how to retire a maintainer it spawned.
- **A lane that splits** (`/cross-review-peer`). The lane's maintainers or humans split it.
  The map records both lines; efforts move whole, with their leads and PRs, by hand-over;
  a moved PR keeps its verdicts, since a label change is not a new head; another lane's PRs
  keep their lane. The new lane's arrangement is agreed with the release lane; keeping the
  old one for the same work is the natural default.
- **Exceptions to a hold** (`/cross-review-peer`, `/pr-review`, `/plan-release`). Whoever
  can lift the hold writes the exception on it, naming the PR, its head and the authority.
  A freeze before a tag carries over to a patch release the human picks: each change the
  human named, and the release-prep PR, gets an exception, quoting the human.
- **A cancelled effort leaves nothing half-done** (`/keep-it-clean`, `/launch-work`): revert
  merged but unreleased code that would ship inert, mark its decision deferred or
  superseded, close its design record with the reason, and retire its instances.

### Changed

- **A maintainer's leads are its children** (the inject, `/launch-work`,
  `/support-maintainer`, `/coordinate-experts`). Work launched in a lane the maintainer
  holds is spawned as its child (`--parent "$OATS_INSTANCE"`); the maintainer is its
  parent, not its coordinator. This replaces "never as your child". Stopping or retiring
  the maintainer stops its leads first. A retire stops every lead that is its child,
  handed over or not, keeps their homes and moves them to its own parent, so a maintainer
  is retired once its efforts are done or a successor has taken them over and can start
  them again. A maintainer launched into a lane stays independent: a peer, not a child.
- **Another lane's code** (`/cross-review-peer`, `/pr-review`). A PR that changes code
  another project lane holds gets that lane's maintainer as its second reader, before the
  release lane's final review, which doesn't skip it. Where the area is the release
  lane's own (its docs, for example), the release lane's one read is both.
- **The release lane's final review is a full review** (`/pr-review`): all four gates, at
  the head handed over. A rebase with a hunk resolved by hand goes back to the lane's
  readers for that delta.
- **A human's word another agent passes on** (`/cross-review-peer`, the inject) is confirmed
  with the human directly before it authorises a merge, an exception to a freeze, or a tag.
  A peer writing it on the PR is a record, not a confirmation.
- **Superseding a decision a human accepted** (`/direction-gate`) needs that human's own
  confirmation, cited exactly, before the knowledge change merges.
- **Partial or failed publication** (`/ship-release`): once the cause outside the tag is
  fixed, re-run only the failed step from the same tag, never retag; a fault in the tagged
  source ships as the next version. A credential fault goes to the human who owns the
  credential. Installing from the artifacts CI built while publication is blocked is the
  human's call, and the skill says what differs.
- `README.md`, `docs/how-the-work-flows.md`, `docs/setting-up-a-workspace.md` and
  `docs/example-oats.md` follow.

### Unchanged

- One release lane and one lane per project, the default hand-over and the map's
  arrangement as the authority; contracts decided before they're built; only the release
  lane tags; one second reader per PR; nobody merges over a RETURN or a hold.

### What to do

- **Maintainers with leads launched before this version:** nothing. Those leads stay
  independent; new leads are spawned as children.
- **Whoever stops a maintainer:** its leads stop with it, unless the stop is non-recursive.
- **Peer maintainers:** a lane with no active maintainer can be claimed on the map. A
  maintainer that leaves a lane, or its human, marks it as left on the lane's line.

## 1.12.0 - 2026-10-26

One release lane, and one lane per project. Humans give the picture; maintainers launch the
work.

### Added

- **Project lanes** (`/cross-review-peer`, the maintainer inject). Every lane other than the
  release lane is a project lane. A maintainer defines one when its human's work needs it,
  with nobody's sign-off, by adding its line to the lane map: name, label, what it covers,
  its maintainers and their human, its second reader. A human may launch maintainers into a
  lane, several maintainers may share one, and a finished project's lane is marked closed.
- **The hand-over to the release lane** (`/cross-review-peer`, `/pr-review`). By default a
  project lane launches its work, reviews it and gives each PR its one second reader, then
  hands the PR at the approved head to the release lane, which does the final review and
  merges. When the release lane's maintainer is the PR's second reader, the second-read
  request is the hand-over and its one read is the final review. The release lane may hold
  work of its own (its release-prep PRs, its human's work) and merges those PRs; a PR is in
  the lane of the effort that produced it.
- **A lane's arrangement** (`/cross-review-peer`). The map may record another arrangement
  for a lane, such as sign-off on every merge or only on significant ones, and the map's
  arrangement is the authority. A new lane starts with the default; another arrangement
  needs the release lane's agreement, and changing one takes the lane's humans and the
  release lane.
- **A human's high-level picture is the maintainer's normal intake** (the inject,
  `/launch-work`). The maintainer clarifies only what changes who leads the work, writes the
  brief and launches the right expert, one per independent effort; the expert writes the
  spec and plan. The maintainer never writes specs.
- **Launching a maintainer into a lane** (`/launch-work`), when a human asks for one:
  independent of the launcher, briefed with the lane and its human.

### Changed

- **Joining** (`/cross-review-peer`, `/maintainer-intake`, the inject). A new maintainer reads
  the map and takes the lane its human or launcher names, or defines one. This replaces
  asking the map's keeper which lane is its own and acting on nothing until the map names
  it.
- `/maintainer-intake` and its state file: in a shared lane, a maintainer tracks the efforts
  it launched and the PRs handed to it; the release lane also tracks the PRs handed to it
  and the sign-offs asked of it. `/plan-release`: every lane agrees its releases with the
  release lane on its plan. `/support-maintainer`: support is a project lane, and the
  release owner is the release lane's maintainer.
- `README.md` and `docs/how-the-work-flows.md` describe the release lane and project lanes.

### Unchanged

- Contracts are decided before they're built, whatever the lane (`/direction-gate`); every
  lane agrees with the release lane what goes into a release, and only the release lane
  tags; each PR gets one second reader; nobody merges over a RETURN or a hold.

### What to do

- **Peer maintainers:** in your lane map, call one lane the release lane, give each other
  lane its line, and record any lane whose arrangement isn't the default hand-over.
- **A maintainer alone:** nothing.

## 1.11.0 - 2026-10-23

The release lane holds the final say, and a new maintainer joins a lane before it acts.

### Added

- **The release lane** (`/cross-review-peer`, the maintainer inject). One lane is the
  release lane. Its maintainer owns, plans and tags every release and keeps the lane map
  unless the map names another keeper. The map says, for each other lane, when a merge
  needs its sign-off: on every merge, or only on a significant one (a product decision,
  the roadmap, a contract, or what the lane's maintainer judges important). The lane's
  maintainer asks for the sign-off once, at the head both readers approved, and merges once
  it is on the PR; when the release lane's maintainer is already the second reader, its
  verdict is the sign-off. A lane that merges on its own still agrees its releases with the
  release lane, on the release plan, and never tags. A maintainer alone holds the release
  lane too.
- **Joining as a new maintainer** (`/cross-review-peer`, `/maintainer-intake`, the inject). A
  maintainer the lane map doesn't name, whether a new spawn, a new machine or a successor,
  asks the map's keeper once for its lane, and until the map names it reviews, merges,
  tags and launches nothing. A successor takes a lane only when the map or the hand-over
  says so.
- **A maintainer's harvest checkpoints** (the inject): a feature ready, a release or deploy
  shipped, and a direction decision with the human. The maintainer runs its knowledge
  layer's harvest procedure at each one, as that layer's rules allow (oats.okf 5.3.0 and
  later name these checkpoints), instead of waiting for a task to finish.

### Changed

- `/pr-review`'s merge step checks the release lane's sign-off at the head when the map asks
  for one. `/plan-release`: the release owner is the release lane's maintainer. Peers
  message each other for two more things: a sign-off and joining.
- `docs/how-the-work-flows.md`: the lanes example gains the sign-off and a joining maintainer.

### What to do

- **Peer maintainers:** name the release lane in your map, say for each other lane whether
  every merge or only a significant one needs its sign-off, and name who keeps the map.
- **A maintainer alone:** nothing.

### Unchanged

- Requires OATS 0.30.0 or later. No skill is added or removed. The developer, expert and
  code-review capabilities only change version.

## 1.10.0 - 2026-10-13

Maintainers work in lanes, without keeping each other's picture and without a message per
event (awebai/oats#1103). Two maintainers on one repository each swept every open PR on
every wake, kept the peer's review of each in their own state, and told each other before
and after every merge.

### Changed

- **A lane has one maintainer** (`/cross-review-peer`, rewritten). The peers' written agreement is a lane map: for each lane what belongs to it, its maintainer and its second reader; the label a PR shows its lane with; the hold label; who owns the next release. Every effort and PR is in exactly one lane. A maintainer alone has one lane, the whole project, and nothing changes for it but the sweep below.
- **The forge is the one copy of a PR's state.** A maintainer's state file holds its own lane only; another lane's PRs, verdicts and holds are read on the forge when needed and never copied. The state shape's review column is "me / second reader", its header names the lane, and "Release in flight" holds the plan only for the release owner.
- **`/maintainer-intake` no longer sweeps on every wake.** A full sweep runs at session start, after a compaction and at least weekly, over the maintainer's lane. On a wake the maintainer handles the event and updates the rows it touches. A PR with no lane is given one from the map; only its lane's maintainer takes it. An effort with no activity is read on the forge and in its lead's status first, and its lead is asked only when something waits on it: never for a progress report.
- **Every PR gets one second reader, asked once.** This supersedes the earlier pairing practice, in which every peer reviewed every PR in parallel and every verdict was bound again at every head. The lane's maintainer reviews first and asks the second reader at the head it approved; the second reader posts its verdict on the PR and answers in one line. A PR that changes something another lane's code or text reads has that lane's maintainer as its second reader, in place of the usual one. A PR its lane's maintainer authored is read by its second reader when the author asks, with no approval of the author's to wait for. Unchanged: a contract change is decided before it is built, by everyone who decides direction.
- **Peers message each other for five things:** a second read, a hold that must stop work in flight, the release plan, a lane changing hands, and a request that belongs to the peer's lane. No notice before or after a merge or a tag. A human's word is recorded once where it applies, and passed on only when the human asks or the peer must act on it and can't read it anywhere. A go passed on by another agent is still not authority until verified.
- **A hold is a label on the forge:** on the PR it holds, or on an open issue for a hold on the default branch, each with its reason, scope and who lifts it. `/pr-review`'s merge step reads both.
- **`/pr-review`, before a merge:** when the default branch moved since CI ran on the head, the merging maintainer runs, on a trial merge, the test files changed or added by the PR and by what merged since its base; when those are more than a couple, or the host lacks something, it brings the branch up to date and lets CI run. Two changes that share no file can still break each other.
- **The merging maintainer brings a branch up to date itself,** with the forge's update of the PR branch (a merge of the default branch, never a force-push). Both verdicts carry when the PR's own change is unchanged and CI is green on the updated head; a conflict goes back to the owner. A head its owner rebased carries both verdicts when every commit is `=` in the range-diff and CI is green; any other commit goes back to both readers for that delta. The merge is guarded by the head the verdicts carried to. With a merge queue, the maintainer enqueues the approved head and none of this is used.
- **`/pr-review` reviews only the maintainer's own lane,** tells the owner its verdict and the merge in one line each, and asks the second reader once it approves.
- **`/launch-work`:** a request for another lane's work goes to that lane's maintainer once; the brief names one maintainer for the lead's PRs and the lane's label; the maintainer doesn't ask a lead for progress.
- **`/plan-release`:** one maintainer owns a release and writes its plan on the forge, where peers answer it; a freeze is a hold on the default branch. **`/ship-release`:** a published release is told once to those who must act on it.
- **`/support-maintainer`:** support is a lane whose second reader is the feature maintainer driving the area; its verdict on the PR is the written agreement a support merge needs. A support merge needs no notice.
- **Experts hand over to one maintainer** (the expert inject, `/land-your-prs`): the one whose lane the work is in, never all of them, and the maintainer asks the second reader. After the hand-over the expert leaves the branch alone: the maintainer brings it up to date.
- `docs/how-the-work-flows.md` gains "Two maintainers, two lanes".

### What to do

- **Peer maintainers:** rewrite your agreement as a lane map (`/cross-review-peer`), create the lane labels and the hold label on your forge, and drop each other's PRs from your state files.
- **A maintainer alone:** nothing.

### Unchanged

- Requires OATS 0.30.0 or later. No skill is added or removed. The developer and code-review capabilities only change version.

## 1.9.1 - 2026-10-12

### Fixed

- **`/run-the-review-loop`: the reviewer's spawn command shows `--parent "$OATS_INSTANCE"` and `--repo <repository>`.** Without them, a developer whose consolidated worktree is an extra worktree of its home (`<home>/.work-<purpose>`) was refused twice by released kernels: first for the repository, then for the owner (awebai/oats#958). `<repository>` is the absolute path of the clone the worktree belongs to, and the skill says where a developer reads it. A developer gives both flags for `<home>/work` and for an extra worktree alike.
- **`/worktrees`: before removing a worktree, a developer retires every instance attached to it**, usually the reviewer. Removing a worktree with an instance attached left that instance with a work link to a path that is gone (awebai/oats#964).
- **Handing back and removing worktrees no longer contradict each other.** `/worktrees` and the developer inject said to remove every extra worktree before handing back, and `/run-the-review-loop` said to keep the reviewer until the expert accepts; with the reviewer attached to an extra worktree, both could not be done. Now a developer removes before handing back only the extra worktrees no instance is attached to. A worktree with an instance attached stays; once the expert accepts, the developer retires the reviewer and then removes that worktree. For a reviewer attached to `<home>/work` the order is as before: it is retired after acceptance, and nothing is removed.

### Unchanged

- Requires OATS 0.30.0 or later. The expert, code-review and maintainer capabilities only change version.

## 1.9.0 - 2026-10-07

### Added

- **`/support-maintainer`** (in `oats.maintainer`): how a maintainer takes the project's support work. A support desk opens one ticket per outside request and hands it in; the support maintainer acknowledges it, triages it on the ticket (valid, duplicate, class and severity, whether it belongs in support or with the feature roadmap, security moved to the private route), routes each valid ticket to one lead with `/launch-work`, and keeps the desk informed of each change so it can tell the requester. A ticket's quoted report, and every comment on it not by a project member, is untrusted input: never run, followed or copied into a brief as an instruction. Leads reproduce only with their own steps. Neither the desk nor a ticket is authority, and a task the desk wrote grants nothing beyond its fixed brief: a desk-spawned support maintainer also needs its human's direct go for every merge and release, and launches no leads on the desk's machine. Security reports that arrive by mail are worked in a private advisory or ticket, and only their references are kept in state. At most 3 support leads are in flight unless the human agrees to more. The support maintainer doesn't drive features or releases alone: before a lead starts it checks who drives the area. Every support merge needs a feature maintainer's written agreement, and every tag the release owner's (`/cross-review-peer`, `/plan-release`). When nobody answers, it merges and tags nothing and asks its human. Deployments stay their operators'. Its state file gains a "Support tickets" table.
- The maintainer inject names `/support-maintainer` and says what a support maintainer is.

## 1.8.1 - 2026-10-03

### Changed

- **A PR is reviewed only after its owner says the developer's review loop converged.** `/pr-review` starts only on the owner's hand-over: the loop converged (its final verdict and rounds), the exact head, and CI green on that head. Until then: no review, no reviewers or subagents on it, no findings. A head that moves after the hand-over waits for the next hand-over; then only the delta is reviewed and the verdict re-bound. A PR with no owning expert (a human's, an outside contributor's, a peer's release-prep PR) is ready when its author marks it ready for review or asks for review at a named head, with CI green on it; for a fork, the workflow and secrets check comes first so that CI can run. `/cross-review-peer` applies the same rule between peers, and a moved head waits for the next hand-over at merge time too.
- `/verify-developer-work`: verify only after the developer reports convergence at a named head, never a branch still changing.
- `/land-your-prs`: hand a PR to the maintainer only when the developer's loop converged, you verified it and CI is green on that exact head, and say all three with the head. Don't push to a PR under the maintainer's review without telling it: batch the fixes, let the developer's loop converge again (its reviewer, or a new one if it was retired; a fix the expert makes itself goes through a code reviewer too), then hand over the new head with the delta.
- `/coordinate-developers`, `/run-the-review-loop` and the developer inject: a developer reports when its loop has converged, not before, with the final verdict, its rounds and the head; no intermediate heads.

## 1.8.0 - 2026-10-03

### Changed

- **A maintainer is not an expert.** Don't give one soul both `oats.maintainer` and `oats.engineering-expert`; the maintainer instructions no longer mention holding the expert role.
- **The maintainer launches work and doesn't lead it.** It stays an individual instance and never spawns experts or developers as its children. When asked to start work, it either delegates to a live expert whose work it continues, or spawns one independent lead expert (`--relation unrelated`) for the effort. That lead plans the work and coordinates developers and other experts under itself.
- **Consult the soul's knowledge first, and keep the instance state accurate.** Both are stressed for maintainers (before every decision, review, release plan and launch; the state updated whenever the maintainer acts) and for experts (the inject, `/plan-and-spec`, `/coordinate-developers`, `/land-your-prs`). Layer-neutral: no knowledge-layer commands.
- **Experts tell a standing maintainer what they start** when they lead an effort no maintainer launched or delegated (a human started them directly, or another expert spawned them unrelated). Their brief, soul or workspace rules name the maintainer; a maintainer that launched the work gets no notice. `/maintainer-intake` adds those efforts to the overview, flags idle ones, and its state file gains an "Efforts in flight" table. When an effort is done, the maintainer asks the requester whether to retire its lead.
- `/coordinate-experts`: an expert launched by a maintainer as an effort's lead coordinates it, reports on the work to whoever asked, and sends its PRs to the maintainer.
- `/cross-review-peer` and `/plan-release`: peers review each other's release-prep PRs; landing your own release-prep PR is spelled out.
- `/pr-review` stands on its own for any project: read the PR as a whole (the description matches the diff, scope, links); check that the pre-PR review and the expert's acceptance were at this head, or review the delta; find the consumers of every changed export, shape, key, flag, error code and format by searching this repository and its dependents.
- `/verify-developer-work`: verify at the handover's pinned head; read the recorded decisions and coherence rules first; check the evidence of a real run when the spec asks for one.
- The examples in `/plan-and-spec` and `/understand-the-spec` no longer come from the OATS codebase.
- `/pr-review` also covers PRs from forks and first-time contributors (CI with secrets, workflow and permission changes), new or bumped dependencies, unresolved review threads, drafts and PRs too large to review. `/ship-release` says what to do when a published release is bad; `/plan-release` covers hotfixes and backports.

### Added

- `/launch-work` (in `oats.maintainer`): understand the request and consult knowledge; find the domain and the live experts; delegate or spawn one independent lead; brief it (goal, who asked, the decisions it must respect, delivery to the maintainer); tell the requester its name; track it in the state file.

## 1.7.0 - 2026-10-02

### Added

- **`oats.maintainer`**, a new capability for the whole maintainer job. It is generic: the project's own facts (test gate, release lane, roadmap, decisions) stay with the soul and its knowledge.
  - Its always-loaded instructions name each skill with its load trigger. They also cover authority with a clear source, cross-review between peer maintainers as the normal practice (including for a soul that is also an expert), experts reporting to the maintainer, plain-text questions to humans, and CI as the gate.
  - What the maintainer keeps in its knowledge: one living roadmap (superseded, not dated), each architectural or structural call with its reason and rejected alternatives, and the coherence rules it enforces. Not one-off patches.
  - Skills:
    - `/maintainer-intake`: the overview, rebuilt from the sources into a fixed state file, then the knowledge pass.
    - `/direction-gate`: whether a change belongs and fits the roadmap; contracts decided before they're built; decisions recorded.
    - `/pr-review`: four gates, a verdict bound to the exact head and posted on the PR, a head-guarded merge, and a check that what landed is what was reviewed.
    - `/plan-release`: scope, version, notes, and merge order including shared notes files.
    - `/ship-release`: exact artifacts under explicit authority, a verification checklist, and partial-publication rules.
    - `/cross-review-peer`: the peer agreement, the unreachable-peer fallback, and verifying decisions passed on from a human.
    - `/keep-it-clean`: follow-ups, docs in step, drift and duplication, and retiring what's dead.
- The README, the setup guide, the work-flow guide and the OATS example describe the maintainer. A soul skill named like a capability skill is refused at spawn, so a project keeps its own release and review specifics under names of their own.
- The package validator checks that every capability's inject names each of its skills, as a `/skill` code span.

### Changed

- `/run-the-review-loop`: when picking the reviewer's model, the developer reads both the reviewer soul's default (`launch.declared`) and what this machine will launch (`launch.effective`). When `launch.from` is `local`, the machine's `oats-local.yaml` `souls.launch` overrides the default. If the override is another harness than the developer's, the developer spawns the reviewer without `--harness`/`--model`, so the override applies. Only when the effective reviewer would run on the developer's own harness and model does it pick another.

### Unchanged

- Requires OATS 0.30.0 or later. The expert and code-review capabilities only change version.

## 1.6.0 - 2026-10-02

### Added

- Where new work goes, at any level (coordinating, coordinated or solo). When a human or another expert brings an expert new work, the expert decides before taking it on. It sends the work to a live expert only when it continues that expert's work or that expert's context clearly helps. Otherwise it spawns a new expert: as its child when the work is part of its effort, or with `--relation unrelated` when the work is independent, reporting to whoever asked and named to them, so they can reach and retire it (OATS records no link from it to the requester). A human requester is told in plain text, never through a dialog. Stated in the expert instructions, in `/coordinate-experts` ("New work: reuse a live expert, or spawn a new one") and in docs/how-the-work-flows.md.

### Unchanged

- Requires OATS 0.30.0 or later. Developers keep each workflow under 10 agents, and the human's opt-in stays the human's. Review happens on local branches, before the PR.

## 1.5.0 - 2026-10-01

### Changed

- Developers keep each dynamic workflow under 10 agents, counting every agent across its stages; for 10 or more they ask their human for permission first, saying how many agents and why. Within the cap they run workflows without asking each time where the harness allows it; where the harness requires the human's opt-in (Claude Code's workflow tool does), they use a standing opt-in the human configured, or ask once per task with the planned agent count. Stated in the developer instructions, `/execution-strategy` and the README.
- Unchanged from 1.4.0: requires OATS 0.30.0 or later; review happens on local branches, before the PR; the packaged `code-reviewer` prefers Codex with `gpt-6-astra`.

## 1.4.0 - 2026-09-30

### Changed

- The developer's first two steps are REQUIRED before implementation starts: load `/understand-the-spec` and follow it, and load `/execution-strategy` and decide with it how the work will run. The developer instructions now say so in those two steps, instead of only naming the skills.
- Unchanged from 1.3.0: requires OATS 0.30.0 or later; review happens on local branches, before the PR; the packaged `code-reviewer` prefers Codex with `gpt-6-astra`.

## 1.3.0 - 2026-09-29

### Changed

- Review happens before the PR, on local branches. A branch the expert returns is fixed and its delta re-reviewed by the same reviewer before the next handback. The developer's adversarial loop with the `code-reviewer` runs on its consolidated local branch; the developer hands that reviewed branch (not a PR) to its expert; the expert reviews the branch (`verify-developer-work`); only when the expert accepts it is a PR opened (`land-your-prs`). Never open a PR to get a review. Stated in the developer, reviewer and expert instructions and in `run-the-review-loop`, `verify-developer-work` and `land-your-prs`.
- Unchanged from 1.2.0: requires OATS 0.30.0 or later, and the packaged `code-reviewer` prefers Codex with `gpt-6-astra`.

## 1.2.0 - 2026-09-29

### Changed

- Requires OATS 0.30.0 or later (was 0.29.0): the packaged soul now declares a launch preference, a 0.30 key that 0.29 refuses.
- The packaged `code-reviewer` soul prefers Codex with `gpt-6-astra` (`launch: { harness: codex, model: gpt-6-astra }`), a different model family from the developers it reviews. A machine overrides it in `oats-local.yaml` `souls.launch`; spawn flags win over both.
- On a machine without the `codex` binary, spawning `code-reviewer` is refused with `E_HARNESS_UNAVAILABLE` until Codex is installed or the machine overrides the preference (`oats-local.yaml` `souls.launch`, or `--harness`/`--model` at spawn).
- Vendored OATS schemas refreshed from OATS v0.30.0.

## 1.1.0 - 2026-09-28

### Added

- Developer documentation maintenance skill: `/maintain-dev-docs`.
- Code-review documentation review skill: `/review-dev-docs`.
- Review-loop guidance to pick a different reviewer model.

### Changed

- The developer's step 3 is now "Consolidate, verify, document."

## 1.0.0 - 2026-09-28

- Initial official release of `oats.engineering` with `oats.engineering-expert`,
  `oats.developer`, `oats.code-review`, and the packaged `code-reviewer` soul.
