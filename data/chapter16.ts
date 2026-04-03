import type { Chapter } from "@/types";

export const chapter16: Chapter = {
  id: 16,
  title: "Spec-Driven Development (SDD)",
  description: "The four-phase methodology — Research, Specify, Refine, Implement — that replaces vibe coding with reliable, repeatable AI-assisted delivery.",
  color: "teal",
  lessons: [
    {
      id: 1,
      title: "Why Specs Beat Vibe Coding",
      mcqs: [
        {
          id: 1,
          question: "What is 'vibe coding' and why does it fail at scale?",
          options: {
            A: "Coding with background music — fails because music is distracting",
            B: "Improvising with AI using loose natural-language prompts without written specs — fails because output varies by session, drift compounds over iterations, and there is no shared reference for 'done'",
            C: "Coding quickly without tests — fails because bugs accumulate",
            D: "Coding without version control — fails because changes can't be reversed"
          },
          correct: "B",
          explanation: "Vibe coding = improvising with AI using loose natural-language prompts, no written specification. Failure modes: output varies across sessions (no spec = no consistency), requirements drift as conversation evolves, no shared definition of 'done', and AI hallucinates details when requirements are vague. Works for exploration; fails for production."
        },
        {
          id: 2,
          question: "What is Spec-First development?",
          options: {
            A: "Writing code before writing tests",
            B: "Writing the complete specification document before giving AI any implementation instructions — the spec is the source of truth throughout",
            C: "Specifying the programming language before starting any project",
            D: "Writing a specification after the code is complete, for documentation purposes"
          },
          correct: "B",
          explanation: "Spec-First: write the complete specification before any implementation begins. The spec becomes the source of truth — all AI implementation instructions reference it, all reviews check against it, and 'done' means the spec is fully satisfied. This is the most rigorous SDD level."
        },
        {
          id: 3,
          question: "What is the SDD value proposition over vibe coding?",
          options: {
            A: "SDD is faster because AI generates more code per prompt",
            B: "SDD provides a persistent external reference that survives session boundaries, defines 'done' unambiguously, enables rollback to spec when AI drifts, and makes AI output reviewable against concrete criteria",
            C: "SDD is cheaper because it requires fewer API calls",
            D: "SDD produces better-formatted code automatically"
          },
          correct: "B",
          explanation: "SDD value proposition: 1) Persistent external reference — spec survives /clear and session restarts, 2) Unambiguous 'done' — implementation satisfies every checklist item, 3) Rollback reference — when AI drifts, the spec is the correction anchor, 4) Reviewable output — stakeholders evaluate against spec, not memory. The spec transforms subjective vibe into objective criteria."
        },
        {
          id: 4,
          question: "What is Spec-Anchored development?",
          options: {
            A: "Anchoring the spec to a specific Git commit",
            B: "Starting implementation, then writing a spec to document what was built",
            C: "Beginning with exploration/vibe coding to discover requirements, then writing a spec before production implementation — the spec anchors production quality",
            D: "Using a fixed spec template that never changes"
          },
          correct: "C",
          explanation: "Spec-Anchored: explore first (vibe code to discover what works), then write a spec before building the production version. The spec 'anchors' the production implementation to the discovered requirements. This acknowledges that some requirements can only be discovered through exploration, while still applying SDD rigor before shipping."
        },
        {
          id: 5,
          question: "What is Spec-as-Source and when is it used?",
          options: {
            A: "The spec is stored in the source code as comments",
            B: "The specification IS the authoritative source — AI implementation is generated directly from spec checkboxes, and the spec is maintained as a living document throughout the project lifecycle",
            C: "Source code is generated from database schemas",
            D: "The spec is auto-generated from source code using static analysis"
          },
          correct: "B",
          explanation: "Spec-as-Source: the specification is the authoritative source of truth maintained throughout the entire project lifecycle. Implementation is generated from spec checkboxes (each checkbox → one subagent task → one commit). The spec updates when requirements change — it's never stale. Best for ongoing products with evolving requirements."
        },
        {
          id: 6,
          question: "What is the core difference between a vibe-coded and spec-driven AI prompt?",
          options: {
            A: "Spec-driven prompts are shorter",
            B: "Vibe: 'Add user authentication' (vague, AI invents details). Spec-driven: 'Implement @docs/auth-spec.md using the task tool, one subagent per task, commit after each' (precise, AI executes against written criteria)",
            C: "Vibe prompts use natural language; spec-driven prompts use JSON",
            D: "There is no meaningful difference — AI produces the same output either way"
          },
          correct: "B",
          explanation: "The fundamental difference: vibe prompt = vague intent with AI inventing all details (unpredictable, unreviewable). Spec-driven prompt = reference to a written document with explicit criteria (predictable, reviewable). The spec prompt gives AI a written source of truth to execute against rather than a blank canvas to improvise on."
        },
        {
          id: 7,
          question: "Why does vibe coding fail specifically in multi-session projects?",
          options: {
            A: "Multi-session projects require multiple developers who prefer different styles",
            B: "Each new session starts blank — without a spec, the AI has no memory of design decisions, requirements, or constraints from previous sessions, causing it to re-invent or contradict prior work",
            C: "Vibe coding tools are incompatible across sessions",
            D: "Multi-session projects require different programming languages"
          },
          correct: "B",
          explanation: "Vibe coding fails in multi-session projects because LLMs are stateless — each session starts fresh. Without a written spec, session 2 has no knowledge of session 1's design decisions, constraints, or requirements. The result: contradictions, re-invented wheels, and architectural drift. The spec is the persistent memory that crosses session boundaries."
        },
        {
          id: 8,
          question: "What makes a specification 'signal-dense' vs. 'noise-heavy'?",
          options: {
            A: "Signal-dense specs are longer; noise-heavy specs are shorter",
            B: "Signal-dense specs contain only information that changes AI behavior (constraints, decisions, checklist items); noise-heavy specs contain background, motivation, and context that doesn't affect implementation",
            C: "Signal-dense specs use bullet points; noise-heavy specs use prose",
            D: "Signal-dense specs are technical; noise-heavy specs are business-focused"
          },
          correct: "B",
          explanation: "Signal-dense specs contain only what changes AI behavior: hard constraints (must use PostgreSQL), architectural decisions (REST not GraphQL), and implementation checklist items. Noise-heavy specs contain background (why we're building this), motivation (business context), and context that reads well but doesn't affect a single line of implementation."
        },
        {
          id: 9,
          question: "What is the 'spec as external memory' principle?",
          options: {
            A: "Specs are stored in external databases for faster retrieval",
            B: "The spec document serves as persistent project memory that survives session resets, team changes, and time — replacing the ephemeral working memory that lives only in conversation history",
            C: "External memory refers to the AI model's long-term training memory",
            D: "The spec is stored externally so multiple team members can access it"
          },
          correct: "B",
          explanation: "'Spec as external memory': the spec document is persistent project intelligence that outlives any single conversation. Unlike context window content (cleared with /clear) or human memory (fades over time), a well-written spec captures requirements, constraints, and decisions permanently. New team members, new sessions, and new AI instances all start from the same shared understanding."
        },
        {
          id: 10,
          question: "What should you do when exploratory prototyping reveals a working approach, before building for production?",
          options: {
            A: "Deploy the prototype directly — it already works",
            B: "Continue vibe coding — the prototype approach should inform but not constrain production",
            C: "Write a specification capturing what works, then use SDD to build the production version from the spec — exploration was a phase, not the end state",
            D: "Delete the prototype and start fresh with pure SDD"
          },
          correct: "C",
          explanation: "The course guidance: 'Exploration is a phase, not an end state. Once you discover what works, write a specification before building the production version.' The prototype reveals requirements; the spec captures them; SDD implements them reliably. Going directly from prototype to production skips the quality discipline that SDD provides."
        },
        {
          id: 11,
          question: "Scenario: You're building a user registration feature. Session 1: You tell AI 'add user registration' and it creates email-based signup. Session 2 (next day): You say 'now add password reset' but the AI implements a completely different authentication pattern, contradicting Session 1's work. What SDD principle would have prevented this?",
          options: {
            A: "Using a more powerful AI model in Session 2",
            B: "Writing a specification document in Session 1 that Session 2 could reference — the spec serves as persistent external memory across session boundaries",
            C: "Keeping Session 1's conversation open instead of closing it",
            D: "Using the same prompt wording in both sessions"
          },
          correct: "B",
          explanation: "This is the classic stateless LLM problem. Without a written spec, Session 2 has zero knowledge of Session 1's design decisions. The AI re-invents authentication from scratch, potentially contradicting prior work. A spec document (even a lightweight one) capturing 'email-based registration with bcrypt password hashing' would have given Session 2 the context needed to build consistently."
        },
        {
          id: 12,
          question: "Scenario: Your team uses vibe coding to build a payment integration. The AI generates code that works in testing but in production, it processes duplicate charges because the spec never defined idempotency requirements. Which vibe coding failure mode does this represent?",
          options: {
            A: "Output varies across sessions",
            B: "Requirements drift as conversation evolves",
            C: "No shared definition of 'done' — the AI considered 'done' as 'charges work once' but the team needed 'charges work exactly once even on retry'",
            D: "AI hallucinates details when requirements are vague"
          },
          correct: "C",
          explanation: "This is the 'no shared definition of done' failure mode. The vibe prompt 'add payment processing' was satisfied when payments worked. But the real requirement (idempotency — preventing duplicate charges on retry) was never specified, so the AI didn't implement it. A spec-driven approach would have included idempotency as an explicit requirement in the Goals/Constraints section."
        },
        {
          id: 13,
          question: "Scenario: A stakeholder reviews your AI-generated dashboard and says 'this isn't what I asked for.' You realize the AI interpreted 'show sales trends' as monthly aggregates, but the stakeholder meant daily breakdowns by region. What spec-driven practice would have caught this misalignment before implementation?",
          options: {
            A: "Running the dashboard through a linter",
            B: "Writing the specification and having the stakeholder review it — the spec makes ambiguous terms concrete and reviewable before any code is written",
            C: "Using a different AI model with better natural language understanding",
            D: "Adding more comments to the generated code"
          },
          correct: "B",
          explanation: "Spec review catches design problems before implementation waste. If the spec said 'display daily sales breakdowns grouped by region for the last 90 days,' the stakeholder could confirm or correct that interpretation during review — when changes are cheap (edit a document). Discovering the mismatch after implementation means discarding working code and rebuilding."
        },
        {
          id: 14,
          question: "Scenario: You're comparing two approaches for a complex feature. Approach A (vibe coding): 3 sessions, 6 hours total, final output doesn't meet requirements and needs rework. Approach B (spec-driven): 1 hour spec writing + 2 hours implementation = 3 hours total, output meets all spec criteria. What does this scenario demonstrate about the SDD value proposition?",
          options: {
            A: "SDD is always faster — this scenario proves it",
            B: "SDD provides predictable, reviewable output that reduces rework — the spec investment upfront pays off in implementation efficiency and stakeholder alignment",
            C: "Vibe coding is better for simple features",
            D: "The AI model quality matters more than the approach"
          },
          correct: "B",
          explanation: "This scenario demonstrates SDD's core value: predictability and reduced rework. Vibe coding's 6 hours included 3 hours of rework because the output drifted from requirements. SDD's 1-hour spec ensured the 2-hour implementation hit the target on the first try. The spec isn't overhead — it's insurance against expensive misalignment."
        },
        {
          id: 15,
          question: "Scenario: Your team writes a 50-page specification for a simple login feature. The AI implementation takes 30 minutes, but reviewing the spec against the implementation takes 2 hours because the spec is so detailed. What SDD principle is being violated?",
          options: {
            A: "Spec-First development",
            B: "Signal-dense vs. noise-heavy specs — the spec should contain only information that changes AI behavior (constraints, decisions, checklist), not exhaustive background that reads well but doesn't affect implementation",
            C: "The Project Constitution pattern",
            D: "Parallel Research methodology"
          },
          correct: "B",
          explanation: "This is the signal-vs-noise anti-pattern. A 50-page spec for a simple login feature is noise-heavy — it contains background, motivation, edge cases that don't apply, and context that doesn't change what the AI implements. A signal-dense spec for login would be: Context (users need secure access), Constraints (bcrypt, rate limiting, 30-min session timeout), Checklist ([ ] email/password form, [ ] validation, [ ] session creation). The rest is noise."
        }
      ]
    },
    {
      id: 2,
      title: "Three Levels of SDD",
      mcqs: [
        {
          id: 1,
          question: "What are the three levels of Spec-Driven Development?",
          options: {
            A: "Beginner, Intermediate, Advanced",
            B: "Spec-First (write spec before any code), Spec-Anchored (explore then spec before production), Spec-as-Source (spec is the living authoritative document)",
            C: "Design, Development, Deployment",
            D: "Planning, Building, Testing"
          },
          correct: "B",
          explanation: "The three SDD levels: Spec-First = complete specification written before any implementation (most rigorous, best for known requirements). Spec-Anchored = exploration first, spec before production (best for discovered requirements). Spec-as-Source = spec is the living authoritative document maintained throughout the project lifecycle (best for ongoing products)."
        },
        {
          id: 2,
          question: "When should you choose Spec-First over Spec-Anchored?",
          options: {
            A: "Spec-First is always better — use it for everything",
            B: "When requirements are clear upfront and the problem space is well-understood, Spec-First avoids wasted exploration. Use Spec-Anchored when requirements can only be discovered through building.",
            C: "Use Spec-First only for small projects",
            D: "Use Spec-First when you have a large team"
          },
          correct: "B",
          explanation: "Choose Spec-First when requirements are clear upfront: building a feature with known behavior, implementing a documented API, or executing a well-understood workflow. Choose Spec-Anchored when requirements are unclear and must be discovered: novel user experiences, new domain exploration, or integrating unfamiliar technology."
        },
        {
          id: 3,
          question: "What distinguishes Spec-as-Source from the other two levels?",
          options: {
            A: "Spec-as-Source uses a different file format",
            B: "The spec is not a one-time artifact — it is maintained as a living document throughout the project, updating when requirements change and serving as the continuous source of truth for all AI implementations",
            C: "Spec-as-Source requires a dedicated specification team",
            D: "Spec-as-Source only works for open-source projects"
          },
          correct: "B",
          explanation: "Spec-as-Source distinguishes itself by treating the spec as a living, maintained document — not a one-time kickoff artifact. In Spec-First/Anchored, the spec is written once and may become outdated. In Spec-as-Source, the spec evolves with requirements, always reflecting current intent. This makes it ideal for ongoing products with changing requirements."
        },
        {
          id: 4,
          question: "What is the practical trigger for choosing Spec-Anchored over Spec-First?",
          options: {
            A: "Budget constraints preventing full upfront specification",
            B: "'I don't know exactly what I need to build until I've tried something' — requirements that can only be discovered through hands-on exploration",
            C: "Team size exceeding 5 people",
            D: "Using a new programming language"
          },
          correct: "B",
          explanation: "Spec-Anchored is triggered by the insight: 'I don't know exactly what I need to build until I've tried something.' This is appropriate for novel UX experiments (what do users actually want?), unfamiliar technology exploration (what are the real constraints?), and creative work where the right answer emerges through iteration."
        },
        {
          id: 5,
          question: "For which scenario is Spec-as-Source most appropriate?",
          options: {
            A: "A one-time script to migrate a database",
            B: "A production SaaS product with evolving features, multiple contributors, and requirements that change over months",
            C: "A weekend hackathon project",
            D: "A single-developer utility with fixed requirements"
          },
          correct: "B",
          explanation: "Spec-as-Source suits: production SaaS products (ongoing development), multi-contributor projects (spec as shared contract), long-lived products (requirements evolve), and customer-facing systems (spec captures commitments). A one-time migration or weekend project doesn't justify the maintenance overhead of a living spec document."
        },
        {
          id: 6,
          question: "What problem does the Spec-Anchored level solve that pure Spec-First cannot?",
          options: {
            A: "Spec-First is too expensive; Spec-Anchored is cheaper",
            B: "Spec-First requires knowing requirements before you understand the domain — Spec-Anchored allows knowledge discovery through exploration before committing to a spec",
            C: "Spec-First doesn't work with AI; Spec-Anchored was designed for AI",
            D: "Spec-First only works for backend; Spec-Anchored covers frontend too"
          },
          correct: "B",
          explanation: "Spec-Anchored solves the 'unknown unknowns' problem. Spec-First requires knowing what to specify before you've explored the domain — impossible for novel problems. Spec-Anchored legitimizes exploration as a phase: discover through vibe coding, capture what works in a spec, then implement reliably with SDD. Both rigor and exploration, in the right sequence."
        },
        {
          id: 7,
          question: "What is the key risk of staying in 'Spec-Anchored exploration mode' indefinitely?",
          options: {
            A: "Exploration tools become too expensive over time",
            B: "Perpetual exploration — the prototype never becomes a production system because no one commits to writing the spec. 'Exploration is a phase, not an end state.'",
            C: "Exploratory code accumulates technical debt exponentially",
            D: "Exploration mode is incompatible with team collaboration"
          },
          correct: "B",
          explanation: "The risk of perpetual exploration: teams get comfortable with vibe coding and never transition to writing the spec and building properly. The course warns: 'Exploration is a phase, not an end state.' The discipline is knowing when to stop exploring and commit to a specification — usually when the core approach is validated."
        },
        {
          id: 8,
          question: "How does the level of SDD maturity typically evolve in an organization?",
          options: {
            A: "Organizations start at Spec-as-Source and simplify over time",
            B: "Organizations typically start with Spec-Anchored (practical for current work), progress to Spec-First for known domains, and eventually adopt Spec-as-Source for core products",
            C: "There is no typical progression — each organization chooses independently",
            D: "All three levels are used simultaneously from the beginning"
          },
          correct: "B",
          explanation: "Typical organizational progression: start with Spec-Anchored (easy adoption — it validates existing exploratory habits while adding spec discipline before production), progress to Spec-First for well-understood domains (faster when requirements are clear), and adopt Spec-as-Source for core products requiring long-term maintenance and team coordination."
        },
        {
          id: 9,
          question: "What makes the three SDD levels a 'spectrum' rather than discrete options?",
          options: {
            A: "The three levels use a shared file format that makes switching seamless",
            B: "Real projects often blend levels — a feature might start Spec-Anchored (explore), transition to Spec-First (implement), and the product overall operates at Spec-as-Source (living doc)",
            C: "The levels differ only in specification length",
            D: "Teams can only use one level and must commit to it for the project's lifetime"
          },
          correct: "B",
          explanation: "The three levels form a spectrum because real projects blend them: you might explore a new API integration (Spec-Anchored), specify the integration clearly (Spec-First for that feature), while the overall product maintains a living specification (Spec-as-Source). The levels apply at different granularities — project, feature, and task level."
        },
        {
          id: 10,
          question: "What does 'SDD is a power tool, not a universal solution' mean?",
          options: {
            A: "SDD only works on powerful computers with sufficient RAM",
            B: "Like a power tool, SDD amplifies capability dramatically when applied to the right job — but is overkill or counterproductive for simple tasks (bug fixes, quick scripts, exploration)",
            C: "SDD is only for power users with advanced AI experience",
            D: "SDD requires powerful AI models — it doesn't work with weaker models"
          },
          correct: "B",
          explanation: "'Power tool, not universal solution' means: SDD is tremendously effective for complex, multi-file, multi-session work with unclear requirements. But like using a power drill to hang a picture frame — technically capable but wasteful — applying SDD to a single-file bug fix wastes time without proportional benefit. The wisdom is knowing when to use it."
        },
        {
          id: 11,
          question: "Scenario: You're building a novel AI-powered recommendation feature for your e-commerce platform. You have no idea what algorithms work best or what data you'll need. The team lead suggests starting with vibe coding to explore different ML approaches, then writing a spec before production. Which SDD level is this?",
          options: {
            A: "Spec-First — you're planning to write a spec eventually",
            B: "Spec-Anchored — exploration first to discover requirements, then spec before production implementation",
            C: "Spec-as-Source — the spec will be maintained as a living document",
            D: "This isn't SDD at all — it's just experimentation"
          },
          correct: "B",
          explanation: "This is classic Spec-Anchored: you don't know the requirements upfront (which ML algorithm? what data sources? what accuracy thresholds?), so you explore through vibe coding to discover what works. Once the prototype reveals a viable approach, you write a spec before building the production version. The spec 'anchors' production to discovered requirements."
        },
        {
          id: 12,
          question: "Scenario: Your startup's SaaS product has been evolving for 2 years. Requirements change monthly based on customer feedback. The team maintains a living specification document that's updated with every feature change and serves as the source of truth for all AI implementations. Which SDD level is this?",
          options: {
            A: "Spec-First — specs are written before implementation",
            B: "Spec-Anchored — specs are written after exploration",
            C: "Spec-as-Source — the spec is the living authoritative document maintained throughout the product lifecycle",
            D: "This is agile, not SDD"
          },
          correct: "C",
          explanation: "This is Spec-as-Source: the specification is a living, maintained document that evolves with the product. It's updated when requirements change and serves as the continuous source of truth for all AI implementations. This level is ideal for ongoing products with evolving requirements where the spec maintenance overhead is justified by team coordination benefits."
        },
        {
          id: 13,
          question: "Scenario: You need to implement a well-documented REST API endpoint that follows your team's established patterns. The requirements are clear from the API specification document your architect provided. Which SDD level should you choose and why?",
          options: {
            A: "Spec-Anchored — you should explore different implementation approaches first",
            B: "Spec-as-Source — you need a living document for future maintenance",
            C: "Spec-First — requirements are clear upfront, so write the complete spec before any implementation to avoid wasted exploration",
            D: "Skip SDD entirely — this doesn't need any specification"
          },
          correct: "C",
          explanation: "When requirements are clear upfront (established patterns, documented API, well-understood workflow), Spec-First is optimal. You already know what to build — the endpoint structure, validation rules, error formats. Writing the spec first avoids wasted exploration and ensures the AI implementation matches the architect's expectations from the start."
        },
        {
          id: 14,
          question: "Scenario: A team has been vibe coding their startup's MVP for 3 months. The prototype works, but when they try to build the production version, they keep making the same mistakes because no one documented what worked in the prototype. Which SDD level transition would solve this problem?",
          options: {
            A: "Stay in vibe coding — it's working fine for the prototype",
            B: "Transition to Spec-Anchored: write a spec capturing what works in the prototype, then use SDD to build the production version from that spec",
            C: "Jump to Spec-as-Source — start maintaining a living specification for the entire product",
            D: "Use Spec-First for the production version, ignoring the prototype learnings"
          },
          correct: "B",
          explanation: "The team is stuck in perpetual exploration — the prototype works but the knowledge isn't captured. Spec-Anchored is the solution: write a spec that captures what works from the prototype (the successful patterns, the discovered requirements), then use that spec to guide production implementation. This transitions from 'exploration phase' to 'production phase' with the spec as the bridge."
        },
        {
          id: 15,
          question: "Scenario: Your enterprise product has 50 developers working on different features. Each team maintains their own spec documents, but there's no central living specification. Specs become outdated as requirements change, causing implementation inconsistencies. Which SDD level would address this systemic problem?",
          options: {
            A: "Spec-First — write better specs before each implementation",
            B: "Spec-Anchored — explore more before writing specs",
            C: "Spec-as-Source — establish a living specification that's maintained as part of the product's ongoing development process, updated when requirements change",
            D: "This is a management problem, not an SDD problem"
          },
          correct: "C",
          explanation: "With 50 developers across multiple teams, the problem is spec maintenance at scale. Spec-as-Source treats the spec as a living document that's part of the development process — updated when requirements change, serving as the authoritative source for all implementations. This requires process discipline but solves the 'outdated specs causing inconsistencies' problem that plagues large teams."
        }
      ]
    },
    {
      id: 3,
      title: "The Project Constitution — CLAUDE.md",
      mcqs: [
        {
          id: 1,
          question: "What is CLAUDE.md called in the SDD context and why?",
          options: {
            A: "The Project Bible — because it contains all project knowledge",
            B: "The Project Constitution — because it establishes the permanent norms, conventions, and constraints that govern all AI work in the project",
            C: "The Project Manual — because developers reference it like documentation",
            D: "The Project Contract — because it defines deliverables and timelines"
          },
          correct: "B",
          explanation: "In SDD context, CLAUDE.md is called the 'Project Constitution' — it establishes permanent norms that govern all AI behavior in the project. Like a constitution, it defines the rules of engagement, not the specific tasks. It answers: what tools do we use, what conventions do we follow, what constraints apply to every piece of work."
        },
        {
          id: 2,
          question: "What is the difference between a global CLAUDE.md and a project-level CLAUDE.md?",
          options: {
            A: "Global CLAUDE.md is larger; project-level is smaller",
            B: "Global (~/.claude/CLAUDE.md) contains preferences that apply across all projects (tool preferences, personal style, universal constraints); project-level (root CLAUDE.md) contains project-specific norms (tech stack, naming conventions, deployment process)",
            C: "Global CLAUDE.md is for teams; project-level is for individuals",
            D: "There is only one level — the distinction is not real"
          },
          correct: "B",
          explanation: "Two CLAUDE.md levels: Global (~/.claude/CLAUDE.md) = personal preferences across all projects (preferred shell commands, personal coding style, universal safety rules). Project-level (project root) = project-specific norms (tech stack, directory structure, naming conventions, deployment workflow, team agreements). Project-level takes precedence over global."
        },
        {
          id: 3,
          question: "What is 'permanent context' in the Project Constitution?",
          options: {
            A: "Context that is permanently stored in the AI model's weights",
            B: "Information that should be true and active in every session without re-specification — the stable norms that don't change task to task (tech stack, coding conventions, security rules)",
            C: "Context that cannot be modified once written",
            D: "Context that persists after the project ends"
          },
          correct: "B",
          explanation: "Permanent context = information that should be active in every session without re-stating it. Examples: 'We use TypeScript strictly, no any types,' 'All API routes require authentication middleware,' 'Never commit credentials.' These apply to every task — embedding them in the Project Constitution means they're always active without consuming prompt tokens."
        },
        {
          id: 4,
          question: "What category of information does NOT belong in the Project Constitution?",
          options: {
            A: "The programming language and framework in use",
            B: "Team coding conventions and naming patterns",
            C: "The current sprint's feature requirements and deadline information",
            D: "Security constraints and access patterns"
          },
          correct: "C",
          explanation: "Sprint requirements and deadline information are ephemeral — they change every 2 weeks. Putting them in CLAUDE.md creates context poisoning (stale data persisting). The Project Constitution holds stable norms: tech stack, conventions, security rules, and structural patterns. Dynamic work items belong in task files or progress files."
        },
        {
          id: 5,
          question: "How does the Project Constitution complement specification documents?",
          options: {
            A: "The constitution replaces specifications — no spec needed if constitution is complete",
            B: "The constitution defines the HOW (conventions, constraints, norms); specifications define the WHAT (requirements for a specific feature). Each spec inherits the constitution's constraints automatically.",
            C: "Specifications and constitutions are identical — different names for the same document",
            D: "The constitution is created from specifications through summarization"
          },
          correct: "B",
          explanation: "Complementary roles: Constitution = HOW (TypeScript strict, REST architecture, specific testing patterns). Specification = WHAT (the user registration feature needs email verification, password rules, OAuth support). Every specification inherits constitutional constraints automatically — you don't re-specify 'use TypeScript' in every spec; the constitution handles it."
        },
        {
          id: 6,
          question: "What does 'project norms' mean in the context of the Project Constitution?",
          options: {
            A: "Normal behavior expected from project stakeholders",
            B: "The agreed-upon standards for AI behavior in the project: which tools to use, how to name files, when to create vs. modify, what patterns to prefer or avoid",
            C: "Industry-standard best practices automatically applied",
            D: "Normal performance benchmarks the project should meet"
          },
          correct: "B",
          explanation: "Project norms = the agreed-upon standards for all AI work: preferred tools (use pnpm not npm), naming conventions (kebab-case for files), architectural patterns (services layer between controllers and models), testing requirements (unit tests required for all utility functions), and anti-patterns to avoid (no direct DOM manipulation)."
        },
        {
          id: 7,
          question: "What is the recommended structure for a Project Constitution?",
          options: {
            A: "Free-form prose describing the project goals",
            B: "The 6 CLAUDE.md sections: Project Overview, Technology Stack, Directory Structure, Coding Conventions, Key Commands, Important Notes — under 60 lines total",
            C: "A JSON configuration file with structured fields",
            D: "A checklist of all features to be implemented"
          },
          correct: "B",
          explanation: "Project Constitution structure = the 6 CLAUDE.md sections: 1) Project Overview, 2) Technology Stack, 3) Directory Structure, 4) Coding Conventions, 5) Key Commands (run/test/deploy), 6) Important Notes. Target: under 60 lines. This keeps context consumption minimal while providing all information Claude needs for every task."
        },
        {
          id: 8,
          question: "How does the Project Constitution relate to the @AGENTS.md standard?",
          options: {
            A: "They are competing standards — use one or the other",
            B: "CLAUDE.md references @AGENTS.md for universal project information (portability across AI tools), then adds Claude-specific features (skills, hooks, MCP configs) on top",
            C: "AGENTS.md is inside CLAUDE.md as a section",
            D: "They cover different languages — AGENTS.md for Python, CLAUDE.md for JavaScript"
          },
          correct: "B",
          explanation: "The recommended pattern: CLAUDE.md starts with @AGENTS.md (referencing the universal OpenAI standard with 60,000+ projects), then adds Claude-specific extensions (skills definitions, hook configurations, MCP server setup). This provides portability (any AI tool reads AGENTS.md) while leveraging Claude-specific capabilities."
        },
        {
          id: 9,
          question: "What happens when CLAUDE.md conflicts with a specification document?",
          options: {
            A: "The specification always wins — it's more specific",
            B: "CLAUDE.md always wins — it's the constitution",
            C: "The more specific document wins: spec constraints override general CLAUDE.md conventions within their scope; CLAUDE.md constraints override spec defaults when the spec is silent",
            D: "Claude randomly chooses — this is a known limitation"
          },
          correct: "C",
          explanation: "Hierarchy of specificity: spec constraints override CLAUDE.md defaults within the spec's scope (the spec can say 'use MongoDB for this feature' even if CLAUDE.md defaults to PostgreSQL). But CLAUDE.md security rules and hard constraints (never commit credentials) override any spec's implicit permissions — the constitution establishes inviolable norms."
        },
        {
          id: 10,
          question: "Why is the Project Constitution described as 'the cheapest way to give Claude continuous project awareness'?",
          options: {
            A: "It reduces API pricing through a constitutional discount",
            B: "Written once but benefits every session — the cost of writing 60 lines is amortized across hundreds of sessions, each of which benefits from automatic context without any per-session re-specification overhead",
            C: "It compresses project information to minimize token usage",
            D: "It caches context server-side to avoid repeated loading"
          },
          correct: "B",
          explanation: "Cost-benefit: writing a 60-line Project Constitution takes ~30 minutes once. Each of the next 500 sessions benefits automatically — no 5-minute context setup, no forgotten conventions, no re-specifying the tech stack. The amortized cost approaches zero while the per-session benefit is constant. 'Write it once; benefit every session.'"
        },
        {
          id: 11,
          question: "Scenario: You join a new project and start a Claude Code session. Without you mentioning anything about the tech stack, Claude automatically uses pnpm instead of npm, creates files in kebab-case, and adds TypeScript strict mode checks. What made this possible?",
          options: {
            A: "Claude guessed correctly based on industry trends",
            B: "The project's CLAUDE.md (Project Constitution) contains these norms as permanent context — Claude reads it automatically at session start",
            C: "Claude's training data includes this specific project",
            D: "The previous session's context was preserved across your login"
          },
          correct: "B",
          explanation: "This is the Project Constitution in action. CLAUDE.md contains permanent context: tech stack (TypeScript), conventions (kebab-case files), tool preferences (pnpm over npm). These norms are active in every session without re-specification. The constitution answers 'how we do things here' before you even ask."
        },
        {
          id: 12,
          question: "Scenario: Your team's CLAUDE.md has grown to 200 lines with detailed sprint goals, current feature requirements, team member contact info, and meeting schedules. Claude keeps getting confused by outdated information. What's the problem?",
          options: {
            A: "CLAUDE.md should never be updated once written",
            B: "200 lines exceeds Claude's context window",
            C: "Ephemeral information (sprint goals, contacts, deadlines) is polluting the constitution — it should only contain stable norms (tech stack, conventions, security rules), not dynamic work items",
            D: "The team needs a more powerful AI model"
          },
          correct: "C",
          explanation: "The Project Constitution should hold stable norms, not ephemeral data. Sprint goals change every 2 weeks, contacts change, deadlines pass — this creates context poisoning (stale data persisting). Dynamic work items belong in task files or progress documents. CLAUDE.md should be under 60 lines of stable information: tech stack, directory structure, coding conventions, key commands."
        },
        {
          id: 13,
          question: "Scenario: You write a spec for a new feature that says 'use MongoDB for this feature's data storage.' Your project's CLAUDE.md says 'We use PostgreSQL for all data storage.' What happens when Claude implements the feature?",
          options: {
            A: "Claude ignores the spec and uses PostgreSQL because CLAUDE.md always wins",
            B: "Claude uses MongoDB because the spec is more specific to this feature's scope — spec constraints override general CLAUDE.md defaults within their scope",
            C: "Claude randomly chooses between the two",
            D: "Claude asks you to clarify which database to use"
          },
          correct: "B",
          explanation: "Hierarchy of specificity: spec constraints override CLAUDE.md defaults within the spec's scope. The spec can say 'use MongoDB for this feature' even if CLAUDE.md defaults to PostgreSQL. However, CLAUDE.md security rules and hard constraints (never commit credentials) override any spec's implicit permissions — the constitution establishes inviolable norms that no spec can override."
        },
        {
          id: 14,
          question: "Scenario: Your organization wants to use both Claude Code and Cursor AI on the same project. You want both tools to follow the same conventions. What's the recommended approach?",
          options: {
            A: "Maintain separate CLAUDE.md files for each tool",
            B: "Create an @AGENTS.md file with universal project information (portable across AI tools), then have CLAUDE.md reference it and add Claude-specific extensions on top",
            C: "Only use CLAUDE.md — Cursor will read it automatically",
            D: "This isn't possible — each AI tool needs its own configuration"
          },
          correct: "B",
          explanation: "The recommended pattern: CLAUDE.md starts with @AGENTS.md (the universal OpenAI standard with 60,000+ projects), then adds Claude-specific extensions (skills, hooks, MCP configs). This provides portability — any AI tool that reads AGENTS.md gets the core project norms — while leveraging Claude-specific capabilities. Both tools follow the same base conventions."
        },
        {
          id: 15,
          question: "Scenario: A developer complains that Claude keeps forgetting the project's deployment process between sessions. They have to re-explain it every time. What's the solution?",
          options: {
            A: "Use a more expensive AI model with better memory",
            B: "Keep the session open indefinitely to preserve context",
            C: "Add the deployment process to the Project Constitution (CLAUDE.md) as permanent context under 'Key Commands' — it will be active in every session without re-explanation",
            D: "Write a separate specification for the deployment process"
          },
          correct: "C",
          explanation: "The deployment process is stable information that applies to every session — perfect for the Project Constitution. Adding it to CLAUDE.md's 'Key Commands' section means Claude knows it from session 1 without being told. This is the 'cheapest way to give Claude continuous project awareness' — write it once, benefit every session."
        }
      ]
    },
    {
      id: 4,
      title: "Four-Phase SDD Workflow",
      mcqs: [
        {
          id: 1,
          question: "What are the four phases of the SDD workflow in order?",
          options: {
            A: "Design, Code, Test, Deploy",
            B: "Research, Specification, Refinement, Implementation",
            C: "Plan, Build, Review, Ship",
            D: "Explore, Specify, Build, Validate"
          },
          correct: "B",
          explanation: "The four SDD phases: 1) Research — gather context and understand the problem space, 2) Specification — write the concrete spec document, 3) Refinement — surface hidden assumptions through interviews, 4) Implementation — execute against the spec using task-based subagent delegation. Each phase has distinct inputs, outputs, and tools."
        },
        {
          id: 2,
          question: "What is the purpose of the Research phase in SDD?",
          options: {
            A: "To write the first draft of the specification",
            B: "To gather context, explore solutions, understand constraints, and compile knowledge before specifying — preventing surprises during implementation",
            C: "To assign tasks to team members",
            D: "To run existing tests to understand the current codebase state"
          },
          correct: "B",
          explanation: "Research phase purpose: gather context and understand the problem BEFORE specifying. Research reveals: what patterns exist (so you don't reinvent wheels), what constraints apply (so you don't specify the impossible), what the codebase currently does (so you don't duplicate or break it), and what questions must be answered before implementation can begin."
        },
        {
          id: 3,
          question: "What does the Specification phase produce and what must it contain?",
          options: {
            A: "A rough outline with goals and a timeline",
            B: "A concrete document containing: Context (why this is being built), Goals/Constraints (what must and must not be done), Reference Architecture (how it should be structured), and Implementation Checklist (each item becomes one subagent task)",
            C: "A list of API endpoints to be created",
            D: "A complete code skeleton for developers to fill in"
          },
          correct: "B",
          explanation: "The 4-part spec template: 1) Context (why we're building this, what problem it solves), 2) Goals/Constraints (must-haves, must-nots, quality requirements), 3) Reference Architecture (structural approach, key design decisions), 4) Implementation Checklist ([ ] items, each becoming one subagent task with one commit). All four parts are required for a complete specification."
        },
        {
          id: 4,
          question: "What is the purpose of the Refinement phase?",
          options: {
            A: "To refactor code written in earlier phases",
            B: "To surface hidden assumptions in the spec through structured interviewing — ensuring the spec reflects actual intent before any code is written",
            C: "To reduce the spec's length for efficiency",
            D: "To get stakeholder sign-off on the budget"
          },
          correct: "B",
          explanation: "Refinement phase: surface hidden assumptions through structured interviewing BEFORE implementation. A spec that looks complete often hides ambiguities (what should happen for offline users? who can see this data? what's the error behavior?). The Refinement phase catches these gaps through the five ambiguity categories and ask_user_question patterns."
        },
        {
          id: 5,
          question: "What is the Implementation phase's core mechanism?",
          options: {
            A: "Developers write all code manually following the spec",
            B: "The spec's implementation checklist drives subagent delegation — each checkbox becomes one subagent task, each task produces one commit, the main agent tracks progress",
            C: "AI generates all code in one large context window operation",
            D: "The spec is converted automatically to code by a compiler"
          },
          correct: "B",
          explanation: "Implementation mechanism: 'Implement @docs/spec.md, use the task tool, each task done by a subagent, commit after each task.' The spec's checklist is extracted → each checkbox becomes a task → main agent delegates to fresh subagents → each subagent commits → main agent tracks. The spec IS the implementation plan."
        },
        {
          id: 6,
          question: "Why must each SDD phase complete before the next begins?",
          options: {
            A: "Technical dependencies between phases prevent parallelism",
            B: "Starting Implementation without a Refined spec means implementing ambiguities. Starting Specification without Research means specifying unknowns. Each phase's output is the next phase's required input.",
            C: "Compliance requirements mandate sequential phases",
            D: "Parallel phases would create merge conflicts"
          },
          correct: "B",
          explanation: "Sequential dependency: Research → Specification → Refinement → Implementation. Skipping Research produces a spec full of unknowns (implementation will hit surprises). Skipping Refinement leaves ambiguities in the spec (implementation makes wrong assumptions). Each phase removes uncertainty that would compound if carried into the next phase."
        },
        {
          id: 7,
          question: "What is the 'Validate phase' mentioned in relation to the Four-Phase Workflow?",
          options: {
            A: "A fifth phase added after Implementation",
            B: "Validation is embedded throughout — spec writing validates research, refinement validates spec completeness, and post-implementation testing validates against spec criteria",
            C: "A separate phase for QA teams only",
            D: "Validation only applies to security-sensitive features"
          },
          correct: "B",
          explanation: "Validation is not a separate phase but is embedded throughout: Research validation (are these sources reliable?), Spec validation (does this spec cover all requirements?), Refinement validation (does the spec reflect actual intent?), Implementation validation (does the output satisfy each checklist item?). The spec IS the validation criteria for the final product."
        },
        {
          id: 8,
          question: "What is the role of the main agent vs. subagents in the Implementation phase?",
          options: {
            A: "Main agent writes tests; subagents write production code",
            B: "Main agent = orchestrator (reads spec, creates tasks, tracks progress, handles failures); subagents = developers (receive isolated task, execute, commit, return result)",
            C: "Both main agent and subagents write code simultaneously",
            D: "Subagents plan; main agent implements"
          },
          correct: "B",
          explanation: "Implementation roles: Main agent = 'you are the main agent and your subagents are your devs.' Main agent reads the full spec, extracts the task list, delegates each task to a fresh subagent with isolated context, tracks status (TaskCreate/TaskUpdate/TaskList), and handles failures (retry, skip, escalate). Subagents have no knowledge of each other's work."
        },
        {
          id: 9,
          question: "What does 'commit after each task' achieve in the Implementation phase?",
          options: {
            A: "It creates a backup in case the hard drive fails",
            B: "Each commit creates a rollback boundary — if task 5 breaks something, you can revert to the task 4 commit without undoing tasks 1–4",
            C: "It satisfies Git pre-commit hooks automatically",
            D: "It notifies team members of progress in real-time"
          },
          correct: "B",
          explanation: "'Commit after each task' creates atomic rollback boundaries. Each task = one focused change = one commit. If task 5 introduces a bug, git revert task-5-commit restores to the working state after task 4. Without per-task commits, a bug in task 5 requires manually untangling mixed changes from tasks 5, 6, 7, and 8."
        },
        {
          id: 10,
          question: "How does the Four-Phase SDD Workflow address the LLM constraints (stateless, probabilistic, limited context)?",
          options: {
            A: "SDD doesn't address LLM constraints — it works despite them",
            B: "Research/Spec/Refinement address statelessness (spec = persistent memory). Checklists and validation address probabilism (spec = objective criteria). Phase separation with per-task subagents addresses context limits (isolated tasks = full attention per task).",
            C: "SDD requires fine-tuned models that don't have these constraints",
            D: "SDD addresses only statelessness; the other constraints are handled by hardware"
          },
          correct: "B",
          explanation: "SDD directly addresses all three LLM constraints: Stateless → spec persists across session boundaries (external memory). Probabilistic → spec checklist provides objective 'done' criteria (output is reviewable, not subjective). Limited context → per-task subagent isolation gives each task a full context window (no accumulated noise). SDD is the methodological response to all three constraints."
        },
        {
          id: 11,
          question: "Scenario: A team starts implementing a feature without doing the Research phase. They write a spec based on assumptions and proceed to Implementation. Mid-implementation, they discover the API they planned to use has a 100-call/minute rate limit that breaks their architecture. What went wrong?",
          options: {
            A: "The spec was too detailed",
            B: "They skipped the Research phase — research would have revealed the API's rate limit constraint before the spec was written, preventing the architectural surprise during implementation",
            C: "They should have used Parallel Research instead",
            D: "The Implementation phase was started too early"
          },
          correct: "B",
          explanation: "This is the classic 'specifying unknowns' anti-pattern. The Research phase exists to gather context and understand constraints BEFORE specifying. Without research, the spec contained an assumption (the API can handle our load) that turned out to be wrong. Research would have revealed the 100-call/minute limit, and the spec's Constraints section would have addressed it properly."
        },
        {
          id: 12,
          question: "Scenario: You're implementing a complex feature using the Four-Phase SDD Workflow. During Implementation, a subagent discovers that a design decision in the spec won't work for an edge case. What should happen next according to SDD principles?",
          options: {
            A: "The subagent should proceed anyway and hope it works",
            B: "The subagent should fail the task, and the main agent should escalate — the spec needs to be updated with the discovered constraint before implementation continues",
            C: "The subagent should rewrite the spec to fix the issue",
            D: "The team should abandon SDD and switch to vibe coding"
          },
          correct: "B",
          explanation: "SDD is iterative — the spec updates during implementation when discoveries require it. The subagent's task fails (atomic rollback via git revert), the main agent escalates, and the spec is refined with the newly discovered constraint. This is fundamentally unlike Waterfall: SDD phases aren't isolated handoffs. The spec is a living document that improves with reality."
        },
        {
          id: 13,
          question: "Scenario: A project manager asks why the Four-Phase SDD Workflow can't be parallelized — why can't Research, Specification, and Refinement happen simultaneously for different parts of a large system?",
          options: {
            A: "They can be parallelized — that's the point of Parallel Research",
            B: "The four phases are sequential because each phase's output is the next phase's required input — starting Implementation without a Refined spec means implementing ambiguities, starting Specification without Research means specifying unknowns",
            C: "Parallelization is possible with a large enough team",
            D: "Only the Research phase can be parallelized"
          },
          correct: "B",
          explanation: "The four phases are sequential due to dependencies: Research output (unified context document) → Specification input. Specification output (concrete spec document) → Refinement input. Refinement output (refined spec with ambiguities resolved) → Implementation input. Skipping phases compounds uncertainty. However, WITHIN the Research phase, Parallel Research can explore different aspects simultaneously."
        },
        {
          id: 14,
          question: "Scenario: Your team completes the Research and Specification phases for a user notification feature. During Refinement, the interview reveals that the team has different interpretations of 'real-time notifications' — some think WebSocket push, others think polling every 30 seconds. What value did the Refinement phase provide?",
          options: {
            A: "It wasted time — the team should have just decided during Specification",
            B: "It surfaced a hidden assumption in the Scope/Boundaries category — the spec didn't specify the technical approach for 'real-time,' and different team members assumed differently. The interview forced an explicit decision before implementation locked in the wrong approach.",
            C: "It proved that the Research phase was incomplete",
            D: "It showed that the team needs better communication skills"
          },
          correct: "B",
          explanation: "This is exactly why Refinement exists. Even well-written specs contain ambiguities the author didn't notice. The structured interview across five ambiguity categories (Audience/Stakeholder, Scope/Boundaries, Success Criteria, Technical Constraints, Edge Cases) surfaced that 'real-time' was interpreted differently. The spec is updated with the explicit decision (e.g., 'WebSocket push for critical notifications, 30-second polling for non-critical') before implementation."
        },
        {
          id: 15,
          question: "Scenario: A developer argues that the Four-Phase SDD Workflow is 'too slow' for their urgent production bug fix that affects 10 files. They want to skip straight to Implementation. According to the SDD Decision Framework, what's the right call?",
          options: {
            A: "Follow all four phases — SDD is always the right approach",
            B: "Skip SDD entirely — if the fix can be explained in one sentence, the overhead isn't justified",
            C: "Use a lightweight spec (Task, Constraints, Success Criteria) then implement — 10 files affected triggers the SDD heuristic (files_affected > 5), but the urgency justifies a lighter approach",
            D: "Only do Research and skip the other phases"
          },
          correct: "C",
          explanation: "The Decision Heuristic says: IF files_affected > 5 → Use SDD. But the lesson also teaches judgment. For an urgent production bug affecting 10 files, a full four-phase workflow is overkill, but pure vibe coding is risky. The lightweight spec pattern (Task: one-line description, Constraints: what NOT to do, Success Criteria: measurable outcomes) provides 80% of spec value with 20% of overhead — appropriate for borderline cases."
        }
      ]
    },
    {
      id: 5,
      title: "Parallel Research",
      mcqs: [
        {
          id: 1,
          question: "What is Parallel Research in SDD and what problem does it solve?",
          options: {
            A: "Multiple developers researching the same topic simultaneously",
            B: "Spawning multiple subagents to explore different aspects of a problem simultaneously — compressing hours of sequential research into minutes",
            C: "Running research queries in parallel database threads",
            D: "Parallelizing code compilation during the research phase"
          },
          correct: "B",
          explanation: "Parallel Research: spawn multiple subagents simultaneously, each exploring a different aspect of the problem (authentication patterns, error handling approaches, pagination strategies, performance considerations). Sequential research takes hours; parallel subagent research compresses it to minutes. The decomposed outputs are then synthesized into a unified research document."
        },
        {
          id: 2,
          question: "What is the Decomposition Template for parallel research?",
          options: {
            A: "Break the problem into alphabetically ordered subtopics",
            B: "Identify distinct research angles (technical, user, competitive, implementation), assign one subagent per angle, specify exactly what each must discover and return",
            C: "Split the codebase into equal parts by file count",
            D: "Assign research questions to team members based on expertise"
          },
          correct: "B",
          explanation: "Decomposition template: identify distinct research angles that can be explored independently (they don't need each other's results to proceed). Examples: 1) authentication patterns in the existing codebase, 2) industry-standard approaches, 3) security requirements, 4) performance implications. Each subagent gets a specific scope and returns a structured summary."
        },
        {
          id: 3,
          question: "What is the Research-to-Spec Handoff?",
          options: {
            A: "Handing research documents from one team to another",
            B: "Synthesizing parallel research summaries into a unified context document, then using that document as the foundation for the Specification phase — research insights directly populate spec sections",
            C: "Converting research files into specification format automatically",
            D: "The moment when AI takes over from human researchers"
          },
          correct: "B",
          explanation: "Research-to-Spec Handoff: the synthesized research document becomes the direct input to the Specification phase. Research reveals constraints (the API has a 100/minute rate limit) → Constraint section of spec. Research reveals patterns (industry uses OAuth 2.0) → Reference Architecture section. The handoff is explicit: 'Based on this research, write the specification.'"
        },
        {
          id: 4,
          question: "What example scenarios benefit most from Parallel Research?",
          options: {
            A: "Bug fixes in known codebases",
            B: "Authentication patterns, pagination approaches, error handling strategies — scenarios where multiple independent technical questions must be answered before specifying",
            C: "UI color scheme decisions",
            D: "Database backup configurations"
          },
          correct: "B",
          explanation: "Parallel Research excels for: authentication patterns (JWT vs. OAuth vs. session? stateless vs. stateful?), pagination approaches (cursor vs. offset vs. keyset?), error handling strategies (retry logic, circuit breakers, error codes). Each question is independent and can be researched simultaneously — perfect for parallel subagent execution."
        },
        {
          id: 5,
          question: "How does Parallel Research specifically accelerate 'Learning New Libraries'?",
          options: {
            A: "It downloads library documentation faster",
            B: "Multiple subagents investigate different library aspects simultaneously: API surface, common patterns, known gotchas, integration examples — condensing what would take hours of sequential reading into a comprehensive parallel summary",
            C: "It generates code examples from library documentation automatically",
            D: "It finds Stack Overflow answers faster through parallelism"
          },
          correct: "B",
          explanation: "Learning New Libraries via Parallel Research: Subagent 1 investigates the API surface, Subagent 2 finds common patterns and idioms, Subagent 3 identifies known pitfalls and gotchas, Subagent 4 finds integration examples for your tech stack. Synthesized: comprehensive library knowledge in minutes instead of hours of sequential documentation reading."
        },
        {
          id: 6,
          question: "What makes a research angle suitable for parallel (vs. sequential) investigation?",
          options: {
            A: "The angle must be short enough to complete in under 5 minutes",
            B: "The angle must be independent — it doesn't need results from another angle to begin, and its findings don't block other angles from proceeding",
            C: "The angle must involve external API calls",
            D: "The angle must produce results in a specific format"
          },
          correct: "B",
          explanation: "Parallelism requires independence: each research angle can be explored without waiting for another angle's results. 'What are common pagination patterns?' doesn't depend on 'What authentication approach should we use?' — they're independent investigations. Angles with dependencies must be sequenced; independent angles parallelize."
        },
        {
          id: 7,
          question: "What is the Research Synthesis step?",
          options: {
            A: "Using AI to generate a bibliography from research sources",
            B: "Combining all parallel subagent research summaries into a single unified document that removes duplication, resolves conflicts between findings, and organizes insights for the Specification phase",
            C: "Converting research notes into code comments",
            D: "Running automated tests against research findings"
          },
          correct: "B",
          explanation: "Research Synthesis: the main agent (or a dedicated synthesis subagent) takes all parallel research summaries, removes duplication (multiple agents may find the same pattern), resolves conflicts (two agents recommend different approaches — synthesis resolves which applies to this context), and organizes insights into a coherent foundation for specification writing."
        },
        {
          id: 8,
          question: "Why is parallel research particularly valuable for large refactoring projects?",
          options: {
            A: "It generates the refactored code automatically",
            B: "Multiple subagents can simultaneously analyze different parts of the codebase to be refactored — understanding existing patterns, dependencies, and risks before committing to a refactoring specification",
            C: "Parallel research reduces the number of files to be refactored",
            D: "It identifies which team member should handle each file"
          },
          correct: "B",
          explanation: "For large refactors: the codebase spans 50 files across authentication, authorization, session management, and API layers. Sequential analysis takes hours and overwhelms a single context window. Parallel subagents — each analyzing one layer — complete simultaneously, and their findings synthesize into a comprehensive picture before any refactoring spec is written."
        },
        {
          id: 9,
          question: "What should each parallel research subagent return?",
          options: {
            A: "Raw documentation copied from official sources",
            B: "A structured summary covering: what was found, key patterns/decisions relevant to the task, constraints discovered, recommended approach, and open questions",
            C: "A list of URLs for further reading",
            D: "Complete working code for the research area"
          },
          correct: "B",
          explanation: "Research subagent return format: structured summary with What was found (facts, patterns, constraints), Key decisions (what approach is recommended for this context), Constraints discovered (rate limits, compatibility issues, required dependencies), and Open questions (what still needs clarification before specifying). This structure feeds directly into spec sections."
        },
        {
          id: 10,
          question: "What is the SDD principle that parallel research directly embodies?",
          options: {
            A: "Spec-as-Source — research documents become living specs",
            B: "The Research phase of the Four-Phase Workflow — ensuring the specification is grounded in actual knowledge rather than assumptions, eliminating surprises during implementation",
            C: "Spec-First — all research happens before any code",
            D: "Context isolation — each research subagent has its own fresh context"
          },
          correct: "B",
          explanation: "Parallel research embodies the Research phase's purpose: grounding the upcoming specification in actual knowledge. Without research, specifications contain assumptions (we think the API supports X). With research, specifications contain facts (the API supports X, documented here, with a 100-call/minute limit). This eliminates implementation surprises."
        },
        {
          id: 11,
          question: "Scenario: You're building a payment integration and need to research three independent aspects: (1) Stripe API patterns, (2) PCI compliance requirements, (3) existing payment code in your codebase. How should you structure the Parallel Research?",
          options: {
            A: "Assign one developer to research all three sequentially",
            B: "Spawn three subagents simultaneously — one for each independent research angle — then synthesize their findings into a unified document",
            C: "Research only the Stripe API — the other two will become clear during implementation",
            D: "Write the spec first, then research to validate it"
          },
          correct: "B",
          explanation: "These three research angles are independent (Stripe API patterns don't depend on your existing codebase, PCI compliance doesn't depend on Stripe specifics). Parallel Research spawns three subagents simultaneously, each exploring one angle. Sequential research would take hours; parallel subagent research compresses it to minutes. The synthesized findings become the foundation for the Specification phase."
        },
        {
          id: 12,
          question: "Scenario: Two parallel research subagents return conflicting recommendations for pagination: Subagent 1 recommends cursor-based pagination, Subagent 2 recommends offset-based. What should the Research Synthesis step do?",
          options: {
            A: "Pick the first subagent's recommendation arbitrarily",
            B: "Present both options without resolution — let the Specification phase decide",
            C: "Resolve the conflict by analyzing which approach applies to your context (e.g., cursor-based for real-time data, offset-based for static datasets) and document the reasoning for the spec's Reference Architecture section",
            D: "Reject both and recommend a third approach"
          },
          correct: "C",
          explanation: "Research Synthesis removes duplication AND resolves conflicts between findings. If Subagent 1 found cursor-based is better for real-time data (your use case) and Subagent 2 found offset-based is simpler but has performance issues at scale, synthesis resolves: 'Recommend cursor-based pagination for this feature due to real-time data requirements.' This resolved decision feeds directly into the spec's Reference Architecture section."
        },
        {
          id: 13,
          question: "Scenario: A team is learning a new GraphQL library for their project. Instead of spending 4 hours reading documentation sequentially, they use Parallel Research with 4 subagents. What should each subagent investigate to maximize learning efficiency?",
          options: {
            A: "All four should read the same documentation from different starting points",
            B: "Subagent 1: API surface and core concepts; Subagent 2: Common patterns and idioms; Subagent 3: Known pitfalls and gotchas; Subagent 4: Integration examples for their tech stack",
            C: "Subagent 1: History of GraphQL; Subagent 2: Comparison with REST; Subagent 3: Performance benchmarks; Subagent 4: Community forums",
            D: "Each subagent should implement a small feature using the library"
          },
          correct: "B",
          explanation: "Learning New Libraries via Parallel Research: Each subagent investigates a different, independent aspect. Subagent 1 covers the API surface (what can it do?), Subagent 2 finds common patterns (how do people use it?), Subagent 3 identifies pitfalls (what goes wrong?), Subagent 4 finds integration examples (how does it work with our stack?). Synthesized: comprehensive library knowledge in minutes instead of 4 hours of sequential reading."
        },
        {
          id: 14,
          question: "Scenario: You're refactoring a 50-file codebase spanning authentication, authorization, session management, and API layers. Why is Parallel Research particularly valuable here compared to sequential analysis?",
          options: {
            A: "It generates the refactored code automatically",
            B: "Sequential analysis would take hours and overwhelm a single context window; parallel subagents each analyze one layer simultaneously, and their findings synthesize into a comprehensive picture before any refactoring spec is written",
            C: "Parallel research reduces the number of files to be refactored",
            D: "It identifies which team member should handle each file"
          },
          correct: "B",
          explanation: "For large refactors: the codebase complexity exceeds what a single context window can hold. Parallel subagents — each analyzing one layer (authentication patterns, authorization logic, session handling, API structure) — complete simultaneously. Their synthesized findings provide a comprehensive picture of the existing system before the refactoring spec is written. This prevents the 'refactor mid-flight surprise' problem."
        },
        {
          id: 15,
          question: "Scenario: A research subagent returns: 'Found that the existing codebase uses JWT for authentication. The token expires in 15 minutes. Refresh tokens are stored in HTTP-only cookies.' Is this a good research return format?",
          options: {
            A: "No — it should include code snippets",
            B: "Yes — it's a structured summary covering what was found (JWT auth), constraints discovered (15-min expiry, HTTP-only cookies), and implies key decisions (the existing pattern should be followed for consistency)",
            C: "No — it should recommend a different authentication approach",
            D: "No — it should be at least 10 pages long to be thorough"
          },
          correct: "B",
          explanation: "Good research return format: structured summary with What was found (JWT authentication), Constraints discovered (15-min token expiry, HTTP-only cookie storage for refresh tokens), and implied Key decisions (follow existing patterns for consistency). This structure feeds directly into the spec's Context (existing auth system), Constraints (must use JWT, 15-min expiry), and Reference Architecture (HTTP-only cookies) sections."
        }
      ]
    },
    {
      id: 6,
      title: "Writing Effective Specifications",
      mcqs: [
        {
          id: 1,
          question: "What are the four parts of the SDD specification template?",
          options: {
            A: "Title, Author, Date, Content",
            B: "Context (why), Goals/Constraints (what must/must-not), Reference Architecture (how), Implementation Checklist ([ ] items)",
            C: "Problem, Solution, Timeline, Resources",
            D: "Requirements, Design, Testing, Deployment"
          },
          correct: "B",
          explanation: "The 4-part spec template: 1) Context — why this is being built, what problem it solves, what the current state is; 2) Goals/Constraints — what must be achieved (goals) and what must not happen (constraints); 3) Reference Architecture — how the solution should be structured, key technical decisions; 4) Implementation Checklist — [ ] items, each becoming one subagent task."
        },
        {
          id: 2,
          question: "What is an anti-pattern in specification writing?",
          options: {
            A: "Using bullet points instead of prose",
            B: "Vague requirements ('should be fast'), missing constraints, implementation details that over-specify HOW instead of WHAT, and noise-heavy background that doesn't affect implementation decisions",
            C: "Writing specifications in Markdown instead of Word",
            D: "Making specifications longer than 100 lines"
          },
          correct: "B",
          explanation: "Specification anti-patterns: vague requirements ('should be fast' → use '< 200ms p99 latency'), missing constraints (what CAN'T it do?), over-specifying implementation ('use a HashMap for O(1) lookups' — that's implementation detail, not spec), and noise-heavy context that reads well but doesn't change a single implementation decision."
        },
        {
          id: 3,
          question: "What makes an Implementation Checklist item well-formed?",
          options: {
            A: "It is assigned to a specific developer",
            B: "It is atomic (one clear deliverable), verifiable (done is unambiguous), independent enough to delegate to one subagent, and produces a natural commit boundary",
            C: "It has an estimated time to complete",
            D: "It uses technical jargon precisely"
          },
          correct: "B",
          explanation: "Well-formed checklist item: atomic (one clear deliverable — not 'implement authentication' but '[ ] Add JWT validation middleware to API routes'), verifiable (you can objectively determine if it's done), delegatable (one subagent can complete it with isolated context), and natural commit boundary (the completed item represents a meaningful, stable state)."
        },
        {
          id: 4,
          question: "What is the difference between Goals and Constraints in the spec template?",
          options: {
            A: "Goals are short-term; Constraints are long-term",
            B: "Goals define what the implementation MUST achieve (positive requirements); Constraints define what the implementation MUST NOT do or must stay within (negative boundaries)",
            C: "Goals are for developers; Constraints are for stakeholders",
            D: "Goals describe the happy path; Constraints describe error handling"
          },
          correct: "B",
          explanation: "Goals = positive requirements the implementation must satisfy ('User can reset password via email link'). Constraints = boundaries and prohibitions ('Must not store passwords in plaintext', 'Response time < 500ms', 'Must work without JavaScript enabled'). Both are equally important — goals define what to build; constraints define what not to build and how far it can go."
        },
        {
          id: 5,
          question: "What does 'Audience, Tone, Depth Alignment' mean in spec writing?",
          options: {
            A: "Specs should be written at a fifth-grade reading level",
            B: "The spec's audience is AI + technical reviewers; tone is precise and directive (not motivational); depth covers what Claude needs to implement correctly (no more, no less)",
            C: "Specs should appeal to both technical and business stakeholders equally",
            D: "Specs must be written in formal academic style"
          },
          correct: "B",
          explanation: "Alignment for AI-facing specs: Audience = Claude (the implementer) + technical reviewers (the validators). Tone = precise and directive — state what must be done, not why it's exciting. Depth = enough detail that Claude makes the right implementation decisions, but not so much that you've specified the implementation itself. Wrong depth = missing context or over-specified procedures."
        },
        {
          id: 6,
          question: "What is the 'Spec as External Memory' principle in practice?",
          options: {
            A: "Saving specs to external hard drives for backup",
            B: "The spec replaces the need to re-explain project context in each session — any session starting with 'Implement @docs/spec.md' has full context without conversation history",
            C: "Using external APIs to store and retrieve specification content",
            D: "Memory optimization that stores specs outside the context window"
          },
          correct: "B",
          explanation: "In practice: any new session, new developer, or new AI instance starting with '@docs/spec.md' has complete context for the task — no explanation of what we're building, why, or how. The spec IS the brief. This enables: onboarding via spec review, implementation from fresh context, and review against objective criteria — all without conversational context."
        },
        {
          id: 7,
          question: "What should a Reference Architecture section contain?",
          options: {
            A: "Links to reference documentation for all dependencies",
            B: "The structural approach (which layers, which patterns), key technical decisions (which database, which protocol), and architectural constraints (must be stateless, must support horizontal scaling)",
            C: "A list of similar architectures at other companies",
            D: "Performance benchmarks from reference implementations"
          },
          correct: "B",
          explanation: "Reference Architecture contains: structural approach (MVC? microservices? layered?), key technical decisions (PostgreSQL for this feature's data, Redis for caching), integration points (which existing services to use/call), and architectural constraints (must be stateless for horizontal scaling, must not introduce new dependencies without approval). It gives Claude the skeleton before it builds the body."
        },
        {
          id: 8,
          question: "How does a well-written spec reduce hallucination risk?",
          options: {
            A: "Specs bypass the model's probabilistic generation entirely",
            B: "Concrete specs leave no room for AI to invent details — when the spec says exactly which API to call, what response format to return, and which error codes to use, there's nothing to hallucinate about",
            C: "Specs are verified by a separate model before implementation",
            D: "Well-written specs increase model temperature for better creativity"
          },
          correct: "B",
          explanation: "Hallucination risk reduction: vague spec ('handle errors gracefully') gives AI latitude to invent — it may invent an error format, an error code, or an error recovery approach that doesn't match the system. Concrete spec ('return { error: string, code: ErrorCode } where ErrorCode is from @/types/errors') leaves nothing to invent — implementation is constrained by specification."
        },
        {
          id: 9,
          question: "What is the right level of detail for a specification's implementation checklist?",
          options: {
            A: "As detailed as possible — include code snippets for every item",
            B: "Each item should be a clear deliverable a developer can complete in 5–15 minutes, without prescribing the exact code — 'what to build', not 'how to build every line of it'",
            C: "As brief as possible — one-word items are ideal",
            D: "Include test cases for every checklist item"
          },
          correct: "B",
          explanation: "Right level: each checklist item = a clear deliverable completable in 5–15 minutes (one focused subagent task), specifying WHAT but not HOW. '[ ] Add rate limiting to POST /api/auth/login (max 5 attempts per IP per 15 minutes)' — clear WHAT (rate limiting, specific endpoint, specific limits) without specifying HOW (which rate limiting library, which data structure, which algorithm)."
        },
        {
          id: 10,
          question: "Why does the spec's Context section matter for AI implementation quality?",
          options: {
            A: "Context reduces token count by eliminating the need for clarifying questions",
            B: "Context enables Claude to make better judgment calls at decision points — knowing WHY something is being built helps Claude resolve ambiguities in the spirit of the requirement rather than the letter",
            C: "Context is required for legal compliance",
            D: "Context improves code formatting and style choices"
          },
          correct: "B",
          explanation: "Context enables better judgment: without context, Claude makes arbitrary choices at ambiguous decision points. With context ('We're building this for mobile users with poor connectivity — offline-first is critical'), Claude's ambiguous decisions (cache strategy, error handling, data loading approach) align with actual requirements. The WHY guides judgment where the WHAT is silent."
        },
        {
          id: 11,
          question: "Scenario: You're writing a spec for a file upload feature. Your first draft says: 'Users should be able to upload files quickly and securely.' A teammate reviews it and says the spec is too vague to implement effectively. According to the signal-dense vs. noise-heavy principle, what specific improvements would make this spec actionable?",
          options: {
            A: "Add background about why file uploads are important for the business",
            B: "Replace vague terms with concrete constraints: 'Accept PDF/PNG/JPG up to 10MB, scan for malware before storage, return a signed URL within 2 seconds, reject files with executable content types'",
            C: "Write a longer Context section explaining the history of file uploads in the product",
            D: "Add motivational language to encourage the AI to do its best work"
          },
          correct: "B",
          explanation: "The original spec is noise-heavy — 'quickly and securely' reads well but doesn't change any implementation decision. A signal-dense spec replaces vague adjectives with concrete constraints: file types, size limits, security checks, performance thresholds, and rejection criteria. Each constraint directly affects what the AI implements."
        },
        {
          id: 12,
          question: "Scenario: You're specifying a notification system. Your Implementation Checklist has one item: '[ ] Build the notification system.' The AI implementation produces a monolithic 500-line file that's hard to review and impossible to roll back partially. What spec-writing mistake caused this, and how should the checklist be restructured?",
          options: {
            A: "The AI model was too weak — use a more powerful model",
            B: "The checklist item wasn't atomic — it should be decomposed into 5-15 minute tasks: '[ ] Define notification data schema', '[ ] Create email delivery service', '[ ] Create in-app notification store', '[ ] Add user preference settings', '[ ] Write integration tests'",
            C: "The Reference Architecture section was missing — the AI needed more structural guidance",
            D: "The Context section was too short — the AI didn't understand why notifications matter"
          },
          correct: "B",
          explanation: "A well-formed checklist item is atomic (one clear deliverable), verifiable, and completable in 5-15 minutes. '[ ] Build the notification system' is a feature, not a task. Decomposing it into schema, delivery channels, storage, preferences, and tests gives the AI discrete units — each producing one commit — that are individually reviewable and rollbackable."
        },
        {
          id: 13,
          question: "Scenario: Your team writes a spec for a search feature. The Context section is 3 pages long, covering the history of search in the company, user research findings, competitor analysis, and the CEO's vision for discovery. The Goals/Constraints section is 2 lines. The AI implementation misses critical requirements. What spec structural problem caused this?",
          options: {
            A: "The AI didn't read the Context section carefully enough",
            B: "Signal-to-noise ratio is inverted — the spec is noise-heavy with background that doesn't affect implementation, while the Goals/Constraints (the signal that changes AI behavior) is under-specified. The 3 pages of context should be compressed; the constraints should be expanded.",
            C: "The spec should have been written in JSON format for better AI parsing",
            D: "The Implementation Checklist should come before the Context section"
          },
          correct: "B",
          explanation: "This is the classic signal-vs-noise anti-pattern. Context matters for judgment calls, but 3 pages of background with 2 lines of constraints means the AI has lots of motivation but few concrete directives. A signal-dense spec compresses context to essentials ('Users need to find products by name, category, or description') and expands constraints ('Results must load in <200ms, support fuzzy matching, exclude discontinued items')."
        },
        {
          id: 14,
          question: "Scenario: You're specifying a data export feature for a healthcare application. The spec says 'export patient data in CSV format' but doesn't mention HIPAA compliance, data encryption at rest, or audit logging. The AI generates working code that would fail a compliance audit. Which part of the 4-part spec template was insufficient, and what should it have included?",
          options: {
            A: "The Context section — it should have explained HIPAA regulations in detail",
            B: "The Goals/Constraints section — it should have included hard constraints: 'All exported files must be encrypted (AES-256), audit log every export with user/timestamp/record count, exclude Social Security numbers, require manager approval for exports >100 records'",
            C: "The Reference Architecture — it should have specified which encryption library to use",
            D: "The Implementation Checklist — it should have had more items"
          },
          correct: "B",
          explanation: "The Goals/Constraints section defines what the implementation MUST and MUST NOT do. For healthcare data, constraints like encryption, audit logging, data exclusion rules, and approval workflows are non-negotiable boundaries. Without them, the AI satisfies the literal requirement ('export CSV') while violating the implicit regulatory requirements. Constraints prevent the AI from taking shortcuts that would be illegal in production."
        },
        {
          id: 15,
          question: "Scenario: A developer writes a spec for a payment integration. The Reference Architecture section says 'use Stripe API' but doesn't specify which API version, what error handling approach to use, or how to handle webhook failures. The AI implementation works in testing but fails in production when Stripe returns an unexpected error format. What spec principle would have prevented this production failure?",
          options: {
            A: "The spec should have used a different payment provider",
            B: "The Reference Architecture should have specified: API version ('Stripe API v2024.01'), error handling pattern ('wrap all Stripe calls in retry-with-backoff, max 3 attempts, log failures to monitoring service'), and webhook handling ('verify signature, idempotent processing, dead-letter queue for failed webhooks')",
            C: "The Implementation Checklist should have included a testing item",
            D: "The Context section should have mentioned that production reliability matters"
          },
          correct: "B",
          explanation: "The Reference Architecture section gives the AI the structural approach and key technical decisions. Saying 'use Stripe API' is like saying 'build a house' — it's directionally correct but missing the blueprint. Specifying API version, error handling patterns, and webhook reliability requirements gives the AI the skeleton it needs to build production-grade code, not just working code."
        }
      ]
    },
    {
      id: 7,
      title: "Refinement via Interview",
      mcqs: [
        {
          id: 1,
          question: "What is the purpose of the Refinement phase in SDD?",
          options: {
            A: "To improve the code quality after implementation",
            B: "To surface hidden assumptions and ambiguities in the spec through structured questioning — before implementation locks in wrong assumptions",
            C: "To get management approval for the project",
            D: "To reduce the spec's length before implementation"
          },
          correct: "B",
          explanation: "Refinement phase: surface hidden assumptions BEFORE implementation. Even well-written specs contain ambiguities the author didn't notice. The interview process asks targeted questions across five categories to expose gaps — what happens for edge cases, who exactly is the audience, what does success actually look like. Finding ambiguities before implementation is far cheaper than finding them after."
        },
        {
          id: 2,
          question: "What are the five ambiguity categories in the Refinement interview?",
          options: {
            A: "Cost, Time, Quality, Scope, Risk",
            B: "Audience/Stakeholder, Scope/Boundaries, Success Criteria, Technical Constraints, Edge Cases",
            C: "Functional, Non-functional, Security, Performance, Accessibility",
            D: "User, Business, Technical, Operational, Compliance"
          },
          correct: "B",
          explanation: "Five ambiguity categories: 1) Audience/Stakeholder (who uses this, who approves it?), 2) Scope/Boundaries (what's explicitly in/out?), 3) Success Criteria (how do we know it's done and done correctly?), 4) Technical Constraints (what can't be done for technical/legal/business reasons?), 5) Edge Cases (what happens in unusual but possible scenarios?)."
        },
        {
          id: 3,
          question: "What is the 'ask_user_question' pattern in Refinement?",
          options: {
            A: "A database query pattern for retrieving user data",
            B: "The pattern where the AI asks ONE targeted question at a time to surface a specific ambiguity, waits for the answer, then incorporates it before asking the next question",
            C: "A UI pattern for collecting user preferences",
            D: "An API endpoint for asking clarifying questions to an LLM"
          },
          correct: "B",
          explanation: "ask_user_question pattern: rather than dumping all ambiguities at once (overwhelming), ask ONE targeted question, wait for the answer, incorporate it into the spec, then ask the next. This structured dialogue gradually resolves ambiguities. The pattern is: 'Before I can complete the spec, I need clarification on one thing: [specific question]'"
        },
        {
          id: 4,
          question: "How does the Refinement phase handle Scope/Boundaries ambiguity?",
          options: {
            A: "It expands the scope to cover all possible cases",
            B: "It asks explicit questions about what is IN scope and what is explicitly OUT of scope — forcing decisions about boundaries that would otherwise be assumed by different team members differently",
            C: "It reduces scope to fit within budget",
            D: "It defers scope decisions to the implementation phase"
          },
          correct: "B",
          explanation: "Scope/Boundaries refinement: ask explicit questions — 'The spec mentions user notifications, but does this include email notifications, push notifications, or only in-app? Should the system handle notification preferences?' Unasked, each team member and the AI will assume differently. The interview forces explicit decisions that become documented constraints."
        },
        {
          id: 5,
          question: "What distinguishes 'Success Criteria' from 'Goals' in the ambiguity context?",
          options: {
            A: "They are identical — success criteria and goals are synonyms",
            B: "Goals state what to build; Success Criteria state how to objectively verify it was built correctly — 'user can reset password' (goal) vs. 'user receives email within 30 seconds, link expires in 24 hours, one use only' (success criteria)",
            C: "Goals are for stakeholders; Success Criteria are for developers",
            D: "Goals are qualitative; Success Criteria are always quantitative"
          },
          correct: "B",
          explanation: "The distinction: Goals = 'What to build' (user can reset their password). Success Criteria = 'How to verify it's built correctly' (email arrives within 30s, link is single-use, expires in 24h, old password is rejected after reset, active sessions are invalidated). Without success criteria, 'done' is subjective — the refinement interview makes it measurable."
        },
        {
          id: 6,
          question: "When should you 'expand vs. accept a lightweight spec' according to the refinement guidance?",
          options: {
            A: "Always expand — comprehensive specs always produce better results",
            B: "Expand when: writing the lightweight spec reveals complexity (unclear constraints, multiple interpretations, significant edge cases). Accept as-is when: the spec feels sufficient and implementation is straightforward.",
            C: "Always accept lightweight specs — expansion wastes time",
            D: "Expand only when working with a team of 3+ people"
          },
          correct: "B",
          explanation: "Expand vs. accept judgment: if writing the lightweight spec reveals hidden complexity (you discover edge cases, conflicting constraints, unclear boundaries), convert to full specification. If the lightweight spec feels clear and complete — constraints are obvious, success criteria are self-evident, edge cases are few — proceed directly without expanding. The act of writing often reveals whether expansion is needed."
        },
        {
          id: 7,
          question: "What is the 'Interview Checklist' for surfacing hidden assumptions?",
          options: {
            A: "A list of technical interview questions for hiring developers",
            B: "A structured list of questions across the five ambiguity categories that systematically probes each area: who, what, when, how much, what if",
            C: "A checklist Claude runs through automatically",
            D: "Questions from previous failed projects"
          },
          correct: "B",
          explanation: "The Interview Checklist systematically probes each ambiguity category: Audience (who is the primary user? who are secondary users? who can approve changes?), Scope (what features are explicitly excluded?), Success Criteria (what metrics define success?), Technical Constraints (what existing systems must it integrate with?), Edge Cases (what should happen when the user is offline/unauthorized/has invalid data?)."
        },
        {
          id: 8,
          question: "What is the Technical Constraints ambiguity category asking about?",
          options: {
            A: "Hardware requirements for running the system",
            B: "Constraints imposed by existing systems, laws, business rules, or technical limitations that the implementation must respect but aren't obvious from the goals",
            C: "The technical skills required of the development team",
            D: "Database schema constraints and indexes"
          },
          correct: "B",
          explanation: "Technical Constraints surface: existing system constraints (must integrate with legacy auth system using LDAP), legal constraints (GDPR compliance required for EU users), business rules (pricing must be approved by Finance before display), performance constraints (must support 10,000 concurrent users), and compatibility constraints (must work in IE 11 for enterprise clients). These would otherwise be assumed or missed."
        },
        {
          id: 9,
          question: "Why is the Edge Cases category particularly important in AI-assisted development?",
          options: {
            A: "AI is better at handling edge cases than normal cases",
            B: "AI implements what the spec says — if the spec doesn't address edge cases, AI will either hallucinate a handling approach or skip it entirely, causing production bugs for rare but real scenarios",
            C: "Edge cases are the most common source of billing disputes",
            D: "AI automatically generates edge case tests without specification"
          },
          correct: "B",
          explanation: "Edge cases are critical because AI is a literal executor — if the spec says 'user can delete their account,' AI implements the happy path. What about active subscriptions? Shared resources? Admin accounts? AI must either invent handling (hallucination risk) or leave it undefined (production bug). Refinement surfaces these BEFORE implementation forces a decision."
        },
        {
          id: 10,
          question: "What is the output of the Refinement phase?",
          options: {
            A: "A new version of the spec with all ambiguities removed and decisions documented",
            B: "A list of questions for the next meeting",
            C: "Approval signatures from all stakeholders",
            D: "A revised project timeline accounting for discovered complexity"
          },
          correct: "A",
          explanation: "Refinement output: the specification updated with answers to all surfaced ambiguities — constraints clarified, success criteria made measurable, edge cases handled, scope boundaries explicit. This refined spec is the Implementation phase's input. The spec transitions from 'what the author intended' to 'what all stakeholders agreed to implement' — a subtle but crucial difference."
        },
        {
          id: 11,
          question: "Scenario: You write a spec for a 'team collaboration feature' that says 'team members can share documents and comment on them.' You hand it to AI for implementation without refinement. The AI builds a system where anyone on the internet can view and edit documents. Which ambiguity category from the Refinement phase would have caught this, and what question should have been asked?",
          options: {
            A: "Technical Constraints — 'What database should store the documents?'",
            B: "Audience/Stakeholder — 'Who exactly are team members? Are documents public, private to the team, or role-based? Who can comment — viewers, editors, or only document owners?'",
            C: "Edge Cases — 'What happens when two users edit simultaneously?'",
            D: "Success Criteria — 'How many documents should the system support?'"
          },
          correct: "B",
          explanation: "This is an Audience/Stakeholder ambiguity. The term 'team members' was never defined — the AI assumed the broadest possible interpretation (anyone). The refinement interview would have asked: 'Who is a team member? Is there an invitation system? Are documents visible to all team members or only specific roles?' These questions force explicit access control decisions that the spec left implicit."
        },
        {
          id: 12,
          question: "Scenario: During refinement of a spec for an e-commerce checkout, you ask about edge cases. The stakeholder reveals: 'Oh, we need to handle partial payments — sometimes a user's gift card doesn't cover the full amount, so they need to pay the remainder with a credit card.' This wasn't in the original spec. What does this scenario demonstrate about the Refinement phase?",
          options: {
            A: "The original spec author was incompetent",
            B: "The Refinement phase surfaces hidden assumptions that even knowledgeable stakeholders forget to mention — the structured interview across edge cases catches real business logic that would have been a production bug if discovered after implementation",
            C: "Edge cases should always be in the initial spec — refinement is unnecessary if the spec is well-written",
            D: "The AI should have asked about partial payments during implementation"
          },
          correct: "B",
          explanation: "This demonstrates why refinement exists: even domain experts forget edge cases when writing specs. The stakeholder knows partial payments are needed but didn't think to specify it. The refinement interview's Edge Cases category ('What happens when a payment method doesn't cover the full amount?') surfaces this before implementation. Finding it during refinement costs a document edit; finding it after implementation costs a rewrite."
        },
        {
          id: 13,
          question: "Scenario: You're refining a spec for a content moderation system. The AI conducting the interview asks you 12 questions at once: 'Who are the moderators? What content types need moderation? What's the review SLA? What happens for appeals? Should there be an audit log? What about automated filtering? ...' You feel overwhelmed and give shallow answers to most questions. What refinement pattern is being violated?",
          options: {
            A: "The five ambiguity categories are wrong — there should be more",
            B: "The ask_user_question pattern — the AI should ask ONE targeted question at a time, wait for the answer, incorporate it, then ask the next. Dumping all ambiguities at once overwhelms the stakeholder and produces low-quality answers.",
            C: "The spec should have been longer to avoid needing refinement",
            D: "The interview should be conducted by a human, not AI"
          },
          correct: "B",
          explanation: "The ask_user_question pattern exists because structured, sequential questioning produces better answers than bulk interrogation. One question at a time: the stakeholder thinks deeply, gives a precise answer, sees it incorporated into the spec, and is ready for the next. Twelve questions at once: the stakeholder skims, gives shallow answers, and the refinement misses critical nuances."
        },
        {
          id: 14,
          question: "Scenario: You write a lightweight spec for a simple 'add dark mode toggle' feature. The spec has: Task (one-liner), Constraints (don't break existing themes, respect OS preference), and Success Criteria (toggle persists, all pages render correctly in dark mode). During refinement, you realize there are no hidden ambiguities — the constraints are obvious, edge cases are minimal, and success is self-evident. What should you do?",
          options: {
            A: "Expand to a full 4-part specification anyway — thoroughness is always better",
            B: "Accept the lightweight spec as sufficient and proceed directly to implementation — the act of writing revealed no hidden complexity, so expansion would be overhead without value",
            C: "Add a Reference Architecture section before implementing",
            D: "Run a Parallel Research phase to investigate dark mode patterns"
          },
          correct: "B",
          explanation: "The expand-vs-accept guidance: if writing the lightweight spec reveals no hidden complexity (constraints are obvious, success criteria are self-evident, edge cases are few), proceed without expanding. The lightweight spec already provides 80% of spec value with 20% of overhead. Expanding to a full spec for a simple toggle would be the overhead the Decision Framework warns against."
        },
        {
          id: 15,
          question: "Scenario: A team refines a spec for a real-time chat application. During the Success Criteria interview, they agree: 'Messages should be delivered quickly.' During the Technical Constraints interview, they reveal: 'Our users are in regions with unreliable internet.' These two facts together expose a gap. What success criteria should the refined spec specify?",
          options: {
            A: "'Messages should be delivered in under 100ms' — fast delivery is the goal",
            B: "'Messages display optimistic UI within 200ms, show delivery status (sending/sent/delivered/failed), queue offline messages for retry when connectivity returns, and notify users of failed deliveries with a retry option' — measurable criteria that account for the unreliable connectivity constraint",
            C: "'Messages should use WebSocket for real-time delivery' — this is a technical constraint",
            D: "'The chat should work like WhatsApp' — this is a clear success criterion"
          },
          correct: "B",
          explanation: "The refinement interview connected two facts: 'quick delivery' (success criteria) + 'unreliable internet' (technical constraint) = the spec needs offline-tolerant design. Vague 'delivered quickly' becomes measurable: optimistic UI timing, delivery status indicators, offline queuing, and failure recovery. This is refinement at its best — surfacing the interaction between criteria and constraints to produce a spec that handles real-world conditions."
        }
      ]
    },
    {
      id: 8,
      title: "Phase 4: Task-Based Implementation",
      mcqs: [
        {
          id: 1,
          question: "What is the core prompt pattern for task-based SDD implementation?",
          options: {
            A: "Write all the code for @docs/spec.md in one response",
            B: "'Implement @docs/my-spec.md. Use the task tool and each task should only be done by a subagent so that context is clear. After each task do a commit before you continue. You are the main agent and your subagents are your devs.'",
            C: "Read @docs/spec.md and ask me questions before implementing",
            D: "Generate a plan for implementing @docs/spec.md"
          },
          correct: "B",
          explanation: "The core SDD implementation prompt: 'Implement @docs/my-spec.md. Use the task tool and each task should only be done by a subagent so that context is clear. After each task do a commit before you continue. You are the main agent and your subagents are your devs.' This single prompt triggers the entire task-extraction → delegation → commit → progress-tracking cycle."
        },
        {
          id: 2,
          question: "What are the four steps that occur when running the SDD implementation prompt?",
          options: {
            A: "Plan, Code, Test, Deploy",
            B: "Step 1: Task Extraction (spec checklist → tasks with dependencies); Step 2: Subagent Delegation (fresh subagent per task); Step 3: Task Execution and Commit (subagent completes, commits); Step 4: Progress Tracking (main agent updates status)",
            C: "Read, Parse, Execute, Verify",
            D: "Initialize, Fork, Merge, Release"
          },
          correct: "B",
          explanation: "Implementation steps: 1) Task Extraction — Claude reads spec, extracts implementation checklist, each checkbox becomes a task with identified dependencies; 2) Subagent Delegation — for each task, a fresh subagent receives isolated task description + relevant spec context; 3) Task Execution — subagent completes task and commits atomically; 4) Progress Tracking — main agent updates TaskUpdate status, moves to next task."
        },
        {
          id: 3,
          question: "What is 'Agent Amnesia' and how does SDD address it?",
          options: {
            A: "When AI forgets which programming language it's using",
            B: "Starting a new session mid-task loses all progress. SDD addresses it: the specification and task list persist on disk, so any new session reads the spec and tasks to resume exactly where the previous session stopped.",
            C: "When AI forgets its role as main agent vs. subagent",
            D: "Memory fragmentation in the AI model's attention mechanism"
          },
          correct: "B",
          explanation: "Agent Amnesia: starting a new session mid-implementation, all context (what was done, what's next, what decisions were made) is gone. SDD solution: spec document + task list are stored on filesystem. New session reads @docs/spec.md (what to build) and TaskList (what's done/in-progress/pending) and resumes without loss. The external persistence defeats statelessness."
        },
        {
          id: 4,
          question: "What is 'Context Pollution' in the task-based implementation context?",
          options: {
            A: "When too many files are open in the context window",
            B: "A full context window causes agents to drop discovered bugs instead of tracking them — fresh subagent context per task prevents accumulated errors from contaminating subsequent task implementations",
            C: "When environment variables leak into the codebase",
            D: "Noise in the training data that affects model quality"
          },
          correct: "B",
          explanation: "Context Pollution example: main agent discovers a data format assumption at minute 10, writes validation based on it at minute 25, implements API at minute 40 — at minute 55 tests fail because the assumption was wrong. The context pollution from the wrong assumption contaminated 45 minutes of work. Fresh subagent per task: task 4 fails without affecting tasks 1-3, rollback is surgical."
        },
        {
          id: 5,
          question: "What is the 'Backpressure Pattern' in SDD implementation?",
          options: {
            A: "Slowing down implementation to prevent server overload",
            B: "Pre-commit hooks that reject commits when quality gates fail — automatically slowing implementation when quality drops",
            C: "Pushing back on requirements that are too complex",
            D: "Database connection pooling to prevent overload"
          },
          correct: "B",
          explanation: "Backpressure Pattern: pre-commit hooks as quality gates. When a subagent tries to commit, the hook runs automatically: 'pnpm typecheck && pnpm lint && pnpm test-run'. If any check fails, the commit is rejected — the subagent must fix the issue before proceeding. This prevents broken code from accumulating and being discovered only at integration time."
        },
        {
          id: 6,
          question: "What were the results from the alexop.dev SDD implementation case study?",
          options: {
            A: "Total time: 3 hours; 30 tasks; 30 commits; 15 rollbacks",
            B: "Total time: 45 minutes; 14 tasks completed; 14 commits (one per task); 71% context usage; 0 rollbacks needed",
            C: "Total time: 2 days; 50 tasks; 50 commits; 5 rollbacks",
            D: "Total time: 15 minutes; 5 tasks; 5 commits; 0 rollbacks"
          },
          correct: "B",
          explanation: "alexop.dev implementation results: 45 minutes total, 14 tasks completed, 14 commits (one per task — perfect atomic history), 71% context window usage, and 0 rollbacks needed. This demonstrates the power of task-based SDD: efficient context usage, clean git history, no rework. The spec prevented surprises; the task structure prevented context pollution."
        },
        {
          id: 7,
          question: "When should you use task-based implementation vs. simpler approaches?",
          options: {
            A: "Always use task-based — it's always better",
            B: "Use task-based when: 5+ distinct items, parallelizable work, rollback boundaries needed, implementation >30 minutes. Use simpler approaches for: 1-3 items, inherently sequential, quick prototype, single commit scope.",
            C: "Use task-based only for enterprise projects",
            D: "Use task-based only when working in a team"
          },
          correct: "B",
          explanation: "Task-based implementation when: spec has 5+ distinct items, work can be parallelized, rollback boundaries are valuable, implementation exceeds 30 minutes. Use simpler approaches when: spec is small (1-3 items), work is inherently sequential with no parallelism, it's a quick prototype, or the entire implementation fits in a single commit."
        },
        {
          id: 8,
          question: "What is the Lab exercise for task decomposition and what skill does it develop?",
          options: {
            A: "Automatically generating tasks from any codebase",
            B: "Taking a specification, listing all implementation items, identifying dependencies (parallel vs. sequential), estimating sizes (5-15 minutes each), and drawing the dependency graph — developing the judgment to decompose work correctly before delegating",
            C: "Converting tasks into JIRA tickets automatically",
            D: "Training an AI model to decompose specs automatically"
          },
          correct: "B",
          explanation: "The Lab exercise: take a real specification → list all implementation items from the checklist → identify dependencies (which tasks require others first? which can run in parallel?) → estimate sizes (5–15 minutes each) → draw the dependency graph (Task 1 → Task 3; Task 2 → Task 3, etc.). This develops the decomposition judgment that produces clean subagent delegation."
        },
        {
          id: 9,
          question: "What is 'Parallel Execution Benefit' in task-based implementation?",
          options: {
            A: "Multiple developers working on the same task simultaneously",
            B: "Independent tasks (no dependencies) can be delegated to multiple subagents simultaneously — completing in wall-clock time of the longest task rather than sum of all tasks",
            C: "Parallel CPU execution of compiled code",
            D: "Multiple API calls batched for efficiency"
          },
          correct: "B",
          explanation: "Parallel Execution Benefit: tasks without dependencies can run simultaneously. 'Tool Comparison' and 'Implementation Risks' research have no dependencies on each other — delegate both at once. Two tasks that each take 5 minutes run in 5 minutes total (parallel) vs. 10 minutes (sequential). For large implementations with many independent tasks, parallelism compounds dramatically."
        },
        {
          id: 10,
          question: "What does the subagent NOT receive when delegated a task?",
          options: {
            A: "The task description",
            B: "The main agent's accumulated conversation history — subagents start fresh with only their specific task context, preventing context pollution from prior task work",
            C: "Access to the codebase",
            D: "The relevant spec context for their task"
          },
          correct: "B",
          explanation: "Subagents do NOT receive the main agent's accumulated conversation history. They receive: specific task description, relevant spec context for that task, and codebase access. This fresh start is intentional — the subagent's clean context means it can't be influenced by wrong assumptions from earlier tasks. If task 1 made an error, task 2's subagent won't inherit it."
        },
        {
          id: 11,
          question: "Scenario: You run the SDD implementation prompt for a spec with 8 checklist items. After task 3 completes and commits, you notice the subagent made a wrong assumption about the data format that will affect tasks 5, 6, and 7. With SDD's task-based approach, what is the most efficient recovery strategy?",
          options: {
            A: "Stop everything, discard all work, and rewrite the spec from scratch",
            B: "Revert the task 3 commit, fix the data format in task 3's spec item, re-run task 3 (which commits the fix), then let tasks 5-7 proceed with the corrected foundation — tasks 1-2 and 4 remain valid and untouched",
            C: "Let tasks 5-7 complete, then fix everything in a separate cleanup pass",
            D: "Manually edit the code produced by task 3 to fix the assumption"
          },
          correct: "B",
          explanation: "This is the power of atomic task commits with context isolation. Each task is a rollback boundary. Task 3's error is contained to its commit. Reverting and re-running task 3 fixes the foundation without touching tasks 1-2 (which don't depend on the format) or task 4 (which is independent). Without per-task commits, you'd be untangling mixed changes from tasks 3-7."
        },
        {
          id: 12,
          question: "Scenario: You're implementing a spec with 14 tasks. The main agent delegates task 1 to a subagent, which completes and commits. Then it delegates task 2. But task 2's subagent keeps failing its commit because the pre-commit hook (typecheck + lint + test-run) rejects its output. According to the backpressure pattern, what should happen?",
          options: {
            A: "The main agent should disable the pre-commit hook and force the commit through",
            B: "The subagent must fix the typecheck/lint/test failures before the commit succeeds — the backpressure pattern intentionally slows implementation to prevent broken code from accumulating. The main agent can retry the task or provide additional guidance.",
            C: "Skip task 2 and move to task 3 — the failures will be fixed later",
            D: "The main agent should take over and write the code for task 2 manually"
          },
          correct: "B",
          explanation: "Backpressure is a feature, not a bug. The pre-commit hook rejecting bad code is exactly what it should do. The subagent must fix type errors, lint violations, or test failures before committing. This prevents the 'it works on my machine' problem where broken code accumulates and is only discovered at integration time. The slowdown is intentional quality enforcement."
        },
        {
          id: 13,
          question: "Scenario: Your spec has 6 tasks. Tasks 1 and 2 have no dependencies. Task 3 depends on both 1 and 2. Tasks 4 and 5 depend on task 3. Task 6 depends on tasks 4 and 5. If each task takes 5 minutes, what is the minimum wall-clock time with parallel execution, and which tasks can run simultaneously?",
          options: {
            A: "30 minutes — all tasks are sequential",
            B: "20 minutes — Tasks 1+2 run in parallel (5 min), then Task 3 (5 min), then Tasks 4+5 run in parallel (5 min), then Task 6 (5 min) = 20 minutes total vs. 30 minutes sequential",
            C: "15 minutes — all independent tasks run at once",
            D: "25 minutes — only Tasks 4 and 5 can run in parallel"
          },
          correct: "B",
          explanation: "The dependency graph determines parallelism: Level 1 (Tasks 1+2, no deps) run in parallel = 5 min. Level 2 (Task 3, waits for 1+2) = 5 min. Level 3 (Tasks 4+5, both depend on 3 but not each other) run in parallel = 5 min. Level 4 (Task 6, waits for 4+5) = 5 min. Total: 20 minutes vs. 30 minutes sequential — a 33% time savings from parallel execution."
        },
        {
          id: 14,
          question: "Scenario: You start an SDD implementation session at 2 PM. At 2:20 PM, your computer crashes. You restart at 3 PM on a different machine. According to the 'Agent Amnesia' concept, how do you resume work without losing progress?",
          options: {
            A: "Start from scratch — the AI's conversation history is lost and cannot be recovered",
            B: "Open a new session, read the spec (@docs/spec.md) and the task list (TaskList shows which tasks are completed/pending), then re-run the implementation prompt — the main agent sees completed tasks in git history and resumes from the next pending task",
            C: "Contact customer support to recover the session",
            D: "Manually review the git log to figure out what was done, then continue"
          },
          correct: "B",
          explanation: "This is the 'spec as external memory' principle in action. The spec document and task list persist on disk (and in git). A new session on a new machine reads @docs/spec.md (what to build) and checks TaskList/git log (what's done). The main agent extracts the remaining tasks and continues from where the previous session stopped. No conversation history needed — the persistent artifacts are the memory."
        },
        {
          id: 15,
          question: "Scenario: You have a spec with 3 checklist items for a simple blog feature: '[ ] Create Post model', '[ ] Add list-posts API endpoint', '[ ] Add create-post API endpoint.' You're tempted to use the full task-based implementation with subagents. According to the 'when to use task-based' guidance, what should you do?",
          options: {
            A: "Always use task-based implementation — it's the most rigorous approach",
            B: "Use a simpler approach — the spec has only 3 items (below the 5+ threshold), the work is mostly sequential (model before endpoints), and the entire implementation likely fits in a single commit. Task-based overhead isn't justified for this scope.",
            C: "Use task-based only for the Post model, then vibe code the endpoints",
            D: "Split the spec into more tasks to justify task-based implementation"
          },
          correct: "B",
          explanation: "The guidance says: use task-based when 5+ distinct items, parallelizable work, rollback boundaries needed, or implementation >30 minutes. This spec has 3 items (below threshold), sequential dependencies (model before endpoints), and likely fits in one commit. The simpler approach — main agent implements directly from the spec — is more efficient. Task-based would add orchestration overhead without proportional benefit."
        }
      ]
    },
    {
      id: 9,
      title: "The Decision Framework — When to Use SDD",
      mcqs: [
        {
          id: 1,
          question: "What is the headline principle of the SDD Decision Framework lesson?",
          options: {
            A: "Always use SDD for every task",
            B: "'SDD is a power tool, not a universal solution. The wisdom is knowing when NOT to use it.'",
            C: "SDD is only for teams, not individuals",
            D: "Use SDD whenever the task takes more than 30 minutes"
          },
          correct: "B",
          explanation: "'SDD is a power tool, not a universal solution. The wisdom is knowing when NOT to use it.' This acknowledges that SDD has real overhead (research, spec writing, refinement). Applying that overhead to a single-file bug fix or quick script is wasteful. The lesson develops judgment about when SDD's value justifies its cost."
        },
        {
          id: 2,
          question: "What is the common pattern across all scenarios where SDD excels?",
          options: {
            A: "The task involves multiple programming languages",
            B: "These scenarios share complexity that exceeds working memory — the problem is too large to hold entirely in one's head or one conversation",
            C: "The task has a deadline of more than one week",
            D: "The task requires more than one developer"
          },
          correct: "B",
          explanation: "The pattern: 'These scenarios share complexity that exceeds working memory.' Large refactors (15+ files), unclear requirements, learning new libraries, team coordination, legacy modernization — all involve complexity that can't be reliably held in a single context window or a single person's working memory. The spec becomes the external working memory."
        },
        {
          id: 3,
          question: "What is the SDD Decision Heuristic in pseudocode?",
          options: {
            A: "IF task_is_complex THEN use_SDD ELSE skip_SDD",
            B: "IF files_affected > 5 OR requirements_unclear OR learning_new_tech: Use SDD. ELSE IF single_file AND bug_fix: Skip SDD. ELSE: Judgment call — try lightweight spec first.",
            C: "IF team_size > 1 THEN use_SDD",
            D: "IF deadline > 1_week THEN use_SDD"
          },
          correct: "B",
          explanation: "The Decision Heuristic: IF files_affected > 5 OR requirements_unclear OR learning_new_tech → Use SDD. ELSE IF single_file AND bug_fix → Skip SDD. ELSE → Judgment call (try lightweight spec). The three SDD triggers: multi-file complexity, unclear requirements, unfamiliar territory. The clear skip: single-file bug with known fix."
        },
        {
          id: 4,
          question: "What is the common pattern across scenarios where SDD is overkill?",
          options: {
            A: "These scenarios involve external APIs",
            B: "'These scenarios share solutions that are either obvious or unknowable' — obvious: single-file bug fix. Unknowable: exploratory prototype where requirements emerge through building.",
            C: "These scenarios are below a certain budget threshold",
            D: "These scenarios involve only reading files, not writing"
          },
          correct: "B",
          explanation: "'These scenarios share solutions that are either obvious or unknowable.' Obvious: single-file bug fix — the fix is clear, SDD adds no value. Unknowable: exploratory prototype — requirements can't be specified because they must be discovered. Well-defined simple feature — implementation is obvious without spec. Production incident — immediate action trumps documentation."
        },
        {
          id: 5,
          question: "What is the 'Heuristic for Bug Fixes'?",
          options: {
            A: "If the bug is in production, always use SDD",
            B: "'If you can explain the fix in one sentence, skip SDD'",
            C: "If the fix affects more than one file, use SDD",
            D: "If the bug was reported by a customer, use SDD"
          },
          correct: "B",
          explanation: "'If you can explain the fix in one sentence, skip SDD.' One-sentence explainability = the solution is obvious and contained. SDD overhead (research, spec, refinement) provides zero value when the fix is 'change the comparison operator from > to >= on line 47.' Apply SDD when you can't explain the fix in one sentence — complexity justifies overhead."
        },
        {
          id: 6,
          question: "What is the 'Lightweight Spec Pattern' for borderline cases?",
          options: {
            A: "A one-page specification instead of the full 4-part template",
            B: "A minimal spec with: Task (one-line description), Constraints (what NOT to do), Success Criteria (measurable outcomes) — provides 80% of spec value with 20% of overhead",
            C: "A verbal specification communicated to AI",
            D: "A specification without a reference architecture"
          },
          correct: "B",
          explanation: "Lightweight Spec: '# Task: [One-line description] ## Constraints: [What NOT to do, scope boundaries] ## Success Criteria: [ ] [Measurable outcome 1]'. Constraints prevent scope creep; success criteria define done. This provides 80% of specification value with 20% of overhead — ideal for borderline cases where full SDD is overkill but pure vibe coding is risky."
        },
        {
          id: 7,
          question: "How should you handle 'Exploratory Prototyping' in relation to SDD?",
          options: {
            A: "Never use SDD for prototypes — they're always exploratory",
            B: "Vibe code the exploration (appropriate — requirements are unknowable). Once the prototype reveals what works, STOP and write a spec before building the production version.",
            C: "Use SDD from the start — prototypes should be production-quality",
            D: "Skip SDD entirely for any project with the word 'prototype'"
          },
          correct: "B",
          explanation: "Exploratory prototyping approach: use vibe coding for the exploration phase (appropriate — you're discovering requirements). The discipline: when the prototype reveals what works, stop and write a spec. 'Exploration is a phase, not an end state. Once you discover what works, write a specification before building the production version.' The prototype validates; the spec directs production."
        },
        {
          id: 8,
          question: "What are the four variables in the SDD decision heuristic and what do they measure?",
          options: {
            A: "Cost, Time, Risk, Complexity",
            B: "files_affected > 5 (multi-file complexity), requirements_unclear (can't explain deliverable in one paragraph), learning_new_tech (unfamiliar territory), single_file AND bug_fix (known, contained problem)",
            C: "Team size, deadline, budget, quality requirements",
            D: "Lines of code, number of developers, testing coverage, deployment frequency"
          },
          correct: "B",
          explanation: "The four decision variables: files_affected > 5 (cross-file changes compound complexity), requirements_unclear (if you can't explain the deliverable in one paragraph, research phase adds value), learning_new_tech (unfamiliar territory benefits from parallel research), single_file AND bug_fix (known problem + contained scope + obvious solution = skip SDD)."
        },
        {
          id: 9,
          question: "What is the Critique #1 about SDD being 'Just Waterfall' and the counterpoint?",
          options: {
            A: "Critique: SDD requires too much documentation. Counterpoint: SDD docs are minimal.",
            B: "Critique: SDD is sequential like Waterfall with big upfront design. Counterpoint: SDD phases aren't isolated handoffs — the spec updates during implementation, tasks are atomic and reversible (git revert), not months-long commitments.",
            C: "Critique: SDD doesn't allow iteration. Counterpoint: SDD has built-in iteration via refinement.",
            D: "Critique: SDD is too slow. Counterpoint: SDD saves time overall."
          },
          correct: "B",
          explanation: "Critique 1: 'This Is Just Waterfall.' Counterpoint: SDD phases aren't isolated handoffs (Waterfall's core problem). The spec updates during implementation when discoveries require it. Tasks are atomic and reversible (git revert one task ≠ reverting months of work). The iterative nature — spec updating with reality, tasks rolling back without cascade — is fundamentally unlike Waterfall."
        },
        {
          id: 10,
          question: "How does experience change SDD decision-making according to 'Building Judgment'?",
          options: {
            A: "Experienced practitioners use SDD less as they become more skilled",
            B: "Experienced practitioners develop intuition from feedback loops: tracking which projects SDD helped, calibrating overhead against value, recognizing signals (multiple collaborators → spec as contract; reversibility low → upfront planning justified)",
            C: "Experience makes all cases obvious — no judgment is needed",
            D: "Experienced practitioners always use SDD regardless of task size"
          },
          correct: "B",
          explanation: "'Building Judgment' through feedback loops: 1) Track outcomes — when a project struggled, would a spec have helped? 2) Calibrate overhead — lightweight spec ~10 min, full spec ~2 hours; 3) Recognize signals — multiple collaborators (spec as contract), unfamiliar domain (research phase valuable), low reversibility (upfront planning justified), long time horizon (spec ages better than memory)."
        },
        {
          id: 11,
          question: "Scenario: Your production server goes down at 3 AM. The error log shows a null pointer exception in the payment processing module. You need to fix it ASAP. According to the Decision Framework, should you use SDD?",
          options: {
            A: "Yes — always use SDD for any code change to ensure quality",
            B: "No — this is a production incident. The Decision Framework explicitly lists production incidents as 'skip SDD' scenarios. Fix it first (the one-line null check), deploy, and document later if needed.",
            C: "Yes — but use a lightweight spec instead of a full spec",
            D: "Yes — run Parallel Research first to understand the root cause"
          },
          correct: "B",
          explanation: "Production incidents are explicitly in the 'SDD is overkill' category. When the system is down, immediate action trumps documentation. The fix is likely obvious from the error log (null pointer = add a null check or default value). SDD's overhead (research, spec, refinement) would delay recovery by 30+ minutes for a fix that takes 2 minutes. Fix first, document later."
        },
        {
          id: 12,
          question: "Scenario: You're asked to add a 'forgot password' link to the login page that redirects to an existing password reset page. The change affects one file (login.tsx) and takes 2 minutes. Your colleague suggests writing a lightweight spec first. Applying the decision heuristic, what should you do?",
          options: {
            A: "Write a full 4-part specification — any change deserves rigor",
            B: "Skip SDD entirely — this is a single-file change with an obvious solution. The decision heuristic says 'if you can explain the fix in one sentence, skip SDD.' Adding a link that redirects to an existing page is the definition of obvious.",
            C: "Write a lightweight spec — it only takes 10 minutes",
            D: "Use Parallel Research to investigate how other apps handle forgot-password flows"
          },
          correct: "B",
          explanation: "This is the clearest 'skip SDD' scenario: single file, obvious fix ('add a link to the existing password reset page'), no new logic, no unknown requirements. The decision heuristic: single_file AND obvious_solution = skip SDD. Even a lightweight spec (10 min) is 5x the implementation time (2 min) with zero value add."
        },
        {
          id: 13,
          question: "Scenario: Your startup is building a new social media feature. Nobody on the team knows what users will actually want — you need to experiment with different interaction patterns, see what engages users, and iterate rapidly. After 3 weeks of experimentation, you discover a pattern that users love. What does the Decision Framework say about your approach?",
          options: {
            A: "You should have used SDD from day one — experimentation is a waste of time",
            B: "The 3 weeks of experimentation were appropriate (requirements were unknowable upfront). Now that you've discovered what works, write a specification before building the production version. 'Exploration is a phase, not an end state.'",
            C: "Continue experimenting indefinitely — you can never know enough",
            D: "Skip the spec and deploy the experimental code directly to production"
          },
          correct: "B",
          explanation: "This is the textbook Spec-Anchored scenario: requirements were unknowable upfront (nobody knew what users would want), so exploration/vibe coding was the right choice. But now that the pattern is validated, the Decision Framework says: stop exploring and write a spec. The experimental code proved the concept; the spec will direct the production build with proper constraints, edge cases, and quality standards."
        },
        {
          id: 14,
          question: "Scenario: A junior developer argues that SDD is 'just Waterfall with extra steps' and wants to skip it for a major refactoring affecting 20 files across 4 modules. Using the Decision Framework and the critique counterpoints, how do you respond?",
          options: {
            A: "Agree — SDD is Waterfall and should be avoided for refactoring",
            B: "This is exactly where SDD excels (files_affected > 5, complexity exceeds working memory). The Waterfall critique misses that SDD tasks are atomic and reversible (git revert), the spec updates during implementation when discoveries require it, and phases aren't isolated handoffs — unlike Waterfall's months-long commitments.",
            C: "Use SDD but skip the Refinement phase to save time",
            D: "Agree to skip SDD this once to keep the junior developer comfortable"
          },
          correct: "B",
          explanation: "A 20-file refactor across 4 modules is the poster child for SDD: complexity exceeds working memory, mid-refactor pivots are expensive without a spec, and the end state needs to be defined upfront. The Waterfall critique is addressed by SDD's reversibility (git revert any task), spec updates during implementation (not frozen upfront), and atomic tasks (not months-long phases). This is the wisdom of knowing when NOT to skip SDD."
        },
        {
          id: 15,
          question: "Scenario: You're building a feature that touches 8 files, uses a library you've never worked with, and has requirements that the product manager described in a 30-minute meeting but never documented. Your teammate says 'let's just start coding and figure it out as we go.' Applying the decision heuristic variables, what's the right call?",
          options: {
            A: "Start coding — the teammate's approach is faster for small teams",
            B: "Use SDD — all three triggers are present: files_affected > 5 (8 files), requirements_unclear (undocumented verbal description), and learning_new_tech (unfamiliar library). The decision heuristic says: IF any of these → Use SDD. The research phase alone will save hours by surfacing library constraints before you specify.",
            C: "Use a lightweight spec but skip the research phase",
            D: "Use SDD only for the library learning part, vibe code the rest"
          },
          correct: "B",
          explanation: "This scenario hits all three SDD triggers simultaneously: files_affected (8 > 5), requirements_unclear (verbal description, no documentation), and learning_new_tech (unfamiliar library). Each trigger independently justifies SDD; together, they make it essential. Starting to code without research means you'll discover library constraints mid-implementation and have to redo work. The research phase compresses learning from hours to minutes via parallel subagents."
        }
      ]
    },
    {
      id: 10,
      title: "Practical SDD Exercises",
      mcqs: [
        {
          id: 1,
          question: "What is the key premise of the Practical SDD Exercises lesson?",
          options: {
            A: "Theory is sufficient — exercises are optional",
            B: "'Vocabulary without practice is just terminology.' The exercises build the actual skills to apply SDD in real projects.",
            C: "Exercises are only for students, not professionals",
            D: "Practice is automatic through daily use without deliberate exercise"
          },
          correct: "B",
          explanation: "'Vocabulary without practice is just terminology.' Knowing the four phases, the spec template, and the decision heuristic doesn't mean you can apply them. The 27 exercises across 8 modules + 3 capstone projects build the practical skills: converting vague goals to specs, surfacing assumptions through interviews, decomposing tasks correctly."
        },
        {
          id: 2,
          question: "What are the three core skills developed by the exercise modules?",
          options: {
            A: "Typing speed, code quality, test coverage",
            B: "Specification Writing (converting vague goals into precise actionable documents), Research & Refinement (gathering context and surfacing hidden assumptions), Task Delegation (breaking specs into atomic ordered tasks)",
            C: "AI prompting, version control, deployment",
            D: "Project management, team communication, stakeholder reporting"
          },
          correct: "B",
          explanation: "Three core skills: 1) Specification Writing — converting vague goals into precise, actionable documents that AI can execute against; 2) Research & Refinement — gathering context before specifying and surfacing hidden assumptions through interviews; 3) Task Delegation — breaking specifications into atomic, ordered tasks suitable for subagent execution."
        },
        {
          id: 3,
          question: "What does Module 1 (Spec vs. Vibe) develop?",
          options: {
            A: "Writing perfect specs from scratch",
            B: "Recognizing vibe coding failures through 3 exercises: reversing-engineer what a spec should contain from project failures, comparing vibe vs. spec outputs side-by-side, and diagnosing failures to write corrective specifications",
            C: "Building a vocabulary for discussing AI development",
            D: "Learning the SDD file structure and naming conventions"
          },
          correct: "B",
          explanation: "Module 1 (Spec vs. Vibe, 3 exercises): 1.1 Event Gone Wrong — reverse-engineer what a specification should have contained from a failed project; 1.2 Side-by-Side Test — compare vibe-coded vs. spec-driven AI outputs for the same task; 1.3 Vibe-to-Spec Rescue — diagnose a vibe-coded failure and write a corrective specification. Builds pattern recognition for when vibe coding fails."
        },
        {
          id: 4,
          question: "What does the Constraints & Criteria module (Module 4) develop?",
          options: {
            A: "Technical programming skills",
            B: "The ability to identify missing constraints, convert vague success criteria to verifiable standards, and stress-test constraints through adversarial thinking",
            C: "Project scheduling and resource allocation",
            D: "Understanding of database constraints and validation"
          },
          correct: "B",
          explanation: "Module 4 (Constraints & Criteria, 3 exercises): 4.1 Missing Guardrails — identify specification gaps and add necessary constraints; 4.2 Measurable vs. Vague — convert 'the system should be fast' into '<200ms p99 latency for 10,000 concurrent users'; 4.3 Constraint Stress Test — find loopholes through adversarial thinking (how could an implementation technically satisfy the constraints while missing the intent?)."
        },
        {
          id: 5,
          question: "What are the three Capstone Projects in Module 8?",
          options: {
            A: "Simple CRUD app, REST API, Database migration",
            B: "Wedding Planner System (complex, emotionally-charged), Small Business Launch Kit (interconnected business decisions), Personal Goal System (real-world stakes)",
            C: "E-commerce site, Social network, Mobile app",
            D: "Documentation system, Testing framework, Deployment pipeline"
          },
          correct: "B",
          explanation: "Three capstones with increasing real-world complexity: A) Wedding Planner System — complex, emotionally-charged project with many stakeholders and high stakes; B) Small Business Launch Kit — interconnected business decisions where changing one affects others; C) Personal Goal System — real stakes (your actual goals), making the exercise personally meaningful. All require the full SDD cycle."
        },
        {
          id: 6,
          question: "What is the SDD Framework applied to each exercise (the 6-step process)?",
          options: {
            A: "Read, Understand, Plan, Code, Test, Deploy",
            B: "1) Research (what must be known before specifying), 2) Specify (goals, constraints, success criteria, scope), 3) Refine (surface ambiguities), 4) Execute (delegate to Claude from spec), 5) Verify (check outputs against every criterion), 6) Iterate (improve the specification itself)",
            C: "Brainstorm, Design, Prototype, Build, Launch, Maintain",
            D: "Gather requirements, Create wireframes, Write code, Test, Deploy, Monitor"
          },
          correct: "B",
          explanation: "The 6-step exercise framework: 1) Research — identify what must be known before specifying; 2) Specify — document goals, constraints, success criteria, scope; 3) Refine — surface ambiguities through interviews; 4) Execute — delegate to Claude based on specification; 5) Verify — check every output against every spec criterion; 6) Iterate — improve the specification based on what was learned."
        },
        {
          id: 7,
          question: "What does the Assessment Rubric measure across the exercise modules?",
          options: {
            A: "Code quality and performance metrics",
            B: "Research quality (skipped → systematic), Spec completeness (vague → reusable with edge cases), Constraint coverage (absent → tested against edge cases), Refinement depth (none → changed spec direction), Task delegation (monolithic → independently executable)",
            C: "Speed, accuracy, and documentation quality",
            D: "Number of features implemented and bugs found"
          },
          correct: "B",
          explanation: "Assessment Rubric tracks progression across five dimensions: Research quality (from skipped to systematic multi-angle investigation), Spec completeness (from vague to reusable with edge cases handled), Constraint coverage (from absent to adversarially tested), Refinement depth (from none to interview that changed the spec's direction), Task delegation (from monolithic to independently executable atomic tasks)."
        },
        {
          id: 8,
          question: "What is the Module 6 (Task Breakdown) exercise about?",
          options: {
            A: "Breaking code into functions",
            B: "Three exercises developing the skill of decomposing specs into executable tasks: mapping dependencies, writing atomic tasks, and running a full delegation simulation",
            C: "Splitting projects across team members",
            D: "Breaking requirements into user stories"
          },
          correct: "B",
          explanation: "Module 6 (Task Breakdown, 3 exercises): 6.1 Dependency Map — identify task ordering and critical path through the dependency graph; 6.2 Atomic Task Writer — decompose vague tasks ('add authentication') into agent-executable atomic units ('[ ] Add JWT validation middleware to POST /api routes'); 6.3 Delegation Simulation — run a complete end-to-end task delegation workflow."
        },
        {
          id: 9,
          question: "What does Module 7 (Full Cycle) develop that earlier modules don't?",
          options: {
            A: "Module 7 is optional — it repeats earlier skills",
            B: "Integration — applying ALL SDD phases together in complete end-to-end exercises, handling real-world complications (deadlines, curveballs, conflicting stakeholders) that individual-skill modules don't expose",
            C: "Coding skills that complement specification skills",
            D: "Business analysis skills separate from technical SDD"
          },
          correct: "B",
          explanation: "Module 7 (Full Cycle) develops integration: using all SDD phases together under real-world conditions: 7.1 Community Newsletter (complete R→S→R→E workflow), 7.2 Office Move Planner (hard deadlines and curveballs that require spec updates mid-implementation), 7.3 Product Launch Playbook (transforming unstructured pitch into executable plan). Integration is harder than any individual skill."
        },
        {
          id: 10,
          question: "What is the Key Insight about SDD's applicability beyond software development?",
          options: {
            A: "SDD only works for software — other domains need different methods",
            B: "'SDD is a thinking methodology' applicable to event planning, business operations, content creation — anywhere vague intention leads to rework",
            C: "SDD was developed for non-software domains first",
            D: "SDD applies only to domains with structured data"
          },
          correct: "B",
          explanation: "Key Insight: 'SDD is a thinking methodology' that applies wherever vague intention leads to rework. The capstone projects (Wedding Planner, Business Launch, Personal Goals) demonstrate this explicitly — none are software projects. Wherever the gap between 'what I meant' and 'what was built' creates waste, SDD's Research → Specify → Refine → Implement cycle reduces that gap."
        },
        {
          id: 11,
          question: "Scenario: You're doing Exercise 4.2 (Measurable vs. Vague) from the Constraints & Criteria module. Your spec says 'the search feature should be fast and accurate.' According to the exercise framework, how should you transform this?",
          options: {
            A: "Leave it as-is — 'fast and accurate' gives the AI flexibility to optimize",
            B: "Convert to measurable criteria: 'Search results load in <200ms p95 latency for queries up to 50 characters, return relevant results (top 3 results match query intent in 90% of test cases), and handle typos (Levenshtein distance ≤2 returns correct results)'",
            C: "Replace with 'the search feature should use Elasticsearch' — that's more specific",
            D: "Remove the criteria entirely — the AI will figure out what 'fast' means"
          },
          correct: "B",
          explanation: "Exercise 4.2 trains you to convert vague success criteria into verifiable standards. 'Fast' becomes '<200ms p95 latency.' 'Accurate' becomes 'top 3 results match query intent in 90% of test cases.' Each criterion is objectively testable — you can run a benchmark and determine pass/fail. This is the difference between subjective satisfaction and measurable success."
        },
        {
          id: 12,
          question: "Scenario: You're doing Exercise 6.2 (Atomic Task Writer) and need to decompose this vague task: 'Add user authentication.' According to the module's guidance, which decomposition is correct?",
          options: {
            A: "'Add user authentication' is already atomic — it's one feature",
            B: "Decompose into agent-executable units: '[ ] Add JWT token generation endpoint (POST /api/auth/token, returns signed JWT with user ID and 24h expiry)', '[ ] Add JWT validation middleware to protected routes (verify signature, check expiry, attach user to request)', '[ ] Add login endpoint (POST /api/auth/login, verify credentials, return JWT)', '[ ] Add logout endpoint (POST /api/auth/logout, invalidate JWT)'",
            C: "Break it into: 'Frontend login page', 'Backend login API', 'Database user table'",
            D: "Create one task: 'Implement full authentication system with frontend and backend'"
          },
          correct: "B",
          explanation: "Exercise 6.2 trains decomposition of vague tasks into atomic, agent-executable units. 'Add user authentication' is a feature, not a task. Each decomposed item specifies: the endpoint, the HTTP method, the behavior, and the constraints (24h expiry, signature verification). Each item is completable by one subagent in 5-15 minutes and produces one atomic commit."
        },
        {
          id: 13,
          question: "Scenario: You're doing Exercise 7.2 (Office Move Planner) from the Full Cycle module. Mid-way through implementation, you discover that the new office building doesn't allow server equipment on the 3rd floor — the IT infrastructure must go to the basement. This contradicts your spec's assumption. According to the SDD exercise framework, what should you do?",
          options: {
            A: "Ignore the discovery and follow the spec as written — specs shouldn't change",
            B: "Update the spec to reflect the new constraint (IT infrastructure in basement, not 3rd floor), re-run refinement on affected sections, then continue implementation from the updated spec. The SDD framework expects specs to evolve with reality.",
            C: "Abandon SDD and switch to vibe coding — the spec is now invalid",
            D: "Start the entire Research phase over from scratch"
          },
          correct: "B",
          explanation: "Exercise 7.2 specifically tests handling 'curveballs that require spec updates mid-implementation.' SDD is not Waterfall — the spec updates when reality contradicts assumptions. You update the affected spec sections (IT infrastructure location), refine the impacted constraints (basement has different power/cooling requirements), and continue. Only the affected tasks need rework; the rest of the spec remains valid."
        },
        {
          id: 14,
          question: "Scenario: You're assessing your performance on the SDD exercises using the Assessment Rubric. For 'Refinement depth,' you notice that in your last 3 exercises, you conducted refinement interviews but none of them changed the spec's direction — they only clarified minor wording. According to the rubric's progression, what level are you at and what's the next step?",
          options: {
            A: "You're at the top level — any refinement is good refinement",
            B: "You're at 'some refinement but didn't change spec direction.' The next level is 'interview that changed the spec's direction' — you need to ask deeper questions that surface fundamental assumptions, not just clarify wording. Try Exercise 5.3 (Stakeholder Perspectives) to practice finding conflicts between stakeholder views that force spec restructuring.",
            C: "You're at the bottom level — refinement should be skipped if it doesn't change direction",
            D: "You need to ask more questions — quantity of questions determines refinement depth"
          },
          correct: "B",
          explanation: "The Assessment Rubric's Refinement depth progression: none → some (clarifies wording) → changed spec direction (interview revealed fundamental assumptions that restructured the spec). If your interviews only polish wording, you're not surfacing deep enough ambiguities. Exercise 5.3 trains this by having you review specs from conflicting stakeholder perspectives (end-user wants simplicity, admin wants controls, executive wants metrics) — conflicts that force genuine spec restructuring."
        },
        {
          id: 15,
          question: "Scenario: You're attempting Capstone Project A (Wedding Planner System). You start by writing a spec, but your mentor says you're skipping a critical first step. According to the 6-step SDD Framework applied to each exercise, what should you do before specifying?",
          options: {
            A: "Start executing — delegate to Claude and let it figure out the requirements",
            B: "Research — identify what must be known before specifying: How many guests? What's the budget? What venues are available? What are the couple's non-negotiables? What vendors exist in the area? What's the timeline? Research gathers the context that makes the specification grounded in reality rather than assumptions.",
            C: "Write the Implementation Checklist first, then fill in the rest of the spec",
            D: "Skip to Refinement — you can refine a spec that doesn't exist yet"
          },
          correct: "B",
          explanation: "The 6-step framework starts with Research: 'what must be known before specifying.' For a Wedding Planner, you can't specify goals, constraints, or success criteria without knowing the basics: guest count (affects venue size), budget (affects every decision), timeline (affects vendor availability), and non-negotiables (constraints that can't be compromised). Skipping research produces a spec full of assumptions that will fail during refinement or implementation."
        }
      ]
    }
  ]
};
