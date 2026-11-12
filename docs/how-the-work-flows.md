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
   tasks layer and starts a fresh `backend-expert` with the request verbatim, its link and
   who asked, named for the effort with its role last, then introduces it once:
   "rate-limit-lead leads this; from now on talk to it in the effort's thread." It carries
   nothing further. Every instance is named this way, `<task>-<role>`: the task first, and
   last the role it plays in the effort (lead, developer, reviewer, helper, specialist,
   maintainer, dispatcher), never its soul, which the sidebar already shows, in five words at most.
2. **The expert plans** (`/plan-and-spec`). It reads its soul's knowledge first (rate
   limits sit in the gateway, by an earlier decision), chooses a token bucket in the gateway
   middleware, and writes a spec with pinned acceptance tests: a 429 with `Retry-After`
   after 100 calls; existing keys unaffected until enabled. It decides who builds it: the
   middleware, its tests and a run across replicas are sustained work whose detail the rest
   of the effort doesn't need, so a developer earns its place (the context case), and the
   expert records that in one line.
3. **A probe** (`/send-a-helper`). One closed question the plan depends on: does a bucket
   shared across gateway replicas hold under a burst at the minute boundary, yes or no? Its
   brief bounds it (two replicas, the smallest spike, stop at the first minute that breaks)
   and asks for the verdict in a line, the run's command and output, and what it didn't
   check. Testing an approach needs the area's knowledge, so the probe is a fresh instance
   of the expert's own soul, its OATS child on another model. It builds the spike and runs
   the check the expert wrote (no key gets more than 100 calls in a minute across the
   replicas), and answers yes, with the run. It retires on answer; the plan stays the
   expert's.
4. **A developer builds it** (`/coordinate-developers`), as the expert's child. It checks
   the spec (`/understand-the-spec`), asks one question with a proposed answer, builds it in
   one context, since the bucket, the 429 path and their tests are one coupled change
   (`/execution-strategy`), adds the acceptance tests unchanged and proves it the way the
   repository runs it, CI's checks included (`/prove-it-works`).
5. **The review loop** (`/run-the-review-loop`). The developer, its author, iterates with
   fresh reviewers; the expert runs no rounds for a developer's work. Round 1's
   `code-reviewer`, briefed without the developer's reasoning, finds a blocker (the key is
   logged in the 429 path) and is retired. The developer fixes it: a blocker's fix gets a
   fresh reviewer. Round 2's reviewer, a new instance at the new head that never saw
   round 1, approves with one minor (a vague error message), and its Checked section lists how it
   checked each "done when" item and the attacks that found nothing. The developer fixes the
   minor and sends that reviewer the delta; it re-reads it and updates its verdict at the
   new head. The developer hands the branch back there.
6. **The expert verifies it once** (`/verify-developer-work`): `VERIFIED at <head>`. Had it
   found something, the branch would have gone back to the developer for another loop. Its
   verification is the lane's green light, so it tells the developer to open the PR.
7. **The developer works the reviews** (`/work-the-reviews`). It opens the PR, watches it
   with what its harness offers, answers the review bot (one finding fixed in one fix
   commit, one declined with a reason), asks the bot for a review at the fix's head, rebases
   once when the default branch moves (the range-diff shows every commit unchanged, so the
   bot's review carries), and hands the PR back at a merge-ready head.
8. **The expert lands it** (`/land-on-agreement`). The delta since its verified head touches
   no design, so it posts `VERIFIED at <new head>`; the declined finding, declined with a
   concrete reason, touches no design either, so it stands. CI is green and every finding of
   the bot's review is fixed or answered at that head: the lane's agreements hold. It merges
   at that head, checks CI on the merged commit and tells the developer, which sends "done,
   no duty to propose"; the expert retires it.
9. **Done.** The expert closes the effort's record, runs its final knowledge checkpoint,
   sends the person one done note in the effort's thread, and retires itself.

## A small project

With one person and no lane that needs a maintainer, the copy drops the maintainer
([ADAPTING.md](../ADAPTING.md), the small-projects variant). Its landing rules let the
developer merge: once CI is green, the review holds (the review bot's, every finding fixed
or answered, or a clean round of the developer's loop) and the lead's verification note is
on the same head, the developer merges and tells the lead in one line.

## A small change

A one-line config fix: none of the three cases holds, so the expert builds it itself
(`/plan-and-spec`, "Who builds it"). It writes a short spec with its acceptance test pinned,
makes an extra worktree of its own, builds and proves it with the build skills, and runs
its review loop: a fresh `code-reviewer`, its OATS child on another model, finds nothing to
fix and lists what it checked. The expert is never that reviewer. The round is its green
light: it opens the PR, works its reviews and merges once CI and the review hold at the
head. A one-line docs fix (a typo, a broken link) skips even the local loop, never the
review: it merges on CI green and one fresh review at its head, the review bot's where one
runs.

## Another area's step, and another effort

The rate-limit plan also needs a dashboard panel of each key's 429s, in the observability
area, whose expert soul has the dashboards' tools. The effort's "done" needs it, so it is a
step of this effort. The backend expert reads the observability node's index and the two
concepts the panel needs, writes the interface first (the metric's name and labels), and
sends a helper (`/send-a-helper`): a fresh `observability-expert` instance as its child,
with `--same-work`, briefed with the panel as a closed task, the interface, its bounds and
what to hand back. The helper builds it with its own review loop, asks the lead (never the
person) about one choice, and hands it back at its head; the lead verifies it once and lands
it in its effort. There is no second lead: the person still has one place to look.

While building, the developer finds that the gateway sends no `Retry-After` on any of its
errors. That bears on the effort, but its "done" doesn't need it: a related effort. The
lead, which the person's dispatcher started, starts that effort's lead as its sibling
(`/hand-off`), gives it a record of its own linked both ways, and tells the person at once,
in the effort's thread, the new lead's exact name, what it leads, its record and that they
talk to it there. A broken link on the pricing page, noticed on the way, has nothing to do
with the effort: its owner is started independent of the lead, and the person is told its
name the same way.

## A decision only a person can take

The spec leaves one product choice open: should internal service keys be exempt? The docs,
the knowledge and the code can't settle it, so the expert sends one card
(`/ask-a-person`): the question, two options with their effects, its recommendation. It
sets needs-input and builds what the card doesn't touch. The person answers "yes" in a
word, in the thread; the expert records it on the effort's record and never asks again.

## A step that stalls

The reviewer's provider refuses its turn, so the reviewer reports nothing, and the
developer, which ended its turn to wait, runs nothing either. That is why a waiter sets a
checkpoint on a child before it waits (`/run-the-review-loop`, `/coordinate-developers`): a
wake on its own home that watches for a stalled instance. It is no deadline on the answer:
when it fires the waiter looks, asks one precise question, and only a second checkpoint with
no movement ends the wait, with a new reviewer for that round on another model and the
stalled one retired. Where a home can't take a wake, the waiter hands the wait to its
parent; with no parent, it says in the effort's status line that nothing bounds the wait.

## Work across people

A second person owns the web app, written in the ownership record. "Show each user their
remaining quota" lives mostly in the backend, so the backend expert leads it, one effort
(`/across-people`).
- The view is a behaviour change in the other person's paths: the lead writes to them
  directly, in a new thread on the effort, says who it is, and sends one card for the whole
  effort. Their answer comes in that thread; no dispatcher carries it.
- The view is built by their area's expert: the lead asks their dispatcher to start one,
  which it does with the lead's message by its id as the request to read (`/dispatch`,
  section 5), and hands it the interface at its commit
  (`GET /v2/quota → {limit, remaining, resetsAt}`).
- A regenerated client in their paths is mechanical and needs nobody's approval.
- A finding in their area (a stale cache header) goes to that expert as a recommendation
  (`/findings-and-blocks`), never to the person as an FYI.

## A lane that needs its maintainer

The project's landing rules say a public contract change needs the release lane's read. The
quota endpoint is one, so before the merge the lead finds that lane's maintainer
(`/find-the-maintainer`): the lane map's `active` entry for the person who owns it. It is
running, so the lead hands it the PR at its head. The maintainer reads it there
(`/pr-review`: direction, correctness, security, mergeability), posts APPROVE at that head
on the PR and tells the lead in one line. With every agreement at the same head, the lead
merges. Where a lane reserves the merge for its maintainer, the lead hands it the PR at that
head and the maintainer merges. Had the owner no maintainer in that lane, one would have
been started for them, never a second while one is active, even a stopped one.

The maintainer stands for what a lead wouldn't hold: the lane's direction across parallel
efforts, its releases (`/plan-release`, `/ship-release`), outside contributors' PRs, holds
and the lane map (`/cross-review-peer`). It answers when called; no change waits in its
queue by default.

## A support ticket

Where the workspace runs a support desk, one maintainer is the **support maintainer**
(`/support-maintainer`). A user reports that the gateway returns 500 on an empty body. The
desk opens one ticket, the report quoted and marked untrusted. The support maintainer
triages it on the ticket without running anything from the report, agrees with the feature
maintainer who drives the area how the fix fits the rate-limit work, and launches one lead
with its own summary and the ticket reference. The lead lands the fix on the support lane's
landing rules, which name a read by that feature maintainer. At each step the support
maintainer tells the desk what the ticket says.

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
  default in `/execution-strategy`, and a lead that builds a small change itself rather
  than handing it off
  ([Building multi-agent systems: when and how to use them](https://claude.com/resources/articles/building-multi-agent-systems-when-and-how-to-use-them),
  Anthropic).
- **A verifier needs criteria.** A verifier is only as good as its criteria: one told only
  to check whether output is good rubber-stamps it, and a loop needs a maximum number of
  iterations with a fallback
  ([Multi-agent coordination patterns](https://claude.com/resources/articles/multi-agent-coordination-patterns),
  Anthropic). Hence the reviewer's Checked section, one line per "done when" item, without
  which an approval is not a review, and the loop's cap of 4 fresh rounds, after which the
  lead decides.
