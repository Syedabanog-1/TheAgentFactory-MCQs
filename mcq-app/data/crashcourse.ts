import type { Chapter } from "@/types";

export const crashcourse: Chapter = {
  id: 99,
  title: "Crash Course",
  description: "Exam Preparation — 225 Scenario-Based MCQs covering AI Prompting in 2026, Thesis, and Getting Started Overview.",
  color: "red",
  lessons: [
    {
      id: 1,
      title: "AI Prompting in 2026",
      mcqs: [
        {
          id: 1,
          question: "Fatima uploads her entire project folder to Claude and writes a detailed brief explaining her role, constraints, and expected output format. Her colleague just types \"help me with this project.\" Who will get better results?",
          options: {
            A: "Colleague, because simpler prompts work better",
            B: "Fatima, because structured briefing produces better responses",
            C: "Both will get equal results",
            D: "Colleague, because Claude prefers shorter prompts"
          },
          correct: "B",
          explanation: "Structured briefing with context, constraints, and expected output format produces significantly better AI responses than vague prompts."
        },
        {
          id: 2,
          question: "You ask ChatGPT \"What is the capital of France?\" It answers confidently \"Paris.\" You ask \"What happened in the Lahore tech conference last week?\" It again answers confidently. Which answer should you trust more?",
          options: {
            A: "Both equally — confidence means accuracy",
            B: "The Lahore conference answer — recent events are better known",
            C: "The France capital answer — stable facts are more reliable",
            D: "Neither — AI is always wrong"
          },
          correct: "C",
          explanation: "Stable, well-known facts (like country capitals) are more reliable from AI than recent events, which may not be in the model's training data. Confidence doesn't equal accuracy."
        },
        {
          id: 3,
          question: "Ahmed needs a report on recent AI funding rounds in 2026. Which retrieval mode should his prompt trigger?",
          options: {
            A: "Pretrained mode — fastest option",
            B: "Web search mode — for recent information",
            C: "Code execution mode — for calculations",
            D: "Deep research mode — always best"
          },
          correct: "B",
          explanation: "Web search mode is optimal for recent information that may not be in the model's training data, such as 2026 funding rounds."
        },
        {
          id: 4,
          question: "Sara is writing a complex research paper analyzing 50 sources. She wants a structured multi-dimensional report. Which mode is optimal?",
          options: {
            A: "Pretrained mode",
            B: "Web search mode",
            C: "Deep research mode",
            D: "Code execution mode"
          },
          correct: "C",
          explanation: "Deep research mode is optimal for comprehensive multi-source structured reports, scanning dozens of sources to produce detailed analysis."
        },
        {
          id: 5,
          question: "A model's context window holds 750,000 words. What does this mean practically?",
          options: {
            A: "The model remembers everything forever",
            B: "The model can process several Harry Potter books in one conversation",
            C: "The model stores files permanently",
            D: "The model can run 750,000 queries"
          },
          correct: "B",
          explanation: "A 750,000-word context window means the model can process the equivalent of several Harry Potter books in a single conversation, but it doesn't store files permanently or remember across sessions."
        },
        {
          id: 6,
          question: "Hassan has been chatting with Claude for 3 hours on multiple topics. He notices the AI seems to \"forget\" earlier details. What is happening?",
          options: {
            A: "Claude's internet connection is slow",
            B: "Context rot — older content gets summarized losing specifics",
            C: "Claude is being lazy",
            D: "The context window is increasing"
          },
          correct: "B",
          explanation: "Context rot occurs when older content in long conversations gets summarized, losing specific details as the conversation grows beyond what the model can effectively attend to."
        },
        {
          id: 7,
          question: "What is the best solution when context rot becomes a problem in long conversations?",
          options: {
            A: "Refresh the browser page",
            B: "Type \"remember everything\"",
            C: "Start a fresh conversation when topics change",
            D: "Upgrade your subscription"
          },
          correct: "C",
          explanation: "Starting a fresh conversation when topics change is the best solution for context rot, as it gives the model a clean context window for the new topic."
        },
        {
          id: 8,
          question: "Nadia wants her Claude instructions and files to automatically apply to every new chat. Which feature should she use?",
          options: {
            A: "System prompts only",
            B: "Projects feature — persistent workspaces",
            C: "Browser bookmarks",
            D: "Copy-paste each time"
          },
          correct: "B",
          explanation: "The Projects feature provides persistent workspaces where files and instructions transfer to every new chat automatically."
        },
        {
          id: 9,
          question: "You ask Claude to \"think hard\" before answering a complex business strategy question. What happens?",
          options: {
            A: "Claude refuses the request",
            B: "Claude takes seconds to minutes exploring multiple approaches internally",
            C: "Claude gives a faster but simpler answer",
            D: "Claude asks for more money"
          },
          correct: "B",
          explanation: "Reasoning mode ('think hard') causes Claude to take seconds to minutes exploring multiple approaches internally before providing a more thoughtful response."
        },
        {
          id: 10,
          question: "When should you use reasoning mode (\"think hard\")?",
          options: {
            A: "Every single prompt for best results",
            B: "Only for quick factual lookups",
            C: "For genuinely difficult multi-input trade-off questions",
            D: "Only for math problems"
          },
          correct: "C",
          explanation: "Reasoning mode should be reserved for genuinely difficult multi-input trade-off questions, not for every prompt or simple factual lookups."
        },
        {
          id: 11,
          question: "Ali asks Claude \"Don't you think my business plan is brilliant?\" Claude says \"Yes, absolutely brilliant!\" What problem is demonstrated?",
          options: {
            A: "Claude is being honest",
            B: "Sycophancy — models agree rather than objectively evaluate",
            C: "Claude has read the business plan carefully",
            D: "This is the correct behavior"
          },
          correct: "B",
          explanation: "Sycophancy is when AI models agree with the user rather than providing objective evaluation, especially when questions are framed to seek confirmation."
        },
        {
          id: 12,
          question: "Which prompt better avoids sycophancy when evaluating a strategy?",
          options: {
            A: "\"Confirm my strategy is correct\"",
            B: "\"Don't you agree this approach is best?\"",
            C: "\"List the strongest arguments FOR and AGAINST this strategy\"",
            D: "\"Tell me this will work\""
          },
          correct: "C",
          explanation: "Asking for arguments both FOR and AGAINST forces objective evaluation and avoids sycophancy, unlike confirmation-seeking prompts."
        },
        {
          id: 13,
          question: "The rubric pattern means:",
          options: {
            A: "Writing very long prompts",
            B: "Specifying exact evaluation criteria with 1-10 scores per criterion",
            C: "Using bullet points only",
            D: "Asking the same question multiple times"
          },
          correct: "B",
          explanation: "The rubric pattern involves specifying exact evaluation criteria with 1-10 scores per criterion, forcing honest and structured assessment."
        },
        {
          id: 14,
          question: "Zara wants to write an article. She immediately asks Claude for the full final article. What's the better approach?",
          options: {
            A: "This is the best approach — get it done fast",
            B: "Use the Brainstorm-Iterate Loop: get 3-5 outline options first, give feedback, iterate, then expand",
            C: "Ask 10 different AIs simultaneously",
            D: "Use pretrained mode only"
          },
          correct: "B",
          explanation: "The Brainstorm-Iterate Loop is better: get 3-5 outline options first, give feedback, iterate on structure, then expand to full draft."
        },
        {
          id: 15,
          question: "In the Brainstorm-Iterate Loop, when should you ask for the full expanded draft?",
          options: {
            A: "Immediately",
            B: "After 10 rounds of feedback",
            C: "Only after 2-3 rounds of structural iteration",
            D: "Never ask for drafts"
          },
          correct: "C",
          explanation: "The full expanded draft should only be requested after 2-3 rounds of structural iteration, ensuring the direction is right before expanding."
        },
        {
          id: 16,
          question: "What is a key weakness of AI when analyzing images?",
          options: {
            A: "It cannot see colors",
            B: "It struggles with fine details, counting small items, and small print",
            C: "It cannot understand photos",
            D: "It only works with black and white images"
          },
          correct: "B",
          explanation: "AI struggles with fine details, counting small items, and reading small print in images, though it handles overall composition and large objects well."
        },
        {
          id: 17,
          question: "Bilal wants to create a professional-quality diagram without design skills. What is the recommended workflow?",
          options: {
            A: "Hire a graphic designer",
            B: "Claude generates SVG → convert to PNG → ChatGPT redraws at professional polish → iterate",
            C: "Use MS Paint",
            D: "Ask Gemini for a JPG directly"
          },
          correct: "B",
          explanation: "The recommended Designer workflow: Claude generates SVG → convert to PNG → ChatGPT redraws at professional polish → iterate until satisfied."
        },
        {
          id: 18,
          question: "Which types of apps work well as Claude Artifacts/Canvas?",
          options: {
            A: "Multiplayer real-time games with live data",
            B: "Apps requiring user accounts and databases",
            C: "Single-screen, stateless interactive apps",
            D: "Social media platforms"
          },
          correct: "C",
          explanation: "Claude Artifacts/Canvas work best for single-screen, stateless interactive apps — not multiplayer games, database-driven apps, or social platforms."
        },
        {
          id: 19,
          question: "Maria is analyzing a large dataset. She asks Claude \"what are the trends?\" Without explicitly asking for code execution. What risk exists?",
          options: {
            A: "None — Claude always runs code",
            B: "Claude may answer from a glance producing confident paragraphs with no actual computation",
            C: "Claude will refuse to analyze data",
            D: "The dataset will be deleted"
          },
          correct: "B",
          explanation: "Without explicitly requesting code execution, Claude may produce confident paragraphs based on a glance rather than actual computation."
        },
        {
          id: 20,
          question: "What should you explicitly write to ensure Claude actually runs code for data analysis?",
          options: {
            A: "\"Use your brain\"",
            B: "\"Write and run code\"",
            C: "\"Be careful\"",
            D: "\"Think step by step\""
          },
          correct: "B",
          explanation: "Explicitly writing 'Write and run code' ensures Claude uses code execution mode for data analysis rather than estimating from a glance."
        },
        {
          id: 21,
          question: "When using AI desktop apps (Cowork/OpenWork), what is the SAFE workflow order?",
          options: {
            A: "Approve execution → state task → review plan",
            B: "State task → approve execution → review plan",
            C: "State task → request PLAN first → review and edit → then approve execution",
            D: "Give full access immediately for faster results"
          },
          correct: "C",
          explanation: "The safe workflow: State task → request PLAN first → review and edit the plan → then approve execution. Never give full access immediately."
        },
        {
          id: 22,
          question: "A safety warning about AI desktop apps: deleted files often:",
          options: {
            A: "Go to the Recycle Bin safely",
            B: "Can be recovered from cloud backup",
            C: "Don't go to recycle — they are gone permanently",
            D: "Are stored in Claude's memory"
          },
          correct: "C",
          explanation: "Files deleted by AI desktop apps often don't go to the recycle bin — they are gone permanently. Always use version control and backups."
        },
        {
          id: 23,
          question: "Ranking from fastest/cheapest to slowest/most expensive:",
          options: {
            A: "Video → Images → Speech → Text",
            B: "Text → Speech → Images → Video",
            C: "Speech → Text → Video → Images",
            D: "Images → Text → Speech → Video"
          },
          correct: "B",
          explanation: "From fastest/cheapest to slowest/most expensive: Text → Speech → Images → Video."
        },
        {
          id: 24,
          question: "In mid-2026, which AI is BEST for reasoning, long documents, code, and structured analysis?",
          options: {
            A: "ChatGPT",
            B: "Gemini",
            C: "Claude",
            D: "Meta AI"
          },
          correct: "C",
          explanation: "Claude is best for reasoning, long documents, code, and structured analysis in mid-2026."
        },
        {
          id: 25,
          question: "In mid-2026, which AI is BEST for web search synthesis, deep research, and Google integration?",
          options: {
            A: "Claude",
            B: "Gemini",
            C: "Meta AI",
            D: "DeepSeek"
          },
          correct: "B",
          explanation: "Gemini is best for web search synthesis, deep research, and Google integration in mid-2026."
        },
        {
          id: 26,
          question: "Which AI model has the lowest cost and open-source access with 1M-token context by default?",
          options: {
            A: "Claude",
            B: "ChatGPT",
            C: "Meta AI",
            D: "DeepSeek"
          },
          correct: "D",
          explanation: "DeepSeek has the lowest cost and open-source access with 1M-token context by default."
        },
        {
          id: 27,
          question: "How often should you test the same prompt across multiple AI models?",
          options: {
            A: "Never — pick one and stick with it",
            B: "Only when you have a problem",
            C: "Monthly — leaders rotate, tooling should stay current",
            D: "Once a year"
          },
          correct: "C",
          explanation: "Monthly cross-testing keeps tooling current as leaders rotate among AI models."
        },
        {
          id: 28,
          question: "\"Models Checking Models\" technique is used when:",
          options: {
            A: "You want a faster answer",
            B: "No ground truth exists and you need objective quality signals",
            C: "One model is broken",
            D: "You want to save money"
          },
          correct: "B",
          explanation: "Models Checking Models is used when no ground truth exists and you need objective quality signals by having different models evaluate each other's outputs."
        },
        {
          id: 29,
          question: "In a multi-model loop for quality checking, what do disagreements between models reveal?",
          options: {
            A: "Technical errors in the internet",
            B: "What one model alone cannot see — different blind spots",
            C: "That all models are wrong",
            D: "Nothing useful"
          },
          correct: "B",
          explanation: "Disagreements between models reveal different blind spots — what one model alone cannot see, improving overall quality assessment."
        },
        {
          id: 30,
          question: "For which content type is multi-model cross-checking NOT sufficient for factual accuracy?",
          options: {
            A: "Creative writing",
            B: "Business strategy memos",
            C: "Legal, medical, financial, or real-person content",
            D: "Email drafts"
          },
          correct: "C",
          explanation: "For legal, medical, financial, or real-person content, multi-model cross-checking indicates craft quality only — human experts remain necessary for factual truth."
        },
        {
          id: 31,
          question: "What is \"context rot\"?",
          options: {
            A: "A virus that affects AI models",
            B: "When older content in long conversations gets summarized, losing specific details",
            C: "When your laptop battery dies",
            D: "When AI gives wrong answers"
          },
          correct: "B",
          explanation: "Context rot is when older content in long conversations gets summarized, losing specific details as the conversation grows."
        },
        {
          id: 32,
          question: "The Projects feature in Claude, ChatGPT, and Gemini allows:",
          options: {
            A: "Running multiple models simultaneously",
            B: "Persistent workspaces where files and instructions transfer to every new chat automatically",
            C: "Free unlimited usage",
            D: "Sharing accounts with friends"
          },
          correct: "B",
          explanation: "The Projects feature provides persistent workspaces where files and instructions transfer to every new chat automatically."
        },
        {
          id: 33,
          question: "\"Pretrained knowledge\" means AI learned from:",
          options: {
            A: "Real-time internet updates",
            B: "Your personal files",
            C: "Internet text at training time — a fixed snapshot",
            D: "Government databases"
          },
          correct: "C",
          explanation: "Pretrained knowledge comes from internet text at training time — a fixed snapshot, not real-time updates."
        },
        {
          id: 34,
          question: "Which topic area is AI STRONGEST at due to pretrained knowledge?",
          options: {
            A: "Your company's internal secrets",
            B: "Events from last week",
            C: "Common topics like cooking, celebrities, popular media",
            D: "Local regional information"
          },
          correct: "C",
          explanation: "AI is strongest at common topics like cooking, celebrities, and popular media due to abundant pretrained knowledge on these subjects."
        },
        {
          id: 35,
          question: "Usman prompts Claude: \"Evaluate this marketing strategy objectively, score each component 1-10, and identify the top 3 weaknesses.\" This is an example of:",
          options: {
            A: "A bad prompt — too specific",
            B: "The rubric pattern forcing honest assessment",
            C: "Deep research mode activation",
            D: "Sycophancy"
          },
          correct: "B",
          explanation: "This is the rubric pattern — specifying exact evaluation criteria with scores forces honest, structured assessment instead of vague praise."
        },
        {
          id: 36,
          question: "What is the key difference between a novice and a power user of AI?",
          options: {
            A: "Intelligence level",
            B: "Access to premium subscriptions",
            C: "Structured briefing habits — attaching context, constraints, and explicit requests",
            D: "Typing speed"
          },
          correct: "C",
          explanation: "The key difference is structured briefing habits — attaching context, constraints, and explicit requests to prompts."
        },
        {
          id: 37,
          question: "Which phrasing activates deep research mode most effectively?",
          options: {
            A: "\"Quick answer: what is AI?\"",
            B: "\"Write a comprehensive multi-source structured report on AI investment trends in 2026\"",
            C: "\"Tell me about AI\"",
            D: "\"Think about AI\""
          },
          correct: "B",
          explanation: "Comprehensive, multi-source, structured report requests activate deep research mode most effectively."
        },
        {
          id: 38,
          question: "Audio AI currently struggles with:",
          options: {
            A: "Clear speech from native speakers",
            B: "Simple dictation tasks",
            C: "Heavy accents, technical jargon, and multi-speaker overlap",
            D: "English language only"
          },
          correct: "C",
          explanation: "Audio AI currently struggles with heavy accents, technical jargon, and multi-speaker overlap."
        },
        {
          id: 39,
          question: "The \"brief AI like you'd brief a new colleague\" principle means:",
          options: {
            A: "Be rude and direct",
            B: "If a colleague would need a document to do the job, attach it to your prompt",
            C: "Keep prompts as short as possible",
            D: "Use technical jargon always"
          },
          correct: "B",
          explanation: "Brief AI like a new colleague: if they would need a document to do the job, attach it to your prompt."
        },
        {
          id: 40,
          question: "Iterating against outlines before drafts (for writing) is better because:",
          options: {
            A: "Outlines are prettier",
            B: "Editing outlines changes direction; editing final text only changes words",
            C: "AI prefers outlines",
            D: "It saves storage space"
          },
          correct: "B",
          explanation: "Editing outlines changes direction and structure; editing final text only changes words. Most leverage is in the structural rounds."
        },
        {
          id: 41,
          question: "Which statement about AI image generation is TRUE in 2026?",
          options: {
            A: "Text on signs is always perfect",
            B: "Character appearance is perfectly consistent",
            C: "Text-to-image quality improves monthly but text on signs remains problematic",
            D: "Image generation is no longer available"
          },
          correct: "C",
          explanation: "Text-to-image quality improves monthly but text rendering on signs and images remains problematic."
        },
        {
          id: 42,
          question: "The \"single self-critique loop\" in Models Checking Models involves:",
          options: {
            A: "Asking one question once",
            B: "Score → implement → regrade → iterate until plateau (~9)",
            C: "Three different models simultaneously",
            D: "Deleting bad outputs"
          },
          correct: "B",
          explanation: "The single self-critique loop: Score → implement suggestions → regrade → iterate until the score plateaus around 9."
        },
        {
          id: 43,
          question: "What does \"models are stateless\" mean practically?",
          options: {
            A: "Models don't have any state",
            B: "No memory exists between separate sessions — context window is everything",
            C: "Models save all your data",
            D: "Models only work online"
          },
          correct: "B",
          explanation: "Models are stateless means no memory exists between separate sessions — the context window is everything available to the model."
        },
        {
          id: 44,
          question: "The best single habit according to AI Prompting 2026 for better outputs is:",
          options: {
            A: "Using the most expensive model",
            B: "Writing longer prompts",
            C: "The brainstorm-iterate loop with structured feedback",
            D: "Using voice mode"
          },
          correct: "C",
          explanation: "The brainstorm-iterate loop with structured feedback is the best single habit for consistently better AI outputs."
        },
        {
          id: 45,
          question: "\"Verification signals\" when using AI for data analysis means:",
          options: {
            A: "Checking the AI's credentials",
            B: "Asking for row counts, column names, date ranges before analysis and checking final totals",
            C: "Running the analysis three times",
            D: "Printing the results"
          },
          correct: "B",
          explanation: "Verification signals: ask for row counts, column names, date ranges before analysis and check final totals to ensure accuracy."
        },
        {
          id: 46,
          question: "Scope permissions for AI desktop apps should:",
          options: {
            A: "Be maximum from day one for efficiency",
            B: "Start read-only on a single small folder and grow with track record",
            C: "Include all system files immediately",
            D: "Never be changed"
          },
          correct: "B",
          explanation: "Scope permissions should start read-only on a single small folder and grow with track record — principle of least privilege."
        },
        {
          id: 47,
          question: "Which statement about ChatGPT's strengths in 2026 is correct?",
          options: {
            A: "Best for long document analysis",
            B: "Best for open-source and cheapest cost",
            C: "Best for image generation, voice mode, and broad task coverage",
            D: "Best for Google integration"
          },
          correct: "C",
          explanation: "ChatGPT's strengths in 2026: best for image generation, voice mode, and broad task coverage."
        },
        {
          id: 48,
          question: "The context stack for a given AI response includes:",
          options: {
            A: "Only your current prompt",
            B: "System prompts, tool descriptions, current prompt, conversation history, uploaded files",
            C: "Your browser history",
            D: "Other users' conversations"
          },
          correct: "B",
          explanation: "The full context stack includes: system prompts, tool descriptions, current prompt, conversation history, and uploaded files."
        },
        {
          id: 49,
          question: "\"Structure beats cleverness\" in prompting means:",
          options: {
            A: "Write clever, poetic prompts",
            B: "Detailed briefs with constraints produce better answers than clever wording",
            C: "Use emojis and symbols",
            D: "Write in a foreign language"
          },
          correct: "B",
          explanation: "Structure beats cleverness: detailed briefs with constraints produce better answers than clever wording or creative prompt tricks."
        },
        {
          id: 50,
          question: "When is single-pass model checking sufficient vs. multi-model loop?",
          options: {
            A: "Single pass for everything",
            B: "Multi-model for quick emails; single pass for legal documents",
            C: "Quick emails and casual brainstorms work with single pass; strategy memos and published chapters warrant multi-model loop",
            D: "Always use three models"
          },
          correct: "C",
          explanation: "Quick emails and casual brainstorms work with single pass; strategy memos and published chapters warrant the multi-model loop."
        },
        {
          id: 51,
          question: "Reasoning mode capability has been doubling roughly every:",
          options: {
            A: "Year",
            B: "2 years",
            C: "7 months",
            D: "3 months"
          },
          correct: "C",
          explanation: "Reasoning mode capability has been doubling roughly every 7 months."
        },
        {
          id: 52,
          question: "A text-based AI response costs approximately:",
          options: {
            A: "Several dollars per response",
            B: "Several cents per response",
            C: "Fractions of a cent per response",
            D: "Nothing — it's always free"
          },
          correct: "C",
          explanation: "A text-based AI response costs fractions of a cent per response, making it the cheapest modality."
        },
        {
          id: 53,
          question: "Video generation costs approximately:",
          options: {
            A: "Fractions of a cent",
            B: "A few cents",
            C: "Dollars per clip",
            D: "Hundreds of dollars"
          },
          correct: "C",
          explanation: "Video generation costs dollars per clip, making it the most expensive AI modality."
        },
        {
          id: 54,
          question: "Deep research mode takes:",
          options: {
            A: "Milliseconds",
            B: "Seconds",
            C: "Minutes, scanning dozens of sources",
            D: "Hours"
          },
          correct: "C",
          explanation: "Deep research mode takes minutes, scanning dozens of sources to produce comprehensive reports."
        },
        {
          id: 55,
          question: "Meta AI's key advantage is:",
          options: {
            A: "Best reasoning capabilities",
            B: "Best image generation",
            C: "Embedded ubiquity, competitive reasoning (Muse Spark), lowest cost",
            D: "Best for coding"
          },
          correct: "C",
          explanation: "Meta AI's key advantage: embedded ubiquity across Meta platforms, competitive reasoning (Muse Spark), and lowest cost."
        },
        {
          id: 56,
          question: "Which is NOT a limitation of building apps with Claude Artifacts?",
          options: {
            A: "No multiplayer networking",
            B: "No external services",
            C: "No real-time data synchronization",
            D: "Cannot build single-screen stateless apps"
          },
          correct: "D",
          explanation: "Single-screen stateless apps are exactly what Claude Artifacts CAN build. The limitations are no multiplayer, no external services, and no real-time data sync."
        },
        {
          id: 57,
          question: "\"Different models see differently\" principle is useful for:",
          options: {
            A: "Making conversations longer",
            B: "Catching blind spots that no single model can reveal",
            C: "Getting the same answer confirmed",
            D: "Saving usage costs"
          },
          correct: "B",
          explanation: "Different models see differently, which helps catch blind spots that no single model can reveal on its own."
        },
        {
          id: 58,
          question: "The most reliable way to analyze numbers in AI is:",
          options: {
            A: "Let the model estimate mentally",
            B: "Ask for \"your best guess\"",
            C: "Explicitly request code execution for computation",
            D: "Use only simple arithmetic"
          },
          correct: "C",
          explanation: "Explicitly requesting code execution for computation is the most reliable way to analyze numbers, rather than letting the model estimate."
        },
        {
          id: 59,
          question: "A student asks Claude \"isn't this essay perfect?\" and Claude says \"Yes, it's wonderful!\" The student should:",
          options: {
            A: "Trust Claude completely",
            B: "Ask Claude to \"identify the 5 weakest points and score each criterion 1-10\"",
            C: "Share the essay immediately",
            D: "Ask a different AI"
          },
          correct: "B",
          explanation: "To avoid sycophancy, ask for specific weaknesses and rubric-based scoring rather than confirmation-seeking questions."
        },
        {
          id: 60,
          question: "The brainstorm-iterate loop starts with:",
          options: {
            A: "Writing the full final draft",
            B: "Loading full context and demanding 3-5 options WITHOUT expansion",
            C: "Asking for the conclusion first",
            D: "Giving all feedback at once"
          },
          correct: "B",
          explanation: "The brainstorm-iterate loop starts with loading full context and demanding 3-5 options WITHOUT expansion — structure first."
        },
        {
          id: 61,
          question: "Which retrieval mode is FASTEST but limited to training data only?",
          options: {
            A: "Web search mode",
            B: "Deep research mode",
            C: "Code execution mode",
            D: "Pretrained mode"
          },
          correct: "D",
          explanation: "Pretrained mode is fastest but limited to training data only — no live information."
        },
        {
          id: 62,
          question: "\"AI edits overwrite without version history\" is a warning about:",
          options: {
            A: "Context rot",
            B: "Sycophancy",
            C: "AI desktop apps like Cowork/OpenWork",
            D: "Image generation"
          },
          correct: "C",
          explanation: "AI desktop apps like Cowork/OpenWork can overwrite files without version history — deleted files may be gone permanently."
        },
        {
          id: 63,
          question: "Tahir wants current stock market data from today. Which mode will Claude automatically use?",
          options: {
            A: "Pretrained mode",
            B: "Web search mode",
            C: "Deep research mode",
            D: "Code execution mode"
          },
          correct: "B",
          explanation: "Web search mode is automatically triggered for current/recent data requests like today's stock market data."
        },
        {
          id: 64,
          question: "The \"Brainstorm-Iterate Loop most leverage lives in\":",
          options: {
            A: "The final prose editing",
            B: "The structural rounds, not the final prose",
            C: "The first draft",
            D: "The grammar checking stage"
          },
          correct: "B",
          explanation: "Most leverage in the Brainstorm-Iterate Loop lives in the structural rounds, not the final prose editing."
        },
        {
          id: 65,
          question: "For a quick casual email draft, which checking approach is sufficient?",
          options: {
            A: "Full three-model cross-check",
            B: "Multi-model loop",
            C: "Single model plus one self-critique pass",
            D: "No checking needed"
          },
          correct: "C",
          explanation: "For quick casual email drafts, a single model plus one self-critique pass is sufficient."
        },
        {
          id: 66,
          question: "Gemini's integration strength is specifically with:",
          options: {
            A: "Microsoft Office",
            B: "Apple products",
            C: "Google products and services",
            D: "Open-source tools"
          },
          correct: "C",
          explanation: "Gemini's integration strength is specifically with Google products and services."
        },
        {
          id: 67,
          question: "To avoid sycophancy, you should replace \"find evidence that X works\" with:",
          options: {
            A: "\"Prove X is correct\"",
            B: "\"List strongest arguments for AND against X\"",
            C: "\"Confirm X is the best\"",
            D: "\"Don't analyze X\""
          },
          correct: "B",
          explanation: "Replace confirmation-seeking prompts with balanced evaluation: \"List strongest arguments for AND against X.\""
        },
        {
          id: 68,
          question: "What does \"control what goes in\" mean as an advanced AI technique?",
          options: {
            A: "Restrict AI access to the internet",
            B: "Almost all advanced techniques involve managing context — what enters and what stays out",
            C: "Use parental controls on AI",
            D: "Limit prompt length"
          },
          correct: "B",
          explanation: "Almost all advanced AI techniques involve managing context — controlling what enters the context window and what stays out."
        },
        {
          id: 69,
          question: "Image input is STRONG for:",
          options: {
            A: "Counting small items accurately",
            B: "Reading very small fine print",
            C: "Overall composition, large objects, whiteboard content, handwritten text",
            D: "Detailed micro-analysis"
          },
          correct: "C",
          explanation: "Image input is strong for overall composition, large objects, whiteboard content, and handwritten text recognition."
        },
        {
          id: 70,
          question: "What happens if you use vague feedback in the iterate loop instead of rubrics?",
          options: {
            A: "Better, more creative results",
            B: "Faster iteration",
            C: "Vague prompts collapse into praise; named rubrics force actual assessment",
            D: "The model stops responding"
          },
          correct: "C",
          explanation: "Vague prompts collapse into praise and sycophancy; named rubrics force actual assessment and honest evaluation."
        },
        {
          id: 71,
          question: "Ali sends the same complex design prompt to Claude, ChatGPT, and Gemini every month. This habit is:",
          options: {
            A: "Wasteful and unnecessary",
            B: "Correct — monthly cross-testing keeps tooling current as leaders rotate",
            C: "Only useful for coding tasks",
            D: "Against terms of service"
          },
          correct: "B",
          explanation: "Monthly cross-testing keeps tooling current as AI model leaders rotate frequently."
        },
        {
          id: 72,
          question: "The main risk of AI giving confident answers on sparse/niche topics is:",
          options: {
            A: "Slower response times",
            B: "Higher costs",
            C: "Confidence doesn't equal accuracy on under-represented topics",
            D: "Shorter answers"
          },
          correct: "C",
          explanation: "Confidence doesn't equal accuracy — on sparse/niche topics with limited training data, AI may give confident but inaccurate answers."
        },
        {
          id: 73,
          question: "For medical or legal content, cross-model scoring indicates:",
          options: {
            A: "Complete factual accuracy",
            B: "That no experts are needed",
            C: "Craft quality only — human experts remain necessary for factual truth",
            D: "The content is safe to publish"
          },
          correct: "C",
          explanation: "For medical or legal content, cross-model scoring indicates craft quality only — human experts remain necessary for factual truth."
        },
        {
          id: 74,
          question: "The Designer diagram workflow (Claude SVG → PNG → ChatGPT polish) takes approximately:",
          options: {
            A: "Several hours",
            B: "10-15 minutes",
            C: "An entire workday",
            D: "1-2 minutes"
          },
          correct: "B",
          explanation: "The Designer diagram workflow takes approximately 10-15 minutes from SVG generation to polished output."
        },
        {
          id: 75,
          question: "Which foundational principle best summarizes AI Prompting in 2026?",
          options: {
            A: "Use the most expensive model for everything",
            B: "Write shorter prompts for better results",
            C: "Context management, structured briefing, iteration, and cross-model verification drive all advanced outcomes",
            D: "AI works best without human guidance"
          },
          correct: "C",
          explanation: "Context management, structured briefing, iteration, and cross-model verification drive all advanced outcomes in AI Prompting 2026."
        }
      ]
    },
    {
      id: 2,
      title: "Thesis",
      mcqs: [
        {
          id: 1,
          question: "The Agent Factory Thesis claims the most valuable companies in the future will:",
          options: {
            A: "Sell better software subscriptions",
            B: "Manufacture AI employees (Digital FTEs) delivering outcomes at scale",
            C: "Build more physical data centers",
            D: "Train more human employees"
          },
          correct: "B",
          explanation: "The Agent Factory Thesis claims the most valuable companies will manufacture AI employees (Digital FTEs) delivering outcomes at scale."
        },
        {
          id: 2,
          question: "\"You don't buy from these companies. You hire them.\" This describes:",
          options: {
            A: "Traditional SaaS companies",
            B: "HR recruitment firms",
            C: "AI-Native Companies",
            D: "Freelancing platforms"
          },
          correct: "C",
          explanation: "AI-Native Companies are hired, not bought from — they deliver outcomes through AI Workers, not software subscriptions."
        },
        {
          id: 3,
          question: "In the SaaS era, value was measured by:",
          options: {
            A: "Per-outcome results",
            B: "Per-seat subscriptions",
            C: "Number of AI employees",
            D: "Speed of automation"
          },
          correct: "B",
          explanation: "In the SaaS era, value was measured by per-seat subscriptions. The Agent Factory era shifts to per-outcome results."
        },
        {
          id: 4,
          question: "In the Agent Factory era, value is measured by:",
          options: {
            A: "Per-seat subscriptions",
            B: "Software features",
            C: "Per-outcome results",
            D: "Number of human staff"
          },
          correct: "C",
          explanation: "In the Agent Factory era, value is measured by per-outcome results, not per-seat subscriptions."
        },
        {
          id: 5,
          question: "What replaced rigid APIs as the integration standard in the Agent Factory era?",
          options: {
            A: "REST APIs",
            B: "GraphQL",
            C: "Model Context Protocol (MCP)",
            D: "SOAP"
          },
          correct: "C",
          explanation: "Model Context Protocol (MCP) replaced rigid APIs as the integration standard in the Agent Factory era."
        },
        {
          id: 6,
          question: "The human role shifted from \"Operator\" to:",
          options: {
            A: "Developer",
            B: "Manager",
            C: "Supervisor and Verifier",
            D: "Customer"
          },
          correct: "C",
          explanation: "The human role shifted from Operator to Supervisor and Verifier in the Agent Factory paradigm."
        },
        {
          id: 7,
          question: "The Production Engine transforms:",
          options: {
            A: "Software into hardware",
            B: "Intent into deliverables",
            C: "Data into money",
            D: "Employees into robots"
          },
          correct: "B",
          explanation: "The Production Engine transforms intent into deliverables."
        },
        {
          id: 8,
          question: "\"Specs\" in the Agent Factory context means:",
          options: {
            A: "Technical hardware specifications",
            B: "Written instructions for AI Workers",
            C: "Job advertisements",
            D: "Software licenses"
          },
          correct: "B",
          explanation: "Specs are written instructions for AI Workers in the Agent Factory context."
        },
        {
          id: 9,
          question: "The Two-Layer Model consists of:",
          options: {
            A: "Frontend and Backend",
            B: "Cloud and On-premise",
            C: "Edge Layer (personal agents) and AI Workforce Layer (role-based Workers)",
            D: "Hardware and Software"
          },
          correct: "C",
          explanation: "The Two-Layer Model: Edge Layer (personal agents) and AI Workforce Layer (role-based Workers)."
        },
        {
          id: 10,
          question: "Edge Layer agents are responsible for:",
          options: {
            A: "Running heavy computations",
            B: "Translating human intent and delegating to AI Workers",
            C: "Storing company data",
            D: "Billing customers"
          },
          correct: "B",
          explanation: "Edge Layer agents translate human intent and delegate to AI Workers."
        },
        {
          id: 11,
          question: "Mode 1 (Problem-Solving Engagement) is used by:",
          options: {
            A: "Only software engineers",
            B: "Only business executives",
            C: "Domain experts and engineers directing agents to complete work faster",
            D: "Only students"
          },
          correct: "C",
          explanation: "Mode 1 (Problem-Solving Engagement) is used by domain experts and engineers directing agents to complete work faster."
        },
        {
          id: 12,
          question: "Mode 2 (Manufacturing Engagement) always requires:",
          options: {
            A: "Excel spreadsheets",
            B: "Human approval for every step",
            C: "Claude Code/OpenCode because coding is fundamental",
            D: "Special hardware"
          },
          correct: "C",
          explanation: "Mode 2 (Manufacturing Engagement) always requires Claude Code/OpenCode because coding is fundamental to building AI Workers."
        },
        {
          id: 13,
          question: "Mode 2 output becomes:",
          options: {
            A: "A one-time report",
            B: "A persistent AI Worker that joins the workforce running continuously",
            C: "A website",
            D: "A database entry"
          },
          correct: "B",
          explanation: "Mode 2 output becomes a persistent AI Worker that joins the workforce and runs continuously."
        },
        {
          id: 14,
          question: "\"Bash is the Key\" (Principle 1) means:",
          options: {
            A: "Use bash scripting only",
            B: "The agent ACTS and doesn't merely describe",
            C: "All commands must be in lowercase",
            D: "Terminal is the only tool"
          },
          correct: "B",
          explanation: "Bash is the Key means the agent ACTS and doesn't merely describe — it executes real commands."
        },
        {
          id: 15,
          question: "\"Verification as Core Step\" (Principle 3) means:",
          options: {
            A: "Checking spelling only",
            B: "Every output must be checked before shipping",
            C: "Verification is optional for small tasks",
            D: "Only human verification counts"
          },
          correct: "B",
          explanation: "Verification as Core Step means every output must be checked before shipping."
        },
        {
          id: 16,
          question: "\"Small, Reversible Decomposition\" (Principle 4) means:",
          options: {
            A: "Breaking tasks into large chunks",
            B: "Atomic steps and undoable moves",
            C: "Avoiding any file changes",
            D: "Using microservices only"
          },
          correct: "B",
          explanation: "Small, Reversible Decomposition means atomic steps and undoable moves — keep changes small and reversible."
        },
        {
          id: 17,
          question: "\"Persisting State in Files\" (Principle 5) recognizes that:",
          options: {
            A: "Conversations are permanent storage",
            B: "Cloud is always reliable",
            C: "Conversation is volatile; filesystem is durable",
            D: "RAM is the best storage"
          },
          correct: "C",
          explanation: "Persisting State in Files recognizes that conversation is volatile; filesystem is durable."
        },
        {
          id: 18,
          question: "Invariant 1 states that every legitimate chain of action must originate with:",
          options: {
            A: "An AI model",
            B: "A software algorithm",
            C: "A human setting intent, defining budget, and owning outcome",
            D: "A company board decision"
          },
          correct: "C",
          explanation: "Invariant 1 (Human as Principal): every legitimate chain of action must originate with a human setting intent, defining budget, and owning outcome."
        },
        {
          id: 19,
          question: "If Invariant 1 (Human as Principal) is absent, what fails?",
          options: {
            A: "Network connectivity",
            B: "Software performance",
            C: "Accountability, liability, and alignment",
            D: "Cost optimization"
          },
          correct: "C",
          explanation: "Without Invariant 1, accountability, liability, and alignment fail — no one owns the outcome."
        },
        {
          id: 20,
          question: "Invariant 2 states every human needs a:",
          options: {
            A: "Second job",
            B: "Personal delegate — an AI holding context and representing their judgment",
            C: "Cloud subscription",
            D: "Database administrator"
          },
          correct: "B",
          explanation: "Invariant 2: every human needs a personal delegate — an AI holding context and representing their judgment."
        },
        {
          id: 21,
          question: "The current realization of the Personal Delegate (Invariant 2) is:",
          options: {
            A: "ChatGPT",
            B: "Gemini",
            C: "OpenClaw",
            D: "Paperclip"
          },
          correct: "C",
          explanation: "OpenClaw is the current realization of the Personal Delegate (Invariant 2)."
        },
        {
          id: 22,
          question: "If Invariant 2 (Personal Delegate) is absent, what happens?",
          options: {
            A: "AI Workers work harder",
            B: "Costs increase",
            C: "Human becomes the bottleneck; workforce sits idle",
            D: "Security decreases"
          },
          correct: "C",
          explanation: "Without a Personal Delegate, the human becomes the bottleneck and the AI workforce sits idle."
        },
        {
          id: 23,
          question: "Invariant 3 requires a workforce management layer to handle:",
          options: {
            A: "Only billing",
            B: "Only hiring",
            C: "Full workforce lifecycle — hire, assign, enforce budgets, govern permissions, retire workers, maintain ledger",
            D: "Only customer service"
          },
          correct: "C",
          explanation: "Invariant 3 requires full workforce lifecycle management: hire, assign, enforce budgets, govern permissions, retire workers, maintain ledger."
        },
        {
          id: 24,
          question: "The current realization of the Management Layer (Invariant 3) is:",
          options: {
            A: "OpenClaw",
            B: "Inngest",
            C: "Paperclip",
            D: "Dapr"
          },
          correct: "C",
          explanation: "Paperclip is the current realization of the Management Layer (Invariant 3)."
        },
        {
          id: 25,
          question: "Invariant 4 states each Worker should:",
          options: {
            A: "Use the same engine for consistency",
            B: "Use only cloud-based engines",
            C: "Pick its own execution engine matching reliability/cost/operational burden to job demands",
            D: "Use the cheapest engine always"
          },
          correct: "C",
          explanation: "Invariant 4: each Worker picks its own execution engine matching reliability/cost/operational burden to job demands."
        },
        {
          id: 26,
          question: "Which is NOT listed as a current engine realization for Invariant 4?",
          options: {
            A: "Dapr Agents",
            B: "OpenAI Agents SDK",
            C: "WordPress",
            D: "Claude Managed Agents"
          },
          correct: "C",
          explanation: "WordPress is NOT a current engine realization for Invariant 4. The listed ones include Dapr Agents, OpenAI Agents SDK, and Claude Managed Agents."
        },
        {
          id: 27,
          question: "If Invariant 4 (Worker Picks Its Engine) is absent, what happens?",
          options: {
            A: "Workers become more efficient",
            B: "Uniform trade-offs guarantee uniform failure modes",
            C: "Costs decrease",
            D: "Security improves"
          },
          correct: "B",
          explanation: "Without Invariant 4, uniform trade-offs guarantee uniform failure modes across all workers."
        },
        {
          id: 28,
          question: "Invariant 5 (System of Record) requires Workers to:",
          options: {
            A: "Store data in AI memory only",
            B: "Read from and write to an authoritative state store — durable record of company truth",
            C: "Use only cloud storage",
            D: "Avoid databases"
          },
          correct: "B",
          explanation: "Invariant 5: Workers must read from and write to an authoritative state store — the durable record of company truth."
        },
        {
          id: 29,
          question: "If Invariant 5 (System of Record) is absent, what happens?",
          options: {
            A: "Faster performance",
            B: "Better AI reasoning",
            C: "Outputs drift from reality; workers hallucinate facts; inter-session state lost",
            D: "Cost reduction"
          },
          correct: "C",
          explanation: "Without a System of Record, outputs drift from reality, workers hallucinate facts, and inter-session state is lost."
        },
        {
          id: 30,
          question: "Invariant 6 (Workforce Expandable Under Policy) means:",
          options: {
            A: "You can manually add unlimited workers",
            B: "Authorized agents can generate prompts and provision new Workers within the authority envelope",
            C: "Workers can hire humans",
            D: "Policy prevents workforce expansion"
          },
          correct: "B",
          explanation: "Invariant 6: authorized agents can generate prompts and provision new Workers within the authority envelope."
        },
        {
          id: 31,
          question: "If Invariant 6 is absent, what happens?",
          options: {
            A: "Workforce grows too fast",
            B: "Fixed roster; every novel problem requires human intervention; scale frozen",
            C: "Workers become uncontrollable",
            D: "Costs skyrocket"
          },
          correct: "B",
          explanation: "Without Invariant 6: fixed roster, every novel problem requires human intervention, and scale is frozen."
        },
        {
          id: 32,
          question: "Invariant 7 (Nervous System) requires work to:",
          options: {
            A: "Always be routed by humans",
            B: "Propagate between Workers WITHOUT human routing on an event substrate",
            C: "Be processed in sequence only",
            D: "Require manual triggers"
          },
          correct: "B",
          explanation: "Invariant 7: work must propagate between Workers WITHOUT human routing on an event substrate."
        },
        {
          id: 33,
          question: "The current realization of the Nervous System (Invariant 7) is:",
          options: {
            A: "OpenClaw + Paperclip",
            B: "Claude + ChatGPT",
            C: "Inngest + Claude Code Routines",
            D: "MCP + Dapr"
          },
          correct: "C",
          explanation: "Inngest + Claude Code Routines is the current realization of the Nervous System (Invariant 7)."
        },
        {
          id: 34,
          question: "If Invariant 7 (Nervous System) is absent, the system:",
          options: {
            A: "Becomes more secure",
            B: "Runs at human-typing speed; Workers cannot coordinate without human routing",
            C: "Costs less to operate",
            D: "Becomes more scalable"
          },
          correct: "B",
          explanation: "Without Invariant 7, the system runs at human-typing speed and Workers cannot coordinate without human routing."
        },
        {
          id: 35,
          question: "The 10-80-10 rule was inspired by:",
          options: {
            A: "Jeff Bezos's management style",
            B: "Elon Musk's workflow",
            C: "Steve Jobs's management approach",
            D: "Bill Gates's productivity system"
          },
          correct: "C",
          explanation: "The 10-80-10 rule was inspired by Steve Jobs's management approach."
        },
        {
          id: 36,
          question: "In the 10-80-10 rule, the \"First 10%\" represents:",
          options: {
            A: "Quality checking",
            B: "Human intent — defining spec, goals, constraints, budget, permissions",
            C: "Marketing",
            D: "Financial planning"
          },
          correct: "B",
          explanation: "The First 10% represents human intent — defining spec, goals, constraints, budget, and permissions."
        },
        {
          id: 37,
          question: "In the 10-80-10 rule, the \"Middle 80%\" represents:",
          options: {
            A: "Human execution",
            B: "Planning and design",
            C: "AI Workers executing, composing tools, spawning sub-agents",
            D: "Customer feedback"
          },
          correct: "C",
          explanation: "The Middle 80% represents AI Workers executing, composing tools, and spawning sub-agents."
        },
        {
          id: 38,
          question: "In the 10-80-10 rule, the \"Final 10%\" represents:",
          options: {
            A: "AI model training",
            B: "Marketing campaigns",
            C: "Human reviewing, refining, and approving verified outcomes",
            D: "Data storage"
          },
          correct: "C",
          explanation: "The Final 10% represents human reviewing, refining, and approving verified outcomes."
        },
        {
          id: 39,
          question: "As of February 2026, Cursor reported what percentage of merged pull requests produced by autonomous agents?",
          options: {
            A: "5%",
            B: "15%",
            C: "25%",
            D: "35%"
          },
          correct: "D",
          explanation: "Cursor reported 35% of merged pull requests were produced by autonomous agents as of February 2026."
        },
        {
          id: 40,
          question: "What four payment protocols enable AI agents as autonomous buyers?",
          options: {
            A: "PayPal, Stripe, Visa, Mastercard",
            B: "ACP, AP2, x402, MPP",
            C: "Bitcoin, Ethereum, Solana, USDC",
            D: "SWIFT, ACH, Wire, Check"
          },
          correct: "B",
          explanation: "The four payment protocols for AI agents: ACP, AP2, x402, and MPP."
        },
        {
          id: 41,
          question: "ACP payment protocol is associated with:",
          options: {
            A: "Google + Apple",
            B: "OpenAI + Stripe",
            C: "Coinbase + Meta",
            D: "Microsoft + Amazon"
          },
          correct: "B",
          explanation: "ACP payment protocol is associated with OpenAI + Stripe."
        },
        {
          id: 42,
          question: "The x402 payment protocol is:",
          options: {
            A: "Microsoft's standard",
            B: "Apple's payment system",
            C: "Crypto-native; Coinbase-developed; Stripe integrated early 2026",
            D: "Government-issued digital currency"
          },
          correct: "C",
          explanation: "x402 is crypto-native, Coinbase-developed, and Stripe integrated it in early 2026."
        },
        {
          id: 43,
          question: "MPP (Micropayment Protocol) by Stripe/Tempo enables:",
          options: {
            A: "Lump sum annual payments",
            B: "Micropayment streaming — pennies per second under preset cap",
            C: "Monthly billing only",
            D: "Cryptocurrency only payments"
          },
          correct: "B",
          explanation: "MPP enables micropayment streaming — pennies per second under a preset cap."
        },
        {
          id: 44,
          question: "By 2030, how many of every 100 global workers require reskilling/upskilling?",
          options: {
            A: "25",
            B: "40",
            C: "59",
            D: "75"
          },
          correct: "C",
          explanation: "By 2030, 59 of every 100 global workers require reskilling/upskilling."
        },
        {
          id: 45,
          question: "In 2026 US construction spending data:",
          options: {
            A: "Office construction exceeded data center construction",
            B: "Both office and data center construction declined",
            C: "Data center construction surged to $42B, crossing office construction",
            D: "No change in construction patterns"
          },
          correct: "C",
          explanation: "Data center construction surged to $42B, crossing office construction in 2026 US construction spending."
        },
        {
          id: 46,
          question: "Meta, Google, Amazon, Microsoft projected AI infrastructure spending for 2026 at:",
          options: {
            A: "$60 billion",
            B: "$200 billion",
            C: "$600 billion+",
            D: "$1 trillion"
          },
          correct: "C",
          explanation: "Meta, Google, Amazon, Microsoft projected $600 billion+ in AI infrastructure spending for 2026."
        },
        {
          id: 47,
          question: "\"Agent Factory\" refers to:",
          options: {
            A: "The output — the enterprise staffed by AI Workers",
            B: "The AI Workers themselves",
            C: "The process — spec-driven, human-supervised, agent-tool-powered method",
            D: "The management layer software"
          },
          correct: "C",
          explanation: "Agent Factory refers to the process — spec-driven, human-supervised, agent-tool-powered method of building AI Workers."
        },
        {
          id: 48,
          question: "\"AI-Native Company\" refers to:",
          options: {
            A: "The process of building AI Workers",
            B: "The enterprise staffed by AI Workers, coordinated, human-directed",
            C: "The execution engine",
            D: "The system of record"
          },
          correct: "B",
          explanation: "AI-Native Company refers to the enterprise staffed by AI Workers, coordinated and human-directed."
        },
        {
          id: 49,
          question: "\"Digital FTEs\" is another term for:",
          options: {
            A: "Freelance human workers",
            B: "Database tables",
            C: "AI Workers",
            D: "Software licenses"
          },
          correct: "C",
          explanation: "Digital FTEs (Full-Time Equivalents) is another term for AI Workers."
        },
        {
          id: 50,
          question: "\"Engagement\" in the Agent Factory vocabulary means:",
          options: {
            A: "Employee engagement surveys",
            B: "Marketing engagement metrics",
            C: "A single bounded human-agent interaction",
            D: "Long-term employment contracts"
          },
          correct: "C",
          explanation: "Engagement means a single bounded human-agent interaction in the Agent Factory vocabulary."
        },
        {
          id: 51,
          question: "The \"invariants vs. implementations\" distinction means:",
          options: {
            A: "Both change frequently with technology",
            B: "Neither ever changes",
            C: "Invariants are structural requirements that stay true; implementations are concrete 2026 products that can be swapped",
            D: "Invariants change; implementations stay fixed"
          },
          correct: "C",
          explanation: "Invariants are structural requirements that stay true; implementations are concrete 2026 products that can be swapped."
        },
        {
          id: 52,
          question: "Which elements are considered STABLE in the thesis?",
          options: {
            A: "Authoring tools and SDK vendors",
            B: "Human principal, personal delegate, management layer, per-Worker engine choice, authoritative state",
            C: "Pricing units and payment rails",
            D: "Delegate products and management-layer vendors"
          },
          correct: "B",
          explanation: "Stable elements: human principal, personal delegate, management layer, per-Worker engine choice, authoritative state."
        },
        {
          id: 53,
          question: "Which elements WILL CHANGE according to the thesis?",
          options: {
            A: "Human principal requirement",
            B: "Need for a system of record",
            C: "Authoring tools, delegate products, SDKs, database engines, payment rails",
            D: "The need for a nervous system"
          },
          correct: "C",
          explanation: "Elements that will change: authoring tools, delegate products, SDKs, database engines, payment rails."
        },
        {
          id: 54,
          question: "Human allocation in the new era is:",
          options: {
            A: "80% execution, 10% intent, 10% verification",
            B: "100% on AI management",
            C: "10% intent setting, 80% by AI agents, 10% verification",
            D: "50% execution, 50% verification"
          },
          correct: "C",
          explanation: "Human allocation: 10% intent setting, 80% by AI agents, 10% verification (the 10-80-10 rule)."
        },
        {
          id: 55,
          question: "Single-digit headcount firms reporting billion-dollar revenue in mid-2026 indicates:",
          options: {
            A: "Venture capital fraud",
            B: "AI-operated workforces enabling small teams to achieve massive scale",
            C: "Monopolistic practices",
            D: "Government subsidies"
          },
          correct: "B",
          explanation: "Single-digit headcount firms with billion-dollar revenue indicate AI-operated workforces enabling small teams to achieve massive scale."
        },
        {
          id: 56,
          question: "GTM (Go-To-Market) functions with AI manufacturing potential include:",
          options: {
            A: "Physical product delivery",
            B: "Lead enrichment, outreach sequencing, CRM hygiene, pipeline analysis, proposal generation",
            C: "Building physical infrastructure",
            D: "Legal compliance only"
          },
          correct: "B",
          explanation: "GTM functions with AI manufacturing potential: lead enrichment, outreach sequencing, CRM hygiene, pipeline analysis, proposal generation."
        },
        {
          id: 57,
          question: "The future trajectory of \"Physical AI Workers\" extends the factory architecture to:",
          options: {
            A: "Virtual reality only",
            B: "Software applications only",
            C: "Embodied workers — robots, autonomous vehicles, factory machines",
            D: "Cloud computing only"
          },
          correct: "C",
          explanation: "Physical AI Workers extend the factory architecture to embodied workers — robots, autonomous vehicles, factory machines."
        },
        {
          id: 58,
          question: "\"Cross-Company Workforce Mobility\" describes a future where AI Workers:",
          options: {
            A: "Are permanently assigned to one company",
            B: "Cannot be transferred",
            C: "Become portable — hired into one company, transferred to another, possibly working for multiple firms",
            D: "Only work in manufacturing"
          },
          correct: "C",
          explanation: "Cross-Company Workforce Mobility: AI Workers become portable — hired into one company, transferred to another, possibly working for multiple firms."
        },
        {
          id: 59,
          question: "A hyperscale AI facility requires how much copper?",
          options: {
            A: "500 tons",
            B: "5,000 tons",
            C: "Up to 50,000 tons (10x conventional data center)",
            D: "500,000 tons"
          },
          correct: "C",
          explanation: "A hyperscale AI facility requires up to 50,000 tons of copper — 10x a conventional data center."
        },
        {
          id: 60,
          question: "The Cursor CEO's Feb 2026 pivot described moving from:",
          options: {
            A: "Hardware to software",
            B: "Mobile to desktop",
            C: "IDE to factory; humans defining problems + reviewing artifacts; fleets of agents as teammates",
            D: "Consumer to enterprise"
          },
          correct: "C",
          explanation: "The Cursor CEO described moving from IDE to factory: humans defining problems + reviewing artifacts, with fleets of agents as teammates."
        },
        {
          id: 61,
          question: "\"Code as Universal Interface\" (Principle 2) means:",
          options: {
            A: "Only use Python",
            B: "Avoid natural language with AI",
            C: "Precision through structured formats — schemas, tables, code blocks",
            D: "Write documentation in code comments only"
          },
          correct: "C",
          explanation: "Code as Universal Interface means precision through structured formats — schemas, tables, code blocks."
        },
        {
          id: 62,
          question: "\"Observability\" (Principle 7) in agent problem-solving means:",
          options: {
            A: "Privacy monitoring",
            B: "Full visibility into agent actions",
            C: "Customer analytics",
            D: "Market observation"
          },
          correct: "B",
          explanation: "Observability means full visibility into agent actions for debugging and quality assurance."
        },
        {
          id: 63,
          question: "Which business function has AI manufacturing potential for \"triage, resolution, escalation\"?",
          options: {
            A: "Finance",
            B: "HR",
            C: "Support",
            D: "Legal"
          },
          correct: "C",
          explanation: "Support has AI manufacturing potential for triage, resolution, and escalation."
        },
        {
          id: 64,
          question: "Which business function has AI manufacturing potential for \"review, redline, intake\"?",
          options: {
            A: "Engineering",
            B: "GTM",
            C: "Support",
            D: "Legal"
          },
          correct: "D",
          explanation: "Legal has AI manufacturing potential for review, redline, and intake."
        },
        {
          id: 65,
          question: "The Day AI CRM founding engineer described Inngest as the:",
          options: {
            A: "Database of the product",
            B: "Frontend interface",
            C: "\"Nervous system\" of their production AI-native product",
            D: "Authentication layer"
          },
          correct: "C",
          explanation: "The Day AI CRM founding engineer described Inngest as the 'nervous system' of their production AI-native product."
        },
        {
          id: 66,
          question: "\"AP2\" payment protocol is associated with:",
          options: {
            A: "OpenAI",
            B: "Coinbase",
            C: "Google",
            D: "Stripe"
          },
          correct: "C",
          explanation: "AP2 payment protocol is associated with Google."
        },
        {
          id: 67,
          question: "AP2 uses which security mechanism?",
          options: {
            A: "Username and password",
            B: "SMS verification",
            C: "Cryptographically signed mandates",
            D: "Biometric scanning"
          },
          correct: "C",
          explanation: "AP2 uses cryptographically signed mandates for security."
        },
        {
          id: 68,
          question: "The thesis states \"why pairing outperforms solo work\":",
          options: {
            A: "AI alone always beats humans",
            B: "Humans alone are always superior",
            C: "For most tasks, AI paired with human exceeds either working alone",
            D: "Pairing is only for complex tasks"
          },
          correct: "C",
          explanation: "For most tasks, AI paired with human exceeds either working alone — the power of human-AI collaboration."
        },
        {
          id: 69,
          question: "Developer evolution according to the thesis transforms from:",
          options: {
            A: "Manager to programmer",
            B: "React/Swift coder to Technology expert designing, deploying, supervising AI Workers",
            C: "Programmer to data scientist",
            D: "Frontend to backend"
          },
          correct: "B",
          explanation: "Developer evolution: from React/Swift coder to Technology expert designing, deploying, and supervising AI Workers."
        },
        {
          id: 70,
          question: "\"Skills\" in the Agent Factory Production Engine refers to:",
          options: {
            A: "Human soft skills",
            B: "Packaged abilities in Agent Skills format (agentskills.io)",
            C: "Training course certifications",
            D: "Software documentation"
          },
          correct: "B",
          explanation: "Skills are packaged abilities in Agent Skills format (agentskills.io) in the Agent Factory Production Engine."
        },
        {
          id: 71,
          question: "The New Stack (May 2026) industry consensus stated:",
          options: {
            A: "Hardware is becoming the product",
            B: "Human labor is becoming the product",
            C: "The model is becoming commodity; the harness is becoming the product",
            D: "Cloud is becoming irrelevant"
          },
          correct: "C",
          explanation: "Industry consensus: the model is becoming commodity; the harness is becoming the product."
        },
        {
          id: 72,
          question: "\"Fully Autonomous Economic Agents\" future trajectory describes AI Workers that:",
          options: {
            A: "Work only when told",
            B: "Remain tools forever",
            C: "Gain durable identity, payment rails, reputation, contractual capacity — becoming independent economic actors",
            D: "Are controlled by government"
          },
          correct: "C",
          explanation: "Fully Autonomous Economic Agents gain durable identity, payment rails, reputation, and contractual capacity — becoming independent economic actors."
        },
        {
          id: 73,
          question: "The System of Record (Invariant 5) is accessed via:",
          options: {
            A: "Direct API calls only",
            B: "Email",
            C: "MCP servers",
            D: "Web browsers"
          },
          correct: "C",
          explanation: "The System of Record (Invariant 5) is accessed via MCP servers."
        },
        {
          id: 74,
          question: "Invariant 6's current realization uses which technology?",
          options: {
            A: "OpenClaw",
            B: "Inngest",
            C: "Paperclip",
            D: "Claude Managed Agents"
          },
          correct: "D",
          explanation: "Claude Managed Agents is the current realization of Invariant 6 (Workforce Expandable Under Policy)."
        },
        {
          id: 75,
          question: "A company uses the same execution engine for all its AI Workers regardless of task complexity. Which invariant are they violating?",
          options: {
            A: "Invariant 1",
            B: "Invariant 2",
            C: "Invariant 3",
            D: "Invariant 4"
          },
          correct: "D",
          explanation: "Violating Invariant 4 (Worker Picks Its Engine) — each worker should pick its own engine matching requirements."
        }
      ]
    },
    {
      id: 3,
      title: "Getting Started Overview",
      mcqs: [
        {
          id: 1,
          question: "The Getting Started Overview's core philosophy is:",
          options: {
            A: "Study everything exhaustively before starting",
            B: "Cover critical 80%, get working, let the rest fill in through real use",
            C: "Complete all 19 courses before any practical work",
            D: "Focus only on theory first"
          },
          correct: "B",
          explanation: "Core philosophy: cover critical 80%, get working, let the rest fill in through real use."
        },
        {
          id: 2,
          question: "According to the timeline, when can you achieve \"productive basics\"?",
          options: {
            A: "After 1 month",
            B: "After 1 weekend",
            C: "After ~6 hours (Foundations + one mode course)",
            D: "After 3 months"
          },
          correct: "C",
          explanation: "Productive basics are achievable in ~6 hours (Foundations + one mode course)."
        },
        {
          id: 3,
          question: "When can you deploy your \"First Digital FTE\"?",
          options: {
            A: "After 6 hours",
            B: "After ~1 weekend (Courses 7-9)",
            C: "After 1 year of study",
            D: "After completing all 19 courses"
          },
          correct: "B",
          explanation: "First Digital FTE can be deployed after ~1 weekend (Courses 7-9)."
        },
        {
          id: 4,
          question: "\"Full stack fluency\" is achievable in:",
          options: {
            A: "6 hours",
            B: "1 weekend",
            C: "~1 month of focused evenings",
            D: "6 months minimum"
          },
          correct: "C",
          explanation: "Full stack fluency is achievable in ~1 month of focused evenings."
        },
        {
          id: 5,
          question: "The Three-Layer Mental Model for work in the AI era consists of:",
          options: {
            A: "Frontend, Backend, Database",
            B: "General agents, AI Workers (Digital FTEs), AI-Native Companies",
            C: "Plan, Execute, Review",
            D: "Learn, Practice, Master"
          },
          correct: "B",
          explanation: "Three-Layer Mental Model: General agents, AI Workers (Digital FTEs), AI-Native Companies."
        },
        {
          id: 6,
          question: "What do \"General Agents\" do in the three-layer model?",
          options: {
            A: "Execute specialized jobs",
            B: "Assemble AI Workers into companies",
            C: "Solve problems",
            D: "Handle billing"
          },
          correct: "C",
          explanation: "General Agents solve problems in the three-layer model."
        },
        {
          id: 7,
          question: "What do \"AI Workers (Digital FTEs)\" do in the three-layer model?",
          options: {
            A: "Solve general problems",
            B: "Assemble other workers",
            C: "Execute specialized jobs",
            D: "Set strategy"
          },
          correct: "C",
          explanation: "AI Workers (Digital FTEs) execute specialized jobs in the three-layer model."
        },
        {
          id: 8,
          question: "What do \"AI-Native Companies\" do in the three-layer model?",
          options: {
            A: "Solve individual problems",
            B: "Execute specialized jobs",
            C: "Assemble AI Workers into coordinated systems",
            D: "Train AI models"
          },
          correct: "C",
          explanation: "AI-Native Companies assemble AI Workers into coordinated systems."
        },
        {
          id: 9,
          question: "Mode 1 (Problem-Solving) targets which users?",
          options: {
            A: "Only software engineers",
            B: "Knowledge workers and engineers using Claude Code, OpenCode, Cowork, or OpenWork",
            C: "Only business executives",
            D: "Only students"
          },
          correct: "B",
          explanation: "Mode 1 targets knowledge workers and engineers using Claude Code, OpenCode, Cowork, or OpenWork."
        },
        {
          id: 10,
          question: "Mode 2 (Manufacturing) targets which users?",
          options: {
            A: "Only knowledge workers",
            B: "Non-technical business users",
            C: "Engineers and paired professionals creating specialized autonomous systems",
            D: "Only data scientists"
          },
          correct: "C",
          explanation: "Mode 2 targets engineers and paired professionals creating specialized autonomous systems."
        },
        {
          id: 11,
          question: "Which courses are REQUIRED for ALL students (Foundations)?",
          options: {
            A: "Courses 1-5",
            B: "Courses 7-9",
            C: "Courses 1-2: AI Prompting in 2026 + How to Think in the AI Era",
            D: "Course 13 only"
          },
          correct: "C",
          explanation: "Courses 1-2 (AI Prompting in 2026 + How to Think in the AI Era) are required for ALL students."
        },
        {
          id: 12,
          question: "Course 1 (AI Prompting in 2026) takes approximately:",
          options: {
            A: "10 minutes",
            B: "45 minutes",
            C: "3 hours",
            D: "1 full day"
          },
          correct: "B",
          explanation: "Course 1 (AI Prompting in 2026) takes approximately 45 minutes."
        },
        {
          id: 13,
          question: "The Agentic Coding Crash Course (Course 3) covers:",
          options: {
            A: "Python programming from scratch",
            B: "Claude Code/OpenCode fundamentals",
            C: "Machine learning basics",
            D: "Web development"
          },
          correct: "B",
          explanation: "The Agentic Coding Crash Course (Course 3) covers Claude Code/OpenCode fundamentals."
        },
        {
          id: 14,
          question: "The Cowork Crash Course (Course 4) covers:",
          options: {
            A: "Software development",
            B: "Desktop knowledge work delegation",
            C: "Cloud deployment",
            D: "Database management"
          },
          correct: "B",
          explanation: "The Cowork Crash Course (Course 4) covers desktop knowledge work delegation."
        },
        {
          id: 15,
          question: "Problem-Solving Principles (Course 5) teaches:",
          options: {
            A: "Marketing strategies",
            B: "Seven operating disciplines across all agent tools",
            C: "Data science methods",
            D: "Hardware configuration"
          },
          correct: "B",
          explanation: "Problem-Solving Principles (Course 5) teaches seven operating disciplines across all agent tools."
        },
        {
          id: 16,
          question: "OpenClaw with General Agents (Course 6) teaches:",
          options: {
            A: "Coding from scratch",
            B: "Personal AI Employee deployment",
            C: "Managing a team of humans",
            D: "Cloud infrastructure"
          },
          correct: "B",
          explanation: "OpenClaw with General Agents (Course 6) teaches Personal AI Employee deployment."
        },
        {
          id: 17,
          question: "The Mode 2 Manufacturing Pathway consists of how many courses?",
          options: {
            A: "3 courses",
            B: "5 courses",
            C: "7 courses",
            D: "10 courses"
          },
          correct: "C",
          explanation: "The Mode 2 Manufacturing Pathway consists of 7 courses."
        },
        {
          id: 18,
          question: "Build AI Agents (Course 7) covers:",
          options: {
            A: "Advanced machine learning",
            B: "OpenAI Agents SDK essentials",
            C: "Cloud deployment architecture",
            D: "Business strategy"
          },
          correct: "B",
          explanation: "Build AI Agents (Course 7) covers OpenAI Agents SDK essentials."
        },
        {
          id: 19,
          question: "Agent to Digital FTE (Course 8) takes approximately:",
          options: {
            A: "45 minutes",
            B: "90 minutes",
            C: "4 hours",
            D: "1 week"
          },
          correct: "C",
          explanation: "Agent to Digital FTE (Course 8) takes approximately 4 hours."
        },
        {
          id: 20,
          question: "Course 8 covers:",
          options: {
            A: "Basic prompting",
            B: "Durable Worker construction with Skills, Postgres, MCP protocol",
            C: "Marketing automation",
            D: "Data visualization"
          },
          correct: "B",
          explanation: "Course 8 covers durable Worker construction with Skills, Postgres, and MCP protocol."
        },
        {
          id: 21,
          question: "Worker Nervous System (Course 9) covers:",
          options: {
            A: "Human resources management",
            B: "Inngest operational envelope — durable execution, events, approval gates",
            C: "Network infrastructure",
            D: "Customer relationship management"
          },
          correct: "B",
          explanation: "Worker Nervous System (Course 9) covers Inngest operational envelope — durable execution, events, and approval gates."
        },
        {
          id: 22,
          question: "Paperclip Workforce (Course 10) covers:",
          options: {
            A: "Office supplies management",
            B: "AI-native company control plane, audited decisions, budget metering",
            C: "Physical manufacturing",
            D: "Financial accounting"
          },
          correct: "B",
          explanation: "Paperclip Workforce (Course 10) covers AI-native company control plane, audited decisions, and budget metering."
        },
        {
          id: 23,
          question: "Dynamic Workforce (Course 11) teaches:",
          options: {
            A: "Hiring human employees",
            B: "Static workforce management",
            C: "Self-expanding teams detecting capability gaps",
            D: "Reducing workforce size"
          },
          correct: "C",
          explanation: "Dynamic Workforce (Course 11) teaches self-expanding teams detecting capability gaps."
        },
        {
          id: 24,
          question: "Owner Delegate (Course 12) teaches:",
          options: {
            A: "Legal ownership structures",
            B: "Identic AI removing founder bottlenecks",
            C: "Financial planning",
            D: "Marketing strategy"
          },
          correct: "B",
          explanation: "Owner Delegate (Course 12) teaches Identic AI removing founder bottlenecks."
        },
        {
          id: 25,
          question: "Eval-Driven Development (Course 13) teaches:",
          options: {
            A: "Traditional software testing",
            B: "Nine-layer evaluation pyramid and trustworthiness measurement",
            C: "User interface design",
            D: "Database optimization"
          },
          correct: "B",
          explanation: "Eval-Driven Development (Course 13) teaches the nine-layer evaluation pyramid and trustworthiness measurement."
        },
        {
          id: 26,
          question: "Cloud Deployment (Course 14) covers:",
          options: {
            A: "Physical server management",
            B: "Production harness architecture, FastAPI/Azure, Postgres, R2 storage, observability",
            C: "Mobile app development",
            D: "Desktop software distribution"
          },
          correct: "B",
          explanation: "Cloud Deployment (Course 14) covers production harness architecture, FastAPI/Azure, Postgres, R2 storage, and observability."
        },
        {
          id: 27,
          question: "Agentic Architecture Selection (Course 15) uses:",
          options: {
            A: "Random selection",
            B: "Cost comparison only",
            C: "Five-question pattern-matching framework",
            D: "Vendor recommendations only"
          },
          correct: "C",
          explanation: "Agentic Architecture Selection (Course 15) uses a five-question pattern-matching framework."
        },
        {
          id: 28,
          question: "Payment-Enabled Agents (Course 16) covers:",
          options: {
            A: "Traditional banking APIs",
            B: "ACP, AP2, x402, MPP protocols for agent commerce",
            C: "Human payroll systems",
            D: "Tax compliance"
          },
          correct: "B",
          explanation: "Payment-Enabled Agents (Course 16) covers ACP, AP2, x402, and MPP protocols for agent commerce."
        },
        {
          id: 29,
          question: "The recommended starter pathway for Absolute Beginners is:",
          options: {
            A: "Courses 7-9 first",
            B: "Thesis → Courses 1-2",
            C: "Start with Course 13",
            D: "Cloud Deployment first"
          },
          correct: "B",
          explanation: "Recommended for Absolute Beginners: Thesis → Courses 1-2."
        },
        {
          id: 30,
          question: "The recommended pathway for Knowledge Workers is:",
          options: {
            A: "Thesis only",
            B: "Foundations → Cowork → Problem-Solving Principles",
            C: "Engineering path + Paperclip",
            D: "Start with Course 7"
          },
          correct: "B",
          explanation: "Knowledge Workers: Foundations → Cowork → Problem-Solving Principles."
        },
        {
          id: 31,
          question: "The recommended pathway for Engineers is:",
          options: {
            A: "Thesis → Courses 1-2 only",
            B: "Foundations → Cowork only",
            C: "Foundations → Claude Code → Build Agents → Digital FTE",
            D: "Start directly with Cloud Deployment"
          },
          correct: "C",
          explanation: "Engineers: Foundations → Claude Code → Build Agents → Digital FTE."
        },
        {
          id: 32,
          question: "The recommended pathway for Workforce Builders is:",
          options: {
            A: "Foundations only",
            B: "Knowledge Worker path only",
            C: "Engineer path + Paperclip → Evals → Cloud Deployment",
            D: "Thesis only"
          },
          correct: "C",
          explanation: "Workforce Builders: Engineer path + Paperclip → Evals → Cloud Deployment."
        },
        {
          id: 33,
          question: "The Fastest Path to First Digital FTE requires approximately:",
          options: {
            A: "6 hours",
            B: "12 hours",
            C: "40 hours",
            D: "3 months"
          },
          correct: "B",
          explanation: "The Fastest Path to First Digital FTE requires approximately 12 hours."
        },
        {
          id: 34,
          question: "The Fastest Path to First Digital FTE includes:",
          options: {
            A: "All 19 courses",
            B: "Foundations + Courses 3, 7, 8, and 13 (Reader track)",
            C: "Courses 1-5 only",
            D: "Mode 1 pathway only"
          },
          correct: "B",
          explanation: "Fastest path includes Foundations + Courses 3, 7, 8, and 13 (Reader track)."
        },
        {
          id: 35,
          question: "What is the stated outcome upon completing the full program?",
          options: {
            A: "Theoretical knowledge of AI concepts",
            B: "A certificate without practical skills",
            C: "A working AI workforce — operational systems including Digital FTEs, approval systems, and trustworthiness verification",
            D: "Basic prompting skills only"
          },
          correct: "C",
          explanation: "Full program outcome: a working AI workforce — operational systems including Digital FTEs, approval systems, and trustworthiness verification."
        },
        {
          id: 36,
          question: "The Getting Started Overview recommends reading the thesis first because:",
          options: {
            A: "It is shortest",
            B: "It is a required exam topic",
            C: "It provides the foundational mental model for the entire program",
            D: "It's the easiest section"
          },
          correct: "C",
          explanation: "The thesis provides the foundational mental model for the entire program."
        },
        {
          id: 37,
          question: "\"Foundations + one mode course\" in ~6 hours refers to:",
          options: {
            A: "Completing the full certification",
            B: "Reaching productive basics to start working with AI effectively",
            C: "Mastering all concepts",
            D: "Building your first company"
          },
          correct: "B",
          explanation: "Foundations + one mode course in ~6 hours gives productive basics to start working with AI effectively."
        },
        {
          id: 38,
          question: "Course 17 is described as:",
          options: {
            A: "Payment protocols",
            B: "Cloud deployment",
            C: "Tool-matching guide for 2026",
            D: "Evaluation framework"
          },
          correct: "C",
          explanation: "Course 17 is a tool-matching guide for 2026."
        },
        {
          id: 39,
          question: "Course 18 offers:",
          options: {
            A: "Video lectures",
            B: "Live coaching",
            C: "Interactive cheatsheets",
            D: "Written textbooks"
          },
          correct: "C",
          explanation: "Course 18 offers interactive cheatsheets."
        },
        {
          id: 40,
          question: "Course 19 (Agentic Engineering Fundamentals) takes:",
          options: {
            A: "3 hours",
            B: "45 minutes",
            C: "1 day",
            D: "1 week"
          },
          correct: "B",
          explanation: "Course 19 (Agentic Engineering Fundamentals) takes 45 minutes."
        },
        {
          id: 41,
          question: "A student wants to use AI to do their daily work faster without building AI systems. Which pathway is right?",
          options: {
            A: "Workforce Builder pathway",
            B: "Engineer pathway",
            C: "Knowledge Worker pathway",
            D: "Mode 2 Manufacturing pathway"
          },
          correct: "C",
          explanation: "Knowledge Worker pathway is for using AI to do daily work faster without building AI systems."
        },
        {
          id: 42,
          question: "An engineer wants to build autonomous AI systems that run without human intervention. Which pathway is right?",
          options: {
            A: "Absolute Beginner pathway",
            B: "Knowledge Worker pathway",
            C: "Engineer → Workforce Builder pathway",
            D: "Thesis only"
          },
          correct: "C",
          explanation: "Engineer → Workforce Builder pathway for building autonomous AI systems."
        },
        {
          id: 43,
          question: "The Foundations are required for ALL learners because:",
          options: {
            A: "They are the cheapest courses",
            B: "They form the baseline mental model and practical skills every path builds upon",
            C: "They are the longest courses",
            D: "They are the most entertaining"
          },
          correct: "B",
          explanation: "Foundations form the baseline mental model and practical skills every path builds upon."
        },
        {
          id: 44,
          question: "\"Let the rest fill in through real use\" reflects which learning philosophy?",
          options: {
            A: "Exhaustive front-loaded theoretical study",
            B: "Random learning without structure",
            C: "Applied, practical learning where proficiency grows through doing",
            D: "Memorization-based learning"
          },
          correct: "C",
          explanation: "Applied, practical learning where proficiency grows through doing."
        },
        {
          id: 45,
          question: "Which course specifically covers \"approval gates\" for AI Workers?",
          options: {
            A: "Course 7 (Build AI Agents)",
            B: "Course 9 (Worker Nervous System)",
            C: "Course 12 (Owner Delegate)",
            D: "Course 15 (Architecture Selection)"
          },
          correct: "B",
          explanation: "Course 9 (Worker Nervous System) specifically covers approval gates for AI Workers."
        },
        {
          id: 46,
          question: "\"Budget metering\" for AI Workers is covered in:",
          options: {
            A: "Course 7",
            B: "Course 8",
            C: "Course 9",
            D: "Course 10"
          },
          correct: "D",
          explanation: "Budget metering for AI Workers is covered in Course 10 (Paperclip Workforce)."
        },
        {
          id: 47,
          question: "Which course removes \"founder bottlenecks\"?",
          options: {
            A: "Course 9",
            B: "Course 10",
            C: "Course 12",
            D: "Course 14"
          },
          correct: "C",
          explanation: "Course 12 (Owner Delegate) removes founder bottlenecks using Identic AI."
        },
        {
          id: 48,
          question: "The Mode 2 pathway is for engineers who want to:",
          options: {
            A: "Use AI tools as an end user",
            B: "Create specialized AI systems that execute work autonomously",
            C: "Learn basic prompting",
            D: "Read about AI trends"
          },
          correct: "B",
          explanation: "Mode 2 pathway is for engineers who want to create specialized AI systems that execute work autonomously."
        },
        {
          id: 49,
          question: "\"Eval-Driven Development\" at Course 13 Reader track takes:",
          options: {
            A: "45 minutes",
            B: "90 minutes",
            C: "3-5 days",
            D: "2 weeks"
          },
          correct: "C",
          explanation: "Eval-Driven Development at Course 13 Reader track takes 3-5 days."
        },
        {
          id: 50,
          question: "The Getting Started Overview states the program emphasis is on:",
          options: {
            A: "Only theory and academic knowledge",
            B: "Credentials and certifications without skills",
            C: "Not theoretical knowledge but operational systems — \"shipped working AI workforce\"",
            D: "Long study periods before any practical work"
          },
          correct: "C",
          explanation: "The program emphasis is on operational systems — 'shipped working AI workforce', not just theory."
        },
        {
          id: 51,
          question: "Course 2 (How to Think in the AI Era) status in the curriculum is:",
          options: {
            A: "Completed and available",
            B: "Developing",
            C: "Deprecated",
            D: "Only for advanced students"
          },
          correct: "B",
          explanation: "Course 2 (How to Think in the AI Era) is currently in developing status."
        },
        {
          id: 52,
          question: "A knowledge worker completes Foundations and wants the next step. They should take:",
          options: {
            A: "Course 7 (Build AI Agents)",
            B: "Course 4 (Cowork Crash Course)",
            C: "Course 13 (Evals)",
            D: "Course 16 (Payment Agents)"
          },
          correct: "B",
          explanation: "After Foundations, knowledge workers should take Course 4 (Cowork Crash Course)."
        },
        {
          id: 53,
          question: "The program's learning philosophy is BEST described as:",
          options: {
            A: "\"Study everything before touching anything\"",
            B: "\"Theory before practice always\"",
            C: "\"Rapid practical learning — 80% coverage → working → reference as needed\"",
            D: "\"Certification before skill-building\""
          },
          correct: "C",
          explanation: "Learning philosophy: rapid practical learning — 80% coverage → working → reference as needed."
        },
        {
          id: 54,
          question: "What makes the Getting Started Overview unique compared to traditional tech education?",
          options: {
            A: "It requires more prerequisites",
            B: "It starts with payment systems",
            C: "Learners graduate having SHIPPED operational AI systems, not just studied concepts",
            D: "It focuses on hardware"
          },
          correct: "C",
          explanation: "Unique: learners graduate having SHIPPED operational AI systems, not just studied concepts."
        },
        {
          id: 55,
          question: "Which comparison describes the Getting Started approach to learning curves?",
          options: {
            A: "Front-load everything, then practice",
            B: "Cover critical 80% quickly, achieve results, fill remaining 20% through use",
            C: "Master 100% before starting",
            D: "Focus on 10% core concepts only"
          },
          correct: "B",
          explanation: "Cover critical 80% quickly, achieve results, fill remaining 20% through use."
        },
        {
          id: 56,
          question: "The Cowork Crash Course (Course 4) duration is:",
          options: {
            A: "45 minutes",
            B: "90 minutes",
            C: "4 hours",
            D: "1 day"
          },
          correct: "B",
          explanation: "The Cowork Crash Course (Course 4) takes 90 minutes."
        },
        {
          id: 57,
          question: "Problem-Solving Principles (Course 5) duration is:",
          options: {
            A: "45 minutes",
            B: "90 minutes",
            C: "4 hours",
            D: "Half-day"
          },
          correct: "B",
          explanation: "Problem-Solving Principles (Course 5) takes 90 minutes."
        },
        {
          id: 58,
          question: "Dynamic Workforce (Course 11) duration is:",
          options: {
            A: "90 minutes",
            B: "4 hours",
            C: "Half-day",
            D: "3-5 days"
          },
          correct: "C",
          explanation: "Dynamic Workforce (Course 11) takes half-day."
        },
        {
          id: 59,
          question: "Owner Delegate (Course 12) duration is:",
          options: {
            A: "90 minutes",
            B: "4 hours",
            C: "Half-day",
            D: "3-5 days"
          },
          correct: "C",
          explanation: "Owner Delegate (Course 12) takes half-day."
        },
        {
          id: 60,
          question: "Agentic Architecture Selection (Course 15) duration is:",
          options: {
            A: "90 minutes",
            B: "4 hours",
            C: "Half-day",
            D: "2-5 days"
          },
          correct: "D",
          explanation: "Agentic Architecture Selection (Course 15) takes 2-5 days."
        },
        {
          id: 61,
          question: "Which course specifically teaches \"self-expanding\" AI workforce capabilities?",
          options: {
            A: "Course 9",
            B: "Course 10",
            C: "Course 11",
            D: "Course 12"
          },
          correct: "C",
          explanation: "Course 11 (Dynamic Workforce) teaches self-expanding AI workforce capabilities."
        },
        {
          id: 62,
          question: "\"Durable execution\" is a feature specifically covered in which course?",
          options: {
            A: "Course 7",
            B: "Course 8",
            C: "Course 9",
            D: "Course 10"
          },
          correct: "C",
          explanation: "Durable execution is covered in Course 9 (Worker Nervous System)."
        },
        {
          id: 63,
          question: "R2 storage is covered in which course?",
          options: {
            A: "Course 9",
            B: "Course 12",
            C: "Course 13",
            D: "Course 14"
          },
          correct: "D",
          explanation: "R2 storage is covered in Course 14 (Cloud Deployment)."
        },
        {
          id: 64,
          question: "FastAPI is mentioned in which course context?",
          options: {
            A: "Course 7",
            B: "Course 9",
            C: "Course 14",
            D: "Course 16"
          },
          correct: "C",
          explanation: "FastAPI is mentioned in Course 14 (Cloud Deployment) context."
        },
        {
          id: 65,
          question: "Postgres database is first introduced in which course?",
          options: {
            A: "Course 6",
            B: "Course 7",
            C: "Course 8",
            D: "Course 10"
          },
          correct: "C",
          explanation: "Postgres database is first introduced in Course 8 (Agent to Digital FTE)."
        },
        {
          id: 66,
          question: "\"Identic AI\" is a concept from which course?",
          options: {
            A: "Course 9",
            B: "Course 10",
            C: "Course 11",
            D: "Course 12"
          },
          correct: "D",
          explanation: "Identic AI is a concept from Course 12 (Owner Delegate)."
        },
        {
          id: 67,
          question: "The \"Nine-layer evaluation pyramid\" is from which course?",
          options: {
            A: "Course 11",
            B: "Course 12",
            C: "Course 13",
            D: "Course 14"
          },
          correct: "C",
          explanation: "The Nine-layer evaluation pyramid is from Course 13 (Eval-Driven Development)."
        },
        {
          id: 68,
          question: "A student says \"I just want to learn AI basics in the fastest time possible.\" What is the minimum recommended path?",
          options: {
            A: "All 19 courses",
            B: "Thesis + Courses 1-2",
            C: "Courses 7-13",
            D: "Only the thesis"
          },
          correct: "B",
          explanation: "Minimum recommended path for AI basics: Thesis + Courses 1-2."
        },
        {
          id: 69,
          question: "The program's promise for \"1 weekend\" outcome is:",
          options: {
            A: "Full stack fluency",
            B: "Productive basics",
            C: "First Digital FTE",
            D: "Understanding the thesis"
          },
          correct: "C",
          explanation: "1 weekend promise: First Digital FTE deployment."
        },
        {
          id: 70,
          question: "Which role pathway includes the MOST courses?",
          options: {
            A: "Absolute Beginner",
            B: "Knowledge Worker",
            C: "Engineer",
            D: "Workforce Builder"
          },
          correct: "D",
          explanation: "Workforce Builder pathway includes the most courses."
        },
        {
          id: 71,
          question: "The Getting Started Overview places getting the thesis FIRST because:",
          options: {
            A: "It's the hardest content",
            B: "It explains the why behind the entire architecture before diving into how",
            C: "It's required for certification only",
            D: "It's the shortest content"
          },
          correct: "B",
          explanation: "The thesis explains the why behind the entire architecture before diving into how."
        },
        {
          id: 72,
          question: "\"Operational envelopes\" are introduced in which course?",
          options: {
            A: "Course 7",
            B: "Course 8",
            C: "Course 9",
            D: "Course 11"
          },
          correct: "C",
          explanation: "Operational envelopes are introduced in Course 9 (Worker Nervous System)."
        },
        {
          id: 73,
          question: "The program states Mode 1 tools include (pick all that apply as a group):",
          options: {
            A: "Excel, Word, PowerPoint",
            B: "Claude Code, OpenCode, Cowork, OpenWork",
            C: "Python, Java, C++",
            D: "AWS, Azure, GCP"
          },
          correct: "B",
          explanation: "Mode 1 tools: Claude Code, OpenCode, Cowork, OpenWork."
        },
        {
          id: 74,
          question: "\"Measurable trustworthiness verification\" is taught in which course?",
          options: {
            A: "Course 10",
            B: "Course 11",
            C: "Course 12",
            D: "Course 13"
          },
          correct: "D",
          explanation: "Measurable trustworthiness verification is taught in Course 13 (Eval-Driven Development)."
        },
        {
          id: 75,
          question: "The overall Getting Started Overview message to students is:",
          options: {
            A: "\"This program is very hard and will take years\"",
            B: "\"Skip theory and go straight to coding\"",
            C: "\"You can be productive quickly — start with the thesis and foundations, then build real systems through practice\"",
            D: "\"Only engineers can succeed in this program\""
          },
          correct: "C",
          explanation: "Overall message: You can be productive quickly — start with the thesis and foundations, then build real systems through practice."
        }
      ]
    }
  ]
};
