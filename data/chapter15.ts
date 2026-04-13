import type { Chapter } from "@/types";

export const chapter15: Chapter = {
  id: 15,
  title: "Effective Context Engineering with General Agents",
  description: "Context quality as the differentiator — auditing, architecture, lifecycle management, memory systems, and multi-agent patterns for Digital FTE production.",
  color: "orange",
  lessons: [
    {
      id: 1,
      title: "What Is Context Engineering?",
      mcqs: [
        {
          id: 1,
          question: "What is the formal definition of Context Engineering in this course?",
          options: {
            A: "The practice of writing better system prompts",
            B: "'The art and science of curating what will go into the limited context window from that constantly evolving universe of possible information'",
            C: "The technique of compressing conversation history to save tokens",
            D: "The process of fine-tuning models on domain-specific context"
          },
          correct: "B",
          explanation: "Context Engineering is defined as 'The art and science of curating what will go into the limited context window from that constantly evolving universe of possible information.' It's a curation discipline — choosing what to include, exclude, position, and when to load information."
        },
        {
          id: 2,
          question: "What is the foundational principle of Context Engineering regarding token efficiency?",
          options: {
            A: "Always maximize context — more information always produces better results",
            B: "Find 'the smallest set of high-signal tokens that maximize the likelihood of some desired outcome'",
            C: "Use exactly 50% of the context window for best results",
            D: "Prioritize recency — only the last 20 messages matter"
          },
          correct: "B",
          explanation: "The foundational principle: find 'the smallest set of high-signal tokens that maximize the likelihood of some desired outcome.' This rejects both 'more is always better' and arbitrary minimization. The goal is the optimal signal-to-noise ratio for the specific task."
        },
        {
          id: 3,
          question: "What percentage of model processing do Prompts represent vs. Context?",
          options: {
            A: "Prompts: 50%; Context: 50%",
            B: "Prompts: 0.1%; Context: 99.9%",
            C: "Prompts: 10%; Context: 90%",
            D: "Prompts: 25%; Context: 75%"
          },
          correct: "B",
          explanation: "Prompts represent only 0.1% of what the model processes; Context comprises 99.9%. This reframes prompt engineering: writing a better user prompt optimizes 0.1% while ignoring 99.9%. Context Engineering addresses the 99.9% — system prompts, instructions, conversation history, file contents, and tool outputs."
        },
        {
          id: 4,
          question: "What is 'Context Rot' and what are its four types?",
          options: {
            A: "Hardware failure that corrupts context files; types: physical, logical, network, power",
            B: "Accumulated conversation degradation of output quality; types: Poisoning (outdated info), Distraction (irrelevant content), Confusion (similar concepts conflating), Clash (contradictory instructions)",
            C: "The gradual decay of AI model accuracy over time; types: semantic, syntactic, factual, logical",
            D: "Memory leak in the context window; types: overflow, underflow, fragmentation, corruption"
          },
          correct: "B",
          explanation: "Context Rot is accumulated conversation degradation of output quality. Four types: 1) Poisoning — outdated information persists; 2) Distraction — irrelevant content consumes attention; 3) Confusion — similar concepts conflate and get mixed up; 4) Clash — contradictory instructions compete. All four reduce output quality over time."
        },
        {
          id: 5,
          question: "What tool can you use to inspect the current state of Claude Code's context?",
          options: {
            A: "/debug --context",
            B: "/context",
            C: "claude --show-context",
            D: "/inspect"
          },
          correct: "B",
          explanation: "The /context command reveals: system prompts, MCP tools, memory files, message history, and remaining token budget. This is the primary tool for context inspection and helps identify when context is approaching critical levels requiring /compact or /clear."
        },
        {
          id: 6,
          question: "What is `autocompact` in Claude Code?",
          options: {
            A: "A feature that automatically deletes old project files to free disk space",
            B: "Automatic context summarization that triggers when the context window fills, preserving key information while reducing token count",
            C: "An automatic code minification tool that runs on save",
            D: "A scheduled job that compresses log files nightly"
          },
          correct: "B",
          explanation: "autocompact is Claude Code's automatic context summarization feature. When the context window fills, autocompact automatically summarizes older conversation content to free up token space while preserving key information. Manual alternatives are /compact (selective summarization) and /clear (fresh start)."
        },
        {
          id: 7,
          question: "What is the key insight connecting Context Engineering to the Digital FTE business model?",
          options: {
            A: "Context Engineering reduces API costs, making Digital FTEs profitable",
            B: "'General Agents BUILD Custom Agents. Context engineering is HOW you ensure those Custom Agents are worth buying.'",
            C: "Context Engineering enables Digital FTEs to work without human supervision",
            D: "Context Engineering is only relevant for enterprise deployments"
          },
          correct: "B",
          explanation: "'General Agents BUILD Custom Agents. Context engineering is HOW you ensure those Custom Agents are worth buying.' The quality of a Digital FTE product is determined by the quality of its context engineering — how well it maintains performance across sessions, handles long conversations, and applies domain expertise consistently."
        },
        {
          id: 8,
          question: "What is Claude Code's context window size as of early 2026?",
          options: {
            A: "128K tokens (~100,000 words / ~330 pages)",
            B: "200K tokens (~150,000 words / ~500 pages)",
            C: "1M tokens (~750,000 words / ~2,500 pages)",
            D: "512K tokens (~400,000 words / ~1,300 pages)"
          },
          correct: "B",
          explanation: "Claude Opus 4.5's context window is 200K tokens (~150,000 words / ~500 pages). For comparison: GPT-5.2 is 256K tokens, Gemini 3 Pro is 2M tokens. These represent the context limits within which Context Engineering must maximize signal quality."
        },
        {
          id: 9,
          question: "What fills context windows quickly according to the lesson?",
          options: {
            A: "Only user messages — AI responses don't count toward the context limit",
            B: "System prompt/AGENTS.md (5,000–20,000 tokens), conversation history (2,000–50,000 tokens), code files (10,000–100,000 tokens), model responses (1,000–10,000 tokens)",
            C: "Only code files — text content is efficiently compressed",
            D: "External API responses are the main context consumer"
          },
          correct: "B",
          explanation: "What fills context quickly: System prompt (AGENTS.md, skills): 5,000–20,000 tokens; Specification: 1,000–5,000 tokens; Conversation history: 2,000–50,000 tokens; Relevant code files: 10,000–100,000 tokens; Model responses: 1,000–10,000 tokens. Code files and conversation history are the largest consumers."
        },
        {
          id: 10,
          question: "What is the five-term vocabulary essential for Context Engineering?",
          options: {
            A: "Prompt, Response, Temperature, Model, Token",
            B: "Token (~3/4 word), Context (all processed info), Context window (max visible tokens), Context engineering (designing window content), Context rot (accumulated degradation)",
            C: "Input, Output, Cache, Batch, Stream",
            D: "Request, Response, Error, Timeout, Retry"
          },
          correct: "B",
          explanation: "The five essential terms: Token (~3/4 of a word, unit of AI measurement), Context (all model-processed information during response generation), Context window (maximum visible tokens), Context engineering (designing window content, positioning, and loading timing), Context rot (accumulated conversation degradation of output quality)."
        },
        {
          id: 11,
          question: "You're building a customer support Digital FTE that handles 500+ tickets daily. After 3 hours of conversation, Claude starts making errors referencing outdated ticket policies from earlier in the session. According to Context Engineering principles, what is happening and how do you fix it?",
          options: {
            A: "The model is tired — restart with a fresh API key",
            B: "Context Rot (Poisoning type) — outdated policy information persists in context. Use /compact to summarize and remove stale details, or /clear and re-inject only current policies",
            C: "The context window is full — upgrade to a model with larger context",
            D: "Claude is confused — explain the policies again more clearly"
          },
          correct: "B",
          explanation: "This is Context Rot (Poisoning type): outdated information persists and degrades output quality. The fix is context lifecycle management: /compact summarizes old content while preserving key info, or /clear starts fresh with only current policies re-injected. This is why Context Engineering includes knowing when to reset vs. compress."
        },
        {
          id: 12,
          question: "Your CLAUDE.md file is 350 lines. Claude frequently ignores critical instructions about test commands and coding conventions. According to the Signal vs. Noise audit and Instruction Limit Problem, what is the root cause?",
          options: {
            A: "Claude cannot read files over 200 lines",
            B: "The Instruction Limit (~150-200 distinct instructions) is exhausted by less important content, causing critical directives to be ignored — the file needs 40-60% reduction via the 4-Question Audit",
            C: "The file contains too many code examples",
            D: "Claude ignores CLAUDE.md by default — you must reference it in every prompt"
          },
          correct: "B",
          explanation: "The Instruction Limit Problem: frontier LLMs reliably follow ~150-200 distinct instructions. A 350-line CLAUDE.md likely exceeds this, with less important content consuming budget needed for critical rules. The 4-Question Audit Framework typically achieves 40-60% reduction while maintaining or improving compliance."
        },
        {
          id: 13,
          question: "You're designing context architecture for a marketing consultant Digital FTE. Option A stores all expertise in CLAUDE.md (7,300 tokens). Option B uses minimal CLAUDE.md (400 tokens) + Skill descriptions (150 tokens) with full details loaded on-demand. According to the 13-fold reduction principle, what is the per-request token savings?",
          options: {
            A: "No savings — both approaches use the same tokens overall",
            B: "Option B reduces baseline from ~7,300 to ~550 tokens per request — a 13-fold reduction, because CLAUDE.md loads every request while Skills load only when invoked",
            C: "Option A is more efficient because it avoids skill invocation overhead",
            D: "Option B saves 50% — from 7,300 to 3,650 tokens"
          },
          correct: "B",
          explanation: "The 13-fold reduction: Option A (all in CLAUDE.md) = ~7,300 tokens per request (continuous cost). Option B (architectural separation) = ~550 baseline tokens (CLAUDE.md loads every request; Skills load on-demand). 7,300 / 550 = ~13x reduction. This is why moving domain expertise to Skills dramatically improves context efficiency."
        },
        {
          id: 14,
          question: "Your team is building a healthcare compliance Digital FTE. You need to decide where to store: (1) HIPAA compliance rules, (2) current sprint goals, (3) preferred test commands, (4) deployment workflow. According to Context Architecture principles, which belongs in CLAUDE.md vs. Skills vs. task files?",
          options: {
            A: "Everything in CLAUDE.md for simplicity",
            B: "CLAUDE.md: (1) HIPAA rules, (3) test commands (stable, error-critical). Skills: (4) deployment workflow (selectively needed, substantial length). Task files: (2) sprint goals (frequently changing — creates context poisoning if in CLAUDE.md)",
            C: "Everything in Skills for maximum efficiency",
            D: "CLAUDE.md: sprint goals; Skills: HIPAA rules; task files: test commands"
          },
          correct: "B",
          explanation: "Context Architecture decision framework: CLAUDE.md for info needed nearly every task, stable content, and error-critical rules (HIPAA, test commands). Skills for selectively needed, substantial content (deployment workflow). Task files for frequently changing info (sprint goals) — putting dynamic data in CLAUDE.md creates context poisoning when it becomes stale."
        },
        {
          id: 15,
          question: "You're auditing a 6-month-old Digital FTE product. Users report inconsistent behavior — sometimes it follows conventions perfectly, other times it ignores them. The CLAUDE.md hasn't changed. According to Context Rot types, what is the likely cause and how do you diagnose it?",
          options: {
            A: "The model degraded over time — retrain on newer data",
            B: "Context Rot (Clash type) — contradictory instructions accumulated over 6 months. Diagnose with /context to see current state, then audit CLAUDE.md and Skills for conflicting rules added by different developers",
            C: "Users are prompting incorrectly — retrain them",
            D: "The file system corrupted the CLAUDE.md — restore from backup"
          },
          correct: "B",
          explanation: "Context Rot (Clash type): contradictory instructions compete, causing inconsistent output. Over 6 months, different developers likely added conflicting rules without removing old ones. Diagnosis: /context reveals current state; audit CLAUDE.md/Skills for contradictions (e.g., 'use npm' vs. 'use pnpm' added by different team members). Fix: consolidate to single authoritative rule."
        },
        {
          id: 16,
          question: "Legal contract review at 78% context. Includes: general law review (20%), jurisdiction patterns (15%), clause analysis (30%), research (15%), other (20%). What to do?",
          options: {
            A: "/clear and restart",
            B: "Selective /compact preserving clause analysis + jurisdiction memory injection",
            C: "Ignore — 78% acceptable",
            D: "Export and new session"
          },
          correct: "B",
          explanation: "At 78% (Orange): preserve clause analysis (30% work product) + jurisdiction patterns (15% expertise). Discard general review (20%) + research (15%). Preserves work, clears noise."
        },
        {
          id: 17,
          question: "Customer support FTE at 82%. Policies (10%), product docs (25%), conversation (30%), training (20%), troubleshooting (15%). Preserve?",
          options: {
            A: "Everything",
            B: "Conversation + troubleshooting + key policies; discard training, full docs",
            C: "Only policies",
            D: "Only conversation"
          },
          correct: "B",
          explanation: "At 82%: preserve conversation (customer context), troubleshooting (work), policies (rules). Discard training (base knowledge), full docs (on-demand reference)."
        },
        {
          id: 18,
          question: "Code review at 75%. Architecture (15%), conventions (10%), PR history (25%), code changes (30%), discussion (20%). Compact?",
          options: {
            A: "Keep all",
            B: "Code changes + PR history + conventions; compact architecture, discard discussion",
            C: "Only architecture",
            D: "Clear re-upload"
          },
          correct: "B",
          explanation: "At 75%: preserve code (work), PR history (context), conventions (rules). Compact architecture to summary. Discard discussion (base knowledge)."
        },
        {
          id: 19,
          question: "Marketing content at 80%. Brand (15%), audience (20%), drafts (30%), competitors (20%), theory (15%). Preserve?",
          options: {
            A: "All research",
            B: "Brand + drafts + key audience; compact competitors, discard theory",
            C: "Only competitors",
            D: "Only brand"
          },
          correct: "B",
          explanation: "At 80%: preserve brand (rules), drafts (work), audience insights (criteria). Compact competitors to summary. Discard theory (base knowledge)."
        },
        {
          id: 20,
          question: "Data analysis at 85% mandatory. Schema (10%), raw data (25%), code (20%), results (25%), methodology (20%). Strategy?",
          options: {
            A: "Keep raw data",
            B: "Code + results + schema; summarize raw data, discard methodology",
            C: "Only methodology",
            D: "Clear re-run"
          },
          correct: "B",
          explanation: "At 85% mandatory: preserve code (work), results (progress), schema (structure). Summarize raw data to key stats. Discard methodology (base knowledge)."
        },
        { id: 21, question: "What does the term 'context window' specifically refer to?", options: { A: "The visible chat history in the UI sidebar", B: "Maximum tokens the model can process during response generation (Claude: 200,000 tokens)", C: "The RAM available for model computation", D: "The size of the training data window" }, correct: "B", explanation: "Context window = maximum tokens visible to model during single response generation. Claude: 200,000 tokens (~150,000 words/~500 pages). GPT-5.2: 256K; Gemini 3 Pro: 2M. All content processed in one response must fit within this limit." },
        { id: 22, question: "What type of Context Rot occurs when similar concepts conflate, causing Claude to apply wrong domain patterns?", options: { A: "Poisoning", B: "Distraction", C: "Confusion — similar concepts conflate across overlapping domains", D: "Clash" }, correct: "C", explanation: "Confusion type: similar concepts conflate. Example: Python + TypeScript debugging in same session → Claude applies Python patterns to TypeScript files. Fix: use context isolation (Subagent) or /clear when switching between related but distinct domains." },
        { id: 23, question: "What is the specific mechanism by which 'Context Rot — Distraction' degrades output quality?", options: { A: "Incorrect data corrupts reasoning chains", B: "Irrelevant tangential content consumes attention budget needed for current work, reducing focus on the actual task", C: "Instructions contradict each other creating conflicts", D: "Old information overrides new updates" }, correct: "B", explanation: "Distraction: irrelevant content (debugging history, unrelated code exploration) consumes the finite attention budget. Less attention available for current task = lower quality output. Fix: /compact to discard irrelevant content or /clear if unrelated work dominates." },
        { id: 24, question: "What does 'context engineering as a curation discipline' mean in practice?", options: { A: "Writing better system prompts for each new conversation", B: "Actively deciding what to include, exclude, where to position, and when to load — as much about what NOT to include as what to include", C: "Training models on curated high-quality datasets", D: "Compressing conversation history automatically to save storage" }, correct: "B", explanation: "Curation discipline: active management — decide what to include (high-signal content), what to exclude (noise), where to position (Zone 1/2/3), when to load (CLAUDE.md always; Skills on-demand; Subagents isolated). The curation choices determine output quality." },
        { id: 25, question: "What five items does the /context command reveal?", options: { A: "Only the conversation word count and time elapsed", B: "System prompts, MCP tools, memory files, message history, and remaining token budget", C: "Only the system prompt and CLAUDE.md contents", D: "Token count but not conversation content" }, correct: "B", explanation: "/context reveals: (1) system prompts, (2) MCP tools, (3) memory files, (4) message history, (5) remaining token budget. Primary tool for context inspection and diagnosing context rot. Indicates when approaching critical levels requiring /compact or /clear." },
        { id: 26, question: "What is the significance of context comprising 99.9% of model processing vs. prompts at 0.1%?", options: { A: "Prompts are irrelevant — only context matters for output", B: "Optimizing context (99.9%) has far greater impact than optimizing prompts (0.1%) — this reframes where to invest engineering effort", C: "Context is 99.9% accurate; prompts have 0.1% error rate", D: "99.9% of AI work is computation; 0.1% is communication overhead" }, correct: "B", explanation: "99.9% vs 0.1%: improving a prompt optimizes 0.1% of processing. Context Engineering addresses 99.9% — system prompts, instructions, conversation history, file contents, tool outputs. Context quality is the primary lever for output quality improvement." },
        { id: 27, question: "What is 'Context Rot — Clash' and what typically causes it?", options: { A: "Context overwrites itself due to memory limits", B: "Contradictory instructions compete — earlier guidance contradicts later directives, causing inconsistent behavior over time", C: "Two different context windows accidentally merge", D: "Context and external data produce conflicting conclusions" }, correct: "B", explanation: "Clash: contradictory instructions compete. Example: 'use tabs' added early; 'use 2-space indentation' added later. Inconsistent output results. Cause: different team members adding rules without removing old ones. Fix: /compact to consolidate contradictions, or audit CLAUDE.md for conflicting rules." },
        { id: 28, question: "How does Claude Code overcome the fundamental statelessness of LLMs?", options: { A: "By using a persistent fine-tuned model per project", B: "Three mechanisms: re-sending conversation history, accessing file system as external persistent memory, and reading CLAUDE.md at session start", C: "Through a proprietary per-user memory database", D: "Via automatic session merging across conversations" }, correct: "B", explanation: "Formula: stateless LLM + file system access + CLAUDE.md = persistent project understanding. (1) Re-sends conversation history (within-session context), (2) file system access (reads any file — external persistent memory), (3) CLAUDE.md at session start (project context without prior-session memory)." },
        { id: 29, question: "Developer switches from Python debugging to TypeScript in same session. After 20 turns, Claude mixes Python patterns into TypeScript. Which Context Rot type and fix?", options: { A: "Poisoning — use /compact to remove old Python code", B: "Confusion — similar concepts conflating. Fix: /clear and start fresh TypeScript session, or Subagent with isolated context", C: "Clash — contradictory language instructions. Fix: add explicit TypeScript-only instruction", D: "Distraction — irrelevant content. Fix: summarize debugging history only" }, correct: "B", explanation: "Confusion type: Python + TypeScript both use similar but distinct patterns → conflation. Fix: /clear (fresh TypeScript session) or Subagent (isolated context prevents Python contamination). Continuing accumulates worse confusion over subsequent turns." },
        { id: 30, question: "Customer support Digital FTE works well for 2 hours, then answers with outdated return policies from earlier in session. What context engineering intervention is needed?", options: { A: "Restart the server — this is a memory leak issue", B: "Context Rot (Poisoning): use /compact to discard outdated policy info, or use PreToolUse hook to inject current policies at execution time", C: "Tell the agent explicitly to 'remember the current policies'", D: "Increase the context window size to store more policies" }, correct: "B", explanation: "Poisoning: outdated return policies persist. Two fixes: (1) /compact with preservation of current policies + discard outdated info, (2) PreToolUse hook injecting current policy file at execution time (always-fresh, prevents accumulation). Second is architectural — prevents rot from recurring." }
      ]
    },
    {
      id: 2,
      title: "Signal vs. Noise — Auditing Your Context for Quality",
      mcqs: [
        {
          id: 1,
          question: "According to enterprise deployment research, what percentage of tokens add no value to AI responses?",
          options: {
            A: "5–10% of tokens are noise",
            B: "Roughly 30–60% of tokens sent to models add no value",
            C: "Less than 1% of tokens are truly noise",
            D: "Over 80% of tokens are unnecessary"
          },
          correct: "B",
          explanation: "Research shows 'roughly 30% to 60% of tokens sent to models add no value' across enterprise deployments. This means typical context is 30–60% noise — content that consumes attention budget without improving output quality. Context Engineering aims to eliminate this noise."
        },
        {
          id: 2,
          question: "What is the 'Instruction Limit Problem' and how many instructions can frontier LLMs reliably follow?",
          options: {
            A: "Models reliably follow up to 500 instructions; limit only affects very large prompts",
            B: "Frontier LLMs reliably follow ~150–200 distinct instructions before compliance drops; Claude Code's system prompt uses ~50, leaving ~100–150 for CLAUDE.md",
            C: "There is no limit — more instructions always produce better compliance",
            D: "Models follow only 10–20 instructions reliably; more than that causes confusion"
          },
          correct: "B",
          explanation: "The Instruction Limit Problem: frontier LLMs reliably follow approximately 150–200 distinct instructions before compliance drops. Claude Code's system prompt already contains ~50 instructions, leaving only ~100–150 for CLAUDE.md. Every non-essential instruction steals budget from critical directives."
        },
        {
          id: 3,
          question: "What is the first question in the 4-Question Audit Framework?",
          options: {
            A: "Is this information over 6 months old?",
            B: "'Would Claude Ask About This If Not Included?' — Signal if Claude would be uncertain; Noise if Claude would process it correctly without guidance",
            C: "Does this information appear in public documentation?",
            D: "Is this information shared by more than one team member?"
          },
          correct: "B",
          explanation: "Question 1 of the 4-Question Audit: 'Would Claude Ask About This If Not Included?' Signal = information Claude would be uncertain about without explicit guidance. Noise = information Claude would process correctly based on its training. If Claude wouldn't ask about it, it's likely already known and should be excluded."
        },
        {
          id: 4,
          question: "What is the Three-Zone Position Strategy, and where is attention highest?",
          options: {
            A: "Beginning (LOW), Middle (HIGH), End (LOW) — middle content gets most attention",
            B: "Beginning (HIGH — primacy), Middle (LOW — ~30% less recall), End (HIGH — recency)",
            C: "All zones receive equal attention — position doesn't matter",
            D: "End (HIGH), Beginning (MEDIUM), Middle (LOW)"
          },
          correct: "B",
          explanation: "Models exhibit U-shaped attention curves: Zone 1 (first 10%) = HIGH attention (primacy effect), Zone 2 (middle 80%) = LOW attention (~30% less recall), Zone 3 (last 10%) = HIGH attention (recency effect). The key principle: 'If you'd be upset when the AI ignores it, don't put it in the middle.'"
        },
        {
          id: 5,
          question: "What information belongs in Zone 1 (first 10%) of your context?",
          options: {
            A: "Reference material, templates, and nice-to-haves",
            B: "Critical constraints, identity definition, and non-negotiable rules",
            C: "Workflow instructions and startup directions",
            D: "Background context and historical information"
          },
          correct: "B",
          explanation: "Zone 1 (first 10%, HIGH attention): Critical constraints, identity definition, non-negotiable rules. Zone 2 (middle 80%, LOW): Reference material, templates, nice-to-haves. Zone 3 (last 10%, HIGH): Workflow instructions, startup directions, completion steps. Position your most critical information in the high-attention zones."
        },
        {
          id: 6,
          question: "What is 'Progressive Disclosure via File References' in context design?",
          options: {
            A: "Gradually revealing system prompts to users over time",
            B: "Referencing external files (docs/review-process.md) in CLAUDE.md instead of embedding full content inline — loads detail on demand when needed",
            C: "A training technique that exposes models to increasingly complex instructions",
            D: "A UI pattern for showing advanced settings to power users"
          },
          correct: "B",
          explanation: "Progressive Disclosure via File References: instead of embedding detailed information inline in CLAUDE.md, reference external files. Example: 'Review: Read docs/review-process.md before finalizing deliverables.' This keeps CLAUDE.md lean (~60 lines) while full details load on demand, reducing baseline context consumption."
        },
        {
          id: 7,
          question: "What are expected Audit Results from applying the 4-Question Framework to CLAUDE.md?",
          options: {
            A: "5–10% content reduction with significant quality improvement",
            B: "40–60% content reduction; equal or better compliance; fewer clarifying questions; extended session duration before compaction",
            C: "Complete rewrite required — most CLAUDE.md content is always noise",
            D: "No measurable improvement — the framework is theoretical"
          },
          correct: "B",
          explanation: "Expected audit results: 40–60% content reduction (removing noise), equal or better compliance (removing noise doesn't hurt; it helps), fewer clarifying questions (relevant context is clearer), and extended session duration before compaction (fewer tokens used per request). Less is genuinely more when the signal-to-noise ratio improves."
        },
        {
          id: 8,
          question: "Which of the following is a NOISE category that fails the 4-Question Audit?",
          options: {
            A: "Commands or workflows Claude cannot infer from the codebase",
            B: "Style rules that deviate from Claude's default coding practices",
            C: "Standard professional conventions Claude already knows (e.g., 'write clear commit messages')",
            D: "Organization-specific decisions about architecture patterns"
          },
          correct: "C",
          explanation: "Standard professional conventions are noise: Claude already knows to write clear commit messages, use descriptive variable names, and follow common coding standards. Restating them wastes instruction budget. Signal categories that survive the audit: commands Claude can't infer, style rules deviating from defaults, review/approval requirements, organization-specific decisions."
        },
        {
          id: 9,
          question: "What is the recommended CLAUDE.md length after optimization?",
          options: {
            A: "200 lines (the original target)",
            B: "Under 60 lines — with domain-specific knowledge moved to Skills and file references",
            C: "No target — optimize for completeness",
            D: "1,000 lines — comprehensive documentation is always better"
          },
          correct: "B",
          explanation: "The optimized CLAUDE.md target is under 60 lines. Detailed content moves to referenced files (docs/review-process.md, docs/style-conventions.md) and Skills. This reduces baseline context per request from ~4,000 tokens (overloaded CLAUDE.md) to ~400 tokens (minimal CLAUDE.md) — a 10x reduction."
        },
        {
          id: 10,
          question: "What makes 'frequently changing information' noise rather than signal in CLAUDE.md?",
          options: {
            A: "Frequently changing information is always irrelevant",
            B: "When information changes, it becomes stale in CLAUDE.md — creating context poisoning where outdated info persists despite updates. Such info belongs in task files, not CLAUDE.md.",
            C: "Frequently changing information increases file size beyond the 200-line limit",
            D: "Claude cannot read information that changes more than once per day"
          },
          correct: "B",
          explanation: "Frequently changing information creates context poisoning: when you update the info elsewhere but forget to update CLAUDE.md, the stale version persists. Examples: current sprint goals, active bug list, assigned team members. These belong in task files or progress files that get updated with the work — not in the persistent CLAUDE.md."
        },
        {
          id: 11,
          question: "Your CLAUDE.md is 250 lines with detailed deployment workflows, coding conventions, and sprint goals. Claude ignores the deployment workflow instructions. According to the 4-Question Audit, what is the likely problem and fix?",
          options: {
            A: "Claude cannot read files over 200 lines — split into multiple files",
            B: "The file exceeds the instruction limit and contains frequently changing info (sprint goals). Fix: reduce to ~60 lines by moving deployment workflow to a Skill, sprint goals to task files, keeping only error-critical conventions",
            C: "The deployment workflow is too complex — simplify it",
            D: "Claude ignores CLAUDE.md by default — reference it in every prompt"
          },
          correct: "B",
          explanation: "This combines two problems: instruction limit exhaustion (250 lines exceeds ~150-200 instruction capacity) and context poisoning (sprint goals change). The 4-Question Audit reveals: sprint goals fail Q3 (changes frequently), deployment workflow fails Q2 (could be in a referenced file). Fix: minimal CLAUDE.md (~60 lines) + Skill for deployment + task file for sprint goals."
        },
        {
          id: 12,
          question: "You're auditing a CLAUDE.md that says 'Use TypeScript best practices' and 'Write clean code.' Claude consistently violates these rules. According to Signal vs. Noise principles, why are these instructions ignored?",
          options: {
            A: "Claude doesn't understand TypeScript",
            B: "These are vague conventions Claude already knows — they consume instruction budget without adding signal. Replace with specific, actionable rules like 'No any types without explicit eslint-disable comment'",
            C: "The instructions are in the wrong file format",
            D: "Claude ignores moral imperatives like 'clean code'"
          },
          correct: "B",
          explanation: "'Use best practices' and 'write clean code' are noise: they're vague (what specifically?) and Claude already knows common conventions. Signal instructions are specific and actionable: 'No any types without explicit eslint-disable comment,' 'All functions must have JSDoc,' 'Use pnpm not npm.' Specificity makes instructions executable and reviewable."
        },
        {
          id: 13,
          question: "Team A has a 40-line CLAUDE.md. Team B has a 300-line CLAUDE.md. Both teams report Claude 'sometimes follows instructions.' According to the Instruction Limit Problem and Three-Zone Position Strategy, what is Team B's likely issue?",
          options: {
            A: "Team B's file is too short to be comprehensive",
            B: "Team B's 300-line file exhausts the ~150-200 instruction budget with low-priority content, and critical instructions are buried in the middle zone (low attention). Fix: reduce to ~60 lines, move critical rules to Zone 1 (first 10%)",
            C: "Team A's file is too short — they should expand it",
            D: "The file length doesn't matter — it's about content quality"
          },
          correct: "B",
          explanation: "Team B's 300-line file has two problems: (1) Instruction limit exhaustion — ~150-200 distinct instructions is the reliable limit, so 300 lines likely exceeds this with low-priority content consuming budget. (2) Zone positioning — critical instructions buried in the middle 80% get ~30% less recall. Fix: 40-60% reduction via audit, critical rules in Zone 1 or Zone 3."
        },
        {
          id: 14,
          question: "You add 'Always use async/await, never callbacks' to CLAUDE.md Zone 2 (middle). Claude ignores this 40% of the time. According to Three-Zone Position Strategy, what repositioning would help?",
          options: {
            A: "Move it to Zone 3 (last 10%) — completion steps belong at the end",
            B: "Move it to Zone 1 (first 10%) — critical coding conventions that cause errors if ignored belong in the high-attention primacy zone",
            C: "Repeat it three times throughout the file",
            D: "Add it to every prompt instead of CLAUDE.md"
          },
          correct: "B",
          explanation: "Critical coding conventions that cause errors if omitted belong in Zone 1 (first 10%, HIGH attention). Zone 2 (middle 80%) has ~30% less recall. 'Always use async/await' is error-critical (mixing callbacks and promises causes subtle bugs), so it belongs in the primacy zone alongside other non-negotiable rules like 'No any types' and 'Use strict mode.'"
        },
        {
          id: 15,
          question: "After applying the 4-Question Audit to your 280-line CLAUDE.md, you identify 150 lines as noise (standard conventions, frequently changing sprint info, vague imperatives). What is the expected outcome after removing this noise?",
          options: {
            A: "Claude will have less context and produce worse output",
            B: "40-60% reduction (to ~130 lines), equal or better compliance, fewer clarifying questions, extended session duration before compaction needed — less noise means more attention budget for critical rules",
            C: "The file will be too short to be useful",
            D: "Claude will ask more questions because context is missing"
          },
          correct: "B",
          explanation: "Expected audit results: 40-60% content reduction (280 → ~130 lines, ideally ~60 lines), equal or better compliance (removing noise doesn't hurt — it helps by freeing instruction budget), fewer clarifying questions (relevant context is clearer), extended session duration (fewer tokens per request). The Signal vs. Noise lesson emphasizes: less is more when signal-to-noise ratio improves."
        },
        { id: 16, question: "What does Question 2 of the 4-Question Audit ask?", options: { A: "Is this information critical for output quality?", B: "'Could Claude Figure This Out From Existing Materials?' — if Claude can infer from workspace files, including it wastes tokens", C: "Is this information longer than 5 lines?", D: "Does this need to be updated weekly?" }, correct: "B", explanation: "Q2: 'Could Claude Figure This Out From Existing Materials?' Claude reads workspace files regardless — if information is derivable from package.json, existing code files, or referenced documents, embedding it in CLAUDE.md is redundant token waste. Signal = what Claude can't discover independently." },
        { id: 17, question: "What does Question 3 of the 4-Question Audit identify?", options: { A: "Whether information is accurate and current", B: "'Does This Change Frequently?' — frequently changing info belongs in task files, not CLAUDE.md, to avoid context poisoning when it becomes stale", C: "Whether Claude has processed similar information before", D: "Whether the information is team-specific vs. standard" }, correct: "B", explanation: "Q3: 'Does This Change Frequently?' Sprint goals, current deadlines, active tickets — changing weekly or daily create context poisoning in CLAUDE.md when they become stale. Move to task files (updated per-session) instead. CLAUDE.md is for stable info that remains accurate across sessions." },
        { id: 18, question: "What does Question 4 of the 4-Question Audit identify as noise?", options: { A: "Information that is too technical for Claude", B: "'Is This a Default Convention Claude Already Knows?' — restating known professional conventions wastes instruction budget", C: "Information that was added more than 6 months ago", D: "Information that exists in other documentation" }, correct: "B", explanation: "Q4: 'Is This a Default Convention Claude Already Knows?' Standard professional conventions ('write clear commit messages,' 'use meaningful variable names,' 'document your code') are base knowledge — restating them consumes instruction budget without adding signal. Add only org-specific deviations from default behavior." },
        { id: 19, question: "What are the four Signal categories that survive the 4-Question Audit?", options: { A: "Commands, examples, references, and policies", B: "Commands/workflows Claude can't infer; style rules deviating from defaults; review/approval requirements; organization-specific decisions", C: "Test commands, build commands, deploy commands, debug commands", D: "Team preferences, manager requirements, client constraints, legal rules" }, correct: "B", explanation: "Signal (survives audit): (1) Commands or workflows Claude cannot infer from codebase, (2) Style rules deviating from default practices (specific, actionable), (3) Review and approval requirements, (4) Organization-specific decisions. These are the categories worth CLAUDE.md space because Claude wouldn't know them otherwise." },
        { id: 20, question: "What is the recommended docs/ directory structure for Progressive Disclosure?", options: { A: "README.md, CHANGELOG.md, CONTRIBUTING.md", B: "key-decisions.md, review-process.md, delivery-checklist.md, style-conventions.md, gotchas.md", C: "api.md, components.md, utils.md, config.md", D: "setup.md, usage.md, deployment.md, troubleshooting.md" }, correct: "B", explanation: "Recommended docs/ structure: key-decisions.md (why X over Y), review-process.md (how to review/approve), delivery-checklist.md (pre-delivery steps), style-conventions.md (formatting rules), gotchas.md (non-obvious behaviors). Referenced in CLAUDE.md; loaded on demand. Keeps CLAUDE.md under 60 lines while preserving full detail." },
        { id: 21, question: "How much less recall does Zone 2 (middle 80%) get compared to Zone 1 and Zone 3?", options: { A: "5% less recall — minor difference", B: "~30% less recall — models exhibit U-shaped attention curves favoring beginning and end", C: "50% less recall — middle content often ignored", D: "No difference — attention is uniform across the context" }, correct: "B", explanation: "Models exhibit U-shaped attention curves: Zone 1 (first 10%) = HIGH attention (primacy effect); Zone 2 (middle 80%) = LOW attention (~30% less recall); Zone 3 (last 10%) = HIGH attention (recency effect). The ~30% recall reduction is significant for compliance. Rule: if you'd be upset when AI ignores it, don't put it in Zone 2." },
        { id: 22, question: "What content belongs in Zone 3 (last 10%) of context?", options: { A: "Critical constraints and identity definition", B: "Reference material and templates", C: "Workflow instructions, startup directions, and completion steps", D: "Background context and historical information" }, correct: "C", explanation: "Zone 3 (last 10%, HIGH attention — recency effect): workflow instructions, startup directions, completion steps. These are items that need to guide the current action. Zone 1 (first 10%): critical constraints, non-negotiable rules. Zone 2 (middle 80%): reference material, nice-to-haves." },
        { id: 23, question: "What is the goal line count for CLAUDE.md after applying the audit framework?", options: { A: "Under 20 lines — the shorter the better", B: "Under 60 lines — achieves optimal signal-to-noise while maintaining effectiveness", C: "Under 200 lines — matches the instruction limit", D: "Exactly 100 lines — balanced approach" }, correct: "B", explanation: "Audit target: CLAUDE.md under 60 lines. Achieves: optimal signal-to-noise ratio (only high-signal content), instruction budget preserved for critical rules (no noise consuming the ~100-150 limit), minimal baseline context cost per request. Progressive Disclosure via file references achieves this without losing detail." },
        { id: 24, question: "Beyond improved compliance, what other benefit does noise reduction provide?", options: { A: "Faster model response time due to shorter input", B: "Extended session duration before compaction needed — fewer tokens per request means context window fills more slowly", C: "Automatic backup of CLAUDE.md to cloud storage", D: "Priority API access during high-traffic periods" }, correct: "B", explanation: "Noise reduction benefit beyond compliance: extended session duration. Fewer baseline tokens per request (60-line CLAUDE.md = ~500 tokens vs 280-line = ~2,800 tokens) means the context window fills more slowly. More turns before hitting 70-85% compaction threshold = longer productive sessions without interruption." },
        { id: 25, question: "CLAUDE.md instruction reads 'Write clear and professional commit messages.' According to Q4 of the 4-Question Audit, is this signal or noise?", options: { A: "Signal — commit messages are critical to code quality", B: "Noise — standard professional convention Claude already knows. Replace with specific: 'Format: type(scope): description. Types: feat/fix/refactor/docs/test. Max 72 chars.'", C: "Signal — Claude needs explicit formatting guidance", D: "Noise — only if it's been in the file over 6 months" }, correct: "B", explanation: "Q4 identifies 'Write clear commit messages' as noise — standard convention Claude already follows. Replace with specific signal: exact format, allowed types, character limits. Specific instructions are executable (Claude can check compliance) vs vague imperatives (Claude interprets arbitrarily)." },
        { id: 26, question: "Claude Code system prompt uses ~50 instructions. Developer writes a 200-line CLAUDE.md with ~180 distinct instructions. What happens to compliance?", options: { A: "Perfect compliance — 200 lines is within model capability", B: "Compliance drops for lower-priority instructions: 50 (system) + 180 = 230 total, exceeding the reliable ~150-200 limit. Critical rules in Zone 2 get further ignored due to low attention", C: "Only the last 100 instructions are ignored", D: "Compliance unaffected — line count doesn't equal instruction count" }, correct: "B", explanation: "Math: ~50 system instructions + ~180 from 200-line CLAUDE.md = ~230 total, exceeding reliable ~150-200 limit. Beyond limit, compliance drops on lower-priority instructions. Zone 2 positioning makes it worse: critical rules in middle 80% already get ~30% less recall before the limit issue." },
        { id: 27, question: "45-line deployment workflow is accessed once per sprint. Developer considers embedding it in CLAUDE.md. Which 4-Question answer determines it should be moved?", options: { A: "Q1 — Claude would ask about it if not included", B: "Q2 — Claude can't figure it out from existing materials", C: "Q3 — it doesn't change frequently; and Q2 — it's substantial content selectively needed, better as a referenced Skill or docs/deployment.md", D: "Q4 — it's a standard convention" }, correct: "C", explanation: "45-line deployment workflow fails Q2 (substantial content derivable from existing runbooks when referenced) and Q3 implication (selectively needed once per sprint, not every request). Better as Skill (invoked on-demand) or docs/deployment.md (referenced in CLAUDE.md as: 'Deployment: Read docs/deployment.md before any deployment'). Saves ~450 tokens per request." },
        { id: 28, question: "Sprint goals change weekly. Developer puts them in CLAUDE.md to ensure Claude always knows current priorities. What context engineering problem does this create?", options: { A: "No problem — current priorities are always useful", B: "Context Poisoning (Q3 failure): when sprint goals change but CLAUDE.md isn't updated, stale goals persist and mislead Claude. Move to task files updated per-session.", C: "Instruction Limit Problem: goals consume budget", D: "Zone 2 problem: goals ignored in middle of file" }, correct: "B", explanation: "Q3 failure: sprint goals 'change frequently' (weekly). If CLAUDE.md isn't perfectly updated each week (reality: it won't be), stale sprint goals create Context Rot — Poisoning type. Move to task files or session-start context injection. CLAUDE.md = stable permanent context; task files = dynamic per-session state." },
        { id: 29, question: "Critical rule 'Always use pnpm not npm' is in line 140 of a 280-line CLAUDE.md (Zone 2). Claude uses npm 30% of the time. What repositioning fix is needed?", options: { A: "Move to Zone 3 (line 280) — recency effect will improve compliance", B: "Move to Zone 1 (lines 1-28) — error-critical rules must be in high-attention primacy zone", C: "Repeat it in all three zones for redundancy", D: "Move to a separate .npmrc file instead" }, correct: "B", explanation: "Zone 1 (first 10%) for error-critical rules. 'Always use pnpm not npm' is error-critical (wrong package manager creates broken lockfiles). Currently in Zone 2 (low attention, ~30% less recall). Move to Zone 1 among other non-negotiables. 30% non-compliance drops to near 0% with Zone 1 positioning." },
        { id: 30, question: "CTO asks 'Why reduce our comprehensive 300-line CLAUDE.md? More context should mean better results.' What is the correct response per Signal vs. Noise principles?", options: { A: "'You're right — more context always improves AI performance'", B: "'The Instruction Limit (~150-200) means 300 lines exceeds capacity — excess content gets ignored. 40-60% noise removal improves compliance. We use Progressive Disclosure for the rest.'", C: "'300 lines is too long for the file system to handle efficiently'", D: "'We should use a database instead of CLAUDE.md for comprehensive context'" }, correct: "B", explanation: "The Instruction Limit is the counter-intuitive truth: beyond ~150-200 reliable instructions, excess content gets ignored — not processed worse, but ignored. 300-line CLAUDE.md's critical rules compete with noise for the same limited budget. Fix: 40-60% reduction via 4-Question Audit + Progressive Disclosure via file references for detail." }
      ]
    },
    {
      id: 3,
      title: "Context Architecture",
      mcqs: [
        {
          id: 1,
          question: "What are the four context tools and their loading patterns?",
          options: {
            A: "System prompt (on demand), Skills (always), Subagents (at start), Hooks (never)",
            B: "CLAUDE.md (every request), Skills (descriptions at start; full on invocation), Subagents (isolated, zero cost in main session), Hooks (external execution, zero context cost)",
            C: "All four load at session start and remain loaded throughout",
            D: "Tools load alphabetically based on file names"
          },
          correct: "B",
          explanation: "Loading patterns: CLAUDE.md = session start, every request (continuous cost). Skills = descriptions at start (~100 tokens), full SKILL.md only when invoked (on-demand). Subagents = when spawned, zero context cost in main session (isolated). Hooks = on trigger, zero context cost (external execution)."
        },
        {
          id: 2,
          question: "What is the critical insight about CLAUDE.md vs. Skills for context efficiency?",
          options: {
            A: "CLAUDE.md and Skills consume equal context — there is no difference",
            B: "CLAUDE.md consumes context continuously on every request; Skills activate on-demand — architectural separation dramatically reduces baseline context",
            C: "Skills consume more context than CLAUDE.md because they're more complex",
            D: "CLAUDE.md is more efficient because it's compressed on disk"
          },
          correct: "B",
          explanation: "Critical insight: CLAUDE.md is loaded every single request (continuous cost), while Skills load full content only when invoked. The architectural separation — minimal CLAUDE.md + rich Skills — reduces per-request baseline context from ~7,300 tokens (all in CLAUDE.md) to ~550 tokens, a 13-fold reduction."
        },
        {
          id: 3,
          question: "When should you use CLAUDE.md vs. Skills for information storage?",
          options: {
            A: "CLAUDE.md for all information; Skills only for executable code",
            B: "CLAUDE.md for info needed nearly every task (stable, error-critical); Skills for selectively needed content, substantial length, or manual /skill-name invocation",
            C: "Skills for all information; CLAUDE.md for configuration only",
            D: "CLAUDE.md for developers; Skills for non-developers"
          },
          correct: "B",
          explanation: "Use CLAUDE.md for: info needed for nearly every task, relatively stable info, info that causes errors if omitted (e.g., package manager preference, test commands, naming conventions). Use Skills for: selectively needed content, substantial length (exceeds a few lines), content supporting manual /skill-name invocation (e.g., code review protocols, deployment instructions)."
        },
        {
          id: 4,
          question: "When should you use Subagents vs. CLAUDE.md or Skills?",
          options: {
            A: "Subagents when work takes longer than 10 minutes",
            B: "Subagents when work requires reading numerous files, fresh perspective needed, or tasks can execute in parallel — context cost in main session is zero",
            C: "Subagents only for tasks involving external APIs",
            D: "Subagents when the task involves more than 3 files"
          },
          correct: "B",
          explanation: "Use Subagents when: work requires reading numerous files (would pollute main context), fresh perspective is needed (clean slate improves analysis quality), or tasks can execute in parallel. The key advantage: Subagents operate in isolated contexts with zero cost to the main session's context window."
        },
        {
          id: 5,
          question: "What is the '13-fold reduction' in the marketing consultant Token Economics example?",
          options: {
            A: "Model inference speed improves 13x with architectural separation",
            B: "Baseline context per request drops from ~7,300 tokens (all in CLAUDE.md) to ~550 tokens (minimal CLAUDE.md + Skill descriptions) by moving content to Skills and file references",
            C: "Skills compress 13x smaller than equivalent CLAUDE.md content",
            D: "13x fewer API calls needed when using architectural separation"
          },
          correct: "B",
          explanation: "The 13-fold reduction: Traditional (all in CLAUDE.md) = Full CLAUDE.md (~4,000) + Competitor analysis (~1,500) + Metrics definitions (~1,000) + Campaign template (~800) = ~7,300 tokens per request. Architectural separation = Minimal CLAUDE.md (~400) + Skill descriptions (~150) = ~550 baseline tokens. 7,300 ÷ 550 ≈ 13x reduction."
        },
        {
          id: 6,
          question: "What is 'CLAUDE.md Overload' and what problem does it cause?",
          options: {
            A: "Files over 200 lines that take too long to read",
            B: "300+ line CLAUDE.md files where Claude ignores critical instructions because the instruction budget is exhausted by less important content",
            C: "Having too many CLAUDE.md files in nested directories",
            D: "CLAUDE.md files that contain executable code"
          },
          correct: "B",
          explanation: "CLAUDE.md Overload is listed as Common Architecture Mistake #1: files over 300 lines where Claude ignores critical instructions. With the instruction limit of ~150–200 distinct instructions, a 300+ line file exhausts the budget with lower-priority content, causing critical rules to be ignored or deprioritized."
        },
        {
          id: 7,
          question: "When should you use Hooks vs. CLAUDE.md instructions for enforcement?",
          options: {
            A: "Always use CLAUDE.md — it's more flexible",
            B: "Hooks for deterministic processes that must execute consistently, require no LLM judgment, and can run externally without consuming context (e.g., linting, format validation, audit logging)",
            C: "Hooks only for security-related enforcement",
            D: "Hooks and CLAUDE.md instructions are interchangeable"
          },
          correct: "B",
          explanation: "Use Hooks for: processes that must execute consistently (deterministic, not probabilistic), logic requiring no LLM judgment, and external execution that consumes zero context. Examples: automated linting after edits, format validation before commits, audit logging for compliance. CLAUDE.md instructions are probabilistic — Claude may not always follow them."
        },
        {
          id: 8,
          question: "What is 'Skill Proliferation' as a common architecture mistake?",
          options: {
            A: "Having too many skills causes system instability",
            B: "Creating numerous Skills with ambiguous descriptions that Claude rarely invokes because it can't determine when to use them",
            C: "Skills that become too large and exceed the 5K token limit",
            D: "Sharing skills across too many team members"
          },
          correct: "B",
          explanation: "Skill Proliferation (Common Mistake #3): creating numerous Skills that Claude rarely invokes because their descriptions are ambiguous or overlapping. The cure: write clear, specific skill descriptions that precisely state when the skill should be used. Skill metadata quality determines discovery quality."
        },
        {
          id: 9,
          question: "What is the appropriate use case for a Subagent that would be wrong to put in CLAUDE.md?",
          options: {
            A: "Specifying the project's TypeScript version",
            B: "'Identify all deprecated API usages across the codebase' — requires reading many files and fresh context to avoid accumulated noise",
            C: "Listing the team's preferred code review checklist",
            D: "Specifying that tests should run before commits"
          },
          correct: "B",
          explanation: "'Identify all deprecated API usages across the codebase' is a perfect Subagent case: requires reading potentially hundreds of files (would pollute main context if done inline), benefits from fresh context (no accumulated assumptions), and can produce a clean summary to return to the main agent. Putting this in CLAUDE.md would be an instruction, not an execution — it needs to actually do the work."
        },
        {
          id: 10,
          question: "What is 'Hook Neglect' as a common architecture mistake?",
          options: {
            A: "Forgetting to configure hooks for new projects",
            B: "Using LLM calls for repetitive validation tasks that could be deterministic shell scripts — wasting context window and adding latency",
            C: "Writing hooks that are too complex for maintenance",
            D: "Having hooks that conflict with each other"
          },
          correct: "B",
          explanation: "Hook Neglect (Common Mistake #4): performing repetitive validation tasks with LLM calls instead of deterministic shell scripts (hooks). Example: asking Claude to 'check if tests pass before committing' as an instruction wastes context window for a task that `npm test && git commit` handles deterministically. Hooks execute without consuming any context."
        },
        {
          id: 11,
          question: "You're architecting a healthcare compliance Digital FTE. You have: HIPAA rules (stable, critical), deployment workflow (substantial, selective), current sprint goals (dynamic), test commands (stable). According to Context Architecture principles, how do you distribute this content?",
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
          question: "Your marketing consultant Digital FTE has 7,300 tokens of expertise in CLAUDE.md. Per-request costs are high. According to the 13-fold reduction principle, how do you restructure for token efficiency?",
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
          question: "You're building a code review Digital FTE. You need to identify deprecated API usages across 200+ files. According to Context Architecture, which tool do you use and why?",
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
          question: "Your team's Digital FTE has 15 Skills but Claude rarely invokes them correctly. According to Common Architecture Mistakes, what is the likely problem and fix?",
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
          question: "You're performing repetitive linting checks by asking Claude 'verify this code follows our style guide' every time. According to Hook Neglect, what is the problem and better approach?",
          options: {
            A: "No problem — this is the correct use of Claude for quality checks",
            B: "Hook Neglect — using LLM calls for repetitive validation that could be deterministic shell scripts. Fix: create a pre-commit hook that runs linter automatically, executing externally with zero context cost",
            C: "You should create a Skill for style guide checking instead",
            D: "Add the style guide to CLAUDE.md for better compliance"
          },
          correct: "B",
          explanation: "Hook Neglect (Common Mistake #4): performing repetitive validation with LLM calls instead of deterministic scripts. Asking Claude to 'check if tests pass' or 'verify linting' wastes context window for tasks that hooks handle externally with zero context cost. Hooks execute on triggers without consuming any context or adding latency from LLM calls."
        },
        { id: 16, question: "What is CLAUDE.md's loading pattern and what does this imply for cost?", options: { A: "Loads on-demand when referenced — minimal cost", B: "Loads at session start, included in every request — continuous token cost that justifies keeping it lean", C: "Loads once and cached for the session — no repeat cost", D: "Loads only when Claude needs project context — smart caching" }, correct: "B", explanation: "CLAUDE.md loads at session start and is included in every request — it's a continuous context cost, not a one-time load. This is why file size matters: 400-token CLAUDE.md vs 7,300-token CLAUDE.md means the difference of 6,900 tokens per request, multiplied by every interaction in every session." },
        { id: 17, question: "When does a Skill's full content (full SKILL.md) load into context?", options: { A: "At session start along with descriptions", B: "Only when the skill is invoked — descriptions (~100 tokens) always load; full SKILL.md (<5K tokens) loads on-demand", C: "When Claude determines it might be useful within the next 5 turns", D: "When the user explicitly types the skill name" }, correct: "B", explanation: "Skills use Progressive Disclosure: Level 1 (descriptions, ~100 tokens/skill) loads at session start always. Level 2 (full SKILL.md, <5K tokens) loads only when skill is invoked. Level 3 (supporting files) loads conditionally. This means having 20 skills = ~2,000 tokens baseline vs. loading all 20 full SKILLs = ~100K tokens." },
        { id: 18, question: "What is the context cost of Subagents to the main session?", options: { A: "High — each subagent shares the main context window", B: "Zero — Subagents operate in completely isolated context windows separate from the main session", C: "Medium — subagent results are injected into main context", D: "Variable — depends on subagent task complexity" }, correct: "B", explanation: "Subagents: zero context cost in main session during execution. Each Subagent operates in its own isolated context window. Only the summary/result returned to the main session adds context. This isolation enables: (1) complex work without polluting main context, (2) parallel execution of multiple Subagents simultaneously." },
        { id: 19, question: "What is the context cost of Hooks to the session?", options: { A: "High — hooks inject full script output into context", B: "Zero — Hooks execute externally as shell commands without consuming context window tokens", C: "Medium — hook output is summarized and injected", D: "Depends on hook complexity and output length" }, correct: "B", explanation: "Hooks execute externally (shell commands, scripts) with zero context cost. They don't consume context window tokens during execution. Only if a hook specifically outputs content that Claude needs to process does it consume context. This makes hooks ideal for deterministic logic (linting, formatting, audit logging) that doesn't need LLM judgment." },
        { id: 20, question: "What is the critical architectural insight about CLAUDE.md's continuous loading?", options: { A: "CLAUDE.md should be loaded manually per-session for control", B: "CLAUDE.md consumes context continuously — every token in it multiplies by every request in every session. Moving content to Skills or file references dramatically reduces cumulative cost.", C: "CLAUDE.md loading is free — it's cached at the infrastructure level", D: "CLAUDE.md only matters for sessions lasting more than 1 hour" }, correct: "B", explanation: "Critical insight: 'CLAUDE.md consumes context continuously.' 7,300-token CLAUDE.md × 100 requests in a session = 730,000 tokens of context consumed just by project context. Moving competitor analysis (1,500 tokens) to a Skill saves 1,500 × 100 = 150,000 tokens per session. Architectural separation multiplies savings across every interaction." },
        { id: 21, question: "What type of content is appropriate for Skills in the context architecture?", options: { A: "Error-critical rules like test commands and package manager preferences", B: "Selectively needed content that is substantial in length and supports manual invocation — code review protocols, deployment instructions, specialist procedures", C: "Information needed in every single request", D: "Information that changes frequently like sprint goals" }, correct: "B", explanation: "Skills for: (1) selectively needed (not every request), (2) substantial length (more than a few lines), (3) supports manual /skill-name invocation. Examples: code review protocols (invoked when reviewing), deployment instructions (invoked pre-deployment), specialist procedures (invoked when domain task arises). CLAUDE.md is for always-needed, concise, stable info." },
        { id: 22, question: "When should you use Subagents from an architecture perspective?", options: { A: "Whenever a task takes more than 5 minutes", B: "When work requires reading numerous files, fresh perspective is needed, or tasks can execute in parallel — keeping main context clean", C: "Only for tasks involving external APIs", D: "Whenever the user explicitly requests isolation" }, correct: "B", explanation: "Subagent architectural triggers: (1) Reading numerous files (adding 50 files to main context = context pollution; Subagent reads them in isolation), (2) Fresh perspective needed (security audit benefits from clean context without implementation assumptions), (3) Parallel execution (multiple independent analysis tasks run simultaneously)." },
        { id: 23, question: "When should you use Hooks from an architecture perspective?", options: { A: "When you want Claude to learn from repeated actions", B: "When processes must execute consistently and deterministically without LLM judgment — linting, formatting, audit logging, test execution", C: "When you need to call external APIs with authentication", D: "When tasks need to run in parallel with Claude" }, correct: "B", explanation: "Hooks for: (1) must execute consistently (not relying on Claude remembering), (2) deterministic logic (no LLM judgment needed — linting either passes or fails, format either correct or incorrect), (3) external execution without context cost. Examples: automated linting after Write, test execution after code changes, audit logging all file operations." },
        { id: 24, question: "In the Marketing Consultant Token Economics example, what is the total per-request cost using traditional all-in-CLAUDE.md approach?", options: { A: "~1,000 tokens per request", B: "~7,300 tokens per request (Full CLAUDE.md ~4,000 + Competitor analysis ~1,500 + Metrics ~1,000 + Campaign template ~800)", C: "~500 tokens per request", D: "~15,000 tokens per request" }, correct: "B", explanation: "Traditional approach (all in CLAUDE.md): Full CLAUDE.md (~4,000 tokens) + Competitor analysis (~1,500) + Metrics definitions (~1,000) + Campaign template (~800) = ~7,300 tokens per request. Every single request includes this entire load. With architectural separation: ~550 baseline tokens (400 minimal CLAUDE.md + 150 Skill descriptions). 7,300 ÷ 550 = 13x reduction." },
        { id: 25, question: "What is 'CLAUDE.md Overload' and what symptom does it cause?", options: { A: "File corruption when CLAUDE.md exceeds 1MB", B: "300+ line CLAUDE.md exceeding instruction limit (~150-200) — Claude ignores critical instructions as budget is exhausted by low-priority content", C: "CLAUDE.md loading too slowly, causing session startup delays", D: "Too many CLAUDE.md files in nested directories causing conflicts" }, correct: "B", explanation: "CLAUDE.md Overload (Common Mistake #1): files exceeding 300 lines exhaust the ~150-200 reliable instruction limit. Claude ignores critical instructions — not because it's wrong but because the budget for reliable compliance is consumed by earlier, less important content. Signal: Claude inconsistently ignores important rules that should always be followed." },
        { id: 26, question: "What is 'Subagent Avoidance' and what problem does it cause?", options: { A: "Never creating custom subagents; using only built-in ones", B: "Avoiding Subagents for research tasks — performing all file reading in main session, causing context degradation during research", C: "Using too many subagents simultaneously overloading the system", D: "Subagents that avoid completing their assigned tasks" }, correct: "B", explanation: "Subagent Avoidance (Common Mistake #2): performing extensive research (reading 30+ files, exploring codebase) in the main session instead of delegating to Subagents. Result: context degrades rapidly with file contents, exploratory dead-ends, intermediate reasoning. Fix: delegate research to Subagents; receive summary; keep main context clean." },
        { id: 27, question: "What is 'Skill Proliferation' and what causes poor invocation?", options: { A: "Creating skills that are too long, exceeding 5K tokens", B: "Creating numerous Skills with ambiguous descriptions — Claude can't determine when to invoke them. Fix: write precise metadata stating exact trigger conditions.", C: "Having more than 10 skills in .claude/skills/ directory", D: "Creating duplicate skills with similar names causing conflicts" }, correct: "B", explanation: "Skill Proliferation (Common Mistake #3): numerous Skills with vague/overlapping descriptions = poor automatic invocation. Claude uses YAML metadata to determine when to invoke Skills — ambiguous descriptions ('Code review Skill') lead to wrong or no invocations. Fix: precise trigger conditions ('Use when reviewing authentication code for security vulnerabilities')." },
        { id: 28, question: "What is 'Hook Neglect' and what is the performance cost?", options: { A: "Not updating hooks when code changes, causing outdated automation", B: "Using LLM calls for repetitive deterministic validation instead of hooks — wastes context tokens and adds LLM latency for tasks scripts handle better", C: "Forgetting to register hooks in settings.json", D: "Creating too many hooks that fire simultaneously" }, correct: "B", explanation: "Hook Neglect (Common Mistake #4): asking Claude 'check if tests pass' or 'verify code style' uses LLM inference (slow, expensive, consumes context) for tasks a 10-line shell script handles deterministically. Hooks run externally with zero context cost and no LLM latency. Asking Claude to 'verify linting' 50 times/session = 50 unnecessary LLM calls." },
        { id: 29, question: "Developer wants to 'automatically enforce code style after every file write.' Which architecture tool is most appropriate?", options: { A: "CLAUDE.md instruction — 'Always enforce style after writing'", B: "Hook (PostToolUse Write) — deterministic linting script runs automatically after each Write, zero context cost, guaranteed execution regardless of conversation length", C: "Skill — 'Code style enforcement' invoked manually", D: "Subagent — launches code style checker in isolated context" }, correct: "B", explanation: "Hook (PostToolUse Write) is architecturally correct: (1) must execute consistently (don't rely on Claude remembering), (2) deterministic (linter either passes or fails — no LLM judgment needed), (3) zero context cost (runs externally). CLAUDE.md instruction relies on Claude remembering; Skill requires explicit invocation; Subagent is heavy overhead for simple deterministic check." },
        { id: 30, question: "Development team uses Claude Code for code reviews. The review process is 30 lines of specific criteria accessed 2-3 times per week. Where should this content go?", options: { A: "CLAUDE.md — code review is important", B: "Skill — 30 lines is substantial, selectively needed (2-3x/week not every request), supports /code-review invocation. Saves ~300 tokens × every non-review request.", C: "Inline in every prompt when reviewing", D: "Subagent — isolated review process" }, correct: "B", explanation: "Skill is correct: (1) substantial (30 lines), (2) selectively needed (2-3x/week, not every request), (3) supports manual invocation (/code-review). CLAUDE.md would load 30 lines × every non-review request = wasted tokens. Skill loads only when review happens. CLAUDE.md entry: 'Code Review: Use /code-review skill for structured reviews.'" }
      ]
    },
    {
      id: 4,
      title: "The Tasks System — Persistent State for Context Management",
      mcqs: [
        {
          id: 1,
          question: "What was the old problem with Claude Code todos before the new Tasks system?",
          options: {
            A: "Todos could only contain text, not code or file references",
            B: "Todos lived in chat conversations — disappearing on /clear, crashes, or session end",
            C: "Todos were limited to 10 items per session",
            D: "Todos weren't visible to other team members"
          },
          correct: "B",
          explanation: "The old problem: Claude Code todos lived in the conversation context — they disappeared when users ran /clear, when Claude crashed, or when sessions ended. All todo state was ephemeral and tied to the specific conversation. The new Tasks system persists todos on the filesystem."
        },
        {
          id: 2,
          question: "Where are Tasks stored in the new system?",
          options: {
            A: "In the CLAUDE.md file under a [tasks] section",
            B: "On the filesystem at ~/.claude/tasks/",
            C: "In the project's package.json under a 'tasks' key",
            D: "In a cloud database linked to the Anthropic account"
          },
          correct: "B",
          explanation: "New Tasks storage: on the filesystem at ~/.claude/tasks/. This means tasks survive /clear (context is cleared but tasks persist), crashes (filesystem survives process failures), and session ends. Cross-session sharing uses CLAUDE_CODE_TASK_LIST_ID environment variable to share a specific task list across sessions."
        },
        {
          id: 3,
          question: "What is the 'Plan-Clear-Execute Pattern' and why is it valuable?",
          options: {
            A: "Plan code architecture, then clear the database, then execute deployment",
            B: "Phase 1: Plan (create task structure when context is fresh), Phase 2: Clear (/clear at 60-80% context to free space), Phase 3: Execute (continue work — plans persist despite cleared context)",
            C: "A git workflow: plan feature, clear branch, execute pull request",
            D: "A testing pattern: plan test cases, clear old results, execute new tests"
          },
          correct: "B",
          explanation: "The Plan-Clear-Execute Pattern: Phase 1 = Plan (create complete task structure while context is fresh, capturing all dependencies), Phase 2 = Clear (run /clear at 60–80% context usage to free tokens), Phase 3 = Execute (resume work from Tasks — the plan persists on filesystem despite cleared context). The insight: 'the plan is stored on disk, users can run /clear and maintain their project roadmap.'"
        },
        {
          id: 4,
          question: "What keyboard shortcut displays the current task list in Claude Code?",
          options: {
            A: "Ctrl+L",
            B: "Ctrl+T",
            C: "Alt+T",
            D: "Shift+Tab"
          },
          correct: "B",
          explanation: "Ctrl+T toggles the task list view in Claude Code, displaying up to 10 tasks. For cross-session sharing, use the environment variable: CLAUDE_CODE_TASK_LIST_ID=project-alpha claude — this loads a specific named task list when starting a session."
        },
        {
          id: 5,
          question: "What are DAG dependencies in the Tasks system?",
          options: {
            A: "Tasks that automatically restart when they fail",
            B: "Directed Acyclic Graph dependencies — tasks can 'block' other tasks, ensuring Task 3 won't start until Task 1 and Task 2 are complete",
            C: "Tasks that run in the background without user interaction",
            D: "Tasks assigned to specific team members"
          },
          correct: "B",
          explanation: "DAG (Directed Acyclic Graph) dependencies: tasks can 'block' or 'addBlocks' to other tasks. Example: Fix Auth (Task 1) → User Service (Task 2) → Integration Tests (Task 3), with Admin Panel (Task 4) also blocking Task 3. Claude won't attempt a blocked task until all its blockers are complete."
        },
        {
          id: 6,
          question: "What distinguishes Tasks from Progress Files?",
          options: {
            A: "Tasks are for developers; Progress Files are for project managers",
            B: "Tasks track action items (what to do, dependencies, sequencing); Progress Files document learning and decisions (why things were done, discoveries, reasoning)",
            C: "Tasks are temporary; Progress Files are permanent",
            D: "Tasks are machine-readable; Progress Files are human-readable only"
          },
          correct: "B",
          explanation: "Tasks vs. Progress Files: Tasks = manage WHAT (action items with dependencies and sequencing, stored in ~/.claude/tasks/). Progress Files = document WHY (context, discoveries, reasoning — stored in project files). Use both together: Tasks for what needs to be done, Progress Files for why decisions were made."
        },
        {
          id: 7,
          question: "What is the Legal Due Diligence workflow example for Task dependencies?",
          options: {
            A: "All five tasks run in parallel — no dependencies",
            B: "Extract key terms (Task 1) → Identify liability and Flag compliance (both blocked by Task 1) → Cross-reference findings (blocked by Tasks 2 and 3) → Draft executive summary (blocked by Task 4)",
            C: "Tasks run sequentially in alphabetical order",
            D: "Only the final task has a dependency — the rest are independent"
          },
          correct: "B",
          explanation: "Legal Due Diligence DAG: Extract key terms (Task 1, no blockers) → Identify liability (Task 2, blocked by #1) + Flag compliance (Task 3, blocked by #1) → Cross-reference findings (Task 4, blocked by #2 and #3) → Draft executive summary (Task 5, blocked by #4). Tasks 2 and 3 can run in parallel after Task 1."
        },
        {
          id: 8,
          question: "How do users interact with the Tasks system — do they need to know the TaskCreate API?",
          options: {
            A: "Yes — users must explicitly call TaskCreate, TaskUpdate, TaskList, and TaskGet",
            B: "No — users communicate naturally; Claude manages TaskCreate, TaskUpdate, TaskList, and TaskGet internally as an implementation detail",
            C: "Users must write tasks in YAML format in a tasks.yaml file",
            D: "Users configure tasks via the Claude Code settings UI only"
          },
          correct: "B",
          explanation: "Users communicate naturally: 'I need to refactor the authentication module' — Claude internally calls TaskCreate, TaskUpdate, TaskList, and TaskGet without exposing these operations. The Tasks system is an implementation detail that Claude manages; users interact through natural language and the Ctrl+T task view."
        },
        {
          id: 9,
          question: "What is the CLAUDE_CODE_TASK_LIST_ID environment variable used for?",
          options: {
            A: "Setting the maximum number of tasks Claude can create",
            B: "Sharing a specific task list across multiple Claude Code sessions — teams or multi-session projects can work from the same task list",
            C: "Encrypting task content for security",
            D: "Linking tasks to a specific GitHub repository"
          },
          correct: "B",
          explanation: "CLAUDE_CODE_TASK_LIST_ID=project-alpha claude enables cross-session sharing of a specific named task list. Multiple team members can use the same task list, and the same project's tasks persist across multiple work sessions — critical for multi-day or team projects where the task state must be shared."
        },
        {
          id: 10,
          question: "What is the key advantage of the new Task system over the old todo-in-conversation approach for long projects?",
          options: {
            A: "Tasks support richer formatting than conversation todos",
            B: "Because tasks persist on the filesystem independently of conversation context, developers can /clear their context at any point without losing project plan state — enabling the Plan-Clear-Execute pattern",
            C: "Tasks automatically sync to GitHub Issues",
            D: "Tasks are faster to create than typing todos in conversation"
          },
          correct: "B",
          explanation: "The key advantage: Task persistence on the filesystem is completely independent of conversation context. Old approach: /clear = lose all todos. New approach: /clear = free context tokens while keeping the complete project plan intact in ~/.claude/tasks/. This enables the Plan-Clear-Execute pattern that maintains project momentum across context resets."
        },
        {
          id: 11,
          question: "You're 3 hours into a complex refactoring session. Context is at 75%. You need to continue working but responses are slowing. According to the Plan-Clear-Execute pattern, what should you do?",
          options: {
            A: "Keep working until context hits 90%, then panic",
            B: "Save current progress to Tasks, run /clear to free context, then resume work from Tasks — the plan persists on filesystem despite cleared conversation",
            C: "Start a completely new project from scratch",
            D: "Export the conversation and manually recreate the context"
          },
          correct: "B",
          explanation: "Plan-Clear-Execute pattern: 1) Save progress to Tasks (plan persists on filesystem), 2) Run /clear (frees context tokens), 3) Resume from Tasks (plan intact). This maintains project momentum across context resets without losing the roadmap."
        },
        {
          id: 12,
          question: "Your team has 5 developers working on the same project across multiple sessions. Each developer needs to see the same task list. How do you configure this?",
          options: {
            A: "Share CLAUDE.md via git — everyone reads the same file",
            B: "Set CLAUDE_CODE_TASK_LIST_ID=project-alpha environment variable for all team members — they all work from the same shared task list",
            C: "Email task updates after each session",
            D: "Use a separate project management tool and manually sync"
          },
          correct: "B",
          explanation: "CLAUDE_CODE_TASK_LIST_ID enables cross-session AND cross-user sharing. Set CLAUDE_CODE_TASK_LIST_ID=project-alpha for all team members — they all read/write to the same task list at ~/.claude/tasks/project-alpha/. Critical for team coordination."
        },
        {
          id: 13,
          question: "You have a task 'Refactor authentication module' with subtasks: Update login API, Add MFA support, Update tests. According to DAG dependencies, how should you structure this?",
          options: {
            A: "All tasks run in parallel — no dependencies needed",
            B: "Update login API (Task 1) → Add MFA (Task 2, blocked by #1) → Update tests (Task 3, blocked by #1 and #2). Tests can't run until both implementation tasks complete.",
            C: "Run tests first, then implement features",
            D: "Tasks must run sequentially in alphabetical order"
          },
          correct: "B",
          explanation: "DAG dependencies: Update login API has no blockers (starts first). Add MFA blocked by #1 (waits for API update). Update tests blocked by #1 and #2 (can't test until both features implemented). Claude won't attempt blocked tasks until dependencies complete."
        },
        {
          id: 14,
          question: "A task says 'Address feedback' and has been 'In Progress' for 2 weeks. According to task decomposition principles, what is the problem?",
          options: {
            A: "The task is too complex — split into smaller tasks",
            B: "The task lacks specific completion criteria — 'done' is undefined. Fix: specify exact deliverable like 'Incorporate CFO's three budget comments on slides 4, 7, 12'",
            C: "The task wasn't added to the progress file",
            D: "The task is blocked by unresolved dependencies"
          },
          correct: "B",
          explanation: "Vague tasks failure mode: 'Address feedback' never completes because 'done' is undefined. Fix: specify exactly what done looks like — 'Incorporate CFO's three budget comments on revenue projections (slides 4, 7, and 12).' Task is either done (three slides updated) or not — unambiguous."
        },
        {
          id: 15,
          question: "You're ending a work session. According to the Exit Protocol, what must you do before closing?",
          options: {
            A: "Run /clear and close the terminal",
            B: "Checkpoint work (git commit, save deliverables) + Update Tasks (move tasks to correct sections, document decisions). Never end with half-edited work scattered in files.",
            C: "Export the conversation and archive it",
            D: "Email the team a summary of what was done"
          },
          correct: "B",
          explanation: "Exit Protocol: 1) Checkpoint work — save deliverables in stable condition (git commit, finalized documents); 2) Update Tasks — move tasks to correct sections, document decisions. 'Never end with half-edited work' — next session starts from Tasks, not memory."
        },
        { id: 16, question: "Where are Tasks stored on the filesystem?", options: { A: "In the project root as tasks.yaml", B: "~/.claude/tasks/ — on the filesystem, persisting across /clear, crashes, and session ends", C: "In the conversation history JSONL file", D: "In CLAUDE.md under a [tasks] section" }, correct: "B", explanation: "Tasks stored at ~/.claude/tasks/ on the filesystem. This is the critical distinction from old todos (stored in conversation): Tasks survive /clear (context cleared but tasks remain), system crashes, and session ends. Plan persists on disk; context can be freely cleared." },
        { id: 17, question: "What does the CLAUDE_CODE_TASK_LIST_ID environment variable enable?", options: { A: "Task prioritization by AI automatically", B: "Cross-session task sharing — launching Claude with CLAUDE_CODE_TASK_LIST_ID=project-alpha allows multiple sessions to access the same task list", C: "Remote team members sharing tasks via cloud", D: "Task list backup to external storage" }, correct: "B", explanation: "CLAUDE_CODE_TASK_LIST_ID=project-alpha claude: launches Claude pointing to a specific task list, enabling cross-session continuity. Multiple sessions (morning and afternoon, different team members) access same task structure. Environment variable = bridge between isolated sessions." },
        { id: 18, question: "What was the key limitation of old Claude Code Todos?", options: { A: "Could only hold 10 todos at a time", B: "Lived in conversation — disappearing on /clear, crashes, or session end. No dependencies, no cross-session persistence.", C: "Required manual YAML formatting", D: "Could not be shared with team members" }, correct: "B", explanation: "Old Todos: stored in conversation context. /clear = todos gone; crash = todos gone; session end = todos gone. No dependency tracking (blockedBy, addBlocks), no cross-session sharing. Every new session required reconstructing the plan. New Tasks: filesystem storage, persistent, dependency graphs, cross-session via env variable." },
        { id: 19, question: "What is the 'blockedBy' dependency in the Tasks system?", options: { A: "A task blocked by external API unavailability", B: "A dependency declaration where Task B cannot start until Task A completes — enables automatic sequencing and identifies parallel opportunities", C: "A manual block preventing accidental execution", D: "A team member blocking a task for review" }, correct: "B", explanation: "blockedBy dependency: Task B is blocked until Task A completes. System automatically tracks: which tasks are actionable now (no unresolved blockers), which are waiting (have pending blockers). This enables: sequenced execution (nothing starts before its dependencies), parallel opportunity identification (tasks with same blocker can run simultaneously)." },
        { id: 20, question: "What does Ctrl+T do in Claude Code?", options: { A: "Opens terminal settings", B: "Toggles the task list view — displays up to 10 tasks showing status, dependencies, and progress", C: "Creates a new task manually", D: "Triggers a context compaction" }, correct: "B", explanation: "Ctrl+T: toggle task list view (up to 10 tasks). Shows current task state: completed, in-progress, blocked, not-started. Allows users to see Plan-Clear-Execute progress without asking Claude. Useful for verifying tasks persisted after /clear and identifying next actionable items." },
        { id: 21, question: "What are the three phases of the Plan-Clear-Execute Pattern?", options: { A: "Plan features, clear technical debt, execute deployment", B: "Phase 1 Plan (create task structure while context fresh), Phase 2 Clear (run /clear at 60-80% context), Phase 3 Execute (continue from persisted Tasks despite cleared context)", C: "Plan session, clear distractions, execute tasks sequentially", D: "Plan in CLAUDE.md, clear with /compact, execute with hooks" }, correct: "B", explanation: "Plan-Clear-Execute: Phase 1 = Plan (fresh context, create complete task structure with all dependencies before starting work), Phase 2 = Clear (/clear at 60-80% context — plan persists on filesystem), Phase 3 = Execute (resume work from Tasks; context cleared but roadmap intact). The insight: plan stored on disk survives context resets." },
        { id: 22, question: "In the Legal Due Diligence example, which tasks can run in parallel?", options: { A: "All tasks run sequentially in order", B: "Identify liability (Task 2) and Flag compliance (Task 3) — both blocked only by Task 1 (Extract key terms), so they can run simultaneously after Task 1 completes", C: "Only the final summary task runs alone", D: "All tasks are independent with no dependencies" }, correct: "B", explanation: "Legal Due Diligence DAG: Task 1 (Extract key terms) → Tasks 2 and 3 in parallel (both blocked by Task 1 only) → Task 4 (Cross-reference, blocked by 2 and 3) → Task 5 (Summary, blocked by 4). Tasks 2 and 3 run simultaneously — dependency graph reveals parallelism opportunities that sequential task lists miss." },
        { id: 23, question: "What is the Marketing Campaign example task dependency structure?", options: { A: "All five tasks run independently", B: "Analyze competitors (T1) → Define personas (T2) → Develop messaging (T3, blocked by T1+T2) → Channel strategy (T4, blocked by T3) → Creative briefs (T5, blocked by T3+T4)", C: "Creative briefs first, then everything else", D: "Only the final deliverable has any dependencies" }, correct: "B", explanation: "Marketing Campaign DAG: T1 (Analyze competitors) + T2 (Define personas) can run in parallel → T3 (Develop messaging, blocked by T1+T2) → T4 (Channel strategy, blocked by T3) → T5 (Creative briefs, blocked by T3+T4). T5 waits for both T3 and T4. Pattern: research in parallel, synthesis after." },
        { id: 24, question: "What is the key distinction between Tasks and Progress Files?", options: { A: "Tasks are digital; Progress Files are physical documents", B: "Tasks = manage WHAT (action items, dependencies, sequencing). Progress Files = document WHY (context, discoveries, decisions, reasoning). Use both together.", C: "Tasks for developers; Progress Files for managers", D: "Tasks are automated; Progress Files are manual" }, correct: "B", explanation: "Tasks vs Progress Files: Tasks = WHAT (action items: complete auth module, fix bug, deploy feature — with dependencies and sequencing). Progress Files = WHY (context: why auth module needs refactoring, what approaches were tried, decisions made, constraints discovered). Together: Tasks manage execution; Progress Files preserve institutional knowledge." },
        { id: 25, question: "Developer runs /clear in the middle of a complex project with 15 tasks. What happens to the tasks?", options: { A: "All 15 tasks are deleted — /clear wipes everything", B: "Tasks persist on filesystem (~/.claude/tasks/) — /clear only clears conversation context, not task storage", C: "Tasks are paused but lose their dependencies", D: "Tasks are preserved only if explicitly saved before /clear" }, correct: "B", explanation: "/clear only clears conversation context, not task filesystem. Tasks remain at ~/.claude/tasks/ with all states, dependencies, and progress. Developer resumes: reads task list (Ctrl+T or ask Claude), identifies next actionable item, continues work. Plan-Clear-Execute pattern: /clear is a feature, not a problem." },
        { id: 26, question: "Team member asks 'Can we share the project task list across multiple developers?' What is the solution?", options: { A: "Not possible — Tasks are tied to individual Claude Code sessions", B: "CLAUDE_CODE_TASK_LIST_ID=project-alpha: both developers launch Claude with same environment variable, accessing shared task list for coordination", C: "Export tasks to JSON and share manually", D: "Use Git to synchronize ~/.claude/tasks/ directory" }, correct: "B", explanation: "Cross-team task sharing: CLAUDE_CODE_TASK_LIST_ID=project-alpha claude — both developers use same task list ID. Same task structure, shared status (Developer A marks Task 2 complete → Developer B's session sees it complete). Enables parallel work on independent tasks with shared coordination through the task dependency graph." },
        { id: 27, question: "Developer's 'Address feedback' task has been 'in progress' for 3 days without completing. What is the root cause and fix?", options: { A: "Too complex — split into multiple sub-tasks", B: "Vague task failure mode — 'Address feedback' has no completion criteria. Fix: 'Incorporate CFO's 3 budget comments on slides 4, 7, 12.' Task is either done (3 slides updated) or not.", C: "Task too old — delete and recreate", D: "Should have been a progress file entry, not a task" }, correct: "B", explanation: "Vague tasks never complete — 'done' is undefined. 'Address feedback' could mean anything, so it's always partially true. Fix: make Concrete (specific deliverable), Verifiable (clear completion criteria), Completable (30-90 min). 'Incorporate CFO's three budget comments on revenue projections (slides 4, 7, 12)' is done when those three slides are updated." },
        { id: 28, question: "New team member joins a 3-week project. How do Tasks and Progress Files together enable fast onboarding?", options: { A: "New member reads through all conversation history", B: "Tasks show WHAT remains (current state, dependencies, priority), Progress Files show WHY (decisions made, approaches tried, constraints discovered) — together provide complete project state without conversation history", C: "New member starts fresh without prior context", D: "Team lead exports and emails current state" }, correct: "B", explanation: "Together: Tasks (WHAT) show project state instantly (Ctrl+T: 8 complete, 3 in-progress, 4 not started, dependencies), Progress Files (WHY) show context (week 1: chose PostgreSQL over MongoDB because of JSONB query requirements, week 2: auth refactor revealed session token security issue). New member is productive in 15 minutes, not 3 days." },
        { id: 29, question: "What does 'Concrete' mean in Task Decomposition Principles for tasks?", options: { A: "Using concrete (non-abstract) programming languages", B: "Task has specific deliverables — not 'improve performance' but 'reduce API response time from 500ms to under 200ms on the /users endpoint'", C: "Written in plain English without jargon", D: "Must be executable by AI without human input" }, correct: "B", explanation: "Concrete = specific deliverables. 'Improve performance' (vague) vs 'Reduce /users API from 500ms to <200ms' (concrete). Concrete tasks are: unambiguous (done is defined), executable (Claude knows exactly what to do), verifiable (can measure completion). The 4 criteria: Concrete, Verifiable, Completable (30-90 min), Sequenced (respects dependencies)." },
        { id: 30, question: "Project is at 75% context. Developer hasn't created tasks yet. According to Plan-Clear-Execute, what should they do before running /clear?", options: { A: "Run /clear immediately — context is too full", B: "Phase 1 first: create complete task structure capturing remaining work, dependencies, and decisions BEFORE running /clear — otherwise plan is lost with context", C: "Export conversation history before clearing", D: "Create a progress file and then /clear" }, correct: "B", explanation: "Plan-Clear-Execute order matters: ALWAYS Plan before Clear. At 75% (approaching Orange zone), create task structure first: remaining work items, dependency graph, key decisions discovered. Then /clear safely — task structure persists on filesystem. Running /clear without planning = losing roadmap and needing 30+ minutes to reconstruct context." }
      ]
    },
    {
      id: 5,
      title: "The Two-Way Problem — Getting Tacit Knowledge In and Out",
      mcqs: [
        {
          id: 1,
          question: "What is the 'Two-Way Problem' in AI collaboration?",
          options: {
            A: "Two-way communication between human and AI in real-time",
            B: "Direction 1: Professional → AI (transferring tacit knowledge); Direction 2: AI → Professional (extracting understanding from AI output). Both directions must work for effective collaboration.",
            C: "Two ways to format prompts: structured and unstructured",
            D: "Two ways to deploy AI: cloud and on-premise"
          },
          correct: "B",
          explanation: "The Two-Way Problem: Direction 1 (Professional → AI) = transferring tacit knowledge that documentation doesn't capture. Direction 2 (AI → Professional) = extracting understanding from AI output — most professionals focus heavily on Direction 1 while neglecting Direction 2. Both directions must be solved for genuine collaboration."
        },
        {
          id: 2,
          question: "What is tacit knowledge and why is it the quality differentiator?",
          options: {
            A: "Knowledge that is explicitly documented in manuals",
            B: "Unwritten expertise professionals carry — micro-decisions, preferences, historical incidents — that documentation doesn't capture but shapes all expert practice",
            C: "Knowledge shared among a team through regular meetings",
            D: "Knowledge that can be learned from reading books"
          },
          correct: "B",
          explanation: "Tacit knowledge = unwritten expertise professionals carry but never document: judge preferences for brief format (legal), client dislikes for specific buzzwords (marketing), high-risk codebase areas (software), actual vs. formal decision-making authority (consulting). This is 'the quality differentiator separating expert from generic AI.'"
        },
        {
          id: 3,
          question: "Why do 'Examples Over Rules' encode preferences better?",
          options: {
            A: "Examples take less space than explicit rules in CLAUDE.md",
            B: "Rules are ambiguous — examples provide concrete patterns showing what good looks like AND what to avoid. AI matches patterns from examples more reliably than interpreting abstract rules.",
            C: "Examples are processed faster by the model",
            D: "Rules require legal review; examples can be added freely"
          },
          correct: "B",
          explanation: "Strategy 2 (Encoded Preferences): 'Rules are ambiguous; examples provide concrete patterns.' Show what good looks like AND what to avoid with explanation. An abstract rule 'write concise emails' is ambiguous. Three example emails with notes 'this is too long because...' and 'this is good because...' gives the AI concrete patterns to match."
        },
        {
          id: 4,
          question: "What are the four stages of the Memory Injection-Reasoning-Distillation-Consolidation Lifecycle?",
          options: {
            A: "Learn, Apply, Review, Improve",
            B: "Inject (render saved memories as context at session start) → Reason (use memories throughout session) → Distill (capture new preferences during conversation) → Consolidate (merge new memories into storage after session)",
            C: "Read, Write, Execute, Delete",
            D: "Plan, Build, Test, Deploy"
          },
          correct: "B",
          explanation: "The Memory Lifecycle: 1) Inject — render saved memories as context at session start; 2) Reason — agent uses memories throughout the session to make better decisions; 3) Distill — capture new preferences and lessons learned during the conversation; 4) Consolidate — merge new memories into persistent storage after session ends."
        },
        {
          id: 5,
          question: "What is 'Memory Scoping' and what is the key rule?",
          options: {
            A: "Limiting memory to the last 10 conversations",
            B: "Categorizing memories as Global (affects all future sessions) vs. Session (current task only). Key rule: 'Should this affect future sessions?' Over-globalizing creates noise; under-globalizing causes repetition.",
            C: "Encrypting sensitive memories for security",
            D: "Dividing memory between short-term and long-term storage systems"
          },
          correct: "B",
          explanation: "Memory Scoping: Global Memory = 'client prefers formal tone, always cite primary sources, use Oxford comma' — should persist across all future sessions. Session Memory = 'current task details, decisions made today, deadline information' — relevant only now. Key rule: 'Should this affect future sessions?' Over-globalizing creates noise; under-globalizing causes repetition."
        },
        {
          id: 6,
          question: "What is the 'Rubber Duck Test' for extracting understanding from AI output?",
          options: {
            A: "A debugging technique where you explain code to a rubber duck toy",
            B: "After AI creates significant work, explain it back in your own words; request AI correct any gaps in your understanding — ensuring genuine comprehension, not just acceptance",
            C: "A quality test where AI evaluates its own output quality",
            D: "A stress test that sends rubber duck emoji patterns to test parsing"
          },
          correct: "B",
          explanation: "The Rubber Duck Test (Strategy 4 for Direction 2): after AI creates significant work, explain it back in your own words. Request AI correct gaps. If you can explain it accurately, you understand it. If you can't, you've identified exactly what needs clarification before proceeding — preventing the 'acceptance without understanding' failure mode."
        },
        {
          id: 7,
          question: "What is 'Structured Output' (Strategy 2 for Direction 2) and what does it include?",
          options: {
            A: "Requiring all AI output in JSON format",
            B: "Requesting work products accompanied by: Summary (what was created, key decisions), Components (function and rationale), Review notes, Future considerations",
            C: "Using templates that AI must fill in",
            D: "Requiring AI to use bullet points and numbered lists"
          },
          correct: "B",
          explanation: "Structured Output requests work accompanied by: Summary (what was created and key decisions made), Components (what each part does and why), Review notes (what needs human verification), Future considerations (how this might need to change). This forces AI to externalize its reasoning, making the output auditable and understandable."
        },
        {
          id: 8,
          question: "How does 'Progressive Review' help extract understanding from AI output?",
          options: {
            A: "Progressively increasing the complexity of AI tasks",
            B: "Breaking complex work into chunks, reviewing and discussing each before proceeding — building understanding sequentially rather than reviewing a finished product you don't fully understand",
            C: "Reviewing AI code with progressively stricter linting rules",
            D: "A technique for training AI models on human feedback"
          },
          correct: "B",
          explanation: "Progressive Review (Strategy 3 for Direction 2): break complex work into chunks (Section 1, then discuss; Section 2, then discuss; etc.). Each chunk builds on the understanding of the previous. This prevents the alternative: reviewing a complete 50-page document you don't fully understand — forcing acceptance of work you can't evaluate."
        },
        {
          id: 9,
          question: "What tacit knowledge is specific to the legal domain according to the lesson?",
          options: {
            A: "Knowledge of common legal frameworks and precedents",
            B: "Judge preferences for brief format, opposing counsel patterns, and problematic clauses from past disputes",
            C: "Standard contract templates used in the industry",
            D: "Knowledge of billing rates and client management"
          },
          correct: "B",
          explanation: "Legal tacit knowledge: judge preferences for brief format (some judges hate footnotes; others require them), opposing counsel patterns (knowing this attorney tends to exploit clause X in litigation), problematic clauses from past disputes (that indemnification language cost the firm $500K in court). This knowledge transforms generic legal AI into expert legal AI."
        },
        {
          id: 10,
          question: "What is the key principle distinguishing expert AI from generic AI?",
          options: {
            A: "Expert AI uses larger models with more parameters",
            B: "Tacit knowledge is the quality differentiator — the same model becomes 'expert' when it has access to domain-specific unwritten expertise that can't be found in public documentation",
            C: "Expert AI has more computing resources allocated to it",
            D: "Expert AI is fine-tuned on proprietary datasets"
          },
          correct: "B",
          explanation: "Key Principle 1: 'Tacit knowledge is the quality differentiator separating expert from generic AI.' Two organizations using identical AI models produce dramatically different results — the organization that successfully transferred their experts' tacit knowledge (micro-decisions, historical patterns, unstated preferences) gets expert-quality output; the other gets generic output."
        },
        {
          id: 11,
          question: "Your law firm uses the same AI model as competitors but produces superior briefs. According to the Two-Way Problem, what is your differentiator?",
          options: {
            A: "You have a better prompt library",
            B: "You successfully transferred partners' tacit knowledge (judge preferences, opposing counsel patterns, clause risk assessments) to the AI — Direction 1 (Professional → AI) is solved",
            C: "You use more expensive AI subscriptions",
            D: "You have more lawyers reviewing output"
          },
          correct: "B",
          explanation: "The differentiator is tacit knowledge transfer (Direction 1). Same model + your partners' unwritten expertise (judge preferences, opposing counsel patterns, clause risks) = superior output. Competitors using the same model without tacit knowledge get generic results."
        },
        {
          id: 12,
          question: "AI generates a 50-page legal analysis. You accept it without reading because 'AI is reliable.' According to Direction 2 (AI → Professional), what failure mode is this?",
          options: {
            A: "No failure — trusting AI output is efficient",
            B: "'Acceptance without understanding' — you didn't extract understanding from the output. Fix: use Rubber Duck Test (explain it back), Structured Output (summary + components), or Progressive Review (chunk by chunk)",
            C: "The AI should have generated a shorter document",
            D: "You should have used a different AI model"
          },
          correct: "B",
          explanation: "Direction 2 failure: accepting output without understanding. Strategies to fix: Rubber Duck Test (explain it back to verify comprehension), Structured Output (AI provides summary + components + review notes), Progressive Review (discuss each chunk before proceeding). These ensure genuine understanding, not just acceptance."
        },
        {
          id: 13,
          question: "Your CLAUDE.md says 'Write concise emails' but AI still writes long emails. According to 'Examples Over Rules', what is the problem?",
          options: {
            A: "Claude doesn't understand 'concise'",
            B: "Abstract rules are ambiguous. Fix: provide 3 example emails with notes 'this is too long because...' and 'this is good because...' — AI matches patterns from examples more reliably than interpreting abstract rules",
            C: "The rule should be in a Skill instead",
            D: "You need to fine-tune the model"
          },
          correct: "B",
          explanation: "'Write concise emails' is ambiguous (what length? what structure?). Examples provide concrete patterns: show what good looks like AND what to avoid with explanation. AI matches patterns from examples more reliably than interpreting abstract rules."
        },
        {
          id: 14,
          question: "You're working on a 3-day project. Session 1 captured client preferences for 'formal tone, Oxford comma, primary source citations.' Session 2 starts fresh. According to Memory Scoping, how do you preserve this?",
          options: {
            A: "Re-explain preferences at the start of Session 2",
            B: "Save as Global Memory — 'client prefers formal tone, Oxford comma, primary sources' should persist across all future sessions. Key rule: 'Should this affect future sessions?' If yes, Global; if no, Session",
            C: "Add to CLAUDE.md",
            D: "Email the preferences to the team"
          },
          correct: "B",
          explanation: "Memory Scoping: Global Memory = affects all future sessions (client preferences like tone, citation style). Session Memory = current task only (deadline, specific task details). Key rule: 'Should this affect future sessions?' Over-globalizing creates noise; under-globalizing causes repetition."
        },
        {
          id: 15,
          question: "Marketing team uses AI to create campaign content. They provide abstract rules ('be creative, on-brand, engaging') but get generic output. According to tacit knowledge principles, what's missing?",
          options: {
            A: "Better AI models",
            B: "Unwritten expertise: client's brand voice nuances, past campaign performance data, audience segment preferences, competitor positioning — the micro-decisions that shape expert marketing",
            C: "More detailed prompts",
            D: "Human review of all output"
          },
          correct: "B",
          explanation: "Tacit knowledge = unwritten expertise: brand voice nuances ('we avoid these buzzwords'), past campaign performance ('this headline style converted 3x better'), audience preferences ('Segment A responds to urgency, Segment B to social proof'). This transforms generic AI into expert marketing AI."
        },
        { id: 16, question: "What is tacit knowledge and how does it differ from documented knowledge?", options: { A: "Tacit knowledge is classified information requiring security clearance", B: "Unwritten expertise professionals carry — micro-decisions, preferences, historical incidents — that documentation doesn't capture but shapes all expert practice", C: "Knowledge that is too technical to explain in writing", D: "Knowledge gained only through academic training programs" }, correct: "B", explanation: "Tacit knowledge: unwritten expertise (judge preferences, client dislikes, high-risk codebase areas, political sensitivities) that shapes professional practice but never appears in documentation. Documentation captures what someone thought to write down — tacit knowledge is the unstated expertise built through experience. This gap is why AI needs active knowledge transfer, not just document uploads." },
        { id: 17, question: "What is Direction 2 (AI → Professional) and why do most professionals neglect it?", options: { A: "AI teaching professionals new skills they don't have", B: "Extracting understanding from AI output — most professionals focus on Direction 1 (transferring knowledge to AI) while accepting AI output without genuinely understanding it", C: "AI correcting professional mistakes automatically", D: "AI reporting professional performance to managers" }, correct: "B", explanation: "Direction 2 (AI → Professional): extracting understanding from what AI creates. Most professionals heavily invest in Direction 1 (giving AI good instructions) while neglecting Direction 2 (understanding what comes back). Result: AI produces sophisticated work that professionals accept without truly understanding, creating a 'black box' where errors go undetected." },
        { id: 18, question: "What is Strategy 1 for Getting Knowledge IN (Professional → AI)?", options: { A: "Upload all company documents to the AI", B: "Structured Context Documents — document not just WHAT but WHY: historical events, stakeholder considerations, non-negotiable preferences that shaped current practice", C: "Hire AI trainers to interview experts", D: "Use the AI for 6 months until it learns patterns" }, correct: "B", explanation: "Strategy 1 (Getting IN): Structured Context Documents — go beyond documenting procedures. Include: historical events ('we switched from MongoDB to PostgreSQL after the 2023 migration failure'), stakeholder considerations ('the CFO values risk quantification over opportunity framing'), non-negotiable preferences ('never use this vendor due to 2022 contract dispute'). Context is gold." },
        { id: 19, question: "Why do 'Examples Over Rules' (Strategy 2) work better for encoding tacit preferences?", options: { A: "Examples are shorter than rules, consuming fewer tokens", B: "Rules are ambiguous (AI interprets 'concise' differently); examples provide concrete patterns showing what good looks like AND what to avoid — AI matches patterns more reliably than interpreting abstract rules", C: "Rules require legal review; examples don't", D: "AI can store examples in memory but not rules" }, correct: "B", explanation: "Examples > Rules: 'Write concise emails' is ambiguous (what length?). Three example emails with annotations ('too long because...', 'perfect because...', 'avoid this opening because...') provide concrete patterns. AI matches patterns through training — give it examples of exactly the output you want, not vague rules about qualities of output." },
        { id: 20, question: "What is the four-phase Memory Lifecycle (Injection-Reasoning-Distillation-Consolidation)?", options: { A: "Upload-Process-Review-Archive", B: "Inject (render memories as context at session start) → Reason (agent uses throughout session) → Distill (capture new preferences during conversation) → Consolidate (merge into storage after session)", C: "Create-Store-Retrieve-Delete", D: "Input-Transform-Output-Validate" }, correct: "B", explanation: "Memory Lifecycle: (1) Inject: saved memories rendered as context at session start (AI has preferences from prior sessions), (2) Reason: agent uses memories throughout session, (3) Distill: capture new preferences discovered during session ('user prefers bullet points over paragraphs for updates'), (4) Consolidate: merge new memories into storage for next session's injection." },
        { id: 21, question: "What is the distinction between Global Memory and Session Memory?", options: { A: "Global stores code; Session stores conversation history", B: "Global Memory: persistent across all future sessions (client prefers formal tone, Oxford comma). Session Memory: current task only (today's deadline, this session's decisions). Rule: 'Should this affect future sessions?'", C: "Global Memory is encrypted; Session is plain text", D: "Global is stored in cloud; Session is stored locally" }, correct: "B", explanation: "Memory Scoping: Global = affects future sessions (client tone preferences, citation standards, Oxford comma usage — constant preferences). Session = current task only (today's deadline, decisions made today, this project's specific context). Over-globalizing creates noise (every preference floods every session); under-globalizing causes repetition (re-explaining same preferences)." },
        { id: 22, question: "What happens when you 'over-globalize' memories?", options: { A: "Storage costs increase significantly", B: "Every session is flooded with irrelevant memories, creating context noise — session-specific decisions from months ago appear in unrelated projects", C: "Memory system crashes due to storage limits", D: "AI refuses to load excessive memories" }, correct: "B", explanation: "Over-globalizing: saving session-specific decisions as global memories floods future sessions with irrelevant context. 'Current task: fix auth bug' saved globally appears in marketing campaign sessions, financial analysis sessions — noise that consumes attention budget. Key rule: 'Should this affect FUTURE sessions?' If no, save as Session or don't save." },
        { id: 23, question: "What is Strategy 1 for Getting Understanding OUT (AI → Professional)?", options: { A: "Ask AI to simplify its output", B: "Require Explanations — before deliverable creation, request AI explain intent, approach, decisions, concerns, and future guidance", C: "Have a second AI review the output", D: "Use AI output only for low-stakes tasks" }, correct: "B", explanation: "Strategy 1 (Getting OUT): Require Explanations. Before AI creates deliverable, ask: 'Explain your intended approach, key decisions you'll make, concerns about the task, and what I should review carefully.' This surfaces: assumptions (that might be wrong), risks (that need human judgment), and gaps (in the briefing) before the work is done rather than after." },
        { id: 24, question: "What are the four components of Structured Output (Strategy 2 for Getting OUT)?", options: { A: "Title, abstract, body, conclusion", B: "Summary (what created, key decisions), Components (function and rationale of each part), Review notes (what to verify), Future considerations (next steps, risks)", C: "Input, process, output, validation", D: "Problem, approach, solution, result" }, correct: "B", explanation: "Structured Output: AI provides (1) Summary (what was created, key decisions made), (2) Components (what each part does and why it's structured that way), (3) Review notes (what to verify, flag as uncertain, or where human judgment matters), (4) Future considerations (next steps, risks, dependencies). Transforms black-box output into transparent work product." },
        { id: 25, question: "What is Progressive Review (Strategy 3) and when is it most valuable?", options: { A: "Reviewing AI model versions before upgrading", B: "Breaking complex work into chunks — complete Section 1, discuss and verify understanding, then Section 2 — building comprehension sequentially for complex deliverables", C: "Reviewing progress reports from the AI daily", D: "Gradually giving AI more challenging tasks over time" }, correct: "B", explanation: "Progressive Review: for complex work (50-page analysis, comprehensive code audit, multi-section report), break into chunks. Complete Section 1 → discuss and verify → Section 2 → discuss and verify. Builds genuine understanding sequentially, identifies misalignments early (not in final deliverable), ensures each section makes sense before building on it." },
        { id: 26, question: "What is the Rubber Duck Test for extracting understanding from AI output?", options: { A: "Testing AI by asking rubber duck (child-friendly) questions", B: "After AI creates significant work, explain it back in your own words — request AI correct gaps. If you can explain it accurately, you understand it. If not, you've identified what needs clarification.", C: "Using a physical rubber duck to think through AI output", D: "An automated test that verifies AI output correctness" }, correct: "B", explanation: "Rubber Duck Test (Direction 2, Strategy 4): after AI creates significant work, explain it back to the AI in your own words. 'Let me explain back what I understand you created: [explanation].' AI corrects misunderstandings. If you can explain it accurately = genuine understanding. If you can't = identified gaps before accepting output. Prevents 'acceptance without understanding.'" },
        { id: 27, question: "Why are 'examples' particularly effective for encoding professional preferences into AI?", options: { A: "Examples are easier to generate than formal rules", B: "AI learned through pattern matching on examples during training — concrete examples of good/bad output leverage this same mechanism more precisely than abstract rules", C: "Examples require no technical knowledge to create", D: "Examples are shorter and consume fewer instruction budget tokens" }, correct: "B", explanation: "Examples work because AI learned through pattern matching on examples. Rules ('be concise') require AI to interpret an abstraction. Examples ('this email is good because it has one clear ask, under 100 words, action-oriented subject; this email fails because it buries the request in paragraph 3') provide the same pattern the AI learned from — concrete input/output pairs with explanations." },
        { id: 28, question: "What tacit knowledge in software development specifically shapes AI output quality?", options: { A: "Knowledge of programming syntax and APIs", B: "Architectural decision rationales, high-risk codebase areas, historical incidents shaping design (why auth module was rewritten, which legacy code is fragile)", C: "Code review best practices from documentation", D: "Standard testing frameworks and methodologies" }, correct: "B", explanation: "Software tacit knowledge: (1) Architectural decision rationales (why PostgreSQL not MongoDB — performance under concurrent writes was the issue), (2) High-risk codebase areas ('the payment module has 3 undocumented edge cases from 2021 refactor'), (3) Historical incidents ('the auth rewrite in 2023 broke SSO for 2 weeks — here's why'). Transforms generic coding AI into project-aware expert." },
        { id: 29, question: "Legal partner wants AI to write briefs but only provides case files, not their 15 years of judicial relationship knowledge. Which direction of the Two-Way Problem is unsolved?", options: { A: "Direction 2 — the partner isn't reading AI output carefully", B: "Direction 1 (Professional → AI) — tacit knowledge (judge preferences, opposing counsel patterns, risk-flagged clauses) wasn't transferred. AI has documents but not the expert context shaping their interpretation.", C: "Both directions equally — this is a comprehensive failure", D: "Neither — case files are sufficient for legal AI" }, correct: "B", explanation: "Direction 1 failure: partner provided documented knowledge (case files) but not tacit knowledge (judge X prefers economic arguments; opposing attorney Y exploits indemnification clauses; clause pattern Z has triggered disputes in 4 past cases). AI processes case files generically. With tacit knowledge, AI produces partner-quality briefs. Without it: competent generic work." },
        { id: 30, question: "Developer accepts AI's 500-line code refactor without understanding it. Tests pass. They deploy. Which Direction 2 failure mode occurred and what's the risk?", options: { A: "No failure — tests passing validates the code", B: "Acceptance without understanding — passing tests don't validate architectural decisions. If the code fails in production edge cases, the developer can't debug what they don't understand. Use Rubber Duck Test or Structured Output before deploying.", C: "This is efficient use of AI — trust the output", D: "Only a risk if the AI model has known bugs" }, correct: "B", explanation: "Acceptance without understanding: tests validate behavior, not reasoning. Developer doesn't know: why certain patterns were chosen, what edge cases the refactor handles differently, what assumptions the new code makes. When production edge case fails at 2 AM, developer can't debug unfamiliar code. Rubber Duck Test first: 'Explain what you did in auth module and why you changed the session handling.' If developer can't explain it after AI corrects them, they don't truly understand it." }
      ]
    },
    {
      id: 6,
      title: "Context Lifecycle — Knowing When to Reset vs. Compress",
      mcqs: [
        {
          id: 1,
          question: "What are the five Context Zones and their utilization thresholds?",
          options: {
            A: "Tiny (0–20%), Small (20–40%), Medium (40–60%), Large (60–80%), Full (80–100%)",
            B: "Green (0–50%, work freely), Yellow (50–70%, monitor), Orange (70–85%, /compact NOW), Red (85–95%, emergency /compact), Black (95%+, /clear required)",
            C: "Safe (0–33%), Caution (33–66%), Danger (66–100%)",
            D: "Available (0–80%), Warning (80–90%), Critical (90–100%)"
          },
          correct: "B",
          explanation: "The five zones: Green (0–50% = work freely), Yellow (50–70% = monitor and prepare), Orange (70–85% = /compact NOW, quality degradation starting), Red (85–95% = emergency /compact, critical capacity), Black (95%+ = /clear required, near absolute limit). Each zone triggers a different action."
        },
        {
          id: 2,
          question: "When should you use /clear instead of /compact?",
          options: {
            A: "Always use /clear — it's more thorough than /compact",
            B: "Use /clear when: task is complete, context is poisoned (outdated/wrong directions), switching to unrelated work, in Black zone (95%+), or session is 3+ days old",
            C: "Use /clear only when Claude Code crashes",
            D: "Use /clear only when the context window is 100% full"
          },
          correct: "B",
          explanation: "Use /clear when: task is complete (nothing to preserve), context is poisoned (outdated decisions, wrong directions that would mislead continuing work), switching to unrelated work, in Black zone (95%+), or session is 3+ days old. Use /compact when: same task continues and decisions need preservation."
        },
        {
          id: 3,
          question: "What is custom compaction and how does it work?",
          options: {
            A: "Manually deleting individual messages from the conversation",
            B: "Providing explicit instructions to /compact about what to preserve and discard: /compact [Preserve: X, Y, Z] [Discard: A, B, C] [Focus: current task]",
            C: "Compressing code files to reduce their token count",
            D: "Running /compact multiple times in succession"
          },
          correct: "B",
          explanation: "Custom compaction: /compact [Preserve: key decisions, architecture choices, constraints discovered] [Discard: rejected options explored, verbose explanations, background research]. This intelligent compaction preserves decision rationale (crucial for continuing work) while discarding exploration noise (irrelevant to continuing the task)."
        },
        {
          id: 4,
          question: "What is the '3-Day Rule' for context sessions?",
          options: {
            A: "Always start a new project every 3 days to avoid context staleness",
            B: "Conversations have a ~3–4 day viability window; signs session has expired: can't remember what work was being done, context references changed files, resuming takes longer than starting fresh",
            C: "Run /compact every 3 days regardless of context usage",
            D: "Commit code every 3 days to create restore points"
          },
          correct: "B",
          explanation: "The 3-Day Rule: conversations have a viability window of approximately 3–4 days. Signs a session has expired: you can't remember what work was being done, context references files that have changed, or resuming the session takes longer than starting fresh. Exception: sessions with excellent progress files can extend viability significantly."
        },
        {
          id: 5,
          question: "What is the 'Save Checkpoint Pattern'?",
          options: {
            A: "Saving a backup of CLAUDE.md before each major session",
            B: "Work in Green/Yellow zone → Make meaningful progress → Save checkpoint (git commit, save document) → Check /context → If Orange+: /compact → Continue from checkpoint",
            C: "Creating a restore point in the conversation every 30 messages",
            D: "Exporting the conversation to a file at regular intervals"
          },
          correct: "B",
          explanation: "Save Checkpoint Pattern: 1) Work in Green/Yellow zone, 2) Make meaningful progress, 3) Save checkpoint (git commit, save document, export notes — preserve the actual output), 4) Check /context, 5) If Orange+: run /compact, 6) Continue from checkpoint. The checkpoint ensures no work is lost if /compact summation isn't perfect."
        },
        {
          id: 6,
          question: "What Marketing /compact template should preserve and discard?",
          options: {
            A: "Preserve all brand guidelines; Discard all creative work",
            B: "Preserve: final positioning statement, three audience segments, messaging hierarchy. Discard: rejected tagline brainstorming.",
            C: "Preserve: competitor analysis; Discard: customer interviews",
            D: "Preserve: everything tagged as important; Discard: all drafts"
          },
          correct: "B",
          explanation: "Marketing compaction template: 'Preserve: final positioning statement, three audience segments, messaging hierarchy. Discard: rejected tagline brainstorming.' The final decisions (positioning, audiences, hierarchy) are needed for continuing work. The exploration noise (brainstorming, rejected options) can be discarded without loss."
        },
        {
          id: 7,
          question: "What are the three session resume commands in Claude Code?",
          options: {
            A: "claude --open, claude --load, claude --restore",
            B: "claude --continue (resume most recent), claude --resume (choose from list), /resume (switch sessions within current conversation)",
            C: "claude --session, claude --history, claude --reload",
            D: "claude --last, claude --pick, /switch"
          },
          correct: "B",
          explanation: "Session resume commands: claude --continue = resume most recent session automatically (fastest for continuing yesterday's work), claude --resume = show list of recent sessions to choose from (when you need to pick a specific past session), /resume = switch sessions from within an active conversation (jumping between parallel work streams)."
        },
        {
          id: 8,
          question: "Why is context quality degradation a problem specifically starting in the Orange zone (70–85%)?",
          options: {
            A: "The model runs out of processing power at 70% utilization",
            B: "At 70%+ utilization, the effective attention budget for new content decreases, the middle content (where accumulated work lives) gets less attention, and working memory starts being compressed automatically",
            C: "API rate limits activate at 70% context usage",
            D: "Model responses become slower at 70% context usage"
          },
          correct: "B",
          explanation: "In the Orange zone (70–85%), quality degradation starts because: the effective attention budget for new queries decreases (less room for fresh reasoning), the accumulated work in the middle of context receives less attention (U-curve effect), and autocompact may start summarizing context in ways that lose nuance. Acting at Orange prevents degradation rather than recovering from it."
        },
        {
          id: 9,
          question: "What is the exception to the 3-Day Rule that allows longer sessions?",
          options: {
            A: "Using a paid premium Anthropic subscription",
            B: "Sessions with excellent progress files can extend viability — the progress file provides the context that the degraded session can no longer reliably provide",
            C: "Running /compact daily to refresh the context",
            D: "Using the Gemini 3 Pro model with its 2M token window"
          },
          correct: "B",
          explanation: "Exception to the 3-Day Rule: sessions with excellent progress files can extend viability significantly. Why: the progress file provides stable external memory (current task, decisions, discoveries) that compensates for the session's aging/compressed context. The progress file answers 'where were we?' even when the session can't reliably remember."
        },
        {
          id: 10,
          question: "What should you encode in CLAUDE.md to set default compaction behavior for every session?",
          options: {
            A: "The target context utilization percentage",
            B: "Custom compaction instructions specifying what to always preserve (key decisions, constraints, referenced files) and what to always discard (rejected options, verbose explanations, background research)",
            C: "The number of messages before autocompact triggers",
            D: "A list of files that should never be summarized"
          },
          correct: "B",
          explanation: "Encode in CLAUDE.md: 'When compacting, always preserve: all key decisions with rationale, current task definition and acceptance criteria, constraints discovered, documents/files referenced or modified, client/stakeholder preferences. When compacting, feel free to discard: exploration of rejected options, verbose explanations, background research.' This eliminates the need to specify compaction instructions manually each time."
        },
        {
          id: 11,
          question: "You're 4 hours into a session. Context is at 72% (Orange zone). According to the five Context Zones, what should you do?",
          options: {
            A: "Keep working until 85% — Orange is still safe",
            B: "/compact NOW — Orange zone (70-85%) means quality degradation is starting. Proactive compaction prevents emergency measures at Red (85-95%)",
            C: "/clear immediately — Orange means start over",
            D: "Ignore it — only Black zone (95%+) requires action"
          },
          correct: "B",
          explanation: "Orange zone (70-85%) = /compact NOW. Quality degradation is starting: attention budget decreases, middle content gets less attention, autocompact may lose nuance. Acting at Orange prevents degradation rather than recovering from it at Red/Black."
        },
        {
          id: 12,
          question: "Your session is 5 days old. You can't remember what work was being done, context references changed files, resuming takes longer than starting fresh. According to the 3-Day Rule, what should you do?",
          options: {
            A: "Keep working — the session is still viable",
            B: "/clear and start fresh — session has expired. Signs: can't remember work, context references changed files, resuming takes longer than starting fresh",
            C: "Run /compact to refresh the session",
            D: "Export and manually recreate context"
          },
          correct: "B",
          explanation: "3-Day Rule: conversations have ~3-4 day viability window. Signs of expiry: can't remember work, context references changed files, resuming takes longer than fresh start. Exception: sessions with excellent progress files can extend viability."
        },
        {
          id: 13,
          question: "You're ending a 6-hour session at 68% context. According to the Save Checkpoint Pattern, what should you do before /compact?",
          options: {
            A: "Just run /compact — no checkpoint needed",
            B: "Save checkpoint (git commit, save documents) → Check /context → If Orange+ (70%+): /compact → Continue from checkpoint. Checkpoint ensures no work lost if /compact isn't perfect",
            C: "/clear and start new session",
            D: "Export conversation to file"
          },
          correct: "B",
          explanation: "Save Checkpoint Pattern: 1) Work in Green/Yellow, 2) Make progress, 3) Save checkpoint (git commit, save docs), 4) Check /context, 5) If Orange+: /compact, 6) Continue from checkpoint. Checkpoint ensures no work lost if /compact summation isn't perfect."
        },
        {
          id: 14,
          question: "Marketing session at 80% context. Includes: final positioning (15%), audience segments (20%), messaging hierarchy (15%), rejected tagline brainstorming (30%). According to Marketing /compact template, what to preserve/discard?",
          options: {
            A: "Preserve everything — all content is valuable",
            B: "Preserve: final positioning, audience segments, messaging hierarchy (decisions needed for continuing work). Discard: rejected tagline brainstorming (exploration noise)",
            C: "Preserve only brainstorming — it's creative work",
            D: "Discard everything and start fresh"
          },
          correct: "B",
          explanation: "Marketing compaction: preserve final decisions (positioning, audiences, hierarchy) needed for continuing work. Discard exploration noise (brainstorming, rejected options). Final decisions are work product; brainstorming is exploration that can be discarded without loss."
        },
        {
          id: 15,
          question: "Your team uses three session resume commands. According to Claude Code, when do you use claude --continue vs. claude --resume vs. /resume?",
          options: {
            A: "They're interchangeable — choose based on preference",
            B: "claude --continue = resume most recent (fastest for continuing yesterday's work); claude --resume = choose from list (pick specific past session); /resume = switch sessions within current conversation (jump between parallel work streams)",
            C: "claude --continue = new session; claude --resume = old session; /resume = current session",
            D: "claude --continue = CLI only; claude --resume = GUI only; /resume = both"
          },
          correct: "B",
          explanation: "Session resume commands: claude --continue = resume most recent automatically (fastest for continuing yesterday's work), claude --resume = show list to choose from (pick specific past session), /resume = switch sessions within active conversation (jumping between parallel work streams)."
        },
        { id: 16, question: "What action is appropriate in the Green zone (0-50% context)?", options: { A: "Immediately compact to preserve tokens", B: "Work freely — plenty of room, full attention budget, no compaction needed", C: "Monitor closely and prepare compaction scripts", D: "Use only read-only tools to preserve context" }, correct: "B", explanation: "Green zone (0-50%): work freely. Full attention budget available, all content in context receives proper attention, no compaction needed. This is the ideal productive zone. Goal: monitor context via /context and proactively compact before leaving Green/Yellow zones during natural breakpoints." },
        { id: 17, question: "What distinguishes Yellow zone (50-70%) from Green zone?", options: { A: "Yellow requires immediate /clear", B: "Yellow means approaching threshold — monitor and prepare compaction strategy, but not yet urgent. Identify what to preserve if compaction becomes necessary.", C: "Yellow disables new file access", D: "Yellow triggers automatic compaction" }, correct: "B", explanation: "Yellow zone (50-70%): approaching threshold. Action: monitor (/context check), prepare (identify what to preserve if compaction needed), but don't urgently compact yet. Use this zone to think: 'If I need to /compact here, what matters most?' — so Orange zone compaction is planned, not reactive." },
        { id: 18, question: "What is the Red zone (85-95%) action and why is it 'emergency'?", options: { A: "Red = work faster before hitting limit", B: "Red = emergency /compact — at 85-95%, quality degradation is significant and autocompact may trigger with less control. Act immediately with selective preservation before hitting Black (95%+).", C: "Red = save work and restart machine", D: "Red = upgrade to larger context window model" }, correct: "B", explanation: "Red zone (85-95%): emergency /compact — critical capacity. At this level: autocompact may trigger automatically (losing control over what's preserved), quality is degrading significantly, attention budget is severely constrained. Acting now with selective /compact preserves control over what survives. Waiting for Black (95%+) leaves only /clear." },
        { id: 19, question: "What is the only action available in Black zone (95%+)?", options: { A: "/compact with aggressive settings", B: "/clear is required — at 95%+ the context is at near-absolute limit; autocompact may have already triggered; the only reliable reset is /clear", C: "Increase the context window size", D: "Export conversation and create new session" }, correct: "B", explanation: "Black zone (95%+): /clear required. Context is at near-absolute limit — autocompact may have triggered (with limited control over preservation), quality is severely degraded, new content barely fits. Only reliable option: /clear for fresh start. Prevention: never reach Black zone — proactive /compact at Orange (70-85%) prevents crisis." },
        { id: 20, question: "How do you check current context utilization?", options: { A: "claude --status", B: "/context command — reveals system prompts, MCP tools, memory files, message history, and remaining token budget including utilization percentage", C: "View the token counter in the UI header", D: "claude context --percentage" }, correct: "B", explanation: "/context command: shows current utilization and breakdown. Check every 10 messages when above 50% (Yellow zone). Mandatory check before switching tasks, starting complex analysis, or at natural breakpoints. Utilization percentage determines which zone you're in and what action (if any) to take." },
        { id: 21, question: "What is the /compact command structure for custom compaction instructions?", options: { A: "/compact --preserve X --discard Y", B: "/compact [Preserve: X, Y, Z] [Discard: A, B, C] [Focus: current task]", C: "/compact preserve=X discard=Y focus=Z", D: "/compact 'keep X, remove Y'" }, correct: "B", explanation: "Custom compaction format: /compact [Preserve: X, Y, Z] [Discard: A, B, C] [Focus: current task]. Example: /compact [Preserve: liability clause analysis, flagged sections] [Discard: general contract law principles, background research] [Focus: finishing risk assessment section]. Gives explicit control over what survives the compaction." },
        { id: 22, question: "What does the Legal compaction template preserve and discard?", options: { A: "Preserve general principles; discard specific cases", B: "Preserve: liability clause analysis, indemnification risk assessment, flagged sections list. Discard: general contract law principle discussions.", C: "Preserve all text; discard formatting", D: "Preserve client info; discard legal analysis" }, correct: "B", explanation: "Legal /compact template: Preserve: liability clause analysis (work product), indemnification risk assessment (critical findings), flagged sections list (deliverable items). Discard: general contract law principle discussions (background knowledge, not needed for continuing work). Preserves the analysis; discards the research that informed it." },
        { id: 23, question: "What does the Development compaction template preserve and discard?", options: { A: "Preserve test files; discard implementation", B: "Preserve: modified files list, authentication architecture decisions, JWT implementation rationale. Discard: rejected database option discussions.", C: "Preserve requirements; discard code", D: "Preserve comments; discard code changes" }, correct: "B", explanation: "Development /compact template: Preserve: modified files list (what was changed), authentication architecture decisions (key technical choices), JWT implementation rationale (why this approach). Discard: rejected database option discussions (exploration noise — the decision was made, reasoning documented; alternatives no longer needed)." },
        { id: 24, question: "What are the three session persistence commands and their use cases?", options: { A: "session start, session resume, session end", B: "claude --continue (most recent session, fastest), claude --resume (choose from list of past sessions), /resume (switch sessions within current conversation)", C: "claude resume, claude restart, claude reload", D: "--last (previous), --pick (choose), --switch (current)" }, correct: "B", explanation: "Session persistence: claude --continue = automatically resume most recent session (fastest for daily continuity), claude --resume = show list to select specific past session (when switching between parallel projects), /resume = switch sessions within active conversation (jumping between work streams without restarting)." },
        { id: 25, question: "What are the signs that a session has expired per the 3-Day Rule?", options: { A: "More than 72 hours have passed since session creation", B: "Cannot remember what work was being done, context references changed files, resuming takes longer than starting fresh", C: "Session shows 'expired' status in the UI", D: "AI model was updated since the session started" }, correct: "B", explanation: "3-Day Rule expiry signs: (1) Can't remember what work was being done, (2) context references changed files (stale file references in history), (3) resuming takes longer than starting fresh (15+ minutes explaining context). These indicate session has outlived its usefulness. Exception: sessions with excellent progress files can extend viability." },
        { id: 26, question: "What are the six steps of the Save Checkpoint Pattern?", options: { A: "Save, backup, export, archive, verify, document", B: "Work in Green/Yellow zone → Make meaningful progress → Save checkpoint (git commit, save docs) → Check /context → If Orange+: /compact → Continue from checkpoint", C: "Plan, code, test, review, commit, deploy", D: "Start, work, check, compact, continue, end" }, correct: "B", explanation: "Save Checkpoint Pattern: (1) Work in Green/Yellow zone, (2) Make meaningful progress (don't checkpoint nothing), (3) Save checkpoint (git commit, save document in stable state), (4) Check /context, (5) If Orange+ → /compact, (6) Continue from checkpoint. The checkpoint ensures progress is saved before compaction might lose nuance." },
        { id: 27, question: "You're at 68% context (Yellow zone) and about to start a complex new analysis. Should you /compact first?", options: { A: "No — Yellow zone is safe, continue", B: "Yes — preemptively /compact before the analysis adds significant context. Starting complex work at 68% means hitting Orange (70-85%) quickly, better to start the analysis with clean context.", C: "Wait until 75% before acting", D: "Use /clear to start the analysis fresh" }, correct: "B", explanation: "Yellow zone (68%) before complex work: preemptive /compact is wise. Complex analysis will add substantial context quickly (file reads, reasoning blocks, intermediate results). Starting at 68% means hitting Orange (70-85%) early in the analysis, potentially requiring emergency compaction mid-analysis. Compact before starting = more room for the analysis itself." },
        { id: 28, question: "Context is poisoned — Claude keeps referencing an outdated approach you abandoned 30 turns ago. You're at 45% (Green zone). Which action?", options: { A: "/compact — preserve everything, discard nothing", B: "/clear — context is poisoned (wrong direction, outdated decisions). At 45%, nothing valuable to preserve from the abandoned approach. Fresh start is faster than selective compaction.", C: "Keep working — context poison resolves itself", D: "/compact [Preserve: abandoned approach] [Discard: current work]" }, correct: "B", explanation: "/clear for poisoned context at low utilization: at 45%, there's nothing valuable to preserve from 30 turns of wrong-direction work. /compact would still include the poisoned reasoning in summary. /clear gives genuinely fresh start — and at 45%, the cost is minimal (nothing built up yet worth preserving). Poison is a content problem, not a size problem." },
        { id: 29, question: "Developer is 87% through a complex security audit (Red zone). Should they /compact, /clear, or continue?", options: { A: "Continue — nearly done, push through to completion", B: "/compact [Preserve: all security findings, files reviewed, vulnerabilities flagged] [Discard: exploratory tangents] — preserve the work product, discard exploration", C: "/clear — Red zone requires fresh start", D: "Switch to a new Claude Code session automatically" }, correct: "B", explanation: "Red zone security audit: /compact with careful preservation. 87% through = significant work product in context (vulnerabilities found, files reviewed). /compact [Preserve: security findings, files reviewed, vulnerabilities, recommendations] [Discard: exploratory rabbit holes, background research]. /clear loses all work product. Custom compaction preserves the audit findings while freeing space to finish." },
        { id: 30, question: "Session is 4 days old. Context references a 'src/auth.ts' file that no longer exists (renamed). According to lifecycle principles, what should you do?", options: { A: "Manually update all references to the renamed file", B: "Signs of session expiry (3-Day Rule): context references changed files. /clear and start fresh — rename the session cost (catching up) is less than debugging stale references throughout the session", C: "Continue carefully, manually correcting each stale reference", D: "Run /compact to update file references automatically" }, correct: "B", explanation: "4-day-old session with stale file references = session expired per 3-Day Rule. Context references 'src/auth.ts' (renamed) means the session's understanding of the codebase is stale. Continuing creates: wrong file edits, incorrect import paths, confused analysis. /clear + start fresh with current file structure is faster than hunting stale references throughout the conversation." }
      ]
    },
    {
      id: 7,
      title: "Long-Horizon Work — Progress Files and Session Architecture",
      mcqs: [
        {
          id: 1,
          question: "What is the core problem that the Harness Architecture solves?",
          options: {
            A: "Long files taking too long to load in the editor",
            B: "Without systematic tracking: 30+ minutes wasted re-establishing context when resuming work; repeated efforts; lost decisions. Each session is independent but needs coordination.",
            C: "Network latency causing slow AI responses",
            D: "Multiple developers accidentally working on the same files"
          },
          correct: "B",
          explanation: "The Harness Architecture solves the long-horizon problem: without it, resuming work wastes 30+ minutes re-establishing context, work gets repeated, and decisions are forgotten. The architecture coordinates independent sessions through a shared progress file — each session reads the file, does work, and writes back."
        },
        {
          id: 2,
          question: "What is the Two-Agent Mental Model for long-horizon work?",
          options: {
            A: "Two AI agents work simultaneously on the same task",
            B: "Initializer Agent (first session: breaks project into tasks, creates progress file, makes foundational decisions) and Working Agent (subsequent sessions: reads progress file, selects highest-priority incomplete task, updates before ending)",
            C: "One agent plans; another agent executes — they hand off via a shared file",
            D: "Two humans alternate working with the same AI agent"
          },
          correct: "B",
          explanation: "Two-Agent Mental Model: Initializer Agent (first session) = breaks project into granular tasks, creates initial progress file, makes foundational decisions. Working Agent (subsequent sessions) = reads progress file for current state, selects highest-priority incomplete task, updates progress file before ending. Sessions don't share context — they share the file."
        },
        {
          id: 3,
          question: "What are the seven sections in a properly structured Progress File?",
          options: {
            A: "Introduction, Goals, Timeline, Resources, Risks, Progress, Conclusion",
            B: "Completed, In Progress, Blocked, Not Started, Decisions Made, Known Issues, Session Log",
            C: "Backlog, Doing, Done, Blocked, Cancelled, Deferred, On Hold",
            D: "Feature Requests, Bug Reports, Enhancements, Documentation, Testing, Deployment, Review"
          },
          correct: "B",
          explanation: "Progress File anatomy: Completed (tasks with session indicators), In Progress (current tasks with % and remaining work), Blocked (items awaiting dependencies with blocker named), Not Started (future work), Decisions Made (choices with rationale, session number, rejected alternatives), Known Issues (problems with impact/mitigation), Session Log (narrative summaries)."
        },
        {
          id: 4,
          question: "What is the '10–15 rule' for task decomposition?",
          options: {
            A: "Each task should take 10–15 seconds to explain to AI",
            B: "Create 10–15 granular tasks for approximately 5 hours of work",
            C: "Tasks should have 10–15 lines of description",
            D: "Complete 10–15 tasks per day for optimal productivity"
          },
          correct: "B",
          explanation: "The '10–15 rule': create 10–15 granular tasks for approximately 5 hours of work. This provides sufficient granularity for clear progress tracking while avoiding over-decomposition that creates more coordination overhead than value. Each task should be 30–90 minutes, concrete, verifiable, and completable."
        },
        {
          id: 5,
          question: "What four properties must properly decomposed tasks have?",
          options: {
            A: "Short, Clear, Testable, Documented",
            B: "Concrete (specific deliverables), Verifiable (clear completion criteria), Completable (30–90 minutes), Sequenced (respects dependencies)",
            C: "Assigned, Dated, Estimated, Tracked",
            D: "Independent, Parallel, Automated, Monitored"
          },
          correct: "B",
          explanation: "Task decomposition principles — tasks must be: Concrete (specific deliverables, not vague activities), Verifiable (clear criteria for 'done' — not 'address feedback' but 'incorporate CFO's three budget comments'), Completable (30–90 minutes each), and Sequenced (respects dependencies between tasks)."
        },
        {
          id: 6,
          question: "What is the recommended sample initialization prompt for a new session?",
          options: {
            A: "Continue where we left off",
            B: "'Read my progress file to understand current state, check my working files, then tell me: what was completed, what's in progress, what's blocked, what do you recommend next.'",
            C: "Start from the beginning and redo everything",
            D: "Skip the progress file and just begin the next logical step"
          },
          correct: "B",
          explanation: "Sample initialization prompt: 'Read my progress file to understand current state, check my working files, then tell me: what was completed previously, what's in progress, what's blocked, what do you recommend next.' This prompt ensures the Working Agent reads external state before proceeding — never relying on expired session memory."
        },
        {
          id: 7,
          question: "What is 'Decision Amnesia' as a common failure mode?",
          options: {
            A: "AI forgetting what decisions were made in previous conversations",
            B: "Failing to document decisions explicitly in the progress file — every architectural choice, rejected alternative, and rationale must be recorded because future sessions start with no memory",
            C: "Users forgetting to check the progress file at session start",
            D: "Decisions being overwritten by autocompact"
          },
          correct: "B",
          explanation: "Decision Amnesia: every decision requires explicit documentation because each session starts fresh. If you chose PostgreSQL over MongoDB but don't document WHY, the next session might reverse that decision. The Decisions Made section (with session number, rationale, and rejected alternatives) prevents re-litigating settled architectural questions."
        },
        {
          id: 8,
          question: "What is the Exit Protocol for ending a work session properly?",
          options: {
            A: "Run /clear and close the terminal",
            B: "Checkpoint work (save deliverables in stable condition) + Update progress file (move tasks, document decisions, log session summary). Never end with half-edited work.",
            C: "Commit all changes and tag the release",
            D: "Export the conversation and archive it"
          },
          correct: "B",
          explanation: "Exit Protocol: 1) Checkpoint work — save deliverables in stable condition (git commit, save documents in finalized state); 2) Update progress file — move tasks to correct sections, document decisions made, log session summary. 'Never end with half-edited work scattered throughout files' — the next session starts from the progress file, not from memory."
        },
        {
          id: 9,
          question: "Why does the progress file serve as 'the coordination mechanism' between sessions?",
          options: {
            A: "It runs automatically to schedule the next session",
            B: "Sessions don't share context — they share the file. The file provides stable external memory that persists regardless of session state, making it the single source of truth for project state.",
            C: "It emails team members with updates after each session",
            D: "It interfaces with project management tools like Jira"
          },
          correct: "B",
          explanation: "Key insight: 'The progress file becomes the coordination mechanism. Sessions don't need to share context — they share the file.' The stateless session-to-session problem is solved not by maintaining session state, but by externalizing state into a file that each session reads and writes. The file is the persistent project brain."
        },
        {
          id: 10,
          question: "What does 'Vague tasks that never complete' mean as a failure mode, and what is the fix?",
          options: {
            A: "Tasks with unclear ownership — fix: assign to a specific person",
            B: "Tasks described as vague activities that lack specific completion criteria — fix: specify the exact deliverable ('Incorporate CFO's three budget comments on slides 4, 7, 12' not 'Address feedback')",
            C: "Tasks that were never added to the progress file — fix: always use the initialization prompt",
            D: "Tasks blocked by unresolved dependencies — fix: resolve dependencies before creating the task"
          },
          correct: "B",
          explanation: "Vague tasks failure mode: 'Address feedback' or 'Fix performance' never complete because 'done' is undefined. The fix: specify exactly what done looks like — 'Incorporate CFO's three budget comments on revenue projections (slides 4, 7, and 12).' This task is either done (three specific slides updated) or not done — unambiguous completion criteria."
        },
        {
          id: 11,
          question: "You're resuming a 3-day-old project. According to the Two-Agent Mental Model, what should the Working Agent do first?",
          options: {
            A: "Start coding immediately — momentum is key",
            B: "Read progress file for current state, select highest-priority incomplete task, update progress file before ending session",
            C: "Ask Claude what to do next",
            D: "Review all previous session transcripts"
          },
          correct: "B",
          explanation: "Working Agent (subsequent sessions): reads progress file for current state, selects highest-priority incomplete task, updates progress file before ending. Sessions don't share context — they share the file."
        },
        {
          id: 12,
          question: "Your progress file has 'Completed', 'In Progress', 'Blocked', 'Not Started', 'Decisions Made', 'Known Issues', 'Session Log' sections. According to the seven-section anatomy, where do you document 'chose PostgreSQL over MongoDB because Z'?",
          options: {
            A: "Completed section",
            B: "Decisions Made section — with rationale, session number, and rejected alternatives",
            C: "Known Issues section",
            D: "Session Log section"
          },
          correct: "B",
          explanation: "Decisions Made section: choices with rationale, session number, rejected alternatives. Prevents Decision Amnesia — re-litigating settled architectural questions in future sessions."
        },
        {
          id: 13,
          question: "Task 'Refactor auth module' is 40% complete with '2 hours remaining' in In Progress section. According to progress file anatomy, what else should be tracked?",
          options: {
            A: "Only the percentage",
            B: "Current task with % complete AND remaining work estimate",
            C: "Only the time spent",
            D: "The developer's name"
          },
          correct: "B",
          explanation: "In Progress section: current tasks with % complete and remaining work estimate. This enables accurate tracking and helps Working Agent select next task."
        },
        {
          id: 14,
          question: "You're ending a session. Task 'Add MFA support' is half-done with code scattered across files. According to Exit Protocol, what must you do?",
          options: {
            A: "Just close the terminal — you'll remember where you left off",
            B: "Checkpoint work (git commit, save deliverables in stable condition) + Update progress file (move tasks, document decisions, log session summary). Never end with half-edited work.",
            C: "Email yourself a summary",
            D: "Take a screenshot of the code"
          },
          correct: "B",
          explanation: "Exit Protocol: 1) Checkpoint work — save deliverables in stable condition (git commit, finalized documents); 2) Update progress file — move tasks to correct sections, document decisions, log session summary. 'Never end with half-edited work' — next session starts from progress file, not memory."
        },
        {
          id: 15,
          question: "Your team has 5 developers. Each works independent sessions but needs coordination. According to Harness Architecture, how do you coordinate?",
          options: {
            A: "Daily standup meetings only",
            B: "Shared progress file — each session reads file, does work, writes back. File is coordination mechanism, not session state",
            C: "Shared CLAUDE.md via git",
            D: "Slack channel for updates"
          },
          correct: "B",
          explanation: "Harness Architecture: coordinates independent sessions through shared progress file. Each session reads file, does work, writes back. Sessions don't share context — they share the file. File is persistent project brain."
        },
        { id: 16, question: "What is the core problem that progress files solve compared to working without them?", options: { A: "They reduce API costs by caching responses", B: "Without them: 30+ minutes wasted re-establishing context per session, repeated work, lost decisions. With them: each session reads state, continues from where the last session ended.", C: "They prevent Claude from hallucinating in long sessions", D: "They automatically sync work across team members" }, correct: "B", explanation: "Without progress files: resuming a multi-day project requires 30+ minutes of context reconstruction, decisions get made twice (amnesia), work gets repeated (forgot it was done). With progress files: Working Agent reads file (<5 minutes) and immediately knows: current state, completed work, pending items, decisions made, blockers. Files eliminate the session memory problem." },
        { id: 17, question: "What does 'Harness Architecture' mean in the context of long-horizon work?", options: { A: "A constraint system preventing Claude from taking unsafe actions", B: "Each session is independent, coordinated through a shared progress file. 'Each session reads it to understand state, does work, then writes back to it.'", C: "A harness test environment for validating AI outputs", D: "A framework for harnessing multiple AI models simultaneously" }, correct: "B", explanation: "Harness Architecture: sessions are independent (no shared context, each starts fresh) but coordinated through a shared progress file. The file is the harness — it holds the project together across independent sessions. 'Each session reads it to understand state, does work, then writes back to it.' Sessions don't share context; they share the file." },
        { id: 18, question: "What distinguishes the Initializer Agent from Working Agents?", options: { A: "Initializer is more powerful; Working Agents are simpler", B: "Initializer (first session): breaks project into granular tasks, creates progress file, makes foundational decisions. Working Agents (subsequent sessions): read progress file, select highest-priority task, update file before ending.", C: "Initializer uses Opus model; Working Agents use Haiku", D: "Initializer is human; Working Agents are AI" }, correct: "B", explanation: "Two roles: Initializer (first session) = decomposition expert (breaks 5-hour project into 10-15 granular tasks), creates progress file structure, makes foundational decisions (PostgreSQL vs MongoDB). Working Agents (subsequent sessions) = executors (read file, pick highest-priority incomplete task, do work, update file before ending). Never start working sessions without initialization." },
        { id: 19, question: "What does the 'Decisions Made' section of a progress file contain?", options: { A: "All decisions ever considered, without filtering", B: "Choices with rationale, session number, and rejected alternatives — preserving the reasoning behind key decisions for future sessions", C: "Only the most recent decision from each session", D: "Action items framed as decisions" }, correct: "B", explanation: "Decisions Made section: each entry includes (1) the decision made, (2) rationale (why this choice), (3) session number (when decided), (4) rejected alternatives (what was considered but not chosen). This prevents 'decision amnesia' — future sessions don't re-debate settled questions and understand constraints imposed by prior choices." },
        { id: 20, question: "What is the '10-15 rule' for task decomposition?", options: { A: "Each task should take 10-15 minutes to complete", B: "Create 10-15 granular tasks for approximately 5 hours of work — enough granularity to track progress without excessive overhead", C: "No more than 10-15 tasks per progress file section", D: "Review tasks every 10-15 sessions" }, correct: "B", explanation: "'10-15 rule': decompose approximately 5 hours of work into 10-15 granular tasks. This creates: enough granularity to track progress (not '1 big task = done or not done'), manageable chunks (each 30-90 minutes), clear dependencies (granular tasks reveal sequencing). Too few tasks = vague; too many = overhead exceeds value." },
        { id: 21, question: "What are the four Task Decomposition Principles?", options: { A: "Fast, Clear, Simple, Complete", B: "Concrete (specific deliverables), Verifiable (clear completion criteria), Completable (30-90 minutes), Sequenced (respects dependencies)", C: "Assigned, Scheduled, Tracked, Reviewed", D: "Documented, Approved, Executed, Validated" }, correct: "B", explanation: "Task Decomposition Principles: (1) Concrete = specific deliverable (not 'improve auth' but 'add rate limiting to /login endpoint: 5 attempts per minute, return 429 status'), (2) Verifiable = clear completion criteria (done is unambiguous), (3) Completable = 30-90 minutes (fits a focused session), (4) Sequenced = respects dependencies (doesn't start before prerequisites)." },
        { id: 22, question: "What are the five steps of the Session Initialization Protocol?", options: { A: "Open terminal, load context, check email, review tasks, start working", B: "Check working context location → Read progress file → Verify current deliverable state → Select highest-priority incomplete item → Establish baseline of working state", C: "Start Claude, read CLAUDE.md, check git status, list tasks, execute", D: "Login, authenticate, load project, assign tasks, begin" }, correct: "B", explanation: "Initialization Protocol (every session): (1) Check working context location, (2) Read progress file, (3) Verify current deliverable state (are files in the state progress file says?), (4) Select highest-priority incomplete item (based on dependencies and priority), (5) Establish baseline (confirm starting point). Sample prompt: 'Read my progress file, check my working files, tell me: what was completed, what's in progress, what's blocked, what do you recommend next.'" },
        { id: 23, question: "What are the two components of the Exit Protocol?", options: { A: "Save work and log out", B: "1) Checkpoint work — save deliverables in stable condition (git commit, save documents). 2) Update progress file — move tasks, document decisions, log session summary. Never end with half-edited work.", C: "Archive conversation and update CLAUDE.md", D: "Run tests and push to repository" }, correct: "B", explanation: "Exit Protocol: (1) Checkpoint work (git commit, save document in finalized-for-now state — stable, not scattered), (2) Update progress file (move tasks to correct section, document decisions made, log session summary — narrative of what was accomplished). 'Never end with half-edited work scattered throughout files' — next session starts from progress file, not from memory." },
        { id: 24, question: "What is the 'Forgetting progress file updates' failure mode?", options: { A: "Accidentally deleting the progress file", B: "Ending sessions without updating the progress file — next session has stale information, re-does completed work, misses decisions made", C: "Using wrong file format for progress tracking", D: "Sharing progress file without access controls" }, correct: "B", explanation: "Forgetting progress file updates: ending session without writing back to progress file. Next session reads stale file: (1) Tasks still listed as 'In Progress' that were completed, (2) Decisions made not recorded (re-debated next session), (3) Blockers removed but still listed. Result: repeated work, wasted 20-30 minutes reconstructing what happened. Exit Protocol must always include progress file update." },
        { id: 25, question: "What is 'Decision Amnesia' and how does progress file prevent it?", options: { A: "Forgetting previous prompt engineering decisions", B: "Every decision requiring re-justification each session because reasoning wasn't documented. Progress file's 'Decisions Made' section preserves rationale — future sessions don't re-debate settled choices.", C: "AI forgetting user preferences after /clear", D: "Losing git commit messages that explained decisions" }, correct: "B", explanation: "Decision Amnesia: without documentation, future sessions re-debate already-settled questions (Should we use PostgreSQL? → decided in Session 1, but Session 4 asks again). Progress file 'Decisions Made' section prevents this: each entry has decision + rationale + rejected alternatives. Session 4 reads: 'PostgreSQL chosen (Session 1) — reason: JSONB queries 3x faster than MongoDB for our use case. Alternative: MongoDB (rejected).' Decision closed." },
        { id: 26, question: "What does the sample initialization prompt ask Claude to do?", options: { A: "Read CLAUDE.md and start working on the first task", B: "Read progress file to understand state, check working files, then report: what was completed previously, what's in progress, what's blocked, what to recommend next", C: "List all files in the project directory", D: "Summarize the previous session's conversation history" }, correct: "B", explanation: "Sample initialization prompt: 'Read my progress file to understand current state, check my working files, then tell me: what was completed previously, what's in progress, what's blocked, what do you recommend next.' This produces: instant project state (no 30-minute reconstruction), verification of file state vs. progress file, and a recommended next action." },
        { id: 27, question: "You're starting Session 3 of a 10-session project. Progress file shows 4 tasks complete, 2 in-progress, 4 not started. Which should you work on?", options: { A: "The most interesting task regardless of dependencies", B: "Highest-priority incomplete task with no unresolved blockers — check 'In Progress' tasks first (already started), then 'Not Started' with no blockers", C: "Start fresh — don't rely on progress file from prior sessions", D: "Work on the most complex task to get it done first" }, correct: "B", explanation: "Working Agent selection: (1) Check 'In Progress' tasks first — was anything partially completed? Resume it. (2) Check 'Not Started' tasks — which have no blockers (all blockedBy tasks complete)? Select highest priority. Avoid: starting blocked tasks (dependencies incomplete), skipping in-progress work (creates scattered half-done items)." },
        { id: 28, question: "Developer adds 'Improve performance' to the progress file as an In Progress task. According to task decomposition, what's wrong?", options: { A: "Nothing — performance improvement is a valid task", B: "Vague task — 'Improve performance' has no completion criteria (done is undefined). Replace with: 'Reduce /api/users response time from 450ms to <200ms using Redis caching for repeated queries.'", C: "Should be in 'Not Started' not 'In Progress'", D: "Performance tasks don't belong in progress files" }, correct: "B", explanation: "Vague task failure: 'Improve performance' never completes — it's always partially true and never fully done. Fix per Concrete + Verifiable principles: specify metric (response time), current state (450ms), target (200ms), approach (Redis caching). This task is either done (API at <200ms with cache) or not done — unambiguous. Measure twice before committing to task description." },
        { id: 29, question: "Project has been running for 6 sessions over 2 weeks. Developer notices the progress file has grown to 15 pages. Is this normal and how should it be managed?", options: { A: "Abnormal — progress files should never exceed 2 pages", B: "Normal for long projects — manage by archiving completed sections to completed-archive.md, keeping active file focused on current work. Session Log grows naturally; past sessions can be compressed to one-line summaries.", C: "Delete and restart the progress file every 5 sessions", D: "Switch to a database for large projects" }, correct: "B", explanation: "15-page progress file over 6 sessions is expected. Management: (1) Archive completed tasks to completed-archive.md (main file stays focused on active work), (2) Compress old Session Log entries to one-line summaries ('Session 1-3: authentication module complete'), (3) Keep Decisions Made and Known Issues sections current (remove resolved issues). Active sections stay manageable; history stays accessible." },
        { id: 30, question: "Manager asks 'Why use a progress file instead of just resuming the same Claude session daily?' What is the correct response?", options: { A: "'You're right — always resume the same session for continuity'", B: "'Sessions degrade over time (3-Day Rule), /clear is sometimes necessary, and multiple developers can't share one session. Progress file enables clean context per session while preserving all project state and decisions externally.'", C: "'Progress files are optional — just use your memory'", D: "'Claude sessions automatically save and sync across users'" }, correct: "B", explanation: "Sessions vs. Progress Files: (1) Sessions degrade (3-Day Rule — 3+ days old = re-establishing context takes longer than starting fresh), (2) /clear is sometimes necessary (poisoned context, switching tasks) — progress file survives /clear, (3) Teams can't share one session — progress file enables multiple developers to access same project state. File is coordination mechanism; session is execution environment." }
      ]
    },
    {
      id: 8,
      title: "Mid-Stream Memory — Injecting Context at Execution Time",
      mcqs: [
        {
          id: 1,
          question: "What is the 'Workflow Drift Problem' in long AI sessions?",
          options: {
            A: "AI drifting from the project's coding standards over time",
            B: "Initial context provided at Turn 1 becomes irrelevant by Turn 20 as focus evolves — memories selected for Turn 1's intent don't match Turn 20's specific requirements",
            C: "The AI model gradually becoming less capable as the session progresses",
            D: "File references in CLAUDE.md becoming outdated during long sessions"
          },
          correct: "B",
          explanation: "Workflow Drift Problem: initial context (provided at Turn 1) remains relevant for Turn 1 only. By Turn 20, focus has evolved significantly; original context is buried under 19 turns of conversation. Memories selected for Turn 1's broad intent ('review vendor agreement') don't match Turn 20's specific requirements ('completing indemnification clause analysis')."
        },
        {
          id: 2,
          question: "What is the difference between UserPromptSubmit and PreToolUse hooks for memory injection?",
          options: {
            A: "UserPromptSubmit is faster; PreToolUse is more accurate",
            B: "UserPromptSubmit fires once when user submits prompt (best for initial context/one-shot queries); PreToolUse fires before each tool execution (best for ongoing relevance across multi-step workflows)",
            C: "UserPromptSubmit injects text memories; PreToolUse injects file memories",
            D: "They are identical — choice is based on personal preference"
          },
          correct: "B",
          explanation: "Timing difference: UserPromptSubmit fires once when the user submits a prompt — ideal for initial context injection and session setup. PreToolUse fires before EACH tool execution — ideal for ongoing relevance in multi-step workflows where context needs to stay current as the task evolves over many turns."
        },
        {
          id: 3,
          question: "Why are 'Thinking Blocks' more valuable for memory retrieval than the original user prompt?",
          options: {
            A: "Thinking blocks are compressed, requiring fewer tokens",
            B: "Turn 20 thinking is far more specific ('Preparing partner memo focusing on indemnification Section 7.2') than Turn 1 prompt ('Review vendor agreement'), producing more precisely targeted memory retrievals",
            C: "Thinking blocks bypass rate limiting on memory API calls",
            D: "Thinking blocks are stored in a different memory region"
          },
          correct: "B",
          explanation: "Thinking Blocks are valuable because Turn 20's specific thinking ('Preparing partner memo summarizing key contract risks focusing on indemnification Section 7.2 and termination Section 12.1') is far more specific than Turn 1's broad request ('Review vendor agreement'). Querying memory with the specific thinking retrieves precisely relevant memories — not general ones."
        },
        {
          id: 4,
          question: "What is the execution flow of PreToolUse memory injection?",
          options: {
            A: "User submits prompt → Memory injects → Claude responds",
            B: "User submits → Claude reasons → Decides to act → PreToolUse hook fires → Hook reads transcript (JSONL) → Queries vector DB (~5–50ms) → Returns memories via additionalContext → Claude executes with enriched context",
            C: "Before each session → Memory loaded → Claude works → Memory saved",
            D: "After Claude responds → Memory extracted → Stored for next query"
          },
          correct: "B",
          explanation: "PreToolUse flow: 1) User submits prompt, 2) AI creates reasoning block, 3) AI decides to execute action, 4) PreToolUse hook fires synchronously, 5) Hook reads transcript_path (JSONL file), 6) Extracts thinking blocks → queries vector DB (~5–50ms), 7) Returns hookSpecificOutput with memories in additionalContext, 8) AI receives injected memories and executes with enriched context."
        },
        {
          id: 5,
          question: "What is the Memory Structure Template recommended in the lesson?",
          options: {
            A: "Title, Date, Author, Content, Tags",
            B: "# Memory: [Title] / ## Summary (one paragraph) / ## Context (why this became important) / ## Pattern (good/bad examples) / ## When to Apply (trigger conditions)",
            C: "Key: value pairs in YAML format",
            D: "Plain text with no required structure"
          },
          correct: "B",
          explanation: "Memory Structure Template: # Memory: [Searchable Title]; ## Summary (one paragraph capturing core knowledge); ## Context (why this became important — historical background); ## Pattern (concrete good practice example AND what to avoid); ## When to Apply (trigger conditions). This structure enables accurate semantic search and clear application guidance."
        },
        {
          id: 6,
          question: "What is the simple Hook implementation described for basic memory injection without a vector database?",
          options: {
            A: "A Python script that reads a memories.md file and returns it as additionalContext via hookSpecificOutput",
            B: "A curl command that posts to the Anthropic memory API",
            C: "A JavaScript function that compresses recent messages into a summary",
            D: "A bash one-liner that appends CLAUDE.md to each message"
          },
          correct: "A",
          explanation: "The simple implementation: a Python script registered as a PreToolUse hook that reads ~/project/memories.md and returns its content as additionalContext in the hookSpecificOutput JSON. No vector database required — just a flat file of memories. This provides basic mid-stream memory injection with minimal setup."
        },
        {
          id: 7,
          question: "What are 'High-Value Memories' for the software development domain?",
          options: {
            A: "Documentation for all public APIs",
            B: "Error handling patterns, API conventions, architectural decisions, high-risk areas of the codebase",
            C: "The complete git commit history",
            D: "All test cases and their expected outcomes"
          },
          correct: "B",
          explanation: "High-Value Software Memories: error handling patterns (how we handle X type of error), API conventions (our REST API always returns Y structure), architectural decisions (we use PostgreSQL not MongoDB because Z), high-risk codebase areas (never modify the auth middleware without running full integration tests). These are the micro-decisions that make the difference between expert and novice AI assistance."
        },
        {
          id: 8,
          question: "What is the key takeaway about Turn 20 thinking vs. Turn 1 prompts for memory retrieval?",
          options: {
            A: "Turn 1 prompts are always more specific and better for retrieval",
            B: "'Turn 20's specific thinking about completing a defined subtask is more valuable for memory retrieval than Turn 1's broad initial request'",
            C: "Both are equally valuable — use the most recent",
            D: "Memory retrieval should only use Turn 1 prompts for consistency"
          },
          correct: "B",
          explanation: "Key takeaway: 'Turn 20's specific thinking about completing a defined subtask is more valuable for memory retrieval than Turn 1's broad initial request.' By Turn 20, the AI's thinking has narrowed from 'review this contract' to 'drafting the liability risk section of the partner memo' — enabling precise memory retrieval instead of broad pattern matching."
        },
        {
          id: 9,
          question: "How is the PreToolUse hook registered in .claude/settings.json?",
          options: {
            A: "{ 'memory': { 'hook': 'python3 /path/to/memory_hook.py' } }",
            B: "{ 'hooks': { 'PreToolUse': [{'command': 'python3 /path/to/memory_hook.py'}] } }",
            C: "{ 'plugins': [{ 'type': 'memory', 'path': '/path/to/memory_hook.py' }] }",
            D: "{ 'preToolUse': 'python3 /path/to/memory_hook.py' }"
          },
          correct: "B",
          explanation: "Registration in .claude/settings.json: { 'hooks': { 'PreToolUse': [{'command': 'python3 /path/to/memory_hook.py'}] } }. This uses the same hooks configuration format as other Claude Code hooks — the 'hooks' key with the event name ('PreToolUse') mapping to an array of hook objects with 'command' fields."
        },
        {
          id: 10,
          question: "What does the hook receive via `transcript_path` in the hook input?",
          options: {
            A: "The full conversation history as a string",
            B: "The file path to a JSONL file containing the conversation transcript — the hook reads and parses this file to extract thinking blocks for memory queries",
            C: "A URL to download the transcript from Anthropic's servers",
            D: "The last 5 messages in JSON format"
          },
          correct: "B",
          explanation: "The hook receives transcript_path pointing to a JSONL file location (not direct thinking access). The hook must read and parse this JSONL transcript file to extract thinking blocks. This gives the hook access to Claude's internal reasoning at Turn N — not just the user messages — enabling thinking-based memory retrieval."
        },
        {
          id: 11,
          question: "Your AI session is 2 hours old. Initial context was 'review vendor agreement' but now you're on 'indemnification clause analysis'. According to Workflow Drift, what is the problem?",
          options: {
            A: "No problem — AI adapts naturally",
            B: "Initial context (Turn 1) is irrelevant by Turn 20 — memories selected for Turn 1's broad intent don't match Turn 20's specific requirements. Fix: use PreToolUse hooks for ongoing memory injection",
            C: "The AI model is degrading over time",
            D: "You should have used a different AI model"
          },
          correct: "B",
          explanation: "Workflow Drift: initial context at Turn 1 becomes irrelevant by Turn 20 as focus evolves. Memories for 'review vendor agreement' don't match 'indemnification clause analysis'. PreToolUse hooks inject context before each tool execution, keeping memories current."
        },
        {
          id: 12,
          question: "You're building a memory injection system. According to the lesson, when should you use UserPromptSubmit vs. PreToolUse hooks?",
          options: {
            A: "They're interchangeable — choose based on preference",
            B: "UserPromptSubmit fires once when user submits prompt (initial context/one-shot queries); PreToolUse fires before each tool execution (ongoing relevance across multi-step workflows)",
            C: "UserPromptSubmit for text memories; PreToolUse for file memories",
            D: "UserPromptSubmit for simple tasks; PreToolUse for complex tasks"
          },
          correct: "B",
          explanation: "Timing difference: UserPromptSubmit fires once when user submits prompt — ideal for initial context injection. PreToolUse fires before EACH tool execution — ideal for ongoing relevance in multi-step workflows where context needs to stay current as task evolves."
        },
        {
          id: 13,
          question: "Turn 1 prompt is 'Review vendor agreement'. Turn 20 thinking is 'Drafting liability risk section focusing on indemnification clause 7.2'. According to Thinking Blocks principle, which is more valuable for memory retrieval?",
          options: {
            A: "Turn 1 prompt — it's the original intent",
            B: "Turn 20 thinking — it's far more specific, producing precisely targeted memory retrievals. Query with specific thinking retrieves relevant memories, not general ones",
            C: "Both are equally valuable",
            D: "Neither — use the progress file instead"
          },
          correct: "B",
          explanation: "Thinking Blocks are valuable because Turn 20's specific thinking is far more specific than Turn 1's broad request. Querying memory with specific thinking ('indemnification clause 7.2') retrieves precisely relevant memories — not general ones."
        },
        {
          id: 14,
          question: "Your memory injection hook takes 200ms to query the vector DB. According to the PreToolUse flow, what is the impact?",
          options: {
            A: "The hook times out and fails",
            B: "Minimal impact — hook fires synchronously, adds ~5-50ms latency (including 200ms DB query), but ensures context is current before tool execution",
            C: "The AI skips the memory injection",
            D: "You must use UserPromptSubmit instead"
          },
          correct: "B",
          explanation: "PreToolUse flow: hook fires synchronously, reads transcript, queries vector DB (~5-50ms typically, but 200ms is acceptable), returns memories via additionalContext, AI executes with enriched context. The latency ensures context is current before tool execution."
        },
        {
          id: 15,
          question: "Your team wants basic memory injection without a vector database. According to the lesson, what is the simple implementation?",
          options: {
            A: "It's impossible without a vector DB",
            B: "Python script registered as PreToolUse hook that reads ~/project/memories.md and returns content as additionalContext via hookSpecificOutput. No vector DB required — just flat file of memories",
            C: "Use CLAUDE.md instead of memories",
            D: "Manually paste memories into each prompt"
          },
          correct: "B",
          explanation: "Simple implementation: Python script registered as PreToolUse hook reads ~/project/memories.md, returns content as additionalContext in hookSpecificOutput JSON. No vector DB required — flat file of memories provides basic mid-stream memory injection with minimal setup."
        },
        { id: 16, question: "What is the 'Workflow Drift Problem' specifically?", options: { A: "AI model performance degrading during long sessions", B: "Initial context provided at Turn 1 remains relevant for Turn 1 only — by Turn 20, focus has evolved significantly and original context is buried under 19 turns of evolution", C: "Different team members using different workflows", D: "CLAUDE.md drifting out of sync with actual project conventions" }, correct: "B", explanation: "Workflow Drift: Turn 1 context ('Review vendor agreement') becomes irrelevant by Turn 20 ('Drafting liability risk section of partner memo'). Initial context is buried under 19 turns. Memories injected at Turn 1 (selected for 'review vendor agreement') don't match Turn 20's specific needs. Solution: PreToolUse hook injects memories based on Turn 20's specific thinking, not Turn 1's broad request." },
        { id: 17, question: "When does UserPromptSubmit hook fire and what is its best use case?", options: { A: "Before every tool execution — ongoing workflow", B: "Once when user submits prompt — best for initial context setup, session initialization, one-shot queries where Turn 1 context is sufficient", C: "After every AI response — post-processing", D: "When session ends — cleanup and archival" }, correct: "B", explanation: "UserPromptSubmit: fires once when user submits prompt. Best for: initial context injection (project context at session start), session setup (load preferences), one-shot queries (single-turn tasks where Turn 1 intent is all that matters). Limitation: context selected for Turn 1 intent doesn't match Turn 20's evolved specific requirements." },
        { id: 18, question: "When does PreToolUse hook fire and why is it better for multi-step workflows?", options: { A: "Before session starts — setup only", B: "Before each tool execution — fires at Turn 20 with Turn 20's specific reasoning, injecting precisely targeted memories matching the current subtask rather than broad initial request", C: "After each tool completes — post-processing", D: "When context reaches 50% — automatic intervention" }, correct: "B", explanation: "PreToolUse fires before each tool execution. At Turn 20, it reads Turn 20's thinking block ('drafting liability risk section focusing on indemnification Section 7.2') and retrieves memories matching THIS specific subtask. Memory retrieval is targeted to current action, not initial request. This is the Workflow Drift solution: memories evolve with the workflow." },
        { id: 19, question: "What are the eight steps of the PreToolUse Memory Injection execution flow?", options: { A: "Hook fires → reads CLAUDE.md → injects memories → executes tool", B: "User submits → AI reasons → decides action → PreToolUse fires → hook reads JSONL → queries vector DB (~5-50ms) → returns hookSpecificOutput → AI executes with enriched context", C: "User submits → memories loaded → AI responds → hook updates memories", D: "Tool called → hook fires → memories retrieved → AI notified → approval required → tool executes" }, correct: "B", explanation: "Eight-step flow: (1) User submits prompt, (2) AI creates reasoning block, (3) AI decides to execute action, (4) PreToolUse hook fires synchronously, (5) Hook receives transcript_path (JSONL file), (6) Hook reads/parses JSONL, extracts thinking blocks, queries vector DB (~5-50ms), (7) Hook returns JSON with hookSpecificOutput containing memories, (8) AI receives injected memories via additionalContext and executes." },
        { id: 20, question: "Why does the hook receive 'transcript_path' rather than direct thinking access?", options: { A: "Direct access would be a security vulnerability", B: "transcript_path points to JSONL file location — the hook must read/parse this file to extract thinking blocks. This gives access to Claude's internal reasoning without direct API exposure.", C: "Thinking blocks are too large to pass directly", D: "transcript_path is faster to transmit than thinking content" }, correct: "B", explanation: "transcript_path: JSONL file location (not direct thinking access for architectural reasons). The hook independently reads and parses this JSONL file to extract thinking blocks. This gives access to Claude's internal reasoning at Turn N — including 'Preparing partner memo summarizing key contract risks focusing on indemnification Section 7.2' — enabling thinking-based memory queries." },
        { id: 21, question: "Why are Turn 20 thinking blocks more valuable for memory retrieval than Turn 1 user prompts?", options: { A: "Turn 20 thinking is longer and contains more text for matching", B: "Turn 20 thinking is specific about the current subtask (e.g., 'focusing on indemnification Section 7.2') vs. Turn 1's broad request ('review vendor agreement') — specificity produces precisely targeted retrieval", C: "Turn 1 prompts are encrypted and unavailable to hooks", D: "Vector databases work better with longer text blocks" }, correct: "B", explanation: "Turn 20 thinking specificity: 'Preparing partner memo summarizing key contract risks focusing on indemnification Section 7.2 and termination Section 12.1' vs Turn 1: 'Review vendor agreement.' Vector DB query on Turn 20 thinking retrieves: indemnification precedents, Section 7 clause patterns, partner memo format examples. Turn 1 query retrieves: generic contract review memories — broadly relevant but not precisely targeted." },
        { id: 22, question: "What are the four sections of the Memory Structure Template?", options: { A: "Title, Content, Tags, Date", B: "Summary (core knowledge), Context (why it became important), Pattern (concrete good/avoid examples), When to Apply (trigger conditions)", C: "Problem, Solution, Evidence, Reference", D: "Input, Process, Output, Validation" }, correct: "B", explanation: "Memory Structure Template: (1) Summary — one paragraph capturing core knowledge, (2) Context — why this became important (historical background, past incident), (3) Pattern — concrete good practice example + contrast with what to avoid (shows, not just tells), (4) When to Apply — trigger conditions (what situation should activate this memory). Structured memories retrieve better than unstructured notes." },
        { id: 23, question: "What are examples of high-value memories for the legal domain?", options: { A: "Case law from public legal databases", B: "Precedent patterns, client risk preferences, judge tendencies — the tacit expertise that distinguishes expert legal AI from generic", C: "Standard contract templates", D: "Legal billing rates and client contact information" }, correct: "B", explanation: "High-value legal memories: precedent patterns ('Judge Chen in Northern District prefers economic analysis over narrative'), client risk preferences ('Client X prioritizes operational continuity over damages cap in termination clauses'), judge tendencies ('opposing attorney Y consistently exploits indemnification gaps'). These distinguish expert from generic legal AI — available through tacit knowledge transfer, not documents." },
        { id: 24, question: "What are examples of high-value memories for the software development domain?", options: { A: "Programming language syntax and standard library documentation", B: "Error handling patterns, API conventions, architectural decisions — project-specific knowledge not derivable from public documentation", C: "General code review best practices", D: "Performance benchmarks from popular frameworks" }, correct: "B", explanation: "High-value software memories: error handling patterns ('all database errors must be caught and returned as ServiceError with code, message, and retryable flag'), API conventions ('versioned under /api/v2/ — legacy endpoints maintained for 6 months'), architectural decisions ('auth uses JWT with 15-minute expiry; refresh token in HttpOnly cookie to prevent XSS'). Non-public, project-specific knowledge." },
        { id: 25, question: "What does the simple Python hook implementation do step-by-step?", options: { A: "Queries vector database for semantically similar memories", B: "Reads JSON from stdin → reads ~/project/memories.md → returns full file content as additionalContext via hookSpecificOutput JSON — no vector DB, pure file-based injection", C: "Calls external memory API for retrieval", D: "Parses conversation history to extract key patterns" }, correct: "B", explanation: "Simple Python hook: (1) json.loads(sys.stdin.read()) — receive hook input, (2) Path.home()/'project'/'memories.md' — locate memories file, (3) If not exists: print('{}') and return, (4) memories.read_text() — load content, (5) Return JSON with hookSpecificOutput.additionalContext containing memories. Zero infrastructure required — just a flat file of memories." },
        { id: 26, question: "What JSON structure does the hook return to inject memories into Claude's context?", options: { A: "{ 'memories': ['...', '...'] }", B: "{ 'hookSpecificOutput': { 'hookEventName': 'PreToolUse', 'additionalContext': '## Relevant Context\\n\\n{memories}' } }", C: "{ 'inject': { 'context': '...' } }", D: "{ 'PreToolUse': { 'context': '...' } }" }, correct: "B", explanation: "Hook return structure: { 'hookSpecificOutput': { 'hookEventName': 'PreToolUse', 'additionalContext': '## Relevant Context\\n\\n{memories}' } }. The hookSpecificOutput with additionalContext is what Claude reads as injected context. The hookEventName identifies which hook type provided the context." },
        { id: 27, question: "What is the approximate latency for vector database memory retrieval via PreToolUse?", options: { A: "500ms-2s — significant user-visible delay", B: "~5-50ms — fast enough to inject before tool execution without noticeable latency", C: "Exactly 100ms by design", D: "Less than 1ms for local databases" }, correct: "B", explanation: "Vector DB retrieval: ~5-50ms. This latency is acceptable because: (1) tool execution takes much longer than 50ms, (2) memory injection happens synchronously before tool starts, (3) user doesn't experience the delay directly (Claude's response already includes the enriched reasoning). 200ms queries are also cited as acceptable in the lesson." },
        { id: 28, question: "AI is answering one-shot question about company HR policy. Which injection hook is appropriate?", options: { A: "PreToolUse — fires before each tool for precision", B: "UserPromptSubmit — fires once at Turn 1, sufficient for one-shot query where initial intent fully describes the task", C: "Neither — memory injection not needed for HR questions", D: "Both — use both for maximum context" }, correct: "B", explanation: "UserPromptSubmit for one-shot queries: 'What is the vacation policy?' is fully described by Turn 1 intent — no workflow evolution. Memories injected at Turn 1 (HR policy memories) remain relevant through completion. PreToolUse is overkill (fires before every tool in a short query), adding latency without benefit. Match hook timing to workflow complexity." },
        { id: 29, question: "AI is conducting 40-turn contract review with evolving focus (overview → risk sections → redline → memo). Which injection strategy is needed?", options: { A: "UserPromptSubmit — inject all contract knowledge at Turn 1", B: "PreToolUse — fires before each tool with Turn N's specific thinking, injecting memories that match current subtask (jurisdiction patterns at Turn 20, memo format at Turn 35)", C: "Neither — rely on CLAUDE.md for all contract context", D: "Manual injection: user pastes relevant memories at each turn" }, correct: "B", explanation: "PreToolUse for multi-turn evolving work: 40-turn contract review has dramatically different memory needs at Turn 5 (overview), Turn 20 (liability analysis), Turn 35 (drafting memo). PreToolUse fires at each action, reads current thinking, retrieves memories matching that specific subtask. UserPromptSubmit would inject Turn 1 memories throughout — irrelevant by Turn 20." },
        { id: 30, question: "Team wants to add memory injection but has no vector DB infrastructure. They have 50 key memories documented in a Markdown file. What is the recommended approach?", options: { A: "Must set up vector DB first — no alternative", B: "Use simple Python hook reading memories.md as flat file. As collection grows to 200+ memories, evaluate vector DB for semantic retrieval. Start simple, upgrade when precision becomes limiting.", C: "Store 50 memories in CLAUDE.md instead", D: "Split into 50 separate files, one per memory" }, correct: "B", explanation: "Start simple: Python hook reading memories.md flat file works for 50 memories (small enough to include fully). As memories grow (200+), flat file includes irrelevant memories creating noise. At that scale, vector DB's semantic retrieval ($50 memories relevant out of 200) becomes valuable. Start with flat file; upgrade when collection outgrows it. Premature optimization: setting up vector DB for 50 memories." }
      ]
    },
    {
      id: 9,
      title: "Context Isolation — Why Clean Slates Beat Dirty States",
      mcqs: [
        {
          id: 1,
          question: "What is the 'Dirty Slate Problem' in linear AI pipelines?",
          options: {
            A: "Database corruption when multiple agents write simultaneously",
            B: "Sequential agents accumulate irrelevant context — rejected precedents, dead-end explorations, intermediate reasoning — so Agent C operates with a context polluted by Agents A and B's entire process",
            C: "Agents using outdated model weights",
            D: "Too many API calls in a sequential pipeline"
          },
          correct: "B",
          explanation: "The Dirty Slate Problem: linear pipelines (Agent A → Agent B → Agent C) accumulate context. By Agent C, the context contains all of Agent A's document reads, Agent B's exploratory reasoning, intermediate outputs, and rejected approaches — none relevant to Agent C's specific task but all consuming its attention budget."
        },
        {
          id: 2,
          question: "What are the four key principles of the Clean Context Pattern?",
          options: {
            A: "Parallel, Sequential, Batch, Stream",
            B: "1) Orchestrator holds task definition and coordinates, 2) Each subagent gets only necessary information in fresh context, 3) Subagents return summaries not full process records, 4) Orchestrator synthesizes summaries into final output",
            C: "Read, Process, Write, Verify",
            D: "Plan, Execute, Review, Deploy"
          },
          correct: "B",
          explanation: "Clean Context Pattern principles: 1) Orchestrator holds task definition and coordinates work (stateful center), 2) Each subagent receives only necessary information in fresh context (minimal delegation), 3) Subagents return summaries not full process records (output compression), 4) Orchestrator synthesizes summaries (centralized synthesis)."
        },
        {
          id: 3,
          question: "What are the four benefits of Context Isolation?",
          options: {
            A: "Faster, cheaper, safer, more accurate",
            B: "Full attention budget per task, no pollution from irrelevant work, easier debugging (agents evaluable independently), and parallel execution",
            C: "Reduced token usage, lower latency, better security, easier testing",
            D: "Simpler code, better documentation, faster deployment, lower cost"
          },
          correct: "B",
          explanation: "Four benefits of Context Isolation: 1) Full Attention Budget Per Task — each agent operates in optimal attention zone, 2) No Pollution from Irrelevant Work — the brief writer sees 3 supporting cases not 47 rejected ones, 3) Easier Debugging — each agent evaluates independently and can be rerun in isolation, 4) Parallel Execution — independent tasks execute simultaneously."
        },
        {
          id: 4,
          question: "What is an important constraint of the Stateless (Subagent) pattern?",
          options: {
            A: "Subagents can only run for 60 seconds",
            B: "Subagents cannot spawn other subagents — only the orchestrator creates agents",
            C: "Subagents cannot read files, only APIs",
            D: "Subagents must complete tasks in alphabetical order"
          },
          correct: "B",
          explanation: "Important constraint of the Stateless pattern: 'Subagents cannot spawn other subagents — only the orchestrator creates agents.' This prevents uncontrolled agent spawning that could exhaust resources or create complex dependency graphs. The orchestrator maintains control of the agent hierarchy."
        },
        {
          id: 5,
          question: "When should you use the Stateful (Handoff) pattern despite the dirty slate risk?",
          options: {
            A: "Always — stateful is more reliable than stateless",
            B: "Only when there are genuine sequential dependencies or iterative refinement where Agent B genuinely improves Agent A's work (not just continues it)",
            C: "When the task involves more than 5 files",
            D: "For all tasks involving user-facing content"
          },
          correct: "B",
          explanation: "Use Stateful (Handoff) when: genuine sequential dependencies exist (Agent B literally cannot start without Agent A's specific output), or iterative refinement where Agent B genuinely improves Agent A's work. Warning: this IS the dirty slate pattern. Use only when context transfer is necessary — not as the default approach."
        },
        {
          id: 6,
          question: "What is the Shared (Network) pattern best suited for?",
          options: {
            A: "Simple tasks that complete in under 5 minutes",
            B: "Long-running projects spanning multiple sessions; teams of agents needing coordination over time; a 'source of truth' that must persist (central shared state via memory/file)",
            C: "Tasks with no dependencies between agents",
            D: "Single-user projects without collaboration requirements"
          },
          correct: "B",
          explanation: "Shared (Network) pattern: central shared state (memory file or database) with independent agents reading/writing. Best for: long-running projects (multiple sessions or days), teams of agents requiring coordination over time, when a persistent 'source of truth' is needed. The progress file architecture from Lesson 7 is an example of this pattern."
        },
        {
          id: 7,
          question: "What is the remarkable case study of 16 agents building a C compiler?",
          options: {
            A: "16 Claude Code instances competed to build the best compiler; the winner was selected",
            B: "Anthropic researcher Nicholas Carlini used 16 parallel Claude instances over ~2,000 sessions (~2 billion input tokens) to produce a 100,000-line Rust-based compiler with 99% pass rate on standard tests. Cost: ~$20,000. Differentiator: context quality.",
            C: "Google used 16 Gemini instances to build a compiler in 24 hours",
            D: "A team of 16 humans used Claude Code to build a compiler in record time"
          },
          correct: "B",
          explanation: "The case study: Anthropic researcher Nicholas Carlini used 16 parallel Claude instances, ~2,000 Claude Code sessions, ~2 billion input tokens, producing a 100,000-line Rust-based compiler compiling Linux 6.9 across x86, ARM, and RISC-V architectures. 99% pass rate on standard test suites. Total cost: ~$20,000. Key lesson: 'Differentiator: context quality, not model capability.'"
        },
        {
          id: 8,
          question: "What are the three tool access control roles and their permitted tools?",
          options: {
            A: "Admin (all), Developer (read/write), Guest (read only)",
            B: "Read-only reviewers (Read, Grep, Glob), Research analysts (+WebFetch, WebSearch), Writers (+Write, Edit), Full access orchestrator (all tools)",
            C: "Frontend (UI tools), Backend (API tools), Database (SQL tools)",
            D: "Junior (basic), Senior (advanced), Lead (full)"
          },
          correct: "B",
          explanation: "Tool access control: Read-only (reviewers) = Read, Grep, Glob (can explore but not modify), Research (analysts) = + WebFetch, WebSearch (can gather external info), Writers = + Write, Edit (can create and modify files), Full access = all tools (reserved for orchestrator role). Principle of least privilege applied to AI agents."
        },
        {
          id: 9,
          question: "What is the 'Master-Clone Architecture' context amnesia workaround?",
          options: {
            A: "One master agent that clones itself to run parallel tasks",
            B: "Each subagent reads the full project brief (master spec) at task start — giving each a clean context that includes all critical domain knowledge without accumulated noise from prior work",
            C: "A Git-based system where each branch represents one agent's work",
            D: "A cloud architecture where agents share a central model"
          },
          correct: "B",
          explanation: "Master-Clone Architecture: each subagent reads the full project brief (the 'master' specification document) at the start of its task — giving it all domain context it needs in a clean slate. The 'clone' is a fresh agent initialized with the master spec. This combines clean context (no accumulated noise) with full domain knowledge."
        },
        {
          id: 10,
          question: "What decision question maps to the Shared (Network) pattern?",
          options: {
            A: "'Genuine sequential dependencies?' → Shared",
            B: "'Spans multiple sessions or days?' OR 'Source of truth that must persist?' → Shared pattern",
            C: "'Must agents not influence each other?' → Shared",
            D: "'Parallel execution important?' → Shared"
          },
          correct: "B",
          explanation: "From the decision table: 'Spans multiple sessions or days?' → Shared pattern. 'Source of truth that must persist?' → Shared pattern. The Shared pattern is for work that outlasts any single session — requiring persistent state that multiple agents (and sessions) can read and update. The other answers map to: Sequential deps → Stateful, No influence → Stateless, Parallel → Stateless."
        },
        {
          id: 11,
          question: "You're building a linear AI pipeline: Agent A (research) → Agent B (analysis) → Agent C (brief writing). According to the Dirty Slate Problem, what happens by Agent C?",
          options: {
            A: "Agent C gets clean context from Agent B",
            B: "Agent C's context is polluted by Agent A's document reads, Agent B's exploratory reasoning, intermediate outputs, and rejected approaches — none relevant to brief writing but all consuming attention budget",
            C: "Agent C automatically filters irrelevant context",
            D: "The pipeline self-optimizes"
          },
          correct: "B",
          explanation: "Dirty Slate Problem: linear pipelines accumulate context. By Agent C, context contains all of Agent A's reads, Agent B's reasoning, intermediate outputs, rejected approaches — none relevant to Agent C's specific task but all consuming its attention budget."
        },
        {
          id: 12,
          question: "You're designing a multi-agent system. According to Clean Context Pattern, how should the orchestrator coordinate subagents?",
          options: {
            A: "All subagents share the same context",
            B: "Orchestrator holds task definition, each subagent gets only necessary information in fresh context, subagents return summaries (not full process records), orchestrator synthesizes summaries into final output",
            C: "Each subagent reads all previous subagents' full transcripts",
            D: "Subagents coordinate directly without orchestrator"
          },
          correct: "B",
          explanation: "Clean Context Pattern: 1) Orchestrator holds task definition and coordinates, 2) Each subagent gets only necessary info in fresh context (minimal delegation), 3) Subagents return summaries not full process records (output compression), 4) Orchestrator synthesizes summaries (centralized synthesis)."
        },
        {
          id: 13,
          question: "Your team uses 16 parallel AI agents to build a compiler (like the Nicholas Carlini case study). According to the lesson, what was the key differentiator for success?",
          options: {
            A: "Using the largest AI models available",
            B: "Context quality — not model capability. 16 parallel instances, ~2,000 sessions, ~2 billion input tokens produced 100,000-line compiler with 99% pass rate. Cost: ~$20,000",
            C: "Having more computing resources",
            D: "Using a custom AI model"
          },
          correct: "B",
          explanation: "Case study: Nicholas Carlini used 16 parallel Claude instances, ~2,000 sessions, ~2 billion input tokens, producing 100,000-line Rust compiler compiling Linux 6.9 across x86, ARM, RISC-V. 99% pass rate. Cost: ~$20,000. Key lesson: 'Differentiator: context quality, not model capability.'"
        },
        {
          id: 14,
          question: "You're setting up tool access control for your AI team. According to the three roles, what tools should 'Research analysts' have?",
          options: {
            A: "All tools — they need full access",
            B: "Read-only tools (Read, Grep, Glob) PLUS WebFetch, WebSearch (can gather external info)",
            C: "Only Write and Edit tools",
            D: "No tools — they only observe"
          },
          correct: "B",
          explanation: "Tool access control: Read-only reviewers = Read, Grep, Glob (explore but not modify). Research analysts = +WebFetch, WebSearch (gather external info). Writers = +Write, Edit (create/modify files). Full access = all tools (orchestrator only). Principle of least privilege applied to AI agents."
        },
        {
          id: 15,
          question: "You're building a multi-agent system for code review. According to Master-Clone Architecture, how do you give each subagent domain knowledge without accumulated noise?",
          options: {
            A: "Each subagent reads all previous agents' transcripts",
            B: "Each subagent reads full project brief (master spec) at task start — clean context with all critical domain knowledge, no accumulated noise from prior work",
            C: "Share a single context window across all agents",
            D: "Fine-tune each subagent on the codebase"
          },
          correct: "B",
          explanation: "Master-Clone Architecture: each subagent reads full project brief ('master' spec) at task start — giving all domain context in clean slate. 'Clone' is fresh agent initialized with master spec. Combines clean context (no accumulated noise) with full domain knowledge."
        },
        { id: 16, question: "What accumulates in a linear pipeline by Agent C, causing the Dirty Slate Problem?", options: { A: "Too many API calls generating rate limiting", B: "Irrelevant document reads, exploratory dead-ends, intermediate reasoning, and tool call outputs from Agents A and B — all consuming Agent C's attention budget", C: "Duplicate file writes from multiple agents", D: "Conflicting instructions from different agent systems" }, correct: "B", explanation: "By Agent C in linear pipeline: all of Agent A's document reads (including 47 rejected cases), Agent B's exploratory reasoning (positioning experiments, rejected taglines), intermediate outputs (summaries of summaries), rejected approaches (architectural experiments). None relevant to Agent C's brief-writing task but all consuming its limited attention. Brief writer sees 47 rejected cases instead of focusing on 3 supporting cases." },
        { id: 17, question: "What are the four benefits of context isolation for complex multi-agent work?", options: { A: "Speed, accuracy, cost, security", B: "Full Attention Budget Per Task, No Pollution from Irrelevant Work, Easier Debugging (each agent evaluable independently), Parallel Execution (independent tasks run simultaneously)", C: "Scalability, reliability, maintainability, observability", D: "Modularity, reusability, testability, documentation" }, correct: "B", explanation: "Four isolation benefits: (1) Full Attention Budget Per Task — each agent operates in optimal attention zone (0-50% Green), (2) No Pollution — brief writer sees 3 supporting cases, not 47 rejected ones, (3) Easier Debugging — rerun single agent to test independently, (4) Parallel Execution — Agent A, B, and C run simultaneously for independent tasks, reducing total time." },
        { id: 18, question: "What is the 'Full Attention Budget Per Task' benefit of context isolation?", options: { A: "Each agent gets dedicated CPU cores", B: "Each isolated agent operates in Green zone (0-50%) with full attention capacity — not at 85%+ where quality degrades due to accumulated prior work", C: "Agents don't need to track time boundaries", D: "Budget is shared equally among all agents" }, correct: "B", explanation: "Full Attention Budget: isolated agent starts with 0% context utilization — full 200K tokens available for its specific task. Linear pipeline Agent C might receive context at 85%+ (filled with prior agents' work) — severely degraded attention budget. Isolation ensures every agent works in the optimal Green zone regardless of how complex the overall pipeline is." },
        { id: 19, question: "How does context isolation enable 'Easier Debugging' in multi-agent systems?", options: { A: "Isolation prevents bugs from occurring", B: "Each agent evaluates independently — if Agent B's output is wrong, rerun Agent B with same clean inputs. No need to re-run entire pipeline or untangle shared state.", C: "Isolated logs are easier to read than shared logs", D: "Debugging tools work better with isolated processes" }, correct: "B", explanation: "Easier Debugging via isolation: Agent B fails → rerun Agent B with same clean inputs (delegated context + its task). Find the bug without rerunning Agent A (which may take 10 minutes). Contrast: shared context pipeline — can't rerun Agent B in isolation (it received Agent A's state). Isolation = each agent is independently testable unit." },
        { id: 20, question: "What is the Stateless (Subagent) design pattern and when is it ideal?", options: { A: "Agents that forget everything after each task", B: "Independent tasks with strong isolation and parallel execution — subagents cannot spawn other subagents; only orchestrator creates agents. Best for: independent tasks, parallel execution, clear debugging boundaries.", C: "Tasks that require no memory between steps", D: "Agents that don't use any external state" }, correct: "B", explanation: "Stateless (Subagent) pattern: (1) Each subagent is independent — receives only what it needs, returns summary, (2) Parallel execution — multiple subagents run simultaneously, (3) Subagents cannot spawn other subagents (only orchestrator creates agents), (4) Best for: truly independent tasks (legal research, marketing analysis, code review of separate modules). Debuggable, parallelizable, clean." },
        { id: 21, question: "What is the Stateful (Handoff) design pattern and when is it appropriate despite being the 'dirty slate' pattern?", options: { A: "Never appropriate — always use Stateless", B: "Context transfers between agents; appropriate only when tasks have genuine sequential dependencies (Agent B improves Agent A's work) or iterative refinement is required. Warning: this accumulates context.", C: "Used when stateless agents fail", D: "Used for performance-critical pipelines" }, correct: "B", explanation: "Stateful (Handoff) pattern: context transfers between agents. Warning: this IS the dirty slate pattern. Use ONLY when: (1) genuine sequential dependencies exist (Agent B must see Agent A's full reasoning to improve it), (2) iterative refinement (Agent B specifically refines Agent A's work). Avoid when tasks are independent — use Stateless instead. The warning is explicit: prefer Stateless unless context transfer is genuinely necessary." },
        { id: 22, question: "What is the Shared (Network) design pattern and when is it most appropriate?", options: { A: "Agents sharing a database for efficiency", B: "Central shared state (memory/file) with independent agents reading/writing — best for long-running projects spanning multiple sessions, teams of agents needing coordination over time", C: "Agents sharing a single context window", D: "Multiple agents accessing the same API" }, correct: "B", explanation: "Shared (Network) pattern: central shared state (progress file, memory system) with independent agents reading/writing. Each agent starts fresh context but reads/writes shared state. Best for: long-running projects (days/weeks), teams of agents (multiple specialists), coordination over time. Combines isolation benefits (clean context) with coordination capability (shared knowledge base)." },
        { id: 23, question: "Which design pattern should you choose when agents must not influence each other's analysis?", options: { A: "Stateful (Handoff) — full context transfer", B: "Stateless (Subagent) — strong isolation ensures no cross-contamination between agents' reasoning", C: "Shared (Network) — central coordination", D: "All patterns provide equal isolation" }, correct: "B", explanation: "Decision: agents must not influence each other → Stateless. Use case: independent security auditors reviewing different modules (if Auditor A shares findings with Auditor B before B finishes, B's analysis is influenced). Stateless ensures each auditor gets only the code it reviews and produces independent analysis. Results synthesized by orchestrator after all complete." },
        { id: 24, question: "What is the key constraint on Subagents — what can they NOT do?", options: { A: "Subagents cannot use Write or Edit tools", B: "Subagents cannot spawn other subagents — only the orchestrator can create agents. Subagents must complete their task and return results to the orchestrator.", C: "Subagents cannot access external APIs", D: "Subagents cannot run for more than 10 minutes" }, correct: "B", explanation: "Critical constraint: Subagents cannot spawn other subagents. Only the orchestrator creates agents. This prevents: exponential agent proliferation (subagent spawning subagents spawning subagents), loss of coordination (orchestrator loses track of execution), uncontrolled cost. Orchestrator maintains exclusive spawning authority and synthesizes all results." },
        { id: 25, question: "What Agent Teams commands does Claude Code provide for coordination?", options: { A: "team-create, team-join, team-leave, team-status", B: "Shift+Up/Down (select teammate), Ctrl+T (shared task list), Shift+Tab (delegate mode restricts lead to coordination only), Escape (interrupt teammate)", C: "spawn-agent, assign-task, collect-results, merge-outputs", D: "agent start, agent stop, agent status, agent logs" }, correct: "B", explanation: "Agent Teams UI commands: Shift+Up/Down (switch between teammate conversations), Ctrl+T (view shared task list with self-coordination), Shift+Tab (delegate mode — restricts lead agent to coordination only, preventing it from doing execution work), Escape (interrupt teammate mid-task). Enabled via: { 'env': { 'CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS': '1' } }." },
        { id: 26, question: "What was the Nicholas Carlini C Compiler case study demonstrating about context quality?", options: { A: "AI cannot build complex software autonomously", B: "16 parallel Claude instances over ~2,000 sessions and ~2B input tokens built a 100,000-line Rust C compiler (99% test suite pass rate, ~$20,000 cost) — differentiator was context quality, not model capability", C: "More agents always produce better results", D: "Cost of AI development exceeds traditional development" }, correct: "B", explanation: "Carlini case study: 16 agents, ~2,000 Claude Code sessions, ~2 billion input tokens → 100,000-line Rust-based C compiler compiling Linux 6.9 across x86, ARM, RISC-V. 99% pass rate on standard test suites. ~$20,000 total cost. Key lesson: same model available to everyone; the differentiator was context quality (how each agent received exactly what it needed, isolated from other agents' work)." },
        { id: 27, question: "What is the 'Preload Skills with Domain Knowledge' amnesia workaround?", options: { A: "Pre-train models on domain-specific data", B: "Create Skills encoding firm writing standards, brand voice guidelines, academic standards — so subagents receive domain knowledge from Skills rather than accumulated conversation context", C: "Load all documents into CLAUDE.md at session start", D: "Manually brief each subagent on domain rules" }, correct: "B", explanation: "Context Amnesia Workaround (Strategy 1): Preload Skills. Subagent starts with clean context but has zero domain knowledge (amnesia). Solution: Skills encoding domain knowledge (brand voice, legal standards, architectural principles) are available to subagents. Subagent invokes Skill → gets firm-specific knowledge → applies to its isolated task. Clean context + domain expertise = no amnesia." },
        { id: 28, question: "Legal research pipeline: Agent A searches cases, Agent B analyzes precedents, Agent C writes brief. By Agent C, what pollution exists and how does Clean Context Pattern fix it?", options: { A: "No pollution — each agent is sequential", B: "Agent C sees all Agent A case searches (including 47 rejected cases) and Agent B's analytical tangents. Fix: Clean Context Pattern — Orchestrator delegates to Agent C with only: 3 selected supporting cases + brief specifications + writing standards.", C: "Agent C needs access to all prior work for coherence", D: "Pollution is unavoidable in sequential pipelines" }, correct: "B", explanation: "Without isolation: Agent C receives Agent A's search results (47 cases, including 35 rejected), Agent B's full analytical process (including jurisdictional tangents abandoned). Agent C's brief references weak cases (distraction from irrelevant rejected research). With Clean Context: Orchestrator synthesizes → delegates to Agent C with: 3 supporting cases, 2 key arguments, brief template, writing standards. Agent C writes from clean, curated context." },
        { id: 29, question: "Multi-agent marketing system produces inconsistent brand voice across agents. What is the root cause and fix using context isolation principles?", options: { A: "Different agents use different AI models", B: "Each agent lacks brand voice knowledge in isolated context (Context Amnesia). Fix: create Brand Voice Skill encoding all voice standards; each agent invokes Skill at task start — consistent brand knowledge across all agents.", C: "The agents are running in parallel and cross-contaminating", D: "Brand voice needs to be in shared (Network) pattern" }, correct: "B", explanation: "Context Amnesia for brand voice: each isolated agent starts fresh — no brand voice knowledge. Fix: Brand Voice Skill encoding: tone (professional but approachable), avoided buzzwords, example sentences (good vs. avoid). Every agent — whether writing social posts, email campaigns, or product descriptions — invokes Skill at start → consistent brand voice across all isolated agents." },
        { id: 30, question: "CTO asks 'Should we use Stateless Subagents or Agent Teams for our quarterly analysis?' Analysis requires researcher, analyst, and writer working on the same data. What to recommend?", options: { A: "Stateless — always best choice", B: "Agent Teams or Stateless with Orchestrator: if agents need to discuss and iterate (analyst refines researcher's findings), Agent Teams (direct messaging). If work is clearly independent (researcher gathers, analyst synthesizes, writer writes from summary), Stateless with Orchestrator is cleaner.", C: "Stateful Handoff — sequential dependencies require it", D: "Shared Network pattern — all need same data" }, correct: "B", explanation: "Decision depends on collaboration need: (1) If independent (researcher → summary → analyst → analysis → writer → draft — no back-and-forth), Stateless with Orchestrator passing summaries is clean and debuggable. (2) If iterative (analyst asks researcher follow-up questions, writer queries analyst for clarification), Agent Teams enable direct communication. Match pattern to actual coordination requirement." }
      ]
    },
    {
      id: 10,
      title: "The Context Engineering Playbook — Decision Frameworks for Quality",
      mcqs: [
        {
          id: 1,
          question: "What is the price differential between commodity AI agents and premium Digital FTEs, and what creates it?",
          options: {
            A: "$10/month vs. $100/month — created by model choice",
            B: "$50/month vs. $5,000/month — created by 'context engineering discipline' ensuring consistency, no session degradation, automatic domain expertise, and reliable scaling",
            C: "$500/month vs. $50,000/month — created by compute resources",
            D: "No price differential — quality is determined by model, not context"
          },
          correct: "B",
          explanation: "The core thesis: 'The differentiator between commodity AI agents ($50/month) and premium Digital FTEs ($5,000/month) is context engineering discipline.' Premium quality means: consistent performance across sessions, no degradation during long conversations, automatic domain expertise application, and reliable scaling to complex tasks."
        },
        {
          id: 2,
          question: "What are the four branches of the Context Engineering Decision Tree?",
          options: {
            A: "Speed, Cost, Quality, Scale",
            B: "1) Context >70%? → Compaction; 2) Multi-Session Work? → Progress file architecture; 3) Intent Drift? → Memory injection (PreToolUse hooks); 4) Multi-Agent Distribution? → Context isolation (orchestrator pattern)",
            C: "Plan, Build, Test, Deploy",
            D: "Read, Process, Write, Verify"
          },
          correct: "B",
          explanation: "Decision Tree: 1) Context >70%? → Compaction needed (task incomplete → /compact; complete → /clear); 2) Multi-Session Work? → Implement progress file architecture with granular task decomposition; 3) Intent Drift Detected? → Memory injection via vector DB or PreToolUse hooks; 4) Multi-Agent Distribution? → Context isolation using orchestrator pattern."
        },
        {
          id: 3,
          question: "What is the recommended Context Budget Allocation across the six categories?",
          options: {
            A: "Equal distribution: ~16.7% each",
            B: "System prompt (5–10%), CLAUDE.md (5–10%), Tool definitions (10–15%), Message history (30–40%), Tool outputs (20–30%), Reserve buffer (10–15%)",
            C: "Message history gets 80%; everything else splits the remaining 20%",
            D: "There is no recommended allocation — it varies completely by use case"
          },
          correct: "B",
          explanation: "Recommended Context Budget Allocation: System prompt 5–10%, CLAUDE.md 5–10%, Tool definitions 10–15%, Message history 30–40%, Tool outputs 20–30%, Reserve buffer 10–15%. Message history and tool outputs are the two largest consumers, reflecting the dominance of accumulated conversation state in practice."
        },
        {
          id: 4,
          question: "What happens to the Reserve Buffer in Late Phase (messages 50+)?",
          options: {
            A: "Reserve buffer grows to 30% as message history shrinks",
            B: "Reserve buffer drops critically to 5% as message history peaks at 50% — triggering the need for proactive compaction",
            C: "Reserve buffer remains stable at 10–15% throughout",
            D: "Reserve buffer is used by tool outputs and becomes 0%"
          },
          correct: "B",
          explanation: "Late Phase (messages 50+): Message history peaks at 50% of context, tool outputs at 25%, and Reserve buffer drops critically to 5%. This is the danger zone — very little headroom for complex responses. The recommendation is mandatory /compact at 85%+ and proactive monitoring every 10 messages above 50%."
        },
        {
          id: 5,
          question: "What is Token Budgeting Strategy #2: Vector Database Chunking?",
          options: {
            A: "Splitting the vector database across multiple servers to increase capacity",
            B: "Dividing large documents into semantic chunks stored in a vector DB — retrieving only the specific chunks semantically relevant to the current query rather than loading entire documents",
            C: "Compressing vectors to reduce storage requirements",
            D: "Batching multiple queries to the vector database for efficiency"
          },
          correct: "B",
          explanation: "Vector Database Chunking: divide large documents into semantic chunks stored in a vector database. Instead of loading a 20,000-token technical manual, retrieve the 3-5 chunks most semantically relevant to the current query (~200 tokens each). Result: ~1,000 tokens used vs. 20,000 — a 20x reduction with equivalent or better relevance."
        },
        {
          id: 6,
          question: "What is the 'Multi-Round Processing' strategy for token efficiency?",
          options: {
            A: "Processing the same data multiple times with different models",
            B: "Processing items in rounds of 5–10, each producing summaries that feed into a final synthesis — rather than loading all items simultaneously into one massive context",
            C: "Splitting API calls into multiple smaller requests",
            D: "Running the same prompt multiple times and averaging results"
          },
          correct: "B",
          explanation: "Multi-Round Processing: instead of loading all 50 documents simultaneously (massive context), process 5–10 items per round, each producing a summary. Round summaries feed into the final synthesis round. This architecture handles arbitrarily large inputs while keeping each round within optimal context bounds."
        },
        {
          id: 7,
          question: "What is Token Budgeting Strategy #5: Structural Wisdom?",
          options: {
            A: "Using clear headings in CLAUDE.md to structure information efficiently",
            B: "Stable rules belong in system messages; task-specific instructions in user messages; ephemeral data in tool results — placing information in the structurally appropriate location for its lifecycle",
            C: "Building knowledge graphs to represent information structurally",
            D: "Using consistent naming conventions to reduce ambiguity"
          },
          correct: "B",
          explanation: "Structural Wisdom: stable rules (always apply) → system messages (loaded once, applied consistently). Task-specific instructions (relevant to this session) → user messages. Ephemeral data (transient results) → tool results. Placing information in structurally appropriate locations maximizes signal per token by ensuring each category is loaded at the right time."
        },
        {
          id: 8,
          question: "What does the Legal (Contract Review) scenario recommend when context hits 78%?",
          options: {
            A: "/clear and restart from scratch",
            B: "Selective compaction preserving clause analysis + memory injection for jurisdiction-specific patterns — preserving the analytical work while clearing exploration noise",
            C: "Ignore it — 78% is within acceptable range",
            D: "Export the full context and start a new session"
          },
          correct: "B",
          explanation: "Legal scenario at 78% context: selective /compact preserving the clause-by-clause liability analysis (the actual work product) plus memory injection for jurisdiction-specific patterns (the expertise needed to continue). This preserves what matters (analysis results) while discarding what doesn't (general contract law review, research exploration)."
        },
        {
          id: 9,
          question: "What is the Real-Time Monitoring recommendation for context utilization?",
          options: {
            A: "Check /context once per session at the start",
            B: "Check /context every 10 messages when above 50%; mandatory /compact at 85%+",
            C: "Let autocompact handle everything — no manual monitoring needed",
            D: "Only check context when responses start getting worse"
          },
          correct: "B",
          explanation: "Real-Time Monitoring (Strategy #6): check /context every 10 messages when context utilization is above 50%, and apply mandatory /compact at 85%+. Proactive monitoring prevents emergency situations — catching the Orange zone early (70%) allows controlled compaction; waiting until Red (90%) requires emergency measures."
        },
        {
          id: 10,
          question: "What is the Summarize Large Blocks strategy and what token saving does it achieve?",
          options: {
            A: "Compressing code files to use fewer tokens — achieves 2x saving",
            B: "Replacing 5,000-word documents with 200-word summaries when full text isn't needed for the task — achieves 25x token reduction while preserving key insights",
            C: "Combining multiple small files into one large summary — achieves 5x saving",
            D: "Using AI to generate shorter versions of prompts — achieves 10x saving"
          },
          correct: "B",
          explanation: "Summarize Large Blocks (Strategy #1): replace full 5,000-word documents with 200-word summaries when the task requires insights rather than verbatim text. 5,000 ÷ 200 = 25x token reduction. The key judgment: does the task require the full text (exact clause analysis in legal) or just insights (understanding the general contract scope)?"
        },
        {
          id: 11,
          question: "Your Digital FTE costs $50/month but competitors charge $5,000/month. According to the price differential thesis, what creates the 100x difference?",
          options: {
            A: "Better AI models",
            B: "Context engineering discipline — consistency across sessions, no session degradation, automatic domain expertise application, reliable scaling to complex tasks",
            C: "More computing resources",
            D: "Custom AI training"
          },
          correct: "B",
          explanation: "Core thesis: 'Differentiator between commodity AI agents ($50/month) and premium Digital FTEs ($5,000/month) is context engineering discipline.' Premium quality: consistent performance across sessions, no degradation during long conversations, automatic domain expertise, reliable scaling."
        },
        {
          id: 12,
          question: "Context is at 75%. According to the Context Engineering Decision Tree, what should you do?",
          options: {
            A: "Keep working — 75% is safe",
            B: "Context >70% → Compaction needed. If task incomplete → /compact; if complete → /clear",
            C: "/clear immediately",
            D: "Ignore it — only act at 90%"
          },
          correct: "B",
          explanation: "Decision Tree branch 1: Context >70%? → Compaction needed. Task incomplete → /compact (preserve decisions); task complete → /clear (nothing to preserve). Acting at 70% prevents degradation rather than recovering from it at 90%."
        },
        {
          id: 13,
          question: "Your context budget shows: Message history 55%, Tool outputs 30%, Reserve buffer 5%. According to Late Phase analysis, what is the risk?",
          options: {
            A: "No risk — you have 10% buffer",
            B: "Danger zone — Reserve buffer dropped critically to 5% as message history peaked at 50%+. Very little headroom for complex responses. Mandatory /compact at 85%+, proactive monitoring every 10 messages above 50%",
            C: "The AI will automatically compact",
            D: "Start a new session"
          },
          correct: "B",
          explanation: "Late Phase (messages 50+): Message history peaks at 50%+, tool outputs at 25%+, Reserve buffer drops critically to 5%. Danger zone — very little headroom for complex responses. Recommendation: mandatory /compact at 85%+, proactive monitoring every 10 messages above 50%."
        },
        {
          id: 14,
          question: "You have a 20,000-token technical manual. According to Vector Database Chunking, how do you reduce token usage?",
          options: {
            A: "Compress the manual to 10,000 tokens",
            B: "Divide into semantic chunks stored in vector DB — retrieve only 3-5 chunks (~200 tokens each) most relevant to current query. Result: ~1,000 tokens vs. 20,000 — 20x reduction with equivalent or better relevance",
            C: "Summarize the entire manual to 1,000 tokens",
            D: "Don't load the manual at all"
          },
          correct: "B",
          explanation: "Vector Database Chunking: divide large documents into semantic chunks in vector DB. Instead of loading 20,000-token manual, retrieve 3-5 chunks (~200 tokens each) most semantically relevant to current query. Result: ~1,000 tokens vs. 20,000 — 20x reduction with equivalent or better relevance."
        },
        {
          id: 15,
          question: "You need to process 50 documents. According to Multi-Round Processing, how do you handle this efficiently?",
          options: {
            A: "Load all 50 documents simultaneously into one massive context",
            B: "Process in rounds of 5-10, each producing summaries that feed into final synthesis — handles arbitrarily large inputs while keeping each round within optimal context bounds",
            C: "Process one document at a time sequentially",
            D: "Use a larger context window model"
          },
          correct: "B",
          explanation: "Multi-Round Processing: instead of loading all 50 documents simultaneously (massive context), process 5-10 items per round, each producing summary. Round summaries feed into final synthesis round. Architecture handles arbitrarily large inputs while keeping each round within optimal context bounds."
        },
        { id: 16, question: "What is the core thesis distinguishing $50/month commodity agents from $5,000/month premium Digital FTEs?", options: { A: "Premium FTEs use larger AI models", B: "Context engineering discipline — quality control methodology ensuring agents maintain consistency, don't degrade long-term, apply domain expertise automatically, and scale to complex tasks", C: "Premium FTEs have more computing resources", D: "Premium FTEs require human supervision" }, correct: "B", explanation: "Core thesis: 'Context engineering discipline' creates the price differential. Commodity agents ($50/month): one-size-fits-all context, no compaction strategy, generic knowledge. Premium Digital FTEs ($5,000/month): maintained consistency Turn 1-50, proactive lifecycle management, domain expertise via Skills + Memory, architected for complex tasks. Same underlying models; entirely different context engineering discipline." },
        { id: 17, question: "What are the four questions in the Context Engineering Decision Tree?", options: { A: "What model? What prompt? What context? What output?", B: "Context >70%? Multi-session work? Intent drift detected? Multi-agent distribution? Each triggers a specific intervention.", C: "Signal enough? Noise too high? Budget exceeded? Quality acceptable?", D: "Start fresh? Compact? Continue? Escalate?" }, correct: "B", explanation: "Decision Tree: (1) Context >70%? → Yes → Compaction needed (task incomplete → /compact with selective preservation; complete → /clear), (2) Multi-session work? → Yes → Progress file architecture, (3) Intent drift? → Yes → Memory injection (vector DB or PreToolUse), (4) Multi-agent distribution? → Yes → Context isolation (orchestrator pattern). Four problems, four solutions." },
        { id: 18, question: "What is the recommended context budget distribution?", options: { A: "50% message history, 50% tool outputs", B: "System prompt 5-10%, CLAUDE.md 5-10%, Tool definitions 10-15%, Message history 30-40%, Tool outputs 20-30%, Reserve buffer 10-15%", C: "Equal distribution across all components", D: "CLAUDE.md 50%, everything else 50%" }, correct: "B", explanation: "Recommended budget: System prompt (5-10%), CLAUDE.md (5-10%), Tool definitions (10-15%), Message history (30-40%), Tool outputs (20-30%), Reserve buffer (10-15%). This ensures: enough for conversation (30-40%), enough for tool results (20-30%), reserve for complex responses (10-15%). CLAUDE.md should be lean (5-10%) — that's why audit and architectural separation matter." },
        { id: 19, question: "How does context budget distribution change from Early Phase (messages 1-10) to Late Phase (messages 50+)?", options: { A: "Distribution stays constant throughout session", B: "Early: System/CLAUDE.md dominates (30% combined), reserve 15%. Late: Message history peaks at 50%+, tool outputs 25%+, reserve drops critically to 5%.", C: "Early: all reserved; Late: all consumed", D: "Early: more tool outputs; Late: more CLAUDE.md" }, correct: "B", explanation: "Phase variation: Early (1-10): System+CLAUDE.md dominate because little conversation history. Reserve comfortable at 15%. Mid (20-40): Message history grows to 35%, reserve shrinks to 10%. Late (50+): Message history peaks at 50%+, tool outputs grow, reserve drops critically to 5%. Late phase = mandatory compaction zone. Understanding this progression enables proactive management." },
        { id: 20, question: "What is Token Strategy 1 'Summarize Large Blocks'?", options: { A: "Compressing code into shorter variable names", B: "Replace 5,000-word documents with 200-word summaries in context — preserves key information while reducing token usage 25x", C: "Auto-compacting every 100 messages", D: "Using shorter model responses" }, correct: "B", explanation: "Strategy 1 (Summarize Large Blocks): replace large documents with summaries in context. 5,000-word technical manual → 200-word summary of key findings relevant to current task. 25x reduction. Trade-off: lose detail, preserve key insights. Use when: document has been read and processed; context needs its essence, not full text. Full text available via file system if detail needed later." },
        { id: 21, question: "What is Token Strategy 3 'Offload to External Memory'?", options: { A: "Using a larger hard drive for storage", B: "Move structured data (tables, datasets, records) to databases; pass references (database connection + query) rather than loading data into context", C: "Exporting conversation history to external files", D: "Using external AI models for memory-intensive tasks" }, correct: "B", explanation: "Strategy 3 (Offload to External Memory): structured data belongs in databases, not context. Instead of loading 50-row product table into context (1,000 tokens), store in SQLite/PostgreSQL and pass: 'Database: ./products.db, Table: products. Use SQL to query.' Claude executes query, gets only relevant rows. Move data out; bring in references." },
        { id: 22, question: "What is Token Strategy 5 'Structural Wisdom'?", options: { A: "Organizing files alphabetically in projects", B: "Stable rules in system messages, task-specific in user messages, ephemeral data in tool results — right content type in right structural location", C: "Using consistent naming conventions for all files", D: "Structuring output in bullet points for clarity" }, correct: "B", explanation: "Strategy 5 (Structural Wisdom): different content types belong in different structural positions. Stable rules (coding standards, identity) → system messages (persist throughout, high attention). Task-specific context → user messages (session-relevant). Ephemeral data (query results, tool outputs) → tool results (available but not in primary attention zone). Structure determines persistence and attention." },
        { id: 23, question: "What is Token Strategy 6 'Real-Time Monitoring'?", options: { A: "Monitoring AI response quality in real-time", B: "Check /context every 10 messages when above 50%; mandatory compaction at 85%+. Proactive management prevents emergency measures.", C: "Real-time dashboard showing token usage", D: "Automated alerts when context exceeds thresholds" }, correct: "B", explanation: "Strategy 6 (Real-Time Monitoring): check /context every 10 messages when utilization above 50% (Yellow zone+). Mandatory intervention at 85%+ (Red zone). This prevents: hitting Black zone (95%+) where only /clear works, emergency compaction losing nuanced work, autocompact triggering without control. Proactive monitoring = planned compaction at Orange vs. emergency at Red/Black." },
        { id: 24, question: "What is the Consistency quality criterion (Turn 1 vs. Turn 50)?", options: { A: "Consistency of code formatting throughout session", B: "Score 5: Indistinguishable output quality at Turn 1 vs. Turn 50. Score 3: noticeable quality drop but conclusions correct. Score 1: dramatic decline with major errors.", C: "How consistently the agent follows CLAUDE.md rules", D: "Consistency of response length across the session" }, correct: "B", explanation: "Consistency criterion: measures whether agent quality degrades over long sessions. Score 5 (production-ready): Turn 50 output is indistinguishable from Turn 1. Score 3 (acceptable): quality drops but conclusions are still correct. Score 1 (unacceptable): dramatic decline with major errors by Turn 50. Failure indicates context rot or poor compaction strategy." },
        { id: 25, question: "What is the Persistence quality criterion (24-Hour Resumption)?", options: { A: "Whether files persist after session ends", B: "Score 5: picks up where it left off in <5 minutes. Score 3: needs significant re-explanation (10-20 minutes). Score 1: effectively starting over. Measures session resumption quality.", C: "How long the AI model stays in memory", D: "Whether tasks persist across /clear commands" }, correct: "B", explanation: "Persistence criterion: simulates real-world condition of resuming work next day. Score 5: resumes in <5 minutes (excellent progress files + session management). Score 3: takes 10-20 minutes of re-explanation (some session management, incomplete progress files). Score 1: starting over (no persistence mechanism). Failure indicates need for progress files or session resumption strategy." },
        { id: 26, question: "What is the Production-Ready Threshold across all four quality criteria?", options: { A: "Score 5 (perfect) on all four criteria", B: "Score 3+ on all four criteria: Consistency, Persistence, Scalability, and Knowledge. Below 3 on any = not production-ready.", C: "Average score of 3+ across all four criteria", D: "Score 4+ on Consistency and Knowledge; 3+ on others" }, correct: "B", explanation: "Production-Ready Threshold: Score 3+ on ALL four criteria. Consistency (Turn 1 vs 50), Persistence (24-hour resumption), Scalability (10-step task integrity), Knowledge (domain rule application). Below 3 on ANY one criterion = not production-ready. Rationale: a Digital FTE with poor Persistence (Score 1 = starting over daily) fails real-world deployment regardless of other scores." },
        { id: 27, question: "What symptom indicates the root cause 'Low signal density' and what is the solution?", options: { A: "Claude gives wrong answers; solution: better model", B: "Noisy context symptom → Signal-to-noise audit using 4-Question Framework. Remove noise, reduce CLAUDE.md to <60 lines.", C: "Claude is too slow; solution: hardware upgrade", D: "Claude ignores tools; solution: tool documentation" }, correct: "B", explanation: "When-to-Use Mapping: Noisy context symptom → root cause: Low signal density → solution: Signal-to-noise audit (4-Question Framework). Remove content failing Q1-Q4: inferrable from materials, standard conventions, frequently changing, not adding signal. Result: 40-60% reduction with equal or better compliance." },
        { id: 28, question: "What symptom indicates 'Position in context' as root cause and what is the solution?", options: { A: "Slow responses; solution: compact context", B: "Critical instructions ignored → position problem (Zone 2 = low attention). Solution: Zone optimization — move critical content to Zone 1 (first 10%) or Zone 3 (last 10%).", C: "Wrong file edits; solution: add AGENTS.md", D: "Model confusion; solution: clearer prompts" }, correct: "B", explanation: "When-to-Use Mapping: Critical instructions ignored → root cause: Position in context (Zone 2 = ~30% less recall) → solution: Zone optimization. Move critical constraints/rules to Zone 1 (first 10%, HIGH primacy attention). Move workflow instructions to Zone 3 (last 10%, HIGH recency attention). Middle 80% is the low-attention graveyard for important rules." },
        { id: 29, question: "What symptom indicates 'Knowledge loss over time' as root cause and what is the solution?", options: { A: "Files being deleted; solution: read-only access", B: "Drifting from brief (workflow drift) → root cause: knowledge loss over session turns → solution: memory injection via vector DB or PreToolUse hooks", C: "Wrong code style; solution: update CLAUDE.md", D: "Slow session resumption; solution: progress files" }, correct: "B", explanation: "When-to-Use Mapping: Drifting from brief → root cause: Knowledge loss over time (Workflow Drift problem — Turn 1 context irrelevant by Turn 20) → solution: Memory injection. PreToolUse hook reads current thinking block, queries vector DB for relevant memories, injects via additionalContext. Memories evolve with the workflow instead of being fixed at Turn 1." },
        { id: 30, question: "Digital FTE agent achieves Score 5 on Consistency, Score 2 on Persistence (takes 20+ minutes to resume), Score 4 on Scalability, Score 5 on Knowledge. Is it production-ready?", options: { A: "Yes — three out of four scores are excellent", B: "No — Score 2 on Persistence fails the Production-Ready Threshold of Score 3+ on ALL four criteria. Fix: implement progress file architecture and session management commands.", C: "Yes — average score is 4.0, well above threshold", D: "Depends on the specific use case" }, correct: "B", explanation: "Not production-ready: Score 2 on Persistence (takes 20+ minutes to resume daily) fails the threshold. Despite excellent other scores, this Digital FTE fails real-world deployment — a knowledge worker can't spend 20+ minutes re-explaining context every morning. Fix: progress files (architect the session resumption), session management (claude --continue), and CLAUDE.md default compaction instructions to preserve key decisions." }
      ]
    }
  ]
};
