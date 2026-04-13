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
          question: "TutorClaw underwent six major architectural pivots between initial concept and shipped product. Pivot 1: replaced a planned Agent SDK runtime with OpenClaw + Claude + Skills after a GTC announcement made the custom runtime redundant. Pivot 3: replaced multi-tenant shared processes with a custom brain + container-per-learner model after discovering state isolation failures. Pivot 6: inverted the infrastructure model entirely, making learners the compute providers. A project manager asks how to justify these changes to stakeholders who expected the original design. Which principle, drawn from Eisenhower's D-Day experience, accurately explains why frequent pivots are a sign of good architecture, not poor planning?",
          options: {
            A: "Projects that change direction frequently indicate poor initial requirements gathering — the lesson is to write better specifications upfront",
            B: "'Plans are useless, but planning is indispensable' — the original plan became obsolete as real requirements emerged, but the planning process built deep team understanding of constraints and tradeoffs. This understanding is what enabled rapid, correct pivots rather than paralysis or wrong turns when change was necessary",
            C: "The Eisenhower principle proves that military-style waterfall planning (detailed Gantt charts) is the only way to manage complex architectural projects",
            D: "Frequent pivots indicate the team should hire more experienced architects who can predict requirements correctly before building"
          },
          correct: "B",
          explanation: "The insight is subtle: the value of planning is not the plan (which will be wrong), it is the preparation (team understands the problem space deeply). When Pivot 3 was needed, the team understood why multi-tenancy failed and what container isolation required — because the planning process had forced them to reason about isolation from the start, even if the original implementation choice was wrong."
        },
        {
          id: 2,
          question: "Across TutorClaw's six pivots, certain components survived every architectural change intact. The PRIMM-AI+ pedagogical framework existed in Pivot 1 and is still present in the final Pivot 6 architecture. The billing system, curriculum library, and learning sequence all persisted. In contrast, the server configuration changed three times, Docker setup was rewritten twice, and the deployment method changed with nearly every pivot. An architect classifies these two categories using specific terms. What are the correct terms and their definitions?",
          options: {
            A: "Stable code vs. unstable code — stability is determined by commit frequency in git history",
            B: "Invariant layers (components that deliver core value and survive every architectural pivot — the 'loading dock that always stays in the same place') vs. variant layers (implementation details that change as technology, scale, and understanding evolve — the scaffolding around the loading dock)",
            C: "Business logic vs. infrastructure code — a standard separation of concerns in any software architecture",
            D: "Core features vs. nice-to-have features — determined by user feedback and product-market fit validation"
          },
          correct: "B",
          explanation: "Invariant layers define what makes TutorClaw valuable — the pedagogy, content, billing, and learning sequence. These cannot change without changing what TutorClaw IS. Variant layers define how TutorClaw is delivered — servers, containers, deployment tools. These can change completely without affecting what TutorClaw does for learners. The loading dock analogy captures it: regardless of how the warehouse is restructured, goods still need to move in and out of the same place."
        },
        {
          id: 3,
          question: "TutorClaw's Pivot 3 replaced a multi-tenant shared process architecture with container-per-learner isolation after discovering that learner state was bleeding across sessions in load tests. The team had initially chosen multi-tenancy as 'simpler and cheaper.' Chapter 60 introduces the '90/10 rule' for testing architecture before building on it. A team lead wants to apply this rule to prevent similar late-stage pivots on their next project. What does the 90/10 rule prescribe?",
          options: {
            A: "Spend 90% of sprint time on features and only 10% on refactoring to maximize velocity",
            B: "Test your architecture against the most demanding, edge-case 10% of requirements first — if the architecture fails under extreme conditions (isolation requirements, scale tests, security edge cases), pivot before building the other 90% of the system on top of a flawed foundation",
            C: "Complete 90% of planned features before running any architecture validation tests, to avoid premature optimization",
            D: "Allocate 90% of the infrastructure budget before writing application code, ensuring sufficient scale capacity from day one"
          },
          correct: "B",
          explanation: "The 90/10 rule is a prioritization strategy for architectural validation. The 'hard 10%' — edge cases, isolation requirements, scale scenarios — are precisely the conditions that reveal fundamental architectural flaws. Testing these first means failures are discovered before the 90% of routine functionality is built on top of a broken foundation. TutorClaw's team discovered multi-tenancy failed only under load testing — earlier 90/10 testing would have surfaced this in Pivot 1, not Pivot 3."
        }
      ]
    },
    {
      id: 2,
      title: "Architecture Decision Records (ADRs)",
      mcqs: [
        {
          id: 1,
          question: "TutorClaw documents each major architectural decision using Architecture Decision Records (ADRs). ADR-004 (Pivot 4: container-per-learner isolation) contains: Context (multi-tenant state bleeding discovered in load tests), Decision (NanoClaw containers via NemoClaw), Alternatives Considered (process-level isolation, session token namespacing), Consequences (higher per-learner compute cost, guaranteed isolation, simpler debugging). A new engineer joins six months after Pivot 4 and reads ADR-004. They propose reverting to multi-tenancy because 'it would cut costs by 40%.' Why does ADR-004 prevent the team from accepting this proposal without thorough evaluation?",
          options: {
            A: "ADRs are legally binding contracts — once written, architectural decisions cannot be changed without project manager approval",
            B: "ADR-004 documents that multi-tenancy was not a naive oversight but a deliberate choice that was tested and found to cause state bleeding at load — the new engineer's proposal reintroduces a known failure mode. The ADR forces the team to address the original problem (state isolation) rather than unknowingly undoing a deliberate choice",
            C: "ADRs are automatically enforced by Claude Code's linting system, which blocks code changes that violate documented decisions",
            D: "The engineer should be able to revert without justification — ADRs are historical documents, not constraints on future decisions"
          },
          correct: "B",
          explanation: "ADRs are institutional memory that prevents 'groundhog day' architecture. Without ADR-004, a new engineer sees only current costs and proposes multi-tenancy. With ADR-004, they see the full context: why multi-tenancy was tried, what it failed at, and what isolation requirement it couldn't meet. The proposal is not blocked — but it must address the documented failure mode, not just the cost delta."
        },
        {
          id: 2,
          question: "A team debates whether to use ADRs for every decision or only for major architectural pivots. During TutorClaw's development, minor decisions — like using Python's pathlib vs. os.path for file operations — were not ADR'd, while major decisions like the NanoClaw container choice were. A project lead wants a principle for deciding which decisions warrant an ADR. Which characteristic best indicates that a decision should be documented as an ADR?",
          options: {
            A: "Any decision that takes more than 30 minutes to make should be documented as an ADR, regardless of scope",
            B: "Decisions that are hard to reverse, have significant cross-system consequences, required evaluating multiple alternatives, or embed assumptions that future developers might challenge — these warrant ADRs because their 'why' is not visible in the resulting code",
            C: "All decisions should be ADR'd regardless of magnitude — consistency is more important than selectivity",
            D: "Only decisions made by senior architects deserve ADRs; junior developer decisions are tracked in commit messages"
          },
          correct: "B",
          explanation: "The utility of an ADR is inversely proportional to how visible the reasoning is in the code. Code shows WHAT was chosen (NanoClaw containers). ADR explains WHY (state isolation at scale, alternatives rejected, costs accepted). Minor decisions (pathlib vs os.path) leave no architectural debt if changed. Major decisions (container isolation) embed assumptions that, if violated, cause system-level failures — those warrant the documentation investment."
        }
      ]
    },
    {
      id: 3,
      title: "The 95% Server-Side Update Advantage and ClawHub",
      mcqs: [
        {
          id: 1,
          question: "TutorClaw is architected so that 95% of all product updates — new curriculum chapters, improved PRIMM-AI+ guidance, model recommendations, pricing changes, bug fixes in pedagogy logic — are deployed by updating the MCP server without requiring any changes to the OpenClaw 'shim' installed on users' devices. Only 5% of changes (new tool signatures or breaking interface changes) require a shim update that users must install. A product manager asks what specific architectural principle enables this 95/5 split. What is the correct explanation?",
          options: {
            A: "MCP servers use semantic versioning that automatically maintains backwards compatibility for all non-major version updates",
            B: "The separation between invariant (MCP server = intelligence and content) and variant (OpenClaw shim = thin delivery interface) layers means intelligence can be updated server-side without touching the client. The shim only changes when the tool interface contract changes — which is rare by design",
            C: "Cloudflare R2 automatically pushes updated content to all user devices through a background sync mechanism",
            D: "OpenClaw's auto-update system silently updates all shims within 24 hours of any server change, making the 95% figure irrelevant in practice"
          },
          correct: "B",
          explanation: "The 95/5 advantage is a direct consequence of good layer separation. The invariant layer (pedagogy, content, pricing in the MCP server) updates without user action. The variant layer (tool interface — how the shim calls the server) only changes when fundamental contracts change. For TutorClaw, adding a new chapter, improving a guidance prompt, or fixing a billing bug are all server-side — learners get improvements automatically, with zero friction."
        },
        {
          id: 2,
          question: "ClawHub is the OpenClaw marketplace for AI agents and MCP servers. TutorClaw is published there and available via three install paths. An educational institution (5,000 students) wants to deploy TutorClaw. Individual students want to install it themselves on personal WhatsApp numbers. An enterprise with air-gapped security requirements needs on-premise deployment. Which three install paths does ClawHub offer, and why does having all three matter for adoption?",
          options: {
            A: "iOS App Store, Android Play Store, and web browser — because mobile-first users dominate the education market",
            B: "One-click consumer install (individual self-service), managed institutional deployment (operator provisions accounts for all students centrally), and self-hosted on-premise (air-gapped environments with complete data control) — each path addresses a different adopter archetype with different trust, control, and deployment requirements",
            C: "Free tier, paid tier, and enterprise tier — three monetization paths that unlock progressively more features",
            D: "Python package install, Docker container, and bare-metal binary — three technical deployment environments"
          },
          correct: "B",
          explanation: "Adoption breadth requires removing deployment friction for every adopter type. One-click handles individual learners who want instant access. Managed deployment handles institutions that provision at scale and need centralized control. Self-hosted handles security-sensitive enterprises that cannot allow external data flows. Each missing path blocks an entire adopter segment — offering all three multiplies potential adoption across different market segments."
        },
        {
          id: 3,
          question: "ClawHub's marketplace creates network effects: more quality agents attract more users; more users attract more developers to publish agents; more developers create more quality agents. A startup considers whether to publish TutorClaw exclusively on their own website or also on ClawHub. The final Chapter 60 lesson describes a 'Consumer-to-Architect synthesis' — a mindset shift. What does this synthesis mean, and why does it argue for participating in ClawHub's ecosystem rather than staying off-marketplace?",
          options: {
            A: "The synthesis means starting as a consumer (using others' agents) and eventually becoming an architect (building your own infrastructure from scratch, independent of any marketplace)",
            B: "The synthesis means a developer who has consumed the OpenClaw platform, learned from it, built on it, and now publishes to it has become an active architect of the ecosystem — not just a participant. Publishing to ClawHub contributes to the supply side of the network flywheel, increasing platform utility for all participants while gaining distribution that no standalone website can match. Self-distribution and ecosystem participation are not exclusive, but rejecting ClawHub means opting out of compounding network effects",
            C: "The synthesis means consumers should pay for architecture decisions and architects should consume those payments — a revenue-sharing model between users and builders on ClawHub",
            D: "The synthesis recommends waiting until you are an experienced architect before publishing to ClawHub, to avoid listing low-quality work that harms the marketplace"
          },
          correct: "B",
          explanation: "The Consumer-to-Architect synthesis captures a development journey: students consumed OpenClaw's documentation and tools, built TutorClaw on OpenClaw's infrastructure, and publishing to ClawHub completes the arc — they become contributors who grow the platform for the next generation of learners. This isn't just philosophical; it's strategic. ClawHub's network effects mean being listed drives discovery that no independent website achieves alone."
        }
      ]
    }
  ]
};
