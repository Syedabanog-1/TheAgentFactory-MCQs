import type { Chapter } from "@/types";

export const chapter13: Chapter = {
  id: 13,
  title: "Markdown — Writing Instructions",
  description: "Markdown as the specification language that lets you tell AI agents what to build — from structured text fundamentals to complete specifications.",
  color: "purple",
  lessons: [
    {
      id: 1,
      title: "Why Markdown Matters for AI Communication",
      mcqs: [
        {
          id: 1,
          question: "What is Markdown's core characteristic that makes it valuable for AI communication?",
          options: {
            A: "It requires special software to render and display correctly",
            B: "It is 'structured text' readable by humans and parseable by computers",
            C: "It is a proprietary format owned by GitHub for repository documentation",
            D: "It can only be used for code documentation, not general specifications"
          },
          correct: "B",
          explanation: "Markdown is defined as 'structured text' that is readable by humans AND parseable by computers. This dual nature makes it ideal for AI communication — no special software required, AI can parse its structure meaningfully, and it renders beautifully on GitHub."
        },
        {
          id: 2,
          question: "When was Markdown created, and which specification formalized it in 2014?",
          options: {
            A: "Created 1999; formalized by W3C Markup Standard",
            B: "Created 2004; formalized by CommonMark specification",
            C: "Created 2010; formalized by GitHub Flavored Markdown",
            D: "Created 2004; formalized by the OpenAI Documentation Standard"
          },
          correct: "B",
          explanation: "Markdown was created in 2004 and the CommonMark specification formalized it in 2014. GitHub Flavored Markdown (GFM) extends CommonMark with additional features like tables, task lists, and strikethrough."
        },
        {
          id: 3,
          question: "In the three-layer AIDD workflow, what role does Markdown play?",
          options: {
            A: "Layer 2 (Reasoning Layer) — AI reads Markdown and plans implementation",
            B: "Layer 3 (Implementation Layer) — AI generates Markdown as output",
            C: "Layer 1 (Intent Layer) — humans write what they want using Markdown specifications",
            D: "All three layers — Markdown is used equally throughout"
          },
          correct: "C",
          explanation: "Markdown occupies Layer 1 (Intent Layer) where humans write specifications using Markdown. Layer 2 is the Reasoning Layer where AI reads Markdown and plans. Layer 3 is the Implementation Layer where AI generates code matching the specification. 'Your markdown specification is the bridge between what you want (Layer 1) and what gets built (Layer 3).'"
        },
        {
          id: 4,
          question: "Why does structured Markdown produce better AI output than unstructured plain text?",
          options: {
            A: "Markdown files are compressed, saving tokens in the context window",
            B: "Markdown headings and lists provide 'attention cues' that help AI focus on relevant sections rather than treating documents as continuous streams",
            C: "AI models are specifically fine-tuned only on Markdown documents",
            D: "Plain text is incompatible with most AI model context windows"
          },
          correct: "B",
          explanation: "LLMs process text as tokens. Markdown structure provides 'attention cues' — headings signal topical boundaries, lists create item separation. This helps AI focus on relevant sections rather than treating the entire document as one continuous stream of text."
        },
        {
          id: 5,
          question: "What was the practical outcome difference between unstructured vs. structured weather app requests?",
          options: {
            A: "Structured request was shorter, saving 50% of tokens",
            B: "Unstructured request generated working code; structured generated pseudocode only",
            C: "Unstructured request produced incomplete code missing humidity, wind speed, and error handling; structured request produced a complete implementation",
            D: "Both produced identical output — structure only affects readability"
          },
          correct: "C",
          explanation: "The lesson demonstrates that the unstructured plain-text weather app request resulted in AI generating incomplete code missing humidity, wind speed, and error handling. The structured Markdown request generated a complete implementation including all four features, proper user flow, and error handling."
        },
        {
          id: 6,
          question: "Which extensions does GitHub Flavored Markdown (GFM) add to CommonMark?",
          options: {
            A: "Code syntax highlighting, dark mode, and responsive images",
            B: "Tables, task lists, and strikethrough",
            C: "Embedded videos, interactive forms, and custom fonts",
            D: "Diagrams, math equations, and flowcharts"
          },
          correct: "B",
          explanation: "GitHub Flavored Markdown (GFM) extends the base CommonMark specification with tables, task lists (- [x] checkboxes), and strikethrough text. These extensions are widely supported across AI tools and documentation platforms."
        },
        {
          id: 7,
          question: "What are the four real-world applications of Markdown highlighted in this lesson?",
          options: {
            A: "Database schemas, API documentation, code comments, and test plans",
            B: "GitHub README files, specifications for AI agents, documentation sites (Docusaurus), and AI chat prompts",
            C: "Project management, version control, deployment scripts, and monitoring dashboards",
            D: "Email templates, slide presentations, spreadsheets, and legal contracts"
          },
          correct: "B",
          explanation: "The lesson identifies four key real-world applications: 1) GitHub README Files, 2) Specifications for AI Agents, 3) Documentation Sites (Docusaurus), and 4) AI Chat Prompts. All four leverage Markdown's dual human-readable and machine-parseable nature."
        },
        {
          id: 8,
          question: "What is the core message of Chapter 13 Lesson 1 about Markdown's role?",
          options: {
            A: "Markdown is a convenient formatting tool for making text look prettier",
            B: "Markdown is not just formatting — it is how you communicate intent to AI agents",
            C: "Markdown replaces programming languages for AI-native development",
            D: "Markdown is optional — natural language prompts work equally well"
          },
          correct: "B",
          explanation: "The core message is explicitly stated: 'Markdown is not just formatting — it's how you communicate intent to AI agents.' This reframes Markdown from a visual formatting concern into a critical communication protocol for AI-driven development."
        },
        {
          id: 9,
          question: "Why does Markdown require 'no special software'?",
          options: {
            A: "It is built into every operating system by default",
            B: "It is a plain-text format — any text editor reads it, and the syntax is human-readable even without rendering",
            C: "AI agents always render Markdown before processing it",
            D: "Markdown files are binary and require no interpretation"
          },
          correct: "B",
          explanation: "Markdown's 'no special software required' advantage comes from being plain text — any text editor can open and read it, and the raw syntax (# Heading, - bullet) is human-readable even without rendering. This makes it portable, stable, and universally accessible."
        },
        {
          id: 10,
          question: "What does 'stable standard' mean in the context of why Markdown is universal?",
          options: {
            A: "Markdown files never change size on disk",
            B: "The CommonMark specification is finalized and won't undergo breaking changes, making Markdown reliable across time and tools",
            C: "Markdown renders identically in all browsers without CSS",
            D: "Markdown is backed by a government standards body"
          },
          correct: "B",
          explanation: "Markdown being a 'stable standard' means the CommonMark specification is finalized and won't undergo breaking changes. This makes it reliable — specifications written today in Markdown will still be readable and parseable by AI tools years from now, unlike proprietary formats that may change."
        },
        {
          id: 11,
          question: "Scenario: You're writing a specification for a new team member who will use AI to implement a feature. You write the requirements in plain text paragraphs without any Markdown structure. The AI generates incomplete code missing key features. What Markdown principle would have prevented this?",
          options: {
            A: "Using more descriptive adjectives in your plain text",
            B: "Adding Markdown structure (headings, lists) to provide 'attention cues' that help AI parse requirements as distinct items rather than a continuous text stream",
            C: "Writing the specification in a different language",
            D: "Using bold text for emphasis throughout the document"
          },
          correct: "B",
          explanation: "This scenario illustrates the 'structured vs. unstructured' lesson from Chapter 13 Lesson 1. Plain text paragraphs treat the document as a continuous stream — AI may miss individual requirements buried in prose. Markdown structure (headings for sections, lists for features) provides 'attention cues' that help AI identify and process each requirement distinctly, just like the weather app example where structured input produced complete output."
        },
        {
          id: 12,
          question: "Scenario: Your team is choosing a format for AI-facing specifications. A developer suggests using a proprietary Word document format because 'it looks more professional.' You recommend Markdown instead. What is the strongest argument based on Chapter 13 Lesson 1?",
          options: {
            A: "Markdown files are smaller in size than Word documents",
            B: "Markdown requires no special software, is a stable standard, and AI can parse its structure meaningfully — Word documents are opaque to AI without conversion and may become unreadable if the format changes",
            C: "Markdown has better font options than Word",
            D: "Word documents cannot contain images"
          },
          correct: "B",
          explanation: "The core argument from Lesson 1: Markdown is 'structured text readable by humans and parseable by computers' with 'no special software required' and a 'stable standard.' AI agents read raw Markdown source files — they can parse headings, lists, and code blocks directly. Word documents are binary/proprietary — AI cannot read them without conversion, losing structural information. Markdown's stability means specs written today remain readable for years."
        },
        {
          id: 13,
          question: "Scenario: You ask an AI to 'build a dashboard' using a vague natural language prompt. The AI generates a basic layout but misses critical features like error handling and data validation. You rewrite the request using structured Markdown with headings for 'Features,' 'Error Handling,' and 'Data Validation' as bullet lists. The new output is complete. What does this demonstrate?",
          options: {
            A: "AI models perform better in the afternoon than in the morning",
            B: "Markdown structure transforms vague intentions into explicit, parseable requirements — headings signal topical boundaries and lists create item separation that AI attention mechanisms can focus on",
            C: "The second prompt was longer, and longer prompts always produce better results",
            D: "Markdown automatically triggers a 'careful mode' in AI models"
          },
          correct: "B",
          explanation: "This demonstrates the 'attention cues' principle from Lesson 1. LLMs process text as tokens. Markdown headings (# Features, ## Error Handling) signal topical boundaries. Bullet lists (- Must validate email format) create item separation. This helps AI focus on relevant sections rather than treating the document as one continuous stream. The structured prompt didn't add new requirements — it made existing requirements parseable."
        },
        {
          id: 14,
          question: "Scenario: A startup is building an AI-native product and wants specifications that will remain usable for 5+ years. They're considering Markdown vs. a new AI-specific format that 'optimizes token usage.' Based on Chapter 13 Lesson 1, what should they choose and why?",
          options: {
            A: "The new AI-specific format — it's designed for AI and will be more efficient",
            B: "Markdown — the CommonMark specification is stable and won't undergo breaking changes, ensuring specs written today remain readable by AI tools 5+ years from now; new formats may become obsolete",
            C: "Both formats — use Markdown for humans and the new format for AI",
            D: "Neither format — specifications should be verbal only"
          },
          correct: "B",
          explanation: "Lesson 1 emphasizes Markdown as a 'stable standard' — the CommonMark specification is finalized and won't undergo breaking changes. This is critical for long-term projects: specifications written in Markdown today will still be readable and parseable by AI tools years from now. New proprietary formats may change, become unsupported, or require specific tool versions. Markdown's stability is a strategic advantage for products with long lifecycles."
        },
        {
          id: 15,
          question: "Scenario: You're onboarding a new developer to an AI-driven project. They ask why the team uses Markdown for specifications instead of just talking to the AI. You explain using the Layer 1 (Intent Layer) concept from Chapter 13 Lesson 1. What do you say?",
          options: {
            A: "'Markdown is Layer 1 — it's how we humans write what we want. The AI reads our Markdown spec (Layer 1), plans implementation (Layer 2), and generates code (Layer 3). Without Markdown, we have no bridge between our intent and the AI's output.'",
            B: "'Markdown makes the documents look professional for stakeholders.'",
            C: "'The AI can only read Markdown files, not plain text.'",
            D: "'Markdown is required by our version control system.'"
          },
          correct: "A",
          explanation: "This explains the three-layer AIDD workflow from Lesson 1: Layer 1 (Intent) = humans write specifications using Markdown. Layer 2 (Reasoning) = AI reads Markdown and plans implementation. Layer 3 (Implementation) = AI generates code matching the specification. Markdown is 'the bridge between what you want (Layer 1) and what gets built (Layer 3).' Without it, there's no structured intent for the AI to reason about."
        }
      ]
    },
    {
      id: 2,
      title: "Headings — Creating Document Hierarchy",
      mcqs: [
        {
          id: 1,
          question: "How many hash symbols should a Level 3 Markdown heading use, and what is its typical purpose in a specification?",
          options: {
            A: "One hash (#) — for the document title",
            B: "Two hashes (##) — for main sections like Problem or Features",
            C: "Three hashes (###) — for subsections within main sections",
            D: "Four hashes (####) — for deep technical details and constraints"
          },
          correct: "C",
          explanation: "Level 3 headings use three hashes (###) and are used for subsections within main sections. The hierarchy is: # (Level 1, document title), ## (Level 2, main sections), ### (Level 3, subsections), #### (Level 4, deep technical details/constraints)."
        },
        {
          id: 2,
          question: "What is the most common mistake developers make when writing Markdown headings?",
          options: {
            A: "Using too many Level 1 headings, creating multiple document titles",
            B: "Forgetting the space after hash symbols",
            C: "Skipping heading levels (e.g., jumping from Level 1 to Level 3)",
            D: "All three are listed as common mistakes"
          },
          correct: "D",
          explanation: "The lesson lists three common mistakes: 1) Forgetting the space after hash symbols (#Heading instead of # Heading), 2) Using multiple Level 1 headings (should only appear once at the top), 3) Skipping heading levels (jumping from Level 1 directly to Level 3). All three are important to avoid."
        },
        {
          id: 3,
          question: "What analogy is used to explain why heading levels must follow logical progression?",
          options: {
            A: "Building floors — you can't skip floors in a skyscraper",
            B: "Computer folder hierarchy — you don't place 'Vacation Photos' directly under 'Main Folder' without a 'Photos' folder first",
            C: "Chapter and verse numbers — religious texts use strict sequential ordering",
            D: "Outline numbering — 1.0, 1.1, 1.1.1 must be sequential"
          },
          correct: "B",
          explanation: "The lesson uses a computer folder analogy: just as you don't place 'Vacation Photos' directly under 'Main Folder' — you first need a 'Photos Folder' — headings must follow logical progression. You can't jump from Level 1 directly to Level 3 without Level 2."
        },
        {
          id: 4,
          question: "What should a Level 1 heading be reserved for in a Markdown specification?",
          options: {
            A: "Every major section of the document",
            B: "Critical warnings and important notices",
            C: "The document title — used once at the very top",
            D: "Chapter numbers when creating multi-chapter documents"
          },
          correct: "C",
          explanation: "Level 1 heading (#) is for the document title and should be used once at the very top of the document. Using multiple Level 1 headings is listed as a common mistake. Level 2 (##) handles main sections like Problem, Features, and Installation."
        },
        {
          id: 5,
          question: "According to the lesson, what four benefits do clear headings provide when AI agents process specifications?",
          options: {
            A: "Faster loading, better compression, smaller file size, easier version control",
            B: "Parse the structure, find specific information, validate completeness, and generate better code",
            C: "Automatic table of contents, syntax highlighting, link generation, and PDF export",
            D: "Token reduction, cache efficiency, parallel processing, and reduced API costs"
          },
          correct: "B",
          explanation: "The lesson states that clear headings enable AI agents to: 1) Parse the structure, 2) Find specific information, 3) Validate completeness, and 4) Generate better code. This translates into faster processing, improved accuracy, and reduced implementation time."
        },
        {
          id: 6,
          question: "In the practice exercise Task Tracker App specification, how many Level 2 headings are required?",
          options: {
            A: "Two Level 2 headings (Overview and Features)",
            B: "Three Level 2 headings (Problem, Features, Installation)",
            C: "Four Level 2 headings (Problem, Features, Expected Output, Installation)",
            D: "Five Level 2 headings (one per major section)"
          },
          correct: "C",
          explanation: "The practice exercise specifies: one Level 1 heading (title), four Level 2 headings (Problem, Features, Expected Output, Installation), and four Level 3 headings under Features (Add Tasks, View Tasks, Mark Complete, Delete Tasks)."
        },
        {
          id: 7,
          question: "Which heading levels are explicitly recommended to avoid in specifications?",
          options: {
            A: "Level 1 and Level 2 — they are too broad for technical specifications",
            B: "Level 3 and Level 4 — they create unnecessary nesting",
            C: "Levels 5 and 6 — deep nesting should be avoided in specifications",
            D: "Level 4 only — always use Level 3 instead"
          },
          correct: "C",
          explanation: "The lesson advises avoiding Levels 5 and 6 (##### and ######) in specifications because they create excessive deep nesting. Level 4 is acceptable for deep technical details, constraints, and edge cases, but going deeper than that makes specifications harder to read and process."
        },
        {
          id: 8,
          question: "What is the 'correct' heading hierarchy pattern?",
          options: {
            A: "Level 2 → Level 1 → Level 3 (flexible ordering allowed)",
            B: "Level 1 title → Level 2 sections → Level 3 subsections (logical progression)",
            C: "Level 1 for each page, Level 2 for each paragraph",
            D: "Any order is acceptable as long as you are consistent"
          },
          correct: "B",
          explanation: "The correct pattern is: Level 1 title (once at top) → Level 2 main sections → Level 3 subsections. The 'Incorrect' pattern is jumping from Level 1 directly to Level 3. Hierarchy must follow logical progression without skipping levels."
        },
        {
          id: 9,
          question: "Why does the lesson specify that Level 4 headings are appropriate for 'deep technical details, constraints, edge cases'?",
          options: {
            A: "Level 4 is faster to render than Level 3 in most Markdown processors",
            B: "Level 4 is visually smaller, signaling lower priority to human readers",
            C: "These topics are sub-components of Level 3 subsections, requiring one more level of nesting to maintain hierarchy",
            D: "AI agents are specifically trained to look for constraints at Level 4"
          },
          correct: "C",
          explanation: "Technical details, constraints, and edge cases naturally belong inside a subsection (Level 3) as further refinements. Using Level 4 maintains the hierarchical relationship: main section (##) → subsection (###) → technical detail (####), rather than artificially flattening the structure."
        },
        {
          id: 10,
          question: "What happens if you write '#Heading' (without a space) instead of '# Heading'?",
          options: {
            A: "It still renders as a heading — the space is optional",
            B: "It creates a smaller heading, equivalent to Level 2",
            C: "It is not recognized as a heading — it renders as plain text",
            D: "It creates an anchor link but no visual heading"
          },
          correct: "C",
          explanation: "Forgetting the space after hash symbols is listed as the first common mistake. '#Heading' without a space is not recognized as a Markdown heading and renders as plain text — the space is required syntax. This is critical because AI agents parsing the raw source file won't recognize it as structural information."
        },
        {
          id: 11,
          question: "Scenario: You're writing a specification for a new feature. You use Level 1 headings (#) for each major section (Problem, Features, Installation) because 'they stand out more.' The AI seems confused about the document structure. What heading hierarchy mistake did you make?",
          options: {
            A: "You should have used Level 4 headings for all sections",
            B: "Level 1 headings should only be used once for the document title; Level 2 (##) should be used for main sections like Problem, Features, Installation",
            C: "You should have avoided headings entirely and used bold text instead",
            D: "Level 1 headings are reserved for code examples only"
          },
          correct: "B",
          explanation: "This scenario illustrates the 'multiple Level 1 headings' mistake from Lesson 2. Level 1 (#) is reserved for the document title and should appear only once at the top. Main sections like Problem, Features, and Installation should use Level 2 (##). Using multiple Level 1 headings confuses both human readers and AI agents about the document's hierarchical structure."
        },
        {
          id: 12,
          question: "Scenario: Your team's specification jumps from Level 1 (title) directly to Level 3 (### Features) because 'Level 2 feels unnecessary.' A new developer complains the document structure is confusing. What principle from Chapter 13 Lesson 2 explains why this is problematic?",
          options: {
            A: "Level 3 headings are harder to read than Level 2",
            B: "Skipping heading levels breaks the logical hierarchy — just as you wouldn't place 'Vacation Photos' directly under 'Main Folder' without a 'Photos' folder, you shouldn't jump from Level 1 to Level 3 without Level 2",
            C: "Level 3 headings consume more tokens than Level 2",
            D: "AI agents cannot process Level 3 headings"
          },
          correct: "B",
          explanation: "This illustrates the 'skipping heading levels' mistake from Lesson 2. The lesson uses a computer folder analogy: you don't place 'Vacation Photos' directly under 'Main Folder' — you need a 'Photos' folder first. Similarly, headings must follow logical progression: Level 1 (title) → Level 2 (main sections) → Level 3 (subsections). Skipping levels breaks the hierarchical relationship."
        },
        {
          id: 13,
          question: "Scenario: You're reviewing a specification where the author used Level 5 and Level 6 headings (##### and ######) for 'extra detailed subsections.' The AI seems to miss content in these deeply nested sections. What does Chapter 13 Lesson 2 recommend?",
          options: {
            A: "Level 5 and 6 are fine — more levels provide better organization",
            B: "Avoid Levels 5 and 6 in specifications — deep nesting makes documents harder to read and process; Level 4 is sufficient for deep technical details, constraints, and edge cases",
            C: "Use Level 7 instead for even deeper nesting",
            D: "Convert all Level 5+ headings to bold text"
          },
          correct: "B",
          explanation: "Lesson 2 explicitly advises avoiding Levels 5 and 6 in specifications. Deep nesting (more than 4 levels) makes specifications harder to read and process. Level 4 (####) is appropriate for deep technical details, constraints, and edge cases — going deeper creates excessive nesting that obscures rather than clarifies the document structure."
        },
        {
          id: 14,
          question: "Scenario: An AI agent is processing your specification and seems to miss important information in the middle sections. You realize all your critical constraints are buried in Level 3 subsections within long Level 2 sections. Based on Chapter 13 Lesson 2's guidance on how AI processes headings, what should you do?",
          options: {
            A: "Move critical constraints to Level 1 headings",
            B: "Restructure so critical constraints are in their own Level 2 sections rather than buried as Level 3 subsections — clear headings help AI parse structure, find specific information, and validate completeness",
            C: "Add more Level 4 headings to further subdivide the content",
            D: "Remove all headings and use numbered lists instead"
          },
          correct: "B",
          explanation: "Lesson 2 states that clear headings enable AI agents to: 1) Parse the structure, 2) Find specific information, 3) Validate completeness, and 4) Generate better code. Critical constraints buried as Level 3 subsections may be missed. Restructuring so important content has its own Level 2 section makes it more prominent and easier for AI to locate and process."
        },
        {
          id: 15,
          question: "Scenario: You're creating a specification template for your team. You want to ensure consistent heading hierarchy across all documents. Based on Chapter 13 Lesson 2, what template structure should you provide?",
          options: {
            A: "# Document Title\n## Problem\n## Features\n### Feature 1\n### Feature 2\n## Installation\n## Expected Output",
            B: "# Document Title\n# Problem\n# Features\n# Installation",
            C: "## Document Title\n### Problem\n### Features\n### Installation",
            D: "# Document Title\n### Problem\n##### Features\n###### Installation"
          },
          correct: "A",
          explanation: "This is the correct heading hierarchy from Lesson 2: Level 1 (#) for document title only, Level 2 (##) for main sections (Problem, Features, Installation), Level 3 (###) for subsections within main sections (Feature 1, Feature 2 under Features). This follows the logical progression without skipping levels and avoids the common mistakes of multiple Level 1 headings or skipped levels."
        }
      ]
    },
    {
      id: 3,
      title: "Lists — Organizing Ideas",
      mcqs: [
        {
          id: 1,
          question: "What three characters can be used as bullet point markers in Markdown unordered lists?",
          options: {
            A: "•, ◦, and ▪ (Unicode bullet characters)",
            B: "-, *, and + (each followed by a space)",
            C: ">, >>, and >>> (greater-than symbols for nesting)",
            D: "Only - (hyphen) is valid; * and + are for emphasis"
          },
          correct: "B",
          explanation: "Markdown unordered lists can use three characters: - (hyphen), * (asterisk), or + (plus sign), each followed by a space. For consistency within a document, it's best to choose one and stick with it, but all three are valid Markdown syntax."
        },
        {
          id: 2,
          question: "Why does the lesson emphasize always using correct sequential numbers (1. 2. 3.) in ordered lists rather than repeating '1.'?",
          options: {
            A: "Markdown doesn't support repeated numbers — the syntax will break",
            B: "AI agents often read the source file directly, not the rendered HTML, so sequential numbers are critical for accurate parsing",
            C: "Using '1.' for every item forces auto-numbering in all Markdown renderers",
            D: "Sequential numbers improve SEO for GitHub README files"
          },
          correct: "B",
          explanation: "The lesson explicitly warns: 'Always use correct sequential numbers (1. 2. 3.) in your raw markdown. AI agents often read the source file directly, not the rendered HTML.' While some renderers auto-number repeated '1.' entries, AI agents reading raw source need sequential numbers to understand order correctly."
        },
        {
          id: 3,
          question: "How do you create nested sub-items in an unordered list?",
          options: {
            A: "Use a different bullet character (- for parent, * for child)",
            B: "Wrap sub-items in parentheses or square brackets",
            C: "Indent sub-items with 2 spaces before the bullet character",
            D: "Use a plus sign (+) which automatically creates nesting"
          },
          correct: "C",
          explanation: "Nested lists are created by indenting sub-items with 2 spaces before the bullet character. This creates a parent-child relationship that both human readers and AI agents can understand as hierarchical structure."
        },
        {
          id: 4,
          question: "When should you use an ordered (numbered) list instead of an unordered (bullet) list?",
          options: {
            A: "When there are more than 5 items — long lists should always be numbered",
            B: "When items must follow a specific sequence — steps depend on previous steps being completed first",
            C: "When items are technical — technical content should always be numbered",
            D: "When the list will be presented to a human — numbers help track reading position"
          },
          correct: "B",
          explanation: "The decision rule is: ask 'Does order matter?' Use ordered lists when items must be done in sequence, each step depends on the previous, or items are installation steps, procedures, or workflows. Use unordered lists for features, requirements, constraints, or independent items where order doesn't matter."
        },
        {
          id: 5,
          question: "What happens when you use an unordered list for sequential installation steps?",
          options: {
            A: "Nothing — both list types render identically in practice",
            B: "AI cannot process unordered lists for technical tasks",
            C: "The list is valid but you lose the sequential signal — AI may not understand the dependency order, and humans may execute steps out of order",
            D: "Markdown throws a syntax error when installation steps aren't numbered"
          },
          correct: "C",
          explanation: "Using unordered lists for sequential steps is listed as a common mistake. The problem is that you lose the dependency signal — neither humans nor AI can tell from bullets alone that step 3 requires steps 1 and 2 to be complete. Numbered lists communicate 'do these in order' which is essential for installation, workflows, and procedures."
        },
        {
          id: 6,
          question: "What is the core reason lists are so valuable for AI code generation?",
          options: {
            A: "Lists use fewer tokens than prose, reducing API costs",
            B: "Lists turn vague intentions into countable, trackable requirements — exactly what AI needs to generate accurate code",
            C: "Lists force AI to generate one function per bullet point",
            D: "Lists enable parallel processing of multiple features simultaneously"
          },
          correct: "B",
          explanation: "The lesson states: 'Lists turn vague intentions into countable, trackable requirements; exactly what AI needs to generate accurate code.' Lists enable AI to identify distinct items, understand dependencies, generate appropriate code structures, and follow sequences correctly."
        },
        {
          id: 7,
          question: "Which list type is appropriate for 'features, requirements, constraints, and options'?",
          options: {
            A: "Ordered lists — features should be numbered by priority",
            B: "Unordered lists — these are independent items with no required sequence",
            C: "Nested lists — features always have sub-features",
            D: "Definition lists — technical items need term-definition pairs"
          },
          correct: "B",
          explanation: "The decision framework table shows: unordered lists for 'features, requirements, constraints, options, independent items.' These use bullet points (-, *, or +) because the items don't have a required sequence — they're independent requirements that can be implemented in any order."
        },
        {
          id: 8,
          question: "What is the third common mistake with lists mentioned in the lesson?",
          options: {
            A: "Using too many nesting levels (more than 3 deep)",
            B: "Using ordered lists for independent features that have no required sequence",
            C: "Mixing bullet characters (-, *, +) within the same list",
            D: "Starting ordered lists at numbers other than 1"
          },
          correct: "B",
          explanation: "The three common mistakes are: 1) Forgetting the space after dash or number, 2) Using ordered lists for independent features (implying false sequence), 3) Using unordered lists for sequential steps (losing dependency signal). Using ordered lists for independent features is the second mistake listed."
        },
        {
          id: 9,
          question: "What does 'troubleshooting steps' belong to in the list type decision framework?",
          options: {
            A: "Unordered list — troubleshooting options are independent",
            B: "Ordered list — troubleshooting follows dependent diagnostic steps",
            C: "Table — troubleshooting needs symptom-solution pairs",
            D: "Definition list — troubleshooting requires term definitions"
          },
          correct: "B",
          explanation: "The decision framework table lists 'troubleshooting' under ordered lists (along with installation instructions, workflows, and dependent items). Troubleshooting steps are sequential — you check one thing, then based on the result, proceed to the next specific step. Order and dependency matter."
        },
        {
          id: 10,
          question: "What specifically enables AI to 'follow sequences correctly' when using ordered lists?",
          options: {
            A: "The sequential numbers encode priority — AI always implements higher-numbered items first",
            B: "The numbered sequence communicates dependency order — item N may depend on item N-1 being complete",
            C: "Ordered lists trigger a special AI processing mode that validates each step",
            D: "Numbers allow AI to split list items across parallel processing threads"
          },
          correct: "B",
          explanation: "Ordered lists communicate sequential dependency — each numbered item may depend on previous items being complete. This allows AI to understand the correct implementation order, not just a list of features. It's why installation instructions, workflows, and troubleshooting guides must use ordered lists."
        },
        {
          id: 11,
          question: "Scenario: You're writing installation instructions for your project. You use bullet points (-) for all steps because 'bullets look cleaner.' A new developer runs step 3 before step 2 and the installation fails. What list mistake caused this confusion?",
          options: {
            A: "You should have used numbered lists starting at 0 instead of 1",
            B: "You used unordered lists (bullets) for sequential steps — bullets don't communicate dependency order, so the developer didn't know steps must be executed in sequence",
            C: "You should have used bold text for critical steps",
            D: "Installation instructions should never use lists"
          },
          correct: "B",
          explanation: "This illustrates the 'unordered lists for sequential steps' mistake from Lesson 3. Bullet points (-, *, +) are for independent items where order doesn't matter (features, requirements, constraints). Installation steps have dependencies — step 2 may require step 1 to be complete. Ordered lists (1. 2. 3.) communicate 'do these in sequence' which is essential for procedures."
        },
        {
          id: 12,
          question: "Scenario: Your specification lists project features using a numbered list (1. 2. 3.) because 'numbering makes them look prioritized.' The AI implements Feature 3 before Feature 1, causing integration issues. What lesson from Chapter 13 Lesson 3 explains this problem?",
          options: {
            A: "Numbered lists are only for technical content",
            B: "Ordered lists imply sequence/dependency — using them for independent features suggests false ordering. Features should use unordered lists (bullets) since they can be implemented in any order",
            C: "Features should always use Level 3 headings instead of lists",
            D: "Numbered lists consume more tokens than bullet lists"
          },
          correct: "B",
          explanation: "This illustrates the 'ordered lists for independent features' mistake from Lesson 3. Numbered lists communicate sequential dependency — each item may depend on previous items. Features are typically independent (can be implemented in any order), so they should use unordered lists (bullets). Using ordered lists for features implies false sequence, which may mislead both AI and human implementers about dependencies."
        },
        {
          id: 13,
          question: "Scenario: You're creating a specification with nested requirements. You write:\n- User authentication\n  - Login functionality\n  - Password reset\n- Dashboard\n  - User metrics\n  - Reports\n\nThe AI correctly understands that Login and Password reset are sub-features of authentication. What Markdown syntax enables this hierarchy?",
          options: {
            A: "Using different bullet characters (- for parent, * for child)",
            B: "Indenting sub-items with 2 spaces before the bullet character creates parent-child relationships that AI can parse as hierarchical structure",
            C: "Using numbers for parent items and bullets for children",
            D: "Wrapping sub-items in parentheses"
          },
          correct: "B",
          explanation: "Lesson 3 explains that nested lists are created by indenting sub-items with 2 spaces before the bullet character. This creates a parent-child relationship that both human readers and AI agents understand as hierarchical structure. The indentation signals that 'Login functionality' and 'Password reset' are sub-components of 'User authentication'."
        },
        {
          id: 14,
          question: "Scenario: Your team's specification uses sequential numbers (1. 2. 3.) correctly, but a new developer rewrites it using '1.' for every item because 'Markdown auto-numbers anyway.' The AI now implements steps out of order. What principle from Lesson 3 explains why the original sequential numbering was important?",
          options: {
            A: "Auto-numbering is a GitHub feature that doesn't work in raw Markdown",
            B: "AI agents often read the raw source file directly, not the rendered HTML — sequential numbers (1. 2. 3.) in the source communicate order to AI even if renderers auto-number repeated '1.' entries",
            C: "Repeated '1.' entries cause Markdown syntax errors",
            D: "Sequential numbers are required for SEO purposes"
          },
          correct: "B",
          explanation: "Lesson 3 explicitly warns: 'Always use correct sequential numbers (1. 2. 3.) in your raw markdown. AI agents often read the source file directly, not the rendered HTML.' While some renderers auto-number repeated '1.' entries, AI agents parsing raw source need sequential numbers to understand order correctly. The rendered output may look the same, but the raw source is what AI reads."
        },
        {
          id: 15,
          question: "Scenario: You're writing a troubleshooting guide for your API. The guide has steps like '1. Check server logs, 2. Verify database connection, 3. Test API endpoint, 4. Review rate limits.' A colleague suggests converting to bullet points for 'cleaner appearance.' Based on Chapter 13 Lesson 3, what should you respond?",
          options: {
            A: "Agree — bullet points always look more professional",
            B: "Disagree — troubleshooting follows dependent diagnostic steps where order matters. Each step may depend on the previous step's results, so ordered lists (numbered) are required to communicate the sequential dependency",
            C: "Use a table instead of any list type",
            D: "It doesn't matter — both formats work equally well for troubleshooting"
          },
          correct: "B",
          explanation: "Lesson 3's decision framework explicitly lists 'troubleshooting' under ordered lists. Troubleshooting steps are sequential — you check one thing, then based on the result, proceed to the next specific step. Order and dependency matter. Converting to bullets would lose the sequential signal, potentially causing developers to execute diagnostic steps out of order and miss important dependencies."
        }
      ]
    },
    {
      id: 4,
      title: "Code Blocks — Showing Examples",
      mcqs: [
        {
          id: 1,
          question: "What is the syntax for creating a fenced code block in Markdown?",
          options: {
            A: "Indent each line with 4 spaces or 1 tab",
            B: "Wrap content between triple backticks (```) on separate lines",
            C: "Surround the block with <code> and </code> HTML tags",
            D: "Start each line with a > character and add the language name"
          },
          correct: "B",
          explanation: "Fenced code blocks use triple backticks (```) on separate lines — opening triple backticks on one line, the content, then closing triple backticks. The lesson states: 'Everything between displays exactly as you type it (no markdown formatting applied).'"
        },
        {
          id: 2,
          question: "What is inline code used for, and what syntax creates it?",
          options: {
            A: "Multi-line code examples — use three backticks",
            B: "Brief references within prose — variable names, commands, filenames, function names — wrapped in single backticks",
            C: "Code that runs automatically when the document loads",
            D: "Syntax-highlighted code — use dollar signs like $code$"
          },
          correct: "B",
          explanation: "Inline code uses single backticks to wrap short references within prose: variable names, commands, filenames, and function names. For example: 'Run `npm install` to install dependencies.' Multiple lines require fenced code blocks (triple backticks), not inline code."
        },
        {
          id: 3,
          question: "Why are language tags (e.g., ```python, ```bash) important when creating fenced code blocks?",
          options: {
            A: "Language tags compress the code block to use fewer tokens",
            B: "Language tags help readers, enable AI agents to generate correct syntax, and activate proper syntax highlighting",
            C: "Language tags are required — code blocks without them fail to render",
            D: "Language tags enable real-time code execution within the document"
          },
          correct: "B",
          explanation: "Language tags immediately after the opening backticks serve three purposes: they help human readers understand the language context, they enable AI agents to generate code with the correct syntax for that language, and they activate proper syntax highlighting in renderers. Valid tags include python, bash, typescript, json, yaml."
        },
        {
          id: 4,
          question: "What is 'Specification by Example' and how do code blocks enable it?",
          options: {
            A: "A pattern where every specification must include at least 5 code examples",
            B: "Using code blocks to show exact output format, language context, example code, and literal commands — allowing AI to understand precise expectations",
            C: "Generating specifications automatically from existing code examples",
            D: "A GitHub feature that converts code comments into specification documents"
          },
          correct: "B",
          explanation: "The lesson introduces 'Specification by Example' — using code blocks so AI agents can: 'See exact output format,' understand programming language context, parse example code correctly, and recognize literal commands versus descriptive text. Code blocks make expectations concrete and unambiguous."
        },
        {
          id: 5,
          question: "What is the most critical mistake when writing fenced code blocks?",
          options: {
            A: "Using tabs instead of spaces inside the code block",
            B: "Forgetting closing backticks — everything after becomes part of the code block",
            C: "Adding language tags to non-programming code like JSON or YAML",
            D: "Nesting code blocks inside other code blocks"
          },
          correct: "B",
          explanation: "The most critical mistake is forgetting the closing triple backticks. When you open a fenced code block with ``` but forget the closing ```, everything after becomes part of the code block — including all subsequent headings, paragraphs, and other content. This corrupts the entire rest of the document."
        },
        {
          id: 6,
          question: "When should you use a fenced code block vs. inline code?",
          options: {
            A: "Fenced for Python, inline for all other languages",
            B: "Fenced for displaying multiple lines of code, expected output, or implementation examples; inline for brief single references within prose",
            C: "Fenced for public documentation, inline for internal specs only",
            D: "Fenced always — inline code is deprecated in modern Markdown"
          },
          correct: "B",
          explanation: "The lesson provides a clear decision: use fenced code blocks (triple backticks) for multiple lines of code, showing expected program behavior, and providing implementation examples. Use inline code (single backticks) for brief references within prose — variable names, commands, filenames, function names."
        },
        {
          id: 7,
          question: "What is the consequence of using inline code (single backticks) for multiple lines of code?",
          options: {
            A: "The code becomes a hyperlink pointing to the first line",
            B: "The content loses formatting and appears as a single line, destroying structure and readability",
            C: "Markdown automatically converts it to a fenced block",
            D: "The entire code is bold and italic simultaneously"
          },
          correct: "B",
          explanation: "Using inline code for multiple lines is listed as a common mistake because inline code is rendered on a single line — all line breaks are removed. Multi-line code loses its structure, indentation, and readability. Fenced code blocks preserve formatting exactly as written."
        },
        {
          id: 8,
          question: "Which language tag would be appropriate for documenting a series of terminal commands in a specification?",
          options: {
            A: "```terminal",
            B: "```console",
            C: "```bash",
            D: "```shell"
          },
          correct: "C",
          explanation: "The lesson explicitly lists ```bash as one of the valid language tags, alongside ```python, ```typescript, ```json, and ```yaml. While some renderers accept 'shell' or 'console', the lesson specifically identifies ```bash as the standard for terminal commands."
        },
        {
          id: 9,
          question: "Why do code blocks help AI recognize 'literal commands versus descriptive text'?",
          options: {
            A: "Code blocks are stored in a separate AI memory bank from prose",
            B: "Code blocks visually and structurally separate exact executable syntax from explanatory prose — AI processes them with different parsing logic",
            C: "Code blocks automatically add quotes around content, signaling literalness",
            D: "AI cannot read code blocks — it only uses them for syntax highlighting hints"
          },
          correct: "B",
          explanation: "Code blocks create a clear structural boundary between 'this is exactly what to type/run' (code block content) and 'this is explaining what to do' (prose). Without this distinction, AI might interpret 'run install command' as a vague description or 'npm install' as a command to execute — code blocks make this unambiguous."
        },
        {
          id: 10,
          question: "What is the consequence of omitting language tags from code blocks in specifications?",
          options: {
            A: "The code block will fail to render in GitHub",
            B: "AI agents cannot read code blocks without language tags",
            C: "AI may generate code in the wrong language or miss syntax-specific patterns, reducing specification accuracy",
            D: "The file size increases significantly due to lack of compression"
          },
          correct: "C",
          explanation: "Omitting language tags is listed as a critical mistake because language tags help AI agents generate correct syntax for that specific language. Without a tag, AI loses context about whether to apply Python indentation rules, TypeScript type annotations, bash quoting conventions, or JSON structure — reducing the precision of generated code."
        },
        {
          id: 11,
          question: "Scenario: You're writing a specification with a code example. You open a code block with ``` but forget to close it. The rest of your specification (headings, lists, paragraphs) all render as code. What critical mistake from Chapter 13 Lesson 4 did you make?",
          options: {
            A: "You should have used inline code instead of fenced code blocks",
            B: "Forgetting closing backticks — everything after the opening ``` becomes part of the code block, corrupting the entire rest of the document",
            C: "You should have added a language tag to the opening backticks",
            D: "You should have indented the code block with 4 spaces instead"
          },
          correct: "B",
          explanation: "Lesson 4 identifies forgetting closing backticks as the most critical mistake. When you open a fenced code block with ``` but forget the closing ```, everything after becomes part of the code block — including all subsequent headings, paragraphs, and other content. This corrupts the entire rest of the document, making it unreadable and unparsable by AI."
        },
        {
          id: 12,
          question: "Scenario: Your specification shows a command like 'npm install' within a sentence. You use triple backticks (```) around it because 'it's code.' The rendered output looks awkward and breaks the paragraph flow. What should you have used instead?",
          options: {
            A: "Nothing — triple backticks are correct for all code",
            B: "Single backticks (`npm install`) for brief inline references within prose; triple backticks are for multi-line code blocks",
            C: "HTML <code> tags instead of Markdown",
            D: "Bold text instead of code formatting"
          },
          correct: "B",
          explanation: "Lesson 4 distinguishes between inline code (single backticks) and fenced code blocks (triple backticks). Inline code is for brief references within prose — variable names, commands, filenames, function names. Fenced code blocks are for multiple lines of code, expected output, or implementation examples. Using triple backticks for single words breaks paragraph flow."
        },
        {
          id: 13,
          question: "Scenario: You include a Python code example in your specification without a language tag. The AI generates TypeScript code instead when implementing the feature. What mistake caused this confusion?",
          options: {
            A: "The AI doesn't understand Python",
            B: "Omitting the language tag (```python) — without it, AI loses context about which language's syntax rules to apply, potentially generating code in the wrong language",
            C: "Python code should always use inline code, not fenced blocks",
            D: "You should have used a comment inside the code block instead"
          },
          correct: "B",
          explanation: "Lesson 4 explains that language tags help AI agents generate correct syntax for the specific language. Without a tag, AI loses context about whether to apply Python indentation rules, TypeScript type annotations, bash quoting conventions, or JSON structure. This reduces specification accuracy and may cause AI to generate code in an unexpected language."
        },
        {
          id: 14,
          question: "Scenario: You're documenting an API response format. You write the expected JSON response inside a code block with the ```json language tag. The AI correctly implements the response format matching your example. What 'Specification by Example' principle does this demonstrate?",
          options: {
            A: "Every specification must include at least 5 code examples",
            B: "Code blocks show exact output format, language context, and example data — allowing AI to understand precise expectations and match them in implementation",
            C: "JSON is the only format AI can understand",
            D: "Language tags automatically validate the code block content"
          },
          correct: "B",
          explanation: "Lesson 4 introduces 'Specification by Example' — using code blocks so AI agents can see exact output format, understand programming language context, parse example code correctly, and recognize literal commands versus descriptive text. The JSON example with ```json tag makes expectations concrete and unambiguous, enabling AI to match the format precisely."
        },
        {
          id: 15,
          question: "Scenario: Your specification includes both a function name 'calculateTotal' mentioned in prose and a multi-line implementation example. How should you format each according to Chapter 13 Lesson 4?",
          options: {
            A: "Both should use triple backticks (```)",
            B: "Function name in prose: single backticks (`calculateTotal`); Multi-line implementation: fenced code block with language tag (```typescript)",
            C: "Both should use single backticks",
            D: "Neither needs code formatting"
          },
          correct: "B",
          explanation: "Lesson 4 provides clear guidance: use inline code (single backticks) for brief references within prose — variable names, commands, filenames, function names. Use fenced code blocks (triple backticks with language tag) for multiple lines of code, expected output, or implementation examples. This distinction preserves readability while providing appropriate context for each use case."
        }
      ]
    },
    {
      id: 5,
      title: "Links, Images & Complete Specifications",
      mcqs: [
        {
          id: 1,
          question: "What is the correct Markdown syntax for a clickable link?",
          options: {
            A: "(link text)[url]",
            B: "[url](link text)",
            C: "[link text](url)",
            D: "<link text href='url'>"
          },
          correct: "C",
          explanation: "The correct syntax is [link text](url) — square brackets contain the clickable display text, parentheses contain the destination URL. The lesson notes: no spaces in URLs, and link text should describe the destination without requiring the user to click to understand where it goes."
        },
        {
          id: 2,
          question: "What distinguishes the image syntax from the link syntax in Markdown?",
          options: {
            A: "Images use double brackets [[alt text]](url) instead of single brackets",
            B: "Images start with an exclamation mark: ![alt text](image-url)",
            C: "Images use curly braces {alt text}(url) for embedding",
            D: "Images require a separate !include directive on the line above"
          },
          correct: "B",
          explanation: "The image syntax is ![alt text](image-url) — identical to a link but with a leading exclamation mark (!). The common error is missing the ! prefix, which creates a hyperlink to the image instead of embedding it. The exclamation mark is what distinguishes embedded images from regular links."
        },
        {
          id: 3,
          question: "What principle should guide writing alt text for images in specifications?",
          options: {
            A: "Keep alt text to one word — brevity is always better",
            B: "Write alt text that describes what the image SHOWS, not just what it IS — supports both accessibility and AI processing",
            C: "Always use the filename as alt text for consistency",
            D: "Alt text should match the heading of the section containing the image"
          },
          correct: "B",
          explanation: "The lesson specifies: 'Write alt text that describes what the image SHOWS, not just what it IS.' For example: 'Dashboard showing user metrics with 94% uptime' rather than 'screenshot.png'. This serves both accessibility (screen readers) and AI processing (understanding visual content without seeing the image)."
        },
        {
          id: 4,
          question: "What is the purpose of 'reference-style links' in Markdown?",
          options: {
            A: "They create footnotes that appear at the bottom of the document",
            B: "They allow link definitions at the document bottom for cleaner text when the same URL appears multiple times",
            C: "They verify that links are still active when the document is opened",
            D: "They create bi-directional links between two Markdown documents"
          },
          correct: "B",
          explanation: "Reference-style links define the URL separately at the document bottom, with a label in the text: [link text][label-name] then at the bottom: [label-name]: url. This keeps the prose readable when long URLs would break paragraph flow, and makes URLs easy to update when they change."
        },
        {
          id: 5,
          question: "How does text emphasis (bold, italic) function as a priority signal for AI agents?",
          options: {
            A: "Bold text is processed first, italic text is processed last",
            B: "Bold (**must**) signals critical/non-negotiable requirements; italic (*recommended*) signals optional items — helping AI prioritize implementation",
            C: "Bold and italic are purely aesthetic — AI ignores emphasis markers",
            D: "Bold means delete this item; italic means add this item"
          },
          correct: "B",
          explanation: "The lesson states: 'Bold (**must**) vs italic (_recommended_) helps AI decide what to implement first vs what is optional.' Bold (** or __) marks critical requirements and warnings; italic (* or _) marks optional items and definitions; bold-italic (***) marks absolute requirements."
        },
        {
          id: 6,
          question: "What is the GFM syntax for checked and unchecked task list items?",
          options: {
            A: "[x] for checked, [ ] for unchecked",
            B: "- [x] for checked, - [ ] for unchecked",
            C: "* (done) for checked, * (todo) for unchecked",
            D: "+ check for checked, - uncheck for unchecked"
          },
          correct: "B",
          explanation: "GitHub Flavored Markdown (GFM) task lists use: - [x] for checked items and - [ ] for unchecked items. The hyphen-space makes it a list item, and the bracket content (x or space) indicates completion status. These render as interactive checkboxes on GitHub."
        },
        {
          id: 7,
          question: "How do you create a Markdown table, and what character separates headers from data rows?",
          options: {
            A: "Use HTML <table><tr><td> tags; separate headers with <thead>",
            B: "Use | to separate columns and --- (three dashes) for the header separator row",
            C: "Use tab characters between columns and === to separate headers",
            D: "Use commas between columns (CSV format) with # to mark header rows"
          },
          correct: "B",
          explanation: "Markdown tables use | (pipe character) to separate columns. The header separator row uses --- (three or more dashes) under each column header. For example: | Column 1 | Column 2 | then | --- | --- | then data rows. This is part of the Bonus Markdown Elements covered in this lesson."
        },
        {
          id: 8,
          question: "What is the backslash (\\) used for in Markdown?",
          options: {
            A: "Creating line breaks within a paragraph",
            B: "Starting a comment that won't be rendered",
            C: "Escaping — preventing Markdown from interpreting the next character as syntax",
            D: "Creating horizontal rules between sections"
          },
          correct: "C",
          explanation: "The backslash is the escape character in Markdown — it prevents the next character from being interpreted as Markdown syntax. For example, \\* renders as a literal asterisk instead of starting emphasis, and \\# renders as a literal hash instead of creating a heading."
        },
        {
          id: 9,
          question: "How do links serve as 'context anchors' in AI specifications?",
          options: {
            A: "Links create clickable navigation within the document, improving AI's ability to jump between sections",
            B: "Links connect specifications to authoritative external sources — API documentation, design references, standards — allowing AI to access authoritative context",
            C: "Links tell AI which external tools to use when implementing the specification",
            D: "Links are compressed by AI to reduce token count during processing"
          },
          correct: "B",
          explanation: "The lesson explains that links provide 'context anchors connecting specs to authoritative sources.' When a specification links to API documentation, design system references, or standards, AI can understand the precise technical context behind requirements — making the specification more precise than prose alone."
        },
        {
          id: 10,
          question: "What requirement does the lesson give for link text quality?",
          options: {
            A: "Link text must be under 5 words for readability",
            B: "Link text should always start with 'Click here' for accessibility",
            C: "Link text should describe what the destination provides without following the link — 'Next.js Documentation' not 'click here'",
            D: "Link text must exactly match the title of the destination page"
          },
          correct: "C",
          explanation: "The lesson specifies: 'Link text should describe what the destination provides without following the link.' Using 'click here' is explicitly cited as bad practice. Descriptive link text (e.g., 'Next.js App Router Documentation') tells both humans and AI what they'll find at the destination, making specifications self-documenting."
        },
        {
          id: 11,
          question: "Scenario: You embed an architecture diagram in your specification using `[architecture.png](architecture.png)`. The image doesn't display — it shows as a clickable link instead. What syntax mistake did you make?",
          options: {
            A: "You should have used double brackets [[architecture.png]](architecture.png)",
            B: "You forgot the exclamation mark prefix — image syntax is `![alt text](image-url)` not `[text](url)`. Without the !, it creates a hyperlink instead of embedding the image",
            C: "You should have used HTML <img> tags instead",
            D: "PNG images don't work in Markdown — use JPG instead"
          },
          correct: "B",
          explanation: "Lesson 5 explains that image syntax is `![alt text](image-url)` — identical to link syntax but with a leading exclamation mark (!). The common error is missing the ! prefix, which creates a hyperlink to the image instead of embedding it. The exclamation mark is what distinguishes embedded images from regular links."
        },
        {
          id: 12,
          question: "Scenario: Your specification includes a screenshot of the dashboard. You write alt text as 'dashboard.png'. A screen reader user complains they don't understand what the image shows. What alt text principle from Chapter 13 Lesson 5 did you violate?",
          options: {
            A: "Alt text should always be one word for brevity",
            B: "Alt text should describe what the image SHOWS, not just what it IS — 'Dashboard showing user metrics with 94% uptime' not 'dashboard.png'",
            C: "Alt text should match the filename exactly",
            D: "Alt text is optional for screenshots"
          },
          correct: "B",
          explanation: "Lesson 5 specifies: 'Write alt text that describes what the image SHOWS, not just what it IS.' Using the filename ('dashboard.png') tells neither humans nor AI what the image contains. Descriptive alt text ('Dashboard showing user metrics with 94% uptime') serves both accessibility (screen readers) and AI processing (understanding visual content without seeing the image)."
        },
        {
          id: 13,
          question: "Scenario: You're writing a specification with critical requirements that must be implemented and optional suggestions that would be nice to have. How should you use text emphasis to signal this priority to AI agents?",
          options: {
            A: "Use ALL CAPS for critical requirements and lowercase for optional items",
            B: "Use bold (**must**, **required**) for critical/non-negotiable requirements; use italic (*recommended*, *optional*) for nice-to-have items",
            C: "Use code formatting for critical requirements",
            D: "Text emphasis doesn't affect AI interpretation"
          },
          correct: "B",
          explanation: "Lesson 5 states: 'Bold (**must**) vs italic (*recommended*) helps AI decide what to implement first vs what is optional.' Bold (** or __) marks critical requirements and warnings; italic (* or _) marks optional items and definitions. This priority signaling helps AI prioritize implementation when not everything can be done at once."
        },
        {
          id: 14,
          question: "Scenario: Your specification links to the Stripe API documentation multiple times. You use inline links like `[Stripe API](https://stripe.com/docs/api)` throughout, making the prose hard to read with long URLs. What Markdown feature from Lesson 5 would improve readability?",
          options: {
            A: "Short URLs using a URL shortener",
            B: "Reference-style links — define the URL once at the document bottom as `[stripe-api]: https://stripe.com/docs/api` and use `[Stripe API][stripe-api]` in the text",
            C: "Removing all links and just mentioning Stripe by name",
            D: "Using QR codes instead of links"
          },
          correct: "B",
          explanation: "Lesson 5 explains reference-style links: define the URL separately at the document bottom with a label, then use the label in the text. This keeps prose readable when long URLs would break paragraph flow, and makes URLs easy to update when they change. Example: `[Stripe API][stripe-api]` in text, `[stripe-api]: https://stripe.com/docs/api` at bottom."
        },
        {
          id: 15,
          question: "Scenario: You're creating a feature checklist for your specification. You want AI to track which features are implemented and which are pending. What GFM syntax from Chapter 13 Lesson 5 enables interactive checkboxes?",
          options: {
            A: "[ ] Pending feature and [x] Completed feature",
            B: "- [ ] Pending feature and - [x] Completed feature",
            C: "* (todo) Pending and * (done) Completed",
            D: "□ Pending and ☑ Completed using Unicode characters"
          },
          correct: "B",
          explanation: "Lesson 5 explains GFM task lists use: `- [ ]` for unchecked items and `- [x]` for checked items. The hyphen-space makes it a list item, and the bracket content (x or space) indicates completion status. These render as interactive checkboxes on GitHub, allowing AI and humans to track implementation progress visually."
        }
      ]
    }
  ]
};
