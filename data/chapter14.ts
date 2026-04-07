import type { Chapter } from "@/types";

export const chapter14: Chapter = {
  id: 14,
  title: "Working with General Agents — Claude Code and Cowork",
  description: "Claude Code essentials, Skills, Subagents, MCP, Hooks, Cowork workflows, and business strategy for AI-native development.",
  color: "green",
  lessons: [
    {
      id: 1,
      title: "Claude Code Origin Story",
      mcqs: [
        {
          id: 1,
          question: "Who created Claude Code and what was the founding insight?",
          options: {
            A: "Dario Amodei — he wanted a ChatGPT competitor",
            B: "Boris Cherny — granted Claude filesystem access in September 2024",
            C: "Sam Altman — pivoted OpenAI's Codex project",
            D: "Sundar Pichai — from Google's internal experiments"
          },
          correct: "B",
          explanation: "In September 2024, Anthropic engineer Boris Cherny granted Claude direct filesystem access. Claude naturally began exploring codebases. The team called this the 'Product Overhang': Claude already had the capability; it just needed a product interface."
        },
        {
          id: 2,
          question: "What were the dogfooding adoption results at Anthropic?",
          options: {
            A: "5% on day one; 20% by day five",
            B: "20% on day one; 50% by day five; 80%+ by May 2025 launch",
            C: "50% on day one; 80% by day five",
            D: "10% on day one; 30% by month one"
          },
          correct: "B",
          explanation: "Anthropic dogfooding: 20% adoption day one, 50% by day five, 80%+ daily usage by May 2025 launch. Engineers averaged 5 PRs/day vs. 1-2 at comparable organizations."
        },
        {
          id: 3,
          question: "What analogy distinguishes Passive AI from Agentic AI?",
          options: {
            A: "Passive AI is a junior developer; Agentic AI is a senior architect",
            B: "Passive AI is a consultant on the phone; Agentic AI is a pair programmer looking at your code",
            C: "Passive AI reads documentation; Agentic AI writes documentation",
            D: "Passive AI runs on cloud; Agentic AI runs locally"
          },
          correct: "B",
          explanation: "'Passive AI is a consultant on the phone (doesn't see your screen). Agentic AI is a pair programmer looking at your code.' Passive AI suggests generic solutions; Claude Code reads your files, understands patterns, proposes specific changes."
        },
        {
          id: 4,
          question: "What revenue milestone did Claude Code reach?",
          options: {
            A: "$100M annual run-rate by Q1 2025",
            B: "$500M+ by mid-2025; $1B by November 2025, nearly all from word-of-mouth",
            C: "$250M at launch through enterprise sales",
            D: "$1B at launch through bundled subscriptions"
          },
          correct: "B",
          explanation: "Claude Code reached $500M+ annual run-rate by mid-2025, growing to $1B by November 2025 — nearly all from word-of-mouth. This validated the 'Product Overhang' concept."
        },
        {
          id: 5,
          question: "What is the 'Product Overhang' concept?",
          options: {
            A: "The gap between Claude's pricing and competitors",
            B: "Claude already had the capability; it just needed a product interface to unlock it",
            C: "The backlog of product features waiting to be released",
            D: "The excess compute capacity available"
          },
          correct: "B",
          explanation: "The 'Product Overhang' insight: Claude already had the capability to function as a development partner before Claude Code existed. The product interface simply unlocked pre-existing capability."
        },
        {
          id: 6,
          question: "What was the 'Second Product Overhang'?",
          options: {
            A: "Claude API — March 2025",
            B: "Claude Cowork — January 2026, desktop GUI for knowledge workers",
            C: "Claude Mobile — June 2025",
            D: "Claude Enterprise — September 2025"
          },
          correct: "B",
          explanation: "The second product overhang was Claude Cowork, launched January 2026. Same agent architecture as Claude Code but desktop GUI targeting knowledge workers for documents, data, and organization."
        },
        {
          id: 7,
          question: "What percentage of Claude Code was written by Claude Code itself?",
          options: {
            A: "50%",
            B: "75%",
            C: "Approximately 90%",
            D: "100%"
          },
          correct: "C",
          explanation: "'Approximately ninety percent of Claude Code was written by Claude Code itself.' This demonstrates the General Agent → Custom Agent factory cycle."
        },
        {
          id: 8,
          question: "When should you use a General Agent vs. Custom Agent?",
          options: {
            A: "General for Python; Custom for JavaScript",
            B: "General for novel problems/debugging; Custom for repetitive workflows",
            C: "General offline; Custom online",
            D: "General cheaper; Custom faster"
          },
          correct: "B",
          explanation: "General Agent (Claude Code) = novel problems, debugging, exploration with instant setup. Custom Agent = repetitive workflows, customer-facing tasks, requiring weeks to design."
        },
        {
          id: 9,
          question: "What distinguishes Claude Code from Cowork?",
          options: {
            A: "Claude Code uses GPT-4; Cowork uses Claude",
            B: "Claude Code is terminal/CLI for developers; Cowork is desktop GUI for knowledge workers",
            C: "Claude Code requires subscription; Cowork is free",
            D: "Claude Code works on files; Cowork on databases"
          },
          correct: "B",
          explanation: "Claude Code = Terminal/CLI for developers building software. Cowork = Desktop GUI for knowledge workers handling documents, data, organization. Both use same Claude Agent SDK."
        },
        {
          id: 10,
          question: "What was Claude Code's PR throughput increase?",
          options: {
            A: "1→3 PRs/day with team 2→5 (50% increase)",
            B: "1-2→5 PRs/day with team 2→10 (67% throughput increase)",
            C: "2→20 PRs/day with team 5→50 (400% increase)",
            D: "No change in throughput"
          },
          correct: "B",
          explanation: "Engineers averaged 5 PRs/day vs. 1-2 at comparable orgs, with 67% throughput increase despite team growing 2→10. This demonstrates Claude Code's multiplication of engineering output."
        },
        {
          id: 11,
          question: "Scenario: Your team uses ChatGPT for coding help. A developer suggests Claude Code, saying 'it's like having a pair programmer instead of a consultant.' What capability does Claude Code have that ChatGPT lacks?",
          options: {
            A: "Longer responses",
            B: "Direct filesystem access — reads actual code files, understands project structure, runs tests, iterates based on real errors",
            C: "Free vs. subscription",
            D: "Offline vs. online"
          },
          correct: "B",
          explanation: "Claude Code's founding insight was granting direct filesystem access — Claude can read files, follow imports, understand project structure, run tests, identify errors, and iterate. ChatGPT without file access can only suggest generic solutions."
        },
        {
          id: 12,
          question: "Scenario: Your manager asks about Claude Code adoption risk. What evidence can you provide from Anthropic's experience?",
          options: {
            A: "100% adoption within one week",
            B: "20% day one, 50% by day five, 80%+ by launch — engineers averaged 5 PRs/day vs. 1-2",
            C: "Slow initial growth over two years",
            D: "Only senior engineers adopted it"
          },
          correct: "B",
          explanation: "Anthropic's dogfooding showed rapid organic adoption: 20% day one, 50% by day five, 80%+ by launch. Engineers averaged 5 PRs/day vs. 1-2 at comparable orgs, demonstrating immediate value recognition."
        },
        {
          id: 13,
          question: "Scenario: Your startup debates building Custom Agents vs. using Claude Code directly. When would building a Custom Agent be better?",
          options: {
            A: "For debugging and exploration",
            B: "For repetitive workflows that run the same way every time, or customer-facing tasks requiring consistent behavior",
            C: "For instant setup",
            D: "For novel problems"
          },
          correct: "B",
          explanation: "Custom Agents are best for repetitive workflows and customer-facing tasks requiring weeks to design. General Agents (Claude Code) are best for novel problems, debugging, exploration with instant setup."
        },
        {
          id: 14,
          question: "Scenario: A colleague says 'Claude Code wrote 90% of itself — that's marketing hype.' What is the actual significance?",
          options: {
            A: "Proves no bugs",
            B: "Demonstrates General Agent → Custom Agent factory cycle: Claude Code (General Agent) was used to build more Claude Code",
            C: "Means no human oversight needed",
            D: "Shows AI replaces all developers"
          },
          correct: "B",
          explanation: "This demonstrates the General Agent → Custom Agent factory cycle — Claude Code as a General Agent was used to build more of itself, iteratively becoming more of a Custom Agent. Powerful proof of concept."
        },
        {
          id: 15,
          question: "Scenario: Your company decides between Claude Code for developers and Cowork for knowledge workers. Your team has software engineers and marketing analysts. How should you allocate?",
          options: {
            A: "Claude Code to everyone — more powerful",
            B: "Cowork to everyone — friendlier interface",
            C: "Claude Code for developers (terminal/CLI for software); Cowork for marketing analysts (desktop GUI for documents, data)",
            D: "Neither — build custom agent"
          },
          correct: "C",
          explanation: "Claude Code = Terminal/CLI for developers building software. Cowork = Desktop GUI for knowledge workers handling documents, data, organization. Choice depends on user's work type, not capability differences."
        }
      ]
    },
    {
      id: 2,
      title: "CLAUDE.md Context Files",
      mcqs: [
        {
          id: 1,
          question: "What problem does CLAUDE.md solve?",
          options: {
            A: "Stores API keys",
            B: "Every session starts blank — CLAUDE.md loads automatically at session start providing persistent context",
            C: "Replaces package.json",
            D: "Caches AI responses"
          },
          correct: "B",
          explanation: "LLMs are stateless — every session starts blank. CLAUDE.md in project root loads automatically at session start, providing persistent project context (tech stack, conventions, commands)."
        },
        {
          id: 2,
          question: "What formula gives Claude Code 'persistent project understanding'?",
          options: {
            A: "API key + system prompt + history = memory",
            B: "Stateless LLM + file system access + CLAUDE.md = persistent project understanding",
            C: "Training data + RLHF + CLAUDE.md = project-aware model",
            D: "Context window + embeddings + vector DB = memory"
          },
          correct: "B",
          explanation: "The formula: stateless LLM + file system access + CLAUDE.md = persistent project understanding. CLAUDE.md provides persistent external context that overcomes the stateless constraint."
        },
        {
          id: 3,
          question: "What are the 6 sections of a properly structured CLAUDE.md?",
          options: {
            A: "Goals, Timeline, Budget, Team, Tools, Risks",
            B: "Project Overview, Technology Stack, Directory Structure, Coding Conventions, Key Commands, Important Notes",
            C: "Authentication, Database, API, Frontend, Testing, Deployment",
            D: "Vision, Mission, Values, Strategy, Tactics, Metrics"
          },
          correct: "B",
          explanation: "The 6 CLAUDE.md sections: 1) Project Overview, 2) Technology Stack, 3) Directory Structure, 4) Coding Conventions, 5) Key Commands, 6) Important Notes (gotchas, dependencies, security)."
        },
        {
          id: 4,
          question: "What is the recommended maximum length for CLAUDE.md?",
          options: {
            A: "500 lines",
            B: "Under 200 lines (later reduced to under 60 lines)",
            C: "50 lines",
            D: "No limit"
          },
          correct: "B",
          explanation: "CLAUDE.md target is under 200 lines (later reduced to under 60). CLAUDE.md loads at every session start and consumes context window. Larger files cause Claude to ignore critical instructions."
        },
        {
          id: 5,
          question: "What is the difference between AGENTS.md and CLAUDE.md?",
          options: {
            A: "AGENTS.md for multi-agent; CLAUDE.md for single-agent",
            B: "AGENTS.md is universal standard (60,000+ projects); CLAUDE.md references @AGENTS.md plus Claude-specific features",
            C: "AGENTS.md for coding; CLAUDE.md for conversational",
            D: "They are identical"
          },
          correct: "B",
          explanation: "AGENTS.md (OpenAI standard) contains universal project info. CLAUDE.md references @AGENTS.md for portability while adding Claude-specific features: skills, hooks, MCP configs, subagent definitions."
        },
        {
          id: 6,
          question: "What does the /init command do?",
          options: {
            A: "Initializes git repository",
            B: "Claude analyzes codebase and generates initial CLAUDE.md with build commands, test instructions, conventions",
            C: "Installs dependencies",
            D: "Creates new project from template"
          },
          correct: "B",
          explanation: "The /init command triggers Claude to analyze the codebase and automatically generate an initial CLAUDE.md with detected build commands, test instructions, and coding conventions."
        },
        {
          id: 7,
          question: "What is the expert insight about CLAUDE.md's cost-benefit?",
          options: {
            A: "Takes weeks to write, saves months",
            B: "'Context is gold. CLAUDE.md is cheapest way to give Claude continuous project awareness. Write once; benefit every session.'",
            C: "Should be written by AI",
            D: "Optional for small projects"
          },
          correct: "B",
          explanation: "'In AI-driven development, context is gold. CLAUDE.md is the cheapest way to give Claude continuous project awareness. Write it once; benefit every session.' One-time cost justified by cumulative benefit."
        },
        {
          id: 8,
          question: "What causes CLAUDE.md to 'not load'?",
          options: {
            A: "Large file size",
            B: "Wrong filename, not in project root, empty file, or session not restarted",
            C: "Syntax errors",
            D: "Missing API permissions"
          },
          correct: "B",
          explanation: "CLAUDE.md troubleshooting: verify exact filename ('CLAUDE.md'), confirm in project root (not subdirectory), ensure not empty, restart session. These are the four common causes."
        },
        {
          id: 9,
          question: "What are the four stages of CLAUDE.md development?",
          options: {
            A: "Draft → Review → Approve → Deploy",
            B: "Stage 1: Developer creates initial; Stage 2: AI as Teacher; Stage 3: AI as Student; Stage 4: AI as Co-Worker",
            C: "Plan → Build → Test → Monitor",
            D: "Research → Specify → Implement → Validate"
          },
          correct: "B",
          explanation: "Four stages: Stage 1 (Developer creates initial), Stage 2 (AI as Teacher — identifies missing sections), Stage 3 (AI as Student — developer teaches patterns), Stage 4 (AI as Co-Worker — iterative refinement)."
        },
        {
          id: 10,
          question: "What belongs in 'Important Notes' section?",
          options: {
            A: "Timeline, stakeholders, budget",
            B: "Gotchas, critical dependencies, security considerations",
            C: "Full API documentation",
            D: "Git commit history"
          },
          correct: "B",
          explanation: "'Important Notes' (section 6) covers gotchas (non-obvious behaviors), critical dependencies (special libraries), security considerations (never commit credentials, sanitize inputs)."
        },
        {
          id: 11,
          question: "Scenario: You join a team. CLAUDE.md is 350 lines. Claude often ignores testing instructions. What is the likely cause?",
          options: {
            A: "Claude has a bug",
            B: "CLAUDE.md Overload — files over 300 lines exhaust instruction budget (~150-200 distinct instructions)",
            C: "Instructions in wrong section",
            D: "Claude needs retraining"
          },
          correct: "B",
          explanation: "CLAUDE.md Overload: files over 300 lines exhaust the ~150-200 instruction budget. Critical instructions get buried. Fix: reduce to under 60 lines, move details to referenced files and Skills."
        },
        {
          id: 12,
          question: "Scenario: Your team has a code review process after every change. Should this be in CLAUDE.md or as a Hook?",
          options: {
            A: "CLAUDE.md only",
            B: "If deterministic and must execute consistently, use a Hook (zero context cost). If requires LLM judgment, use CLAUDE.md",
            C: "Hooks are always better",
            D: "Both are equivalent"
          },
          correct: "B",
          explanation: "CLAUDE.md instructions are probabilistic and consume context. Hooks are deterministic, require no LLM judgment, run externally with zero context cost. For 'run tests after every change,' a Hook is more reliable."
        },
        {
          id: 13,
          question: "Scenario: You're writing CLAUDE.md for a monorepo with 5 services. How should you structure it?",
          options: {
            A: "One giant CLAUDE.md at root",
            B: "Use Hierarchy Rule — root CLAUDE.md with shared conventions, service-specific CLAUDE.md in each subdirectory",
            C: "Separate AGENTS.md for each service",
            D: "Monorepos don't support CLAUDE.md"
          },
          correct: "B",
          explanation: "Hierarchy Rule: 'Nearest CLAUDE.md takes precedence.' Place root CLAUDE.md with shared conventions, service-specific CLAUDE.md in subdirectories (services/auth/CLAUDE.md). Claude loads both, service file takes precedence."
        },
        {
          id: 14,
          question: "Scenario: A developer complains 'I re-explain deployment to Claude every session!' Team has no CLAUDE.md. What is the solution?",
          options: {
            A: "Report memory bug to Anthropic",
            B: "LLMs are stateless — every session starts blank. Create CLAUDE.md with deployment commands; it loads automatically",
            C: "Use longer prompts",
            D: "Deployment too complex for AI"
          },
          correct: "B",
          explanation: "Core problem CLAUDE.md solves: 'LLMs are stateless — every session starts blank.' Without CLAUDE.md, every session requires re-explaining. With CLAUDE.md, deployment commands load automatically — 'write once; benefit every session.'"
        },
        {
          id: 15,
          question: "Scenario: CLAUDE.md says 'Use pnpm, not npm' but Claude generates npm commands. CLAUDE.md loads correctly. Where should this instruction be placed?",
          options: {
            A: "Middle section (Zone 2)",
            B: "Zone 1 (first 10%) — critical constraints get highest attention (primacy effect)",
            C: "Very end (Zone 3)",
            D: "Position doesn't matter"
          },
          correct: "B",
          explanation: "Three-Zone Position Strategy: Zone 1 (first 10%) = HIGH attention (primacy), Zone 2 (middle 80%) = LOW (~30% less recall), Zone 3 (last 10%) = HIGH (recency). Critical constraints belong in Zone 1."
        }
      ]
    },
    {
      id: 3,
      title: "The Concept Behind Skills",
      mcqs: [
        {
          id: 1,
          question: "What is the core thesis of the Skills lesson?",
          options: {
            A: "Skills are optional add-ons",
            B: "'Stop building agents. Build skills instead.'",
            C: "Skills replace CLAUDE.md",
            D: "Skills only for enterprise"
          },
          correct: "B",
          explanation: "'Stop building agents. Build skills instead.' Skills encode domain expertise as reusable, portable packages across any agent runtime — Claude Code, Gemini CLI, OpenAI Codex — without rebuilding the agent."
        },
        {
          id: 2,
          question: "What do Models + Code provide, and what gap do Skills fill?",
          options: {
            A: "Intelligence + Speed; Skills fill accuracy",
            B: "Intelligence + Execution = capacity but lacks domain expertise; Skills fill expertise gap",
            C: "Training + Deployment; Skills fill interface",
            D: "Context + Memory; Skills fill reasoning"
          },
          correct: "B",
          explanation: "Models provide intelligence; Code provides execution. Together they create capacity but lack domain expertise. Skills encode procedural knowledge: how to conduct finance review, review contracts, create brand-compliant content."
        },
        {
          id: 3,
          question: "What are the three levels of Progressive Disclosure?",
          options: {
            A: "Level 1: Metadata (~100 tokens always); Level 2: Full SKILL.md (on-demand, <5K); Level 3: Supporting files (conditional)",
            B: "Level 1: Name; Level 2: Parameters; Level 3: Output",
            C: "Level 1: API; Level 2: Logic; Level 3: Model calls",
            D: "Level 1: Training; Level 2: Weights; Level 3: Inference"
          },
          correct: "A",
          explanation: "Progressive Disclosure: Level 1 (~100 tokens/skill metadata, always loaded), Level 2 (full SKILL.md, <5K, on-demand), Level 3 (supporting files, conditional). Achieves 80-98% token reduction."
        },
        {
          id: 4,
          question: "What is the correct folder structure for Skills?",
          options: {
            A: ".claude/prompts/skill-name/PROMPT.md",
            B: ".claude/skills/skill-name/SKILL.md with optional supporting files",
            C: "skills/skill-name.json at root",
            D: ".anthropic/skills/skill-name/index.md"
          },
          correct: "B",
          explanation: "Skills use: .claude/skills/ → skill-name/ → SKILL.md (plus optional supporting files like templates/standup.md). Each skill is its own folder with SKILL.md (YAML metadata + instructions) and assets."
        },
        {
          id: 5,
          question: "What are the three sources of Skills?",
          options: {
            A: "Free, Premium, Enterprise",
            B: "Bundled (pre-installed), Partner (Browserbase, Notion, Stripe), Enterprise/Custom",
            C: "Community, Official, Private",
            D: "Python, JavaScript, TypeScript"
          },
          correct: "B",
          explanation: "Three sources: Bundled (/batch, /claude-api, /debug, /loop, /simplify), Partner (Browserbase, Notion, Stripe), Enterprise/Custom (organization-specific workflows)."
        },
        {
          id: 6,
          question: "How do Skills and MCP complement each other?",
          options: {
            A: "Skills replace MCP",
            B: "MCP provides connectivity (APIs, databases); Skills provide expertise for leveraging connections",
            C: "MCP stores skills",
            D: "Skills for data; MCP for execution"
          },
          correct: "B",
          explanation: "Skills and MCP complementary: MCP = connectivity (APIs, databases, tools — 'with-what'). Skills = expertise ('how-to'). Together: Context + Procedures + Access = Digital FTE."
        },
        {
          id: 7,
          question: "What is the 'Stack Analogy' for Models, Runtimes, and Skills?",
          options: {
            A: "Models = RAM; Runtimes = CPU; Skills = GPU",
            B: "Models = processors; Runtimes = OS; Skills = applications. Few build processors/OS; millions build apps",
            C: "Models = DB; Runtimes = backend; Skills = frontend",
            D: "Models = hardware; Runtimes = firmware; Skills = software"
          },
          correct: "B",
          explanation: "'Models = processors; Runtimes = OS; Skills = applications. Few build processors/OS; millions build applications.' Value creation is in building skills — not training models or building frameworks."
        },
        {
          id: 8,
          question: "What strategic value do Skills have as 'Strategic IP'?",
          options: {
            A: "Generate royalties",
            B: "Can be shared, versioned in Git, integrated into custom agents, monetized, ported across tools via agentskills.io",
            C: "Give premium access",
            D: "Replace patents"
          },
          correct: "B",
          explanation: "Skills as Strategic IP: shared within teams, versioned in Git, integrated into custom agents, monetized in vertical solutions, ported across AI tools (Claude, Gemini, Codex) via agentskills.io standard."
        },
        {
          id: 9,
          question: "Which domains benefit from Skills?",
          options: {
            A: "Only software development",
            B: "Finance, legal, marketing, healthcare, recruiting — any domain with repeatable expert workflows",
            C: "Only Fortune 500",
            D: "Only structured data domains"
          },
          correct: "B",
          explanation: "Skills work universally: Finance (quarterly reporting), Legal (contract review), Marketing (brand guidelines), Healthcare (clinical docs), Recruiting (evaluations). Any repeatable expert workflow is a candidate."
        },
        {
          id: 10,
          question: "What is the key advantage of Progressive Disclosure?",
          options: {
            A: "Encryption",
            B: "~100 token metadata per skill at start vs. <5K full content on-demand — dramatically reduces baseline context",
            C: "Real-time updates",
            D: "Multi-user sharing"
          },
          correct: "B",
          explanation: "Progressive Disclosure: ~100 tokens/skill metadata always loaded vs. <5K full content on-demand. For 20 skills: ~2,000 tokens baseline vs. 100,000 if fully loaded — extends effective context capacity."
        },
        {
          id: 11,
          question: "Scenario: Your org has 50 Skills. A developer complains 'Claude is slow to start — loads all skills.' What is actual behavior?",
          options: {
            A: "Developer correct — all 50 fully load (250K tokens)",
            B: "Only metadata (~100 tokens each = ~5K total) loads at startup; full content loads on-demand",
            C: "Skills don't load until invoked",
            D: "Skills compressed but take time to decompress"
          },
          correct: "B",
          explanation: "Progressive Disclosure: only ~100 tokens metadata per skill loads at startup (50 × 100 = ~5K). Full SKILL.md (<5K each) loads only when invoked. Developer misunderstands architecture — full content never loads unless needed."
        },
        {
          id: 12,
          question: "Scenario: Building a 'Contract Review' Skill for legal team. Where to store and what structure?",
          options: {
            A: "/skills/contract-review.json at root",
            B: ".claude/skills/contract-review/SKILL.md with YAML frontmatter + supporting files (templates/, checklists/)",
            C: "Add to CLAUDE.md under [skills]",
            D: "~/.anthropic/skills/contract-review.md"
          },
          correct: "B",
          explanation: "Skill folder structure: .claude/skills/skill-name/SKILL.md with YAML frontmatter (name, description, when to use) and procedural instructions. Supporting files in same folder. For global: ~/.claude/skills/."
        },
        {
          id: 13,
          question: "Scenario: Team uses Claude Code with MCP connected to CRM. Developer asks 'Encode CRM queries as Skill or rely on MCP?' How do you respond?",
          options: {
            A: "MCP only — Skills can't interact externally",
            B: "Use both: MCP = connectivity ('with-what' — CRM API); Skills = expertise ('how-to' — which queries, how to interpret)",
            C: "Skills only — MCP redundant",
            D: "Neither — custom API code"
          },
          correct: "B",
          explanation: "Skills and MCP complementary: MCP = connectivity (API access, 'with-what'). Skills = expertise (procedural knowledge, 'how-to'). For CRM: MCP connects to API; Skills encode 'when to query leads,' 'how to qualify.'"
        },
        {
          id: 14,
          question: "Scenario: Competitor replicates your AI legal service. They have same models (Claude) and runtime (Claude Code). What is your defensible advantage?",
          options: {
            A: "Custom-trained model",
            B: "Exclusive Anthropic license",
            C: "Skills encoding deep legal domain expertise — unwritten procedures, judgment patterns, institutional knowledge",
            D: "Proprietary runtime"
          },
          correct: "C",
          explanation: "'Skills as Strategic IP': everyone has same models/runtimes. Defensible moat is Skills encoding domain expertise — unwritten procedures ('how we review contracts'), judgment patterns ('risky clauses'), institutional knowledge. Hard to replicate."
        },
        {
          id: 15,
          question: "Scenario: Finance team has 'Quarterly Review' Skill in Claude Code. Company switches to Gemini CLI. What happens to Skill investment?",
          options: {
            A: "Lost — rewrite from scratch",
            B: "Works in Gemini CLI without modification if follows agentskills.io standard — SKILL.md format is cross-vendor portable",
            C: "Requires minor YAML tweaks",
            D: "Skills only work in Claude Code"
          },
          correct: "B",
          explanation: "Cross-vendor portability via agentskills.io: Skills built to standard (SKILL.md with YAML in .claude/skills/) work across Claude Code, Gemini CLI, OpenAI Codex CLI. Skill is portable asset — switching vendors doesn't lose investment."
        }
      ]
    },
    {
      id: 4,
      title: "Subagents and Orchestration",
      mcqs: [
        { id: 1, question: "What is a subagent in Claude Code?", options: { A: "A junior developer", B: "A specialized AI agent with its own instructions and isolated context window", C: "A background process", D: "A reduced-capability Claude" }, correct: "B", explanation: "'A subagent is a specialized AI Agent with its own instructions and isolated context window.' Isolated context is key — subagents don't inherit main agent's conversation history." },
        { id: 2, question: "What are the five built-in subagents?", options: { A: "Code, Debug, Test, Deploy, Monitor", B: "Explore (Haiku), Plan (Sonnet), general-purpose, Bash, claude-code-guide (Haiku)", C: "Reader, Writer, Tester, Reviewer, Deployer", D: "Analyst, Designer, Developer, QA, DevOps" }, correct: "B", explanation: "Five built-in: Explore (file discovery, Haiku), Plan (complex tasks, Sonnet), general-purpose (inherits model), Bash (command execution), claude-code-guide (FAQ, Haiku)." },
        { id: 3, question: "What is the execution flow for subagents?", options: { A: "Main Claude pauses, transfers context", B: "Main identifies task → launches subagent with objective → subagent works in isolated context → returns results", C: "User manually spawns with flags", D: "Subagents run first, then main synthesizes" }, correct: "B", explanation: "Flow: 1) Main identifies specialist-appropriate task, 2) Launches subagent with objective, 3) Subagent works in isolated context, 4) Returns results. Subagents have isolated context — don't see main's conversation." },
        { id: 4, question: "What is the file structure for custom subagents?", options: { A: "claude-agents/agent-name.json", B: ".claude/agents/agent-name.md with YAML frontmatter (name, description, model)", C: "subagents/agent-name/config.yaml", D: "~/.anthropic/agents/agent-name.ts" }, correct: "B", explanation: "Custom subagents: .claude/agents/agent-name.md with YAML frontmatter (name, description, model) and instruction content. Also ~/.claude/agents/ for global availability." },
        { id: 5, question: "What is the decision rule for Skills vs. Subagents?", options: { A: "Skills expensive; Subagents cheap", B: "Skills for automatic enforcement of repeated procedures; Subagents for complex work requiring context isolation", C: "Skills for Python; Subagents for TypeScript", D: "Skills read-only; Subagents write" }, correct: "B", explanation: "Decision rule: 'Use skills for automatic enforcement of repeated procedures; choose subagents for complex work requiring context isolation.' Skills = lightweight, shared context. Subagents = isolated context, multi-step work." },
        { id: 6, question: "What are the two ways to invoke subagents?", options: { A: "API and CLI only", B: "Automatic (Claude recognizes task complexity) and Explicit (@-mention syntax)", C: "Only explicitly", D: "Sync and async" }, correct: "B", explanation: "Two ways: Automatic (Claude recognizes task warrants specialist, spawns automatically), Explicit (@-mention syntax to request specific subagent). Both result in isolated-context execution." },
        { id: 7, question: "What distinguishes Skills from Subagents in context handling?", options: { A: "Both use isolated contexts", B: "Skills: Shared context (within main agent's window); Subagents: Isolated (fresh context window)", C: "Skills: No context; Subagents: Full history", D: "Skills compress; Subagents delete" }, correct: "B", explanation: "Skills vs. Subagents: Skills have Shared context (runs within main agent's window), Subagents have Isolated context (independent, don't inherit main's conversation history). Isolation is key differentiator." },
        { id: 8, question: "What command creates a custom subagent?", options: { A: "/create-agent", B: "/new-subagent", C: "/agents → Create new agent → choose location → Claude-assisted generation", D: "claude --init-agent" }, correct: "C", explanation: "Creating custom subagent: Run /agents → Create new agent → Choose location (.claude/agents/ or ~/.claude/agents/) → Claude-assisted generation → Describe role and triggers." },
        { id: 9, question: "What is 'Parallel Execution' of subagents?", options: { A: "Running same subagent twice", B: "Multiple subagents launching simultaneously to solve independent subtasks in parallel, reducing wall-clock time", C: "Sharing context windows", D: "Running on multiple CPU cores" }, correct: "B", explanation: "Parallel execution: multiple subagents launch simultaneously for coordinated problem-solving. For tasks without dependencies (analyze frontend, backend, database independently), parallel subagents complete all three simultaneously." },
        { id: 10, question: "Which built-in subagent uses Haiku?", options: { A: "Plan", B: "general-purpose", C: "Explore and claude-code-guide", D: "Bash" }, correct: "C", explanation: "Explore (file discovery) and claude-code-guide (FAQ) use Haiku for efficiency. These involve pattern recognition/retrieval, not complex reasoning. Plan uses Sonnet for complex reasoning." },
        { id: 11, question: "Scenario: Your team needs a security audit across 50 files. Should you use a Skill or Subagent?", options: { A: "Skill — it's a repeated procedure", B: "Subagent — complex analysis requires fresh context and isolated reasoning", C: "Neither — do it manually", D: "Both simultaneously" }, correct: "B", explanation: "Security audit across 50 files is complex, multi-step work requiring isolated reasoning. Subagent is appropriate — fresh context prevents accumulated assumptions from poisoning analysis. Skill is for repeated procedures, not complex analysis." },
        { id: 12, question: "Scenario: You want to enforce 'add JSDoc comment above each function' after every Edit. Skill or Subagent?", options: { A: "Subagent — it's complex", B: "Skill — repeated procedure (same action every time), lightweight, benefits from automatic invocation", C: "Hook — should run automatically", D: "CLAUDE.md instruction" }, correct: "B", explanation: "Enforcing JSDoc comments after every Edit is a repeated procedure (same action), lightweight (no complex reasoning), benefits from automatic invocation. Perfect for Skill. Subagent would be overkill." },
        { id: 13, question: "Scenario: Your team has a 'Code Style Enforcement' procedure. Should this be a Skill or Subagent?", options: { A: "Subagent — style is complex", B: "Skill — consistent, rule-based procedure encodable in SKILL.md and applied automatically", C: "Neither — too simple", D: "Both" }, correct: "B", explanation: "Code style enforcement is a rule-based procedure: apply consistent rules every time. Encodable in SKILL.md. Contrast with Subagent audit that must reason about what's wrong — style enforcement already knows what 'correct' looks like." },
        { id: 14, question: "Scenario: Complex refactoring touching 30 files. Skill or Subagent?", options: { A: "Skill — proceduralizable", B: "Subagent — requires fresh context, isolated reasoning, multi-step analysis without accumulated noise", C: "Neither — manual only", D: "Both" }, correct: "B", explanation: "Complex refactoring across 30 files is explicitly a Subagent use case. Isolated context prevents accumulated assumptions from poisoning later file analysis. Multi-step complexity requires independent reasoning, not just procedure application." },
        { id: 15, question: "Scenario: Developer wants to 'ensure every PR description follows a template.' Best mechanism?", options: { A: "Subagent — complex analysis", B: "Skill — repeated pattern encodable in SKILL.md, applied automatically when Claude creates PR", C: "Hook — PostToolUse", D: "CLAUDE.md instruction" }, correct: "B", explanation: "PR description template is repeated pattern (same structure), lightweight (apply template, fill sections). Perfect for Skill: encode template/rules in SKILL.md, invoke automatically when Claude creates PR. Subagent overkill; CLAUDE.md less reliable." }
      ]
    },
    {
      id: 5,
      title: "MCP Integration",
      mcqs: [
        { id: 1, question: "What does 'MCP' stand for and what problem does it solve?", options: { A: "Multi-Context Protocol — context window limitation", B: "Model Context Protocol — M×N integration problem (M models × N tools = M×N integrations → one standard)", C: "Machine Communication Protocol — latency", D: "Managed Compute Protocol — scaling" }, correct: "B", explanation: "MCP = Model Context Protocol. Solves M×N integration: without MCP, M models × N tools = M×N custom integrations. With MCP, each implements one standard — M×N → M+N." },
        { id: 2, question: "What are the three Universal Primitives of MCP?", options: { A: "Inputs, Outputs, Processes", B: "Resources (Eyes — read-only), Tools (Hands — actions), Prompts (Playbooks — templates)", C: "Models, Context, Protocol", D: "Request, Response, Error" }, correct: "B", explanation: "Three primitives: Resources = 'Eyes' (read-only data), Tools = 'Hands' (actions changing state), Prompts = 'Playbooks' (reusable templates). Together give agents perception, action, expertise." },
        { id: 3, question: "What was the 2025 'Bidirectional Sampling' breakthrough?", options: { A: "Two simultaneous AI models", B: "MCP servers can ask LLM questions back (e.g., database asking whether to optimize index)", C: "Sample from two MCP servers", D: "Send/receive simultaneously" }, correct: "B", explanation: "2025 breakthrough: Bidirectional Sampling allows MCP servers to ask LLM questions (no longer one-way). Database can query 'optimize this index?' before returning results — tool becomes intelligent collaborator." },
        { id: 4, question: "When was MCP released and adoption timeline?", options: { A: "Jan 2024; adopted in 3 months", B: "Nov 2024: Anthropic releases; Mar 2025: OpenAI adopts; Apr 2025: Google confirms; Nov 2025: spec with OAuth 2.1; Dec 2025: donated to AAIF", C: "Jun 2023 beta; Dec 2024 GA", D: "Mar 2024 with Claude 3; 18 months adoption" }, correct: "B", explanation: "Timeline: Nov 2024 (Anthropic releases), Mar 2025 (OpenAI adopts), Apr 2025 (Google confirms), Nov 2025 (spec 2025-11-25 with OAuth 2.1), Dec 2025 (donated to AAIF under Linux Foundation)." },
        { id: 5, question: "What is the Three-Pillar Architecture for Digital FTE?", options: { A: "Hardware + Software + Network", B: "CLAUDE.md (context) + Skills (procedures) + MCP (access)", C: "Training + Inference + Deployment", D: "Input + Processing + Output" }, correct: "B", explanation: "Three-Pillar Architecture: CLAUDE.md (project context), Skills (domain procedures), MCP (external system access). Formula: Context + Procedures + Access = Digital FTE." },
        { id: 6, question: "How do you add Playwright MCP server?", options: { A: "npm install && claude config add", B: "claude mcp add playwright --transport stdio -- npx -y @playwright/mcp@latest", C: "claude --enable-mcp=playwright", D: "Add to CLAUDE.md [mcp]" }, correct: "B", explanation: "Setup command: claude mcp add playwright --transport stdio -- npx -y @playwright/mcp@latest. --transport stdio specifies communication; -- npx specifies MCP server package." },
        { id: 7, question: "What is 'MCP Tool Search Optimization'?", options: { A: "Searches for best tool — always active", B: "Automatic lazy loading when tool definitions exceed 10% of context, reducing overhead ~85%", C: "Search engine for MCP servers", D: "Caching responses" }, correct: "B", explanation: "MCP Tool Search Optimization: automatic lazy loading when tool definitions exceed 10% of context. Loads on-demand instead of upfront, reducing overhead ~85% for large tool collections." },
        { id: 8, question: "Difference between Skills and MCP?", options: { A: "Skills cloud; MCP local", B: "Skills = 'How-to' expertise; MCP = 'With-what' data pipes", C: "Skills free; MCP paid", D: "Skills offline; MCP online" }, correct: "B", explanation: "Key distinction: Skills = 'How-to' expertise (procedural knowledge — HOW). MCP = 'With-what' data pipes (access to tools/data — WITH WHAT). Together: Skills + MCP = capable Digital FTE." },
        { id: 9, question: "When is it INAPPROPRIATE to use MCP?", options: { A: "Production systems only", B: "Private/sensitive data, high-frequency queries (>10/min), untrusted servers", C: ">10 team members", D: "Databases only" }, correct: "B", explanation: "Inappropriate for: private/sensitive data (security risk), high-frequency >10/min (rate limiting/cost), untrusted servers (security risk). Appropriate: current info, real-time data, web interaction, safe external integrations." },
        { id: 10, question: "Key difference 2024 (pre-MCP) vs. 2026 (Modern AI Stack)?", options: { A: "No tools vs. full tools", B: "2024: Custom API per tool (lock-in, one-way); 2026: Standardized MCP (zero lock-in, bidirectional)", C: "Local vs. cloud", D: "Text vs. multi-modal" }, correct: "B", explanation: "Architectural shift: 2024 = Custom API per tool, proprietary plugins, high lock-in, one-way. 2026 = Standardized MCP, zero lock-in, real-time governed access, bidirectional tool-model communication." },
        { id: 11, question: "Scenario: Team wants to connect Claude Code to internal CRM. Custom API or MCP?", options: { A: "Custom API — cheaper", B: "MCP — standardized protocol works across Claude Code, Gemini CLI, Codex without rewriting", C: "MCP auto-authenticates", D: "MCP faster" }, correct: "B", explanation: "M×N problem: without MCP, 3 models × 5 tools = 15 integrations. With MCP, build one CRM MCP server, works with any MCP-compatible client. Eliminates lock-in, reduces M×N to M+N." },
        { id: 12, question: "Scenario: Set up MCP for database. Developer asks 'Can database ask Claude questions back?'", options: { A: "One-way only", B: "Bidirectional — since 2025 Bidirectional Sampling, MCP servers can ask LLM questions (e.g., optimize index?)", C: "Bidirectional only for cloud", D: "Only with enterprise tier" }, correct: "B", explanation: "2025 Bidirectional Sampling: MCP servers can ask LLM questions back. Transforms MCP from one-way command to intelligent collaboration — database can query 'optimize this index?' before returning results." },
        { id: 13, question: "Scenario: Building AI sales assistant. Connect to Salesforce, Slack, Stripe. Custom or MCP?", options: { A: "Custom — more secure", B: "MCP — check for existing MCP servers; get standardized, bidirectional, zero-lock-in across any MCP-compatible client", C: "Custom for Salesforce/Slack, MCP for Stripe", D: "Wait for unified API" }, correct: "B", explanation: "Guidance: use MCP when available — standardized connectors, zero lock-in, real-time governed access, bidirectional. Check for existing MCP servers first. Custom is fallback when no MCP exists." },
        { id: 14, question: "Scenario: Configured MCP for web search. Claude slow to start loading all tool definitions. What optimization applies?", options: { A: "50% compression", B: "MCP Tool Search Optimization — lazy loading when exceeds 10% context, ~85% reduction", C: "Caching across sessions", D: "Parallel loading" }, correct: "B", explanation: "MCP Tool Search Optimization: automatic lazy loading when tool definitions exceed 10% of context. Loads on-demand when relevant to current task, not at session start — ~85% overhead reduction." },
        { id: 15, question: "Scenario: Security auditor asks 'What are MCP security risks and when NOT to use?'", options: { A: "No risks — completely safe", B: "Avoid: private/sensitive data, >10/min queries, untrusted servers. Only use verified sources", C: "Only safe for read-only", D: "Requires enterprise encryption" }, correct: "B", explanation: "Inappropriate uses: private/sensitive data (credential exposure risk), >10/min (rate limiting/cost), untrusted servers (security risk). Appropriate: current info, real-time data, web interaction, safe verified integrations." }
      ]
    },
    {
      id: 6,
      title: "Hooks — Event-Driven Automation",
      mcqs: [
        { id: 1, question: "What is the core definition of Hooks?", options: { A: "Pre-written templates", B: "Your commands that run automatically when Claude does something — guaranteeing automation", C: "API endpoints", D: "Git hooks" }, correct: "B", explanation: "'Hooks are your commands that run automatically when Claude does something.' Key: hooks guarantee automation — run deterministically regardless of whether Claude remembers. Different from asking Claude to 'always format after editing.'" },
        { id: 2, question: "What are the five primary Hook Events?", options: { A: "OnStart, OnRead, OnWrite, OnDelete, OnEnd", B: "PreToolUse, PostToolUse, UserPromptSubmit, SessionStart, SessionEnd", C: "BeforeRequest, AfterRequest, OnError, OnSuccess, OnTimeout", D: "Initialize, Execute, Verify, Commit, Deploy" }, correct: "B", explanation: "Five events: PreToolUse (before execution — validate, block, modify), PostToolUse (after — format, test, log), UserPromptSubmit (on submit — add context), SessionStart (init — load env), SessionEnd (closure — cleanup, save)." },
        { id: 3, question: "What do exit codes 0 and 2 mean?", options: { A: "0 = needs time; 2 = completed", B: "0 = success (allow); 2 = block action (abort tool call)", C: "0 = info; 2 = critical error", D: "0 = sync; 2 = async" }, correct: "B", explanation: "Exit codes: 0 = success (tool proceeds), 2 = block (tool aborted — prevent dangerous ops). Other non-zero = non-blocking warnings. Exit 2 is safety mechanism to veto Claude's actions before execution." },
        { id: 4, question: "Two methods for configuring hooks?", options: { A: "HOOK.md and API", B: "Interactive /hooks command or direct JSON in .claude/settings.json", C: "Env vars and flags", D: "CLAUDE.md [hooks] and .hookrc" }, correct: "B", explanation: "Two ways: 1) Interactive (/hooks command opens config interface), 2) Direct JSON (edit .claude/settings.json with hooks config: EventName, matcher patterns, command arrays)." },
        { id: 5, question: "Matcher pattern for Write and Edit?", options: { A: "Write+Edit", B: "Write|Edit", C: "[Write, Edit]", D: "Write AND Edit" }, correct: "B", explanation: "Matcher patterns use pipe (|) for OR: 'Write|Edit' matches Write OR Edit. Other: 'Bash' matches only Bash, 'Notebook.*' matches all Notebook (glob), empty matches all." },
        { id: 6, question: "What info does hook receive via stdin?", options: { A: "Full conversation history JSON", B: "JSON with session_id, cwd, hook_event_name, tool_name, tool_input", C: "Only the command", D: "CLAUDE.md + task description" }, correct: "B", explanation: "Hook input: JSON via stdin with session_id (unique identifier), cwd (working directory), hook_event_name (trigger event), tool_name (which tool), tool_input (parameters). Hooks use this for context-aware decisions." },
        { id: 7, question: "Why are Hooks more reliable than CLAUDE.md instructions?", options: { A: "Faster — parallel", B: "CLAUDE.md depends on Claude remembering (probabilistic); hooks execute deterministically as code", C: "Encrypted vs. plaintext", D: "Offline vs. online" }, correct: "B", explanation: "Key difference: CLAUDE.md asks Claude to remember (probabilistic). Hooks are shell scripts executing deterministically when event fires. PostToolUse hook running linting after Edit ALWAYS runs — Claude cannot 'forget'." },
        { id: 8, question: "Four advanced Hook types?", options: { A: "Python, Bash, PowerShell, Node", B: "command (basic), http (team auditing), prompt (AI judgment), agent (spawns subagents)", C: "pre-commit, post-commit, pre-push, post-merge", D: "sync, async, parallel, sequential" }, correct: "B", explanation: "Four types: command (shell script — common), http (HTTP requests for centralized logging/auditing), prompt (AI judgment to evaluate action), agent (spawns subagent for verification like security reviews)." },
        { id: 9, question: "PreToolUse vs. PostToolUse?", options: { A: "Pre for read; Post for write", B: "Pre for validation/blocking before; Post for reactions after (format, test)", C: "Pre expensive; Post cheap", D: "Interchangeable" }, correct: "B", explanation: "PreToolUse fires before execution — validation (safe?), blocking (exit 2), input modification. PostToolUse fires after — reactions: format after edit, test after write, log activity, trigger notifications." },
        { id: 10, question: "Hook for injecting system context at startup?", options: { A: "PostToolUse on all", B: "PreToolUse on Read", C: "SessionStart — fires on initialization before any interaction", D: "UserPromptSubmit — per message" }, correct: "C", explanation: "SessionStart for startup actions — fires on initialization before any interaction. Ideal: load env vars, display project info, inject date/time, check notifications, run health checks. UserPromptSubmit fires per-message." },
        { id: 11, question: "Scenario: Ensure no credentials committed to git. CLAUDE.md instruction vs. PreToolUse hook scanning for credentials?", options: { A: "CLAUDE.md — simpler", B: "PreToolUse hook — executes deterministically before every Write/Edit, can block with exit 2 if detected", C: "Both equal", D: "Neither — git pre-commit" }, correct: "B", explanation: "Hooks guarantee automation; CLAUDE.md probabilistic. PreToolUse hook scanning for credentials (AWS keys, tokens) ALWAYS runs, can block write with exit 2. CLAUDE.md depends on Claude remembering — fails under context pressure." },
        { id: 12, question: "Scenario: Log every AI action for compliance. Compliance asks 'Can we send to centralized SIEM?'", options: { A: "Command hook to local log", B: "http hook type — sends HTTP to centralized logging endpoint for team-wide auditing", C: "Prompt hook to summarize", D: "Hooks can't send externally" }, correct: "B", explanation: "Four hook types: command (shell), http (HTTP for centralized logging/auditing), prompt (AI judgment), agent (subagent). For SIEM: http hook sends structured log data to centralized endpoint — compliance across all team sessions." },
        { id: 13, question: "Scenario: Developer ran destructive command deleting production data. How to prevent recurrence?", options: { A: "CLAUDE.md 'never run destructive'", B: "PreToolUse hook on Bash matching dangerous patterns (rm -rf, DROP DATABASE) requiring explicit user confirmation", C: "Disable Bash entirely", D: "SessionEnd hooks to log" }, correct: "B", explanation: "PreToolUse hooks for validation/blocking. PreToolUse on Bash intercepts dangerous patterns, shows user what will happen, blocks (exit 2) or requires explicit confirmation. 'Permission controls' layer — prevent accidents before occurring." },
        { id: 14, question: "Scenario: Custom code formatting standard. Want Claude to run formatter after every edit. PostToolUse hook vs. CLAUDE.md instruction?", options: { A: "Hooks async; CLAUDE.md sync", B: "PostToolUse executes deterministically after Edit (zero context cost); CLAUDE.md relies on remembering (probabilistic, consumes context)", C: "Hooks only before", D: "CLAUDE.md faster" }, correct: "B", explanation: "PostToolUse hooks execute deterministically after triggering event (Edit), running external scripts with zero context cost. CLAUDE.md probabilistic — Claude may forget under pressure. For 'always format after edit,' hook guarantees; instruction requests." },
        { id: 15, question: "Scenario: Hook configured but not firing. Likely causes?", options: { A: "Hook script syntax error, matcher doesn't match tool, or not registered in .claude/settings.json", B: "Need restart, file too large, or premium subscription", C: "Wrong event type or no permission", D: "Only works in Plan Mode" }, correct: "A", explanation: "Troubleshooting: verify (1) hook script syntax valid/executable, (2) matcher matches intended tool ('Write|Edit' not 'Write,Edit'), (3) registered in .claude/settings.json with correct event name/path. Also check script returns valid JSON." }
      ]
    },
    {
      id: 7,
      title: "Cowork in Action — Practical Workflows",
      mcqs: [
        { id: 1, question: "Downloads Folder workflow results?", options: { A: "50 files in 10s (60x)", B: "186 files in 45s — 24x faster", C: "500 files in 5min (10x)", D: "1,000 files in 2min (30x)" }, correct: "B", explanation: "Workflow 1 (Downloads): 186 files organized in 45s, 23 temp files removed — 24x faster. Prompt: 'Analyze Downloads. Categorize by type. Delete temp files >6 months. Create summary.'" },
        { id: 2, question: "Finance Report Generation time saving?", options: { A: "30min→5min (6x)", B: "2 hours→3 minutes — 24x", C: "8 hours→1 hour (8x)", D: "4 hours→10min (24x)" }, correct: "B", explanation: "Workflow 3 (Finance): Complete report in 3min (previously 2 hours) — 24x. Read CSVs, filtered categories, calculated vendor totals, compared week-over-week, generated Word doc with summary, table, anomalies, charts." },
        { id: 3, question: "Most impressive time saving across four workflows?", options: { A: "Downloads: 24x", B: "Video: 48x", C: "Content/Research Analysis: 144x (days→minutes)", D: "Finance: 24x" }, correct: "C", explanation: "Workflow 4 (Content/Research Analysis) most impressive: synthesizing 65+ docs (transcripts, articles, notes) into structured research in minutes vs. days — 144x. Extracted mentions, organized arguments, identified themes, noted contradictions." },
        { id: 4, question: "Four Universal Workflow Patterns?", options: { A: "Plan, Execute, Review, Deploy", B: "Explore First, Propose then Execute, Handle Variation, Report Results", C: "Read, Transform, Write, Verify", D: "Initialize, Process, Output, Archive" }, correct: "B", explanation: "Four patterns: 1) Explore First (understand materials before executing), 2) Propose, Then Execute (show intended actions, await confirmation), 3) Handle Variation (manage mixed formats), 4) Report Results (transparency on changes/errors)." },
        { id: 5, question: "Three scheduling modes and which doesn't require machine running?", options: { A: "Scheduled, On-Demand, Manual — Scheduled doesn't require", B: "Cloud scheduled (no machine), Desktop scheduled (machine open), /loop session-scoped (session open)", C: "Local, Remote, Hybrid — Remote doesn't require", D: "All require machine" }, correct: "B", explanation: "Three modes: Cloud scheduled (Anthropic cloud — machine NOT required, best for reliable recurring), Desktop scheduled (your machine — machine must be running with app open, best for local file/tool), /loop (active session only)." },
        { id: 6, question: "Batch File Conversion specifications?", options: { A: "50 images to PNG, 4K, max quality", B: "50 videos to MP4 (H.264, 1080p), compress min 50%, generate conversion log", C: "100 audio to MP3 320kbps", D: "25 Word to PDF" }, correct: "B", explanation: "Workflow 2 (Batch Conversion): 50 videos to MP4 H.264 1080p, compress 50% min, detailed conversion log. Result: all 50 converted with quality reports — 48x faster than manual." },
        { id: 7, question: "Why is 'Propose, Then Execute' important for trust?", options: { A: "Reduces API costs", B: "Showing intended actions before execution lets users catch mistakes before irreversible changes", C: "Creates audit log", D: "Enables parallel execution" }, correct: "B", explanation: "'Propose, Then Execute' shows what Cowork intends (list files to delete, categories to create, changes to apply), waits for confirmation. Critical for trust: users catch misunderstandings (wrong files, wrong categories) before irreversible ops." },
        { id: 8, question: "What does 'Handle Variation' address?", options: { A: "A/B testing", B: "Mixed file formats, inconsistent naming, irregular data structures within same batch", C: "User skill level adaptation", D: "Different OS/platforms" }, correct: "B", explanation: "'Handle Variation' means Cowork processes mixed formats (.docx, .pdf), inconsistent naming (file01, File_01, file-01), irregular data structures (some CSVs have headers, some don't) within single workflow — adapts to real-world messiness without preprocessing." },
        { id: 9, question: "Scale of Content/Research Analysis workflow (144x)?", options: { A: "10 docs in 30s", B: "65+ docs (transcripts, articles, notes) synthesized — extracting mentions, organizing arguments, identifying themes, noting contradictions — in minutes vs. days", C: "200 posts in 1 hour", D: "30 contracts in 2 hours" }, correct: "B", explanation: "Workflow 4 processed 65+ docs including transcripts, articles, notes. Cowork extracted mentions, organized arguments, identified themes, noted contradictions across all 65+ simultaneously — minutes vs. days of manual reading/synthesis." },
        { id: 10, question: "Best scheduling mode for nightly workflow accessing local files?", options: { A: "Cloud — most reliable", B: "Desktop scheduled — runs on your machine with app open, providing local file access", C: "/loop — every night automatically", D: "SessionStart hook" }, correct: "B", explanation: "Desktop scheduled best for local file access — runs on your machine using desktop app. Requires app open but accesses local files, databases, tool installations. Cloud scheduled lacks local file access (runs on Anthropic cloud)." },
        { id: 11, question: "Scenario: Executive team wants weekly summary from 50+ docs (transcripts, strategy, research). Expected time savings?", options: { A: "2x (4h→2h)", B: "10x (10h→1h)", C: "144x (days→minutes) — similar to Content/Research Analysis synthesizing 65+ docs", D: "No significant — requires human judgment" }, correct: "C", explanation: "Workflow 4 demonstrated 144x: synthesizing 65+ docs in minutes vs. days. Same pattern applies to weekly executive summaries — Cowork extracts mentions, organizes arguments, identifies themes, notes contradictions across dozens of docs simultaneously." },
        { id: 12, question: "Scenario: Cowork workflow converts client docs to standardized formats nightly at 2 AM. Machine off at night. Which scheduling mode?", options: { A: "Desktop — more reliable", B: "Cloud scheduled — runs on Anthropic cloud without machine, but cannot access local files", C: "/loop — continues when session ends", D: "Hooks — regardless of machine state" }, correct: "B", explanation: "Three modes: Cloud scheduled (Anthropic cloud — machine NOT required) but no local file access. Desktop scheduled (machine running with app open). /loop (active session only). For overnight without local access, Cloud scheduled only option with machine off." },
        { id: 13, question: "Scenario: Team member says 'Cowork deleted wrong files in Downloads cleanup — lost important docs!' Based on 'Propose, Then Execute', what went wrong?", options: { A: "AI categorization error", B: "Workflow skipped 'Propose, Then Execute' — should have shown files to delete and waited for confirmation", C: "Cloud less reliable than Desktop", D: "/loop used instead of scheduled" }, correct: "B", explanation: "'Propose, Then Execute' is core trust pattern: Cowork should show intended actions (list files to delete) and wait for confirmation. If deleted without confirmation, safety pattern bypassed — by config or user not reviewing proposal before approving." },
        { id: 14, question: "Scenario: Finance processes invoices in multiple formats (PDF, Excel, scanned) with inconsistent naming (INV-001, Invoice_001, inv001.pdf). Can Cowork handle?", options: { A: "No — must standardize first", B: "Yes — 'Handle Variation' specifically addresses mixed formats, inconsistent naming, irregular data structures", C: "Only with Cloud scheduled", D: "Only PDF — others need preprocessing" }, correct: "B", explanation: "'Handle Variation' means Cowork adapts to real-world messiness: mixed formats (.docx, .pdf, .xlsx), inconsistent naming (file01, File_01, file-01), irregular structures (some CSVs have headers, some don't). Core capability — no preprocessing." },
        { id: 15, question: "Scenario: Cowork workflow for daily reports. After two weeks, processing wrong folder. Likely cause?", options: { A: "Cloud bug causing drift", B: "Configured without 'Explore First' — didn't verify correct folder before executing", C: "Desktop requires daily manual verification", D: "/loop expired" }, correct: "B", explanation: "'Explore First' means Cowork should understand materials before executing — including verifying folder paths, file types, data structures. If wrong folder processed, workflow likely skipped exploration, went straight to execution. Review Cowork's understanding before approving batch ops." }
      ]
    },
    {
      id: 8,
      title: "Skills vs. Subagents — The Decision Framework",
      mcqs: [
        { id: 1, question: "Key factor: invocation method?", options: { A: "Both explicit", B: "Skills: Automatic (triggered by context) or by-name; Subagents: Explicit only (must specify)", C: "Skills explicit; Subagents automatic", D: "Both explicit only" }, correct: "B", explanation: "Invocation: Skills can be invoked automatically when Claude recognizes context matches skill description, or explicitly by name. Subagents require explicit invocation — Claude must be specifically directed to use particular subagent." },
        { id: 2, question: "When choose Subagent over Skill based on complexity?", options: { A: ">10 files", B: "Multi-step, complex, requiring isolated reasoning chain rather than single repeatable procedure", C: ">5 minutes", D: "External APIs" }, correct: "B", explanation: "Complexity: Skills = 'lightweight, single-focus' — repeatable patterns/formatting captured as procedure. Subagents = 'multi-step, complex' (audits, refactoring, comprehensive analysis) requiring independent reasoning — not just following procedure." },
        { id: 3, question: "Use case explicitly listed as best for Subagents?", options: { A: "Daily code style enforcement", B: "Meeting notes formatting", C: "Audits, refactoring, comprehensive analysis requiring context isolation", D: "Quarterly report from templates" }, correct: "C", explanation: "Course explicitly lists: 'Best For: Audits, refactoring, analysis' for Subagents. Complex, multi-step tasks benefiting from isolated context — security audit explores codebase fresh without accumulated conversation noise from previous debugging." },
        { id: 4, question: "Why 'Repeated patterns' for Skills not Subagents?", options: { A: "Subagents can't handle repeated", B: "Skills encode procedure once, apply consistently every time; subagents would re-derive approach each time wasting computation", C: "Skills faster due to caching", D: "Too simple for subagent overhead" }, correct: "B", explanation: "Skills optimal for repeated patterns: encode procedure once in SKILL.md, apply consistently every invocation. Subagent would re-read codebase, re-reason about approach, re-derive output format each time — wasteful for well-defined procedures executing identically." },
        { id: 5, question: "Context type for each and why it matters?", options: { A: "Both isolated — not relevant", B: "Skills: Shared (within main agent's window); Subagents: Isolated (fresh context). Isolation prevents accumulated noise affecting complex analysis", C: "Skills isolated; Subagents shared", D: "Doesn't matter — cost alone" }, correct: "B", explanation: "Context handling key decision factor: Skills use shared context (access to everything in main agent's window), Subagents use isolated context (completely fresh). For complex analysis, isolation prevents context pollution from prior work. For routine procedures, shared context fine and more efficient." },
        { id: 6, question: "Example using SKILL not subagent?", options: { A: "Security audit across 50 files", B: "Automatically enforcing 'add JSDoc above each function' after every Edit", C: "Refactoring auth module", D: "Analyzing API endpoints" }, correct: "B", explanation: "Enforcing JSDoc after every Edit is perfect Skill: repeated procedure (same action), lightweight (no complex reasoning), benefits from automatic invocation. Subagent overkill for single-step consistent action." },
        { id: 7, question: "What does 'Formatting' under Skills imply?", options: { A: "Requires aesthetic judgment only Skills provide", B: "Consistent, rule-based procedure encodable in SKILL.md, applied automatically — known pattern, not complex analysis", C: "Too simple for subagents but too complex for instructions", D: "Tools integrate with Skills not Subagents" }, correct: "B", explanation: "Formatting tasks (code style, document structure, output format) listed under Skills because rule-based procedures: apply consistent rules every time. Encodable in SKILL.md. Contrast with Subagent audit reasoning about what's wrong — formatting already knows 'correct'." },
        { id: 8, question: "Complex 'Refactoring' touching 30 files — which?", options: { A: "Skill — proceduralizable", B: "Subagent — requires fresh context, isolated reasoning, multi-step analysis without accumulated noise", C: "Neither — manual only", D: "Both simultaneously" }, correct: "B", explanation: "Complex refactoring across 30 files explicitly Subagent use case. Isolated context prevents accumulated assumptions poisoning later file analysis. Multi-step complexity — understanding existing patterns, identifying changes, making consistent modifications — requires independent reasoning, not just procedure." },
        { id: 9, question: "What does 'guaranteed complex work' mean for Subagents?", options: { A: "Always correct, guaranteed by Anthropic", B: "Complex work handled with dedicated resources and isolated reasoning — quality guaranteed by isolation from context pollution", C: "Money-back guarantee", D: "Always assigned to subagents" }, correct: "B", explanation: "'Guaranteed complex work requiring context isolation' means Subagents guarantee complex work gets clean, dedicated context window — not polluted one with unrelated work. Guarantee about execution quality: fresh context + specialist instructions = reliable output." },
        { id: 10, question: "Developer wants to 'ensure every PR follows template.' Best mechanism?", options: { A: "Subagent — complex analysis", B: "Skill — repeated pattern proceduralized in SKILL.md, applied automatically when Claude creates PR", C: "Hook — PostToolUse", D: "CLAUDE.md instruction" }, correct: "B", explanation: "PR template is repeated pattern (same structure), lightweight (apply template, fill sections). Perfect for Skill: encode template/rules in SKILL.md, invoke automatically when Claude creates PR. Subagent overkill; CLAUDE.md less reliable than encoded Skill." },
        { id: 11, question: "Scenario: Security audit across 50 files. Skill or Subagent?", options: { A: "Skill — repeated procedure", B: "Subagent — complex multi-step work requiring isolated reasoning", C: "Neither — manual", D: "Both" }, correct: "B", explanation: "Security audit across 50 files is complex, multi-step work requiring isolated reasoning. Subagent appropriate — fresh context prevents accumulated assumptions poisoning analysis. Skill for repeated procedures, not complex analysis." },
        { id: 12, question: "Scenario: Enforce 'add JSDoc above each function' after every Edit. Skill or Subagent?", options: { A: "Subagent — complex", B: "Skill — repeated procedure (same action), lightweight (no complex reasoning), benefits from automatic invocation", C: "Hook — automatically", D: "CLAUDE.md" }, correct: "B", explanation: "Enforcing JSDoc after every Edit is repeated procedure (same action), lightweight (no complex reasoning), benefits from automatic invocation. Perfect for Skill. Subagent overkill for single-step consistent action." },
        { id: 13, question: "Scenario: Team has 'Code Style Enforcement' procedure. Skill or Subagent?", options: { A: "Subagent — style complex", B: "Skill — consistent, rule-based procedure encodable in SKILL.md, applied automatically", C: "Neither — too simple", D: "Both" }, correct: "B", explanation: "Code style enforcement is rule-based procedure: apply consistent rules every time. Encodable in SKILL.md. Contrast with Subagent audit reasoning about what's wrong — style enforcement already knows 'correct'." },
        { id: 14, question: "Scenario: Complex refactoring touching 30 files. Skill or Subagent?", options: { A: "Skill — proceduralizable", B: "Subagent — requires fresh context, isolated reasoning, multi-step analysis without accumulated noise", C: "Neither — manual", D: "Both" }, correct: "B", explanation: "Complex refactoring across 30 files explicitly Subagent use case. Isolated context prevents accumulated assumptions poisoning later file analysis. Multi-step complexity requires independent reasoning, not just procedure application." },
        { id: 15, question: "Scenario: Developer wants to 'ensure every PR follows template.' Best?", options: { A: "Subagent — complex", B: "Skill — repeated pattern proceduralized in SKILL.md, applied automatically when Claude creates PR", C: "Hook — PostToolUse", D: "CLAUDE.md" }, correct: "B", explanation: "PR template is repeated pattern (same structure), lightweight (apply template, fill sections). Perfect for Skill: encode template/rules in SKILL.md, invoke automatically when Claude creates PR. Subagent overkill; CLAUDE.md less reliable than encoded Skill." }
      ]
    },
    {
      id: 9,
      title: "Cross-Vendor Portability — The agentskills.io Standard",
      mcqs: [
        { id: 1, question: "What does agentskills.io provide?", options: { A: "Marketplace for proprietary agents", B: "Standard specification for Skills making them portable across Claude Code, Gemini CLI, OpenAI Codex CLI, compliant agents", C: "Cloud hosting for custom agents", D: "API testing framework" }, correct: "B", explanation: "agentskills.io provides standard specification for Skills enabling cross-vendor portability. Skill built to agentskills.io standard works across Claude Code (Anthropic), Gemini CLI (Google), OpenAI Codex CLI, any compliant agent runtime — no rewriting." },
        { id: 2, question: "Key shift 2024 (Prompting) to 2026 (Skill Era)?", options: { A: "Cloud to local", B: "Long fragile system prompts → structured SKILL.md with YAML; custom API wrappers → standardized skill discovery", C: "Text to multi-modal", D: "Individual to team-based" }, correct: "B", explanation: "2024→2026: 2024 = Prompt Engineering (long, fragile prompts), Tool Integration (custom API wrappers), Manual Correction (repeatedly telling AI). 2026 = Skill Authoring (structured SKILL.md with YAML), Skill Discovery (agents find skills automatically), Constraint Engineering (rigid workflows)." },
        { id: 3, question: "Practical implication of cross-vendor portability?", options: { A: "Skills obsolete when switching", B: "Skills built to agentskills.io work across Claude Code, Gemini CLI, Codex CLI — protecting investment regardless of which AI vendor market favors", C: "Requires licensing fees", D: "Requires manual translation" }, correct: "B", explanation: "Cross-vendor portability: Skills are durable investment. Build code-review Skill once to agentskills.io standard, works in Claude Code today, Gemini CLI tomorrow, whatever new compliant agent emerges next year. Eliminates vendor lock-in, protects skill development investment." },
        { id: 4, question: "Strategic implication of 'Skills as Strategic IP' in cross-vendor world?", options: { A: "Keep proprietary, never share", B: "Skills encoding organizational expertise can be monetized as vertical solutions, shared across teams, ported across AI tools — portable business assets", C: "Only value within single vendor", D: "Worthless as AI models improve" }, correct: "B", explanation: "In cross-vendor world, Skills as Strategic IP increasingly valuable: encode organizational expertise (not vendor-specific), monetize as vertical solutions (legal contract review Skill as SaaS), share across teams, version in Git, port to any compliant agent runtime — true organizational IP." },
        { id: 5, question: "What MCP complement does agentskills.io provide?", options: { A: "Replaces MCP", B: "MCP standardizes external tool connectivity; agentskills.io standardizes internal expertise packaging — together eliminate both tool lock-in and expertise lock-in", C: "Manages network layer", D: "Same problem differently" }, correct: "B", explanation: "Modern AI Stack: MCP and agentskills.io complementary. MCP = how agents connect to external tools/data ('with-what'). agentskills.io = how expertise packaged/discovered ('how-to'). Together enable fully open, vendor-neutral agent ecosystem." },
        { id: 6, question: "What is 'Skill Discovery' in 2026 Skill Era?", options: { A: "Dashboard showing skill usage", B: "Agents automatically finding/loading appropriate Skills based on task context, not requiring explicit invocation", C: "Search engine for marketplace", D: "Reverse-engineering from behavior" }, correct: "B", explanation: "Skill Discovery is 2026 shift from manual invocation: agents automatically find/load appropriate Skills from .claude/skills/ based on task context. YAML metadata in SKILL.md describes when to use, enabling automatic matching. Contrasts with 2024 manual prompt engineering." },
        { id: 7, question: "How does 'Constraint Engineering' differ from 'Manual Correction'?", options: { A: "More expensive; cheaper", B: "Manual Correction repeatedly tells AI 'do it this way' each session; Constraint Engineering encodes rigid workflows in Skills that agents follow automatically — no repetition", C: "ML vs. rules", D: "Synonyms" }, correct: "B", explanation: "Evolution: 2024 = Manual Correction (repeatedly telling AI 'do it this way' every session — fragile, relies on memory). 2026 = Constraint Engineering (encoding rigid workflows in SKILL.md that agents follow automatically). Constraint built into skill, not remembered from instructions." },
        { id: 8, question: "What analogy from Chapter 12 does cross-vendor lesson build on?", options: { A: "OODA Loop", B: "AIFF Standards (USB lesson) — before USB, proprietary connectors; agentskills.io does for Skills what USB did for device connections", C: "Five Powers", D: "Agent Maturity Model" }, correct: "B", explanation: "Cross-vendor lesson builds on Chapter 12's AIFF Standards 'USB Lesson': before USB, every device had proprietary connector. USB standardized. Similarly, agentskills.io standardizes Skills across agent runtimes — like not needing different USB cable for each device brand." },
        { id: 9, question: "What is YAML metadata in SKILL.md used for?", options: { A: "Specifying programming language", B: "Structured metadata (name, description, triggers) enabling agents to automatically discover/match skills to tasks", C: "Encrypting for protection", D: "Timeout and retry limits" }, correct: "B", explanation: "YAML frontmatter in SKILL.md provides structured metadata enabling automatic Skill Discovery: name identifies skill, description tells agents when to use (triggering automatic invocation), other metadata provides categorization. Replaces 2024 embedding skill behavior in long system prompts." },
        { id: 10, question: "Skills stored as what, enabling Git portability?", options: { A: "Binary compiled in .cache/", B: "SQL database entries", C: "Markdown files in repositories — versionable, diffable, reviewable, portable via standard Git workflows", D: "API endpoints in registry" }, correct: "C", explanation: "Skills stored as Markdown files (SKILL.md) in repositories. Makes them: versionable (git history tracks changes), diffable (git diff shows changes), reviewable (PR reviews evaluate skill changes), portable (clone repo to get skills). 2024 contrast: system prompts in UI config — non-portable, non-versionable." },
        { id: 11, question: "Scenario: Built 10 Skills for Claude Code. Now selling to customers using Gemini CLI and Codex. What advantage does agentskills.io provide?", options: { A: "Must rebuild all 10 for each platform", B: "Skills portable — SKILL.md written for Claude Code works instantly in Gemini CLI and Codex without modification", C: "Requires manual YAML translation", D: "Portable only if same AI model" }, correct: "B", explanation: "Skill Portability core benefit: skill written for Claude Code works instantly in Gemini CLI or Codex. Protects investment regardless of which AI vendor wins market share, enables delivery to customers using any major platform." },
        { id: 12, question: "Scenario: Competitor copies your SKILL.md file and deploys for customers. According to agentskills.io adoption model, what protects your investment?", options: { A: "Patents on format", B: "Nothing — Skills meant to be open", C: "Value in domain expertise and continuous improvement, not file itself. Skills versioned in Git, updated with new insights, integrated into broader solution (MCP configs, support, monitoring)", D: "Exclusive Anthropic licensing" }, correct: "C", explanation: "Skills as Strategic IP: SKILL.md file itself portable by design (that's the point). Your moat: (1) domain expertise encoded in skill (years of knowledge), (2) continuous improvement (Git versioning, updates based on real usage), (3) integration into broader solution (MCP configs, monitoring, support). Competitors copy file but not expertise, iteration velocity, or ecosystem." },
        { id: 13, question: "Scenario: CTO asks 'Why adopt AAIF standards instead of proprietary integrations?' Strategic business response?", options: { A: "AAIF free; proprietary costs money", B: "AAIF future-proofs investment: Skills work across all AI vendors, MCP connectors don't require rebuilding when models change, AGENTS.md ensures onboarding consistency regardless of AI tools. Proprietary creates vendor lock-in and technical debt", C: "Mandated by Linux Foundation", D: "Proprietary better — avoid standards" }, correct: "B", explanation: "Strategic AAIF value: (1) Portability — Skills work across Claude, Gemini, OpenAI; (2) Maintainability — MCP connectors don't break when models update; (3) Consistency — AGENTS.md ensures all developers (human/AI) understand project conventions. Proprietary creates lock-in: if AI vendor changes pricing/terms, trapped. Standards enable switching without rebuilding." },
        { id: 14, question: "Scenario: Built 'Legal Contract Review' Skill. Company switches from Claude Code to Gemini CLI. What happens to Skill investment?", options: { A: "Lost — rewrite from scratch", B: "Works in Gemini CLI without modification if follows agentskills.io standard — SKILL.md format cross-vendor portable", C: "Requires minor YAML tweaks", D: "Skills only work in Claude Code" }, correct: "B", explanation: "Cross-vendor portability via agentskills.io: Skills built to standard (SKILL.md with YAML in .claude/skills/) work across Claude Code, Gemini CLI, OpenAI Codex CLI, any compliant agent. Skill is portable asset — switching vendors doesn't lose expertise investment." },
        { id: 15, question: "Scenario: Team built 20 Skills for internal workflows. Planning to sell as SaaS. How does agentskills.io help?", options: { A: "No help — Skills vendor-specific", B: "Skills work across all compliant agents — can deliver to customers using Claude, Gemini, or OpenAI without rebuilding. Creates platform business where Skills are product, not vendor-specific templates", C: "Gives priority access to new features", D: "Reduces inference cost 50%" }, correct: "B", explanation: "agentskills.io portability strategically important: (1) protects Skill development investment regardless of which AI vendor wins, (2) enables delivery to customers using Claude, Gemini, or OpenAI without rebuilding, (3) creates true platform business where Skills are product, not vendor-specific prompt templates." }
      ]
    },
    {
      id: 10,
      title: "Business Strategy with AI — From Skills to Revenue",
      mcqs: [
        { id: 1, question: "Central business opportunity in Chapter 14 strategy?", options: { A: "Build general-purpose AI models", B: "Monetize domain expertise encoded as Skills — become provider of vertical solutions rather than building AI infrastructure", C: "AI consulting by prompt engineering", D: "Custom agent runtimes" }, correct: "B", explanation: "Business opportunity: monetize domain expertise as Skills. Stack Analogy: few build processors (models) or OS (agent runtimes); millions build applications (Skills). Organizations with deep domain expertise encode as Skills, monetize as vertical solutions without needing AI research capabilities." },
        { id: 2, question: "What is 'Code vs. Cowork Decision Framework'?", options: { A: "Code for engineers; Cowork for managers — job title", B: "Claude Code for software/development tasks; Cowork for knowledge work (documents, data analysis, organization) — determined by task nature", C: "Code paid; Cowork free", D: "Code solo; Cowork teams" }, correct: "B", explanation: "Code vs. Cowork: Claude Code = Terminal/CLI for developers building software (coding, testing, deployment). Cowork = Desktop GUI for knowledge workers handling documents, data analysis, content creation, organization. Both use same Claude Agent SDK — choice by task type, not user type." },
        { id: 3, question: "What does 'From Skills to Business' mean?", options: { A: "Selling Claude Code subscriptions", B: "Encoding deep domain expertise (legal, finance, healthcare) as Skills packaged as vertical SaaS solutions with recurring revenue", C: "Teaching prompt engineering", D: "Building chat interfaces on Claude API" }, correct: "B", explanation: "'From Skills to Business': encode deep domain expertise as Skills → package into vertical solutions (legal contract review suite, financial reporting automation) → deliver as SaaS with recurring revenue. Competitive moat is domain expertise encoded in Skills, not AI technology itself." },
        { id: 4, question: "What are 'Ten MBA Frameworks in Your Terminal'?", options: { A: "Ten database query patterns", B: "Business strategy frameworks (competitive analysis, market sizing, SWOT, Porter's Five Forces, etc.) that AI applies to business problems when directed via Claude Code", C: "Ten accounting formulas", D: "Ten management styles" }, correct: "B", explanation: "Lesson 'Business Strategy with AI: 10 MBA Frameworks in Your Terminal' covers applying classic business strategy frameworks (Porter's Five Forces, SWOT, Jobs-to-be-Done, etc.) through Claude Code. AI performs sophisticated business analysis with right framework and data — extends analytical capability beyond technical work." },
        { id: 5, question: "Why is agentskills.io portability strategically important for business?", options: { A: "Avoids AI model subscriptions", B: "Skills built to standard work across all compliant agents — protecting investment, enabling delivery to customers using any AI vendor", C: "Priority access to new features", D: "Reduces inference cost 50%" }, correct: "B", explanation: "agentskills.io portability strategically important: (1) protects Skill development investment regardless of which AI vendor wins, (2) enables delivery to customers using Claude, Gemini, or OpenAI without rebuilding, (3) creates true platform business where Skills are product, not vendor-specific prompt templates." },
        { id: 6, question: "What distinguishes 'Digital FTE' from traditional automation?", options: { A: "Costs more to deploy", B: "Combines Context (CLAUDE.md) + Procedures (Skills) + Access (MCP) into agent capable of performing full knowledge worker work, not just executing pre-defined scripts", C: "Requires human supervision", D: "Only for technical roles" }, correct: "B", explanation: "Digital FTE = Context (CLAUDE.md: project/domain knowledge) + Procedures (Skills: domain expertise) + Access (MCP: external connectivity). Unlike automation scripts executing fixed workflows, Digital FTE reasons, adapts, handles variation, performs full knowledge worker work within defined guardrails." },
        { id: 7, question: "What does the comprehensive Business Strategy quiz cover?", options: { A: "Only terminal commands", B: "Comprehensive understanding of all topics: Claude Code, Skills, Subagents, MCP, Hooks, Cowork, business strategy", C: "Only business strategy", D: "Python/TypeScript coding" }, correct: "B", explanation: "The comprehensive quiz covers the full breadth of topics across all five sections: Claude Code Essentials, Skills/Subagents/MCP, Extensibility/Teams, Cowork, and Strategy. It validates comprehensive practical understanding across all areas." },
        { id: 8, question: "What % of Block (Square) engineers save 8-10+ hours weekly using goose?", options: { A: "25%", B: "50%", C: "75%", D: "90%" }, correct: "C", explanation: "Course notes 75% of Block (formerly Square) engineers save 8-10+ hours weekly using goose, Block's open-source reference General Agent implementation donated to AAIF. Cited as evidence of real-world productivity impact from General Agent adoption at scale." },
        { id: 9, question: "Core competitive moat for business built on AI Skills?", options: { A: "Better AI models", B: "Faster infrastructure", C: "Deep domain expertise encoded in Skills difficult for competitors to replicate quickly", D: "Lower pricing" }, correct: "C", explanation: "Competitive moat for Skills-based business is deep domain expertise — years of accumulated knowledge encoded in Skills. Everyone accesses same AI models/runtimes, so competitive advantage comes from quality/depth of domain-specific expertise encoded in Skills: unique procedures, constraints, knowledge making AI genuinely expert in vertical." },
        { id: 10, question: "How does 'Full-Stack Builder' from Chapter 12 connect to Chapter 14 business strategy?", options: { A: "Required to sell Skills", B: "Full-Stack Builder role (orchestrating AI across all technical layers) enables building complete vertical solutions — from Skills/MCP to product UI — without needing specialists for each layer", C: "Only works with Cowork", D: "Only historical — Chapter 14 supersedes" }, correct: "B", explanation: "Chapter 12's Full-Stack Builder (orchestrator no longer confined to one technical layer because AI handles implementation across all layers) directly enables Chapter 14 business strategy: Full-Stack Builder creates complete vertical solution — design Skills, configure MCP integrations, build product UI, deploy — without needing separate specialists for each layer." },
        { id: 11, question: "Scenario: Solo developer building customer support chatbot for e-commerce. According to Agent Maturity Model, correct progression?", options: { A: "Start Custom, then General", B: "Stage 1 (General for prototyping) → Stage 2 (Custom with guardrails) → Stage 3 (Specialized production) → Stage 4 (Multi-agent)", C: "Skip General entirely", D: "Only General throughout" }, correct: "B", explanation: "Agent Maturity Model progression: Stage 1 (General Agent/Incubator for prototyping), Stage 2 (Custom Agent/Specialist with guardrails), Stage 3 (Specialized production agent), Stage 4 (Multi-agent orchestration). Mirrors how humans learn — general skills first, then specialization." },
        { id: 12, question: "Scenario: Startup with 3 developers debates Custom Agents vs. only General Agents like Claude Code. Strategic advantage of Custom Agents per Agent Factory paradigm?", options: { A: "Cheaper to build/maintain", B: "Encode domain-specific expertise and workflows, creating defensible IP General Agents cannot replicate", C: "Work offline", D: "Replace human developers" }, correct: "B", explanation: "Custom Agents encode domain-specific expertise, workflows, guardrails unique to organization. Creates defensible IP — competitors using only General Agents cannot replicate specialized capabilities. General Agents commodities; Custom Agents competitive moat." },
        { id: 13, question: "Scenario: Fintech wants to automate loan approval. Strict compliance, need 99% accuracy. Which Agent Maturity Model stage for production?", options: { A: "Stage 1 (General) — most flexible", B: "Stage 2 (Custom) — domain-specific guardrails", C: "Stage 3 (Specialized) — optimized for loan approval with compliance checks and human escalation", D: "Stage 4 (Multi-agent)" }, correct: "C", explanation: "For compliance-critical, high-accuracy like loan approvals, Stage 3 (Specialized Agent) appropriate. Combines domain expertise, compliance guardrails, automated validation, human escalation paths. Stage 1/2 lack rigor; Stage 4 adds unnecessary complexity for single workflow." },
        { id: 14, question: "Scenario: Developer used Claude Code 3 months. Manager asks 'Why invest in Custom Agents when General Agents keep improving?' Correct response per Agent Factory insight?", options: { A: "'General will replace Custom — wait'", B: "'General Agents BUILD Custom Agents — complementary, not competitive. Use General to rapidly prototype, build Custom encoding unique workflows.'", C: "'Custom cheaper — build many'", D: "'General only for coding; Custom for business'" }, correct: "B", explanation: "Central insight: 'General Agents don't compete with Custom Agents. General Agents BUILD Custom Agents.' Factory paradigm — use General Agents (Claude Code) as incubator to rapidly prototype, then crystallize successful prototypes into Custom Agents encoding organization's unique workflows/expertise." },
        { id: 15, question: "Scenario: Team achieved 51% daily AI adoption in 3 months. Per Stack Overflow 2025 and DORA 2025, expected productivity improvement vs. <15% adoption?", options: { A: "No measurable difference", B: "Teams ship 2-3x faster, higher developer satisfaction", C: "Slower due to AI bugs", D: "Only juniors benefit" }, correct: "B", explanation: "Stack Overflow 2025 Survey and DORA 2025 Report: high AI adoption (51%+ daily) correlates with 2-3x faster shipping, higher developer satisfaction (less boilerplate time), lower change failure rates. 90% adoption in elite performers correlates with significantly higher deployment frequency." }
      ]
    }
  ]
};
