# The OATS engineering template

**This is a template: an organisation copies it and adapts it, and never pins it.** Its
repository is oats-project/oats-engineering-coordination. The last package release, v1.18.0
(oats.engineering), stays frozen in oats-project/oats-engineering and resolvable for anyone
still pinning it. From template-v2.0.0 on, there is no package: you copy the capabilities
and souls into your own workspace and shape them with [ADAPTING.md](ADAPTING.md).

Each way of working has a template of its own, named `oats-<way of working>-coordination`.
This one is for engineering. Research's,
[oats-project/oats-research-coordination](https://github.com/oats-project/oats-research-coordination),
is released at template-v1.0.0; oats-scientific-research-coordination is coming.

## The way of working

**The design never splits a problem; it splits responsibility and context.** One expert owns
each piece of work from plan to merge, on a fresh instance. Helpers add a fresh window, a
cleaner read, an area's knowledge or an environment; for proper work they are OATS instances
the person can see, and one that checks work runs on a different model. Every hand-off is a
message about a finished artefact at its exact reference. The developer, not the expert,
iterates with fresh reviewers. People give direction and decisions, as one card with a
recommendation, with no deadline and no default if they are silent. A change merges once the
agreements its lane needs hold at one head.

It suits organisations whose agents build software in repositories on a forge: one person
or several, one repository or many. The template's roles:

- **Dispatcher,** for each person who wants a front door. It reads a request against the
  record, starts a fresh expert for it, introduces that lead once and steps aside. It never
  relays.
- **Expert,** one soul per way of working, plus a generalist for work across areas. Its
  instance plans, sends probes (one question each, never co-planners), gives every build to
  a developer, verifies the converged branch once, asks people only for decisions, lands the
  work and retires. It never runs review rounds.
- **Developer,** one soul by default, plus one per environment that runs the work
  differently. It builds one spec, proves it the way the repository runs it and iterates
  with a fresh reviewer each round until a round finds nothing to fix. Once its expert has
  verified the branch, it opens the PR and works the reviews, raising only product or
  architecture direction.
- **Reviewer,** fresh each round: a `code-reviewer` instance, the developer's OATS child on
  a different model where one is available; on the PR, the forge's review bot as well.
- **Maintainer,** one per person per lane, started only where a lane's landing rules need
  its read or keep its merge, and for releases. It is called by message at an exact head,
  never a station every change passes.

```
   person ──request──► dispatcher ──starts, introduces──► expert (lead)
     ▲                                                   │  plan · probes · verify · land
     └──── cards and one done note, in the effort's ─────┤
           own thread                                    │ spec        ▲ branch at its head
                                                         ▼             │
                                                    developer ─────────┘
                                                      │  build · prove · review rounds
                                                      │  then opens the PR, works its reviews
                                                      ▼
                                          a fresh reviewer each round / review bot
```

[How the work flows](docs/how-the-work-flows.md) follows one effort end to end, and the
cases around it.

## What's in it

- **`capabilities/`:** six working capabilities, each an inject (the always-on briefing)
  plus the skills an agent loads when it needs them.
  - `oats.dispatcher`: `/dispatch`.
  - `oats.engineering-expert`: `/plan-and-spec`, `/send-a-probe`, `/hand-off`,
    `/coordinate-developers`, `/verify-developer-work`, `/ask-a-person`,
    `/land-on-agreement`, `/find-the-maintainer`, `/across-people`, `/findings-and-blocks`.
  - `oats.developer`: `/understand-the-spec`, `/execution-strategy`, `/worktrees`,
    `/test-first`, `/diagnose-before-fixing`, `/design-while-writing`, `/prove-it-works`,
    `/run-the-review-loop`, `/work-the-reviews`, `/maintain-dev-docs`.
  - `oats.code-review`: `/adversarial-review`, `/security-review`,
    `/simplification-review`, `/review-dev-docs`.
  - `oats.maintainer`: `/maintainer-intake`, `/launch-work`, `/direction-gate`,
    `/pr-review`, `/plan-release`, `/ship-release`, `/cross-review-peer`, `/keep-it-clean`,
    `/support-maintainer`.
  - `oats.landing-rules`: the organisation's landing rules and ownership record, in one
    small capability every coordinating soul composes. The template's rules are an example.
- **`souls/`:** the example roster: `dispatcher`, `engineering-expert`, `developer`,
  `maintainer` and `code-reviewer`.
- **[ADAPTING.md](ADAPTING.md):** what to copy, the principles that never change, every
  adaptation point with its question and default, how to record the release you copied, and
  the small-projects variant.
- **[CHANGELOG.md](CHANGELOG.md):** what changed per skill in each template release, so a
  copy can take up a change.

Every place where the template assumes something about an organisation carries one marker,
`<!-- adapt: <the question to ask> -->`. An adapted copy has none left.

## Using it

1. **Copy and adapt** with [ADAPTING.md](ADAPTING.md). Your organisation's setup expert does
   this at onboarding.
2. **Sync and start:** `oats sync`, then a dispatcher for each person who wants one, with
   who they are as its task:
   ```bash
   oats spawn dispatcher --name dispatcher-<person> --task-file <brief.md>
   ```
   Bring it your requests, or start an expert directly: `oats spawn <expert> --task "<goal>"`.

A messaging capability (for example `oats.aweb`) is strongly recommended: hand-offs are
messages that wake their recipient. Without one, reports land in session transcripts.

A tasks layer, or your own answer to the landing rules' "where things are kept" marker, is
required. The texts keep each effort's record, the lane map and holds in "your tasks layer",
live, because the rules themselves are copied into each instance at spawn and can't change
while work runs. Without a tasks layer, name a place every instance reads and updates
(ADAPTING.md, section 3).

`npm test` checks the template itself: every capability's `oats.json` and every soul against
the OATS schemas, the skills each inject names, the adapt markers and their list in
ADAPTING.md, and that the souls load in real OATS kernels.

## Requirements
OATS ≥ 0.69.7, the floor every capability's `oats.json` declares. The texts use, with no
fallback, what kernels gained up to that release: needs-input (`oats instance attention`,
0.40.0), a retire that stops the instance's children first (0.48.0), extra trees
(`oats worktree add`, 0.49.0), `oats soul launch` (0.53.0, in the move from v1.18.0),
`--same-work` (0.69.2) and the wake that holds while a dialog is open (`wake-hold`, 0.69.7)
under every checkpoint. Even there, a home whose `wakeHold` reads `unknown` (a pi home)
takes no wake: its waiter hands the wait up, and where no level can set one, that wait has
no bound. `npm test` previews every soul in OATS 0.69.7 and main, and checks that both
list the kernel features the texts rely on.

Works with any harness OATS supports (pi, Claude Code, Codex). The
`code-reviewer` soul prefers pi with `github-copilot/gpt-6.1-sol` (`launch:` in its soul); a machine
overrides it in `oats-local.yaml` `souls.launch`, and spawn flags win over both. Developers use
your harness's workflow tool for parallel work; where it has none, its subagents in the same
pattern, keeping each workflow under 10 agents and asking you first for more. Where the
harness requires your opt-in to run a workflow (Claude Code's workflow tool does, outside
ultracode), they ask for it once per task. Reviews and probes are never a developer's own
subagents: they are OATS children. In Claude Code, the light way to give a standing opt-in is to
approve a workflow when asked ("Yes, and don't ask again" applies to saved workflows), or to
add `Workflow` to your permission allow rules for non-interactive runs. Ultracode
(`/effort ultracode`, `claude --effort ultracode`, or `"ultracode": true` in settings) is not
just consent: it makes workflows the default for every substantive task and sets effort to
`xhigh`, so it spends noticeably more tokens, and it turns off the large-workflow warning
and the concurrent-subagent limit. Claude Code's `workflowSizeGuideline` defaults to `medium`
(under 10 agents, `small` on Pro plans); the cap above applies either way
([Claude Code workflows](https://code.claude.com/docs/en/workflows.md)).

## License
MIT. Some of the developer's skills adapt rules from MIT-licensed sources; their notices are
in [THIRD-PARTY-NOTICES.md](THIRD-PARTY-NOTICES.md).
