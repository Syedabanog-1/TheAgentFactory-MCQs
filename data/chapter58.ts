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
          question: "A team is building TutorClaw, an AI tutoring MCP server. Their tech lead insists on designing all nine tools on paper — specifying each tool's name, input parameters, output format, and access tier rules — before writing a single line of code. One developer argues this is unnecessary overhead and wants to start coding immediately. What is the primary technical justification for blueprinting all tool contracts before implementation begins?",
          options: {
            A: "The Claude API requires all MCP tools to be pre-registered before any requests can be processed",
            B: "Pre-specifying input/output contracts and tier access rules before coding prevents architectural mismatches that are expensive to fix mid-implementation — the blueprint acts as a contract that ensures all nine tools form a coherent system rather than nine independently-built components with incompatible interfaces",
            C: "ClawHub marketplace requires a complete tool manifest to be submitted before development starts",
            D: "Pre-designing tools allows the team to calculate exact AWS infrastructure costs before committing to development"
          },
          correct: "B",
          explanation: "Blueprinting is about preventing late-stage integration failures. When nine tools are designed independently without a shared contract, tool A's output format may not match what tool B expects as input, tier logic may be inconsistent, and the overall system may fail to cohere. Designing on paper forces these conflicts to surface at zero cost, before they become code that must be rewritten."
        },
        {
          id: 2,
          question: "TutorClaw's nine tools fall into three functional categories. Looking at the tool list — register_learner, get_chapter_content, generate_guidance, track_progress, submit_code, generate_stripe_checkout_url, upgrade_tier, get_learner_profile, list_chapters — a developer groups them by what each tool is responsible for. Which grouping correctly maps these tools to their functional categories?",
          options: {
            A: "Frontend tools (display and UI), backend tools (logic), and database tools (persistence)",
            B: "State tools (register_learner, track_progress, get_learner_profile, upgrade_tier) → Content tools (get_chapter_content, list_chapters) → Pedagogy and Monetization tools (generate_guidance, submit_code, generate_stripe_checkout_url)",
            C: "Free tier tools, paid tier tools, and admin-only tools — organized by which subscription level can access them",
            D: "Input tools (receive data), processing tools (transform data), and output tools (deliver results)"
          },
          correct: "B",
          explanation: "TutorClaw's tools organize into: State tools that manage learner data and access tiers; Content tools that retrieve curriculum from the markdown library; and Pedagogy/Monetization tools that deliver teaching interactions and handle Stripe payment flows. This three-category architecture separates concerns clearly, making each group independently testable."
        },
        {
          id: 3,
          question: "During TutorClaw's blueprint phase, the team defines tier access rules for each tool. get_chapter_content is configured as: chapters 1-3 accessible to free tier, chapters 4-10 require paid tier ($1.75/month), chapters 11-20 require premium tier ($10.50/month). A free-tier learner requests chapter 7. The MCP tool checks the learner's tier before fetching content. What happens when a free-tier learner tries to access a paid-tier chapter in TutorClaw's design?",
          options: {
            A: "The tool returns the first 500 words of the chapter as a free preview",
            B: "The tool returns an access-denied response, and the agent uses this to trigger the upgrade flow — calling generate_stripe_checkout_url and sending the learner a payment link via WhatsApp",
            C: "The tool silently skips to the next accessible chapter without notifying the learner",
            D: "The MCP server crashes with an unhandled exception because tier checking was not implemented"
          },
          correct: "B",
          explanation: "Tier access rules are enforced at the tool level — the MCP tool checks the learner's tier in the JSON state file before fetching content. An access failure is not an error; it triggers the monetization flow. The agent receives the denial, understands the context (learner needs upgrade), calls generate_stripe_checkout_url, and sends the checkout link — a seamless conversion funnel embedded in the learning experience."
        }
      ]
    },
    {
      id: 2,
      title: "PRIMM-Lite Pedagogy and JSON Persistence",
      mcqs: [
        {
          id: 1,
          question: "TutorClaw uses a teaching methodology called PRIMM-Lite, embedded directly in the generate_guidance tool. When a learner submits code via the submit_code tool, instead of simply saying 'correct' or 'incorrect,' TutorClaw first asks the learner to predict the output before running the code, then runs it, then prompts the learner to investigate any differences, then asks them to modify the code to meet a new objective. What does PRIMM-Lite stand for, and why is this sequence pedagogically superior to immediate grading?",
          options: {
            A: "Practice, Repeat, Iterate, Master, Move-on — effective because repetition builds muscle memory in programming",
            B: "Predict, Run, Investigate, Modify, Make — superior to grading because it activates metacognitive reflection at each step, forcing learners to confront and resolve the gap between what they expected and what the code actually does",
            C: "Parse, Resolve, Integrate, Map, Merge — effective because it mirrors how compilers process code",
            D: "Plan, Review, Implement, Measure, Mentor — effective because it mirrors the software development lifecycle"
          },
          correct: "B",
          explanation: "PRIMM-Lite transforms passive code consumption into active cognitive engagement. Predict forces learners to commit to a hypothesis before seeing results — creating a testable mental model. Run provides real feedback. Investigate forces analysis of mismatches. Modify and Make build creative competence. Simply marking 'wrong' doesn't build understanding; PRIMM-Lite builds the cognitive process that experienced programmers use."
        },
        {
          id: 2,
          question: "TutorClaw stores all learner state — registration data, chapter progress, tier status, and payment history — in local JSON files rather than a managed database like PostgreSQL or MongoDB. A senior engineer reviewing the design asks: 'This will fail at scale. Why not use a proper database from the start?' What is the architectural justification for JSON file persistence in TutorClaw's initial implementation?",
          options: {
            A: "JSON files are universally faster than relational databases for all read and write operations at any scale",
            B: "TutorClaw's inverted architecture (users provide their own compute and LLM) means the server only hosts intelligence — adding a managed database would introduce a $50-200/month dependency that contradicts the near-zero infrastructure cost model. JSON files maintain the $50-70/month total budget while keeping the architecture simple enough to understand and publish",
            C: "PostgreSQL and MongoDB are incompatible with MCP server protocols and cannot be called as tools",
            D: "Financial regulations require all payment-related data to be stored in unencrypted flat files for auditability"
          },
          correct: "B",
          explanation: "This is a deliberate architectural decision aligned with the economic model from Chapter 59. TutorClaw's value proposition is near-zero infrastructure cost. Introducing a managed database breaks this thesis for early-stage deployment. JSON files are appropriate for the scale this chapter targets — they keep the system teachable, deployable on minimal infrastructure, and free from database management overhead."
        }
      ]
    },
    {
      id: 3,
      title: "Agent Identity — SOUL.md and IDENTITY.md",
      mcqs: [
        {
          id: 1,
          question: "TutorClaw defines its agent personality through two documentation files rather than through code or model fine-tuning. SOUL.md defines the agent's values (patient, Socratic, celebrates mistakes as learning opportunities), communication style (warm, never condescending), and teaching philosophy. IDENTITY.md defines its name ('TutorClaw'), backstory, and persona. A product manager asks: 'Why write a personality in a Markdown file? Shouldn't we just tell the agent what to do in each prompt?' What is the architectural advantage of centralizing agent identity in SOUL.md and IDENTITY.md?",
          options: {
            A: "Markdown files are required by the MCP protocol to define agent behavioral parameters",
            B: "Centralizing identity in dedicated files means the persona is loaded consistently into every interaction's system prompt — ensuring behavioral coherence across all 9 tools and all user sessions, rather than requiring each tool's prompt to re-define personality independently",
            C: "SOUL.md and IDENTITY.md files are automatically indexed by ClawHub for marketplace discoverability",
            D: "Markdown files can be legally copyrighted, protecting the agent's personality as intellectual property"
          },
          correct: "B",
          explanation: "Consistency is the architectural value of SOUL.md and IDENTITY.md. Without centralized identity files, each tool prompt might express a slightly different tone — one tool is formal, another casual. By loading SOUL.md and IDENTITY.md into the system prompt, all 9 tools and all WhatsApp interactions share the same behavioral baseline. The files also make the personality auditable and editable without touching tool code."
        },
        {
          id: 2,
          question: "During TutorClaw's Phase 5 (Identity and Polish), the team adds an offline fallback skill — a set of pre-written responses the agent delivers when the Claude API is unavailable. A learner messages TutorClaw at 3am during an API outage, asking for help with a loop concept. Instead of receiving an error message, they receive a curated static explanation of loops. What problem does the offline fallback skill solve in the context of AI Employee reliability?",
          options: {
            A: "It reduces API costs by substituting static content for AI-generated responses wherever possible",
            B: "It maintains the learner's experience continuity during API outages — the agent remains 'present' and useful even when the underlying LLM is unavailable, which is critical for a 24/7 AI Employee that learners depend on for just-in-time help",
            C: "It bypasses WhatsApp's message delivery limits during high-traffic periods",
            D: "It stores API responses locally so the same question never hits the Claude API twice"
          },
          correct: "B",
          explanation: "An AI Employee that goes silent during API outages is not a reliable employee. Offline fallback skills ensure graceful degradation — the agent acknowledges the situation and provides curated static help rather than failing silently. For a tutoring application where learners often need help at odd hours (near deadlines), this reliability is a meaningful quality differentiator."
        }
      ]
    },
    {
      id: 4,
      title: "Monetization, Testing, and Publishing",
      mcqs: [
        {
          id: 1,
          question: "TutorClaw's complete Stripe payment flow spans multiple components. A premium-tier learner's subscription renewal fails due to an expired card. The Stripe webhook fires a 'payment_failed' event. TutorClaw's webhook handler receives it, downgrades the learner's tier in the JSON state file from 'premium' to 'free,' and the next time the learner requests premium content, they receive an upgrade prompt with a new payment link. Which component of TutorClaw's architecture handles the Stripe webhook and updates learner state?",
          options: {
            A: "The WhatsApp channel connector, which monitors all incoming events including payment webhooks",
            B: "A webhook endpoint in the MCP server that receives Stripe events and calls the upgrade_tier tool (in reverse — downgrading) to update the learner's tier in the JSON state file",
            C: "The Claude AI layer, which automatically detects payment failures through Stripe's conversational API",
            D: "A separate billing microservice that runs independently from the MCP server and syncs with it via REST calls"
          },
          correct: "B",
          explanation: "In TutorClaw's architecture, the MCP server hosts both tools and the webhook endpoint. When Stripe fires a payment event, the webhook handler processes it and updates the JSON state file directly — this is what makes the tier system dynamic. The agent doesn't need to know about payments; it just calls get_learner_profile and sees the current tier, which Stripe webhooks keep accurate."
        },
        {
          id: 2,
          question: "After completing TutorClaw's 22 implementation lessons, Phase 6 requires a 'spec-versus-implementation audit' before publishing to ClawHub. During the audit, the team discovers: the original blueprint specified track_progress should store only chapter_id and completion_status, but the implementation also stores time_spent, attempt_count, and last_error_message. The team must decide whether to remove the extra fields or update the spec. What is the primary purpose of a spec-versus-implementation audit in the TutorClaw development workflow?",
          options: {
            A: "To calculate the total lines of code written and compare against industry benchmarks for developer productivity",
            B: "To systematically compare what was designed against what was built — identifying intentional enhancements (keep and document), unintentional deviations (decide and fix), and undocumented behavior (critical for marketplace users who depend on the published spec to integrate TutorClaw)",
            C: "To generate automated security reports required before ClawHub can approve a marketplace submission",
            D: "To determine which team members are responsible for each section of code for performance reviews"
          },
          correct: "B",
          explanation: "A spec-versus-implementation audit is quality assurance for the contract. ClawHub users who integrate TutorClaw depend on the published spec to understand what each tool does. Undocumented extra fields (like time_spent in track_progress) may be valuable or may be technical debt — but either way, they need to be explicitly decided upon and the spec updated to reflect reality. The audit prevents surprise-breaking changes for downstream integrators."
        }
      ]
    }
  ]
};
