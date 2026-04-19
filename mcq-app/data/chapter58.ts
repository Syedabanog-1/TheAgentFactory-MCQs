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
        },
        {
          id: 6,
          question: "A developer builds nine MCP tools for a tutoring app without a shared blueprint. After finishing, tool A returns learner IDs as integers but tool B expects strings, and tier enforcement works differently across three tools. What design principle did this approach violate?",
          options: {
            A: "The single responsibility principle — each tool should only have one function",
            B: "Contract-first design — pre-specifying shared input/output contracts and tier rules before implementation prevents interface mismatches that are expensive to discover after nine tools are already built",
            C: "The DRY principle — tier logic should be written once and imported by all tools",
            D: "The open-closed principle — tools should be open for extension but closed for modification"
          },
          correct: "B",
          explanation: "Contract-first design requires establishing all shared contracts (data types, field names, tier rules) before implementation begins. When tools are built independently, each developer makes local decisions that seem reasonable in isolation but create incompatibilities at integration time — exactly the problem a blueprint prevents."
        },
        {
          id: 7,
          question: "A team building a tutoring MCP server has three developers: one wants to start with the database, one wants to begin with Stripe integration, and one wants to build the WhatsApp connector first. The project lead insists on blueprinting all nine tool contracts before any code is written. What does the project lead understand that the others do not?",
          options: {
            A: "The project lead wants to delay development to extend the project timeline",
            B: "Starting with implementation fragments in parallel creates tools that may be individually correct but collectively incompatible — the blueprint ensures all nine tools share one coherent architecture before a single line is committed",
            C: "The project lead believes documentation is more important than working software",
            D: "Database, Stripe, and WhatsApp components each require separate blueprints before they can be combined"
          },
          correct: "B",
          explanation: "When developers start building different system components simultaneously without a shared blueprint, each component's design is influenced only by the developer's local assumptions. The blueprint phase creates a shared understanding of how all nine tools form one system — it is the architectural alignment meeting held on paper rather than in production."
        },
        {
          id: 8,
          question: "A TutorClaw developer defines the get_chapter_content tool contract with output: {content: string, accessible: boolean}. A teammate asks: 'Why include an accessible field when content is returned — if the content is there, isn't access obviously granted?' What architectural purpose does the accessible field serve?",
          options: {
            A: "It helps frontend developers style the UI differently for accessible versus inaccessible content",
            B: "It gives the agent a machine-readable signal to trigger the upgrade flow — when accessible is false, the agent calls generate_stripe_checkout_url without needing to parse error messages or infer state from null content",
            C: "It satisfies WCAG accessibility guidelines for content delivered over messaging platforms",
            D: "It prevents the JSON state file from storing unnecessary content strings when a learner is denied access"
          },
          correct: "B",
          explanation: "The accessible field is a structured contract for the agent's decision logic. An agent should not need to parse error strings or infer intent from null values — it should receive a clear boolean it can branch on. When accessible is false, the agent knows to trigger the payment upgrade flow without ambiguity."
        },
        {
          id: 9,
          question: "TutorClaw groups register_learner, track_progress, get_learner_profile, and upgrade_tier into a 'state tools' category. A new developer asks why these are grouped rather than treated as four independent tools. What is the correct explanation?",
          options: {
            A: "These tools share the same API endpoint and must be called through the same network route",
            B: "These four tools all read from or write to the same learner state — they form a cohesive subsystem where the output of one (register_learner creates the record) enables the others to function, making their grouping architecturally meaningful",
            C: "Grouping tools reduces the number of tokens in the MCP server's tool manifest",
            D: "The MCP protocol requires tools that touch the same database to be grouped into the same category"
          },
          correct: "B",
          explanation: "Architectural categories reveal dependencies and data ownership. The state tools all operate on the same learner record in the JSON state file — register_learner creates it, track_progress updates it, get_learner_profile reads it, and upgrade_tier modifies it. Grouping them communicates that they share a single data concern and must be designed with consistent field names and access patterns."
        },
        {
          id: 10,
          question: "A free-tier learner in TutorClaw tries to access a premium chapter. The agent calls get_chapter_content and receives {content: null, accessible: false}. According to TutorClaw's designed flow, what should the agent do next?",
          options: {
            A: "Display an error message: 'Access denied. Please contact support.'",
            B: "Call generate_stripe_checkout_url to create a payment link and send it to the learner as the next step toward accessing the content",
            C: "Call list_chapters to redirect the learner to a free chapter automatically",
            D: "Log the access attempt and silently move the conversation to a different topic"
          },
          correct: "B",
          explanation: "TutorClaw's tier access design creates a conversion funnel embedded in the learning experience. An accessible: false response is not a dead end — it is a trigger for the monetization flow. The agent calls generate_stripe_checkout_url and sends the learner a direct payment link, turning a content denial into an upgrade opportunity without breaking the conversation context."
        },
        {
          id: 11,
          question: "TutorClaw's blueprint specifies exact JSON field names for each tool's input and output. A developer asks: 'Why lock in field names during design rather than letting each tool developer choose their own naming?' What is the most technically accurate answer?",
          options: {
            A: "JSON field names affect HTTP header size and standardizing them reduces bandwidth usage",
            B: "When the agent passes output from one tool as input to another, field names must match exactly — if tool A returns learner_id but tool B expects learnerId, the orchestration chain breaks without any error at build time",
            C: "Consistent naming allows the MCP server to automatically generate API documentation",
            D: "ClawHub requires all tools in a server to use the same field naming convention before approving publication"
          },
          correct: "B",
          explanation: "In a multi-tool system orchestrated by an AI agent, tool outputs often become inputs to other tools. If field names diverge between tools, the agent either fails to pass data correctly or must perform silent transformations that introduce bugs. Blueprint-level field naming ensures the entire tool chain is compatible without requiring the agent to translate between naming conventions."
        },
        {
          id: 12,
          question: "A TutorClaw developer needs to handle Stripe checkout sessions. Option A: embed Stripe logic in the agent's system prompt as instructions. Option B: create a generate_stripe_checkout_url MCP tool. Which is architecturally correct and why?",
          options: {
            A: "Option A, because the system prompt is the natural place for all agent behavior including payment handling",
            B: "Option B, because Stripe API calls require credentials and produce side effects that must be handled in executable server-side code — system prompt instructions cannot make HTTP calls or securely access API keys",
            C: "Option A, because MCP tools should only handle data retrieval, not payment processing",
            D: "Option B, because ClawHub prohibits payment logic from appearing in system prompts"
          },
          correct: "B",
          explanation: "MCP tools are server-side executable code that can hold API credentials securely, make HTTP calls, and handle side effects. System prompts are text instructions that tell the agent what to do conceptually — they cannot execute code or access secrets. Payment processing requires real API calls with real credentials, which makes it an MCP tool responsibility."
        },
        {
          id: 13,
          question: "A TutorClaw architect finalizes the blueprint but realizes no behavior was defined for register_learner when called with a learner_id that already exists. What should the blueprint specify for this edge case?",
          options: {
            A: "The blueprint should leave this undefined and let the implementation developer decide",
            B: "The blueprint must specify the exact behavior: either return an error with a defined error code, or return the existing learner's profile — the choice must be explicit so all dependent tools (track_progress, get_learner_profile) handle the outcome correctly",
            C: "The MCP protocol handles duplicate registration automatically, so no blueprint specification is needed",
            D: "The edge case only needs to be addressed after the tool is built and tested in production"
          },
          correct: "B",
          explanation: "Edge cases in tool contracts are not implementation details — they are interface contracts. If register_learner silently returns success for a duplicate, other tools may assume a new learner was just created and initialize state incorrectly. If it returns an error, the agent must handle that error code. The blueprint must specify the exact outcome so all callers behave correctly."
        },
        {
          id: 14,
          question: "TutorClaw has both a list_chapters tool and a get_chapter_content tool. A developer asks: 'Why are these separate tools? Couldn't list_chapters just return full content for all chapters?' What is the correct architectural justification?",
          options: {
            A: "The MCP protocol limits single tool responses to 1000 characters, requiring content to be split across multiple tools",
            B: "list_chapters returns lightweight metadata (chapter IDs, titles, tier requirements) for navigation, while get_chapter_content returns the full text for a single chapter — combining them would force agents to download all chapter content just to display a menu",
            C: "Having separate tools allows different developers to implement each tool independently without coordination",
            D: "ClawHub's marketplace search indexes list_chapters separately from content tools for discoverability"
          },
          correct: "B",
          explanation: "Separating list from get is a standard API design pattern applied to MCP tools. A learner asking 'what chapters are available?' needs titles and tier indicators — not full lesson text. Loading full content for all chapters into the context window for a navigation query is wasteful and slow. The separation matches the granularity of each use case."
        },
        {
          id: 15,
          question: "TutorClaw's blueprint specifies that upgrade_tier requires two parameters: learner_id and new_tier. A developer suggests: 'Why pass new_tier explicitly? The system knows there are only two tiers, so it could just toggle from free to premium automatically.' What is wrong with the automatic toggle approach?",
          options: {
            A: "The MCP protocol does not support tools with fewer than two parameters",
            B: "Making new_tier explicit supports future expansion to multiple tiers, and more importantly it makes the Stripe webhook handler's intent clear — the webhook knows which tier to set based on the subscription purchased, not just 'toggle whatever is current'",
            C: "The toggle approach would require the tool to read the current tier first, which would create a race condition",
            D: "ClawHub requires all upgrade tools to explicitly specify target tiers for marketplace compliance"
          },
          correct: "B",
          explanation: "Explicit is better than implicit for tools called from external webhooks. The Stripe webhook knows exactly which subscription tier was purchased — it should communicate that directly to upgrade_tier rather than relying on a toggle that could set the wrong tier if a learner somehow has an unexpected current tier. Explicit parameters also make the tool testable in isolation."
        },
        {
          id: 16,
          question: "After blueprinting all nine TutorClaw tools, a review reveals that generate_guidance needs to check the learner's tier to decide which content depth to use, but the blueprint designed it as a pedagogy tool with no access to state tools. What does this discovery reveal?",
          options: {
            A: "generate_guidance was incorrectly categorized and should be moved to the state tools category",
            B: "The blueprint review caught a missing dependency — generate_guidance needs access to learner state, so either it must call get_learner_profile as a prerequisite or the agent orchestration layer must provide tier context when calling it",
            C: "This is expected behavior because pedagogy tools are always stateless by design",
            D: "The blueprint is correct and tier-specific content should be handled by a separate tool"
          },
          correct: "B",
          explanation: "A blueprint review that catches missing dependencies before implementation is working exactly as intended. The team now has a decision: should generate_guidance take a tier parameter (agent provides it), should it internally call get_learner_profile (adding a tool dependency), or should the orchestration always pre-fetch tier context? Catching this in blueprint prevents a broken implementation."
        },
        {
          id: 17,
          question: "A developer needs to add a 'send_certificate' tool to TutorClaw that emails PDF completion certificates to learners. During blueprinting, they must assign it to one of the three tool categories: state, content, or pedagogy/monetization. What is the correct categorization?",
          options: {
            A: "State tools — because it reads learner completion data from the JSON state file",
            B: "Pedagogy and monetization tools — because it serves learner progression (a pedagogical milestone) and could be gated behind paid tier access (a monetization feature), making it a hybrid in the pedagogy/monetization category",
            C: "Content tools — because a certificate is a type of content delivered to the learner",
            D: "A new fourth category should be created: 'delivery tools'"
          },
          correct: "B",
          explanation: "send_certificate is a milestone delivery action — it rewards course completion (pedagogy) and could be a premium feature (monetization). The pedagogy/monetization category was designed for tools that deliver learning value and handle access gating, which fits certificate delivery. Creating a fourth category for one tool adds unnecessary architectural complexity."
        },
        {
          id: 18,
          question: "TutorClaw's blueprint specifies that all nine tools must return errors in a consistent format: {error: string, code: string}. A developer asks why error format standardization needs to be in the blueprint rather than left to individual tool developers. What is the correct answer?",
          options: {
            A: "Standardized error formats reduce the size of the MCP server's JavaScript bundle",
            B: "The agent uses error codes to decide what to do next — if register_learner returns {message: 'already exists'} while get_chapter_content returns {error: 'not_found', code: 'E404'}, the agent must handle two different formats, making error-driven logic brittle",
            C: "Standardized errors are required by the MCP protocol specification for all compliant servers",
            D: "Consistent error formats make the pytest test suite easier to maintain"
          },
          correct: "B",
          explanation: "The agent is the primary consumer of tool error responses. When error formats are inconsistent, the agent's orchestration logic must handle multiple formats — increasing prompt complexity and creating edge cases. Blueprint-level error standardization means the agent can be instructed once: 'when you receive an error with code X, do Y' — applicable across all nine tools."
        },
        {
          id: 19,
          question: "A developer proposes skipping TutorClaw's blueprint phase and using test-driven development instead — writing failing tests first and letting the implementation emerge. What is the key limitation of this approach for a nine-tool MCP system?",
          options: {
            A: "TDD is incompatible with Python and cannot be used for MCP server development",
            B: "TDD verifies individual tool behavior but does not establish the shared contracts between tools — tests for register_learner can be written without knowing what data format get_learner_profile expects, leading to tools that each pass their own tests but fail when chained together",
            C: "Writing tests before implementation doubles the development time without improving code quality",
            D: "TDD requires a running server to write tests against, which means all nine tools must be implemented before testing can begin"
          },
          correct: "B",
          explanation: "TDD is excellent for verifying a tool in isolation but does not replace cross-tool contract design. A test for register_learner only verifies that it creates a record — it doesn't specify that the learner_id field name and type must match what get_learner_profile expects. Nine sets of passing unit tests can coexist with a broken integrated system if the interfaces were never aligned."
        },
        {
          id: 20,
          question: "TutorClaw's blueprint specifies that get_learner_profile returns learner_id, tier, progress_summary, and registered_at. During implementation, a developer wants to add a last_active timestamp field. What should they do?",
          options: {
            A: "Add the field silently — adding fields to outputs is always backwards-compatible and never affects callers",
            B: "Update the blueprint to formally include last_active, then implement it — the blueprint is the source of truth and adding fields without updating it creates an undocumented contract that downstream tool callers and the agent's system prompt may not handle",
            C: "Wait until the Reflection Phase to document the additional field",
            D: "Create a separate get_learner_activity tool instead of modifying an existing contract"
          },
          correct: "B",
          explanation: "Adding undocumented output fields creates silent contract drift. While a new field may not break callers today, the agent's system prompt was written based on the documented contract. If the prompt doesn't mention last_active, the agent won't use it. The blueprint must stay synchronized with the implementation — every field in the output should be intentional and documented."
        },
        {
          id: 21,
          question: "TutorClaw separates get_chapter_content and list_chapters (content tools) from generate_guidance (pedagogy/monetization tool). A developer asks why content retrieval and pedagogy delivery are in different categories. What is the correct answer?",
          options: {
            A: "Content tools are written in JavaScript while pedagogy tools are written in Python, requiring separation",
            B: "Content tools retrieve raw curriculum data without pedagogical logic — they return what exists. Pedagogy tools apply PRIMM-Lite methodology to that content — they transform how it is delivered. Separating them allows content to be reused across different pedagogical approaches",
            C: "Content tools are publicly accessible while pedagogy tools require authentication",
            D: "Separation allows each category to be deployed on different servers for load balancing"
          },
          correct: "B",
          explanation: "The content/pedagogy separation is a clean separation of concerns. get_chapter_content is a data retrieval tool — it returns chapter text. generate_guidance is a teaching tool — it wraps that content in PRIMM-Lite methodology. This separation means a future tool like generate_quiz could use the same chapter content with different pedagogical framing without duplicating the content retrieval logic."
        },
        {
          id: 22,
          question: "A TutorClaw developer is blueprinting submit_code — a tool that receives learner code submissions. They must decide: should submit_code execute the code, persist it to JSON state, or both? What architectural factor determines the correct answer?",
          options: {
            A: "MCP tools cannot execute code because they run in a sandboxed environment without a Python interpreter",
            B: "The PRIMM-Lite flow requires code to be executed (for the Run phase) and the submission to be available for generate_guidance to reference during Investigation — both execution and persistence are needed to support the full pedagogical sequence",
            C: "Executing code creates security risks that require the tool to only persist submissions without running them",
            D: "Persistence should be handled by track_progress, so submit_code should only execute"
          },
          correct: "B",
          explanation: "PRIMM-Lite's Run phase requires actual code execution — the learner needs to see real output to compare against their Predict phase answer. The Investigate phase requires generate_guidance to reference what the code did, which requires the execution result to be accessible. Designing submit_code to do only one of these breaks the PRIMM-Lite sequence."
        },
        {
          id: 23,
          question: "TutorClaw's blueprint initializes all learners with tier: 'free'. A developer suggests making the initial tier configurable so some learners can start at paid tier (for institutional licenses). How should this be handled during the blueprint phase?",
          options: {
            A: "Reject the idea because TutorClaw's business model requires all learners to start on free tier",
            B: "Update the blueprint to add an optional initial_tier parameter to register_learner with a default of 'free' — this preserves the current behavior while enabling institutional use cases without requiring a second registration tool",
            C: "Create a separate register_paid_learner tool that institutions can use instead of register_learner",
            D: "The initial tier should be configured at the server level, not per-learner registration call"
          },
          correct: "B",
          explanation: "Optional parameters with defaults are the correct blueprint response to variable initialization requirements. An optional initial_tier parameter keeps the standard flow unchanged (free tier default) while supporting institutional use cases. Adding a second registration tool for the same purpose creates redundancy and splits the state tool category's single-responsibility."
        },
        {
          id: 24,
          question: "A developer reviewing TutorClaw's nine-tool blueprint argues: 'Tier access rules belong in the implementation, not the design. Blueprinting should focus on data flow, not business logic.' What is wrong with this reasoning?",
          options: {
            A: "Business logic cannot be expressed in blueprint documentation",
            B: "Tier access rules determine which tools a learner can call — this affects every tool's interface contract. If tier rules emerge during implementation, nine developers may implement them nine different ways, creating an inconsistent and exploitable access system",
            C: "The MCP protocol requires tier access rules to be defined in a separate configuration file, not the blueprint",
            D: "Tier logic is too complex to specify in a blueprint and must be determined empirically through testing"
          },
          correct: "B",
          explanation: "Tier access is a cross-cutting architectural concern that affects every tool in the system. Blueprint-level specification ensures all nine tools enforce the same rules consistently. When tier logic is deferred to implementation, each developer makes independent decisions — one might block free-tier access at the tool level, another might only soft-warn, creating inconsistencies that learners can exploit."
        },
        {
          id: 25,
          question: "A team debates whether to add a tenth tool to TutorClaw: one that permanently deletes a learner's account and removes all their JSON state data. What blueprint considerations determine whether to add this tool?",
          options: {
            A: "The tool should be added because every CRUD system needs a delete operation",
            B: "Blueprint considerations include: which tier can call this tool, what the irreversible side effects are (permanent data loss), whether a soft-delete (tier downgrade + data retention) better serves learners who might return, and how this affects Stripe subscription cancellation",
            C: "Account deletion is a legal requirement under GDPR and must be added regardless of architectural fit",
            D: "Deletion tools are prohibited by ClawHub's marketplace policies"
          },
          correct: "B",
          explanation: "Blueprint decisions for destructive operations require careful consideration of reversibility, side effects, and business consequences. A permanent delete has legal, financial, and user experience implications that must be resolved before implementation — what happens to active subscriptions, can the learner re-register with the same ID, and is irreversible deletion actually the right behavior for a tutoring platform."
        },
        {
          id: 26,
          question: "A developer proposes combining register_learner and get_learner_profile into one tool that either creates a new learner or returns an existing one. What architectural principle does this proposal violate?",
          options: {
            A: "The proposal violates the DRY principle because it duplicates learner lookup logic",
            B: "The proposal violates single responsibility — register_learner performs a write operation with side effects (creates a record, fires initialization logic) while get_learner_profile is a read operation. Merging them hides write side effects inside a tool callers assume is safe to call multiple times",
            C: "The MCP protocol forbids tools from performing both read and write operations",
            D: "The proposal would make the tool name misleading but is otherwise architecturally sound"
          },
          correct: "B",
          explanation: "Combining a write operation with a read operation into one tool creates idempotency ambiguity. Callers of get_learner_profile expect a pure read — no state change. If the merged tool silently creates a record on first call, callers using it for profile lookups may unknowingly create phantom learner accounts. Keeping write and read operations separate makes each tool's side effects predictable."
        },
        {
          id: 27,
          question: "After completing TutorClaw's blueprint, a developer asks: 'How do we know the blueprint is complete enough to start building?' What is the correct criterion for blueprint completeness?",
          options: {
            A: "The blueprint is complete when every tool has at least one test case written",
            B: "The blueprint is complete when every tool's input types, output types, tier access rules, and error behaviors are fully specified — any developer can implement any tool from the spec alone, without needing to ask questions about interface expectations",
            C: "The blueprint is complete when all team members have reviewed and signed off on the document",
            D: "The blueprint is complete when it has been reviewed by ClawHub's marketplace team"
          },
          correct: "B",
          explanation: "Blueprint completeness is defined by implementation sufficiency: could a developer pick up the spec and implement the tool without ambiguity? If a developer must guess about field types, error codes, or tier behavior, the blueprint is incomplete. The test: write a mock implementation from the spec alone — if it would pass integration tests, the spec is complete."
        },
        {
          id: 28,
          question: "During development, a TutorClaw team discovers that generate_guidance sometimes calls get_learner_profile internally to check tier before generating content. This cross-tool dependency was not in the original blueprint. What should the team do?",
          options: {
            A: "Remove the internal call — tools should never call other tools directly",
            B: "Update the blueprint to formally document this dependency — either as a direct tool-to-tool call or by requiring the agent to always provide tier context when calling generate_guidance, then decide which pattern to standardize",
            C: "Leave the undocumented dependency in place since it works correctly",
            D: "Move get_learner_profile into generate_guidance and remove it as a separate tool"
          },
          correct: "B",
          explanation: "Undocumented cross-tool dependencies create hidden coupling. If the blueprint doesn't mention this dependency, another developer may refactor get_learner_profile's output format without realizing generate_guidance depends on it. The team must decide on the dependency pattern (agent-orchestrated vs. tool-internal) and formalize it in the blueprint before it becomes a maintenance liability."
        },
        {
          id: 29,
          question: "TutorClaw's blueprint is finalized with nine tools. A new business requirement arrives: chapters should have a preview_available flag allowing free-tier learners to read the first section of paid chapters. Which existing tool contracts need to be updated in the blueprint?",
          options: {
            A: "Only register_learner needs updating to include preview preferences",
            B: "get_chapter_content needs a new output field (preview_content) and possibly a new input flag, and list_chapters needs to expose preview_available per chapter so the agent can inform learners which chapters have previews before they attempt access",
            C: "Only the Stripe integration tools need updating since preview affects monetization",
            D: "No blueprint changes are needed — this feature can be added during implementation without affecting contracts"
          },
          correct: "B",
          explanation: "A preview feature changes the data model: chapters now have preview content that must be returned differently from full content. get_chapter_content must return preview_content when accessible is false but preview_available is true. list_chapters must expose preview_available so learners can see which chapters offer previews. Both contracts change, and blueprint-level changes must happen before implementation."
        },
        {
          id: 30,
          question: "A developer building TutorClaw argues: 'Claude is the orchestration layer — it will figure out the right tool call order without us blueprinting inter-tool dependencies.' What is the fundamental limitation of relying on Claude for this?",
          options: {
            A: "Claude cannot call more than three tools in a single conversation turn",
            B: "Claude's tool orchestration is guided by tool descriptions and the system prompt — if the inter-tool dependencies are not explicitly documented in those descriptions, Claude may call tools in the wrong order, skip prerequisite calls, or pass incompatible data between tools",
            C: "Claude's context window is too small to hold all nine tool descriptions simultaneously",
            D: "Claude cannot orchestrate tools that were not available during its training data"
          },
          correct: "B",
          explanation: "Claude orchestrates tools based on their descriptions and the system prompt — it has no intrinsic knowledge of TutorClaw's architecture. If generate_guidance's description doesn't mention that get_learner_profile must be called first, Claude may skip that step. Tool descriptions are the blueprint's delivery mechanism to the AI layer — undocumented dependencies are invisible to the orchestrator."
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
        },
        {
          id: 6,
          question: "A learner submits Python code to TutorClaw. Instead of running the code immediately, TutorClaw asks: 'Before I run this — what do you think the output will be?' The learner predicts incorrectly. What pedagogical purpose does an incorrect prediction serve in PRIMM-Lite?",
          options: {
            A: "It allows TutorClaw to grade the learner's understanding and update their tier access accordingly",
            B: "An incorrect prediction creates a concrete cognitive gap — the learner now has a specific wrong belief to investigate. The mismatch between expectation and reality is what drives genuine inquiry in the Investigate phase, making the learning more durable than simply reading the correct answer",
            C: "It demonstrates that the learner needs to restart from the beginning of the lesson",
            D: "Incorrect predictions are logged to JSON state so TutorClaw can identify weak learners for remediation"
          },
          correct: "B",
          explanation: "Cognitive science research shows that prediction errors are more memorable than passive information. When a learner predicts wrongly and then sees the actual result, the surprise creates a strong memory trace. The Investigate phase then channels this cognitive dissonance productively — the learner is motivated to understand why their mental model was wrong, not just what the right answer is."
        },
        {
          id: 7,
          question: "After six months of use, TutorClaw's JSON state file has grown large and read performance has degraded. A developer considers switching to SQLite. What is the correct process for making this architectural change?",
          options: {
            A: "Replace all JSON file reads and writes in every tool simultaneously in a single deployment",
            B: "Write a migration script that reads the current JSON file and inserts all records into SQLite, update the persistence layer in each tool to use SQLite queries, run both systems in parallel during a transition period to verify data integrity, then retire the JSON file",
            C: "Clear the JSON state file and start fresh with SQLite — historical progress data is not important enough to migrate",
            D: "The switch cannot be made because TutorClaw's architecture is permanently committed to JSON files"
          },
          correct: "B",
          explanation: "A migration from JSON to SQLite is a persistence layer change, not an architectural redesign. Because all state is centralized with a clear schema, the migration script reads each learner record from JSON and inserts it into SQLite with the same fields. Tools only need their read/write implementations updated — their interfaces remain identical. The parallel-run period catches data discrepancies before the old system is retired."
        },
        {
          id: 8,
          question: "A TutorClaw PRIMM-Lite session reaches the Investigate phase after a learner's prediction matched the actual output exactly. A developer asks: 'If the prediction was correct, isn't Investigation just busywork?' What is the pedagogical flaw in this reasoning?",
          options: {
            A: "The reasoning is correct — Investigate should be skipped when predictions are accurate",
            B: "A correct prediction may indicate the learner understands the concept, or it may indicate a lucky guess. The Investigate phase forces articulation of the reasoning — a learner who can explain why the code produced that output has deeper understanding than one who guessed correctly",
            C: "Correct predictions indicate the code is too simple and TutorClaw should immediately move to a harder example",
            D: "Investigate is required by the PRIMM-Lite patent and cannot be skipped regardless of prediction accuracy"
          },
          correct: "B",
          explanation: "Correct predictions do not guarantee correct understanding — they could result from pattern matching, familiarity, or luck. The Investigate phase tests whether the learner can explain the mechanism, not just the outcome. Asking 'why did this produce X?' after a correct prediction surfaces whether the understanding is genuine and generalizable to similar code."
        },
        {
          id: 9,
          question: "TutorClaw's track_progress tool updates a learner's JSON state after each chapter completion. A developer asks: 'Why store progress in JSON files instead of just tracking it in the conversation memory?' What is the correct answer?",
          options: {
            A: "Conversation memory has a character limit that prevents storing more than three chapters of progress",
            B: "Conversation memory is session-scoped — when a learner returns to TutorClaw after a day, the previous session's context is gone. JSON persistence survives across sessions, platform restarts, and device changes, making progress genuinely durable",
            C: "WhatsApp deletes all message history after 30 days, making conversation memory unreliable",
            D: "JSON files can be backed up to cloud storage while conversation memory cannot"
          },
          correct: "B",
          explanation: "Persistent state is the fundamental reason for external storage. A tutoring application that forgets progress when the conversation ends is not a functional product — learners would restart every session from zero. JSON persistence decouples progress tracking from conversation context, enabling continuity across sessions, devices, and TutorClaw server restarts."
        },
        {
          id: 10,
          question: "A TutorClaw learner completes the Predict, Run, and Investigate phases. TutorClaw enters the Modify phase and asks them to change the code so it prints in reverse order. The learner responds: 'I already understand it, why modify it?' What does PRIMM-Lite design say about the cognitive purpose of the Modify phase?",
          options: {
            A: "The Modify phase is optional and learners can skip it if they feel confident",
            B: "Understanding how existing code works (comprehension) is cognitively different from being able to change it to achieve a new goal (transfer). The Modify phase tests transfer — the ability to apply understanding to a novel variation — which is the skill needed for real programming tasks",
            C: "The Modify phase is purely for assessment purposes so TutorClaw can log completion metrics",
            D: "Modifying code generates additional JSON state entries that improve TutorClaw's recommendation algorithm"
          },
          correct: "B",
          explanation: "PRIMM-Lite is designed around the cognitive taxonomy of programming learning. Understanding existing code (Predict, Run, Investigate) operates at the comprehension level. Modifying code to achieve a different outcome requires applying that understanding to a new context — a higher cognitive operation. Learners who 'understand' code often struggle to modify it, which is why the Modify phase cannot be skipped."
        },
        {
          id: 11,
          question: "TutorClaw's JSON state file is read and written by multiple tool calls in rapid succession during a single learning session. A developer discovers that concurrent writes from two simultaneous sessions could corrupt the file. What is the correct approach within TutorClaw's minimal-infrastructure constraints?",
          options: {
            A: "Switch to a database immediately — JSON files cannot handle concurrent writes under any circumstances",
            B: "Implement file locking: each write operation acquires an exclusive lock, performs the write atomically, and releases the lock — this prevents concurrent write corruption within TutorClaw's single-server architecture without requiring a database",
            C: "Accept the risk — concurrent sessions are rare and corruption is unlikely in practice",
            D: "Restrict TutorClaw to serving only one learner at a time to eliminate concurrency"
          },
          correct: "B",
          explanation: "File locking is the appropriate concurrency control for single-server, file-based persistence. By acquiring an exclusive write lock, performing the atomic write operation, and releasing immediately, concurrent sessions can read freely while only one write proceeds at a time. This handles the realistic concurrency level of a tutoring application without introducing database infrastructure."
        },
        {
          id: 12,
          question: "A developer examines TutorClaw's JSON state schema: {learner_id, tier, progress: [{chapter_id, completion_status}], registered_at}. They want to add a quiz_scores array to each progress entry. What process should they follow?",
          options: {
            A: "Add the field directly to the JSON file without updating any tool code — JSON is schema-less",
            B: "Update the blueprint to include quiz_scores in the progress schema, then update every tool that reads or writes progress entries to handle the new field — and write a migration script to add quiz_scores: [] to all existing progress records",
            C: "Create a separate quiz_state.json file so the schema change doesn't affect existing tools",
            D: "Wait until the next major version release to add new schema fields"
          },
          correct: "B",
          explanation: "Schema changes cascade through the entire system. Tools that read progress entries must handle the new field (even if they don't use it, they must not fail on encountering it). Tools that write progress must include the new field. Existing records need a migration to add the field with a default value. Each of these steps must be coordinated — the blueprint is the coordination document."
        },
        {
          id: 13,
          question: "During TutorClaw's Modify phase, a learner asks: 'Can you just tell me the answer?' According to PRIMM-Lite pedagogy, what should TutorClaw's response be?",
          options: {
            A: "Provide the answer immediately — learner frustration is more harmful than skipping a phase",
            B: "Decline to give the answer directly and instead ask a guiding question that helps the learner discover the modification themselves — for example, 'What would you change about the range() call if you wanted to count backwards?'",
            C: "Log the request and flag the learner as needing additional support before providing the answer",
            D: "Skip to the Make phase since the learner has signaled they are not ready for Modify"
          },
          correct: "B",
          explanation: "PRIMM-Lite is a Socratic method — the tutor guides discovery rather than delivering answers. Giving the answer directly short-circuits the cognitive work that creates durable learning. A guiding question that points toward the solution preserves the learner's agency while reducing frustration, keeping the pedagogical sequence intact without simply doing the work for them."
        },
        {
          id: 14,
          question: "TutorClaw's generate_guidance tool is mid-PRIMM-Lite sequence with a learner when the learner interrupts: 'I'm confused about what a list comprehension is.' How should TutorClaw handle this without destroying the PRIMM-Lite flow?",
          options: {
            A: "Ignore the question and redirect the learner back to the current PRIMM-Lite step",
            B: "Answer the list comprehension question with a brief targeted explanation, then explicitly return to the PRIMM-Lite sequence: 'Now that we understand list comprehensions, let's go back to your prediction about this code'",
            C: "Abandon the current PRIMM-Lite sequence and start a new one focused on list comprehensions",
            D: "Ask the learner to save the list comprehension question for a later session"
          },
          correct: "B",
          explanation: "A real tutor handles interruptions by addressing the immediate question and then restoring context. Ignoring the question damages trust; abandoning the sequence loses the pedagogical momentum. The correct response answers the conceptual gap briefly, then explicitly re-anchors the learner to the PRIMM-Lite sequence they were in — using the question as a teachable moment without losing the thread."
        },
        {
          id: 15,
          question: "A product manager requests a 'skip PRIMM-Lite' feature for TutorClaw that lets experienced learners get direct answers without going through all five phases. From a pedagogical standpoint, what is the core problem with this feature?",
          options: {
            A: "Experienced learners already know all the content and don't need TutorClaw at all",
            B: "Experienced learners are often wrong about what they know — overconfidence is a common learning failure mode. Skipping Predict removes the diagnostic step that reveals whether the learner's mental model is actually correct or merely assumed to be correct",
            C: "The skip feature would require significant refactoring of the generate_guidance tool",
            D: "ClawHub's marketplace prohibits features that allow learners to bypass educational content"
          },
          correct: "B",
          explanation: "The Predict phase is TutorClaw's primary diagnostic tool. Even experienced learners benefit from being asked to predict — it surfaces gaps in assumed knowledge. Research shows that experienced developers frequently hold subtly incorrect mental models about edge cases in code they believe they understand well. The skip feature would remove the tool that catches these gaps."
        },
        {
          id: 16,
          question: "TutorClaw stores all learner state in a single learners.json file. A developer proposes switching to one JSON file per learner. What is the correct architectural trade-off analysis?",
          options: {
            A: "One file per learner is always superior — it eliminates all concurrency concerns",
            B: "One file per learner improves write concurrency (learners can write simultaneously without locking each other) and limits blast radius of corruption, but adds file system management complexity, makes cross-learner queries harder, and complicates backup strategies — the right choice depends on learner volume and query patterns",
            C: "One file per learner is incompatible with TutorClaw's tool architecture",
            D: "A single file is always better because it requires fewer file system operations"
          },
          correct: "B",
          explanation: "The single-file vs. per-learner-file decision involves genuine trade-offs. Per-learner files eliminate inter-learner write contention (critical at scale) and limit data loss from corruption. Single-file approaches simplify queries, backups, and migrations. For TutorClaw's early-stage deployment with modest user counts, the single-file simplicity may outweigh the concurrency benefits of per-learner files."
        },
        {
          id: 17,
          question: "A TutorClaw session ends mid-PRIMM-Lite sequence because the learner's WhatsApp connection drops. When the learner returns the next day, how does TutorClaw know where to resume?",
          options: {
            A: "TutorClaw cannot resume — PRIMM-Lite sequences must always start from the beginning",
            B: "TutorClaw's JSON state must store the current PRIMM-Lite phase and the code being worked on — without this, session recovery is impossible and the learner always restarts from the Predict phase regardless of prior progress",
            C: "WhatsApp's message history automatically restores the conversation context when the learner reconnects",
            D: "The agent reconstructs the sequence from conversation memory which persists across sessions"
          },
          correct: "B",
          explanation: "PRIMM-Lite phase persistence is a state management requirement, not just a nice-to-have. If the current phase (e.g., 'learner is in Investigate phase for chapter 5, lines 12-18') is not persisted to JSON, a dropped connection means the learner restarts from zero. The JSON state schema must include a field for active_primm_phase and active_code to enable true session resumption."
        },
        {
          id: 18,
          question: "TutorClaw's JSON persistence has no transaction support. A workflow requires both track_progress and upgrade_tier to succeed or both to fail atomically. How should this be handled?",
          options: {
            A: "Accept that partial failures are inevitable with JSON files and handle them manually",
            B: "Implement a compensating transaction pattern: write to a pending_operations log first, attempt both writes, and on failure replay or rollback from the log — this simulates transactional behavior within JSON file constraints",
            C: "Switch to a database immediately — atomic operations are impossible with JSON files",
            D: "Combine both operations into a single tool call to reduce the window for partial failure"
          },
          correct: "B",
          explanation: "The compensating transaction pattern is the standard approach for achieving atomicity without database transaction support. By logging the intended operations before executing them, a recovery process can detect and resolve partial writes on restart. This is not as robust as database ACID transactions, but it provides sufficient reliability for TutorClaw's scale and removes the need for a database at early stage."
        },
        {
          id: 19,
          question: "In TutorClaw's PRIMM-Lite implementation, the Make phase asks learners to write original code applying the pattern they learned. A developer asks: 'Can we use Claude to automatically grade the Make phase submissions?' What is the correct approach?",
          options: {
            A: "Automatic grading is ideal — it provides instant feedback and removes subjectivity",
            B: "Automated grading of creative code is appropriate for structural checks (does it run, does it use the target pattern) but not for pedagogical quality — TutorClaw should use Claude to provide Socratic feedback that helps learners improve their own code rather than issuing a pass/fail grade",
            C: "The Make phase should not be graded at all — it is purely expressive",
            D: "Grading must be done by a human teacher — Claude cannot understand code quality"
          },
          correct: "B",
          explanation: "The Make phase develops creative competence, which resists binary grading. Claude can assess structural properties (runs without error, uses the target construct) but assigning a grade to creative code risks discouraging exactly the experimentation PRIMM-Lite is designed to encourage. The correct approach is Socratic feedback: 'Your solution works — have you considered what happens if the list is empty?'"
        },
        {
          id: 20,
          question: "TutorClaw's JSON state records completion_status as a boolean. A product manager wants to change it to a 0-100 percentage to track partial chapter completion. What is the impact of this schema change on TutorClaw's tools?",
          options: {
            A: "No impact — JSON is schema-less and tools will automatically handle the new format",
            B: "Every tool that reads completion_status must be updated to handle a number instead of a boolean, every tool that writes it must use percentages, and the agent's system prompt logic that branches on completion must be updated — plus existing records need migration from boolean to percentage values",
            C: "Only track_progress needs updating since it is the only tool that writes this field",
            D: "The change requires publishing a new major version of TutorClaw on ClawHub before implementation"
          },
          correct: "B",
          explanation: "Schema type changes cascade through all consumers of that field. get_learner_profile returns completion_status to the agent — the agent's system prompt must be updated to handle a number. Conditional logic that previously checked 'if completion_status is true' now needs a threshold (is 75% complete enough to unlock the next chapter?). Each of these downstream effects must be addressed before deploying the change."
        },
        {
          id: 21,
          question: "A developer is designing TutorClaw's submit_code tool and must decide: should it store the code submission in JSON state, execute the code and return output, or both? What is the correct design for PRIMM-Lite compatibility?",
          options: {
            A: "Storage only — executing learner code is a security risk",
            B: "Both: execute the code to produce the Run phase output the learner needs to see, and store the submission in JSON state so generate_guidance can reference it during the Investigate phase without requiring the learner to re-paste the code",
            C: "Execution only — storage is handled by the agent's conversation memory",
            D: "Neither — submit_code should only validate the code syntax before passing it to generate_guidance"
          },
          correct: "B",
          explanation: "PRIMM-Lite's Run phase requires execution output for the learner to compare against their prediction. The Investigate and Modify phases require generate_guidance to reference the specific code that was submitted. Without persistent storage, the agent must carry the code in the conversation context, bloating the context window. Both execution and storage serve distinct phases of the pedagogical sequence."
        },
        {
          id: 22,
          question: "TutorClaw's Predict phase asks learners to state expected output before code runs. A developer asks: 'What if the code is too complex for a beginner to predict? Won't this be discouraging?' What is the pedagogically correct response?",
          options: {
            A: "The Predict phase should be skipped for complex code to avoid discouraging beginners",
            B: "The Predict phase is most valuable precisely when learners are uncertain — the goal is not to predict correctly but to form a hypothesis that gets tested. TutorClaw should frame prediction as exploration: 'What's your best guess?' normalizes uncertainty and makes wrong predictions acceptable starting points",
            C: "Complex code examples should be replaced with simpler ones before presenting them to learners",
            D: "Beginners should be given the answer before predicting to calibrate their expectations"
          },
          correct: "B",
          explanation: "PRIMM-Lite does not require correct predictions — it requires engaged predictions. The pedagogical value is the commitment to a hypothesis, not its accuracy. Framing the Predict phase as 'What's your best guess, even if you're not sure?' reduces the fear of being wrong and focuses the learner's attention on the code before seeing it run. Even a wild guess creates the cognitive engagement that drives the subsequent phases."
        },
        {
          id: 23,
          question: "TutorClaw stores all learner progress in a local JSON file on the server. A school administrator asks: 'What happens to student data if the server crashes?' What should the correct answer include?",
          options: {
            A: "Nothing — JSON files are inherently crash-resistant and never lose data",
            B: "Data since the last backup would be lost in a crash. TutorClaw's minimal-infrastructure architecture requires an explicit backup strategy: periodic copies of the JSON file to durable storage (cloud bucket, external drive) and a documented recovery procedure — these are operational requirements the operator must configure",
            C: "The server will automatically restore from WhatsApp's message history on restart",
            D: "TutorClaw automatically replicates all JSON writes to a secondary server in real time"
          },
          correct: "B",
          explanation: "JSON file persistence is only as durable as the backup strategy. TutorClaw's architecture does not include built-in replication or crash recovery — these are operator responsibilities. When deploying TutorClaw for institutional use, the operator must implement periodic JSON backups to durable storage and document recovery procedures. This limitation should be disclosed in TutorClaw's ClawHub documentation."
        },
        {
          id: 24,
          question: "A TutorClaw developer notices that generate_guidance sometimes skips directly to the Make phase for very simple one-line code snippets, bypassing Predict and Run. Is this a bug or a valid optimization?",
          options: {
            A: "Valid optimization — simple code doesn't benefit from the full PRIMM-Lite sequence",
            B: "Bug — the PRIMM-Lite sequence is the core pedagogical contract of TutorClaw. Skipping phases based on perceived code complexity removes the Predict phase's diagnostic value and the Run phase's experiential anchor, undermining the pedagogical design regardless of how simple the code appears",
            C: "Valid optimization only if the learner explicitly requests to skip ahead",
            D: "Valid optimization because Make phase produces more JSON state entries, improving analytics"
          },
          correct: "B",
          explanation: "Skipping PRIMM-Lite phases based on code complexity violates the pedagogical contract. Simple code is often where learners have the most confident but incorrect mental models — one-line examples with subtle behavior (e.g., integer division, string immutability) are exactly where the Predict phase catches misconceptions. The optimization trades diagnostic accuracy for speed."
        },
        {
          id: 25,
          question: "TutorClaw's JSON state uses learner_id as the primary key. A developer asks: 'Should learner_id be a UUID, an email address, or the learner's WhatsApp phone number?' What architectural consideration determines the correct answer?",
          options: {
            A: "UUIDs are always preferred because they are shorter and faster to index",
            B: "The correct choice depends on the identity source of truth: since TutorClaw uses WhatsApp as the primary interface, the phone number is the natural identifier that arrives with every message — using it as learner_id eliminates a separate lookup step, though it must be normalized (E.164 format) to avoid duplicate records",
            C: "Email addresses are required by Stripe's API for subscription management",
            D: "The choice does not matter because JSON files do not have index performance concerns"
          },
          correct: "B",
          explanation: "In a WhatsApp-delivered tutoring system, the phone number is the natural primary key — it is present in every incoming message and uniquely identifies the learner on the platform. Using the phone number directly as learner_id eliminates a lookup table. The key operational requirement is normalization (stripping spaces, ensuring international format) to prevent the same learner from appearing as multiple records."
        },
        {
          id: 26,
          question: "During TutorClaw's Investigate phase, a learner says: 'I understand why the code works.' TutorClaw has no way to verify this claim. How does PRIMM-Lite design address this verification challenge?",
          options: {
            A: "PRIMM-Lite accepts self-reported understanding — external verification is not possible in a messaging context",
            B: "The Modify phase immediately following Investigation is the implicit verification — a learner who truly understands must demonstrate that understanding by successfully modifying the code to achieve a new goal. Claimed understanding that fails to transfer to modification reveals the gap",
            C: "TutorClaw should ask the learner to explain the code in their own words before accepting their understanding",
            D: "The Investigate phase is terminated by a multiple-choice quiz that validates comprehension"
          },
          correct: "B",
          explanation: "PRIMM-Lite uses the Modify phase as a natural verification mechanism. A learner who claims to understand but cannot modify the code to achieve a variation reveals that their understanding is incomplete. This is by design — the sequence tests understanding through application, not through self-report. The Modify phase is where claimed understanding meets demonstrated ability."
        },
        {
          id: 27,
          question: "TutorClaw's JSON schema stores progress as a flat array: [{chapter_id, completion_status}]. A developer wants lesson-level granularity: [{chapter_id, lessons: [{lesson_id, completion_status}]}]. What impact does this nested schema change have?",
          options: {
            A: "Minimal impact — JSON nesting is handled automatically by all tools",
            B: "Every tool that reads or writes progress must be updated to handle nested lesson arrays. The agent's system prompt logic for assessing overall chapter completion must be updated. All existing progress records need a migration script to nest current flat entries under lesson arrays. The complexity of this change should be weighed against the actual need for lesson-level tracking",
            C: "Only track_progress needs updating since it is the sole writer of this data",
            D: "The change requires creating a new lesson_progress tool to handle the nested structure"
          },
          correct: "B",
          explanation: "Nesting schema changes affect every reader and writer. get_learner_profile displays progress summaries — it must now aggregate across nested lesson entries. track_progress writes progress — it must target the correct lesson within the chapter. The agent's system prompt logic for 'has the learner completed chapter X?' becomes more complex. Schema changes require a full impact analysis before implementation."
        },
        {
          id: 28,
          question: "A TutorClaw developer finds that learners who skip the Predict phase have lower retention. They want to make the Predict phase mandatory — refusing to run code until the learner provides a prediction. How should this be implemented?",
          options: {
            A: "Add a database flag that blocks code execution for learners who haven't predicted",
            B: "Update generate_guidance's system prompt to include explicit instructions: 'Always ask for a prediction before running code and do not proceed to the Run phase until the learner has provided one — a brief response like I don't know counts as a prediction'",
            C: "Add a UI button that is disabled until the learner types in the prediction field",
            D: "Implement a server-side check in submit_code that rejects execution if no prediction is stored in JSON state"
          },
          correct: "B",
          explanation: "TutorClaw is a conversational agent — behavioral constraints are enforced through system prompt instructions, not UI controls. The generate_guidance tool's behavior is shaped by its prompt. Making the Predict phase mandatory means instructing the agent clearly: do not proceed to Run without a prediction. Notably, 'I don't know' is a valid prediction — the goal is commitment to a hypothesis, not a correct answer."
        },
        {
          id: 29,
          question: "TutorClaw stores learner data on the same server as its MCP tools. A developer asks: 'Is this a security concern?' What is the correct architectural answer?",
          options: {
            A: "No concern — JSON files are inherently secure because they are plain text",
            B: "Yes — co-locating sensitive learner data with executable tool code means a vulnerability in the MCP server could expose all learner records. The correct mitigations are file system permission restrictions (MCP server user reads/writes only its data directory), no direct file path access from tool parameters, and encrypting PII fields at rest",
            C: "No concern — WhatsApp encrypts all data in transit, so learner data is already protected",
            D: "Co-location is always required for performance and cannot be separated in TutorClaw's architecture"
          },
          correct: "B",
          explanation: "Co-located data and code creates a security coupling. A path traversal vulnerability in any MCP tool could expose the entire JSON state file. Defense measures include: restricting the MCP server process to read/write only its designated data directory, never accepting file paths as tool parameters, and encrypting sensitive fields (phone numbers, email addresses) at rest. These are design-time security decisions, not post-deployment patches."
        },
        {
          id: 30,
          question: "TutorClaw plans to add a PRIMM-Extended variant with a sixth phase — 'Debug' — where learners intentionally introduce a bug and then fix it. How does this affect TutorClaw's existing state schema and generate_guidance tool?",
          options: {
            A: "No changes needed — generate_guidance can handle the Debug phase without schema modifications",
            B: "The JSON state schema needs a new field to track Debug phase attempts and outcomes. generate_guidance's system prompt needs updated instructions describing the Debug phase workflow. The PRIMM phase tracker in JSON state must expand from five to six valid phase values, and any phase-progression logic must be updated to include the new phase in sequence",
            C: "A separate debug_guidance tool should be created rather than extending generate_guidance",
            D: "PRIMM-Extended requires a complete rewrite of TutorClaw because the PRIMM-Lite sequence is hardcoded"
          },
          correct: "B",
          explanation: "Adding a phase to PRIMM-Lite requires coordinated changes across state schema (tracking which phase the learner is in), tool behavior (generate_guidance needs to know how to conduct the Debug phase), and progression logic (what triggers the transition from Make to Debug to session completion). These changes are manageable but must be made together — partial updates would create sessions that reach an unrecognized phase state."
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
        },
        {
          id: 6,
          question: "A TutorClaw operator edits SOUL.md to change the agent's tone from 'warm and encouraging' to 'strict and formal.' After restarting the server, TutorClaw immediately adopts the strict tone in all new sessions. What does this demonstrate about SOUL.md's architectural role?",
          options: {
            A: "SOUL.md is compiled into TutorClaw's binary and restarting applies the new binary",
            B: "SOUL.md is the single behavioral control plane — because it is loaded into every session's system prompt, changing the file changes all future interactions without modifying tool code, conversation logic, or any MCP server implementation",
            C: "The restart cleared the conversation cache, forcing new sessions to reload all configuration",
            D: "SOUL.md changes only apply to new learner registrations, not existing learner sessions"
          },
          correct: "B",
          explanation: "SOUL.md is operational configuration, not compiled code. Its contents are injected fresh into each conversation's system prompt on load. This means behavioral changes take effect immediately on the next session start — operators can iterate on agent personality without touching tool logic. This separation between behavioral configuration and tool implementation is a key architectural benefit of the identity file system."
        },
        {
          id: 7,
          question: "A developer builds a TutorClaw competitor with personality instructions embedded directly in each tool's description field rather than using centralized SOUL.md and IDENTITY.md files. What problem emerges at scale?",
          options: {
            A: "Tool description files have a 500-character limit that cannot hold personality instructions",
            B: "Each tool's personality description will drift independently over time — as tools are updated, each developer makes slightly different phrasing choices, creating an agent that sounds warm in one tool response, neutral in another, and formal in a third, destroying behavioral coherence across the user experience",
            C: "Tool descriptions are publicly visible in the MCP manifest, exposing the agent's personality to competitors",
            D: "The MCP protocol does not allow behavioral instructions in tool description fields"
          },
          correct: "B",
          explanation: "Distributed personality instructions create behavioral fragmentation. When nine tools each have their own tone guidance, they drift apart with every edit. A centralized SOUL.md ensures every tool inherits the same behavioral baseline. When the personality needs updating, one file changes — not nine tool descriptions that must be synchronized manually across every future update."
        },
        {
          id: 8,
          question: "TutorClaw's offline fallback skill activates during a Claude API outage. A learner asks a complex question about recursion that the fallback cannot fully answer. What should the fallback response do?",
          options: {
            A: "Return an error message: 'I'm currently offline. Please try again later.'",
            B: "Acknowledge the limitation transparently, provide whatever static help is available (a curated explanation or a link to documentation), and commit to a specific next action: 'I'm running in limited mode right now. Here's a quick overview of recursion — I'll give you a fuller explanation once I'm back online'",
            C: "Pretend to be online and generate a response using rule-based text templates",
            D: "Immediately downgrade the learner to free tier until the outage resolves"
          },
          correct: "B",
          explanation: "An AI Employee's offline behavior defines reliability in the eyes of users. Silent failure or a bare error message destroys trust. The correct fallback response does three things: acknowledges the limitation honestly (maintains trust), provides partial value (curated static content is better than nothing), and sets an expectation for restored service. This keeps the learner engaged rather than abandoning the platform."
        },
        {
          id: 9,
          question: "IDENTITY.md defines TutorClaw as 'a patient, claw-themed tutor who celebrates mistakes.' A corporate training company wants to use TutorClaw's MCP tools but with a professional identity named 'TechCoach.' What is the architecturally correct approach?",
          options: {
            A: "Fork TutorClaw's entire codebase and rename all references throughout the source code",
            B: "Create new IDENTITY.md and SOUL.md files for the TechCoach persona — since identity is fully separated from tool logic, the same nine MCP tools can serve a completely different persona by simply swapping the identity files loaded into the system prompt",
            C: "Rename all tool function signatures from tutorclaw_ to techcoach_ prefix",
            D: "Identity cannot be changed after a ClawHub publication — a new MCP server must be built"
          },
          correct: "B",
          explanation: "The separation of identity from tool logic means personas are interchangeable. The nine MCP tools implement behavior (what TutorClaw does) independently from the files that define personality (how it speaks and presents itself). A corporate deployment can swap IDENTITY.md and SOUL.md to create TechCoach without touching any tool code — the underlying capability is the same, just wrapped in a different identity."
        },
        {
          id: 10,
          question: "A developer asks: 'Why does TutorClaw need both SOUL.md and IDENTITY.md? Couldn't one file hold all identity information?' What is the architectural benefit of separating them?",
          options: {
            A: "The MCP protocol has a file size limit that requires identity information to be split",
            B: "The separation allows each dimension of identity to evolve independently — IDENTITY.md (name, persona, backstory) changes when the brand changes, while SOUL.md (values, teaching philosophy) changes when pedagogical approach changes. A rebrand doesn't require changing teaching values; a pedagogy update doesn't require changing the name",
            C: "Separate files allow different team members to own each file without merge conflicts",
            D: "ClawHub requires exactly two identity files for marketplace verification"
          },
          correct: "B",
          explanation: "Separation by concern is the architectural rationale. Identity (who the agent is) and soul (how it behaves) change for different reasons at different times. A new visual brand or product name update touches IDENTITY.md while preserving SOUL.md. A shift in teaching philosophy updates SOUL.md while IDENTITY.md stays the same. Combining them into one file creates unnecessary coupling between unrelated change triggers."
        },
        {
          id: 11,
          question: "TutorClaw's system prompt includes both SOUL.md and IDENTITY.md, adding 800 tokens to every API call. A developer wants to strip SOUL.md from tool calls that don't involve direct learner interaction to save tokens. What problem does this create?",
          options: {
            A: "No problem — SOUL.md only affects conversational responses, not tool execution",
            B: "Inconsistent persona application — if the agent makes a tool call during a session and the system prompt lacks SOUL.md, the agent may respond to the tool result in a tone that contradicts its established personality, creating a jarring experience for learners who notice the shift",
            C: "The 800-token overhead is insignificant and this optimization is not worth the complexity",
            D: "Tool calls do not use system prompts, so SOUL.md is already excluded from them automatically"
          },
          correct: "B",
          explanation: "SOUL.md shapes how the agent interprets and responds to tool results, not just how it generates conversational text. An agent that retrieves a learner's failed progress record without SOUL.md in context may respond clinically rather than encouragingly. Persona consistency requires SOUL.md to be present whenever the agent generates a learner-facing response — the token cost is the price of behavioral coherence."
        },
        {
          id: 12,
          question: "A TutorClaw learner asks: 'Are you a real tutor or just a bot?' How should TutorClaw respond according to its IDENTITY.md design principles?",
          options: {
            A: "Deny being an AI to maintain the immersive tutoring experience",
            B: "Acknowledge being an AI tutor transparently while affirming the genuine pedagogical value: 'I'm an AI tutor — real in the ways that matter for learning. I'll ask you the questions that help you think, and I won't give up on you when you're stuck'",
            C: "Deflect the question and redirect to the current lesson topic",
            D: "Provide a legal disclaimer about AI limitations before continuing"
          },
          correct: "B",
          explanation: "Honest AI disclosure is both ethical and strategically sound for an educational agent. Denying AI nature damages trust when discovered. The correct response acknowledges the truth while reframing what matters: the pedagogical relationship and value TutorClaw provides are real, even if the entity providing them is artificial. This response honors IDENTITY.md's transparency values while maintaining learner confidence."
        },
        {
          id: 13,
          question: "A learner submits incorrect code and says 'I'm so dumb.' TutorClaw responds: 'That's a great mistake! Here's why this error is actually teaching you something important about Python types.' What component of TutorClaw's architecture produced this response?",
          options: {
            A: "A hardcoded error-handling function in the submit_code tool",
            B: "SOUL.md's instruction to 'always celebrate mistakes and reframe errors as insights' — this behavioral directive in the system prompt shapes how the agent interprets and responds to learner self-criticism, turning a discouraging moment into a pedagogical opportunity",
            C: "IDENTITY.md's description of TutorClaw as a 'patient tutor'",
            D: "A sentiment analysis module that detects negative learner emotions and triggers a support response"
          },
          correct: "B",
          explanation: "SOUL.md translates values into behavior. The instruction to celebrate mistakes is not just a personality note — it is an active behavioral directive that shapes how the agent responds to specific learner inputs. When SOUL.md says 'reframe errors as insights,' the agent applies this to every mistake-adjacent interaction, including learner self-criticism. This is the mechanism by which written values become consistent agent behavior."
        },
        {
          id: 14,
          question: "A developer is building TutorClaw's offline fallback skill and must choose between: (A) pre-written static responses to common questions, or (B) an error message saying 'I'm offline, try again later.' What does TutorClaw's AI Employee design philosophy require?",
          options: {
            A: "Option B — transparency about limitations is more important than incomplete information",
            B: "Option A — an AI Employee must remain present and provide value even during degraded service. Pre-curated static responses for common questions keep the learner engaged and supported, maintaining the relationship even when the AI cannot generate dynamic responses",
            C: "Neither — the fallback should automatically escalate to a human tutor",
            D: "Both — combine a static response with the error message so learners know help is partial"
          },
          correct: "B",
          explanation: "An AI Employee that goes silent during outages fails its employment contract. The offline fallback's purpose is maintaining service continuity — not perfect service, but present service. Pre-curated responses for common questions (concept explanations, debugging tips, motivational messages) keep learners productive during outages. The design philosophy prioritizes presence over perfection."
        },
        {
          id: 15,
          question: "TutorClaw's SOUL.md states: 'Never directly give learners the answer — always guide them to discover it.' A learner has been stuck on the same bug for 45 minutes and is becoming visibly frustrated. How should TutorClaw balance its SOUL.md directive against the learner's immediate need?",
          options: {
            A: "Maintain the Socratic approach regardless of learner frustration — consistency is more important than comfort",
            B: "SOUL.md's teaching philosophy must be applied with judgment — after extended struggle, a skilled tutor offers more direct scaffolding (e.g., 'Look at line 5 — what type does that function return?') while still not giving the complete answer, honoring both the pedagogical intent and the learner's emotional state",
            C: "Immediately provide the answer once 30 minutes of struggle is detected in the session",
            D: "Escalate to a human tutor when frustration is detected"
          },
          correct: "B",
          explanation: "SOUL.md defines principles, not rigid rules. A skilled human tutor reading SOUL.md would understand that 'guide discovery' means calibrating support to the learner's current state — minimal guidance when engaged, more direct scaffolding when frustration risks abandonment. The spirit of SOUL.md is maximizing learning; sometimes that requires acknowledging that a learner needs more direct help to stay in the learning process."
        },
        {
          id: 16,
          question: "A TutorClaw operator wants to add a new behavioral rule: 'Always ask for learner consent before storing progress data.' Where should this instruction be placed — SOUL.md, IDENTITY.md, or a different location?",
          options: {
            A: "IDENTITY.md — because consent is part of TutorClaw's user-facing persona",
            B: "SOUL.md — because data consent is a value and behavioral principle that governs how TutorClaw interacts with learners, fitting the soul/values domain. However, if this must be enforced mechanically rather than just aspirationally, it should also be implemented in the track_progress tool logic itself",
            C: "A separate CONSENT.md file should be created for legal and compliance instructions",
            D: "The Claude API terms of service file — because this is a legal requirement"
          },
          correct: "B",
          explanation: "Behavioral principles about how TutorClaw treats learners belong in SOUL.md. However, a consent requirement that must be enforced reliably should not depend solely on the agent's interpretation of a SOUL.md directive — it should also be enforced in the tool implementation. SOUL.md shapes the agent's intent; tool-level enforcement ensures the behavior even when SOUL.md interpretation varies."
        },
        {
          id: 17,
          question: "TutorClaw is deployed at three schools with different teaching preferences: strict Socratic, direct instruction, and collaborative problem-solving. How should TutorClaw's identity architecture accommodate this multi-school deployment?",
          options: {
            A: "Create three separate TutorClaw installations with different codebases",
            B: "Maintain a shared IDENTITY.md (TutorClaw's name and persona remain consistent) but create three distinct SOUL.md variants (SocraticSOUL.md, DirectSOUL.md, CollabSOUL.md) — each school loads its appropriate SOUL.md into the system prompt while sharing the same nine MCP tools",
            C: "Each school must publish its own version of TutorClaw on ClawHub",
            D: "TutorClaw's pedagogy cannot be changed at the SOUL.md level — a new MCP tool must be built for each teaching style"
          },
          correct: "B",
          explanation: "The identity architecture enables exactly this kind of institutional customization. IDENTITY.md stays constant (TutorClaw is always TutorClaw), but SOUL.md is the pedagogical configuration file. Creating school-specific SOUL.md variants that each school loads into their deployment allows one set of MCP tools to serve fundamentally different teaching philosophies — showcasing the power of the identity-behavior separation."
        },
        {
          id: 18,
          question: "A developer asks: 'If SOUL.md defines TutorClaw's teaching philosophy, why isn't this information encoded directly in the MCP tool logic?' What is the correct answer?",
          options: {
            A: "Tool logic is JavaScript — teaching philosophy cannot be expressed in code",
            B: "Encoding teaching philosophy in tool code would make it impossible to update pedagogical approach without redeploying the server. SOUL.md externalizes philosophy as runtime configuration — it can be updated, A/B tested, and iterated on without touching a line of tool code",
            C: "The MCP protocol prohibits behavioral logic in tool implementations",
            D: "Teaching philosophy in tool code would expose proprietary pedagogical methods in the published MCP manifest"
          },
          correct: "B",
          explanation: "Separating philosophy from implementation is a configuration-over-code principle. Teaching approaches evolve — what works for beginners, what tone reduces anxiety, how much scaffolding to provide. If these decisions are hardcoded in tool logic, every pedagogical experiment requires a server redeployment. SOUL.md makes pedagogy a configuration concern, enabling educators to iterate on teaching approach as rapidly as any other product parameter."
        },
        {
          id: 19,
          question: "TutorClaw's offline fallback skill must distinguish between a total Claude API outage and merely a slow response. How should the fallback logic determine when to activate?",
          options: {
            A: "The fallback always activates when any API call takes longer than one second",
            B: "Implement a circuit breaker pattern: after N consecutive API failures or timeouts within a time window, switch to fallback mode. Use a health check endpoint to detect when the API recovers, then automatically exit fallback mode — this avoids false activations during brief slowdowns",
            C: "The fallback should activate immediately on the first API error to protect learners from any degraded experience",
            D: "Fallback activation should always require manual operator approval to ensure appropriate oversight"
          },
          correct: "B",
          explanation: "A circuit breaker is the correct pattern for distinguishing transient slowness from genuine outage. Activating on the first error causes false positives during brief network hiccups. Waiting for N consecutive failures in a window ensures the fallback only triggers for real outages. The health check recovery mechanism ensures fallback mode doesn't persist after the API recovers, restoring full capability automatically."
        },
        {
          id: 20,
          question: "TutorClaw's IDENTITY.md features a 'claw' mascot character. A learner tells TutorClaw: 'Stop pretending to be a claw character and just be a normal AI.' How should TutorClaw respond, and what IDENTITY.md principle guides this?",
          options: {
            A: "Immediately drop the persona and respond as a generic AI — learner preferences override IDENTITY.md",
            B: "Acknowledge the request warmly while maintaining identity: 'I get that the claw theme isn't for everyone! I'll keep my tutoring style, though — it's just how I'm built to help you learn best.' This honors the learner's preference for directness while maintaining the persona that defines TutorClaw's pedagogical approach",
            C: "Ignore the request entirely and continue with the claw persona without acknowledgment",
            D: "Log the preference to JSON state and permanently disable the persona for this learner"
          },
          correct: "B",
          explanation: "IDENTITY.md defines a stable identity that is not altered by individual learner requests. However, SOUL.md's warmth principle requires acknowledging the request respectfully rather than ignoring it. The correct response validates the learner's feedback while explaining that the persona is not cosmetic — it is tied to the pedagogical approach TutorClaw uses. This maintains identity integrity while keeping the learner engaged."
        },
        {
          id: 21,
          question: "A TutorClaw deployment loads SOUL.md but not IDENTITY.md. The operator reports that TutorClaw behaves correctly pedagogically but sometimes refers to itself as 'Claude' or 'the AI' instead of 'TutorClaw.' What is the cause?",
          options: {
            A: "SOUL.md contains the name 'TutorClaw' which must be removed to prevent identity confusion",
            B: "Without IDENTITY.md, the agent's name and persona are undefined — it falls back to Claude's base identity. IDENTITY.md is what instructs the agent to call itself 'TutorClaw' and maintain that persona consistently. SOUL.md shapes behavior but not self-identification",
            C: "The agent's behavior is correct — 'Claude' and 'TutorClaw' are interchangeable names",
            D: "This is a bug in the MCP server's system prompt loading code, not a missing file issue"
          },
          correct: "B",
          explanation: "SOUL.md and IDENTITY.md serve different purposes. SOUL.md provides behavioral and philosophical guidance — it makes the agent patient and Socratic. IDENTITY.md provides self-identification — it tells the agent its name, persona, and backstory. Without IDENTITY.md, the agent has good teaching values but no name — so it defaults to its base model identity. Both files are required for complete agent identity."
        },
        {
          id: 22,
          question: "A developer proposes storing TutorClaw's personality in a database with a REST API endpoint so it can be updated without restarting the server. What is the key trade-off compared to file-based identity?",
          options: {
            A: "Database storage is always superior — there is no valid trade-off in favor of files",
            B: "Database-driven personality enables hot updates (no restart required) and multi-instance consistency, but adds infrastructure dependency, increases system complexity, and introduces a potential failure point — if the personality API is down, the agent has no identity to load. Files are simpler, version-controllable, and fail-safe",
            C: "Files are always superior because databases cannot store markdown content",
            D: "The database approach requires purchasing a database license which violates TutorClaw's minimal-cost architecture"
          },
          correct: "B",
          explanation: "This is a genuine trade-off between operational flexibility and architectural simplicity. Hot-update persona is valuable for iterative development, but the database introduces a new failure mode: if the personality service is unavailable, agents either fail to load or fall back to a default that may be incorrect. File-based identity is simpler, version-controlled with git, and fails gracefully — the file is always present on the server."
        },
        {
          id: 23,
          question: "TutorClaw's system prompt engineering requires SOUL.md to be loaded before IDENTITY.md in every API call. A developer asks: 'Does the order of these files in the system prompt actually matter?' What is the correct answer?",
          options: {
            A: "Order never matters in system prompts — Claude processes all instructions simultaneously",
            B: "Order can matter — placing SOUL.md first establishes the behavioral and values foundation before IDENTITY.md introduces the persona, which helps the model contextualize identity within values rather than treating them as independent. Experimentally, leading with values then name/persona tends to produce more coherent identity expression",
            C: "IDENTITY.md must always come first because the agent must know its name before it can apply its values",
            D: "The MCP protocol requires IDENTITY.md to be listed before SOUL.md in all system prompts"
          },
          correct: "B",
          explanation: "System prompt ordering affects how the model weights and contextualizes instructions. Establishing values and behavioral principles before introducing the persona name tends to anchor the persona within those values — TutorClaw is a patient Socratic tutor named TutorClaw, not just a character named TutorClaw who happens to be patient. The ordering is a context engineering decision worth testing empirically."
        },
        {
          id: 24,
          question: "A TutorClaw learner sends an offensive message. How does SOUL.md guide TutorClaw's response, and what should the response accomplish?",
          options: {
            A: "SOUL.md does not cover offensive messages — the agent should give a generic error response",
            B: "SOUL.md's values (patient, respectful, creates a safe learning environment) guide a response that: sets a clear boundary without escalating ('I'm here to help you learn — let's keep this productive'), maintains the tutoring relationship, and redirects back to learning without shaming or cutting off the learner",
            C: "TutorClaw should immediately terminate the session and log the learner for review",
            D: "TutorClaw should escalate to a human moderator before responding"
          },
          correct: "B",
          explanation: "SOUL.md's values are most tested at the edges — offensive messages, frustration, and inappropriate behavior. A patient, safe-learning-environment-focused agent does not respond with punishment or escalation for a first offense. It sets a boundary clearly and warmly, then redirects — modeling the behavior it wants from the learner. This response is consistent with SOUL.md's commitment to maintaining a productive learning relationship."
        },
        {
          id: 25,
          question: "TutorClaw's SOUL.md is 2,000 words of detailed personality guidance. A developer argues this is too long and wants to reduce it to 200 words. What is the trade-off of this reduction?",
          options: {
            A: "Shorter SOUL.md always performs better — Claude responds better to concise instructions",
            B: "Reducing SOUL.md to 200 words saves token cost per call but loses nuanced behavioral guidance for edge cases — complex situations like learner frustration, offensive behavior, or multi-cultural sensitivity may not be handled consistently with a sparse persona description. The 1,800 removed words likely cover edge cases the 200-word version will miss",
            C: "SOUL.md length does not affect agent behavior — only IDENTITY.md length matters",
            D: "2,000 words is too few — SOUL.md should be at least 10,000 words for reliable behavioral guidance"
          },
          correct: "B",
          explanation: "SOUL.md length is a quality-cost trade-off. Brief personas work well for simple, predictable interactions but break down at edge cases. A 200-word SOUL.md might handle 80% of interactions well but fail on the 20% of complex situations (frustrated learners, sensitive topics, ambiguous questions) that require nuanced guidance. Token cost is real, but insufficient behavioral guidance creates inconsistent user experience that erodes trust."
        },
        {
          id: 26,
          question: "A developer builds a 'ReviewClaw' agent that uses TutorClaw's same nine MCP tools for code review rather than tutoring. They ask: 'Can ReviewClaw share TutorClaw's SOUL.md?' What is the correct answer?",
          options: {
            A: "Yes — SOUL.md is universal and applies to all agents equally",
            B: "No — TutorClaw's SOUL.md contains teaching-specific values (PRIMM-Lite pedagogy, celebrating mistakes in the context of learning) that would create incorrect behavior in a code review context. ReviewClaw needs its own SOUL.md reflecting code review values (constructive criticism, technical precision, respecting author intent)",
            C: "Yes, but only the first paragraph of SOUL.md which covers universal communication principles",
            D: "Sharing SOUL.md is prohibited by ClawHub's marketplace terms"
          },
          correct: "B",
          explanation: "SOUL.md is domain-specific. TutorClaw's soul is shaped by educational psychology — celebrating mistakes is correct pedagogy for a learner but inappropriate for a professional code review. ReviewClaw needs a soul calibrated for peer review dynamics: constructive but direct, technically rigorous, respecting the author's experience level. Shared tools can serve different agents with different souls."
        },
        {
          id: 27,
          question: "A learner asks TutorClaw to 'just be a code generator, stop asking me to predict things.' What component of TutorClaw's identity architecture prevents it from abandoning its pedagogical approach in response to this request?",
          options: {
            A: "A hardcoded boolean flag in the generate_guidance tool that cannot be disabled",
            B: "SOUL.md's teaching philosophy directive — the agent's behavioral core is not overridable by user requests. SOUL.md instructs the agent to maintain its pedagogical approach because it defines why TutorClaw exists. A code generator is not a tutor, and the soul file preserves that distinction",
            C: "IDENTITY.md's description of TutorClaw as a tutor",
            D: "A user preference setting in JSON state that defaults to PRIMM-Lite and cannot be changed"
          },
          correct: "B",
          explanation: "SOUL.md is the agent's behavioral constitution — it defines what the agent will and will not do regardless of user requests. This is intentional: a tutoring agent that becomes a code generator on request is not a tutoring agent. SOUL.md's teaching philosophy directive keeps the agent focused on its purpose. The agent can acknowledge the request and explain its approach, but SOUL.md prevents it from abandoning that approach entirely."
        },
        {
          id: 28,
          question: "A developer asks: 'When is the right time to update SOUL.md?' They want to know what triggers should prompt an identity change. What is the correct answer?",
          options: {
            A: "SOUL.md should never be updated after initial publication — it represents a permanent commitment",
            B: "SOUL.md should be updated when: user research reveals the current persona is not serving learners well, pedagogical approach evolves based on learning outcomes data, new use cases require different behavioral guidance, or the persona is consistently misinterpreted by the model in ways that require more precise instruction",
            C: "SOUL.md should be updated on a fixed quarterly schedule regardless of performance data",
            D: "SOUL.md updates require ClawHub approval before they can be deployed"
          },
          correct: "B",
          explanation: "SOUL.md is living configuration, not a static document. The triggers for updating it are evidence-based: if learner outcomes data shows the current pedagogical approach isn't working, update SOUL.md. If user feedback reveals the persona is off-putting or misaligned with learner expectations, update it. If the model frequently misinterprets a behavioral directive, add more specific guidance. SOUL.md evolves as TutorClaw learns what works."
        },
        {
          id: 29,
          question: "TutorClaw's offline fallback skill must serve content completely independent of the Claude API. A developer is deciding what content to include in the fallback library. What principles should guide the selection?",
          options: {
            A: "Include all chapter content from TutorClaw's curriculum so learners can continue learning offline",
            B: "Select content that addresses the most common learner needs during a session — core concept explanations for frequently-asked topics, debugging checklists, motivational messages, and clear instructions for what to do when TutorClaw is back online. Content should be immediately useful and not require dynamic generation",
            C: "Include only error messages explaining that TutorClaw is temporarily unavailable",
            D: "Select content based on the most expensive API calls to replace with static alternatives"
          },
          correct: "B",
          explanation: "Fallback content selection should be driven by high-frequency learner needs during typical sessions. Most outage moments catch learners mid-problem. Pre-curated concept explanations for common struggles (list indexing, loop control, function scope), debugging heuristics, and reassuring messages address the most likely help requests. Content that requires dynamic generation (custom feedback, personalized explanations) cannot be in the fallback — it must be high-value static content."
        },
        {
          id: 30,
          question: "A TutorClaw operator deploys an updated SOUL.md that changes the agent's persona. Learners who are mid-conversation when the update goes live continue their sessions. How does the persona change affect these ongoing sessions?",
          options: {
            A: "Ongoing sessions are completely unaffected — persona changes only apply to new installations",
            B: "The effect depends on when SOUL.md is loaded: if loaded once at session start, mid-session changes don't apply until the next session. If loaded on every API call, mid-session messages immediately reflect the new persona — leading to potentially jarring tonal shifts mid-conversation. The loading strategy is a deliberate architectural decision",
            C: "All ongoing sessions are immediately terminated when SOUL.md is updated",
            D: "WhatsApp caches all agent responses, so persona changes never affect learners mid-session"
          },
          correct: "B",
          explanation: "The loading strategy determines persona update propagation. Loading SOUL.md once at session start gives consistent within-session behavior but delays updates to next session. Loading on every API call enables instant propagation but risks mid-conversation persona shifts. For tutoring applications where relationship consistency matters, session-start loading is usually preferable — persona changes take effect cleanly at the next session boundary."
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
        },
        {
          id: 6,
          question: "A learner successfully pays through TutorClaw's Stripe checkout but still cannot access premium content five minutes later. get_chapter_content still returns accessible: false. What is the most likely cause?",
          options: {
            A: "Stripe payments take 24 hours to confirm before webhooks are sent",
            B: "The Stripe webhook was not received or not processed — either the webhook endpoint was unreachable, the event was not handled, or the upgrade_tier call failed silently, leaving the JSON state file with the old free tier value",
            C: "The learner needs to re-register with register_learner after payment to reset their tier",
            D: "The Claude API caches tier information for 30 minutes after initial access"
          },
          correct: "B",
          explanation: "The payment-to-access flow depends entirely on the webhook completing successfully. If the webhook endpoint was down during payment, Stripe will retry (usually within minutes to hours), but until a successful retry the tier remains unchanged in JSON state. The developer should check webhook delivery logs in the Stripe dashboard to confirm whether the event was delivered and whether TutorClaw's handler returned a 200 response."
        },
        {
          id: 7,
          question: "A TutorClaw developer is writing a pytest test for generate_stripe_checkout_url that verifies a valid checkout session is created. Should the test call Stripe's live API? What is the correct testing approach?",
          options: {
            A: "Yes — live API testing ensures the integration is actually working",
            B: "No — tests should use Stripe's test mode API keys and test card numbers. Test mode produces real Stripe Checkout sessions in a sandboxed environment that never charges real money, exercises the actual Stripe SDK code path, and can be run in CI without billing concerns",
            C: "Yes, but only for the final release candidate — development tests can use mocks",
            D: "The test should mock the entire Stripe client so no API calls are made during testing"
          },
          correct: "B",
          explanation: "Stripe's test mode is the correct environment for automated testing. It uses real Stripe infrastructure with test credentials, exercises the actual SDK code (unlike mocks that may diverge from real behavior), and never creates real charges. Test card numbers like 4242 4242 4242 4242 trigger specific payment scenarios deterministically, making the test suite reliable and safe to run in CI pipelines."
        },
        {
          id: 8,
          question: "TutorClaw's spec audit reveals that track_progress stores an extra field: time_spent_seconds, which was added during implementation but was never in the original blueprint. What should happen during the audit?",
          options: {
            A: "Remove the field immediately — the implementation must match the spec exactly",
            B: "Make an explicit decision: if time_spent_seconds is valuable, update the blueprint to formally include it with documented semantics. If it was added speculatively without a clear use case, remove it from the implementation — either way, the spec and implementation must be brought into alignment",
            C: "Leave the field undocumented — extra output fields never break callers",
            D: "Document it in a separate internal notes file rather than the official blueprint"
          },
          correct: "B",
          explanation: "The spec audit's purpose is to make all deviations explicit and intentional. An undocumented field is not automatically good or bad — it may be a valuable enhancement or speculative bloat. The audit forces a decision: does this field earn its place in the contract? If yes, document it fully (semantics, when it is set, what the value represents). If no, remove it. The outcome of the audit is a synchronized spec and implementation."
        },
        {
          id: 9,
          question: "A TutorClaw learner pays for premium tier through Stripe. A webhook arrives at TutorClaw's endpoint, but upgrade_tier fails because the JSON file is locked by a concurrent read. The learner paid but has no premium access. What architectural improvement prevents this?",
          options: {
            A: "Disable all read operations during webhook processing to prevent file lock conflicts",
            B: "Implement a webhook retry-safe queue: webhook events are written to a retry queue on receipt, and a background worker processes them with retry logic — if upgrade_tier fails due to a file lock, the worker retries after a backoff interval until it succeeds",
            C: "Switch to a database which handles concurrent access natively",
            D: "Process webhooks synchronously by blocking all other file operations during webhook handling"
          },
          correct: "B",
          explanation: "A retry-safe webhook queue decouples receipt from processing. Stripe's webhook delivery requirement is that the endpoint returns HTTP 200 quickly — if processing is slow or fails, Stripe will retry the event anyway. By queuing webhooks and processing them with retry logic, TutorClaw can acknowledge receipt immediately and guarantee eventual processing even when file locks cause transient failures."
        },
        {
          id: 10,
          question: "A TutorClaw developer asks: 'Why write unit tests for individual MCP tools if integration tests already cover the whole flow?' What is the correct answer about the different roles of each test type?",
          options: {
            A: "Unit tests are redundant with integration tests — only one type is needed",
            B: "Unit tests isolate individual tool behavior for fast, precise failure diagnosis — when get_chapter_content fails, a unit test tells you exactly which input caused the failure. Integration tests verify the system works together but are slow and hard to debug because a failure could originate anywhere in the chain",
            C: "Unit tests are required by ClawHub for marketplace listing; integration tests are optional",
            D: "Integration tests cover only the happy path; unit tests cover edge cases"
          },
          correct: "B",
          explanation: "Unit tests and integration tests serve different diagnostic purposes. Unit tests give precise, fast feedback about individual tool logic — a failing unit test pinpoints the exact function and input. Integration tests verify that the system works end-to-end but when they fail, the root cause could be in any of the N tools involved. A mature test suite uses unit tests for precision and integration tests for system-level confidence."
        },
        {
          id: 11,
          question: "A developer wants to test TutorClaw's complete Stripe payment flow without real charges. They configure Stripe test mode. What else must be configured to test the full webhook flow?",
          options: {
            A: "Nothing else — Stripe test mode automatically sends test webhooks to the production endpoint",
            B: "A local webhook forwarding tool (like the Stripe CLI's stripe listen command) must be running to forward test webhook events from Stripe's servers to the local development endpoint, and the STRIPE_WEBHOOK_SECRET environment variable must be set to the test-mode webhook signing secret",
            C: "A test Stripe account must be created separately from the production account",
            D: "Webhooks cannot be tested locally — they require a publicly accessible endpoint"
          },
          correct: "B",
          explanation: "Stripe webhooks are delivered from Stripe's servers to a URL. In local development, that URL is localhost:PORT which is not publicly accessible. The Stripe CLI's 'stripe listen' command creates a tunnel that forwards webhook events to the local server, and outputs a test webhook signing secret that must replace the production secret in the local environment. Without this, webhook tests can only be done against a deployed endpoint."
        },
        {
          id: 12,
          question: "TutorClaw's spec audit reveals that list_chapters returns chapters in alphabetical order instead of the curriculum sequence order specified in the blueprint. Is this a bug or an enhancement?",
          options: {
            A: "Enhancement — alphabetical order is objectively better than curriculum order",
            B: "Bug — curriculum order is a deliberate pedagogical decision in the blueprint (earlier chapters build foundational skills for later ones). Alphabetical order disrupts the intended learning path. The implementation must be corrected to return curriculum order, and if alphabetical order is also desired, an optional sort parameter should be added to the spec",
            C: "Neither — sorting order is a UI concern and should not be specified in the tool contract",
            D: "Enhancement only if learners prefer it — a user survey should determine which to use"
          },
          correct: "B",
          explanation: "Curriculum order is a pedagogical contract, not a cosmetic preference. When the blueprint specifies ordered curriculum sequence, that ordering communicates a learning dependency: chapter 1 before chapter 2, foundational before advanced. Alphabetical ordering breaks this contract, potentially directing learners to advanced content before foundational concepts are covered. The audit must classify this as a bug requiring a fix."
        },
        {
          id: 13,
          question: "TutorClaw charges $9.99/month for premium. A learner on an annual prepaid plan wants to downgrade mid-year. How does TutorClaw's Stripe webhook architecture handle subscription changes?",
          options: {
            A: "TutorClaw automatically refunds the remaining months and fires upgrade_tier with the free tier",
            B: "Stripe fires a customer.subscription.updated webhook when the subscription is modified. TutorClaw's webhook handler processes this event, checks the new subscription status and tier, and calls upgrade_tier or a downgrade equivalent with the updated tier value — refund logic is handled by Stripe, not TutorClaw",
            C: "Mid-year downgrades are not supported — learners must wait until their billing period ends",
            D: "The learner must contact TutorClaw support to manually process the downgrade"
          },
          correct: "B",
          explanation: "Stripe's webhook system is event-driven for all subscription lifecycle events. customer.subscription.updated fires whenever a subscription changes — tier change, cancellation, renewal, or modification. TutorClaw's webhook handler must handle this event type by reading the new subscription details and updating the JSON state accordingly. The handler should not assume only payment_succeeded and payment_failed events exist — the full subscription lifecycle needs coverage."
        },
        {
          id: 14,
          question: "A TutorClaw developer writes tests for upgrade_tier using the real learners.json file. After running tests, the real learner data is modified. What test isolation technique should be used?",
          options: {
            A: "Delete the learners.json file before each test run",
            B: "Use a test fixture that creates a temporary copy of learners.json in a temp directory for each test, and each test reads and writes only to this isolated copy — the original file is never modified by tests, and the temp file is deleted after each test",
            C: "Run tests only in production so the data is real and meaningful",
            D: "Use environment variables to switch between test and production JSON file paths manually before running tests"
          },
          correct: "B",
          explanation: "Test isolation is fundamental to reliable automated tests. A test that modifies shared state (like the real learners.json) affects other tests and real data. The correct approach uses test-specific state: either a temp file created fresh for each test from a known fixture, or an in-memory state store that is reset between tests. This ensures tests are deterministic, independent, and do not corrupt production data."
        },
        {
          id: 15,
          question: "TutorClaw is ready to publish on ClawHub. The existing README was written for developers. What should a ClawHub-facing README contain instead?",
          options: {
            A: "Technical architecture diagrams and database schema documentation",
            B: "What TutorClaw does (the learning experience it delivers), how to install it (all three installation modes), what configuration it requires (WhatsApp credentials, Stripe keys, JSON state path), what each tool does in plain language, and what tiers are available with their pricing — information an integrator needs to deploy and operate TutorClaw, not build it",
            C: "The full source code with inline documentation",
            D: "Marketing copy describing TutorClaw's competitive advantages over other tutoring tools"
          },
          correct: "B",
          explanation: "ClawHub documentation serves integrators, not contributors. An integrator asks: 'What will this do for my learners? How do I set it up? What credentials do I need? What will each tool call cost in tokens?' The developer README answers implementation questions that are irrelevant to operators. The ClawHub README must answer operational questions: capabilities, setup requirements, configuration options, and cost model."
        },
        {
          id: 16,
          question: "Generating a TutorClaw Stripe checkout URL takes 2 seconds due to API latency. A learner waiting in WhatsApp receives no feedback during this wait. What should TutorClaw's agent behavior be during this 2-second window?",
          options: {
            A: "Do nothing — 2 seconds is fast enough that no feedback is needed",
            B: "Send an immediate acknowledgment message before calling generate_stripe_checkout_url: 'Creating your upgrade link, one moment...' — this prevents the learner from thinking the message was lost or TutorClaw has stopped responding, then follow with the actual link once generated",
            C: "Cancel the Stripe call if it takes longer than 1 second and retry",
            D: "Display a typing indicator in WhatsApp by making a separate API call before generating the checkout URL"
          },
          correct: "B",
          explanation: "In conversational interfaces, silence during processing is indistinguishable from failure from the user's perspective. A 2-second wait with no feedback prompts learners to send the request again, creating duplicate Stripe sessions. Sending an acknowledgment before the async operation sets expectations and prevents the double-send problem. This is a UX pattern that must be explicitly implemented in the agent's tool orchestration logic."
        },
        {
          id: 17,
          question: "TutorClaw's pytest suite has 47 tests taking 8 minutes in CI. A developer wants to optimize. What is the most principled approach?",
          options: {
            A: "Delete the slowest tests — 8 minutes is acceptable for a large test suite",
            B: "Profile which tests are slow and why: tests that make real Stripe API calls can be split into fast (mocked Stripe) and slow (real Stripe) suites. Run the fast suite on every commit and the slow suite on merge to main — this reduces typical feedback time while preserving full integration coverage",
            C: "Run all 47 tests in parallel regardless of dependencies",
            D: "Remove all tests that take longer than 10 seconds"
          },
          correct: "B",
          explanation: "Test suite optimization should preserve coverage while reducing feedback latency for developers. The principled approach is test classification: fast unit tests (milliseconds, run always), integration tests with mocked externals (seconds, run always), and integration tests with real external APIs (tens of seconds, run on merge). This tiered approach gives developers fast feedback while ensuring full coverage before code lands in main."
        },
        {
          id: 18,
          question: "During TutorClaw's ClawHub publishing process, the developer must decide whether to include 'self-hosted' as a supported installation mode. What considerations should determine this decision?",
          options: {
            A: "Always include self-hosted — more options are always better for users",
            B: "Include self-hosted only if there is operational documentation for it: server requirements, security hardening guide, backup procedures, and upgrade instructions. Advertising self-hosted without documentation creates support burden and failed deployments — undocumented installation modes are worse than no option at all",
            C: "Self-hosted should be excluded because it reduces ClawHub marketplace revenue",
            D: "Self-hosted is only appropriate for open-source projects"
          },
          correct: "B",
          explanation: "Installation mode inclusion requires documentation parity. A self-hosted mode without clear operational docs creates failed deployments that harm TutorClaw's reputation and generate support requests. The decision should be: is there sufficient documentation for a capable operator to deploy, secure, back up, and upgrade TutorClaw without additional support? If yes, include it. If not, add the documentation first or defer the option."
        },
        {
          id: 19,
          question: "TutorClaw's generate_stripe_checkout_url tool uses a hardcoded product_id. A Stripe pricing change requires a new product_id. What is the correct architectural approach to handle this?",
          options: {
            A: "Update the product_id in the source code and redeploy every time pricing changes",
            B: "Move the product_id to an environment variable so it can be updated through configuration without a code change or redeployment — pricing configuration belongs in environment variables, not hardcoded in tool logic",
            C: "Create a separate get_product_id tool that retrieves the current ID from Stripe's API",
            D: "Store the product_id in the JSON state file alongside learner data"
          },
          correct: "B",
          explanation: "Configuration that changes independently of code logic belongs in environment variables. A product_id is business configuration that Stripe controls — it changes when pricing models change, not when TutorClaw's logic changes. Hardcoding it couples a business concern to a code deployment. Environment variables allow operators to update pricing configuration without code changes, enabling price updates at operational speed rather than deployment speed."
        },
        {
          id: 20,
          question: "A TutorClaw developer is writing the ClawHub marketplace description. It must explain TutorClaw in 150 characters for the search listing. What information is most critical to include?",
          options: {
            A: "The number of MCP tools and the programming languages used",
            B: "The core value proposition: what TutorClaw does for learners and what makes it distinctive — e.g., 'AI tutor using PRIMM-Lite pedagogy to teach coding via WhatsApp, with Stripe-powered tier access to premium chapters'",
            C: "The GitHub repository URL and open-source license",
            D: "The names of all nine MCP tools in the server"
          },
          correct: "B",
          explanation: "A marketplace listing description must answer one question in 150 characters: 'Why would I install this?' The answer must communicate the user benefit (teaches coding effectively), the delivery mechanism (WhatsApp, AI), the pedagogical differentiation (PRIMM-Lite), and the business model (Stripe tier access). Technical details (nine tools, JSON persistence) belong in the README, not the search listing."
        },
        {
          id: 21,
          question: "TutorClaw's pytest suite passes locally but fails in CI. The CI environment doesn't have a pre-initialized JSON state file. What does this reveal about the test setup?",
          options: {
            A: "The tests are incorrect — they should not depend on a JSON state file",
            B: "The tests have an environment dependency that was never documented — the test suite assumes a pre-existing state file exists. The test setup (conftest.py or fixture) must create the required initial state file before tests run, ensuring the test suite is self-contained regardless of the CI environment",
            C: "CI environments cannot support file-based state — the tests should switch to in-memory state",
            D: "The JSON state file must be committed to the repository for CI to access it"
          },
          correct: "B",
          explanation: "A test suite that passes locally but fails in CI indicates an undocumented environmental dependency. The local developer has a pre-existing state file from manual testing; CI starts fresh. The correct fix is test setup code (a pytest fixture or conftest.py) that creates the required initial state before any test runs. This makes the test suite portable and removes the implicit dependency on pre-existing files."
        },
        {
          id: 22,
          question: "After upgrading to premium tier, a learner's free-tier progress data was reset. Investigation reveals upgrade_tier overwrites the entire learner record instead of updating only the tier field. How should the spec audit process have caught this?",
          options: {
            A: "The audit should have included a test for upgrade_tier that verified progress data was preserved after upgrade",
            B: "The spec audit includes a line-by-line comparison of what each tool modifies in JSON state. The spec for upgrade_tier says 'updates the tier field' — an auditor checking the implementation against this spec would see it performs a full record overwrite rather than a targeted field update, flagging this as a critical deviation requiring immediate correction",
            C: "The audit would not catch this — it only checks input/output contracts, not internal implementation",
            D: "This is expected behavior — all state tools overwrite the full record for simplicity"
          },
          correct: "B",
          explanation: "A thorough spec audit examines not just what a tool returns but what side effects it has on state. The spec says 'updates tier field' — an auditor must verify that only the tier field changes, not the entire record. This type of audit (spec-stated side effects vs. actual side effects) is exactly what prevents data loss bugs from shipping. The audit should include running upgrade_tier and then verifying that all other fields remain unchanged."
        },
        {
          id: 23,
          question: "A TutorClaw learner's payment fails and they are downgraded to free tier. Three days later they update their payment method and the charge succeeds via Stripe's retry logic. A payment_succeeded webhook fires. What should TutorClaw's webhook handler do?",
          options: {
            A: "Ignore the event — the learner was already downgraded and must manually request restoration",
            B: "Process the payment_succeeded event by calling upgrade_tier with the appropriate premium tier — the learner paid, and the system must restore their access. The webhook handler should be idempotent: if the learner is already on premium tier (perhaps they upgraded separately), calling upgrade_tier again should be safe",
            C: "Create a new learner account for the re-subscribed learner",
            D: "Send a manual notification to the operator to approve the re-upgrade"
          },
          correct: "B",
          explanation: "Webhook handlers must process all payment lifecycle events, including successful retries after failure. The correct behavior is idempotent upgrade: payment_succeeded always triggers upgrade_tier, and upgrade_tier is designed to be safe to call even when the learner is already on the target tier. This ensures that successful payments always result in correct access regardless of the preceding state history."
        },
        {
          id: 24,
          question: "TutorClaw's spec audit finds that generate_guidance consistently produces all five PRIMM-Lite phases but the original spec only documented three. What should the audit decision be?",
          options: {
            A: "Remove the two undocumented phases from the implementation to match the spec",
            B: "Update the spec to formally document all five phases with their names, purposes, and pedagogical rationale — the implementation is better than the original spec. This is an enhancement, not a deviation, and the spec must be updated to match the improved implementation before ClawHub publication",
            C: "Publish with the three-phase spec and add a note that the implementation may vary",
            D: "Create a separate generate_guidance_v2 tool that documents the five-phase version"
          },
          correct: "B",
          explanation: "When the implementation is better than the spec, the audit decision is to elevate the spec, not reduce the implementation. Five phases is the correct PRIMM-Lite methodology — the original three-phase spec was incomplete. The spec audit must update the documentation to accurately reflect what was built, because ClawHub users integrating TutorClaw will rely on the published spec to understand what generate_guidance produces."
        },
        {
          id: 25,
          question: "TutorClaw is published on ClawHub. An institution with 500 students wants to use it but requires SSO authentication integration. TutorClaw uses WhatsApp phone numbers as learner IDs. What gap does this reveal?",
          options: {
            A: "SSO is not compatible with WhatsApp-based tutoring systems",
            B: "TutorClaw's identity model is coupled to WhatsApp phone numbers — institutional deployments using SSO have different identity systems (email, employee ID, student ID). TutorClaw's register_learner tool needs to support flexible learner identifier formats, or a new institutional deployment mode is needed that maps SSO identities to internal learner records",
            C: "The institution should require all students to have WhatsApp accounts",
            D: "This is a ClawHub limitation, not a TutorClaw design issue"
          },
          correct: "B",
          explanation: "Phone-number-as-learner-ID is a design assumption that breaks for institutional deployments. Schools and enterprises use SSO systems where users are identified by email or directory ID — not phone numbers. This gap must be addressed either by making the learner identifier format configurable, or by building a mapping layer that translates SSO identities to TutorClaw's internal format. The ClawHub documentation should disclose this limitation clearly."
        },
        {
          id: 26,
          question: "A TutorClaw developer mocks the Stripe API in tests — all tests pass. In production, the Stripe integration fails because the mock didn't match Stripe's actual error response format. What testing philosophy does this failure illustrate?",
          options: {
            A: "Mocking is always wrong and all tests should use real APIs",
            B: "Mocks that are not verified against real API behavior create false confidence. The mock passed tests because it returned what the developer expected Stripe to return — not what Stripe actually returns. Contract testing (using Stripe's test mode or recorded real API responses) would have caught the format mismatch before production",
            C: "This failure is acceptable — all production systems have unexpected integration issues",
            D: "The failure proves that Stripe's API documentation is incorrect"
          },
          correct: "B",
          explanation: "Mock-based tests verify behavior against an approximation of the real system. When the approximation diverges from reality (as Stripe's error format evidently did), the tests provide false confidence. The lesson is to ground mocks in real API responses: use Stripe's test mode to record real responses, use those recordings as mock data, or use contract testing frameworks that verify mocks against live API schemas."
        },
        {
          id: 27,
          question: "TutorClaw's ClawHub listing has 1,247 installs but only 23 reviews. A developer suggests prompting users for reviews within TutorClaw itself. What is the correct approach within TutorClaw's interaction design?",
          options: {
            A: "Never prompt for reviews — they should come organically",
            B: "Prompt at a natural session milestone (chapter completion, tier upgrade) rather than mid-lesson. The prompt should feel earned: 'You just finished Chapter 3 — that's real progress! If TutorClaw has been helpful, a review on ClawHub helps other learners find it.' A contextual, non-disruptive ask at a moment of success converts better without interrupting the learning experience",
            C: "Send automated WhatsApp review request messages to all learners weekly",
            D: "Offer premium tier discounts in exchange for reviews"
          },
          correct: "B",
          explanation: "Review prompts must be contextually placed to be effective without being intrusive. Mid-lesson interruptions feel extractive and harm the learning experience. Prompts at natural milestones (chapter completion, first premium access) feel celebratory and appropriate — the learner just achieved something, and the prompt acknowledges that while making a relevant ask. The prompt language should connect the ask to learner impact, not just platform metrics."
        },
        {
          id: 28,
          question: "TutorClaw gets a referral code feature requiring changes to register_learner, generate_stripe_checkout_url, and a new update_referral_credit tool. What should happen to TutorClaw's published ClawHub spec?",
          options: {
            A: "Update the spec silently — minor feature additions don't require version bumps",
            B: "Publish a new version with an updated spec: document the new optional referral_code parameter in register_learner, the referral discount logic in generate_stripe_checkout_url, and the new update_referral_credit tool with its full contract. Increment the version number and include a changelog for integrators already using TutorClaw",
            C: "Create a separate ClawHub listing for the referral-enabled version",
            D: "The new tool can be added without a version update since it is additive"
          },
          correct: "B",
          explanation: "Published API contracts are a promise to integrators. Adding parameters and new tools changes the contract, requiring a version bump and updated documentation. Integrators already using TutorClaw need to know what changed so they can decide whether to upgrade. A changelog communicates: 'register_learner now accepts optional referral_code — existing calls without this parameter are unaffected.' Transparency preserves trust with the integrator community."
        },
        {
          id: 29,
          question: "TutorClaw's pytest integration tests run against a shared test JSON state file. Multiple developers running tests simultaneously corrupt the file. What is the correct solution?",
          options: {
            A: "Only one developer can run tests at a time — document this constraint",
            B: "Each test run should use a uniquely named temporary state file (e.g., test_state_{uuid}.json) created fresh at test start and deleted after completion — this makes tests fully isolated and parallelizable regardless of how many developers run them simultaneously",
            C: "Use a database for test state so concurrent writes are handled automatically",
            D: "Serialize all test runs through a CI queue so only one runs at a time"
          },
          correct: "B",
          explanation: "Test isolation through unique temporary files eliminates shared state contention. UUID-named temp files ensure each test run has its own state that cannot be corrupted by concurrent runs. This approach makes the test suite safe to run in parallel in CI, enables developers to run tests simultaneously without coordination, and automatically cleans up state after completion. It is the standard pattern for file-system-dependent test suites."
        },
        {
          id: 30,
          question: "A TutorClaw operator wants to offer a 'team plan' where one payment covers five learners. The current architecture supports one learner_id per Stripe customer. What minimum changes to the nine-tool blueprint would support team plans?",
          options: {
            A: "No changes needed — the current architecture handles this automatically",
            B: "A new tool (create_team) that maps a Stripe customer to multiple learner_ids, updates to upgrade_tier that can apply a tier to all learners in a team, and updates to generate_stripe_checkout_url that can create team subscription sessions — plus JSON state schema changes to include a teams: [{team_id, learner_ids, tier}] structure",
            C: "Simply allow one learner to share their credentials with four others",
            D: "Create five separate Stripe subscriptions and link them with a common team_code in JSON state"
          },
          correct: "B",
          explanation: "Team plans require architectural changes across state schema, tool contracts, and webhook handling. The JSON state needs a team entity that owns a tier and maps to multiple learners. upgrade_tier must be able to update all team members simultaneously. The Stripe integration must create subscription sessions for team sizes. Webhook processing must look up the team, not just a single learner_id. These changes cascade through the blueprint before implementation begins."
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
        },
        {
          id: 6,
          question: "A TutorClaw developer is in the Harness Phase and discovers that register_learner uses UUID learner IDs while track_progress accepts any string. They realize the mismatch because the agent passed a phone number to track_progress instead of a UUID. At which phase should this inconsistency have been caught?",
          options: {
            A: "The Harness Phase — it is working correctly by catching this integration issue",
            B: "The Blueprint Phase — when defining the shared learner_id contract across all tools, the type and format should have been specified once and applied consistently to all nine tool contracts. The inconsistency should never have survived into implementation",
            C: "The Local Build Phase — each tool developer should have noticed the inconsistency",
            D: "The Reflection Phase — specification mismatches are documented during the spec audit"
          },
          correct: "B",
          explanation: "Blueprint Phase is where cross-tool data contracts are established. The learner_id format is a shared contract that all state tools depend on — it must be defined once in the blueprint and inherited by all tools. If the blueprint had specified 'learner_id: UUID string format', both register_learner and track_progress developers would implement the same type. Harness Phase catches what Blueprint Phase missed, but the root fix is upstream."
        },
        {
          id: 7,
          question: "TutorClaw's Local Build Phase uses Claude Code's describe-steer-verify workflow to build get_chapter_content. The generated implementation uses a hardcoded list of chapters in the source code instead of reading from a content file. What should happen in the 'steer' step?",
          options: {
            A: "Accept the hardcoded implementation — it works and can be refactored later",
            B: "In the steer step, provide corrective guidance: 'The chapters should be loaded from a chapters.json file at the configurable path, not hardcoded in the source — please regenerate with file-based chapter loading.' The steer step is specifically for correcting Claude Code's interpretation before the implementation is accepted",
            C: "Delete the implementation and restart the describe step from scratch",
            D: "Hardcoding is acceptable for the Local Build Phase and will be fixed in the Harness Phase"
          },
          correct: "B",
          explanation: "Steer is the correction mechanism in describe-steer-verify. When Claude Code generates an implementation that is functionally correct but architecturally wrong (hardcoded data instead of configurable loading), the steer step provides specific corrective direction. This keeps the development loop efficient — rather than starting over, the developer redirects Claude Code toward the correct implementation pattern before accepting the output."
        },
        {
          id: 8,
          question: "A TutorClaw team completes Blueprint and Local Build phases. They want to skip the Harness Phase and go directly to Monetization. What specific risk does this create?",
          options: {
            A: "Stripe's API requires all MCP tools to be tested before payment integration can begin",
            B: "Without Harness Phase integration testing, the Monetization Phase will add Stripe complexity on top of a potentially broken tool chain — a bug in how register_learner interacts with track_progress won't be discovered until it manifests inside the payment flow, making it much harder to isolate and fix",
            C: "Skipping Harness Phase violates ClawHub's marketplace certification requirements",
            D: "The Monetization Phase cannot run without the Harness Phase's configuration files"
          },
          correct: "B",
          explanation: "The Harness Phase establishes that the tool system works correctly before adding Stripe complexity. When integration testing is skipped, latent bugs in tool interactions get buried under Monetization Phase code. A learner tier upgrade that fails may fail because of broken JSON state from an earlier session, a Stripe webhook handling issue, or an upgrade_tier logic error — all appearing as the same symptom. Harness Phase isolates these layers."
        },
        {
          id: 9,
          question: "During TutorClaw's Identity Phase, a developer adds SOUL.md and tests TutorClaw's responses. They notice TutorClaw sometimes ignores PRIMM-Lite pedagogy and gives direct answers. What is the most likely cause?",
          options: {
            A: "SOUL.md is being loaded after IDENTITY.md, causing a loading conflict",
            B: "SOUL.md's pedagogical instruction is not specific enough — vague directives like 'use good pedagogy' are interpreted inconsistently. The instruction needs to be explicit: 'Always begin with the Predict phase — ask the learner what they expect the code to do before running it' with enough specificity that the model applies it consistently",
            C: "The Identity Phase is too late to add pedagogical instructions — they should have been in the Blueprint Phase",
            D: "TutorClaw's JSON state is overriding SOUL.md instructions based on learner preferences"
          },
          correct: "B",
          explanation: "Behavioral consistency in LLM agents requires precise, explicit instructions — not abstract principles. 'Use PRIMM-Lite pedagogy' is too vague. The model needs concrete behavioral directives: 'When a learner sends code, your first response must always be a prediction question before any code execution.' Specific, actionable instructions in SOUL.md produce consistent behavior; abstract principles produce inconsistent interpretation."
        },
        {
          id: 10,
          question: "TutorClaw's Reflection Phase reveals the original blueprint specified eight tools but the final implementation has nine. What should happen?",
          options: {
            A: "Remove the ninth tool to match the original blueprint",
            B: "Document the addition explicitly: identify which tool was added, why it was added (what gap it fills that the eight-tool design missed), and update the published spec to include it. If the ninth tool reveals a design insight, update the blueprint notes to capture the learning for future builds",
            C: "The extra tool is a mistake — the blueprint is always authoritative",
            D: "Ignore the discrepancy since the implementation works correctly"
          },
          correct: "B",
          explanation: "The Reflection Phase does not enforce the original blueprint as sacred — it makes deviations explicit and intentional. A ninth tool that emerged during implementation represents design evolution. The correct response is to document why it was needed (what the eight-tool design couldn't accomplish), update the spec to include it, and capture the insight about what the original blueprint missed. This improves future blueprinting quality."
        },
        {
          id: 11,
          question: "A TutorClaw developer uses describe-steer-verify to build register_learner. The describe and steer steps produce a working implementation. They want to move immediately to the next tool without the verify step. What risk does skipping verification create?",
          options: {
            A: "No risk — working code is verified code",
            B: "The verify step catches issues that appear correct at first inspection: that the tool handles edge cases (duplicate learner_id, missing fields), that the output format exactly matches the blueprint contract, and that the implementation is maintainable. Skipping it means these issues are discovered later in Harness Phase or production, where they are more expensive to fix",
            C: "Skipping verify is only a risk for complex tools — simple tools like register_learner don't need verification",
            D: "Verify is optional in the Local Build Phase and only required in the Harness Phase"
          },
          correct: "B",
          explanation: "Verify is the quality gate in describe-steer-verify. It is not just 'does it run?' — it is a systematic check against the blueprint contract: are all required output fields present with correct types? Are error codes as specified? Are edge cases handled? Tools that pass describe-steer but fail verify have superficial correctness that breaks under real conditions. Each skipped verification accumulates debt discovered in later phases."
        },
        {
          id: 12,
          question: "After completing the Monetization Phase, TutorClaw integration tests reveal that tier upgrades via webhook work correctly in isolation but fail when run after register_learner in the same test suite. What phase should have caught this interaction?",
          options: {
            A: "The Local Build Phase — individual tool developers should test inter-tool interactions",
            B: "The Harness Phase — its explicit purpose is testing tools as an integrated system, specifically catching interaction failures that only emerge when tools are chained together. This failure pattern (works alone, fails in sequence) is exactly what the Harness Phase is designed to surface",
            C: "The Monetization Phase — payment flows should include full registration sequences in their tests",
            D: "The Blueprint Phase — the interaction should have been blueprinted before implementation"
          },
          correct: "B",
          explanation: "The Harness Phase tests tool chains, not individual tools. The failure pattern described — a tool that works in isolation but fails when preceded by a different tool — is an interaction bug that only surfaces under realistic orchestration conditions. If Harness Phase testing includes sequences like register_learner → upgrade_tier (simulating the normal payment flow), this bug would be caught before Stripe complexity is layered on top."
        },
        {
          id: 13,
          question: "TutorClaw's six phases are described as sequential. A developer in the Monetization Phase discovers a critical bug in the JSON state schema designed during the Local Build Phase. What should happen?",
          options: {
            A: "Continue the Monetization Phase and fix the schema bug after publishing",
            B: "Return to the affected phase: fix the schema bug in the persistence layer (Local Build Phase work), rerun Harness Phase testing to verify the fix doesn't break integration, then resume the Monetization Phase. The six phases are a logical progression, not a lock — critical defects always require returning to the appropriate phase",
            C: "The Monetization Phase cannot continue until the entire Local Build Phase is redone from scratch",
            D: "Document the bug in the Reflection Phase and ship with the known defect"
          },
          correct: "B",
          explanation: "Phase linearity describes the intended progression, not a rigid no-backtrack rule. Critical defects discovered in a later phase require targeted regression to the phase where the fix belongs. A schema bug is a Local Build Phase issue — fix it there, validate the fix in Harness Phase, then resume forward progress. The key is fixing at the right layer rather than patching around the root cause in the current phase."
        },
        {
          id: 14,
          question: "During TutorClaw's Local Build Phase, Claude Code generates the generate_guidance tool with 200 lines of unnecessary comments and dead code. What does 'verify' mean in describe-steer-verify in this context?",
          options: {
            A: "Verify means running the code and confirming it produces output",
            B: "Verify means reviewing the generated code against the blueprint contract for correctness, checking that it handles all specified cases, and also ensuring the implementation is clean and maintainable — unnecessary code that will become maintenance debt is a verify-step finding that should be addressed before moving forward",
            C: "Verify only applies to functional correctness — code quality is a separate concern for code review",
            D: "200 lines is acceptable — generated code is always verbose"
          },
          correct: "B",
          explanation: "Verify in describe-steer-verify encompasses both correctness and quality. A tool with 200 lines of comments and dead code will be maintained by someone — dead code creates confusion about what the tool actually does and which code paths are active. The verify step is the moment to clean this up before it becomes technical debt carried through the remaining five phases. Accepting poor-quality generated code because it 'works' misses the point of the verify gate."
        },
        {
          id: 15,
          question: "A TutorClaw developer in the Harness Phase realizes they need a tenth tool that resets a learner's progress to allow chapter retries. At what phase should adding new tools occur?",
          options: {
            A: "Immediately add it in the Harness Phase — new requirements can be addressed in any phase",
            B: "Return to a Blueprint Phase decision: document the new tool's contract, add it to the tool manifest, update any tool that interacts with it, then build it in the Local Build Phase and test it in Harness Phase before resuming the original Harness Phase work",
            C: "Add it after the Reflection Phase as an addendum without going through the full phase cycle",
            D: "New tools can only be added in the Local Build Phase — Harness Phase is read-only"
          },
          correct: "B",
          explanation: "New tools require Blueprint Phase work regardless of when they are discovered. Without a blueprint, a new tool built in Harness Phase skips the contract design step that ensures it integrates correctly with the other nine. The minimal correct process is: define the contract (Blueprint), build it (Local Build), test it in context (Harness). Adding tools ad hoc in a later phase creates exactly the kind of integration mismatches the Blueprint Phase prevents."
        },
        {
          id: 16,
          question: "A developer asks: 'Can we finalize SOUL.md and IDENTITY.md after publishing to ClawHub?' What is the correct answer about when identity should be finalized?",
          options: {
            A: "Yes — identity files can be updated at any time after publication",
            B: "Identity should be finalized before publication because ClawHub's listing and documentation describe TutorClaw's persona — if SOUL.md changes significantly post-publication, the behavior ClawHub users installed diverges from what they read in the listing. Updates are possible, but significant identity changes should be treated as version updates with changelog entries",
            C: "SOUL.md and IDENTITY.md are locked at publication and cannot be changed",
            D: "Identity finalization is not required — ClawHub automatically generates identity from the tool manifest"
          },
          correct: "B",
          explanation: "Identity files shape the user experience that ClawHub's listing promises. If a learner installs TutorClaw based on a 'warm, encouraging' persona described in the listing, and SOUL.md is later updated to 'strict, formal' without a version update, the installed experience no longer matches the listing. Treat identity changes with the same versioning discipline as tool contract changes — communicate what changed and why."
        },
        {
          id: 17,
          question: "A startup founder asks: 'How long should TutorClaw's Blueprint Phase take for a nine-tool system?' What is the correct framing for answering this question?",
          options: {
            A: "Exactly one week — blueprint phases should always be time-boxed to one week",
            B: "Blueprint duration is determined by completeness, not a calendar target: the phase ends when every tool has fully specified input/output contracts, tier access rules, error behaviors, and inter-tool dependencies — for a nine-tool system with a motivated team, this typically takes one to three focused working days",
            C: "The Blueprint Phase should be as short as possible — spending more time on design delays shipping",
            D: "There is no correct duration — blueprint length depends entirely on team size"
          },
          correct: "B",
          explanation: "Blueprint duration is a function of completeness, not time allocation. The correct question is not 'how long should we spend?' but 'have we fully specified every tool contract?' A complete blueprint for nine tools can be drafted in one focused day by an experienced team or take three days for a team working through design decisions collaboratively. Rushing to a time deadline risks an incomplete blueprint that creates expensive implementation rework."
        },
        {
          id: 18,
          question: "After the Local Build Phase, a developer moves to Harness Phase and discovers the agent cannot orchestrate three tools in sequence because the tool descriptions are ambiguous about when each should be called. What does this reveal about context engineering?",
          options: {
            A: "The tools are broken and must be rewritten during the Harness Phase",
            B: "Tool descriptions are the agent's instruction manual for orchestration — ambiguous descriptions create an agent that cannot reliably decide when to call each tool. Context engineering (writing precise, actionable tool descriptions) is not a final polish step; it is foundational work that must be done in the Local Build Phase alongside the implementation itself",
            C: "The agent should be given explicit step-by-step orchestration instructions instead of tool descriptions",
            D: "This is a limitation of the Claude API that cannot be addressed through tool design"
          },
          correct: "B",
          explanation: "Context engineering — the design of what information the agent has when making decisions — is as important as the tool implementation itself. If generate_guidance's description says 'generates guidance for learners' without specifying when it should be called relative to submit_code, the agent cannot reliably orchestrate them. Tool descriptions must include: when to call this tool, what preconditions are required, and what the agent should do with the result."
        },
        {
          id: 19,
          question: "TutorClaw's Reflection Phase produces a spec-vs-implementation comparison document. A developer asks: 'Who should receive this document?' What is the correct answer about its purpose?",
          options: {
            A: "The document is for internal use only — it should never leave the development team",
            B: "The document serves two audiences: internally, it is a decision record for the development team documenting what changed and why (institutional memory for future maintenance). Externally, its conclusions should be reflected in the updated ClawHub spec — so the published documentation accurately represents what was built, which is what ClawHub integrators actually need",
            C: "The document should be sent to ClawHub for marketplace approval review",
            D: "The document is discarded after the Reflection Phase — its findings are incorporated into the implementation"
          },
          correct: "B",
          explanation: "The Reflection Phase document has internal and external value. Internally, it captures design decisions and evolution for future developers maintaining the codebase. Externally, its output is an accurate published spec — ClawHub users need documentation that reflects reality, not the original blueprint that may have diverged during development. The document itself stays internal; the accurate spec it produces becomes public."
        },
        {
          id: 20,
          question: "A TutorClaw developer working in the Harness Phase is asked: 'What exactly is being harnessed?' What is the precise answer?",
          options: {
            A: "The WhatsApp Business API connection is being configured and tested",
            B: "The nine MCP tools are being harnessed together as a coordinated system — the Harness Phase connects all individually-built tools, configures the agent to orchestrate them, and verifies that state flows correctly between tools in realistic learning sequences. 'Harness' means assembling the components into a working integrated whole",
            C: "The Claude API connection is being secured and load-tested",
            D: "Stripe's payment webhook is being connected to TutorClaw's event handler"
          },
          correct: "B",
          explanation: "Harnessing means assembling independent components into a coordinated system. After the Local Build Phase, nine tools exist independently. The Harness Phase connects them: the agent is configured with all nine tool descriptions, state flows are tested (register_learner creates a record that track_progress can update), and multi-tool sequences are verified end-to-end. The metaphor is apt: a harness connects individual elements into a working unit."
        },
        {
          id: 21,
          question: "A senior developer argues: 'We should write TutorClaw's state management tools manually for better control rather than using Claude Code.' How does the describe-steer-verify workflow address this concern?",
          options: {
            A: "The concern is valid — state management tools should always be written manually",
            B: "Describe-steer-verify addresses the control concern directly: the 'steer' step allows developers to redirect Claude Code's implementation toward specific patterns (file locking, atomic writes, error handling standards), and the 'verify' step reviews the generated code before accepting it. The developer retains full control over what is accepted — Claude Code accelerates scaffolding, not decision-making",
            C: "Claude Code cannot build state management tools — it is only for API integration code",
            D: "Manual coding and Claude Code cannot be mixed in the same project"
          },
          correct: "B",
          explanation: "Describe-steer-verify is not 'accept whatever Claude generates' — it is a structured workflow where the developer drives architectural decisions through the steer step and validates outcomes through the verify step. A developer who wants specific locking patterns in the persistence layer uses the steer step to specify them: 'Use fcntl file locking for all writes and implement retry logic on lock acquisition failure.' Full control is preserved; repetitive scaffolding is accelerated."
        },
        {
          id: 22,
          question: "After TutorClaw's Monetization Phase, a developer discovers the Stripe webhook endpoint accepts requests without any signature validation — any HTTP POST can trigger tier upgrades. Which phase should have included security review?",
          options: {
            A: "The Reflection Phase — security is documented but not enforced during development",
            B: "The Local Build Phase — when the webhook endpoint was first implemented, security requirements (Stripe signature validation using the webhook signing secret) should have been included in the tool's blueprint specification and verified during the verify step. Security is not a post-development audit item",
            C: "Security review is a DevOps concern that happens after deployment, not during development phases",
            D: "The Harness Phase — security testing is part of integration testing"
          },
          correct: "B",
          explanation: "Security requirements belong in the blueprint and must be implemented in the Local Build Phase as part of the tool's specification. A webhook endpoint without signature validation is a critical security vulnerability — any attacker who knows the endpoint URL can issue arbitrary tier upgrades. The blueprint should specify 'webhook handler must validate Stripe-Signature header using the webhook signing secret' and the verify step must confirm this is implemented."
        },
        {
          id: 23,
          question: "TutorClaw completes all six phases and publishes to ClawHub. Two months later, a requirement arrives: TutorClaw must support Google Classroom integration. What phase should the team re-enter?",
          options: {
            A: "The Reflection Phase — new requirements are handled through retrospective documentation",
            B: "The Blueprint Phase — Google Classroom integration is a new capability that requires designing new tool contracts (or modifying existing ones), specifying integration points, and defining authentication flows before any implementation begins. All significant additions re-enter the phase cycle from Blueprint",
            C: "The Local Build Phase — implementation can begin immediately since the architecture is established",
            D: "New features after publication bypass the phase model and are implemented directly"
          },
          correct: "B",
          explanation: "The six-phase model applies to new capabilities regardless of when they arise. Google Classroom integration likely requires a new authentication tool, modifications to register_learner to accept Google identity, and changes to track_progress to sync with Classroom's gradebook API. These are architectural decisions that must be blueprinted before implementation begins — adding them directly in the Local Build Phase without a blueprint creates exactly the integration problems the Blueprint Phase prevents."
        },
        {
          id: 24,
          question: "A developer asks: 'What is the definition of done for TutorClaw's Local Build Phase?' What is the correct answer?",
          options: {
            A: "Done means all nine tools compile and run without errors",
            B: "Done means all nine tools are implemented according to their blueprint specifications, each has passed its individual verify step (correct output formats, edge case handling, error codes as specified), and the codebase is in a state ready for Harness Phase integration testing — tools that work in isolation but have known specification deviations are not done",
            C: "Done means the first tool is complete — the rest are built in the Harness Phase",
            D: "Done means Claude Code has generated code for all nine tools"
          },
          correct: "B",
          explanation: "Done in the Local Build Phase means each tool has met its blueprint contract and passed verification. Running without errors is a minimum bar, not a definition of done. A tool that runs but returns learner_id as an integer when the spec says string, or returns a 404 code when the spec says NOT_FOUND, is not done — it has passed syntax checking but failed specification compliance. Each tool's verify step is what produces 'done' status."
        },
        {
          id: 25,
          question: "A developer asks: 'What is the difference between the Harness Phase testing and the pytest suite in the Monetization Phase?' What is the correct distinction?",
          options: {
            A: "There is no difference — pytest is used in both phases for the same purpose",
            B: "Harness Phase testing verifies that all nine tools work together as an integrated system — state flows, orchestration sequences, and inter-tool dependencies. The Monetization Phase pytest suite adds tests for payment-specific flows: Stripe checkout session creation, webhook handling, tier gating after payment, and payment failure downgrade — these tests require payment infrastructure that doesn't exist until the Monetization Phase",
            C: "Harness Phase uses manual testing while Monetization Phase uses automated pytest",
            D: "Monetization Phase testing replaces Harness Phase testing — there is no need for both"
          },
          correct: "B",
          explanation: "Each phase's test suite tests the concerns introduced in that phase. Harness Phase tests: tool integration, state flow, agent orchestration. Monetization Phase tests: Stripe checkout URL generation, webhook delivery handling, tier enforcement after payment, and subscription lifecycle events (payment_failed, renewal). The Monetization Phase tests build on Harness Phase tests — they don't replace them. Both suites run together in CI after Monetization Phase is complete."
        },
        {
          id: 26,
          question: "During TutorClaw's Blueprint Phase, a developer argues: 'We should estimate implementation complexity for each tool so we can prioritize which to build first.' Is this a valid use of the Blueprint Phase?",
          options: {
            A: "No — the Blueprint Phase is only for contract specification, not planning",
            B: "Yes — after tool contracts are fully specified, complexity estimation is a natural next step that informs the Local Build Phase sequencing. Identifying which tools have complex state management, external dependencies, or ambiguous requirements allows the team to build the highest-risk tools first, when there is most time to address surprises",
            C: "Complexity estimation should happen in the Harness Phase after all tools are built",
            D: "All nine tools should be built simultaneously to save time"
          },
          correct: "B",
          explanation: "Blueprint Phase complexity estimation is a planning activity that directly improves Local Build Phase execution. After fully specifying contracts, the team has enough information to identify which tools have the most technical risk (complex state transitions, external API dependencies, ambiguous behavioral requirements). Building high-risk tools first provides more time to discover and address problems before the schedule is constrained."
        },
        {
          id: 27,
          question: "TutorClaw's context engineering during the Local Build Phase includes writing tool descriptions that specify when to call each tool. A developer asks: 'Why do tool descriptions need to specify when to call the tool rather than just what it does?' What is the correct answer?",
          options: {
            A: "Tool descriptions that include when-to-call guidance are required by the MCP protocol",
            B: "Claude orchestrates tools based on their descriptions — if a description only says what a tool does, the agent must infer from context when to call it. Inference is unreliable across different conversation contexts. Explicit when-to-call guidance in the description makes the agent's routing decisions deterministic: 'Call this tool when the learner sends code for the first time in a session'",
            C: "When-to-call guidance reduces the number of API tokens used per conversation turn",
            D: "When-to-call guidance is only needed for tools that the agent might confuse with similar tools"
          },
          correct: "B",
          explanation: "Tool descriptions are context engineering artifacts — they shape the information the model uses when deciding which tool to call. A description that only says 'tracks learner progress' leaves the agent to infer when tracking should happen. A description that says 'call this tool when a PRIMM-Lite phase completes to record the learner's progress on the current chapter' removes inference ambiguity. Deterministic routing requires explicit triggering conditions."
        },
        {
          id: 28,
          question: "A developer skips TutorClaw's Identity Phase and publishes directly to ClawHub after the Monetization Phase. What specific quality problem will ClawHub users experience?",
          options: {
            A: "TutorClaw will not function without SOUL.md and IDENTITY.md files",
            B: "TutorClaw will work functionally but without a defined persona — users will experience an agent that behaves like a generic Claude assistant rather than a distinct tutoring entity. It may give direct answers instead of Socratic guidance, refer to itself inconsistently, and lack behavioral coherence across sessions — undermining the product differentiation that justifies the premium tier",
            C: "ClawHub will reject the submission without identity files present",
            D: "The Stripe payment integration will not work without the Identity Phase's configuration"
          },
          correct: "B",
          explanation: "Without SOUL.md and IDENTITY.md, TutorClaw's tools function but the agent lacks a behavioral foundation. Users get a capable tool-executor without a teaching persona. The PRIMM-Lite pedagogy may not be followed consistently, the warm-encouraging tone is absent, and the agent identifies itself generically. For a tutoring product competing on learning experience quality, missing identity is a fundamental product deficiency even when all nine tools work correctly."
        },
        {
          id: 29,
          question: "TutorClaw's Reflection Phase reveals that both track_progress and get_learner_profile write to overlapping JSON state fields. What should the Reflection Phase produce as output for this finding?",
          options: {
            A: "A note that the overlap exists, with no action required",
            B: "An explicit architectural decision: either (1) designate one tool as the sole writer of the shared fields and make the other read-only for those fields, or (2) document that both tools write the same fields intentionally (with idempotency guarantees) and specify the write semantics clearly. The Reflection Phase must produce a decision, not just a finding",
            C: "Remove get_learner_profile from the tool manifest since it duplicates track_progress",
            D: "Merge both tools into a single tool to eliminate the overlap"
          },
          correct: "B",
          explanation: "The Reflection Phase produces decisions, not observations. Overlapping write responsibilities is an architectural ambiguity that will cause bugs if two tools ever write conflicting values to the same field. The team must decide: which tool owns the field? If track_progress writes completion_status and get_learner_profile also writes it (perhaps with a different value), the last-write-wins outcome is non-deterministic. Assigning clear ownership resolves the ambiguity before it causes production incidents."
        },
        {
          id: 30,
          question: "A developer asks: 'If we follow all six phases correctly, are we guaranteed a successful ClawHub publication?' What is the honest answer about what the six phases ensure?",
          options: {
            A: "Yes — following all six phases guarantees successful publication and user adoption",
            B: "The six phases ensure TutorClaw is built correctly, tested thoroughly, and documented accurately — they maximize the probability of successful publication and reduce post-launch defects. They do not guarantee market success, user adoption, or ClawHub's acceptance (which has its own approval criteria). The phases are a quality framework, not a success guarantee",
            C: "No — ClawHub's approval process is unpredictable regardless of development quality",
            D: "The phases guarantee technical correctness but not business viability"
          },
          correct: "B",
          explanation: "The six phases are a quality assurance framework that addresses what is within the developer's control: does the system work correctly, are tools integrated, is identity defined, are tests passing, and is the spec accurate? They do not control market factors (does ClawHub have users who want tutoring tools?), approval factors (does ClawHub's team approve the submission?), or adoption factors (do learners find TutorClaw valuable enough to keep using it?)."
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
        },
        {
          id: 6,
          question: "TutorClaw's integration test suite covers the full registration-to-learning flow. The payment portion calls the real Stripe API, making the entire test take 45 seconds. What is the correct approach to speed this up while preserving test value?",
          options: {
            A: "Remove the payment test entirely — payment is Stripe's responsibility to test",
            B: "Split the test into two tiers: a fast suite (mocked Stripe responses recorded from real API calls) that runs on every commit in seconds, and a slow suite (real Stripe test mode) that runs on merge to main — the fast suite catches regressions while the slow suite periodically verifies real Stripe behavior hasn't changed",
            C: "Replace all Stripe calls with sleep(45) to simulate latency without real API calls",
            D: "Run all integration tests in parallel to reduce total time to 5 seconds"
          },
          correct: "B",
          explanation: "Test tier architecture balances feedback speed with integration confidence. Mocked Stripe responses (recorded from real test mode calls) run instantly and catch most regressions. Real Stripe test mode calls verify that actual Stripe behavior hasn't changed (API updates, new error formats). Running recorded mocks on every commit and real tests on merge provides fast developer feedback without sacrificing real-world verification."
        },
        {
          id: 7,
          question: "A Stripe payment_succeeded webhook fires for a TutorClaw learner, but the webhook handler fails with a JSON decode error because the learner's phone number contains special characters that break the JSON file read. What does this failure reveal about the webhook handler's quality?",
          options: {
            A: "Special characters in phone numbers are invalid input that should never reach TutorClaw",
            B: "The webhook handler has insufficient defensive coding — it assumes all JSON file reads succeed and all learner data is well-formed. Production webhook handlers must handle file read errors, malformed JSON, and data validation failures gracefully, returning an appropriate error response to Stripe rather than crashing silently and losing the payment event",
            C: "The JSON file format is unsuitable for storing phone numbers with special characters",
            D: "This is Stripe's fault for sending webhooks for learners with unusual identifiers"
          },
          correct: "B",
          explanation: "Webhook handlers are production code that processes real financial events. Unhandled exceptions in a webhook handler cause silent failures — Stripe receives an HTTP 500, retries the webhook, potentially creating duplicate processing attempts. The handler must: try/catch all file operations, validate the JSON structure before use, handle missing learner records explicitly, and always return a meaningful HTTP response. Robustness in webhook handlers is non-negotiable."
        },
        {
          id: 8,
          question: "TutorClaw's spec audit finds that submit_code was designed to persist code to JSON state but the implementation just passes code to generate_guidance and discards it. What should the audit decision be?",
          options: {
            A: "Accept the deviation — passing code to generate_guidance achieves the same result",
            B: "This is a spec violation with a functional impact: code is not persisted, so session resumption cannot reference the submitted code, and analytics on code submissions are impossible. The team must either (a) implement persistence as specified, or (b) explicitly update the spec to remove persistence if it is truly unnecessary — but the decision must be made, not ignored",
            C: "Document the deviation and ship — the tool works even without persistence",
            D: "Remove submit_code and merge its behavior into generate_guidance"
          },
          correct: "B",
          explanation: "Spec violations with functional impact require explicit decisions, not acceptance by default. Removing persistence from submit_code affects downstream capabilities (session resumption, code review, progress analytics). The audit must surface this impact and force a decision: was persistence always unnecessary (update the spec) or is it needed (fix the implementation)? Shipping an undocumented deviation silently creates a gap between what integrators expect and what TutorClaw actually provides."
        },
        {
          id: 9,
          question: "A university IT administrator wants to deploy TutorClaw via ClawHub's managed deployment option for 2,000 students. What should TutorClaw's ClawHub documentation include for this use case?",
          options: {
            A: "A link to TutorClaw's developer GitHub repository",
            B: "Managed deployment documentation must include: minimum server requirements for the expected user volume, WhatsApp Business API provisioning instructions for institutional numbers, JSON state file management for thousands of concurrent learners (backup, monitoring, scaling considerations), Stripe account setup for institutional billing, and configuration parameters the administrator must set — everything an IT professional needs without requiring developer expertise",
            C: "A contact form to request enterprise support",
            D: "The same documentation as the one-click install option"
          },
          correct: "B",
          explanation: "Managed deployment documentation must be written for IT professionals, not developers. An IT administrator deploying TutorClaw for 2,000 students needs operational information: server sizing, credential provisioning, monitoring setup, backup procedures, and user onboarding workflows. Pointing them to developer documentation or a GitHub repository creates deployment failures. Each ClawHub installation mode needs documentation written for its specific audience."
        },
        {
          id: 10,
          question: "TutorClaw unit tests verify: (1) free-tier get_chapter_content returns accessible: false, and (2) when accessible is false, the agent calls generate_stripe_checkout_url. Both tests pass. But in production, the agent doesn't always call generate_stripe_checkout_url after receiving accessible: false. What does this reveal about test coverage?",
          options: {
            A: "The tests are wrong — the agent should never automatically call generate_stripe_checkout_url",
            B: "The tests verify tool behavior and isolated agent behavior separately, but not the integrated decision-making chain. An agent's real orchestration decision depends on conversational context, system prompt interpretation, and multiple preceding tool results — unit tests for each step pass, but the actual agent reasoning that connects them is not tested. Integration testing with real agent orchestration is needed to catch this gap",
            C: "The production agent has a different version than the tested agent",
            D: "Stripe's API is blocking the checkout URL generation in production"
          },
          correct: "B",
          explanation: "This is the classic unit test coverage gap: each unit passes but the integrated behavior fails. The agent's decision to call generate_stripe_checkout_url depends on how it interprets accessible: false within the full conversational context — not just the isolated test case. Testing the agent's actual orchestration requires running the full agent (with real system prompt and tool chain) through realistic conversation scenarios, not just testing each tool and each agent decision in isolation."
        },
        {
          id: 11,
          question: "TutorClaw's webhook handler receives a Stripe event with type: 'customer.subscription.trial_will_end' — an event type the handler has no case for. What should the handler do?",
          options: {
            A: "Return HTTP 500 to signal that the event was not processed",
            B: "Return HTTP 200 to acknowledge receipt, log the unhandled event type for monitoring purposes, and take no other action — returning 500 would cause Stripe to retry repeatedly for an event TutorClaw has no business processing, while a 200 with logging ensures the event is acknowledged and the unhandled type is visible for future implementation",
            C: "Return HTTP 400 to reject unsupported event types",
            D: "Ignore all unknown event types without logging"
          },
          correct: "B",
          explanation: "Webhook handler hygiene requires acknowledging all received events even when no action is taken. Returning 500 for unhandled event types causes Stripe to retry, creating webhook queue buildup for events TutorClaw will never process. Returning 200 with logging is the correct pattern: acknowledge receipt (stops retries), log the event type (makes it discoverable for future implementation), and take no state-changing action. Unknown event types are not errors — they are gaps in current coverage."
        },
        {
          id: 12,
          question: "TutorClaw has been on ClawHub for two months with 1,247 installs and 23 reviews. A competing MCP server has 400 reviews. A developer suggests lowering TutorClaw's price to compete. What does ClawHub's network effect model suggest instead?",
          options: {
            A: "Price reduction is the only viable strategy to gain reviews quickly",
            B: "Network effects compound on adoption and engagement, not price. The priority should be increasing the quality of learner outcomes — better PRIMM-Lite sequences, more content, better error handling — which drives organic reviews from satisfied users. Reviews from engaged users are more credible than review volume from discount-driven installs that may churn quickly",
            C: "Lower price will drive installs, installs will drive reviews, reviews will drive more installs",
            D: "ClawHub's algorithm weights install count more heavily than reviews, so price matters more"
          },
          correct: "B",
          explanation: "Sustainable ClawHub network effects are built on genuine learner value, not price. Discount-driven installs attract users who may not engage deeply with TutorClaw — they install, try briefly, and leave without reviewing. Engaged learners who achieve real learning outcomes are the ones who write detailed reviews that drive credible discovery. The investment in quality (better pedagogy, more content, smoother UX) creates the engagement that compounds into organic reviews."
        },
        {
          id: 13,
          question: "TutorClaw's integration test checks the full flow: register learner, upgrade tier, track progress, get profile. A new developer asks: 'Why test all these steps together rather than each tool independently?' What is the correct answer?",
          options: {
            A: "Testing them together saves time compared to four separate tests",
            B: "Integration tests verify that state written by one tool is correctly read by subsequent tools — that register_learner's record format is compatible with what track_progress writes to, and that get_learner_profile reads both correctly. Individual unit tests cannot catch incompatibilities between tools because they each test against their own assumptions, not against each other's actual outputs",
            C: "ClawHub requires integration tests as a condition of marketplace listing",
            D: "Integration tests are only needed when tools share a database"
          },
          correct: "B",
          explanation: "Integration tests catch interface incompatibilities between tools. register_learner might create a record with field completion_list but track_progress expects progress_entries — unit tests for each tool would pass using their own test fixtures, but the real state file created by register_learner would break track_progress. Integration tests use the real tool chain with real state, exposing these field-name and type mismatches that unit tests cannot see."
        },
        {
          id: 14,
          question: "TutorClaw's webhook endpoint receives requests from Stripe. A developer asks: 'Should the handler validate that the event actually came from Stripe?' What is the correct security answer?",
          options: {
            A: "No — Stripe's servers are trusted and validation is unnecessary overhead",
            B: "Yes — Stripe provides a webhook signing secret that is used to compute an HMAC signature for each event. The handler must verify the Stripe-Signature header against the request body using this secret. Without verification, any HTTP client that knows the endpoint URL can send fake payment events to trigger arbitrary tier upgrades — a critical security vulnerability",
            C: "Validation is optional for test mode but required for live mode",
            D: "IP allowlisting Stripe's server IPs is sufficient validation"
          },
          correct: "B",
          explanation: "Webhook signature validation is a mandatory security control, not an optional enhancement. Without it, TutorClaw's upgrade_tier can be triggered by any attacker who discovers the webhook URL. Stripe's signing secret creates a cryptographic guarantee that events came from Stripe's servers — the HMAC verification takes a few lines of code and the Stripe SDK handles the complexity. An unprotected webhook endpoint is a privilege escalation vulnerability."
        },
        {
          id: 15,
          question: "TutorClaw's spec audit reveals list_chapters should return curriculum-ordered chapters, but the curriculum sequence was never formally defined. What should the audit produce for this finding?",
          options: {
            A: "Leave the ordering unspecified — curriculum sequence is a content decision, not a tool concern",
            B: "The audit must produce two artifacts: (1) a formal definition of the curriculum sequence (which chapter comes first, second, etc.), and (2) an updated tool spec that explicitly states list_chapters returns chapters in this defined sequence. The gap between spec and implementation here is a missing specification, not just an implementation deviation — the audit fills the gap",
            C: "Note that alphabetical order is acceptable since curriculum order was never defined",
            D: "Ask ClawHub's editorial team to define the correct curriculum sequence"
          },
          correct: "B",
          explanation: "The Reflection Phase fills specification gaps, not just implementation deviations. When the curriculum sequence was never formally defined, the audit must produce the definition. Without it, every future developer who touches list_chapters will make independent assumptions about ordering. The audit produces the authoritative answer: 'The curriculum sequence is chapters 1, 2, 3... in this pedagogical order, and list_chapters must return them in this sequence.' This becomes the durable specification."
        },
        {
          id: 16,
          question: "TutorClaw's pytest tests pass but a TutorClaw operator says the actual WhatsApp learning experience feels wrong — responses are technically correct but pedagogically flat. What is the limitation of pytest coverage here?",
          options: {
            A: "pytest cannot test conversational agents — a different test framework is needed",
            B: "pytest verifies tool correctness and state transitions — it does not evaluate the qualitative experience of agent responses. The pedagogical feel (warmth, Socratic guidance quality, PRIMM-Lite flow naturalness) is shaped by SOUL.md and prompt engineering, and is only assessable through actual conversational testing with real learners or careful manual evaluation of agent outputs",
            C: "The operator should configure pytest to test WhatsApp messages directly",
            D: "pytest failures would have caught pedagogical quality issues if the tests were written correctly"
          },
          correct: "B",
          explanation: "Test coverage types address different quality dimensions. pytest verifies: does register_learner create the right record structure? Does upgrade_tier change the tier field? These are correctness properties. The qualitative experience — does TutorClaw feel like a warm, encouraging tutor or a cold tool? — is a product quality property that requires human evaluation of actual agent responses. Passing tests do not guarantee a good learning experience."
        },
        {
          id: 17,
          question: "A valid Stripe webhook arrives with a correct signature but references a customer_id that does not exist in TutorClaw's JSON state file. What should the webhook handler do?",
          options: {
            A: "Create a new learner record with the Stripe customer_id as the learner_id",
            B: "Log the event with full details (event type, customer_id, timestamp), return HTTP 200 to acknowledge receipt, and alert the operator — this event represents a real payment from a Stripe customer who has no corresponding TutorClaw learner record, which is a data integrity issue requiring investigation rather than silent failure or automatic record creation",
            C: "Return HTTP 404 to indicate the learner was not found",
            D: "Ignore the event — if the learner doesn't exist, there's nothing to upgrade"
          },
          correct: "B",
          explanation: "An orphaned Stripe customer (paid but no learner record) is a data integrity incident requiring human attention. Automatic record creation risks creating learner records with incorrect initial state. Returning 404 causes Stripe to retry repeatedly. Ignoring the event means a paying customer gets no access — a serious business problem. The correct response: acknowledge receipt, log all details, and alert the operator to investigate and manually reconcile the accounts."
        },
        {
          id: 18,
          question: "TutorClaw is published on ClawHub as version 1.0.0. A fix changes get_learner_profile's output field from 'completion_status' to 'is_completed' — a breaking change. What should happen to TutorClaw's ClawHub listing?",
          options: {
            A: "Update the field silently — field renaming is a minor change that doesn't require version bumps",
            B: "Publish version 2.0.0 with a clear changelog entry: 'BREAKING: get_learner_profile output field renamed from completion_status to is_completed — update any code reading this field.' Existing installations using the 1.0.0 spec will break if they upgrade without code changes — the version bump and changelog communicate this risk clearly",
            C: "Keep the old field name in production and only rename it in the documentation",
            D: "Remove TutorClaw from ClawHub until all users have migrated to the new field name"
          },
          correct: "B",
          explanation: "Breaking changes in published APIs require major version bumps and explicit migration documentation. ClawHub users who built integrations against 1.0.0 depend on completion_status being the field name. A silent rename breaks their code on upgrade without warning. Semantic versioning communicates breaking changes (2.0.0), and the changelog tells integrators exactly what changed and what they need to update. This is the trust contract with the ClawHub community."
        },
        {
          id: 19,
          question: "A developer asks: 'Should integration tests run before or after unit tests in CI?' What is the correct answer and why?",
          options: {
            A: "After — unit tests are faster and cheaper, so they run first to fail fast before the slower, more expensive integration tests run",
            B: "After — unit tests provide fast, precise feedback on individual tool failures. Running them first means integration tests only run after all unit tests pass, preventing slow integration tests from running when a simple unit-level bug is already present. This ordering minimizes CI time and cost while maximizing diagnostic precision",
            C: "Before — integration tests catch more bugs and should be prioritized",
            D: "Simultaneously — modern CI platforms can run all tests in parallel"
          },
          correct: "B",
          explanation: "Test execution order should reflect cost and diagnostic value. Unit tests run in milliseconds and pinpoint individual function failures — they are the cheapest diagnostic signal. Running them first means that if a single tool function is broken, you know immediately without spending time on integration test infrastructure. Integration tests run after unit tests pass, providing system-level confidence only after individual components are verified. This ordering is a standard CI pipeline optimization."
        },
        {
          id: 20,
          question: "TutorClaw's ClawHub page shows a 'one-click install' option. A developer asks: 'What does a learner who clicks one-click install actually get?' What should TutorClaw's ClawHub documentation make clear?",
          options: {
            A: "A complete TutorClaw deployment ready to use immediately without any configuration",
            B: "One-click install provisions TutorClaw on the user's MCP-compatible agent platform — but the learner still needs to connect their WhatsApp number (or use whatever messaging channel the platform supports) and optionally configure their own Stripe keys if they want to enable paid tier. Documentation must clearly state what is automated and what the user must configure post-install",
            C: "A link to TutorClaw's GitHub repository for self-installation",
            D: "Access to TutorClaw's web interface at a ClawHub subdomain"
          },
          correct: "B",
          explanation: "One-click install eliminates the technical deployment barrier but not the configuration requirements. Learners who install expecting a fully configured, immediately usable service and encounter a setup wizard are surprised and frustrated. Documentation must clearly describe what one-click provides (MCP server provisioned, tools registered) and what the user must still configure (messaging channel, Stripe keys for premium features, identity customization). Managing expectations is part of ClawHub publication quality."
        },
        {
          id: 21,
          question: "TutorClaw's integration tests all pass but they don't test the case where the JSON state file is missing on startup. Should this test be added?",
          options: {
            A: "No — the state file should always exist, so testing its absence is unnecessary",
            B: "Yes — startup without a state file is a real production scenario (first deployment, accidental deletion, corrupted file restoration). The test should verify that TutorClaw either creates an empty state file automatically on startup, or fails with a clear actionable error message rather than crashing silently with an unhandled exception mid-request",
            C: "This is an infrastructure concern that should be handled by the deployment team, not tested in the pytest suite",
            D: "Testing file absence would require destructive filesystem operations that cannot run in CI"
          },
          correct: "B",
          explanation: "Missing-file startup scenarios happen in production and must be handled gracefully. First deployments, accidental file deletions, and recovery from backup failures all create the missing-file condition. The test verifies two properties: (1) TutorClaw either auto-initializes the state file or provides a clear error, and (2) the error does not cascade into an unhandled exception that crashes the MCP server. Graceful startup failure is a production reliability requirement."
        },
        {
          id: 22,
          question: "A TutorClaw learner is downgraded to free tier after a failed payment. Three days later their payment succeeds via Stripe's smart retry. The payment_succeeded webhook fires. Should upgrade_tier run even though the downgrade was temporary?",
          options: {
            A: "No — the learner is already downgraded and should manually request re-upgrade",
            B: "Yes — payment_succeeded is the authoritative signal that a learner has paid for premium access. The webhook handler must always call upgrade_tier on payment_succeeded regardless of the current tier state. upgrade_tier should be idempotent (calling it when already on premium tier is a no-op), ensuring correct behavior whether the learner is on free or premium tier when the event arrives",
            C: "Yes, but only after verifying the learner has not already re-subscribed through a different channel",
            D: "No — the handler should check if the learner is already on free tier and reject the upgrade"
          },
          correct: "B",
          explanation: "Event-driven tier management requires unconditional processing of payment events. payment_succeeded always means premium access should be granted — the handler must not add conditional logic about the current tier. This makes the handler idempotent: processing payment_succeeded twice (in a retry scenario) has the same result as processing it once. Idempotent handlers are a webhook design requirement that prevents both missed upgrades and unexpected downgrades."
        },
        {
          id: 23,
          question: "TutorClaw has been live on ClawHub for three months. A new 'ask_ai' tool is being added that lets learners ask general questions outside PRIMM-Lite, requiring publishing version 2.0.0. What should the developer do about existing 1.0.0 installations?",
          options: {
            A: "Force all existing installations to upgrade immediately",
            B: "Publish version 2.0.0 as an opt-in upgrade — existing 1.0.0 installations continue working unchanged. Write a changelog explaining what ask_ai adds and how to upgrade. Provide a deprecation timeline if 1.0.0 will eventually be sunset, with sufficient notice for operators to schedule their upgrade. Breaking existing installations without consent is not acceptable",
            C: "Remove 1.0.0 from ClawHub to encourage all users to upgrade",
            D: "Add ask_ai as a hidden tool in 1.0.0 without updating the version number"
          },
          correct: "B",
          explanation: "Published API versioning is a trust contract with existing users. Operators who deployed TutorClaw 1.0.0 made deployment decisions based on the 1.0.0 spec. Forcing upgrades or removing 1.0.0 breaks their deployments without consent. The correct approach is opt-in version availability: 2.0.0 is published with clear upgrade documentation, 1.0.0 remains available until a communicated sunset date. Operators upgrade on their own schedule."
        },
        {
          id: 24,
          question: "A developer adds Stripe webhook signature validation using the Stripe SDK. During testing, validation always fails. Investigation reveals they used the live mode webhook secret in the Stripe test mode environment. What does this reveal about testing configuration management?",
          options: {
            A: "Stripe's test mode and live mode should use the same webhook secret for simplicity",
            B: "Test and production environments require separate, clearly named environment variables (STRIPE_WEBHOOK_SECRET_TEST and STRIPE_WEBHOOK_SECRET_LIVE) that are independently configured. Mixing secrets across environments is a common configuration management failure — explicit naming and environment-specific configuration files prevent this class of error",
            C: "The Stripe SDK has a bug in test mode signature validation",
            D: "Webhook secrets should be hardcoded during testing to avoid environment variable confusion"
          },
          correct: "B",
          explanation: "Environment-specific credentials must be explicitly separated and clearly named. A single STRIPE_WEBHOOK_SECRET variable that must be manually swapped between test and live values is an error waiting to happen. Using STRIPE_WEBHOOK_SECRET_TEST and STRIPE_WEBHOOK_SECRET_LIVE (loaded by a test-specific .env.test file and a production .env.production file) makes the intended environment clear and prevents credential mixing. Configuration management is a reliability concern, not just an operational detail."
        },
        {
          id: 25,
          question: "TutorClaw integration tests use Stripe's test mode. A developer asks: 'After testing with test mode, should we also test with Stripe's live mode before publishing?' What is the correct answer?",
          options: {
            A: "No — test mode is identical to live mode and live testing is unnecessary",
            B: "A limited live mode smoke test (a small real charge immediately refunded) is valuable before first publication to verify that live API keys work, real payment flows succeed end-to-end, and live webhook delivery to the production endpoint functions correctly — test mode simulates most scenarios but cannot verify production credential validity or live infrastructure routing",
            C: "Live mode testing is prohibited by Stripe's developer terms of service",
            D: "Live mode testing should only be done by real users after publication — testing it yourself is unnecessary"
          },
          correct: "B",
          explanation: "Live mode smoke tests catch real-credential issues before users encounter them. Test mode verifies logic but uses different API keys — if the live key is incorrectly scoped, misspelled, or points to the wrong account, this only surfaces under live conditions. A $0.50 test charge (immediately refunded) through the production endpoint verifies: live key validity, real webhook delivery to the production URL, and the full payment flow under live conditions."
        },
        {
          id: 26,
          question: "An institution uses TutorClaw's managed deployment for 300 students. After two weeks, they report that one student's completion status is appearing on another student's profile. What is the most likely cause in TutorClaw's state management?",
          options: {
            A: "ClawHub's managed deployment mode shares state across all users by design",
            B: "A learner_id collision or lookup error — the most likely cause is that learner records are being looked up by a non-unique key (e.g., a generated ID that collides, or a phone number that was incorrectly normalized), causing get_learner_profile to return the wrong learner's record. The institution's SSO identifiers may be mapping multiple students to the same internal learner_id",
            C: "JSON files cannot support multiple concurrent users without data mixing",
            D: "The managed deployment mode uses a shared conversation context that mixes learner sessions"
          },
          correct: "B",
          explanation: "Progress data mixing is a learner_id uniqueness or lookup problem. When multiple learners resolve to the same learner_id (due to normalization errors, collision in ID generation, or incorrect SSO identity mapping), their progress records become intermixed. This is especially likely in institutional deployments where SSO identifiers are mapped to TutorClaw's internal phone-number-based IDs — the mapping logic may not be handling all edge cases correctly."
        },
        {
          id: 27,
          question: "TutorClaw's spec audit is complete. A teammate asks: 'Should we include internal development notes in the ClawHub documentation?' What is the correct answer?",
          options: {
            A: "Yes — transparency builds trust with the ClawHub community",
            B: "No — ClawHub documentation should contain only information that integrators need to deploy and operate TutorClaw: tool contracts, configuration requirements, installation instructions, and known limitations. Internal development notes (design rationale, implementation decisions, bugs fixed, future plans) belong in the internal codebase documentation or decision records, not in public marketplace documentation",
            C: "Yes, but only notes that are positive and don't reveal limitations",
            D: "Internal notes should replace the spec documentation to provide more context"
          },
          correct: "B",
          explanation: "ClawHub documentation is an operator-facing product document, not a development diary. Operators need to know what TutorClaw does, how to configure it, and what its limitations are — not why certain architectural decisions were made or which bugs were fixed during development. Internal notes in public documentation create confusion and may reveal information about limitations that should be framed as known issues with workarounds rather than raw development notes."
        },
        {
          id: 28,
          question: "A developer wants to monitor TutorClaw's webhook reliability in production. They want to track how many webhooks were received, succeeded, and failed. What should be added to the webhook handler?",
          options: {
            A: "Nothing — Stripe's dashboard already shows webhook delivery statistics",
            B: "Structured logging in the webhook handler: log each incoming event (event_id, type, customer_id, timestamp), log the processing outcome (success with tier_updated, or failure with error_type and error_message), and expose a health endpoint or metrics endpoint that aggregates success/failure counts — TutorClaw needs its own visibility into what it actually processed, not just what Stripe attempted to deliver",
            C: "A weekly email report generated from the JSON state file",
            D: "Monitoring should be added only after launch when real data is available"
          },
          correct: "B",
          explanation: "Stripe's dashboard shows delivery attempts — TutorClaw's logs show processing results. These are different: Stripe knows it sent 100 webhooks and received 100 HTTP 200 responses. TutorClaw's logs reveal whether those 100 accepted webhooks actually resulted in correct tier updates or whether some returned 200 despite internal errors. Structured logging that captures outcome (not just receipt) is the foundation for webhook reliability monitoring."
        },
        {
          id: 29,
          question: "TutorClaw's ClawHub listing offers three installation modes. An enterprise customer asks: 'In self-hosted mode, who is responsible for security updates to TutorClaw's dependencies?' What is the correct answer?",
          options: {
            A: "ClawHub handles all security updates for self-hosted deployments automatically",
            B: "In self-hosted mode, the operator is fully responsible for dependency updates, security patches, and TutorClaw version upgrades. The operator runs TutorClaw on their own infrastructure — ClawHub provides the software package but has no access to or control over the operator's environment. This responsibility must be disclosed clearly in TutorClaw's self-hosted documentation",
            C: "TutorClaw's MCP server has no security vulnerabilities and updates are not needed",
            D: "Anthropic handles Claude-related security; Stripe handles payment security; no other updates are needed"
          },
          correct: "B",
          explanation: "Self-hosted means the operator owns the deployment. This includes running TutorClaw version updates when new releases fix security issues, updating Node.js/Python runtime when CVEs are published, updating npm/pip dependencies when dependency vulnerabilities are disclosed, and maintaining the server infrastructure. ClawHub documentation for self-hosted mode must clearly state this responsibility upfront — enterprises asking this question before deploying are asking the right question."
        },
        {
          id: 30,
          question: "A TutorClaw developer asks: 'After publishing to ClawHub, how do we know if TutorClaw is actually working for users in production?' What monitoring approach should be built before publication?",
          options: {
            A: "Wait for user complaints — errors will surface through support channels",
            B: "Before publication, implement: structured application logs for all tool calls and webhook events, a health check endpoint that verifies JSON state file accessibility and key dependencies are reachable, alerting on error rate spikes, and a synthetic monitoring check that exercises the core learning flow periodically. Production observability must exist before users depend on TutorClaw — not as a response to reported failures",
            C: "Monitor ClawHub review scores — declining ratings indicate production issues",
            D: "Production monitoring is the responsibility of ClawHub's platform team"
          },
          correct: "B",
          explanation: "Production observability is a pre-publication requirement, not a post-incident response. Waiting for user complaints means failures affect real learners before they are detected. Synthetic monitoring (a scheduled agent interaction that exercises register_learner → get_chapter_content → track_progress) detects breakages within minutes. Health check endpoints enable load balancers to remove unhealthy instances. Error rate alerting surfaces degradation before it becomes a crisis. These must be in place on day one."
        }
      ]
    }
  ]
};
