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
          question: "You're building a user registration feature. Session 1: You tell AI 'add user registration' and it creates email-based signup. Session 2 (next day): You say 'now add password reset' but the AI implements a completely different authentication pattern, contradicting Session 1's work. What SDD principle would have prevented this?",
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
          question: "Your team uses vibe coding to build a payment integration. The AI generates code that works in testing but in production, it processes duplicate charges because the spec never defined idempotency requirements. Which vibe coding failure mode does this represent?",
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
          question: "A stakeholder reviews your AI-generated dashboard and says 'this isn't what I asked for.' You realize the AI interpreted 'show sales trends' as monthly aggregates, but the stakeholder meant daily breakdowns by region. What spec-driven practice would have caught this misalignment before implementation?",
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
          question: "You're comparing two approaches for a complex feature. Approach A (vibe coding): 3 sessions, 6 hours total, final output doesn't meet requirements and needs rework. Approach B (spec-driven): 1 hour spec writing + 2 hours implementation = 3 hours total, output meets all spec criteria. What does this scenario demonstrate about the SDD value proposition?",
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
          question: "Your team writes a 50-page specification for a simple login feature. The AI implementation takes 30 minutes, but reviewing the spec against the implementation takes 2 hours because the spec is so detailed. What SDD principle is being violated?",
          options: {
            A: "Spec-First development",
            B: "Signal-dense vs. noise-heavy specs — the spec should contain only information that changes AI behavior (constraints, decisions, checklist), not exhaustive background that reads well but doesn't affect implementation",
            C: "The Project Constitution pattern",
            D: "Parallel Research methodology"
          },
          correct: "B",
          explanation: "This is the signal-vs-noise anti-pattern. A 50-page spec for a simple login feature is noise-heavy — it contains background, motivation, edge cases that don't apply, and context that doesn't change what the AI implements. A signal-dense spec for login would be: Context (users need secure access), Constraints (bcrypt, rate limiting, 30-min session timeout), Checklist ([ ] email/password form, [ ] validation, [ ] session creation). The rest is noise."
        },
        { id: 16, question: "A developer asks AI to 'build a user dashboard' without a spec. The AI creates a dashboard with charts, tables, and a sidebar. The developer says 'that's not what I meant at all.' According to SDD, what is the root cause and how should they have proceeded?", options: { A: "The AI misunderstood the prompt — use a different model", B: "Vague natural-language prompt = AI invents all details. Root cause: no written specification. They should have written a spec first: Context (what user data to show), Constraints (which chart library, responsive design), Checklist ([ ] revenue chart, [ ] recent activity, [ ] user profile summary).", C: "The developer should have given a longer prompt", D: "AI cannot build dashboards" }, correct: "B", explanation: "This is vibe coding's core failure: vague prompt → AI invents everything → output doesn't match intent → rework. SDD prevents this by requiring a written specification before any implementation. The spec transforms 'build a user dashboard' (vague, AI invents) into explicit criteria (precise, AI executes). Without the spec, every session re-invents the same misunderstandings." },
        { id: 17, question: "A team builds a feature using vibe coding. It works perfectly in their environment. When they share it with 3 other developers, none of them can replicate the setup — there are no documented dependencies, no deployment steps, and no configuration requirements. According to SDD, what was missing?", options: { A: "Better version control", B: "The spec's Constraints section would have captured: 'Node.js v18, requires REDIS_URL env var, run npm run migrate before starting.' Without a spec, constraints exist only in the developer's head, making the feature unreproducible by anyone else.", C: "More experienced developers", D: "A better README file" }, correct: "B", explanation: "Vibe coding externalizes knowledge only in code, not in specs. A spec's Constraints section captures: environment requirements, dependency versions, configuration variables, and setup steps. These constraints are then shared context available to every developer and AI session. Without them, the feature is a black box that only works for its creator." },
        { id: 18, question: "Two developers work on the same feature in parallel using vibe coding (no spec). Developer A adds client-side validation in JavaScript. Developer B adds server-side validation in Python, but with different rules. The feature ships with inconsistent validation. According to SDD, how would a spec have prevented this?", options: { A: "They should have worked on different features", B: "A shared spec defines validation rules as Constraints ('email: RFC 5322 format, password: 8+ chars, 1 uppercase, 1 number') that both developers implement against. Without a spec, each developer invents their own interpretation — creating the inconsistency.", C: "One developer should have waited for the other to finish", D: "They needed more communication" }, correct: "B", explanation: "The spec as shared reference prevents divergence: when both developers implement from the same Constraints section (explicit validation rules), their implementations align by construction. Vibe coding lets each developer imagine a different 'correct' implementation. This is the 'shared definition of done' value proposition in action." },
        { id: 19, question: "A project using vibe coding worked well for 2 months. Then a new developer joins and spends 3 days trying to understand why certain design decisions were made. There is no documentation. According to SDD, what artifact would have captured this context?", options: { A: "Better code comments would be sufficient", B: "The spec's Context section: 'Why this feature exists, what problem it solves, what design decisions were made and why.' Context is the institutional memory that survives developer turnover. A spec preserves the reasoning that code cannot express.", C: "A longer README file", D: "The new developer should ask the original developer" }, correct: "B", explanation: "The Context section of a spec answers 'why' — the question code cannot answer. Why was this architecture chosen? What alternatives were considered? What constraints drove the design? A new developer reading the spec's Context section in 10 minutes gains the understanding that took the original developer 2 months to accumulate. Vibe coding discards this context permanently." },
        { id: 20, question: "A vibe-coded API endpoint works in development but returns errors in production 10% of the time due to a race condition under concurrent load. The developer cannot reproduce it locally. According to SDD, at which phase would this have been caught?", options: { A: "There is no way to catch race conditions with SDD", B: "CLARIFY phase: 'What are the concurrent access patterns? Will multiple users write to the same record simultaneously?' surfaces the race condition risk. SPECIFY: 'Use database transactions with row-level locking for concurrent writes.' VALIDATE: load testing confirms the fix under concurrent requests.", C: "Only performance testing would catch this", D: "Race conditions are unpredictable and unpreventable" }, correct: "B", explanation: "SDD's CLARIFY phase specifically asks about edge cases and concurrency: 'What happens when two users submit simultaneously?' This surfaces the race condition before implementation. The spec's Constraints section documents the fix (transactions + row-level locking). VALIDATE with load testing confirms it. Vibe coding skips all three of these checkpoints, letting the race condition ship to production." },
        {
          id: 21,
          question: "Which of the three SDD levels requires the specification to be written BEFORE any implementation begins?",
          options: {
            A: "Spec-Anchored, because it anchors the production code to what was discovered",
            B: "Spec-First, because the complete specification is the prerequisite for all implementation instructions",
            C: "Spec-as-Source, because the spec is the living authoritative document",
            D: "All three levels require a spec before any code is written"
          },
          correct: "B",
          explanation: "Spec-First is the level that requires the complete specification before any implementation begins. The spec is written, reviewed, and agreed upon before the AI receives any implementation instructions. Spec-Anchored allows exploration first; Spec-as-Source is maintained continuously. Spec-First is the most rigorous upfront discipline."
        },
        {
          id: 22,
          question: "What is the defining failure mode of vibe coding that makes it unreliable across sessions?",
          options: {
            A: "Vibe coding requires too many API calls, increasing cost",
            B: "Output varies by session because there is no written specification anchoring the AI to consistent decisions, so each session re-invents details from scratch",
            C: "Vibe coding cannot handle large files",
            D: "Vibe coding only works with certain AI models"
          },
          correct: "B",
          explanation: "The core failure mode of vibe coding is session-to-session variance. Without a written spec, the AI has no persistent anchor for decisions. Session 1 might implement email login; Session 2 might implement OAuth because the prompt was slightly different. The output varies because nothing external constrains it to consistency."
        },
        {
          id: 23,
          question: "Why is a written specification described as 'external memory' in the SDD context?",
          options: {
            A: "Because it is stored externally on a server separate from the codebase",
            B: "Because it persists project knowledge beyond the context window, surviving /clear commands, session ends, and team member changes",
            C: "Because external memory refers to RAM used by the AI model",
            D: "Because it is written by an external consultant rather than the team"
          },
          correct: "B",
          explanation: "The spec as external memory captures the critical insight that AI context windows are ephemeral. /clear erases conversation history; new sessions start blank. A written spec survives all of these resets. It is external to the AI's in-context memory and therefore persistent, making it the project's reliable memory across any number of sessions."
        },
        {
          id: 24,
          question: "In SDD, what does it mean for a task to be 'done'?",
          options: {
            A: "The AI has completed its response without errors",
            B: "Every checklist item in the specification has been satisfied and verified",
            C: "The code compiles and passes syntax checks",
            D: "The developer feels satisfied with the output"
          },
          correct: "B",
          explanation: "SDD defines 'done' as satisfying every checklist item in the specification. This transforms the subjective feeling of completion into an objective, verifiable standard. Each checkbox in the Implementation Checklist represents one deliverable; all checked means done. This eliminates the ambiguity that plagues vibe-coded projects where 'done' is a gut feeling."
        },
        {
          id: 25,
          question: "When is vibe coding explicitly acceptable according to SDD principles?",
          options: {
            A: "When the team is experienced and does not need documentation",
            B: "For exploration and throwaway prototypes where the goal is discovery, not production delivery",
            C: "When the project has fewer than five files",
            D: "Vibe coding is never acceptable in any professional context"
          },
          correct: "B",
          explanation: "SDD explicitly endorses vibe coding for exploration and throwaway prototypes. When the goal is to discover what is possible or to quickly test an idea with no production intent, the overhead of a specification is not justified. The discipline is recognizing when exploration ends and production begins, then writing a spec at that transition."
        },
        {
          id: 26,
          question: "How does a shared specification prevent team divergence when multiple developers work with AI?",
          options: {
            A: "It locks the codebase so only one developer can edit at a time",
            B: "It provides a single authoritative reference that all developers and AI sessions implement against, ensuring consistent decisions across the team",
            C: "It generates identical code for every developer automatically",
            D: "It prevents developers from using different AI models"
          },
          correct: "B",
          explanation: "A shared spec is the team's contract. When Developer A and Developer B both implement features from the same spec, they get the same validation rules, the same data formats, the same error codes. Without the spec, each developer invents their own interpretation. The spec prevents the divergence that arises when everyone assumes their mental model is the shared one."
        },
        {
          id: 27,
          question: "What does the Context section of a specification capture that code itself cannot express?",
          options: {
            A: "The programming language and framework in use",
            B: "The 'why' behind decisions: what problem this solves, what alternatives were considered, and what constraints drove the design choices",
            C: "The list of files that will be modified during implementation",
            D: "The estimated time to complete each checklist item"
          },
          correct: "B",
          explanation: "Code shows what was built; the Context section explains why. Why was this database chosen over that one? Why is this API pattern used instead of another? What business constraint drove this design? This institutional memory is invisible in code but invaluable for future developers and AI sessions that need to make consistent decisions."
        },
        {
          id: 28,
          question: "What does the Constraints section of a specification capture that the Goals section does not?",
          options: {
            A: "Constraints list the programming languages allowed; Goals list the features to build",
            B: "Constraints capture environment requirements, prohibitions, and boundaries on scope that define what must NOT be done or what the solution must operate within",
            C: "Constraints are for stakeholders; Goals are for developers",
            D: "Constraints and Goals are identical sections with different names"
          },
          correct: "B",
          explanation: "Goals define positive requirements (what must be achieved). Constraints define negative boundaries (what must not happen, what the solution must stay within). Constraints capture environment requirements like 'must run on Node 18', prohibitions like 'must not store PII in logs', and scope limits like 'this feature must not require a database migration'. Both are essential; constraints prevent overreach."
        },
        {
          id: 29,
          question: "How does SDD accelerate delivery compared to vibe coding despite requiring upfront specification work?",
          options: {
            A: "SDD generates code faster because AI has more context",
            B: "SDD eliminates reactive iterations caused by misalignment, replacing multiple correction cycles with one well-targeted implementation",
            C: "SDD uses more powerful AI models that produce better output",
            D: "SDD reduces the number of files that need to be created"
          },
          correct: "B",
          explanation: "SDD's acceleration comes from eliminating rework. Vibe coding often requires 3-5 sessions of back-and-forth corrections as the AI's output gradually approaches what was actually needed. SDD's upfront specification ensures the first implementation targets the right goal, transforming multiple reactive iterations into one well-aimed pass. The spec investment is repaid by eliminating correction cycles."
        },
        {
          id: 30,
          question: "In Spec-as-Source development, what happens to the specification when requirements change?",
          options: {
            A: "A new specification is written from scratch to replace the old one",
            B: "The specification is updated first before any code changes are made, keeping it the living authoritative source of truth throughout the product lifecycle",
            C: "The code is updated first, then the specification is updated to match",
            D: "Requirements changes are tracked in git commit messages, not the specification"
          },
          correct: "B",
          explanation: "In Spec-as-Source, the spec is always updated BEFORE code changes. When a requirement changes, you update the spec first (making the intent explicit), then implement from the updated spec. This discipline keeps the spec as the accurate living document rather than letting it drift out of sync with the code. The spec is the system of record that the codebase is built to satisfy."
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
          question: "You're building a novel AI-powered recommendation feature for your e-commerce platform. You have no idea what algorithms work best or what data you'll need. The team lead suggests starting with vibe coding to explore different ML approaches, then writing a spec before production. Which SDD level is this?",
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
          question: "Your startup's SaaS product has been evolving for 2 years. Requirements change monthly based on customer feedback. The team maintains a living specification document that's updated with every feature change and serves as the source of truth for all AI implementations. Which SDD level is this?",
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
          question: "You need to implement a well-documented REST API endpoint that follows your team's established patterns. The requirements are clear from the API specification document your architect provided. Which SDD level should you choose and why?",
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
          question: "A team has been vibe coding their startup's MVP for 3 months. The prototype works, but when they try to build the production version, they keep making the same mistakes because no one documented what worked in the prototype. Which SDD level transition would solve this problem?",
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
          question: "Your enterprise product has 50 developers working on different features. Each team maintains their own spec documents, but there's no central living specification. Specs become outdated as requirements change, causing implementation inconsistencies. Which SDD level would address this systemic problem?",
          options: {
            A: "Spec-First — write better specs before each implementation",
            B: "Spec-Anchored — explore more before writing specs",
            C: "Spec-as-Source — establish a living specification that's maintained as part of the product's ongoing development process, updated when requirements change",
            D: "This is a management problem, not an SDD problem"
          },
          correct: "C",
          explanation: "With 50 developers across multiple teams, the problem is spec maintenance at scale. Spec-as-Source treats the spec as a living document that's part of the development process — updated when requirements change, serving as the authoritative source for all implementations. This requires process discipline but solves the 'outdated specs causing inconsistencies' problem that plagues large teams."
        },
        {
          id: 16,
          question: "A developer writes a spec for an MVP checkout feature (Spec-First), implements it, ships to production, and then gets monthly customer feedback requiring feature updates. After 6 months, the spec is outdated and nobody updates it. Customer requirements keep changing. What SDD level transition should this product make?",
          options: {
            A: "Switch to Spec-Anchored — more exploration before each update",
            B: "Transition to Spec-as-Source: establish the spec as a living document maintained alongside the product. Each new customer requirement updates the spec before implementation. The spec becomes the authoritative source for ongoing product development, not a one-time kickoff artifact.",
            C: "Stop using specs — they become outdated for mature products",
            D: "Create a new Spec-First spec for each release cycle"
          },
          correct: "B",
          explanation: "The progression: Spec-First works for initial builds with clear requirements. When requirements evolve monthly based on customer feedback, Spec-First produces outdated specs. Spec-as-Source treats the spec as a living document — it's updated when requirements change, serving as the authoritative source for all future implementations. The maintenance overhead is justified by team coordination and consistency over the product's lifetime."
        },
        {
          id: 17,
          question: "A startup is building an AI-powered recommendation engine for the first time. Nobody on the team has built recommendation systems before. No requirements exist yet. A developer suggests jumping straight to Spec-First because 'SDD requires specs before code.' What is wrong with this suggestion?",
          options: {
            A: "Nothing — Spec-First is always the most rigorous approach",
            B: "When requirements can only be discovered through building (novel problem space, first time building this type of system), forcing Spec-First before exploration means specifying unknowns. Spec-Anchored is appropriate: explore through vibe coding to discover what works, THEN write the spec before production implementation.",
            C: "They should skip SDD entirely for AI features",
            D: "They should use Spec-as-Source because it's more flexible"
          },
          correct: "B",
          explanation: "Spec-First requires knowing requirements upfront. For novel problem spaces (first recommendation engine, unfamiliar ML domain), requirements can only be discovered through exploration. Spec-Anchored is designed for this: explore via vibe coding to discover viable approaches, then write a spec that captures what works before building for production. 'Exploration is a phase, not an end state' — once you discover what works, you commit to a spec."
        },
        {
          id: 18,
          question: "A team starts an experiment with Spec-Anchored for a new feature. After 2 weeks of exploration, the prototype works but nobody writes a spec. They continue adding features to the prototype. After 2 months, the 'prototype' is live in production with no documentation. According to SDD, what anti-pattern occurred?",
          options: {
            A: "They used the wrong SDD level — should have used Spec-First",
            B: "Perpetual exploration — they never transitioned from the exploration phase to the spec-production phase. 'Exploration is a phase, not an end state.' The discipline of Spec-Anchored is knowing when to stop exploring and commit to a specification. Their 2-week window should have triggered writing a spec before continuing.",
            C: "Spec-Anchored is inherently flawed for multi-month projects",
            D: "This is normal agile development — specs aren't always needed"
          },
          correct: "B",
          explanation: "The perpetual exploration trap: Spec-Anchored requires a deliberate transition point from exploration to spec-writing. The trigger: 'when the prototype reveals what works, stop and write a spec.' This team's prototype kept working, so they kept adding — never committing to a spec. The result: a production system with no external reference, making future development unreliable. Spec-Anchored requires discipline to make the transition when exploration validates an approach."
        },
        {
          id: 19,
          question: "A developer finishes a Spec-First feature build. The spec was written once at the start and the implementation satisfies every checklist item. One month later, stakeholders request two new behaviors. The developer says 'the spec is the source of truth — we can't change requirements.' A senior developer says 'update the spec and implement.' Who is right?",
          options: {
            A: "The developer — specs should never change after implementation begins",
            B: "The senior developer — for ongoing products, specs should evolve with requirements. Spec-First was appropriate for the initial build; the product's ongoing maintenance benefits from moving toward Spec-as-Source behavior: update the spec when requirements change, then implement from the updated spec.",
            C: "Neither — stakeholder requests after launch should be rejected",
            D: "The spec should be archived and a new spec written for each change"
          },
          correct: "B",
          explanation: "Spec-First describes the initial approach (write spec before implementation). It doesn't mean specs are frozen forever. Evolving products naturally migrate toward Spec-as-Source behavior: when requirements change, update the spec first, then implement. This is the correct behavior for living products. The spec tracks current requirements, not the original requirements. Treating specs as immutable post-implementation creates the 'outdated spec' problem."
        },
        {
          id: 20,
          question: "Your organization uses Spec-First for greenfield features (clear requirements), Spec-Anchored for experimental features (unclear requirements), and Spec-as-Source for core products (evolving requirements). A new feature is a known backend integration with documented third-party API specifications. Which level should you apply?",
          options: {
            A: "Spec-Anchored — always explore before specifying for integrations",
            B: "Spec-First — the third-party API is documented, requirements are known upfront (what endpoints to call, what data to send/receive, what error codes to handle), and exploration is unnecessary. Spec-First avoids wasted exploration time for well-understood problems.",
            C: "Spec-as-Source — integrations require ongoing maintenance",
            D: "Skip SDD — API integrations are straightforward"
          },
          correct: "B",
          explanation: "Level selection is requirement-clarity driven: Spec-First when requirements are clear upfront. A documented third-party API provides all the information needed to write a spec before building: endpoint URLs, request/response formats, error codes, rate limits, authentication. No exploration needed — all constraints are in the API documentation. Spec-First is optimal here: research the API docs, write the spec, implement against it. Exploration wastes time when requirements are already known."
        },
        {
          id: 21,
          question: "What signal indicates it is time to migrate from Spec-Anchored to Spec-as-Source?",
          options: {
            A: "When the team grows beyond five developers",
            B: "When requirements evolve continuously month to month and the spec written at exploration time keeps becoming outdated and needs repeated updates",
            C: "When the project has been running for more than one year",
            D: "When the team adopts a new AI coding tool"
          },
          correct: "B",
          explanation: "The migration trigger from Spec-Anchored to Spec-as-Source is continuous requirement evolution. When you find yourself updating the spec repeatedly as requirements change — and the spec is becoming a living document anyway — formalizing it as Spec-as-Source is the natural next step. The maintenance overhead of Spec-as-Source is justified when requirements change often enough that a one-time spec quickly becomes stale."
        },
        {
          id: 22,
          question: "In Spec-as-Source, what must happen BEFORE any code change is made?",
          options: {
            A: "A pull request must be opened and reviewed by two developers",
            B: "The specification must be updated to reflect the new or changed requirement, making the spec the leading artifact rather than a trailing document",
            C: "A new branch must be created from main",
            D: "The existing tests must all pass before the spec can be changed"
          },
          correct: "B",
          explanation: "Spec-as-Source discipline: the spec is updated before code changes. This ordering ensures the spec is always the source of truth. If code changes first, the spec becomes a trailing artifact that documents what already exists rather than directing what should be built. The spec leading code is what makes Spec-as-Source distinct from documentation-after-the-fact."
        },
        {
          id: 23,
          question: "For which project type is Spec-First most appropriate?",
          options: {
            A: "Exploratory projects where the team is learning what is possible",
            B: "Greenfield projects with clear, well-understood requirements where exploration is unnecessary and writing the spec upfront prevents wasted work",
            C: "Legacy projects where the existing code must be understood first",
            D: "Maintenance projects where bug fixes dominate the workload"
          },
          correct: "B",
          explanation: "Spec-First suits greenfield projects with clear requirements. When you know what to build (implementing a documented API, building a well-understood feature, following established patterns), there is no value in exploration. Writing the spec first prevents the AI from inventing details that will need correction. Clear requirements justify and reward the upfront specification investment."
        },
        {
          id: 24,
          question: "For which scenario is Spec-Anchored most appropriate?",
          options: {
            A: "A project with a fixed budget and immovable deadline",
            B: "Exploratory or unclear requirement situations where the team must discover what works before they can specify what to build for production",
            C: "A project where the client has provided a 50-page requirements document",
            D: "A team that has never used AI tools before"
          },
          correct: "B",
          explanation: "Spec-Anchored is designed for exploration and unclear requirements. When the team does not yet know what will work — novel UX experiments, unfamiliar libraries, new domain areas — Spec-Anchored legitimizes vibe coding during the discovery phase. The anchor comes later: once exploration reveals what works, a spec is written before production implementation. Discovery first, then rigor."
        },
        {
          id: 25,
          question: "Which question best distinguishes the three SDD levels from each other?",
          options: {
            A: "How long will implementation take?",
            B: "When does the spec get written relative to the code: before, after exploration, or continuously throughout?",
            C: "How many checklist items does the spec contain?",
            D: "Who writes the specification — the developer or the stakeholder?"
          },
          correct: "B",
          explanation: "The timing of spec writing is the definitive differentiator. Spec-First: spec written before any code. Spec-Anchored: spec written after exploration, before production code. Spec-as-Source: spec written continuously, updated before each code change. Asking 'when does the spec get written?' immediately categorizes any project or feature into its appropriate SDD level."
        },
        {
          id: 26,
          question: "What makes the specification the 'system of record' in Spec-as-Source?",
          options: {
            A: "The specification is stored in a database that serves as the system of record",
            B: "The specification is the authoritative truth about what the system should do, with code being derived from it rather than the spec being derived from the code",
            C: "The specification is stored in version control alongside the code",
            D: "The specification is reviewed by the system architect before any implementation"
          },
          correct: "B",
          explanation: "In Spec-as-Source, the spec is the authoritative source from which code is derived. This inverts the usual documentation relationship where docs trail code. When code and spec disagree, the spec wins and the code must be updated to match. This discipline ensures the spec remains accurate and authoritative rather than becoming an aspirational document that no longer reflects reality."
        },
        {
          id: 27,
          question: "Is it acceptable to apply different SDD levels to different features within the same project?",
          options: {
            A: "No, a project must commit to one SDD level for all features",
            B: "Yes, the appropriate level can vary by feature: exploratory features use Spec-Anchored, well-understood features use Spec-First, and core ongoing features use Spec-as-Source",
            C: "No, mixing levels creates inconsistency that confuses the team",
            D: "Yes, but only if the team documents which level is used for each feature"
          },
          correct: "B",
          explanation: "SDD levels operate at the feature level, not just the project level. A project can use Spec-Anchored for a new experimental recommendation engine, Spec-First for a well-documented payment integration, and Spec-as-Source for its core authentication system that evolves continuously. Matching the level to each feature's characteristics produces better outcomes than forcing one level across all work."
        },
        {
          id: 28,
          question: "Which SDD level has the highest upfront overhead but becomes lower overhead over time?",
          options: {
            A: "Spec-First, because writing the complete spec is done only once",
            B: "Spec-as-Source, because establishing the living spec process has initial investment but the maintained spec replaces memory and reduces context-establishment overhead each session",
            C: "Spec-Anchored, because the exploration phase is expensive",
            D: "All three levels have identical overhead over the lifetime of a project"
          },
          correct: "B",
          explanation: "Spec-as-Source has high initial overhead (establishing the living document process, ensuring updates are made before code changes) but becomes lower overhead over time. As the spec matures, it replaces the team's need to reconstruct context from memory or conversation history. Each session starts from the spec rather than re-establishing what was decided. The spec investment compounds as it accumulates institutional knowledge."
        },
        {
          id: 29,
          question: "In Spec-Anchored development, when exactly should the spec be written?",
          options: {
            A: "Before any exploration begins, based on the team's best guess",
            B: "After exploration has revealed enough about what works to make informed specification decisions, but before building the production version",
            C: "After the production version is shipped and the team can document what was built",
            D: "The spec is written incrementally during production implementation"
          },
          correct: "B",
          explanation: "The Spec-Anchored timing: write the spec when exploration has yielded enough learning to make informed decisions, but before production implementation begins. The prototype validates the approach; the spec captures what was learned and directs the clean production build. Writing too early (before learning) produces a spec full of wrong assumptions; writing too late (after production) makes the spec a trailing document."
        },
        {
          id: 30,
          question: "Why does Spec-as-Source reduce long-term overhead compared to having no spec or an outdated spec?",
          options: {
            A: "Spec-as-Source uses AI to auto-generate documentation, reducing manual effort",
            B: "A maintained spec replaces the working memory that would otherwise need to be reconstructed at the start of each session, eliminating the overhead of repeatedly re-establishing context from scratch",
            C: "Spec-as-Source reduces code complexity, which reduces maintenance effort",
            D: "Spec-as-Source requires fewer code reviews because the spec serves as the review"
          },
          correct: "B",
          explanation: "The long-term overhead reduction of Spec-as-Source comes from eliminating repeated context reconstruction. Without a spec, each session begins with the team re-establishing what was decided: reading old conversation logs, checking git history, asking teammates. With a maintained spec, the context is already captured and current. This overhead compound: 10 minutes per session across 200 sessions is 33 hours of re-establishment work that a living spec eliminates."
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
          question: "You join a new project and start a Claude Code session. Without you mentioning anything about the tech stack, Claude automatically uses pnpm instead of npm, creates files in kebab-case, and adds TypeScript strict mode checks. What made this possible?",
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
          question: "Your team's CLAUDE.md has grown to 200 lines with detailed sprint goals, current feature requirements, team member contact info, and meeting schedules. Claude keeps getting confused by outdated information. What's the problem?",
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
          question: "You write a spec for a new feature that says 'use MongoDB for this feature's data storage.' Your project's CLAUDE.md says 'We use PostgreSQL for all data storage.' What happens when Claude implements the feature?",
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
          question: "Your organization wants to use both Claude Code and Cursor AI on the same project. You want both tools to follow the same conventions. What's the recommended approach?",
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
          question: "A developer complains that Claude keeps forgetting the project's deployment process between sessions. They have to re-explain it every time. What's the solution?",
          options: {
            A: "Use a more expensive AI model with better memory",
            B: "Keep the session open indefinitely to preserve context",
            C: "Add the deployment process to the Project Constitution (CLAUDE.md) as permanent context under 'Key Commands' — it will be active in every session without re-explanation",
            D: "Write a separate specification for the deployment process"
          },
          correct: "C",
          explanation: "The deployment process is stable information that applies to every session — perfect for the Project Constitution. Adding it to CLAUDE.md's 'Key Commands' section means Claude knows it from session 1 without being told. This is the 'cheapest way to give Claude continuous project awareness' — write it once, benefit every session."
        },
        {
          id: 16,
          question: "You're starting a new Next.js project with TypeScript, pnpm, and Prisma. Your CLAUDE.md has a constraint: 'Never use `any` in TypeScript.' Three sessions later, Claude still uses `any` in generated code. What's the most likely reason?",
          options: {
            A: "CLAUDE.md only works for senior developers",
            B: "The constraint may be phrased weakly or buried. Effective CLAUDE.md constraints must be explicit and prominent: 'CONSTRAINT: Never use TypeScript `any`. Use `unknown` with type guards instead.' Vague phrasing ('try to avoid any') or constraints buried in dense prose get overlooked.",
            C: "You must tell Claude the constraint manually each session",
            D: "TypeScript constraints don't work in CLAUDE.md"
          },
          correct: "B",
          explanation: "CLAUDE.md constraint effectiveness depends on clarity and placement. Place critical constraints under a prominent 'Constraints' section near the top. Use absolute language: 'Never', 'Always', 'Must'. Provide examples: 'Use `unknown` and type narrowing instead of `any`'. A constraint buried in the middle of a dense prose section or softened with 'prefer' or 'try to' has far less impact than a bolded rule at the file's top."
        },
        {
          id: 17,
          question: "A new team member will work with Claude on your project for the first time. They have a CLAUDE.md ready. Their colleague says 'Just tell Claude what to do each session — CLAUDE.md is overkill.' What is the quantifiable cost of skipping CLAUDE.md over 3 months of daily sessions?",
          options: {
            A: "No measurable cost — verbal context works as well",
            B: "At ~3 minutes per session × 20 sessions/month × 3 months = 180 minutes (3 hours) of pure re-establishment overhead, plus inconsistency drift as verbal descriptions vary session-to-session. CLAUDE.md is identical every session.",
            C: "The cost is too variable to estimate",
            D: "CLAUDE.md maintenance costs more than 3 hours over 3 months"
          },
          correct: "B",
          explanation: "The amortization math: writing CLAUDE.md takes ~30 minutes once. Saving 3 minutes/session × 60 sessions = 180 minutes saved — a 6:1 return on time invested. The consistency benefit compounds: verbal context drifts session-to-session ('I think we decided X'); CLAUDE.md is authoritative every time. The cost is front-loaded (one writing session); the benefit is perpetual (every future session)."
        },
        {
          id: 18,
          question: "Your project's CLAUDE.md is missing the deployment command. Every deployment session starts with 2 minutes of explaining the process. What is the correct fix and why?",
          options: {
            A: "Create a separate DEPLOY.md file for deployment instructions",
            B: "Add to CLAUDE.md's 'Key Commands' section: 'Deploy: pnpm run deploy:staging / pnpm run deploy:prod (requires approval).' Deployment is stable information that applies every deployment session — exactly what permanent context captures.",
            C: "Write a specification document for the deployment process",
            D: "Add it to the project's README instead"
          },
          correct: "B",
          explanation: "The 'Key Commands' section in the 6-part CLAUDE.md structure captures how to run, test, and deploy the project. Deployment process is stable (doesn't change every sprint) and applies to every deployment session. Putting it in CLAUDE.md means Claude knows it automatically without 2-minute explanations. README serves human readers; CLAUDE.md serves Claude's session context."
        },
        {
          id: 19,
          question: "Claude suggests hardcoding a Stripe secret key in an environment config file. Your CLAUDE.md doesn't mention secrets. Which CLAUDE.md section and what specific entry would have prevented this security risk?",
          options: {
            A: "Technology Stack: 'We use Stripe for payments'",
            B: "Important Notes / Constraints: 'SECURITY: Never commit secrets, API keys, or credentials to git. All secrets in .env files only. .env must be in .gitignore.' This hard constraint, stated prominently, prevents credential exposure regardless of task context.",
            C: "Coding Conventions: 'Use consistent naming conventions'",
            D: "Project Overview: 'Security is a priority'"
          },
          correct: "B",
          explanation: "Security constraints belong in 'Important Notes' as non-negotiable hard rules. The constraint must be specific ('Never commit secrets — .env only, .env in .gitignore') rather than general ('be careful with security'). Constitutional constraints in this category override any task's implicit permissions — no specification or instruction can override 'never commit credentials.' This is the highest-priority category of CLAUDE.md content."
        },
        {
          id: 20,
          question: "A developer's global CLAUDE.md says 'Always use spaces for indentation' and the project-level CLAUDE.md says 'Use tabs (legacy codebase requirement).' Claude uses spaces in the project. What is wrong and how does the correct hierarchy work?",
          options: {
            A: "Global CLAUDE.md always wins — personal preferences override project settings",
            B: "Project-level CLAUDE.md should take precedence within its project. The project's specific legacy requirement (tabs) must override the developer's personal default (spaces). This is the intended hierarchy: project norms are authoritative within project scope.",
            C: "There is no resolution mechanism — Claude randomly picks one",
            D: "Both apply equally — Claude will alternate between them"
          },
          correct: "B",
          explanation: "Two-level hierarchy: Global (~/.claude/CLAUDE.md) = personal defaults across all projects. Project-level = project-specific norms. Project-level takes precedence within its scope. The project's legacy codebase requirement (tabs for compatibility) supersedes the developer's personal preference (spaces). This hierarchy enables teams: each project has its own authoritative norms regardless of individual developer preferences."
        },
        {
          id: 21,
          question: "What is the difference between the global CLAUDE.md and the project-level CLAUDE.md?",
          options: {
            A: "The global CLAUDE.md is larger and more comprehensive than the project-level",
            B: "The global CLAUDE.md (~/.claude/CLAUDE.md) holds personal preferences that apply across all projects; the project-level CLAUDE.md holds project-specific norms that override global defaults within that project",
            C: "The global CLAUDE.md is for team leads; the project-level is for individual developers",
            D: "There is no difference — both serve the same purpose"
          },
          correct: "B",
          explanation: "Two CLAUDE.md levels serve different scopes. The global file captures personal defaults that apply everywhere: preferred shell commands, personal coding style, universal safety rules. The project file captures what is specific to that codebase: tech stack choices, naming conventions, deployment commands, team agreements. Project-level overrides global within its scope, allowing project norms to supersede personal preferences when they conflict."
        },
        {
          id: 22,
          question: "What belongs in CLAUDE.md according to the Project Constitution concept?",
          options: {
            A: "Current sprint goals, feature requirements, and team meeting schedules",
            B: "Project norms, key commands, architectural decisions, and coding conventions — stable information that applies to every session",
            C: "Detailed task-by-task implementation instructions for the current feature",
            D: "A complete history of all decisions made since the project began"
          },
          correct: "B",
          explanation: "CLAUDE.md holds stable norms that apply to every session: the tech stack, naming conventions, key commands to run and test the project, architectural patterns, and security constraints. It does NOT hold ephemeral data like sprint goals or task-specific context. The test: if the information changes every two weeks, it belongs in a task file, not CLAUDE.md."
        },
        {
          id: 23,
          question: "What is 'permanent context' as it applies to CLAUDE.md?",
          options: {
            A: "Context that is hardcoded into the AI model permanently",
            B: "Information that Claude needs in every single session without re-specification, automatically injected by the CLAUDE.md file at session start",
            C: "Context that cannot be modified once it is added to CLAUDE.md",
            D: "Long-running conversations that persist across sessions"
          },
          correct: "B",
          explanation: "CLAUDE.md provides permanent context by being automatically read at the start of every Claude Code session. Information placed there — tech stack, conventions, constraints — is always active without the developer needing to re-state it. This is permanent in the sense that it persists across all sessions, not that it cannot be changed. The permanence is about automatic, universal availability."
        },
        {
          id: 24,
          question: "Why is the 60-line limit recommended for CLAUDE.md?",
          options: {
            A: "Claude Code cannot read files longer than 60 lines",
            B: "Keeping CLAUDE.md under 60 lines ensures the signal-to-noise ratio remains high and the context window cost of loading it is minimal every session",
            C: "60 lines is the maximum for git to track efficiently",
            D: "The 60-line limit is a style convention with no functional significance"
          },
          correct: "B",
          explanation: "The 60-line recommendation balances comprehensiveness with efficiency. A bloated CLAUDE.md (200+ lines) consumes significant context window space every session and dilutes the key norms among irrelevant detail. Under 60 lines keeps the core norms prominent and the context cost minimal. Domain-specific knowledge that exceeds this limit should be moved to skills files that Claude loads on demand."
        },
        {
          id: 25,
          question: "How do skills differ from CLAUDE.md in the Claude Code ecosystem?",
          options: {
            A: "Skills are for individual developers; CLAUDE.md is for teams",
            B: "Skills hold domain expertise and reusable instructions for specific tasks; CLAUDE.md holds the permanent project norms that apply to all tasks",
            C: "Skills are written in YAML; CLAUDE.md is written in Markdown",
            D: "Skills replace CLAUDE.md for advanced users"
          },
          correct: "B",
          explanation: "Skills and CLAUDE.md serve complementary purposes. CLAUDE.md holds project-wide permanent norms: the conventions and constraints that apply regardless of the task. Skills hold domain expertise for specific tasks: how to handle authentication patterns, how to write this project's tests, how to interact with the payment API. CLAUDE.md is always loaded; skills are loaded when their domain is relevant."
        },
        {
          id: 26,
          question: "What is the correct precedence hierarchy for CLAUDE.md files?",
          options: {
            A: "Global CLAUDE.md overrides project CLAUDE.md, which overrides subdirectory CLAUDE.md",
            B: "Global CLAUDE.md is overridden by project CLAUDE.md, which is overridden by subdirectory CLAUDE.md, with more specific context taking precedence",
            C: "All CLAUDE.md files are merged equally with no precedence",
            D: "Only the project-level CLAUDE.md is read; global and subdirectory files are ignored"
          },
          correct: "B",
          explanation: "CLAUDE.md hierarchy: global < project < subdirectory, with more specific context overriding more general. A subdirectory CLAUDE.md can specify norms for that part of the codebase that override the project-level defaults, which in turn override the global defaults. This allows fine-grained control while maintaining sensible defaults at each level."
        },
        {
          id: 27,
          question: "What LLM constraint does CLAUDE.md directly address?",
          options: {
            A: "The context window size limitation",
            B: "The stateless nature of LLMs — each session starts with no memory of prior sessions, and CLAUDE.md injects persistent project knowledge at session start",
            C: "The probabilistic output limitation",
            D: "The token cost of long conversations"
          },
          correct: "B",
          explanation: "CLAUDE.md directly solves the statelessness problem. LLMs have no memory between sessions — each session starts blank. Without CLAUDE.md, every session requires the developer to re-establish project context (tech stack, conventions, constraints). CLAUDE.md is automatically injected at session start, providing the stable context that would otherwise need to be reconstructed from memory or conversation history."
        },
        {
          id: 28,
          question: "What should NOT be put in CLAUDE.md?",
          options: {
            A: "Coding conventions and naming patterns",
            B: "Task-specific specifications and temporary context that changes with each sprint or feature",
            C: "Security constraints and API access patterns",
            D: "Key commands for running and testing the project"
          },
          correct: "B",
          explanation: "CLAUDE.md should hold stable, permanent norms. Task-specific specs and temporary context (current sprint goals, feature requirements, today's debugging focus) change frequently and become stale quickly. Stale content in CLAUDE.md creates context poisoning — the AI acts on outdated information it believes is current. Dynamic content belongs in task files or spec documents, not the permanent constitution."
        },
        {
          id: 29,
          question: "How does CLAUDE.md differ from a SPEC.md file?",
          options: {
            A: "They serve the same purpose and can be used interchangeably",
            B: "CLAUDE.md defines how work is done in this project (permanent norms); SPEC.md defines what is to be built for a specific feature (task-specific requirements)",
            C: "CLAUDE.md is for developers; SPEC.md is for stakeholders",
            D: "CLAUDE.md is written in YAML; SPEC.md is written in Markdown"
          },
          correct: "B",
          explanation: "The distinction is HOW vs WHAT. CLAUDE.md answers HOW we work here: what tools we use, what conventions we follow, what constraints always apply. SPEC.md answers WHAT we are building now: the goals, constraints, architecture, and checklist for a specific feature. CLAUDE.md persists across all work; SPEC.md is per-feature. Both are needed; they serve different purposes."
        },
        {
          id: 30,
          question: "Why is CLAUDE.md described as the 'onboarding document' for every new AI session?",
          options: {
            A: "Because it teaches new developers how to use Claude Code",
            B: "Because every new Claude session starts with zero project knowledge, and CLAUDE.md provides the immediate orientation that allows the session to be productive without a lengthy context-establishment conversation",
            C: "Because it is the first file created when a new project is started",
            D: "Because it contains the onboarding checklist for new team members"
          },
          correct: "B",
          explanation: "Each Claude session is a new instance with no memory of previous sessions — like a new hire starting their first day. CLAUDE.md is the briefing document that orients this new instance: what we build, how we build it, what tools we use, what rules apply. Without it, the first 5-10 minutes of every session are spent re-establishing context. CLAUDE.md makes every session immediately productive."
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
          question: "A team starts implementing a feature without doing the Research phase. They write a spec based on assumptions and proceed to Implementation. Mid-implementation, they discover the API they planned to use has a 100-call/minute rate limit that breaks their architecture. What went wrong?",
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
          question: "You're implementing a complex feature using the Four-Phase SDD Workflow. During Implementation, a subagent discovers that a design decision in the spec won't work for an edge case. What should happen next according to SDD principles?",
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
          question: "A project manager asks why the Four-Phase SDD Workflow can't be parallelized — why can't Research, Specification, and Refinement happen simultaneously for different parts of a large system?",
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
          question: "Your team completes the Research and Specification phases for a user notification feature. During Refinement, the interview reveals that the team has different interpretations of 'real-time notifications' — some think WebSocket push, others think polling every 30 seconds. What value did the Refinement phase provide?",
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
          question: "A developer argues that the Four-Phase SDD Workflow is 'too slow' for their urgent production bug fix that affects 10 files. They want to skip straight to Implementation. According to the SDD Decision Framework, what's the right call?",
          options: {
            A: "Follow all four phases — SDD is always the right approach",
            B: "Skip SDD entirely — if the fix can be explained in one sentence, the overhead isn't justified",
            C: "Use a lightweight spec (Task, Constraints, Success Criteria) then implement — 10 files affected triggers the SDD heuristic (files_affected > 5), but the urgency justifies a lighter approach",
            D: "Only do Research and skip the other phases"
          },
          correct: "C",
          explanation: "The Decision Heuristic says: IF files_affected > 5 → Use SDD. But the lesson also teaches judgment. For an urgent production bug affecting 10 files, a full four-phase workflow is overkill, but pure vibe coding is risky. The lightweight spec pattern (Task: one-line description, Constraints: what NOT to do, Success Criteria: measurable outcomes) provides 80% of spec value with 20% of overhead — appropriate for borderline cases."
        },
        {
          id: 16,
          question: "A team skips Research and goes straight to Specification for a new microservice. Mid-Specification, they discover they don't know the rate limits of the third-party API the service must call. They must pause to research. What SDD principle did they violate?",
          options: {
            A: "Implementation must always come before Specification",
            B: "They violated sequential phase dependency: Research must complete before Specification begins. Research exists to discover constraints (like API rate limits) before embedding them in a spec. Discovering constraints during Specification forces a phase restart, wasting Specification work.",
            C: "Research is optional for experienced teams",
            D: "They should have started with code to discover rate limits experimentally"
          },
          correct: "B",
          explanation: "Sequential phase dependency: Research → Specification → Refinement → Implementation. Research reveals constraints (rate limits, existing patterns, compatibility requirements) so the Specification can incorporate them upfront. Starting Specification without completing Research means specifying with unknowns. When those unknowns surface mid-Specification, you must pause and effectively restart Research — wasting the Specification work already done."
        },
        {
          id: 17,
          question: "During Implementation (task 8 of 12), you discover the database schema in the spec is wrong for the performance requirements. Tasks 1-7 are committed. What does SDD's iterative nature prescribe?",
          options: {
            A: "Continue with the wrong schema — changing mid-implementation is too disruptive",
            B: "Revert task 8 (git revert), update the spec's Reference Architecture with the correct schema, run Refinement on the updated design, then continue from the corrected foundation. Tasks 1-7 that don't depend on the wrong schema remain valid.",
            C: "Abandon the project and start from scratch",
            D: "Complete all 12 tasks then fix the schema in a follow-up sprint"
          },
          correct: "B",
          explanation: "SDD is iterative, not Waterfall. When Implementation discovers a fundamental spec error: stop the failing task (atomic rollback via git revert), update the spec (it's a living document), re-run Refinement on the changed sections, then continue from the corrected foundation. Tasks 1-7 that don't depend on the wrong schema remain valid. Atomic commits make this surgical rollback possible — only the affected task is reverted."
        },
        {
          id: 18,
          question: "You give Claude 'Implement this entire spec in one prompt.' Claude produces a 500-line monolith with no commit history. What specific instruction was missing from the implementation prompt?",
          options: {
            A: "You should have specified the programming language",
            B: "The core SDD implementation prompt was missing: 'Use the task tool, each task done by a subagent, commit after each task.' Without it, Claude treats the spec as a one-shot request with no task isolation, no per-task commits, and no rollback boundaries.",
            C: "You should have specified the spec format more clearly",
            D: "Claude should have asked for clarification before implementing"
          },
          correct: "B",
          explanation: "The SDD implementation prompt is specific: 'Implement @docs/spec.md. Use the task tool and each task should only be done by a subagent so that context is clear. After each task do a commit before you continue. You are the main agent and your subagents are your devs.' The task tool instruction triggers task extraction. The commit instruction creates rollback boundaries. Without both, Claude defaults to monolithic implementation."
        },
        {
          id: 19,
          question: "Your team skips Refinement because 'the spec is very detailed.' During Implementation, two subagents interpret 'admin user' differently — one assumes full system access, the other assumes department-level access. What would Refinement have caught?",
          options: {
            A: "Refinement would only have made the spec longer, not clearer",
            B: "The Audience/Stakeholder category in the Refinement interview would have asked: 'Who exactly is an admin user? What specific actions can they perform?' This forces an explicit definition before implementation locks in either interpretation.",
            C: "Developers should resolve interpretation differences during implementation",
            D: "This is a communication problem, not an SDD problem"
          },
          correct: "B",
          explanation: "The Refinement phase's Audience/Stakeholder category surfaces exactly this type of ambiguity: 'Who are the users, what are their roles, what can each do?' A spec can use 'admin user' as if obvious, when in fact team members (and AI subagents) interpret it differently. The structured interview forces an explicit definition: 'Admin can do X, Y, Z. They CANNOT do A, B. This differs from a department manager.' Explicit definitions prevent implementation divergence."
        },
        {
          id: 20,
          question: "You run the SDD implementation prompt. The main agent creates 8 tasks from the spec's checklist. Tasks 3 and 4 have no dependencies on each other. The main agent runs them sequentially. According to the Four-Phase SDD workflow, what optimization is being missed?",
          options: {
            A: "Sequential is always correct — never run tasks in parallel",
            B: "Independent tasks (no dependencies on each other) should be delegated to parallel subagents simultaneously — completing in the time of the longest task rather than the sum of both. The main agent should identify independent tasks and launch them in parallel.",
            C: "Tasks should always run one at a time for safety",
            D: "Parallel tasks cannot commit to the same git repository"
          },
          correct: "B",
          explanation: "Parallel Execution Benefit: when tasks have no dependencies on each other, they can run simultaneously. The main agent identifies independent tasks (tasks 3 and 4 don't need each other's output) and delegates both to subagents at the same time. If each takes 5 minutes, parallel = 5 minutes total; sequential = 10 minutes. For large specs with many independent tasks, this parallelism compounds significantly."
        },
        {
          id: 21,
          question: "What are the four phases of the SDD workflow in correct order?",
          options: {
            A: "Specify, Research, Implement, Refine",
            B: "Research, Specification, Refinement, Implementation",
            C: "Plan, Build, Test, Deploy",
            D: "Research, Refine, Specify, Execute"
          },
          correct: "B",
          explanation: "The four phases in order: Research (gather context), Specification (write the concrete spec), Refinement (surface hidden assumptions), Implementation (execute via subagent delegation). Each phase is sequential because each one's output is the next one's required input. Skipping or reordering phases compounds the unknowns that each phase was designed to resolve."
        },
        {
          id: 22,
          question: "What does the Research phase produce as its output?",
          options: {
            A: "A rough draft of the specification document",
            B: "A synthesized document that unifies multiple research angles into a coherent context foundation — not raw notes or URL lists",
            C: "A list of tasks ready for subagent delegation",
            D: "A set of interview questions for the Refinement phase"
          },
          correct: "B",
          explanation: "The Research phase output is a synthesized document, not raw notes. Multiple parallel research subagents explore different angles and return findings. These are then synthesized into a unified context document that resolves conflicts, removes duplication, and organizes insights into a format that directly feeds the Specification phase. Raw, unprocessed research notes are not sufficient input for specification."
        },
        {
          id: 23,
          question: "What transformation does the Specification phase perform?",
          options: {
            A: "It transforms code into documentation",
            B: "It transforms the synthesized research into an actionable specification with context, goals, constraints, reference architecture, and implementation checklist",
            C: "It transforms stakeholder requests into technical requirements",
            D: "It transforms vague ideas into a project timeline"
          },
          correct: "B",
          explanation: "The Specification phase transforms research into action. The research document contains knowledge (patterns found, constraints discovered, questions answered). The Specification phase structures that knowledge into the 4-part spec template: Context (why), Goals/Constraints (what must/must not), Reference Architecture (how structured), Implementation Checklist (what to build, in order). Research informs; specification directs."
        },
        {
          id: 24,
          question: "What is the interview pattern used in the Refinement phase designed to accomplish?",
          options: {
            A: "To evaluate the team's technical skills before implementation",
            B: "To surface hidden assumptions in the specification by asking targeted questions across five ambiguity categories before any code is written",
            C: "To interview stakeholders about their budget and timeline",
            D: "To generate test cases for the implementation checklist"
          },
          correct: "B",
          explanation: "The Refinement interview pattern surfaces hidden assumptions in the spec before implementation locks them in. Even well-written specs contain ambiguities the author did not notice: undefined terms, implicit scope assumptions, missing edge case handling. The structured interview across Audience, Scope, Success Criteria, Technical Constraints, and Edge Cases probes each category systematically."
        },
        {
          id: 25,
          question: "What is the core mechanism of the Implementation phase?",
          options: {
            A: "Developers write code manually following the specification",
            B: "Task-based delegation to subagents, where each checklist item becomes one subagent task that ends in one atomic commit",
            C: "The AI generates all code in one pass without any task decomposition",
            D: "Stakeholders review implementation as it is generated"
          },
          correct: "B",
          explanation: "The Implementation phase operates through task-based subagent delegation. The main agent reads the spec, extracts the checklist, and delegates each item to a fresh subagent with isolated context. Each subagent completes its task and commits atomically. The main agent tracks progress using task tools and moves to the next item. This prevents context pollution and creates granular rollback boundaries."
        },
        {
          id: 26,
          question: "Why must the four SDD phases be completed sequentially rather than in parallel?",
          options: {
            A: "Sequential execution is required by Claude Code's technical architecture",
            B: "Each phase produces the output that the next phase requires as its input; starting a phase before the prior phase completes means working with incomplete or missing prerequisites",
            C: "Parallel phases would create git merge conflicts",
            D: "Team members can only focus on one phase at a time"
          },
          correct: "B",
          explanation: "Phase sequentiality is driven by dependency: Research output feeds Specification. Specification output feeds Refinement. Refined specification feeds Implementation. Starting Specification before Research means specifying unknowns. Starting Implementation before Refinement means implementing hidden assumptions. Each phase removes uncertainty that would compound if carried into the next phase."
        },
        {
          id: 27,
          question: "What does 'parallel research' mean within the Research phase?",
          options: {
            A: "Two developers research the same topic simultaneously to compare findings",
            B: "Multiple subagents are spawned simultaneously, each investigating a different independent aspect of the problem space, completing in parallel rather than sequentially",
            C: "Research is done in a separate parallel project to avoid blocking implementation",
            D: "Research documentation is written in parallel with code implementation"
          },
          correct: "B",
          explanation: "Parallel research within the Research phase means spawning multiple subagents simultaneously, each with a different focused research angle. Authentication patterns, pagination strategies, error handling approaches, and performance considerations can all be investigated at the same time by different subagents. This compresses hours of sequential research into the time of the longest single subagent research task."
        },
        {
          id: 28,
          question: "What is the handoff artifact between the Research phase and the Specification phase?",
          options: {
            A: "A list of URLs pointing to relevant documentation",
            B: "A synthesized research document that organizes findings into constraints, decisions, and open questions structured for specification writing",
            C: "A set of code prototypes demonstrating the discovered approaches",
            D: "A meeting notes document from the research review meeting"
          },
          correct: "B",
          explanation: "The handoff artifact from Research to Specification is the synthesized research document. This is not raw notes or a URL list but a structured summary: what was found, what constraints apply, what decisions are recommended, and what questions remain. The spec writer uses this document as the direct input for the 4-part specification. Research insights populate specific spec sections: constraints discovered populate the Constraints section, patterns found populate Reference Architecture."
        },
        {
          id: 29,
          question: "What type of Refinement question is 'What happens when the external service is unavailable?'",
          options: {
            A: "A Success Criteria question",
            B: "An Edge Cases question that probes for failure scenarios not covered by the happy-path specification",
            C: "A Technical Constraints question about system requirements",
            D: "An Audience question about who uses the system"
          },
          correct: "B",
          explanation: "Questions about system unavailability, network failures, and error conditions belong to the Edge Cases ambiguity category. The spec might describe the happy path perfectly but leave undefined what happens when a dependency fails. Refinement's Edge Cases category systematically surfaces these scenarios: what should happen when the service is unavailable, when the user is offline, when the data is malformed. These scenarios are real and must be specified before implementation."
        },
        {
          id: 30,
          question: "Why does the Implementation phase specify 'one commit per task' as a requirement?",
          options: {
            A: "It creates a compliance trail for code review processes",
            B: "Each commit creates an atomic rollback boundary so that if one task introduces a problem, it can be reverted independently without undoing the work of other completed tasks",
            C: "Committing frequently improves git repository performance",
            D: "One commit per task is a coding style convention with aesthetic value"
          },
          correct: "B",
          explanation: "One commit per task creates granular reversibility. If Task 5 of 14 introduces a bug, git reverting Task 5's commit restores to the working state after Task 4 without touching Tasks 1-4. Without per-task commits, a bug in Task 5 requires manually untangling changes from Tasks 5 through whatever point was reached. Atomic commits make rollback surgical and precise rather than all-or-nothing."
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
          question: "You're building a payment integration and need to research three independent aspects: (1) Stripe API patterns, (2) PCI compliance requirements, (3) existing payment code in your codebase. How should you structure the Parallel Research?",
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
          question: "Two parallel research subagents return conflicting recommendations for pagination: Subagent 1 recommends cursor-based pagination, Subagent 2 recommends offset-based. What should the Research Synthesis step do?",
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
          question: "A team is learning a new GraphQL library for their project. Instead of spending 4 hours reading documentation sequentially, they use Parallel Research with 4 subagents. What should each subagent investigate to maximize learning efficiency?",
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
          question: "You're refactoring a 50-file codebase spanning authentication, authorization, session management, and API layers. Why is Parallel Research particularly valuable here compared to sequential analysis?",
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
          question: "A research subagent returns: 'Found that the existing codebase uses JWT for authentication. The token expires in 15 minutes. Refresh tokens are stored in HTTP-only cookies.' Is this a good research return format?",
          options: {
            A: "No — it should include code snippets",
            B: "Yes — it's a structured summary covering what was found (JWT auth), constraints discovered (15-min expiry, HTTP-only cookies), and implies key decisions (the existing pattern should be followed for consistency)",
            C: "No — it should recommend a different authentication approach",
            D: "No — it should be at least 10 pages long to be thorough"
          },
          correct: "B",
          explanation: "Good research return format: structured summary with What was found (JWT authentication), Constraints discovered (15-min token expiry, HTTP-only cookie storage for refresh tokens), and implied Key decisions (follow existing patterns for consistency). This structure feeds directly into the spec's Context (existing auth system), Constraints (must use JWT, 15-min expiry), and Reference Architecture (HTTP-only cookies) sections."
        },
        {
          id: 16,
          question: "You need to research three aspects of a new feature: existing codebase patterns, industry best practices, and third-party library options. You assign all three to one subagent. After 20 minutes, the subagent returns an overwhelmed, shallow summary. What Parallel Research principle was violated?",
          options: {
            A: "Research subagents should always work sequentially",
            B: "The decomposition principle was violated: each independent research angle should get its own dedicated subagent. Three independent questions given to one subagent produces shallow coverage of all three. Three subagents in parallel produce deeper coverage of each in the same time.",
            C: "20 minutes is too short for any research",
            D: "One subagent is always sufficient if the researcher is experienced"
          },
          correct: "B",
          explanation: "The Parallel Research decomposition principle: identify independent research angles (angles that don't need each other's results to begin), then assign ONE subagent per angle. Giving three independent questions to one subagent creates a context-overloaded generalist. Giving each question to a dedicated subagent creates three focused specialists running simultaneously. The synthesis step then combines their findings."
        },
        {
          id: 17,
          question: "Three parallel research subagents return their findings. Two of them independently recommend cursor-based pagination. The third recommends offset-based with different reasoning. What should the Research Synthesis step conclude?",
          options: {
            A: "Vote 2-1 for cursor-based — majority wins",
            B: "Analyze WHY each recommendation was made: if cursor-based is recommended for real-time data and your use case has real-time data, recommend cursor-based with the specific reasoning. If offset is simpler for your data volume, note the tradeoff. Resolution must be context-aware, not just a majority vote.",
            C: "Present both options without resolving — let the Specification phase decide",
            D: "Pick the recommendation from the most senior subagent"
          },
          correct: "B",
          explanation: "Research Synthesis resolves conflicts contextually, not by majority. The synthesis step asks: 'Given OUR context (real-time data, expected scale, existing patterns), which recommendation applies?' Two agents may recommend different things for good reasons — synthesis determines which reason matches your situation. The output: a single resolved recommendation with documented reasoning, ready for the spec's Reference Architecture section."
        },
        {
          id: 18,
          question: "You're using Parallel Research for a new feature. Subagent 1 investigates authentication patterns. Subagent 2 investigates error handling strategies. You discover that Subagent 2 needs to know the authentication approach before it can research error handling (auth errors require different handling). Can these run in parallel?",
          options: {
            A: "Yes — all research should always be parallelized",
            B: "No — Subagent 2 depends on Subagent 1's output. Dependencies prevent parallelism: Subagent 1 must complete first, then its findings inform the specific error handling research Subagent 2 conducts. Only independent research angles can be parallelized.",
            C: "Yes — have Subagent 2 make assumptions and correct later",
            D: "Merge both into one subagent to avoid the dependency problem"
          },
          correct: "B",
          explanation: "Parallelism requires independence: each angle can be explored without waiting for another angle's results. If Subagent 2's research scope depends on Subagent 1's findings (auth approach affects what error handling patterns are relevant), they have a dependency and must be sequenced. The test: 'Can this subagent start immediately without waiting for any other subagent?' If no, sequence it. Only independent angles parallelize."
        },
        {
          id: 19,
          question: "After Parallel Research on a payment integration, you have three detailed subagent summaries totaling 2,000 words. You hand all three directly to the Specification phase without synthesis. The spec author complains it's overwhelming and contains contradictory recommendations. What Research step was skipped?",
          options: {
            A: "The research was too detailed — shorter summaries would work",
            B: "Research Synthesis: combining parallel summaries into a unified document that removes duplication, resolves conflicts between findings, and organizes insights into spec-ready form. Raw parallel outputs are input to synthesis, not direct input to specification.",
            C: "You should have done sequential research instead",
            D: "The spec author should resolve contradictions during specification writing"
          },
          correct: "B",
          explanation: "Research Synthesis is the mandatory step between Parallel Research and Specification. Its purpose: 1) Remove duplication (three agents may find the same pattern), 2) Resolve conflicts (agent A recommends X, agent B recommends Y — synthesis determines which applies to your context), 3) Organize insights into spec-ready sections (constraints → Constraints section, architectural patterns → Reference Architecture). Unprocessed parallel outputs overwhelm and confuse."
        },
        {
          id: 20,
          question: "Your team is about to start specifying a complex API gateway feature. You have limited time. An engineer suggests doing quick parallel research first (4 subagents, 10 minutes each) before specifying. The PM says 'We already know enough, skip research.' Who is right, and what does SDD say?",
          options: {
            A: "The PM is right — experienced teams don't need research",
            B: "The engineer is right for complex, unfamiliar work: 40 minutes of parallel research (4 subagents × 10 minutes, compressed to 10 minutes wall clock) reveals constraints that would otherwise surface as surprises during specification or implementation. The cost of research is far less than the cost of an implementation surprise.",
            C: "Both are right — research is optional for all teams",
            D: "Skip research only if the feature is under 5 files"
          },
          correct: "B",
          explanation: "Research-before-specification is justified for complex, unfamiliar work: API gateway patterns involve rate limiting strategies, service discovery, authentication forwarding, circuit breakers — areas where wrong assumptions produce broken specs. 10 minutes of parallel research (4 subagents × 10 min = 40 min sequential, compressed to 10 min) reveals: existing rate limiting libraries, compatible auth patterns, known circuit breaker gotchas. This knowledge prevents specification errors that would propagate to implementation."
        },
        {
          id: 21,
          question: "Why is parallel research faster than sequential research for the SDD Research phase?",
          options: {
            A: "Parallel research uses a faster AI model than sequential research",
            B: "Multiple independent research angles are investigated simultaneously, compressing the total research time to the duration of the longest single angle rather than the sum of all angles",
            C: "Parallel research skips less important research topics to save time",
            D: "Parallel research automatically filters out irrelevant information"
          },
          correct: "B",
          explanation: "The speed advantage of parallel research is fundamental: if three research angles each take 10 minutes, sequential research takes 30 minutes while parallel research takes 10 minutes (all three run at the same time). The wall-clock time equals the longest individual research task, not the sum. This compression is why parallel research is the recommended approach for the Research phase when multiple independent questions need answering."
        },
        {
          id: 22,
          question: "How are subagents deployed in parallel research?",
          options: {
            A: "Subagents are assigned to the same research question and their answers are compared",
            B: "Multiple subagents are spawned simultaneously, each assigned a distinct and independent research angle to investigate",
            C: "Subagents take turns researching each topic in sequence",
            D: "One subagent researches while others review the findings"
          },
          correct: "B",
          explanation: "Parallel research deploys subagents by spawning them simultaneously with distinct assignments. Each subagent receives one focused research angle (authentication patterns, pagination strategies, error handling approaches) and investigates it independently. Because the angles are independent, the subagents do not need to coordinate or wait for each other. Their findings are collected and synthesized after all complete."
        },
        {
          id: 23,
          question: "What must happen to parallel research findings before they can feed into the Specification phase?",
          options: {
            A: "The findings must be reviewed by a senior developer and approved",
            B: "The findings from all parallel subagents must be synthesized into a single unified document that resolves conflicts, removes duplication, and organizes insights",
            C: "The findings must be formatted as bullet points and attached to the spec",
            D: "Each subagent must summarize their findings in exactly 100 words"
          },
          correct: "B",
          explanation: "Research synthesis is the mandatory step between parallel research and specification writing. Raw parallel outputs contain duplication (multiple agents find the same pattern), conflicts (agents recommend different approaches), and disorganization. Synthesis resolves conflicts with context-specific reasoning, removes duplication, and organizes insights into spec-ready sections. Unprocessed parallel outputs would overwhelm and confuse the specification writer."
        },
        {
          id: 24,
          question: "Which set of topics exemplifies parallel research angles for an authentication feature?",
          options: {
            A: "Monday's tasks, Tuesday's tasks, Wednesday's tasks",
            B: "Authentication patterns in existing codebase, industry-standard authentication approaches, security requirements, performance implications of different auth strategies",
            C: "Frontend implementation, backend implementation, database implementation",
            D: "User requirements, stakeholder requirements, regulatory requirements"
          },
          correct: "B",
          explanation: "Exemplary parallel research angles for authentication are independent, focused, and simultaneously explorable: existing codebase patterns (what is already done), industry standards (what is done elsewhere), security requirements (what must be ensured), and performance implications (what the constraints are). Each can be investigated independently and the findings combined to produce a comprehensive research document."
        },
        {
          id: 25,
          question: "What gets carried forward from research to specification in the Research-to-Spec handoff?",
          options: {
            A: "Only the final recommendation from each research angle",
            B: "Constraints discovered, architectural patterns recommended, decisions resolved, and open questions that need specification-time resolution",
            C: "A verbatim copy of all research notes",
            D: "Only the links to reference documentation found during research"
          },
          correct: "B",
          explanation: "The Research-to-Spec handoff carries forward structured knowledge: constraints discovered (API rate limits, compatibility requirements) populate the Constraints section; recommended patterns populate the Reference Architecture section; resolved decisions eliminate specification ambiguity; remaining open questions surface as Refinement targets. Each piece of research finding has a natural home in the spec template."
        },
        {
          id: 26,
          question: "What multi-angle investigation framework is used to ensure comprehensive parallel research?",
          options: {
            A: "User, Technical, Organizational, and Competitive angles",
            B: "All four of: User angle (what do users need?), Technical angle (what does the system require?), Organizational angle (what do team norms allow?), Competitive angle (what do industry peers do?)",
            C: "Frontend, Backend, Database, and Infrastructure angles",
            D: "Requirements, Design, Testing, and Deployment angles"
          },
          correct: "B",
          explanation: "Comprehensive parallel research investigates from four angles simultaneously: User (what do actual users need and how do they interact?), Technical (what does the system architecture require?), Organizational (what do team conventions and existing patterns allow?), Competitive (what approaches do industry peers use?). Together these angles prevent specification blind spots that arise from investigating only technical requirements."
        },
        {
          id: 27,
          question: "What does a source reliability audit accomplish during the Research phase?",
          options: {
            A: "It verifies that the research subagents used only approved libraries",
            B: "It reviews research findings to verify claims with evidence, flag unverifiable assertions, and distinguish established facts from recommendations that may not apply to the specific context",
            C: "It checks that all research URLs are still accessible",
            D: "It measures how quickly each research subagent completed its assignment"
          },
          correct: "B",
          explanation: "A source reliability audit ensures the research foundation is solid before building a specification on it. Research subagents may cite general best practices that do not apply to this specific context, make claims that cannot be independently verified, or present recommendations as facts. The audit distinguishes: what is proven (test it), what is claimed (flag it), and what is specific to this context (prioritize it)."
        },
        {
          id: 28,
          question: "How does parallel research prevent premature solution selection?",
          options: {
            A: "It slows down the team to prevent hasty decisions",
            B: "By investigating multiple approaches simultaneously before committing to one, the team sees the full solution landscape and can select based on evidence rather than familiarity or first impression",
            C: "It prevents the team from selecting any solution until all research is complete",
            D: "It assigns solution selection to a dedicated decision-making subagent"
          },
          correct: "B",
          explanation: "Premature solution selection happens when the first viable approach that comes to mind is adopted without exploring alternatives. Parallel research investigates multiple approaches simultaneously, ensuring that cursor-based AND offset-based pagination are both understood before choosing, that JWT AND session-based authentication are compared, and that the decision is evidence-based. The breadth of parallel research prevents the tunnel vision of sequential research."
        },
        {
          id: 29,
          question: "What is the recommended decomposition template for assigning parallel research tasks to subagents?",
          options: {
            A: "Alphabetical decomposition: first subagent handles A-F topics, second handles G-M, etc.",
            B: "Identify distinct independent research angles, assign one subagent per angle, specify exactly what each must discover and what format it should return",
            C: "Assign all research to one subagent and split the output afterward",
            D: "Decompose by estimated time: each subagent gets exactly 10 minutes of work"
          },
          correct: "B",
          explanation: "The decomposition template for parallel research: identify angles that are genuinely independent (can be explored without waiting for other angles), assign exactly one subagent per angle, and specify the scope precisely (what to find, what to return). Vague assignments produce vague research. Each subagent should know: what question they are answering, what format their response should take, and what would constitute sufficient depth."
        },
        {
          id: 30,
          question: "What should happen when parallel research reveals that the original requirements were wrong or impossible?",
          options: {
            A: "The team should abandon the project and start over with correct requirements",
            B: "The research findings should surface this before the specification is written, allowing the requirements to be corrected at the cheapest possible point in the development process",
            C: "The team should proceed with the incorrect requirements since they were already approved",
            D: "Research findings that contradict requirements should be discarded"
          },
          correct: "B",
          explanation: "Discovering incorrect requirements during research is a success, not a failure. The research phase exists precisely to surface this kind of problem before it becomes expensive. If research reveals that the planned API cannot support the required throughput, or that the chosen library has a known incompatibility, this finding prevents building an entire specification and implementation on a flawed foundation. Early discovery is the cheapest point to correct course."
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
          question: "You're writing a spec for a file upload feature. Your first draft says: 'Users should be able to upload files quickly and securely.' A teammate reviews it and says the spec is too vague to implement effectively. According to the signal-dense vs. noise-heavy principle, what specific improvements would make this spec actionable?",
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
          question: "You're specifying a notification system. Your Implementation Checklist has one item: '[ ] Build the notification system.' The AI implementation produces a monolithic 500-line file that's hard to review and impossible to roll back partially. What spec-writing mistake caused this, and how should the checklist be restructured?",
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
          question: "Your team writes a spec for a search feature. The Context section is 3 pages long, covering the history of search in the company, user research findings, competitor analysis, and the CEO's vision for discovery. The Goals/Constraints section is 2 lines. The AI implementation misses critical requirements. What spec structural problem caused this?",
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
          question: "You're specifying a data export feature for a healthcare application. The spec says 'export patient data in CSV format' but doesn't mention HIPAA compliance, data encryption at rest, or audit logging. The AI generates working code that would fail a compliance audit. Which part of the 4-part spec template was insufficient, and what should it have included?",
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
          question: "A developer writes a spec for a payment integration. The Reference Architecture section says 'use Stripe API' but doesn't specify which API version, what error handling approach to use, or how to handle webhook failures. The AI implementation works in testing but fails in production when Stripe returns an unexpected error format. What spec principle would have prevented this production failure?",
          options: {
            A: "The spec should have used a different payment provider",
            B: "The Reference Architecture should have specified: API version ('Stripe API v2024.01'), error handling pattern ('wrap all Stripe calls in retry-with-backoff, max 3 attempts, log failures to monitoring service'), and webhook handling ('verify signature, idempotent processing, dead-letter queue for failed webhooks')",
            C: "The Implementation Checklist should have included a testing item",
            D: "The Context section should have mentioned that production reliability matters"
          },
          correct: "B",
          explanation: "The Reference Architecture section gives the AI the structural approach and key technical decisions. Saying 'use Stripe API' is like saying 'build a house' — it's directionally correct but missing the blueprint. Specifying API version, error handling patterns, and webhook reliability requirements gives the AI the skeleton it needs to build production-grade code, not just working code."
        },
        {
          id: 16,
          question: "You're writing a spec for a file upload feature. Your Goals/Constraints section lists: 'Files must be uploaded securely.' The AI implements upload with no size limit, no file type validation, and no malware scanning. Which spec writing principle was violated?",
          options: {
            A: "The Context section was insufficient",
            B: "The Goals/Constraints section contained noise instead of signal. 'Securely' is a vague adjective that doesn't change any implementation decision. Signal-dense constraints would specify: 'Accept PDF/PNG/JPG only, max 10MB, scan for malware before storage, reject executable content types, return 400 with specific error codes for each rejection reason.'",
            C: "The Implementation Checklist was too short",
            D: "You should have used a different file format for the spec"
          },
          correct: "B",
          explanation: "Signal-dense vs noise-heavy: 'securely' sounds like a constraint but gives the AI no specific implementation target. It's adjective noise. Each actual constraint changes specific implementation decisions: file type whitelist (what to accept), size limit (when to reject), malware scanning (which service to call), error codes (what to return on rejection). Replace every vague adjective with a concrete, verifiable requirement that directly affects the code."
        },
        {
          id: 17,
          question: "Your spec's Reference Architecture section says 'use the MVC pattern.' The AI builds a 400-line controller file with all business logic inside it, which technically satisfies 'MVC' but violates your team's layered service architecture. What was missing from the Reference Architecture?",
          options: {
            A: "The spec should have specified programming language",
            B: "The Reference Architecture must document the structural approach with enough precision to guide correct implementation: 'Thin controllers (routing only, max 20 lines), business logic in service layer (/services/), data access in repository layer (/repositories/). Controllers call services; services call repositories; no direct DB calls in controllers.'",
            C: "MVC is too ambiguous — use a different architecture",
            D: "The Implementation Checklist should have had more specific items"
          },
          correct: "B",
          explanation: "Reference Architecture should specify the structural approach with enough precision that AI makes correct implementation decisions. 'MVC' is a pattern family with many valid interpretations — fat controllers, fat models, service layers are all 'MVC'. The spec must document YOUR specific interpretation: controller responsibilities, service layer rules, data access boundaries. Architectural constraints without boundaries are as vague as no architecture at all."
        },
        {
          id: 18,
          question: "Your Implementation Checklist has: '[ ] Implement all authentication features.' The AI generates 800 lines of code with JWT, OAuth, session management, MFA, and password reset in one commit. When OAuth breaks three weeks later, what's the rollback problem?",
          options: {
            A: "OAuth is always unstable — this was inevitable",
            B: "The checklist item wasn't atomic — 'all authentication features' bundled multiple independent concerns in one task. One commit for 800 lines means reverting OAuth requires reverting JWT and session management too. Atomic items: '[ ] JWT token generation', '[ ] OAuth provider integration', '[ ] Session management', '[ ] MFA setup', '[ ] Password reset flow' — each a separate commit with its own rollback point.",
            C: "OAuth should have been implemented last",
            D: "800 lines per commit is a reasonable size"
          },
          correct: "B",
          explanation: "Well-formed checklist items are atomic: one clear deliverable, one commit, one rollback boundary. 'All authentication features' is a feature, not a task. Decomposing to atomic items means each concern gets its own commit: when OAuth breaks, only the OAuth commit is reverted — JWT, MFA, and session management remain intact. Atomic decomposition is the prerequisite for surgical rollback."
        },
        {
          id: 19,
          question: "A teammate reviews your spec and says 'The Context section is great — three pages of background, user research, and competitive analysis.' But the Constraints section is two lines and the Implementation Checklist has four vague items. The AI output consistently misses requirements. What's the spec problem?",
          options: {
            A: "The Context section is too detailed — delete it",
            B: "Inverted signal-to-noise ratio: three pages of context that doesn't change implementation decisions, two lines of constraints that determine every implementation decision. Compress Context to essentials ('Users upload documents for legal review — accuracy and auditability are critical'). Expand Constraints to specific, verifiable requirements.",
            C: "The AI needs more context to work effectively",
            D: "Add more background research to the Context section"
          },
          correct: "B",
          explanation: "Signal-to-noise ratio: Context matters for AI judgment calls at ambiguous decision points, but extensive background that doesn't affect implementation wastes context window. Constraints and Implementation Checklist are signal — they directly determine what code gets written. A spec where 90% is context and 10% is constraints produces AI that understands the WHY but has no clear WHAT or HOW NOT TO. Balance: concise context, comprehensive constraints."
        },
        {
          id: 20,
          question: "You write a spec and ask AI to implement it. The AI says 'Implementation complete!' and shows code. You review and notice the AI made a reasonable-looking assumption about the database schema that differs from what you intended. Which spec section was insufficiently specified, and what would have prevented this?",
          options: {
            A: "The Implementation Checklist needed more items",
            B: "The Reference Architecture section was missing the schema definition. If the schema matters for the implementation, it must be specified: actual table names, column types, and relationships. 'Use a database' is insufficient; 'Use the `documents` table with columns: id UUID PK, owner_id FK to users, content_type VARCHAR, uploaded_at TIMESTAMP' leaves nothing to assume.",
            C: "The Context section should have mentioned the database",
            D: "The AI should have asked for clarification before implementing"
          },
          correct: "B",
          explanation: "The Reference Architecture section must capture all structural decisions that the AI cannot safely assume: existing table names, schema constraints, API contracts, integration points. 'Use a database' is a direction; the actual schema is a structural requirement. The rule: if the AI getting a structural detail wrong would create rework, it belongs in Reference Architecture. The spec eliminates guessing at every decision point that matters."
        },
        {
          id: 21,
          question: "What are the four parts of the SDD specification template in correct order?",
          options: {
            A: "Goals, Constraints, Context, Implementation Checklist",
            B: "Context, Goals/Constraints, Reference Architecture, Implementation Checklist",
            C: "Research Summary, Technical Design, Test Plan, Implementation Tasks",
            D: "Problem, Solution, Timeline, Acceptance Criteria"
          },
          correct: "B",
          explanation: "The 4-part spec template: 1) Context (why this is being built, what problem it solves), 2) Goals/Constraints (what must be achieved and what must not happen), 3) Reference Architecture (structural approach and key technical decisions), 4) Implementation Checklist (each checkbox becomes one subagent task). All four parts are required for a specification that produces reliable AI implementation."
        },
        {
          id: 22,
          question: "What distinguishes a signal-dense specification from a noise-heavy one?",
          options: {
            A: "Signal-dense specs are shorter; noise-heavy specs are longer",
            B: "Signal-dense specs contain only information that directly changes an implementation decision; noise-heavy specs contain background, motivation, and context that does not affect what the AI actually builds",
            C: "Signal-dense specs use bullet points; noise-heavy specs use prose",
            D: "Signal-dense specs are written by senior developers; noise-heavy specs by juniors"
          },
          correct: "B",
          explanation: "Signal density measures how much of the specification actually influences implementation decisions. Every constraint, every technical decision, every checklist item is signal. Background explaining why the company decided to build this feature, historical context about the previous approach, and motivational framing are noise — they read well but do not change a single line of implementation. Signal-dense specs maximize ratio of implementation-influencing content."
        },
        {
          id: 23,
          question: "What makes a specification an anti-pattern when its success criteria are vague?",
          options: {
            A: "Vague success criteria make the specification too long",
            B: "Without specific, measurable success criteria, the AI cannot determine when the implementation is actually complete and defaults to whatever it considers reasonable",
            C: "Vague success criteria are rejected by code review tools",
            D: "Success criteria can never be vague; the term itself implies specificity"
          },
          correct: "B",
          explanation: "Vague success criteria like 'should be fast' or 'should be secure' are anti-patterns because they give the AI no objective target. The AI must guess what 'fast' means and will guess differently each session. Specific success criteria like 'must respond in under 200ms at p95' or 'must use bcrypt with cost factor 12' are unambiguous targets the AI can implement toward and verify against."
        },
        {
          id: 24,
          question: "Why must a specification written for AI be more explicit than one written for a human developer?",
          options: {
            A: "AI reads faster than humans so needs more content to stay engaged",
            B: "Human developers can infer context, organizational knowledge, and unstated conventions; AI has only what is written and will invent the rest",
            C: "AI tools have technical limitations that require more structured input",
            D: "More explicit specifications are always better regardless of the audience"
          },
          correct: "B",
          explanation: "Audience alignment for AI-facing specs: a human developer can ask a colleague, check Slack history, or infer from code conventions. AI has none of these fallbacks — it works from the specification alone, and anything not specified is an opportunity for hallucination. What a human would consider over-specified (stating that password hashing uses bcrypt with cost 12) is appropriately explicit for an AI that must not guess these details."
        },
        {
          id: 25,
          question: "How does the 'spec as external memory' principle apply in practice?",
          options: {
            A: "The specification is backed up to external cloud storage for redundancy",
            B: "Any new session starting with the specification reference has complete project context without conversation history, enabling fresh sessions to implement precisely without re-establishment overhead",
            C: "External memory refers to additional context files linked from the main spec",
            D: "The spec is stored externally so that multiple AI instances can access it simultaneously"
          },
          correct: "B",
          explanation: "In practice, 'spec as external memory' means the specification contains everything an implementation session needs. 'Implement @docs/spec.md' is a complete instruction — the session has full context without any prior conversation. New team members, new AI instances, and new sessions all start from the same understanding. The spec eliminates the dependency on conversation history and distributed human memory."
        },
        {
          id: 26,
          question: "What role does the Implementation Checklist serve beyond listing what to build?",
          options: {
            A: "It is a legal document enumerating all contractual deliverables",
            B: "Each checkbox becomes an atomic subagent task with a natural commit boundary, structuring the Implementation phase directly from the specification",
            C: "It is used by project managers to track development velocity",
            D: "It serves as the test plan, with each item corresponding to one test case"
          },
          correct: "B",
          explanation: "The Implementation Checklist is the bridge between specification and implementation. Each checkbox is designed to become exactly one subagent task: specific enough to delegate, small enough to complete in 5-15 minutes, and naturally ending in one atomic commit. The spec's checklist IS the implementation plan — the main agent reads the checklist, creates tasks from it, and delegates each to a fresh subagent."
        },
        {
          id: 27,
          question: "What does the Reference Architecture section of a specification provide?",
          options: {
            A: "Links to reference documentation for all dependencies",
            B: "Approved patterns, libraries, conventions, and structural decisions that constrain how the implementation must be organized",
            C: "A comparison of multiple architectural approaches with their tradeoffs",
            D: "Performance benchmarks from reference implementations at other companies"
          },
          correct: "B",
          explanation: "The Reference Architecture section gives the AI the skeleton before it builds the body. It specifies: which patterns are approved (REST, not GraphQL), which libraries must be used (the team's existing auth library, not a new one), which conventions must be followed (thin controllers, business logic in services), and which structural decisions have been made. This prevents the AI from making architectural choices that contradict the established system."
        },
        {
          id: 28,
          question: "What should the Goals section of a specification contain?",
          options: {
            A: "The long-term business goals the product aims to achieve",
            B: "Measurable outcomes that define what success looks like when the implementation is complete",
            C: "The team's development goals for the sprint",
            D: "A motivational statement about why the feature matters"
          },
          correct: "B",
          explanation: "The Goals section defines measurable success: what must be true when the implementation is complete. Not 'improve user experience' (unmeasurable) but 'user can reset their password via email in under 30 seconds' (measurable). Not 'make the app faster' but 'API endpoints return in under 200ms at p95 with 100 concurrent users' (measurable). Goals provide the objective criteria for verifying that the implementation is complete."
        },
        {
          id: 29,
          question: "What does the Constraints section of a specification define?",
          options: {
            A: "The technical constraints of the programming language being used",
            B: "What must NOT be done, the explicit boundaries of scope, and requirements that limit or restrict the implementation space",
            C: "Constraints on team members' time and resources",
            D: "Legal constraints imposed by external regulations"
          },
          correct: "B",
          explanation: "The Constraints section defines the solution space boundaries: what must not happen, what the implementation cannot do, and what the scope is limited to. Constraints include prohibitions (must not store raw passwords), scope limits (this feature must not require a database migration), environmental requirements (must work in Node 18), and performance limits (must not exceed 100ms response time). Constraints prevent the AI from taking shortcuts or expanding scope."
        },
        {
          id: 30,
          question: "What is the '80/20 rule' for specification value, and which two elements provide 80% of the value?",
          options: {
            A: "80% of value comes from the Context section and Reference Architecture",
            B: "80% of specification value comes from the Constraints section and measurable Success Criteria, which directly determine what the AI builds and how you verify it is done",
            C: "80% of value comes from the Implementation Checklist and Context",
            D: "80% of value comes from having any written specification versus having none"
          },
          correct: "B",
          explanation: "The 80/20 specification rule: Constraints (what must not happen, scope boundaries) and measurable Success Criteria (how you know it is done) provide 80% of the specification's value. Constraints prevent scope creep and implementation overreach. Success criteria make 'done' objective and verifiable. Context and Reference Architecture provide the remaining 20%. A minimal spec with just these two elements is dramatically more effective than a vague spec with none of them."
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
          question: "You write a spec for a 'team collaboration feature' that says 'team members can share documents and comment on them.' You hand it to AI for implementation without refinement. The AI builds a system where anyone on the internet can view and edit documents. Which ambiguity category from the Refinement phase would have caught this, and what question should have been asked?",
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
          question: "During refinement of a spec for an e-commerce checkout, you ask about edge cases. The stakeholder reveals: 'Oh, we need to handle partial payments — sometimes a user's gift card doesn't cover the full amount, so they need to pay the remainder with a credit card.' This wasn't in the original spec. What does this scenario demonstrate about the Refinement phase?",
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
          question: "You're refining a spec for a content moderation system. The AI conducting the interview asks you 12 questions at once: 'Who are the moderators? What content types need moderation? What's the review SLA? What happens for appeals? Should there be an audit log? What about automated filtering? ...' You feel overwhelmed and give shallow answers to most questions. What refinement pattern is being violated?",
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
          question: "You write a lightweight spec for a simple 'add dark mode toggle' feature. The spec has: Task (one-liner), Constraints (don't break existing themes, respect OS preference), and Success Criteria (toggle persists, all pages render correctly in dark mode). During refinement, you realize there are no hidden ambiguities — the constraints are obvious, edge cases are minimal, and success is self-evident. What should you do?",
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
          question: "A team refines a spec for a real-time chat application. During the Success Criteria interview, they agree: 'Messages should be delivered quickly.' During the Technical Constraints interview, they reveal: 'Our users are in regions with unreliable internet.' These two facts together expose a gap. What success criteria should the refined spec specify?",
          options: {
            A: "'Messages should be delivered in under 100ms' — fast delivery is the goal",
            B: "'Messages display optimistic UI within 200ms, show delivery status (sending/sent/delivered/failed), queue offline messages for retry when connectivity returns, and notify users of failed deliveries with a retry option' — measurable criteria that account for the unreliable connectivity constraint",
            C: "'Messages should use WebSocket for real-time delivery' — this is a technical constraint",
            D: "'The chat should work like WhatsApp' — this is a clear success criterion"
          },
          correct: "B",
          explanation: "The refinement interview connected two facts: 'quick delivery' (success criteria) + 'unreliable internet' (technical constraint) = the spec needs offline-tolerant design. Vague 'delivered quickly' becomes measurable: optimistic UI timing, delivery status indicators, offline queuing, and failure recovery. This is refinement at its best — surfacing the interaction between criteria and constraints to produce a spec that handles real-world conditions."
        },
        {
          id: 16,
          question: "During a Refinement interview for a data export feature, you ask about the Audience: 'Who will use this export?' The stakeholder says 'Everyone.' You push further: 'Who is everyone — admins, regular users, all registered users?' They reveal: 'Only users who have been verified and have active subscriptions.' This changes the scope significantly. What category surfaced this?",
          options: {
            A: "Technical Constraints — only verified users can access the database",
            B: "Audience/Stakeholder — pressing beyond the initial 'everyone' answer revealed the specific qualifying criteria (verified + active subscription) that defines the actual user population. This changes authentication checks, UI visibility, and error messaging.",
            C: "Success Criteria — more users using the feature means more success",
            D: "Edge Cases — unverified users are an edge case"
          },
          correct: "B",
          explanation: "Audience/Stakeholder refinement is about drilling past surface answers to specific qualifying criteria. 'Everyone' is a non-answer that forces AI to assume the broadest access. Pressing reveals: verified + active subscription = specific checks needed at the API level, specific UI visibility rules (hide for non-subscribers), and specific error responses (401 for unverified, 403 for inactive subscription). A one-question refinement prevents multiple implementation assumptions."
        },
        {
          id: 17,
          question: "During Refinement of a real-time collaboration feature, you ask about Success Criteria. The team initially says: 'Users can edit documents together.' After the ask_user_question process, they refine to: 'Changes appear for collaborators within 500ms, conflict resolution uses last-writer-wins, up to 50 simultaneous editors per document, 99.9% uptime.' What did Refinement achieve?",
          options: {
            A: "It added unnecessary complexity to a simple feature",
            B: "It converted subjective satisfaction ('users can edit together') into objective, measurable criteria. Each refined criterion — latency threshold, conflict strategy, scale limit, uptime target — directly determines architecture choices that the original phrase left completely open.",
            C: "The original criterion was sufficient — the team over-specified",
            D: "Refinement should have asked about implementation technology, not success metrics"
          },
          correct: "B",
          explanation: "This is Success Criteria refinement at its best: 'can edit together' = zero architectural guidance. 500ms latency = WebSocket (not polling). Last-writer-wins = no conflict UI needed. 50 simultaneous editors = specific concurrency architecture. 99.9% uptime = infrastructure requirements. Each measurable criterion eliminates a design decision that would otherwise be guessed during implementation. 'Done' goes from subjective to objectively testable."
        },
        {
          id: 18,
          question: "You refine a spec for a notification system. After the interview, you realize the scope is impossible: the stakeholder wants push notifications for iOS and Android, email, SMS, and Slack — all within a 2-week sprint with one developer. What should the Refinement phase produce in this situation?",
          options: {
            A: "A spec with all five notification channels as required",
            B: "An updated spec with explicit scope reduction: negotiate which 1-2 channels are required for MVP, move others to future sprints with explicit 'out of scope' documentation. Refinement surfaces impossible scope before implementation commits to it.",
            C: "A refusal to continue the project due to unrealistic scope",
            D: "Proceed with full scope and explain limitations after implementation"
          },
          correct: "B",
          explanation: "Refinement surfaces impossible scope before implementation locks it in. When the interview reveals requirements that exceed sprint capacity, the correct output is scope negotiation — not silent acceptance or project abandonment. The refined spec documents: 'MVP (this sprint): Email notifications only. Future sprint: Push notifications (iOS + Android). Backlog: SMS, Slack.' Explicit 'out of scope' declarations prevent the team from building to wrong expectations."
        },
        {
          id: 19,
          question: "You're using the ask_user_question pattern for Refinement. You ask one question about authentication scope and receive a clear, unambiguous answer. You then have 15 more potential ambiguities. Should you ask all 15 in the next message?",
          options: {
            A: "Yes — get all ambiguities resolved at once for efficiency",
            B: "No — continue asking one targeted question at a time. Each answer often resolves multiple related ambiguities or changes what the next question should be. Asking 15 at once guarantees shallow answers; asking one at a time enables depth and follow-up.",
            C: "Yes — stakeholders prefer to answer questions in batches",
            D: "Skip the remaining 15 — one resolved ambiguity is enough"
          },
          correct: "B",
          explanation: "The ask_user_question pattern is sequential by design: one question → incorporate answer → determine next question. Why: answers often resolve multiple related ambiguities ('only verified users' resolves the authentication question AND the error handling question for unverified users). Each answer also shifts context — question 5 may become irrelevant after question 2's answer. Batching 15 questions produces 15 shallow answers; sequential questioning produces 5-8 deep answers that resolve 15 issues."
        },
        {
          id: 20,
          question: "You complete Refinement of a spec for a dark mode toggle feature. The interview reveals: one boolean user preference, persists to localStorage, system default falls back if not set. No hidden ambiguities, no conflicting stakeholder views, no complex edge cases. The refined spec is 8 lines. What does this outcome indicate about the feature and subsequent steps?",
          options: {
            A: "Refinement failed — 8 lines is too short for a valid spec",
            B: "This is the 'expand vs. accept' guidance in practice: when Refinement reveals no hidden complexity, the lightweight spec is sufficient. The 8-line spec is complete and production-ready. Proceed directly to Implementation without expanding to a full 4-part spec — the overhead isn't justified by a feature this contained.",
            C: "You should run Refinement again to find hidden complexity",
            D: "The spec should be expanded to at least 50 lines for completeness"
          },
          correct: "B",
          explanation: "Refinement's purpose is to surface hidden complexity, not to create complexity. When the interview reveals a feature is genuinely simple (one boolean, known behavior, minimal edge cases), the lightweight spec is the right output. 'Expand vs. accept': if writing and refining the spec revealed no complexity, there's no hidden complexity to spec. Forcing a 50-line spec for a localStorage toggle wastes time on overhead that adds zero implementation value."
        },
        {
          id: 21,
          question: "What are the five ambiguity categories used in the Refinement interview process?",
          options: {
            A: "Budget, Timeline, Quality, Scope, Risk",
            B: "Audience/Stakeholder, Scope/Boundaries, Success Criteria, Technical Constraints, Edge Cases",
            C: "Functional, Non-functional, Security, Performance, Accessibility",
            D: "User, Business, Technical, Operational, Regulatory"
          },
          correct: "B",
          explanation: "The five ambiguity categories for systematic refinement: 1) Audience/Stakeholder (who exactly uses this and what are their roles?), 2) Scope/Boundaries (what is explicitly in and out of scope?), 3) Success Criteria (how will you objectively know it is done correctly?), 4) Technical Constraints (what existing systems, laws, or limitations apply?), 5) Edge Cases (what happens in unusual but possible scenarios?). Together these categories cover the full space of common specification ambiguities."
        },
        {
          id: 22,
          question: "What is the ask_user_question pattern in Refinement?",
          options: {
            A: "A database query pattern for retrieving user preferences",
            B: "The discipline of asking exactly one targeted question at a time, waiting for the answer, incorporating it into the spec, then asking the next question",
            C: "A UI pattern for collecting structured input from users",
            D: "A method of generating a comprehensive list of all questions before asking any of them"
          },
          correct: "B",
          explanation: "The ask_user_question pattern disciplines the interview process to one question at a time. This is not arbitrary — it produces better answers. When a stakeholder focuses on one question, they think deeply and answer precisely. Each answer often resolves multiple related ambiguities and changes what the next question should be. Asking 15 questions at once produces 15 shallow answers; asking sequentially produces deeper, more actionable responses."
        },
        {
          id: 23,
          question: "What is the interview checklist in the Refinement phase designed to ensure?",
          options: {
            A: "That the interview lasts exactly 30 minutes",
            B: "That every relevant ambiguity category is systematically probed rather than leaving gaps because certain categories were not considered",
            C: "That all stakeholders are interviewed in the correct order",
            D: "That the number of questions does not exceed 20"
          },
          correct: "B",
          explanation: "The interview checklist ensures systematic coverage. Without a checklist, interviewers tend to probe areas they naturally think of and miss others. The checklist ensures that Audience, Scope, Success Criteria, Technical Constraints, and Edge Cases are all investigated. A gap in any category becomes an implementation assumption that may be wrong. The checklist prevents accidental omissions."
        },
        {
          id: 24,
          question: "When should a lightweight spec be expanded to a full specification?",
          options: {
            A: "Always, because comprehensive specs always produce better results",
            B: "When the process of writing the lightweight spec reveals hidden complexity: unclear constraints, multiple valid interpretations, or significant edge cases that were not initially apparent",
            C: "When the project has a budget exceeding a certain threshold",
            D: "When the team size exceeds three developers"
          },
          correct: "B",
          explanation: "Expand when writing reveals complexity. If you start writing 'Task: add dark mode' and discover: which components need dark mode? what about user preference persistence? what about system default fallback? what about third-party components? — the lightweight spec has revealed that this is more complex than it appeared. That discovery is the signal to expand. If writing the lightweight spec is easy and complete, it is sufficient."
        },
        {
          id: 25,
          question: "What is the Refinement question for clarifying scope?",
          options: {
            A: "How many users will use this feature?",
            B: "What is explicitly OUT of scope for this implementation?",
            C: "What programming language will be used?",
            D: "What is the deadline for this feature?"
          },
          correct: "B",
          explanation: "The scope refinement question asks what is explicitly excluded. 'What is out of scope?' forces stakeholders to draw clear boundaries rather than letting scope be defined by ambiguous inclusion. Without explicit exclusions, implementers assume the broadest possible scope. When a stakeholder says 'out of scope: push notifications (email only for now)', that single answer prevents an entire feature from being built unnecessarily."
        },
        {
          id: 26,
          question: "What is the Refinement question for clarifying success criteria?",
          options: {
            A: "Who will test this feature?",
            B: "How will you objectively know this is done and done correctly?",
            C: "What happens if the feature fails in production?",
            D: "How long should this feature take to implement?"
          },
          correct: "B",
          explanation: "The success criteria question 'How will you know it is done correctly?' transforms subjective completion into objective verification. Stakeholders often have clear mental models of what success looks like but have not articulated them. 'Messages should be delivered quickly' becomes 'messages appear within 500ms' when pressed. 'Users should be able to reset their password' becomes 'user receives email within 30 seconds, link is single-use and expires in 24 hours'."
        },
        {
          id: 27,
          question: "What is the Edge Cases Refinement question for service availability?",
          options: {
            A: "How will the service be monitored?",
            B: "What should happen when the external service is unavailable?",
            C: "Which service provider will host the application?",
            D: "What is the target uptime for the service?"
          },
          correct: "B",
          explanation: "The edge case question 'What should happen when the external service is unavailable?' forces an explicit decision about failure behavior before implementation. Without this question, the AI implements only the happy path. When the external service fails, the implementation either crashes, shows a confusing error, or behaves unexpectedly. The answer — show cached data, display a friendly error, retry with backoff — becomes a specification requirement."
        },
        {
          id: 28,
          question: "Why does asking one question at a time produce better Refinement outcomes than asking all questions at once?",
          options: {
            A: "Asking one question at a time reduces the risk of overwhelming the AI",
            B: "Sequential questioning enables depth: each answer resolves multiple related ambiguities, changes what the next question should be, and allows follow-up on unexpected revelations",
            C: "One question at a time is required by the ask_user_question technical implementation",
            D: "Stakeholders have attention spans too short for multiple simultaneous questions"
          },
          correct: "B",
          explanation: "Sequential questioning produces cascading resolution. A stakeholder answering 'Who are the users?' might reveal 'only verified enterprise accounts' — which immediately resolves authentication, permissions, error messaging, and pricing display questions. The next question can now skip those resolved topics and probe deeper. Asking all 15 questions at once prevents this cascade; answering one at a time enables it."
        },
        {
          id: 29,
          question: "What does Refinement produce as its output?",
          options: {
            A: "A list of interview questions for the next Refinement session",
            B: "An updated specification with all surfaced ambiguities resolved and decisions documented, ready for the Implementation phase",
            C: "Approval signatures from all stakeholders confirming the spec is correct",
            D: "A project timeline reflecting the complexity discovered during Refinement"
          },
          correct: "B",
          explanation: "Refinement output is the updated specification. The interview surfaced ambiguities; the answers to those questions are incorporated into the spec. Constraints are clarified, success criteria are made measurable, scope is explicitly bounded, edge cases are handled. The refined spec transitions from 'what the author intended' to 'what all stakeholders agreed to build' — a small but crucial difference that prevents implementation divergence."
        },
        {
          id: 30,
          question: "How does the Refinement phase differ from the Research phase?",
          options: {
            A: "Refinement is done before Research; they are in reverse order",
            B: "Research gathers external knowledge about the problem space before specifying; Refinement interrogates the specification itself to surface hidden assumptions after the spec is written",
            C: "Research involves subagents; Refinement is done by the main agent alone",
            D: "Refinement produces research documents; Research produces specification drafts"
          },
          correct: "B",
          explanation: "Research and Refinement serve different purposes at different phases. Research gathers external knowledge (what patterns exist, what constraints apply, what options are available) before any specification is written. Refinement interrogates the written specification to find internal ambiguities and hidden assumptions. Research is about learning what to specify; Refinement is about ensuring what was specified is actually correct and complete."
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
          question: "You run the SDD implementation prompt for a spec with 8 checklist items. After task 3 completes and commits, you notice the subagent made a wrong assumption about the data format that will affect tasks 5, 6, and 7. With SDD's task-based approach, what is the most efficient recovery strategy?",
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
          question: "You're implementing a spec with 14 tasks. The main agent delegates task 1 to a subagent, which completes and commits. Then it delegates task 2. But task 2's subagent keeps failing its commit because the pre-commit hook (typecheck + lint + test-run) rejects its output. According to the backpressure pattern, what should happen?",
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
          question: "Your spec has 6 tasks. Tasks 1 and 2 have no dependencies. Task 3 depends on both 1 and 2. Tasks 4 and 5 depend on task 3. Task 6 depends on tasks 4 and 5. If each task takes 5 minutes, what is the minimum wall-clock time with parallel execution, and which tasks can run simultaneously?",
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
          question: "You start an SDD implementation session at 2 PM. At 2:20 PM, your computer crashes. You restart at 3 PM on a different machine. According to the 'Agent Amnesia' concept, how do you resume work without losing progress?",
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
          question: "You have a spec with 3 checklist items for a simple blog feature: '[ ] Create Post model', '[ ] Add list-posts API endpoint', '[ ] Add create-post API endpoint.' You're tempted to use the full task-based implementation with subagents. According to the 'when to use task-based' guidance, what should you do?",
          options: {
            A: "Always use task-based implementation — it's the most rigorous approach",
            B: "Use a simpler approach — the spec has only 3 items (below the 5+ threshold), the work is mostly sequential (model before endpoints), and the entire implementation likely fits in a single commit. Task-based overhead isn't justified for this scope.",
            C: "Use task-based only for the Post model, then vibe code the endpoints",
            D: "Split the spec into more tasks to justify task-based implementation"
          },
          correct: "B",
          explanation: "The guidance says: use task-based when 5+ distinct items, parallelizable work, rollback boundaries needed, or implementation >30 minutes. This spec has 3 items (below threshold), sequential dependencies (model before endpoints), and likely fits in one commit. The simpler approach — main agent implements directly from the spec — is more efficient. Task-based would add orchestration overhead without proportional benefit."
        },
        {
          id: 16,
          question: "You start an SDD implementation at 10 AM with 12 tasks. By 11:30 AM, tasks 1-6 are done with commits. You step away. At 2 PM, you return to a different machine. Without any conversation history, how do you resume exactly where you left off?",
          options: {
            A: "You cannot resume — you must restart from task 1",
            B: "Read @docs/spec.md (what to build) and run TaskList (see which tasks are completed/pending). Git log shows the 6 completed commits. Start the implementation prompt again — the main agent picks up from task 7 using the persisted spec and task state.",
            C: "Contact support to restore the session",
            D: "You need the original machine to access session memory"
          },
          correct: "B",
          explanation: "Agent Amnesia solution: the spec document and TaskList persist on disk across machine changes, session restarts, and crashes. A new session reads: @docs/spec.md (full context) + TaskList (completed/pending status) + git log (what's already committed). The main agent extracts remaining tasks and continues from task 7 without any conversation history. This is exactly why SDD externalizes state to files — machine independence is a feature."
        },
        {
          id: 17,
          question: "You're implementing a spec with 10 tasks. Task 4 requires building a shared utility that tasks 7, 8, and 9 all depend on. If you run all tasks in parallel from the start, what happens?",
          options: {
            A: "All tasks complete faster due to parallelism",
            B: "Tasks 7, 8, and 9 will fail because the shared utility from task 4 doesn't exist yet. Dependencies must be respected: run tasks 1-4 sequentially (or tasks 1-3 in parallel with task 4 last), THEN run tasks 7, 8, 9 in parallel once task 4's utility is available.",
            C: "Parallel execution automatically handles dependencies",
            D: "Tasks 7, 8, 9 will run slower but eventually complete"
          },
          correct: "B",
          explanation: "Dependency-aware parallelism: independent tasks (no dependencies on each other) can run simultaneously. Tasks with dependencies (7, 8, 9 depend on 4) must wait. The correct execution: analyze the dependency graph first, then batch tasks by dependency level. Level 1: tasks with no deps (can parallel). Level 2: tasks that depend on Level 1 completions. Task decomposition must include dependency identification — not just listing tasks but ordering them."
        },
        {
          id: 18,
          question: "A subagent successfully completes task 6 and commits. The main agent then tries to delegate task 7, but task 7's subagent needs context from tasks 3 and 4 (not just task 6). What does the SDD isolation model say about how to handle this?",
          options: {
            A: "The subagent for task 7 should read the main agent's conversation history",
            B: "The main agent delegates task 7 with the relevant spec context for that task explicitly included — the subagent does NOT receive conversation history but DOES receive the spec sections relevant to its work, which captures the decisions from tasks 3 and 4.",
            C: "Tasks 3 and 4 must be re-run to provide context",
            D: "Task 7 should be merged with tasks 3 and 4 into one big task"
          },
          correct: "B",
          explanation: "Subagent isolation model: each subagent starts fresh with NO prior conversation history (prevents context pollution). But the spec document captures the relevant decisions and outcomes from prior tasks. The main agent delegates: 'Complete task 7 using @docs/spec.md section 3 and the schema established in task 4's commit.' The spec IS the persistent context — not conversation history. Good specs make each task independently executable."
        },
        {
          id: 19,
          question: "Your spec has 8 tasks. Tasks 1-5 complete successfully with commits. Task 6's subagent fails its pre-commit hook (TypeScript error) three times in a row. The main agent keeps retrying the same approach. What should happen next?",
          options: {
            A: "Disable the pre-commit hook to force the commit through",
            B: "The main agent should escalate: stop retrying the same approach, analyze the TypeScript error, update the spec with the discovered constraint, and either retry task 6 with a corrected approach or pause and ask for human input. Three consecutive failures signal an unknown constraint.",
            C: "Skip task 6 and proceed to task 7",
            D: "Start the entire implementation from scratch"
          },
          correct: "B",
          explanation: "Backpressure + escalation protocol: three identical failures on the same task mean the current approach is wrong, not just slow. The correct response: stop retrying, read the TypeScript error (P7: Observability), identify what constraint the spec missed (missing type definition? incompatible library versions?), update the spec with the discovered constraint, then retry with a corrected approach. Repeated identical attempts violate P4 (try a different atomic approach). Never bypass quality gates."
        },
        {
          id: 20,
          question: "You're tempted to use task-based SDD implementation for a quick 2-task fix: 'Update config value A' and 'Update config value B.' Your colleague says this doesn't need subagent delegation. According to the task-based implementation guidance, who is right?",
          options: {
            A: "You are right — always use task-based for multiple tasks",
            B: "Your colleague is right — 2 tasks (below the 5+ threshold), sequential, likely a single commit scope. Task-based adds orchestration overhead (TaskCreate, delegation, per-task commits) without proportional benefit. The main agent should implement directly from the spec.",
            C: "It depends on the complexity of each config value",
            D: "Use task-based only if the two config values are in different files"
          },
          correct: "B",
          explanation: "The task-based heuristic: use when 5+ items, parallelizable work, rollback granularity needed, or >30 minutes. Two config value updates fail all four criteria: under the threshold, inherently sequential, fits in one commit, takes under 5 minutes. Adding TaskCreate/TaskUpdate/subagent delegation overhead to a 5-minute fix is the definition of over-engineering. Use the right tool for the job — task-based is a power tool, not a default."
        },
        {
          id: 21,
          question: "What is the core implementation prompt pattern for SDD task-based implementation?",
          options: {
            A: "Read the spec and write all the code in one response",
            B: "'Implement @docs/my-spec.md. Use the task tool and each task should only be done by a subagent so that context is clear. After each task do a commit before you continue. You are the main agent and your subagents are your devs.'",
            C: "Generate a plan for implementing the spec, then ask for approval",
            D: "Implement each section of the spec one file at a time"
          },
          correct: "B",
          explanation: "The core SDD implementation prompt is specific and complete: reference the spec with @, instruct to use the task tool, require one subagent per task for context isolation, require a commit after each task, and establish the main agent and subagent roles. This single prompt triggers the complete task extraction, delegation, commit, and progress-tracking cycle."
        },
        {
          id: 22,
          question: "What are the purposes of the TaskCreate, TaskUpdate, TaskList, and TaskGet tools?",
          options: {
            A: "They are project management tools for human developers to track their work",
            B: "TaskCreate records new tasks extracted from the spec; TaskUpdate changes task status; TaskList shows all tasks and their current status; TaskGet retrieves a specific task's details",
            C: "These tools connect to external project management systems like Jira",
            D: "They are used exclusively by subagents, not the main agent"
          },
          correct: "B",
          explanation: "The task tools are the main agent's tracking system: TaskCreate records each task extracted from the spec with its dependencies and description. TaskUpdate moves tasks through statuses (pending, in-progress, completed, failed). TaskList shows the full picture of what is done and what remains. TaskGet retrieves specific task details for delegation. Together these tools make task progress persistent across sessions, solving Agent Amnesia."
        },
        {
          id: 23,
          question: "Why does each subagent receive fresh context in task-based implementation?",
          options: {
            A: "Fresh context is cheaper computationally than shared context",
            B: "Context isolation prevents errors and wrong assumptions from earlier tasks from contaminating the implementation of later tasks",
            C: "Fresh context is required by the task tool technical specification",
            D: "Subagents cannot access shared context due to AI architecture limitations"
          },
          correct: "B",
          explanation: "Fresh context per subagent is the key to preventing context pollution. If the main agent session accumulates errors, wrong assumptions, and failed attempts, these contaminate subsequent tasks. A fresh subagent starts with only the relevant spec context for its task — no prior failures, no accumulated noise, no inherited wrong assumptions. If Task 1 makes an error, Task 2's fresh subagent cannot inherit it."
        },
        {
          id: 24,
          question: "What is the backpressure pattern in SDD implementation?",
          options: {
            A: "Slowing down implementation when the server is under load",
            B: "Pre-commit hooks that run typecheck, lint, and tests before accepting each commit, automatically rejecting broken code and requiring the subagent to fix issues before proceeding",
            C: "Pushing back on requirements that are too complex to implement",
            D: "Database connection pooling to prevent request overload"
          },
          correct: "B",
          explanation: "The backpressure pattern uses pre-commit hooks as quality gates. When a subagent attempts to commit its task completion, the hook automatically runs quality checks (typecheck, lint, test). If any check fails, the commit is rejected and the subagent must fix the issues before the commit is accepted. This prevents broken code from accumulating across tasks and ensures each committed task is working code."
        },
        {
          id: 25,
          question: "What were the results from the alexop.dev SDD implementation case study?",
          options: {
            A: "45 tasks, 45 commits, 6 hours, 2 rollbacks",
            B: "45 minutes total, 14 tasks completed, 14 commits (one per task), 71% context window usage, and 0 rollbacks needed",
            C: "2 hours, 8 tasks, 8 commits, 5 rollbacks",
            D: "30 minutes, 10 tasks, 10 commits, 95% context usage"
          },
          correct: "B",
          explanation: "The alexop.dev case study demonstrated SDD task-based implementation results: 45 minutes total for a complete website implementation, 14 atomic tasks from the spec checklist, 14 commits creating a perfect granular history, 71% context window usage (not overwhelmed), and zero rollbacks needed (the spec prevented surprises). This real-world data shows what well-structured SDD implementation produces."
        },
        {
          id: 26,
          question: "What problem does Agent Amnesia describe and how does SDD solve it?",
          options: {
            A: "AI models forget their instructions; SDD solves this by repeating instructions",
            B: "Starting a new session mid-implementation loses all progress; SDD solves this by persisting the task list and spec on disk so any new session can immediately resume from where the previous one stopped",
            C: "AI agents forget which programming language to use; SDD specifies this in CLAUDE.md",
            D: "Subagents forget their task assignments; SDD solves this by repeating assignments"
          },
          correct: "B",
          explanation: "Agent Amnesia is the problem of losing implementation context when a session ends or crashes. Without persistence, a new session starting mid-implementation has no knowledge of what was completed, what decisions were made, or what the next step is. SDD solves this through the task list (TaskList shows what is done and pending) and the spec file (@docs/spec.md is the complete context). A new session reads both and continues without loss."
        },
        {
          id: 27,
          question: "What is context pollution in the context of long implementation sessions?",
          options: {
            A: "Environmental variables leaking into source code",
            B: "Accumulated errors, wrong assumptions, and failed attempts in a single long session that bias subsequent decisions and cause compounding implementation problems",
            C: "Noise in the training data that affects model quality over time",
            D: "Irrelevant files being read into the context window during implementation"
          },
          correct: "B",
          explanation: "Context pollution happens in long sessions: an early wrong assumption about data format shapes validation at minute 10, which shapes API design at minute 25, which shapes the database schema at minute 40. When the wrong assumption is discovered at minute 55, 45 minutes of work built on it must be reconsidered. Fresh subagent contexts per task prevent this — each task's wrong assumptions are contained to that task's commit and can be reverted independently."
        },
        {
          id: 28,
          question: "When should task-based implementation be used rather than simpler approaches?",
          options: {
            A: "Always — task-based implementation is always superior",
            B: "When the spec has 5 or more distinct items, work can be parallelized, rollback boundaries are important, or the implementation is expected to take more than 30 minutes",
            C: "Only for enterprise projects with dedicated project managers",
            D: "Only when working in a team rather than individually"
          },
          correct: "B",
          explanation: "Task-based implementation criteria: 5+ distinct checklist items (justifies orchestration overhead), parallelizable work (independent tasks benefit from simultaneous subagent execution), rollback boundaries needed (atomic commits per task enable surgical reversion), or implementation exceeding 30 minutes (long enough that context pollution is a risk). For smaller scope — 1-3 items, sequential, fits one commit — simpler approaches are more efficient."
        },
        {
          id: 29,
          question: "How does parallel execution work in task-based implementation?",
          options: {
            A: "All tasks run at the same time regardless of their dependencies",
            B: "Independent tasks (with no dependency on each other) are delegated to multiple subagents simultaneously, completing in the wall-clock time of the longest task rather than the sum of all tasks",
            C: "Parallel execution is automatic and cannot be controlled by the main agent",
            D: "Parallel execution requires special hardware with multiple processors"
          },
          correct: "B",
          explanation: "Parallel execution in task-based implementation: the main agent identifies which tasks have no dependencies on each other, then delegates them simultaneously to multiple subagents. If Task 3 and Task 4 are independent and each takes 5 minutes, parallel execution completes both in 5 minutes. Sequential execution would take 10 minutes. For large specifications with many independent tasks, this parallelism compounds into significant time savings."
        },
        {
          id: 30,
          question: "What is the recommended size guidance for individual tasks in task-based implementation?",
          options: {
            A: "Each task should represent a full day of work",
            B: "Each task should be sized to take 5-15 minutes, representing one focused, verifiable piece of work that produces one atomic commit",
            C: "Each task should be as small as possible, even if that means splitting a single function",
            D: "Task size depends entirely on the complexity of the spec section"
          },
          correct: "B",
          explanation: "The 5-15 minute task size guideline balances focus and momentum. Tasks under 5 minutes may be too granular (too many orchestration round-trips for trivial work). Tasks over 15 minutes risk context pollution within the subagent session and produce monolithic commits that are harder to review and revert. At 5-15 minutes, each task is focused enough for fresh context to maintain quality and small enough to commit atomically."
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
          question: "Your production server goes down at 3 AM. The error log shows a null pointer exception in the payment processing module. You need to fix it ASAP. According to the Decision Framework, should you use SDD?",
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
          question: "You're asked to add a 'forgot password' link to the login page that redirects to an existing password reset page. The change affects one file (login.tsx) and takes 2 minutes. Your colleague suggests writing a lightweight spec first. Applying the decision heuristic, what should you do?",
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
          question: "Your startup is building a new social media feature. Nobody on the team knows what users will actually want — you need to experiment with different interaction patterns, see what engages users, and iterate rapidly. After 3 weeks of experimentation, you discover a pattern that users love. What does the Decision Framework say about your approach?",
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
          question: "A junior developer argues that SDD is 'just Waterfall with extra steps' and wants to skip it for a major refactoring affecting 20 files across 4 modules. Using the Decision Framework and the critique counterpoints, how do you respond?",
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
          question: "You're building a feature that touches 8 files, uses a library you've never worked with, and has requirements that the product manager described in a 30-minute meeting but never documented. Your teammate says 'let's just start coding and figure it out as we go.' Applying the decision heuristic variables, what's the right call?",
          options: {
            A: "Start coding — the teammate's approach is faster for small teams",
            B: "Use SDD — all three triggers are present: files_affected > 5 (8 files), requirements_unclear (undocumented verbal description), and learning_new_tech (unfamiliar library). The decision heuristic says: IF any of these → Use SDD. The research phase alone will save hours by surfacing library constraints before you specify.",
            C: "Use a lightweight spec but skip the research phase",
            D: "Use SDD only for the library learning part, vibe code the rest"
          },
          correct: "B",
          explanation: "This scenario hits all three SDD triggers simultaneously: files_affected (8 > 5), requirements_unclear (verbal description, no documentation), and learning_new_tech (unfamiliar library). Each trigger independently justifies SDD; together, they make it essential. Starting to code without research means you'll discover library constraints mid-implementation and have to redo work. The research phase compresses learning from hours to minutes via parallel subagents."
        },
        {
          id: 16,
          question: "A developer is asked to change a button's color from blue to green on one page. They open the decision framework and start evaluating: 'Is it more than 5 files? No. Is it a bug fix? No. Is it unclear requirements? No.' They conclude: skip SDD. Their colleague says 'You should at least write a lightweight spec.' Who is right?",
          options: {
            A: "The colleague — all changes need at least a lightweight spec",
            B: "The developer — a one-file, one-line CSS change with a single obvious implementation has no ambiguity and no rollback risk. Applying even a lightweight spec adds overhead without value. The decision heuristic correctly identifies this as 'skip SDD.'",
            C: "Neither — use vibe coding for UI changes",
            D: "The developer — but they should document the change in a separate file"
          },
          correct: "B",
          explanation: "The decision heuristic correctly handles obvious changes: single file, obvious solution, zero ambiguity, minimal rollback risk = skip SDD. The lightweight spec pattern is for 'judgment call' borderline cases — multiple files, some ambiguity, moderate complexity. A one-line CSS change doesn't qualify. The wisdom of SDD is knowing when NOT to use it: overhead that adds no value is waste, not rigor."
        },
        {
          id: 17,
          question: "Your team is debating whether to use SDD for a refactor that affects 25 files across 3 modules. The tech lead says 'We've done similar refactors before, so requirements are clear — skip SDD.' A developer says 'files_affected > 5 triggers SDD.' Who is right, and what does the decision framework say?",
          options: {
            A: "The tech lead — experience eliminates the need for SDD",
            B: "The developer — files_affected > 5 is an explicit SDD trigger. Past experience with similar refactors affects how quickly you write the spec, not whether you write it. 25-file cross-module refactors involve dependency interactions that benefit from a spec even when the approach is familiar.",
            C: "Both are right — this is a judgment call either way",
            D: "Skip SDD but use more detailed commit messages instead"
          },
          correct: "B",
          explanation: "files_affected > 5 is an explicit SDD trigger because multi-file changes have compounding interaction risks — even familiar refactors can have unexpected cross-module effects. Experience makes spec writing faster and the Research phase shorter (you know the codebase), but it doesn't eliminate the value of a written spec as an external reference, rollback guide, and shared team contract. The heuristic exists precisely because 'it seems clear' is not the same as 'it is clear.'"
        },
        {
          id: 18,
          question: "A developer is building a proof-of-concept integration with a new AI API they've never used. The PM says 'Use full SDD — this will eventually go to production.' The developer says 'Requirements are unknowable until I experiment — this is exploratory.' Who is right?",
          options: {
            A: "The PM — production intentions require SDD from day one",
            B: "The developer — for exploratory work where requirements can only be discovered through building, vibe coding the exploration is appropriate. The SDD guidance: 'Exploration is a phase, not an end state.' When the prototype validates an approach, THEN write a spec before production implementation.",
            C: "Both are wrong — a lightweight spec works for all phases",
            D: "The developer — SDD is never needed for AI integrations"
          },
          correct: "B",
          explanation: "The Decision Framework explicitly identifies exploratory prototypes as 'SDD is overkill' scenarios: requirements are unknowable until built. The appropriate sequence: vibe code the exploration to discover what's possible, validate the approach, THEN transition to Spec-Anchored SDD for the production version. The PM's instinct (production needs rigor) is correct in spirit but wrong in timing — rigor comes after exploration validates the approach, not before."
        },
        {
          id: 19,
          question: "You're applying the Lightweight Spec Pattern to a borderline task: migrating a database connection pool configuration from 5 connections to 50 connections across your application. The change touches 8 files (all configuration) but the change itself is straightforward. Which approach does the decision framework suggest?",
          options: {
            A: "Full 4-phase SDD — 8 files exceeds the threshold",
            B: "Lightweight spec: Task (change connection pool from 5 to 50 across all config files), Constraints (don't change application logic, preserve existing env var names), Success Criteria (all 8 config files updated, connection tests pass, no existing tests break). This provides spec benefits without full SDD overhead for a mechanical change.",
            C: "Skip SDD — configuration changes never need specs",
            D: "Only update 4 files to stay below the 5-file threshold"
          },
          correct: "B",
          explanation: "Judgment call: files_affected > 5 triggers SDD consideration, but the change is mechanical (find-and-replace a number in config files). The Lightweight Spec pattern is designed for this: Task + Constraints + Success Criteria provides 80% of spec value (prevents scope creep — don't change application logic, don't rename variables) with 20% of overhead. Full 4-phase SDD for a configuration find-and-replace adds Research and Refinement phases with no proportional value."
        },
        {
          id: 20,
          question: "A junior developer applies the SDD decision heuristic perfectly: files > 5? Yes. Requirements unclear? Yes. New tech? Yes. They conclude 'Use SDD' and proceed with the full four-phase workflow. Six months later, they've applied SDD to every task including bug fixes, typo corrections, and single-file utilities. What development has stalled?",
          options: {
            A: "Nothing — following the heuristic rigorously is always correct",
            B: "The 'Building Judgment' phase: the heuristic gives correct binary answers but real expertise is calibrating when even a triggered heuristic allows a lighter approach. Over-applying SDD to every triggered case without weighing actual complexity, team context, and time pressure prevents development of judgment-based decision making.",
            C: "They should use SDD even less — the heuristic triggers too often",
            D: "They need a more detailed heuristic with more variables"
          },
          correct: "B",
          explanation: "The heuristic is a starting point, not a replacement for judgment. A bug fix across 8 files (> 5 threshold) may still not justify full four-phase SDD if the fix is straightforward and team knows the codebase. 'Building Judgment' means developing intuition for when triggered heuristics still allow lighter approaches: weigh actual complexity (is each file a 1-line change?), team familiarity (we've done this before), urgency (production incident?), and risk (what breaks if we're wrong?). Heuristics guide; judgment decides."
        },
        {
          id: 21,
          question: "What is the SDD decision heuristic in pseudocode form?",
          options: {
            A: "IF task_is_big THEN use_SDD ELSE skip_SDD",
            B: "IF files_affected > 5 OR requirements_unclear OR learning_new_tech THEN use_SDD. ELSE IF single_file AND bug_fix THEN skip_SDD. ELSE use judgment call with lightweight spec.",
            C: "IF team_size > 3 THEN use_SDD",
            D: "IF deadline > 1_week THEN use_SDD"
          },
          correct: "B",
          explanation: "The SDD decision heuristic has three branches: the SDD trigger (any of: files > 5, unclear requirements, new tech), the clear skip (single file bug fix with known solution), and the judgment zone (everything else, try lightweight spec). The three SDD triggers each independently justify SDD; the clear skip means no SDD is needed; the judgment zone benefits from a lightweight spec that takes 10 minutes and adds significant clarity."
        },
        {
          id: 22,
          question: "For which types of tasks does SDD excel most clearly?",
          options: {
            A: "Simple bug fixes, one-line CSS changes, and single-function updates",
            B: "Large refactors (15+ files), unclear requirements, learning new libraries, team coordination across multiple developers, and legacy system modernization",
            C: "Any task that takes more than one hour",
            D: "Tasks that involve database migrations exclusively"
          },
          correct: "B",
          explanation: "SDD excels where complexity exceeds working memory: large refactors (too many files to track without a written reference), unclear requirements (research and refinement phases discover what to build), new libraries (parallel research compresses learning), team coordination (spec as shared contract), and legacy modernization (spec captures what must be preserved). These share complexity that a written spec manages better than distributed human memory."
        },
        {
          id: 23,
          question: "For which tasks is SDD considered overkill?",
          options: {
            A: "Any task that can be completed in under one hour",
            B: "Single-file bug fixes with obvious solutions, simple features with obvious implementation, exploratory prototyping, and production incidents requiring immediate action",
            C: "Tasks that involve less than five files",
            D: "Tasks where the developer has done something similar before"
          },
          correct: "B",
          explanation: "SDD is overkill when the solution is either obvious or unknowable. Single-file bug fixes have obvious solutions that the spec would not improve. Simple obvious features (add a link, change a color) have no ambiguity for the spec to resolve. Exploratory prototypes need discovery, not specification. Production incidents need immediate action, not documentation. The overhead of Research, Specification, and Refinement must be justified by the complexity it helps manage."
        },
        {
          id: 24,
          question: "What is the Lightweight Spec Pattern and what does it provide?",
          options: {
            A: "A one-page version of the full 4-part specification template",
            B: "A minimal specification with three elements: Task (one-line description), Constraints (what NOT to do), and Success Criteria (measurable outcomes), providing 80% of specification value with 20% of overhead",
            C: "A verbal specification communicated to the AI without writing",
            D: "A specification that skips the Reference Architecture section"
          },
          correct: "B",
          explanation: "The Lightweight Spec Pattern for borderline cases: Task + Constraints + Success Criteria. The Task clarifies intent (one sentence). The Constraints prevent scope creep and prohibit the most common wrong approaches. The Success Criteria make 'done' objective. These three elements together provide 80% of the value of a full 4-part specification at 20% of the writing overhead — ideal for cases that need some spec discipline but not full SDD."
        },
        {
          id: 25,
          question: "What is the heuristic for determining whether a bug fix needs SDD?",
          options: {
            A: "If the bug affects more than one user, use SDD",
            B: "If you can explain the fix in one sentence, skip SDD",
            C: "If the bug is in production, always use SDD",
            D: "If the bug was reported by a customer, use SDD"
          },
          correct: "B",
          explanation: "The one-sentence heuristic: if the bug fix can be explained completely in a single sentence, the solution is obvious enough that SDD adds no value. 'Change the comparison operator on line 47 from > to >=' is a complete, unambiguous specification that already exists in the developer's head. SDD research, specification writing, and refinement would add overhead without improving the fix."
        },
        {
          id: 26,
          question: "What is the correct handling of exploratory prototyping in the SDD framework?",
          options: {
            A: "Never explore; always write a complete spec before any code",
            B: "Use vibe coding for exploration (requirements are unknowable), but once the prototype validates an approach, stop and write a spec before building the production version",
            C: "Exploration and production are the same; continue from the prototype directly",
            D: "Exploration should use Spec-First to ensure quality from the start"
          },
          correct: "B",
          explanation: "Exploration is explicitly endorsed within SDD with a clear boundary: vibe code to discover what is possible, validate the approach, then stop. The discipline: 'Exploration is a phase, not an end state. Once you discover what works, write a specification before building the production version.' The prototype reveals requirements; the spec captures them; SDD builds the reliable production system from the spec."
        },
        {
          id: 27,
          question: "Why is SDD not 'just Waterfall,' as some critics claim?",
          options: {
            A: "SDD is digital while Waterfall was a physical process",
            B: "SDD phases are not isolated handoffs — the spec updates during implementation, tasks are atomically reversible (git revert), and discoveries during implementation can loop back to update the spec",
            C: "SDD takes less time than Waterfall",
            D: "SDD does not require any documentation unlike Waterfall"
          },
          correct: "B",
          explanation: "The Waterfall critique misunderstands SDD. In Waterfall, phases are isolated handoffs: requirements frozen before design, design frozen before implementation, with no feedback loops. In SDD, the spec is a living document that updates when implementation reveals new constraints. Tasks are atomically reversible via git revert. If a subagent discovers a spec error, the spec is updated and implementation continues from the corrected foundation — the opposite of Waterfall rigidity."
        },
        {
          id: 28,
          question: "What is the 'Double Code Review' critique of SDD and the counterpoint?",
          options: {
            A: "Critique: SDD requires two code reviewers. Counterpoint: One reviewer is sufficient.",
            B: "Critique: SDD requires reviewing both the spec and the code, doubling review effort. Counterpoint: Spec review catches design flaws before implementation, making code review faster and more focused on implementation quality.",
            C: "Critique: SDD generates duplicate code. Counterpoint: The spec prevents duplication.",
            D: "Critique: SDD requires reviewing code twice. Counterpoint: Only one review is needed."
          },
          correct: "B",
          explanation: "The Double Code Review critique argues that reviewing both spec and code is twice the work. The counterpoint: spec review catches design problems before any code is written, when changes are cheap (edit a document). Code review can then focus on implementation quality rather than architectural problems. Finding an architectural flaw in spec review costs minutes; finding it in code review costs hours of rework."
        },
        {
          id: 29,
          question: "How should practitioners build judgment about when to apply SDD?",
          options: {
            A: "Always follow the heuristic mechanically without exceptions",
            B: "Track outcomes over time, calibrate overhead against value, and recognize signals: multiple collaborators (spec as contract), low reversibility (upfront planning justified), unfamiliar domain (research phase valuable)",
            C: "Ask a senior developer for approval before each SDD decision",
            D: "Apply SDD to all tasks for one month, then to none, then compare results"
          },
          correct: "B",
          explanation: "Building judgment is an iterative process: track which projects struggled (would a spec have helped?), calibrate overhead estimates (a lightweight spec takes 10 minutes, a full spec takes 2 hours), and recognize the signals that justify SDD. Multiple collaborators needing a shared contract, low reversibility requiring upfront certainty, and unfamiliar territory where research adds value are the signals that experienced practitioners learn to recognize."
        },
        {
          id: 30,
          question: "What decision variable makes upfront planning (SDD) most justified?",
          options: {
            A: "When the team is large and needs coordination",
            B: "When reversibility is low — the cost of undoing mistakes is high, making upfront planning worth its overhead to get it right the first time",
            C: "When the deadline is far in the future, allowing time for documentation",
            D: "When the project has a large budget that can absorb overhead"
          },
          correct: "B",
          explanation: "Low reversibility is the strongest justification for upfront planning. When mistakes are easy to undo (small, isolated, well-tested), the cost of discovering them post-implementation is low. When mistakes are hard to undo (database migrations, production deployments, shared API contracts), the cost of a wrong decision compounds. SDD's upfront investment is justified precisely by the cost of the alternative: discovering the wrong approach after irreversible commitments."
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
          question: "You're doing Exercise 4.2 (Measurable vs. Vague) from the Constraints & Criteria module. Your spec says 'the search feature should be fast and accurate.' According to the exercise framework, how should you transform this?",
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
          question: "You're doing Exercise 6.2 (Atomic Task Writer) and need to decompose this vague task: 'Add user authentication.' According to the module's guidance, which decomposition is correct?",
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
          question: "You're doing Exercise 7.2 (Office Move Planner) from the Full Cycle module. Mid-way through implementation, you discover that the new office building doesn't allow server equipment on the 3rd floor — the IT infrastructure must go to the basement. This contradicts your spec's assumption. According to the SDD exercise framework, what should you do?",
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
          question: "You're assessing your performance on the SDD exercises using the Assessment Rubric. For 'Refinement depth,' you notice that in your last 3 exercises, you conducted refinement interviews but none of them changed the spec's direction — they only clarified minor wording. According to the rubric's progression, what level are you at and what's the next step?",
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
          question: "You're attempting Capstone Project A (Wedding Planner System). You start by writing a spec, but your mentor says you're skipping a critical first step. According to the 6-step SDD Framework applied to each exercise, what should you do before specifying?",
          options: {
            A: "Start executing — delegate to Claude and let it figure out the requirements",
            B: "Research — identify what must be known before specifying: How many guests? What's the budget? What venues are available? What are the couple's non-negotiables? What vendors exist in the area? What's the timeline? Research gathers the context that makes the specification grounded in reality rather than assumptions.",
            C: "Write the Implementation Checklist first, then fill in the rest of the spec",
            D: "Skip to Refinement — you can refine a spec that doesn't exist yet"
          },
          correct: "B",
          explanation: "The 6-step framework starts with Research: 'what must be known before specifying.' For a Wedding Planner, you can't specify goals, constraints, or success criteria without knowing the basics: guest count (affects venue size), budget (affects every decision), timeline (affects vendor availability), and non-negotiables (constraints that can't be compromised). Skipping research produces a spec full of assumptions that will fail during refinement or implementation."
        },
        {
          id: 16,
          question: "You complete Exercise 1.1 (Event Gone Wrong) and reverse-engineer a spec for a failed product launch. Your spec has: vague success criteria ('the launch should go well'), missing constraints ('don't exceed budget' without a number), and no implementation checklist. According to the Assessment Rubric, what level is your spec and what specific improvements are needed?",
          options: {
            A: "Advanced level — you correctly identified what went wrong",
            B: "Developing level (vague spec). Improvements: convert 'should go well' to measurable criteria (e.g., '500 signups in first week, <2% error rate on launch day'), specify the exact budget constraint ($X total across Y channels), and add an implementation checklist with atomic, verifiable items.",
            C: "Proficient level — identifying problems is the main skill",
            D: "Beginner level — you need to redo the exercise from scratch"
          },
          correct: "B",
          explanation: "Assessment Rubric: Spec Completeness progression goes from 'vague' → 'reusable with edge cases handled.' A spec with vague success criteria and missing numbers is at the 'vague' level. The improvement path: 1) Replace adjective criteria with measurable numbers, 2) Replace implicit constraints with explicit bounds ('budget: $50,000 total'), 3) Add implementation checklist (atomic, verifiable items). Each improvement moves up one level on the completeness scale."
        },
        {
          id: 17,
          question: "You complete Module 3 (The Research Phase) exercises. In each exercise, your research was shallow — you found general information but missed project-specific constraints each time. According to the Assessment Rubric's Research Quality dimension, what level are you at and what exercise targets this gap?",
          options: {
            A: "Advanced — general information is the goal of research",
            B: "Beginning/Developing level (skipped or shallow research). The target exercise: Module 3 specifically trains systematic multi-angle investigation. Retry with 3+ parallel research angles, including at least one angle dedicated to discovering constraints and incompatibilities specific to your project context.",
            C: "Proficient — constraints will be discovered during implementation",
            D: "This is a communication problem, not a research quality problem"
          },
          correct: "B",
          explanation: "Assessment Rubric Research Quality: 'Skipped' → 'Single-angle' → 'Multi-angle systematic.' Shallow research that misses project-specific constraints is the single-angle level — you found what exists but not what applies to your context. Multi-angle systematic research: Angle 1 (general patterns), Angle 2 (compatibility constraints for your specific stack), Angle 3 (known issues and gotchas). Constraint-discovery is a dedicated research angle, not a side effect of general research."
        },
        {
          id: 18,
          question: "You complete Exercise 5.2 (Role-Playing Stakeholder Perspectives) where you review a spec from three viewpoints: end-user (wants simplicity), admin (wants control), executive (wants metrics). Your review as the end-user didn't change the spec at all. Your review as the admin added 3 constraints. What does this mean for your refinement skill development?",
          options: {
            A: "You have strong admin skills and weak user skills — focus on admin features",
            B: "You identified admin constraints (good) but may have missed user experience constraints — the end-user perspective should surface usability constraints: 'user must complete onboarding in under 3 minutes,' 'error messages must be actionable, not technical codes.' Zero changes from a stakeholder review usually indicates surface-level engagement with that role.",
            C: "End-user reviews always produce fewer changes — this is normal",
            D: "The spec was already perfect for end-users before you reviewed it"
          },
          correct: "B",
          explanation: "Exercise 5.2 trains identifying gaps from each stakeholder's perspective. Zero changes from the end-user review suggests either the spec was already perfectly user-focused (rare) or the role-play was surface-level. Deep end-user engagement surfaces: time constraints on onboarding, accessible error messaging, mobile responsiveness requirements, offline behavior expectations. If admin review finds constraints but user review finds none, the user perspective is being under-examined."
        },
        {
          id: 19,
          question: "You're building an event planning system (similar to Wedding Planner Capstone). You've done Research, written a spec, and completed Refinement. During the Execute step, Claude produces an implementation that technically satisfies every checklist item but the overall system doesn't feel like an 'event planner' — it feels more like a generic to-do list. What Verify step would have caught this?",
          options: {
            A: "Run all unit tests — they would have caught this",
            B: "The 6-step framework's Verify step: 'check every output against every spec criterion' — but also run the system as an event planner user would. If the spec's Context section said 'users are event coordinators managing vendors, timelines, and guest lists,' verify that those specific workflows exist and feel natural, not just that checkboxes are technically satisfied.",
            C: "This is an aesthetic problem that specs can't capture",
            D: "The Iterate step will fix this in the next cycle"
          },
          correct: "B",
          explanation: "The Verify step checks implementation against EVERY spec criterion — including the Context section. If Context says 'users are event coordinators,' verification includes: Can an event coordinator add a vendor with contact info and contract status? Can they track guest RSVPs against a capacity limit? Can they manage a timeline with dependencies? Technical checklist satisfaction ('CRUD operations work') is necessary but not sufficient — the system must satisfy the Context's implicit behavioral requirements."
        },
        {
          id: 20,
          question: "After completing all 27 exercises and 3 capstone projects, you review your Assessment Rubric scores: Research (4/4), Spec Completeness (3/4), Constraint Coverage (4/4), Refinement Depth (2/4), Task Delegation (4/4). What is your specific skill gap and what exercise targets it?",
          options: {
            A: "Your weakest area is Spec Completeness — focus on writing longer specs",
            B: "Your specific gap is Refinement Depth (2/4): your interviews clarify wording but don't change spec direction. Target: Exercise 5.3 (Stakeholder Perspectives) to practice finding deep conflicts between user/admin/executive views, and Exercise 4.3 (Constraint Stress Test) to adversarially probe specs until you find direction-changing gaps.",
            C: "You are balanced enough — all areas above 2/4 is proficient",
            D: "Refinement Depth of 2/4 is maximum — it cannot be improved further"
          },
          correct: "B",
          explanation: "Assessment Rubric diagnosis: Refinement Depth 2/4 = 'some refinement but didn't change spec direction.' The gap: interviews surface minor clarifications but not fundamental assumptions that restructure the spec. The targeted exercises: 5.3 (Stakeholder Perspectives) forces you to find conflicts between viewpoints that require structural spec changes (not just wording). 4.3 (Constraint Stress Test) forces you to find loopholes an adversarial implementation could exploit — gaps significant enough to change the spec's direction when fixed."
        },
        {
          id: 21,
          question: "What is the overall structure of the Practical SDD Exercises curriculum?",
          options: {
            A: "5 modules with 3 exercises each and 2 capstone projects",
            B: "8 modules plus 3 capstone projects for a total of 27 exercises that build specification writing, research and refinement, and task delegation skills",
            C: "10 modules with 2 exercises each and 1 capstone project",
            D: "7 modules with 4 exercises each and no capstone projects"
          },
          correct: "B",
          explanation: "The curriculum structure: 8 modules each with 3 exercises covering progressively complex SDD skills, plus 3 capstone projects that integrate all skills under real-world conditions. The total of 27 exercises provides the repetition needed to convert vocabulary into genuine skill. The capstones apply the full SDD cycle to complex, emotionally-charged scenarios."
        },
        {
          id: 22,
          question: "What skills does Module 1 (Spec vs. Vibe) develop?",
          options: {
            A: "Technical coding skills using AI assistance",
            B: "Pattern recognition for vibe coding failures through reverse-engineering failed projects, comparing vibe vs. spec outputs side-by-side, and diagnosing failures to write corrective specifications",
            C: "Speed in writing specifications under time pressure",
            D: "How to choose between the three SDD levels"
          },
          correct: "B",
          explanation: "Module 1 builds the foundational skill of recognizing when vibe coding fails and what a specification should have contained. Exercise 1.1 (Event Gone Wrong) reverse-engineers what a spec should have captured. Exercise 1.2 (Side-by-Side Test) compares outputs directly to see the difference. Exercise 1.3 (Vibe-to-Spec Rescue) diagnoses a failure and writes the corrective spec. This pattern-recognition foundation underlies all subsequent modules."
        },
        {
          id: 23,
          question: "What does Module 4 (Constraints and Criteria) develop?",
          options: {
            A: "The ability to write the Context section of specifications",
            B: "The ability to identify missing constraints, convert vague success criteria into verifiable standards, and adversarially stress-test constraints to find exploitable loopholes",
            C: "How to decompose specifications into atomic tasks",
            D: "How to conduct the Refinement interview"
          },
          correct: "B",
          explanation: "Module 4 focuses on the Constraints and Success Criteria sections, which provide 80% of specification value. Exercise 4.1 identifies missing guardrails in existing specs. Exercise 4.2 converts vague criteria like 'should be fast' into measurable standards like '<200ms p95'. Exercise 4.3 adversarially stress-tests constraints by asking how an implementation could technically satisfy constraints while missing the intent."
        },
        {
          id: 24,
          question: "What does Module 6 (Task Breakdown) develop?",
          options: {
            A: "How to write the Implementation Checklist section of a specification",
            B: "The skill of decomposing specifications into atomic, ordered, independently executable tasks through dependency mapping, atomic task writing, and full delegation simulation",
            C: "How to estimate task completion time",
            D: "How to assign tasks to team members based on their skills"
          },
          correct: "B",
          explanation: "Module 6 develops the decomposition skill that drives the Implementation phase. Exercise 6.1 (Dependency Map) identifies task ordering and the critical path through the dependency graph. Exercise 6.2 (Atomic Task Writer) decomposes vague tasks like 'add authentication' into agent-executable units with specific endpoints and behaviors. Exercise 6.3 (Delegation Simulation) runs a complete end-to-end delegation workflow."
        },
        {
          id: 25,
          question: "What dimensions does the Assessment Rubric measure across the exercises?",
          options: {
            A: "Code quality, test coverage, documentation completeness, and speed",
            B: "Research quality, specification completeness, constraint coverage, refinement depth, and task delegation quality",
            C: "Time spent, errors made, corrections needed, and final output length",
            D: "Spec length, number of checklist items, number of constraints, and number of questions asked"
          },
          correct: "B",
          explanation: "The Assessment Rubric tracks five dimensions: Research quality (from skipped to systematic multi-angle investigation), Spec completeness (from vague to reusable with edge cases handled), Constraint coverage (from absent to adversarially stress-tested), Refinement depth (from no interview to interview that changed the spec's direction), and Task delegation (from monolithic to independently executable atomic tasks). Each dimension has a 4-level progression."
        },
        {
          id: 26,
          question: "What is Capstone Project A and why was it chosen as a capstone?",
          options: {
            A: "A software API integration — chosen because APIs are the most common SDD use case",
            B: "The Wedding Planner System — chosen because it is complex and emotionally charged, with many stakeholders, high stakes, evolving requirements, and real consequences for errors",
            C: "A database migration project — chosen because migrations require the most rigorous specification",
            D: "A team workflow system — chosen because team coordination is the primary SDD use case"
          },
          correct: "B",
          explanation: "The Wedding Planner System capstone was deliberately chosen as emotionally charged with high stakes and multiple stakeholders. Real weddings involve: vendor coordination, timeline dependencies, budget constraints, aesthetic preferences, family dynamics, and literally irreversible event timing. This complexity demands rigorous SDD application and tests whether the practitioner can apply all phases under real-world pressure where mistakes have genuine consequences."
        },
        {
          id: 27,
          question: "What makes SDD applicable beyond software development, according to the key insight?",
          options: {
            A: "SDD's specification format works as a universal project template",
            B: "SDD is fundamentally a thinking methodology for reducing the gap between vague intention and correct execution, applicable wherever that gap creates rework",
            C: "SDD's task delegation tools work in any project management context",
            D: "SDD applies beyond software only when the team uses AI tools"
          },
          correct: "B",
          explanation: "The key insight: 'SDD is a thinking methodology' that applies wherever vague intention leads to rework. Event planning, business operations, content creation, and personal goal achievement all suffer from the same failure mode — someone has a vague goal, executes against their mental model, and discovers the output did not match the intention. The Research → Specify → Refine → Implement cycle reduces this gap in any domain."
        },
        {
          id: 28,
          question: "What is the 6-step SDD framework applied to each exercise?",
          options: {
            A: "Read, Analyze, Plan, Code, Test, Deploy",
            B: "Research (what must be known), Specify (goals, constraints, criteria, scope), Refine (surface ambiguities), Execute (delegate from spec), Verify (check against every criterion), Iterate (improve the specification itself)",
            C: "Brainstorm, Design, Build, Review, Launch, Monitor",
            D: "Requirements, Design, Implementation, Testing, Deployment, Documentation"
          },
          correct: "B",
          explanation: "The 6-step exercise framework mirrors the full SDD cycle: Research gathers necessary context before specifying. Specify creates the complete structured document. Refine surfaces hidden assumptions through interview. Execute delegates to Claude from the spec. Verify checks every output against every spec criterion. Iterate improves the specification itself based on what was learned. This cycle applied repeatedly across 27 exercises builds genuine SDD fluency."
        },
        {
          id: 29,
          question: "What does Module 5 (Refinement) develop that earlier modules do not?",
          options: {
            A: "How to write longer and more detailed specifications",
            B: "The interview skill of surfacing hidden assumptions through the ask_user_question pattern, ambiguity hunting, and adopting conflicting stakeholder perspectives",
            C: "How to write tests as specifications",
            D: "How to use parallel research effectively"
          },
          correct: "B",
          explanation: "Module 5 focuses specifically on the Refinement phase's interview skills. Exercise 5.1 (Interview Challenge) practices the ask_user_question pattern on a complex spec. Exercise 5.2 (Ambiguity Hunter) trains finding hidden assumptions systematically. Exercise 5.3 (Stakeholder Perspectives) requires reviewing a spec from conflicting viewpoints — end-user, admin, executive — to find conflicts that force spec restructuring. These skills are distinct from research and specification writing."
        },
        {
          id: 30,
          question: "What does the quote 'vocabulary without practice is just terminology' mean in the context of SDD exercises?",
          options: {
            A: "Technical vocabulary should be avoided in favor of plain language",
            B: "Knowing the names and definitions of SDD phases and concepts does not enable their application; only repeated practice with real scenarios builds the skill to apply SDD effectively",
            C: "Exercises should avoid using SDD terminology to prevent confusion",
            D: "The exercises develop vocabulary that supplements existing SDD knowledge"
          },
          correct: "B",
          explanation: "The quote captures why exercises exist. A practitioner who can define Spec-First, Spec-Anchored, and Spec-as-Source, list the five ambiguity categories, and explain the four-phase workflow has vocabulary. But vocabulary does not produce a well-written specification when facing a real complex requirement. Practice converts vocabulary into skill: 27 exercises applied to increasingly complex scenarios develop the automatic judgment that theory alone cannot."
        }
      ]
    }
  ]
};
