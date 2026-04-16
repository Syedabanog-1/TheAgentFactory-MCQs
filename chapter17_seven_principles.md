# Chapter 17: The Seven Principles of General Agent Problem Solving
Source: https://agentfactory.panaversity.org/docs/General-Agents-Foundations/seven-principles

---

## Overview of Seven Principles
1. Bash is the Key — Terminal access enables agentic capability
2. Code as Universal Interface — Code provides precision in communication
3. Verification as Core Step — Continuous testing ensures reliability
4. Small, Reversible Decomposition — Breaking problems into manageable steps
5. Persisting State in Files — Context files maintain shared understanding
6. Constraints and Safety — Guardrails enable confident collaboration
7. Observability — Visibility enables debugging and trust

---

## Principle 1: Bash is the Key
(Fetched in previous session — key topics: terminal access as prerequisite for agency, bash commands as ground truth, vs. code generation without execution)

---

## Principle 2: Code as Universal Interface
(Fetched in previous session — key topics: code as precise specification, reducing ambiguity vs. natural language, writing tests as specs)

---

## Principle 3: Verification as Core Step
(Fetched in previous session — key topics: trust zones, risk matrix, verification loop, syntax/unit/integration/manual verification types)

---

## Principle 4: Small, Reversible Decomposition
(Fetched in previous session — key topics: atomic changes, git strategies, decomposition patterns, reversibility as safety net)

---

## Principle 5: Persisting State in Files
(Fetched in previous session — key topics: CLAUDE.md, ADRs, context files, reproducibility, session memory vs. file memory)

---

## Principle 6: Constraints and Safety

### Opening Section
You give an AI system access to your codebase. It's working well, making helpful changes. Then you notice something odd in git history. The AI deleted a directory you didn't ask it to touch. It ran commands you don't remember approving. It's refactoring code you specifically said not to change.

This isn't science fiction — these are real incidents that have happened.

> **The Safety Mantra**: "As long as I haven't `git push`ed, I am the master of my machine." Everything the AI does locally can be undone. Uncommitted changes can be reverted. Commits can be reset. The moment of no return is the push, and you control that moment.

### The Risk Spectrum: Understanding What Can Go Wrong

**Category 1: Data Loss (Destructive Operations)**
- `rm -rf` on the wrong directory
- Overwriting files without confirmation
- Git operations that discard work
- Database changes without backups
- Impact: Hours to weeks of lost work | Likelihood: Medium

**Category 2: Security Vulnerabilities**
- Hardcoded credentials in code
- Insecure authentication implementations
- SQL injection vulnerabilities
- Dependency confusion attacks
- Impact: System compromise, data breach | Likelihood: Medium

**Category 3: Cost Overruns**
- Infinite loops in cloud resources
- API calls without rate limiting
- Inefficient algorithms consuming compute
- Impact: Unexpected cloud bills | Likelihood: Low

**Category 4: Reputation Damage**
- Offensive content in user-facing materials
- Bugs that corrupt user data
- Performance issues causing downtime
- Privacy violations
- Impact: Lost trust | Likelihood: Low, but high impact

**Category 5: Workflow Disruption**
- Commits that break CI/CD
- Changes that conflict with others' work
- Alters agreed-upon conventions
- Impact: Team friction | Likelihood: Medium

### The Safety Hierarchy: Defense in Depth

```
Layer 5: HUMAN VERIFICATION (Final safety net)
  Layer 4: PROCESS CONTROLS (Review, test, rollback)
    Layer 3: ENVIRONMENT ISOLATION (Sandbox, staging)
      Layer 2: PERMISSION CONTROLS (Approve/deny actions)
        Layer 1: TECHNICAL LIMITS (Hard constraints — AI works here)
```

**Layer 1: Technical Constraints** — Hard limits (read-only filesystem, network restrictions, resource limits, whitelisted commands). Protects against: accidental damage, runaway processes.

**Layer 2: Permission Controls** — Require approval for: deleting files, running git push, installing packages, modifying config files. Protects against: unintended destructive operations.

**Layer 3: Environment Isolation** — Separate AI work from production (staging environments, separate DB instances, separate API keys). Protects against: production incidents.

**Layer 4: Process Controls** — Always review diffs before applying, run tests before committing, peer review for AI-generated changes. Protects against: bad code reaching production.

**Layer 5: Human Verification** — Review AI suggestions before accepting, manual approval for deployments, security review for sensitive changes. Final safety net.

### Permission Models: Choosing Your Safety Level

**Model 1: Permissive (Auto-Approve Safe Operations)**
- Auto-approve: Read operations, test execution, git status/diff, file creation (new files only)
- Require approval: File deletion, git reset/rebase, package installation, config file changes
- Best for: Experienced users, trusted AI, familiar codebase

**Model 2: Confirming (Approve All Writes)**
- Auto-approve: Read operations only
- Require approval: All write operations, all file modifications, all command execution
- Best for: New AI collaboration, unfamiliar codebase, learning phase

**Model 3: Restricted (Sandbox Mode)**
- Auto-approve: Read operations only
- Blocked: All write operations, all command execution, all file modifications
- Best for: Exploration, code review, understanding unfamiliar codebases

**Choosing Your Model:**
| Situation | Recommended Model |
|-----------|-------------------|
| First time with AI | Confirming |
| Routine work on familiar project | Permissive |
| Exploring unfamiliar code | Restricted |
| Production systems | Confirming + Staging |
| Prototype/experimental work | Permissive |

### The Destructive Operations List

**File Operations**: rm, rm -rf, mv, cp, > file (redirect overwrite), dd

**Version Control**:
- git reset --hard
- git rebase
- git push --force
- git clean -fd
- git checkout -- .

**Package Management**: npm install, pip install, apt install, brew install

**System Operations**: sudo, systemctl, kill -9, reboot, shutdown

**Data Operations**: DROP DATABASE, DELETE FROM (without WHERE), TRUNCATE TABLE, UPDATE (no WHERE)

### Sandboxing: Isolating AI Work

**The Simplest Sandbox: A Git Branch**
```
git checkout -b ai-experiment
```
This is 90% of the safety most people need. AI can do whatever it wants, and you can throw it all away with `git checkout main && git branch -D ai-experiment`.

**Advanced Sandbox Strategies:**

1. Docker Container:
```
docker run -it -v $(pwd):/workspace -w /workspace node:18 bash
```

2. Staging Environment: AI works on staging.example.com, manual deploy to production.

3. Feature Branch Workflow

4. Separate Credentials (.env.ai vs .env production)

### Trust Gradualism: Easing into Autonomy

**Phase 1: Observation Only (Week 1)**
AI reads files and explains them. You manually apply AI suggestions.

**Phase 2: Supervised Autonomy (Week 2-4)**
AI makes changes in sandbox/feature branches. You review all diffs before applying.

**Phase 3: Selective Autonomy (Month 2-3)**
AI autonomously handles safe operations (tests, linting). Routine refactors within approved patterns.

**Phase 4: Calibrated Autonomy (Month 3+)**
AI autonomously handles most operations. Approval only for novel or high-risk operations.

**Trust Signals to Track**: Error rate, correction ease, pattern adherence, risk awareness

### Safety Checklist: Before Each Session

**Environment**: Correct directory, correct branch, correct environment variables, uncommitted work backed up/committed

**Tool Configuration**: Permission mode appropriate, destructive operations require approval, read-only mode if exploring, logging enabled

**Mental Model**: Clear task scope, identified high-risk operations to watch, rollback plan, stopping point defined

### Incident Response: Emergency Cheat Sheet

| Situation | Command | What It Does |
|-----------|---------|--------------|
| Stop AI immediately | Ctrl+C | Kills the current operation |
| See what changed | git status | Shows modified/deleted files |
| Undo uncommitted changes | git checkout -- . | Restores all files to last commit |
| Nuclear reset | git reset --hard HEAD | Discards everything since last commit |
| Undo last commit | git reset --hard HEAD~1 | Removes the most recent commit entirely |

**Immediate Actions:**
```
# 1. Stop the AI (Ctrl+C)
# 2. Assess damage
git status
git diff
# 3. If bad, revert
git checkout -- .
git reset --hard
# 4. If already committed
git revert HEAD
git reset --hard HEAD~1
```

**Post-Incident Review**: What happened? Why did safeguards fail? What constraint would have prevented this? How to adjust permissions?

### Why This Principle Matters: Trust Through Safety

Paradoxically, **constraints enable autonomy**. When you have good safety measures, you feel comfortable giving AI more autonomy. Without safety measures, you're constantly on edge.

### Prompt-Based Safety

**The Safety Hook (Cost Control):**
```
Before performing any operation that might cost money (API calls,
cloud deployments, external service requests), stop and tell me
the estimated cost. Don't proceed until I approve.
```

**The Guardrail Prompt Template:**
```
You are helping me with [task]. Follow these safety rules:

FORBIDDEN actions (never do these):
- Never use `rm` on any file containing `.env`, `config`, or `credentials`
- Never run `git push` without my explicit approval
- Never modify files outside the /src directory

REQUIRED checks (always do these):
- Before any destructive command, run `pwd` and show me the current directory
- Before deleting anything, show me what will be deleted and wait for confirmation
- Before running commands with side effects, explain what they'll do

If you're unsure whether an action is safe, ask me first.
```

### This Principle in Both Interfaces
**In Claude Code**: Configure constraints through permission flags, CLAUDE.md restrictions, and hooks.
**In Cowork**: Constraints are built into the GUI — confirmation dialogs and folder-level access controls.

> For a detailed comparison, see Lesson 9: Putting It All Together.

---

## Principle 7: Observability

### Introduction
If you can't see what the AI is doing, you can't debug problems, build trust, or improve the collaboration.

Observability = making AI workflows transparent, traceable, and debuggable.

> **Synergy with Principle 3**: Observability and Verification are partners. Verification (Principle 3) is the *act* of checking; Observability (this principle) provides the *evidence* that makes checking possible.

### The Black Box Problem

**Without Observability:**
```
You: "Fix the authentication bug"
AI: [Works for 30 seconds] "Done!"
[Later - Authentication completely broken]
You: "What did you actually change?"
AI: "I don't remember—this is a new conversation."
[You spend 2 hours debugging]
```

**With Observability:**
```
You: "Fix the authentication bug"
AI: 1. Reading src/auth/login.js...
    2. Found issue: token validation missing
    3. Adding token validation...
    4. Running tests...
    5. Tests passed
    6. Changes: Modified src/auth/login.js (added 5 lines)
```

### The Three Pillars of Observability

**Pillar 1: Action Visibility (What Did It Do?)**
See each action: Read, Analyze, Edit, Run, Complete.

**Pillar 2: Rationale Visibility (Why Did It Do It?)**
Understand the AI's reasoning — chose validateToken() because it matches the pattern used in other auth functions.

> **Warning: AI Rationalization**: AI can sound confident even when wrong. If the rationale says "this will work" but the tests fail, trust the tests.

**Pillar 3: Result Visibility (What Was the Outcome?)**
See the result of each action: tests passed/failed, files changed, coverage maintained.

### Reading Activity Logs: A Practical Guide

**Log Structure:**
```
[TIME] [ACTION] [DETAIL]
[2025-01-22 14:32:15] [READ] /Users/project/src/auth/login.js
[2025-01-22 14:32:16] [ANALYZE] Found missing token validation
[2025-01-22 14:32:17] [EDIT] /Users/project/src/auth/login.js
[2025-01-22 14:32:18] [COMMAND] npm test → Exit code: 0
[2025-01-22 14:32:19] [COMPLETE] Task finished successfully
```

**Log Patterns:**
- **Success Pattern**: READ → ANALYZE → EDIT → VERIFY → COMPLETE
- **Warning Pattern**: READ → EDIT → EDIT → EDIT → [NO VERIFICATION] → COMPLETE
- **Failure Pattern**: READ → EDIT → VERIFY → [TESTS FAIL] → EDIT → [TESTS FAIL AGAIN] → GAVE UP

**The "Scan for Verbs" Technique**: Ignore timestamps. Look only for: READ, EDIT, TEST, FAIL, COMPLETE.

**The red flag**: If you see EDIT without TEST after it, the AI changed code but didn't verify it works.

### Walkthrough: Diagnosing a Silent Failure

Scenario: You asked Claude Code to "add input validation to the signup form." Users are still submitting invalid data.

**Step 1: Check what actually changed.**
```
git log --oneline -3
git diff b3c4d5e..a7f2e1d --stat
```

**Step 2: Check if tests were run.** Look at the session conversation. Was there a `npm test` step? If Claude immediately said "Done!" without running tests, that's the warning pattern: EDIT → COMPLETE with no VERIFY.

**Step 3: Read the actual diff.**
You discover: Claude added validation to the `onSubmit` handler but the form uses `onChange` validation. The validation function exists but is never called in the right place.

**The lesson**: The 2-Minute Audit (git diff + test run) would have caught this before shipping.

### Designing for Observability

**Pattern 1: Explain Before Executing**
Ask AI to provide a plan with step-by-step intentions before executing.

**Pattern 2: Checkpoint After Major Steps**
AI confirms completion of each step and awaits permission before continuing.

**Pattern 3: Summary After Completion**
AI provides: files modified, count of changes, test results, git status, next steps.

### Tool-Specific Observability Features

**Claude Code**:
- Activity Logs: `.claude/activity-logs/prompts.jsonl`
- Subagent Logs: `.claude/activity-logs/subagent-usage.jsonl`

**Cursor**: History Panel shows all AI interactions

**GitHub Copilot**: Copilot Workspace shows plan before executing, file changes, test results

### Observability Anti-Patterns

**Anti-Pattern 1: Silent Failures** — Fix: Require confirmation for all operations, not just successes.

**Anti-Pattern 2: Output Without Context** — Fix: Require rationale with every change.

**Anti-Pattern 3: Missing Intermediate Steps** — Fix: Require progress updates for long-running tasks.

### Real-Time vs Post-Mortem

**Real-Time Observation** (watching it happen): Your chance to intervene before damage.
- If you see the AI reading the wrong directory, hit Ctrl+C immediately.

**Post-Mortem Observation** (reviewing logs): How you debug problems and learn patterns.
```
cat .claude/activity-logs/prompts.jsonl | jq
git log --oneline -5
git diff HEAD~1
```

### Building Your Observability Toolkit

**Essential Tools:**
```
# Git History
git log --oneline -10
git diff HEAD~1 HEAD
git blame file.js

# Activity Log Review
cat .claude/activity-logs/prompts.jsonl | jq
cat .claude/activity-logs/prompts.jsonl | jq 'select(.error != null)'
cat .claude/activity-logs/prompts.jsonl | jq 'select(.tool_result.success == false)'

# Test Results
npm test 2>&1 | tee test-results.log
```

> **Log Query Cheat Sheet**: The error filter above cuts through hundreds of log lines to show exactly what failed.

### Why Observability Enables Trust

Trust is earned through transparency. When you can see what AI is doing:
- You understand its decisions
- You can correct mistakes early
- You learn its patterns
- You feel confident giving it more autonomy

### The 2-Minute Audit

After every AI task, spend exactly 2 minutes:
| Check | Command | What You're Looking For |
|-------|---------|------------------------|
| 1. Git diff | `git diff` | Do changes match what AI claimed? |
| 2. AI summary | Review AI's final message | Does summary match the diff? |
| 3. Quick test | `npm test` or equivalent | Do tests still pass? |

**The catch**: If the git diff doesn't match the AI's summary, you've found a "silent failure."

### This Principle in Both Interfaces
- **Claude Code's advantage**: Raw terminal transparency — see every command and output
- **Cowork's advantage**: Three-panel layout (chat, progress, artifacts) designed for simultaneous visibility

---

## Lesson 8: Operational Best Practices

### Opening Context
The most productive Claude Code users follow specific operational patterns. This lesson shows how to apply the seven principles as concrete operational habits.

### The Four-Phase Workflow

```
EXPLORE (Read) → PLAN (Design) → IMPLEMENT (Execute) → COMMIT (Save)
Plan Mode        Plan Mode        Normal Mode          Normal Mode
No changes       Review plan      Verified steps       Git commit
```

**Phase 1: Explore** — Enter Plan Mode (Shift+Tab). Claude reads files and gathers context but won't make edits. Reconnaissance without risk.

**Phase 2: Plan** — Ask Claude to create an implementation plan. Review it. Use Ctrl+G to edit the plan if something looks wrong. Course correction is cheap during planning, expensive during implementation.

**Phase 3: Implement** — Switch to Normal Mode (Shift+Tab again). Claude executes the agreed plan, one step at a time. After each significant step, Claude should verify.

**Phase 4: Commit** — When implementation is complete and verified, ask Claude to commit with a descriptive message.

**When to Skip Planning**: Fixing a typo, adding a single log statement, changing one configuration value. Rule of thumb: if you're unsure whether to plan, you should plan.

### Course Correction and Reversibility

**The Escape Key**: When Claude is mid-response and heading somewhere unproductive, press `Esc`. Claude stops immediately. Your context is preserved.

**Checkpoints and /rewind**: Claude Code creates checkpoints automatically before every tool use that modifies your system. Press `Esc` twice (or use `/rewind`) to open the checkpoint menu.

> **The Time Machine Combo**: Single `Esc` is your steering wheel (stops Claude mid-response). Double `Esc` (press twice) or `/rewind` opens the checkpoint menu — your time machine.

**Resuming Sessions**:
- `--continue`: Resume your most recent session
- `--resume`: Show list of recent sessions to choose from

**Context Management**: `/clear` (start fresh with empty context), `/compact` (summarize and compress existing context).

### Permission Configuration

**The Permission Prompt**: Allow once, Allow for session, or Deny.

**Configuring Permissions**: Use `/permissions` to see and modify settings. You can allowlist commands you trust.

**Standard Safe List:**
```
# Read operations (safe)
ls, cat, grep, find, head, tail, wc

# Verification operations (safe)
npm test, pytest, go test, cargo test

# Observability operations (safe)
git status, git diff, git log
```

**Sandbox Mode**: `/sandbox` creates an OS-level isolated environment. The `--dangerously-skip-permissions` flag disables permission prompts entirely. Only use inside sandboxed environments.

### The Interview Pattern

For larger features, have Claude interview YOU before writing anything.

**The One-Liner Version**:
```
Don't code yet. Interview me until you have a 100% clear spec.
```

**How It Works**: Ask Claude to ask you questions one at a time. Claude becomes a requirements analyst covering: Who gets notified? What channels? User preferences? Failure handling? Batched or immediate?

**The Golden Reset (Fresh Session Trick)**: After the interview, copy the specification into a new session. Claude gets clean, refined requirements without the exploratory noise.

> The Golden Reset produces better results because a fresh context window means Claude's full attention on implementation.

### Five Failure Patterns to Avoid

**1. The Kitchen Sink Session**: One session, one purpose. When you finish a task, use `/clear` before starting an unrelated one.

**2. The Correction Loop**:
> **The Rule of Two**: "If Claude misses the mark twice on the same fix, STOP. `/clear` and start over with a better prompt that includes what you learned from the failures."

**3. The Bloated CLAUDE.md**: Keep CLAUDE.md under 60 lines. Move domain-specific knowledge into skills (`.claude/skills/`).

**4. The Trust-Then-Verify Gap**: Every claim needs verification criteria. Did the code compile? Do tests pass? "It looks right" isn't verification.

**5. The Infinite Exploration Spiral**: Scope exploration narrowly ("Find where authentication is configured — just that, nothing else"). Use subagents for research.

### Quick Reference: Principles to Implementation

| Principle | What It Teaches | Claude Code Implementation |
|-----------|-----------------|---------------------------|
| P1: Bash is the Key | Terminal access enables agency | CLI tools (gh, aws, git), MCP servers |
| P2: Code as Universal Interface | Precision through specificity | @ file references, concrete examples in prompts |
| P3: Verification as Core Step | Trust through testing | Run tests, screenshots, Plan Mode verification |
| P4: Small, Reversible Decomposition | Managing complexity | Plan Mode phases, checkpoints, /rewind |
| P5: Persisting State in Files | Accumulated context | CLAUDE.md, skills in .claude/skills/ |
| P6: Constraints and Safety | Confident delegation | /permissions, /sandbox, hooks |
| P7: Observability | Transparency and debugging | /context, checkpoint history, --verbose |

---

## Lesson 9: Putting It All Together: Workflows in Practice

### Introduction
Knowing the principles is one thing. Applying them together in real workflows is another.

### Your New Role: From Typist to Director

"You're no longer the one typing code. You're the director managing an agent."

The AI is a junior developer with infinite energy but no institutional knowledge. It needs:
- Clear direction (what to do)
- Context (why and how)
- Guardrails (what NOT to do)
- Verification (did it work?)

### The Director's Loop
```
THE DIRECTOR'S LOOP
YOU (Director)              AI (Agent)
┌───────────┐              ┌───────────┐
│  Intent   │──── P2 ────►│ Investigate│
│  & Context│   (Code)    │ & Propose  │
│           │◄── P7 ─────│            │
│  Review   │ (Observe)   │  Implement │
│  & Approve│──── P6 ────►│  & Verify  │
└─────┬─────┘ (Safety)    └─────┬──────┘
      │                         │
      │        P3 (Verify)      │
      └─────── P4 (Small) ──────┘
                    P5 (Persist)
    P1 (Bash) underlies every AI action
```

### The Integration Challenge

| Task | Key Principles |
|------|----------------|
| Debug production issue | 1, 3, 7 |
| Refactor large module | 2, 4, 5 |
| Add new feature | All principles |
| Set up new project | 1, 5, 6 |
| Optimize performance | 1, 3, 7 |

### Workflow 1: Debugging a Production Issue

**P1 (Bash)**: Investigate directly with `tail -f`, `grep`, `ps aux`

**P7 (Observability)**: Trace through the system by reading logs

**P3 (Verification)**: Propose fix, verify, confirm correct secret, test

**P4 (Decomposition)**:
1. Update .env with correct secret
2. Restart application
3. Verify login works
4. Monitor logs for recurrence

**P6 (Safety)**: Don't automatically modify production .env — requires your confirmation, show diff before applying.

### Workflow 2: Implementing a New Feature (Password Reset)

- **P5**: Update CLAUDE.md with new context
- **P2**: Write specification as code (test)
- **P4**: Break into 8 steps
- **P3**: After each step: run tests, git diff, build verify
- **P1**: Execute each step via bash
- **P6**: Show SQL before applying migrations, use sandbox API key first
- **P7**: AI provides progress updates at each step

### Workflow 3: Refactoring a Large Module

- Document before starting (P5)
- Plan refactoring steps (P4)
- Create feature branch (P6)
- For each extraction: extract code (P2), verify tests pass (P3), show what changed (P7), commit if good (P4)

### Principle Selection Guide

| Task Type | Most Critical Principles |
|-----------|--------------------------|
| Quick bug fix | 1, 3, 7 |
| New feature | All |
| Refactoring | 2, 4, 5 |
| Debugging | 1, 3, 7 |
| Learning codebase | 1, 7, 5 |
| Setup/install | 1, 5, 6 |
| Performance work | 1, 3, 7 |

### Workflow Templates

**Template 1: Quick Fix Pattern**
1. Describe problem
2. AI reads files (P1, P7)
3. AI proposes solution as code diff (P2)
4. You review and approve (P6)
5. AI applies change (P1)
6. AI verifies with tests (P3)
7. AI shows summary (P7)
8. You commit if satisfied (P4)

**Template 1b: When the Fix Fails**
```
6. AI verifies → TESTS FAIL
   ↓
6b. AI identifies WHY (P7: Observability)
   ↓
6c. AI reverts the change (P4: Reversibility)
   ↓
6d. AI proposes NEW approach
   ↓
6e. Return to step 3 with new approach
```
Key insight: Failure is information. Revert cleanly, learn from the failure, try again.

**Template 2: Feature Development Pattern**
1. Write test/specification (P2)
2. Update CLAUDE.md with context (P5)
3. Break feature into steps (P4)
4. For each step: Implement (P1), Verify (P3), Show progress (P7), Approve (P6)
5. Full integration tests (P3)
6. Review all changes (P7)
7. Commit (P4)

**Template 3: Refactoring Pattern**
1. Document current state (P5)
2. Plan steps (P4)
3. Create feature branch (P6)
4. For each extraction: Extract (P2), Verify (P3), Show changes (P7), Commit (P4)
5. Integration tests (P3)
6. Merge to main when ready (P6)

### Self-Assessment: Project Health Score

Count how many principles you're actively applying (1 point each):

| Score | Level | What It Means |
|-------|-------|---------------|
| 0-2 | Cowboy Coder | High risk. Start with P3 (Verification) and P7 (Observability). |
| 3-4 | Collaborator | Good progress. Working WITH the AI. |
| 5-6 | Agent Architect | Professional grade. Managing AI effectively. |
| 7 | Master Director | Full integration. Now optimize and teach others. |

### The Meta-Principle

**General agents are most effective when they leverage computing fundamentals rather than fighting against them.**

File systems, shells, code execution, version control — these aren't limitations to work around. They're the foundations that enable reliable, debuggable, powerful agent workflows.

### Choosing Your Interface Based on Principles

| If you need... | Claude Code | Claude Cowork |
|---|---|---|
| Maximum observability | Best choice (raw terminal) | Good (three-panel layout) |
| Minimal friction | Good | Best choice (GUI) |
| Custom constraints | Best choice (hooks, settings) | Limited |
| Built-in safety prompts | Manual configuration | Best choice |
| Git-based reversibility | Native | Requires setup |
| Programmatic precision | Best choice | Good |

### The Director's Tip: Invoke Principles Explicitly

Instead of: "Refactor this code"

Try:
```
"Refactor this using Principle 4—break it into 3 small steps.
After each step, show me what changed and wait for my approval
before continuing."
```

Or for debugging:
```
"Debug this using Principles 1, 3, and 7. Use the terminal to
investigate, verify your fix with tests, and show me the logs
so I can see what happened."
```

---

## Lesson 10: Principles Exercises

### Overview
17 exercises across 7 modules + 3 capstone projects. Closes the gap between knowing the theory and having the muscle memory.

Three skills across every exercise:
1. **Principle recognition** — identifying which principle fits a scenario
2. **Principle application** — using a principle to solve a concrete problem
3. **Workflow diagnosis** — spotting which principle was violated when something breaks

### The Principle Application Framework

For every exercise:
1. **Identify**: Which principle applies?
2. **Diagnose**: What failure does this principle prevent?
3. **Plan**: How will you apply this principle here?
4. **Execute**: Apply the principle with Claude Code or Cowork
5. **Verify**: Did it work? What changed compared to no-principle approach?
6. **Compare**: What would have happened WITHOUT the principle?
7. **Generalize**: When else does this principle apply in your work?

### Assessment Rubric

| Criteria | Beginner (1) | Developing (2) | Proficient (3) | Advanced (4) |
|----------|--------------|----------------|----------------|--------------|
| Principle Recognition | Can't identify which applies | Identifies when told category | Correctly identifies from clues | Spots violations before problems |
| Application Quality | Applies mechanically | Applies with some adaptation | Adapts fluently to novel scenarios | Combines multiple principles proactively |
| Diagnosis Depth | Describes symptoms only | Identifies violated principle | Explains root cause and prevention | Proposes systematic checks |
| Prompt Specificity | Vague, principle-unaware | Mentions principle but not HOW | Prompts encode principle as constraint | Prompts teach Claude the principle |
| Reflection Quality | No reflection | Notes what worked/didn't | Connects exercise to other scenarios | Identifies personal workflow gaps |

### Module Summaries

**Module 1: Bash is the Key** — Verify state with bash before modifying; discover how skipping bash verification leads to cascading wrong assumptions.

**Module 2: Code as Universal Interface** — Spec vs. prose comparison; discover how same prompt produces different outputs (interpretation gap).

**Module 3: Verification as Core Step** — Trust but verify with bash commands; discover "looks done" trap with silent bugs.

**Module 4: Small, Reversible Decomposition** — Atomic commits practice; discover the big-bang commit failure and how to untangle it.

**Module 5: Persisting State in Files** — Build a CLAUDE.md from session transcripts; discover Groundhog Day sessions (repeated wasted work).

**Module 6: Constraints and Safety** — Write permission guardrails; discover unconstrained agent incident analysis.

**Module 7: Observability** — Add progress reporting to multi-step task; discover opaque session forensic analysis.

### Module 8: Integration Capstones

**Capstone A: Project Rescue** — Broken project with 4+ principle violations. Fix using all principles systematically.

**Capstone B: Workflow Design** — Design a complete AI-assisted development workflow from scratch for a new team.

**Capstone C: Your Own Project** — Audit YOUR current workflow against all 7 principles. Rate yourself, identify gaps, implement top 3 changes.

---

## Lesson 11: Chapter Quiz

### Description
33-question quiz testing comprehension of all seven principles.

### Questions by Principle
- Questions 1-3: Principle 1 (Bash)
- Questions 4-6: Principle 2 (Code as Interface)
- Questions 7-9: Principle 3 (Verification)
- Questions 10-12: Principle 4 (Decomposition)
- Questions 13-15: Principle 5 (State Persistence)
- Questions 16-18: Principle 6 (Constraints/Safety)
- Questions 19-20: Principle 7 (Observability)
- Questions 21-23: Integration/Putting It Together

### Scoring Guide
- 30-33: Advanced
- 24-29: Intermediate
- 18-23: Elementary
- 0-17: Beginner

---

## Chapter 17 URL Structure

Base: https://agentfactory.panaversity.org/docs/General-Agents-Foundations/seven-principles/

- /bash-is-the-key
- /code-as-universal-interface
- /verification-as-core-step
- /small-reversible-decomposition
- /persisting-state-in-files
- /constraints-and-safety
- /observability
- /operational-best-practices
- /putting-it-all-together
- /principles-exercises
- /chapter-quiz
