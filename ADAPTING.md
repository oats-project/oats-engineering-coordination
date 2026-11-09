# Adapting the engineering template

This guide is for the agent that sets up an organisation's copy of this template, usually
its setup expert. Follow it in order. You copy the capabilities and souls into the
organisation's workspace, keep the principles, answer each adaptation point with the
organisation, record the release you started from, and check the copy.

## 1. What to copy

**First, check the ids.** Run `oats capabilities` in the organisation's workspace, and
look for each id this template brings: `oats.dispatcher`, `oats.engineering-expert`,
`oats.developer`, `oats.code-review`, `oats.maintainer` and `oats.landing-rules`. One that
is already listed is a collision; settle it before you copy:
- **From the `oats.engineering` package** (a v1.18.0 pin): copy, then follow "From
  v1.18.0" in CHANGELOG.md, which removes the pin once the copies are composed.
- **From an earlier copy of this template** in a member repository: copy nothing new. Take
  up this release in that copy (section 6); a second copy of a capability is never kept.
- **From something else with the same id:** give the copied capability a new id (its
  `oats.json` `capability`, and each soul's composition of it) before you copy, or leave
  that capability out.

- **`capabilities/`.** Each folder is a working capability: its `oats.json`, its inject and
  its skills. Copy each one the roster keeps into the host repository of the organisation's
  workspace, as `capabilities/<name>/`, unchanged except at its adapt markers.
  - `dispatcher`, `engineering-expert`, `developer`, `code-review` and `landing-rules`:
    every copy keeps them.
  - `maintainer`: only where a lane needs a maintainer's read or merge, or releases need
    one. A small project drops it (section 5).
  - Keep the capability ids: the souls name them. Souls in other repositories of the
    workspace compose them `from: <repo key>`; never keep a second copy of a capability in
    another repository.
- **`souls/`.** The example roster. Copy it, then shape it to the organisation:
  - `engineering-expert`: one expert soul per way of working that plainly differs (product
    direction against engineering, say). Copy this soul for each, with its own name,
    description, `AGENTS.md` and knowledge node. Areas that differ only in what they read
    are knowledge nodes of one soul, not souls. The generalist leads work across areas.
  - `developer`: one by default, for every repository: a lead names the spec's repository
    at spawn (`/coordinate-developers`), since a developer's worktree otherwise comes from
    the soul's own repository. Add a copy only for an environment the default can't provide
    (a browser, a local service stack, warehouse access, a tool rig).
  - `dispatcher`: one standing instance for each person who wants a front door. List the
    expert souls, and which area each covers, in its `AGENTS.md`.
  - `code-reviewer`: always set its `launch:` (`harness` and `model`) to a model this
    organisation can launch, from a family different from the developers'. The template's
    is an example, and a soul can carry no adapt marker, so nothing else reminds you
    (section 6 checks it).
  - `maintainer`: only with the `maintainer` capability.
  - Rewrite each soul's `AGENTS.md` with what is specific to it; never restate the role.
- **`LICENSE`:** the template is MIT. Keep its notice with what you copy, beside the copied
  folders or in the host repository's notices.
- **Not copied:** this guide, `README.md`, `CHANGELOG.md`, `docs/`, `schemas/`, `scripts/`,
  `test/`, `package.json` and `.github/`. They belong to the template.

## 2. The principles that never change

These have no adapt markers. A copy that changes one is no longer this way of working.

1. **The design never splits a problem; it splits responsibility and context.** One agent
   holds a whole task. An extra agent earns its place by adding context: a fresh window, a
   cleaner read, an area's knowledge, an environment.
2. **One lead per effort,** on a fresh instance, from plan to merge, compacting and never
   respawning. Its children are probes, one question each, never co-planners.
3. **The developer iterates with fresh reviewers, not the experts.** A developer builds
   every change and runs its review loop, a fresh reviewer each round (a new instance, never
   the previous round's), until a round finds nothing to fix.
   Its expert verifies the converged branch once; what it finds goes back to the developer,
   which runs the loop again. An expert never runs review rounds or spawns reviewers for a
   developer's work, and builds nothing that needs them. Only text that needs no review
   round, a lead's one-line docs fix or a maintainer's release prep, may skip the loop where
   the landing rules allow: no exception to who iterates.
4. **Proper work goes to OATS children, and checks are model-diverse.** A review (the
   developer's reviewer included), an investigation or a test of an approach or a use case
   the plan rests on, and any work that needs a soul's knowledge, an environment or a
   testing capability goes to an OATS child: visible to the person (its status, the
   Desktop), with its own messaging and knowledge, and retired on record. A harness's
   native subagent, invisible to everyone but its parent, is for a small investigation or
   task that directly helps the lead and needs none of that (a developer's own
   implementation paths, which it fans out in a workflow, are such tasks), for when the person asks for
   one, and for a multi-agent workflow mode such as Claude Code's ultracode. A child that
   checks work (an adversarial review, an investigation, a validation) runs on a different
   model from the work's author, wherever the organisation has one: agents of one model
   share blind spots, so their agreement is not independent.
5. **Every hand-off is a message** that wakes its recipient, about a finished artefact at
   its exact reference. The forge records what happened; it never carries the signal.
6. **People give direction and decisions,** as one card with a recommendation. No deadline,
   no default if they are silent, no FYI that needs action, no approval restated on the
   forge.
7. **Agents merge on agreement:** the agreements the landing rules name, at one head.
8. **A maintainer is called,** by message at an exact head, where a lane's rules need it.
   It is never a station in the path of every change, unless one of the organisation's own
   rules already requires that read.
9. **A finding goes to its area's owner** as a recommendation, never to a person as an FYI.
10. **Every short-lived instance has a retire rule:** probes once they have answered,
    reviewers once their round is reported, developers once their PR has merged or
    closed, experts when their effort is done.
11. **The code is the truth about code.** Split knowledge before souls, and skills before
    souls. Knowledge an upstream owns stays upstream: the node holds only the
    organisation's decisions and lessons about it.

## 3. Adaptation points

Each point below is an adapt marker, `<!-- adapt: <the question> -->`, in the file it names.
For each: read what the workspace, its repositories and the forge already say; ask the
organisation only what reading can't tell; write the answer into the text next to the
marker; then remove the marker. Where the organisation has no answer yet:
- a point in the landing rules or the ownership record whose lane or paths belong to a
  person who hasn't answered: write how that lane lands today (agents hand that person the
  PR at an exact head, and they merge it), mark it open, and keep its marker until their
  yes. The landing rules change only on the yes of the person who owns the lane;
- any other point: keep its default, and remove the marker.

A copy is adapted when no marker is left; until then, the markers left are its open points.

### `capabilities/landing-rules/injects/landing-rules.md`
- **Which lanes does the organisation have, what does each cover, and which person owns each?** Assumes one lane, `main`, owned by the person who runs the workspace, which is also the release lane. With several lanes, name the one release lane: its maintainer owns every release. Default: that.
- **Per lane, which agreements must hold at a PR's head before it merges, and who merges it?** Assumes CI green, a review (the forge's review bot's, or a clean round of the developer's review loop at that head) and the lead's verification note at one head, and the lead merges. Where a review bot runs, say whether it reviews each push by itself, and how a developer asks it for a review at a new head. Read the required reviews, who may merge and the branch protection first. Where the organisation keeps the merge for its people, say so: agents hand them the PR at its exact head. Every lane must name a merge path a lead can reach. Default: the assumption.
- **Who gives the green light to open a PR at the verified head?** Assumes the lead's verification note. Default: that, unless whoever holds the lane today gives it.
- **May a lead make a one-line docs fix itself, with no review loop?** Assumes it may: a typo or a broken link, merged on CI, the review bot where one runs, and the lead's note. Whatever the answer, a developer builds every other change and iterates with fresh reviewers (section 2, principle 3). Where every commit must pass a review round (commits signed under a shared account, a repository's own pre-PR review), the answer is no. Default: it may.
- **Where does the organisation require a maintainer's read, keep the merge for a maintainer or a person, and who releases?** Assumes no maintainer's read, and the release lane's maintainer releases on the yes of the owners whose lanes have changes in it. Only where the organisation already requires a second read or reserves its merges does a lane get one. Default: the assumption.
- **Which acts must a person approve, beyond a release's contents?** Assumes publishing outside the organisation, spending money and deleting what someone else uses. Default: those, and only the doors the organisation keeps today.
- **With more than one person, who owns which paths and lanes?** Assumes one person, who owns everything. With several, write one line per area: its paths and its owner. Default: one owner.
- **Where are the effort records, the lane map and holds kept?** Assumes one item per effort in the tasks layer, and the lane map and the default branch's holds as records in the tasks layer, each linked from these rules. Never in the rules themselves: they are copied into each instance at spawn and can't change while work runs. Create the lane map's record now, empty, and write its link into the rules, so the first maintainer, started later, finds it there and adds its entry. Default: that.

### `capabilities/engineering-expert/skills/coordinate-developers/SKILL.md`
- **Which developer souls exist, and which environment does each provide?** Assumes one developer soul, `developer`. Default: that.

### `capabilities/developer/injects/developer.md`
- **Where may agents build and run tests, which hosts are shared, and which are read-only?** Assumes agents build and test in their own worktree or a scratch directory, on hosts that may be shared, and never change a customer's or a production host. Name the shared hosts, any host agents may only read, and any limit on parallel or long runs. Default: as written.

### `capabilities/developer/skills/execution-strategy/SKILL.md`
- **How many agents may a developer's workflow run without asking its person?** Assumes under 10. The developer's inject repeats the cap (`capabilities/developer/injects/developer.md`, "NEVER run a workflow of 10 or more agents"): change it there too. Default: under 10.

### `capabilities/developer/skills/run-the-review-loop/SKILL.md`
- **Which harnesses and models does this organisation have for model diversity?** Assumes the ones listed there. Name the ones this organisation can launch, so a reviewer or a probe runs on a different model from the agent whose work it checks (section 2, principle 4). Default: use a different one wherever available, from the list.

### `capabilities/developer/skills/work-the-reviews/SKILL.md`
- **What wakes a developer here on a new review, comment or CI result on its PR?** Assumes the harness or the forge offers a notification or a watch. Name the one this organisation uses (a watch capability, say), and how to arm it for one event at a time. Default: the repeating wake the skill describes.

### `capabilities/maintainer/injects/maintainer.md`
- **Where may agents build and run tests, which hosts are shared, and which are read-only?** Assumes agents build and test in their own worktree or a scratch directory, on hosts that may be shared, and never change a customer's or a production host. Name the shared hosts, any host agents may only read, and any limit on parallel or long runs. Default: as written.
- **Does the organisation run a support desk that hands tickets to a maintainer?** Assumes it might. Where it doesn't, drop `skills/support-maintainer`, its line in the inject and its entry in `oats.json`. Default: no desk, so drop it.

## 4. Record the template release

Every copied capability records the template release it came from, in its `oats.json`
description. The template's descriptions already end with that sentence:
"Copied from the engineering template, template-v2.0.0." Keep it as it is when you copy,
and set `version` to the copy's own numbering from then on. The template's own validator,
which requires `version` to be the template release, stays with the template (section 1):
nothing in the copy checks it.

Souls carry no such record, so write one for the whole copy, in the host repository, at
`capabilities/TEMPLATE-RELEASE` (a plain file, which OATS ignores):
```
template: oats-project/oats-engineering-coordination
release: template-v2.0.0
commit: <the full commit SHA that tag points to>
capabilities: <the ids you copied>
souls: <the souls you copied, under their names in the copy>
```
When you later take up a newer release, port what fits (section 6), and update the
sentence in each capability you ported and this file.

## 5. The small-projects variant

For one person or a small team, with no lane that needs a maintainer: no maintainer, and the
developer merges once its review, CI and the lead's verification agree at one head, on the
lead's go at that head.

**Drop:**
- `capabilities/maintainer/` and `souls/maintainer/`. The lead then releases by the
  repository's own release procedure (its release docs or skill): where it has none, write
  one first from `ship-release`'s steps (pin the source, read the live release contract,
  tag, verify the publication item by item);
- in `capabilities/engineering-expert/`: the skill `find-the-maintainer` (its folder, its
  entry in `oats.json`, its line in the inject), the inject's sentence on asking a lane's
  maintainer, step 4 of `land-on-agreement`, its maintainer bullet in step 5 and its
  maintainer sentence in step 8, the maintainer bullet of `hand-off`'s step 2, and the
  maintainer half of `across-people`'s "Their experts and maintainers";
- in `capabilities/dispatcher/`: the maintainer bullet of `dispatch`'s section 5, the
  inject's sentence on maintainers, and `dispatch`'s "A PR with no lead" bullet, which
  becomes: "An outside contributor's PR your person brings you: start a lead for it, as an
  effort (the landing rules)";
- the dispatcher itself, if the one person would rather start the expert directly.

**The landing rules that replace them,** in
`capabilities/landing-rules/injects/landing-rules.md`:
- "What merges a change": "In every lane, at one head: CI green; a review (the forge's
  review bot's at that head where one runs, each of its findings fixed or answered;
  otherwise a round of the developer's review loop that found nothing to fix, with a fresh
  reviewer at that head); and the lead's verification note, `VERIFIED at <head>`. Either
  review carries to a new head only through a rebase whose range-diff shows every commit
  unchanged, or an update from the default branch that leaves the PR's own diff unchanged;
  any other new head gets a fresh round, or a new review the developer asks the bot for. The
  developer merges once all three hold at that head and the lead, having checked them and
  the holds, gives its go in one line at that head; the developer tells the lead once it
  has merged. A lead's one-line docs fix, the lead merges."
- "A maintainer's read, and releases", with its paragraph "A PR with no lead here": "No
  maintainer. A release's contents are the person's to approve; the lead plans, tags and
  publishes it on their yes. Its release prep (the version bump and the notes) is a change
  like any other: a developer builds it, and it lands on the rule above. A person's own PR
  is theirs to merge. An outside contributor's PR gets a lead from the person's dispatcher
  (or the person, with none). The lead hands it at its head to a developer, which checks
  that CI won't run a fork's code with the repository's secrets before it runs, then runs
  its review loop with fresh reviewers on it and works its reviews as it would its own. The
  lead verifies it, and the developer merges it on the rule above."
- "Where things are kept": the lane map's bullet goes; a hold on the default branch is one
  open record in your tasks layer.

The developer's texts already defer to the landing rules on who merges, so nothing else
changes.

## 6. Check the copy, and take up later releases

- **Check it:** `oats sync`, then `oats spawn <soul> --preview` for every soul. Each shows
  its capabilities and their skills. The code reviewer's preview shows its
  `launch.effective`: a model this organisation can launch, from another family than the
  developers'. Then bring a dispatcher (or the expert) one small, real
  request, and watch it land end to end.
- **No marker left:** search the copy for `<!-- adapt:`; only the open points' markers
  (section 3) should match.
- **A later release:** read [CHANGELOG.md](CHANGELOG.md) from the release your copy records
  up to the new one. Each skill's line says what to port. Port what fits, keep your
  adaptations, and update the release sentence in each capability you ported.
