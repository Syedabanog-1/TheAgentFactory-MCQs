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
          question: "Scenario: You're building a customer support Digital FTE that handles 500+ tickets daily. After 3 hours of conversation, Claude starts making errors referencing outdated ticket policies from earlier in the session. According to Context Engineering principles, what is happening and how do you fix it?",
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
          question: "Scenario: Your CLAUDE.md file is 350 lines. Claude frequently ignores critical instructions about test commands and coding conventions. According to the Signal vs. Noise audit and Instruction Limit Problem, what is the root cause?",
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
          question: "Scenario: You're designing context architecture for a marketing consultant Digital FTE. Option A stores all expertise in CLAUDE.md (7,300 tokens). Option B uses minimal CLAUDE.md (400 tokens) + Skill descriptions (150 tokens) with full details loaded on-demand. According to the 13-fold reduction principle, what is the per-request token savings?",
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
          question: "Scenario: Your team is building a healthcare compliance Digital FTE. You need to decide where to store: (1) HIPAA compliance rules, (2) current sprint goals, (3) preferred test commands, (4) deployment workflow. According to Context Architecture principles, which belongs in CLAUDE.md vs. Skills vs. task files?",
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
          question: "Scenario: You're auditing a 6-month-old Digital FTE product. Users report inconsistent behavior — sometimes it follows conventions perfectly, other times it ignores them. The CLAUDE.md hasn't changed. According to Context Rot types, what is the likely cause and how do you diagnose it?",
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
          id: 11,
          question: "Scenario: Legal contract review at 78% context. Includes: general law review (20%), jurisdiction patterns (15%), clause analysis (30%), research (15%), other (20%). What to do?",
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
          id: 12,
          question: "Scenario: Customer support FTE at 82%. Policies (10%), product docs (25%), conversation (30%), training (20%), troubleshooting (15%). Preserve?",
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
          id: 13,
          question: "Scenario: Code review at 75%. Architecture (15%), conventions (10%), PR history (25%), code changes (30%), discussion (20%). Compact?",
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
          id: 14,
          question: "Scenario: Marketing content at 80%. Brand (15%), audience (20%), drafts (30%), competitors (20%), theory (15%). Preserve?",
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
          id: 15,
          question: "Scenario: Data analysis at 85% mandatory. Schema (10%), raw data (25%), code (20%), results (25%), methodology (20%). Strategy?",
          options: {
            A: "Keep raw data",
            B: "Code + results + schema; summarize raw data, discard methodology",
            C: "Only methodology",
            D: "Clear re-run"
          },
          correct: "B",
          explanation: "At 85% mandatory: preserve code (work), results (progress), schema (structure). Summarize raw data to key stats. Discard methodology (base knowledge)."
        }
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
          question: "Scenario: Your CLAUDE.md is 250 lines with detailed deployment workflows, coding conventions, and sprint goals. Claude ignores the deployment workflow instructions. According to the 4-Question Audit, what is the likely problem and fix?",
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
          question: "Scenario: You're auditing a CLAUDE.md that says 'Use TypeScript best practices' and 'Write clean code.' Claude consistently violates these rules. According to Signal vs. Noise principles, why are these instructions ignored?",
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
          question: "Scenario: Team A has a 40-line CLAUDE.md. Team B has a 300-line CLAUDE.md. Both teams report Claude 'sometimes follows instructions.' According to the Instruction Limit Problem and Three-Zone Position Strategy, what is Team B's likely issue?",
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
          question: "Scenario: You add 'Always use async/await, never callbacks' to CLAUDE.md Zone 2 (middle). Claude ignores this 40% of the time. According to Three-Zone Position Strategy, what repositioning would help?",
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
          question: "Scenario: After applying the 4-Question Audit to your 280-line CLAUDE.md, you identify 150 lines as noise (standard conventions, frequently changing sprint info, vague imperatives). What is the expected outcome after removing this noise?",
          options: {
            A: "Claude will have less context and produce worse output",
            B: "40-60% reduction (to ~130 lines), equal or better compliance, fewer clarifying questions, extended session duration before compaction needed — less noise means more attention budget for critical rules",
            C: "The file will be too short to be useful",
            D: "Claude will ask more questions because context is missing"
          },
          correct: "B",
          explanation: "Expected audit results: 40-60% content reduction (280 → ~130 lines, ideally ~60 lines), equal or better compliance (removing noise doesn't hurt — it helps by freeing instruction budget), fewer clarifying questions (relevant context is clearer), extended session duration (fewer tokens per request). The Signal vs. Noise lesson emphasizes: less is more when signal-to-noise ratio improves."
        }
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
          question: "Scenario: You're 3 hours into a complex refactoring session. Context is at 75%. You need to continue working but responses are slowing. According to the Plan-Clear-Execute pattern, what should you do?",
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
          question: "Scenario: Your team has 5 developers working on the same project across multiple sessions. Each developer needs to see the same task list. How do you configure this?",
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
          question: "Scenario: You have a task 'Refactor authentication module' with subtasks: Update login API, Add MFA support, Update tests. According to DAG dependencies, how should you structure this?",
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
          question: "Scenario: A task says 'Address feedback' and has been 'In Progress' for 2 weeks. According to task decomposition principles, what is the problem?",
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
          question: "Scenario: You're ending a work session. According to the Exit Protocol, what must you do before closing?",
          options: {
            A: "Run /clear and close the terminal",
            B: "Checkpoint work (git commit, save deliverables) + Update Tasks (move tasks to correct sections, document decisions). Never end with half-edited work scattered in files.",
            C: "Export the conversation and archive it",
            D: "Email the team a summary of what was done"
          },
          correct: "B",
          explanation: "Exit Protocol: 1) Checkpoint work — save deliverables in stable condition (git commit, finalized documents); 2) Update Tasks — move tasks to correct sections, document decisions. 'Never end with half-edited work' — next session starts from Tasks, not memory."
        }
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
          question: "Scenario: Your law firm uses the same AI model as competitors but produces superior briefs. According to the Two-Way Problem, what is your differentiator?",
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
          question: "Scenario: AI generates a 50-page legal analysis. You accept it without reading because 'AI is reliable.' According to Direction 2 (AI → Professional), what failure mode is this?",
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
          question: "Scenario: Your CLAUDE.md says 'Write concise emails' but AI still writes long emails. According to 'Examples Over Rules', what is the problem?",
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
          question: "Scenario: You're working on a 3-day project. Session 1 captured client preferences for 'formal tone, Oxford comma, primary source citations.' Session 2 starts fresh. According to Memory Scoping, how do you preserve this?",
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
          question: "Scenario: Marketing team uses AI to create campaign content. They provide abstract rules ('be creative, on-brand, engaging') but get generic output. According to tacit knowledge principles, what's missing?",
          options: {
            A: "Better AI models",
            B: "Unwritten expertise: client's brand voice nuances, past campaign performance data, audience segment preferences, competitor positioning — the micro-decisions that shape expert marketing",
            C: "More detailed prompts",
            D: "Human review of all output"
          },
          correct: "B",
          explanation: "Tacit knowledge = unwritten expertise: brand voice nuances ('we avoid these buzzwords'), past campaign performance ('this headline style converted 3x better'), audience preferences ('Segment A responds to urgency, Segment B to social proof'). This transforms generic AI into expert marketing AI."
        }
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
          question: "Scenario: You're 4 hours into a session. Context is at 72% (Orange zone). According to the five Context Zones, what should you do?",
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
          question: "Scenario: Your session is 5 days old. You can't remember what work was being done, context references changed files, resuming takes longer than starting fresh. According to the 3-Day Rule, what should you do?",
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
          question: "Scenario: You're ending a 6-hour session at 68% context. According to the Save Checkpoint Pattern, what should you do before /compact?",
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
          question: "Scenario: Marketing session at 80% context. Includes: final positioning (15%), audience segments (20%), messaging hierarchy (15%), rejected tagline brainstorming (30%). According to Marketing /compact template, what to preserve/discard?",
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
          question: "Scenario: Your team uses three session resume commands. According to Claude Code, when do you use claude --continue vs. claude --resume vs. /resume?",
          options: {
            A: "They're interchangeable — choose based on preference",
            B: "claude --continue = resume most recent (fastest for continuing yesterday's work); claude --resume = choose from list (pick specific past session); /resume = switch sessions within current conversation (jump between parallel work streams)",
            C: "claude --continue = new session; claude --resume = old session; /resume = current session",
            D: "claude --continue = CLI only; claude --resume = GUI only; /resume = both"
          },
          correct: "B",
          explanation: "Session resume commands: claude --continue = resume most recent automatically (fastest for continuing yesterday's work), claude --resume = show list to choose from (pick specific past session), /resume = switch sessions within active conversation (jumping between parallel work streams)."
        }
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
          question: "Scenario: You're resuming a 3-day-old project. According to the Two-Agent Mental Model, what should the Working Agent do first?",
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
          question: "Scenario: Your progress file has 'Completed', 'In Progress', 'Blocked', 'Not Started', 'Decisions Made', 'Known Issues', 'Session Log' sections. According to the seven-section anatomy, where do you document 'chose PostgreSQL over MongoDB because Z'?",
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
          question: "Scenario: Task 'Refactor auth module' is 40% complete with '2 hours remaining' in In Progress section. According to progress file anatomy, what else should be tracked?",
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
          question: "Scenario: You're ending a session. Task 'Add MFA support' is half-done with code scattered across files. According to Exit Protocol, what must you do?",
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
          question: "Scenario: Your team has 5 developers. Each works independent sessions but needs coordination. According to Harness Architecture, how do you coordinate?",
          options: {
            A: "Daily standup meetings only",
            B: "Shared progress file — each session reads file, does work, writes back. File is coordination mechanism, not session state",
            C: "Shared CLAUDE.md via git",
            D: "Slack channel for updates"
          },
          correct: "B",
          explanation: "Harness Architecture: coordinates independent sessions through shared progress file. Each session reads file, does work, writes back. Sessions don't share context — they share the file. File is persistent project brain."
        }
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
          question: "Scenario: Your AI session is 2 hours old. Initial context was 'review vendor agreement' but now you're on 'indemnification clause analysis'. According to Workflow Drift, what is the problem?",
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
          question: "Scenario: You're building a memory injection system. According to the lesson, when should you use UserPromptSubmit vs. PreToolUse hooks?",
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
          question: "Scenario: Turn 1 prompt is 'Review vendor agreement'. Turn 20 thinking is 'Drafting liability risk section focusing on indemnification clause 7.2'. According to Thinking Blocks principle, which is more valuable for memory retrieval?",
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
          question: "Scenario: Your memory injection hook takes 200ms to query the vector DB. According to the PreToolUse flow, what is the impact?",
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
          question: "Scenario: Your team wants basic memory injection without a vector database. According to the lesson, what is the simple implementation?",
          options: {
            A: "It's impossible without a vector DB",
            B: "Python script registered as PreToolUse hook that reads ~/project/memories.md and returns content as additionalContext via hookSpecificOutput. No vector DB required — just flat file of memories",
            C: "Use CLAUDE.md instead of memories",
            D: "Manually paste memories into each prompt"
          },
          correct: "B",
          explanation: "Simple implementation: Python script registered as PreToolUse hook reads ~/project/memories.md, returns content as additionalContext in hookSpecificOutput JSON. No vector DB required — flat file of memories provides basic mid-stream memory injection with minimal setup."
        }
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
          question: "Scenario: You're building a linear AI pipeline: Agent A (research) → Agent B (analysis) → Agent C (brief writing). According to the Dirty Slate Problem, what happens by Agent C?",
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
          question: "Scenario: You're designing a multi-agent system. According to Clean Context Pattern, how should the orchestrator coordinate subagents?",
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
          question: "Scenario: Your team uses 16 parallel AI agents to build a compiler (like the Nicholas Carlini case study). According to the lesson, what was the key differentiator for success?",
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
          question: "Scenario: You're setting up tool access control for your AI team. According to the three roles, what tools should 'Research analysts' have?",
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
          question: "Scenario: You're building a multi-agent system for code review. According to Master-Clone Architecture, how do you give each subagent domain knowledge without accumulated noise?",
          options: {
            A: "Each subagent reads all previous agents' transcripts",
            B: "Each subagent reads full project brief (master spec) at task start — clean context with all critical domain knowledge, no accumulated noise from prior work",
            C: "Share a single context window across all agents",
            D: "Fine-tune each subagent on the codebase"
          },
          correct: "B",
          explanation: "Master-Clone Architecture: each subagent reads full project brief ('master' spec) at task start — giving all domain context in clean slate. 'Clone' is fresh agent initialized with master spec. Combines clean context (no accumulated noise) with full domain knowledge."
        }
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
          question: "Scenario: Your Digital FTE costs $50/month but competitors charge $5,000/month. According to the price differential thesis, what creates the 100x difference?",
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
          question: "Scenario: Context is at 75%. According to the Context Engineering Decision Tree, what should you do?",
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
          question: "Scenario: Your context budget shows: Message history 55%, Tool outputs 30%, Reserve buffer 5%. According to Late Phase analysis, what is the risk?",
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
          question: "Scenario: You have a 20,000-token technical manual. According to Vector Database Chunking, how do you reduce token usage?",
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
          question: "Scenario: You need to process 50 documents. According to Multi-Round Processing, how do you handle this efficiently?",
          options: {
            A: "Load all 50 documents simultaneously into one massive context",
            B: "Process in rounds of 5-10, each producing summaries that feed into final synthesis — handles arbitrarily large inputs while keeping each round within optimal context bounds",
            C: "Process one document at a time sequentially",
            D: "Use a larger context window model"
          },
          correct: "B",
          explanation: "Multi-Round Processing: instead of loading all 50 documents simultaneously (massive context), process 5-10 items per round, each producing summary. Round summaries feed into final synthesis round. Architecture handles arbitrarily large inputs while keeping each round within optimal context bounds."
        }
      ]
    }
  ]
};
