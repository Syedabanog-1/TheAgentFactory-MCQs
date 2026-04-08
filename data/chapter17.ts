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
        },
        {
          id: 16,
          question: "Scenario: You ask Claude to optimize your application's slow query. Without Bash access, it says 'The query at line 47 looks inefficient — try adding an index on user_id.' With Bash access, Claude takes a different approach. What does the Bash-enabled Claude do that directly demonstrates P1?",
          options: {
            A: "Claude writes a more detailed explanation of why indexes help",
            B: "Claude runs `EXPLAIN ANALYZE` on the actual query, observes the actual execution plan and timing, identifies that the bottleneck is a full table scan on a 10-million-row table, creates the index, runs EXPLAIN ANALYZE again to confirm the query now uses the index and went from 8s to 50ms.",
            C: "Claude reads the database documentation to find best practices",
            D: "Claude asks you to run the query and paste the results back"
          },
          correct: "B",
          explanation: "P1 (Bash as Key) transforms the interaction: without terminal, Claude speculates from static code ('looks inefficient'). With terminal, Claude executes the EXPLAIN ANALYZE command, observes actual execution data (8-second full table scan), applies the fix (CREATE INDEX), and verifies the improvement (50ms with index). The improvement isn't claimed — it's proven. This is the complete agency loop: observe → act → verify."
        },
        {
          id: 17,
          question: "Scenario: A team uses an AI assistant without terminal access for their CI/CD pipeline setup. Builds keep failing with 'npm: command not found.' The AI offers 5 different explanations over 3 sessions. With Bash access, what single command would have resolved this in the first session?",
          options: {
            A: "npm install --global",
            B: "`which npm` or `node --version` — observing actual system state (whether npm exists and where) immediately distinguishes between 'npm not installed,' 'npm not in PATH,' or 'wrong Node version.' Ground truth replaces 5 hypotheses with one observation.",
            C: "Read the CI configuration file",
            D: "Check the npm documentation for PATH configuration"
          },
          correct: "B",
          explanation: "Bash as ground truth eliminates hypothesis loops. `which npm` returns either the path (npm exists, PATH is correct) or nothing (not installed or not in PATH). `node --version` confirms Node is available. These single commands collapse multiple explanatory hypotheses into one observable fact. Without terminal access, the AI generates plausible explanations indefinitely; with terminal access, it observes the actual system state in one command."
        },
        {
          id: 18,
          question: "Scenario: You're deploying a microservice and the health check keeps failing. Claude (with Bash) runs `curl -v http://localhost:8080/health` and gets `Connection refused`. It then runs `ps aux | grep node` and sees no matching process. What principle is being applied and what does this demonstrate?",
          options: {
            A: "Principle 3 — Claude is verifying the service works",
            B: "Principle 1 — Claude is using Bash to observe actual system state (connection refused = service not running, confirmed by process list showing no node process). Ground truth from commands eliminates guessing about what's wrong with the deployment.",
            C: "Principle 5 — Claude is documenting the deployment state",
            D: "Principle 6 — Claude is checking safety before proceeding"
          },
          correct: "B",
          explanation: "P1 in action: `curl -v` doesn't lie — 'Connection refused' means no service is listening on that port. `ps aux | grep node` confirms no Node process is running. These two commands reveal the actual system state: the service never started. Without Bash, Claude would speculate about health check configuration, port settings, or firewall rules. With Bash, the diagnosis is objective: service not running → investigate startup logs → fix the issue."
        },
        {
          id: 19,
          question: "Scenario: An AI tool without terminal access helps a developer set up a Redis cache integration. It generates perfect-looking connection code. Three hours later, the developer reports Redis connections are timing out in production. What limitation of the code-generation-only approach caused this?",
          options: {
            A: "The AI generated incorrect Redis commands",
            B: "Without Bash, the AI couldn't run `redis-cli ping` to confirm Redis is reachable, `redis-cli --stat` to check connection limits, or test the actual connection with the generated code. It generated syntactically correct code that may fail due to network, auth, or config issues only discoverable at runtime.",
            C: "Redis requires specialized knowledge the AI lacks",
            D: "The developer should have tested the code before production"
          },
          correct: "B",
          explanation: "The code-generation gap: correct Redis client code can still fail if: Redis isn't running, the network route doesn't exist, authentication is wrong, connection limits are exceeded, or the URL format is wrong for the environment. A Bash-enabled agent would run `redis-cli -h $REDIS_URL ping` to confirm connectivity before writing integration code — ground truth from actual connection, not assumed connectivity from plausible code."
        },
        {
          id: 20,
          question: "Scenario: You want to give Claude the best conditions to apply Principle 1 effectively. Your colleague suggests 'just give Claude read-only file access — it doesn't need to run commands.' What is wrong with this suggestion?",
          options: {
            A: "Read-only access is dangerous",
            B: "Read-only file access removes the execution capability that defines P1's value. Without running commands, Claude can only read static files — it cannot run tests to verify behavior, execute queries to check database state, make HTTP requests to observe API responses, or run processes to confirm they start. File reading is observation of code; Bash access is observation of running systems.",
            C: "Claude doesn't need terminal access for most tasks",
            D: "Read-only access is fine for debugging tasks"
          },
          correct: "B",
          explanation: "P1's core value is execution, not just reading. 'Bash is the Key' because it enables: running tests (not just reading test files), making HTTP requests (not just reading API code), checking process state (not just reading configuration), observing command output (not just reading log files). Read-only file access gives Claude source code observation; Bash access gives Claude system state observation. The former is static; the latter is ground truth."
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
        },
        {
          id: 16,
          question: "Scenario: You ask Claude to 'implement the UserService to match the interface.' Claude implements it, but uses different parameter names and return types from what your codebase expects, causing type errors throughout. What P2 practice would have given Claude an unambiguous target?",
          options: {
            A: "A longer prose description of the UserService",
            B: "Using `@src/types/UserService.ts` — the @file reference grounds Claude's implementation in the actual TypeScript interface definition. Claude cannot choose different parameter names or return types when working against the exact interface file.",
            C: "Asking Claude to read the documentation",
            D: "Providing a code review checklist"
          },
          correct: "B",
          explanation: "P2 @file references eliminate the interpretation gap. When you say 'implement UserService' without a reference, Claude invents its own interpretation of what the interface should look like. When you say 'implement the interface defined in @src/types/UserService.ts', Claude must satisfy the exact TypeScript types, parameter names, and return types in that file. The file IS the spec — it cannot be misinterpreted."
        },
        {
          id: 17,
          question: "Scenario: Your team is building an SDK for an internal API. Two different engineers give Claude the task 'add authentication to the API client.' One provides a test file showing the expected auth behavior; the other provides a three-paragraph prose description. Which approach produces a more reliable implementation and why?",
          options: {
            A: "The prose description — more detail means better output",
            B: "The test file — it encodes the exact expected behavior as executable, verifiable code. Claude knows precisely what 'done' means: make these tests pass. The prose description allows multiple valid interpretations of 'authentication.'",
            C: "Both approaches are equally reliable",
            D: "Neither — Claude needs the actual API documentation"
          },
          correct: "B",
          explanation: "Tests as specs are superior to prose for implementation tasks because they encode precision and verifiability simultaneously. A test `it('includes Authorization header with Bearer token on each request')` is unambiguous — one implementation is correct (include the header), infinite implementations satisfy the prose ('add authentication'). The test is both specification and acceptance criterion. Pass the tests = done. Meet the prose criteria = subjective judgment."
        },
        {
          id: 18,
          question: "Scenario: You tell Claude 'the CSV export should handle special characters.' Claude adds UTF-8 encoding. But your stakeholders later complain about Excel not opening the file correctly because it needs a BOM (Byte Order Mark). What P2 practice would have specified this requirement precisely?",
          options: {
            A: "A longer description of CSV requirements",
            B: "A test: `expect(csvContent.slice(0, 3)).toEqual('\\uFEFF...')` — specifying the exact bytes that must appear at the start of the file. This makes the BOM requirement verifiable and unambiguous, rather than buried in the ambiguous phrase 'handle special characters.'",
            C: "Reference to CSV specification documents",
            D: "A comment in the code explaining what 'special characters' means"
          },
          correct: "B",
          explanation: "P2 converts vague requirements to precise specifications. 'Handle special characters' is a vague requirement that Claude interpreted as 'use UTF-8 encoding' — a reasonable interpretation that still fails in practice. The precise requirement: 'CSV files must begin with a UTF-8 BOM (bytes: 0xEF, 0xBB, 0xBF) for Excel compatibility.' As a test: `expect(buffer.slice(0,3)).toEqual(Buffer.from([0xEF, 0xBB, 0xBF]))`. This is unambiguous and verifiable."
        },
        {
          id: 19,
          question: "Scenario: A team writes comprehensive tests for their authentication module. Claude implements authentication against these tests, and all tests pass. Six months later, a security audit finds the implementation stores JWT secrets in environment variables but the tests never checked secret storage. What P2 lesson does this demonstrate?",
          options: {
            A: "Tests as specs don't work for security requirements",
            B: "Tests as specs are only as complete as the tests themselves. If the test suite doesn't encode a requirement (secret storage in environment variables, not hardcoded), that requirement doesn't exist for the AI. Complete P2 practice requires comprehensive tests that encode ALL requirements — including security constraints.",
            C: "Security requirements should be documented separately, not as tests",
            D: "The implementation was correct — environment variable storage is secure"
          },
          correct: "B",
          explanation: "P2's completeness principle: tests are authoritative specs — missing tests mean missing requirements. If no test checks 'secrets never hardcoded in source code,' Claude won't enforce that constraint. Complete test coverage for P2 includes: happy paths, error handling, security constraints, and performance thresholds. The security audit finding reveals a gap in the test-as-spec: `it('uses environment variables for JWT_SECRET, never hardcoded strings')` should have existed."
        },
        {
          id: 20,
          question: "Scenario: Claude is implementing a sorting algorithm. You provide a TypeScript type `type SortFn<T> = (arr: T[], compare: (a: T, b: T) => number) => T[]` and a test: `expect(sort([3,1,2], (a,b) => a-b)).toEqual([1,2,3])`. The implementation passes the test. Your colleague says 'but we also need stability — equal elements should maintain original order.' What P2 practice was missing?",
          options: {
            A: "The TypeScript type was insufficient — it should be more detailed",
            B: "A test encoding the stability requirement: `expect(sort([{v:1,i:0},{v:1,i:1}], (a,b)=>a.v-b.v)).toEqual([{v:1,i:0},{v:1,i:1}])` — using index to verify original order is preserved for equal elements. Without this test, 'sort correctly' and 'sort stably' are indistinguishable.",
            C: "You should have written prose documentation about stability",
            D: "Stability is an implementation detail, not a specification concern"
          },
          correct: "B",
          explanation: "Tests as specs must encode every behavioral requirement, including subtle ones like stability. A sort function passes `[1,2,3]` output for `[3,1,2]` input regardless of stability. Stability is only observable when equal elements exist and their original order matters. Without a test specifically for stability, this requirement is invisible to Claude. P2 completeness: every requirement you care about must be encoded as a failing test that the correct implementation makes pass."
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
        },
        {
          id: 16,
          question: "Scenario: Claude adds a new function `sanitizeInput()` and says 'Done! The function is implemented.' You run the test suite — all 47 tests pass. Three days later, a user submits malformed input that crashes the application. What does this situation reveal about the verification hierarchy?",
          options: {
            A: "The tests were wrong and need to be rewritten",
            B: "The existing tests (syntax + unit level) verified what existed, but didn't include a test for the specific malformed input case. P3 requires verification against the complete requirement set — if malformed input handling is a requirement, a test for it must exist. Test gaps produce coverage gaps.",
            C: "Verification was complete — unexpected inputs cannot be predicted",
            D: "Claude should have written more comprehensive tests"
          },
          correct: "B",
          explanation: "P3 verification is only as comprehensive as the test suite. 47 passing tests prove 47 things — not all possible behaviors. The missing test (what happens with malformed input?) means that requirement wasn't verified at any level. P3 applied completely: write the failing test for malformed input FIRST, then implement. Tests as executable spec + verification: passing the 'malformed input test' provides evidence that the specific requirement was met. Missing the test = requirement was never specified or verified."
        },
        {
          id: 17,
          question: "Scenario: Claude fixes an authentication bug. You run `npm test` — all tests pass. But you notice the fix uses a synchronous bcrypt comparison in an async handler. This will block the event loop under load. Is this a P3 failure, and at what verification level was it missed?",
          options: {
            A: "Not a P3 failure — tests passed, so verification was complete",
            B: "P3 failure at the performance/integration level: unit tests verified functional correctness (right password accepted, wrong rejected) but didn't catch the async/blocking issue. A load test or async-specific unit test (`expect(compareSync).not.toHaveBeenCalled()`) would have caught this at a lower level before staging.",
            C: "This is a code review issue, not a verification issue",
            D: "All tests passing means the implementation is correct"
          },
          correct: "B",
          explanation: "Verification hierarchy has multiple levels for good reason: unit tests catch functional bugs, load tests catch performance bugs. `bcrypt.compareSync` passing a functional test doesn't reveal the event-loop-blocking behavior — that requires load testing or async verification. P3 complete practice: after fixing auth, run a quick load test or verify the async call with `expect(compare).toHaveBeenCalledWith(...)` (async method). 'Tests pass' is syntactic and unit level verification; async correctness requires its own verification step."
        },
        {
          id: 18,
          question: "Scenario: You apply the 2-Minute Audit after Claude completes a database schema migration: git diff shows 3 new files (migration, rollback, seed data). Claude's summary says 'Migration complete, added 2 files.' There's a discrepancy. What does P3 require you to do?",
          options: {
            A: "Trust Claude's summary — it worked on the files directly",
            B: "Investigate all 3 files in the diff (not just the 2 mentioned). The 2-Minute Audit specifically exists to catch this divergence: diff is ground truth, AI summary is the AI's belief. Investigate the 3rd unreported file — it may be an intentional addition (seed data Claude forgot to mention) or an unintended modification.",
            C: "Accept the discrepancy as normal — AI summaries are approximate",
            D: "Ask Claude to re-check what files it changed"
          },
          correct: "B",
          explanation: "The 2-Minute Audit: when git diff (ground truth) and AI summary (AI's belief) diverge, investigate. Don't accept the summary. The 3rd file (seed data) could be: intentional and correct (Claude forgot to mention it), unintentionally created (a bug), or a modification to an existing file Claude shouldn't have touched. Review each divergence before accepting the task as complete. 'Close enough' summaries lead to production surprises."
        },
        {
          id: 19,
          question: "Scenario: You're applying the verification loop to a complex refactoring. After Step 1 (extract shared utilities), tests pass. After Step 2 (update imports), 3 tests fail. Claude immediately starts Step 3 without reading the failure messages. What P3 (and which other principle) violation is this?",
          options: {
            A: "Only P3 is violated — Claude should have run tests again",
            B: "P3 (Verification): failed tests must be addressed before proceeding, not ignored. P7 (Observability): test failure output is critical information — it tells you WHAT failed and WHY. Running the next step without reading failure messages means compounding unknown failures. The verification loop requires: act → verify → read results → only proceed if passing.",
            C: "P4 is violated — Claude should have decomposed better",
            D: "This is acceptable — test failures during refactoring are expected"
          },
          correct: "B",
          explanation: "Two principle violations: P3 — the verification loop requires observing results before proceeding. Skipping failed test analysis means building Step 3 on a broken Step 2 foundation. P7 — test failure messages are observations that inform the next action. Ignoring them means acting without information. The correct response to Step 2 failures: READ the failure messages (P7 observability), DIAGNOSE the cause, FIX Step 2, VERIFY Step 2 passes, THEN proceed to Step 3."
        },
        {
          id: 20,
          question: "Scenario: Claude says 'I've implemented the email sending feature.' You ask for verification evidence. Claude responds: 'I reviewed the implementation carefully and the logic looks correct.' According to P3's verification hierarchy, what level is this and what's the minimum acceptable verification?",
          options: {
            A: "This is level 3 (integration) — Claude reviewed it comprehensively",
            B: "This is level 0 (self-review / looks correct) — the weakest form. Minimum acceptable: run the unit tests for the email function (level 2). Better: integration test with a mock email service (level 3). For production: verify an email actually arrives in a test inbox (level 4). 'Looks correct' is an opinion, not evidence.",
            C: "Code review by Claude is equivalent to unit testing",
            D: "Self-review is sufficient for simple features like email sending"
          },
          correct: "B",
          explanation: "P3 verification hierarchy: Level 0 (self-review / looks correct) = no evidence. Level 1 (syntax) = compiles. Level 2 (unit) = functions work in isolation. Level 3 (integration) = components work together. Level 4 (manual/e2e) = real behavior. 'Reviewed and looks correct' is level 0 — an opinion. Unit tests provide minimum evidence that the email function produces correct output with mock data. Integration tests provide evidence it connects to the email service. Only level 4 provides evidence an email actually arrives."
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
        },
        {
          id: 16,
          question: "Scenario: A developer has been working on a feature for 3 weeks on a local branch. They finally merge it to main — the merge commit contains 2,847 changed lines across 45 files. The day after merging, a production bug is traced to this feature. The lead developer says 'we need to revert it.' What P4 problem does this situation reveal?",
          options: {
            A: "The developer should have used a different branching strategy",
            B: "P4 was violated: no atomic commits within the feature branch. A single mega-commit (3 weeks of work) makes surgical reversion impossible — the entire 3-week effort must be reverted to fix the bug. Small commits within the branch would allow reverting just the buggy change while keeping the rest of the feature",
            C: "The bug should have been caught in code review before merging",
            D: "The developer should have made the branch smaller"
          },
          correct: "B",
          explanation: "P4: Small, Reversible Decomposition requires atomic commits WITHIN feature branches, not just the branch itself. 3 weeks of changes in one commit means: to revert the bug, you revert everything. With atomic commits (e.g., 15-20 meaningful commits over 3 weeks), the team could identify the specific commit introducing the bug via `git bisect` and revert only that change — 10 lines instead of 2,847. Branch strategy is secondary; commit granularity is primary."
        },
        {
          id: 17,
          question: "Scenario: Claude is about to refactor a core authentication module that 12 other services depend on. Without using Plan Mode, Claude begins making changes directly. After 30 minutes, you notice authentication is broken across all services, and the changes span 8 files with no clear rollback path. What P4 practice should have been followed?",
          options: {
            A: "Claude should have asked for permission before starting",
            B: "Plan Mode first: Claude should have outlined the decomposed approach (which files in what order, each as a separate verified step) before executing. High-risk refactors require explicit decomposition into reviewable, reversible stages before any code changes",
            C: "Claude should have backed up the files manually",
            D: "The refactor was too complex for an AI to handle"
          },
          correct: "B",
          explanation: "P4 + Plan Mode: before touching a high-dependency module, decompose the work explicitly. Plan Mode forces articulation: 'Step 1: Update AuthService interface (1 file, 20 lines) → verify all tests pass. Step 2: Update ServiceA to new interface → verify. Step 3: Update ServiceB...' Each step is small, independently verifiable, and creates a clear rollback point. Jumping straight to execution without this plan turns a manageable refactor into an entangled mess."
        },
        {
          id: 18,
          question: "Scenario: You ask Claude to 'add user authentication to the app.' Claude responds: 'I'll set up the database schema, implement the auth library, build the login/register UI, add middleware, write tests, and update documentation — all in this session.' According to P4, what should Claude (or you) do instead?",
          options: {
            A: "Proceed as Claude described — completing everything in one session is efficient",
            B: "Decompose into separately verified phases: Phase 1 (schema + migration, verify DB), Phase 2 (auth library, verify with unit tests), Phase 3 (middleware, verify with integration tests), Phase 4 (UI, verify with E2E tests), Phase 5 (documentation). Each phase completes, is verified, and committed before the next begins",
            C: "Ask Claude to write a detailed specification before starting",
            D: "Split the work between multiple AI agents"
          },
          correct: "B",
          explanation: "P4 applied to multi-phase features: 'authentication' is not one step — it's 5+ distinct phases with different risk profiles. Doing all at once means: if Phase 3 (middleware) breaks, you're debugging in the context of 500 uncommitted changes. Phase-by-phase: after Phase 2, auth library is verified and committed. Phase 3 is added to a known-good base. Each phase's problems are isolated to that phase. This is why P4 says: small steps, each verifiable."
        },
        {
          id: 19,
          question: "Scenario: Claude implements Step 3 of a decomposed plan: 'Update the payment API to use the new billing library.' After committing, you run integration tests — 3 tests fail in ways that suggest the new billing library has a subtle compatibility issue. What does proper P4 execution enable you to do?",
          options: {
            A: "Nothing — you must debug forward from the current state",
            B: "`git revert` the Step 3 commit (which is isolated and atomic), restoring the known-good Step 2 state. You can now investigate the billing library compatibility in isolation without affecting other in-progress work, and attempt Step 3 again with a fix — or defer it while continuing other phases",
            C: "Delete the billing library and use the old one permanently",
            D: "Roll back the entire feature branch to the beginning"
          },
          correct: "B",
          explanation: "This is P4's core payoff: when each step is a separate atomic commit, reverting it is surgical. `git revert HEAD` undoes exactly Step 3 — nothing more, nothing less. You're back to the verified Step 2 state in seconds. Then investigate the billing library issue in a branch, fix it, re-run Step 3. Without P4: if Steps 2, 3, and 4 were one commit, reverting 'just the billing library change' requires manually disentangling hundreds of lines."
        },
        {
          id: 20,
          question: "Scenario: The P4 decomposition plan includes: 'Step 4: Run data migration to populate new columns from legacy table (DROP old table after completion).' According to P4's reversibility principle, what flag should you raise before executing Step 4?",
          options: {
            A: "No concern — data migrations are normal operations",
            B: "The DROP command makes Step 4 irreversible. P4 requires identifying irreversible steps and adding explicit safety measures: backup the table before dropping (pg_dump or RENAME instead of DROP), verify migration success completely before the DROP, and get explicit confirmation. Or separate: Step 4a = migrate + verify, Step 4b = drop (with rollback window). The irreversible part deserves its own step",
            C: "The data migration should be skipped to maintain reversibility",
            D: "Run Step 4 in a transaction so it can be rolled back"
          },
          correct: "B",
          explanation: "P4 reversibility doesn't mean every step MUST be reversible — it means you must explicitly identify irreversible steps and protect them. DROP table is permanent. P4's response: (1) backup first (RENAME old_table to old_table_backup or pg_dump), (2) separate the irreversible action into its own step with explicit verification gate, (3) document the point-of-no-return clearly. P4 applied: 'Step 4a: migrate data, verify row counts match, spot-check records → commit. Step 4b: (24-hour delay) drop backup table → commit.' The delay creates a rollback window."
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
        },
        {
          id: 16,
          question: "Scenario: You spend 2 hours in a Claude Code session establishing that the project uses a custom authentication library (not passport.js), prefers PostgreSQL over SQLite, and follows a specific error handling pattern. You close the session. Next day, a new session begins — Claude immediately suggests passport.js for auth, SQLite for a new microservice, and a different error pattern. What P5 practice was missing?",
          options: {
            A: "Claude should have remembered from the previous session automatically",
            B: "The session's key decisions and conventions should have been written to CLAUDE.md during the session: '- Auth: use CustomAuthLib, never passport.js. - DB: PostgreSQL only, no SQLite. - Errors: use AppError class with error codes.' P5: persist every meaningful decision to files because context does not survive session boundaries",
            C: "You should have taken notes yourself and pasted them at the start of each session",
            D: "The session was too short to establish reliable context"
          },
          correct: "B",
          explanation: "P5's fundamental insight: Claude has no memory between sessions. Everything in a session that affects future work must be persisted to files. CLAUDE.md is the primary vehicle for project conventions and architectural decisions. The 2 hours establishing conventions = investment lost if not written down. With CLAUDE.md updated during the session, the next session starts informed: Claude reads 'use CustomAuthLib' and never suggests passport.js. P5 converts ephemeral session knowledge into durable project knowledge."
        },
        {
          id: 17,
          question: "Scenario: Three months into a project, the team debates switching the message queue from RabbitMQ to Kafka. A developer asks: 'Why did we even choose RabbitMQ originally?' Nobody remembers. Hours are lost reconstructing the reasoning. According to P5, what should have happened when RabbitMQ was initially chosen?",
          options: {
            A: "The decision should have been committed to git with a detailed commit message",
            B: "An ADR (Architectural Decision Record) file should have been created: ADR-003-message-queue.md documenting the decision, the alternatives considered (Kafka, SQS, RabbitMQ), the criteria (latency, team expertise, cost), and the reasoning. P5 persists decisions with their context so future conversations — human or AI — can understand why",
            C: "The lead architect should have remembered and documented it in their own notes",
            D: "A wiki page should have been updated with the decision"
          },
          correct: "B",
          explanation: "P5's ADR practice: decisions decay without documentation. ADR-003 structure: Context (what we needed), Decision (chose RabbitMQ), Alternatives (Kafka: higher throughput but steep learning curve; SQS: managed but vendor lock-in), Consequences (team needs RabbitMQ expertise). Three months later: the team reads ADR-003, understands why RabbitMQ was chosen (team expertise + simpler ops), and can make an informed switch decision vs. the original criteria. P5 saves the 'why' so future work builds on informed foundations."
        },
        {
          id: 18,
          question: "Scenario: Claude is implementing a 12-step database migration plan. At Step 7, the session hits its context limit and must end. You start a new session next day. You say 'continue the database migration.' Claude has no context of which steps are done. According to P5, what should Claude have been doing throughout the session?",
          options: {
            A: "Claude should have worked faster to complete all 12 steps in one session",
            B: "Maintaining a progress checklist file (migration-progress.md): '- [x] Step 1: Create tables... - [x] Step 2: Add indexes... - [ ] Step 8: Migrate foreign keys...' P5: for multi-step tasks, write progress to files so that any new session can immediately resume from where the previous one stopped",
            C: "The user should have written down the progress manually",
            D: "Use a shorter task that fits within one context window"
          },
          correct: "B",
          explanation: "P5 for long tasks: context windows have limits; long tasks don't. The solution is externalizing progress into files. A `migration-progress.md` with checkboxes means: new session, new context, but the file shows exactly where you are. Claude reads: 'Steps 1-6 complete (see checked items), continuing from Step 7: Migrate constraint data.' This is not about backup — it's about making long-running work session-agnostic. P5 makes tasks outlast their sessions."
        },
        {
          id: 19,
          question: "Scenario: During a debugging session, Claude discovers three important things: (1) the test database is at localhost:5433 (not 5432), (2) the main branch has a known broken test that's being ignored, and (3) there's a commented-out code block that must never be deleted (it documents a resolved security issue). Where should each of these be persisted according to P5?",
          options: {
            A: "All three should go in CLAUDE.md",
            B: "Context-appropriate persistence: (1) DB port → CLAUDE.md (project config/conventions). (2) Broken test → CLAUDE.md (known issue + ignore reason). (3) Never-delete comment → CLAUDE.md OR a comment in the code itself (closest to the code). P5: different facts have different natural homes — CLAUDE.md for project context, inline comments for code-level context. All three should be written down before the session ends",
            C: "None of these need documentation — they can be re-discovered",
            D: "All three should go in a separate NOTES.md file"
          },
          correct: "B",
          explanation: "P5 context-appropriate persistence: different facts belong in different places. The port (5433) is a project configuration fact → CLAUDE.md's environment section. The broken test → CLAUDE.md's known issues section, with the skip reason (prevents wasted debugging). The never-delete comment → either add to the comment itself or CLAUDE.md. The principle: all three facts, if not persisted, will be re-discovered at cost. P5 eliminates re-discovery by writing as you learn."
        },
        {
          id: 20,
          question: "Scenario: You use Claude Code for 2 hours on a complex refactoring task. At the end, you're not done — you need to continue tomorrow. Claude says: 'We've made good progress.' According to P5's session handoff practice, what should happen before closing the session?",
          options: {
            A: "Save the chat log and paste it into the next session's context",
            B: "Write a SESSION-HANDOFF.md (or update CLAUDE.md): current state summary, what was changed and why, what remains to be done (with specific next steps), any decisions made, and any blockers encountered. P5: end-of-session notes convert session memory into file memory, making the next session immediately productive without context reconstruction",
            C: "Ask Claude to summarize the session verbally so you can remember",
            D: "Start fresh tomorrow — re-reading files is more reliable than notes"
          },
          correct: "B",
          explanation: "P5 session handoff: 'good progress' lives in the session context, which dies when you close it. SESSION-HANDOFF.md template: '## State: Auth module refactored (files A, B, C). ## Remaining: D, E still need updating. ## Decisions: Chose approach X over Y because Z. ## Next step: Start with file D, function processUser() — it calls the old interface.' Tomorrow's session: read SESSION-HANDOFF.md first, start immediately from the exact stopping point. Without it: 20+ minutes of re-orientation. P5 multiplies the value of today's work into tomorrow's session."
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
        },
        {
          id: 16,
          question: "Scenario: Claude is mid-way through implementing a 200-line database migration when you notice it's modifying a table you didn't intend to change. You have no permission controls configured. What is your only option, and what P6 safeguard was missing?",
          options: {
            A: "Wait for Claude to finish and then revert the migration",
            B: "Press Ctrl+C immediately (emergency stop). Missing P6 safeguards: Permission Controls (requiring approval before modifying database schemas) and Technical Limits (whitelisting which tables Claude can modify). With these, Claude would have asked permission before touching the unintended table.",
            C: "Accept the change — it may be necessary",
            D: "Ask Claude to undo what it already did"
          },
          correct: "B",
          explanation: "P6 Defense in Depth: Layer 1 (Technical Limits) would have whitelisted only the intended tables — any modification to unlisted tables is blocked. Layer 2 (Permission Controls) would have required your approval for schema changes. Without these layers, Ctrl+C is your only intervention option — and it may be too late if the modification already ran. The safety hierarchy exists specifically to prevent 'I had to use Ctrl+C as my last resort' situations."
        },
        {
          id: 17,
          question: "Scenario: You're starting a new project and want to use Claude Code autonomously. Your tech lead suggests starting with full autonomy to maximize speed. According to Trust Gradualism, why is this dangerous and what should you do instead?",
          options: {
            A: "Full autonomy is fine if the codebase is small",
            B: "Trust Gradualism says start at Phase 1 (Observation Only): Claude reads and explains, you apply changes manually. Full autonomy on an unfamiliar tool and codebase maximizes both risk and trust simultaneously — you've granted maximum permissions without any calibration of Claude's behavior in your specific context. Build trust incrementally.",
            C: "Start at Phase 3 (Selective Autonomy) — Phase 1 is too slow",
            D: "Full autonomy is fine if you use a recent Claude model version"
          },
          correct: "B",
          explanation: "Trust Gradualism exists because autonomy must be calibrated to earned trust. Full autonomy from day 1 means: Claude can make irreversible changes before you understand its behavior, you can't catch unexpected patterns before they cause damage, and you have no safety baseline. Phase 1 (Observation Only) costs speed but builds: understanding of Claude's behavior in YOUR codebase, awareness of edge cases specific to your project, and a calibrated mental model before granting write access."
        },
        {
          id: 18,
          question: "Scenario: Claude generates code that includes `const API_KEY = 'sk-prod-abc123'` hardcoded in a source file. You catch it before committing. What P6 controls would have prevented this from reaching the repository?",
          options: {
            A: "Code review — always catch it manually",
            B: "Layer 1 (Technical Limits): a pre-commit hook scanning for secret patterns (`sk-prod-`, API keys, passwords) that rejects commits containing credentials. Layer 4 (Process Controls): a diff review step before committing where you verify no secrets are introduced. Layer 2 (Permission Controls): requiring approval for any new environment variable or string that looks like a credential.",
            C: "Tell Claude to not include secrets in the prompt",
            D: "Use a different AI model that doesn't generate secrets"
          },
          correct: "B",
          explanation: "P6 defense in depth for secret prevention: Layer 1 (Technical Limits) — pre-commit hooks with secret scanning (`detect-secrets`, `git-secrets`) automatically reject commits with credential patterns, even if Claude generated them. Layer 4 (Process Controls) — diff review catches secrets before commit. The point: relying solely on human vigilance ('I'll notice secrets') is a single point of failure. Multiple automated layers (secret scanning hooks) catch what humans miss."
        },
        {
          id: 19,
          question: "Scenario: You're working with Claude on a production database. Claude asks: 'Should I proceed with `UPDATE users SET role = \"admin\" WHERE email LIKE \"%@company.com\"`?' According to P6, what specific checks should you perform before approving?",
          options: {
            A: "Approve if the SQL looks syntactically correct",
            B: "Run `SELECT COUNT(*) FROM users WHERE email LIKE '%@company.com'` to see how many rows will be affected, verify the LIKE pattern is correct (are there non-company emails that match?), confirm this is the intended scope, and ensure a rollback backup exists. The Safety Mantra applies: understand the blast radius before approving.",
            C: "Approve — the LIKE pattern looks correct",
            D: "Reject all UPDATE statements — never allow mass updates"
          },
          correct: "B",
          explanation: "P6 required checks before destructive SQL: 1) See the blast radius — SELECT COUNT(*) shows how many rows are affected (5 or 50,000?). 2) Verify the filter — `LIKE '%@company.com'` might match unexpected patterns. 3) Confirm scope — is every matching user supposed to become admin? 4) Backup confirmation — can you revert if wrong? These checks are the REQUIRED section of the Guardrail Prompt Template. 'Looks correct' is not sufficient; ground truth from SELECT COUNT is required."
        },
        {
          id: 20,
          question: "Scenario: After 3 months of productive work with Claude, you realize you've been in Phase 2 (Supervised Autonomy — approving every diff). Tests always pass, diffs are always reasonable, and no issues have occurred. Your colleague says 'move to Phase 3 now.' How do you decide if Phase 3 is appropriate?",
          options: {
            A: "Always stay in Phase 2 — maximum safety requires maximum oversight",
            B: "Trust Gradualism: 3 months of Phase 2 with consistent reliability (tests always pass, reasonable diffs, no incidents) provides the evidence needed for Phase 3. Transition to Selective Autonomy: auto-approve tests, linting, and routine refactors within established patterns; retain approval for novel changes, new files, and deployments.",
            C: "Move to Phase 4 (Calibrated Autonomy) immediately — you've earned it",
            D: "Stay in Phase 2 until you've worked together for 12 months"
          },
          correct: "B",
          explanation: "Trust Gradualism transition criteria: demonstrated reliability over time + understanding of Claude's behavior + calibrated mental model = readiness for next phase. 3 months of consistent reliability satisfies Phase 2 → 3 criteria. Phase 3 (Selective Autonomy): auto-approve safe operations (tests, linting, established patterns) while maintaining approval gates for novel or higher-risk operations (new files, external integrations, deployments). The phases don't have fixed durations — they have evidence thresholds."
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
        },
        {
          id: 16,
          question: "Scenario: You ask Claude to refactor a large codebase — 'update all API calls to use the new SDK.' Twenty minutes pass. Claude is running commands in the background. You have no idea what's happening, whether it's making progress, or what files it's modifying. This is a P7 failure. What observability instruction should you have given at the start?",
          options: {
            A: "Tell Claude to work faster",
            B: "Establish an observability contract: 'Before each file group you modify, tell me: what files, what changes. After each group, confirm what changed. If you hit something unexpected, stop and ask.' P7: observability must be set up proactively — you can't add it retroactively to an already-running session without disrupting it",
            C: "Use a progress bar tool",
            D: "Watch the filesystem for changes yourself"
          },
          correct: "B",
          explanation: "P7 proactive observability: the time to establish transparency is before work begins, not after. 'Explain before executing' + 'checkpoint after batches' contracts prevent the black-box scenario. Claude announces: 'I'll now update api/users.ts, api/posts.ts (group 1 of 5)...' → you see what's happening. After: 'Group 1 done: 3 files modified, all tests passing.' You can intervene between groups. Without this contract, the 20-minute silence leaves you unable to verify, redirect, or stop at the right point."
        },
        {
          id: 17,
          question: "Scenario: Claude completes a task: 'I've updated the authentication system as requested.' You ask 'what exactly changed?' Claude responds with a vague summary. You run `git diff` and find 23 files modified, some in areas you didn't expect (config files, environment variables, a deployment script). What P7 practice failure occurred?",
          options: {
            A: "Claude made too many changes",
            B: "The post-task Summary After Completion was missing or inadequate. P7 requires Claude to proactively provide: specific files changed, nature of each change, any unexpected discoveries, and test results — not wait to be asked. The deployment script change especially should have been surfaced as a checkpoint, not buried in the final diff",
            C: "Claude should have asked permission for each file",
            D: "You should have run `git diff` before asking Claude to summarize"
          },
          correct: "B",
          explanation: "P7 Summary After Completion: after any significant task, Claude should proactively enumerate changes — not require the human to interrogate `git diff`. Template: 'Changed: [file list]. In auth/: updated JWT expiry logic (per request). In config/: updated token TTL values (required by auth change). In deploy/: updated env variable names to match new config.' The deploy script change is a scope expansion — P7 requires surfacing this at discovery time ('I found deploy/env.sh also needs updating — should I?'), not burying it in a silent diff."
        },
        {
          id: 18,
          question: "Scenario: Claude is executing Step 4 of a 10-step plan. At Step 4, it announces: 'Updating database configuration — this will reset all connection pools.' You realize this will break 3 active background jobs running in production. You need to stop Claude immediately. What P7-aligned capability should be available?",
          options: {
            A: "Close the terminal and reopen it",
            B: "Claude's Explain Before Executing practice means Step 4 was announced before execution — you can now intervene with Ctrl+C or a 'STOP — do not execute this step' message before the destructive action runs. P7's interrupt capability requires that high-impact steps are announced with enough lead time for human intervention",
            C: "Let Claude proceed — it probably won't actually break the jobs",
            D: "Claude should have known about the background jobs without being told"
          },
          correct: "B",
          explanation: "P7 interrupt capability: 'Explain Before Executing' is not just informational — it creates intervention windows. 'I'm about to reset all connection pools' gives you time to say 'STOP — there are active jobs.' Without P7: Claude acts, then announces ('I reset the connection pools'), and you discover the broken jobs after the fact. With P7: announcement → intervention window → you stop it → you provide context ('3 active jobs, schedule this for the maintenance window') → Claude adjusts plan. The announcement is the interrupt hook."
        },
        {
          id: 19,
          question: "Scenario: You're about to have Claude autonomously manage a 2-hour data processing pipeline (reading from S3, transforming records, writing to multiple databases). You want maximum visibility while not micromanaging. What P7 observability setup balances visibility with autonomy?",
          options: {
            A: "Tell Claude to complete the full pipeline and give a final report",
            B: "Structured visibility contract: (1) Announce each stage before starting (S3 read, transform, DB writes). (2) Progress checkpoints every 10,000 records with counts and sample outputs. (3) Immediate escalation if error rate exceeds 1% or unexpected schema encountered. (4) Final summary with record counts, file list, error summary. This gives insight at key moments without requiring approval for every record",
            C: "Watch the terminal output yourself for the full 2 hours",
            D: "Enable verbose logging and review the log file after completion"
          },
          correct: "B",
          explanation: "P7 for long autonomous tasks: the goal is insight at key decision points without micromanagement. Stage announcements give architectural visibility. Progress checkpoints (every 10K records) confirm progress without requiring approval. Error thresholds create automatic escalation for exceptions — Claude runs autonomously until something goes wrong, then surfaces it immediately (not at the end). The final summary closes the loop. This is P7 applied to agentic work: structured visibility, not surveillance."
        },
        {
          id: 20,
          question: "Scenario: After Claude completes a 'clean up technical debt' session, you ask your team lead to review the changes. They ask: 'What was the scope? What did it change? Was anything risky?' You find yourself unable to answer without reading every diff. This represents a P7 failure. What should Claude have produced?",
          options: {
            A: "Claude should have written a test for every change",
            B: "A structured Session Summary: scope of the cleanup (which files/modules), categories of changes (dead code removed, variable renames, pattern consolidations), risk assessment (any behavioral changes vs. pure refactors), test coverage status before and after. P7 observability extends to accountability artifacts — the session's output should be auditable by someone who wasn't present",
            C: "You should have taken notes during the session",
            D: "The team lead should review the git diff themselves"
          },
          correct: "B",
          explanation: "P7 observability includes accountability to stakeholders. 'Clean up technical debt' is vague, and the result — undocumented changes across many files — is unauditable. P7's Summary After Completion creates an audit trail: 'Removed 450 lines of dead code from auth/ and payments/ (verified unused via grep). Renamed 12 variables for clarity (no behavioral change). Extracted 3 duplicate patterns into shared utilities (behavior preserved, tests confirm). Risk: zero — all changes are refactors with test coverage unchanged.' Now the team lead can review without reading every diff."
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
        },
        {
          id: 16,
          question: "Scenario: You've been in a Claude Code session for 4 hours. The conversation context is very long. You notice Claude's responses becoming slightly less precise — it references an earlier decision incorrectly and seems to mix up two file names. What operational best practice should you apply?",
          options: {
            A: "Continue the session — Claude will recalibrate",
            B: "Apply context hygiene: before the session degrades further, use /compact or start a fresh session. First, ensure all important context is persisted to files (P5): update CLAUDE.md with decisions made, save any in-progress state. Then: '/compact [summary of what to retain]' or fresh session with CLAUDE.md as context. Long sessions accumulate noise that degrades precision — recognizing the signs and resetting proactively is an operational best practice",
            C: "Repeat the incorrectly-referenced decision to correct Claude",
            D: "Save the chat transcript and use it as context in the new session"
          },
          correct: "B",
          explanation: "Context window saturation is a real operational concern. Signs: Claude references earlier items incorrectly, conflates details, or seems to lose track of constraints. The fix: proactive /compact or session restart before it gets worse. Critical prep: persist everything to files FIRST (P5), so the fresh session starts with a complete CLAUDE.md rather than a degraded conversation context. A focused, fresh session with a well-maintained CLAUDE.md often outperforms a bloated 4-hour session where precision has deteriorated."
        },
        {
          id: 17,
          question: "Scenario: You need to add a simple null check to a utility function. You open Claude Code, write a detailed spec, enter Plan Mode, create an ADR, and set up a feature branch with CI/CD gates. The change takes 45 minutes. Your colleague makes the same type of change in 3 minutes. According to operational best practices, what went wrong?",
          options: {
            A: "Nothing — more process is always better",
            B: "Over-engineering the approach: operational best practices match process overhead to task risk and complexity. A null check to a utility function = low risk, low complexity, no architectural impact. The right approach: read the file, make the edit, run the specific test, commit. Process overhead (specs, ADRs, Plan Mode) is for high-risk, high-complexity decisions — not every change",
            C: "Your colleague's approach was dangerously casual",
            D: "You should have used a different AI tool for simple changes"
          },
          correct: "B",
          explanation: "Operational best practices include right-sizing process to task. The seven principles provide a toolkit, not a mandatory checklist for every change. A null check: P3 (verification) = run the 1 relevant test. P4 (decomposition) = the change is already atomic. No SDD, no ADR, no Plan Mode needed. The trap: over-applying heavy-weight practices to light-weight changes. The skill is calibration — maximum process for maximum risk, minimal process for minimal risk. A 45-minute null check is a calibration failure."
        },
        {
          id: 18,
          question: "Scenario: You need to investigate: (1) how the payment module works, (2) what tests exist for billing, and (3) what the deployment process requires. You ask Claude to research all three in the main session, which takes 30 minutes of file-reading. This bloats your main context. What operational practice would have been more efficient?",
          options: {
            A: "Research everything upfront is the right approach",
            B: "Use parallel subagents for independent research: spawn 3 subagents simultaneously (each with a specific research question) while the main session plans. Subagents return findings; main session acts on them. Parallel research (multiple agents simultaneously) vs. sequential research (one agent, then another) can reduce research phase from 30 minutes to 10 minutes while keeping main context clean",
            C: "Ask Claude to read faster",
            D: "Research each area on separate days to avoid context bloat"
          },
          correct: "B",
          explanation: "Operational efficiency via parallel subagents: independent research tasks (payment module structure, billing tests, deployment requirements) can run simultaneously. Spawn 3 subagents, each answering one focused question, while the main session waits. Subagents are isolated — their research context doesn't pollute the main session. Results arrive in parallel. Main session then has clean findings to act on. This is a force multiplier: use subagents for research, keep main session for synthesis and action."
        },
        {
          id: 19,
          question: "Scenario: Claude is trying to fix a test but has been in a loop for 20 minutes: tries fix A → test fails → tries fix B → different error → tries fix C → back to original error. The session has 15+ attempts and the context is filled with failed experiments. What operational practice should you apply?",
          options: {
            A: "Let Claude continue — it will eventually converge",
            B: "Apply the Debugging Loop Anti-Pattern intervention: stop the session, use /compact or restart. Before restarting, read the error messages directly and diagnose the root cause yourself (or with a fresh Claude session focused only on diagnosis). Then bring a specific hypothesis to a new session: 'The error is X, the root cause appears to be Y — implement fix Z.' Fresh context + specific direction breaks the loop",
            C: "Ask Claude to try a completely different approach",
            D: "Increase the context window to fit more attempts"
          },
          correct: "B",
          explanation: "The Debugging Loop Anti-Pattern: Claude in a loop accumulates failed attempts in context, which can bias subsequent attempts. Signs: cycling through the same errors, 10+ attempts without convergence. Intervention: stop, compress or reset, then re-approach with direction. The key insight: Claude debugging alone may lack the domain knowledge to escape certain loop types. Human diagnosis of the root cause (reading error messages, checking documentation, understanding system constraints) provides the specific direction that breaks the cycle. Don't let loops run — they waste context and time."
        },
        {
          id: 20,
          question: "Scenario: You start a new Claude Code session on a project. Instead of reading CLAUDE.md or recent git history, Claude immediately begins asking 'what would you like to do today?' and then starts work based only on your current request, unaware of project conventions. What operational practice improves session startup?",
          options: {
            A: "Always paste the last session's transcript as context",
            B: "Establish a session initialization protocol: at session start, Claude reads CLAUDE.md (project context), scans recent git log (what changed recently), and checks any active progress files (ongoing tasks). This takes 2 minutes but prevents suggesting approaches that violate project conventions, duplicating recently-completed work, and missing project-specific context that affects every decision",
            C: "Tell Claude all the context verbally at the start of each session",
            D: "Claude should automatically know the project state from its training"
          },
          correct: "B",
          explanation: "Session initialization protocol: the first 2 minutes of a session determine its quality. A 'what would you like to do today?' cold-start misses everything P5 captured in files. Protocol: READ CLAUDE.md (conventions, decisions, constraints) → SCAN git log --oneline -10 (recent changes, avoid duplicating) → CHECK any progress files (ongoing tasks, stopping points). Cost: 2 minutes. Benefit: all subsequent responses informed by project reality. This operational practice converts P5's file investments into session-start value — files written are only useful if read."
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
        },
        {
          id: 16,
          question: "Scenario: You need Claude to add a new payment provider integration. The feature requires: database changes, API client implementation, webhook handling, and documentation. Which combination of principles should guide your approach?",
          options: {
            A: "Just P1 (Bash) — run the tests after Claude is done",
            B: "P2 (design interface/tests first), P4 (decompose into DB → API → webhook → docs phases, each committed separately), P3 (verify each phase before proceeding), P5 (CLAUDE.md updated with payment provider constraints), P6 (approve DB schema before migration runs), P7 (explain before each phase, checkpoint after). Multiple principles applied in concert",
            C: "P6 only — safety is the most important principle",
            D: "P1 and P3 — execute with Bash and verify at the end"
          },
          correct: "B",
          explanation: "Real-world features activate multiple principles simultaneously. Payment integration: P2 defines the PaymentProvider interface before implementation (drives design from consumer need). P4 decomposes the 4 phases into separate verifiable commits. P3 verifies each phase (DB schema, API client tests, webhook tests, docs build). P5 persists the provider's API constraints to CLAUDE.md. P6 gates the migration run and any production data access. P7 sets up checkpoints between phases. This is principles fluency: knowing which principles apply and how they interact."
        },
        {
          id: 17,
          question: "Scenario: P6 says 'require explicit approval before irreversible actions.' P7 says 'maintain forward momentum with minimal interruption.' You're running a 50-step automated pipeline. Requiring approval at each irreversible step would create 15 approval gates, killing momentum. How do you resolve this apparent tension?",
          options: {
            A: "Choose one principle and ignore the other",
            B: "Resolve through pre-negotiation: before the pipeline starts, review and approve the list of all 15 irreversible steps upfront (P6 batch approval). This satisfies P6 (irreversible actions were explicitly reviewed) while enabling P7 (pipeline runs with minimal interruption after the initial review). The principles aren't in conflict — they're resolved by shifting the approval to plan time rather than execution time",
            C: "Apply P6 strictly — interrupt 15 times, momentum is less important than safety",
            D: "Apply P7 strictly — run all 50 steps without interruption, review at the end"
          },
          correct: "B",
          explanation: "Principles sometimes create apparent tension, but usually it's resolvable through order of operations. P6 requires explicit approval — it doesn't specify real-time approval. Review the 15 irreversible steps in the Plan Mode output before running anything: 'Steps 7, 12, 19, 23... are irreversible — approve all?' One approval gate at plan time vs. 15 gates at execution time. This respects P6 (you reviewed and approved all irreversible actions), enables P7 (pipeline runs uninterrupted), and respects P4 (clear plan before execution). Multi-principle fluency includes resolving tensions creatively."
        },
        {
          id: 18,
          question: "Scenario: You assess your AI collaboration workflow. Your P3 (Verification) score is 1 — you almost never verify Claude's outputs before moving on. In the last month, you've had 3 incidents where unverified changes caused production issues that took hours to fix. According to the 'Putting It All Together' framework, what is the most impactful improvement you can make?",
          options: {
            A: "Improve P7 (Observability) — add more logging",
            B: "Improve P3 specifically: establish a verification habit before every commit. 'Run the relevant tests, inspect the key output, confirm the change does what was intended.' P3 at score 1 with 3 production incidents is a direct causal link. The highest ROI fix is the lowest-scored principle causing active problems — start there, not with principles already working",
            C: "Reduce the scope of tasks you give Claude",
            D: "Improve P6 (Safety) — add more approval gates"
          },
          correct: "B",
          explanation: "Health Score improvement strategy: fix the broken fundamentals first, then optimize working ones. P3=1 with 3 production incidents = direct evidence of impact. P3 practice: before committing any Claude-generated change, Claude runs: specific tests ('run only auth tests, not full suite'), inspection ('show me the diff for auth.ts'), and a sanity check command ('curl the endpoint and show the response'). 5 minutes of P3 per commit vs. hours of production incident response. ROI is overwhelming. A gap in any one principle creates cascading failures."
        },
        {
          id: 19,
          question: "Scenario: You want to introduce the seven principles to your 8-person development team. Some developers are skeptical ('this is just common sense'), others are overwhelmed ('I have to remember 7 things for every task'). What's the most effective adoption strategy?",
          options: {
            A: "Require all 7 principles in every task from day one",
            B: "Start with P3 (Verification) and P6 (Safety) — the two principles with the highest immediate risk-reduction value and clearest application. Run a team retrospective on recent AI-collaboration incidents and map them to which principle was missing. Let the team experience the value before introducing the full framework. Add principles incrementally as understanding deepens",
            C: "Create a detailed checklist and require it be followed for every commit",
            D: "Let each developer choose which principles to apply"
          },
          correct: "B",
          explanation: "Team adoption: start with high-value, high-clarity principles that immediately reduce pain. P3 and P6 are concrete (run tests, approve irreversible actions) and solve visible problems (broken deployments, accidental data changes). Run a retrospective: map last month's AI-related incidents to principles — the team sees the framework as a solution to real problems they've experienced, not overhead. Then add P5 (CLAUDE.md), P4 (decomposition), etc. as the team matures. Incremental adoption with evidence beats mandated compliance. The framework should feel like insight, not bureaucracy."
        },
        {
          id: 20,
          question: "Scenario: A developer claims mastery of all seven principles. They correctly explain each principle when asked. However, when given a complex real task, they apply principles in a rigid sequential checklist: 'check P1, check P2, check P3...' regardless of task type. Tasks take much longer than necessary. According to the Assessment Rubric, what level are they actually at?",
          options: {
            A: "Master Director — they correctly applied all principles",
            B: "Proficient (not Master). Master Director level requires fluid, contextual application: principles activate automatically when relevant, not mechanically. The checklist approach indicates understanding but not internalization. True mastery: starting a feature, P2 activates naturally ('I should define the interface first'). P4 activates based on risk level. Rigid sequential checklisting is 'Proficient' applying rules; fluid contextual activation is 'Master' with internalized judgment",
            C: "Developing — they don't fully understand the principles",
            D: "Agent Architect — applying all principles is the definition of mastery"
          },
          correct: "B",
          explanation: "Assessment Rubric levels: Recognizer (can name) → Applier (can use for simple tasks) → Proficient (applies consistently, sometimes rigidly) → Agent Architect (selects appropriate subset per task) → Master Director (fluid, contextual, automatic). The checklist developer is Proficient: they apply correctly but rigidly, treating every task as requiring all 7. Agent Architect: 'This null check is low-risk, only P3 applies.' Master Director: doesn't think about it — the right principles activate situationally. The path from Proficient to Master is deliberate practice until rules become instincts."
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
        {
          id: 12,
          question: "Scenario: Exercise B — Workflow Diagnosis. Claude was asked to refactor a set of data models. The result: (1) 3 models were refactored, (2) existing tests were deleted instead of updated, (3) no new tests were added, (4) all changes were in one large commit, (5) no status updates were given during the 40-minute session. Identify which principles were violated.",
          options: {
            A: "No principles were violated — the refactoring was completed",
            B: "P2 violated (tests deleted/not updated — Code as Interface requires tests as specs). P3 violated (no verification — refactored models were never tested). P4 violated (one large commit — no atomic commits for granular reversibility). P7 violated (no status updates during 40 minutes — observability requires progress visibility). 4 principle violations in one task",
            C: "Only P3 was violated — the tests should have been run",
            D: "Only P4 was violated — the commit was too large"
          },
          correct: "B",
          explanation: "Workflow Diagnosis: work backwards from failures. No tests → P2 (tests as specs were deleted). No verification → P3 (models not verified against any test). One large commit → P4 (should be per-model atomic commits). No updates → P7 (40-minute silence). P2 violation means the refactored models have no specification. P3 means correctness was assumed, not verified. P4 means reverting any one model requires reverting all. P7 means 40 minutes of invisible work. This is why multi-principle fluency matters: each violation compounds the others."
        },
        {
          id: 13,
          question: "Scenario: Exercise C — Principle Application. You want Claude to investigate why your Next.js build is 40% slower than last week. Using Principle 1 (Bash as Key), what specific terminal-based investigation would ground the diagnosis in reality rather than speculation?",
          options: {
            A: "Ask Claude to read all modified files from last week and reason about performance",
            B: "Run targeted bash commands to gather ground truth: `time npm run build` (measure actual build time), `git log --oneline --since='1 week ago'` (identify recent changes), `npm run build -- --profile` (turbopack/webpack profiling output), `du -sh .next/` (output size), `git diff HEAD~N -- package.json` (dependency changes). P1: each command provides verified data — not hypotheses about what might be slower",
            C: "Read the Next.js documentation to find common performance issues",
            D: "Compare the current code against a backup to identify changes"
          },
          correct: "B",
          explanation: "P1 applied to performance investigation: every hypothesis can be tested with bash. 'Is it slower?' → time the build (verified). 'What changed?' → git log (verified). 'Which module takes longest?' → build profiler (verified). 'Is the output larger?' → du (verified). 'New dependencies?' → diff package.json (verified). Each command converts a guess into a fact. Without P1: Claude reviews code and speculates. With P1: profiler output shows 'parser for markdown files: 8.2 seconds' — specific, actionable, verified."
        },
        {
          id: 14,
          question: "Scenario: Exercise C — You're building a notification system. Using P2 (Code as Universal Interface), what should be the FIRST artifact Claude produces before writing any implementation?",
          options: {
            A: "A database schema for storing notifications",
            B: "A test file (or interface definition) that defines how the notification system will be used from the consumer's perspective: `sendNotification(userId, type, payload)`, `getNotificationHistory(userId, opts)`, `markAsRead(notificationId)` — with test cases that specify behavior for each function. P2: the interface (defined by tests) precedes the implementation",
            C: "A list of all the features the notification system needs",
            D: "The NotificationService class with placeholder methods"
          },
          correct: "B",
          explanation: "P2 first artifact: the interface, expressed as tests. Before any implementation: 'sendNotification with valid user and type → returns notification id, sends to delivery queue.' 'sendNotification with invalid user → throws UserNotFoundError.' These tests define the contract. Implementation comes later, constrained by the interface. Benefits: (1) you review the interface before any code is written, catching design issues cheaply. (2) Claude implements against a clear specification, not assumptions. (3) When done, tests verify correctness. P2: tests first means the interface is right before the implementation begins."
        },
        {
          id: 15,
          question: "Scenario: Exercise C — Claude implements a new caching layer in 3 steps: Step 1 (cache interface), Step 2 (Redis adapter), Step 3 (integration with existing services). Using P3 (Verification as Core Step), what should happen between each step?",
          options: {
            A: "Proceed directly — verify everything at the end after all 3 steps",
            B: "P3 verification between every step: After Step 1: run unit tests for the cache interface. After Step 2: run Redis adapter tests (connect, read, write, handle failures). After Step 3: run integration tests confirming existing services use the cache correctly. Plus: end-to-end test showing cache hit/miss behavior. Each verification gate catches problems while context is local",
            C: "Verify once after Step 2 (the implementation), not after Step 1 (just an interface)",
            D: "Only verify if something seems wrong"
          },
          correct: "B",
          explanation: "P3 verification chain: verify after EACH step, not just at the end. Step 1 verification catches interface design problems before any implementation is built on top. Step 2 verification confirms the adapter works in isolation before it's integrated. Step 3 verification confirms the integration didn't break existing services. Without inter-step verification: Step 3 failure could be caused by a bug introduced in any of the 3 steps. With P3: Step 3 failure must be in the integration (Steps 1 and 2 verified working). Precise problem location every time."
        },
        {
          id: 16,
          question: "Scenario: Exercise C — You're migrating an Express.js API to FastAPI. The migration involves: authentication, data models, endpoints (×23), business logic, tests, and deployment configuration. Using P4 (Small, Reversible Decomposition), what is the correct approach?",
          options: {
            A: "Migrate everything in parallel to complete faster",
            B: "Ordered phase decomposition: Phase 1 (data models → commit + verify). Phase 2 (authentication → commit + verify, most critical dependency). Phase 3 (batch endpoints by risk: health/read-only first → commit, then write endpoints → commit, then admin endpoints → commit). Phase 4 (business logic → commit + integration tests). Phase 5 (tests). Phase 6 (deployment config). Each commit is independently deployable progress, each failure is isolated",
            C: "Migrate by file type: all models first, then all tests, then all endpoints",
            D: "Migrate the simpler endpoints first to build momentum, then tackle auth"
          },
          correct: "B",
          explanation: "P4 for large migrations: order by dependency + risk. Authentication first (all other things depend on it — failure affects everything, so verify it early). Endpoints in batches by risk (read-only changes are lower risk than writes, which are lower risk than admin operations). Each phase committed separately: if endpoint batch 2 fails, batch 1 remains deployed and working. The parallel approach (migrate everything at once) creates an entangled state where any failure requires debugging across 6 simultaneous changes. P4 decomposition: each phase is a clean checkpoint from which to advance or retreat."
        },
        {
          id: 17,
          question: "Scenario: Capstone Exercise — you're leading a 6-week AI-assisted development project with 4 developers. After 3 weeks, you notice: (1) different developers get different answers from Claude about project conventions, (2) the same architectural decisions are debated multiple times, (3) new team members take 3 days to onboard. What P5 practices are missing?",
          options: {
            A: "The team needs better communication, not better documentation",
            B: "Shared P5 infrastructure: (1) Central CLAUDE.md in the repo — all conventions in one place, updated when decisions are made (consistency across developers). (2) ADR directory — every architectural decision documented (prevents re-debate). (3) Onboarding checklist — new developer reads CLAUDE.md + ADRs + gets oriented in 2 hours, not 3 days. P5 at team scale requires making file-persisted knowledge accessible and maintained by everyone",
            C: "Use a project management tool instead of CLAUDE.md",
            D: "Have one designated person update all documentation"
          },
          correct: "B",
          explanation: "P5 at team scale: individual P5 (keeping your own CLAUDE.md) becomes insufficient when multiple developers collaborate with Claude. Symptoms: inconsistent answers → CLAUDE.md not shared or not updated. Re-debate → ADRs not written. Slow onboarding → no structured context entry point. Fix: CLAUDE.md becomes a team artifact (in git, everyone updates it when decisions are made, reviewed in PRs). ADRs are the decision history. Onboarding uses these files as the primary source. P5 at team scale is documentation culture — persisted knowledge is a team asset, not an individual practice."
        },
        {
          id: 18,
          question: "Scenario: Capstone Exercise — Claude is autonomously running database maintenance: cleaning up orphaned records, archiving old data, and rebuilding indexes. This is a 45-minute operation. Design a P6 + P7 combined protocol for this operation.",
          options: {
            A: "Let Claude run with full autonomy and review the results after",
            B: "P6 gates: (1) Pre-run: review and approve the list of all DELETE/archive operations before starting. (2) Include an automatic STOP if deletion count exceeds expected by >5% (anomaly detection). P7 visibility: (3) Progress report every 5 minutes: records processed, deletion counts, index rebuild status. (4) Immediate escalation for any unexpected row count or error. (5) Final summary confirming data integrity. Combined: P6 prevents accidents; P7 ensures you can detect and intervene if something unexpected occurs",
            C: "Use P6 only — require approval for every individual deletion",
            D: "Use P7 only — watch the logs carefully and intervene if needed"
          },
          correct: "B",
          explanation: "P6 + P7 synergy for autonomous high-stakes tasks: P6 defines WHAT requires approval (all DELETE operations, upfront not during). P7 defines HOW you stay informed (periodic updates, anomaly escalation). P6 alone would create 1000 approval gates (per-deletion), killing the automation's value. P7 alone provides visibility but no control mechanism. Together: pre-approve the operation class (P6), monitor execution with progress reports (P7), have a clear STOP condition (P6 anomaly gate), and get a verifiable completion summary (P7). The combination enables autonomous operation of high-risk tasks safely."
        },
        {
          id: 19,
          question: "Scenario: Capstone — You are an 'Agent Architect.' For a new feature (OAuth2 integration), map each of the 7 principles to a concrete action you take BEFORE asking Claude to write any code.",
          options: {
            A: "Agent Architects don't need to pre-plan — they guide Claude in real-time",
            B: "P1: verify the oauth2 library is installed (bash: `npm list`). P2: write tests for the OAuth flow before implementation. P3: define verification criteria for each OAuth step. P4: decompose into phases (library setup → auth URL generation → token exchange → session → UI). P5: add OAuth constraints to CLAUDE.md. P6: identify irreversible actions (DB schema for sessions, production redirect URIs). P7: set up 'explain before each phase, checkpoint after.' These 7 pre-actions create a ready environment before Claude writes a line",
            C: "Start with P6 (safety review) and only apply other principles if issues arise",
            D: "Use Plan Mode — it automatically applies all 7 principles"
          },
          correct: "B",
          explanation: "Agent Architect pre-task protocol maps all 7 principles to specific preparatory actions. P1: verify environment. P2: write the 'what should work' tests first. P3: define 'how we'll know each step worked.' P4: plan the decomposed phases before any execution. P5: document constraints in CLAUDE.md so they're consistently applied. P6: identify the irreversible moments and set approval gates. P7: establish the visibility contract for the session. 15 minutes of preparation → hours of focused, safe execution. The Agent Architect does the architecture — Claude does the implementation."
        },
        {
          id: 20,
          question: "Scenario: Capstone — Final assessment. You've been using the seven principles for 6 months. You encounter a novel situation: Claude is helping you analyze a competitor's public API (no code changes, pure research). Which subset of principles is active, and which can be relaxed?",
          options: {
            A: "All 7 principles must always be applied to every task",
            B: "Active: P1 (Bash for curl/jq to actually query the API endpoints and get real responses), P3 (verify analysis conclusions by running the API calls), P7 (progress updates as endpoints are analyzed). Relaxed: P2 (no code interface being built), P4 (research doesn't need atomic commits), P5 (CLAUDE.md update optional unless findings affect project decisions), P6 (no irreversible actions in read-only research). Principle activation is task-contextual",
            C: "None — pure research doesn't require any of the seven principles",
            D: "Only P6 (safety) is always required; others are optional"
          },
          correct: "B",
          explanation: "Master-level application: principles activate contextually, not universally. Research task (read-only API analysis): P1 = critical (run actual API calls, don't speculate about responses). P3 = critical (verify analysis conclusions are accurate). P7 = helpful (know what's been analyzed). P2 = N/A (no code interface). P4 = N/A (nothing to commit). P5 = conditional (update CLAUDE.md only if findings change project approach). P6 = relaxed (read-only operations have no irreversibility). This is Master Director fluency: applying the minimum necessary principles for the task type. The framework serves the work; the work doesn't serve the framework."
        }
      ]
    }
  ]
};
