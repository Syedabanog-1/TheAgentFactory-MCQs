import type { Chapter } from "@/types";

export const chapter18: Chapter = {
  id: 18,
  title: "Claude Code for Teams, CI/CD & Advanced Configuration",
  description: "Team-wide configuration hierarchies, path-specific rules, custom skills, plan mode, iterative refinement, CI/CD integration, multi-pass review, and session management.",
  color: "blue",
  lessons: [
    {
      id: 1,
      title: "The CLAUDE.md Configuration Hierarchy",
      mcqs: [
        {
          id: 1,
          question: "A developer notices that her personal preference for 2-space indentation is being applied to a team project that mandates 4-space indentation. Where should each preference be placed to prevent this conflict?",
          options: {
            A: "Both preferences should go in the project-level CLAUDE.md",
            B: "Personal preference belongs in ~/.claude/CLAUDE.md; team standard belongs in the project-level CLAUDE.md committed to git",
            C: "Both preferences should go in settings.json",
            D: "Personal preference belongs in settings.json; team standard in ~/.claude/CLAUDE.md"
          },
          correct: "B",
          explanation: "User-level (~/.claude/CLAUDE.md) holds personal preferences that are never shared with teammates. Project-level (./CLAUDE.md) holds team-wide standards committed to git. Keeping them separate prevents personal preferences from overriding or conflicting with team mandates."
        },
        {
          id: 2,
          question: "A team lead runs Claude inside the packages/api/ subdirectory of a monorepo and expects the root CLAUDE.md rules to still apply. Will they apply, and why?",
          options: {
            A: "No — only the closest CLAUDE.md file is loaded",
            B: "Yes — Claude walks up the directory tree and loads all CLAUDE.md files it finds, so both packages/api/CLAUDE.md and the root CLAUDE.md load",
            C: "Yes — but only if the root file is explicitly imported",
            D: "No — root CLAUDE.md is only loaded when Claude starts from the project root"
          },
          correct: "B",
          explanation: "Claude walks up the directory tree loading every CLAUDE.md it encounters. Running Claude in packages/api/ causes it to load packages/api/CLAUDE.md and continue up to load the root CLAUDE.md as well, composing all applicable instructions."
        },
        {
          id: 3,
          question: "A backend engineer added Terraform rules to the root CLAUDE.md but the React team complains those rules appear when they work on frontend files. What is the best fix?",
          options: {
            A: "Create a separate git branch for each team",
            B: "Move Terraform rules to packages/infra/CLAUDE.md so they only load when Claude works in that directory",
            C: "Delete the Terraform rules and ask the infra team to memorize them",
            D: "Add the Terraform rules to settings.json instead"
          },
          correct: "B",
          explanation: "Directory-level CLAUDE.md files load on demand when Claude reads files in that directory. Placing Terraform rules in packages/infra/CLAUDE.md means they only activate when Claude is working in the infrastructure package, not when editing React components."
        },
        {
          id: 4,
          question: "A developer runs /memory inside a Claude session and the project CLAUDE.md does not appear in the output. What is the most likely cause?",
          options: {
            A: "The file is too large to load",
            B: "Claude is being run from outside the project root or the CLAUDE.md file path is incorrect",
            C: "The /memory command only shows user-level files",
            D: "CLAUDE.md requires a restart to take effect"
          },
          correct: "B",
          explanation: "The /memory command lists every loaded CLAUDE.md. If project CLAUDE.md is absent, Claude is likely not running from the project root directory, or the file is misnamed or in an unexpected location."
        },
        {
          id: 5,
          question: "After running /compact, a developer notices that Claude no longer follows instructions that were only mentioned in the conversation and never written to a file. What explains this?",
          options: {
            A: "The /compact command deletes all CLAUDE.md files",
            B: "Instructions only in conversation history were lost during compaction; CLAUDE.md files survive because Claude re-reads them fresh from disk",
            C: "The compact command resets the model's context to factory defaults",
            D: "/compact removes all memory including file-based instructions"
          },
          correct: "B",
          explanation: "CLAUDE.md files survive /compact fully because Claude re-reads them from disk after compaction. Instructions that existed only in the conversation are lost. This is why important rules must be written to CLAUDE.md, not just stated in conversation."
        },
        {
          id: 6,
          question: "Two teammates are getting different behavior from Claude on the same project. One follows personal indentation preferences; the other follows team standards. Running /memory on both machines shows different files loaded. What is the explanation?",
          options: {
            A: "Their Claude versions differ",
            B: "One developer has a ~/.claude/CLAUDE.md with personal rules that override shared project rules",
            C: "Project CLAUDE.md was corrupted",
            D: "settings.json differs between machines"
          },
          correct: "B",
          explanation: "User-level differences in ~/.claude/CLAUDE.md are expected and normal. If one developer's personal rules conflict with project rules, their Claude behaves differently. The /memory comparison reveals user-level differences, which are the expected cause of this inconsistency."
        },
        {
          id: 7,
          question: "A project CLAUDE.md has grown to 400 lines and is hard to maintain. The team wants to split it into topic-specific files. What is the correct approach?",
          options: {
            A: "Create multiple CLAUDE.md files at the root level with different names",
            B: "Move topic sections into .claude/rules/ directory as separate markdown files, one topic per file",
            C: "Split into multiple git branches, one per topic",
            D: "Use settings.json to reference multiple instruction files"
          },
          correct: "B",
          explanation: "The .claude/rules/ directory holds modular markdown files — one topic per file. Files without paths frontmatter load at session start with the same priority as CLAUDE.md, providing the same effect with much better maintainability. The goal is keeping CLAUDE.md under 200 lines."
        },
        {
          id: 8,
          question: "A team wants Claude to automatically include the project README and package.json context without copying their contents into CLAUDE.md. What feature enables this?",
          options: {
            A: "settings.json env variables",
            B: "@import syntax in CLAUDE.md — e.g., See @README.md for project overview",
            C: "Directory-level CLAUDE.md in the root",
            D: "The /context command at runtime"
          },
          correct: "B",
          explanation: "@import syntax lets CLAUDE.md reference external files by path. Claude loads the referenced file content without you copying it into CLAUDE.md. This keeps CLAUDE.md concise while pulling in existing documentation automatically."
        },
        {
          id: 9,
          question: "A developer wants to add personal workflow shortcuts on top of a team project's shared coding standards without modifying the shared files. How can they do this?",
          options: {
            A: "Fork the repository and add personal rules there",
            B: "Add personal imports via @~/.claude/my-project-preferences.md in the shared CLAUDE.md — teammates without the file skip it automatically",
            C: "Create a second project CLAUDE.md in a subdirectory",
            D: "Add personal rules to settings.json"
          },
          correct: "B",
          explanation: "Personal imports with ~ home paths in shared CLAUDE.md are skipped by teammates who don't have that file. This allows individual customization layered on top of team standards without affecting colleagues."
        },
        {
          id: 10,
          question: "A security policy must be enforced regardless of what Claude decides. A style guide should influence Claude's choices but not be mandatory. How should each be configured?",
          options: {
            A: "Both in CLAUDE.md",
            B: "Security policy in settings.json (permissions.deny); style guide in CLAUDE.md",
            C: "Security policy in CLAUDE.md; style guide in settings.json",
            D: "Both in settings.json"
          },
          correct: "B",
          explanation: "settings.json rules are enforced by the client regardless of Claude's decisions — it is a hard lock. CLAUDE.md shapes Claude's behavior but is not enforced. Security policies need hard enforcement; style guides are guidelines Claude should follow but aren't mandatory constraints."
        },
        {
          id: 11,
          question: "A new developer runs /init in a project directory. What does this command do?",
          options: {
            A: "Resets all CLAUDE.md files to defaults",
            B: "Generates a starting CLAUDE.md by analyzing the codebase",
            C: "Initializes a new git repository",
            D: "Installs Claude Code dependencies"
          },
          correct: "B",
          explanation: "/init analyzes your codebase and generates a starting CLAUDE.md with relevant project context. It provides a foundation you can then customize rather than starting from a blank file."
        },
        {
          id: 12,
          question: "A monorepo has packages/web/, packages/api/, and packages/infra/. A developer works only in packages/api/ but notices packages/web/ rules loading. What went wrong?",
          options: {
            A: "Web rules were placed in the root CLAUDE.md instead of packages/web/CLAUDE.md",
            B: "The developer ran Claude from the wrong directory",
            C: "packages/api/CLAUDE.md imports packages/web/CLAUDE.md",
            D: "Both A and C are possible causes"
          },
          correct: "D",
          explanation: "Web rules loading in an API context means they were either placed at root level (affecting all packages) or the api package CLAUDE.md incorrectly imports web rules. Both are plausible misconfigurations that would cause cross-package rule leakage."
        },
        {
          id: 13,
          question: "A team notices that directory-level CLAUDE.md files never appear in /memory output even after a full session. What is the reason?",
          options: {
            A: "Directory-level files are deprecated",
            B: "Directory-level files load on demand only when Claude reads files in that subdirectory — they won't appear until Claude accesses files there",
            C: "They require explicit import in the root CLAUDE.md",
            D: "They only load on the second session"
          },
          correct: "B",
          explanation: "Directory-level CLAUDE.md files load on demand, not at session start. They appear in /memory only after Claude reads or modifies files in that subdirectory. This is by design — it avoids loading irrelevant package rules before they're needed."
        },
        {
          id: 14,
          question: "A team wants personal developer names and roles accessible to Claude without committing that information to git. Where should this go?",
          options: {
            A: "Project-level CLAUDE.md",
            B: ".claude/rules/ directory",
            C: "~/.claude/CLAUDE.md — the user-level file that is never committed to version control",
            D: "settings.json"
          },
          correct: "C",
          explanation: "User-level ~/.claude/CLAUDE.md is personal and never committed to git. Personal information like name and role belongs here, not in the project-level file which is shared with all teammates."
        },
        {
          id: 15,
          question: "A rules file is placed in .claude/rules/ with no YAML frontmatter. When does it load?",
          options: {
            A: "It never loads without frontmatter",
            B: "At session start, with the same priority as project-level CLAUDE.md",
            C: "Only when explicitly called with /memory",
            D: "Only when the matching file type is edited"
          },
          correct: "B",
          explanation: "Files in .claude/rules/ without a paths frontmatter load unconditionally at session start, functioning identically to having the content in project-level CLAUDE.md. The paths field is what makes loading conditional."
        },
        {
          id: 16,
          question: "When Claude reads files in packages/api/ and then reads files in packages/web/, what happens to the directory-level CLAUDE.md files?",
          options: {
            A: "Only the first one loaded remains active",
            B: "Both packages/api/CLAUDE.md and packages/web/CLAUDE.md load and are active simultaneously",
            C: "The second one replaces the first",
            D: "Claude asks which one to use"
          },
          correct: "B",
          explanation: "Directory-level files accumulate as Claude works across directories. Each loads when its directory is accessed. By the end of a cross-package session, both packages' CLAUDE.md files are loaded and active alongside the root-level instructions."
        },
        {
          id: 17,
          question: "A developer wants to block Claude from accessing a specific sensitive file path. Should this go in CLAUDE.md or settings.json?",
          options: {
            A: "CLAUDE.md — it shapes Claude's behavior comprehensively",
            B: "settings.json (permissions.deny) — because it is a hard enforcement layer that the client enforces regardless of Claude's decisions",
            C: "Either works equally well",
            D: ".claude/rules/ with a path pattern"
          },
          correct: "B",
          explanation: "Blocking specific file paths requires hard enforcement via settings.json permissions.deny. CLAUDE.md is a guideline that Claude follows by choice — it cannot reliably prevent access. settings.json rules are enforced by the client regardless of Claude's reasoning."
        },
        {
          id: 18,
          question: "A team uses a monorepo with 5 packages. The root CLAUDE.md is already at 300 lines. A developer needs to add 50 more lines of database conventions. What is the recommended approach?",
          options: {
            A: "Add all 50 lines to the root CLAUDE.md",
            B: "Create .claude/rules/database.md with the database conventions — keeping root CLAUDE.md under 200 lines",
            C: "Create a separate git repository for database conventions",
            D: "Add the conventions to settings.json"
          },
          correct: "B",
          explanation: "The recommended practice is to keep CLAUDE.md under 200 lines by moving topic-specific sections to .claude/rules/. A database.md file in that directory loads at session start without frontmatter and keeps the root file manageable."
        },
        {
          id: 19,
          question: "A user-level rules file at ~/.claude/rules/ conflicts with a project-level CLAUDE.md rule. Which takes precedence?",
          options: {
            A: "User-level rules always win",
            B: "Project-level rules take priority — project rules override user rules on conflicts",
            C: "The most recently modified file wins",
            D: "The longer file wins"
          },
          correct: "B",
          explanation: "User-level rules load before project rules, and project rules take priority on conflicts. More specific (project) instructions supersede broader (user) ones. This ensures team-wide standards override personal preferences when they conflict."
        },
        {
          id: 20,
          question: "A developer uses @import to reference a file that doesn't exist on a teammate's machine. What happens when the teammate opens Claude?",
          options: {
            A: "Claude crashes with a file not found error",
            B: "The missing import is skipped automatically — teammates without the file are not affected",
            C: "Claude prompts the teammate to create the file",
            D: "The entire CLAUDE.md fails to load"
          },
          correct: "B",
          explanation: "Missing personal imports referenced via ~ home paths are skipped automatically by teammates who don't have them. This is the designed behavior allowing personal customizations layered atop shared standards without breaking others."
        },
        {
          id: 21,
          question: "What is the maximum nesting depth for @import chains in CLAUDE.md?",
          options: {
            A: "1 level",
            B: "3 levels",
            C: "5 levels",
            D: "Unlimited"
          },
          correct: "C",
          explanation: "Nested @imports are supported up to 5 levels deep. Beyond that, imports are not followed. This prevents infinite loops while allowing reasonable documentation composition."
        },
        {
          id: 22,
          question: "A developer encounters a dialog asking for approval when Claude first reads an externally imported file referenced by @import. This is expected behavior. Why does this dialog appear?",
          options: {
            A: "The file contains sensitive data",
            B: "Claude shows an approval dialog on the first encounter of an external import as a security measure",
            C: "The file is too large",
            D: "The import path uses absolute addressing"
          },
          correct: "B",
          explanation: "An approval dialog appears on the first external import encounter as a security measure. This ensures users are aware of what external files Claude is reading, preventing unexpected data from being silently loaded."
        },
        {
          id: 23,
          question: "A team wants build commands, test requirements, and architectural decisions shared across all developers. Where should these be placed?",
          options: {
            A: "~/.claude/CLAUDE.md on each developer's machine",
            B: "Project-level ./CLAUDE.md committed to git for team-wide access",
            C: "settings.json in the repository root",
            D: "In the README.md file only"
          },
          correct: "B",
          explanation: "Project-level CLAUDE.md committed to git is the correct location for team-wide standards like build commands, test requirements, and architectural decisions. All developers pulling the repository automatically receive these instructions."
        },
        {
          id: 24,
          question: "Claude is configured via MCP servers. Should MCP server configuration go in CLAUDE.md or elsewhere?",
          options: {
            A: "CLAUDE.md — it handles all configuration",
            B: ".mcp.json — MCP server configuration belongs there, not in CLAUDE.md",
            C: "settings.json permissions section",
            D: "~/.claude/CLAUDE.md"
          },
          correct: "B",
          explanation: "MCP server configuration belongs in .mcp.json, not CLAUDE.md. CLAUDE.md handles code style, build commands, and behavioral instructions. Configuration infrastructure like MCP servers and environment variables has dedicated files."
        },
        {
          id: 25,
          question: "A developer wants to verify that directory-level CLAUDE.md for packages/api/ loaded after working in that directory. What is the correct verification step?",
          options: {
            A: "Check the file system for the CLAUDE.md file",
            B: "Run /memory after Claude reads a file in packages/api/ — the directory-level file should now appear",
            C: "Restart Claude and check startup logs",
            D: "Run git status in the packages/api/ directory"
          },
          correct: "B",
          explanation: "Directory-level CLAUDE.md files load on demand. Running /memory after Claude reads files in packages/api/ will show the file in the output — confirming it loaded. Running /memory before accessing that directory will not show it."
        },
        {
          id: 26,
          question: "What is the precedence order from highest to lowest priority in the CLAUDE.md hierarchy?",
          options: {
            A: "User > Project > Directory",
            B: "Directory > Project > User (more specific overrides broader)",
            C: "Project > Directory > User",
            D: "All levels have equal priority"
          },
          correct: "B",
          explanation: "More specific locations override broader ones. Directory-level instructions are most specific and take highest priority, followed by project-level, then user-level. This mirrors how CSS specificity works — closer scopes win."
        },
        {
          id: 27,
          question: "A team member wants to use @import in a shared CLAUDE.md to pull in a standards document, but other teammates don't need it. What approach handles this cleanly?",
          options: {
            A: "Each teammate maintains their own CLAUDE.md fork",
            B: "Use @~/.claude/my-project-preferences.md in the shared file — teammates without the file skip it automatically",
            C: "Add the import with an if-condition",
            D: "Place the import in settings.json"
          },
          correct: "B",
          explanation: "References to files via the ~ home path are silently skipped for teammates who don't have those files. This allows personal customizations in shared files without creating errors or affecting colleagues."
        },
        {
          id: 28,
          question: "Environment variables needed for Claude sessions should be configured where?",
          options: {
            A: "CLAUDE.md env section",
            B: "settings.json env field",
            C: "~/.claude/CLAUDE.md",
            D: "packages/*/CLAUDE.md"
          },
          correct: "B",
          explanation: "Environment variables for Claude sessions are configured in settings.json under the env field. CLAUDE.md is for behavioral instructions, not infrastructure configuration like environment variables."
        },
        {
          id: 29,
          question: "When comparing @import in CLAUDE.md versus .claude/rules/ files, which approach is better for pulling in an existing README.md for project context?",
          options: {
            A: ".claude/rules/ — it handles all external references",
            B: "@import in CLAUDE.md — it pulls in existing docs at session start and is designed for referencing existing documentation",
            C: "Both are equivalent for this use case",
            D: "Neither — README should be copied manually into CLAUDE.md"
          },
          correct: "B",
          explanation: "@import in CLAUDE.md is designed for pulling existing documents like README.md and package.json into context. .claude/rules/ is better suited for modular topic-specific rules and path-scoped loading. For existing documentation, @import is the right tool."
        },
        {
          id: 30,
          question: "A developer places Terraform conventions in .claude/rules/infra.md with paths frontmatter matching **/*.tf files. A teammate working only on React files asks if those rules will affect their session. What is the answer?",
          options: {
            A: "Yes — all rules/ files load at session start regardless of paths",
            B: "No — the paths frontmatter means the rule only loads when Claude touches .tf files, so React-only work is unaffected",
            C: "Yes — but only if the teammate explicitly loads the file",
            D: "No — rules/ files never affect frontend work"
          },
          correct: "B",
          explanation: "Files in .claude/rules/ with paths frontmatter load conditionally — only when Claude reads files matching those patterns. A React developer who never touches .tf files will never have the Terraform rules enter their context window."
        }
      ]
    },
    {
      id: 2,
      title: "Path-Specific Rules with Glob Patterns",
      mcqs: [
        {
          id: 1,
          question: "A developer writes a glob pattern *.ts in a rules file frontmatter intending to match TypeScript files throughout the entire monorepo. After testing, it only matches root-level files. What is the fix?",
          options: {
            A: "Change the pattern to ts/**/*",
            B: "Change the pattern to **/*.ts — double asterisk matches files in all subdirectories",
            C: "Add the pattern to CLAUDE.md instead",
            D: "Use *.typescript as the extension"
          },
          correct: "B",
          explanation: "Single asterisk (*) matches characters within a single filename at the current level only. Double asterisk (**) matches any number of directories recursively. *.ts matches only root-level TypeScript files; **/*.ts matches TypeScript files everywhere."
        },
        {
          id: 2,
          question: "A team needs rules that apply to React test files (*.test.tsx) and TypeScript test files (*.test.ts) anywhere in the project. What is the correct frontmatter?",
          options: {
            A: "paths: - test.*",
            B: "paths: - **/*.test.ts - **/*.test.tsx",
            C: "paths: - src/tests/**/*",
            D: "paths: - *.test"
          },
          correct: "B",
          explanation: "The pattern **/*.test.ts matches TypeScript test files anywhere in the project. **/*.test.tsx matches React test files anywhere. Both are listed under paths using OR logic — a file matching either pattern triggers the rule."
        },
        {
          id: 3,
          question: "A rule uses the pattern src/**/* but a teammate complains it doesn't match files in lib/src/. What pattern would match a src directory regardless of its location in the tree?",
          options: {
            A: "src/*",
            B: "**/src/**/*",
            C: "*/src/**",
            D: "src/**"
          },
          correct: "B",
          explanation: "src/**/* only matches files under a top-level src/ directory. To match a src directory at any depth in the tree, the pattern **/src/**/* is needed. The leading **/ means 'any number of parent directories before src/'."
        },
        {
          id: 4,
          question: "A team wants a single rule to cover both Dockerfile and docker-compose.yml files anywhere in the project. What is the correct glob pattern?",
          options: {
            A: "**/*.docker",
            B: "**/{Dockerfile,docker-compose*.yml}",
            C: "**/docker/*",
            D: "docker/**/*"
          },
          correct: "B",
          explanation: "Curly braces {} provide comma-separated alternatives. **/{Dockerfile,docker-compose*.yml} matches files named exactly Dockerfile or matching docker-compose*.yml anywhere in the directory tree. The * inside docker-compose*.yml also matches variants like docker-compose.prod.yml."
        },
        {
          id: 5,
          question: "A rules file in .claude/rules/ has no YAML frontmatter paths field. A developer edits a Python file. Does the rule load?",
          options: {
            A: "No — rules without paths never load",
            B: "Yes — rules without a paths field load unconditionally at session start regardless of what files are edited",
            C: "Only if Python rules are also in CLAUDE.md",
            D: "Yes, but only after the first Python file is opened"
          },
          correct: "B",
          explanation: "Rules files without a paths frontmatter field load unconditionally at session start, just like project-level CLAUDE.md content. The paths field is what enables conditional loading — without it, the rule always applies."
        },
        {
          id: 6,
          question: "Multiple glob patterns are listed under paths in a single rules file. A file matches one of them but not the others. Does the rule load for that file?",
          options: {
            A: "No — a file must match all patterns to trigger the rule",
            B: "Yes — multiple patterns use OR logic; matching any one pattern triggers the rule",
            C: "Only if the file matches more than half the patterns",
            D: "No — the file must match the first pattern specifically"
          },
          correct: "B",
          explanation: "Multiple patterns under paths use OR logic. A file matching any single listed pattern is sufficient to trigger loading of that rules file. This allows a single rule to cover multiple related file types with one frontmatter block."
        },
        {
          id: 7,
          question: "A developer needs API endpoint conventions applied to files in both src/api/ and packages/api/ directories. What frontmatter covers both paths?",
          options: {
            A: "paths: - api/**/*",
            B: "paths: - src/api/**/* - packages/api/**/*",
            C: "paths: - **/api.ts",
            D: "paths: - **/{src,packages}/api/**/*"
          },
          correct: "B",
          explanation: "Listing both paths explicitly under paths ensures the rule loads whenever Claude touches files in either src/api/ or packages/api/. Each path is a separate entry and OR logic applies — matching either triggers the rule."
        },
        {
          id: 8,
          question: "A team has conventions that follow file types across all directories (React components, test files, Terraform) and other conventions specific to one package (the API package's database setup). How should these be organized?",
          options: {
            A: "All in the root CLAUDE.md",
            B: "File-type conventions in .claude/rules/ with glob path patterns; package-specific conventions in packages/api/CLAUDE.md",
            C: "All in packages/api/CLAUDE.md",
            D: "File-type conventions in settings.json; package-specific in CLAUDE.md"
          },
          correct: "B",
          explanation: "Path-scoped rules in .claude/rules/ are ideal when conventions follow file types regardless of location. Directory-level CLAUDE.md is best when conventions apply to a specific location. Combining both gives optimal context management."
        },
        {
          id: 9,
          question: "A developer writes Bash(git diff*) in allowed-tools and intends to only allow the exact command 'git diff'. Later Claude also executes 'git-index' because it matched the pattern. What was the error?",
          options: {
            A: "Allowed-tools doesn't support bash patterns",
            B: "The space before * matters — Bash(git diff *) with a space only matches commands starting with 'git diff '; without the space, Bash(git diff*) also matches git-index",
            C: "Git commands cannot be restricted",
            D: "The pattern needed double asterisks"
          },
          correct: "B",
          explanation: "The space before the wildcard is significant. Bash(git diff *) matches only commands starting with 'git diff ' followed by arguments. Bash(git diff*) without the space also matches strings like git-index or git-diff-tree. Precision in pattern writing prevents unintended matches."
        },
        {
          id: 10,
          question: "A team uses symlinks to share rules from a central library across multiple projects. A developer asks if symlinked rules files support YAML frontmatter and path patterns. What is the answer?",
          options: {
            A: "No — symlinks cannot have frontmatter",
            B: "Yes — symlinked rules retain their YAML frontmatter and function identically to native rules files",
            C: "Symlinks are not supported in .claude/rules/",
            D: "Frontmatter works but path patterns are ignored for symlinks"
          },
          correct: "B",
          explanation: "Path-scoped rules support symlinks. Symlinked rules retain their YAML frontmatter including path patterns and function identically to files written directly in the .claude/rules/ directory. This enables centralized rule libraries shared across projects."
        },
        {
          id: 11,
          question: "A developer only has 50 lines of matching rules loaded in context even though the total rules across all files is 500 lines. How does this benefit their workflow?",
          options: {
            A: "It doesn't benefit — all rules should always be loaded",
            B: "Every token spent on irrelevant instructions is unavailable for actual work — loading only matching rules keeps the context window lean and relevant",
            C: "Fewer rules mean less accurate output",
            D: "It only matters for very large models"
          },
          correct: "B",
          explanation: "Token efficiency is the key benefit of path-scoped rules. With 500 total lines but only 50 relevant to current files, only those 50 consume context space. Irrelevant instructions dilute focus and consume tokens that could be used for the actual task."
        },
        {
          id: 12,
          question: "A developer needs rules applied to all .tsx and .jsx files. What pattern correctly covers both?",
          options: {
            A: "**/*.tsx,jsx",
            B: "**/*.{tsx,jsx}",
            C: "**/(tsx|jsx)",
            D: "**/*.tsx or **/*.jsx"
          },
          correct: "B",
          explanation: "Curly brace alternatives {tsx,jsx} match either extension. **/*.{tsx,jsx} is equivalent to listing **/*.tsx and **/*.jsx separately. The {} syntax provides a concise way to express alternatives within a single pattern."
        },
        {
          id: 13,
          question: "A team places React component rules in a path-scoped file matching **/*.tsx. A developer working on a .ts utility file asks if those rules will affect their session. What happens?",
          options: {
            A: "Yes — tsx rules always load because React is part of the project",
            B: "No — the rule only loads when Claude touches .tsx files; .ts files don't match the pattern",
            C: "Yes — .ts files are a subset of .tsx",
            D: "It depends on whether the utility file imports React"
          },
          correct: "B",
          explanation: "Path-scoped rules are precise. A rule matching **/*.tsx only loads when Claude reads files with the .tsx extension. Working exclusively on .ts utility files never triggers the React component rules, keeping context clean."
        },
        {
          id: 14,
          question: "When should a team choose .claude/rules/ with glob patterns over directory-level CLAUDE.md for a convention?",
          options: {
            A: "When the convention applies to a specific package only",
            B: "When the convention follows a file type regardless of location — e.g., test files, database migrations, Python code anywhere in the project",
            C: "When the convention involves build commands",
            D: "When there are more than 10 packages in the monorepo"
          },
          correct: "B",
          explanation: "The decision principle is: if the convention follows a file type regardless of location, use path-scoped rules. If the convention follows a directory (specific package), use directory-level CLAUDE.md. File type conventions like 'all test files' or 'all Terraform files' are ideal for glob patterns."
        },
        {
          id: 15,
          question: "A developer verifies path-scoped rule loading by running /memory before and after reading a .tf Terraform file. What should they observe?",
          options: {
            A: "No difference — rules load at session start regardless",
            B: "Before: infrastructure rule absent. After reading .tf file: infrastructure rule appears in /memory output",
            C: "The rule disappears after being used once",
            D: "Both before and after show the rule loaded"
          },
          correct: "B",
          explanation: "This is the correct verification sequence. Path-scoped rules load on demand when matching files are accessed. Running /memory before touching a .tf file shows the rule absent; running it after reading one confirms the rule loaded. This validates the glob pattern is working."
        },
        {
          id: 16,
          question: "A rule file uses the pattern **/*.test.tsx. A file named components/Button.test.tsx exists. Does this file match the pattern?",
          options: {
            A: "No — the pattern requires the file to be in a tests/ directory",
            B: "Yes — **/ matches any path prefix including components/, so components/Button.test.tsx matches",
            C: "Only if components/ is at the project root",
            D: "No — .tsx files need a separate pattern from .ts files"
          },
          correct: "B",
          explanation: "**/ matches any directory depth. **/*.test.tsx matches any file ending in .test.tsx regardless of where it sits in the directory tree. components/Button.test.tsx, src/ui/Button.test.tsx, and Button.test.tsx at root all match."
        },
        {
          id: 17,
          question: "A developer has infrastructure rules and React rules in separate path-scoped files. They edit a file that matches both patterns. What happens?",
          options: {
            A: "Only the first matching rule loads",
            B: "Claude asks which rule to apply",
            C: "Both matching rules load — multiple rules can be active simultaneously when files match multiple patterns",
            D: "The most recently modified rule wins"
          },
          correct: "C",
          explanation: "When a file matches multiple path patterns across different rules files, all matching rules load and are active simultaneously. A developer editing a .tsx file in a Docker-adjacent directory could have both React component rules and infrastructure rules active."
        },
        {
          id: 18,
          question: "What is the main difference between how path-scoped rules and project CLAUDE.md load during a session?",
          options: {
            A: "Project CLAUDE.md loads on demand; path-scoped rules load at session start",
            B: "Project CLAUDE.md loads at session start always; path-scoped rules load on demand when matching files are accessed",
            C: "Both load at session start",
            D: "Both load on demand"
          },
          correct: "B",
          explanation: "Project CLAUDE.md (and rules without paths frontmatter) load at session start — always present. Path-scoped rules with paths frontmatter load on demand when Claude accesses files matching those patterns. This is the key architectural difference."
        },
        {
          id: 19,
          question: "A developer writes a rule with the pattern packages/api/**/* but realizes API files can also exist in src/services/api/. What change fixes coverage?",
          options: {
            A: "Change to api/**/*",
            B: "Add a second pattern: paths: - packages/api/**/* - src/services/api/**/*",
            C: "Use **/*api*",
            D: "Move all API files to one location"
          },
          correct: "B",
          explanation: "Adding multiple paths entries covers both locations. OR logic means the rule loads when Claude accesses files in either packages/api/ or src/services/api/. Multiple explicit paths are cleaner than a broad pattern that might match unintended files."
        },
        {
          id: 20,
          question: "A team wants infrastructure rules to apply to Terraform files (.tf), variable files (.tfvars), Dockerfiles, and docker-compose files. How many separate path patterns are needed in one rules file?",
          options: {
            A: "One pattern using *",
            B: "Four separate patterns covering each file type",
            C: "Two patterns — one for Terraform, one for Docker",
            D: "Exact number depends on directory structure"
          },
          correct: "B",
          explanation: "Each distinct file type needs its own pattern: **/*.tf, **/*.tfvars, **/Dockerfile, and **/docker-compose*.yml. Four patterns in the paths list cover all four file types. OR logic means any match triggers the rule."
        },
        {
          id: 21,
          question: "A developer adds a new rules file to .claude/rules/ with paths frontmatter. A teammate's session is already running. When does the teammate's session pick up the new rule?",
          options: {
            A: "Immediately — rules update live",
            B: "When the teammate starts a new session or when Claude reads a matching file in the current session",
            C: "Never — rules are locked at session start",
            D: "Only after a git pull"
          },
          correct: "B",
          explanation: "Path-scoped rules load on demand when matching files are accessed. A new rule added mid-session will load the next time Claude reads a file matching its pattern in the current session, or definitely at the start of a fresh session."
        },
        {
          id: 22,
          question: "A project has both .claude/rules/testing.md (path-scoped) and a testing section in CLAUDE.md (always loaded). A developer edits a test file. Which rules apply?",
          options: {
            A: "Only testing.md because it's more specific",
            B: "Only CLAUDE.md because it loads at session start",
            C: "Both — the CLAUDE.md testing section is always active, and testing.md also loads when test files are touched",
            D: "They cancel each other out"
          },
          correct: "C",
          explanation: "Both apply simultaneously. CLAUDE.md content is always active from session start. When a matching test file is accessed, the path-scoped testing.md also loads. Both sets of instructions are in context. This can lead to redundancy if not managed — ideally, pick one approach per topic."
        },
        {
          id: 23,
          question: "A team uses the pattern **/*.spec.ts for their test rules file. A new developer writes tests as *.test.ts instead. Will the rules apply to their tests?",
          options: {
            A: "Yes — .spec and .test are treated as equivalent",
            B: "No — *.test.ts does not match **/*.spec.ts; the rules won't load for test files",
            C: "Yes — Claude auto-detects test files regardless of naming",
            D: "Only if the developer renames their files"
          },
          correct: "B",
          explanation: "Glob patterns are exact. **/*.spec.ts only matches files ending in .spec.ts. Files named *.test.ts follow a different naming convention and won't match. The frontmatter should include both **/*.spec.ts and **/*.test.ts to cover both conventions."
        },
        {
          id: 24,
          question: "What is the correct YAML frontmatter structure for a path-scoped rules file?",
          options: {
            A: "# paths: **/*.ts",
            B: "---\npaths:\n  - \"**/*.ts\"\n---",
            C: "paths = [\"**/*.ts\"]",
            D: "[paths]\n**/*.ts"
          },
          correct: "B",
          explanation: "YAML frontmatter is delimited by --- at top and bottom. The paths field is a YAML list with each pattern as an indented item. Quotes around patterns prevent YAML from misinterpreting special characters like * and {}."
        },
        {
          id: 25,
          question: "A developer creates a shared rule library at ~/shared-claude-rules/ and wants to use it in multiple projects without copying files. What mechanism supports this?",
          options: {
            A: "@import syntax pointing to the home directory",
            B: "Symlinks from each project's .claude/rules/ to files in ~/shared-claude-rules/",
            C: "A central settings.json referencing the library",
            D: "Git submodules containing the rules"
          },
          correct: "B",
          explanation: "Symlinks in .claude/rules/ work with path-scoped rules. Creating symlinks from each project's .claude/rules/ to the shared library means all projects stay in sync when the central library updates. Symlinked rules retain full frontmatter functionality."
        },
        {
          id: 26,
          question: "A rule file intended for database migration files uses the pattern migrations/**/*. The migration files are at db/migrations/. Does the pattern match?",
          options: {
            A: "Yes — migrations/ matches anywhere",
            B: "No — migrations/**/* only matches a top-level migrations/ directory, not db/migrations/",
            C: "Yes — ** covers parent directories",
            D: "It depends on the file extension"
          },
          correct: "B",
          explanation: "migrations/**/* requires migrations/ to be at the top level of the project. db/migrations/file.sql does not match because db/ precedes migrations/. The correct pattern to match migrations/ anywhere would be **/migrations/**/*."
        },
        {
          id: 27,
          question: "A developer needs to verify that a React component rule does not accidentally load during Terraform infrastructure work. What is the verification procedure?",
          options: {
            A: "Read the rules file manually to check patterns",
            B: "Read only a .tf file, run /memory, and confirm the React rule (.claude/rules/react-components.md) does not appear",
            C: "Delete the React rules file temporarily",
            D: "Check git log for recent changes to the rules file"
          },
          correct: "B",
          explanation: "Proper verification: read a .tf file, then run /memory. If the React rule does not appear in the output, the path patterns are correctly isolated. If it does appear, the rule's glob pattern is too broad and needs refinement."
        },
        {
          id: 28,
          question: "A project has the pattern **/{Dockerfile,docker-compose*.yml} in infrastructure rules. A file named docker-compose.prod.yml exists at deployment/docker-compose.prod.yml. Does it match?",
          options: {
            A: "No — the pattern requires Dockerfile to also be present",
            B: "Yes — deployment/ matches **/, docker-compose.prod.yml matches docker-compose*.yml",
            C: "No — .prod.yml has too many dots",
            D: "Only if Dockerfile is in the same directory"
          },
          correct: "B",
          explanation: "**/ matches any directory depth including deployment/. docker-compose*.yml matches docker-compose followed by any characters and .yml — so docker-compose.prod.yml matches. The {} alternatives mean matching either Dockerfile or docker-compose*.yml is sufficient."
        },
        {
          id: 29,
          question: "A team lead reviews the .claude/rules/ directory and finds a file without YAML frontmatter. They want it to only apply to Python files. What needs to be added?",
          options: {
            A: "A # Python only comment at the top",
            B: "YAML frontmatter with a paths field: ---\\npaths:\\n  - \"**/*.py\"\\n---",
            C: "Rename the file to python.md",
            D: "Move the file to packages/python/.claude/rules/"
          },
          correct: "B",
          explanation: "Without paths frontmatter, a rules file loads unconditionally at session start for all files. Adding YAML frontmatter with a paths field containing **/*.py makes it load only when Claude accesses Python files."
        },
        {
          id: 30,
          question: "A team's certification exam has a question: a convention applies to all database migration files regardless of which package they are in. Should they use path-scoped rules or directory CLAUDE.md?",
          options: {
            A: "Directory CLAUDE.md in each package",
            B: "Path-scoped rules with a pattern like **/migrations/**/* — the convention follows file type/location pattern, not a specific directory",
            C: "Root CLAUDE.md to cover all cases",
            D: "settings.json with migration file paths"
          },
          correct: "B",
          explanation: "When a convention follows a file pattern regardless of location, path-scoped rules are the right choice. **/migrations/**/* matches migration files anywhere in the project without needing copies in each package's directory. This is exactly the use case path-scoped rules are designed for."
        }
      ]
    },
    {
      id: 3,
      title: "Custom Skills with Frontmatter",
      mcqs: [
        {
          id: 1,
          question: "A team has a complex code review checklist that should be invoked manually by developers, not automatically by Claude during every task. Where and how should this be stored?",
          options: {
            A: "In CLAUDE.md so it applies to every task",
            B: "In .claude/commands/review.md or .claude/skills/ as a slash command — invoked on demand rather than always applied",
            C: "In settings.json as a permission rule",
            D: "In a separate README file"
          },
          correct: "B",
          explanation: "On-demand actions with a trigger belong in skills or commands, not CLAUDE.md. A code review checklist is something developers invoke when they need it (/review), not something that should influence every coding task automatically."
        },
        {
          id: 2,
          question: "A skill scans the entire codebase and produces a 500-line architecture report. Running it floods the conversation with verbose output that makes subsequent work harder. What frontmatter feature fixes this?",
          options: {
            A: "argument-hint to limit output length",
            B: "context: fork — runs the skill in a separate subagent, returning only a summary to the main conversation",
            C: "allowed-tools: Read only to reduce output",
            D: "user-invocable: false to hide output"
          },
          correct: "B",
          explanation: "context: fork runs the skill in an isolated subagent. The subagent does the verbose work independently and returns only a concise summary to the main conversation. This prevents lengthy exploration output from consuming the primary context window."
        },
        {
          id: 3,
          question: "A security analysis skill should only read files and never modify anything. A developer wants to prevent accidental file edits during analysis. What frontmatter field enforces this?",
          options: {
            A: "context: fork",
            B: "user-invocable: false",
            C: "allowed-tools: Read, Grep, Glob — restricts Claude to read-only tools during skill execution",
            D: "disable-model-invocation: true"
          },
          correct: "C",
          explanation: "allowed-tools restricts which tools Claude can use during skill execution. Setting it to Read, Grep, Glob creates a read-only skill that cannot edit, write, or execute commands — perfect for analysis tasks that should never modify the codebase."
        },
        {
          id: 4,
          question: "A developer invokes /test-generator and doesn't know what arguments to provide. The skill's purpose is unclear from its name alone. What frontmatter field guides users on expected inputs?",
          options: {
            A: "description field",
            B: "argument-hint: \"[source-file] [test-framework?]\" — shows developers what arguments the skill expects with autocomplete hints",
            C: "context: fork",
            D: "allowed-tools"
          },
          correct: "B",
          explanation: "argument-hint provides autocomplete guidance showing what parameters the skill expects. Developers see the hint when typing the slash command, knowing to provide a source file and optionally a test framework — eliminating guesswork about skill usage."
        },
        {
          id: 5,
          question: "A deployment skill should never be triggered automatically by Claude during a task — only explicitly invoked by a developer typing the command. What frontmatter field enforces this?",
          options: {
            A: "user-invocable: false",
            B: "context: fork",
            C: "disable-model-invocation: true — prevents Claude from auto-triggering the skill",
            D: "allowed-tools: none"
          },
          correct: "C",
          explanation: "disable-model-invocation: true prevents Claude from automatically invoking the skill during task execution. The skill can still be invoked explicitly by the developer. This is critical for consequential actions like deployment or deletion that should never run autonomously."
        },
        {
          id: 6,
          question: "A developer creates a personal skill for their own workflow that should not be visible to or usable by teammates. Where should this skill be stored?",
          options: {
            A: ".claude/skills/ in the project repository",
            B: "~/.claude/skills/ — personal skills are private to one developer and invisible to teammates",
            C: ".claude/commands/ with a private flag",
            D: "settings.json with access restrictions"
          },
          correct: "B",
          explanation: "Personal skills stored in ~/.claude/skills/ are private to the individual developer. They are not committed to version control and are invisible to teammates. They override project-scoped skills with the same name, allowing personal customization without team impact."
        },
        {
          id: 7,
          question: "Two skills have the same name — one in the project's .claude/skills/ and one in the developer's ~/.claude/skills/. Which takes precedence?",
          options: {
            A: "The project skill always wins",
            B: "The personal skill (~/.claude/skills/) overrides the project skill",
            C: "Both run sequentially",
            D: "Claude prompts the user to choose"
          },
          correct: "B",
          explanation: "Priority hierarchy: enterprise > personal > project. Personal skills in ~/.claude/skills/ override project-scoped versions with the same name. This allows developers to customize shared skills for their personal workflow without modifying the shared version."
        },
        {
          id: 8,
          question: "A skill should be invoked only by Claude autonomously when relevant, never by developers typing a slash command. What frontmatter configuration achieves this?",
          options: {
            A: "disable-model-invocation: true",
            B: "user-invocable: false — Claude can invoke it; developers cannot",
            C: "context: fork",
            D: "argument-hint: none"
          },
          correct: "B",
          explanation: "user-invocable: false prevents the skill from appearing in the slash command menu and blocks manual invocation. Claude can still trigger it automatically when relevant. This is useful for background knowledge skills like legacy documentation that Claude uses but developers don't need to invoke."
        },
        {
          id: 9,
          question: "A developer wants to invoke a skill with specific arguments: /generate-tests src/auth.py pytest. How does the skill access these individual arguments?",
          options: {
            A: "Via $ARGUMENTS as a single string only",
            B: "Via positional variables: $0 for src/auth.py, $1 for pytest (or $ARGUMENTS[0], $ARGUMENTS[1])",
            C: "Arguments aren't supported — skills take no parameters",
            D: "Via environment variables set before invocation"
          },
          correct: "B",
          explanation: "Individual arguments are accessible by position: $0 for the first argument, $1 for the second, and so on. $ARGUMENTS[0] is equivalent syntax. This allows skills to accept structured parameters and use each value independently within the skill's instructions."
        },
        {
          id: 10,
          question: "A code review command file uses $ARGUMENTS as a placeholder. A developer runs /review focus on security. What does $ARGUMENTS resolve to in the skill execution?",
          options: {
            A: "Nothing — $ARGUMENTS is a literal string",
            B: "'focus on security' — the full text provided after the command name",
            C: "Only 'security' — spaces split into separate variables",
            D: "The entire git diff of the repository"
          },
          correct: "B",
          explanation: "$ARGUMENTS resolves to the full text provided after the command name. Running /review focus on security sets $ARGUMENTS to 'focus on security', which gets substituted into the skill's instructions. This allows the same skill to be customized at invocation time."
        },
        {
          id: 11,
          question: "A team wants to version-control their review checklist, test generation workflow, and deployment procedures so new team members automatically receive them. What storage approach achieves this?",
          options: {
            A: "~/.claude/skills/ on each machine",
            B: ".claude/skills/ or .claude/commands/ committed to the project git repository",
            C: "A separate private wiki",
            D: "settings.json in the repository"
          },
          correct: "B",
          explanation: "Project-scoped skills and commands stored in .claude/skills/ or .claude/commands/ are committed to version control. New team members cloning the repository automatically receive all team skills — no manual setup required and skills evolve with the codebase."
        },
        {
          id: 12,
          question: "When should a team use a simple command file versus a full skill with directory structure?",
          options: {
            A: "Skills are always better than commands",
            B: "Start with commands for simple single-file instructions; use skills when you need supporting files, complex organization, or multiple related resources",
            C: "Commands are deprecated — always use skills",
            D: "Use skills for personal use, commands for team use"
          },
          correct: "B",
          explanation: "Commands are simpler — a single markdown file in .claude/commands/. Skills add the ability to include supporting files in a directory structure. The recommendation is to start simple with commands and graduate to skills when complexity warrants it."
        },
        {
          id: 13,
          question: "A skill uses context: fork to run architecture exploration. The developer asks what information the forked subagent has access to from the main conversation. What is the answer?",
          options: {
            A: "Full access to all conversation history",
            B: "No access — context: fork creates an isolated subagent that does not have the main conversation context",
            C: "Access to the last 10 messages only",
            D: "Access to all tool results but not conversation text"
          },
          correct: "B",
          explanation: "context: fork runs the skill in a separate subagent with no access to the main conversation context. This is intentional — the subagent works independently and returns only a summary. This isolation is why context: fork is inappropriate for skills that need current conversation context."
        },
        {
          id: 14,
          question: "A team has both a code style convention (applies to every task) and a periodic dependency audit (runs monthly). How should each be stored?",
          options: {
            A: "Both in CLAUDE.md",
            B: "Code style in CLAUDE.md (always applies); dependency audit as a skill in .claude/skills/ (on-demand invocation)",
            C: "Both as skills",
            D: "Code style as a skill; dependency audit in CLAUDE.md"
          },
          correct: "B",
          explanation: "The decision rule: 'Always applies to every task? CLAUDE.md. On-demand action with trigger? Skill.' Code style applies universally. Dependency audits are periodic, side-effect operations that should be explicitly invoked — exactly what skills are designed for."
        },
        {
          id: 15,
          question: "An enterprise organization wants all developers to have access to a company-wide skill that overrides any project-level skill with the same name. How is this configured?",
          options: {
            A: "Add the skill to every project's .claude/skills/",
            B: "Use managed settings to deploy the skill organization-wide — enterprise skills have the highest priority",
            C: "Store the skill in ~/.claude/skills/ on each machine",
            D: "Use settings.json to reference the central skill"
          },
          correct: "B",
          explanation: "Priority hierarchy is enterprise > personal > project. Enterprise skills deployed via managed settings take the highest priority, overriding personal and project-level skills with the same name. This enables organization-wide standard workflows."
        },
        {
          id: 16,
          question: "A skill executes `npm audit` to check for vulnerabilities. This is a side-effect operation that could produce unexpected output if run at the wrong time. What frontmatter prevents Claude from auto-triggering it?",
          options: {
            A: "user-invocable: false",
            B: "disable-model-invocation: true",
            C: "allowed-tools: none",
            D: "context: fork"
          },
          correct: "B",
          explanation: "disable-model-invocation: true prevents Claude from autonomously triggering the skill. Consequential operations like audit runs, deployments, and deletions should never run without explicit developer intent. This frontmatter ensures human-initiated invocation only."
        },
        {
          id: 17,
          question: "A skill with allowed-tools: Bash(npm audit*) is invoked. The skill's instructions tell Claude to also run git status. What happens?",
          options: {
            A: "Claude runs git status because the skill instructions override allowed-tools",
            B: "Claude cannot run git status — allowed-tools restricts to only commands matching 'npm audit*'; git status is blocked",
            C: "Claude asks permission to run git status",
            D: "Claude runs git status using a different tool"
          },
          correct: "B",
          explanation: "allowed-tools strictly limits what Claude can do during skill execution. Bash(npm audit*) permits only bash commands matching that prefix. Even if skill instructions mention other commands, Claude cannot execute them — the restriction takes precedence."
        },
        {
          id: 18,
          question: "A developer creates a skill to trace data flows through the codebase. The investigation reads 25 files and the full content would flood the conversation. The skill is configured with context: fork and agent: Explore. What does the developer receive in the main conversation?",
          options: {
            A: "Full content of all 25 files",
            B: "A concise summary from the Explore subagent — the raw file contents remain in the isolated context",
            C: "An error — Explore agent cannot be specified in skills",
            D: "A list of the 25 file paths only"
          },
          correct: "B",
          explanation: "context: fork with agent: Explore runs an isolated Explore subagent that has read-only access and returns a concise summary. The 25 files' raw content stays in the subagent's isolated context window. The main conversation receives only the summary, preserving context for planning and execution."
        },
        {
          id: 19,
          question: "What is the key difference between storing a skill in .claude/commands/ versus .claude/skills/?",
          options: {
            A: "Commands support frontmatter; skills do not",
            B: "Skills support supporting files in a directory structure; commands are single markdown files",
            C: "Commands are for personal use; skills are for team use",
            D: "Skills cannot be version-controlled"
          },
          correct: "B",
          explanation: "Commands in .claude/commands/ are single markdown files — simple and direct. Skills in .claude/skills/ add the ability to include supporting files in a directory structure alongside the SKILL.md file, enabling more complex organization and multiple related resources."
        },
        {
          id: 20,
          question: "A developer invokes /review focus on the auth module. The $ARGUMENTS placeholder in the skill resolves to 'focus on the auth module'. How does this value get used?",
          options: {
            A: "It replaces the entire skill instructions",
            B: "It is substituted wherever $ARGUMENTS appears in the skill's markdown content, customizing the standard checklist with the provided context",
            C: "It is ignored — skills use static instructions only",
            D: "It is passed as an environment variable"
          },
          correct: "B",
          explanation: "Argument substitution replaces $ARGUMENTS in the skill's content with the provided text. The review skill's checklist runs normally with the additional context 'focus on the auth module' substituted at the $ARGUMENTS position, guiding Claude's attention."
        },
        {
          id: 21,
          question: "A team considers whether commit message format standards should be in CLAUDE.md or a skill. What is the correct placement?",
          options: {
            A: "A skill — it's invoked when making commits",
            B: "CLAUDE.md — commit message format is a convention that applies to every commit action, not an on-demand invocation",
            C: "settings.json",
            D: "Either works equally well"
          },
          correct: "B",
          explanation: "The decision rule: conventions that always apply go in CLAUDE.md. Commit message format should influence every commit Claude makes, not just when a developer remembers to invoke a skill. Universal conventions belong in CLAUDE.md."
        },
        {
          id: 22,
          question: "A skill is designed to provide background context about legacy code that Claude should reference but developers should never invoke directly. What frontmatter combination achieves this?",
          options: {
            A: "disable-model-invocation: true",
            B: "user-invocable: false — Claude can invoke it automatically; developers cannot trigger it manually",
            C: "context: fork",
            D: "allowed-tools: Read"
          },
          correct: "B",
          explanation: "user-invocable: false hides the skill from the slash command menu, preventing manual invocation. Claude can still auto-invoke it when the legacy context is relevant. This is the intended pattern for background knowledge skills."
        },
        {
          id: 23,
          question: "A developer's personal skill in ~/.claude/skills/format.md conflicts with the project's .claude/skills/format.md skill. When the developer runs /format, which version executes?",
          options: {
            A: "The project skill — shared resources take priority",
            B: "The personal skill — ~/.claude/skills/ overrides project-level skills with the same name",
            C: "Both run in sequence",
            D: "Claude prompts the developer to choose"
          },
          correct: "B",
          explanation: "Personal skills override project-scoped skills with the same name. Priority: enterprise > personal > project. This enables developers to have customized versions of shared skills without modifying the team's canonical version."
        },
        {
          id: 24,
          question: "A skill that explores the full codebase architecture is configured with context: fork. A teammate asks if this skill can reference the current conversation's debugging context. What is the answer?",
          options: {
            A: "Yes — forked skills share the full conversation history",
            B: "No — the fork creates an isolated context; the skill has no access to the main conversation and cannot reference prior debugging discussion",
            C: "Yes, but only the last 5 messages",
            D: "Yes, if the developer passes context via $ARGUMENTS"
          },
          correct: "B",
          explanation: "context: fork creates complete isolation. The subagent has no access to the main conversation. The lesson explicitly notes this as a limitation: 'Don't use context: fork for reference knowledge where the subagent needs current conversation context.'"
        },
        {
          id: 25,
          question: "A team creates a skill with argument-hint: \"[issue-number]\". A developer types /fix-issue and sees this hint. What does it tell them?",
          options: {
            A: "The skill will automatically find the issue number",
            B: "The skill expects an issue number as its argument — the developer should type /fix-issue 123 to provide the issue number",
            C: "The issue number is optional and defaults to the latest",
            D: "The hint is decorative and has no functional meaning"
          },
          correct: "B",
          explanation: "argument-hint provides autocomplete guidance. Seeing [issue-number] tells the developer to provide a GitHub issue number as the argument. The skill uses $0 or $ARGUMENTS[0] to access this value. Hints set clear expectations about required inputs."
        },
        {
          id: 26,
          question: "Why does storing team workflows as skills in version control provide an advantage over wiki documentation?",
          options: {
            A: "Skills are faster to read than wikis",
            B: "Skills are version-controlled alongside source code, executable directly in Claude, and automatically available to anyone who clones the repository — unlike wiki pages that get outdated and forgotten",
            C: "Skills require no maintenance",
            D: "Wikis cannot be accessed by Claude"
          },
          correct: "B",
          explanation: "Version-controlled skills evolve with the codebase, are immediately executable as slash commands, and require no separate wiki access. Team knowledge stored as skills is always current (or a PR away from current) and immediately actionable, unlike wiki pages that drift out of date."
        },
        {
          id: 27,
          question: "A developer wants to allow Claude to only run specific git commands during a skill: git log and git diff. What is the correct allowed-tools syntax?",
          options: {
            A: "allowed-tools: git log, git diff",
            B: "allowed-tools: Bash(git log *), Bash(git diff *)",
            C: "allowed-tools: Git(log, diff)",
            D: "allowed-tools: Bash(*git*)"
          },
          correct: "B",
          explanation: "Bash tool restrictions use Bash(command-prefix) syntax. Bash(git log *) permits bash commands starting with 'git log ' followed by any arguments. Bash(git diff *) permits git diff commands. The space before * ensures the restriction is precise."
        },
        {
          id: 28,
          question: "What problem does storing skills in .claude/skills/ solve compared to maintaining a team wiki?",
          options: {
            A: "Skills are stored in the cloud automatically",
            B: "Skills live in the repository, stay current through PRs, and are directly executable — eliminating the 'team knowledge in forgotten wiki pages' problem",
            C: "Skills require no updates over time",
            D: "Skills are accessible without internet connection"
          },
          correct: "B",
          explanation: "The lesson's core value proposition: transform team knowledge into executable actions version-controlled alongside source code. Wiki pages get outdated and forgotten; skills get updated through the same PR process as code and are immediately executable."
        },
        {
          id: 29,
          question: "A skill is configured as a brainstorming tool that generates many creative ideas and explores multiple directions. Should context: fork be used here?",
          options: {
            A: "No — brainstorming should always be in the main conversation",
            B: "Yes — brainstorming produces verbose exploratory output that can consume conversation context; forking isolates this and returns a summary",
            C: "Only if the skill uses allowed-tools",
            D: "No — context: fork is only for file scanning"
          },
          correct: "B",
          explanation: "The lesson lists brainstorming sessions as a use case for context: fork. Exploratory, verbose operations that produce lengthy output benefit from isolation. The forked subagent explores freely; the main conversation receives a manageable summary."
        },
        {
          id: 30,
          question: "A developer has a skill that should only be available to them personally and should override any project-level version with the same name. What is the correct storage location?",
          options: {
            A: ".claude/skills/ with a personal flag",
            B: "~/.claude/skills/ — personal location that is private, not version-controlled, and takes precedence over project-level skills",
            C: "~/.claude/CLAUDE.md with an embedded skill",
            D: "Enterprise managed settings"
          },
          correct: "B",
          explanation: "~/.claude/skills/ is the personal skill location. Skills there are private (never committed to git), invisible to teammates, and override project-scoped skills with the same name due to priority: enterprise > personal > project."
        }
      ]
    },
    {
      id: 4,
      title: "Plan Mode vs Direct Execution",
      mcqs: [
        {
          id: 1,
          question: "A developer needs to fix a null pointer exception that has a clear stack trace pointing to one function. Which execution mode is appropriate?",
          options: {
            A: "Plan mode — all bugs require planning",
            B: "Direct execution — the scope is clear, the location is known, and there is one obvious fix",
            C: "Explore subagent first",
            D: "Plan mode because the stack trace could be misleading"
          },
          correct: "B",
          explanation: "Direct execution is for well-scoped tasks with clear, obvious implementations. A null pointer exception with a clear stack trace pointing to one function is the archetypal case for direct execution — no architectural decisions, no unknown scope, single file change."
        },
        {
          id: 2,
          question: "A team wants to split a monolithic application into microservices. Multiple valid service boundary options exist. Which execution mode should be used first?",
          options: {
            A: "Direct execution — start implementing and adjust as you go",
            B: "Plan mode — multiple valid approaches require investigation and design before implementation",
            C: "Skip planning and use auto mode",
            D: "Explore subagent only, no planning needed"
          },
          correct: "B",
          explanation: "Plan mode is for tasks where the approach matters as much as the implementation. Monolith-to-microservices migration has multiple valid service boundary options — these architectural decisions must be made and approved before any implementation begins."
        },
        {
          id: 3,
          question: "A developer needs to replace moment.js with dayjs across 47 files but doesn't know which files use which moment.js features. What is the optimal workflow?",
          options: {
            A: "Direct execution across all 47 files",
            B: "Plan mode immediately without investigation",
            C: "Explore first (investigate usage patterns) → Plan (design migration strategy) → Execute (implement approved plan)",
            D: "Auto mode with no planning"
          },
          correct: "C",
          explanation: "The Explore-Plan-Execute pattern is optimal for this case. Explore maps all 47 files and their usage patterns. Plan designs the migration strategy based on findings (basic formatting first, then timezone, then relative time). Execute implements the approved plan — preventing rework from discovering surprises mid-implementation."
        },
        {
          id: 4,
          question: "After using plan mode, Claude proposes an approach. The developer approves it. What is the next step?",
          options: {
            A: "Stay in plan mode and refine further",
            B: "Switch to direct execution mode to implement the approved plan",
            C: "Run explore subagent to verify the plan",
            D: "Restart Claude with the plan as a prompt"
          },
          correct: "B",
          explanation: "Plan mode investigates and proposes without modifying files. Once the developer reviews, discusses, and approves the approach, they switch to direct execution mode to implement the approved plan. Plan mode and execution mode are sequential phases."
        },
        {
          id: 5,
          question: "An Explore subagent investigates 20 files and returns a 2-paragraph summary. Meanwhile, the same investigation done directly would have consumed 60% of the context window. What is the key benefit demonstrated?",
          options: {
            A: "The Explore subagent is faster than direct investigation",
            B: "Context isolation — Explore reads files in a separate context window and returns only a summary, preserving the main context for planning and execution",
            C: "The Explore subagent uses a smaller model to save costs",
            D: "Explore subagents have access to more files than the main context"
          },
          correct: "B",
          explanation: "The key benefit is context preservation. The Explore subagent's isolated context absorbs the raw file contents. Only the compact summary reaches the main conversation. With 60% of context preserved, there's ample space for the planning and execution phases."
        },
        {
          id: 6,
          question: "A developer is adding a single form field with input validation. What execution mode should they use?",
          options: {
            A: "Plan mode — all UI changes need planning",
            B: "Explore first to understand the form structure",
            C: "Direct execution — adding a form field with validation is well-scoped with an obvious implementation",
            D: "Explore-Plan-Execute pattern"
          },
          correct: "C",
          explanation: "Adding a form field with validation is a concrete, well-scoped task with a clear implementation path. It doesn't span many files, doesn't have multiple valid architectural approaches, and the implementation is straightforward — direct execution is the right choice."
        },
        {
          id: 7,
          question: "Without using plan mode, a developer starts implementing a database schema redesign. At file 8 of 20, they discover a design problem requiring them to undo 7 files of work and restart. How would plan mode have helped?",
          options: {
            A: "Plan mode would have prevented the design problem from existing",
            B: "Plan mode's investigation phase would have revealed the design problem before implementation began, eliminating the 7-file rework entirely",
            C: "Plan mode would have implemented the 7 files faster",
            D: "Plan mode only helps with single-file changes"
          },
          correct: "B",
          explanation: "This is exactly the efficiency case for plan mode: the 3-minute planning phase spots design problems before code is written. Without plan mode, 10 minutes of rework result from discovering the problem mid-implementation. Plan mode converts a 20-minute task into a 9-minute task."
        },
        {
          id: 8,
          question: "How is plan mode activated in Claude Code?",
          options: {
            A: "By typing /mode plan in the prompt",
            B: "By typing /plan in the prompt or pressing Shift+Tab to toggle between modes",
            C: "By adding plan: true to settings.json",
            D: "By starting the prompt with 'Plan:'"
          },
          correct: "B",
          explanation: "Plan mode is accessed by typing /plan in the prompt or pressing Shift+Tab to toggle between plan and execution modes. These are the two access methods documented in the lesson."
        },
        {
          id: 9,
          question: "What restriction does the Explore subagent operate under that makes it safe for broad investigation?",
          options: {
            A: "It can only access files modified in the last 24 hours",
            B: "It operates with read-only tools (Read, Grep, Glob) — it cannot modify files, making broad investigation safe",
            C: "It is limited to 10 files per investigation",
            D: "It cannot access directories without explicit permission"
          },
          correct: "B",
          explanation: "The Explore subagent has read-only access through Read, Grep, and Glob tools. It investigates without modifying anything, making broad codebase exploration completely safe. After investigation, it returns a concise summary to the main conversation."
        },
        {
          id: 10,
          question: "A team is migrating from one framework to another across 30+ files. The current state of usage is unknown. What is the correct first step?",
          options: {
            A: "Begin direct execution on the first file",
            B: "Enter plan mode immediately",
            C: "Use Explore subagent to investigate current usage patterns before planning the migration",
            D: "Use auto mode to handle everything automatically"
          },
          correct: "C",
          explanation: "Unknown scope requires Explore first. The subagent investigates how the current framework is used across 30+ files and returns a summary. Only with that knowledge can a realistic migration plan be designed. Explore → Plan → Execute is the optimal pattern for unknown-scope migrations."
        },
        {
          id: 11,
          question: "A developer uses plan mode for a complex task and notes that Claude 'investigates and explores options without modifying files' during this phase. Why is this important?",
          options: {
            A: "To avoid using API tokens",
            B: "Investigation without modification means no unwanted changes occur during the design phase — developers can evaluate approaches and adjust the plan before any code is touched",
            C: "Files are locked during plan mode for safety",
            D: "Claude cannot access files in plan mode"
          },
          correct: "B",
          explanation: "Plan mode's no-modification constraint ensures the design phase is purely evaluative. Developers can review Claude's proposed approach, see the identified dependencies, consider the tradeoffs, and request adjustments — all without any file changes occurring. Approval precedes implementation."
        },
        {
          id: 12,
          question: "Variable renaming across 4 files — what execution mode?",
          options: {
            A: "Plan mode — multiple files require planning",
            B: "Explore to map all usages first",
            C: "Direct execution — clear scope, mechanical change across a small number of files",
            D: "Plan mode because renaming can break references"
          },
          correct: "C",
          explanation: "Variable renaming is a mechanical change with a clear scope (4 files). The implementation is obvious and the risk of design mistakes is minimal. Direct execution is appropriate for such well-defined, small-scope changes."
        },
        {
          id: 13,
          question: "A developer plans to use auto mode after plan mode approves a complex implementation. What does enabling auto mode change about the execution?",
          options: {
            A: "Auto mode disables all safety checks",
            B: "Auto mode allows uninterrupted implementation while maintaining safety classifiers that block destructive actions",
            C: "Auto mode reverts to plan mode automatically when decisions arise",
            D: "Auto mode uses a different, more capable model"
          },
          correct: "B",
          explanation: "Auto mode (Shift+Tab after plan approval) enables Claude to implement the approved plan without pausing for permission at each step. Safety classifiers remain active to block genuinely destructive actions. It's designed for long, approved implementations where constant interruptions slow progress."
        },
        {
          id: 14,
          question: "A developer is updating error messages across 3 files. What execution mode is appropriate?",
          options: {
            A: "Plan mode — error messages can have cascading effects",
            B: "Direct execution — well-scoped mechanical update across a small number of files",
            C: "Explore to understand error handling patterns first",
            D: "Explore-Plan-Execute pattern"
          },
          correct: "B",
          explanation: "Updating error messages is a concrete, low-complexity task with clear scope (3 files). No architectural decisions need to be made, the approach is obvious, and the implementation is mechanical. Direct execution handles this efficiently."
        },
        {
          id: 15,
          question: "What is the key insight distinguishing when plan mode adds value versus when it adds unnecessary overhead?",
          options: {
            A: "Plan mode always adds value regardless of task type",
            B: "Plan mode adds value when the approach matters as much as the implementation — multiple valid approaches exist or the scope is unclear; it adds overhead for single-file mechanical changes",
            C: "Plan mode only adds overhead — direct execution is always faster",
            D: "The key is file count — more than 5 files always requires plan mode"
          },
          correct: "B",
          explanation: "The key insight: 'Plan mode is for tasks where the approach matters as much as the implementation.' For simple bug fixes or mechanical updates, there's one obvious approach — planning adds overhead. For architectural changes with multiple valid approaches, planning prevents costly rework."
        },
        {
          id: 16,
          question: "A codebase has an unknown performance issue with no clear location. A developer needs to understand the problem before designing a fix. What workflow fits?",
          options: {
            A: "Direct execution — start optimizing the most likely bottleneck",
            B: "Plan mode — design a performance fix without investigating first",
            C: "Explore to understand current performance patterns → Plan the fix → Execute",
            D: "Auto mode to find and fix automatically"
          },
          correct: "C",
          explanation: "Unknown issues require investigation before planning. The Explore subagent can analyze call patterns, profiling data, and code structure to return a clear picture. With that understanding, plan mode designs a targeted fix. Direct execution without investigation risks optimizing the wrong thing."
        },
        {
          id: 17,
          question: "During plan mode, Claude proposes dividing a migration into 3 batches. The developer disagrees with the batch order. What should they do?",
          options: {
            A: "Accept the plan and adjust during execution",
            B: "Discuss the disagreement in plan mode and adjust the plan before switching to execution",
            C: "Reject the plan entirely and start over",
            D: "Switch to auto mode which will decide the order automatically"
          },
          correct: "B",
          explanation: "Plan mode is specifically designed for this discussion. The developer can explain why the batch order should differ, Claude can revise the plan, and they reach agreement before any implementation begins. This collaborative refinement is plan mode's core value."
        },
        {
          id: 18,
          question: "An Explore subagent returns: '47 files import moment; 38 use basic formatting; 6 use timezone; 3 use relative time.' How does this summary enable better plan mode outcomes?",
          options: {
            A: "It doesn't — planning should happen without prior investigation",
            B: "The precise breakdown enables a targeted migration plan: migrate basic files (mechanical), then timezone files (need plugin), then relative time (different API) — in order of complexity",
            C: "It replaces the need for plan mode entirely",
            D: "The summary is too detailed and complicates planning"
          },
          correct: "B",
          explanation: "The Explore summary provides the foundation for a precise plan. Knowing exactly how many files fall into each category and what dependencies each requires enables Claude to propose a realistic, ordered migration strategy. Without this data, plan mode would have to make assumptions."
        },
        {
          id: 19,
          question: "What is the relationship between execution mode (plan vs direct) and permission mode in Claude Code?",
          options: {
            A: "They are the same setting with different names",
            B: "Execution mode controls whether investigation precedes implementation; permission mode controls implementation autonomy — they are separate, complementary settings",
            C: "Permission mode overrides execution mode",
            D: "Execution mode is set in settings.json; permission mode is a runtime toggle"
          },
          correct: "B",
          explanation: "Execution mode (plan vs direct) is about whether Claude investigates and proposes before implementing. Permission mode controls how autonomously Claude implements (requiring approval at each step vs running uninterrupted). They are orthogonal settings that can be combined."
        },
        {
          id: 20,
          question: "A team wants to classify tasks before starting. A language migration across the entire codebase — which mode?",
          options: {
            A: "Direct execution",
            B: "Plan mode only",
            C: "Explore first to map usage, then plan mode for the migration strategy",
            D: "Auto mode"
          },
          correct: "C",
          explanation: "Language migration is the canonical Explore-then-plan-mode case from the lesson. The scope is large, usage patterns are unknown, and multiple approaches exist. Explore maps what exists; plan mode designs the strategy. Direct execution without this foundation risks major rework."
        },
        {
          id: 21,
          question: "A developer considers using plan mode for adding a typo fix. Is plan mode appropriate here?",
          options: {
            A: "Yes — all changes benefit from planning",
            B: "No — typo fixes have obvious implementation with minimal scope; direct execution is faster and appropriate",
            C: "Yes — typos can have cascading effects",
            D: "Use Explore first to find all typos"
          },
          correct: "B",
          explanation: "Typo fixes are at the opposite end of the complexity spectrum from architectural changes. The implementation is trivial, the scope is minimal, and there is only one correct approach. Plan mode would add overhead with zero benefit — direct execution is always correct here."
        },
        {
          id: 22,
          question: "A skill is defined with context: fork and agent: Explore for codebase investigation. In the Explore-Plan-Execute pattern, what phase does this skill correspond to?",
          options: {
            A: "The Execute phase",
            B: "The Plan phase",
            C: "The Explore phase — the skill runs a read-only Explore subagent that investigates and returns a summary",
            D: "All three phases simultaneously"
          },
          correct: "C",
          explanation: "A skill with context: fork and agent: Explore executes the Explore phase of the pattern. It runs read-only investigation in isolation and returns a compact summary to the main conversation. That summary then informs the Plan phase, which precedes the Execute phase."
        },
        {
          id: 23,
          question: "In direct execution mode, Claude proposes implementing an API endpoint. Halfway through, it realizes the database schema needs a change it hadn't anticipated. This causes 20 minutes of rework. What would have prevented this?",
          options: {
            A: "Using a different model",
            B: "Plan mode — the investigation phase would have identified the schema dependency before implementation began",
            C: "Auto mode to handle dependencies automatically",
            D: "Smaller context window"
          },
          correct: "B",
          explanation: "Plan mode's investigation phase explores dependencies and identifies what else needs to change before implementation begins. Discovering the schema dependency during planning adds 3 minutes; discovering it at file 8 of 15 costs 20 minutes of rework. This is the efficiency argument for plan mode on complex tasks."
        },
        {
          id: 24,
          question: "A developer needs to implement a single API endpoint with well-understood requirements. No architectural decisions are involved. What execution mode?",
          options: {
            A: "Plan mode — API endpoints affect many downstream consumers",
            B: "Explore first to understand the API structure",
            C: "Direct execution — clear scope, understood requirements, obvious implementation",
            D: "Explore-Plan-Execute"
          },
          correct: "C",
          explanation: "A single endpoint with well-understood requirements and no architectural ambiguity is exactly the direct execution use case. The scope is defined, the implementation is clear, and plan mode would add time without adding value."
        },
        {
          id: 25,
          question: "What happens in plan mode when Claude identifies dependencies the developer hadn't considered?",
          options: {
            A: "Claude silently adds them to the implementation",
            B: "Claude includes them in the proposed approach for developer review before any implementation begins",
            C: "Claude stops and reports an error",
            D: "Claude skips those dependencies"
          },
          correct: "B",
          explanation: "Plan mode surfaces dependencies explicitly in the proposed approach. The developer sees what Claude plans to change, including discovered dependencies, and can approve or adjust before implementation starts. This transparency is a core benefit of plan mode."
        },
        {
          id: 26,
          question: "A framework transition involves choices that depend on infrastructure decisions. Unknown infrastructure state makes the approach unclear. What is the first step?",
          options: {
            A: "Enter plan mode immediately",
            B: "Use direct execution on the most obvious files",
            C: "Use Explore to investigate infrastructure state → then Plan based on findings → then Execute",
            D: "Use auto mode to auto-detect infrastructure"
          },
          correct: "C",
          explanation: "When the current state is unclear and the approach depends on that state, Explore comes first. The investigation returns what infrastructure exists. Plan mode then uses that knowledge to design an approach that fits the actual infrastructure. Execution follows approved design."
        },
        {
          id: 27,
          question: "A developer compares plan mode overhead (3 min) against prevented rework (10 min) on a complex task. What does this analysis demonstrate?",
          options: {
            A: "Plan mode is not worth it since 3 minutes is not negligible",
            B: "Plan mode's 3-minute overhead is far less than the 10-minute rework it prevents — the net saving is 7 minutes on this task",
            C: "Plan mode should only be used when tasks take more than 1 hour",
            D: "The analysis is flawed because plan mode always takes longer"
          },
          correct: "B",
          explanation: "The efficiency analysis in the lesson is clear: 3-minute planning overhead prevents 10-minute rework cost. Total time with plan mode: 9 minutes. Without: 20 minutes. The 'overhead' framing is the misconception — plan mode reduces total time on complex tasks."
        },
        {
          id: 28,
          question: "A developer is classifying tasks for mode selection: 'single-endpoint validation addition.' What is the correct classification?",
          options: {
            A: "Plan mode",
            B: "Explore then plan",
            C: "Direct execution",
            D: "Auto mode"
          },
          correct: "C",
          explanation: "The lesson explicitly lists single-endpoint validation as a direct execution example. It has clear scope (one endpoint), obvious implementation (add validation), and no architectural decisions. The decision tree leads directly to direct execution."
        },
        {
          id: 29,
          question: "After the Explore phase summarizes findings from 20 files, a developer enters plan mode. The summary consumed minimal context. Why does this context preservation matter?",
          options: {
            A: "Larger context costs more",
            B: "The remaining context space is needed for plan mode investigation, design discussion, and eventually the execution phase — consuming 60% in Explore would leave too little for the subsequent phases",
            C: "Context window health affects model accuracy",
            D: "Smaller context means faster responses"
          },
          correct: "B",
          explanation: "The Explore-Plan-Execute pattern depends on having sufficient context at each phase. If Explore consumed 60% of context with raw file contents, only 40% remains for planning discussion and implementation. The compact summary preserves context that the design and execution phases need."
        },
        {
          id: 30,
          question: "A developer uses Shift+Tab during a session. What does this toggle?",
          options: {
            A: "Between dark and light mode",
            B: "Between plan mode and direct execution mode",
            C: "Between auto mode and manual mode",
            D: "Between the current model and a faster model"
          },
          correct: "B",
          explanation: "Shift+Tab toggles between plan mode and direct execution mode. Along with typing /plan in the prompt, it is one of the two documented access methods for switching to plan mode."
        }
      ]
    },
    {
      id: 5,
      title: "Iterative Refinement Techniques",
      mcqs: [
        {
          id: 1,
          question: "A developer asks Claude to 'normalize the dates' in a dataset. The result uses MM/DD/YYYY format when ISO 8601 (YYYY-MM-DD) was needed. What would have prevented this ambiguity?",
          options: {
            A: "Using plan mode before the request",
            B: "Providing concrete input/output examples: input '05/03/2024' → output '2024-05-03'",
            C: "Starting a fresh session",
            D: "Using a more specific model"
          },
          correct: "B",
          explanation: "Input/output examples eliminate ambiguity that prose cannot resolve. 'Normalize dates' is ambiguous — two reasonable interpretations produce different results. A concrete example showing the exact input and expected output leaves no room for misinterpretation."
        },
        {
          id: 2,
          question: "A developer needs Claude to implement a complex rate-limiting algorithm. The developer has specific domain knowledge about edge cases. What is the most effective technique for guiding the implementation?",
          options: {
            A: "Input/output examples only",
            B: "The interview pattern — let Claude ask questions to discover requirements, edge cases, and design decisions from the developer's domain knowledge",
            C: "Starting the implementation and correcting mistakes",
            D: "Writing a detailed description of the algorithm"
          },
          correct: "B",
          explanation: "The interview pattern is designed for situations where the developer has domain knowledge but lacks technical specification expertise. Claude asks about cache invalidation strategy, failure handling, stampede protection, and scale needs — drawing out requirements the developer knows but hadn't formalized."
        },
        {
          id: 3,
          question: "A developer writes tests for a date parsing function and shares them with Claude. Claude implements the function, runs the tests, and 3 fail. What is the next step in test-driven iteration?",
          options: {
            A: "Rewrite the tests to match Claude's implementation",
            B: "Share the 3 failing tests with Claude so it can iterate on the implementation until they pass",
            C: "Start a fresh session with different instructions",
            D: "Accept the implementation as 80% complete"
          },
          correct: "B",
          explanation: "Test-driven iteration workflow: developer writes tests → Claude implements → Claude runs tests → share failures → Claude iterates. Each failure narrows the gap between current and desired implementation. The cycle continues until all tests pass. Tests are the specification; failures are the feedback."
        },
        {
          id: 4,
          question: "Why must the developer write the tests in test-driven iteration rather than asking Claude to write both tests and implementation?",
          options: {
            A: "Claude cannot write tests",
            B: "If Claude writes both tests and implementation, the tests will trivially pass without verifying correctness — the developer's domain knowledge must encode what 'correct' means",
            C: "Tests must be written in a specific language Claude doesn't know",
            D: "It's faster for developers to write tests"
          },
          correct: "B",
          explanation: "The critical insight: 'If Claude writes both tests and implementation, tests will pass trivially.' Claude would write tests that its own implementation satisfies, not tests that verify real correctness. The developer's domain knowledge about edge cases and correctness criteria must define what 'correct' means."
        },
        {
          id: 5,
          question: "A developer discovers three independent bugs: one in the auth module, one in the payment module, and one error message typo. Should these be communicated to Claude in one message or sequentially?",
          options: {
            A: "One message — always batch everything for efficiency",
            B: "Sequentially — independent fixes should be communicated one at a time",
            C: "Sequentially because all bugs must be sent separately regardless",
            D: "One message is fine since fixes are independent and don't interact"
          },
          correct: "D",
          explanation: "Sequential vs single-message decision: when fixes are independent (different modules, no shared logic), they can be batched in one message. The auth fix, payment fix, and typo fix have no interaction — sending them together is efficient. Sequential is for when fixes interact or one changes context for others."
        },
        {
          id: 6,
          question: "A developer has two related bugs: a type coercion change that affects boundary checks. Should these be communicated together or sequentially?",
          options: {
            A: "Separately — always send one fix at a time",
            B: "Together in a single message — fixes that interact or affect each other's context should be communicated together",
            C: "It doesn't matter — Claude handles them identically either way",
            D: "Separately because type and boundary issues are different categories"
          },
          correct: "B",
          explanation: "Fixes that interact belong in a single message. A type coercion change that affects boundary checks means fixing one changes the context for the other. Communicating them together lets Claude see the full picture and handle the interaction correctly."
        },
        {
          id: 7,
          question: "The interview pattern produces a detailed specification. What should the developer do with this specification to get the best implementation?",
          options: {
            A: "Continue in the same session and ask Claude to implement immediately",
            B: "Start a fresh session with the specification as the prompt — the interview produces artifacts; clean execution works best in a focused new context",
            C: "Save the specification to CLAUDE.md",
            D: "Use the specification as a rules file in .claude/rules/"
          },
          correct: "B",
          explanation: "The lesson explicitly states: 'Start a fresh session with the resulting specification. The interview produces artifacts; the new session executes clean, focused implementation.' The exploration session accumulates conversational noise; fresh context with the clean spec produces better implementation."
        },
        {
          id: 8,
          question: "When is the input/output examples technique least effective?",
          options: {
            A: "For date format transformations",
            B: "For JSON reshaping",
            C: "For subjective tasks like 'refactor for readability' where there is no clear input-output contract",
            D: "For SQL generation"
          },
          correct: "C",
          explanation: "I/O examples work best for format-specific, deterministic transformations where the input and output can be precisely specified. Subjective tasks like 'refactor for readability' have no clear output specification — examples can't eliminate the subjectivity. Test-driven or interview patterns are better here."
        },
        {
          id: 9,
          question: "How many input/output examples are typically sufficient for most format transformation tasks?",
          options: {
            A: "At least 10 — more examples always improve accuracy",
            B: "Two to three examples, focused on cases where two reasonable interpretations would produce different output",
            C: "One example is always sufficient",
            D: "Examples are not needed if the description is detailed enough"
          },
          correct: "B",
          explanation: "The lesson specifies: 'Two to three examples suffice for most transformations.' Focus on cases where ambiguity exists — where two reasonable interpretations would produce different results. Over-specifying with too many examples adds noise; under-specifying leaves ambiguity."
        },
        {
          id: 10,
          question: "A developer asks Claude to implement error handling for a distributed cache but doesn't know all the edge cases to consider. Which technique is appropriate?",
          options: {
            A: "Input/output examples for each error type",
            B: "Test-driven iteration with predetermined test cases",
            C: "The interview pattern — let Claude surface design questions about failure modes, synchrony, scale, and cache strategy",
            D: "Direct execution with a general prompt"
          },
          correct: "C",
          explanation: "The interview pattern is for unfamiliar domains with unknown edge cases. Distributed cache error handling involves many interacting design decisions (synchronous vs async failure, single vs distributed cache, stampede protection). Claude's questions draw out requirements the developer may not have consciously considered."
        },
        {
          id: 11,
          question: "A developer has more than 5 independent bugs to fix. What is the recommended batching strategy?",
          options: {
            A: "Send all 5+ in one message",
            B: "Send each one separately — never batch",
            C: "Group them into batches of 2-3 and send sequentially",
            D: "Prioritize by severity and send only critical ones"
          },
          correct: "C",
          explanation: "The lesson recommends: 'More than 5 independent fixes: batch in groups of 2-3.' This balances efficiency (not sending one-at-a-time for many simple fixes) with manageability (not overwhelming context with 6+ simultaneous changes)."
        },
        {
          id: 12,
          question: "A test named test_triple_dash_in_body() fails during test-driven iteration. What information does this failure provide to Claude?",
          options: {
            A: "The entire implementation is wrong",
            B: "The implementation fails when the content body contains triple dashes — a specific edge case around the frontmatter delimiter — narrowing the exact gap to fix",
            C: "Tests should be renamed to avoid confusion",
            D: "The test itself is incorrect"
          },
          correct: "B",
          explanation: "Each test failure narrows the implementation gap precisely. A test named test_triple_dash_in_body tells Claude exactly which edge case fails — content with --- in the body is being misidentified as a frontmatter delimiter. This precision guides targeted iteration."
        },
        {
          id: 13,
          question: "The input/output example pattern is described as providing a 'specification contract.' What does this mean in practice?",
          options: {
            A: "It creates a legal agreement about software behavior",
            B: "The examples define exactly what the transformation must produce for given inputs — Claude's implementation must satisfy the examples, not interpret them",
            C: "It is a formal mathematical specification",
            D: "It means the examples cannot be changed after implementation starts"
          },
          correct: "B",
          explanation: "Examples as a specification contract means: 'produce this output for this input, always.' There is no room for interpretation. If the example shows input '05/03/2024' → output '2024-05-03', the implementation must do exactly that — it cannot choose MM/DD/YYYY because it seemed reasonable."
        },
        {
          id: 14,
          question: "A developer has just used the interview pattern with Claude and received a comprehensive specification. Before starting implementation, what is the next recommended action?",
          options: {
            A: "Immediately continue in the same session",
            B: "Start a fresh Claude session and provide the specification as the starting prompt",
            C: "Save the specification to CLAUDE.md and continue",
            D: "Use plan mode to review the specification"
          },
          correct: "B",
          explanation: "The interview session is exploratory and accumulates conversational context about requirements. A fresh session starts clean with just the specification — no noise from the exploration. This produces cleaner, more focused implementation because Claude's full attention goes to the spec rather than the prior conversation."
        },
        {
          id: 15,
          question: "What is the core problem that all three iterative refinement techniques (I/O examples, test-driven, interview) solve?",
          options: {
            A: "Claude's inability to write code",
            B: "The gap between vague instructions and actual requirements — vague inputs lead to repeated corrections; these techniques create feedback loops that converge on the real requirements",
            C: "Slow API response times",
            D: "Token context limits"
          },
          correct: "B",
          explanation: "All three techniques address the fundamental problem: vague instructions to Claude lead to misaligned output requiring repeated corrections. I/O examples make requirements concrete; test-driven iteration makes correctness verifiable; the interview pattern surfaces hidden requirements. All create feedback loops that converge on actual needs."
        },
        {
          id: 16,
          question: "A developer says 'add error handling' to Claude. The result handles some errors but misses database connection timeouts. What technique would have better specified the requirement?",
          options: {
            A: "A more detailed description of 'add error handling'",
            B: "Test-driven iteration — write tests for each error scenario including database timeouts, share them, and iterate until all pass",
            C: "Plan mode to design the error handling",
            D: "The interview pattern asking Claude to explain its error handling approach"
          },
          correct: "B",
          explanation: "Test-driven iteration is ideal when correctness criteria are specific and verifiable. Writing test_database_timeout_handling(), test_connection_refused(), etc. makes the requirements explicit. Claude's implementation must satisfy each test — missing scenarios are immediately visible as failures."
        },
        {
          id: 17,
          question: "An input/output examples specification includes: input {'name': 'John', 'dob': '1990-01-15'} → output {'full_name': 'John', 'birthdate': '01/15/1990'}. What ambiguities does this resolve?",
          options: {
            A: "None — the spec is still vague",
            B: "Field renaming (name → full_name), date format conversion (ISO → US), and the output structure",
            C: "Only the date format",
            D: "Only the field renaming"
          },
          correct: "B",
          explanation: "The example simultaneously resolves multiple ambiguities: the field name changes (name → full_name, dob → birthdate), the date format changes (YYYY-MM-DD → MM/DD/YYYY), and the JSON structure. A prose description would need to specify each of these separately and still might leave ambiguity."
        },
        {
          id: 18,
          question: "A developer uses the interview pattern for a feature and Claude asks: 'Should rate limiting use a synchronous or asynchronous failure handler?' The developer hadn't considered this. What does this demonstrate?",
          options: {
            A: "Claude is overcomplicating the implementation",
            B: "The interview pattern surfaces design decisions the developer hadn't consciously considered — exactly its purpose for unfamiliar domains",
            C: "The developer should have used I/O examples instead",
            D: "This question indicates Claude doesn't understand the requirement"
          },
          correct: "B",
          explanation: "Surfacing unanticipated design decisions is the interview pattern's primary value. The developer has domain knowledge but may not know all the technical decisions involved. Claude's question reveals a consequential design choice the developer needs to make — before it's implicitly made during implementation."
        },
        {
          id: 19,
          question: "A complex feature combines the interview pattern, I/O examples, and test-driven iteration. In what order should they be applied?",
          options: {
            A: "Test-driven → I/O examples → Interview",
            B: "I/O examples → Interview → Test-driven",
            C: "Interview (discover requirements) → I/O examples (lock transformations) → Test-driven (verify implementation)",
            D: "All three simultaneously"
          },
          correct: "C",
          explanation: "The recommended progression: Interview first to discover hidden requirements and design decisions. I/O examples then lock specific transformation specifications discovered during the interview. Test-driven iteration finally encodes all correctness criteria for implementation verification. Each technique builds on the previous."
        },
        {
          id: 20,
          question: "A developer provides Claude with a JSON reshaping example: input {'user': {'first': 'Jane', 'last': 'Smith'}} → output {'full_name': 'Jane Smith'}. Two edge cases emerge: null first name and Unicode characters. How should the specification be extended?",
          options: {
            A: "Describe the edge cases in prose",
            B: "Add example pairs for each edge case: null first name example and a Unicode name example",
            C: "Write a test for each edge case instead",
            D: "The original example is sufficient"
          },
          correct: "B",
          explanation: "For format-specific tasks, adding example pairs for each edge case extends the I/O specification contract to cover those cases. null first name → specific output and a Unicode name → preserved Unicode output make the handling explicit and unambiguous."
        },
        {
          id: 21,
          question: "A test_unicode_values() test fails during iteration. Claude fixes it and all 6 tests now pass. Is this sufficient for completion?",
          options: {
            A: "No — Claude should also write additional tests to ensure completeness",
            B: "Yes — all specified tests passing means the implementation satisfies the defined correctness criteria",
            C: "No — passing tests don't guarantee production readiness",
            D: "Yes, but only if the tests were written by a senior developer"
          },
          correct: "B",
          explanation: "Test-driven iteration's completion criterion is all specified tests passing. The developer defined correctness through the test suite; Claude's job was to implement code satisfying those tests. All tests passing means the implementation meets the specified requirements — that is the definition of done in this technique."
        },
        {
          id: 22,
          question: "A developer has fixes A and B where fix A changes shared validation logic that fix B also uses. Should these be communicated in one message or sequentially?",
          options: {
            A: "Sequentially — never mix fixes",
            B: "Together in one message — fixes that interact or where one changes context for the other should be communicated together",
            C: "Sequentially — apply A first, then B in a second message",
            D: "Together, but with explicit ordering instructions"
          },
          correct: "B",
          explanation: "When uncertain about fix interactions, the lesson recommends preferring single-message communication for safety. Fixes A and B share validation logic — A's change directly affects B's context. Communicating them together lets Claude see the full scope and handle the interaction correctly rather than applying A blind to B's needs."
        },
        {
          id: 23,
          question: "What makes test-driven iteration superior to I/O examples for complex multi-step logic?",
          options: {
            A: "Tests are easier to write than examples",
            B: "Test-driven iteration scales to complex logic with many edge cases — each test encodes one correctness criterion, and failures pinpoint exactly which criterion isn't met",
            C: "I/O examples only work for string transformations",
            D: "Test-driven is faster to execute"
          },
          correct: "B",
          explanation: "For complex multi-step logic, I/O pairs become unwieldy — the transformation involves many intermediate steps. Tests encode correctness at multiple levels (unit, edge case, integration) and each failure pinpoints exactly what's wrong. I/O examples show final input/output but don't reveal which step in complex logic failed."
        },
        {
          id: 24,
          question: "The interview pattern asks Claude to ask the developer questions rather than asking Claude to implement. Why is this inversion effective?",
          options: {
            A: "It makes Claude work harder",
            B: "The developer knows their domain; Claude knows what decisions need to be made. Combining both produces better specifications than either could alone",
            C: "It is faster than writing a specification directly",
            D: "Claude prefers asking questions over implementing"
          },
          correct: "B",
          explanation: "The interview pattern leverages complementary expertise. The developer has domain knowledge about business rules and constraints. Claude knows what technical design decisions typically matter (cache strategy, failure handling, scale). The interview extracts domain knowledge using technical question framing."
        },
        {
          id: 25,
          question: "A developer corrects Claude's output 4 times on the same task because each output is slightly different from what was wanted. What root cause do iterative refinement techniques address?",
          options: {
            A: "Claude's model is insufficiently trained",
            B: "The initial instruction was too vague — refinement techniques provide concrete feedback loops so each iteration converges on the target rather than drifting",
            C: "The context window is too small",
            D: "The developer should use a different tool"
          },
          correct: "B",
          explanation: "Repeated corrections indicate the specification is too vague for Claude to hit the target consistently. I/O examples, tests, or an interview would have made the target precise enough that the first or second attempt succeeds. Refinement techniques prevent this correction loop by front-loading specification clarity."
        },
        {
          id: 26,
          question: "A developer wants to use the interview pattern for a feature. How do they invoke it?",
          options: {
            A: "Ask Claude to implement the feature and answer its follow-up questions",
            B: "Ask Claude to interview them — e.g., 'Ask me questions about the design decisions, edge cases, and failure modes before we implement rate limiting'",
            C: "Use /interview as a slash command",
            D: "Provide an empty prompt and Claude automatically asks questions"
          },
          correct: "B",
          explanation: "The interview pattern is invoked by explicitly asking Claude to ask questions: 'What design decisions exist? Which edge cases matter? What failure modes should I anticipate?' This tells Claude to elicit requirements rather than implement, producing a specification through dialogue."
        },
        {
          id: 27,
          question: "A developer applies I/O examples to a task generating SQL queries from natural language descriptions. Input: 'find all users who joined last month' → output: SELECT * FROM users WHERE created_at >= ... This approach is effective here. Why?",
          options: {
            A: "SQL is always best specified with examples",
            B: "SQL generation has clear input (natural language) and output (SQL query) pairs — examples define the transformation contract precisely, including table names, column choices, and date arithmetic style",
            C: "Examples are always better than tests for SQL",
            D: "SQL examples are required by the database to validate queries"
          },
          correct: "B",
          explanation: "SQL generation from natural language is a format-specific transformation with clear I/O pairs. Examples specify which tables and columns to use, the exact date arithmetic, and the query style — all choices that prose descriptions leave ambiguous. I/O examples resolve these simultaneously."
        },
        {
          id: 28,
          question: "When applying test-driven iteration, the developer writes a test for an edge case they discovered in production last month. What value does this historical knowledge add?",
          options: {
            A: "None — tests should only cover hypothetical cases",
            B: "It encodes a known production failure mode as a test, ensuring Claude's implementation handles the specific real-world case that previously caused problems",
            C: "Historical tests are less valid than theoretical ones",
            D: "It makes the test suite too large"
          },
          correct: "B",
          explanation: "Production incidents are invaluable as test cases. Writing test_production_incident_may_2024() encodes real-world failure conditions that matter most. Claude's implementation must satisfy not just theoretical edge cases but verified production scenarios — the most important correctness criterion."
        },
        {
          id: 29,
          question: "A developer uses the interview pattern and receives 8 design questions from Claude. After answering all 8, what document has been implicitly created?",
          options: {
            A: "A code review checklist",
            B: "A feature specification capturing all relevant design decisions, edge cases, and constraints — ready to use as an implementation prompt",
            C: "A test suite",
            D: "A CLAUDE.md configuration file"
          },
          correct: "B",
          explanation: "The Q&A from the interview is effectively a structured feature specification. The 8 questions and answers cover design decisions (synchrony, caching strategy, scale), edge cases, failure modes, and constraints. This becomes the implementation prompt for a fresh session."
        },
        {
          id: 30,
          question: "Which iterative refinement technique is specifically described as scaling 'to complex logic beyond simple I/O pairs'?",
          options: {
            A: "Input/output examples",
            B: "The interview pattern",
            C: "Test-driven iteration",
            D: "Plan mode"
          },
          correct: "C",
          explanation: "The lesson explicitly states test-driven iteration 'scales to complex logic beyond simple I/O pairs.' For multi-step algorithms with many interacting correctness criteria, tests provide granular verification that I/O examples (which show only final input → output) cannot."
        }
      ]
    }
    ,
    {
      id: 6,
      title: "Claude Code in CI/CD Pipelines",
      mcqs: [
        {
          id: 1,
          question: "A CI pipeline job running Claude Code hangs indefinitely, blocking all subsequent pipeline stages. The job is waiting for interactive input. What flag resolves this?",
          options: {
            A: "CLAUDE_HEADLESS=true environment variable",
            B: "The -p flag — it enables non-interactive mode, causing Claude to process the prompt, output results to stdout, and exit without waiting for user input",
            C: "--no-interactive flag",
            D: "--ci flag"
          },
          correct: "B",
          explanation: "The -p (print) flag transforms Claude Code from an interactive assistant into a scriptable command-line tool. It processes the prompt and exits — essential for CI environments where no human is present to provide input. CLAUDE_HEADLESS does not exist."
        },
        {
          id: 2,
          question: "A CI pipeline needs Claude to read source files during review but should never be able to edit them. What flag enforces this restriction?",
          options: {
            A: "--readonly flag",
            B: "--allowedTools \"Read\" — pre-authorizes only file reading, blocking edit and bash capabilities",
            C: "Adding Read: true to settings.json",
            D: "Using --bare flag"
          },
          correct: "B",
          explanation: "--allowedTools pre-authorizes specific tool capabilities without requiring interactive permission prompts. Specifying only 'Read' means Claude can access files but cannot edit, write, or execute commands — enforcing read-only behavior in the CI context."
        },
        {
          id: 3,
          question: "A pipeline runs Claude Code reviews on every push and accumulates identical duplicate comments on each subsequent push. How should the pipeline prevent duplicates?",
          options: {
            A: "Run the review only on the first push",
            B: "Feed prior Claude bot comments into subsequent runs with instructions to only report new issues or unresolved prior items",
            C: "Delete all prior comments before each run",
            D: "Use --no-duplicate flag"
          },
          correct: "B",
          explanation: "The solution is feeding prior findings into subsequent runs using gh to retrieve prior Claude bot comments, then instructing Claude to skip already-reported issues and only surface new or unresolved ones. This prevents identical comments accumulating across pushes."
        },
        {
          id: 4,
          question: "A team needs Claude's CI review output to be parsed programmatically by a downstream script that extracts critical findings. What output configuration achieves this?",
          options: {
            A: "--output-format text",
            B: "--output-format json with --json-schema to enforce specific output structure for machine parsing",
            C: "--output-format xml",
            D: "--structured flag"
          },
          correct: "B",
          explanation: "--output-format json produces machine-parseable output including session metadata and results. Adding --json-schema enforces a specific structure (e.g., findings array with severity, file, and line fields) that downstream scripts can reliably parse with tools like jq."
        },
        {
          id: 5,
          question: "A CI pipeline must produce consistent Claude reviews regardless of which developer's machine it runs on, unaffected by local hooks, skills, or MCP servers. What flag ensures this?",
          options: {
            A: "--clean flag",
            B: "--bare — skips auto-discovery of hooks, skills, MCP servers, and configuration files, ensuring consistent behavior across machines",
            C: "--isolated flag",
            D: "--no-config flag"
          },
          correct: "B",
          explanation: "--bare skips auto-discovery of all local configuration including hooks, skills, and MCP servers. This ensures every CI job runs identically regardless of what local configuration exists on the runner, providing reproducible reviews across all environments."
        },
        {
          id: 6,
          question: "A nightly technical debt analysis runs overnight and results are reviewed the next morning. A pre-merge security check runs and developers wait for the result before merging. Which uses real-time API and which uses batch API?",
          options: {
            A: "Both should use real-time API",
            B: "Nightly debt analysis uses batch API (50% cost savings, delayed results acceptable); pre-merge check uses real-time API (developers wait for results)",
            C: "Both should use batch API",
            D: "Nightly uses real-time; pre-merge uses batch"
          },
          correct: "B",
          explanation: "Decision framework: use real-time when humans wait for results; use batch when results can be delayed. Developers blocked on a pre-merge check need immediate results — real-time. A nightly report reviewed the next morning can afford overnight processing — batch saves 50% cost."
        },
        {
          id: 7,
          question: "A GitHub Actions workflow triggers Claude review when a PR comment contains '@claude review'. What workflow field controls this trigger condition?",
          options: {
            A: "on: pull_request: types: [review_requested]",
            B: "on: issue_comment: types: [created] with an if condition checking github.event.comment.body contains '@claude review'",
            C: "on: push: branches: [main]",
            D: "on: claude: trigger: review"
          },
          correct: "B",
          explanation: "The workflow trigger is on: issue_comment: types: [created] combined with an if condition: contains(github.event.comment.body, '@claude review'). This fires when any PR comment is created containing the trigger phrase — the standard pattern for comment-triggered automation."
        },
        {
          id: 8,
          question: "The session that generated code should not review its own code. Why does this matter in CI?",
          options: {
            A: "It is an API limitation — the same session cannot perform two tasks",
            B: "Generators retain reasoning context making them less likely to question their own decisions; independent sessions see only the code without the author's bias",
            C: "Using the same session consumes more tokens",
            D: "It is a security requirement to prevent self-modification"
          },
          correct: "B",
          explanation: "Author bias applies to Claude as much as humans. The session that generated code retains all prior reasoning about why choices were made, making it less likely to spot problems. An independent CI review session sees only the code — no author context — and evaluates it objectively."
        },
        {
          id: 9,
          question: "A CI review script uses the pattern Bash(git diff*) in --allowedTools. The developer intended to restrict to only 'git diff' commands. What concern should they have?",
          options: {
            A: "git diff is not supported in CI environments",
            B: "Without a space before *, Bash(git diff*) also matches commands like git-diff-tree or git-diff-index — the correct pattern is Bash(git diff *) with a space",
            C: "The pattern is correct as written",
            D: "--allowedTools doesn't support bash patterns"
          },
          correct: "B",
          explanation: "The space before * is significant in Bash tool restrictions. Bash(git diff *) matches only 'git diff ' followed by arguments. Bash(git diff*) without the space also matches strings like git-diff-index that start with those characters but are different commands."
        },
        {
          id: 10,
          question: "A team uses --bare in CI but also needs Claude to have project-specific review standards. How can project context be provided in bare mode?",
          options: {
            A: "Bare mode cannot include any project context",
            B: "--append-system-prompt-file to add context in bare mode, or include context directly in the -p prompt",
            C: "Add the context to settings.json",
            D: "Pass context via environment variables"
          },
          correct: "B",
          explanation: "--append-system-prompt-file allows adding project-specific context in bare mode. Alternatively, the -p prompt itself can include review criteria. The project's CI-focused CLAUDE.md content can be embedded in the prompt or appended, providing consistent standards without local config discovery."
        },
        {
          id: 11,
          question: "A CI pipeline posts Claude review results as PR comments. The jq command .structured_output.findings[] | select(.severity == \"critical\") is used after the review. What does this accomplish?",
          options: {
            A: "It deletes non-critical findings",
            B: "It extracts only critical-severity findings from the JSON output for immediate action or auto-blocking",
            C: "It sorts findings by severity",
            D: "It converts findings to markdown format"
          },
          correct: "B",
          explanation: "jq processes the structured JSON output from --output-format json and --json-schema. Filtering by severity == 'critical' extracts findings that warrant immediate action. This enables the pipeline to auto-block PRs with critical findings while allowing others through for human review."
        },
        {
          id: 12,
          question: "A developer includes a CI-focused CLAUDE.md with sections: 'What to Report' (SQL injection, XSS, race conditions) and 'What NOT to Report' (style issues, TODO comments). Why is this distinction important?",
          options: {
            A: "To reduce the size of CLAUDE.md files",
            B: "To focus Claude's review on team priorities and eliminate noise from issues already handled by linters and other automated tools — preventing redundant comments",
            C: "Style issues cannot be detected by Claude",
            D: "It is required by GitHub Actions"
          },
          correct: "B",
          explanation: "Explicit REPORT/SKIP lists focus Claude on high-value findings. Linters already catch style issues; Claude reviewing them creates noise. The CLAUDE.md instructs Claude to skip what other tools handle and focus on security and correctness issues that automated linters miss."
        },
        {
          id: 13,
          question: "A weekly security dashboard report will run overnight and be reviewed in the morning. Should this use the real-time or batch Anthropic API?",
          options: {
            A: "Real-time — security is high priority",
            B: "Batch API — overnight processing is acceptable and saves 50% on API costs when results don't need to be immediate",
            C: "Real-time because Claude Code only supports real-time",
            D: "Neither — use a separate security scanning tool"
          },
          correct: "B",
          explanation: "The decision framework: use batch when results can be delayed. A weekly dashboard reviewed the next morning has no human waiting — overnight processing with 50% cost savings is ideal. The lesson lists weekly dashboards as a batch API use case."
        },
        {
          id: 14,
          question: "A pipeline generates tests for src/auth.py. The prompt includes 'Existing tests: @tests/test_auth.py — Only suggest NEW scenarios.' What does the @filename syntax accomplish?",
          options: {
            A: "Nothing — @filename is not valid syntax",
            B: "It includes the content of tests/test_auth.py in Claude's context, enabling it to cross-reference existing coverage and avoid suggesting duplicate tests",
            C: "It runs the existing tests",
            D: "It links to the file on GitHub"
          },
          correct: "B",
          explanation: "@filename syntax in Claude Code prompts includes the referenced file's content in context. Claude can read the existing test file and generate only scenarios not already covered — preventing duplicate test generation which wastes developer time."
        },
        {
          id: 15,
          question: "A developer needs to verify that --allowedTools \"Read\" is working in CI — Claude should not be able to edit files. What is the simplest verification approach?",
          options: {
            A: "Review Claude's source code",
            B: "Include an edit instruction in the test prompt and verify the pipeline output shows a tool restriction error or Claude declines to edit",
            C: "Check file modification timestamps",
            D: "Monitor API calls"
          },
          correct: "B",
          explanation: "Verification by attempting the restricted action: include an instruction to edit a file in the test prompt. With --allowedTools 'Read', Claude should refuse or report it cannot edit files. If the edit succeeds, the restriction is not working correctly."
        },
        {
          id: 16,
          question: "A CI review script uses: claude -p 'Review this PR for security issues' --output-format json --allowedTools 'Read,Bash(git log *)'. What permissions does Claude have?",
          options: {
            A: "Full system access",
            B: "Can read any file and run git log commands with any arguments; cannot edit files, run other bash commands, or write to disk",
            C: "Read-only access to the current directory only",
            D: "Only access to the file passed in the prompt"
          },
          correct: "B",
          explanation: "The --allowedTools specification grants: Read (any file access) and Bash(git log *) (git log with any arguments). Edit and write tools are not listed, so file modification is blocked. Other bash commands are also blocked. This gives investigation capability without modification risk."
        },
        {
          id: 17,
          question: "A CI pipeline runs Claude review on every push. After 10 pushes, the same PR has 10 nearly-identical review comments from Claude. What is the solution?",
          options: {
            A: "Only run the review on the first push of each PR",
            B: "Feed prior Claude comments into subsequent review prompts and instruct Claude to skip already-reported findings and only surface new issues",
            C: "Delete all previous comments before each review",
            D: "Limit reviews to once per day"
          },
          correct: "B",
          explanation: "The deduplication solution uses gh to retrieve prior Claude bot comments, then passes them to the next run: 'PRIOR FINDINGS: [comments]. Only report NEW issues or unresolved prior items.' Claude then skips already-reported findings, preventing the accumulation of duplicate comments."
        },
        {
          id: 18,
          question: "Why does session isolation occur naturally in CI environments?",
          options: {
            A: "CI systems use different Claude models",
            B: "Each pipeline job spawns a fresh process with no shared state — naturally creating the independent review sessions that prevent author bias",
            C: "CI systems have read-only access to Claude",
            D: "Pipeline jobs share context via environment variables"
          },
          correct: "B",
          explanation: "CI pipeline jobs are isolated processes by design. Each job that invokes claude -p starts a fresh process with no conversation history from other jobs. This natural isolation ensures code review sessions are independent from code generation sessions — implementing the 'don't review your own code' principle automatically."
        },
        {
          id: 19,
          question: "The anthropics/claude-code-action@v1 GitHub Action is used in a workflow. What does using the official action provide compared to calling claude directly?",
          options: {
            A: "It provides access to a more capable Claude model",
            B: "Simplified configuration — the action handles setup, authentication, and integration details, reducing the workflow YAML to minimal configuration",
            C: "It bypasses the need for an API key",
            D: "It provides unlimited API calls"
          },
          correct: "B",
          explanation: "The official anthropics/claude-code-action@v1 encapsulates the setup, environment configuration, and integration patterns into a reusable action. The user only needs to provide the API key and trigger conditions, reducing complex pipeline YAML to a few lines."
        },
        {
          id: 20,
          question: "A pre-merge security check requires results before developers can merge. Developers wait at their computers for the result. Which API type should this use?",
          options: {
            A: "Batch API — it's more cost-efficient",
            B: "Real-time API (-p flag) — developers are waiting for results and need immediate feedback",
            C: "Either works equally well",
            D: "Batch with priority queue"
          },
          correct: "B",
          explanation: "The decision framework: use real-time when humans wait for results. A pre-merge check with developers waiting at their machines requires immediate response. The latency of batch processing (potentially hours) is unacceptable when the developer is blocked on the result."
        },
        {
          id: 21,
          question: "A permissions section in the GitHub Actions workflow specifies contents: read and pull-requests: write. Why are these the minimum required permissions?",
          options: {
            A: "contents: read allows Claude to access secret keys; pull-requests: write allows CI to delete branches",
            B: "contents: read allows checking out and reading source code; pull-requests: write allows posting review comments back to the PR",
            C: "Both are required by GitHub for all workflows",
            D: "contents: write and pull-requests: read would work equally well"
          },
          correct: "B",
          explanation: "contents: read is the minimum to checkout the code for review. pull-requests: write is required to post the review comment back to the PR. These are the minimum permissions for a read-and-comment workflow — no write access to code and no admin permissions needed."
        },
        {
          id: 22,
          question: "A json-schema is specified in the CI pipeline requiring findings to have severity of 'critical' or 'high' only. A medium-severity finding exists. What happens?",
          options: {
            A: "The pipeline crashes",
            B: "Claude constrains its output to match the schema — medium findings are either excluded or mapped to the nearest valid severity",
            C: "The schema is ignored for medium findings",
            D: "Claude asks the developer how to classify it"
          },
          correct: "B",
          explanation: "The --json-schema flag enforces output structure. Claude constrains its response to match the schema. If the severity enum only includes 'critical' and 'high', Claude will only report findings at those levels — medium findings may be omitted or the model will apply its judgment about threshold mapping."
        },
        {
          id: 23,
          question: "A CI pipeline must run claude in bare mode but also needs the project's CI-specific review standards. The project CLAUDE.md has a separate CI section. How can this context be provided?",
          options: {
            A: "Bare mode cannot include any context",
            B: "Embed the CI review standards directly in the -p prompt, or use --append-system-prompt-file pointing to the CI review standards file",
            C: "Use --config to point to CLAUDE.md",
            D: "Pass CLAUDE.md content as an environment variable"
          },
          correct: "B",
          explanation: "--bare skips CLAUDE.md auto-discovery for reproducibility. Project context can still be provided by embedding review criteria in the -p prompt text, or by using --append-system-prompt-file to append a specific file's content as additional system instructions."
        },
        {
          id: 24,
          question: "A developer's locally-installed MCP server provides extra capabilities to Claude. In CI, this MCP server doesn't exist. What flag prevents the pipeline from failing when this server is absent?",
          options: {
            A: "--skip-mcp flag",
            B: "--bare — skips auto-discovery of MCP servers and all local configuration, so the pipeline doesn't attempt to connect to missing servers",
            C: "--allowedTools without MCP tools",
            D: "CLAUDE_SKIP_MCP=true environment variable"
          },
          correct: "B",
          explanation: "--bare skips auto-discovery of MCP servers along with hooks, skills, and local configuration. CI environments that don't have locally-installed MCP servers won't fail trying to connect to them. --bare ensures the pipeline only uses what's explicitly provided."
        },
        {
          id: 25,
          question: "A team runs nightly dependency audits using Claude. These run at 2 AM and results are available at 9 AM when developers start work. Which API is appropriate and why?",
          options: {
            A: "Real-time — audits should be fast",
            B: "Batch API — results are needed the next morning (7 hours away), making delayed processing acceptable and enabling 50% cost savings",
            C: "Real-time for security, batch for style",
            D: "Whichever is available at 2 AM"
          },
          correct: "B",
          explanation: "Nightly audits with morning review perfectly fit the batch API use case: results aren't needed immediately, overnight processing is acceptable, and batch provides 50% cost savings. The 7-hour window from 2 AM to 9 AM is far more than enough for batch processing."
        },
        {
          id: 26,
          question: "What does the -p flag fundamentally change about how Claude Code operates?",
          options: {
            A: "It switches to a more powerful model",
            B: "It transforms Claude from an interactive assistant requiring user input into a scriptable command-line tool that processes the prompt and exits",
            C: "It enables parallel processing",
            D: "It increases the context window"
          },
          correct: "B",
          explanation: "The -p (print) flag is the fundamental CI enabler. Without it, Claude waits for interactive input — unsuitable for automated pipelines. With it, Claude receives the prompt, processes it, outputs to stdout, and exits. This makes Claude scriptable and pipeline-compatible."
        },
        {
          id: 27,
          question: "A CI review job posts identical security findings to a PR on every push. The team has 15 pushes per PR on average. What is the impact and solution?",
          options: {
            A: "Impact: excessive PR noise. Solution: disable CI reviews",
            B: "Impact: 15 identical comment threads make the PR unreadable. Solution: feed prior comments to subsequent runs, instructing Claude to skip already-reported findings",
            C: "Impact: duplicate API costs. Solution: cache Claude responses",
            D: "Impact: none — duplicate comments are harmless"
          },
          correct: "B",
          explanation: "15 identical comment sets make the PR impossible to read, burying genuine new findings in noise. The deduplication pattern: retrieve prior Claude bot comments via gh, pass them as 'PRIOR FINDINGS', and instruct Claude to only report new or unresolved issues. Each run adds only incremental findings."
        },
        {
          id: 28,
          question: "A GitHub Actions step outputs review results and then posts them as a PR comment. The jq command extracts the result field from review_output.json. What JSON field contains Claude's actual review text?",
          options: {
            A: "review_output.json.text",
            B: "The .result field in the JSON output from --output-format json",
            C: "review_output.json.content",
            D: "The .output field"
          },
          correct: "B",
          explanation: "With --output-format json, Claude's response is structured JSON. The .result field contains the actual response text. The jq command jq -r '.result' review_output.json extracts the review text for use in subsequent steps like posting a PR comment."
        },
        {
          id: 29,
          question: "A team debates whether to implement PR reviews at the real-time API or via batch. The key deciding factor is who waits for results. How does this apply to a weekly code quality dashboard?",
          options: {
            A: "Weekly dashboards require real-time because quality is important",
            B: "Weekly dashboards use batch — no human waits for immediate results; the dashboard is prepared and reviewed when ready",
            C: "Weekly is too infrequent for either API",
            D: "The deciding factor is data volume, not who waits"
          },
          correct: "B",
          explanation: "The deciding factor: use real-time when humans wait for results; use batch when results can be delayed. A weekly dashboard is prepared in advance and reviewed when ready — no one waits synchronously. Batch processing with 50% cost savings is the correct choice."
        },
        {
          id: 30,
          question: "A CI pipeline invokes claude --bare -p 'Review this code' --allowedTools 'Read'. In which order do the flags matter for CI correctness?",
          options: {
            A: "Only -p matters; other flags are optional",
            B: "All three are important: --bare ensures reproducibility, -p enables non-interactive execution, and --allowedTools 'Read' pre-authorizes file access without prompts",
            C: "--bare is most important; others are convenience features",
            D: "--allowedTools is most critical; others have defaults"
          },
          correct: "B",
          explanation: "All three serve distinct purposes in CI: -p is essential (non-interactive execution); --bare is essential (reproducibility across machines); --allowedTools is essential (pre-authorizing tool access without interactive prompts). Omitting any one would cause CI failure or inconsistency."
        }
      ]
    },
    {
      id: 7,
      title: "Multi-Pass Review Architecture",
      mcqs: [
        {
          id: 1,
          question: "A developer generates code with Claude and then asks the same Claude session to review it. The review misses several bugs the developer later finds manually. What structural problem explains this?",
          options: {
            A: "The code was too long for the context window",
            B: "The generator session retains all prior reasoning context, creating bias toward confirming its own decisions rather than critically examining the code",
            C: "Claude cannot review code it generated",
            D: "The review prompt was too vague"
          },
          correct: "B",
          explanation: "Author bias: when Claude reviews code it generated in the same session, the full reasoning history (design decisions, edge case considerations, rejected alternatives) remains accessible. This context contaminates the review — Claude unconsciously validates its own choices rather than evaluating the code objectively."
        },
        {
          id: 2,
          question: "A review prompt is: 'Review this code. Be conservative and only report high-confidence findings.' After the review, the developer finds the output missed subtle but real issues. What was wrong with the prompt?",
          options: {
            A: "The prompt should have specified the programming language",
            B: "Asking Claude to self-filter by confidence suppresses subtle real issues; effective criteria specify categorical REPORT/SKIP targets not confidence thresholds",
            C: "The prompt was too short",
            D: "Conservative reviews are always less thorough"
          },
          correct: "B",
          explanation: "The lesson contrasts ineffective vs effective criteria. Asking Claude to 'be conservative' forces subjective confidence filtering that suppresses subtle issues. Categorical targets (REPORT: SQL injection, null dereferences; SKIP: style issues) transform judgment from 'is this important?' to 'does this match a category?' — more reliable."
        },
        {
          id: 3,
          question: "A review of 14 files in a single prompt produces shallow analysis on the last 6 files compared to the first 8. What architectural problem causes this?",
          options: {
            A: "The last 6 files are more complex",
            B: "Attention dilution — LLM relevance scoring degrades as context lengthens; even within the context window, later content receives shallower analysis",
            C: "The context window was exceeded",
            D: "Claude prioritizes earlier files by default"
          },
          correct: "B",
          explanation: "Attention dilution is a structural problem with single-prompt large reviews. Research shows relevance scoring degrades as context lengthens — later files receive shallower analysis even when everything fits in the window. A larger context window doesn't fix this; it's an architectural problem requiring a structural solution (multi-pass)."
        },
        {
          id: 4,
          question: "A multi-pass review architecture splits analysis into per-file passes and a cross-file integration pass. A function in file A has the wrong return type for what file B expects. Which pass catches this?",
          options: {
            A: "The per-file pass for file A",
            B: "The per-file pass for file B",
            C: "The cross-file integration pass — it checks inter-file interactions like interface mismatches and broken contracts",
            D: "Neither pass catches cross-file issues"
          },
          correct: "C",
          explanation: "Per-file passes analyze each file independently — they see only local bugs within a single file. Cross-file integration passes specifically look at how files interact: interface mismatches, broken contracts, missing imports, and circular dependencies. Return type mismatches between files are integration-level bugs."
        },
        {
          id: 5,
          question: "Per-file review passes run in parallel using background jobs (&). Why is parallel execution beneficial here?",
          options: {
            A: "Parallel execution uses less memory",
            B: "Each per-file pass is independent with no shared context — running them concurrently reduces total review time proportionally to the number of files",
            C: "Parallel execution improves review accuracy",
            D: "It allows more API calls without rate limiting"
          },
          correct: "B",
          explanation: "Per-file passes are completely independent — they don't share context and their results don't depend on each other. Running them in parallel means the total time approaches the time for a single pass, not N times longer. The orchestration script uses & to background each pass and wait to collect results."
        },
        {
          id: 6,
          question: "During a cross-file integration pass, Claude receives both the full diff and prior per-file findings. The prompt says 'Cross-file integration review ONLY.' Why is this instruction important?",
          options: {
            A: "To reduce the prompt length",
            B: "To prevent Claude from re-reporting local bugs already found in per-file passes — the integration pass has a specific, different scope",
            C: "Cross-file passes cannot see individual file content",
            D: "It is required syntax for the cross-file tool"
          },
          correct: "B",
          explanation: "Without the explicit scope instruction, Claude might re-report local bugs already covered in per-file passes, creating duplicate findings. 'Cross-file integration review ONLY' focuses Claude on what only integration analysis can find — interface mismatches, circular dependencies, and cross-module race conditions."
        },
        {
          id: 7,
          question: "A finding is marked confidence: low. How should this finding be triaged?",
          options: {
            A: "Ignore it — low confidence means it's definitely not a real issue",
            B: "Batch it for periodic review — low confidence means Claude is uncertain whether the issue exists, not that it's unimportant",
            C: "Auto-fix it immediately",
            D: "Escalate it to security team"
          },
          correct: "B",
          explanation: "Confidence reflects certainty that an issue exists, not overall severity. Low confidence findings are batched for periodic human review — a developer checks them when time allows. They shouldn't be ignored (might be real) but don't warrant immediate action (uncertain if real)."
        },
        {
          id: 8,
          question: "A high-confidence finding identifying SQL injection is flagged. What is the appropriate routing action?",
          options: {
            A: "Batch for periodic review",
            B: "Flag for human judgment",
            C: "Auto-comment on the PR or consider auto-fix — high confidence findings are likely real and warrant immediate action",
            D: "Ignore until the next review cycle"
          },
          correct: "C",
          explanation: "The three-tier routing: high confidence → auto-comment or auto-fix; medium confidence → flag for human judgment; low confidence → batch for periodic review. High confidence SQL injection is likely real and warrants automated action — either auto-commenting on the PR or even attempting an auto-fix."
        },
        {
          id: 9,
          question: "A review prompt specifies 'SEVERITY: critical = crashes or security; high = incorrect behavior; medium = defensive improvements.' How does this improve review quality compared to no severity definition?",
          options: {
            A: "It doesn't — Claude understands severity implicitly",
            B: "Explicit severity definitions standardize classification, enabling consistent routing and triage; Claude doesn't need to invent severity criteria and applies consistent thresholds",
            C: "It reduces the number of findings",
            D: "It is required for JSON schema compliance"
          },
          correct: "B",
          explanation: "Explicit severity definitions eliminate ambiguity in classification. Without them, Claude invents severity criteria that may be inconsistent across runs. With definitions, 'critical = crashes or security' is a consistent threshold Claude applies every time — enabling reliable automated routing based on severity."
        },
        {
          id: 10,
          question: "A team wants to review only changed files between the feature branch and main. What bash command generates the list of changed files for the per-file loop?",
          options: {
            A: "git status",
            B: "git diff --name-only main...HEAD",
            C: "git log --files",
            D: "git show --stat"
          },
          correct: "B",
          explanation: "git diff --name-only main...HEAD lists only the filenames (not content) of files changed between the main branch and HEAD. This generates the file list for the per-file review loop, ensuring only changed files are reviewed rather than the entire codebase."
        },
        {
          id: 11,
          question: "A self-review experiment compares same-session review versus fresh-session review of identical code. The fresh session finds 3 more bugs. What does this demonstrate?",
          options: {
            A: "The fresh session used a better model",
            B: "Author bias is real and measurable — the generator session's retained reasoning context caused it to miss bugs a neutral reviewer would catch",
            C: "The same-session review had a shorter context window",
            D: "Fresh sessions always produce better results"
          },
          correct: "B",
          explanation: "The self-review experiment from the lesson directly demonstrates author bias. The code is identical — the only variable is whether the reviewer was the generator. Fresh-session catching more bugs proves that the generator's retained context created blind spots. This validates the architectural requirement for separate generation and review sessions."
        },
        {
          id: 12,
          question: "The cross-file integration pass receives 'ALREADY REPORTED: [per-file results]' in its prompt. Why is this information provided?",
          options: {
            A: "To help Claude understand what files were reviewed",
            B: "To prevent the integration pass from re-reporting local findings already identified in per-file passes — avoiding duplicate findings in the final report",
            C: "It is required for the integration pass to function",
            D: "To provide context about the codebase architecture"
          },
          correct: "B",
          explanation: "Passing prior findings to the integration pass explicitly tells Claude what has already been reported. Without this, Claude might identify local bugs during integration analysis and report them again. 'ALREADY REPORTED' instructs Claude to skip those and focus exclusively on cross-file interaction issues."
        },
        {
          id: 13,
          question: "A review prompt specifies 'REPORT: SQL injection, null dereferences, auth bypass, resource leaks. SKIP: naming conventions, style preferences, missing documentation.' What cognitive shift does this create for Claude?",
          options: {
            A: "Claude reviews fewer items to save time",
            B: "The decision changes from 'is this important?' (subjective) to 'does this match a REPORT category?' (objective matching) — more reliable and consistent",
            C: "Claude becomes more conservative in reporting",
            D: "Style issues are permanently disabled"
          },
          correct: "B",
          explanation: "Categorical REPORT/SKIP lists transform review judgment from subjective importance assessment to objective category matching. 'Is this null dereference important?' is subjective. 'Does this null dereference match the REPORT category?' is a simple match — more reliable and consistent across runs."
        },
        {
          id: 14,
          question: "A finding is marked confidence: medium. It suggests a possible race condition but Claude is uncertain. What is the correct triage action?",
          options: {
            A: "Auto-fix the race condition",
            B: "Flag for human judgment — medium confidence findings probably exist but need a developer's assessment before action",
            C: "Ignore it",
            D: "Auto-comment on the PR immediately"
          },
          correct: "B",
          explanation: "Medium confidence → flag for human judgment. The finding probably represents a real issue but Claude's uncertainty means a developer should assess it before action is taken. This prevents false positive auto-actions while ensuring genuine issues get human attention."
        },
        {
          id: 15,
          question: "Why does the multi-pass architecture require separate Claude instances per file rather than one instance reviewing all files sequentially?",
          options: {
            A: "Separate instances use different models",
            B: "Each file gets full, undiluted attention — sequential review degrades as context grows; separate instances start fresh for each file with full attention",
            C: "Separate instances are faster due to parallelism",
            D: "Sequential review is not supported by the API"
          },
          correct: "B",
          explanation: "Context dilution is the core problem. Sequential review of 14 files means file 14 receives 1/14 the attention of file 1 as context grows. Separate instances each start with full attention capacity dedicated to one file — eliminating the dilution problem inherent in sequential review."
        },
        {
          id: 16,
          question: "The orchestration script filters files using a type check before passing them to per-file review. Why is this filtering important?",
          options: {
            A: "To comply with API rate limits",
            B: "To prevent reviewing non-code files (images, binaries, lock files) that would waste API calls and produce meaningless reviews",
            C: "To prioritize important files first",
            D: "It is required by the GitHub Actions runner"
          },
          correct: "B",
          explanation: "Not all changed files are reviewable code. Images, compiled binaries, lock files, and other non-code assets would produce meaningless reviews. File type filtering before the review loop ensures Claude only reviews actual source code files, preventing wasted API calls."
        },
        {
          id: 17,
          question: "A Phase 3 summary step combines findings from per-file and integration passes into a human-readable markdown report. What grouping strategy makes this report most useful?",
          options: {
            A: "Group by file path",
            B: "Group by severity and confidence — enabling reviewers to immediately focus on critical/high-confidence findings",
            C: "Group chronologically by when the finding was identified",
            D: "List findings alphabetically by category"
          },
          correct: "B",
          explanation: "Grouping by severity and confidence makes the summary immediately actionable. Reviewers see critical/high-confidence findings first — the ones requiring immediate action. Lower priority findings are grouped separately. This mirrors how human code review prioritization works."
        },
        {
          id: 18,
          question: "A team implements per-file review passes that run in parallel. After all background jobs complete, the script calls 'wait'. What does 'wait' accomplish in the orchestration script?",
          options: {
            A: "Pauses execution for 30 seconds",
            B: "Blocks until all background per-file review jobs finish, ensuring all results are available before the cross-file integration pass begins",
            C: "Waits for user approval before continuing",
            D: "Resets the background job queue"
          },
          correct: "B",
          explanation: "In bash, 'wait' blocks until all background jobs (&) complete. This is essential in the orchestration script — the cross-file integration pass needs all per-file results as input ('ALREADY REPORTED'). Without 'wait', the integration pass might start before per-file passes finish."
        },
        {
          id: 19,
          question: "A developer reviews the same code file twice — once with 'Review this code' and once with explicit REPORT/SKIP criteria and severity definitions. The second review produces more actionable findings. Why?",
          options: {
            A: "The second prompt was longer, providing more context",
            B: "Specific categorical criteria remove subjectivity — Claude matches findings to categories rather than judging importance, producing consistent, targeted, actionable output",
            C: "The model improved between the two reviews",
            D: "The second review benefited from caching the first review"
          },
          correct: "B",
          explanation: "Specific criteria vs vague instructions: vague prompts force Claude to make subjective importance judgments that vary by run. REPORT/SKIP categories with severity definitions create consistent, objective matching. The result is focused, actionable findings rather than a mix of important and trivial observations."
        },
        {
          id: 20,
          question: "A cross-file integration review specifically checks for 'circular dependencies.' What type of bug does this category represent?",
          options: {
            A: "A file that imports itself",
            B: "Module A imports module B which imports module A — creating an import cycle that causes runtime failures or build errors",
            C: "Functions that call themselves recursively",
            D: "Data structures with self-referential fields"
          },
          correct: "B",
          explanation: "Circular dependencies are cross-module issues: A imports B which imports A, creating a cycle. These cause require errors, undefined behaviors, or build failures. They cannot be detected by reviewing individual files in isolation — only cross-file analysis reveals the circular import chain."
        },
        {
          id: 21,
          question: "A team compares vague instructions ('Review this file. Be conservative') vs specific criteria on the same file. The specific criteria review has fewer false positives. Why?",
          options: {
            A: "Specific criteria reduce the number of findings",
            B: "Specific categories prevent Claude from reporting things in SKIP categories — style issues and missing docs don't appear because they're explicitly excluded, reducing noise",
            C: "Conservative reviews are less accurate",
            D: "Vague reviews use a less capable model"
          },
          correct: "B",
          explanation: "SKIP categories act as noise filters. 'SKIP: naming conventions, style preferences, missing documentation' explicitly prevents Claude from reporting these. Without SKIP criteria, Claude might include style observations that dilute the report with low-value findings and obscure the real bugs."
        },
        {
          id: 22,
          question: "In CI, code is generated in one pipeline job and reviewed in a separate job triggered after. Why does this separation matter beyond just tooling?",
          options: {
            A: "Separate jobs run on different machines with more resources",
            B: "Separate jobs have completely fresh process state — the review job has no access to the generator job's reasoning history, implementing true independent review",
            C: "It is required by GitHub Actions architecture",
            D: "Separate jobs can run in parallel"
          },
          correct: "B",
          explanation: "CI job isolation naturally implements the 'don't review your own code' principle. Each job is a fresh process — the review job cannot access any context from the generator job. This is the CI equivalent of asking a teammate to review your PR rather than reviewing it yourself."
        },
        {
          id: 23,
          question: "A per-file review uses the output schema: {file, line, severity, category, description, suggestion, confidence}. A developer asks why 'suggestion' is included alongside 'description'. What is its purpose?",
          options: {
            A: "Suggestion is a required field with no purpose",
            B: "Description explains what the issue is; suggestion provides actionable guidance on how to fix it — enabling auto-fix attempts for high-confidence findings",
            C: "Suggestion is an alternative description for non-technical stakeholders",
            D: "Suggestion is used for search indexing"
          },
          correct: "B",
          explanation: "The separation of description (what) and suggestion (how) enables different workflows. Description goes into the PR comment explaining the issue. Suggestion provides Claude's proposed fix, which can be used to attempt automated remediation for high-confidence findings or give developers a starting point."
        },
        {
          id: 24,
          question: "A developer asks: should per-file passes analyze how files interact with each other? What is the correct answer?",
          options: {
            A: "Yes — per-file passes should be comprehensive",
            B: "No — per-file passes analyze local bugs within a single file; inter-file interactions are the exclusive domain of the cross-file integration pass",
            C: "Only if the files are in the same package",
            D: "Yes, but only for direct imports"
          },
          correct: "B",
          explanation: "Clear separation of concerns: per-file passes focus exclusively on local bugs (null dereferences, injection, missing error handling within that file). Cross-file integration passes check inter-file interactions. This separation prevents duplication and ensures each pass has full attention for its specific scope."
        },
        {
          id: 25,
          question: "Why should a developer run the per-file self-review experiment from the lesson (reviewing self-generated code vs fresh session)?",
          options: {
            A: "To measure how fast Claude reviews code",
            B: "To empirically verify author bias exists — experiencing the difference between same-session review and fresh-session review reinforces why independent sessions are architecturally necessary",
            C: "To calibrate confidence scoring",
            D: "To test the orchestration script"
          },
          correct: "B",
          explanation: "The self-review experiment is designed to make author bias tangible. Seeing concrete bugs missed by same-session review but caught by fresh review is more persuasive than reading about the concept. The exercise builds intuition for why multi-pass architecture with session isolation is architecturally necessary."
        },
        {
          id: 26,
          question: "The orchestration script outputs per-file results to files named by replacing '/' with '_' in the file path. Why is this path transformation needed?",
          options: {
            A: "Slashes are invalid in file content",
            B: "Directory separators in paths would create nested directories when used as output filenames — replacing with underscores keeps all results in one flat directory",
            C: "It is required by jq",
            D: "To alphabetically sort results"
          },
          correct: "B",
          explanation: "A file path like src/api/auth.ts contains directory separators. Using this directly as an output filename would try to create src/api/ subdirectories. Replacing / with _ produces src_api_auth.ts — a valid flat filename in the review-results/ directory, keeping all outputs organized together."
        },
        {
          id: 27,
          question: "A review finds a null dereference in file A. Both the per-file pass for file A and the cross-file integration pass independently identify it. The final report shows it twice. What should prevent this?",
          options: {
            A: "Remove null dereferences from the per-file criteria",
            B: "Pass per-file results as 'ALREADY REPORTED' to the cross-file pass, instructing it to skip already-identified local bugs",
            C: "Run cross-file before per-file",
            D: "Use a deduplication script after all passes"
          },
          correct: "B",
          explanation: "Providing 'ALREADY REPORTED' context to the cross-file pass prevents re-reporting of local findings. The integration pass is instructed to skip findings already in the per-file results and focus only on genuinely cross-file issues. This is why the integration pass prompt explicitly says 'Cross-file integration review ONLY.'"
        },
        {
          id: 28,
          question: "A finding includes: {severity: 'high', confidence: 'high', category: 'auth-bypass', description: '...', suggestion: '...'}. What automated action is appropriate?",
          options: {
            A: "Batch for periodic review",
            B: "Flag for human judgment only",
            C: "Auto-comment on the PR — high severity and high confidence together indicate a likely real, important issue warranting immediate visible action",
            D: "Silently log for later review"
          },
          correct: "C",
          explanation: "High severity (auth bypass) combined with high confidence (Claude is certain this is real) is the strongest signal. Auto-commenting draws immediate developer and reviewer attention. This combination — serious issue + high certainty — is exactly what the auto-comment routing tier is designed for."
        },
        {
          id: 29,
          question: "A team implements the three-exercise curriculum: self-review experiment, per-file script building, and vague vs specific criteria comparison. What is the pedagogical purpose of doing all three?",
          options: {
            A: "To fulfill certification requirements",
            B: "Each exercise builds different understanding: self-review proves author bias exists; script building implements multi-pass; criteria comparison demonstrates why specificity matters — together they provide complete practical mastery",
            C: "To practice bash scripting",
            D: "To generate sample data for review"
          },
          correct: "B",
          explanation: "The three exercises are complementary: self-review makes author bias experiential (not just theoretical); script building implements the architecture hands-on (not just conceptual); criteria comparison shows the quality difference (not just described). Each targets a different aspect of the complete skill set."
        },
        {
          id: 30,
          question: "A PR has 18 changed files. Using a single-prompt review vs multi-pass review — what quality difference should be expected?",
          options: {
            A: "Single-prompt is more thorough because all files are visible simultaneously",
            B: "Multi-pass produces higher quality: each file gets full attention in isolation; the integration pass checks cross-file issues; total analysis is deeper and more consistent across all 18 files",
            C: "Single-prompt is faster with equivalent quality",
            D: "Multi-pass is only beneficial for more than 50 files"
          },
          correct: "B",
          explanation: "Single-prompt review of 18 files suffers attention dilution — files 15-18 receive shallower analysis than files 1-4. Multi-pass gives each file full dedicated attention, and the integration pass adds cross-file analysis. The architecture produces more consistent depth and catches issues single-prompt misses in later files."
        }
      ]
    },
    {
      id: 8,
      title: "Session Management: Resume, Fork, and Recovery",
      mcqs: [
        {
          id: 1,
          question: "A developer starts investigating a race condition at 5 PM and exits Claude. The next morning they need to continue from exactly where they left off. What command should they use?",
          options: {
            A: "claude --restart",
            B: "claude --resume race-condition-investigation (if named) or claude --continue to resume the most recent session",
            C: "claude --load-session",
            D: "claude --history"
          },
          correct: "B",
          explanation: "claude --continue rapidly resumes the most recent conversation. claude --resume opens an interactive picker for selecting from recent named sessions. If the session was named (claude -n race-condition-investigation), it can be resumed by name — restoring complete message history, tool calls, and context."
        },
        {
          id: 2,
          question: "A developer worked on a memory leak investigation yesterday. Overnight, another developer merged a PR that refactored the memory management module. Should they resume or start fresh?",
          options: {
            A: "Always resume — session history provides valuable context",
            B: "Start fresh — significant file changes since the last session mean the tool results in the resumed session are outdated and misleading",
            C: "Resume but ignore the file changes",
            D: "Resume and let Claude figure out the changes automatically"
          },
          correct: "B",
          explanation: "Significant file changes are a key indicator for starting fresh. The resumed session's cached file contents are stale after the PR refactored memory management. Stale context about file structure and code behavior would lead Claude to make incorrect assumptions. Fresh start with a comprehensive context summary is better."
        },
        {
          id: 3,
          question: "A developer resumes a session from 3 days ago. Claude refers to a function at line 145 that was moved to line 178 in a PR merged yesterday. What must the developer do to correct Claude's stale reference?",
          options: {
            A: "Restart the entire investigation from scratch",
            B: "Explicitly inform Claude about the change and request it re-read the affected files before continuing",
            C: "Accept the stale reference as approximately correct",
            D: "Edit the file to move the function back to line 145"
          },
          correct: "B",
          explanation: "Resumed sessions carry stale cached content. The developer must explicitly inform Claude: 'Since our last session, update() moved from line 145 to line 178 in the refactored PR. Please re-read src/services/orderService.ts before continuing.' Explicit re-read requests prevent context misalignment."
        },
        {
          id: 4,
          question: "A developer wants to explore two competing approaches for refactoring authentication — middleware vs decorators. They've spent 30 minutes analyzing the current auth module structure. How should they explore both approaches without duplicating the analysis work?",
          options: {
            A: "Start two separate fresh sessions",
            B: "Use /branch to fork the current session — both branches inherit the 30 minutes of analysis, then explore each approach independently",
            C: "Explore both in the same session sequentially",
            D: "Use worktrees for each approach"
          },
          correct: "B",
          explanation: "/branch copies the current conversation history into a new session while leaving the original unchanged. Both branches inherit the analysis work. The original explores approach A; the fork explores approach B — neither needs to repeat the 30-minute analysis phase."
        },
        {
          id: 5,
          question: "A developer uses /branch to fork a session for competing implementations, but both branches modify the same files. What risk does this create?",
          options: {
            A: "No risk — branches handle file conflicts automatically",
            B: "File conflicts — both branches edit the same filesystem files, risking corrupt or mixed implementations",
            C: "Performance degradation",
            D: "API rate limit exceeded"
          },
          correct: "B",
          explanation: "Forking only separates conversation context, not the filesystem. Both branches operate on the same files. Concurrent edits to the same files risk conflicts, corruption, or unintentionally mixed implementation details. Worktrees are the solution for competing implementations that modify files."
        },
        {
          id: 6,
          question: "A developer wants to implement two competing solutions to the same bug that both require modifying the same files. Should they use /branch or --worktree?",
          options: {
            A: "/branch — it's simpler",
            B: "--worktree — it provides isolated file system copies, preventing conflicts between competing implementations",
            C: "Either works — they're equivalent",
            D: "/branch with careful file management"
          },
          correct: "B",
          explanation: "Worktrees (--worktree) create isolated copies of both the conversation and the filesystem. Each worktree has its own branch and working directory — competing implementations can modify files without interfering with each other. /branch only separates conversation; --worktree separates both conversation and filesystem."
        },
        {
          id: 7,
          question: "During an extended investigation, Claude contradicts something it said 40 messages earlier. Context window health is a concern. What action helps?",
          options: {
            A: "Restart Claude",
            B: "/compact — summarizes conversation history while preserving key decisions, file states, and work direction, freeing context window space",
            C: "Export conversation history and start fresh",
            D: "Ignore the contradiction"
          },
          correct: "B",
          explanation: "Contradicting earlier statements is a signal that context window health is degrading. /compact summarizes prior history while preserving critical information — key decisions, modified files, error messages, architecture decisions. This frees context space and allows the investigation to continue coherently."
        },
        {
          id: 8,
          question: "A developer runs /compact and is concerned about losing the list of modified files and exact error messages. What prevents this loss?",
          options: {
            A: "Compaction always preserves everything important automatically",
            B: "Guided compaction: '/compact Focus on database migration changes. Preserve the full list of modified files and exact error messages.'",
            C: "File lists and errors cannot be lost during compaction",
            D: "Compaction only removes non-essential messages"
          },
          correct: "B",
          explanation: "Guided compaction instructs Claude what to preserve during summarization. Without guidance, compaction makes autonomous decisions about what's important. With specific instructions, Claude ensures the file list and exact error messages survive the compaction and are available for subsequent work."
        },
        {
          id: 9,
          question: "A developer needs a quick syntax question answered without polluting their ongoing debugging context. What feature enables this?",
          options: {
            A: "Opening a new Claude session",
            B: "/btw [question] — the answer appears in a dismissible overlay and never enters conversation history",
            C: "Asking the question at the end of the debugging session",
            D: "Using a separate code editor to look up the syntax"
          },
          correct: "B",
          explanation: "/btw provides a 'side channel' for out-of-context queries. The syntax question is answered in an overlay that can be dismissed, and critically, the Q&A never enters the main conversation history. The investigation context remains clean and uninterrupted."
        },
        {
          id: 10,
          question: "Named sessions (claude -n session-name) provide what advantage over unnamed sessions?",
          options: {
            A: "Named sessions use less storage",
            B: "Named sessions can be resumed by name with claude --resume session-name, enabling organized persistent workspaces for specific investigations",
            C: "Named sessions are automatically backed up to the cloud",
            D: "Named sessions last longer before expiring"
          },
          correct: "B",
          explanation: "Naming sessions enables resumption by name. Without a name, you must browse the session picker or use --continue for the most recent. Named sessions create organized persistent workspaces: memory-leak-investigation, auth-refactor, database-migration — each resumable by meaningful name across days or weeks."
        },
        {
          id: 11,
          question: "A developer resumes a session where Claude previously analyzed several files. Two of those files were subsequently modified. Claude begins giving recommendations based on the old file state. What is the root cause?",
          options: {
            A: "Claude's memory was corrupted",
            B: "Resumed sessions carry stale cached content — Claude retains the file contents from the prior session, not the current state of the files",
            C: "The files need to be re-staged in git",
            D: "The session expired and lost accuracy"
          },
          correct: "B",
          explanation: "This is the stale context problem. Resumed sessions restore message history including tool results — the files Claude 'read' previously are still in context as they were then, not as they are now. Explicit re-read requests override the stale cache with current file state."
        },
        {
          id: 12,
          question: "A developer presses Escape twice during an investigation. What does this trigger?",
          options: {
            A: "Exits the Claude session entirely",
            B: "/rewind — selects a checkpoint in conversation history; the developer can then summarize from that point to condense middle sections while keeping early context",
            C: "Opens the session picker",
            D: "Cancels the current Claude response"
          },
          correct: "B",
          explanation: "Pressing Escape twice (or running /rewind) opens the rewind interface for selecting a checkpoint in conversation history. After selecting a checkpoint, the developer can choose 'Summarize from here' to condense middle sections while keeping valuable early context intact."
        },
        {
          id: 13,
          question: "A developer's investigation has shifted direction completely — from suspecting a cache issue to suspecting a network timeout. The session is 2 days old. What is the correct decision?",
          options: {
            A: "Resume — all prior context is still valuable",
            B: "Start fresh — a fundamentally different approach combined with significant elapsed time means the prior session's context is more misleading than helpful",
            C: "Resume and ask Claude to ignore previous assumptions",
            D: "Use /compact to clear old assumptions"
          },
          correct: "B",
          explanation: "Two factors both point to fresh start: significant elapsed time (days) AND approach shift. The decision table: approach fundamentally different → fresh start. The prior cache-investigation context would contaminate the network-timeout investigation. A fresh start with a comprehensive summary of what was learned is better."
        },
        {
          id: 14,
          question: "What does a resumed session restore compared to a fresh session?",
          options: {
            A: "Only the last message from the previous session",
            B: "Complete message history including all prompts, responses, tool calls, and the original model and configuration settings",
            C: "Only the files that were modified",
            D: "Only the conversation text without tool results"
          },
          correct: "B",
          explanation: "Resumed sessions restore the complete prior state: all message history (prompts, responses), all tool usage context (file reads, command outputs, code modifications), and the original model and configuration settings. This is why the stale content problem exists — everything is restored exactly as it was."
        },
        {
          id: 15,
          question: "During a multi-day investigation, a developer wants to filter the session picker by git branch to find sessions related to the current feature branch. What keyboard shortcut enables this?",
          options: {
            A: "G key in the session picker",
            B: "B key in the session picker — filters sessions by git branch",
            C: "F key for filter mode",
            D: "Tab for branch view"
          },
          correct: "B",
          explanation: "In the session picker (accessed via claude --resume), pressing B filters sessions by git branch. This narrows the list to sessions created while on the current branch, making it easier to find the relevant investigation session when many sessions exist."
        },
        {
          id: 16,
          question: "When should /compact be triggered during an investigation?",
          options: {
            A: "Every 10 messages for efficiency",
            B: "When Claude contradicts earlier statements, context window warnings appear, finishing one subtask before starting another, or Claude repeatedly answers questions already addressed",
            C: "Only when explicitly requested by Claude",
            D: "Once per day regardless of session length"
          },
          correct: "B",
          explanation: "The lesson lists four compaction triggers: contradictions (context degrading), window warnings (approaching limit), subtask transitions (good clean break point), and repeated re-answers (sign Claude has lost track of prior work). Any of these signals that compaction is needed."
        },
        {
          id: 17,
          question: "A developer starts fresh after ending an investigation. They write a comprehensive summary to start the new session: problem description, suspect code paths, what was tried, and next steps. What is the purpose of including 'what was tried'?",
          options: {
            A: "Documentation for the team",
            B: "Preventing Claude from re-suggesting approaches that were already tried and ruled out — avoiding redundant work in the new session",
            C: "It is required format for fresh session starts",
            D: "Historical record keeping"
          },
          correct: "B",
          explanation: "'What was tried' in the fresh session summary prevents Claude from re-suggesting failed approaches. Without it, Claude might propose 'add a mutex' when that was already tried and found to cause 40% latency increase. The summary carries forward learnings without carrying forward the stale tool results."
        },
        {
          id: 18,
          question: "A team has a CLAUDE.md rule: 'When compacting, always preserve: the full list of modified files, any test commands and their output, architecture decisions and their rationale.' What does this accomplish?",
          options: {
            A: "Makes compaction slower",
            B: "Ensures compaction never loses investigation-critical information — the rule persists across compactions because CLAUDE.md survives /compact",
            C: "It is a reminder to developers to check these items",
            D: "Prevents /compact from running automatically"
          },
          correct: "B",
          explanation: "CLAUDE.md survives /compact (Claude re-reads it from disk after compaction). Rules about what to preserve during compaction are therefore always active. The team's compaction preservation rules ensure critical investigation artifacts always survive, regardless of when compaction is triggered."
        },
        {
          id: 19,
          question: "Overnight CI runs new tests against modified code, and all 3 previously-failing tests now pass. A developer resumes the investigation session to continue. What must they tell Claude?",
          options: {
            A: "Nothing — Claude automatically detects CI results",
            B: "Inform Claude about the CI results and request it re-read the relevant files to get current state before continuing",
            C: "Only mention the passing tests if they affect the next steps",
            D: "Start a fresh session because CI ran overnight"
          },
          correct: "B",
          explanation: "External changes (CI runs, test results) are invisible to a resumed session unless explicitly communicated. The developer must inform Claude what the CI found and request re-reads of any files the CI-passing tests might have affected. This ensures Claude's working model matches current reality."
        },
        {
          id: 20,
          question: "A developer uses /branch mid-session. Original session explores approach A; forked branch explores approach B. What shared advantage do both branches have?",
          options: {
            A: "Both have access to additional tools not in the original session",
            B: "Both inherit the full prior conversation history including analysis, findings, and code exploration — eliminating redundant investigation work",
            C: "Both have faster response times",
            D: "Both share file modifications automatically"
          },
          correct: "B",
          explanation: "The key advantage of forking: both branches start with identical conversation history. The 30-minute codebase analysis, architecture understanding, and investigation findings are present in both branches from the start. Neither branch needs to repeat this work — they diverge only in their choice of approach."
        },
        {
          id: 21,
          question: "A developer compacts a session mid-investigation with: '/compact Focus on the authentication module changes. Preserve exact error messages and the list of affected files.' What happens to messages not related to authentication?",
          options: {
            A: "They are permanently deleted",
            B: "They are summarized or condensed, with the authentication-focused content specifically preserved in detail",
            C: "They are moved to a separate session",
            D: "They remain unchanged"
          },
          correct: "B",
          explanation: "Guided compaction condenses the overall history while specifically preserving the requested information in detail. Non-authentication messages are summarized to save context space; the authentication module details, exact error messages, and file list are kept with full fidelity."
        },
        {
          id: 22,
          question: "What is the key difference between using /branch for ideation versus --worktree for implementation?",
          options: {
            A: "Branch is faster; worktree is more accurate",
            B: "/branch separates conversation only (same files, risky for simultaneous edits); --worktree separates both conversation and filesystem (isolated copies, safe for competing implementations)",
            C: "Branch uses less memory; worktree uses more",
            D: "Both are equivalent — the choice is stylistic"
          },
          correct: "B",
          explanation: "The distinction is filesystem isolation. /branch: same files shared between branches — fine for exploring ideas in conversation, risky for writing competing implementations. --worktree: completely isolated filesystem copies — required when both explorations need to modify files without interfering."
        },
        {
          id: 23,
          question: "A developer names a session 'memory-leak-investigation' using claude -n memory-leak-investigation. Three weeks later, the investigation is complete and they want to review what was found. How do they access this session?",
          options: {
            A: "It automatically expires after 2 weeks",
            B: "claude --resume and search/filter for memory-leak-investigation in the session picker, or claude --resume memory-leak-investigation",
            C: "Check ~/.claude/sessions/ directory manually",
            D: "Named sessions cannot be accessed after the terminal closes"
          },
          correct: "B",
          explanation: "Named sessions persist locally and can be resumed long after creation. claude --resume opens the picker where / enables search — type 'memory-leak' to filter. The session's complete history including all findings, tool outputs, and decisions is preserved for review."
        },
        {
          id: 24,
          question: "During a session, Claude reads a file incorrectly and bases subsequent reasoning on a wrong understanding. Rather than compacting, the developer wants to return to the state before the bad read. What tool enables this?",
          options: {
            A: "/undo command",
            B: "/rewind — selects a checkpoint before the bad read, then summarizes from that point, discarding the incorrect reasoning chain",
            C: "Start a fresh session",
            D: "/rollback command"
          },
          correct: "B",
          explanation: "/rewind (or Escape twice) lets the developer select a specific checkpoint in conversation history. Choosing a point before the bad file read and summarizing from there discards the incorrect reasoning while preserving the valuable work before it — more surgical than full compaction."
        },
        {
          id: 25,
          question: "A developer's session is hours old but the investigation is still active on the same problem with the same files. Should they resume or start fresh?",
          options: {
            A: "Start fresh — always better to begin clean",
            B: "Resume — files are unchanged, approach is the same, tool results are still valid, and hours elapsed is within the expected resume window",
            C: "Resume only if the session is under 1 hour old",
            D: "Start fresh unless the session has fewer than 20 messages"
          },
          correct: "B",
          explanation: "The resume decision table: files unchanged? Yes. Tool results valid? Yes. Time elapsed? Hours (not days). Approach same? Yes. All four factors point to resume. Sessions hours old with unchanged context are ideal for resumption — all the analysis remains relevant and valid."
        },
        {
          id: 26,
          question: "Using claude --worktree approach-a in one terminal and claude --worktree approach-b in another, a developer implements two competing bug fixes. What does each worktree provide?",
          options: {
            A: "Separate API keys for each approach",
            B: "A separate git branch and working directory for each approach — complete file system isolation enabling simultaneous implementation without conflicts",
            C: "Separate model instances",
            D: "Separate configuration files"
          },
          correct: "B",
          explanation: "Each --worktree creates an independent git branch and working directory. approach-a has its own branch and file copies; approach-b has its own. Both can freely modify 'the same files' without conflicts because they're actually separate copies on separate branches — true implementation isolation."
        },
        {
          id: 27,
          question: "A developer mid-session runs /rename new-name. What does this accomplish?",
          options: {
            A: "Renames the current project directory",
            B: "Renames the current session mid-conversation — enabling better organization without losing any conversation history",
            C: "Renames the current file being edited",
            D: "Renames the Claude Code instance"
          },
          correct: "B",
          explanation: "/rename allows renaming a session during the conversation. If an investigation that started unnamed reveals itself to be about a specific problem ('memory-leak-in-connection-pool'), renaming mid-session makes future resumption easier without losing any prior work."
        },
        {
          id: 28,
          question: "Two teammates debug the same issue independently. One uses a named session and can resume the next day. The other uses an unnamed session and starts fresh each day. After 3 days, whose investigation has more accumulated context?",
          options: {
            A: "The unnamed session — starting fresh avoids stale context",
            B: "The named session — each day's findings accumulate and persist; the investigation builds incrementally rather than restarting",
            C: "Both have equal context after 3 days",
            D: "Neither — context is session-scoped regardless of naming"
          },
          correct: "B",
          explanation: "Named sessions persist all history. Each day's debugging session adds to a growing record of what was found, tried, and decided. After 3 days, the named session user has a complete investigation history. The unnamed session user restarts each day, repeatedly rediscovering the same information."
        },
        {
          id: 29,
          question: "A developer uses CLAUDE.md to embed compaction preservation rules. Why is this more reliable than giving compaction instructions in the conversation?",
          options: {
            A: "CLAUDE.md instructions are enforced by the client",
            B: "CLAUDE.md survives /compact — Claude re-reads it from disk after compaction, so the preservation rules are always active even after the compaction that removes conversation instructions",
            C: "CLAUDE.md instructions have higher priority than conversation messages",
            D: "Conversation compaction instructions have a 1-hour expiry"
          },
          correct: "B",
          explanation: "This is a key architectural property: CLAUDE.md persists through /compact because Claude re-reads it from disk after compaction. Compaction instructions given only in conversation are themselves subject to being compacted away. CLAUDE.md preservation rules are always available regardless of compaction history."
        },
        {
          id: 30,
          question: "A developer completes a multi-day investigation and fixes the memory leak. The named session contains the complete investigation history. What lasting value does this preserved session provide?",
          options: {
            A: "None — the fix is in the code; the session is now irrelevant",
            B: "Future reference: if a similar leak appears, the session documents the diagnosis process, tools used, false leads, and the eventual fix rationale — enabling faster resolution of similar future bugs",
            C: "It satisfies compliance documentation requirements",
            D: "It is required for the PR review process"
          },
          correct: "B",
          explanation: "Named investigation sessions have long-term value as institutional memory. A future similar memory leak can be diagnosed faster by reviewing the prior investigation's process: what was checked, what was ruled out, what the root cause turned out to be, and why the chosen fix worked. This learning survives beyond the individual developer's memory."
        }
      ]
    }
  ]
};
