# Chapter 16: Spec-Driven Development (SDD)
Source: https://agentfactory.panaversity.org/docs/General-Agents-Foundations/spec-driven-development

---

## Lesson 1: Why Specs Beat Vibe Coding
(Fetched in previous session — key topics: Spec-First, Spec-Anchored, Spec-as-Source; vibe coding failure modes; SDD value proposition)

---

## Lesson 2: Three Levels of SDD
(Fetched in previous session — key topics: Spec-First Level, Spec-Anchored Level, Spec-as-Source Level; when to use each)

---

## Lesson 3: The Project Constitution
(Fetched in previous session — key topics: CLAUDE.md global and project level; permanent context; project norms)

---

## Lesson 4: Four-Phase SDD Workflow
(Fetched in previous session — key topics: Research Phase, Specification Phase, Refinement Phase, Implementation Phase)

---

## Lesson 5: Parallel Research
**Phase 1 - Parallel Research**

Full content fetched. Key topics:
- Decomposition template for parallel research
- Spawning subagents to explore different aspects simultaneously
- Research synthesis into a unified document
- Example scenarios (authentication patterns, pagination, error handling)
- Research-to-spec handoff

---

## Lesson 6: Writing Effective Specifications
**Phase 2 - Writing the Spec**

Full content fetched. Key topics:
- 4-part spec template: Context, Goals/Constraints, Reference Architecture, Implementation Checklist
- Anti-patterns in specification writing
- Signal-dense vs. noise-heavy specs
- Audience, tone, depth alignment
- The "spec as external memory" principle

---

## Lesson 7: Refinement via Interview
**Phase 3 - Refinement via Interview**

Full content fetched. Key topics:
- Five ambiguity categories: Audience/Stakeholder, Scope/Boundaries, Success Criteria, Technical Constraints, Edge Cases
- Interview checklist for surfacing hidden assumptions
- ask_user_question pattern
- When to expand vs. accept a lightweight spec

---

## Lesson 8: Phase 4: Task-Based Implementation

### Opening Quote
"You are the main agent and your subagents are your devs."

### The Core Prompt Pattern
```
Implement @docs/my-spec.md
Use the task tool and each task should only be done by a subagent
so that context is clear. After each task do a commit before you continue.
You are the main agent and your subagents are your devs.
```

### What Happens When You Run This

**Step 1: Task Extraction**
Claude reads your specification and extracts the implementation checklist. Each checkbox becomes a task. Dependencies between tasks are identified.

**Step 2: Subagent Delegation**
For each task, Claude spawns a fresh subagent. The subagent receives:
- The specific task description
- Relevant context from the spec
- Access to the codebase state

The subagent does NOT receive the main agent's accumulated conversation history. It starts fresh.

**Step 3: Task Execution and Commit**
The subagent completes its assigned task, then commits the changes with an atomic commit message. Control returns to the main agent.

**Step 4: Progress Tracking**
The main agent updates task status and moves to the next task. If a task fails, the main agent can retry, skip, or escalate.

### The Task System Tools

| Tool | Purpose | When Used |
|------|---------|-----------|
| TaskCreate | Define a new task with description and dependencies | Main agent extracts tasks from spec |
| TaskUpdate | Change task status (pending, in_progress, completed, failed) | Subagent completes or fails task |
| TaskList | View all tasks with current status and blockers | Main agent tracks overall progress |
| TaskGet | Retrieve full details of a specific task | Before starting work on a task |

### Why Context Isolation Matters

**Agent Amnesia**: Starting a new session mid-task loses all progress unless documented. The specification and task list persist across sessions, providing external memory that survives restarts.

**Context Pollution**: A full context window causes agents to drop discovered bugs instead of tracking them. Fresh subagent context per task prevents accumulated errors from propagating.

**Without context isolation:**
```
Minute 10: Main agent makes assumption about data format
Minute 25: Writes validation logic based on assumption
Minute 40: Implements API endpoint using validation
Minute 55: Tests fail - original assumption was wrong
Result: 45 minutes of contaminated work to untangle
```

**With context isolation:**
```
Task 1: Define data schema (subagent 1, commits)
Task 2: Write validation logic (subagent 2, commits)
Task 3: Implement API endpoint (subagent 3, commits)
Task 4: Add tests (subagent 4, fails - schema assumption wrong)
Result: Roll back task 4, fix schema in task 1, tasks 2-3 still valid
```

**Parallel execution benefit**: Tasks without dependencies can run simultaneously.

### The Backpressure Pattern

The backpressure pattern adds quality gates that slow implementation when quality drops.

**Pre-commit hooks** are the primary backpressure mechanism:
```
# .husky/pre-commit
pnpm typecheck && pnpm lint && pnpm test-run
```

When a subagent attempts to commit, this hook runs automatically. If typechecking, linting, or tests fail, the commit is rejected.

**Setting up pre-commit hooks:**
```
pnpm add -D husky
pnpm exec husky init
echo "pnpm typecheck && pnpm lint && pnpm test-run" > .husky/pre-commit
```

### Real Results: The alexop.dev Implementation

| Metric | Result |
|--------|--------|
| Total time | 45 minutes |
| Tasks completed | 14 |
| Commits made | 14 (one per task) |
| Context usage | 71% of available window |
| Rollbacks needed | 0 |

### When to Use Task-Based Implementation

**Use task-based implementation when:**
- Specification has 5+ distinct implementation items
- Work can be parallelized across independent components
- You need clear rollback boundaries
- Implementation will exceed 30 minutes

**Use simpler approaches when:**
- Specification is small (1-3 items)
- Work is inherently sequential with no parallel opportunities
- Quick prototype or exploration (not production code)
- Entire implementation fits in single commit

### Lab: Task Decomposition

Take a specification and extract its task structure:

1. **List all implementation items** from the spec's checklist or requirements
2. **Identify dependencies**: Which tasks require others to complete first? Which can run in parallel?
3. **Estimate task sizes**: Tasks should be 5-15 minutes of work each
4. **Draw the dependency graph:**
```
Task 1 (schema) ─┬─> Task 3 (API)
                 │
Task 2 (utils) ──┴─> Task 4 (tests)
```

### Try With AI

**Prompt 1: Extract Tasks from Spec**
```
Read report-spec.md. Extract the implementation checklist into tasks.
For each task:
- One sentence description
- Dependencies (what must complete first?)
- Can it run in parallel with others?
Write to tasks.md.
```

**Prompt 2: Implement First Task**
```
Implement report-spec.md using tasks.md.
Use the task tool. Each task should be done by a subagent.
After each task, commit before continuing.
You are the main agent; your subagents are your writers.
Start with task 1 only. Verify it meets the spec before proceeding.
```

**Prompt 3: Parallel Execution**
```
"Tool Comparison" and "Implementation Risks" in tasks.md have no
dependencies on each other. Execute them in parallel using separate
subagents. Commit each independently when complete.
```

---

## Lesson 9: The Decision Framework

### Main Heading
"SDD is a power tool, not a universal solution. The wisdom is knowing when NOT to use it."

### Introduction
This lesson develops judgment about when to use SDD vs. skip it. Tasks: recognize characteristics that signal "use SDD," learn the lightweight spec pattern for borderline cases, understand common critiques.

### When SDD Excels

| Scenario | Why SDD Helps |
|----------|---------------|
| Large refactors (15+ files) | Upfront spec prevents mid-refactor pivots |
| Unclear requirements | Research phase surfaces what you don't know |
| Learning new libraries | Parallel research accelerates understanding |
| Team coordination | Spec serves as contract between implementers |
| Legacy modernization | Captures original intent before rebuilding |

**The pattern**: These scenarios share complexity that exceeds working memory.

**Large Refactors**: Without a spec, large refactors drift. With a spec, you define the end state upfront. Each task references that spec.

**Unclear Requirements**: Research phase transforms vague goals into concrete specifications. A developer approaching "add real-time collaboration" without SDD might jump straight to WebSocket code. With SDD, the research phase reveals: What conflict resolution strategy? What persistence model? What happens offline?

**Learning New Libraries**: SDD's parallel research pattern — spawn subagents to investigate different aspects simultaneously. Research that takes hours sequentially completes in minutes.

### When SDD Is Overkill

| Scenario | Why Skip SDD |
|----------|--------------|
| Single-file bug fixes | Three-document workflow for one-line fix wastes time |
| Well-defined simple features | Implementation is obvious; spec adds no value |
| Exploratory prototyping | You're discovering requirements; vibe coding is faster |
| Production incidents | Need immediate action, not spec documents |

**The pattern**: These scenarios share solutions that are either obvious or unknowable.

**Heuristic for bug fixes**: If you can explain the fix in one sentence, skip SDD.

**Exploratory Prototyping**: Vibe coding serves exploration. Important: Exploration is a phase, not an end state. Once you discover what works, write a specification before building the production version.

**Production Incidents**: When the system is down, fix it first and document later.

### The Decision Heuristic

```
IF files_affected > 5 OR requirements_unclear OR learning_new_tech:
    Use SDD
ELSE IF single_file AND bug_fix:
    Skip SDD
ELSE:
    Judgment call — try lightweight spec first
```

**The variables:**
- **files_affected > 5**: Changes across multiple files compound complexity
- **requirements_unclear**: If you can't explain the deliverable in one paragraph, research phase adds value
- **learning_new_tech**: Unfamiliar territory benefits from parallel research
- **single_file AND bug_fix**: Known problem, contained scope, obvious solution

### The Lightweight Spec Pattern

```
# Task: [One-line description]

## Constraints
- [What NOT to do]
- [Boundaries on scope]

## Success Criteria
- [ ] [Measurable outcome 1]
- [ ] [Measurable outcome 2]
```

**Why this works**: Constraints prevent scope creep. Success criteria define done. These two elements provide 80% of specification value with 20% of the overhead.

**When to expand**: If writing the lightweight spec reveals complexity, convert to a full specification.

**When to ship as-is**: If the lightweight spec feels sufficient, proceed directly to implementation.

### Building Judgment

Experienced practitioners develop intuition from feedback loops:

1. **Tracking outcomes**: When a project struggles, ask: Would a specification have helped?
2. **Calibrating overhead**: Time your specification writing (lightweight ~10 min, full ~2 hours).
3. **Recognizing signals**:
   - Multiple collaborators → Spec as contract
   - Unfamiliar domain → Research phase valuable
   - Reversibility low → Upfront planning justified
   - Time horizon long → Specification ages better than memory

### Critiques and Counterpoints

**Critique 1: "This Is Just Waterfall"**
Counterpoint: SDD phases aren't isolated handoffs. The spec updates during implementation. Tasks are atomic and reversible (git revert), not months-long commitments.

**Critique 2: "Double Code Review"**
Counterpoint: Spec review catches design problems; code review catches implementation problems. Finding a design flaw during code review means discarding implementation work.

**Critique 3: "Diminishing Returns at Scale"**
Counterpoint: This is legitimate. Long-running projects must decide whether to maintain specs as living documents (Spec-Anchored) or treat them as implementation kickoff artifacts (Spec-First).

**Critique 4: "Overhead on Simple Tasks"**
Counterpoint: Agreed. That's the point of this lesson. The decision framework exists precisely because SDD isn't always appropriate.

### Navigation
- Previous: Phase 4: Task-Based Implementation
- Next: Practical SDD Exercises

---

## Lesson 10: Practical SDD Exercises

### Key Premise
"Vocabulary without practice is just terminology." 27 exercises in 8 modules, plus 3 capstone projects.

### Core Skills Developed
1. **Specification Writing** — Converting vague goals into precise, actionable documents
2. **Research & Refinement** — Gathering context and surfacing hidden assumptions
3. **Task Delegation** — Breaking specs into atomic, ordered tasks

### Module Structure

**Module 1: Spec vs. Vibe (3 exercises)**
- 1.1 Event Gone Wrong: Reverse-engineer what a specification should contain from project failures
- 1.2 Side-by-Side Test: Compare vibe-coded versus spec-driven outputs
- 1.3 Vibe-to-Spec Rescue: Diagnose failures and write corrective specifications

**Module 2: Research Phase (3 exercises)**
- 2.1 Multi-Angle Investigation: Research from user, technical, organizational, competitive angles
- 2.2 Source Reliability Audit: Verify research claims and flag unverifiable statements
- 2.3 Research Summary: Synthesize multiple sources into unified context

**Module 3: Writing Specs (3 exercises)**
- 3.1 Home Renovation: Extract structure from unstructured homeowner notes
- 3.2 Charity Fundraiser: Synthesize multi-stakeholder input with conflicting priorities
- 3.3 Spec from Chaos: Integrate four messy input sources into coherent specification

**Module 4: Constraints & Criteria (3 exercises)**
- 4.1 Missing Guardrails: Identify specification gaps and add necessary constraints
- 4.2 Measurable vs. Vague: Convert vague success criteria into verifiable standards
- 4.3 Constraint Stress Test: Find loopholes through adversarial thinking

**Module 5: Refinement (3 exercises)**
- 5.1 Interview Challenge: Surface assumptions through structured questioning
- 5.2 Ambiguity Hunter: Locate hidden ambiguities in polished-looking specs
- 5.3 Stakeholder Perspectives: Review from end-user, admin, and executive viewpoints

**Module 6: Task Breakdown (3 exercises)**
- 6.1 Dependency Map: Identify task ordering and critical path
- 6.2 Atomic Task Writer: Decompose vague tasks into agent-executable units
- 6.3 Delegation Simulation: Execute end-to-end project using task delegation

**Module 7: Full Cycle (3 exercises)**
- 7.1 Community Newsletter: Complete research-specify-refine-execute workflow
- 7.2 Office Move Planner: Handle projects with hard deadlines and curveballs
- 7.3 Product Launch Playbook: Transform unstructured pitch into executable plan

**Module 8: Capstones (3 self-directed projects)**
- A: Wedding Planner System (complex, emotionally-charged)
- B: Small Business Launch Kit (interconnected business decisions)
- C: Personal Goal System (real-world stakes)

### The SDD Framework (for each exercise)
1. **Research**: Identify what must be known before specifying
2. **Specify**: Document goals, constraints, success criteria, scope
3. **Refine**: Surface ambiguities through interviews and review
4. **Execute**: Delegate to Claude based on specification
5. **Verify**: Check outputs against every criterion
6. **Iterate**: Improve the specification itself

### Assessment Rubric
Performance measured across:
- Research quality (from skipped → systematic multi-angle investigation)
- Spec completeness (vague → reusable with edge cases)
- Constraint coverage (absent → tested against edge cases)
- Refinement depth (none → changed spec direction)
- Task delegation (monolithic → independently executable)

### Key Insight
"SDD is a thinking methodology" applicable to event planning, business operations, content creation — anywhere vague intention leads to rework.

---

## Chapter 16 URL Structure

Base: https://agentfactory.panaversity.org/docs/General-Agents-Foundations/spec-driven-development/

- /why-specs-beat-vibe-coding
- /three-levels-of-sdd
- /the-project-constitution
- /four-phase-workflow
- /parallel-research
- /writing-effective-specs
- /refinement-via-interview
- /task-based-implementation
- /decision-framework
- /sdd-exercises
