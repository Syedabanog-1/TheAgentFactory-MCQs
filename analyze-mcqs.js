// Comprehensive MCQ Addition Script for Chapters 15, 16, and 17
// This script adds MCQs 11-15 to all lessons

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'mcq-app', 'data');

console.log("=== MCQ Addition Script ===");
console.log("Target: Add MCQs 11-15 to all lessons in Chapters 15, 16, and 17");
console.log("");

// Read chapter files
const chapter15Path = path.join(dataDir, 'chapter15.ts');
const chapter16Path = path.join(dataDir, 'chapter16.ts');
const chapter17Path = path.join(dataDir, 'chapter17.ts');

// Check if files exist
const files = [chapter15Path, chapter16Path, chapter17Path];
files.forEach(file => {
  if (fs.existsSync(file)) {
    const content = fs.readFileSync(file, 'utf8');
    const lessonMatches = content.match(/id: \d+,\s*title: "/g);
    const mcqMatches = content.match(/id: 11,/g) || [];
    const mcq15Matches = content.match(/id: 15,/g) || [];
    
    console.log(`${path.basename(file)}:`);
    console.log(`  - Lessons found: ${lessonMatches ? lessonMatches.length : 0}`);
    console.log(`  - MCQ 11s found: ${mcqMatches.length}`);
    console.log(`  - MCQ 15s found: ${mcq15Matches.length}`);
    console.log("");
  } else {
    console.log(`${path.basename(file)}: NOT FOUND`);
  }
});

console.log("=== Analysis Complete ===");
console.log("");
console.log("Note: This script analyzes the current state of chapter files.");
console.log("To add MCQs, use the edit tool directly on the chapter files.");
