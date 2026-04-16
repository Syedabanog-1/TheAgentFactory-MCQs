// Script to add MCQs 11-15 to all lessons in chapters 15, 16, and 17
const fs = require('fs');
const path = require('path');

// MCQs for Chapter 15 - Context Engineering
const chapter15Mcqs = {
  lesson1: [
    {
      id: 11,
      question: "Scenario: You're building a customer support Digital FTE that handles 500+ tickets daily. After 3 hours of conversation, Claude starts making errors referencing outdated ticket policies from earlier in the session. According to Context Engineering principles, what is happening and how do you fix it?",
      options: {
        A: "The model is tired — restart with a fresh API key",
        B: "Context Rot (Poisoning type) — outdated policy information persists in context. Use /compact to summarize and remove stale details, or /clear and re-inject only current policies",
        C: "The context window is full — upgrade to a model with larger context",
        D: "Claude is confused — explain the policies again more clearly"
      },
      correct: "B",
      explanation: "This is Context Rot (Poisoning type): outdated information persists and degrades output quality. The fix is context lifecycle management: /compact summarizes old content while preserving key info, or /clear starts fresh with only current policies re-injected. This is why Context Engineering includes knowing when to reset vs. compress."
    },
    {
      id: 12,
      question: "Scenario: Your CLAUDE.md file is 350 lines. Claude frequently ignores critical instructions about test commands and coding conventions. According to the Signal vs. Noise audit and Instruction Limit Problem, what is the root cause?",
      options: {
        A: "Claude cannot read files over 200 lines",
        B: "The Instruction Limit (~150-200 distinct instructions) is exhausted by less important content, causing critical directives to be ignored — the file needs 40-60% reduction via the 4-Question Audit",
        C: "The file contains too many code examples",
        D: "Claude ignores CLAUDE.md by default — you must reference it in every prompt"
      },
      correct: "B",
      explanation: "The Instruction Limit Problem: frontier LLMs reliably follow ~150-200 distinct instructions. A 350-line CLAUDE.md likely exceeds this, with less important content consuming budget needed for critical rules. The 4-Question Audit Framework typically achieves 40-60% reduction while maintaining or improving compliance."
    },
    {
      id: 13,
      question: "Scenario: You're designing context architecture for a marketing consultant Digital FTE. Option A stores all expertise in CLAUDE.md (7,300 tokens). Option B uses minimal CLAUDE.md (400 tokens) + Skill descriptions (150 tokens) with full details loaded on-demand. According to the 13-fold reduction principle, what is the per-request token savings?",
      options: {
        A: "No savings — both approaches use the same tokens overall",
        B: "Option B reduces baseline from ~7,300 to ~550 tokens per request — a 13-fold reduction, because CLAUDE.md loads every request while Skills load only when invoked",
        C: "Option A is more efficient because it avoids skill invocation overhead",
        D: "Option B saves 50% — from 7,300 to 3,650 tokens"
      },
      correct: "B",
      explanation: "The 13-fold reduction: Option A (all in CLAUDE.md) = ~7,300 tokens per request (continuous cost). Option B (architectural separation) = ~550 baseline tokens (CLAUDE.md loads every request; Skills load on-demand). 7,300 / 550 = ~13x reduction. This is why moving domain expertise to Skills dramatically improves context efficiency."
    },
    {
      id: 14,
      question: "Scenario: Your team is building a healthcare compliance Digital FTE. You need to decide where to store: (1) HIPAA compliance rules, (2) current sprint goals, (3) preferred test commands, (4) deployment workflow. According to Context Architecture principles, which belongs in CLAUDE.md vs. Skills vs. task files?",
      options: {
        A: "Everything in CLAUDE.md for simplicity",
        B: "CLAUDE.md: (1) HIPAA rules, (3) test commands (stable, error-critical). Skills: (4) deployment workflow (selectively needed, substantial length). Task files: (2) sprint goals (frequently changing — creates context poisoning if in CLAUDE.md)",
        C: "Everything in Skills for maximum efficiency",
        D: "CLAUDE.md: sprint goals; Skills: HIPAA rules; task files: test commands"
      },
      correct: "B",
      explanation: "Context Architecture decision framework: CLAUDE.md for info needed nearly every task, stable content, and error-critical rules (HIPAA, test commands). Skills for selectively needed, substantial content (deployment workflow). Task files for frequently changing info (sprint goals) — putting dynamic data in CLAUDE.md creates context poisoning when it becomes stale."
    },
    {
      id: 15,
      question: "Scenario: You're auditing a 6-month-old Digital FTE product. Users report inconsistent behavior — sometimes it follows conventions perfectly, other times it ignores them. The CLAUDE.md hasn't changed. According to Context Rot types, what is the likely cause and how do you diagnose it?",
      options: {
        A: "The model degraded over time — retrain on newer data",
        B: "Context Rot (Clash type) — contradictory instructions accumulated over 6 months. Diagnose with /context to see current state, then audit CLAUDE.md and Skills for conflicting rules added by different developers",
        C: "Users are prompting incorrectly — retrain them",
        D: "The file system corrupted the CLAUDE.md — restore from backup"
      },
      correct: "B",
      explanation: "Context Rot (Clash type): contradictory instructions compete, causing inconsistent output. Over 6 months, different developers likely added conflicting rules without removing old ones. Diagnosis: /context reveals current state; audit CLAUDE.md/Skills for contradictions (e.g., 'use npm' vs. 'use pnpm' added by different team members). Fix: consolidate to single authoritative rule."
    }
  ]
};

console.log("MCQ generation script ready. Chapter 15 Lesson 1 MCQs 11-15 defined.");
console.log("Total MCQs to add per chapter: 50 (5 MCQs × 10 lessons)");
console.log("Total MCQs across all chapters: 150");
