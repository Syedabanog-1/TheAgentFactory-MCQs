import type { Chapter } from "@/types";

export const chapter57: Chapter = {
  id: 57,
  title: "Extend Your Claw with MCP",
  description: "Build custom MCP servers to extend OpenClaw agents beyond their runtime sandbox — using the describe-steer-verify workflow to connect agents to external databases, APIs, and business systems.",
  color: "purple",
  lessons: [
    {
      id: 1,
      title: "What Your Agent Can and Cannot Do",
      mcqs: [
        {
          id: 1,
          question: "What is the fundamental capability gap in a base OpenClaw agent that prevents it from accessing an external database?",
          options: {
            A: "OpenClaw agents cannot query SQL databases because Claude was not trained on SQL syntax",
            B: "The base agent is confined to its runtime environment — it can only use capabilities installed inside its operational boundary. Without an MCP server exposing the database as a callable tool, the agent has no mechanism to reach outside its box",
            C: "PostgreSQL requires direct TCP connections, which WhatsApp's API blocks for security reasons",
            D: "The agent lacks sufficient memory capacity to store database query results within the conversation context"
          },
          correct: "B",
          explanation: "A base OpenClaw agent operates within its defined runtime environment. It can chat, remember, schedule, and use pre-installed skills — but it cannot spontaneously reach external systems. MCP servers are the bridge that extends the agent's reach to the outside world by exposing external systems as callable tools."
        },
        {
          id: 2,
          question: "What does a custom MCP server achieve architecturally in relation to the OpenClaw agent's operational boundary?",
          options: {
            A: "The MCP server upgrades the AI model inside the agent to a more powerful version",
            B: "The MCP server creates a controlled opening in the agent's boundary — translating external system capabilities into tools the agent can invoke, without giving the agent uncontrolled access to everything outside",
            C: "The MCP server moves the entire agent to a more powerful cloud machine",
            D: "The MCP server removes the operational boundary entirely, allowing the agent unrestricted internet access"
          },
          correct: "B",
          explanation: "MCP servers provide controlled extension. Rather than open internet access (unsafe) or full isolation (limited), MCP servers expose specific, well-defined capabilities as typed tools. The agent gains targeted external reach while the operator maintains control over what systems are accessible."
        },
        {
          id: 3,
          question: "Which capabilities does a base OpenClaw agent have WITHOUT any MCP servers connected?",
          options: {
            A: "Web browsing, database queries, email sending, and calendar management",
            B: "Conversational responses, persistent memory, agent commands, scheduled heartbeats, and pre-installed skills",
            C: "Full internet access restricted to approved domains only",
            D: "Read-only access to all external systems without write permissions"
          },
          correct: "B",
          explanation: "A base OpenClaw agent, without any MCP servers, can: respond to messages, maintain persistent memory, execute agent commands, run scheduled tasks, and use pre-bundled skills. All external system interactions (databases, APIs, third-party services) require dedicated MCP servers."
        },
        {
          id: 4,
          question: "What category of external interaction always requires an MCP server in the OpenClaw architecture?",
          options: {
            A: "Generating long-form text responses to complex questions",
            B: "Accessing live external data sources, calling external APIs, or writing to systems outside the agent runtime",
            C: "Switching between different Claude model versions mid-conversation",
            D: "Sending WhatsApp messages in languages other than English"
          },
          correct: "B",
          explanation: "Any interaction with systems outside the agent runtime — reading from databases, calling third-party APIs, writing to external services, browsing the web — requires an MCP server. These are the 'hands' the agent needs to act in the world beyond its computational sandbox."
        },
        {
          id: 5,
          question: "What happens when an OpenClaw agent attempts to call a tool that is not registered in its MCP configuration?",
          options: {
            A: "The agent makes a best-effort attempt to access the external system directly via HTTP",
            B: "The agent receives a tool-not-found error and must either inform the user or find an alternative approach using available tools",
            C: "OpenClaw automatically searches ClawHub for a matching MCP server and installs it",
            D: "The agent pauses execution and asks the operator to register the missing tool"
          },
          correct: "B",
          explanation: "If an agent calls an unregistered tool, it receives an error response indicating the tool is not available. The agent then reasons about this — it may tell the user the capability is not available, or attempt to fulfill the request using different registered tools."
        },
        {
          id: 6,
          question: "Which term best describes what MCP servers provide to an OpenClaw agent?",
          options: {
            A: "A replacement for the Claude AI model with a more task-specific model",
            B: "Hands — the ability to act on and interact with external systems, turning the agent from a thinker into a doer",
            C: "A faster network connection for reduced latency on all API calls",
            D: "A compliance layer that audits all agent actions before they execute"
          },
          correct: "B",
          explanation: "MCP servers give agents 'hands' — the ability to act in the world beyond their runtime. Without MCP servers, an agent can think and respond but cannot act on external systems. With MCP servers, it can query databases, send emails, update records, and perform real-world actions."
        }
      ]
    },
    {
      id: 2,
      title: "Project Setup and the Describe-Steer-Verify Workflow",
      mcqs: [
        {
          id: 1,
          question: "What is the describe-steer-verify workflow and what does each phase accomplish?",
          options: {
            A: "Spec-Build-Ship: write a formal specification document, implement in Python, push to production",
            B: "Describe-Steer-Verify: state the tool's purpose and interface in natural language → guide the AI's interpretation → confirm the tool behaves as intended through testing",
            C: "Prompt-Generate-Deploy: write a prompt template, auto-generate all server code, one-click deploy",
            D: "Design-Code-Test: UML diagram the tool, hand-code the server, run automated unit tests"
          },
          correct: "B",
          explanation: "Describe-Steer-Verify is Chapter 57's core workflow: (1) Describe — communicate the tool's purpose and interface in natural language; (2) Steer — review what the AI generated and redirect misinterpretations; (3) Verify — test the built tool to confirm it produces the intended behavior."
        },
        {
          id: 2,
          question: "What is the most likely downstream consequence of skipping the Steer phase and proceeding directly from description to code generation?",
          options: {
            A: "The tool will fail to compile because type declarations are missing from the schema",
            B: "The MCP tool may work technically but return bloated payloads — consuming excess tokens, potentially exceeding context limits, increasing costs, and slowing responses",
            C: "Claude will automatically optimize the output to match actual requirements based on the tool name",
            D: "The WhatsApp API will truncate oversized responses automatically"
          },
          correct: "B",
          explanation: "The Steer phase catches misalignments between natural language intent and AI interpretation before they become code. A tool returning 50 fields instead of 3 wastes context window, increases inference costs, and produces noisy agent responses — all avoidable by steering the spec before code generation."
        },
        {
          id: 3,
          question: "What is the genuine productivity argument for using describe-steer-verify when building multiple MCP tools?",
          options: {
            A: "AI-generated code is always bug-free, eliminating all testing time",
            B: "The workflow eliminates manual writing of server boilerplate, schema definitions, and error handling — developers focus on what the tool should do rather than how MCP servers are wired together",
            C: "Describe-steer-verify generates code that executes 10x faster at runtime than hand-written equivalents",
            D: "The workflow creates automatic documentation that satisfies enterprise compliance requirements"
          },
          correct: "B",
          explanation: "Every MCP server requires the same structural scaffolding: transport setup, schema definitions, tool registration, error handling. The describe-steer-verify workflow generates that scaffolding from a plain-English description — developers write domain logic, not infrastructure boilerplate. Multiplied across many tools, this represents substantial saved effort."
        },
        {
          id: 4,
          question: "What does the mcp-builder skill in Claude Code specifically do during the Project Setup phase?",
          options: {
            A: "It generates a ClawHub listing page for the MCP server automatically",
            B: "It provides a pre-configured workflow within Claude Code for scaffolding MCP server structure, schema definitions, and tool registration code from natural language descriptions",
            C: "It deploys the MCP server to a cloud provider with a single command",
            D: "It connects the MCP server to OpenClaw's WhatsApp channel automatically"
          },
          correct: "B",
          explanation: "The mcp-builder skill in Claude Code sets up the MCP development workflow — it provides scaffolding generators, schema helpers, and tool registration templates so developers can describe tools in plain English and receive structured MCP server code rather than writing boilerplate manually."
        },
        {
          id: 5,
          question: "What is the first step in applying the describe-steer-verify workflow to a new MCP tool?",
          options: {
            A: "Write unit tests that define the tool's expected behavior before any implementation",
            B: "State the tool's purpose, input parameters, and expected output in plain natural language to Claude Code",
            C: "Create the database schema or API contract that the tool will connect to",
            D: "Configure the transport protocol and server port before specifying tool behavior"
          },
          correct: "B",
          explanation: "The Describe phase comes first: articulate what the tool does, what inputs it accepts, and what output it should produce — in plain English. This natural language description is what Claude Code uses to generate the tool specification and implementation in subsequent phases."
        },
        {
          id: 6,
          question: "Why is the Steer phase placed between Describe and Verify in the workflow?",
          options: {
            A: "To provide a checkpoint where legal and compliance teams can review the tool specification",
            B: "Because misinterpretations are cheapest to fix at the specification stage — redirecting the AI's interpretation before code generation avoids rewriting implemented code",
            C: "To allow the Claude API's billing system to calculate the cost estimate before implementation proceeds",
            D: "To enable parallel development where multiple team members review the spec simultaneously"
          },
          correct: "B",
          explanation: "The Steer phase exploits the cost asymmetry between spec changes and code changes. Fixing a misinterpretation in a specification takes minutes; fixing the same misinterpretation in generated and tested code takes much longer. Steering before building is the economically rational order."
        }
      ]
    },
    {
      id: 3,
      title: "Transport Protocol Selection and WhatsApp Testing",
      mcqs: [
        {
          id: 1,
          question: "What is the better transport protocol choice for an MCP server deployed on the same machine as the OpenClaw agent, and why?",
          options: {
            A: "HTTP/REST — because it enables future remote deployment without code changes",
            B: "stdio (standard input/output) — inter-process communication via stdin/stdout has lower latency than HTTP because it avoids network socket overhead, TCP handshakes, and HTTP header parsing",
            C: "WebSockets — because they maintain a persistent bidirectional connection, eliminating per-call connection setup",
            D: "gRPC — because binary Protocol Buffers serialization is faster than JSON parsing"
          },
          correct: "B",
          explanation: "Transport selection is context-dependent. For same-machine deployments, stdio avoids HTTP networking overhead (socket creation, TCP handshakes, HTTP parsing) — the agent and MCP server communicate directly through process pipes. HTTP becomes relevant when the MCP server is deployed remotely."
        },
        {
          id: 2,
          question: "What has a developer fundamentally achieved after connecting a custom MCP server to their OpenClaw WhatsApp agent and testing it end-to-end?",
          options: {
            A: "They trained the Claude model on their custom data, embedding it into model weights",
            B: "They extended their agent from an isolated conversational system into a tool-using AI Employee that bridges natural language interaction with live operational business data",
            C: "They built a traditional chatbot with hard-coded responses for common business questions",
            D: "They connected WhatsApp directly to their database, bypassing the AI layer for specific queries"
          },
          correct: "B",
          explanation: "This outcome represents the Chapter 57 thesis: MCP servers transform isolated AI agents into operational participants in real business systems. The agent moved from 'I don't have that information' to accessing live data through a purpose-built tool — the difference between a conversational assistant and a genuine AI Employee."
        },
        {
          id: 3,
          question: "When should HTTP transport be chosen over stdio for an MCP server?",
          options: {
            A: "When the MCP server needs to handle more than 100 concurrent tool calls",
            B: "When the MCP server runs on a different machine than the OpenClaw agent, requiring network communication across hosts",
            C: "When the MCP server is written in Python rather than TypeScript",
            D: "When the tools require authentication credentials passed in request headers"
          },
          correct: "B",
          explanation: "HTTP transport is appropriate when the MCP server and OpenClaw agent run on different machines and must communicate over a network. For same-machine deployments, stdio is preferred for its lower overhead. The transport choice should match the deployment topology."
        },
        {
          id: 4,
          question: "What does 'transport protocol' refer to in the MCP architecture?",
          options: {
            A: "The data serialization format used to encode tool call parameters",
            B: "The communication channel mechanism by which the OpenClaw agent runtime sends requests to and receives responses from the MCP server process",
            C: "The encryption standard applied to all messages between agent and tool server",
            D: "The API versioning scheme that ensures backwards compatibility between agent and server"
          },
          correct: "B",
          explanation: "The transport protocol defines how the agent runtime and MCP server communicate — the physical channel (process pipes for stdio, HTTP sockets for HTTP transport). It determines latency, setup complexity, and deployment flexibility, not the content or format of the messages themselves."
        },
        {
          id: 5,
          question: "What does the CLAUDE.md configuration file document during MCP server project setup?",
          options: {
            A: "The list of all users authorized to call the MCP server's tools",
            B: "The chosen transport mechanism, project structure conventions, and developer instructions for Claude Code to follow during the build",
            C: "The billing configuration for Claude API usage within the MCP server",
            D: "The deployment target environment and cloud provider credentials"
          },
          correct: "B",
          explanation: "CLAUDE.md is the project instructions file for Claude Code — it documents the chosen transport protocol, project conventions, and any constraints the AI assistant should follow when generating code for this specific MCP server project. It acts as the persistent context for all Claude Code sessions in the project."
        },
        {
          id: 6,
          question: "What does a successful end-to-end WhatsApp test confirm about an MCP integration?",
          options: {
            A: "That the MCP server will scale to 10,000 concurrent users without degradation",
            B: "That the tool specification, implementation, OpenClaw configuration, and channel integration all function together as a complete working system",
            C: "That the server has passed ClawHub's security audit requirements for marketplace listing",
            D: "That the server's API keys are valid and not expired"
          },
          correct: "B",
          explanation: "A successful end-to-end WhatsApp test validates the entire integration chain: the user's WhatsApp message reaches the agent, the agent calls the right MCP tool, the tool executes against the real external system, and the result is delivered as a coherent WhatsApp reply. It confirms all components work together, not just in isolation."
        }
      ]
    },
    {
      id: 4,
      title: "Spec and Build Your First Tool",
      mcqs: [
        {
          id: 1,
          question: "What must be defined in a tool specification before the mcp-builder skill generates implementation code?",
          options: {
            A: "The programming language, framework version, and deployment target environment",
            B: "The tool's name, purpose, input parameters with types, and expected output format",
            C: "The database schema and table names the tool will query",
            D: "The cloud provider region and instance type for hosting the tool"
          },
          correct: "B",
          explanation: "A tool specification defines the interface contract: tool name, what it does, what inputs it accepts (with names and types), and what output it produces. This contract is what the agent references when deciding whether and how to invoke the tool."
        },
        {
          id: 2,
          question: "What does input schema validation in an MCP tool prevent?",
          options: {
            A: "The agent from calling the tool more than once per conversation",
            B: "The tool from being registered in multiple MCP servers simultaneously",
            C: "The tool from receiving malformed or incorrectly typed parameters — catching misuse before tool logic executes",
            D: "The tool from returning responses larger than the agent's context window"
          },
          correct: "C",
          explanation: "Input schema validation enforces the tool's parameter contract — if the agent sends wrong parameter types or missing required fields, validation rejects the call before execution, preventing runtime errors deep in the tool logic."
        },
        {
          id: 3,
          question: "What is the purpose of the 'description' field in an MCP tool's JSON schema definition?",
          options: {
            A: "It sets the tool's display name in the ClawHub marketplace listing",
            B: "It tells the LLM what the tool does and when to invoke it — the model reads descriptions to decide which tool to call for a given user request",
            C: "It documents the tool for human developers in API reference documentation only",
            D: "It configures the tool's logging verbosity level"
          },
          correct: "B",
          explanation: "The description field is critical for LLM decision-making — Claude reads tool descriptions to understand what each tool does and when it is appropriate to call it. A poorly written description causes the agent to call the wrong tool or fail to call it when it should."
        },
        {
          id: 4,
          question: "How are multiple tools organized within a single MCP server?",
          options: {
            A: "Each tool requires its own separate server process and port",
            B: "Tools are registered in the server's tool registry and all served through the same transport connection",
            C: "Tools are loaded from separate JSON files and merged at runtime by the OpenClaw connector",
            D: "Each tool runs in its own isolated Node.js worker thread"
          },
          correct: "B",
          explanation: "A single MCP server hosts multiple tools — they are all registered in the server's tool registry and exposed through the same transport connection. This is more efficient than running separate server processes for each tool."
        },
        {
          id: 5,
          question: "What does 'type safety' mean in the context of MCP tool parameter definitions?",
          options: {
            A: "The tool encrypts all parameter values before processing them",
            B: "Parameters are declared with explicit types (string, number, boolean, array) so both the calling agent and the tool implementation agree on the expected data format",
            C: "The tool validates that the calling user is authenticated before accepting any parameters",
            D: "Parameter values are automatically converted to the safest available data type"
          },
          correct: "B",
          explanation: "Type safety in MCP means each tool parameter has an explicitly declared type. The agent sends parameters matching those types; the tool implementation receives and processes them accordingly. This shared contract prevents type mismatch errors between the agent and tool execution."
        },
        {
          id: 6,
          question: "In the describe-steer-verify workflow, what specific output does the build step produce?",
          options: {
            A: "A fully deployed and running MCP server accessible via the public internet",
            B: "Working tool implementation code — functions that accept specified parameters, perform the external system interaction, and return the defined output format",
            C: "A formal requirements document approved by all project stakeholders",
            D: "A complete unit test suite covering all possible input combinations"
          },
          correct: "B",
          explanation: "The build step produces the implementation: actual code that accepts the tool's defined input parameters, performs the external system interaction (database query, API call, file operation), and returns output in the specified format. This code is what the MCP server executes when the agent calls the tool."
        }
      ]
    },
    {
      id: 5,
      title: "Connect and Test from WhatsApp",
      mcqs: [
        {
          id: 1,
          question: "How is a custom MCP server registered with an OpenClaw agent?",
          options: {
            A: "By uploading the server to ClawHub and approving it for the agent's account",
            B: "By adding the server's connection details (transport type and path or URL) to the OpenClaw agent's MCP configuration file",
            C: "By training the Claude model to recognize the new tool names and their schemas",
            D: "By installing the MCP server as a Node.js global package accessible system-wide"
          },
          correct: "B",
          explanation: "Registering an MCP server with OpenClaw requires adding its connection details to the agent's configuration — specifying the transport protocol (stdio or HTTP), the server path or URL, and optionally authentication credentials. The agent then loads this registry on startup and discovers available tools."
        },
        {
          id: 2,
          question: "What does end-to-end testing of an OpenClaw MCP integration validate?",
          options: {
            A: "That the MCP server passes code linting and TypeScript type checking",
            B: "That the complete path — from user WhatsApp message through agent through MCP tool call through external system back to WhatsApp reply — works correctly under real conditions",
            C: "That the Claude API billing is configured correctly for the new tool's usage",
            D: "That the MCP server is accessible from at least three geographic regions"
          },
          correct: "B",
          explanation: "End-to-end testing validates the full integration chain: the WhatsApp message reaches the agent, the agent correctly identifies and calls the right MCP tool, the tool executes against the real external system, and the result is incorporated into a coherent reply delivered via WhatsApp."
        },
        {
          id: 3,
          question: "What key advantage does the MCP protocol provide over making raw HTTP API calls directly from the agent?",
          options: {
            A: "Faster response times through binary serialization instead of JSON",
            B: "Automatic tool discovery — the agent queries the MCP server for available tools and their schemas rather than having tools hard-coded into the agent's configuration",
            C: "Built-in authentication mechanisms that raw HTTP calls cannot provide",
            D: "Native support for streaming responses from external APIs"
          },
          correct: "B",
          explanation: "A key MCP advantage over raw HTTP is automatic tool discovery. The agent connects to an MCP server and queries what tools are available with their full schemas — the agent doesn't need to be pre-programmed with tool definitions. This enables dynamic tool ecosystems where capabilities are discovered at runtime."
        },
        {
          id: 4,
          question: "What information does the OpenClaw agent configuration require to connect to a new MCP server?",
          options: {
            A: "The MCP server's GitHub repository URL and deployment branch name",
            B: "The transport type (stdio or HTTP), the server's path or endpoint URL, and any required authentication tokens",
            C: "The server's memory and CPU requirements so OpenClaw can allocate appropriate resources",
            D: "A manually written list of all tool names the server exposes"
          },
          correct: "B",
          explanation: "OpenClaw's MCP configuration requires: the transport protocol, the server path (for stdio) or URL (for HTTP), and any authentication credentials. OpenClaw connects to the server on startup and automatically discovers the available tools from the server's own schema — no manual tool listing is needed."
        },
        {
          id: 5,
          question: "What does the OpenClaw agent do when an MCP tool call returns an error response?",
          options: {
            A: "The agent crashes and requires manual operator restart",
            B: "The error is silently ignored and the agent generates a response without the tool's data",
            C: "The agent receives the error as a tool result, reasons about what it means, and decides how to respond — potentially retrying, using a fallback, or explaining the failure to the user",
            D: "The WhatsApp channel automatically sends a generic system error message to the user"
          },
          correct: "C",
          explanation: "MCP tool errors are part of the agent loop — they are returned to the model as tool results. The agent then reasons about the error: should it retry, call a different tool, or inform the user the operation is temporarily unavailable? Error handling is adaptive rather than requiring rigid hard-coded fallback logic."
        },
        {
          id: 6,
          question: "What does a developer prove to themselves by completing Chapter 57's final WhatsApp test?",
          options: {
            A: "That their MCP server can handle 1,000 concurrent requests without degradation",
            B: "That they can extend any OpenClaw agent with custom tools connecting to any external system — a scalable workflow for adding capabilities without modifying the agent core",
            C: "That their MCP server is ready for immediate ClawHub marketplace publication",
            D: "That Claude API costs will remain below a predictable monthly budget"
          },
          correct: "B",
          explanation: "Completing the WhatsApp test proves the describe-steer-verify workflow works: a developer can take any external capability, build an MCP server for it, connect it to OpenClaw, and verify it end-to-end from WhatsApp — and repeat this process for any future capability without changing the agent core."
        }
      ]
    }
  ]
};
