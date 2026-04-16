// Script to add MCQs 11-15 to all lessons in chapters 15, 16, and 17
const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'mcq-app', 'data');

// ============================================================================
// CHAPTER 15 MCQs - Lessons 3-10 (Context Engineering)
// ============================================================================

const chapter15Mcqs = {
  lesson3: [
    {
      id: 11,
      question: "Scenario: You're architecting a healthcare compliance Digital FTE. You have: HIPAA rules (stable, critical), deployment workflow (substantial, selective), current sprint goals (dynamic), test commands (stable). According to Context Architecture principles, how do you distribute this content?",
      options: {
        A: "Everything in CLAUDE.md for simplicity and consistency",
        B: "CLAUDE.md: HIPAA rules + test commands (stable, error-critical). Skills: deployment workflow (selectively needed, substantial). Task files: sprint goals (dynamic — creates poisoning if in CLAUDE.md)",
        C: "Everything in Skills for maximum token efficiency",
        D: "CLAUDE.md: sprint goals; Skills: HIPAA rules; Hooks: test commands"
      },
      correct: "B",
      explanation: "Context Architecture decision framework: CLAUDE.md for stable, error-critical info needed nearly every task (HIPAA rules, test commands). Skills for selectively needed, substantial content (deployment workflow). Task files for frequently changing info (sprint goals) — putting dynamic data in CLAUDE.md creates context poisoning when stale."
    },
    {
      id: 12,
      question: "Scenario: Your marketing consultant Digital FTE has 7,300 tokens of expertise in CLAUDE.md. Per-request costs are high. According to the 13-fold reduction principle, how do you restructure for token efficiency?",
      options: {
        A: "Compress CLAUDE.md using abbreviations to reduce token count",
        B: "Move domain expertise to Skills: minimal CLAUDE.md (~400 tokens) + Skill descriptions (~150 tokens) with full details loaded on-demand — reduces baseline from 7,300 to ~550 tokens per request",
        C: "Split CLAUDE.md into multiple smaller files that sum to the same content",
        D: "Use file references exclusively and remove all inline content"
      },
      correct: "B",
      explanation: "The 13-fold reduction: Option A (all in CLAUDE.md) = ~7,300 tokens per request (continuous cost). Option B (architectural separation) = ~550 baseline tokens. CLAUDE.md loads every request; Skills load only when invoked. 7,300 / 550 = ~13x reduction. This is why moving domain expertise to Skills dramatically improves context efficiency."
    },
    {
      id: 13,
      question: "Scenario: You're building a code review Digital FTE. You need to identify deprecated API usages across 200+ files. According to Context Architecture, which tool do you use and why?",
      options: {
        A: "CLAUDE.md instruction — tell Claude to check for deprecated APIs",
        B: "Subagent — requires reading numerous files (would pollute main context), benefits from fresh perspective, and returns a clean summary with zero cost to main session context",
        C: "Skill — create a CodeReview skill with deprecated API patterns",
        D: "Hook — run a script that searches for deprecated patterns"
      },
      correct: "B",
      explanation: "Subagents are optimal when: work requires reading numerous files (would pollute main context), fresh perspective is needed (no accumulated assumptions), or tasks can execute in parallel. The key advantage: Subagents operate in isolated contexts with zero cost to the main session's context window. CLAUDE.md would be an instruction, not execution."
    },
    {
      id: 14,
      question: "Scenario: Your team's Digital FTE has 15 Skills but Claude rarely invokes them correctly. According to Common Architecture Mistakes, what is the likely problem and fix?",
      options: {
        A: "Skills are too large — split them into smaller files",
        B: "Skill Proliferation — numerous Skills with ambiguous descriptions. Fix: write clear, specific skill metadata that precisely states when each skill should be used. Skill description quality determines discovery quality.",
        C: "Too many Skills overwhelm the model — reduce to 5 maximum",
        D: "Skills conflict with CLAUDE.md — remove one or the other"
      },
      correct: "B",
      explanation: "Skill Proliferation (Common Mistake #3): creating numerous Skills with ambiguous or overlapping descriptions causes poor invocation. Claude can't determine when to use them. The cure: write clear, specific skill descriptions that precisely state when the skill should be used. Example: 'Use this skill when reviewing authentication code for security vulnerabilities' vs. vague 'Code review skill.'"
    },
    {
      id: 15,
      question: "Scenario: You're performing repetitive linting checks by asking Claude 'verify this code follows our style guide' every time. According to Hook Neglect, what is the problem and better approach?",
      options: {
        A: "No problem — this is the correct use of Claude for quality checks",
        B: "Hook Neglect — using LLM calls for repetitive validation that could be deterministic shell scripts. Fix: create a pre-commit hook that runs linter automatically, executing externally with zero context cost",
        C: "You should create a Skill for style guide checking instead",
        D: "Add the style guide to CLAUDE.md for better compliance"
      },
      correct: "B",
      explanation: "Hook Neglect (Common Mistake #4): performing repetitive validation with LLM calls instead of deterministic scripts. Asking Claude to 'check if tests pass' or 'verify linting' wastes context window for tasks that hooks handle externally with zero context cost. Hooks execute on triggers without consuming any context or adding latency from LLM calls."
    }
  ],
  lesson4: [
    {
      id: 11,
      question: "Scenario: Your team has been using Claude Code todos for 3 months. A developer runs /clear and loses all task tracking. According to the Tasks system lesson, what was the fundamental problem?",
      options: {
        A: "Todos weren't synced to a remote server",
        B: "Old todos lived in chat conversations — disappearing on /clear, crashes, or session end. The new Tasks system persists to .claude/tasks.json, surviving session boundaries",
        C: "The team didn't export todos before clearing",
        D: "Todos should have been saved as markdown files instead"
      },
      correct: "B",
      explanation: "The old problem: todos lived in chat conversations, disappearing on /clear, crashes, or session end. The new Tasks system persists to .claude/tasks.json — surviving session boundaries, enabling multi-session work, and providing external memory for long-running projects. Tasks persist; conversation todos vanish."
    },
    {
      id: 12,
      question: "Scenario: You're managing a 3-week feature implementation. According to the Tasks system, how do you structure tasks for optimal multi-session work?",
      options: {
        A: "One task: 'Implement the feature' — keeps it simple",
        B: "Granular task decomposition: break into small, independently completable units (e.g., 'Add API endpoint', 'Write tests', 'Update docs'). Each task can complete in one session, enabling progress tracking across sessions",
        C: "Three tasks, one per week of work",
        D: "Tasks aren't needed — just use conversation history"
      },
      correct: "B",
      explanation: "Granular task decomposition enables multi-session work: break large features into small, independently completable units. Each task completes in one session. Benefits: progress survives session boundaries, easy to resume ('what's the next incomplete task?'), and clear status reporting. One monolithic task provides none of these benefits."
    },
    {
      id: 13,
      question: "Scenario: A developer complains 'I spend 15 minutes every session bringing Claude up to speed on what we're doing.' According to the Tasks system, what is the solution?",
      options: {
        A: "Write a longer CLAUDE.md with more project context",
        B: "Use Tasks as external memory: each task contains context about what's being done. New sessions read the task list and immediately understand the project state without re-briefing",
        C: "Record voice memos summarizing each session's work",
        D: "Use a different AI model with better memory"
      },
      correct: "B",
      explanation: "Tasks as external memory: the task list IS the project state documentation. Each task contains context about what's being done, why, and current status. New sessions read tasks.json and immediately understand the project without re-briefing. This eliminates the 'bring Claude up to speed' tax on every session."
    },
    {
      id: 14,
      question: "Scenario: Your team lead asks 'What's the status of the authentication refactor?' You've been working on it for 2 weeks across 8 sessions. According to the Tasks system, how do you answer?",
      options: {
        A: "Scroll through 8 sessions of conversation history to reconstruct progress",
        B: "Show the task list: '12 tasks total — 8 complete, 3 in progress, 1 pending. Here's what's done and what's next.' Tasks provide instant status without manual reconstruction",
        C: "Write a status report document manually",
        D: "Ask Claude to summarize what was done"
      },
      correct: "B",
      explanation: "Tasks provide instant status reporting: the task list shows total tasks, completion status, and what's next. No manual reconstruction from conversation history needed. This is why Tasks enable multi-session work — progress is tracked persistently, not ephemeral in chat history."
    },
    {
      id: 15,
      question: "Scenario: You're starting a new session after a 3-day break. According to the Tasks workflow, what is your first action to resume efficiently?",
      options: {
        A: "Ask Claude 'what were we working on?' and wait for it to search conversation history",
        B: "Read the task list to see: what's complete, what's in progress, what's next. Then continue with the next incomplete task. Tasks provide session-independent state.",
        C: "Start working on whatever you remember from 3 days ago",
        D: "Re-read the entire project specification from scratch"
      },
      correct: "B",
      explanation: "Tasks workflow for resuming: 1) Read task list to see completion status, 2) Identify the next incomplete task, 3) Continue from there. Tasks provide session-independent state — you don't need to remember or reconstruct from conversation history. The task list IS the project memory."
    }
  ],
  lesson5: [
    {
      id: 11,
      question: "Scenario: You've built a customer support Digital FTE. You want to extract tacit knowledge (how Claude handles edge cases) into persistent memory. According to the Two-Way Problem, what is the challenge and approach?",
      options: {
        A: "Tacit knowledge cannot be extracted — it's only in the model weights",
        B: "Tacit knowledge is 'in Claude's head' from interactions. Approach: use hooks to log decisions, create memory injection patterns, and systematically capture edge case handling into Skills or task files for persistence",
        C: "Export conversation history and save it as documentation",
        D: "Ask Claude to write a summary of what it learned"
      },
      correct: "B",
      explanation: "The Two-Way Problem: getting knowledge INTO Claude (easy — write CLAUDE.md) vs. getting knowledge OUT (hard — tacit knowledge from interactions). Approach for extraction: use hooks to log decisions, create memory injection patterns (vector DB or PreToolUse hooks), and systematically capture edge case handling into persistent files. This transforms session-specific learning into institutional memory."
    },
    {
      id: 12,
      question: "Scenario: Your Digital FTE has learned to handle 50+ edge cases through 3 months of use. A new team member joins and asks Claude about edge cases — Claude has no memory. According to the Two-Way Problem, what went wrong?",
      options: {
        A: "Claude's training data is outdated",
        B: "Tacit knowledge from 3 months of interactions was never extracted into persistent memory. The knowledge existed in conversation history (now gone) and Claude's transient context, not in Skills or CLAUDE.md",
        C: "The new team member doesn't have proper access permissions",
        D: "Edge cases should have been documented in a wiki"
      },
      correct: "B",
      explanation: "The Two-Way Problem failure mode: knowledge flowed IN (team taught Claude through interactions) but never flowed OUT (extracted into persistent memory). The edge case handling existed in conversation history and Claude's transient context — lost when sessions ended. Solution: systematic knowledge extraction via hooks, memory injection, and Skills authoring."
    },
    {
      id: 13,
      question: "Scenario: You want to capture 'how Claude handles difficult customer complaints' as institutional knowledge. According to the Two-Way Problem lesson, what is the correct extraction workflow?",
      options: {
        A: "Ask Claude to write a document about its approach",
        B: "1) Have Claude handle real complaints, 2) Use hooks to log decision rationale, 3) Review logs to identify patterns, 4) Encode patterns into a Skill with explicit edge case handling, 5) Test the Skill against historical cases",
        C: "Record screen videos of Claude handling complaints",
        D: "Export all conversation history to a database"
      },
      correct: "B",
      explanation: "Knowledge extraction workflow: 1) Let Claude handle real cases (knowledge generation), 2) Use hooks to log decision rationale (capture), 3) Review logs to identify patterns (analysis), 4) Encode patterns into a Skill with explicit edge case handling (persistence), 5) Test against historical cases (validation). This transforms tacit, session-bound knowledge into explicit, persistent institutional memory."
    },
    {
      id: 14,
      question: "Scenario: Your team complains 'We keep re-learning the same lessons every time we work on this project.' According to the Two-Way Problem, what is the root cause?",
      options: {
        A: "Team members don't communicate well with each other",
        B: "Lessons learned in sessions are never extracted into persistent memory (Skills, CLAUDE.md, task files). Each new session starts with the same knowledge gaps, requiring re-learning",
        C: "The project is too complex for any team to master",
        D: "Claude doesn't retain information between sessions by design"
      },
      correct: "B",
      explanation: "Root cause: lessons learned during sessions (edge cases discovered, patterns identified, mistakes made) exist only in conversation history. When sessions end or /clear runs, that knowledge vanishes. Each new session re-discovers the same lessons. Solution: systematic knowledge extraction — capture learnings into persistent files during or after each session."
    },
    {
      id: 15,
      question: "Scenario: You're designing a knowledge management system for your Digital FTE. According to the Two-Way Problem, which knowledge types require active extraction vs. are easily encoded?",
      options: {
        A: "All knowledge types are equally easy to encode",
        B: "Explicit knowledge (rules, procedures) is easy to encode (write to CLAUDE.md). Tacit knowledge (edge case intuition, judgment patterns) requires active extraction via hooks, logging, and systematic pattern identification",
        C: "Tacit knowledge is easy; explicit knowledge is hard",
        D: "Neither type can be reliably encoded"
      },
      correct: "B",
      explanation: "Two-Way Problem asymmetry: Explicit knowledge (rules, procedures, commands) is easy — write it to CLAUDE.md or Skills. Tacit knowledge (edge case intuition, judgment patterns, 'how we really handle X') requires active extraction: hooks to log decisions, review sessions to identify patterns, encode patterns into persistent files. The extraction tax is real but necessary for institutional memory."
    }
  ],
  lesson6: [
    {
      id: 11,
      question: "Scenario: Your customer support Digital FTE is at 88% context utilization after a 4-hour shift. Quality is degrading. According to Context Lifecycle, what is the correct intervention?",
      options: {
        A: "Keep going — autocompact will handle it eventually",
        B: "Mandatory /compact at 85%+ — summarize old conversation content while preserving key decisions and policies. This is proactive lifecycle management, not emergency response",
        C: "/clear and start completely fresh, losing all session context",
        D: "Upgrade to a model with larger context window"
      },
      correct: "B",
      explanation: "Context Lifecycle at 85%+: mandatory /compact to prevent emergency situations. /compact summarizes old conversation content while preserving key decisions, policies, and work products. This is proactive management — catching the Red zone (90%+) early allows controlled compaction. Waiting for autocompact risks quality degradation during critical work."
    },
    {
      id: 12,
      question: "Scenario: You're 2 hours into a complex legal contract review. Context is at 75%. You need to continue for 3 more hours. According to Context Lifecycle, do you /compact or /clear?",
      options: {
        A: "/clear — fresh start is always better",
        B: "/compact — the analytical work (clause-by-clause liability analysis) must be preserved. Summarize exploration noise while keeping the actual work product intact",
        C: "Neither — continue until context is full",
        D: "Export and start a new session manually"
      },
      correct: "B",
      explanation: "Context Lifecycle decision: task incomplete → /compact (preserve work, clear noise). The clause-by-clause analysis IS the work product — must be preserved. General contract law review and research exploration are noise that can be summarized. This is selective compaction: keep what matters, compress what doesn't."
    },
    {
      id: 13,
      question: "Scenario: A developer finishes a complete feature implementation. Context is at 92%. According to Context Lifecycle, what is the correct action and why?",
      options: {
        A: "/compact to preserve the work for future reference",
        B: "/clear — task complete, no state needs preservation. Fresh context for the next task prevents Context Rot and maximizes attention budget",
        C: "Keep the context in case bugs are found later",
        D: "Export the conversation to documentation before clearing"
      },
      correct: "B",
      explanation: "Context Lifecycle: task complete → /clear. No state needs preservation — the code is committed, tests pass. /clear provides fresh context for the next task, preventing Context Rot (accumulated degradation) and maximizing attention budget. Keeping completed task context is noise that will poison future work."
    },
    {
      id: 14,
      question: "Scenario: Your team's Digital FTE sessions last 6+ hours daily. Users report 'Claude gets worse as the day goes on.' According to Context Lifecycle, what is the systemic issue?",
      options: {
        A: "The model degrades with extended use — switch models",
        B: "No lifecycle management — sessions accumulate context without /compact or /clear, causing Context Rot (Poisoning from outdated info, Distraction from irrelevant content). Implement mandatory compaction at 85%+",
        C: "Users are fatigued — take more breaks",
        D: "API rate limiting is affecting response quality"
      },
      correct: "B",
      explanation: "Systemic Context Rot: 6+ hour sessions without lifecycle management accumulate: outdated info (Poisoning), irrelevant content (Distraction), similar concepts that conflate (Confusion), and potentially contradictory instructions (Clash). Solution: mandatory /compact at 85%+, /clear when tasks complete, and proactive monitoring every 10 messages above 50%."
    },
    {
      id: 15,
      question: "Scenario: You're designing a long-running data analysis project (3 days, multiple sessions). According to Context Lifecycle, what architecture do you use?",
      options: {
        A: "One continuous session for all 3 days",
        B: "Progress file architecture: each session /clears at start, reads progress file for state, writes updates. This combines fresh context (no Rot) with persistent state (multi-session continuity)",
        C: "Never /clear — keep the session alive for 3 days",
        D: "Use a model with the largest context window available"
      },
      correct: "B",
      explanation: "Progress file architecture for multi-session work: each session starts fresh (/clear), reads the progress file to understand current state, works on the next task, writes updates to progress file. Benefits: fresh context every session (no Rot), persistent state across sessions (continuity), and easy resumption ('what's the next incomplete task?')."
    }
  ],
  lesson7: [
    {
      id: 11,
      question: "Scenario: You're managing a 2-week data migration project across 10 sessions. According to Long-Horizon Work patterns, what is the critical artifact you need?",
      options: {
        A: "A detailed Gantt chart with timelines",
        B: "Progress file with granular task decomposition — each task independently completable in one session, status tracked persistently, enabling easy resumption after session boundaries",
        C: "A comprehensive specification document",
        D: "Daily status report emails"
      },
      correct: "B",
      explanation: "Long-Horizon Work requires: progress file with granular task decomposition. Each task completes in one session (no partial work lost). Status persists across sessions (easy resumption). The progress file IS the project memory — surviving /clear, crashes, and session ends. Without it, multi-session work loses state constantly."
    },
    {
      id: 12,
      question: "Scenario: A developer says 'I waste 20 minutes every morning figuring out where we left off yesterday.' According to Long-Horizon Work patterns, what is the solution?",
      options: {
        A: "Start work earlier to absorb the ramp-up time",
        B: "Progress file architecture: read the task list at session start — shows what's complete, what's in progress, what's next. Zero ramp-up; immediate productivity",
        C: "Leave the session running overnight instead of closing it",
        D: "Record voice memos at end of each session summarizing progress"
      },
      correct: "B",
      explanation: "Progress file eliminates ramp-up: read task list at session start, immediately see completed tasks, in-progress work, and next action. No reconstruction from memory or conversation history. This is why granular task decomposition matters — each task is a clear unit of progress that survives session boundaries."
    },
    {
      id: 13,
      question: "Scenario: Your 3-week project has 47 tasks in the progress file. Task #23 failed yesterday. According to Long-Horizon Work patterns, how do you resume?",
      options: {
        A: "Start from task #1 to make sure nothing was missed",
        B: "Read task #23's details (why it failed, what was tried), fix the issue, retry task #23. The progress file provides all context needed to resume without re-doing completed work",
        C: "Skip task #23 and continue to task #24",
        D: "Re-do all 47 tasks from scratch"
      },
      correct: "B",
      explanation: "Progress file enables targeted resumption: task #23 shows failure reason, what was tried, and what's needed to succeed. Fix the issue, retry task #23. Completed tasks (1-22) remain complete. This is the power of persistent task state — you don't lose progress or re-do work across sessions."
    },
    {
      id: 14,
      question: "Scenario: Your team lead asks for a status update on the 3-week migration. According to Long-Horizon Work patterns, how do you provide instant status?",
      options: {
        A: "Manually reconstruct progress from memory and conversation history",
        B: "Show the progress file: '47 tasks total — 31 complete (66%), 12 in progress, 4 pending, 0 failed.' Progress file provides real-time status without manual tracking",
        C: "Ask each team member what they've completed",
        D: "Wait until the project is complete to report status"
      },
      correct: "B",
      explanation: "Progress file provides instant status: total tasks, completion count, in-progress count, pending count, failed count. No manual tracking or reconstruction needed. This is why progress files enable long-horizon work — they're the single source of truth for project state, always current, always accessible."
    },
    {
      id: 15,
      question: "Scenario: You're designing a progress file schema for a codebase modernization project. According to Long-Horizon Work patterns, what fields are essential?",
      options: {
        A: "Task name and description only",
        B: "Task ID, description, status (pending/in_progress/complete/failed), dependencies, session notes, failure reasons (if any), completion timestamp. This enables full lifecycle tracking and easy resumption",
        C: "Only task name and completion status",
        D: "Task name, assignee, and estimated hours"
      },
      correct: "B",
      explanation: "Essential progress file fields: Task ID (unique identifier), description (what), status (state tracking), dependencies (ordering), session notes (context for resumption), failure reasons (learnings), completion timestamp (audit trail). This schema enables: easy resumption, failure analysis, dependency management, and complete project audit trail."
    }
  ],
  lesson8: [
    {
      id: 11,
      question: "Scenario: Your Digital FTE handles customer queries using a 50,000-token product manual. Loading the full manual every session is expensive. According to Mid-Stream Memory, what is the efficient approach?",
      options: {
        A: "Load the full manual at session start — it's needed eventually",
        B: "Vector DB chunking: divide manual into semantic chunks (~200 tokens each), retrieve only 3-5 relevant chunks per query (~1,000 tokens total). This achieves 50x reduction while preserving relevance",
        C: "Summarize the manual to 5,000 tokens and load the summary",
        D: "Don't use the manual — rely on Claude's training"
      },
      correct: "B",
      explanation: "Vector DB chunking for mid-stream memory: 50,000-token manual divided into ~250 semantic chunks (~200 tokens each). Per query, retrieve only 3-5 most relevant chunks (~1,000 tokens). 50,000 / 1,000 = 50x reduction. This is mid-stream memory injection — loading context at execution time based on what's actually needed."
    },
    {
      id: 12,
      question: "Scenario: You're building a legal contract review Digital FTE. Jurisdiction-specific patterns (which clauses are enforceable) vary by case. According to Mid-Stream Memory, how do you provide this context efficiently?",
      options: {
        A: "Load all jurisdiction patterns at session start",
        B: "Memory injection via PreToolUse hook: when Claude prepares to review a clause, hook injects jurisdiction-specific patterns for that clause type. Context loads at point-of-need, not upfront",
        C: "Ask the user to specify jurisdiction at session start",
        D: "Create a separate Digital FTE for each jurisdiction"
      },
      correct: "B",
      explanation: "Memory injection via PreToolUse hook: when Claude prepares to use a tool (e.g., 'review liability clause'), the hook intercepts and injects jurisdiction-specific patterns for that clause type. Context loads at point-of-need (mid-stream), not upfront. This is efficient: only relevant patterns load, not all jurisdiction knowledge."
    },
    {
      id: 13,
      question: "Scenario: Your support Digital FTE handles 500+ tickets daily. Product updates happen weekly. According to Mid-Stream Memory, how do you keep context current without re-training?",
      options: {
        A: "Re-train the model weekly with new product info",
        B: "External knowledge base with mid-stream retrieval: when a ticket references a feature, retrieve current documentation from the knowledge base. Updates happen in the knowledge base, instantly available to all sessions",
        C: "Manually brief Claude on updates at the start of each shift",
        D: "Include all product updates in CLAUDE.md"
      },
      correct: "B",
      explanation: "External knowledge base + mid-stream retrieval: product documentation lives externally (database, wiki, or vector DB). When a ticket references a feature, retrieve current documentation at point-of-need. Updates happen once in the knowledge base, instantly available to all sessions. This is mid-stream memory: context injected when needed, not pre-loaded."
    },
    {
      id: 14,
      question: "Scenario: You're comparing two architectures for a 100,000-token knowledge base. Option A: load all at session start. Option B: mid-stream retrieval. According to the lessons, what are the token economics?",
      options: {
        A: "Option A: 100,000 tokens per session. Option B: ~1,000 tokens per query (retrieved chunks). For 100 queries/session, Option B uses 100,000 tokens — same cost",
        B: "Option A: 100,000 tokens per session (continuous cost). Option B: ~1,000 tokens per query. For 10 queries/session, Option B uses 10,000 tokens — 10x reduction. Most sessions don't need full knowledge base.",
        C: "Option A is more efficient because retrieval has overhead",
        D: "Option B always uses more tokens due to retrieval overhead"
      },
      correct: "B",
      explanation: "Token economics: Option A (pre-load) = 100,000 tokens per session regardless of usage. Option B (mid-stream) = ~1,000 tokens per retrieval. For 10 queries/session = 10,000 tokens — 10x reduction. Most sessions only need a fraction of the knowledge base. Mid-stream retrieval aligns token cost with actual usage."
    },
    {
      id: 15,
      question: "Scenario: Your Digital FTE uses a vector DB for mid-stream memory. A user asks about 'refund policy for enterprise plans.' According to the retrieval workflow, what happens?",
      options: {
        A: "Claude answers from training data",
        B: "Query embedded → vector DB searched for semantic similarity → top 3-5 chunks retrieved (refund policy + enterprise plan specifics) → injected into context → Claude answers with retrieved context",
        C: "The full refund policy document is loaded into context",
        D: "Claude searches conversation history for previous refund discussions"
      },
      correct: "B",
      explanation: "Vector DB retrieval workflow: 1) User query embedded (converted to vector), 2) Vector DB searched for semantically similar chunks, 3) Top 3-5 chunks retrieved (refund policy + enterprise specifics), 4) Chunks injected into mid-stream context, 5) Claude answers using retrieved context. This is mid-stream memory: context loaded at point-of-need based on semantic relevance."
    }
  ],
  lesson9: [
    {
      id: 11,
      question: "Scenario: You're building a content generation pipeline: Agent A researches, Agent B writes, Agent C edits. According to Context Isolation, what is the risk with linear handoff (A→B→C)?",
      options: {
        A: "No risk — linear pipelines are the standard approach",
        B: "Dirty Slate Problem: Agent C inherits A's rejected research + B's draft iterations — irrelevant context pollutes C's attention. Solution: each agent gets clean context with only necessary information",
        C: "Agent C will have too little context to work effectively",
        D: "Linear pipelines cannot handle complex tasks"
      },
      correct: "B",
      explanation: "Dirty Slate Problem in linear pipelines: Agent C inherits A's entire research process (including rejected sources) + B's draft iterations (including dead ends). This irrelevant context consumes C's attention budget. Solution: Context Isolation — each agent gets clean context with only necessary information (final research summary for C, not A's full process)."
    },
    {
      id: 12,
      question: "Scenario: You're designing a multi-agent system for code review. According to Context Isolation benefits, why use parallel subagents vs. sequential handoff?",
      options: {
        A: "Parallel is always faster regardless of task",
        B: "Four benefits: full attention budget per task, no pollution from irrelevant work, easier debugging (agents evaluable independently), and parallel execution. Each reviewer gets clean context, not accumulated noise",
        C: "Sequential handoff is more reliable than parallel",
        D: "Parallel execution reduces token costs"
      },
      correct: "B",
      explanation: "Context Isolation benefits for parallel subagents: 1) Full Attention Budget Per Task — each reviewer operates in optimal attention zone, 2) No Pollution — reviewer sees final code, not 47 rejected approaches, 3) Easier Debugging — each agent evaluates independently, can be rerun in isolation, 4) Parallel Execution — independent reviews execute simultaneously."
    },
    {
      id: 13,
      question: "Scenario: Your team built a 16-agent parallel system for compiler generation. According to the case study, what was the key differentiator for success?",
      options: {
        A: "Using the most advanced model available",
        B: "Context quality, not model capability — each agent received clean, focused context appropriate to its specific task. 16 agents, 2,000 sessions, 2B tokens produced a 100K-line compiler with 99% pass rate",
        C: "Massive parallelism — more agents always produces better results",
        D: "Extensive testing after generation completed"
      },
      correct: "B",
      explanation: "The 16-agent compiler case study (Nicholas Carlini, Anthropic): 16 parallel Claude instances, ~2,000 sessions, ~2B input tokens, producing 100K-line Rust compiler with 99% pass rate on standard tests. Key lesson: 'Differentiator: context quality, not model capability.' Each agent received clean, focused context — not accumulated noise from other agents' work."
    },
    {
      id: 14,
      question: "Scenario: You're implementing tool access control for a multi-agent system. According to Context Isolation, what is the appropriate role for a 'Read-only reviewer' agent?",
      options: {
        A: "All tools — reviewers need full access to verify everything",
        B: "Read, Grep, Glob only — can explore but not modify. Principle of least privilege applied to AI agents",
        C: "Write and Edit tools — reviewers need to fix issues they find",
        D: "No tools — reviewers should only read conversation history"
      },
      correct: "B",
      explanation: "Tool access control by role: Read-only reviewers = Read, Grep, Glob (explore but not modify). Research analysts = + WebFetch, WebSearch (gather external info). Writers = + Write, Edit (create/modify files). Full access = all tools (orchestrator only). Principle of least privilege: agents get minimum tools needed for their role."
    },
    {
      id: 15,
      question: "Scenario: You're designing a Master-Clone architecture for a large project. According to Context Isolation, what problem does this solve?",
      options: {
        A: "Model capacity limitations",
        B: "Context amnesia workaround: each subagent reads the full project brief (master spec) at task start — clean context with all critical domain knowledge, no accumulated noise from prior work",
        C: "Network latency in distributed systems",
        D: "Version control conflicts between agents"
      },
      correct: "B",
      explanation: "Master-Clone Architecture solves context amnesia: each subagent ('clone') reads the full project brief ('master' spec) at task start. This gives clean context (no accumulated noise) + full domain knowledge (the master spec). Without this, subagents either have dirty context (accumulated noise) or amnesia (missing critical domain knowledge)."
    }
  ],
  lesson10: [
    {
      id: 11,
      question: "Scenario: Your Digital FTE is at 78% context utilization during a legal contract review. According to the Context Engineering Decision Tree, what is the correct branch?",
      options: {
        A: "Context <80% — continue without intervention",
        B: "Context >70% → Compaction branch. Selective /compact preserving clause analysis (work product) + memory injection for jurisdiction patterns (expertise). Preserve analytical work, clear exploration noise",
        C: "/clear immediately and restart",
        D: "Multi-Agent Distribution → Context Isolation"
      },
      correct: "B",
      explanation: "Decision Tree at 78%: Context >70% → Compaction branch. For legal contract review: selective /compact preserving clause-by-clause liability analysis (the actual work product) + memory injection for jurisdiction-specific patterns (expertise needed to continue). This preserves what matters (analysis results) while discarding what doesn't (general contract law review, research exploration)."
    },
    {
      id: 12,
      question: "Scenario: You're designing a Context Budget for a new Digital FTE. According to recommended allocation, what percentage should Message History receive?",
      options: {
        A: "10-15% — keep history minimal",
        B: "30-40% — message history is the largest consumer, reflecting dominance of accumulated conversation state in practice",
        C: "60-70% — history is most important for context",
        D: "Equal distribution across all categories"
      },
      correct: "B",
      explanation: "Recommended Context Budget Allocation: System prompt 5-10%, CLAUDE.md 5-10%, Tool definitions 10-15%, Message history 30-40%, Tool outputs 20-30%, Reserve buffer 10-15%. Message history and tool outputs are the two largest consumers — reflecting the dominance of accumulated conversation state in practice."
    },
    {
      id: 13,
      question: "Scenario: Your Digital FTE is in Late Phase (50+ messages). According to Real-Time Monitoring strategy, what is the required action?",
      options: {
        A: "Check /context once at session start — that's sufficient",
        B: "Check /context every 10 messages when above 50%; mandatory /compact at 85%+. Late Phase has Reserve buffer at critical 5% — proactive monitoring prevents emergency",
        C: "Let autocompact handle everything automatically",
        D: "Only check context when responses start degrading"
      },
      correct: "B",
      explanation: "Real-Time Monitoring (Strategy #6): check /context every 10 messages when context utilization is above 50%, mandatory /compact at 85%+. Late Phase (50+ messages): Message history peaks at 50%, Reserve buffer drops critically to 5%. Proactive monitoring prevents emergency situations — catching Orange zone (70%) early allows controlled compaction."
    },
    {
      id: 14,
      question: "Scenario: You need to process 50 documents for analysis. According to Token Budgeting strategies, what is the efficient architecture?",
      options: {
        A: "Load all 50 documents simultaneously — one massive context",
        B: "Multi-Round Processing: process 5-10 documents per round, each producing a summary. Round summaries feed into final synthesis. Handles arbitrarily large inputs while keeping each round within optimal context bounds",
        C: "Process one document at a time, 50 separate sessions",
        D: "Summarize all 50 documents first, then analyze the summaries"
      },
      correct: "B",
      explanation: "Multi-Round Processing (Strategy #4): instead of loading all 50 documents simultaneously (massive context), process 5-10 items per round, each producing a summary. Round summaries feed into the final synthesis round. This architecture handles arbitrarily large inputs while keeping each round within optimal context bounds."
    },
    {
      id: 15,
      question: "Scenario: You're building a premium Digital FTE ($5,000/month) vs. commodity AI agent ($50/month). According to the Context Engineering Playbook, what is the differentiator?",
      options: {
        A: "Model choice — premium uses the most expensive model",
        B: "Context engineering discipline — consistent performance across sessions, no degradation during long conversations, automatic domain expertise application, reliable scaling to complex tasks. This creates 100x value differential",
        C: "Number of features — premium has more features",
        D: "Response speed — premium responds faster"
      },
      correct: "B",
      explanation: "Core thesis: 'The differentiator between commodity AI agents ($50/month) and premium Digital FTEs ($5,000/month) is context engineering discipline.' Premium quality means: consistent performance across sessions (no amnesia), no degradation during long conversations (lifecycle management), automatic domain expertise (Skills/Memory), reliable scaling (Context Isolation). This creates 100x value, not 2x or 10x."
    }
  ]
};

console.log("Chapter 15 MCQs defined for Lessons 3-10 (40 MCQs total)");
console.log("Ready to insert into chapter15.ts");
