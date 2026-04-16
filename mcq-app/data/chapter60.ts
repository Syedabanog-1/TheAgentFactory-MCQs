import type { Chapter } from "@/types";

export const chapter60: Chapter = {
  id: 60,
  title: "Architecture Decisions & Publishing to ClawHub",
  description: "Analyze TutorClaw's six architectural pivots, distinguish invariant from variant layers, document decisions using ADRs, understand the 95% server-side update advantage, and publish to ClawHub's marketplace for distribution and network effects.",
  color: "teal",
  lessons: [
    {
      id: 1,
      title: "Plans Are Useless — The Six Pivots",
      mcqs: [
        {
          id: 1,
          question: "What does Eisenhower's principle 'Plans are useless, but planning is indispensable' mean in the context of TutorClaw's six architectural pivots?",
          options: {
            A: "Projects that change direction frequently indicate poor initial requirements gathering — the lesson is to write better specifications upfront",
            B: "The original plan became obsolete as real requirements emerged, but the planning process built deep team understanding of constraints and tradeoffs — this understanding enabled rapid, correct pivots rather than paralysis when change was necessary",
            C: "The principle proves that military-style waterfall planning (detailed Gantt charts) is the only way to manage complex architectural projects",
            D: "Frequent pivots indicate the team should hire more experienced architects who can predict requirements correctly before building"
          },
          correct: "B",
          explanation: "The insight is subtle: the value of planning is not the plan (which will be wrong), it is the preparation (team understands the problem space deeply). When pivots were needed, the team understood why prior approaches failed and what the correct solution required — because planning forced deep reasoning from the start."
        },
        {
          id: 2,
          question: "What are the correct terms for the two categories of TutorClaw components, and how are they defined?",
          options: {
            A: "Stable code vs. unstable code — stability is determined by commit frequency in git history",
            B: "Invariant layers (components that deliver core value and survive every architectural pivot) vs. variant layers (implementation details that change as technology, scale, and understanding evolve)",
            C: "Business logic vs. infrastructure code — a standard separation of concerns in any software architecture",
            D: "Core features vs. nice-to-have features — determined by user feedback and product-market fit validation"
          },
          correct: "B",
          explanation: "Invariant layers define what makes TutorClaw valuable — the pedagogy, content, billing, and learning sequence. These cannot change without changing what TutorClaw IS. Variant layers define how TutorClaw is delivered — servers, containers, deployment tools. These can change completely without affecting what TutorClaw does for learners."
        },
        {
          id: 3,
          question: "What does the 90/10 rule prescribe for architectural validation?",
          options: {
            A: "Spend 90% of sprint time on features and only 10% on refactoring to maximize velocity",
            B: "Test your architecture against the most demanding, edge-case 10% of requirements first — if the architecture fails under extreme conditions, pivot before building the other 90% of the system on a flawed foundation",
            C: "Complete 90% of planned features before running any architecture validation tests to avoid premature optimization",
            D: "Allocate 90% of the infrastructure budget before writing application code, ensuring sufficient scale capacity from day one"
          },
          correct: "B",
          explanation: "The 90/10 rule prioritizes architectural validation: the hard 10% (edge cases, isolation requirements, scale scenarios) precisely reveals fundamental architectural flaws. Testing these first means failures are discovered before the 90% of routine functionality is built on top of a broken foundation."
        },
        {
          id: 4,
          question: "What was Pivot 3 in TutorClaw's architectural history and what problem did it solve?",
          options: {
            A: "Pivot 3 replaced JSON file storage with a PostgreSQL database after discovering performance issues",
            B: "Pivot 3 replaced a multi-tenant shared process architecture with container-per-learner isolation after discovering state bleeding across learner sessions in load tests",
            C: "Pivot 3 replaced the WhatsApp channel with Telegram after discovering WhatsApp's API limitations",
            D: "Pivot 3 replaced the PRIMM-Lite pedagogy with direct instruction after learner feedback indicated confusion"
          },
          correct: "B",
          explanation: "Pivot 3 addressed a critical security and correctness failure: multi-tenant shared processes allowed learner state to bleed across sessions under load. Container-per-learner isolation (NanoClaw via NemoClaw) solved the isolation requirement at the cost of higher per-learner compute. The 90/10 rule would have caught this earlier."
        },
        {
          id: 5,
          question: "What does Pivot 6's 'Platform Inversion' mean in TutorClaw's architectural evolution?",
          options: {
            A: "TutorClaw inverted its pricing model from per-session billing to flat monthly subscriptions",
            B: "The infrastructure model was inverted — learners became the compute infrastructure providers (supplying their own LLM API keys), while the operator's server costs collapsed to near-zero",
            C: "TutorClaw inverted its teaching sequence, starting with advanced topics and working backward to fundamentals",
            D: "The platform inverted its distribution model, moving from ClawHub marketplace to direct sales"
          },
          correct: "B",
          explanation: "Platform Inversion is the final architectural pivot: rather than the operator providing compute (paying LLM costs for all learners), learners are the infrastructure (each brings their own API key). This inverted the cost structure — learners ARE the infrastructure — collapsing operator costs to server hosting alone."
        }
      ]
    },
    {
      id: 2,
      title: "Architecture Decision Records (ADRs)",
      mcqs: [
        {
          id: 1,
          question: "Why does ADR-004 (documenting the container-per-learner isolation decision) prevent a new engineer's cost-cutting proposal from being accepted without thorough evaluation?",
          options: {
            A: "ADRs are legally binding contracts — once written, architectural decisions cannot be changed without project manager approval",
            B: "ADR-004 documents that multi-tenancy was tested and found to cause state bleeding at load — the proposal reintroduces a known failure mode. The ADR forces the team to address the original problem rather than unknowingly undoing a deliberate choice",
            C: "ADRs are automatically enforced by Claude Code's linting system, which blocks code changes that violate documented decisions",
            D: "New engineers are not authorized to propose changes covered by ADRs without senior architect review"
          },
          correct: "B",
          explanation: "ADRs are institutional memory that prevents 'groundhog day' architecture. Without ADR-004, a new engineer sees current costs and proposes multi-tenancy. With ADR-004, they see why multi-tenancy was tried, what it failed at, and what isolation requirement it couldn't meet. The proposal is not blocked — but it must address the documented failure mode."
        },
        {
          id: 2,
          question: "Which characteristic best indicates that a decision should be documented as an ADR rather than left in commit messages or code comments?",
          options: {
            A: "Any decision that takes more than 30 minutes to make should be documented as an ADR",
            B: "Decisions that are hard to reverse, have significant cross-system consequences, required evaluating multiple alternatives, or embed assumptions that future developers might challenge — their 'why' is not visible in the resulting code",
            C: "All decisions should be ADR'd regardless of magnitude — consistency is more important than selectivity",
            D: "Only decisions made by senior architects deserve ADRs; junior developer decisions are tracked in commit messages"
          },
          correct: "B",
          explanation: "The utility of an ADR is inversely proportional to how visible the reasoning is in the code. Code shows WHAT was chosen (NanoClaw containers). ADR explains WHY (state isolation at scale, alternatives rejected, costs accepted). Minor decisions leave no architectural debt if changed; major decisions embed assumptions that, if violated, cause system-level failures."
        },
        {
          id: 3,
          question: "What four fields does a well-written ADR typically contain?",
          options: {
            A: "Author, Date, Cost Estimate, and Rollback Plan",
            B: "Context (why the decision was needed), Decision (what was chosen), Alternatives Considered (what was evaluated and rejected), and Consequences (what the choice costs and enables)",
            C: "Problem Statement, Solution, Testing Criteria, and Deployment Notes",
            D: "User Story, Acceptance Criteria, Implementation Notes, and Sign-off Approvals"
          },
          correct: "B",
          explanation: "A complete ADR documents: Context (the problem and constraints driving the decision), Decision (the specific choice made), Alternatives Considered (what was evaluated and why rejected), and Consequences (the costs, benefits, and implications of the choice). Together these make the decision reproducible and contestable by future team members."
        },
        {
          id: 4,
          question: "Why are ADRs described as 'living documents' rather than historical records?",
          options: {
            A: "They are automatically updated by Claude Code whenever the relevant code files change",
            B: "New information may emerge that changes the validity of a past decision — ADRs should be superseded when a better decision is made, with the new ADR referencing and explaining why the old one no longer applies",
            C: "They are version-controlled in a separate repository that is continuously refreshed with current system state",
            D: "Living documents means they are editable by all team members at any time without approval"
          },
          correct: "B",
          explanation: "'Living documents' means ADRs evolve: when a decision is superseded by a better one (as in TutorClaw's six pivots), the new ADR references the old one and explains what changed. The old ADR remains in the record — both for history and because its reasoning may still be relevant to understanding constraints."
        },
        {
          id: 5,
          question: "What is the practical difference between documenting architectural decisions in git commit messages versus dedicated ADR files?",
          options: {
            A: "Commit messages are more secure because they cannot be edited after creation; ADR files can be tampered with",
            B: "ADR files are discoverable, structured, searchable, and self-contained — a new engineer can read ADR-004 without excavating git history. Commit messages bury architectural reasoning inside operational commit sequences with no consistent structure",
            C: "Commit messages are automatically synced to ClawHub's documentation system; ADR files require manual updates",
            D: "There is no practical difference — both serve the same documentation purpose equally well"
          },
          correct: "B",
          explanation: "ADR files are purpose-designed for architectural reasoning: they are easy to find (a dedicated /decisions or /adrs directory), consistently structured (context, decision, alternatives, consequences), and searchable. Commit messages are operational records — architectural reasoning buried in them requires reconstructing history across potentially hundreds of commits."
        }
      ]
    },
    {
      id: 3,
      title: "The 95% Server-Side Update Advantage and ClawHub",
      mcqs: [
        {
          id: 1,
          question: "What architectural principle enables TutorClaw to deliver 95% of all product updates without requiring changes to the OpenClaw shim installed on users' devices?",
          options: {
            A: "MCP servers use semantic versioning that automatically maintains backwards compatibility for all non-major version updates",
            B: "The separation between invariant (MCP server = intelligence and content) and variant (OpenClaw shim = thin delivery interface) layers means intelligence can be updated server-side without touching the client",
            C: "Cloudflare R2 automatically pushes updated content to all user devices through a background sync mechanism",
            D: "OpenClaw's auto-update system silently updates all shims within 24 hours of any server change"
          },
          correct: "B",
          explanation: "The 95/5 advantage is a direct consequence of layer separation. The invariant layer (pedagogy, content, pricing in the MCP server) updates without user action. The variant layer (tool interface) only changes when fundamental contracts change. For TutorClaw, adding curriculum, improving guidance, or fixing billing bugs are all server-side — learners get improvements automatically."
        },
        {
          id: 2,
          question: "What are the three installation paths ClawHub offers for published MCP servers, and why does offering all three matter for adoption?",
          options: {
            A: "iOS App Store, Android Play Store, and web browser — because mobile-first users dominate the education market",
            B: "One-click consumer install (individual self-service), managed institutional deployment (operator provisions for all users centrally), and self-hosted on-premise (air-gapped environments with complete data control) — each addresses a different adopter archetype",
            C: "Free tier, paid tier, and enterprise tier — three monetization paths unlocking progressively more features",
            D: "Python package install, Docker container, and bare-metal binary — three technical deployment environments"
          },
          correct: "B",
          explanation: "Adoption breadth requires removing deployment friction for every adopter type. One-click handles individual learners. Managed deployment handles institutions provisioning at scale. Self-hosted handles security-sensitive enterprises. Each missing path blocks an entire adopter segment — offering all three multiplies potential adoption across different market segments."
        },
        {
          id: 3,
          question: "What does ClawHub's network effect flywheel consist of?",
          options: {
            A: "More servers → lower hosting costs → lower prices → more users → more servers",
            B: "More quality agents attract more users → more users attract more developers to publish → more developers create more quality agents → repeat",
            C: "More users → more Stripe revenue → more investment in AI models → better quality → more users",
            D: "More marketplace listings → higher search ranking → more discovery → more installations → more marketplace listings"
          },
          correct: "B",
          explanation: "ClawHub's network effect is supply-demand-supply compounding: quality supply (good agents) drives user demand; user demand attracts developer supply (more published agents); more developer supply increases quality and variety, attracting more users. This flywheel accelerates the platform's value as both sides grow."
        },
        {
          id: 4,
          question: "What are the only 5% of TutorClaw changes that require a client-side shim update?",
          options: {
            A: "Any update to TutorClaw's SOUL.md or IDENTITY.md persona files",
            B: "Changes that modify the tool interface contract — new tool names, changed parameter signatures, or removed tools that the shim references by name in its configuration",
            C: "All Stripe pricing changes, since billing configuration is stored in the client shim",
            D: "Any update that adds more than three new content chapters to the curriculum library"
          },
          correct: "B",
          explanation: "The 5% requiring shim updates are interface contract changes: if a tool is renamed, its parameters change incompatibly, or it is removed, the shim's configuration that references those tools must be updated. Content additions, pedagogy improvements, pricing changes, and bug fixes in tool logic are all server-side and require no client update."
        },
        {
          id: 5,
          question: "What does the 'Consumer-to-Architect synthesis' mean in Part 5's conclusion?",
          options: {
            A: "Consumers should pay for architecture decisions and architects should consume those payments — a ClawHub revenue-sharing model",
            B: "A developer who has consumed the OpenClaw platform, learned from it, built on it, and now publishes to it has become an active architect of the ecosystem — contributing to the supply side of the network flywheel rather than just participating in it",
            C: "The synthesis means waiting until you are an experienced architect before publishing to ClawHub, to avoid listing low-quality work",
            D: "Consumers and architects are interchangeable roles that developers move between based on whether they are using or building tools on any given day"
          },
          correct: "B",
          explanation: "The Consumer-to-Architect synthesis captures a development journey: students consumed OpenClaw's tools, built TutorClaw on OpenClaw's infrastructure, and publishing to ClawHub completes the arc — they become contributors who grow the platform for the next generation. This isn't just philosophical; it's strategic because ClawHub's network effects provide distribution no standalone website can match."
        }
      ]
    },
    {
      id: 4,
      title: "Invariant vs Variant Layers",
      mcqs: [
        {
          id: 1,
          question: "Which TutorClaw components are classified as invariant layers that survived all six architectural pivots?",
          options: {
            A: "The Docker configuration, server deployment scripts, and Node.js version requirements",
            B: "The PRIMM-AI+ pedagogical framework, curated content library, pricing model, and learning sequence — the components that define TutorClaw's value",
            C: "The Stripe payment integration, WhatsApp channel connector, and Cloudflare R2 storage configuration",
            D: "The OpenClaw version, MCP server transport protocol, and container orchestration platform"
          },
          correct: "B",
          explanation: "Invariant layers define what TutorClaw IS: the pedagogy (PRIMM-AI+), content (curriculum library), pricing (tier structure), and learning sequence. These cannot change without fundamentally changing the product. All six pivots changed the delivery mechanism while preserving these core value components."
        },
        {
          id: 2,
          question: "Which TutorClaw components are classified as variant layers that changed across architectural pivots?",
          options: {
            A: "The PRIMM-Lite teaching steps, chapter content, and learner tier pricing",
            B: "The server infrastructure, container configuration, deployment platform, and transport protocol — implementation details that changed as technology and understanding evolved",
            C: "The list of nine MCP tools and their functional purposes",
            D: "The Stripe integration and webhook handling logic"
          },
          correct: "B",
          explanation: "Variant layers are implementation details: how TutorClaw is delivered (server type), how it is isolated (multi-tenant vs. containers), how it is deployed (cloud provider, Docker setup), and how it communicates (transport protocol). These changed across pivots without changing what TutorClaw does for learners."
        },
        {
          id: 3,
          question: "What does the 'loading dock' analogy illustrate about invariant layers?",
          options: {
            A: "Content must be loaded into the MCP server's memory at startup before any learner requests can be served",
            B: "Regardless of how the warehouse (infrastructure) is restructured, goods (value delivery) must always move in and out of the same place (invariant interface) — the loading dock stays fixed even as the building around it changes",
            C: "The invariant layer is the heaviest component and should be loaded last to prevent system crashes",
            D: "Content loading is the bottleneck in TutorClaw's performance and should be optimized first"
          },
          correct: "B",
          explanation: "The loading dock analogy: the dock is where value enters and exits the warehouse — it cannot move or the entire logistics chain breaks. Similarly, invariant layers (pedagogy, content, billing) are the fixed interfaces through which TutorClaw delivers value. The warehouse (infrastructure) around them can be completely rebuilt."
        },
        {
          id: 4,
          question: "How does understanding invariant vs. variant layers change how a developer approaches the next architectural pivot?",
          options: {
            A: "It allows developers to skip testing when only variant layers change, since invariant layers guarantee correctness",
            B: "It provides a decision framework: protect and preserve invariant layers during the pivot, aggressively redesign variant layers as needed. The pivot should never compromise the invariant layer to optimize a variant one",
            C: "It justifies delaying all pivots until both invariant and variant layers can be changed simultaneously",
            D: "It requires creating a separate code repository for each layer to prevent accidental coupling"
          },
          correct: "B",
          explanation: "The invariant/variant distinction is a decision framework for pivots: when faced with an architectural change, identify what MUST be preserved (invariant layers — the pedagogy, content, billing) and what CAN be changed (variant layers — infrastructure, deployment, transport). The pivot optimizes variant layers without compromising invariant ones."
        },
        {
          id: 5,
          question: "Why is billing logic classified as an invariant layer in TutorClaw despite being technically changeable?",
          options: {
            A: "Stripe's contract legally prevents TutorClaw from changing its pricing structure once published",
            B: "The billing logic (tier structure, access rules, pricing points) defines TutorClaw's business model — changing it changes the fundamental value proposition and learner relationship, making it a core identity component rather than an implementation detail",
            C: "Billing logic is hard-coded into the Stripe integration and cannot be changed without rebuilding the entire payment system",
            D: "ClawHub marketplace policies prohibit pricing changes after initial publication"
          },
          correct: "B",
          explanation: "Billing is invariant because it defines the business relationship: the free/paid/premium tier structure, what each tier can access, and the pricing points are the commercial expression of TutorClaw's value. Changing the tier structure changes what TutorClaw IS to its learners — it is not an implementation detail but a core identity decision."
        }
      ]
    },
    {
      id: 5,
      title: "Versioning and Distribution Strategy",
      mcqs: [
        {
          id: 1,
          question: "What versioning strategy does TutorClaw use, and what does it ensure for learners who have already installed the shim?",
          options: {
            A: "Calendar versioning (YYYY.MM.DD) — ensures learners always know how recently the server was updated",
            B: "Semantic versioning (MAJOR.MINOR.PATCH) — MAJOR version bumps signal breaking shim interface changes (the 5% requiring client updates), while MINOR and PATCH updates are server-side only (the 95% transparent to learners)",
            C: "Single-number versioning — each new release increments the number regardless of change magnitude",
            D: "Hash-based versioning — content-addressed versions ensure identical server state across all deployments"
          },
          correct: "B",
          explanation: "Semantic versioning communicates impact: MAJOR version changes signal breaking interface changes that require learners to update their shim (the 5%). MINOR and PATCH changes are server-side improvements that learners receive automatically without any action (the 95%). The version number itself signals whether a user update is required."
        },
        {
          id: 2,
          question: "What is the primary distribution advantage of ClawHub marketplace listing over self-hosting TutorClaw on a standalone website?",
          options: {
            A: "ClawHub provides free server infrastructure for marketplace-listed applications",
            B: "ClawHub provides organic discovery through marketplace search, category browsing, and network effects — learners actively searching for tutoring agents find TutorClaw without the operator paying for marketing",
            C: "ClawHub automatically translates TutorClaw into 40 languages for global markets",
            D: "ClawHub handles all Stripe payment processing, eliminating operator payment integration work"
          },
          correct: "B",
          explanation: "ClawHub's marketplace creates passive discovery: learners searching 'AI tutoring' or browsing educational agents find TutorClaw through the platform's search and ranking. This organic discovery compounds over time as usage and reviews increase. A standalone website only reaches users who are specifically looking for TutorClaw, requiring active marketing investment."
        },
        {
          id: 3,
          question: "When must the client-side OpenClaw shim be updated for a TutorClaw change?",
          options: {
            A: "Whenever TutorClaw's JSON state file schema is updated",
            B: "When TutorClaw introduces a new tool with a new name, changes an existing tool's parameter signature incompatibly, or removes a tool the shim's configuration references",
            C: "After every MINOR version update to ensure learners always have the latest improvements",
            D: "When TutorClaw's Cloudflare R2 bucket URL is changed to a new domain"
          },
          correct: "B",
          explanation: "Shim updates are needed only when the tool interface contract changes: new tool names not in the shim's registry, incompatible parameter changes, or removed tools the shim references. Content changes, pedagogy improvements, bug fixes in tool logic, and pricing updates all happen server-side — the shim's tool references remain valid."
        },
        {
          id: 4,
          question: "What does the ClawHub network effect mean practically for a TutorClaw developer who publishes there?",
          options: {
            A: "The developer receives a percentage of revenue from other educational tools that TutorClaw's presence attracts to the platform",
            B: "Each TutorClaw installation generates usage and review signals that improve its ClawHub ranking, driving more organic discovery, which drives more installations — compounding adoption without proportional marketing spend",
            C: "The developer gains access to all other ClawHub developers' user bases through a reciprocal sharing agreement",
            D: "ClawHub automatically cross-promotes TutorClaw in all other educational tool listings"
          },
          correct: "B",
          explanation: "The practical network effect: each TutorClaw user generates signal (installation count, reviews, activity). Higher signal improves ClawHub ranking. Better ranking increases organic discovery. More discovery drives more installations, which generates more signal. This compounding loop means early ClawHub presence builds momentum that standalone distribution cannot replicate."
        },
        {
          id: 5,
          question: "What does TutorClaw's 95% server-side update capability mean for the operator's relationship with learners?",
          options: {
            A: "Operators can make unlimited changes to TutorClaw without ever informing learners",
            B: "95% of improvements reach learners automatically without requiring them to take any action — curriculum additions, better explanations, bug fixes, and pricing changes all deploy silently, creating a progressively improving product experience",
            C: "Operators must notify 95% of learners before making server-side changes",
            D: "95% of learners will automatically adopt any new features without the remaining 5% needing persuasion"
          },
          correct: "B",
          explanation: "The 95% server-side advantage means continuous improvement without user friction: every curriculum addition, every pedagogy refinement, every billing fix is received by all learners automatically. The learner's experience improves over time with zero installation effort — a significant quality-of-life advantage over traditional software that requires explicit updates."
        }
      ]
    },
    {
      id: 6,
      title: "Part 5 Retrospective and Platform Inversion",
      mcqs: [
        {
          id: 1,
          question: "What does the 'Part 5 Retrospective' lesson synthesize across Chapters 56-60?",
          options: {
            A: "A comparison of TutorClaw's performance benchmarks against industry competitors",
            B: "The progression from Consumer (using OpenClaw) to Builder (creating MCP tools) to Architect (designing systems that use economic and architectural principles) to Publisher (contributing to the ecosystem)",
            C: "A technical review of all code written across the five chapters for refactoring opportunities",
            D: "A financial audit comparing actual development costs to the $50-70/month infrastructure target"
          },
          correct: "B",
          explanation: "The retrospective traces the learner's progression across Part 5: Chapter 56 as a Consumer (using OpenClaw), Chapter 57 as a Builder (building MCP tools), Chapter 58 as a full-stack developer (building TutorClaw), Chapter 59 as an economist (understanding the business model), and Chapter 60 as an Architect (understanding principles and contributing to the ecosystem)."
        },
        {
          id: 2,
          question: "What does 'Platform Inversion' mean in the context of TutorClaw's economic and architectural model?",
          options: {
            A: "TutorClaw's platform was inverted from B2B to B2C targeting after market research",
            B: "The traditional relationship between platform and user is inverted — learners ARE the infrastructure (supplying their own compute via API keys) while the operator provides intelligence and tools, reversing the usual model where operators provide both",
            C: "TutorClaw's distribution platform was inverted from push marketing to pull discovery through ClawHub",
            D: "The development platform was inverted from waterfall to agile after TutorClaw's first three pivots"
          },
          correct: "B",
          explanation: "Platform Inversion is the economic core of Part 5: in traditional platforms, the operator provides everything (compute + intelligence). In the inverted model, users provide compute (their LLM subscriptions) and the operator provides intelligence (tools, content, pedagogy). The 'platform' is not the operator's servers — it is the combined system of operator intelligence plus user compute."
        },
        {
          id: 3,
          question: "What eight meta-lessons from TutorClaw's architecture does Chapter 60 organize into three themes?",
          options: {
            A: "Build fast, test often, ship early — organized by development velocity",
            B: "Structure for replacement (build knowing variants will change), ship and learn (real-world feedback beats pre-launch perfection), question the premise (challenge fundamental assumptions before solving the presented problem)",
            C: "Plan thoroughly, execute precisely, measure continuously — the three phases of software project management",
            D: "Design for scale, optimize for cost, monitor for reliability — the three pillars of production systems"
          },
          correct: "B",
          explanation: "Chapter 60's eight meta-lessons organize into: Structure for replacement (design variant layers to change without breaking invariant ones), Ship and learn (deploy early, let real usage reveal the next right pivot), and Question the premise (before solving the stated problem, verify it is the right problem — Pivot 6's entire economic inversion came from questioning the assumption that operators should provide compute)."
        },
        {
          id: 4,
          question: "What does 'structure for replacement' mean as an architectural meta-lesson from TutorClaw's pivots?",
          options: {
            A: "Always maintain a backup deployment so any component can be replaced with zero downtime",
            B: "Design each variant layer (infrastructure, transport, deployment) to be replaceable independently — when a better technology or approach emerges, the component can be swapped without disrupting invariant layers or requiring full system rebuilds",
            C: "Document all components thoroughly so replacement developers can maintain the codebase",
            D: "Build redundant implementations of every component so failures trigger automatic replacement"
          },
          correct: "B",
          explanation: "'Structure for replacement' is designing for the certainty of change: you know today's infrastructure will be replaced by better options. If each variant layer is cleanly isolated from invariant layers, replacement is a contained operation. TutorClaw's pivots were faster and less disruptive because pedagogy, content, and billing were never coupled to the infrastructure being replaced."
        },
        {
          id: 5,
          question: "What bridges Part 5 (Building OpenClaw Apps) to Part 6 (Building Agent Factories)?",
          options: {
            A: "Part 6 introduces a new programming language optimized for factory-scale agent deployments",
            B: "Part 5 demonstrates building one complete agent product (TutorClaw). Part 6 scales the principles — instead of deploying one agent, an Agent Factory produces, manages, and orchestrates many agent products systematically, applying the architectural and economic lessons at industrial scale",
            C: "Part 6 requires completing all of Part 5's TutorClaw before any content is accessible",
            D: "Part 6 replaces TutorClaw's JSON persistence with enterprise database systems as the first lesson"
          },
          correct: "B",
          explanation: "The bridge is scale: Part 5 applied architectural principles (invariant/variant layers, economic inversion, ADRs, versioning) to one product. Part 6 asks: how do you apply these principles to systematically produce many agent products? The factory metaphor captures the shift from craftsperson (building one thing) to factory operator (building the system that builds things)."
        }
      ]
    }
  ]
};
