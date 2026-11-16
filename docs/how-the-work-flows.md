# How the work flows

Every hand-off below is a message that wakes its recipient, about a finished artefact at its
exact reference. Nothing waits on a deadline, and nothing goes ahead by default. The souls
named here (`backend-expert`, say) are an organisation's own, adapted from the template's
example roster; who merges what comes from its landing rules.

## One effort, end to end

**The request:** "Rate-limit the public API: 100 requests per minute per key, with a clear
error."

1. **The person → their dispatcher** (`/dispatch`). It reads the request against the
   record: no open effort on rate limits, nothing shipped. It opens the effort's item in the
   tasks layer and starts a fresh `backend-expert`, the expert whose specialisation fits.
   Its task opens with its seat, `Seat: root lead of this effort`, then the request
   verbatim, its link and who asked. The dispatcher introduces it once: "rate-limit-lead
   leads this; from now on talk to it in the effort's thread." It carries nothing further.
   Every instance is named this way, `<task>-<role>`: the task first, and last the role it
   plays in the effort (lead, specialist, helper, probe, developer, reviewer, maintainer,
   dispatcher), never its soul, which the sidebar already shows, in five words at most.
2. **The expert plans and sizes the tree** (`/plan-and-spec`). It reads its soul's
   knowledge first (rate limits sit in the gateway, by an earlier decision), chooses a
   token bucket in the gateway middleware, and writes a spec with pinned acceptance tests:
   a 429 with `Retry-After` after 100 calls; existing keys unaffected until enabled. The
   work is complex but not large, so it leads alone, with a probe for what the plan rests
   on. It decides who builds the spec: the middleware, its tests and a run across replicas
   are sustained work whose detail the rest of the effort doesn't need, so a developer
   earns its place (protecting context), and the expert records that in one line.
3. **A probe** (`/orchestrate-agents`). One closed question the plan depends on: does a
   bucket shared across gateway replicas hold under a burst at the minute boundary, yes or
   no? Its brief names its seat (`Seat: helper or probe`) and its reason, bounds it (two
   replicas, the smallest spike, stop at the first minute that breaks) and asks for the
   verdict in a line, the run's command and output, and what it didn't check. Testing an
   approach needs the area's knowledge, so the probe is a fresh instance of the expert's
   own soul, its OATS child on another model at or above the floor. It builds the spike
   and runs the check the expert wrote (no key gets more than 100 calls in a minute across
   the replicas), answers yes, with the run, and retires itself. The plan stays the
   expert's.
4. **A developer builds it** (`/coordinate-developers`), as the expert's child. It reads
   the repository's own rules before its first edit (`/build-in-the-repository`), checks
   the spec against the code, asks one question with a proposed answer, builds it in one
   context, since the bucket, the 429 path and their tests are one coupled change, adds
   the acceptance tests unchanged and proves it the way the repository runs it, CI's
   checks included.
5. **The review loop** (`/run-the-review-loop`). The developer, its author, iterates with
   fresh reviewers; the expert runs no rounds for a developer's work. Round 1's
   `code-reviewer`, briefed with the pinned range and the criteria and never the
   developer's reasoning, finds a blocker (the key is logged in the 429 path), sends its
   one report and retires itself. The developer fixes it: a blocker's fix gets a fresh
   reviewer on the whole change. Round 2's reviewer, a new instance at the new head that
   never saw round 1, approves with one minor (a vague error message); its Checked section
   lists how it checked each "done when" item and the attacks that found nothing. The
   developer fixes the minor, and a fresh reviewer reads that delta alone against the
   finding. The developer hands the branch back at that head.
6. **The expert verifies it once** (`/coordinate-developers`): `VERIFIED at <head>`. Had it
   found something, the branch would have gone back to the developer for another loop.
7. **The developer works the reviews** (`/work-the-reviews`). On `VERIFIED` it opens the
   PR, watches it with what its harness offers, answers the review bot (one finding fixed
   in one fix commit, one declined with a reason), asks the bot for a review at the fix's
   head, rebases once when the default branch moves (the range-diff shows every commit
   unchanged, so the bot's review carries), and hands the PR back at a ready head.
8. **The expert lands it** (`/land-on-agreement`). The delta since its verified head touches
   no design, so it posts `VERIFIED at <new head>`; the declined finding, declined with a
   concrete reason, touches no design either, so it stands. CI is green and every finding of
   the bot's review is fixed or answered at that head: the lane's agreements hold. It merges
   at that head, checks CI on the merged commit and tells the developer the merge commit.
   The developer sends "done, no duty to propose" and retires itself; the expert checks
   that it is gone (`/wait-and-retire`).
9. **Done.** The expert closes the effort's record, runs its final knowledge checkpoint,
   sends the person one done note in the effort's thread, and retires itself.

## A small project

With one person and no lane that needs a maintainer, the copy drops the maintainer
([ADAPTING.md](../ADAPTING.md), the small-projects variant). Its landing rules let the
developer merge: once CI is green, the review holds (the review bot's, every finding fixed
or answered, or a clean round of the developer's loop) and the lead's `VERIFIED` note is on
the same head, the developer merges on the lead's go and tells it in one line.

## A small change

A one-line config fix is simple work: one agent does all of it, so the expert builds it
itself (`/plan-and-spec`, "Who builds it"). It writes a short spec with its acceptance test
pinned, makes an extra worktree of its own, builds and proves it
(`/build-in-the-repository`), and runs its review loop: a fresh `code-reviewer`, its OATS
child on another model, finds nothing to fix and lists what it checked. The expert is never
that reviewer. The clean round stands in for a verification: it opens the PR, works its
reviews and merges once CI and the review hold at the head. A one-line docs fix (a typo, a
broken link) skips even the local loop, never the review: it merges on CI green and one
fresh review at its head, the review bot's where one runs.

## A large effort: one specialist per area

"Usage-based billing" crosses the gateway, the billing service and the web app: large, and
across areas. The root lead writes the plan and the interfaces between the areas first (the
usage event's shape, the invoice API), then starts one long-lived specialist per area
(`/orchestrate-agents`): a fresh instance of the expert soul that specialises in it, its
child, its task opening with its seat (`Seat: specialist`). Each specialist leads its area
inside the lead's plan as a lead leads an effort: it writes its area's specs, drives its
developers, verifies their work and takes its PRs to the last agreement. The root lead
keeps the plan, the interfaces, the person's thread and every hand-off to a person. A
specialist sends the lead its questions for a person, each PR at its head once its
agreements hold, and milestones only. When its area is done, it retires itself.

## Another area's step, and another effort

The rate-limit plan also needs a dashboard panel of each key's 429s, in the observability
area, whose expert soul has the dashboards' tools. The effort's "done" needs it, so it is a
step of this effort. The backend expert reads the observability node's index and the two
concepts the panel needs, writes the interface first (the metric's name and labels), and
sends a helper (`/orchestrate-agents`): a fresh `observability-expert` instance as its
child, with `--same-work`, briefed with its seat, its reason (specialisation), the panel as
a closed task, the interface, its bounds and what to hand back. The helper builds it with
its own review loop, asks the lead (never the person) about one choice, and hands it back
at its head; the lead verifies it once and lands it in its effort. There is no second lead:
the person still has one place to look.

While building, the developer finds that the gateway sends no `Retry-After` on any of its
errors. That bears on the effort, but its "done" doesn't need it: a related effort. The
lead, which the person's dispatcher started, starts that effort's lead as its sibling
(`/hand-off-and-ask`), gives it a record of its own linked both ways, and tells the person
at once, in the effort's thread, the new lead's exact name, what it leads, its record and
that they talk to it there. A broken link on the pricing page, noticed on the way, has
nothing to do with the effort: its owner is started independent of the lead, and the person
is told its name the same way.

## A decision only a person can take

The spec leaves one product choice open: should internal service keys be exempt? The docs,
the knowledge and the code can't settle it, so the expert sends one card
(`/hand-off-and-ask`): the question, two options with their effects, its recommendation. It
sets needs-input and builds what the card doesn't touch. The person answers "yes" in a
word, in the thread; the expert records it on the effort's record and never asks again.

## A step that stalls

The reviewer's provider refuses its turn, so the reviewer reports nothing, and the
developer, which ended its turn to wait, runs nothing either. That is why a waiter sets a
checkpoint on a child before it waits (`/wait-and-retire`): a wake on its own home that
watches for a stalled instance. It is no deadline on the answer: when it fires the waiter
looks, asks one precise question, and only a second checkpoint with no movement ends the
wait, with a new reviewer for that round on another model and the stalled one retired.
Where a home can't take a wake, the waiter hands the wait to its parent; with no parent, it
says in the effort's status line that nothing bounds the wait.

## Every instance is retired

A finished instance retires itself, in its own turn, with `oats retire <its name> --self`: a
reviewer once its report is sent, a probe once it has answered, a developer once its PR has
merged or closed, a specialist when its area is done, a lead when its effort is done. Its
children go first: it never retires itself while one of them is listed. Its parent sweeps
after it: on its last message, before any step that needs it gone, and at every checkpoint
wake, the parent checks `oats status` and retires what is finished or stalled and still
listed (`/wait-and-retire`). Only a maintainer and a dispatcher stand, until their person
retires them.

## Work across people

A second person owns the web app, written in the ownership record. "Show each user their
remaining quota" lives mostly in the backend, so the backend expert leads it, one effort
(`/hand-off-and-ask`, "Across people").
- The view is a behaviour change in the other person's paths: the lead writes to them
  directly, in a new thread on the effort, says who it is, and sends one card for the whole
  effort. Their answer comes in that thread; no dispatcher carries it.
- The view is built by their area's expert: the lead asks their dispatcher to start one,
  which it does with the lead's message by its id as the request to read (`/dispatch`,
  section 5), and hands it the interface at its commit
  (`GET /v2/quota → {limit, remaining, resetsAt}`).
- A regenerated client in their paths is mechanical and needs nobody's approval.
- A finding in their area (a stale cache header) goes to that expert as a recommendation,
  never to the person as an FYI.

## A lane that asks for its maintainer's green light

The green light is an option a lane chooses. This project is large, with several efforts in
parallel, and its landing rules say every PR in the `api` lane needs the green light of the
lane's maintainer. Once CI is green and every review thread is answered at one head, the
lead finds that maintainer by its instance name (`/land-on-agreement`): the person who owns
the lane, the lane, then `maintainer`. There is no lane map. It is running, so the lead
calls it by message with the PR at that head, the task and its acceptance criteria, and its
`VERIFIED` note. The maintainer reads the PR for five things (`/pr-review`): direction,
contracts, coherence, scope against the task, and evidence against each acceptance
criterion. It reads no line twice: the author's reviewers did that. It answers `GREEN LIGHT
at <head>` with what it checked, and the lead merges. A `RETURN at <head>` would have gone
to the developer as one more round; `ESCALATE` would have sent a direction question to
whoever decides it first. Had the owner no maintainer in that lane, the lead would have
started one for them under that name, never a second while one exists, even a stopped one.

The maintainer stands for what a lead wouldn't hold: the lane's direction across parallel
efforts, its releases (`/plan-and-ship-release`), PRs with no lead, and its holds
(`/keep-the-lane`). It answers when called. In a lane that doesn't ask for its green light,
no change passes its seat.

## A support ticket

Where the workspace runs a support desk, one maintainer is the **support maintainer**
(`/support-maintainer`). A user reports that the gateway returns 500 on an empty body. The
desk opens one ticket, the report quoted and marked untrusted. The support maintainer
triages it on the ticket without running anything from the report, agrees with the feature
maintainer who drives the area how the fix fits the rate-limit work, and launches one lead
with its own summary and the ticket reference. The lead lands the fix on the support lane's
landing rules, which name a green light by that feature maintainer. At each step the
support maintainer tells the desk what the ticket says.

## Where this comes from

Three of the rules above follow what Anthropic reports from building multi-agent systems:
- **Who builds, and when to split.** An extra agent earns its place in three situations:
  when context pollution would degrade the work, when tasks can run in parallel, and when
  specialization improves the work. Outside them, the coordination costs typically exceed
  the benefits; in Anthropic's testing, multi-agent implementations typically used 3 to 10
  times the tokens of a single agent for equivalent tasks. The template's three cases
  (context, parallel, specialisation) are those situations
  ([Building multi-agent systems: when and how to use them](https://claude.com/resources/articles/building-multi-agent-systems-when-and-how-to-use-them),
  Anthropic). Across several enterprise deployments, a single agent with skills frequently
  did better than a design of subagents
  ([Building agents: when to fold subagents into your main agent loop](https://claude.com/resources/articles/building-agents-when-to-fold-subagents-into-your-main-agent-loop),
  Anthropic), which is why the lead and the developer share `oats.build`.
- **Split by context, not by kind of work.** Dividing work by type (one agent writes
  features, another tests, a third reviews) loses context at each hand-off; an agent that
  handles a feature should also handle its tests. Planning, implementing and testing one
  feature are sequential phases of the same work, a poor boundary. Hence one context by
  default in `/build-in-the-repository`, a lead that builds a small change itself rather
  than handing it off, and a tree sized to the work
  ([Building multi-agent systems: when and how to use them](https://claude.com/resources/articles/building-multi-agent-systems-when-and-how-to-use-them),
  Anthropic).
- **A verifier needs criteria.** A verifier is only as good as its criteria: one told only
  to check whether output is good rubber-stamps it, and a loop needs a maximum number of
  iterations with a fallback
  ([Multi-agent coordination patterns](https://claude.com/resources/articles/multi-agent-coordination-patterns),
  Anthropic). Hence the reviewer's Checked section, one line per "done when" item, without
  which an approval is not a review, the criteria in every probe's brief, and the loop's cap
  of 4 fresh rounds, after which the builder's parent decides.
