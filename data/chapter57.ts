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
          question: "After completing Chapter 56, a developer has a fully operational OpenClaw AI Employee: it chats fluently, remembers users across sessions, follows a daily schedule, and executes installed skills. The developer's manager then asks: 'Can it pull the customer's order history from our PostgreSQL database before answering shipping questions?' The developer realizes this is impossible with the current setup. What is the fundamental capability gap in a base OpenClaw agent that prevents it from accessing external databases?",
          options: {
            A: "OpenClaw agents cannot query SQL databases because Claude was not trained on SQL syntax",
            B: "The base agent is confined to its runtime environment — it can only use what is installed inside its operational boundary. Without an MCP server that explicitly exposes the database as a callable tool, the agent has no mechanism to reach outside its box",
            C: "PostgreSQL requires direct TCP connections, which WhatsApp's API blocks for security reasons",
            D: "The agent lacks sufficient memory capacity to store database query results within the conversation context"
          },
          correct: "B",
          explanation: "The 'box' metaphor captures a real constraint: a base OpenClaw agent operates within its defined runtime environment. It can chat, remember, schedule, and use pre-installed skills — but it cannot spontaneously reach external systems. MCP (Model Context Protocol) servers are the bridge that extends the agent's reach to the outside world by exposing external systems as callable tools."
        },
        {
          id: 2,
          question: "A developer explains the MCP concept to a non-technical stakeholder: 'Our AI Employee lives in a sealed box. It's smart and helpful, but it can only use what's inside the box.' The stakeholder asks: 'So what does building an MCP server actually do — what changes about the box?' Which answer accurately describes what a custom MCP server achieves in architectural terms?",
          options: {
            A: "The MCP server upgrades the AI model inside the box to a more powerful version",
            B: "The MCP server creates a controlled opening in the box — it translates external system capabilities (database queries, API calls, file operations) into tools the agent can invoke, extending what is 'inside the box' without giving the agent uncontrolled access to everything outside",
            C: "The MCP server moves the entire box to a more powerful cloud machine with faster processing",
            D: "The MCP server removes the box entirely, allowing the agent unrestricted access to all internet resources"
          },
          correct: "B",
          explanation: "This is the precise architectural contribution of MCP: controlled extension. Rather than giving the agent open internet access (unsafe) or keeping it fully isolated (limited), MCP servers expose specific, well-defined capabilities as typed tools. The agent gains targeted external reach while the operator maintains control over what systems are accessible."
        }
      ]
    },
    {
      id: 2,
      title: "Project Setup and the Describe-Steer-Verify Workflow",
      mcqs: [
        {
          id: 1,
          question: "Chapter 57 introduces a three-phase workflow for building MCP servers using the mcp-builder skill in Claude Code — without writing boilerplate server code manually. A developer needs to add a 'check inventory' tool that queries a warehouse management system. They describe the requirement in plain English: 'I need a tool that accepts a product SKU and returns current stock levels and warehouse location.' Claude Code generates a specification, the developer refines it, and then verifies the output. What is this workflow called and what does each of the three phases accomplish?",
          options: {
            A: "Spec-Build-Ship: write a formal specification document, implement in Python, push to production",
            B: "Describe-Steer-Verify: state the tool's purpose and interface in natural language → guide the AI's spec and implementation interpretation → confirm the tool behaves as intended through testing",
            C: "Prompt-Generate-Deploy: write a prompt template, auto-generate all server code, one-click deploy to cloud",
            D: "Design-Code-Test: UML diagram the tool, hand-code the server, run automated unit tests"
          },
          correct: "B",
          explanation: "Describe-Steer-Verify is Chapter 57's core workflow: (1) Describe — communicate the tool's purpose and interface in natural language; (2) Steer — review what the AI generated and redirect misinterpretations before they become code; (3) Verify — test the built tool to confirm it produces the intended behavior. This workflow scales MCP development without requiring manual server scaffolding for each new tool."
        },
        {
          id: 2,
          question: "During the Steer phase of building a CRM lookup MCP tool, a developer reviews Claude Code's generated specification and notices the 'customer_search' tool was designed to return the full customer record (50 fields) when the actual use case only needs name, email, and open ticket count. If the developer skips the Steer phase and proceeds directly to code generation, what is the most likely downstream consequence?",
          options: {
            A: "The tool will fail to compile because Python requires explicit field declarations at the schema level",
            B: "The MCP tool will work technically but return bloated payloads — consuming excess tokens in the agent's context window, potentially exceeding limits, increasing API costs, and slowing responses — all avoidable by steering the spec to return only needed fields",
            C: "Claude will automatically optimize the output to return only the three fields based on the tool's name",
            D: "The WhatsApp API will truncate the response at 1,024 characters, hiding the extra fields from users"
          },
          correct: "B",
          explanation: "The Steer phase exists precisely to catch misalignments between natural language intent and AI interpretation before they become code. A tool returning 50 fields instead of 3 wastes context window, increases inference costs, and produces noisy agent responses — all because the spec wasn't steered to match actual requirements. This is why Steer comes before code generation, not after."
        },
        {
          id: 3,
          question: "A team has used the describe-steer-verify workflow to build 12 different MCP tools over three months — a calendar integration, CRM lookup, inventory check, invoice generator, and eight others. A new engineer asks: 'Why didn't you just write the server code directly? Isn't describing things to an AI slower?' What is the genuine productivity argument for the describe-steer-verify workflow when building multiple MCP tools?",
          options: {
            A: "AI-generated code is always bug-free, eliminating all testing time",
            B: "The workflow eliminates the cost of writing boilerplate server scaffolding, schema definitions, and error handling for each tool — the developer focuses on what the tool should do (domain logic) rather than how MCP servers are wired together, enabling faster iteration across many tools",
            C: "Describe-steer-verify generates code that is 10x faster at runtime than hand-written equivalents",
            D: "The workflow creates automatic documentation that satisfies enterprise compliance requirements"
          },
          correct: "B",
          explanation: "Every MCP server requires the same structural scaffolding: transport setup, schema definitions, tool registration, error handling. The describe-steer-verify workflow uses Claude Code to generate that scaffolding from a plain-English description — developers write domain logic, not infrastructure boilerplate. Multiplied across 12 tools, this represents substantial saved effort and faster iteration."
        }
      ]
    },
    {
      id: 3,
      title: "Transport Protocol Selection and WhatsApp Testing",
      mcqs: [
        {
          id: 1,
          question: "When building an MCP server in Chapter 57, developers choose a transport protocol that determines how the OpenClaw agent runtime communicates with the MCP server process. A developer's new 'order lookup' MCP server will run on the same physical machine as the OpenClaw agent. A colleague suggests using HTTP for the transport layer 'because it's the industry standard.' What is the technically better choice for a same-machine deployment and why?",
          options: {
            A: "HTTP/REST — because it enables future remote deployment of the MCP server without code changes",
            B: "stdio (standard input/output) — inter-process communication on the same machine via stdin/stdout has lower latency than HTTP because it avoids network socket overhead, TCP handshakes, and HTTP header parsing for local calls",
            C: "WebSockets — because they maintain a persistent bidirectional connection, eliminating connection setup time per tool call",
            D: "gRPC — because its binary Protocol Buffers serialization is faster than JSON parsing at scale"
          },
          correct: "B",
          explanation: "Transport protocol selection is context-dependent. For same-machine deployments, stdio avoids the overhead of HTTP networking (socket creation, TCP handshakes, HTTP parsing) — the agent and MCP server communicate directly through process pipes, which is faster and simpler. HTTP becomes relevant when the MCP server is deployed remotely."
        },
        {
          id: 2,
          question: "A developer completes Chapter 57 by building a custom MCP server that queries their company's internal product catalog and connecting it to their OpenClaw WhatsApp agent. The final test: they send a WhatsApp message — 'Is the Pro 5000 model in stock?' — and the agent responds: 'Yes, we have 23 units of the Pro 5000 in Karachi warehouse, available for immediate dispatch.' Before this chapter, the agent would have said 'I don't have access to inventory information.' What has the developer fundamentally achieved?",
          options: {
            A: "They trained the Claude model on their product catalog, embedding inventory data into model weights",
            B: "They extended their agent from an isolated conversational system into a tool-using AI Employee that bridges natural language interaction with live operational business data — the agent can now act on real-world information in real time",
            C: "They built a traditional chatbot with hard-coded inventory responses for common product questions",
            D: "They connected WhatsApp directly to their database, bypassing the AI layer for inventory queries"
          },
          correct: "B",
          explanation: "This outcome represents the complete Chapter 57 thesis: MCP servers transform isolated AI agents into operational participants in real business systems. The agent moved from 'I don't have that information' to accessing live data through a purpose-built tool — the difference between a conversational assistant and a genuine AI Employee integrated with business operations."
        }
      ]
    }
  ]
};
