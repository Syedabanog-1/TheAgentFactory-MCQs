import type { Chapter } from "@/types";

export const chapter12: Chapter = {
  id: 12,
  title: "The AI Agent Factory Paradigm",
  description: "Establishing mental models for AI-native development — from the $3T developer economy to Digital FTEs and enterprise sales.",
  color: "blue",
  lessons: [
    {
      id: 1,
      title: "The 2025 Inflection Point and the Agent Maturity Model",
      mcqs: [
        {
          id: 1,
          question: "At the ICPC World Finals in September 2025, how many problems did the OpenAI AI ensemble solve compared to the human champions?",
          options: {
            A: "AI solved 11; humans solved 12",
            B: "AI solved 12 (all); humans solved 11",
            C: "Both solved 12; AI was faster",
            D: "AI solved 10; humans solved 12"
          },
          correct: "B",
          explanation: "The OpenAI ensemble achieved a perfect score of 12/12, while human champions solved 11. Problem C was solved by AI but by none of the 139 human teams."
        },
        {
          id: 2,
          question: "According to the GDPval Benchmark, what was Claude Opus 4.1's win rate against expert programmers in early 2026?",
          options: {
            A: "15%",
            B: "40.6%",
            C: "49%",
            D: "76%"
          },
          correct: "C",
          explanation: "Claude Opus 4.1 achieved a 49% win rate against expert programmers on the GDPval Benchmark. GPT-5 reached 40.6%. Eighteen months prior, both were below 15%."
        },
        {
          id: 3,
          question: "In the Agent Maturity Model, what is your primary role when using a Stage 1 General Agent (Incubator)?",
          options: {
            A: "Builder — define purpose precisely and build guardrails",
            B: "Director — set intent, provide relevant files, review work, and course correct",
            C: "Architect — design the overall system structure",
            D: "Deployer — move prototype to production environments"
          },
          correct: "B",
          explanation: "In Stage 1 (General Agent/Incubator), your role is Director — you set intent, provide the 'dossier' of relevant files, review work, and course correct. The Builder role belongs to Stage 2 (Custom Agent/Specialist)."
        },
        {
          id: 4,
          question: "What is the central insight about the relationship between General Agents and Custom Agents?",
          options: {
            A: "General Agents compete with Custom Agents for market share",
            B: "Custom Agents replace General Agents as AI matures",
            C: "General Agents BUILD Custom Agents",
            D: "General Agents are only useful for prototype development"
          },
          correct: "C",
          explanation: "The central insight is: 'General Agents don't compete with Custom Agents. General Agents BUILD Custom Agents.' The factory cycle is Incubation → Crystallization → Specialization → Production → Evolution."
        },
        {
          id: 5,
          question: "According to the Stack Overflow 2025 Developer Survey, what percentage of professional developers reported daily use of AI coding tools?",
          options: {
            A: "25%",
            B: "51%",
            C: "84%",
            D: "90%"
          },
          correct: "B",
          explanation: "The Stack Overflow 2025 Developer Survey found 84% of professional developers use or plan to use AI coding tools, and 51% report daily use. The 90% figure is from the DORA 2025 Report's adoption rate."
        },
        {
          id: 6,
          question: "What defines the $3 Trillion Developer Economy?",
          options: {
            A: "The total revenue of all AI companies combined",
            B: "~30M global professional devs × $100K avg economic value = $3T potential market impact from productivity gains",
            C: "The cost of training all developers on AI tools",
            D: "The investment in AI startup funding for 2025"
          },
          correct: "B",
          explanation: "The $3T figure represents the economic value of ~30M global professional developers at ~$100K average economic value each. AI productivity gains ripple across this entire market."
        },
        {
          id: 7,
          question: "What is the primary difference between Traditional CS skills and AI-Native development skills?",
          options: {
            A: "Traditional focuses on syntax and algorithms; AI-Native focuses on specification writing, agent orchestration, and validation",
            B: "Traditional is more expensive than AI-Native",
            C: "AI-Native eliminates the need for any coding knowledge",
            D: "Traditional skills are obsolete"
          },
          correct: "A",
          explanation: "Traditional CS: syntax mastery, algorithm optimization, manual debugging, design patterns, full-stack coding. AI-Native: specification writing, prompting & collaboration, agent design/orchestration, systems thinking, validation & testing."
        },
        {
          id: 8,
          question: "What characterizes Stage 2 Custom Agents (Specialists) compared to Stage 1 General Agents?",
          options: {
            A: "More flexible and creative",
            B: "Execute known workflows with precision, reliability, speed, and governance at scale with hard constraints",
            C: "Better at exploration and discovery",
            D: "Require more human oversight"
          },
          correct: "B",
          explanation: "Stage 2 Custom Agents execute known workflows with precision, reliability, speed, and governance. They have predefined workflows, hard safety limits, precise tools, and are designed for volume and consistency."
        },
        {
          id: 9,
          question: "What are the three anti-patterns to avoid in the Agent Factory paradigm?",
          options: {
            A: "Using too many agents, spending too much time, hiring too many developers",
            B: "Premature specialization, perpetual incubation, skipping incubation",
            C: "Building Custom Agents first, testing too early, deploying too late",
            D: "Using only General Agents, ignoring Custom Agents, avoiding AI entirely"
          },
          correct: "B",
          explanation: "Three anti-patterns: 1) Premature Specialization — building Custom Agents before requirements stabilize, 2) Perpetual Incubation — using General Agents for production when Specialists are needed, 3) Skipping Incubation — specifying Custom Agents without exploration leading to missed requirements."
        },
        {
          id: 10,
          question: "What is the feedback loop in the Agent Factory paradigm?",
          options: {
            A: "Incubator → evolves into → Specialist → serves Users → feedback (patterns/failures) → Incubator",
            B: "Specialist → replaces → Incubator → stops development",
            C: "Users → directly build → Specialists without Incubator",
            D: "Incubator → becomes obsolete → replaced by new Incubator"
          },
          correct: "A",
          explanation: "The feedback loop: Incubator (General Agent) explores and prototypes → evolves into Specialist (Custom Agent) for production → serves Users → feedback patterns/failures return to Incubator → Incubator analyzes and builds improved/new Specialists."
        },
        {
          id: 11,
          question: "Scenario: You are a solo developer building a customer support chatbot. According to the Agent Maturity Model, what is the correct progression?",
          options: {
            A: "Start with Custom Agent, then use General Agent",
            B: "Stage 1 (General Agent) → Stage 2 (Custom Agent) → Stage 3 (Specialized) → Stage 4 (Multi-agent)",
            C: "Skip General Agents entirely",
            D: "Use only General Agents throughout"
          },
          correct: "B",
          explanation: "The Agent Maturity Model progression is: Stage 1 (General Agent for prototyping), Stage 2 (Custom Agent with guardrails), Stage 3 (Specialized production agent), Stage 4 (Multi-agent orchestration)."
        },
        {
          id: 12,
          question: "Scenario: Your startup debates building Custom Agents vs using only General Agents. What is the strategic advantage of Custom Agents?",
          options: {
            A: "Custom Agents are cheaper",
            B: "Custom Agents encode domain-specific expertise, creating defensible IP that General Agents cannot replicate",
            C: "Custom Agents work offline",
            D: "Custom Agents replace human developers"
          },
          correct: "B",
          explanation: "Custom Agents encode domain-specific expertise and workflows unique to your organization, creating defensible IP. General Agents are commodities; Custom Agents are your competitive moat."
        },
        {
          id: 13,
          question: "Scenario: A fintech company needs 99% accuracy for loan approvals. Which Agent Maturity Model stage should they target?",
          options: {
            A: "Stage 1 (General Agent)",
            B: "Stage 2 (Custom Agent)",
            C: "Stage 3 (Specialized Agent) with compliance checks and human escalation",
            D: "Stage 4 (Multi-agent)"
          },
          correct: "C",
          explanation: "For compliance-critical, high-accuracy requirements, Stage 3 (Specialized Agent) is appropriate with domain expertise, compliance guardrails, and human escalation paths."
        },
        {
          id: 14,
          question: "Scenario: Your manager asks why invest in Custom Agents when General Agents keep improving. What is the correct response?",
          options: {
            A: "General Agents will replace Custom Agents",
            B: "General Agents BUILD Custom Agents — they're complementary. Use General Agents to prototype, then crystallize into Custom Agents",
            C: "Custom Agents are cheaper",
            D: "General Agents only work for coding"
          },
          correct: "B",
          explanation: "The central insight: 'General Agents BUILD Custom Agents.' Use General Agents (Claude Code) as the incubator to prototype, then crystallize successful prototypes into Custom Agents encoding your unique workflows."
        },
        {
          id: 15,
          question: "Scenario: Your team achieved 51% daily AI adoption. According to Stack Overflow 2025 and DORA 2025, what productivity improvement should you expect?",
          options: {
            A: "No measurable difference",
            B: "Teams ship 2-3x faster with higher developer satisfaction",
            C: "Teams ship slower due to bugs",
            D: "Only juniors benefit"
          },
          correct: "B",
          explanation: "High AI adoption (51%+ daily) correlates with 2-3x faster shipping, higher developer satisfaction, and lower change failure rates per DORA 2025 Report."
        }
      ]
    },
    {
      id: 2,
      title: "The Three Core Operational Constraints of LLMs",
      mcqs: [
        {
          id: 1,
          question: "What creates the 'illusion of memory' in AI assistants that appear to remember previous conversations?",
          options: {
            A: "The model fine-tunes itself during the conversation",
            B: "Applications re-send the conversation history with each new message",
            C: "LLMs store memories in a dedicated long-term memory module",
            D: "Temperature settings enable recall of prior interactions"
          },
          correct: "B",
          explanation: "LLMs are fundamentally stateless — each API call starts fresh. The illusion of memory comes from applications re-sending conversation history with each new message. Session continuity is an application feature, not a model feature."
        },
        {
          id: 2,
          question: "At a temperature setting of 0.7, what behavior can you expect from an LLM?",
          options: {
            A: "Maximum determinism with identical outputs every run",
            B: "Balanced creativity and coherence — the typical default",
            C: "High creativity with significant risk of incoherence",
            D: "Purely random token selection"
          },
          correct: "B",
          explanation: "Temperature 0.7 represents balanced creativity/coherence and is the typical default. Temperature 0 is most deterministic; temperature 1.0+ increases creativity but risks incoherence. Even at temperature 0, subtle variations can still occur."
        },
        {
          id: 3,
          question: "What is Gemini 3 Pro's context window size as of early 2026?",
          options: {
            A: "200K tokens",
            B: "256K tokens",
            C: "1M tokens",
            D: "2M tokens"
          },
          correct: "D",
          explanation: "Gemini 3 Pro has a 2M token context window (~1,500,000 words / ~5,000 pages). Claude Opus 4.5 has 200K tokens and GPT-5.2 has 256K tokens."
        },
        {
          id: 4,
          question: "Which methodological response correctly addresses the 'Probabilistic' constraint of LLMs?",
          options: {
            A: "Writing comprehensive AGENTS.md files",
            B: "Using MCP servers for persistent context",
            C: "Implementing SDD's Validate phase and Test-Driven Development",
            D: "Keeping conversations focused and short"
          },
          correct: "C",
          explanation: "The probabilistic constraint (variable outputs) is addressed by validation — SDD's Validate phase, TDD, and Quality Gates. The stateless constraint is addressed by AGENTS.md/SPEC.md/MCP/Skills. Limited context is addressed by specification-first thinking."
        },
        {
          id: 5,
          question: "What is the correct mental model for working with an LLM according to the Three Constraints framework?",
          options: {
            A: "A colleague who learns and improves from each conversation",
            B: "A search engine that retrieves relevant pre-stored answers",
            C: "A brilliant expert with amnesia briefed from scratch each session",
            D: "A database that stores and retrieves your previous work"
          },
          correct: "C",
          explanation: "The correct mental model is: 'The AI is like a brilliant expert with amnesia briefed from scratch each session.' This explains why every spec, every AGENTS.md, and every MCP server exists — to work around the Three Constraints."
        },
        {
          id: 6,
          question: "What are the Three Core Operational Constraints of LLMs?",
          options: {
            A: "Cost, Speed, Accuracy",
            B: "Stateless (no memory), Probabilistic (variable outputs), Limited context window",
            C: "Language barriers, Code complexity, Time delays",
            D: "Security risks, Data privacy, Model bias"
          },
          correct: "B",
          explanation: "The Three Constraints: 1) Stateless — each session starts fresh without memory, 2) Probabilistic — same prompt produces different outputs, 3) Limited context — context windows have fixed capacity (200K-2M tokens)."
        },
        {
          id: 7,
          question: "Which solution addresses the 'Stateless' constraint of LLMs?",
          options: {
            A: "Writing tests before implementation",
            B: "Using CLAUDE.md, SPEC.md, and MCP servers for persistent external context",
            C: "Setting temperature to 0",
            D: "Using shorter prompts"
          },
          correct: "B",
          explanation: "The stateless constraint is addressed by external persistent context: CLAUDE.md (project conventions), SPEC.md (feature specs), MCP servers (tool connectivity), and Agent Skills (packaged expertise). These 'brief the amnesiac expert' each session."
        },
        {
          id: 8,
          question: "Why does the 'Limited Context' constraint require specification-first thinking?",
          options: {
            A: "Specs replace the need for context windows",
            B: "Signal-dense specs, progressive disclosure via file references, and Skills for domain knowledge maximize signal within fixed context budget",
            C: "Context windows are unlimited in 2026",
            D: "Specs reduce model accuracy"
          },
          correct: "B",
          explanation: "Limited context requires curation: write signal-dense specs (only what changes AI behavior), use progressive disclosure (reference files for on-demand lookups), and move domain knowledge to Skills (load ~100 tokens metadata, full content on-demand)."
        },
        {
          id: 9,
          question: "What is the relationship between temperature and LLM determinism?",
          options: {
            A: "Higher temperature = more deterministic",
            B: "Lower temperature = more deterministic; higher = more creative but risks incoherence",
            C: "Temperature has no effect on output variability",
            D: "Temperature 0 guarantees 100% identical outputs always"
          },
          correct: "B",
          explanation: "Temperature controls randomness: lower (0.0-0.3) = more deterministic/predictable, balanced (0.7) = creativity/coherence default, higher (1.0+) = more creative but risks incoherence. Even at temperature 0, subtle variations can still occur."
        },
        {
          id: 10,
          question: "Which constraint explains why AI might give different code implementations for the same prompt across sessions?",
          options: {
            A: "Stateless",
            B: "Probabilistic — same prompt produces variable outputs requiring validation",
            C: "Limited context",
            D: "All three constraints equally"
          },
          correct: "B",
          explanation: "The probabilistic constraint means LLMs are non-deterministic — identical prompts produce different outputs. This is why validation (TDD, quality gates, spec matching) is essential to verify outputs meet requirements regardless of variability."
        },
        {
          id: 11,
          question: "Scenario: You start a new session to continue work on an authentication feature. Claude asks 'What would you like to work on?' According to the Three Constraints, what should you do FIRST to work around the stateless constraint?",
          options: {
            A: "Explain the feature from scratch",
            B: "Reference @CLAUDE.md or @docs/auth-spec.md to provide persistent context",
            C: "Ask Claude to search its memory",
            D: "Fine-tune the model"
          },
          correct: "B",
          explanation: "The stateless constraint means each session starts fresh. Working around it requires external persistent context: CLAUDE.md (project conventions), spec documents, or MCP servers. Referencing these files 'briefs the amnesiac expert' with all necessary context."
        },
        {
          id: 12,
          question: "Scenario: Your team is frustrated because Claude gives different implementations for the same task across sessions. According to the Three Constraints, which constraint causes this and what is the response?",
          options: {
            A: "Stateless — use longer context windows",
            B: "Probabilistic — implement SDD's Validate phase, TDD, and quality gates to verify outputs",
            C: "Limited context — summarize conversations",
            D: "Temperature — set to 0"
          },
          correct: "B",
          explanation: "The probabilistic constraint means LLMs produce variable outputs. The response is validation: SDD's Validate phase ensures implementation matches spec, TDD provides objective pass/fail criteria. You can't eliminate probabilism, but you can validate against it."
        },
        {
          id: 13,
          question: "Scenario: Your spec + conversation + code files are approaching the context window limit. According to the Three Constraints, what is the strategic response?",
          options: {
            A: "Upgrade to a larger context model",
            B: "Specification-first thinking: write signal-dense specs, use progressive disclosure via file references, move domain knowledge to Skills",
            C: "Delete old messages",
            D: "Split into multiple specs"
          },
          correct: "B",
          explanation: "The limited context constraint is addressed by specification-first thinking: write signal-dense specs, use progressive disclosure (reference external files), and move domain knowledge to Skills (load ~100 tokens metadata always, full SKILL.md on-demand)."
        },
        {
          id: 14,
          question: "Scenario: A developer complains 'I re-explain our tech stack to Claude every session — wasting 15 minutes daily!' According to the Three Constraints, what solution addresses this?",
          options: {
            A: "Record each session",
            B: "Create a CLAUDE.md file that Claude reads automatically at session start",
            C: "Use temperature 0",
            D: "Fine-tune a custom model"
          },
          correct: "B",
          explanation: "The stateless constraint means sessions don't share memory. CLAUDE.md solves this by providing persistent external context: Claude reads it automatically at session start, learning tech stack and conventions without re-explanation."
        },
        {
          id: 15,
          question: "Scenario: A developer argues 'The Three Constraints are limitations to fight — wait for better models.' According to the course, what is the correct mindset?",
          options: {
            A: "Constraints are temporary — wait 2 years",
            B: "Constraints are fundamental. Win by working WITH them: specs for stateless, validation for probabilistic, curation for limited context.",
            C: "Constraints only apply to open-source models",
            D: "Constraints are marketing myths"
          },
          correct: "B",
          explanation: "The Three Constraints are fundamental to LLMs. The winning mindset: work WITH constraints. Stateless → use external context (CLAUDE.md, specs, MCP). Probabilistic → validate (TDD, quality gates). Limited context → curate signal. Teams mastering constraint-aware workflows outperform those waiting for 'perfect' models."
        }
      ]
    },
    {
      id: 3,
      title: "From Coder to Orchestrator and the OODA Loop",
      mcqs: [
        {
          id: 1,
          question: "What is the fundamental role shift in AI-native development?",
          options: {
            A: "From Tester to Debugger",
            B: "From Typist/Coder to Orchestrator",
            C: "From Manager to Individual Contributor",
            D: "From Backend to Full-Stack"
          },
          correct: "B",
          explanation: "The fundamental shift is from Typist (manually typing code from brain to file) to Orchestrator (directing AI, focusing on judgment, specification, and validation). This is the most significant shift since the compiler invention."
        },
        {
          id: 2,
          question: "What does Satya Nadella's 'Full-Stack Builder' concept mean?",
          options: {
            A: "A developer who knows all programming languages",
            B: "AI collapses traditional silos (PM, Designer, Frontend, Backend) into one person owning the vertical slice of value",
            C: "A builder who constructs entire buildings alone",
            D: "Someone who uses every framework available"
          },
          correct: "B",
          explanation: "The 'Full-Stack Builder' is enabled by AI collapsing traditional role silos. One person can own the complete vertical slice — from requirements to deployment — because AI handles the mechanical implementation. The limit is what you can orchestrate, not what you can type."
        },
        {
          id: 3,
          question: "What does orchestration mean in the AI context?",
          options: {
            A: "Delegating tasks to AI and hoping for the best",
            B: "Informed direction of intelligent systems — defining requirements, creating specs, directing AI with clear intent, and validating output",
            C: "Writing music for AI to generate",
            D: "Managing a team of human developers"
          },
          correct: "B",
          explanation: "Orchestration is NOT 'give AI a task and hope.' It's informed direction: 1) Define actual requirements, 2) Identify constraints, 3) Create precise specifications, 4) Direct AI with clear intent, 5) Validate output against spec & security standards."
        },
        {
          id: 4,
          question: "In the Skills Matrix (Human vs. AI), which capabilities belong to humans?",
          options: {
            A: "Code syntax, boilerplate, routine debugging",
            B: "Problem decomposition, specification writing, requirement gathering, validation & judgment, architecture decisions, security assessment",
            C: "Design patterns and algorithm optimization",
            D: "Typing speed and IDE shortcuts"
          },
          correct: "B",
          explanation: "Human-only capabilities: problem decomposition, specification writing, requirement gathering, validation & judgment, architecture decisions, security assessment. AI handles: code syntax, boilerplate, routine debugging, design pattern implementation."
        },
        {
          id: 5,
          question: "What does OODA stand for in the agent reasoning framework?",
          options: {
            A: "Organize, Optimize, Deploy, Assess",
            B: "Observe, Orient, Decide, Act",
            C: "Order, Operate, Deliver, Automate",
            D: "Output, Operate, Design, Analyze"
          },
          correct: "B",
          explanation: "OODA Loop: Observe (gather information) → Orient (analyze context and root cause) → Decide (choose course of action) → Act (execute). This cycle repeats until the goal is achieved. Originated from military strategist John Boyd."
        },
        {
          id: 6,
          question: "What distinguishes Passive AI from Agentic AI?",
          options: {
            A: "Passive AI is slower; Agentic AI is faster",
            B: "Passive AI predicts (one-shot response); Agentic AI reasons (loops via OODA until goal achieved)",
            C: "Passive AI is older; Agentic AI is newer",
            D: "Passive AI is cheaper; Agentic AI is expensive"
          },
          correct: "B",
          explanation: "Passive AI gives a one-shot prediction (chatbot response). Agentic AI uses the OODA loop to reason — it observes, orients, decides, acts, observes results, adjusts, and loops until the goal is achieved."
        },
        {
          id: 7,
          question: "In the Five Generations of AI Tools, what characterizes Generation 4 (2024-2026)?",
          options: {
            A: "Intelligent autocomplete (GitHub Copilot)",
            B: "Function generation from prompts (ChatGPT)",
            C: "Agentic mainstream with MCP, multi-step reasoning, ~76% SWE-bench accuracy (Claude Code, Gemini 3 CLI)",
            D: "Self-evolving ecosystems with self-healing code"
          },
          correct: "C",
          explanation: "Gen 4 (2024-2026): Agentic mainstream tools like Claude Code and Gemini 3 CLI. Features: MCP integration, multi-step autonomous reasoning, ~76% SWE-bench accuracy. Human role: Orchestrator. Bottleneck: Human review speed."
        },
        {
          id: 8,
          question: "How does AI transform the SDLC Coding phase?",
          options: {
            A: "AI replaces all human developers",
            B: "AI generates 80-90% of routine code; human validates security, spec match, and architecture (Time: 4+ hrs → 30 mins)",
            C: "AI eliminates the need for specifications",
            D: "AI only helps with documentation"
          },
          correct: "B",
          explanation: "In the Coding phase, AI generates 80-90% of routine code, reducing time from 4+ hours to ~30 minutes. The human role shifts to validating security, spec matching, and architecture — higher-value judgment tasks."
        },
        {
          id: 9,
          question: "What is the time comparison between a Traditional Project and AI-Orchestrated Project for one release?",
          options: {
            A: "Traditional: 140 hrs; AI-Orchestrated: 33 hrs",
            B: "Traditional: 100 hrs; AI-Orchestrated: 100 hrs",
            C: "Traditional: 200 hrs; AI-Orchestrated: 50 hrs",
            D: "Traditional: 80 hrs; AI-Orchestrated: 20 hrs"
          },
          correct: "A",
          explanation: "Traditional: 140 hrs (Planning 20, Coding 80, Testing 30, Deployment 10). AI-Orchestrated: 33 hrs (Planning 20, Coding 8, Testing 3, Deployment 2). The 10-feature comparison: Typist = 400 hrs; Orchestrator = 100 hrs + superior quality."
        },
        {
          id: 10,
          question: "What is the new skill stack for AI-native developers?",
          options: {
            A: "Programming syntax, framework knowledge, algorithm implementation",
            B: "Problem decomposition/specification, quality validation/judgment, constraint analysis/tradeoffs, prompting/direction",
            C: "Only prompt engineering",
            D: "No skills needed — AI does everything"
          },
          correct: "B",
          explanation: "New skill stack: problem decomposition/specification, quality validation/judgment, constraint analysis/tradeoffs, prompting/direction. Programming knowledge remains mandatory for validation, but 80% of time shifts from typing to directing."
        },
        {
          id: 11,
          question: "Scenario: A CSV importer needs to be built. The Typist manually writes parsing, validation, error handling, and retry logic. What does the Orchestrator do differently?",
          options: {
            A: "Does nothing — AI builds it all",
            B: "Defines valid data standards, error protocols, file size/performance constraints, data sensitivity rules; directs AI with precise specs; validates output",
            C: "Only writes the validation logic",
            D: "Copies code from Stack Overflow"
          },
          correct: "B",
          explanation: "The Orchestrator: 1) Defines valid data standards, 2) Defines error handling protocols, 3) Specifies file size/performance constraints, 4) Sets data sensitivity rules, 5) Directs AI with precise specs, 6) Validates the AI output against requirements."
        },
        {
          id: 12,
          question: "Scenario: You're using an AI tool that gives you code in one response without looping or reasoning. According to the OODA framework, what type of AI is this?",
          options: {
            A: "Agentic AI — it reasons through problems",
            B: "Passive AI — it predicts a one-shot response without the observe-orient-decide-act loop",
            C: "Gen 5 AI — it's self-evolving",
            D: "Multi-agent AI — it uses multiple models"
          },
          correct: "B",
          explanation: "Passive AI gives a one-shot prediction without looping. It doesn't observe results, orient to root causes, decide on next steps, act, and repeat. Agentic AI uses the full OODA loop to reason iteratively until the goal is achieved."
        },
        {
          id: 13,
          question: "Scenario: Your team member classifies Claude Code as a Gen 4 tool and GitHub Copilot as Gen 1. What's the key difference between these generations?",
          options: {
            A: "Gen 1 is free; Gen 4 is paid",
            B: "Gen 1 provides line-by-line autocomplete; Gen 4 provides agentic multi-step reasoning with MCP integration and autonomous task execution",
            C: "Gen 1 is for juniors; Gen 4 is for seniors",
            D: "Gen 1 works only in VS Code; Gen 4 works in all IDEs"
          },
          correct: "B",
          explanation: "Gen 1 (Copilot): intelligent autocomplete — predicts next line. Gen 4 (Claude Code): agentic mainstream — MCP integration, multi-step autonomous reasoning, ~76% SWE-bench accuracy. The difference is autonomy level and reasoning capability."
        },
        {
          id: 14,
          question: "Scenario: A project took 400 hrs traditionally but only 100 hrs with AI orchestration for 10 features. The manager asks 'Is the developer working less?' What's the correct response?",
          options: {
            A: "Yes, developers are lazy with AI",
            B: "No — developers work on higher-value judgment/validation tasks, preventing burnout and improving output quality. The value metric shifts from lines of code/day to intelligence directed effectively.",
            C: "AI does all the work so developers can relax",
            D: "Developers should code faster now"
          },
          correct: "B",
          explanation: "Developers aren't working less; they're working on higher-value tasks: judgment, validation, architecture decisions, security assessment. The value metric shifts from 'lines of code/day' to 'intelligence directed effectively.' This prevents burnout and improves quality."
        },
        {
          id: 15,
          question: "Scenario: A developer argues 'I should only learn prompt engineering since AI does all the coding.' According to the course, what is the flaw in this reasoning?",
          options: {
            A: "Prompt engineering is the only skill needed",
            B: "Prompt engineering is explicitly NOT a moat. The real skills are specification writing, validation/judgment, constraint analysis, and architecture decisions. Programming knowledge remains mandatory for evaluating AI output.",
            C: "AI will replace prompt engineers too",
            D: "Prompts don't matter — only code matters"
          },
          correct: "B",
          explanation: "Prompt engineering alone is insufficient. The critical orchestrator skills are: specification writing (clear specs drive AI quality), validation/judgment (evaluating if AI output matches requirements), constraint analysis/tradeoffs, and architecture decisions. Programming knowledge remains mandatory to evaluate AI output quality."
        }
      ]
    },
    {
      id: 4,
      title: "Five Powers and the Modern AI Stack",
      mcqs: [
        {
          id: 1,
          question: "What are the Five Powers that enable autonomous AI agents?",
          options: {
            A: "Read, Write, Execute, Delete, Update",
            B: "See, Hear, Reason, Act, Remember",
            C: "Plan, Design, Code, Test, Deploy",
            D: "Input, Process, Output, Store, Transmit"
          },
          correct: "B",
          explanation: "The Five Powers: See (perceive context/data), Hear (receive instructions/feedback), Reason (analyze and plan), Act (execute tools/APIs), Remember (maintain state/knowledge). These powers enable agents to operate autonomously."
        },
        {
          id: 2,
          question: "What are the three layers of the AI Development Stack?",
          options: {
            A: "Frontend, Backend, Database",
            B: "Frontier Models (foundation), AI-First IDEs (interface), Development Agents (automation)",
            C: "Planning, Coding, Testing",
            D: "Data, Logic, Presentation"
          },
          correct: "B",
          explanation: "Three-Layer AI Stack: 1) Frontier Models (GPT, Claude, Gemini — the reasoning foundation), 2) AI-First IDEs (Cursor, Claude Code — the interface layer), 3) Development Agents (autonomous task execution). All interconnected by MCP."
        },
        {
          id: 3,
          question: "How does the 'Remember' power work in AI agents?",
          options: {
            A: "LLMs have built-in long-term memory",
            B: "External persistence via AGENTS.md, spec files, MCP servers, and Agent Skills — the 'illusion of memory' through application-level state management",
            C: "Fine-tuning the model on project data",
            D: "Saving conversation history to a database"
          },
          correct: "B",
          explanation: "LLMs are stateless. The 'Remember' power is achieved through external persistence: AGENTS.md (project norms), spec files (feature requirements), MCP servers (tool connectivity), and Agent Skills (packaged expertise). Applications re-send this context each session."
        },
        {
          id: 4,
          question: "What role does MCP play in connecting the Five Powers?",
          options: {
            A: "MCP replaces the need for reasoning",
            B: "MCP provides the connectivity layer enabling agents to access tools, resources, and prompts creating the Act and See powers",
            C: "MCP is only used for remembering",
            D: "MCP is a UI framework"
          },
          correct: "B",
          explanation: "Model Context Protocol (MCP) is the connectivity layer. It enables agents to access external tools (Act), retrieve resources/data (See), and use prompts (playbooks). Without MCP, agents are limited to their training data and can't interact with external systems."
        },
        {
          id: 5,
          question: "In the Digital FTE Component Architecture, what represents the 'Hands'?",
          options: {
            A: "The General Model (reasoning/logic)",
            B: "MCP & Tooling — direct access to codebases, cloud infrastructure, databases",
            C: "Agent Skills — SOPs and guardrails",
            D: "The Autonomous Loop — 24/7 monitoring"
          },
          correct: "B",
          explanation: "Digital FTE Architecture: Brain = General Model (reasoning, logic, communication). Hands = MCP & Tooling (direct access to codebases, cloud, databases). Training = Agent Skills (SOPs, guardrails, domain knowledge). Shift = Autonomous Loop (24/7 operation)."
        },
        {
          id: 6,
          question: "What is 'User Intent replacing User Interface'?",
          options: {
            A: "UIs are being eliminated entirely",
            B: "Users express intent in natural language; AI agents interpret and execute without traditional UI navigation",
            C: "All apps become command-line interfaces",
            D: "UI designers are no longer needed"
          },
          correct: "B",
          explanation: "User Intent > User Interface means users express what they want in natural language ('Create a dashboard showing monthly sales'), and AI agents interpret and execute the request — bypassing traditional UI navigation, menus, and forms."
        },
        {
          id: 7,
          question: "What does the 'See' power enable in an AI agent?",
          options: {
            A: "Visual perception through cameras",
            B: "Access to resources and data via MCP — reading files, fetching API data, scanning repository structure",
            C: "Image generation capabilities",
            D: "Screen recording functionality"
          },
          correct: "B",
          explanation: "The 'See' power enables agents to perceive context: reading project files via MCP Resources, fetching data from external APIs, scanning repository structure, and understanding the current state of the system they're working with."
        },
        {
          id: 8,
          question: "How do Agent Skills complement MCP in the Modern AI Stack?",
          options: {
            A: "Skills replace MCP entirely",
            B: "MCP = connectivity (hands); Skills = expertise (training). Both are required for full functionality.",
            C: "Skills are only for UI components",
            D: "MCP handles reasoning; Skills handle memory"
          },
          correct: "B",
          explanation: "MCP provides connectivity (access to tools, resources, APIs — the 'hands'). Agent Skills package domain expertise (SOPs, decision frameworks, workflows — the 'training'). Example: MCP connects to Stripe API; Skill provides payment retry logic and error handling protocols."
        },
        {
          id: 9,
          question: "What characterizes Generation 5 AI tools (2026+)?",
          options: {
            A: "Intelligent autocomplete",
            B: "Function generation from prompts",
            C: "Multi-file feature implementation",
            D: "Self-evolving ecosystems with self-healing code; human role = Policy Governor"
          },
          correct: "D",
          explanation: "Gen 5 (2026+): Self-Evolving Ecosystems — self-healing code, intent-driven growth, autonomous improvement. Human role shifts to Policy Governor setting strategic direction and policies. Bottleneck: strategic direction & policy setting."
        },
        {
          id: 10,
          question: "In the SDLC Operations phase transformation, what is the AI role vs. human role?",
          options: {
            A: "AI: monitors 24/7, diagnoses anomalies, suggests fixes; Human: approves patches, assesses systemic design impact (Downtime: 2+ hrs → 15 mins)",
            B: "AI does everything; humans are eliminated",
            C: "AI only sends alerts; humans fix everything",
            D: "Humans monitor; AI approves"
          },
          correct: "A",
          explanation: "Operations phase: AI monitors 24/7, diagnoses anomalies, suggests fixes. Human approves patches and assesses systemic design impact. Result: downtime reduced from 2+ hours to ~15 minutes. Human judgment remains critical for systemic decisions."
        },
        {
          id: 11,
          question: "Scenario: Your agent needs to process payments but can only view transaction metadata, not execute transfers. According to the Five Powers framework, what's the likely issue?",
          options: {
            A: "The 'Remember' power isn't configured",
            B: "The payment action is exposed as an MCP Resource (read-only/See) instead of an MCP Tool (state-changing/Act)",
            C: "The agent lacks reasoning capability",
            D: "The context window is too small"
          },
          correct: "B",
          explanation: "MCP Resources are read-only (See/Eyes — fetching data). MCP Tools are state-changing (Act/Hands — executing actions). If payment is exposed as a Resource, the agent can only view metadata, not execute. It must be exposed as a Tool for state-changing actions."
        },
        {
          id: 12,
          question: "Scenario: You're building a customer support agent. Which component provides the 'Brain' and which provides the 'Training'?",
          options: {
            A: "Brain = MCP; Training = Autonomous Loop",
            B: "Brain = General Model (reasoning, logic); Training = Agent Skills (SOPs for handling queries, guardrails, domain knowledge)",
            C: "Brain = UI; Training = Database",
            D: "Brain = Tools; Training = APIs"
          },
          correct: "B",
          explanation: "In Digital FTE Architecture: Brain = General Model (GPT/Claude/Gemini providing reasoning, logic, communication). Training = Agent Skills (packaged SOPs for handling different query types, guardrails for escalation, domain knowledge about your products/policies)."
        },
        {
          id: 13,
          question: "Scenario: Your agent's context window is exhausted because all 50 skills load at startup with full instructions. Which concept solves this?",
          options: {
            A: "Increase the context window to 2M tokens",
            B: "Progressive Disclosure — load only skill metadata (~100 tokens) at startup, defer full instructions (<5K tokens) until activation, load full templates/examples only during execution",
            C: "Delete half the skills",
            D: "Use a different model"
          },
          correct: "B",
          explanation: "Progressive Disclosure: Level 1 (Startup) = ~100 tokens per skill (name/description only). Level 2 (Activated) = <5K tokens (execution steps). Level 3 (Execution) = full templates/examples. Result: 80-98% context window reduction vs. loading everything at startup."
        },
        {
          id: 14,
          question: "Scenario: A team wants to build an agent that 'sees code quality issues, hears stakeholder feedback, reasons about improvements, acts to refactor, and remembers past decisions.' Which framework enables this?",
          options: {
            A: "The OODA Loop alone",
            B: "The Five Powers (See/Hear/Reason/Act/Remember) integrated via the Three-Layer AI Stack (Frontier Models → AI-First IDEs → Development Agents) connected by MCP",
            C: "Only AGENTS.md files",
            D: "Just a larger context window"
          },
          correct: "B",
          explanation: "The Five Powers framework enables autonomous agents: See (scan codebase via MCP Resources), Hear (receive stakeholder input), Reason (Frontier Model analysis), Act (refactor via MCP Tools), Remember (AGENTS.md + Skills for persistent knowledge). The Three-Layer Stack provides the infrastructure; MCP provides connectivity."
        },
        {
          id: 15,
          question: "Scenario: A manager asks why your Development Agent costs more than a basic AI chatbot. According to the Modern AI Stack, what explains the difference?",
          options: {
            A: "Development Agents use more expensive models",
            B: "Development Agents integrate the full Three-Layer Stack (Frontier Models + AI-First IDEs + autonomous execution) with MCP connectivity and Five Powers — far beyond a chatbot's single-model prediction",
            C: "Chatbots have more features",
            D: "There is no real difference"
          },
          correct: "B",
          explanation: "Development Agents cost more because they integrate: 1) Frontier Models (reasoning foundation), 2) AI-First IDEs (development interface), 3) Development Agents (autonomous execution), all connected via MCP enabling the Five Powers (See/Hear/Reason/Act/Remember). A chatbot is single-model prediction without tool access or autonomous capabilities."
        }
      ]
    },
    {
      id: 5,
      title: "AIFF Standards - The Foundation",
      mcqs: [
        {
          id: 1,
          question: "What is AAIF (Agentic AI Foundation)?",
          options: {
            A: "A proprietary Anthropic-only standard",
            B: "A Linux Foundation initiative (announced Dec 9, 2025) providing neutral governance for open AI agent standards, preventing platform lock-in",
            C: "An OpenAI-exclusive protocol",
            D: "A government regulation for AI safety"
          },
          correct: "B",
          explanation: "AAIF is a Linux Foundation initiative announced Dec 9, 2025. It provides neutral governance for open AI agent standards, ensuring Digital FTEs are portable across vendors and preventing platform lock-in. Platinum members include AWS, Anthropic, Block, Google, Microsoft, OpenAI."
        },
        {
          id: 2,
          question: "What problem does the M×N Integration Problem describe?",
          options: {
            A: "AI models multiplying exponentially",
            B: "Combinatorial explosion of custom code when M AI platforms connect to N external tools — standards reduce this to write-once, deploy-everywhere",
            C: "Memory limitations in LLMs",
            D: "The cost of training M models on N datasets"
          },
          correct: "B",
          explanation: "The M×N problem: without standards, each of M AI platforms needs custom integration code for each of N tools (M×N connections). Standards like MCP reduce this to write-once, deploy-everywhere — one integration works across all platforms."
        },
        {
          id: 3,
          question: "What are the Five AIFF Standards?",
          options: {
            A: "Code, Test, Deploy, Monitor, Maintain",
            B: "MCP (connectivity), AGENTS.md (project rules), goose (reference architecture), Agent Skills (packaged expertise), MCP Apps Extension (interactive UI)",
            C: "GPT, Claude, Gemini, Llama, Mistral",
            D: "Planning, Coding, Testing, Deployment, Operations"
          },
          correct: "B",
          explanation: "Five Standards: 1) MCP — JSON-RPC protocol for tool connectivity, 2) AGENTS.md — Markdown files defining project rules/constraints, 3) goose — open-source reference architecture, 4) Agent Skills — SKILL.md format packaging domain knowledge, 5) MCP Apps Extension (SEP-1865) — interactive UI components via MCP."
        },
        {
          id: 4,
          question: "What is the Hierarchy Rule for AGENTS.md files?",
          options: {
            A: "The root AGENTS.md always wins",
            B: "The file closest to the working directory takes precedence, enabling granular control in monorepos",
            C: "All AGENTS.md files are merged equally",
            D: "AGENTS.md files are ignored in subdirectories"
          },
          correct: "B",
          explanation: "The Hierarchy Rule: in a nested project structure, the AGENTS.md file closest to the working directory takes precedence. If root says 'use Python' but packages/backend/AGENTS.md says 'use TypeScript', the backend agent follows TypeScript."
        },
        {
          id: 5,
          question: "What is Progressive Disclosure in the context of Agent Skills?",
          options: {
            A: "Showing all skill content at once",
            B: "Token-saving strategy where capabilities load in stages: metadata (~100 tokens) → activation instructions (<5K tokens) → full templates/examples — reducing context usage 80-98%",
            C: "Progressively deleting old context",
            D: "Revealing skills one at a time randomly"
          },
          correct: "B",
          explanation: "Progressive Disclosure: Level 1 (Startup) = ~100 tokens (name/description). Level 2 (Activated) = <5K tokens (execution steps). Level 3 (Execution) = full templates/examples. This reduces context window usage by 80-98% vs. loading all skills fully at startup."
        },
        {
          id: 6,
          question: "What are the three MCP primitives and their metaphors?",
          options: {
            A: "Input, Output, Process — the pipeline metaphor",
            B: "Resource (read-only data/Eyes), Tool (state-changing action/Hands), Prompt (reusable template/Playbooks)",
            C: "Model, Context, Protocol — the foundation metaphor",
            D: "See, Hear, Act — the sensory metaphor"
          },
          correct: "B",
          explanation: "MCP Primitives: Resource = read-only data access (fetching lead data from CRM) metaphorically 'Eyes'. Tool = state-changing action (sending email, updating deal stage) metaphorically 'Hands'. Prompt = reusable template/playbook (lead qualification checklist) metaphorically 'Playbooks'."
        },
        {
          id: 7,
          question: "How do MCP and Agent Skills complement each other?",
          options: {
            A: "They are redundant — use one or the other",
            B: "MCP = connectivity (hands accessing tools); Skills = expertise (training on protocols). Example: MCP connects to Stripe API; Skill provides payment retry logic and error handling.",
            C: "MCP replaces Skills",
            D: "Skills are UI-only; MCP is backend-only"
          },
          correct: "B",
          explanation: "MCP provides connectivity (access to tools/APIs — the 'hands'). Agent Skills package domain expertise (SOPs, decision frameworks — the 'training'). Example: A Stripe payment agent needs MCP to access the Stripe API (connectivity) AND a Skill for payment retry logic, error handling, and refund protocols (expertise)."
        },
        {
          id: 8,
          question: "What is goose in the AIFF standards ecosystem?",
          options: {
            A: "A proprietary Anthropic tool",
            B: "Open-source (Apache 2.0) reference architecture from Block demonstrating production-ready agent implementation of MCP and AGENTS.md — serves as Incubator-stage blueprint",
            C: "A new AI model",
            D: "A testing framework"
          },
          correct: "B",
          explanation: "goose is an open-source (Apache 2.0) reference architecture from Block. It demonstrates production-ready agent implementation of MCP and AGENTS.md standards. It serves as an Incubator-stage blueprint for building Specialist-stage custom agents. It's for prototyping and studying patterns."
        },
        {
          id: 9,
          question: "What does the MCP Apps Extension (SEP-1865) enable?",
          options: {
            A: "Only text-based interactions",
            B: "MCP servers to deliver interactive UI components (buttons, forms, charts, dashboards) directly to host apps via ui:// URIs and sandboxed iframes",
            C: "Agents to run on mobile devices",
            D: "Voice-based interactions"
          },
          correct: "B",
          explanation: "MCP Apps Extension (SEP-1865) allows MCP servers to deliver interactive UI components (buttons, forms, charts, dashboards) directly to host applications via ui:// URIs and sandboxed iframes. This transforms agents from text-only to rich interactive experiences."
        },
        {
          id: 10,
          question: "What is the structure of a SKILL.md file?",
          options: {
            A: "Plain text with no formatting",
            B: "YAML frontmatter (name, description) + Markdown sections (When to Use, How to Execute, Output Format)",
            C: "JSON configuration only",
            D: "Python code with comments"
          },
          correct: "B",
          explanation: "SKILL.md structure: YAML frontmatter defines name and description (loaded at startup ~100 tokens). Markdown body contains When to Use (trigger conditions), How to Execute (step-by-step instructions), and Output Format (expected deliverables) — loaded progressively as needed."
        },
        {
          id: 11,
          question: "Scenario: Pre-Dec 2025, your team rebuilt agents from scratch when switching AI platforms. Post-AAIF, what changes?",
          options: {
            A: "Rebuilding is still mandatory",
            B: "Platform switching requires configuration changes only, not rewrites — standards ensure Digital FTE portability across vendors",
            C: "Agents only work with one platform forever",
            D: "You must use goose exclusively"
          },
          correct: "B",
          explanation: "Pre-AAIF: rebuilding agents for different AI platforms was mandatory (vendor lock-in). Post-AAIF: platform switching requires configuration changes only, not code rewrites. Standards (MCP, AGENTS.md, Skills) ensure Digital FTEs are portable across any major LLM platform."
        },
        {
          id: 12,
          question: "Scenario: In a monorepo, root AGENTS.md says 'use Python' but packages/backend/AGENTS.md says 'use TypeScript.' Which does the backend agent follow and why?",
          options: {
            A: "Python — root always wins",
            B: "TypeScript — the Hierarchy Rule: file closest to working directory takes precedence",
            C: "Both are merged together",
            D: "Neither — agent ignores all AGENTS.md files"
          },
          correct: "B",
          explanation: "The Hierarchy Rule states the AGENTS.md file closest to the working directory takes precedence. This enables granular control in monorepos — different packages/subdirectories can have different rules. The backend agent follows TypeScript from packages/backend/AGENTS.md."
        },
        {
          id: 13,
          question: "Scenario: Loading all 50 skills at startup exhausts your context window before task execution begins. What AAIF standard solves this?",
          options: {
            A: "MCP — provides tool connectivity",
            B: "Agent Skills with Progressive Disclosure — loads only metadata (~100 tokens/skill) at startup, deferring full instructions until activation — achieving 80-98% context reduction",
            C: "AGENTS.md — defines project rules",
            D: "goose — provides reference architecture"
          },
          correct: "B",
          explanation: "Agent Skills with Progressive Disclosure solves token bloat: Level 1 loads only name/description (~100 tokens/skill = 5K total for 50 skills). Level 2 loads execution steps (<5K tokens) only when skill is activated. Level 3 loads full templates only during execution. This achieves 80-98% context window reduction."
        },
        {
          id: 14,
          question: "Scenario: Your team debates using goose vs. Claude Code. According to AAIF standards, what is the correct positioning?",
          options: {
            A: "Use only goose — it's open-source",
            B: "Use only Claude Code — it's proprietary and more productive",
            C: "goose is open-source reference architecture for prototyping/studying patterns; Claude Code is proprietary for immediate productivity. Both validate AAIF standards but serve different development stages.",
            D: "Neither — build everything from scratch"
          },
          correct: "C",
          explanation: "goose is open-source (Apache 2.0) reference architecture — ideal for prototyping, studying AAIF patterns, and building Custom Agents from scratch. Claude Code is proprietary — ideal for immediate productivity on production work. Both validate AAIF standards but serve different stages: goose for learning/prototyping, Claude Code for production."
        },
        {
          id: 15,
          question: "Scenario: You're building a Stripe payment agent. According to AAIF standards, what components are required for full functionality?",
          options: {
            A: "Only an MCP server connecting to Stripe API",
            B: "Only an Agent Skill with payment logic",
            C: "Both: MCP server for Stripe API connectivity (Resources for balance, Tools for charges/refunds) AND Agent Skill for payment retry logic, error handling, and refund protocols",
            D: "Neither — agents don't need external standards"
          },
          correct: "C",
          explanation: "Full functionality requires both: MCP server provides connectivity (Resources: fetch balance/transactions; Tools: create charges, issue refunds, update subscriptions). Agent Skill provides expertise (payment retry logic, error handling protocols, refund decision trees, compliance requirements). MCP = hands; Skill = training. Both are essential."
        }
      ]
    },
    {
      id: 6,
      title: "Digital FTE Business Strategy",
      mcqs: [
        {
          id: 1,
          question: "What is a Digital FTE?",
          options: {
            A: "A tool that assists human workers",
            B: "An autonomous AI agent/workflow executing the complete output of a human FTE — replacing the human operator, not just assisting",
            C: "A full-time employee who works remotely",
            D: "A digital calendar scheduling tool"
          },
          correct: "B",
          explanation: "Digital FTE (Full-Time Equivalent): Autonomous AI agent executing the complete output of a human employee. Unlike tools that require human operators, Digital FTEs replace the operator entirely by focusing on outcomes, not just tasks. Works 168 hrs/week at $500-$2,000/mo vs $4,000-$8,000+ for humans."
        },
        {
          id: 2,
          question: "What is 'The Moat' in the Digital FTE context?",
          options: {
            A: "A physical security barrier around servers",
            B: "The 10% of domain-specific nuance, edge cases, political context, and experience that generic AI misses — prompt engineering is explicitly NOT a moat",
            C: "A proprietary AI model",
            D: "Patent protection for AI algorithms"
          },
          correct: "B",
          explanation: "The Moat (popularized by Warren Buffett): competitive barrier protecting against generic AI. It's the 10% of domain-specific nuance, edge cases, political context, and experience that generic AI misses. Prompt engineering is explicitly NOT a moat — it's easily replicated."
        },
        {
          id: 3,
          question: "What is the 90/10 Split in Digital FTE strategy?",
          options: {
            A: "90% coding, 10% testing",
            B: "90% (Commodity): structure, grammar, basic facts — AI excels. 10% (Moat): nuance, context, risk assessment, industry dynamics — human expertise required commanding premium pricing.",
            C: "90% AI, 10% human",
            D: "90% profit, 10% cost"
          },
          correct: "B",
          explanation: "90/10 Split: 90% is commodity (structure, grammar, basic facts, formatting) — AI excels here, selling only this leads to obsolescence. 10% is the Moat (nuance, context, risk assessment, industry dynamics) — requires human expertise, commands premium pricing."
        },
        {
          id: 4,
          question: "In the Snakes & Ladders model, which layer should solo founders avoid and why?",
          options: {
            A: "Layer 1 (Consumer AI Backbone) — brutal 2-player war requiring billions in spend",
            B: "Layer 2 (General Agents) — too specialized",
            C: "Layer 3 (Custom Agents) — too niche",
            D: "Layer 4 (Orchestrator) — too complex"
          },
          correct: "A",
          explanation: "Layer 1 (Consumer AI Backbone — OpenAI, Google): brutal 2-player war, billions in spend. Solo founders should avoid this. Start at Layer 2 (General Agents as Developer Tools) or Layer 3 (Custom Agents for Vertical Markets) where real money accumulates and agility provides advantage."
        },
        {
          id: 5,
          question: "What is the cost efficiency comparison: Human vs. Digital FTE for support tickets?",
          options: {
            A: "Human: ~$150/ticket; Digital FTE: ~$3/ticket (50x more cost-efficient)",
            B: "Human: ~$3/ticket; Digital FTE: ~$150/ticket",
            C: "Both cost the same",
            D: "Digital FTE is more expensive"
          },
          correct: "A",
          explanation: "Human: $6k/mo, 40 hrs/wk, ~20 tickets/day → ~$150/ticket. Digital FTE: $1.5k/mo, 168 hrs/wk, 500+ tickets/day → ~$3/ticket. This is 50x more cost-efficient, enabling massive ROI when properly deployed."
        },
        {
          id: 6,
          question: "What are the four monetization models for Digital FTEs?",
          options: {
            A: "Free, Premium, Enterprise, Open-Source",
            B: "Subscription ($500-$2k/mo), Success Fee (10-30% commission), License ($5k-$50k+/yr), Marketplace (~30% platform cut)",
            C: "Hourly, Daily, Weekly, Monthly",
            D: "Advertising, Sponsorship, Donations, Grants"
          },
          correct: "B",
          explanation: "Four monetization models: 1) Subscription ($500-$2k/mo) — recurring, predictable, best for SMB/mid-market. 2) Success Fee (10-30%) — pay for results, best for skeptical clients. 3) License ($5k-$50k+/yr) — self-hosted, enterprise, regulated. 4) Marketplace (~30% cut) — low CAC, consumer/SMB."
        },
        {
          id: 7,
          question: "What is the Piggyback Protocol Pivot (PPP)?",
          options: {
            A: "Building everything from scratch to own the full stack",
            B: "Phase 1: Layer on existing standards (MCP + Skills); Phase 2: Piggyback on incumbent marketplaces (60-80% CAC reduction); Phase 3: Strategic pivot to independent AI-native platform with zero user friction",
            C: "Pivoting to a completely different business",
            D: "Copying competitor features exactly"
          },
          correct: "B",
          explanation: "PPP strategy: Phase 1 (Months 0-6): Use MCP + Agent Skills on incumbent platforms — low-risk entry. Phase 2 (Months 6-18): Piggyback on marketplaces (AppExchange, Shopify) — 60-80% CAC reduction. Phase 3 (Months 18+): Pivot to independent platform — re-point backend to native infrastructure, zero user friction."
        },
        {
          id: 8,
          question: "What are the Three Requirements for Vertical Success (all mandatory)?",
          options: {
            A: "Speed, Cost, Quality",
            B: "Domain Expertise (~99% quality), Deep Integrations (read/write to incumbent systems), Complete Agentic Solutions (end-to-end problem solving)",
            C: "Funding, Team, Market",
            D: "AI models, APIs, UIs"
          },
          correct: "B",
          explanation: "Three mandatory requirements: 1) Domain Expertise — fine-tuned models or vertical reusable intelligence reaching ~99% quality for high-stakes. 2) Deep Integrations — read/write to incumbent systems respecting workflows/security. 3) Complete Agentic Solutions — end-to-end problem solving, not isolated slices."
        },
        {
          id: 9,
          question: "What is Shadow Mode Deployment Strategy?",
          options: {
            A: "Deploying in complete darkness to save energy",
            B: "Phase 1: Agent runs parallel to human (human decides, log all, target ≥80% agreement); Phase 2: Augmented (human uses agent as input, <20% override); Phase 3: Selective automation (agent decides low-risk, human reviews edge cases)",
            C: "Deploying without testing",
            D: "Only deploying the UI"
          },
          correct: "B",
          explanation: "Shadow Mode: Phase 1 (Weeks 1-4): Agent parallel to human — human decides, log all outputs, target ≥80% agreement. Phase 2 (Weeks 5-8): Augmented — human uses agent as input, target <20% override rate. Phase 3 (Weeks 9+): Selective automation — agent decides low-risk (high confidence), human reviews edge cases with monthly audits."
        },
        {
          id: 10,
          question: "In the Red Flag Detection Framework, what triggers a 'Stop/abandon' decision?",
          options: {
            A: "1 red flag signal",
            B: "2 red flag signals",
            C: "3+ red flag signals (insufficient audit trail, irreplaceable human judgment, regulatory uncertainty, high-consequence errors, adversarial pressure, untrained/biased data)",
            D: "5+ red flag signals"
          },
          correct: "C",
          explanation: "Red Flag Decision Rule: 1 signal = Yellow (additional review required). 2+ signals = Red (reconsider approach). 3+ signals = Stop/abandon. Red flag signals include: insufficient audit trail feasibility, irreplaceable human judgment, regulatory uncertainty, high-consequence errors, adversarial pressure to skip validation, untrained/biased data."
        },
        {
          id: 11,
          question: "Scenario: Sarah, a financial analyst, uses AI to boost productivity 40% but only facilitates her own tasks. She's displaced by a $500/mo Digital FTE matching her $10k/mo output. What lesson does this teach?",
          options: {
            A: "AI always fires people",
            B: "Using AI as a productivity multiplier without owning the output leads to replacement — own the Digital FTE, don't just use AI to do your old job faster",
            C: "Financial analysts are obsolete",
            D: "Digital FTEs are always better than humans"
          },
          correct: "B",
          explanation: "Sarah's story teaches: using AI merely as a productivity multiplier (doing your old job 40% faster) without owning the output leads to replacement. The Digital FTE matches her entire output at $500/mo vs $10k/mo salary. The lesson: own the agent delivering the outcome, don't just use AI to accelerate your tasks."
        },
        {
          id: 12,
          question: "Scenario: Marcus, a healthcare compliance auditor, encodes 15 years of expertise into a Digital FTE and licenses it to hospitals. What model does this represent?",
          options: {
            A: "Subscription model",
            B: "The Ownership Model — positioning expertise as an AI-delivered product creates defensible, scalable ownership commanding premium licensing fees",
            C: "Success Fee model",
            D: "Marketplace model"
          },
          correct: "B",
          explanation: "Marcus's story demonstrates the Ownership Model: encode domain expertise (15 years compliance knowledge) into a Digital FTE, own the agent, license it to multiple customers. This creates defensible, scalable ownership — the moat is the accumulated expertise, not the AI technology itself."
        },
        {
          id: 13,
          question: "Scenario: An insurance company considers a Digital FTE for claims adjudication ($1.5k/mo cost) but potential liability from 2-3 errors/month could be $200k-$300k. According to the framework, what should they do?",
          options: {
            A: "Deploy immediately — savings outweigh risks",
            B: "This is misaligned economics — risk outweighs savings. Use Shadow Mode first, or keep human adjudication with AI assistance only.",
            C: "Hire more humans instead",
            D: "Ignore the risk entirely"
          },
          correct: "B",
          explanation: "This is Scenario 3 (Misaligned Economics): $1.5k/mo Digital FTE cost vs. $200k-$300k potential liability from 2-3 errors/month. The risk massively outweighs savings. The framework says: don't deploy autonomously. Use Shadow Mode (human reviews all decisions) or keep human adjudication with AI assistance only."
        },
        {
          id: 14,
          question: "Scenario: You're choosing a monetization model for a mission-critical SMB payroll Digital FTE. Which model is best?",
          options: {
            A: "Success Fee — pay only for results",
            B: "Subscription ($500-$2k/mo) — recurring, predictable, best for mission-critical SMB/mid-market workflows",
            C: "Marketplace — discoverability",
            D: "Free — gain users first"
          },
          correct: "B",
          explanation: "For mission-critical SMB/mid-market (payroll), Subscription ($500-$2k/mo) is ideal: recurring, predictable revenue. Success Fee risks measurement disputes for payroll. Marketplace buries you in 10k+ agents. License requires enterprise sales cycles. Subscription aligns with ongoing mission-critical usage."
        },
        {
          id: 15,
          question: "Scenario: You've built a successful Digital FTE on Shopify's marketplace. Months 18+, you want to pivot. According to PPP, how do you execute this?",
          options: {
            A: "Shut down the Shopify app and force users to migrate manually",
            B: "Re-point backend logic of standardized skills to your native infrastructure — zero user friction. Users continue using the same interface while you own the direct relationship and add exclusive features.",
            C: "Copy all Shopify features and compete directly",
            D: "Abandon your users and start fresh"
          },
          correct: "B",
          explanation: "PPP Phase 3 (Strategic Pivot): Re-point backend logic of standardized skills (MCP + Agent Skills) to your native AI-native infrastructure. Zero user friction — users continue using the same interface. You now own the direct relationship, can add exclusive features, and avoid the 30% platform cut. This is the 'pivot' in Piggyback Protocol Pivot."
        }
      ]
    },
    {
      id: 7,
      title: "Nine Pillars of AIDD",
      mcqs: [
        {
          id: 1,
          question: "What does AIDD stand for?",
          options: {
            A: "Automated Integrated Development Deployment",
            B: "AI-Driven Development",
            C: "Advanced Intelligent Design Documentation",
            D: "Agile Iterative Digital Delivery"
          },
          correct: "B",
          explanation: "AIDD = AI-Driven Development. The Nine Pillars are principles for AI-native design that guide how to build software effectively with AI agents, from intent-based UI to progressive disclosure."
        },
        {
          id: 2,
          question: "What is 'Intent-Based UI' in AI-native design?",
          options: {
            A: "Users design interfaces manually",
            B: "Users express intent in natural language; AI generates the appropriate UI components",
            C: "UIs are eliminated entirely",
            D: "Only voice-based interfaces"
          },
          correct: "B",
          explanation: "Intent-Based UI: users express what they want in natural language ('Create a dashboard showing monthly sales trends'), and AI agents interpret the intent and generate appropriate UI components automatically — bypassing traditional drag-and-drop UI builders."
        },
        {
          id: 3,
          question: "What is the 'Amplifier Effect' of AI on developer practices?",
          options: {
            A: "AI reduces all code quality",
            B: "AI accelerates habit quality — good practices become excellent/fast; poor practices become terrible/fragile at scale",
            C: "AI has no effect on practices",
            D: "AI only helps juniors"
          },
          correct: "B",
          explanation: "AI is an amplifier, not a changer of habit quality. Clear specifications → excellent results, fast. Vague requirements → terrible results, fast. Test-first development → reliable code, faster. No testing → extremely fragile code, multiplied. Discipline matters more when AI amplifies your habits."
        },
        {
          id: 4,
          question: "What distinguishes Path A (Vibe Coding) from Path B (Agent Factory/SDD)?",
          options: {
            A: "Path A is always faster",
            B: "Path A treats AI as faster keyboard — rapid generation without specs, compounding technical debt. Path B masters specification-first thinking — builds reliable Digital FTEs, systematic capacity multiplication.",
            C: "Path A is better for production",
            D: "Path B is slower but more fun"
          },
          correct: "B",
          explanation: "Path A (Vibe Coding): treat AI as faster keyboard, rapid code generation without specs, compounding technical debt, loss of systematic capability. Path B (Agent Factory/SDD): master specification-first thinking, build reliable Digital FTEs, systematic capacity multiplication, widening competitive gap."
        },
        {
          id: 5,
          question: "What is 'Progressive Disclosure' as a pillar of AIDD?",
          options: {
            A: "Showing all information at once",
            B: "Loading agent capabilities in stages (metadata → activation → full execution) to preserve context window capacity — 80-98% reduction",
            C: "Hiding features from users",
            D: "Only displaying errors"
          },
          correct: "B",
          explanation: "Progressive Disclosure: token-saving strategy loading capabilities in stages. Level 1 (Startup): ~100 tokens metadata. Level 2 (Activated): <5K tokens execution steps. Level 3 (Execution): full templates/examples. Achieves 80-98% context window reduction vs. loading everything at startup."
        },
        {
          id: 6,
          question: "Why is 'Vibe Coding' dangerous in the AI era according to AIDD?",
          options: {
            A: "It's too slow",
            B: "AI amplifies it — lack of specs, acceptance criteria, and systematic validation creates amplified chaos, hidden technical debt, and unmaintainable codebases at scale",
            C: "It produces too few features",
            D: "It requires too much planning"
          },
          correct: "B",
          explanation: "Vibe Coding (iterative, feel-based development without specs/criteria/validation) was manageable pre-AI. With AI amplification, it creates amplified chaos (faster generation of wrong things), hidden technical debt (compounding), and unmaintainable codebases at scale. AI doesn't fix bad practices — it accelerates them."
        },
        {
          id: 7,
          question: "What is the 'Multiplier Effect' in the Agent Factory paradigm?",
          options: {
            A: "Multiplying the number of developers",
            B: "Clear specs → precise AI execution → reliable Custom Agents → Digital FTEs → multiplied capacity → larger problems → demand for better specs (virtuous cycle)",
            C: "Multiplying code lines automatically",
            D: "Doubling the budget"
          },
          correct: "B",
          explanation: "The Multiplier Effect is a virtuous cycle: Clear specifications drive precise AI execution, producing reliable Custom Agents that become Digital FTEs, which multiply your capacity to solve larger problems, which demands even better specifications. Each cycle compounds capability."
        },
        {
          id: 8,
          question: "What is the FTE Threshold?",
          options: {
            A: "The minimum salary for a full-time employee",
            B: "The operational milestone where AI shifts from passively waiting for prompts to proactively monitoring its domain, identifying needs, and executing solutions without human initiation",
            C: "The maximum number of agents you can run",
            D: "The point where AI replaces all humans"
          },
          correct: "B",
          explanation: "FTE Threshold: the milestone where AI shifts from passive (waiting for prompts) to proactive (monitoring its domain, identifying needs, executing solutions without human 'Start' commands). This is when an AI agent becomes a true Digital FTE — owning a function autonomously."
        },
        {
          id: 9,
          question: "How does AI transform the paradigm from 'Tool' to 'Teammate' to 'Digital Worker'?",
          options: {
            A: "It doesn't — AI is always just a tool",
            B: "Tool (prompt → respond → use output) → Teammate (reason, remember, act, improve) → Digital Worker (owns entire functions autonomously as a specialized Digital FTE)",
            C: "AI was always a Digital Worker from the start",
            D: "The progression goes backwards"
          },
          correct: "B",
          explanation: "AI paradigm evolution: Traditional View = Tool (prompt → respond → use output, human always initiates). Agent Factory View = Teammate (can reason, remember, act, improve with some guidance). Digital FTE View = Specialized Digital Worker (owns entire organizational functions autonomously 24/7 with reliability)."
        },
        {
          id: 10,
          question: "What are the components of a Digital FTE's architecture?",
          options: {
            A: "Only the AI model",
            B: "General Model (Brain/Reasoning), MCP & Tooling (Hands/Access), Agent Skills (Training/SOPs), Autonomous Loop (Shift/24/7 operation)",
            C: "Only the UI and database",
            D: "Keyboard, mouse, and monitor"
          },
          correct: "B",
          explanation: "Digital FTE Architecture: 1) General Model = Brain (reasoning, logic, communication). 2) MCP & Tooling = Hands (direct access to codebases, cloud, databases). 3) Agent Skills = Training (SOPs, guardrails, domain knowledge). 4) Autonomous Loop = Shift (24/7 monitoring, trigger detection, action without human 'Start')."
        },
        {
          id: 11,
          question: "Scenario: A developer has good coding practices but no specifications. When they use AI, what happens according to the Amplifier Effect?",
          options: {
            A: "AI fixes the lack of specifications automatically",
            B: "AI amplifies the gap — generates code rapidly without spec alignment, creating compounding technical debt and misaligned features at scale",
            C: "Nothing changes",
            D: "AI writes specs for them"
          },
          correct: "B",
          explanation: "The Amplifier Effect: AI accelerates habit quality. Good coding without specifications means AI generates code rapidly but without alignment to requirements. This creates compounding technical debt (faster generation of wrong things) and misaligned features at scale. AI doesn't fix missing specs — it amplifies their absence."
        },
        {
          id: 12,
          question: "Scenario: Your agent currently waits for prompts to start work. According to the FTE Threshold concept, what must change for it to become a Digital FTE?",
          options: {
            A: "Nothing — it's already a Digital FTE",
            B: "Move from chat to production, augment with MCP/Agent Skills, configure for 24/7 autonomous operation with proactive monitoring and self-initiated execution",
            C: "Make it slower",
            D: "Add more prompts"
          },
          correct: "B",
          explanation: "FTE Threshold: the shift from passive (waiting for prompts) to proactive (autonomous operation). A General Agent becomes a Digital FTE only when: moved from chat to production, augmented with MCP/Agent Skills for connectivity and expertise, and configured for 24/7 autonomous operation with proactive domain monitoring."
        },
        {
          id: 13,
          question: "Scenario: Your team debates Path A (Vibe Coding) vs. Path B (SDD) for a production payment system. Which path and why?",
          options: {
            A: "Path A — faster generation means faster delivery",
            B: "Path B (SDD) — payment systems require precision, compliance, and reliability. Vibe Coding creates amplified chaos and hidden debt; SDD ensures systematic capacity multiplication with validation.",
            C: "Both paths are equivalent",
            D: "Path A for prototype, Path B never"
          },
          correct: "B",
          explanation: "For a production payment system, Path B (SDD) is essential. Payments require precision (exact amounts), compliance (PCI-DSS), and reliability (no data loss). Vibe Coding amplifies chaos — rapid generation without specs creates compounding technical debt. SDD ensures specs are clear, validation is systematic, and Digital FTEs are reliable."
        },
        {
          id: 14,
          question: "Scenario: Loading all agent capabilities at startup exhausts your 200K token context before task execution. Which AIDD pillar solves this?",
          options: {
            A: "Intent-Based UI",
            B: "Progressive Disclosure — load metadata (~100 tokens) at startup, defer execution steps (<5K) until activation, load full templates only during execution — achieving 80-98% context reduction",
            C: "Vibe Coding",
            D: "The Multiplier Effect"
          },
          correct: "B",
          explanation: "Progressive Disclosure is the AIDD pillar solving context exhaustion: Level 1 (Startup): load only metadata (~100 tokens per skill). Level 2 (Activated): load execution steps (<5K tokens) when skill is triggered. Level 3 (Execution): load full templates/examples during actual execution. Result: 80-98% context window reduction."
        },
        {
          id: 15,
          question: "Scenario: Your manager asks 'Why invest in specification discipline when AI keeps getting better?' According to the Nine Pillars, what's the response?",
          options: {
            A: "Specs will become obsolete — AI will figure out requirements automatically",
            B: "AI amplifies habits — without specs, AI generates faster chaos. With specs, AI generates reliable Digital FTEs. The competitive gap widens: teams with discipline outperform those without, regardless of AI capability improvements.",
            C: "Specs are only for juniors",
            D: "AI doesn't need specs"
          },
          correct: "B",
          explanation: "The Nine Pillars teach: AI is an amplifier, not a habit-changer. Without specification discipline, AI generates chaos faster (compounding technical debt). With specs, AI generates reliable Digital FTEs (systematic capacity multiplication). The competitive gap widens over time — teams mastering discipline increasingly outperform those without, regardless of raw AI capability."
        }
      ]
    },
    {
      id: 8,
      title: "Spec-Driven Development",
      mcqs: [
        {
          id: 1,
          question: "What is the core equation of Spec-Driven Development?",
          options: {
            A: "Code + Tests = Quality",
            B: "Vague Idea + AI = 5+ iterations of misalignment; Clear Specification + AI = 1-2 iterations of refinement",
            C: "AI = Replacement for Developers",
            D: "Specs + Time = Perfect Code"
          },
          correct: "B",
          explanation: "The core SDD equation: Vague Idea + AI = 5+ iterations of misalignment (AI guesses, user corrects, repeat). Clear Specification + AI = 1-2 iterations of refinement (AI executes precisely, user reviews, minor adjustments). Specs eliminate guesswork."
        },
        {
          id: 2,
          question: "What are the Six Phases of the SDD workflow?",
          options: {
            A: "Plan, Code, Test, Deploy, Monitor, Maintain",
            B: "SPECIFY (Define What), CLARIFY (Remove Ambiguity), PLAN (Design How), TASKS (Break Down Work), IMPLEMENT (AI Executes), VALIDATE (Verify Quality)",
            C: "Requirements, Design, Implementation, Testing, Deployment, Operations",
            D: "Brainstorm, Prototype, Iterate, Ship, Fix, Repeat"
          },
          correct: "B",
          explanation: "Six SDD Phases: 1) SPECIFY — intent, success criteria, constraints, non-goals. 2) CLARIFY — resolve ambiguities, edge cases, integration points. 3) PLAN — architecture, dependencies, testing strategy, tradeoffs. 4) TASKS — ordered work items with acceptance criteria. 5) IMPLEMENT — AI executes per spec. 6) VALIDATE — verify against spec."
        },
        {
          id: 3,
          question: "What are the four characteristics of a good specification?",
          options: {
            A: "Long, Detailed, Complex, Rigid",
            B: "Clarity (no ambiguity), Completeness (cover all scenarios), Constraints (define boundaries), Testability (verify success)",
            C: "Short, Simple, Flexible, Optional",
            D: "Technical, Business-focused, User-oriented, Manager-approved"
          },
          correct: "B",
          explanation: "Four characteristics: 1) Clarity — no ambiguity ('response time <200ms for 95th percentile' not 'make it fast'). 2) Completeness — cover functional, non-functional, integration, edge cases. 3) Constraints — technical, business, design boundaries. 4) Testability — every criterion must be measurable ('pass OWASP Top 10' not 'be secure')."
        },
        {
          id: 4,
          question: "When is Vibe Coding acceptable vs. when is SDD essential?",
          options: {
            A: "Vibe Coding is always better",
            B: "Vibe Coding: learning frameworks, throwaway prototypes, simple scripts (<50 lines). SDD essential: production features, multi-component systems, security/compliance projects, AI/team workflows.",
            C: "SDD is always better",
            D: "Neither is ever appropriate"
          },
          correct: "B",
          explanation: "Vibe Coding works for: learning frameworks, throwaway prototypes, simple scripts (<50 lines), trivial changes. SDD is essential for: production features, multi-component systems, security/compliance (auth/payments), team projects, AI-assisted development. The key is matching approach to stakes."
        },
        {
          id: 5,
          question: "What is the purpose of the CLARIFY phase in SDD?",
          options: {
            A: "To write more documentation",
            B: "To surface and resolve ambiguities — edge cases, integration points, error handling, business logic — encoding Q&A back into the spec",
            C: "To eliminate team members",
            D: "To reduce the spec length"
          },
          correct: "B",
          explanation: "CLARIFY phase: surface what's underspecified or ambiguous. Ask questions about edge cases (what if email service is down?), integration points (how does this connect to existing auth?), error handling (what's the retry strategy?), business logic (how do we handle +alias emails?). Encode answers back into spec."
        },
        {
          id: 6,
          question: "What makes success criteria testable in the SPECIFY phase?",
          options: {
            A: "Using vague adjectives like 'fast' and 'user-friendly'",
            B: "Making every criterion measurable — '<30s verification email delivery', '<200ms response time', 'bcrypt cost 12', '5 attempts/hr/IP limit'",
            C: "Writing long descriptions",
            D: "Getting management approval"
          },
          correct: "B",
          explanation: "Testable success criteria are measurable: '<30s verification email delivery' (not 'fast emails'), '<200ms response time' (not 'fast'), 'bcrypt cost 12' (not 'secure passwords'), '5 attempts/hr/IP limit' (not 'rate limiting'). Each can be objectively verified as pass/fail."
        },
        {
          id: 7,
          question: "What is the role shift in SDD?",
          options: {
            A: "From tester to debugger",
            B: "Humans focus on design, architecture, and validation. AI agents execute implementation against the spec. Primary skill shifts from coding to specification engineering.",
            C: "From manager to individual contributor",
            D: "From backend to frontend"
          },
          correct: "B",
          explanation: "SDD role shift: Humans focus on design (what to build), architecture (how to structure it), and validation (did we build it right). AI agents execute implementation against the spec. The primary skill shifts from writing code to writing precise specifications."
        },
        {
          id: 8,
          question: "What is the bottleneck in AI-assisted development according to SDD?",
          options: {
            A: "AI model speed",
            B: "Specification clarity — AI generates code fast IF requirements are clear. The bottleneck shifted from implementation to specification.",
            C: "Internet bandwidth",
            D: "Number of developers"
          },
          correct: "B",
          explanation: "AI generates code faster than humans IF requirements are clear. The bottleneck shifted from implementation (typing code) to specification (defining what precisely to build). Primary skill is now writing precise specs, not writing code. Vague specs → 5+ iterations; Clear specs → 1-2 iterations."
        },
        {
          id: 9,
          question: "What are the Quality Gates in SDD?",
          options: {
            A: "Physical security checkpoints",
            B: "Phase transition criteria — Specify Gate (intent clear, criteria measurable), Clarify Gate (ambiguities defined), Plan Gate (architecture complete), Tasks Gate (acceptance criteria per task), Implement Gate (matches spec), Validate Gate (criteria met)",
            C: "Budget approval gates",
            D: "Manager sign-off gates"
          },
          correct: "B",
          explanation: "Quality Gates prevent phase progression until criteria are met: Specify Gate (intent clear, criteria measurable, constraints explicit), Clarify Gate (ambiguities defined, edge cases identified), Plan Gate (architecture diagram, dependencies identified), Tasks Gate (acceptance criteria per task, no task >2 hrs), Implement Gate (matches spec/tests pass), Validate Gate (all criteria/constraints met)."
        },
        {
          id: 10,
          question: "What is the common SDD mistake of 'Writing Spec After Code' and its fix?",
          options: {
            A: "It's the correct approach — code first, document later",
            B: "It turns spec into retrospective documentation. Fix: write spec FIRST. Revise only if truly unknowable during implementation.",
            C: "Specs are never needed",
            D: "Code should never be written"
          },
          correct: "B",
          explanation: "Writing spec after code turns it into retrospective documentation (justifying decisions already made) rather than proactive guidance. Fix: write spec FIRST to drive implementation. Revise spec only when truly unknowable requirements emerge during implementation — treat specs as living documents."
        },
        {
          id: 11,
          question: "Scenario: You're building a user registration feature. Your spec says 'make it fast and secure.' According to SDD principles, what's wrong?",
          options: {
            A: "Nothing — it's clear enough",
            B: "Lacks testable criteria — should specify: '<200ms response time', 'bcrypt cost 12', 'GDPR compliant', '5 attempts/hr/IP limit'. Vague adjectives ('fast', 'secure') can't be validated objectively.",
            C: "Should be longer",
            D: "Should include the actual code"
          },
          correct: "B",
          explanation: "'Fast and secure' lacks testability. SDD requires measurable criteria: '<200ms response time for 95th percentile', 'bcrypt cost factor 12', 'GDPR compliant for EU users', '5 attempts/hr/IP rate limit'. Each criterion can be objectively verified as pass/fail during the Validate phase."
        },
        {
          id: 12,
          question: "Scenario: Your team writes a complete spec, AI implements it, but the validation shows only 60% of success criteria are met. According to SDD, what happens next?",
          options: {
            A: "Ship it anyway — 60% is good enough",
            B: "Iterate — feed validation report back to AI, specify which criteria failed, AI fixes mismatches, re-validate until all gates pass",
            C: "Rewrite the spec from scratch",
            D: "Fire the AI model"
          },
          correct: "B",
          explanation: "SDD iteration loop: validation report identifies which criteria failed (e.g., 'response time 350ms, target <200ms'). Feed this back to AI with specific failure details. AI optimizes (e.g., adds caching, improves queries). Re-run validation. Repeat until all gates pass. This is the 1-2 iterations of refinement SDD enables."
        },
        {
          id: 13,
          question: "Scenario: A developer argues 'SDD takes too long — I can just vibe code and fix issues as they come up.' For a production authentication system, what's the correct response?",
          options: {
            A: "They're right — vibe coding is faster",
            B: "Vibe Coding works for prototypes but fails for production auth systems requiring compliance, security, and edge case handling. SDD prevents costly production breaches and rework by surfacing ambiguities upfront during CLARIFY phase.",
            C: "SDD is only for large teams",
            D: "Authentication doesn't need specs"
          },
          correct: "B",
          explanation: "For production authentication, SDD is essential. Vibe Coding misses critical edge cases (rate limiting, bcrypt cost, GDPR compliance, email verification timeouts, SQL injection prevention) until production — when fixes are 10-100x more expensive. SDD's CLARIFY phase surfaces these upfront; VALIDATE phase ensures they're implemented."
        },
        {
          id: 14,
          question: "Scenario: During the TASKS phase, you have 8 work items estimated at 4 hours each. According to SDD guidance, what should you do?",
          options: {
            A: "Keep them as-is — 4 hours is fine",
            B: "Decompose further — SDD guidance says no task should exceed 2 hours. Break each 4-hour item into 2 smaller tasks with explicit acceptance criteria and dependencies.",
            C: "Combine them into fewer larger tasks",
            D: "Skip the TASKS phase"
          },
          correct: "B",
          explanation: "SDD TASKS Gate requires: no task >2 hours, explicit acceptance criteria per task, correct dependency ordering. 4-hour tasks are too large — they hide complexity and make validation difficult. Decompose each into 2 smaller tasks (e.g., 'DB migration' → 'create users table schema' + 'add indexes and constraints')."
        },
        {
          id: 15,
          question: "Scenario: Your spec was written upfront, but during implementation you discover a critical requirement was unknowable (a new compliance regulation). According to SDD, how should you handle this?",
          options: {
            A: "Ignore the new regulation — the spec is frozen",
            B: "Treat specs as living documents — update the spec with the new compliance requirement, re-run CLARIFY/PLAN on affected sections, then continue implementation from the revised spec",
            C: "Abandon SDD entirely",
            D: "Blame the regulatory body"
          },
          correct: "B",
          explanation: "SDD treats specs as living documents, not static contracts. When unknowable requirements emerge (new regulation, API changes, discovered constraints), update the spec, re-run CLARIFY (resolve new ambiguities) and PLAN (adjust architecture), then continue. This is fundamentally unlike Waterfall — SDD is iterative and adaptive."
        }
      ]
    },
    {
      id: 9,
      title: "Synthesis - Digital FTE Vision",
      mcqs: [
        {
          id: 1,
          question: "What is the Multiplier Effect in the Digital FTE Vision?",
          options: {
            A: "Multiplying the number of developers on a team",
            B: "Clear specifications → precise AI execution → reliable Custom Agents → Digital FTEs → multiplied capacity → larger problems → demand for better specifications (virtuous cycle)",
            C: "Multiplying code output by 10x",
            D: "Doubling the budget each quarter"
          },
          correct: "B",
          explanation: "The Multiplier Effect is a virtuous cycle: clear specs drive precise AI execution, producing reliable Custom Agents that become Digital FTEs. These multiply your capacity to tackle larger problems, which demands even better specifications. Each cycle compounds capability exponentially."
        },
        {
          id: 2,
          question: "What does 'AI as an Amplifier' mean in practice?",
          options: {
            A: "AI changes the quality of your habits",
            B: "AI accelerates habit quality — good practices become excellent/fast; poor practices become terrible/fragile at scale",
            C: "AI only amplifies code quantity",
            D: "AI amplifies only junior developer output"
          },
          correct: "B",
          explanation: "AI amplifies (accelerates) habit quality without changing it: Clear specifications → excellent results, fast. Vague requirements → terrible results, fast. Test-first development → reliable code, faster. No testing → extremely fragile code, multiplied. Discipline is critical because AI amplifies everything."
        },
        {
          id: 3,
          question: "What are the two strategic paths in the Digital FTE Vision?",
          options: {
            A: "Path A: Learn Python; Path B: Learn JavaScript",
            B: "Path A (Vibe Coding): treat AI as faster keyboard, rapid generation without specs, compounding technical debt. Path B (Agent Factory/SDD): specification-first thinking, reliable Digital FTEs, systematic capacity multiplication.",
            C: "Path A: Use AI; Path B: Don't use AI",
            D: "Path A: Work more hours; Path B: Work fewer hours"
          },
          correct: "B",
          explanation: "Path A (Vibe Coding): treat AI as faster keyboard, rapid code generation without specs, compounding technical debt, loss of systematic capability. Path B (Agent Factory/SDD): master specification-first thinking, build reliable Digital FTEs, systematic capacity multiplication, widening competitive gap."
        },
        {
          id: 4,
          question: "How does a General Agent transition to a Digital FTE?",
          options: {
            A: "It happens automatically",
            B: "Move from chat to production, augment with MCP/Agent Skills, configure for 24/7 autonomous operation with proactive monitoring and self-initiated execution",
            C: "Fine-tune the model on your data",
            D: "Rename it"
          },
          correct: "B",
          explanation: "General Agent → Digital FTE transition: 1) Move from chat interface to production environment, 2) Augment with MCP (tool connectivity) and Agent Skills (domain expertise/SOPs), 3) Configure for 24/7 autonomous operation with proactive domain monitoring, trigger detection, and self-initiated execution without human 'Start' commands."
        },
        {
          id: 5,
          question: "What are examples of Digital FTE roles?",
          options: {
            A: "Only customer support agents",
            B: "Continuous security auditing, real-time code review, automated tier-1 support, SaaS customer support automation",
            C: "Only code generation",
            D: "Only data entry"
          },
          correct: "B",
          explanation: "Digital FTE role examples: continuous security auditing (monitoring codebase for vulnerabilities 24/7), real-time code review (reviewing every PR automatically), automated tier-1 support (handling 80%+ routine customer queries), SaaS customer support automation (end-to-end ticket resolution). Any function with defined outcomes can be a Digital FTE."
        },
        {
          id: 6,
          question: "What is the relationship between the Five Powers and Digital FTEs?",
          options: {
            A: "Digital FTEs don't need the Five Powers",
            B: "Digital FTEs integrate all Five Powers (See, Hear, Reason, Act, Remember) via the Three-Layer AI Stack interconnected by MCP to operate autonomously",
            C: "Only the Reason power matters",
            D: "Five Powers are only for General Agents"
          },
          correct: "B",
          explanation: "Digital FTEs require all Five Powers: See (perceive system state via MCP Resources), Hear (receive instructions/feedback), Reason (analyze via Frontier Models), Act (execute via MCP Tools), Remember (maintain knowledge via AGENTS.md/Skills). The Three-Layer Stack (Frontier Models → AI-First IDEs → Development Agents) provides the infrastructure."
        },
        {
          id: 7,
          question: "Why is discipline more critical in the AI era according to the Synthesis?",
          options: {
            A: "AI requires more paperwork",
            B: "AI amplifies habits — without discipline (specs, testing, validation), AI creates chaos faster. With discipline, AI creates reliable Digital FTEs. The competitive gap widens between disciplined and undisciplined teams.",
            C: "AI is harder to use",
            D: "Discipline was always equally critical"
          },
          correct: "B",
          explanation: "Discipline is more critical because AI amplifies everything. Undisciplined teams (no specs, no tests) create chaos and technical debt faster. Disciplined teams (specs, TDD, validation) create reliable Digital FTEs and multiply capacity. The competitive gap widens — disciplined teams increasingly outperform undisciplined ones exponentially."
        },
        {
          id: 8,
          question: "What role do AIFF standards play in the Digital FTE Vision?",
          options: {
            A: "They're optional extras",
            B: "AGENTS.md, Agent Skills, and MCP ensure Digital FTEs are portable, reliable, and interoperable across environments — preventing vendor lock-in",
            C: "They only apply to open-source projects",
            D: "They replace the need for specifications"
          },
          correct: "B",
          explanation: "AIFF standards are foundational: AGENTS.md provides persistent project context, Agent Skills package domain expertise portably, MCP enables universal tool connectivity. Together they ensure Digital FTEs work across any LLM platform and client environment — preventing vendor lock-in and enabling scalable, sellable products."
        },
        {
          id: 9,
          question: "How does SDD integrate with the Digital FTE Vision?",
          options: {
            A: "SDD is separate from Digital FTEs",
            B: "SDD's 4-phase workflow (specify → clarify → plan → implement) ensures precise AI delegation and validation — the methodology that transforms vague ideas into reliable Digital FTEs",
            C: "SDD replaces Digital FTEs",
            D: "Digital FTEs don't need SDD"
          },
          correct: "B",
          explanation: "SDD is the methodology enabling Digital FTEs: 1) SPECIFY defines what the Digital FTE should achieve, 2) CLARIFY resolves ambiguities about behavior/edge cases, 3) PLAN architects the approach, 4) IMPLEMENT has AI execute precisely, 5) VALIDATE ensures the FTE meets all criteria. Without SDD, Digital FTEs are unreliable."
        },
        {
          id: 10,
          question: "What is the 'Virtuous Cycle' of the Multiplier Effect?",
          options: {
            A: "Code → Test → Deploy → Repeat",
            B: "Specs → Execution → Custom Agents → Digital FTEs → Capacity → Larger Problems → Better Specs",
            C: "Hire → Train → Promote → Retain",
            D: "Plan → Build → Break → Fix"
          },
          correct: "B",
          explanation: "The Virtuous Cycle: Clear specifications → precise AI execution → reliable Custom Agents → production Digital FTEs → multiplied capacity → tackle larger problems → demand for better specifications → even clearer specs → better execution. Each cycle compounds capability and competitive advantage."
        },
        {
          id: 11,
          question: "Scenario: Your team uses AI to rapidly generate 10,000 lines of code without specifications. According to the Synthesis, what is the likely outcome?",
          options: {
            A: "Excellent production-ready system",
            B: "Compounding technical debt — AI amplified the lack of specs, creating fragile code that's hard to maintain, with hidden bugs and misaligned features. Path A (Vibe Coding) at scale.",
            C: "No different from traditional development",
            D: "AI will fix the issues automatically"
          },
          correct: "B",
          explanation: "This is Path A (Vibe Coding) amplified by AI: 10,000 lines generated rapidly but without specs means no alignment validation, no edge case planning, no constraint definition. Result: compounding technical debt, hidden bugs, misaligned features. AI amplified the absence of discipline — creating chaos faster."
        },
        {
          id: 12,
          question: "Scenario: You architect a SaaS customer support Digital FTE. According to the Synthesis framework, which components are essential?",
          options: {
            A: "Only the AI model",
            B: "Specs (define behavior/outcomes), Five Powers (See tickets/Hear feedback/Reason responses/Act on systems/Remember context), AIFF standards (MCP for tools, Skills for SOPs, AGENTS.md for rules), SDD (4-phase workflow for reliable deployment)",
            C: "Only the UI",
            D: "Only the database"
          },
          correct: "B",
          explanation: "Digital FTE architecture requires: 1) Specs defining behavior and success outcomes, 2) Five Powers integration (See tickets, Hear customer feedback, Reason about responses, Act on CRM/email, Remember conversation context), 3) AIFF standards (MCP for tool connectivity, Skills for support SOPs, AGENTS.md for project rules), 4) SDD methodology for reliable 4-phase deployment."
        },
        {
          id: 13,
          question: "Scenario: Your competitor copies your AI approach using the same tools. According to the Amplifier Effect, what creates your sustainable advantage?",
          options: {
            A: "Using more expensive AI models",
            B: "Your accumulated discipline — specification quality, validation rigor, domain expertise encoded in Custom Agents, and iteration velocity. AI amplifies these habits, widening the competitive gap over time.",
            C: "Hiring more developers",
            D: "Lower pricing"
          },
          correct: "B",
          explanation: "Sustainable advantage comes from accumulated discipline: specification quality (clearer specs over time), validation rigor (better testing), domain expertise encoded in Custom Agents (defensible IP), and iteration velocity (faster improvement cycles). AI amplifies these habits. Competitors can copy tools but not your accumulated discipline — the gap widens."
        },
        {
          id: 14,
          question: "Scenario: A General Agent has been successfully prototyping a code review workflow for 2 weeks. According to the Digital FTE Vision, what's the next step?",
          options: {
            A: "Keep prototyping indefinitely",
            B: "Crystallize the prototype: extract patterns into specs, build as Custom Agent with MCP (file access, comment tools) and Skills (review checklists, style guides), deploy for 24/7 autonomous operation",
            C: "Abandon the prototype",
            D: "Switch to a different AI model"
          },
          correct: "B",
          explanation: "The Agent Factory paradigm: General Agent prototypes (Incubation) → crystallize patterns into specs → build Custom Agent (Specialization) with MCP for file access and commenting, Skills for review checklists and style guides → deploy for 24/7 autonomous operation. Don't stay in perpetual incubation — crystallize successful prototypes."
        },
        {
          id: 15,
          question: "Scenario: Your CTO asks 'What's our Digital FTE Vision for the next 12 months?' According to the Synthesis, what should the roadmap include?",
          options: {
            A: "Only use AI for coding faster",
            B: "Months 1-3: Master SDD and specification-first thinking. Months 4-6: Build Custom Agents for repetitive workflows. Months 7-9: Deploy Digital FTEs with MCP/Skills integration. Months 10-12: Scale to multi-agent orchestration and enterprise solutions.",
            C: "Fire all developers",
            D: "Buy the most expensive AI tools"
          },
          correct: "B",
          explanation: "12-month Digital FTE roadmap: Months 1-3 (master SDD — the foundational discipline), Months 4-6 (build Custom Agents for proven workflows), Months 7-9 (deploy Digital FTEs with full MCP/Skills integration for 24/7 autonomy), Months 10-12 (scale to multi-agent orchestration, sell enterprise solutions). This follows the natural maturation cycle."
        }
      ]
    },
    {
      id: 10,
      title: "Selling Agentic AI Services to Enterprises",
      mcqs: [
        {
          id: 1,
          question: "What is the estimated market size for agentic AI services that enterprises are investing in?",
          options: {
            A: "$1-10 billion",
            B: "$50-100 billion",
            C: "$100-400 billion",
            D: "$1-5 trillion"
          },
          correct: "C",
          explanation: "The agentic AI services market opportunity is estimated at $100-400 billion. Enterprises are actively investing in AI agents for workflow automation, customer support, code generation, and business process optimization."
        },
        {
          id: 2,
          question: "What are the Four Value Propositions for selling Digital FTEs to enterprises?",
          options: {
            A: "Speed, Cost, Quality, Security",
            B: "Enabler (help teams adopt AI), Implementer (build AI solutions), Custom Developer (create bespoke agents), Workflow Disruptor (transform business processes)",
            C: "Product, Price, Place, Promotion",
            D: "Features, Benefits, ROI, Support"
          },
          correct: "B",
          explanation: "Four Value Propositions: 1) Enabler — help teams adopt AI tools and train them. 2) Implementer — build and deploy AI solutions for clients. 3) Custom Developer — create bespoke Digital FTEs for specific workflows. 4) Workflow Disruptor — transform entire business processes with AI-native redesign."
        },
        {
          id: 3,
          question: "What pricing model is recommended for enterprise Digital FTE sales?",
          options: {
            A: "Hourly billing",
            B: "Outcome-based pricing — charge for measurable results (tickets resolved, deals closed, code delivered) rather than time spent",
            C: "Fixed monthly salary equivalent",
            D: "Free trial forever"
          },
          correct: "B",
          explanation: "Outcome-based pricing aligns incentives: charge for measurable results (support tickets resolved, sales deals closed, features delivered) rather than hours worked. This mirrors the Digital FTE value proposition — paying for outcomes, not seats. Enterprises prefer this as ROI is directly measurable."
        },
        {
          id: 4,
          question: "What is consultative selling in the context of Digital FTEs?",
          options: {
            A: "Pushing a standard product to every client",
            B: "Understanding the client's specific pain points, workflows, and goals, then designing custom Digital FTE solutions that address their unique challenges",
            C: "Only selling to consultants",
            D: "Offering discounts to close deals faster"
          },
          correct: "B",
          explanation: "Consultative selling: deeply understand the client's specific pain points (where are they losing money/time?), current workflows (how do they work now?), and strategic goals (where do they want to be?). Then design custom Digital FTE solutions that directly address their unique challenges and deliver measurable ROI."
        },
        {
          id: 5,
          question: "How many key factors do enterprises prioritize when selecting AI service providers?",
          options: {
            A: "2 factors",
            B: "4 factors",
            C: "6 factors",
            D: "10 factors"
          },
          correct: "C",
          explanation: "Enterprises prioritize 6 factors when selecting AI service providers: security/compliance, integration capability, vendor stability, ROI evidence, support quality, and scalability. All 6 must be addressed in enterprise sales conversations."
        },
        {
          id: 6,
          question: "What is the 'Enabler' value proposition?",
          options: {
            A: "Building custom agents for clients",
            B: "Helping enterprise teams adopt AI tools, providing training, change management, and best practices for AI-native workflows",
            C: "Disrupting their entire business model",
            D: "Selling them AI models"
          },
          correct: "B",
          explanation: "Enabler value proposition: help enterprise teams adopt AI tools successfully. Provide training programs, change management support, best practices documentation, and hands-on coaching. This is the entry-level engagement that builds trust for deeper implementations."
        },
        {
          id: 7,
          question: "What is the 'Workflow Disruptor' value proposition?",
          options: {
            A: "Making small improvements to existing processes",
            B: "Transforming entire business processes with AI-native redesign — reimagining workflows from the ground up for AI-first efficiency",
            C: "Disrupting the competition",
            D: "Breaking existing systems"
          },
          correct: "B",
          explanation: "Workflow Disruptor: the highest-value proposition — transform entire business processes with AI-native redesign. Not incremental improvement but reimagining workflows from ground up. Example: replacing a 20-person support team with Digital FTEs handling 80% of queries autonomously, with humans only on escalations."
        },
        {
          id: 8,
          question: "What is the typical enterprise sales cycle length for Digital FTE solutions?",
          options: {
            A: "1-2 weeks",
            B: "1-2 months",
            C: "3-6 months",
            D: "12-18 months"
          },
          correct: "C",
          explanation: "Enterprise sales cycles for Digital FTE solutions typically run 3-6 months due to procurement processes, security reviews, legal negotiations, and stakeholder alignment. This is why License model ($5k-$50k+/yr annual contracts) suits enterprise — it justifies the long sales cycle with larger contract values."
        },
        {
          id: 9,
          question: "Why is security/compliance the #1 enterprise priority when selecting AI providers?",
          options: {
            A: "Enterprises don't care about security",
            B: "Data breaches and regulatory violations carry massive financial/reputational risk. Enterprises must ensure GDPR, HIPAA, SOC2 compliance before adopting any AI solution.",
            C: "Security is only the client's responsibility",
            D: "AI can't be secured"
          },
          correct: "B",
          explanation: "Security/compliance is #1 because data breaches cost millions, regulatory violations (GDPR, HIPAA) carry massive fines, and reputational damage is lasting. Enterprises must verify AI providers meet SOC2, ISO 27001, GDPR, HIPAA standards before any engagement. This is non-negotiable for enterprise sales."
        },
        {
          id: 10,
          question: "What is the recommended strategy for addressing the 6 enterprise priorities in sales conversations?",
          options: {
            A: "Ignore them — focus on features",
            B: "Proactively address each in proposals: security certifications, integration case studies, company stability metrics, ROI calculations, support SLAs, and scalability benchmarks",
            C: "Only mention them if the client asks",
            D: "Promise everything"
          },
          correct: "B",
          explanation: "Proactively address all 6 priorities in proposals: 1) Security — show certifications (SOC2, GDPR). 2) Integration — share case studies with their tech stack. 3) Stability — demonstrate company traction/funding. 4) ROI — calculate specific savings for their use case. 5) Support — define SLAs. 6) Scalability — show benchmarks at their expected volume."
        },
        {
          id: 11,
          question: "Scenario: You're selling to a hospital that needs HIPAA-compliant patient intake automation. Which value proposition and pricing model align best?",
          options: {
            A: "Enabler + hourly billing",
            B: "Custom Developer + License model ($5k-$50k+/yr) — they need a bespoke HIPAA-compliant Digital FTE, self-hosted for data sovereignty, with annual contract justifying your compliance investment",
            C: "Workflow Disruptor + free trial",
            D: "Implementer + success fee"
          },
          correct: "B",
          explanation: "Hospitals need: bespoke solution (Custom Developer), HIPAA compliance (requires dedicated investment), data sovereignty (self-hosted), long-term relationship (annual License). The License model ($5k-$50k+/yr) justifies your compliance development cost and matches their procurement cycle. Success Fee is inappropriate for compliance-critical healthcare."
        },
        {
          id: 12,
          question: "Scenario: An enterprise client says 'Prove ROI for a $50k Digital FTE investment.' How do you calculate and present this?",
          options: {
            A: "'It uses AI — trust us'",
            B: "Current pain: 5-person team ($30k/mo), 2k tickets/mo, $150/ticket. Digital FTE: $1.5k/mo, 500+ tickets/day, $3/ticket. ROI: $28.5k/mo savings = $342k/yr. Payback: <1 week. Plus 24/7 coverage vs. 40 hrs/wk.",
            C: "'AI is the future — you'll benefit long-term'",
            D: "Show them technical benchmarks only"
          },
          correct: "B",
          explanation: "Enterprise ROI calculation must be specific and quantifiable: Current state (5 humans × $6k/mo = $30k/mo, 2k tickets, $150/ticket). Digital FTE state ($1.5k/mo, 500+ tickets/day, $3/ticket). Monthly savings: $28.5k. Annual: $342k. Payback: <1 week on $50k investment. Add qualitative benefits: 24/7 coverage, consistency, scalability."
        },
        {
          id: 13,
          question: "Scenario: A manufacturing company wants AI but has legacy systems (SAP, old databases). They're concerned about integration. Which of the 6 enterprise priorities does this address, and how?",
          options: {
            A: "Security — encrypt everything",
            B: "Integration Capability — demonstrate MCP connectors for their specific legacy systems (SAP, databases), show case studies of similar integrations, prove the Digital FTE can read/write to their existing systems without disruption",
            C: "Scalability — promise it will handle any load",
            D: "Support — offer 24/7 help desk"
          },
          correct: "B",
          explanation: "Integration Capability is the priority: enterprises need Digital FTEs to work WITH their existing systems, not replace them. Demonstrate MCP connectors for their SAP instance and legacy databases. Show case studies of similar manufacturing integrations. Prove read/write capability without disrupting existing workflows. This addresses their core concern."
        },
        {
          id: 14,
          question: "Scenario: You're choosing between Success Fee (10-30% commission) and Subscription ($500-$2k/mo) for a skeptical enterprise client who's never used AI. Which approach and why?",
          options: {
            A: "Subscription — they need commitment",
            B: "Success Fee — low-risk entry for skeptical clients. They pay only for measurable results (deals closed, tickets resolved), proving ROI before committing to ongoing subscription. Convert to Subscription after 3-6 months of proven results.",
            C: "Neither — they're not ready for AI",
            D: "Both simultaneously"
          },
          correct: "B",
          explanation: "For skeptical enterprises, Success Fee reduces perceived risk: they pay only for results, proving ROI before committing. This builds trust through demonstrated value. After 3-6 months of proven results, convert to Subscription model for predictable recurring revenue. This is the Success→Subscription hybrid strategy."
        },
        {
          id: 15,
          question: "Scenario: A Fortune 500 company evaluates your Digital FTE solution. According to enterprise sales best practices, what should your proposal proactively address?",
          options: {
            A: "Only the price",
            B: "All 6 enterprise priorities: security certifications (SOC2/GDPR), integration case studies (their tech stack), company stability (funding/traction), ROI calculation (specific to their use case), support SLAs (response times), and scalability benchmarks (at their expected volume)",
            C: "Only the technical features",
            D: "Only testimonials from other clients"
          },
          correct: "B",
          explanation: "Enterprise proposals must proactively address all 6 priorities: 1) Security — show SOC2, GDPR, HIPAA certifications. 2) Integration — case studies with their tech stack (SAP, Salesforce, etc.). 3) Stability — company funding, traction, team size. 4) ROI — specific calculation for their use case. 5) Support — defined SLAs (response <4hrs, resolution <24hrs). 6) Scalability — benchmarks at their expected volume (10k+ users, 1M+ transactions)."
        }
      ]
    }
  ]
};
