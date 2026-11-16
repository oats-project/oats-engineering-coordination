# Adapting the engineering template

This guide is for the agent that sets up an organisation's copy of this template, usually
its setup expert. Follow it in order. You copy the capabilities and souls into the
organisation's workspace, keep the principles, answer each adaptation point with the
organisation, record the release you started from, and check the copy.

## 1. What to copy

**First, check the ids.** Run `oats capabilities` in the organisation's workspace, and
look for each id this template brings: `oats.dispatcher`, `oats.engineering-expert`,
`oats.build`, `oats.developer`, `oats.code-review`, `oats.maintainer` and
`oats.landing-rules`. One that
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
  - `dispatcher`, `engineering-expert`, `build`, `developer`, `code-review` and
    `landing-rules`: every copy keeps them.
  - `build` is skills only, with no inject: what the team adds to building a change
    (`oats.build`). The developer and the expert both compose it, since whoever builds a
    spec, a developer or its lead, builds it the same way.
  - `maintainer`: only where a lane asks for a maintainer's green light or keeps its
    merge, or releases need one. A small project drops it (section 5).
  - Keep the capability ids: the souls name them. Souls in other repositories of the
    workspace compose them `from: <repo key>`; never keep a second copy of a capability in
    another repository.
- **`souls/`.** The example roster. Copy it, then shape it to the organisation:
  - `engineering-expert`: one expert soul per specialisation that plainly differs (product
    direction against engineering, say). Copy this soul for each, with its own name,
    description, `AGENTS.md` and knowledge node. Areas that differ only in what they read
    are knowledge nodes of one soul, not souls. Any expert soul can hold any of the three
    seats: an effort's root lead, a specialist for one area of a lead's effort, or a
    short-lived helper or probe. The generalist leads an effort no specialisation fits
    better.
  - `developer`: one by default, for every repository: a lead names the spec's repository
    at spawn (`/coordinate-developers`), since a developer's worktree otherwise comes from
    the soul's own repository. Add a copy only for an environment the default can't provide
    (a browser, a local service stack, warehouse access, a tool rig).
  - `dispatcher`: one standing instance for each person who wants a front door. List the
    expert souls, and each one's specialisation, in its `AGENTS.md`.
  - `code-reviewer`: always set its `launch:` (`harness` and `model`) to a model this
    organisation can launch, from a family different from the developers'. The template's
    is an example, and a soul can carry no adapt marker, so nothing else reminds you
    (section 6 checks it).
  - `maintainer`: only with the `maintainer` capability.
  - Rewrite each soul's `AGENTS.md` with what is specific to it; never restate the role.
- **`LICENSE`:** the template is MIT. Keep its notice with what you copy, beside the copied
  folders or in the host repository's notices.
- **`THIRD-PARTY-NOTICES.md`:** a few rules of the build skill for the repository, and the
  quality floor in the developer's and the expert's injects, adapt rules from MIT-licensed
  sources. Copy it beside the copied capabilities, and keep it while they stay.
- **Not copied:** this guide, `README.md`, `CHANGELOG.md`, `docs/`, `schemas/`, `scripts/`,
  `test/`, `package.json` and `.github/`. They belong to the template.

## 2. The principles that never change

These have no adapt markers. A copy that changes one is no longer this way of working.

1. **The design never splits a problem; it splits responsibility and context.** One agent
   is the default: several cost 3 to 10 times the tokens of one, and buy coverage, not a
   better answer. Another agent earns its place by one of three reasons, named in its
   brief: protecting context, parallel work, or specialisation (an environment, tools,
   instructions or knowledge its parent lacks). Split by context, never by kind of work:
   whoever specifies a piece sees it built, tested and verified.
2. **One root lead per effort, and a tree sized to the work.** The lead is a fresh
   instance of the expert whose specialisation fits the effort best, from plan to merge,
   compacting and never respawning. A simple effort is one agent. A complex or creative
   one that is not large adds short-lived probes and helpers, each with a closed brief. A
   large one, or one across several areas, gets one long-lived specialist per area, each
   leading its area inside the lead's plan. The plan stays the root lead's: never a
   co-planner, and never a second lead for a step of it. A new effort gets its own lead,
   and the person hears its name.
3. **Every instance holds exactly one seat,** named in the first line of its task: root
   lead, specialist, or helper or probe. Whoever launches an instance writes that line.
4. **Whoever builds a change iterates with fresh reviewers, and nothing lands without a
   fresh review.** Whoever specifies a piece decides who builds it: itself, or a developer
   (`/plan-and-spec`, "Who builds it"). The author runs the review loop: a new
   `code-reviewer` instance each round, the author's OATS child, until a round finds
   nothing to fix; at least one round, always. No author reviews its own work. Whoever
   specified a developer's work verifies its converged branch once, writes `VERIFIED at
   <head>`, and never runs review rounds for it. A one-line docs fix skips the local
   loop, not the review. Only a maintainer's release prep needs no review round.
5. **Proper work goes to OATS children, on a model at or above the floor, and checks are
   model-diverse.** A review, an investigation, a test of an approach, and any work that
   needs a soul's knowledge or an environment goes to an OATS child: visible to the
   person and retired on record. A harness's native subagent is for a small task that
   directly helps its parent, for when the person asks for one, and for a multi-agent
   workflow mode in use. No child runs on a weaker model tier than its parent's. A child
   that checks work runs on a different model from the work's author where one at or
   above the floor exists: agents of one model share blind spots.
6. **Every hand-off is a message** that wakes its recipient, about a finished artefact at
   its exact reference. The forge records what happened; it never carries the signal.
7. **People give direction and decisions,** as one card with a recommendation. No deadline,
   no default if they are silent, no FYI that needs action, no approval restated on the
   forge.
8. **Agents merge on agreement:** the agreements the landing rules name, at one head.
9. **A maintainer is called,** by message at an exact reference, where a lane's rules ask
   for it. It is never a station in the path of every change, unless the organisation
   chooses its green light for a lane (section 3). "Green light" means only a lane
   maintainer's verdict at an exact head: on direction, contracts, coherence, scope and
   evidence, never a second code review.
10. **A finding goes to its area's owner** as a recommendation, never to a person as an FYI.
11. **Every finished instance retires itself, and its parent checks that it is gone.** A
    reviewer once its report is sent, a probe once it has answered, a developer or a
    helper once its PR has merged or closed, a specialist when its area is done, a lead
    when its effort is done. Only a maintainer and a dispatcher hold standing seats,
    which their person retires.
12. **The code is the truth about code.** Split knowledge before souls, and skills before
    souls. Knowledge an upstream owns stays upstream: the node holds only the
    organisation's decisions and lessons about it.

**How the texts are composed.** Keep this shape when you write an answer into them:
- A briefing (an inject) has one order: what you are, how the work flows, the rules that
  aren't obvious (each with its reason), and which skill to open at which moment.
- A skill is one team procedure for one moment. What is longer than a screen or two sits
  in a `references/` file one level down, which the skill names.
- A rule lives in one place. What every role must hold (instance names, the model floor,
  the hosts) is in the landing rules' house rules, once; no other text repeats it.
- The texts leave out what a current model does unprompted. General engineering practice
  (writing tests first, debugging method, design) isn't restated: an organisation that
  wants its own practice enforced adds its repository's rules, which the build skill
  reads first. template-v3.1.3 keeps the earlier, longer skills for a copy that wants
  them.
- Capitals (IMPORTANT, ALWAYS, NEVER) mark a handful of rules per briefing. Don't add
  more: where everything is marked, nothing is.

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
- **Which lanes does the organisation have, what does each cover, and which person owns each?** Assumes one lane, `main`, owned by the person who runs the workspace, which is also the release lane. With several lanes, name the one release lane: its maintainer owns every release. There is no lane map: a lane's maintainer is found by its instance name, `<person>-<lane>-maintainer`, so give each lane and each person a short name that fits in one. Default: one lane.
- **Per lane, which agreements must hold at a PR's head before it merges, and who merges it?** Assumes CI green, a review (the forge's review bot's, or a clean round of the author's review loop at that head) and, for a developer's work, `VERIFIED at <head>` from whoever specified it, at one head, and the lead merges (the specialist, for its area's PRs). Where a review bot runs, say whether it reviews each push by itself, and how a developer asks it for a review at a new head. Read the required reviews, who may merge and the branch protection first. Where the organisation keeps the merge for its people, say so: agents hand them the PR at its exact head. Every lane must name a merge path a lead can reach. Default: the assumption.
- **Where does the organisation require a maintainer's green light on a PR, keep the merge for a maintainer or a person, and who releases?** Assumes no green light, and the release lane's maintainer releases on the yes of the owners whose lanes have changes in it. The green light is an option, chosen per lane. Recommend it for a large project: several efforts in parallel in one lane, several people, or contracts other teams rely on, where one seat that holds the lane's direction is worth one more call on every PR. Leave it out for a small or personal project, where the lead's own agreements are enough and a maintainer would only add a step. To choose it for a lane, write into this rule that every PR in that lane needs the green light of the lane's maintainer at the head being merged, and keep the `maintainer` capability and soul. Default: no green light.
- **Which acts must a person approve, beyond a release's contents?** Assumes publishing outside the organisation, spending money and deleting what someone else uses. Default: those, and only the doors the organisation keeps today.
- **With more than one person, who owns which paths and lanes?** Assumes one person, who owns everything. With several, write one line per area: its paths and its owner. Default: one owner.
- **Where are the effort records and holds kept?** Assumes one item per effort in the tasks layer, a hold on a PR marked on that PR, and a hold on the default branch as one open record in the tasks layer. Never in the rules themselves: they are copied into each instance at spawn and can't change while work runs. Default: that.
- **Which is the weakest model tier a child may run on, in each model family the organisation launches?** Assumes the spawning agent's own tier: a child, an OATS child or a native subagent, never runs on a smaller, faster or cheaper model than its parent's, in the parent's family or another. This rule is written once, here, for every role; the code reviewer's inject, which has no landing rules, keeps "than yours". Name the floor for each family the organisation launches (a tier, say, not a version, so it outlives a release). Default: as written.
- **Where may agents build and run tests, which hosts are shared, and which are read-only?** Assumes agents build and test in their own worktree or a scratch directory, on hosts that may be shared, and never change a customer's or a production host. Name the shared hosts, any host agents may only read, and any limit on parallel or long runs. Default: as written.

### `capabilities/landing-rules/skills/landing-rules-detail/SKILL.md`
- **Which checks does the forge require on the default branch?** Assumes any number, none included: CI green needs at least one check to have run at the head, every required check among them, and every check that ran succeeded, so a head is never green with a check red, and a forge that requires none still needs one to run. Read which checks the default branch requires (its protection and rulesets). Where agents should wait for specific checks, have the organisation require them. Default: the definition, as written.
- **What must hold before a PR opens, beyond the verification of whoever specified the work?** Assumes nothing more: `VERIFIED at <head>` for a developer's work or a helper's piece, and the round that found nothing to fix for a change a lead or a specialist built itself. Default: that, unless whoever holds the lane today asks for more.

### `capabilities/landing-rules/skills/landing-rules-detail/references/more-rules.md`
- **May a change land with no fresh review (a typo, a broken link)?** Assumes no: nothing lands without a fresh review (section 2, principle 4). A one-line docs fix skips the local loop, not the review: CI green and one fresh review at its head, the review bot's where one runs, otherwise one reviewer round. A copy that answers yes for some change departs from that principle, and says so beside the rule. Default: no.

### `capabilities/engineering-expert/skills/plan-and-spec/SKILL.md`
- **What counts as a large feature here, past which a lead always sends developers?** Assumes more than one surface, or sustained building and testing: a large feature always goes to developers, one per surface, and below that the three cases in "Who builds it" (context, parallel work, specialisation) decide each spec. Name a size or a kind (a migration, a change across repositories) where the organisation draws the line elsewhere. Default: more than one surface, or sustained building and testing.

### `capabilities/engineering-expert/skills/orchestrate-agents/SKILL.md`
- **Which expert souls can lead an area as a specialist, and what does each bring (knowledge, tools, an environment)?** Assumes the template's one expert soul, `engineering-expert`, a fresh instance per area. List the organisation's expert souls, each with what it brings, so a lead gives each area to the soul that specialises in it. Default: the generalist, for any area.

### `capabilities/engineering-expert/skills/orchestrate-agents/references/probes.md`
- **How many probes may a lead run in parallel for one decision?** Assumes up to 4, one per competing approach. A probe costs a full instance's run, so name a lower cap where runs are expensive, or a higher one where decisions are worth it. Default: up to 4.

### `capabilities/engineering-expert/skills/coordinate-developers/SKILL.md`
- **Which developer souls exist, and which environment does each provide?** Assumes one developer soul, `developer`. Default: that.

### `capabilities/engineering-expert/skills/land-on-agreement/references/find-the-maintainer.md`
- **What does a maintainer do in this organisation, in the words a lead tells its person?** Assumes the template's maintainer: the standing agent for a lane, which holds the lane's direction across efforts, answers the calls its landing rules name and keeps its releases. Rewrite the sentences a lead says, in plain words, where the organisation's maintainers do more or less (where a lane asks for the green light on every PR, or people keep the merge, say). Default: the template's sentences.

### `capabilities/build/skills/build-in-the-repository/SKILL.md`
- **How many agents may a developer's workflow run without asking its person?** Assumes under 10, counted across all stages. Default: under 10.
- **Does the organisation enforce the quality floor with its runtime's hooks, and with which checks?** Assumes the floor is written only, and agents keep it. Where the runtime has hooks (a tool hook, a pre-commit hook, CI), name the check that enforces each rule (new suppressions, skipped or weakened tests, stubs, empty catches) and where it is installed. Default: written only.

### `capabilities/build/skills/run-the-review-loop/references/model-and-history.md`
- **Which harnesses and models does this organisation have for model diversity?** Assumes the reviewer soul's `launch:` names a model of another family than the developers'. Name the ones this organisation can launch, each at or above the model floor, so a reviewer or a probe runs on a different model from the agent whose work it checks (section 2, principle 5). Default: a different one wherever available.

### `capabilities/build/skills/work-the-reviews/SKILL.md`
- **What wakes a developer here on a new review, comment or CI result on its PR?** Assumes the harness or the forge offers a notification or a watch. Name the one this organisation uses (a watch capability, say), and how to arm it for one event at a time. Default: the repeating wake the skill describes.

### `capabilities/maintainer/injects/maintainer.md`
- **Does the organisation run a support desk that hands tickets to a maintainer?** Assumes it might. Where it doesn't, drop `skills/support-maintainer`, its line in the inject and its entry in `oats.json`. Default: no desk, so drop it.

## 4. Record the template release

Every copied capability records the template release it came from, in its `oats.json`
description. The template's descriptions already end with that sentence:
"Copied from the engineering template, template-v4.0.0." Keep it as it is when you copy,
and set `version` to the copy's own numbering from then on. The template's own validator,
which requires `version` to be the template release, stays with the template (section 1):
nothing in the copy checks it.

Souls carry no such record, so write one for the whole copy, in the host repository, at
`capabilities/TEMPLATE-RELEASE` (a plain file, which OATS ignores):
```
template: oats-project/oats-engineering-coordination
release: template-v4.0.0
commit: <the full commit SHA that tag points to>
capabilities: <the ids you copied>
souls: <the souls you copied, under their names in the copy>
```
When you later take up a newer release, port what fits (section 6), and update the
sentence in each capability you ported and this file.

## 5. The small-projects variant

For one person or a small team, with no lane that needs a maintainer: no maintainer, no
green light, and the developer merges once its review, CI and the lead's `VERIFIED` note
agree at one head, on the lead's go at that head.

**Drop:**
- `capabilities/maintainer/` and `souls/maintainer/`. The lead then releases by the
  repository's own release procedure (its release docs or skill): where it has none, write
  one first from the maintainer capability's release skill (pin the source, read the live
  release contract, tag, verify the publication item by item);
- in `capabilities/dispatcher/`: the maintainer bullet of `dispatch`'s section 5, the
  inject's sentence on maintainers, and `dispatch`'s "A PR with no lead" bullet, which
  becomes: "An outside contributor's PR your person brings you: start a lead for it, as an
  effort (the landing rules)";
- the dispatcher itself, if the one person would rather start the expert directly.

The expert's texts call a maintainer only where the landing rules ask for one, so with
the rules below they need no change. A copy that wants them shorter removes section 2 of
`land-on-agreement` with its reference file on finding a maintainer.

**The landing rules that replace them:**
- in the inject, "What merges a change", its last sentences become: "The developer merges
  its work once they all hold at that head and the lead, having checked them and the
  holds, gives its go in one line at that head; the developer tells the lead once it has
  merged. A change its lead built, the lead merges."
- in the inject, "A maintainer's green light, and releases" becomes: "No maintainer, and no
  green light. A release's contents are the person's to approve; the lead plans, tags and
  publishes it on their yes. Its release prep (the version bump and the notes) is a change
  like any other: the lead decides who builds it, and it lands on the rule above."
- in `landing-rules-detail`, the section "A maintainer's green light" goes, and in its
  reference file "Before a build" goes and "A PR with no lead" becomes: "A person's own PR
  is theirs to merge. An outside contributor's PR gets a lead from the person's dispatcher
  (or the person, with none). The lead hands it at its head to a developer, which checks
  that CI won't run a fork's code with the repository's secrets before it runs, then runs
  its review loop with fresh reviewers on it and works its reviews as it would its own.
  The lead verifies it, and the developer merges it on the rule above."

The developer's texts already defer to the landing rules on who merges, so nothing else
changes.

## 6. Check the copy, and take up later releases

- **Check it:** `oats sync`, then `oats spawn <soul> --preview` for every soul. Each shows
  its capabilities and their skills. The code reviewer's preview shows its
  `launch.effective`: a model this organisation can launch, at or above its model floor,
  from another family than the developers'. Then bring a dispatcher (or the expert) one small, real
  request, and watch it land end to end.
- **No marker left:** search the copy for `<!-- adapt:`; only the open points' markers
  (section 3) should match.
- **A later release:** read [CHANGELOG.md](CHANGELOG.md) from the release your copy records
  up to the new one. Each skill's line says what to port. Port what fits, keep your
  adaptations, and update the release sentence in each capability you ported.
- **A copy at template-v3.1.3 or earlier takes up template-v4.0.0 whole.** The texts were
  recomposed, so there is no passage to port:
  1. Note your copy's answer to each adapt marker, and each rule you added of your own.
  2. Replace each copied capability's files with this release's, and drop the skills it
     removed (CHANGELOG.md lists them, and where each one's rules went).
  3. Write your answers back at the markers. CHANGELOG.md maps each earlier marker to its
     place now: three were merged into one, and one is gone.
  4. Add each rule of your own once, in the place its role reads (section 2, "How the
     texts are composed").
  5. Check it as above, and update `capabilities/TEMPLATE-RELEASE`.
