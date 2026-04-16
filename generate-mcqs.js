// Script to add MCQs 11-15 to all lessons in chapters 15, 16, and 17
const fs = require('fs');
const path = require('path');

// Helper function to create scenario-based MCQs
function createMcqs(lessonTitle, topic, count = 5, startId = 11) {
  const mcqs = [];
  
  // Scenario templates based on lesson topics
  const scenarioTemplates = {
    'Context Engineering': [
      {
        q: `Scenario: You're building a ${topic} Digital FTE. After extended use, output quality degrades. According to Context Engineering principles, what is the likely cause and solution?`,
        options: {
          A: "The model degraded — upgrade to a newer version",
          B: "Context Rot — accumulated conversation degradation. Use /compact to summarize or /clear to reset with fresh context",
          C: "API rate limiting — slow down requests",
          D: "Network latency — improve connection"
        },
        correct: "B",
        explanation: `Context Rot is accumulated conversation degradation. The fix is context lifecycle management: /compact summarizes old content while preserving key info, or /clear starts fresh. This is essential for ${topic} applications maintaining quality over long sessions.`
      }
    ],
    'SDD': [
      {
        q: `Scenario: Your team is building a ${topic} feature using SDD. Mid-implementation, you discover ambiguous requirements. According to the Four-Phase Workflow, what should you do?`,
        options: {
          A: "Continue implementing and fix ambiguities later",
          B: "Return to Refinement phase — surface hidden assumptions through structured interviewing before continuing implementation",
          C: "Skip to testing and let tests define requirements",
          D: "Ask the AI to decide the best approach"
        },
        correct: "B",
        explanation: `SDD's Refinement phase exists to surface ambiguities BEFORE implementation. When ambiguities are discovered mid-implementation, the correct response is to pause, return to Refinement, clarify assumptions through the five ambiguity categories, then resume Implementation with a refined spec.`
      }
    ],
    'Seven Principles': [
      {
        q: `Scenario: You're implementing a ${topic} feature. Claude reports 'Done!' but you haven't verified the work. According to Principle 3 (Verification), what is the risk and correct action?`,
        options: {
          A: "No risk — Claude is reliable; ship it",
          B: "'Looks done' trap — AI output can appear correct but contain silent bugs. Run tests immediately to verify before accepting",
          C: "Review the code manually for 30 minutes",
          D: "Ask Claude to self-review its work"
        },
        correct: "B",
        explanation: `The 'looks done' trap: AI output can appear correct visually but contain silent bugs. Principle 3 requires verification AFTER every significant action. The correct action: run tests immediately (syntax → unit → integration → manual hierarchy) before accepting the work as complete.`
      }
    ]
  };

  // Generate MCQs based on topic
  for (let i = 0; i < count; i++) {
    const template = scenarioTemplates[topic] || scenarioTemplates['Seven Principles'];
    const baseMcq = template[i % template.length];
    
    mcqs.push({
      id: startId + i,
      question: baseMcq.q,
      options: baseMcq.options,
      correct: baseMcq.correct,
      explanation: baseMcq.explanation
    });
  }
  
  return mcqs;
}

console.log("MCQ generation script ready.");
console.log("This script provides helper functions for generating scenario-based MCQs.");
console.log("Usage: Import createMcqs() function and apply to specific lessons.");
