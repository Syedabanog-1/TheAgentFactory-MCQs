import type { Chapter } from "@/types";

export const chapter17: Chapter = {
  id: 17,
  title: "The Seven Principles of General Agent Problem Solving",
  description: "Seven foundational principles — from Bash access to Observability — that enable reliable, safe, and effective collaboration with AI agents.",
  color: "violet",
  lessons: [
    {
      id: 1,
      title: "Principle 1: Bash is the Key",
      mcqs: [
        {
          id: 1,
          question: "Why is terminal (Bash) access described as the 'key' to agentic capability?",
          options: {
            A: "Because Bash is the most popular scripting language",
            B: "Because terminal access lets the AI execute commands, observe real system state, and verify outcomes — converting it from a code suggester into an agent that acts and checks results",
            C: "Because Bash scripts run faster than GUI tools",
            D: "Because most developers prefer the command line over GUIs"
          },
          correct: "B",
          explanation: "Bash access is the key because it transforms the AI from a passive code generator into an active agent. With terminal access, the AI can run commands, observe actual system state, and verify that actions had the intended effect. Without execution capability, the AI can only guess at outcomes — with it, it can confirm them."
        },
        {
          id: 2,
          question: "What is the difference between an AI that can only generate code versus one with Bash access?",
          options: {
            A: "No practical difference — both produce the same output",
            B: "Code-generation-only AI produces suggestions that may be wrong; Bash-enabled AI can execute those suggestions, observe results, and self-correct based on actual output",
            C: "Bash-enabled AI writes shorter code",
            D: "Code-generation-only AI is faster because it skips execution"
          },
          correct: "B",
          explanation: "Code generation without execution is like writing directions without ever driving the route. The AI might produce plausible-looking code that fails silently. With Bash access, the AI can run the code, observe errors, and iterate based on ground truth rather than assumption. Bash commands provide verified reality, not speculation."
        },
        {
          id: 3,
          question: "What does it mean that 'Bash commands are ground truth' in the context of AI agents?",
          options: {
            A: "Bash is the only language that produces correct output",
            B: "The actual output of executed commands reflects real system state — not what the AI thinks is true, but what the system actually reports",
            C: "Ground truth means the commands are always run as root",
            D: "Bash commands cannot be wrong because the shell validates them"
          },
          correct: "B",
          explanation: "Bash commands as ground truth means: when you run `ls` and see the files, that IS the state of the filesystem. When `npm test` reports failures, those failures ARE real. The shell doesn't lie. This contrasts with AI reasoning, which can be confidently wrong. Grounding AI actions in executed commands eliminates a whole category of hallucination."
        },
        {
          id: 4,
          question: "Which CLI tools exemplify Principle 1 in practice?",
          options: {
            A: "Word processors and spreadsheets",
            B: "CLI tools like gh (GitHub CLI), aws CLI, git — tools that expose system capabilities to terminal commands",
            C: "GUI-based IDEs",
            D: "Only npm and pip package managers"
          },
          correct: "B",
          explanation: "Principle 1 is embodied by CLI tools: gh for GitHub operations, aws for cloud infrastructure, git for version control, curl for HTTP, jq for JSON processing. These tools expose powerful capabilities to the terminal, allowing AI agents to interact with real systems rather than just generating code about them. MCP servers extend this further."
        },
        {
          id: 5,
          question: "What fundamental capability does Bash access give an AI agent that it cannot have otherwise?",
          options: {
            A: "Access to the internet",
            B: "The ability to verify its own work — running tests, checking file contents, confirming commands succeeded",
            C: "The ability to write longer responses",
            D: "Access to more training data"
          },
          correct: "B",
          explanation: "The fundamental capability Bash unlocks is self-verification. An AI with terminal access can run the tests it wrote, check that files contain what it claimed to write, verify that processes started successfully, and observe error messages. This closes the feedback loop between action and result — the defining characteristic of agency."
        },
        {
          id: 6,
          question: "Scenario: You ask Claude Code to debug an API returning 500 errors. Claude responds: 'The issue is likely in the authentication middleware — the token validation logic looks problematic.' No commands were run. What is the limitation of this response?",
          options: {
            A: "Claude should have asked more clarifying questions before answering",
            B: "Without Bash execution, Claude is speculating from static code inspection — not verified system state. Running `tail -f logs/error.log` or `curl -v /api/endpoint` would provide ground truth",
            C: "The response is complete — code inspection is sufficient for debugging",
            D: "Claude should have rewritten the authentication middleware instead"
          },
          correct: "B",
          explanation: "This scenario illustrates P1's core value: without Bash, Claude inspects code and guesses. With Bash, it observes actual behavior — error logs, HTTP responses, process state. 'Likely in the middleware' is a hypothesis; `tail -f logs/error.log` showing the actual error stack trace is ground truth. The fix: instruct Claude to investigate with terminal commands before proposing solutions."
        },
        {
          id: 7,
          question: "Scenario: A team uses an AI coding assistant that can only suggest code (no terminal access). They ask it to set up project dependencies. The AI generates a perfect package.json. Two hours later, the developer reports 3 packages fail to install due to version conflicts. Could the AI have caught this?",
          options: {
            A: "Yes — AI should have checked npm's compatibility matrix in its training data",
            B: "No — without terminal access, the AI cannot run `npm install` and observe the actual conflict errors. It can only generate plausible configuration, not verify it works",
            C: "Yes — the AI should have read the existing package-lock.json",
            D: "No — version conflicts are always unpredictable regardless of tool"
          },
          correct: "B",
          explanation: "Principle 1 limitation: a code-generation-only AI produces plausible configurations but cannot close the feedback loop. Running `npm install` and observing the actual conflict errors would immediately surface the problem. With Bash access, Claude Code can: run the install, see the conflict, search for compatible versions, re-run, confirm success — all in one session. Without it, the human becomes the error relay system."
        },
        {
          id: 8,
          question: "Scenario: You need to verify a database migration ran successfully. Tool A (no terminal) says: 'The migration script looks syntactically correct and should have applied.' Tool B (Bash access) responds differently. What does Tool B do that Tool A cannot?",
          options: {
            A: "Tool B generates more detailed documentation about the migration",
            B: "Tool B runs `psql -c '\\dt'` to list actual tables, checks migration logs, and queries the schema_migrations table — confirming the migration's effect on the real database",
            C: "Tool B produces a better-formatted migration script",
            D: "Tool B checks the migration against the ORM documentation"
          },
          correct: "B",
          explanation: "This is the Bash-as-ground-truth principle in action. 'Looks correct' is static analysis. 'Tables exist in the database' is verified reality. Tool B can run: `psql -c '\\dt'` (actual tables), `SELECT * FROM schema_migrations ORDER BY version DESC LIMIT 5` (migration history), and check application logs for migration output. This is the difference between a code reviewer and an engineer who actually runs the code."
        },
        {
          id: 9,
          question: "Scenario: Your Node.js version is causing compatibility issues. Claude has terminal access. It runs `node --version` (returns v16.14.0), then checks `.nvmrc` (requires v18), then runs `nvm use 18`. What principle is demonstrated and why is this better than Claude just telling you the version requirements?",
          options: {
            A: "Principle 5 — Claude is persisting version requirements to a file",
            B: "Principle 1 — Claude is using Bash to observe actual system state (v16 installed vs. v18 required) and take corrective action, rather than speculating about what might be wrong",
            C: "Principle 2 — Claude is using code to communicate the version requirements",
            D: "Principle 3 — Claude is verifying the version before writing code"
          },
          correct: "B",
          explanation: "P1 in practice: Claude didn't say 'you might have the wrong Node version.' It ran commands to confirm: v16 is installed, v18 is required (from .nvmrc), and switched versions. Each command revealed actual system state. This is Bash as ground truth — the sequence READ (node --version) → ANALYZE (mismatch found) → ACT (nvm use 18) → VERIFY (node --version again) is the complete agency loop."
        },
        {
          id: 10,
          question: "Scenario: You're comparing two AI tools for deploying a Docker container. Tool A (web interface): generates Dockerfile and docker-compose.yml, explains each line. Tool B (Claude Code with terminal): same generation capability plus Bash access. For a production deployment task, what critical capability gap exists?",
          options: {
            A: "Tool A generates better-documented Dockerfiles",
            B: "Tool B can run `docker build`, observe build errors, fix them, run `docker run`, check container logs, verify the service responds — completing the full deployment loop without human relay",
            C: "Tool A is safer because it cannot accidentally deploy to production",
            D: "There is no meaningful difference — deployment is a human responsibility regardless"
          },
          correct: "B",
          explanation: "The capability gap is the execution-verification loop. With Tool A, a human must copy the Dockerfile, run the build, relay errors back to the AI, get fixes, run again — becoming the error relay system. With Tool B, Claude executes `docker build .`, observes `ERROR: RUN npm install returned exit code 1`, reads the error, fixes the Dockerfile, re-runs, checks `docker logs`, verifies the service responds on port 3000 — all autonomously. This is what makes terminal access the 'key' to agency."
        },
        {
          id: 11,
          question: "Scenario: You ask Claude to investigate why your Node.js application is consuming 100% CPU. Claude responds: 'The issue might be an infinite loop in your event handlers or excessive logging.' No commands were run. What should you instruct Claude to do instead?",
          options: {
            A: "Ask Claude to review the code more carefully",
            B: "Tell Claude to use Bash: run `top` or `htop` to identify the process, `strace -p <PID>` to trace system calls, and `node --prof` to generate a CPU profile — observing actual system state instead of speculating",
            C: "Restart the application and hope it fixes itself",
            D: "Add more logging statements to the code"
          },
          correct: "B",
          explanation: "This is P1 in action: without Bash, Claude speculates ('might be an infinite loop'). With Bash, Claude observes ground truth: `top` shows the Node process at 100% CPU, `strace -p <PID>` reveals repeated file system calls, `node --prof` identifies the specific function. Each command reveals actual system state. The fix: instruct Claude to investigate with terminal commands before proposing solutions."
        },
        {
          id: 12,
          question: "Scenario: Your CI/CD pipeline is failing but the tests pass locally. Tool A (no terminal) says: 'Check if the Node versions match.' Tool B (Bash access) responds differently. What does Tool B do that Tool A cannot?",
          options: {
            A: "Tool A gives better advice",
            B: "Tool B runs `node --version` locally, checks the CI configuration file for the Node version, runs `npm ci` in a clean environment to reproduce the CI failure locally, and identifies the exact version mismatch",
            C: "Tool B automatically fixes the CI configuration",
            D: "Tool B restarts the CI server"
          },
          correct: "B",
          explanation: "P1 enables self-verification: Tool B can observe the local environment (`node --version`), read the CI config (`.nvmrc` or `package.json` engines field), and attempt to reproduce the failure (`npm ci` in a clean directory). This closes the feedback loop between action and result. Tool A can only guess — Tool B observes actual system state and confirms the discrepancy."
        },
        {
          id: 13,
          question: "Scenario: You're setting up a new project and need to install 15 npm packages. Claude has terminal access. It runs `npm install`, observes peer dependency conflicts, searches for compatible versions with `npm view <package> peerDependencies`, updates package.json, re-runs `npm install`, and confirms success. What principle does this demonstrate?",
          options: {
            A: "Principle 2 — Code as Universal Interface",
            B: "Principle 1 — Bash as the key: Claude executed commands, observed real conflict errors, searched for solutions, applied fixes, and verified the outcome — closing the action-result feedback loop",
            C: "Principle 3 — Verification as Core Step",
            D: "Principle 5 — Persisting State in Files"
          },
          correct: "B",
          explanation: "This is the complete P1 agency loop: READ (npm install) → ANALYZE (peer dependency conflict observed) → ACT (npm view to find compatible versions, update package.json) → VERIFY (npm install again, confirm success). Without Bash, Claude would generate a package.json and hope it works. With Bash, Claude closes the feedback loop between configuration and reality."
        },
        {
          id: 14,
          question: "Scenario: A developer asks Claude to 'check if the database migration ran successfully.' Claude without terminal access says: 'The migration script looks syntactically correct.' Claude with terminal access does something different. What's the critical difference?",
          options: {
            A: "No difference — both approaches are equally reliable",
            B: "Claude with terminal access runs `psql -c '\\dt'` to list actual tables, queries `schema_migrations` to check migration history, and reviews application logs — confirming the migration's effect on the real database, not just the script's syntax",
            C: "Claude with terminal access rewrites the migration script",
            D: "Claude without terminal access is faster"
          },
          correct: "B",
          explanation: "This is Bash-as-ground-truth: 'Looks syntactically correct' is static analysis. 'Tables exist in the database, migration is recorded in schema_migrations, and application logs show no errors' is verified reality. Tool B can run actual database queries and check real state. This is the difference between a code reviewer and an engineer who actually runs the code and confirms the effect."
        },
        {
          id: 15,
          question: "Scenario: Your application's API endpoint is returning 500 errors. Claude has terminal access. It runs `curl -v http://localhost:3000/api/data`, observes the error response, checks `tail -f logs/error.log` for the stack trace, identifies a missing environment variable, adds it to `.env`, restarts the server, and re-runs curl to confirm 200 OK. What capability did Bash access provide?",
          options: {
            A: "Code generation",
            B: "The ability to investigate, diagnose, fix, and verify in a single autonomous loop — observing actual HTTP responses and error logs rather than speculating about what might be wrong",
            C: "Database access",
            D: "Network configuration"
          },
          correct: "B",
          explanation: "P1 enables the complete debugging loop: Claude observes the actual error (curl -v shows 500), investigates the cause (tail -f shows 'DATABASE_URL undefined'), applies the fix (adds to .env), restarts the server, and verifies the fix (curl returns 200). Without Bash, Claude would say 'check your environment variables' and wait for you to relay the results. With Bash, Claude is an autonomous investigator."
        }
      ]
    },
    {
      id: 2,
      title: "Principle 2: Code as Universal Interface",
      mcqs: [
        {
          id: 1,
          question: "Why is code described as a 'universal interface' between humans and AI agents?",
          options: {
            A: "Because all code compiles to the same binary format",
            B: "Because code is unambiguous — it has a precise, executable meaning that eliminates the interpretation gap present in natural language",
            C: "Because code is easier to type than prose",
            D: "Because code is the only language AI models understand"
          },
          correct: "B",
          explanation: "Code is the universal interface because it eliminates ambiguity. Natural language like 'add user authentication' can mean dozens of things. Code like a test that specifies exact inputs, expected outputs, and error conditions has one meaning. Code is both specification and verification — it precisely defines 'done' in a way natural language cannot."
        },
        {
          id: 2,
          question: "How does writing tests as specifications embody Principle 2?",
          options: {
            A: "It doesn't — tests are only for verification, not specification",
            B: "Tests define exact expected behavior as executable code, making the specification both precise and automatically verifiable",
            C: "Tests as specs just means writing more boilerplate",
            D: "Only unit tests count as specifications under Principle 2"
          },
          correct: "B",
          explanation: "Writing tests as specs is the purest expression of Principle 2. A test that says 'given input X, expect output Y, and throw error Z on invalid input' is a complete behavioral specification. It's precise (no ambiguity), executable (runs automatically), and verifiable (pass/fail is objective). The spec and the verification are the same artifact."
        },
        {
          id: 3,
          question: "What is the 'interpretation gap' that Principle 2 addresses?",
          options: {
            A: "The performance gap between interpreted and compiled languages",
            B: "The difference between what you mean in natural language and what the AI understands — same words can produce very different implementations",
            C: "The time delay between writing code and running it",
            D: "The gap between junior and senior developer productivity"
          },
          correct: "B",
          explanation: "The interpretation gap is the divergence between your intent and AI's interpretation when communicating in natural language. 'Secure the login endpoint' could mean add rate limiting, require HTTPS, validate tokens, log attempts, or all of these — the AI must guess. Code eliminates this gap: a test that checks for rate limiting is unambiguous about that requirement."
        },
        {
          id: 4,
          question: "How does using @file references in prompts apply Principle 2?",
          options: {
            A: "It makes prompts shorter by compressing file content",
            B: "It grounds the AI's work in precise, existing code — the AI acts on the actual file rather than a verbal description of it",
            C: "@file references are only used for documentation",
            D: "It prevents the AI from reading files it shouldn't"
          },
          correct: "B",
          explanation: "Using @file references in prompts is Principle 2 in action: instead of describing 'the authentication module' vaguely, you reference @src/auth/login.ts directly. The AI works against the actual code, not a verbal approximation. This same precision applies to including concrete examples, test cases, and schemas — anything that converts vague prose into precise specification."
        },
        {
          id: 5,
          question: "What is the practical prompt difference between vague natural language and code-as-interface?",
          options: {
            A: "No difference — AI produces the same output regardless of prompt specificity",
            B: "Vague: 'Add input validation' (AI decides what to validate and how). Code-as-interface: 'Make this test pass: expect(validateEmail(\"bad\")).toBe(false)' (AI has an exact, verifiable target)",
            C: "Code-as-interface prompts must be written in a specific programming language",
            D: "Vague prompts are better for creative tasks, code prompts for mechanical ones"
          },
          correct: "B",
          explanation: "The practical difference: a vague prompt produces whatever validation the AI considers reasonable (maybe missing your specific edge cases). A code-based spec like a test produces implementation that satisfies the exact criteria you encoded. The test becomes both the specification AND the acceptance criterion — pass means done, fail means not done."
        },
        {
          id: 6,
          question: "Scenario: You ask Claude to 'add pagination to the user list.' It implements offset-based pagination, but you needed cursor-based. The feature ships and causes performance problems at scale. What Principle 2 practice would have prevented this miscommunication?",
          options: {
            A: "You should have asked Claude to explain its approach before implementing",
            B: "Providing a test or TypeScript interface specifying cursor-based pagination — e.g., `interface PaginationResult { nextCursor: string | null; items: User[] }` — would have made the requirement unambiguous and executable",
            C: "Using more words in the prompt to describe what pagination means",
            D: "Reviewing the code before the feature shipped"
          },
          correct: "B",
          explanation: "This is the interpretation gap in action. 'Pagination' is ambiguous — offset (`?page=2&limit=20`) and cursor (`?after=abc123`) are both valid interpretations. A TypeScript interface or test stating `nextCursor: string | null` eliminates the ambiguity. The code IS the spec. With a concrete interface, Claude cannot choose the wrong implementation — it must satisfy the type signature."
        },
        {
          id: 7,
          question: "Scenario: Two developers give Claude the same task — 'improve the search feature.' Developer A writes prose requirements. Developer B attaches a benchmark test showing search should return results in under 100ms for 10,000 records. After implementation, whose solution is easier to objectively verify?",
          options: {
            A: "Developer A — prose requirements are more comprehensive",
            B: "Developer B — the benchmark test provides an objective, executable criterion: either results return in <100ms or they don't. Developer A's 'improved' is subjective and impossible to verify objectively",
            C: "Both are equally verifiable through code review",
            D: "Developer A — performance improvements need subjective human judgment"
          },
          correct: "B",
          explanation: "P2 makes 'done' objective. 'Improved search' is subjective — better UX? More relevant results? Faster? Developer B's test `expect(searchTime).toBeLessThan(100)` is binary: pass or fail. Claude has an unambiguous target, and you have an objective acceptance criterion. This is the power of code as spec — it transforms fuzzy requirements into executable, verifiable contracts."
        },
        {
          id: 8,
          question: "Scenario: You're reviewing a Claude-generated payment processing module. There's no specification document and the feature 'looks right.' Your manager asks 'Does it handle partial refunds?' You realize you don't know. What Principle 2 artifact would have answered this question definitively?",
          options: {
            A: "A detailed README explaining the module's design",
            B: "A test suite that includes a test case for partial refunds — if the test exists and passes, the feature is supported; if the test is missing, the requirement was never specified",
            C: "A code review checklist",
            D: "An architecture diagram showing the payment flow"
          },
          correct: "B",
          explanation: "Tests as specs answer 'is this feature supported?' definitively. A test `it('handles partial refunds: $50 refund on $200 charge returns $150 remaining')` is both a spec (we need this) and a verification (we have this). Its absence is also information: partial refunds were never specced. Documentation can be wrong; tests that pass cannot lie about current behavior."
        },
        {
          id: 9,
          question: "Scenario: A product manager sends Claude: 'Users should be able to log in securely.' A developer applying Principle 2 intercepts this before it reaches Claude and converts it to code. What does that conversion look like?",
          options: {
            A: "A longer prose description: 'The login system must be secure in all aspects'",
            B: "Tests specifying: rate limiting after 5 failed attempts, tokens expire after 24h, passwords are bcrypt-hashed, HTTPS-only endpoints, and session invalidation on logout",
            C: "A database schema for the users table",
            D: "A security checklist in bullet-point format"
          },
          correct: "B",
          explanation: "Converting prose to code/tests is P2 in practice. 'Securely' means nothing to an AI — it's a vague adjective. Tests encode the specific security properties: `expect(loginAttempts(6)).toThrow('rate limited')`, `expect(tokenAge(25h)).toBe('expired')`. Each test is one concrete, unambiguous requirement. Claude now has 5 precise targets instead of one fuzzy instruction."
        },
        {
          id: 10,
          question: "Scenario: Claude implements a new feature using a @file reference to the actual TypeScript interface vs. your colleague who describes the interface verbally in the prompt. Three sprints later, the interface changes. Whose implementation is easier to update and why?",
          options: {
            A: "The verbal description — it's more flexible to changing requirements",
            B: "The @file reference — the interface file is the single source of truth. When the interface file changes, the discrepancy with Claude's implementation becomes immediately visible; Claude works against the actual current definition, not a remembered description",
            C: "Both are equally easy to update",
            D: "The verbal description — Claude's implementation won't have type errors to fix"
          },
          correct: "B",
          explanation: "@file references ground AI work in the actual current state of the codebase. When the interface changes, TypeScript compilation errors surface immediately, pointing to exactly what needs updating. The verbal description creates a hidden dependency — Claude implemented against what you described three sprints ago, not what the current interface says. Code references are living specs; verbal descriptions are frozen snapshots."
        },
        {
          id: 11,
          question: "Scenario: You're building a REST API endpoint that returns paginated user data. You tell Claude: 'Make it support pagination.' Claude implements offset-based pagination with `?page=2&limit=20`. Later, your team realizes this breaks with large datasets because offset pagination scans all preceding rows. What P2 practice would have prevented this costly rework?",
          options: {
            A: "Asking Claude to explain its pagination approach before implementing",
            B: "Providing a TypeScript interface or test specifying cursor-based pagination — e.g., `interface PaginatedResult { cursor: string | null; items: User[] }` — making the requirement unambiguous and executable from the start",
            C: "Writing a longer prompt describing what pagination means in detail",
            D: "Reviewing the code after Claude finished implementing it"
          },
          correct: "B",
          explanation: "P2 eliminates the interpretation gap. 'Pagination' is ambiguous — offset and cursor are both valid. A TypeScript interface or test specifying `cursor: string | null` makes the requirement precise and verifiable. Code as spec means the AI cannot choose the wrong implementation — it must satisfy the type signature or test criteria you encoded. The spec and verification are the same artifact."
        },
        {
          id: 12,
          question: "Scenario: A junior developer asks Claude to 'make the search faster.' Claude adds a debounce to the input field and reports 'Done!' The search still takes 3 seconds per query because the database query is unindexed. What P2 approach would have given Claude an unambiguous, measurable target?",
          options: {
            A: "Telling Claude to also check the database queries",
            B: "Writing a benchmark test: `expect(searchResponseTime(query)).toBeLessThan(200)` — this makes 'faster' an objective, executable criterion rather than a subjective adjective",
            C: "Asking Claude to profile the search endpoint first",
            D: "Adding more logging to the search function"
          },
          correct: "B",
          explanation: "P2 transforms vague adjectives into precise specifications. 'Faster' is subjective — debounce made the UX feel faster but didn't improve actual query time. A benchmark test `expect(searchResponseTime).toBeLessThan(200ms)` is binary: pass or fail. Claude now has an unambiguous target. If debounce doesn't make the test pass, Claude must investigate further. Code as spec eliminates the 'looks improved' trap."
        },
        {
          id: 13,
          question: "Scenario: Your team is migrating from JavaScript to TypeScript. Claude has been generating TypeScript code for weeks, but inconsistencies keep appearing — some files use `any`, some use `unknown`, some use implicit types. What P2 artifact would enforce consistent type usage across all AI-generated code?",
          options: {
            A: "A verbal reminder at the start of each session to use `unknown` instead of `any`",
            B: "A TypeScript ESLint rule banning `any` plus a test file demonstrating the expected typing patterns — making the convention both machine-enforceable and exemplified in code",
            C: "A README documenting the TypeScript migration strategy",
            D: "A code review checklist for human reviewers"
          },
          correct: "B",
          explanation: "P2: code as the universal interface means conventions should be encoded in executable form, not prose. A lint rule (`@typescript-eslint/no-explicit-any`) enforces the convention automatically. A test file showing `function process(input: unknown): Result` demonstrates the pattern. Together, these are unambiguous specifications that Claude must satisfy — unlike a verbal reminder that can be forgotten session to session."
        },
        {
          id: 14,
          question: "Scenario: You ask Claude to 'add error handling to the payment service.' It wraps every function in try-catch blocks and swallows all errors with `console.error`. The code 'has error handling' but errors are silently lost. What P2 specification would have prevented this over-engineered but ineffective solution?",
          options: {
            A: "A longer prompt describing exactly which errors to catch and how to handle each one",
            B: "Tests specifying: `expect(paymentService.charge(invalidCard)).rejects.toThrow(PaymentError)` and `expect(errorLogger).toHaveBeenCalledWith(expectedError)` — making error propagation and logging explicit, verifiable requirements",
            C: "A flowchart showing the error handling flow",
            D: "Asking Claude to research best practices for error handling"
          },
          correct: "B",
          explanation: "Tests as specs encode the exact error behavior expected: errors should be thrown (not swallowed), specific error types should be used, and errors should be logged. Claude implementing to pass these tests produces correct error handling — errors propagate to the right layer and are logged. 'Add error handling' without a code spec produces whatever Claude considers reasonable, which may be try-catch-everything-and-log-nothing."
        },
        {
          id: 15,
          question: "Scenario: A product manager writes a user story: 'As a user, I want to reset my password so I can regain access to my account.' Before giving this to Claude, a developer applying P2 converts it into code. What does that conversion include?",
          options: {
            A: "A longer user story with more technical details",
            B: "Tests specifying: POST /auth/forgot-password accepts email and sends reset link, POST /auth/reset-password validates token expiry (24h), validates password strength, hashes new password with bcrypt, invalidates all existing sessions, and returns appropriate error codes for each failure mode",
            C: "A database migration adding a reset_token column",
            D: "A wireframe of the password reset UI"
          },
          correct: "B",
          explanation: "P2 converts prose to executable specifications. The user story says 'reset password' — the tests encode: what endpoint, what validation rules, token expiry duration, hashing algorithm, session invalidation, and error responses. Each test is one unambiguous requirement. Claude now has precise targets instead of a fuzzy adjective ('reset'). The tests are both the spec (this is what we need) and the acceptance criterion (this proves we have it)."
        }
      ]
    },
    {
      id: 3,
      title: "Principle 3: Verification as Core Step",
      mcqs: [
        {
          id: 1,
          question: "Why is verification called a 'core step' rather than an optional final step?",
          options: {
            A: "Because verification is legally required in most jurisdictions",
            B: "Because AI can produce confident-sounding but wrong output — verification after every significant action catches errors before they compound into larger failures",
            C: "Because verification makes code run faster",
            D: "Because it is only needed when working with junior developers"
          },
          correct: "B",
          explanation: "Verification is a core step, not an afterthought, because AI can sound completely confident while being completely wrong. Without systematic verification, errors compound — each unverified step builds on potentially wrong assumptions. Catching a wrong assumption at step 2 costs minutes; catching it at step 10 after building on it costs hours. Verification after every action breaks this compounding."
        },
        {
          id: 2,
          question: "What are the four types of verification in the verification hierarchy?",
          options: {
            A: "Visual, auditory, tactile, olfactory",
            B: "Syntax (does it parse?), unit (does the function work?), integration (do components work together?), manual (does the feature work end-to-end in the real system?)",
            C: "Fast, slow, automated, manual",
            D: "Client, server, database, network"
          },
          correct: "B",
          explanation: "The verification hierarchy: 1) Syntax — does the code parse/compile? (cheapest, run immediately), 2) Unit — do individual functions behave correctly in isolation?, 3) Integration — do components interact correctly together?, 4) Manual — does the feature work correctly in the actual running system from the user's perspective? Each level catches different failure modes."
        },
        {
          id: 3,
          question: "What is a 'trust zone' in the context of Principle 3?",
          options: {
            A: "A geographic region with trusted network infrastructure",
            B: "A classification of code/system components by how much verification is needed — internal library code (high trust) vs. external input (low trust, must verify)",
            C: "A security clearance level for developers",
            D: "The zone around a production server with restricted access"
          },
          correct: "B",
          explanation: "Trust zones classify what needs verification: high-trust zones (well-tested internal libraries, framework core) need less verification. Low-trust zones (user input, external API responses, AI-generated transformations) require explicit verification at every boundary crossing. Mapping trust zones helps allocate verification effort — don't waste time re-verifying trusted foundations, focus on trust boundaries."
        },
        {
          id: 4,
          question: "What is the 'verification loop' in AI-assisted development?",
          options: {
            A: "An infinite loop that continuously runs all tests",
            B: "The cycle: AI makes a change → runs verification → observes result → either proceeds (if pass) or diagnoses and corrects (if fail)",
            C: "A database query loop for verifying data integrity",
            D: "The process of getting code reviewed by multiple team members"
          },
          correct: "B",
          explanation: "The verification loop is: AI acts → verifies → observes outcome → decides next step. This replaces 'AI makes changes, human discovers problems later.' Each iteration of the loop is small and the feedback is immediate. The key is that verification is INSIDE the loop, not after it — every action is followed by checking before the next action begins."
        },
        {
          id: 5,
          question: "What does the 'looks done' trap refer to in Principle 3?",
          options: {
            A: "When code is syntactically correct but logically wrong",
            B: "When AI reports completion and the output appears correct visually, but no tests were run — silent bugs exist that only verification would reveal",
            C: "When UI components appear finished but have no backend",
            D: "When code is 90% complete but the last 10% takes the longest"
          },
          correct: "B",
          explanation: "The 'looks done' trap: AI says 'I've added input validation' and shows code that visually looks correct. Without verification, you accept it. Later, users submit invalid data because the validation function was added but never called in the right handler. Verification (running a test that submits invalid data) would have caught this immediately. 'Looks done' is not the same as 'is done'."
        },
        {
          id: 6,
          question: "Scenario: Claude fixes a bug and reports 'Done!' You accept it without running tests. Two days later, a user reports the exact same bug. What single verification step, if taken immediately after Claude's fix, would most likely have caught this?",
          options: {
            A: "Reading the diff to see what lines changed",
            B: "Running the specific test that reproduces the original bug — if the fix works, the test passes; if the bug persists, the test fails immediately",
            C: "Asking Claude to explain what it changed",
            D: "Reviewing the commit message"
          },
          correct: "B",
          explanation: "P3 applied: the most targeted verification is to run the test that captures the exact failing scenario. If no such test exists, write one first ('reproduce before fix' pattern). Accepting 'Done!' without execution is the 'looks done' trap — Claude's code may look correct but the bug may still exist in a code path not visually inspected. A failing test after the 'fix' would have surfaced this immediately."
        },
        {
          id: 7,
          question: "Scenario: You're building a payment processing service. Claude has just implemented the charge endpoint. Which verification sequence correctly applies the verification hierarchy (cheapest to most expensive)?",
          options: {
            A: "Deploy to production, then test with real charges, then add unit tests",
            B: "TypeScript compilation (syntax) → unit test for charge logic → integration test with Stripe sandbox → manual end-to-end charge in staging environment",
            C: "Manual testing first, then unit tests if problems are found",
            D: "Only integration tests matter for payment systems"
          },
          correct: "B",
          explanation: "Verification hierarchy applied: 1) Syntax — compile TypeScript immediately (free, instant). 2) Unit — test charge calculation logic with mock Stripe (fast, isolated). 3) Integration — test against Stripe sandbox API with test keys (slower, requires network). 4) Manual — place a real test charge in staging (slowest, most realistic). Each layer catches different failures; skipping cheaper layers wastes expensive ones."
        },
        {
          id: 8,
          question: "Scenario: Claude adds a database index claiming 'query performance should improve significantly.' You accept this. A week later, users still report slow queries. What verification was missing, and what would it have looked like?",
          options: {
            A: "You should have read the index definition more carefully",
            B: "Running `EXPLAIN ANALYZE` on the slow query before AND after adding the index — comparing actual execution time and query plan would have confirmed whether the index was actually used and by how much",
            C: "Checking the index name was spelled correctly",
            D: "Asking Claude to confirm the index was created"
          },
          correct: "B",
          explanation: "Performance claims require performance evidence. 'Should improve' is speculation; before/after EXPLAIN ANALYZE is verification. The output shows: was the index actually used (Seq Scan vs Index Scan)? What was the actual execution time delta? An index on the wrong column, or a query that doesn't use the index due to type mismatch, won't help — and only EXPLAIN ANALYZE reveals this. No verification = no confirmation the fix worked."
        },
        {
          id: 9,
          question: "Scenario: During a verification loop, tests fail after Claude's first fix attempt. Claude immediately makes a second change without reading the test failure output. What two principles are being violated?",
          options: {
            A: "P1 and P5",
            B: "P7 (Observability — failure output not analyzed) and P4 (Decomposition — the second change compounds on an undiagnosed first change instead of cleanly reverting and trying fresh)",
            C: "P2 and P6",
            D: "Only P3 is violated — Claude should not have failed the first time"
          },
          correct: "B",
          explanation: "Two violations: P7 (Observability) — the test failure message IS the observation; ignoring it means acting without understanding what went wrong. P4 (Decomposition/Reversibility) — the right move after a failed fix is to revert cleanly, analyze the failure, and try a new atomic approach. Compounding wrong fixes creates a tangle that's hard to unwind. Failure is information — read it first, then act."
        },
        {
          id: 10,
          question: "Scenario: You ask Claude to verify it fixed the authentication bug. Claude responds: 'I reviewed the implementation carefully and the fix looks logically correct.' You accept this. Which level of verification did Claude provide, and what level was needed?",
          options: {
            A: "Claude provided integration-level verification; unit testing was needed",
            B: "Claude provided zero-level verification (self-review/visual inspection); at minimum, unit tests running and passing were needed to confirm the fix",
            C: "Claude provided manual verification; syntax verification was needed",
            D: "The level of verification was appropriate for a bug fix"
          },
          correct: "B",
          explanation: "Visual inspection ('looks logically correct') is the weakest form of verification — it's an opinion, not evidence. The hierarchy starts at syntax (compilation), then unit tests (did the specific fixed behavior test pass?), then integration (does login actually work end-to-end?). 'I reviewed it and it looks right' is how the 'looks done' trap perpetuates. Require `npm test -- --grep 'authentication'` output, not verbal confirmation."
        },
        {
          id: 11,
          question: "Scenario: Claude implements a new email notification feature and reports 'Done! Tests pass.' You check and see: TypeScript compilation passed, but no unit or integration tests were run — only the linter ran. According to the verification hierarchy, what level of verification was actually completed?",
          options: {
            A: "Full verification — the linter covers all necessary checks",
            B: "Only syntax-level verification (TypeScript compilation + linting). Unit tests (does the email function work?), integration tests (does it connect to the email service?), and manual tests (does the email actually arrive?) were all skipped — the feature is unverified at every behavioral level",
            C: "Integration-level verification — the linter checks component interactions",
            D: "Manual verification — Claude reviewed the code visually"
          },
          correct: "B",
          explanation: "The verification hierarchy: syntax (compilation/lint) is the cheapest and fastest but only checks format, not behavior. Unit tests verify the email function produces correct output with mock data. Integration tests verify the connection to the email service API. Manual tests verify the email actually arrives in an inbox. Skipping from syntax straight to 'Done!' is the 'looks done' trap — the code parses correctly but may not work at all."
        },
        {
          id: 12,
          question: "Scenario: You're building a checkout flow for an e-commerce site. Claude implements the payment step and says 'It works!' You need to verify before launch. Which verification sequence correctly applies the trust zone concept from P3?",
          options: {
            A: "Deploy to production and monitor for errors — real user traffic is the best test",
            B: "Unit test the payment calculation with mock data (high trust zone: your logic), then integration test with Stripe's test API (trust boundary: external service), then manual test in staging with a real test card (lowest trust: full system with real dependencies)",
            C: "Only test the UI — if the button clicks, the backend must work",
            D: "Ask Claude to review its own implementation — it knows what it wrote"
          },
          correct: "B",
          explanation: "P3 trust zones: your own code (high trust) needs less verification than external service boundaries (low trust). Unit tests verify your calculation logic in isolation. Integration tests with Stripe's sandbox verify the trust boundary between your code and the external API. Manual staging tests verify the full system end-to-end. Each level catches different failure modes; skipping cheaper levels wastes expensive ones."
        },
        {
          id: 13,
          question: "Scenario: Claude fixes a bug in the user registration flow. The fix involves changes to 3 files. Claude reports 'Fixed!' but you notice the test suite has 2 failing tests that were passing before the fix. What does the verification loop dictate Claude should do next?",
          options: {
            A: "Ignore the failing tests — the bug fix is more important",
            B: "Read the test failure output, identify which change caused the regression, revert that specific change, and develop a new approach that fixes the original bug without breaking existing tests",
            C: "Update the failing tests to match the new behavior",
            D: "Commit the fix and address the failing tests in a separate PR"
          },
          correct: "B",
          explanation: "The verification loop: act → verify → observe → decide. The failing tests ARE the observation — they tell you the fix broke existing behavior. The correct response: read the failure messages (P7: observability), identify the causal change, revert it (P4: reversibility), and try a new approach. Ignoring test failures or updating tests to match broken behavior defeats the purpose of verification entirely."
        },
        {
          id: 14,
          question: "Scenario: A team lead asks you to verify that Claude's implementation of a new search algorithm is correct. The algorithm claims O(log n) performance. You have 30 seconds for verification. What single check gives you the most confidence?",
          options: {
            A: "Reading the algorithm's code to verify it uses binary search logic",
            B: "Running the existing search test suite — if all tests pass, the implementation satisfies the known behavioral requirements; if any fail, the implementation is definitively wrong regardless of how elegant the code looks",
            C: "Checking that the code compiles without errors",
            D: "Asking Claude to explain why the algorithm is correct"
          },
          correct: "B",
          explanation: "P3 prioritizes executable verification over all other forms. Test results are objective: pass means the implementation satisfies known requirements, fail means it's definitively broken. Code reading (A) is subjective opinion. Compilation (C) only checks syntax. Claude's explanation (D) could be rationalization. Running the test suite is the single most informative check because it exercises actual behavior, not appearance or claims."
        },
        {
          id: 15,
          question: "Scenario: Claude implements a database migration and reports 'Migration applied successfully.' You want to verify. Which approach applies P3's verification hierarchy most effectively?",
          options: {
            A: "Trust Claude's report — it wouldn't say 'successfully' if it failed",
            B: "Run `SELECT COUNT(*) FROM migrated_table` to verify row count matches expectation, check the migration log table for the migration version, and run the application's test suite to confirm the schema change didn't break existing queries",
            C: "Check that the migration file exists in the migrations directory",
            D: "Ask Claude to re-read the migration file and confirm it looks correct"
          },
          correct: "B",
          explanation: "Verification hierarchy applied to database migrations: 1) Syntax — migration file parses correctly (Claude already did this). 2) Unit — query the database directly to verify the migration had the expected effect (row counts, column types, constraints). 3) Integration — run the application test suite to verify existing code works with the new schema. 4) Manual — test the feature end-to-end in the running application. Each level catches different failures."
        }
      ]
    },
    {
      id: 4,
      title: "Principle 4: Small, Reversible Decomposition",
      mcqs: [
        {
          id: 1,
          question: "What is 'atomic change' in the context of Principle 4?",
          options: {
            A: "Changes made to files in the /atomic/ directory",
            B: "A single, minimal, self-contained modification that does one thing — can be applied or reverted independently without affecting other changes",
            C: "Changes that involve the nuclear physics library",
            D: "Database transactions using atomic commit syntax"
          },
          correct: "B",
          explanation: "An atomic change is the smallest unit of meaningful change: does one thing, has a clear purpose, and can be reverted cleanly. In practice: one commit per logical change, feature branches for experiments, each step in a plan adds one piece of functionality. Atomic changes make debugging easy (revert the one commit), code review tractable (one thing to understand), and rollback safe."
        },
        {
          id: 2,
          question: "Why is reversibility described as a 'safety net' for AI-assisted development?",
          options: {
            A: "Because AI agents always make mistakes that must be reversed",
            B: "Because knowing any change can be undone enables confident delegation — you can let AI try an approach without fear, because a wrong approach costs minutes to revert, not hours",
            C: "Because reversibility makes code run faster",
            D: "Because reversibility is required by software licensing agreements"
          },
          correct: "B",
          explanation: "Reversibility as safety net: the psychological and practical benefit of knowing every change can be undone. With good reversibility (small commits, feature branches, checkpoints), you can say 'try this approach' to the AI without risk. If it's wrong, you revert and try another. Without reversibility, every AI action is high-stakes — you can't easily undo a 500-file refactor in one commit."
        },
        {
          id: 3,
          question: "What is a 'decomposition pattern' and why does it matter for AI collaboration?",
          options: {
            A: "A design pattern for breaking down chemical compounds",
            B: "A systematic approach to breaking a large task into ordered subtasks that are each small, verifiable, and independently reversible",
            C: "A pattern for organizing file directories",
            D: "A method for compressing large codebases"
          },
          correct: "B",
          explanation: "Decomposition patterns are how you split large tasks: by feature layer (UI first, then API, then DB), by risk (safe refactors first, risky changes last), by dependency order (foundations before features). Good decomposition means each piece can be: implemented in one short session, verified with existing tests, committed as one meaningful unit, and reverted without touching other pieces."
        },
        {
          id: 4,
          question: "What git strategy best embodies Principle 4?",
          options: {
            A: "One giant commit at the end of a feature",
            B: "Force pushing to main regularly",
            C: "Feature branches + frequent small commits: each commit represents one verifiable step, branches isolate experimental work, and history tells a clear story of what changed and why",
            D: "Committing only when the entire feature is complete"
          },
          correct: "C",
          explanation: "Principle 4 in git: feature branches give you a sandbox (experiment without polluting main), frequent small commits give you granular reversibility (revert one step, not the whole feature), and meaningful commit messages give you the story of why changes were made. The 'big bang commit' — doing everything then committing once — is the anti-pattern: you can't isolate what broke or revert a single logical change."
        },
        {
          id: 5,
          question: "How does Plan Mode in Claude Code implement Principle 4?",
          options: {
            A: "Plan Mode prevents all changes, implementing Principle 4 by stopping decomposition",
            B: "Plan Mode lets the AI explore and decompose the task into steps BEFORE making any changes — the plan can be reviewed and corrected cheaply, before irreversible implementation begins",
            C: "Plan Mode automatically creates atomic commits",
            D: "Plan Mode only works for decomposition of mathematical problems"
          },
          correct: "B",
          explanation: "Plan Mode embodies Principle 4: Claude reads files and proposes a decomposed plan of steps without making any changes. You review: are the steps in the right order? Is each step truly atomic? Is anything missing? Correcting a decomposition plan costs seconds. Correcting a half-executed wrong decomposition costs hours. Plan Mode shifts decomposition from implicit (happens during execution) to explicit (reviewed before execution)."
        },
        {
          id: 6,
          question: "Scenario: You ask Claude to 'refactor the entire authentication system.' It makes 47 changes across 15 files in one session and creates a single commit. When a login bug appears two days later, what is the core P4 problem you're now facing?",
          options: {
            A: "The commit message is probably unclear",
            B: "With 47 changes in one commit you cannot isolate which change introduced the bug — you must either revert everything (losing all refactoring) or binary-search through 47 changes manually to find the culprit",
            C: "The refactoring should have been done in a separate branch",
            D: "There are too many files changed for a code review"
          },
          correct: "B",
          explanation: "The big-bang commit anti-pattern: one commit with 47 changes has no granularity for debugging. With atomic commits (one per logical change), you'd run `git bisect` to find the exact commit that introduced the bug in minutes. With a single large commit, your options are: revert everything (losing the good refactoring) or manually hunt through 47 changes. P4 says: atomic commits = granular reversibility = fast debugging."
        },
        {
          id: 7,
          question: "Scenario: Halfway through implementing a new API endpoint with Claude, you realize the database schema approach is fundamentally wrong. You've been working for 45 minutes and made 3 atomic commits. What does good P4 practice enable you to do?",
          options: {
            A: "You must continue with the wrong approach since too much work is done",
            B: "Run `git reset --hard HEAD~3` to cleanly revert all 3 commits, returning to the state before the wrong approach — losing 45 minutes but not the entire session, then start fresh with the correct schema",
            C: "You should delete the feature branch and start over from main",
            D: "Continue with the wrong approach and fix it in a follow-up PR"
          },
          correct: "B",
          explanation: "Reversibility as safety net: 3 atomic commits = 3 clean revert points. `git reset --hard HEAD~3` returns you to the state before you started. 45 minutes is lost, but: you now know exactly what not to do, the main branch is untouched, and the correct approach can begin immediately. This is why P4 advocates frequent small commits — each commit is an insurance checkpoint. The wrong approach costs 45 minutes, not the whole sprint."
        },
        {
          id: 8,
          question: "Scenario: Claude is implementing a new notification system and proposes to 'create the notification service, add email templates, integrate with SendGrid, write all tests, and update the docs in one step.' Using P4, how should you redirect Claude?",
          options: {
            A: "Accept the plan — doing everything at once is more efficient",
            B: "Break it into atomic steps: Step 1: notification service interface and unit tests (commit). Step 2: email template logic (commit). Step 3: SendGrid integration with sandbox (commit). Step 4: integration tests (commit). Step 5: documentation (commit).",
            C: "Ask Claude to do it in two steps instead of one",
            D: "Tell Claude to start with the documentation first"
          },
          correct: "B",
          explanation: "Claude's proposed 'one step' bundles 5 separate concerns — this is the kitchen sink anti-pattern for implementation. Decomposing into atomic steps: each step is independently testable (tests pass before next step begins), independently reversible (if SendGrid integration breaks, revert step 3 only), and independently reviewable. If step 3 fails, steps 1 and 2 are safe in git history and don't need re-doing."
        },
        {
          id: 9,
          question: "Scenario: You're using Plan Mode and Claude presents a 12-step plan. Step 7 says: 'Refactor the user module AND update all API routes that use it.' You notice this before execution. What's wrong with Step 7 and how should you fix it?",
          options: {
            A: "Nothing is wrong — combining related changes is efficient",
            B: "Step 7 violates atomicity by bundling two separate concerns. Split it: Step 7a: Refactor user module (tests pass), Step 7b: Update API routes (tests pass). If 7b breaks, you can revert routes without touching the refactoring.",
            C: "Step 7 is too complex and should be done last",
            D: "Steps should be longer, not shorter"
          },
          correct: "B",
          explanation: "Plan review is the cheapest time to fix decomposition. 'Refactor AND update' violates the atomic principle — two concerns bundled together. If the route updates introduce bugs, you can't tell if the refactoring caused them or the route changes did. Separating them: after Step 7a the test suite still passes (refactoring is verified safe). After Step 7b, any new failures are definitively caused by route changes. Atomic steps = unambiguous causality."
        },
        {
          id: 10,
          question: "Scenario: A developer argues: 'I don't use feature branches — I commit directly to main with small commits.' Is this consistent with Principle 4, and what risk remains?",
          options: {
            A: "This is fully consistent with P4 — branch strategy is irrelevant",
            B: "Small commits to main are better than big commits, but feature branches add an important layer: experimentation safety. On main, even small commits are immediately shared with teammates; a branch lets you try an approach, realize it's wrong, and `git branch -D` it without polluting shared history",
            C: "This is completely wrong — P4 requires feature branches",
            D: "Small commits to main are ideal and have no downsides"
          },
          correct: "B",
          explanation: "P4 has two components: small commits (for granular reversibility) AND feature branches (for experimentation safety). Small commits to main is better than large commits, but lacks the isolation of a branch. A branch lets you experiment freely — wrong approach? Delete the branch. Main, even with small commits, represents shared state. The combination (feature branch + atomic commits within it) gives both: experimentation safety AND granular revert capability."
        },
        {
          id: 11,
          question: "Scenario: You ask Claude to 'add user profile pictures' to your application. Claude proposes a plan: Step 1: Add avatar_url column to users table. Step 2: Create upload endpoint. Step 3: Build UI component. Step 4: Add image resizing service. Step 5: Write integration tests. Step 6: Update user API responses. Which P4 critique applies to this plan?",
          options: {
            A: "The plan is well-structured — each step is atomic and in the right order",
            B: "Steps 2 and 4 are bundled concerns — the upload endpoint (Step 2) and image resizing (Step 4) should be one atomic step since they're tightly coupled. Better: Step 2: Upload endpoint with resizing (commit, verify), Step 3: UI component (commit, verify), Step 5: Integration tests (commit), Step 6: API updates (commit)",
            C: "The plan has too many steps — Claude should combine them for efficiency",
            D: "Step 1 should come last since database changes are risky"
          },
          correct: "B",
          explanation: "P4 decomposition review: the upload endpoint and image resizing are tightly coupled — the endpoint needs resizing to function correctly. Bundling them as separate steps means Step 2 produces a broken endpoint (uploads without resizing). Better to make them one atomic step: upload + resize together, verified by tests before moving to the UI. Plan Mode (cheap correction) is the right time to catch this before implementation begins."
        },
        {
          id: 12,
          question: "Scenario: Claude is refactoring a 2,000-line authentication module. It proposes to extract 8 functions into separate files, update 15 import statements, and rename 12 variables — all in one commit on the main branch. What P4 risks does this create?",
          options: {
            A: "No risks — refactoring is safe as long as tests pass",
            B: "Three risks: (1) One giant commit means you can't isolate which extraction introduced a bug, (2) Working on main pollutes shared history if something goes wrong, (3) 15 import updates + 12 renames + 8 extractions bundled together makes code review nearly impossible. Correct approach: feature branch + one extraction per commit",
            C: "The only risk is the variable renaming — imports and extractions are safe",
            D: "Refactoring should never be done with AI assistance"
          },
          correct: "B",
          explanation: "P4 applied to refactoring: feature branch isolates the work (experimentation safety), one extraction per commit (granular reversibility — if extraction #3 breaks tests, revert only that commit), and small diffs make code review tractable (reviewers can understand one extraction at a time). The 'big bang refactor' anti-pattern bundles everything into one unreviewable, un-debuggable commit."
        },
        {
          id: 13,
          question: "Scenario: You're implementing a notification system with Claude. After Step 1 (notification service interface) and Step 2 (email template logic), both committed and tested, Claude proposes Step 3: 'Integrate with SendGrid AND Slack AND SMS provider Twilio.' How should you apply P4 to redirect this?",
          options: {
            A: "Accept the plan — integrating all three at once is more efficient",
            B: "Split into three atomic steps: Step 3a: SendGrid integration with sandbox tests (commit, verify). Step 3b: Slack webhook integration (commit, verify). Step 3c: Twilio SMS integration (commit, verify). If Step 3b fails, Steps 3a is safe and doesn't need re-doing",
            C: "Tell Claude to skip Slack and SMS — email is enough",
            D: "Combine all three into Step 3 but write more tests"
          },
          correct: "B",
          explanation: "P4 decomposition: three independent integrations bundled into one step creates a single point of failure. If the bundled step fails, you can't tell which integration caused it, and you may need to redo all three. Atomic steps: each integration is independently testable, independently reversible, and independently reviewable. If SendGrid works but Slack fails, you revert only the Slack integration — the email system remains functional."
        },
        {
          id: 14,
          question: "Scenario: Claude is halfway through a 6-step plan to add a caching layer. Step 3 introduced a subtle bug that breaks 4 tests. Claude has already completed Steps 4, 5, and 6 on top of the buggy Step 3. What does good P4 practice recommend for this situation?",
          options: {
            A: "Fix the bug inline while keeping Steps 4-6 changes",
            B: "Revert to the checkpoint before Step 3 (`git reset --hard` to the Step 2 commit), fix Step 3's approach, then re-implement Steps 4-6 on the corrected foundation. Building on a buggy foundation compounds errors and makes debugging exponentially harder",
            C: "Continue to Step 7 and fix everything at the end",
            D: "Update the tests to pass with the buggy behavior"
          },
          correct: "B",
          explanation: "P4 reversibility enables clean recovery: each commit is a checkpoint. When Step 3's bug is discovered, `git reset --hard` to the Step 2 commit cleanly removes Steps 3-6. Then re-implement Step 3 with the corrected approach. Building Steps 4-6 on top of buggy Step 3 creates a tangle — you can't tell which failures are from Step 3's bug vs. Steps 4-6's logic. Revert to the last known-good state and rebuild."
        },
        {
          id: 15,
          question: "Scenario: A team uses Plan Mode for a feature addition. Claude presents a 4-step plan. The team lead notices Step 2 says 'Update the database schema and migrate all existing data.' The dataset has 2 million rows. What P4 concern should the team raise?",
          options: {
            A: "No concern — database migrations are routine",
            B: "Step 2 bundles two separate concerns with different risk profiles: schema change (low risk, fast) and data migration of 2M rows (high risk, slow, potentially requiring downtime). These should be separate steps: Step 2a: schema migration (commit, verify), Step 2b: data migration with progress monitoring and rollback plan (separate commit). If the migration fails, the schema change is already safe",
            C: "The data migration should happen first, then the schema change",
            D: "Claude should skip the data migration entirely"
          },
          correct: "B",
          explanation: "P4 decomposition by risk: schema changes (adding a column) are fast and reversible. Migrating 2M rows is slow, resource-intensive, and may fail partway through. Bundling them means if the migration fails, you're left with a half-migrated state and a schema change you can't easily revert. Separating them: after Step 2a the schema is ready (verified safe). Step 2b can be monitored, paused, or rolled back independently. Different risk profiles = different steps."
        }
      ]
    },
    {
      id: 5,
      title: "Principle 5: Persisting State in Files",
      mcqs: [
        {
          id: 1,
          question: "Why must AI context be persisted in files rather than relied upon in session memory?",
          options: {
            A: "Files are faster to read than memory",
            B: "AI sessions are stateless — each new session starts with no memory of previous work. Files survive session boundaries, making project knowledge durable and reproducible",
            C: "Memory is only available for premium accounts",
            D: "File-based state prevents the AI from changing its mind"
          },
          correct: "B",
          explanation: "Sessions are stateless — when you start a new Claude Code session, Claude has no memory of yesterday's decisions, the architecture discussions, or the constraints you established. Files solve this: CLAUDE.md, ADRs, spec documents, and context files persist across sessions. Without file-based state persistence, every session is a fresh start and you spend time re-establishing context."
        },
        {
          id: 2,
          question: "What is CLAUDE.md and what kind of information should it contain?",
          options: {
            A: "A file containing the Claude API key",
            B: "A project context file that Claude reads automatically — containing project description, tech stack, architectural decisions, key constraints, and conventions that AI needs to work effectively",
            C: "A markdown tutorial about using Claude",
            D: "A file listing all Claude Code commands"
          },
          correct: "B",
          explanation: "CLAUDE.md is the primary state persistence file: Claude reads it automatically when starting a session. It should contain: what the project does, the tech stack, architectural decisions and WHY they were made, constraints (never use X, always do Y), coding conventions, and current project status. Keep it under 60 lines — specific, actionable facts, not documentation prose."
        },
        {
          id: 3,
          question: "What is an ADR (Architecture Decision Record) and why is it relevant to Principle 5?",
          options: {
            A: "Automated Deployment Record — tracks when code was deployed",
            B: "Architecture Decision Record — a file documenting a significant architectural choice: the context, the decision made, the alternatives considered, and the reasoning. Persists institutional knowledge that would otherwise be lost.",
            C: "Advanced Debugging Record — tracks bugs and their fixes",
            D: "ADR is a hardware specification, not a software concept"
          },
          correct: "B",
          explanation: "ADRs persist the WHY behind architectural decisions. 'We use PostgreSQL instead of MongoDB because of our reporting requirements' is knowledge that lives in someone's head — until it's in an ADR. Future AI sessions (and future developers) can read why the decision was made, preventing it from being undone by someone who doesn't know the context. ADRs are state persistence for technical decisions."
        },
        {
          id: 4,
          question: "What is the difference between 'session memory' and 'file memory' in Principle 5?",
          options: {
            A: "Session memory is faster; file memory is larger",
            B: "Session memory exists only within one conversation and disappears when it ends; file memory persists on disk across all sessions, enabling reproducibility and shared context",
            C: "They are the same thing in modern AI systems",
            D: "File memory is only for the operating system; session memory is for the application"
          },
          correct: "B",
          explanation: "Session memory = what Claude knows within the current conversation window. It's temporary, ephemeral, and lost when the session ends. File memory = content in files on disk that Claude can read. It's permanent, reproducible (anyone can read it), and shareable. The practical difference: session memory explains today's decisions, file memory ensures tomorrow's session can continue where today's left off."
        },
        {
          id: 5,
          question: "What problem does Principle 5 solve that's sometimes called 'Groundhog Day sessions'?",
          options: {
            A: "Sessions that repeat because of a bug in the AI's loop detection",
            B: "Sessions where the AI re-asks questions already answered in previous sessions, rediscovers context already established, and repeats mistakes already corrected — because no state was persisted",
            C: "Sessions that take exactly the same time every day",
            D: "A reference to the movie where the same code is refactored repeatedly"
          },
          correct: "B",
          explanation: "Groundhog Day sessions: every session starts with re-explaining the project, re-establishing why certain decisions were made, correcting the same misunderstandings, and re-discovering the same constraints. This is pure waste. Principle 5 prevents it: CLAUDE.md contains what the AI needs to know, ADRs explain the decisions, context files document constraints — the AI reads files and is immediately oriented."
        },
        {
          id: 6,
          question: "Scenario: You start a new Claude Code session and type 'Continue working on the payment feature.' Claude responds: 'I don't have context about your payment feature. Could you describe it?' What Principle 5 artifact was missing?",
          options: {
            A: "A README.md explaining the project",
            B: "CLAUDE.md containing: project description, current payment feature status, tech stack, architectural decisions made, and next steps — so Claude reads the file and is immediately oriented without re-explanation",
            C: "A detailed comment in the payment service file",
            D: "A Slack message summarizing the previous session"
          },
          correct: "B",
          explanation: "CLAUDE.md is the session bridge. Without it, every session starts cold — Claude has zero memory of previous work. With it, Claude reads: 'Payment feature: implementing Stripe webhook handler. Decision: using idempotency keys (ADR-003). Next: implement the refund endpoint.' The developer can say 'continue' and Claude knows exactly where to resume. P5 converts session memory (temporary) to file memory (permanent)."
        },
        {
          id: 7,
          question: "Scenario: Your team chose PostgreSQL six months ago for complex reporting needs. A new developer (with Claude) adds a user preferences feature using MongoDB 'because it's more flexible.' An ADR would have prevented this. What should the ADR document?",
          options: {
            A: "PostgreSQL installation instructions",
            B: "Decision, Context (complex reporting requires multi-table JOINs), Rationale (MongoDB rejected for JOIN performance), Alternatives considered, and Consequence (all new features must use PostgreSQL)",
            C: "A benchmark comparison of PostgreSQL vs MongoDB",
            D: "The database schema for all tables"
          },
          correct: "B",
          explanation: "ADRs persist institutional knowledge. The new developer had no access to the six-month-old team discussion. The ADR's Context + Rationale ('rejected MongoDB because our reporting queries require multi-table JOINs that MongoDB handles poorly at scale') makes the decision self-documenting. Reading it, the new developer understands not just WHAT was decided but WHY — preventing an uninformed reversal."
        },
        {
          id: 8,
          question: "Scenario: After a productive two-hour session that resolved a major architectural decision, you /clear to start fresh for a new task. The next day a teammate asks about the architectural decision. It's gone. What should have happened before /clear?",
          options: {
            A: "Nothing — chat history is always preserved",
            B: "Document the decision in an ADR or update CLAUDE.md BEFORE /clear — session memory must be converted to file memory before it is discarded. /clear is only safe after state has been persisted.",
            C: "Copy-paste the chat into a document",
            D: "Ask Claude to summarize the session"
          },
          correct: "B",
          explanation: "Session-to-file conversion is a required P5 step before /clear. Workflow: make architectural decision → document in ADR or CLAUDE.md → THEN /clear. Code implements the decision; ADRs document WHY the decision was made — that reasoning is irreplaceable and cannot be recovered after /clear. Convert session memory to file memory before discarding the session."
        },
        {
          id: 9,
          question: "Scenario: Claude uses callback-style async code in every session despite repeated corrections. You've fixed this in 5 different sessions. What is the P5 solution?",
          options: {
            A: "Accept callbacks and adapt your style",
            B: "Add to CLAUDE.md: 'Async Convention: Always use async/await. NEVER use callbacks or .then()/.catch() chains.' Claude reads this at every session start — one file edit permanently replaces 5+ repeated corrections.",
            C: "Write a linter rule to auto-convert callbacks",
            D: "Remind Claude at the start of each session"
          },
          correct: "B",
          explanation: "P5 solution: convert repeated corrections from session memory (you say it each time) to file memory (CLAUDE.md says it permanently). CLAUDE.md entries are loaded at every session start — the convention is established before Claude writes a single line. 'Mention at session start' requires human effort and can be forgotten; CLAUDE.md is automatic and consistent. One edit replaces N future corrections."
        },
        {
          id: 10,
          question: "Scenario: A developer re-explains their project architecture at the start of every Claude session (2-3 minutes each). They work with Claude daily, 5 days/week. What is the monthly waste and what does Principle 5 save?",
          options: {
            A: "The 2-3 minutes is worth it for accuracy",
            B: "~50 minutes/month of pure re-establishment (2.5 min × 20 days). P5 (CLAUDE.md) reduces this to 0. Bonus: verbal re-descriptions vary session to session introducing subtle inconsistencies; file memory is identical every time",
            C: "The time is negligible compared to session work",
            D: "CLAUDE.md maintenance costs more than the saved time"
          },
          correct: "B",
          explanation: "Compounding cost: 2.5 min × 20 days = 50 min/month, ~10 hours/year — just for context re-establishment. Beyond time: each verbal re-description may vary ('I think we decided not to use X' vs CLAUDE.md's authoritative 'Never use X — ADR-007'). CLAUDE.md is precise, consistent, automatic. The maintenance cost (updating it when decisions change) is far lower than the cumulative re-establishment cost."
        },
        {
          id: 11,
          question: "Scenario: Your team has been using Claude Code for 3 months. The CLAUDE.md file has grown to 200 lines covering project history, coding conventions, deployment procedures, team contact info, and detailed architecture diagrams. New Claude sessions take 30 seconds just to read the file. What P5 improvement should you make?",
          options: {
            A: "Nothing — more context is always better",
            B: "Trim CLAUDE.md to under 60 lines of essential facts (tech stack, key constraints, current status). Move domain-specific knowledge into skill files in .claude/skills/ — conventions into a coding-conventions skill, deployment steps into a deployment skill. CLAUDE.md should be a quick-start guide, not an encyclopedia",
            C: "Split CLAUDE.md into multiple files: one per team member",
            D: "Delete CLAUDE.md entirely and start fresh"
          },
          correct: "B",
          explanation: "The bloated CLAUDE.md anti-pattern: when everything goes in, the file becomes unwieldy and wastes context window on information not needed for every session. P5 best practice: CLAUDE.md stays under 60 lines with essential project facts. Move specialized knowledge into skills (.claude/skills/) that Claude loads only when relevant. This keeps sessions fast and focused — Claude reads what it needs, not everything that exists."
        },
        {
          id: 12,
          question: "Scenario: You finish a 2-hour session where you and Claude made a critical architectural decision: the notification system will use an event-driven pub/sub pattern instead of direct function calls. You're about to /clear to start a new task. What P5 step must you complete first?",
          options: {
            A: "Nothing — Claude will remember the decision in future sessions",
            B: "Document the decision in an ADR (or update CLAUDE.md) capturing: the context (why direct calls were problematic), the decision (pub/sub pattern), alternatives considered (direct calls, message queue, webhooks), and consequences (all new features must publish events, not call handlers directly). Only THEN is /clear safe",
            C: "Take a screenshot of the conversation for your records",
            D: "Add a comment in the main notification file explaining the decision"
          },
          correct: "B",
          explanation: "Session-to-file conversion is required before /clear. The architectural decision lives in session memory right now — if you /clear without persisting it, the next session (or next developer's session) has no record of WHY pub/sub was chosen. An ADR captures the reasoning so future sessions understand the constraint. A code comment helps but doesn't survive file refactoring; an ADR in /docs/decisions/ is discoverable and persistent."
        },
        {
          id: 13,
          question: "Scenario: A new developer joins the team and starts working with Claude on the payment module. Claude keeps suggesting MongoDB for new features despite the team's documented decision to use PostgreSQL. The team has an ADR-003 explaining the PostgreSQL decision, but Claude doesn't reference it. What is the most likely P5 failure?",
          options: {
            A: "Claude is intentionally ignoring the ADR",
            B: "The ADR exists but Claude doesn't know to read it — CLAUDE.md should reference the ADR location or include the key constraint ('All new features use PostgreSQL — see ADR-003 for rationale'). Without this pointer in CLAUDE.md, the ADR is invisible to Claude",
            C: "ADRs are not useful for AI agents — only verbal instructions work",
            D: "The new developer should tell Claude about PostgreSQL at the start of each session"
          },
          correct: "B",
          explanation: "P5 requires not just creating context files but making them discoverable. An ADR in /docs/decisions/adr-003.md is useless if Claude doesn't know to read it. CLAUDE.md should include: 'Database: PostgreSQL only. See /docs/decisions/adr-003.md for rationale. Never use MongoDB.' This makes the constraint visible at session start. The ADR provides the detailed WHY; CLAUDE.md provides the pointer and the rule."
        },
        {
          id: 14,
          question: "Scenario: Your team uses Claude Code across 4 different projects. Each project has its own CLAUDE.md. A developer working on Project A asks Claude about Project B's architecture. Claude has no knowledge. What P5 approach would enable cross-project context sharing?",
          options: {
            A: "Merge all 4 CLAUDE.md files into one mega-file",
            B: "Each project's CLAUDE.md should be project-specific (as designed). For cross-project questions, the developer should reference the other project's files directly using @file paths or ask Claude to read the relevant project's CLAUDE.md. P5 is about persisting state within a project's context, not creating a universal knowledge base",
            C: "Claude should automatically know about all projects in the workspace",
            D: "Create a single CLAUDE.md at the workspace root covering all projects"
          },
          correct: "B",
          explanation: "P5 scope: CLAUDE.md is project-scoped context. Each project has its own tech stack, conventions, and decisions. Merging them creates noise — Project A's developer doesn't need Project B's deployment details. For cross-project work, explicitly reference the other project's files (@project-b/CLAUDE.md). This keeps each project's context focused and accurate while still allowing cross-reference when needed."
        },
        {
          id: 15,
          question: "Scenario: You've been working with Claude on a feature for a week. The CLAUDE.md file was written at the project's start and hasn't been updated. Claude now keeps suggesting approaches that conflict with decisions you made during the week (e.g., using Redis for caching, which you decided against on Day 3). What P5 practice has been neglected?",
          options: {
            A: "Claude should have better memory",
            B: "CLAUDE.md must be updated as decisions are made — it's a living document, not a one-time setup. The 'never use Redis' decision from Day 3 should have been added to CLAUDE.md immediately. Stale context files are worse than no context files because they give false confidence",
            C: "You should create more ADRs instead of updating CLAUDE.md",
            D: "The decisions should have been communicated verbally each session"
          },
          correct: "B",
          explanation: "P5 requires maintaining context files as the project evolves. CLAUDE.md at project start captures initial state, but every architectural decision, constraint change, or convention update must be reflected in the file. Stale CLAUDE.md is dangerous: Claude reads 'use caching for performance' and suggests Redis — the file doesn't say 'Redis rejected on Day 3 due to infrastructure constraints; use in-memory cache instead.' Update CLAUDE.md as you go, or it becomes a liability."
        }
      ]
    },
    {
      id: 6,
      title: "Principle 6: Constraints and Safety",
      mcqs: [
        {
          id: 1,
          question: "What is the Safety Mantra and what does it mean in practice?",
          options: {
            A: "Always back up your code before letting AI touch it",
            B: "'As long as I haven't git pushed, I am the master of my machine' — local changes can always be undone (reverted, reset), so the moment of no return is the push, which you control",
            C: "Never give AI write access to any files",
            D: "Always run AI in a Docker container"
          },
          correct: "B",
          explanation: "The Safety Mantra: 'As long as I haven't git pushed, I am the master of my machine.' Local changes are always recoverable: uncommitted changes can be reverted with git checkout, commits can be reset. Even deleted files can often be recovered if the deletion isn't committed. The push is the point of no return — sharing with others, deploying to production. Controlling the push controls the risk."
        },
        {
          id: 2,
          question: "What are the five categories in the Risk Spectrum for AI development?",
          options: {
            A: "Low, Medium, High, Critical, Catastrophic",
            B: "Data Loss, Security Vulnerabilities, Cost Overruns, Reputation Damage, Workflow Disruption",
            C: "Syntax errors, Logic errors, Runtime errors, Performance issues, Security issues",
            D: "Frontend, Backend, Database, Network, Infrastructure"
          },
          correct: "B",
          explanation: "The five risk categories: 1) Data Loss (rm -rf, overwriting files — hours/weeks of lost work), 2) Security Vulnerabilities (hardcoded credentials, SQL injection — system compromise), 3) Cost Overruns (infinite loops, unthrottled API calls — unexpected cloud bills), 4) Reputation Damage (bugs corrupting user data, privacy violations — lost trust), 5) Workflow Disruption (broken CI/CD, convention violations — team friction)."
        },
        {
          id: 3,
          question: "What are the five layers of the Safety Hierarchy (Defense in Depth)?",
          options: {
            A: "Frontend, API, Service, Database, Infrastructure",
            B: "Technical Limits → Permission Controls → Environment Isolation → Process Controls → Human Verification (each layer is a backup if the inner layer fails)",
            C: "Development, Testing, Staging, Production, Archive",
            D: "Read, Write, Execute, Admin, Root"
          },
          correct: "B",
          explanation: "Defense in Depth for AI safety — five layers (inner to outer): Layer 1: Technical Limits (hard constraints — read-only filesystem, whitelisted commands), Layer 2: Permission Controls (require approval for destructive ops), Layer 3: Environment Isolation (staging/sandbox, separate credentials), Layer 4: Process Controls (review diffs, run tests before commit), Layer 5: Human Verification (final review, manual approval for deploys). Multiple layers mean no single failure leads to disaster."
        },
        {
          id: 4,
          question: "What is the 'Confirming' permission model and when should you use it?",
          options: {
            A: "Auto-approve everything and confirm only deployments",
            B: "Auto-approve only read operations; require approval for ALL write operations, file modifications, and command execution — best for new AI collaboration, unfamiliar codebases, or learning phase",
            C: "Confirm every single operation including reads",
            D: "Only for use on production systems with real user data"
          },
          correct: "B",
          explanation: "The Confirming model: Claude can read freely (reads are safe and reversible by doing nothing), but every write, modification, or command execution requires your explicit approval. This means you see and approve each action before it happens. Best for: starting with a new AI tool, working in an unfamiliar codebase, or when you're still calibrating how much to trust the AI's judgment."
        },
        {
          id: 5,
          question: "What is the simplest effective sandbox for AI experimentation?",
          options: {
            A: "A Docker container with network isolation",
            B: "A git branch: `git checkout -b ai-experiment` — AI can do whatever it wants on the branch, and you can discard everything with `git checkout main && git branch -D ai-experiment`",
            C: "A virtual machine with no internet access",
            D: "A separate physical computer"
          },
          correct: "B",
          explanation: "A git branch is 90% of the sandbox most people need. Create `git checkout -b ai-experiment`, let the AI work freely, review the results. If anything went wrong: `git checkout main && git branch -D ai-experiment` — complete clean slate, zero risk. This is simpler and more practical than Docker containers for most development work, while still providing full reversibility."
        },
        {
          id: 6,
          question: "What is the 'Destructive Operations List' and why should you require approval for them?",
          options: {
            A: "A list of deprecated API methods to avoid",
            B: "Commands that cannot be undone without significant effort: rm, git reset --hard, git push --force, git clean -fd, DROP DATABASE, DELETE FROM without WHERE — these require confirmation because mistakes are expensive",
            C: "Operations that consume too much CPU",
            D: "A blacklist of programming languages"
          },
          correct: "B",
          explanation: "Destructive operations are commands where mistakes are expensive to recover: rm/rm -rf (deletes files, potentially unrecoverable), git reset --hard (discards all uncommitted work), git push --force (can overwrite others' commits), git clean -fd (removes untracked files), DROP DATABASE/TRUNCATE TABLE (data loss). Requiring explicit approval for these ensures you're aware before irreversible actions happen."
        },
        {
          id: 7,
          question: "What does 'Trust Gradualism' recommend as the path to giving AI more autonomy?",
          options: {
            A: "Start with full autonomy and restrict it if problems occur",
            B: "Four phases: Observation Only (AI reads, you apply manually) → Supervised Autonomy (AI makes changes, you review all diffs) → Selective Autonomy (AI handles safe ops autonomously) → Calibrated Autonomy (AI handles most ops, approval for novel/high-risk)",
            C: "Trust is binary — either trust the AI fully or not at all",
            D: "Grant autonomy based on the AI model version number"
          },
          correct: "B",
          explanation: "Trust Gradualism: Phase 1 (Week 1) Observation Only — AI reads and explains, you manually apply suggestions. Phase 2 (Weeks 2-4) Supervised Autonomy — AI makes changes in sandbox, you review every diff. Phase 3 (Month 2-3) Selective Autonomy — AI handles tests/linting autonomously, routine refactors within approved patterns. Phase 4 (Month 3+) Calibrated Autonomy — AI handles most things, approval only for novel/high-risk ops."
        },
        {
          id: 8,
          question: "What is the paradox of constraints described in Principle 6?",
          options: {
            A: "More constraints make AI less capable",
            B: "Constraints enable autonomy — good safety measures let you give AI MORE autonomy because you're confident mistakes are bounded, whereas no safety measures force you to be constantly on edge and restrict AI more",
            C: "Constraints are contradictory because they both enable and disable",
            D: "Safety and productivity are always in direct conflict"
          },
          correct: "B",
          explanation: "The paradox: constraints enable autonomy. Without good safety measures, you hover over every AI action, afraid to let it work independently because a mistake could be catastrophic. With good safety measures (reversibility, permission controls, sandboxing), you feel confident letting the AI work autonomously because you know errors are recoverable. Counterintuitively, better constraints lead to greater practical freedom."
        },
        {
          id: 9,
          question: "What is the emergency command sequence when something goes wrong with an AI operation?",
          options: {
            A: "Reboot the computer immediately",
            B: "Stop (Ctrl+C) → Assess (git status + git diff) → Revert if bad (git checkout -- . or git reset --hard) → If committed (git revert HEAD) → Post-incident review",
            C: "Delete the project and start over",
            D: "Email the AI provider for help"
          },
          correct: "B",
          explanation: "Emergency response: 1) Ctrl+C to stop the AI immediately, 2) git status and git diff to assess what changed, 3) git checkout -- . to undo uncommitted changes or git reset --hard for committed changes, 4) git revert HEAD if you need to undo a pushed commit cleanly. Then do a post-incident review: what happened? What safeguard failed? What constraint would have prevented this?"
        },
        {
          id: 10,
          question: "What is the purpose of the Guardrail Prompt Template?",
          options: {
            A: "A template for writing API documentation",
            B: "A structured prompt pattern defining FORBIDDEN actions (never do these), REQUIRED checks (always do these before acting), and escalation rules (if uncertain, ask) — encoding safety constraints in the conversation itself",
            C: "A template for generating test cases",
            D: "A format for writing commit messages"
          },
          correct: "B",
          explanation: "The Guardrail Prompt Template encodes safety as prompt constraints: FORBIDDEN section lists specific actions never to take (e.g., 'Never run git push without my approval'), REQUIRED section lists checks before risky operations (e.g., 'Before any destructive command, run pwd and show current directory'), and an escalation rule ('If unsure whether an action is safe, ask me first'). This makes safety constraints explicit and repeatable."
        },
        {
          id: 11,
          question: "Scenario: You give Claude unrestricted access to your codebase. While implementing a feature, it runs `rm -rf node_modules && npm install` — but the working directory was accidentally your home folder, deleting irreplaceable personal files. Which safety layer would have prevented this?",
          options: {
            A: "Layer 5 (Human Verification) — you should have been watching",
            B: "Layer 2 (Permission Controls) — `rm` on any directory should require explicit approval, and Layer 1 (Technical Limits) — a whitelist of allowed commands excluding destructive operations outside the project directory",
            C: "Layer 3 (Environment Isolation) — use a Docker container",
            D: "Layer 4 (Process Controls) — review diffs before applying"
          },
          correct: "B",
          explanation: "Defense in depth: Layer 1 (Technical Limits) would have prevented execution via command whitelist — `rm -rf` outside /project is blocked. Layer 2 (Permission Controls) would have required your approval for any `rm` command. Either layer stops this incident. The lesson: rm is on the Destructive Operations List specifically because the wrong working directory turns a cleanup command into data loss. Always require approval for rm."
        },
        {
          id: 12,
          question: "Scenario: You've been working with Claude for 3 months on a familiar codebase with a track record of reliable work. Claude asks permission before every `git status` and `ls` command. This is slowing you down. What permission model adjustment is appropriate?",
          options: {
            A: "Disable all permission prompts with --dangerously-skip-permissions",
            B: "Upgrade to the Permissive model: auto-approve read operations (ls, cat, grep, git status/diff/log) and test execution; require approval only for writes, git push, deletions, and package installation",
            C: "Switch to Confirming model — require approval for everything",
            D: "Keep the current model; safety cannot be traded for speed"
          },
          correct: "B",
          explanation: "Trust Gradualism in action: after 3 months of reliable collaboration on a familiar codebase, you've earned the confidence to move to Permissive mode. Read operations and test execution are inherently safe (they can't modify state). Auto-approving them doesn't increase risk but significantly increases flow. The Permissive model still requires approval for the genuinely risky operations — writes, pushes, deletions, installs."
        },
        {
          id: 13,
          question: "Scenario: Claude is implementing a database migration and generates SQL: `DELETE FROM users WHERE last_login < '2022-01-01'`. It asks if you want to proceed. How should you apply the Constraints and Safety principle before approving?",
          options: {
            A: "Approve immediately — Claude generated the SQL, so it must be correct",
            B: "First run `SELECT COUNT(*) FROM users WHERE last_login < '2022-01-01'` to see the affected row count, verify you have a backup, review the WHERE clause, then approve only if the count and criteria match your expectation",
            C: "Reject it — DELETE is always too dangerous",
            D: "Ask Claude to rewrite it as an UPDATE instead"
          },
          correct: "B",
          explanation: "DELETE is on the Destructive Operations List. The REQUIRED safety check: see the count before deleting ('Before any destructive command, show me what will be affected'). SELECT COUNT first reveals: 50,000 users or 5? That changes your confidence. Verify backup exists. Confirm the date threshold is correct (2022 vs 2020?). Then approve with full information. The Safety Mantra: as long as you haven't approved, you're in control."
        },
        {
          id: 14,
          question: "Scenario: Your team is starting to use Claude Code for the first time. Nobody has used AI coding tools before. According to Trust Gradualism, what Phase should you start in and what should the first week look like?",
          options: {
            A: "Phase 4 (Calibrated Autonomy) — trust the AI fully from day one",
            B: "Phase 1 (Observation Only) — Claude reads files and explains code, you manually apply any suggestions. This builds intuition about AI behavior before granting any write access",
            C: "Phase 3 (Selective Autonomy) — let Claude handle tests and linting autonomously",
            D: "Phase 2 (Supervised Autonomy) — let Claude make changes but review every diff"
          },
          correct: "B",
          explanation: "Trust Gradualism starts at Phase 1 for new AI collaboration: Week 1 = Observation Only. Claude reads, analyzes, explains — you apply changes manually. This serves two purposes: you learn what Claude does and doesn't understand about your codebase, and Claude's explanations help you verify its reasoning before trusting its execution. Starting at Phase 4 (full autonomy) with an unfamiliar tool on an unfamiliar codebase is the highest-risk configuration."
        },
        {
          id: 15,
          question: "Scenario: Claude is mid-task implementing a complex feature. You notice it's reading from the production database instead of the staging database. You haven't approved any production database writes yet, but reads are happening. What should you do immediately?",
          options: {
            A: "Let it continue — reads from production are harmless",
            B: "Press Ctrl+C immediately (stop the AI), then run `git status` and `git diff` to assess what's happened, verify no writes occurred, then restart the session pointing to the staging database",
            C: "Ask Claude to switch to staging in its next step",
            D: "Accept that production reads happened and monitor for writes"
          },
          correct: "B",
          explanation: "Real-time observability enables real-time intervention. You saw the wrong database being accessed — Ctrl+C stops Claude before any writes can happen (P7: Real-Time Observation = intervention window). Assess damage: git diff confirms no files changed, production DB logs confirm only reads occurred. Then restart with the correct environment variables pointing to staging. The lesson: watching real-time is what enables Ctrl+C safety."
        }
      ]
    },
    {
      id: 7,
      title: "Principle 7: Observability",
      mcqs: [
        {
          id: 1,
          question: "What is observability in the context of AI development workflows?",
          options: {
            A: "Using monitoring tools to track server uptime",
            B: "Making AI workflows transparent, traceable, and debuggable — seeing what actions the AI took, why it took them, and what the outcomes were",
            C: "A synonym for logging in software applications",
            D: "The ability to observe AI training runs"
          },
          correct: "B",
          explanation: "Observability in AI workflows: making AI actions visible (what files were read, what changes were made, what commands ran), rationale visible (why the AI chose a particular approach), and results visible (did tests pass, what actually changed). Without observability, AI is a black box — you see input and output but not the process, making debugging impossible and trust-building difficult."
        },
        {
          id: 2,
          question: "What are the Three Pillars of Observability?",
          options: {
            A: "Availability, Reliability, Scalability",
            B: "Action Visibility (what did it do?), Rationale Visibility (why did it do it?), Result Visibility (what was the outcome?)",
            C: "Logs, Metrics, Traces",
            D: "Input, Process, Output"
          },
          correct: "B",
          explanation: "Three Pillars: 1) Action Visibility — see each action: Read [file], Analyze [finding], Edit [file], Run [command], Complete. 2) Rationale Visibility — understand the reasoning: 'chose validateToken() because it matches the pattern in other auth functions.' 3) Result Visibility — see outcomes: tests passed, 5 lines added, coverage maintained. All three together let you understand, trust, and debug AI work."
        },
        {
          id: 3,
          question: "What is the 'Black Box Problem' in AI-assisted development?",
          options: {
            A: "When AI refuses to explain its reasoning",
            B: "When AI makes changes without visible steps — you see 'Done!' but not what actually changed, making debugging impossible and trust-building impossible",
            C: "When error messages are encrypted",
            D: "When source code is minified or obfuscated"
          },
          correct: "B",
          explanation: "The Black Box Problem: AI says 'Done!' You have no idea what it actually did. When problems surface later, you spend hours debugging because there's no record of what changed or why. The contrast: with observability, you see READ → ANALYZE → EDIT → TEST → COMPLETE at each step, with rationale. You can spot the wrong turn immediately instead of excavating it hours later."
        },
        {
          id: 4,
          question: "What is the Warning Pattern in activity logs?",
          options: {
            A: "READ → ANALYZE → EDIT → VERIFY → COMPLETE (the correct pattern)",
            B: "READ → EDIT → EDIT → EDIT → [NO VERIFICATION] → COMPLETE — multiple edits without verification suggests the AI is guessing and fixing, not working from understanding",
            C: "FAIL → FAIL → FAIL → GIVE UP",
            D: "COMPLETE → VERIFY → EDIT (doing it in the wrong order)"
          },
          correct: "B",
          explanation: "Log patterns reveal workflow quality: Success Pattern (READ → ANALYZE → EDIT → VERIFY → COMPLETE) = AI understood before acting, verified after. Warning Pattern (READ → EDIT → EDIT → EDIT → [no VERIFY] → COMPLETE) = multiple edits with no verification — AI is iterating without checking, likely guessing. Failure Pattern (READ → EDIT → VERIFY → FAIL → EDIT → FAIL → GAVE UP) = persistent failure, worth manual intervention."
        },
        {
          id: 5,
          question: "What is the '2-Minute Audit' and what three checks does it include?",
          options: {
            A: "A performance benchmark that takes 2 minutes to run",
            B: "After every AI task: (1) git diff — do changes match what AI claimed? (2) AI summary review — does the summary match the diff? (3) Quick test run — do tests still pass?",
            C: "A code review process taking exactly 2 minutes",
            D: "Two-minute standup meeting reviewing AI output"
          },
          correct: "B",
          explanation: "The 2-Minute Audit: after every AI task, spend exactly 2 minutes: 1) Run git diff — do the actual file changes match what the AI said it did? If AI said 'added validation' but diff shows no change to validators, that's a silent failure. 2) Review AI's final summary — does it match the diff you just saw? 3) Run npm test or equivalent — do tests pass after the changes? If git diff doesn't match summary, you've found a silent failure."
        },
        {
          id: 6,
          question: "What is 'AI Rationalization' and why is it dangerous?",
          options: {
            A: "When AI justifies its choices using formal logic",
            B: "AI can sound completely confident and provide convincing reasons even when wrong — 'this will work because X' sounds authoritative but if tests fail, the reasoning was rationalization not truth",
            C: "When AI refuses to explain its actions",
            D: "AI making optimizations for efficiency reasons"
          },
          correct: "B",
          explanation: "AI Rationalization warning: AI can generate fluent, confident-sounding explanations for wrong decisions. 'I used approach X because it aligns with the existing pattern Y' sounds authoritative. But if the tests fail after this approach, the rationalization was post-hoc justification, not reliable reasoning. Rule: if rationale says 'this will work' but tests say it doesn't — trust the tests. Observability means trusting concrete results over explanations."
        },
        {
          id: 7,
          question: "What are the three Observability Design Patterns?",
          options: {
            A: "Read, Write, Execute",
            B: "Explain Before Executing (AI gives plan before acting), Checkpoint After Major Steps (AI confirms and awaits permission), Summary After Completion (AI provides files modified, test results, next steps)",
            C: "Log, Monitor, Alert",
            D: "Plan, Implement, Review"
          },
          correct: "B",
          explanation: "Three patterns that build observability into AI collaboration: 1) Explain Before Executing — ask AI for step-by-step intentions before it acts; you can catch wrong directions before any changes. 2) Checkpoint After Major Steps — AI confirms each step completion, awaits your go-ahead; gives you intervention points. 3) Summary After Completion — AI provides a structured report: files modified, change counts, test results, git status. Together these make every session auditable."
        },
        {
          id: 8,
          question: "Where are Claude Code's activity logs stored, and what do they contain?",
          options: {
            A: "/var/log/claude/ — system-level daemon logs",
            B: ".claude/activity-logs/prompts.jsonl and .claude/activity-logs/subagent-usage.jsonl — structured records of every prompt, tool use, and subagent invocation",
            C: "In the cloud at Claude's servers, not locally",
            D: "In the browser's localStorage when using the web interface"
          },
          correct: "B",
          explanation: "Claude Code activity logs: .claude/activity-logs/prompts.jsonl (records every prompt and tool use in the session) and .claude/activity-logs/subagent-usage.jsonl (records all subagent invocations). These can be queried with jq: filter for errors (jq 'select(.error != null)'), filter for failures (jq 'select(.tool_result.success == false)'). The --verbose flag provides real-time observability during execution."
        },
        {
          id: 9,
          question: "What is the practical difference between Real-Time Observation and Post-Mortem Observation?",
          options: {
            A: "Real-time is more accurate; post-mortem is faster",
            B: "Real-time: watching AI work as it happens — you can intervene (Ctrl+C) before damage occurs. Post-mortem: reviewing logs after the fact — how you debug problems and identify patterns to improve future sessions",
            C: "Post-mortem is only for production incidents, not development",
            D: "They are the same thing, just with different names"
          },
          correct: "B",
          explanation: "Real-Time vs Post-Mortem: Real-time observation (watching the session unfold) is your intervention window — if you see READ of the wrong directory, hit Ctrl+C before any edits happen. Cost of intervention: seconds. Post-mortem (reviewing logs, git history after the fact) is how you debug what went wrong and improve future behavior. Use real-time for prevention; post-mortem for learning."
        },
        {
          id: 10,
          question: "How does observability enable trust in AI collaboration?",
          options: {
            A: "Trust comes only from AI accuracy, not from observability",
            B: "Transparency earns trust — when you can see what AI is doing, you understand its decisions, can correct mistakes early, learn its patterns, and feel confident giving it more autonomy",
            C: "Observability reduces trust by showing how many errors AI makes",
            D: "Trust is irrelevant in AI collaboration — only results matter"
          },
          correct: "B",
          explanation: "Observability builds trust: When you can see each action and its rationale, you understand the AI's decision-making process. When you catch a mistake early (because you were watching), you know the safety system works. Over time, you learn the AI's patterns — when it's reliable, when it needs guidance. This accumulated understanding leads to calibrated trust: enough autonomy for efficiency, enough oversight for safety."
        },
        {
          id: 11,
          question: "Scenario: Claude says 'I've added the password reset feature.' Your `git diff` shows 15 files changed. Claude's summary mentions only 3 files. What does this discrepancy reveal, and what should you do?",
          options: {
            A: "The diff is wrong — trust Claude's summary",
            B: "This is a 'silent failure' of P7 — the summary does not match reality. You must review ALL 15 changed files to understand what actually changed. The 12 unmentioned files may contain important (possibly unintended) modifications.",
            C: "Claude probably optimized some other files while working — this is normal",
            D: "Git diff is showing cached changes from a previous session"
          },
          correct: "B",
          explanation: "2-Minute Audit in action: git diff is ground truth; AI summary is what Claude believes it did. When these diverge, trust the diff. The 12 unreported files need investigation: were they intentional changes? Did Claude silently modify files you didn't ask about? This is the 'silent failure' pattern — where things happen without being visible in the summary. The audit catches it; accepting the summary without checking doesn't."
        },
        {
          id: 12,
          question: "Scenario: You're debugging why a feature isn't working. The activity log shows: READ auth.js → EDIT auth.js → EDIT auth.js → EDIT auth.js → COMPLETE. No TEST entries. What does this log pattern tell you?",
          options: {
            A: "Claude worked efficiently by making multiple targeted edits",
            B: "This is the Warning Pattern: multiple EDITs without any VERIFY step means Claude kept changing code without checking if changes worked. The feature was never tested — 'looks done' is the likely state.",
            C: "The log is incomplete — TEST steps are not recorded",
            D: "This is the Success Pattern — multiple edits before completion is normal"
          },
          correct: "B",
          explanation: "Warning Pattern (READ → EDIT → EDIT → EDIT → COMPLETE with no TEST): multiple edits without verification suggests Claude was guessing — making a change, realizing it wasn't right, making another change, guessing again. Without running tests after each edit, Claude has no feedback signal. The feature is in an unknown state. Contrast with Success Pattern (READ → ANALYZE → EDIT → VERIFY → COMPLETE): one deliberate change, verified to work."
        },
        {
          id: 13,
          question: "Scenario: You asked Claude to 'add input validation to the signup form.' It says 'Done!' You run the 2-Minute Audit: git diff shows a new validateEmail() function was added to utils.js. But users can still submit invalid emails. What does this tell you about where to look?",
          options: {
            A: "The validateEmail function has a bug",
            B: "The validateEmail function exists but is never called in the signup form's submit handler — it was created but not integrated. Rationale Visibility (WHY it was placed in utils.js vs. called inline) would have revealed the integration gap.",
            C: "The email regex is incorrect",
            D: "The validation runs server-side, not client-side"
          },
          correct: "B",
          explanation: "This is the 'looks done' trap diagnosed via observability. The diff showed the function exists (Action Visibility: what was created). But Result Visibility (do users actually get validation errors?) failed. Rationale Visibility would have helped: 'I created validateEmail in utils.js and will call it from the onSubmit handler' — if the plan mentioned integration, you'd have checked that it was connected. The 2-Minute Audit (run the form with invalid input) would have caught this."
        },
        {
          id: 14,
          question: "Scenario: Claude implements a performance optimization and gives confident rationale: 'I used a hash map lookup (O(1)) instead of array search (O(n)) which will dramatically improve performance.' But your benchmarks show no improvement. What does Principle 7 say about this situation?",
          options: {
            A: "Claude's analysis must be correct — check your benchmark setup",
            B: "Trust the benchmark over the rationale. This is AI Rationalization — the explanation sounds authoritative but the Result Visibility (benchmark data) contradicts it. Investigate: maybe the bottleneck was elsewhere, or the data set is too small to show O(n) vs O(1) difference.",
            C: "The optimization is correct but needs more time to show results",
            D: "Benchmarks are unreliable — trust the theoretical analysis"
          },
          correct: "B",
          explanation: "AI Rationalization warning: 'hash map = O(1) = faster' is sound theory. But theory and practice diverge when: the data set is small (O(n) vs O(1) difference is negligible at n=100), the bottleneck is actually I/O not computation, or the hash map has high constant overhead. Result Visibility (benchmark) contradicts the rationale — trust the concrete result. The next step: profiling to find the actual bottleneck, not re-arguing the theoretical analysis."
        },
        {
          id: 15,
          question: "Scenario: You want Claude to implement a complex multi-step data pipeline. Which observability pattern should you establish at the start of the session to ensure maximum visibility?",
          options: {
            A: "Tell Claude to work as fast as possible and show results at the end",
            B: "Explain Before Executing (Claude describes each step's plan before acting) + Checkpoint After Major Steps (Claude confirms completion of each pipeline stage and awaits your go-ahead) + Summary After Completion (files changed, test results, data samples)",
            C: "Ask Claude to log everything to a file during execution",
            D: "Run the pipeline in a Docker container for isolation"
          },
          correct: "B",
          explanation: "Three observability patterns combined: 1) Explain Before Executing — Claude outlines the pipeline architecture (you catch design issues before any code). 2) Checkpoint After Major Steps — Claude confirms 'Ingestion stage complete: 10,000 records loaded, schema validated' and awaits approval before transformation stage (intervention points). 3) Summary After Completion — files modified, record counts, test results. Together: you have full visibility at every stage of a complex multi-step task."
        }
      ]
    },
    {
      id: 8,
      title: "Operational Best Practices",
      mcqs: [
        {
          id: 1,
          question: "What are the four phases of the recommended workflow in Claude Code?",
          options: {
            A: "Write, Test, Debug, Deploy",
            B: "EXPLORE (Plan Mode, read files) → PLAN (Design, review plan) → IMPLEMENT (Normal Mode, verified steps) → COMMIT (Save with git)",
            C: "Analyze, Design, Code, Review",
            D: "Prompt, Generate, Accept, Push"
          },
          correct: "B",
          explanation: "Four-phase workflow: EXPLORE (enter Plan Mode, Claude reads and gathers context, no changes), PLAN (Claude creates implementation plan, you review and correct using Ctrl+G), IMPLEMENT (switch to Normal Mode, Claude executes plan one verified step at a time), COMMIT (implementation complete and verified, Claude commits with descriptive message). The key: planning is cheap, implementing the wrong plan is expensive."
        },
        {
          id: 2,
          question: "What does the 'Escape Key' do in Claude Code, and when should you use it?",
          options: {
            A: "Closes the terminal entirely",
            B: "Single Esc stops Claude mid-response while preserving context — use when Claude is heading in an unproductive direction and you want to redirect without losing your conversation history",
            C: "Deletes the last message",
            D: "Switches between Plan Mode and Normal Mode"
          },
          correct: "B",
          explanation: "Single Esc = steering wheel: stops Claude mid-response, preserves full context. Use it when Claude's response is going the wrong direction — wrong approach, misunderstood requirement, heading toward over-engineering. You don't lose your work; you redirect. Double Esc (or /rewind) opens the checkpoint menu — your time machine to an earlier state. Single Esc corrects trajectory; double Esc reverses it."
        },
        {
          id: 3,
          question: "What is the Rule of Two for handling correction loops?",
          options: {
            A: "Always make exactly two passes of code review",
            B: "'If Claude misses the mark twice on the same fix, STOP. /clear and start fresh with a better prompt that includes what you learned from the two failures'",
            C: "Two developers must review all AI-generated code",
            D: "Run tests twice to confirm results"
          },
          correct: "B",
          explanation: "Rule of Two addresses the Correction Loop failure pattern: when you keep correcting the same misunderstanding, you're not solving the problem — you're fighting the context. After two misses: /clear (fresh context), write a better prompt that includes: what the actual goal is, what the two failed attempts tried, and why they were wrong. Fresh context + lesson-learned prompt produces better results than continued correction."
        },
        {
          id: 4,
          question: "What is the 'Interview Pattern' and when is it most valuable?",
          options: {
            A: "Asking the AI about its capabilities before starting",
            B: "For complex features: 'Don't code yet — interview me until you have a 100% clear spec' — Claude asks one question at a time, you answer, until requirements are fully captured before any implementation",
            C: "Recording interviews with users to gather requirements",
            D: "A pattern for interviewing job candidates with AI assistance"
          },
          correct: "B",
          explanation: "The Interview Pattern: tell Claude 'Don't code yet. Interview me until you have a 100% clear spec.' Claude shifts into requirements analyst mode, asking targeted questions one at a time about edge cases, user types, error handling, integrations. When complete, use the Golden Reset: copy the captured spec into a fresh session. Claude gets clean, precise requirements without the exploratory noise. Best for features where you don't yet know what you need."
        },
        {
          id: 5,
          question: "What is the 'Golden Reset (Fresh Session Trick)' and why does it improve results?",
          options: {
            A: "Resetting Claude's training data for better responses",
            B: "After an exploratory session produces a good spec, copy the specification into a NEW session — Claude gets clean, refined requirements without the messy exploration history cluttering the context",
            C: "A keyboard shortcut that resets the conversation",
            D: "Clearing the browser cache before starting AI work"
          },
          correct: "B",
          explanation: "Golden Reset: exploratory sessions accumulate noise — failed attempts, rejected ideas, corrections, digressions. This noise clutters the context and influences implementation. Solution: copy only the refined output (the spec, the decision, the plan) into a fresh session. Claude's full context window is dedicated to implementation, not fighting through history. Clean context = better focus = better output."
        },
        {
          id: 6,
          question: "What is the 'Kitchen Sink Session' failure pattern and how do you avoid it?",
          options: {
            A: "Writing too much code in the sink directory",
            B: "Mixing multiple unrelated tasks in one session — the context gets polluted with fragments from each task. Avoid with 'one session, one purpose' and /clear between unrelated tasks",
            C: "Installing too many packages in one npm install",
            D: "Using too many AI tools in the same project"
          },
          correct: "B",
          explanation: "Kitchen Sink Session: you start debugging a login issue, then add a feature, then fix a typo, then refactor a utility — all in one session. The context becomes a jumble, Claude starts mixing concerns, and quality degrades. Fix: one session = one purpose. Use /clear between unrelated tasks. Each session's context should form a coherent narrative about one specific goal."
        },
        {
          id: 7,
          question: "What commands are on the 'Standard Safe List' that can be auto-approved?",
          options: {
            A: "sudo, rm -rf, git push, npm install",
            B: "Read operations (ls, cat, grep, find), verification operations (npm test, pytest, cargo test), observability operations (git status, git diff, git log)",
            C: "Only npm test and git status",
            D: "All shell commands except rm and sudo"
          },
          correct: "B",
          explanation: "Standard Safe List for auto-approval: Read operations (ls, cat, grep, find, head, tail, wc) — these can't modify state. Verification operations (npm test, pytest, go test, cargo test) — run existing tests safely. Observability operations (git status, git diff, git log) — read-only git queries. These are safe to auto-approve because they have no side effects on your system state."
        },
        {
          id: 8,
          question: "What is the 'Bloated CLAUDE.md' failure pattern and the recommended solution?",
          options: {
            A: "CLAUDE.md that is too detailed — the solution is to delete it",
            B: "CLAUDE.md that grows beyond ~60 lines with domain-specific knowledge, noise, and outdated content — weakening its effectiveness. Solution: keep it under 60 lines of specific, actionable facts; move domain knowledge to skills in .claude/skills/",
            C: "Using CLAUDE.md for code documentation instead of project context",
            D: "Having multiple CLAUDE.md files in different directories"
          },
          correct: "B",
          explanation: "Bloated CLAUDE.md: every session adds to it, old entries never get removed, domain docs get pasted in — it becomes a book instead of a briefing. Claude must read all of it each session; signal-to-noise drops; key constraints get buried. Fix: keep CLAUDE.md under 60 lines of specific, actionable facts. Move domain knowledge to skills (.claude/skills/auth.md, .claude/skills/api.md). CLAUDE.md = orientation; skills = reference material."
        },
        {
          id: 9,
          question: "Scenario: You're starting a Claude session to add a user profile feature. You have no CLAUDE.md and plan to describe the project at the start. A colleague suggests using the four-phase workflow instead. What does Phase 1 (Explore) accomplish that your description cannot?",
          options: {
            A: "Phase 1 is just a longer way to do the same thing",
            B: "In Plan Mode during Explore, Claude reads the ACTUAL code files — discovering real database schema, actual component structure, existing patterns. Your verbal description is your mental model; the actual code may differ in important ways Claude will discover during exploration.",
            C: "Phase 1 generates documentation automatically",
            D: "Explore phase writes CLAUDE.md for you"
          },
          correct: "B",
          explanation: "Explore (Plan Mode) lets Claude read reality: your description says 'we use a users table' but Explore reveals the actual schema has a `user_profiles` table with a FK to `users`. Your description says 'React components' but Explore finds they use a custom HOC pattern. Phase 1 grounds implementation in actual code, not your mental model of the code — preventing a whole class of 'I thought it worked differently' implementation errors."
        },
        {
          id: 10,
          question: "Scenario: Claude is implementing a complex refactoring and at step 5 of 10 proposes something you disagree with. You want to stop and redirect without losing the context of steps 1-4. What's the correct tool to use?",
          options: {
            A: "/clear — start a completely fresh session",
            B: "Single Esc — stops Claude's current response while preserving the full conversation context (including steps 1-4), letting you redirect with a corrective message",
            C: "Close the terminal — reopen and /resume",
            D: "Double Esc (/rewind) — to revert to before step 5"
          },
          correct: "B",
          explanation: "Single Esc = steering wheel: stops Claude mid-response, full context preserved. You can say 'Stop — for step 5, use approach X instead because...' and Claude continues from that correction with full awareness of steps 1-4. Compare: /clear loses everything (wasteful). Double Esc reverts to before step 5 but discards its work (useful if step 5 already executed badly). Single Esc is the lightest intervention: redirect without losing the session."
        },
        {
          id: 11,
          question: "Scenario: You give Claude a task and it produces something wrong. You correct it. It produces something wrong again (same misunderstanding). You correct it again. On the fourth attempt it finally gets it right. According to operational best practices, what should you have done differently?",
          options: {
            A: "Been more patient — four attempts is normal",
            B: "Applied the Rule of Two: after the second miss, /clear and start a fresh session with a better prompt incorporating what you learned from the two failures. Continuing to correct a corrupt context produces diminishing returns.",
            C: "Switched to a different AI tool",
            D: "Written the code yourself instead"
          },
          correct: "B",
          explanation: "Rule of Two: after two misses on the same issue, stop fighting the context. Each correction adds noise — failed attempts, misunderstood requirements, contradictory instructions accumulate. /clear discards this accumulated noise. A fresh session starts with a better prompt: 'Implement X. Important: NOT approach Y (which fails because...) and NOT approach Z (which fails because...). Use approach W.' Fresh context + lesson-encoded prompt converges faster than continued correction."
        },
        {
          id: 12,
          question: "Scenario: A developer says 'I always use the Interview Pattern for every task, even simple bug fixes.' Is this appropriate, and what does the operational best practice say?",
          options: {
            A: "Yes — more requirements gathering always produces better results",
            B: "No — the Interview Pattern is for complex features where requirements are unclear. For simple, well-defined tasks (typo fix, config value change, single log statement), it adds overhead without value. Rule: if you're unsure whether to plan, plan. Typo fixes don't meet that bar.",
            C: "Yes — every task benefits from requirements clarification",
            D: "No — the Interview Pattern should never be used for any task"
          },
          correct: "B",
          explanation: "Right tool, right task: the Interview Pattern shines for 'I need a notification system' (many unknowns). It's overkill for 'fix this typo in line 42.' The operational guide: 'When to Skip Planning — fixing a typo, adding a single log statement, changing one configuration value.' The cost of the Interview Pattern (time, context) must be justified by the ambiguity it resolves. For unambiguous, bounded tasks, just do the task."
        },
        {
          id: 13,
          question: "Scenario: You finish a complex exploratory session that surfaced a great technical approach. Before starting a new implementation session, a colleague suggests the Golden Reset. You're not sure why — can't you just continue in the same session? What's the key difference?",
          options: {
            A: "The Golden Reset is mandatory — Claude Code requires it between sessions",
            B: "The current session's context contains exploratory noise (failed attempts, tangents, corrections). A new session gets ONLY the refined spec — Claude's full attention on implementation with no competing signals from the messy exploration. Cleaner context = more focused output.",
            C: "Golden Reset saves API costs by starting a shorter session",
            D: "It makes no difference — Claude ignores earlier conversation history anyway"
          },
          correct: "B",
          explanation: "Golden Reset rationale: exploratory sessions are intentionally messy — trying things, rejecting them, pivoting. This history influences Claude even when not directly referenced. A fresh session receiving only the cleaned-up spec has no 'noise' to fight. Claude's entire context budget goes to implementation, not filtering through exploration history. The analogy: you don't hand a junior developer your rough notes — you hand them the clean spec that emerged from the notes."
        },
        {
          id: 14,
          question: "Scenario: Your team's CLAUDE.md has grown to 150 lines with detailed domain knowledge, API patterns, database schemas, and business rules. Claude is becoming slower and less focused. What operational anti-pattern is this and how do you fix it?",
          options: {
            A: "The Bloated CLAUDE.md anti-pattern — keep CLAUDE.md under 60 lines with core norms only, and move domain-specific knowledge into skills (.claude/skills/) for on-demand loading",
            B: "There's no problem — more context is always better",
            C: "The Kitchen Sink Session anti-pattern — use /clear between tasks",
            D: "Claude needs a more powerful model to handle 150 lines"
          },
          correct: "A",
          explanation: "The Bloated CLAUDE.md anti-pattern: when CLAUDE.md exceeds ~60 lines, it consumes too much context window and dilutes focus. The fix: keep CLAUDE.md lean (project overview, tech stack, conventions, key commands, important notes — under 60 lines). Move domain-specific knowledge (API patterns, database schemas, business rules) into skills (.claude/skills/) that Claude loads on-demand when relevant. This keeps permanent context minimal while making specialized knowledge available when needed."
        },
        {
          id: 15,
          question: "Scenario: You're debugging a production issue and Claude keeps exploring tangential possibilities — checking unrelated modules, suggesting alternative architectures, reading files that aren't connected to the bug. According to operational best practices, how should you handle this?",
          options: {
            A: "Let Claude explore — it might find something useful",
            B: "Scope exploration narrowly: 'Find where authentication is configured — just that, nothing else.' Use subagents for broader research. The Infinite Exploration Spiral anti-pattern wastes time on unfocused investigation.",
            C: "Switch to Plan Mode immediately",
            D: "Use /rewind to go back to the beginning"
          },
          correct: "B",
          explanation: "The Infinite Exploration Spiral: Claude starts investigating a bug, then explores related modules, then reads about alternative approaches, then investigates performance implications — the scope expands indefinitely. Fix: scope exploration narrowly ('Find where authentication is configured — just that, nothing else'). If broader research is needed, use subagents for it separately. This keeps the main session focused on the specific debugging task."
        }
      ]
    },
    {
      id: 9,
      title: "Putting It All Together",
      mcqs: [
        {
          id: 1,
          question: "What is the Director's mindset shift?",
          options: {
            A: "You become the movie director of your own film",
            B: "You shift from typist (writing code yourself) to director (managing an AI agent) — providing clear direction, context, guardrails, and verification rather than writing every line",
            C: "You direct the AI to write its own tests",
            D: "You manage multiple AI agents simultaneously"
          },
          correct: "B",
          explanation: "Director mindset: 'You're no longer the one typing code. You're the director managing an agent.' The AI is a junior developer with infinite energy but no institutional knowledge. Your job shifts from coding to: providing clear direction (what to do), context (why and how), guardrails (what NOT to do), and verification (did it work?). This is a genuine mindset shift — your leverage is judgment and direction, not keystroke speed."
        },
        {
          id: 2,
          question: "What is the Director's Loop and what principles does it integrate?",
          options: {
            A: "A for loop that runs until the AI finishes all tasks",
            B: "The cycle: You provide Intent & Context (P2) → AI investigates → AI proposes → You review (P7) → You approve (P6) → AI implements & verifies (P3, P4) → loop. P1 underlies every AI action; P5 persists state throughout",
            C: "A weekly planning loop for AI projects",
            D: "The loop of prompt → response → accept → push"
          },
          correct: "B",
          explanation: "Director's Loop integrates all principles: You provide Intent in code/spec form (P2: Code as Interface). AI investigates via terminal (P1: Bash). You observe rationale and results (P7: Observability). You approve using appropriate controls (P6: Safety). AI implements in small verifiable steps (P4: Decomposition) and verifies each (P3: Verification). State persists in CLAUDE.md (P5: Persistence). P1 underlies every AI action in the loop."
        },
        {
          id: 3,
          question: "For a 'quick bug fix' task, which principles are most critical?",
          options: {
            A: "All seven principles with equal weight",
            B: "Principles 1 (Bash — investigate with terminal), 3 (Verification — confirm fix actually works), and 7 (Observability — trace what changed)",
            C: "Only Principle 2 (write a test for the bug)",
            D: "Principles 5 and 6 (document and protect)"
          },
          correct: "B",
          explanation: "Quick bug fix: P1 (Bash) to investigate with terminal commands (tail -f logs, grep for the error, ps aux to check processes), P7 (Observability) to trace through what actually happened (read the logs, understand the failure chain), P3 (Verification) to confirm the fix worked (run the specific test or reproduce the original scenario). Decomposition and state persistence are less critical for quick, focused fixes."
        },
        {
          id: 4,
          question: "What is the 'Principle Selection Guide' for a refactoring task?",
          options: {
            A: "P1 (Bash), P3 (Verification), P7 (Observability)",
            B: "P2 (Code as Interface — document what exists), P4 (Small Decomposition — one extraction at a time), P5 (Persist State — document architecture decisions)",
            C: "P6 (Safety) and P7 (Observability) only",
            D: "All principles with equal weight"
          },
          correct: "B",
          explanation: "Refactoring key principles: P2 (Code as Interface) to document current behavior before changing it (write characterization tests), P4 (Small Reversible Decomposition) to refactor one piece at a time with tests passing after each step, P5 (Persisting State) to record architectural decisions being made during refactoring. Refactoring without decomposition creates the 'big bang refactor' that's nearly impossible to debug or review."
        },
        {
          id: 5,
          question: "What is the Meta-Principle of all seven principles?",
          options: {
            A: "AI agents should replace human developers entirely",
            B: "General agents are most effective when they leverage computing fundamentals (file systems, shells, code execution, version control) rather than fighting against them",
            C: "Speed of development is the only metric that matters",
            D: "All seven principles must be applied simultaneously on every task"
          },
          correct: "B",
          explanation: "The Meta-Principle: 'General agents are most effective when they leverage computing fundamentals rather than fighting against them.' File systems, shells, code execution, and version control aren't limitations to work around — they're the foundations that enable reliable, debuggable, powerful agent workflows. The seven principles are applications of this meta-principle to specific aspects of AI-assisted development."
        },
        {
          id: 6,
          question: "What is the 'Invoke Principles Explicitly' tip for the Director's approach?",
          options: {
            A: "Always mention all seven principles in every prompt",
            B: "Instead of 'Refactor this code,' say 'Refactor this using Principle 4 — break it into 3 small steps. After each step, show me what changed and wait for my approval' — naming the principle focuses the AI's approach",
            C: "Use a numbered list of principles in every CLAUDE.md",
            D: "Reference the principles documentation before each session"
          },
          correct: "B",
          explanation: "Explicit principle invocation: instead of vague prompts ('debug this'), name the principle and its constraint: 'Debug this using Principles 1, 3, and 7 — use terminal to investigate, verify the fix with tests, and show me the logs.' This encodes the desired behavior directly in the prompt. The AI aligns its approach to the principle's methodology rather than defaulting to whatever it finds natural."
        },
        {
          id: 7,
          question: "When the 'Fix Fails' template is triggered, what is the key insight about failure?",
          options: {
            A: "Failure means you should switch to a different AI tool",
            B: "Failure is information — revert the failed attempt cleanly, analyze what the failure revealed about the problem, then apply that learning to propose a new approach",
            C: "Failure means the task is impossible and should be abandoned",
            D: "Failure means the AI needs to be retrained"
          },
          correct: "B",
          explanation: "Template 1b (When the Fix Fails): AI verifies → tests FAIL → AI identifies WHY (P7 Observability) → AI reverts the change cleanly (P4 Reversibility) → AI proposes a new approach informed by the failure. Key insight: 'Failure is information.' A test failure tells you something about the system you didn't know before. Revert cleanly (don't compound the wrong approach), learn from the failure, try again with the new information."
        },
        {
          id: 8,
          question: "Scenario: Your team just onboarded and scores 2/7 on the Project Health Score (Cowboy Coder). You want to improve quickly. What is the recommended first principle to implement and why?",
          options: {
            A: "P5 (State Persistence) — create CLAUDE.md immediately",
            B: "P3 (Verification) — establish a testing baseline first. Without verification, you cannot trust any AI output; all other principles build on knowing whether things work. Then add P7 (Observability) to understand why things fail.",
            C: "P2 (Code as Interface) — write specs before any implementation",
            D: "P6 (Safety) — set up permission controls before anything else"
          },
          correct: "B",
          explanation: "The Health Score guide says: score 0-2 → start with P3 and P7. Reason: P3 (Verification) establishes the feedback loop — you need to know if AI output works before you can trust or improve anything. P7 (Observability) lets you debug WHY things fail. These two principles together form the diagnostic foundation. Without them, you're making changes blind. Once you can verify and observe, adding the other principles becomes measurably impactful."
        },
        {
          id: 9,
          question: "Scenario: You're debugging a production authentication issue. Which workflow template applies, and in what specific order should you apply the principles?",
          options: {
            A: "Feature Development Template — write a spec first",
            B: "Quick Fix/Debug Template: P1 (Bash — investigate with terminal: tail logs, grep errors) → P7 (Observability — trace the failure chain through logs) → P3 (Verification — propose fix, verify it solves the issue) → P4 (Decomposition — implement fix atomically) → P6 (Safety — confirm rollback plan before deploying to production)",
            C: "Refactoring Template — document current state first",
            D: "No template needed — production bugs should be fixed as fast as possible without process"
          },
          correct: "B",
          explanation: "Debug Template applies: P1 first (investigate — `tail -f auth.log`, `grep 'AUTH_FAIL' logs/*`, `curl -v /auth/login`). P7 second (trace the failure — read the logs to understand the full error chain). P3 third (verify the fix actually resolves the auth failure in staging). P4 fourth (atomic commit with descriptive message). P6 fifth (safety check before production — show the diff, confirm rollback plan). Skipping P1/P7 investigation to jump to 'fix' creates guessing; investigation first creates targeted solutions."
        },
        {
          id: 10,
          question: "Scenario: A junior developer asks 'Why do I need all 7 principles? Can I just use P1 (Bash) and get most of the benefit?' How do you respond based on the Director's Loop?",
          options: {
            A: "Yes — P1 is the most important and covers most cases",
            B: "P1 enables action; but without P2 (precise specs), you act on vague requirements. Without P3, you don't know if actions worked. Without P4, mistakes compound. Without P5, context is lost between sessions. Without P6, actions could be irreversible. Without P7, you can't debug. P1 underlies everything, but the principles are complementary — each covers a failure mode the others don't.",
            C: "Use whichever principles feel comfortable and add others gradually",
            D: "P1 and P7 together cover 90% of cases — the rest are optional"
          },
          correct: "B",
          explanation: "The Director's Loop shows interdependence: P1 (Bash) enables agency. P2 (Code Interface) ensures you act on precise requirements. P3 (Verification) confirms actions worked. P4 (Decomposition) keeps actions reversible. P5 (State) maintains context across sessions. P6 (Safety) prevents irreversible mistakes. P7 (Observability) enables debugging and trust. Each principle covers failures the others don't — a 7-principle workflow has no blind spots; a 1-principle workflow has 6."
        },
        {
          id: 11,
          question: "Scenario: You're implementing a new payment feature. Your colleague suggests: 'Just tell Claude to add Stripe integration and let it handle everything.' According to the Director's Loop and principle integration, what's the risk of this approach?",
          options: {
            A: "No risk — Claude can handle payment integration autonomously",
            B: "Missing multiple principles: no P2 (precise spec as code), no P6 (safety controls for payment data), no P3 (verification plan for payment flows), no P7 (observability for debugging payment failures). The Director provides direction, context, guardrails, and verification — not just a vague instruction.",
            C: "The only risk is cost overruns from Stripe API calls",
            D: "Claude needs more context about your codebase"
          },
          correct: "B",
          explanation: "The 'just tell Claude' approach violates the Director's Loop: no P2 (what exactly should the payment integration do? what error handling?), no P6 (what safety controls for payment data? what permissions for Stripe keys?), no P3 (how will you verify payment flows work correctly?), no P7 (how will you debug payment failures?). The Director doesn't just delegate — they provide direction (P2), guardrails (P6), and verification criteria (P3)."
        },
        {
          id: 12,
          question: "Scenario: A team implements a feature using all 7 principles but skips P4 (Small, Reversible Decomposition) — they make one giant commit with all changes. The feature has a bug. What specific capability did they lose by skipping P4?",
          options: {
            A: "The ability to verify the feature works",
            B: "Surgical rollback — with atomic commits per decomposition step, they could git revert the specific buggy change. With one giant commit, they must either fix forward (harder with mixed concerns) or revert the entire feature (losing working parts).",
            C: "The ability to observe what Claude did",
            D: "Terminal access to investigate the bug"
          },
          correct: "B",
          explanation: "P4 (Small, Reversible Decomposition) enables surgical fixes. With atomic commits (each decomposition step = one commit), a bug in step 5 means `git revert step-5-commit` — steps 1-4 remain intact. One giant commit means all changes are bundled — reverting loses working parts, fixing forward requires untangling mixed concerns. P4's reversibility is the safety net that makes confident delegation possible."
        },
        {
          id: 13,
          question: "Scenario: You're reviewing a PR where Claude implemented a database migration. The diff looks correct, tests pass, but there's no SQL preview or staging verification. Which principle(s) were insufficiently applied?",
          options: {
            A: "P1 (Bash) — Claude should have run the migration directly",
            B: "P3 (Verification) — migration should be verified in staging first, and P6 (Safety) — SQL should be reviewed before applying to production. P7 (Observability) — the migration's effect should be observable in staging logs.",
            C: "P2 (Code as Interface) — the migration should be specified as code",
            D: "P5 (Persisting State) — the migration should be documented"
          },
          correct: "B",
          explanation: "Database migrations require layered verification: P3 (verify in staging — does the migration work on a copy of production data?), P6 (safety — review SQL before applying, have rollback plan), P7 (observability — check staging logs to confirm migration had expected effect). The diff passing tests isn't enough — tests don't catch migration failures on real data. The workflow: preview SQL → stage verify → production apply → observe effect."
        },
        {
          id: 14,
          question: "Scenario: A developer says 'I use Claude for code generation but review everything manually before committing.' Which principles are they applying, and which are they missing?",
          options: {
            A: "Applying P7 (Observability — manual review); Missing P1 (not using terminal), P3 (no automated verification), P4 (no decomposition), P5 (no persistent context), P6 (no safety controls)",
            B: "Applying all principles — manual review covers everything",
            C: "Applying P2 and P3; missing the rest",
            D: "Applying P1 and P7; missing P2-P6"
          },
          correct: "A",
          explanation: "Manual review is P7 (Observability — making AI output visible for inspection). But they're missing: P1 (not using terminal to verify), P3 (no automated tests — manual review doesn't scale), P4 (no decomposition — reviewing one giant diff), P5 (no CLAUDE.md or ADRs — context lost between sessions), P6 (no safety controls — what prevents Claude from running destructive commands?). The 'review everything manually' approach is the human-as-bottleneck anti-pattern."
        },
        {
          id: 15,
          question: "Scenario: Your team has been using Claude Code for 3 months. You can identify which principles apply to scenarios (recognition) and use them for simple tasks (application), but when complex multi-principle failures occur, you struggle to diagnose which principles were violated. According to the Assessment Rubric, what's your level and what should you focus on?",
          options: {
            A: "Beginner — focus on learning all 7 principles from scratch",
            B: "Developing — focus on Workflow Diagnosis practice: when things break, work backwards from the failure to identify which principle(s) were violated. Use the 'Compare' step: what would have happened WITH the principle applied?",
            C: "Proficient — you're ready for capstone projects",
            D: "Advanced — you should teach others"
          },
          correct: "B",
          explanation: "Assessment Rubric: Recognition (can name principles), Application (can use for simple tasks), Workflow Diagnosis (can identify violated principles from failures). You're at Developing — recognition and application are emerging, but diagnosis lags. Focus: practice working backwards from failures. 'The migration broke production — which principle was missing? P3 (no staging verification), P6 (no rollback plan).' The Compare step builds intuition: 'WITH P3, we would have caught this in staging.'"
        }
      ]
    },
    {
      id: 10,
      title: "Principles Exercises",
      mcqs: [
        {
          id: 1,
          question: "What three skills do the 17 exercises across the 7 modules develop?",
          options: {
            A: "Typing speed, code memorization, AI prompt writing",
            B: "Principle recognition (identifying which principle fits), Principle application (using it to solve concrete problems), Workflow diagnosis (spotting which principle was violated when something breaks)",
            C: "Frontend, backend, and database development",
            D: "Reading, writing, and editing code"
          },
          correct: "B",
          explanation: "The exercises develop three complementary skills: 1) Principle Recognition — given a scenario, which principle(s) apply? This is pattern matching. 2) Principle Application — actually using the principle to solve a specific problem (not just naming it). 3) Workflow Diagnosis — when something breaks, which principle was violated? Working backwards from failure to cause. All three together constitute practical mastery."
        },
        {
          id: 2,
          question: "What is the 'Principle Application Framework' used in every exercise?",
          options: {
            A: "A coding framework like React or Django",
            B: "Seven steps: Identify → Diagnose → Plan → Execute → Verify → Compare (what would happen WITHOUT the principle?) → Generalize (when else does this apply?)",
            C: "A mathematical formula for calculating principle effectiveness",
            D: "A checklist of 33 questions from the chapter quiz"
          },
          correct: "B",
          explanation: "The 7-step framework for every exercise: 1) Identify — which principle applies? 2) Diagnose — what failure does this principle prevent? 3) Plan — how will you apply it here specifically? 4) Execute — apply the principle with Claude Code or Cowork. 5) Verify — did it work? What changed? 6) Compare — what would have happened WITHOUT the principle? 7) Generalize — when else in your work does this apply? The Compare step builds intuition for the principle's value."
        },
        {
          id: 3,
          question: "What does the Capstone C exercise involve, and why is it the most valuable capstone?",
          options: {
            A: "Building a complex application demonstrating all principles",
            B: "Auditing YOUR OWN current workflow against all 7 principles — rating yourself honestly, identifying your specific gaps, and implementing your top 3 improvements. Most valuable because it targets real workflow improvement",
            C: "A timed exam to assess principle mastery",
            D: "Contributing to an open-source project using all principles"
          },
          correct: "B",
          explanation: "Capstone C is the most personally valuable: instead of a synthetic project, you apply all 7 principles to your actual current workflow. Rate yourself on each principle (1-4 scale). Identify your specific gaps (not 'developers in general' but YOUR specific missing principles). Implement top 3 changes. Then re-assess after a month. This closes the gap between knowing principles and actually changing how you work."
        },
        {
          id: 4,
          question: "At the 'Advanced' level of the Assessment Rubric, what distinguishes principle recognition?",
          options: {
            A: "Can name all seven principles from memory",
            B: "Spots principle violations BEFORE problems occur — proactively identifies when a proposed approach lacks verification, safety, or observability",
            C: "Can identify principles when told the category",
            D: "Correctly identifies which principle applies when given a description"
          },
          correct: "B",
          explanation: "Assessment Rubric levels for Principle Recognition: Beginner (can't identify which applies), Developing (identifies when told the category), Proficient (correctly identifies from scenario clues), Advanced (spots violations before problems occur). The Advanced level is precognitive — reading a proposed approach and immediately seeing 'this has no verification step, the P3 violation will cause problems downstream.'"
        },
        {
          id: 5,
          question: "What is the Self-Assessment Project Health Score and what does a score of 3-4 indicate?",
          options: {
            A: "A 100-point scale; 3-4 means 'Very Poor'",
            B: "Count of principles actively applied (0-7); score of 3-4 = 'Collaborator' — good progress, working WITH the AI rather than just using it as a code generator",
            C: "3-4 means the project has 3-4 remaining bugs",
            D: "Score of 3-4 indicates the team needs retraining"
          },
          correct: "B",
          explanation: "Project Health Score: 0-2 = Cowboy Coder (high risk, start with P3 and P7), 3-4 = Collaborator (good progress, working with AI effectively), 5-6 = Agent Architect (professional grade, managing AI effectively), 7 = Master Director (full integration, now optimize and teach others). The score is actionable: it tells you exactly which principles you're missing, giving you a concrete improvement path."
        },
        {
          id: 6,
          question: "Scenario: You're doing the Capstone C exercise (audit your own workflow). You rate yourself: P1=3, P2=2, P3=4, P4=2, P5=1, P6=3, P7=4. Your total is 19/28 (~6.8, rounding to 7). But wait — the Health Score is 0-7 based on count of principles actively applied, not average. Which principles are your specific gaps and what's your actual Health Score?",
          options: {
            A: "Health Score 7 — you're a Master Director",
            B: "Health Score 5 (Agent Architect) — your gaps are P2 (Code as Interface, score 2) and P5 (Persisting State, score 1). Focus improvement on writing tests as specs and maintaining CLAUDE.md/ADRs.",
            C: "Health Score 3 — you need to start over",
            D: "Health Score 4 — you're a Collaborator"
          },
          correct: "B",
          explanation: "Health Score counts principles actively applied (not average). Scores 1-2 = not actively applied, 3-4 = actively applied. Your scores: P1(3)=yes, P2(2)=no, P3(4)=yes, P4(2)=no... wait, P4=2 means not applied. Recount: P1(yes), P2(no), P3(yes), P4(no), P5(no), P6(yes), P7(yes) = 4 principles = Collaborator. But the scenario says P4=2, so actual score is 4. The lesson: be honest about low scores — they reveal your specific improvement targets."
        },
        {
          id: 7,
          question: "Scenario: During the Module 5 exercise (Constraints and Permission Models), you set Claude to 'Confirming' mode for a routine task (renaming a variable across 3 files). Your instructor says this is overkill. According to the permission model guidance, when should you use 'Confirming' vs. 'Permissive'?",
          options: {
            A: "Always use Confirming — it's the safest",
            B: "Confirming for: new AI collaboration, unfamiliar codebase, learning phase, production systems. Permissive for: routine work on familiar projects, trusted AI, experienced users. Variable renaming across 3 files in a familiar codebase = Permissive is appropriate.",
            C: "Always use Permissive — Confirming slows you down",
            D: "Use Restricted for all tasks"
          },
          correct: "B",
          explanation: "Permission model matching: Confirming (approve all writes) is right for unfamiliar situations — new AI, unfamiliar code, production systems. Permissive (auto-approve safe operations) is right for routine work on familiar projects where you trust the AI's judgment. Variable renaming is low-risk, well-defined, in a familiar codebase — Permissive is appropriate. The key: match the permission level to the situation's risk and familiarity."
        },
        {
          id: 8,
          question: "Scenario: You complete the Module 7 exercise (Full Cycle: Debug Production Issue). You investigated with Bash (P1), traced through logs (P7), proposed a fix, verified it in staging (P3), made an atomic commit (P4), and showed the diff before applying (P6). Your instructor asks: 'What about P2 and P5?' How were those principles implicitly applied?",
          options: {
            A: "They weren't applied — you missed two principles",
            B: "P2 (Code as Interface): your fix was a specific code change, not a vague description. P5 (Persisting State): you documented the incident and fix in an ADR or runbook for future reference. Both were applied even if not explicitly named.",
            C: "P2 and P5 don't apply to debugging",
            D: "You should have written tests (P2) and updated CLAUDE.md (P5)"
          },
          correct: "B",
          explanation: "P2 and P5 in debugging: P2 (Code as Interface) — your fix was a concrete code change (specific diff), not a vague 'improve error handling' description. P5 (Persisting State) — documenting the incident and fix (in an ADR, runbook, or post-mortem) ensures the next person debugging a similar issue has persistent context. Both principles were applied through the debugging workflow even if not explicitly named."
        },
        {
          id: 9,
          question: "Scenario: After a month of applying the 7 principles, you re-assess your Capstone C Health Score. It went from 4 to 6. According to the exercise guidance, what changed and what's your next step?",
          options: {
            A: "You went from Collaborator to Agent Architect — you're now managing AI effectively with professional-grade workflows. Next step: optimize further and work toward 7 (Master Director) by teaching others and refining judgment.",
            B: "Nothing changed — 4 and 6 are both passing scores",
            C: "You should restart the exercises from the beginning",
            D: "You've reached the maximum — no further improvement is possible"
          },
          correct: "A",
          explanation: "Health Score progression: 4 (Collaborator) → 6 (Agent Architect) means you've moved from 'working with AI effectively' to 'professional grade — managing AI as a force multiplier.' The next step isn't more exercises — it's optimization and teaching. The Master Director level (7) requires full integration plus the ability to teach and refine others' workflows. The progression is: learn → apply → teach → refine."
        },
        {
          id: 10,
          question: "Scenario: Your team completes all 17 exercises. One developer says 'I can name all 7 principles but still struggle to apply them in real work.' According to the Assessment Rubric, what level are they at and what's the gap?",
          options: {
            A: "Advanced — naming principles is the highest level",
            B: "Beginner/Developing gap — they have Recognition (can name principles) but lack Application (using them to solve concrete problems). The gap is practice: exercises build recognition; real work builds application. They need to deliberately apply one principle per task until it becomes habit.",
            C: "Proficient — they're ready for capstone projects",
            D: "They need to retake the course"
          },
          correct: "B",
          explanation: "Assessment Rubric levels: Recognition (can name/identify), Application (can use for concrete problems), Workflow Diagnosis (can identify violations from failures). Naming all 7 = Recognition level. Struggling to apply = Application gap. The fix: don't try all 7 at once. Pick ONE principle (e.g., P3 Verification) and deliberately apply it to every task for a week. Once it's habit, add another. Principles become automatic through deliberate repetition, not just knowledge."
        },
        {
          id: 11,
          question: "Scenario: You're doing the Capstone C exercise (audit your own workflow). You rate yourself: P1=3, P2=2, P3=4, P4=2, P5=1, P6=3, P7=4. Your total is 19/28 (~6.8, rounding to 7). But wait — the Health Score is 0-7 based on count of principles actively applied, not average. Which principles are your specific gaps and what's your actual Health Score?",
          options: {
            A: "Health Score 7 — you're a Master Director",
            B: "Health Score 4 (Collaborator) — your gaps are P2 (Code as Interface, score 2), P4 (Decomposition, score 2), and P5 (Persisting State, score 1). Focus improvement on writing tests as specs, atomic commits, and maintaining CLAUDE.md/ADRs.",
            C: "Health Score 3 — you need to start over",
            D: "Health Score 5 — you're an Agent Architect"
          },
          correct: "B",
          explanation: "Health Score counts principles actively applied (not average). Scores 1-2 = not actively applied, 3-4 = actively applied. Your scores: P1(3)=yes, P2(2)=no, P3(4)=yes, P4(2)=no, P5(1)=no, P6(3)=yes, P7(4)=yes = 4 principles = Collaborator. The lesson: be honest about low scores — they reveal your specific improvement targets (P2, P4, P5)."
        },
      ]
    }
  ]
};
