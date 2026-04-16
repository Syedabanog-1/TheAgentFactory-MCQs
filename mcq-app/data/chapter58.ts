import type { Chapter } from "@/types";

export const chapter58: Chapter = {
  id: 58,
  title: "Building TutorClaw",
  description: "Build a complete AI tutoring application with 9 MCP tools, PRIMM-Lite pedagogy, JSON state management, Stripe monetization, agent identity via SOUL.md and IDENTITY.md, and publishing to ClawHub.",
  color: "green",
  lessons: [
    {
      id: 1,
      title: "Blueprint — Nine Tools on Paper",
      mcqs: [
        {
          id: 1,
          question: "What is the primary technical justification for blueprinting all nine TutorClaw tool contracts before writing any implementation code?",
          options: {
            A: "The Claude API requires all MCP tools to be pre-registered before processing any requests",
            B: "Pre-specifying input/output contracts and tier access rules prevents architectural mismatches that are expensive to fix mid-implementation — the blueprint ensures all nine tools form a coherent system rather than nine independently-built components with incompatible interfaces",
            C: "ClawHub marketplace requires a complete tool manifest to be submitted before development starts",
            D: "Pre-designing tools allows accurate AWS infrastructure cost calculation before committing to development"
          },
          correct: "B",
          explanation: "Blueprinting prevents late-stage integration failures. When nine tools are designed independently without a shared contract, tool A's output may not match what tool B expects as input, tier logic may be inconsistent, and the system may fail to cohere. Designing on paper forces these conflicts to surface at zero cost, before they become code that must be rewritten."
        },
        {
          id: 2,
          question: "Which grouping correctly maps TutorClaw's nine tools to their three functional categories?",
          options: {
            A: "Frontend tools (display and UI), backend tools (logic), and database tools (persistence)",
            B: "State tools (register_learner, track_progress, get_learner_profile, upgrade_tier) → Content tools (get_chapter_content, list_chapters) → Pedagogy and Monetization tools (generate_guidance, submit_code, generate_stripe_checkout_url)",
            C: "Free tier tools, paid tier tools, and admin-only tools — organized by subscription access level",
            D: "Input tools (receive data), processing tools (transform data), and output tools (deliver results)"
          },
          correct: "B",
          explanation: "TutorClaw's tools organize into: State tools that manage learner data and access tiers; Content tools that retrieve curriculum; and Pedagogy/Monetization tools that deliver teaching interactions and handle Stripe payment flows. This three-category architecture separates concerns clearly, making each group independently testable."
        },
        {
          id: 3,
          question: "What happens in TutorClaw's design when a free-tier learner requests a chapter that requires a paid tier?",
          options: {
            A: "The tool returns the first 500 words of the chapter as a free preview",
            B: "The tool returns an access-denied response, and the agent uses this to trigger the upgrade flow — calling generate_stripe_checkout_url and sending the learner a payment link",
            C: "The tool silently skips to the next accessible chapter without notifying the learner",
            D: "The MCP server throws an unhandled exception because tier checking was not implemented"
          },
          correct: "B",
          explanation: "Tier access rules are enforced at the tool level — the MCP tool checks the learner's tier before fetching content. An access failure triggers the monetization flow: the agent calls generate_stripe_checkout_url and sends the checkout link — a seamless conversion funnel embedded in the learning experience."
        },
        {
          id: 4,
          question: "What is the purpose of defining tool access tiers during TutorClaw's blueprint phase rather than during implementation?",
          options: {
            A: "Stripe's API requires tier definitions to be registered before any checkout sessions can be created",
            B: "Tier logic must be consistent across all nine tools — blueprinting ensures all tools apply the same tier rules from the start, preventing inconsistencies where some tools enforce gating and others do not",
            C: "ClawHub requires tier definitions in the marketplace listing before approving publications",
            D: "Tier access tiers are set by the Node.js runtime at server startup and cannot be changed after initialization"
          },
          correct: "B",
          explanation: "Defining tier access rules during blueprinting ensures all nine tools enforce a consistent access model. If tier logic is added incrementally during implementation, some tools may gate access differently than others, creating an inconsistent and exploitable experience for learners."
        },
        {
          id: 5,
          question: "What does the register_learner tool do in TutorClaw's nine-tool architecture?",
          options: {
            A: "It registers the learner's device for WhatsApp push notifications",
            B: "It creates a new learner record in the JSON state file — storing the learner's identifier, initial tier (free), and default preferences — enabling all other state tools to reference this learner",
            C: "It sends the learner a welcome message through the OpenClaw WhatsApp channel",
            D: "It validates the learner's email address against Stripe's customer database"
          },
          correct: "B",
          explanation: "register_learner is the entry point for new users — it creates the learner's record in TutorClaw's JSON state file with their identifier and initial free tier status. Without this record, no other state tool (track_progress, get_learner_profile, upgrade_tier) can function for that learner."
        }
      ]
    },
    {
      id: 2,
      title: "PRIMM-Lite Pedagogy and JSON Persistence",
      mcqs: [
        {
          id: 1,
          question: "What does PRIMM-Lite stand for and why is this sequence pedagogically superior to immediate grading?",
          options: {
            A: "Practice, Repeat, Iterate, Master, Move-on — effective because repetition builds muscle memory in programming",
            B: "Predict, Run, Investigate, Modify, Make — superior to grading because it activates metacognitive reflection at each step, forcing learners to confront the gap between their expectations and the code's actual behavior",
            C: "Parse, Resolve, Integrate, Map, Merge — effective because it mirrors how compilers process code",
            D: "Plan, Review, Implement, Measure, Mentor — effective because it mirrors the software development lifecycle"
          },
          correct: "B",
          explanation: "PRIMM-Lite transforms passive code consumption into active cognitive engagement. Predict forces learners to commit to a hypothesis before seeing results — creating a testable mental model. Run provides real feedback. Investigate forces analysis of mismatches. Modify and Make build creative competence. Simply marking 'wrong' doesn't build understanding."
        },
        {
          id: 2,
          question: "What is the architectural justification for using local JSON files for state persistence in TutorClaw rather than a managed database?",
          options: {
            A: "JSON files are universally faster than relational databases for all read and write operations",
            B: "TutorClaw's inverted architecture means the server only hosts intelligence — adding a managed database introduces a $50-200/month dependency that contradicts the near-zero infrastructure cost model, breaking the flat-rate budget",
            C: "PostgreSQL and MongoDB are incompatible with MCP server protocols and cannot be called as tools",
            D: "Financial regulations require payment-related data to be stored in unencrypted flat files for auditability"
          },
          correct: "B",
          explanation: "This is a deliberate architectural decision aligned with TutorClaw's economic model. Introducing a managed database breaks the near-zero infrastructure cost thesis. JSON files are appropriate for the early-stage scale, keeping the system teachable, deployable on minimal infrastructure, and free from database management overhead."
        },
        {
          id: 3,
          question: "What phase of PRIMM-Lite does the generate_guidance tool initiate first when a learner submits new code?",
          options: {
            A: "Run — it immediately executes the code and returns the output",
            B: "Predict — it asks the learner to predict what the code will output before executing it",
            C: "Investigate — it analyzes the code for errors before asking the learner to engage",
            D: "Make — it immediately asks the learner to create their own version of the pattern"
          },
          correct: "B",
          explanation: "PRIMM-Lite starts with Predict — the learner must commit to a hypothesis about what the code does before seeing it run. This is the critical metacognitive step that separates PRIMM-Lite from passive grading: predicting first forces the learner to engage their mental model before receiving feedback."
        },
        {
          id: 4,
          question: "What JSON state fields does TutorClaw's track_progress tool store for each learning interaction?",
          options: {
            A: "Only the learner's email address and subscription plan",
            B: "The chapter_id and completion_status for each chapter attempted by the learner",
            C: "The full text of every message exchanged between the learner and TutorClaw",
            D: "The learner's billing history and payment method details"
          },
          correct: "B",
          explanation: "track_progress stores the minimal state needed to track learning progress: chapter_id (which chapter was worked on) and completion_status (whether it was completed). This lightweight approach keeps the JSON state file small and the tool fast to query, consistent with TutorClaw's minimal-infrastructure philosophy."
        },
        {
          id: 5,
          question: "How does TutorClaw's use of JSON file persistence affect its ability to add a managed database later?",
          options: {
            A: "JSON files are incompatible with database migration tools, making future migration impossible",
            B: "Since state is centralized in one file with a clear schema, migrating to a database requires writing a migration script that reads JSON and writes to the database — a straightforward one-time operation",
            C: "All nine MCP tools would need to be completely rewritten to support database queries",
            D: "Stripe webhooks cannot write to databases, so payment state would always remain in JSON files"
          },
          correct: "B",
          explanation: "JSON persistence is a deliberate starting point, not a permanent constraint. Because all state is centralized in a file with a defined schema, migrating to a database when scale requires it involves a migration script and updating the MCP tools' persistence layer — not architectural redesign."
        }
      ]
    },
    {
      id: 3,
      title: "Agent Identity — SOUL.md and IDENTITY.md",
      mcqs: [
        {
          id: 1,
          question: "What is the architectural advantage of centralizing TutorClaw's agent personality in SOUL.md and IDENTITY.md files?",
          options: {
            A: "Markdown files are required by the MCP protocol to define agent behavioral parameters",
            B: "Centralizing identity in dedicated files ensures the persona is loaded consistently into every interaction's system prompt — achieving behavioral coherence across all 9 tools and all sessions, rather than requiring each tool's prompt to re-define personality independently",
            C: "SOUL.md and IDENTITY.md are automatically indexed by ClawHub for marketplace discoverability",
            D: "Markdown files can be legally copyrighted, protecting the agent's personality as intellectual property"
          },
          correct: "B",
          explanation: "Consistency is the architectural value of SOUL.md and IDENTITY.md. Without centralized identity files, each tool prompt might express a slightly different tone. By loading these files into the system prompt, all 9 tools and all WhatsApp interactions share the same behavioral baseline. The files also make the personality auditable and editable without touching tool code."
        },
        {
          id: 2,
          question: "What problem does TutorClaw's offline fallback skill solve in the context of AI Employee reliability?",
          options: {
            A: "It reduces API costs by substituting static content for AI-generated responses wherever possible",
            B: "It maintains the learner's experience continuity during API outages — the agent remains present and useful even when the underlying LLM is unavailable, which is critical for a 24/7 AI Employee",
            C: "It bypasses WhatsApp's message delivery limits during high-traffic periods",
            D: "It stores API responses locally so the same question never hits the Claude API twice"
          },
          correct: "B",
          explanation: "An AI Employee that goes silent during API outages is not a reliable employee. Offline fallback skills ensure graceful degradation — the agent acknowledges the situation and provides curated static help rather than failing silently. For a tutoring application where learners often need help near deadlines, this reliability is a meaningful quality differentiator."
        },
        {
          id: 3,
          question: "What does SOUL.md define in TutorClaw's identity system?",
          options: {
            A: "The technical architecture of TutorClaw's nine MCP tools and their interaction patterns",
            B: "The agent's values, communication style, and teaching philosophy — defining how TutorClaw behaves and speaks across all interactions",
            C: "The Stripe payment configuration and subscription tier pricing",
            D: "The PRIMM-Lite pedagogical sequence steps and their implementation in code"
          },
          correct: "B",
          explanation: "SOUL.md captures the behavioral and philosophical core: the agent's values (patient, Socratic, celebrates mistakes), communication style (warm, never condescending), and teaching philosophy. It answers 'how does TutorClaw behave?' rather than 'what is TutorClaw called?'"
        },
        {
          id: 4,
          question: "How does IDENTITY.md differ from SOUL.md in TutorClaw's agent identity system?",
          options: {
            A: "IDENTITY.md contains the tool schemas; SOUL.md contains the system prompt",
            B: "IDENTITY.md defines the agent's name, persona, and backstory — the surface identity; SOUL.md defines the agent's values and behavioral principles — the deeper character",
            C: "IDENTITY.md is loaded at startup; SOUL.md is loaded only when users ask about the agent's personality",
            D: "IDENTITY.md is required by ClawHub for marketplace listing; SOUL.md is optional"
          },
          correct: "B",
          explanation: "IDENTITY.md answers 'who is this agent?' — name (TutorClaw), backstory, and persona. SOUL.md answers 'how does this agent behave?' — values, communication style, teaching philosophy. Together they create a coherent agent identity with both a recognizable surface and a consistent behavioral core."
        },
        {
          id: 5,
          question: "How are SOUL.md and IDENTITY.md loaded into TutorClaw's agent interactions?",
          options: {
            A: "They are embedded as comments in each MCP tool's Python source code",
            B: "They are injected into the system prompt that is sent to Claude with every conversation turn, making the identity active across all tool calls and responses",
            C: "They are stored in a vector database and retrieved only when the learner asks TutorClaw about itself",
            D: "They are read once at server startup and cached in memory, separate from individual conversation prompts"
          },
          correct: "B",
          explanation: "SOUL.md and IDENTITY.md are loaded into the system prompt for every conversation — making TutorClaw's persona active in every single interaction. This is why centralization matters: the files are the single source of truth that shapes every response, not ad-hoc per-tool persona declarations."
        }
      ]
    },
    {
      id: 4,
      title: "Monetization, Testing, and Publishing",
      mcqs: [
        {
          id: 1,
          question: "Which component of TutorClaw's architecture handles a Stripe payment webhook and updates the learner's tier in state?",
          options: {
            A: "The WhatsApp channel connector, which monitors all incoming events including payment webhooks",
            B: "A webhook endpoint in the MCP server that receives Stripe events and updates the learner's tier in the JSON state file",
            C: "The Claude AI layer, which automatically detects payment events through Stripe's conversational API",
            D: "A separate billing microservice that runs independently and syncs with the MCP server via REST calls"
          },
          correct: "B",
          explanation: "In TutorClaw's architecture, the MCP server hosts both tools and the webhook endpoint. When Stripe fires a payment event, the webhook handler processes it and updates the JSON state file directly. The agent doesn't need to know about payments — it just calls get_learner_profile and sees the current tier."
        },
        {
          id: 2,
          question: "What is the primary purpose of TutorClaw's spec-versus-implementation audit before publishing to ClawHub?",
          options: {
            A: "To calculate total lines of code written and compare against industry productivity benchmarks",
            B: "To systematically compare what was designed against what was built — identifying intentional enhancements, unintentional deviations, and undocumented behavior that downstream integrators depend on",
            C: "To generate automated security reports required before ClawHub can approve a marketplace submission",
            D: "To determine which team members are responsible for each code section for performance reviews"
          },
          correct: "B",
          explanation: "A spec-versus-implementation audit is quality assurance for the contract. ClawHub users who integrate TutorClaw depend on the published spec to understand what each tool does. Undocumented behavior needs to be explicitly decided upon and the spec updated to reflect reality, preventing surprise-breaking changes for downstream integrators."
        },
        {
          id: 3,
          question: "What is the purpose of TutorClaw's pytest suite in the development workflow?",
          options: {
            A: "pytest generates the MCP server boilerplate code from test descriptions",
            B: "pytest verifies that each of the nine MCP tools behaves correctly in isolation and as a system — that inputs produce expected outputs, tier gating works, and Stripe flows execute correctly",
            C: "pytest is required by ClawHub's submission process to validate marketplace listings",
            D: "pytest profiles the MCP server's performance to ensure it meets WhatsApp's response time requirements"
          },
          correct: "B",
          explanation: "TutorClaw's pytest suite validates functional correctness: each tool receives expected inputs and produces correct outputs, tier access rules are enforced properly, state transitions work, and Stripe payment flows execute as designed. Tests catch regressions when the implementation changes."
        },
        {
          id: 4,
          question: "What does TutorClaw's generate_stripe_checkout_url tool do when invoked by the agent?",
          options: {
            A: "It processes a payment directly using a stored payment method on file",
            B: "It creates a Stripe Checkout session for the appropriate tier upgrade and returns the hosted payment URL for the agent to send to the learner",
            C: "It sends a Stripe payment reminder email to the learner's registered email address",
            D: "It generates a discount coupon code and applies it to the learner's next payment"
          },
          correct: "B",
          explanation: "generate_stripe_checkout_url creates a Stripe Checkout session for the learner's target tier upgrade and returns the hosted payment URL. The agent then sends this URL to the learner via WhatsApp — the learner clicks it, completes payment on Stripe's hosted page, and the webhook fires to upgrade their tier."
        },
        {
          id: 5,
          question: "What is the correct sequence of events in TutorClaw's complete Stripe payment flow when a learner upgrades to the paid tier?",
          options: {
            A: "Learner pays → Agent detects payment → Agent calls upgrade_tier → JSON state is updated",
            B: "Agent calls generate_stripe_checkout_url → Learner pays on Stripe → Stripe webhook fires → Webhook handler calls upgrade_tier → JSON state updates → Future tool calls see new tier",
            C: "Learner requests upgrade → Admin manually approves → Stripe sends invoice → Learner pays → Tier activates",
            D: "Stripe subscription is created first → Tier is pre-activated → First payment confirms access"
          },
          correct: "B",
          explanation: "The Stripe flow: (1) agent generates checkout URL, (2) learner completes payment on Stripe's hosted page, (3) Stripe fires a webhook to TutorClaw's endpoint, (4) the webhook handler updates the learner's tier in JSON state, (5) all subsequent tool calls read the updated tier and grant access accordingly."
        }
      ]
    },
    {
      id: 5,
      title: "The Six Build Phases",
      mcqs: [
        {
          id: 1,
          question: "What are the six development phases that structure TutorClaw's 21-lesson build sequence?",
          options: {
            A: "Planning, Coding, Testing, Staging, Production, and Monitoring",
            B: "Blueprint, Local Build, Harness, Monetization, Identity, and Reflection",
            C: "Design, Architecture, Implementation, Integration, Deployment, and Optimization",
            D: "Requirements, Specification, Development, QA, Release, and Maintenance"
          },
          correct: "B",
          explanation: "TutorClaw's development is organized into six progressive phases: Blueprint (design all 9 tools on paper), Local Build (implement all tools with Claude Code), Harness (orchestrate and test tools together), Monetization (add Stripe integration and tier gating), Identity (add SOUL.md, IDENTITY.md, offline fallback), and Reflection (spec audit and ClawHub publishing)."
        },
        {
          id: 2,
          question: "What does the 'Harness Phase' accomplish in TutorClaw's build sequence?",
          options: {
            A: "It configures the WhatsApp Business API credentials and phone number verification",
            B: "It tests all nine tools as an integrated system — verifying that tools work together, state flows correctly between them, and the agent can orchestrate multi-tool sequences",
            C: "It sets up the continuous integration and deployment pipeline for automatic releases",
            D: "It installs the mcp-builder skill into Claude Code for subsequent tool development"
          },
          correct: "B",
          explanation: "The Harness Phase is integration testing — tools were built and tested individually in the Local Build Phase, but the Harness Phase verifies they work as a system: learner registration flows into progress tracking, tier checks work correctly across content tools, and the agent can chain multiple tools to complete learning sequences."
        },
        {
          id: 3,
          question: "What does 'context engineering' mean in the context of TutorClaw's development?",
          options: {
            A: "Optimizing the Node.js server's execution context for better memory performance",
            B: "Deliberately designing what information is available to the AI model at each decision point — crafting system prompts, tool descriptions, and state structures so the agent makes correct pedagogical decisions",
            C: "Managing the learner's conversational context across multiple WhatsApp sessions",
            D: "Engineering the Claude API context window to fit more content per API call"
          },
          correct: "B",
          explanation: "Context engineering is the deliberate design of what the AI sees when making decisions. For TutorClaw, this means: tool descriptions that clearly explain when each tool should be called, system prompts that embed PRIMM-Lite methodology, and state structures that give the agent the right information about the learner at each interaction."
        },
        {
          id: 4,
          question: "What is the purpose of the 'Reflection Phase' in TutorClaw's development sequence?",
          options: {
            A: "To gather learner feedback on TutorClaw's teaching effectiveness before publication",
            B: "To audit the final implementation against the original blueprint, document what changed and why, and prepare the spec for ClawHub publication so integrators have accurate documentation",
            C: "To profile TutorClaw's performance and optimize slow tool calls before going live",
            D: "To run penetration testing against TutorClaw's Stripe integration before accepting payments"
          },
          correct: "B",
          explanation: "The Reflection Phase closes the loop between design and implementation: comparing the final system to the original blueprint, documenting intentional changes (enhancements) vs. unintentional deviations (decisions to make), and producing accurate published documentation for ClawHub integrators."
        },
        {
          id: 5,
          question: "Why does TutorClaw's Local Build Phase use Claude Code rather than manual coding for all nine tools?",
          options: {
            A: "Claude Code is the only development environment compatible with MCP server protocols",
            B: "Claude Code applies the describe-steer-verify workflow at scale — the developer describes each tool's behavior, steers Claude Code's interpretation, and verifies the output, without writing MCP boilerplate for nine separate tools manually",
            C: "Manual coding is prohibited by OpenClaw's license for commercial MCP server development",
            D: "Claude Code automatically deploys each tool to ClawHub as it is built"
          },
          correct: "B",
          explanation: "Building nine tools manually would require writing the same MCP server scaffolding, schema definitions, and error handling nine times. Claude Code's describe-steer-verify workflow generates this scaffolding from natural language descriptions — developers focus on what each tool should do (domain logic), not the repetitive infrastructure of how MCP servers are structured."
        }
      ]
    },
    {
      id: 6,
      title: "Testing, Webhooks, and ClawHub Publishing",
      mcqs: [
        {
          id: 1,
          question: "What does TutorClaw's pytest suite test that unit tests of individual tools cannot cover?",
          options: {
            A: "Whether the Claude API billing is correctly configured for TutorClaw's token usage",
            B: "Integration behavior — that tools work together correctly, that state changes made by one tool are correctly read by subsequent tools, and that multi-step learning flows complete end-to-end",
            C: "Whether TutorClaw's SOUL.md produces the intended personality in Claude's responses",
            D: "Whether ClawHub's marketplace API accepts the TutorClaw schema without errors"
          },
          correct: "B",
          explanation: "Integration tests cover what unit tests cannot: that state written by register_learner is correctly read by get_learner_profile, that tier upgrades triggered by webhook handling are enforced by get_chapter_content, and that the full PRIMM-Lite sequence works as an orchestrated multi-tool flow."
        },
        {
          id: 2,
          question: "What triggers TutorClaw's tier downgrade process for a learner with an expired payment?",
          options: {
            A: "The agent checks payment status before every tool call and downgrades if payment is overdue",
            B: "A Stripe webhook firing a payment_failed event triggers the webhook handler, which downgrades the learner's tier in the JSON state file",
            C: "A daily cron job queries Stripe's API for all failed payments and batch-processes downgrades",
            D: "The learner is downgraded only when they next attempt to access premium content"
          },
          correct: "B",
          explanation: "Stripe fires a payment_failed webhook when a renewal fails. TutorClaw's webhook handler receives this event, identifies the learner from the Stripe customer data, and updates their tier in the JSON state file from premium to free. The agent is not involved — tier accuracy is maintained by the webhook/state system independently."
        },
        {
          id: 3,
          question: "What is checked during TutorClaw's spec-versus-implementation audit before ClawHub publication?",
          options: {
            A: "Whether TutorClaw's code passes all of ClawHub's automated security scans",
            B: "Whether each tool's actual behavior, input/output format, and state side-effects match what the original blueprint specified — and explicitly deciding on any deviations",
            C: "Whether TutorClaw's pricing is competitive with other ClawHub marketplace listings",
            D: "Whether the SOUL.md and IDENTITY.md files meet ClawHub's minimum persona documentation requirements"
          },
          correct: "B",
          explanation: "The audit compares reality to specification: does register_learner actually store the fields the spec defined? Does get_chapter_content enforce tier access exactly as blueprinted? Any deviation — whether an improvement or a mistake — must be explicitly decided: update the spec to match reality, or update the code to match the spec."
        },
        {
          id: 4,
          question: "What does publishing TutorClaw to ClawHub accomplish beyond making it publicly available?",
          options: {
            A: "It legally transfers ownership of TutorClaw to the ClawHub foundation",
            B: "It connects TutorClaw to ClawHub's network effects — more users discover it through marketplace search, which increases adoption, which increases reviews and visibility, compounding distribution organically",
            C: "It automatically generates a hosted website for TutorClaw at a ClawHub subdomain",
            D: "It enables ClawHub to host TutorClaw's MCP server infrastructure at no cost to the developer"
          },
          correct: "B",
          explanation: "ClawHub publication is not just hosting — it is ecosystem participation. The marketplace creates discovery (users searching for tutoring agents find TutorClaw), which drives adoption, which generates reviews and usage signals, which increases ClawHub ranking, which drives more discovery. This compounding network effect is structurally unavailable to standalone self-hosted deployments."
        },
        {
          id: 5,
          question: "What three installation paths does ClawHub offer for a published MCP server like TutorClaw?",
          options: {
            A: "iOS App Store, Android Play Store, and web browser",
            B: "One-click consumer install (individual self-service), managed institutional deployment (operator provisions for all users centrally), and self-hosted on-premise (air-gapped environments with complete data control)",
            C: "Free tier install, paid tier install, and enterprise tier install",
            D: "Python package install, Docker container, and bare-metal binary deployment"
          },
          correct: "B",
          explanation: "ClawHub's three install paths address different adopter archetypes: one-click for individual learners wanting instant access, managed deployment for institutions provisioning at scale, and self-hosted for security-sensitive enterprises needing complete data control. Each missing path blocks an entire adopter segment."
        }
      ]
    }
  ]
};
