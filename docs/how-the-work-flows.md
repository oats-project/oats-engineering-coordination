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
   who asked, then introduces it once: "backend-expert-rate-limit leads this; from now on
   talk to it in the effort's thread." It carries nothing further.
2. **The expert plans** (`/plan-and-spec`). It reads its soul's knowledge first (rate
   limits sit in the gateway, by an earlier decision), chooses a token bucket in the gateway
   middleware, and writes a spec with pinned acceptance tests: a 429 with `Retry-After`
   after 100 calls; existing keys unaffected until enabled.
3. **A probe** (`/send-a-probe`). One question the plan depends on: does a bucket shared
   across gateway replicas hold under a burst at the minute boundary? A fresh developer
   instance, the expert's OATS child on another model, builds the smallest spike and answers
   yes, with the run. It retires on answer; the plan stays the expert's.
4. **A developer builds it** (`/coordinate-developers`), as the expert's child. It checks
   the spec (`/understand-the-spec`), asks one question with a proposed answer, runs a
   workflow in one worktree on the person's opt-in (`/execution-strategy`), adds the acceptance tests unchanged and
   proves it the way the repository runs it, CI's checks included (`/prove-it-works`).
5. **The review loop** (`/run-the-review-loop`). The developer, not the expert, iterates
   with fresh reviewers. Round 1's `code-reviewer`, briefed without the developer's
   reasoning, finds a blocker (the key is logged in the 429 path) and is retired. The
   developer fixes it, and round 2's reviewer, a new instance at the new head that never saw
   round 1, finds nothing to fix. The developer hands the branch back at that head.
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
   no harvest duty"; the expert retires it.
9. **Done.** The expert closes the effort's record, runs its final harvest checkpoint,
   sends the person one done note in the effort's thread, and retires itself.

## A small project

With one person and no lane that needs a maintainer, the copy drops the maintainer
([ADAPTING.md](../ADAPTING.md), the small-projects variant). Its landing rules let the
developer merge: once CI is green, the review holds (the review bot's, every finding fixed
or answered, or a clean round of the developer's loop) and the lead's verification note is
on the same head, the developer merges and tells the lead in one line.

## A small change

A one-line config fix still goes to a developer, which runs its review loop: the expert
builds nothing that needs review rounds, and never runs them. Only a one-line docs fix (a
typo, a broken link) may be the lead's own, where its landing rules allow it: it has no
review loop, which is why it is no exception to who iterates with reviewers.

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
  with its message as the task, and hands it the interface at its commit
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
