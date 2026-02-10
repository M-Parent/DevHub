# DevHub Template System

This file contains templates for creating new content in DevHub using the n8n/Gemini automation pipeline.

You will always reply with this exact format:

===FILE_PATH===
<path/to/the/file.mdx>

===FILE_CONTENT===
<all the content of the file .mdx>

===ROADMAP_PATH===
<path/to/roadmap/to/update.mdx>

===ROADMAP_SNIPPET===
<only the MDX block to add in the roadmap, e.g. the LinkCard>

---

Path rule: All content file paths must be rooted at "src/content/docs/".

- When returning `FILE_PATH`, always start with: src/content/docs/
- If the agent receives or builds a path that begins with "src/content/" but misses "docs", insert "docs" after "content". Example incorrect: src/content/cheatsheets/linux/foo.mdx. Correct: src/content/docs/cheatsheets/linux/foo.mdx
- If the user specifies a different target root, confirm explicitly in your response before writing files.

Important: the agent should attempt to match the provided `title` to existing filenames using fuzzy matching and contextual analysis, not only exact equality.

Matching and creation policy:

- Normalize the title to a candidate filename first (see normalization rules below).
- Compute a similarity score between the normalized candidate filename and existing filenames in the target directory (use a standard string similarity algorithm; e.g., token overlap, Jaro-Winkler, or normalized Levenshtein).
- If the highest similarity score is greater than or equal to 90%:
  - Perform a contextual check to decide whether the new content fits into the matched file. This check should consider metadata, categories, badges, and a short semantic comparison between the new content and the existing file content.
  - If context indicates the notes belong in the existing file, append or merge the `FILE_CONTENT` into that file (prefer appending under a clear section header such as "Notes - YYYY-MM-DD"). Return the existing `FILE_PATH`.
  - If context indicates the new content is not a fit despite the string similarity, create a new file as described below and return the new `FILE_PATH`.
- If no existing filename reaches the 90% threshold, create a new file using the normalized filename and write `FILE_CONTENT` into it. Return the new `FILE_PATH`.

Filename normalization rules (apply before matching/creating):

- Lowercase the title
- Replace spaces and slashes with hyphens
- Remove characters other than letters, numbers, hyphens, and underscores
- Trim repeated hyphens to a single hyphen
- Append ".mdx" if missing

Example: Title "Docker Install Guide" -> normalized filename "docker-install-guide.mdx"

## 📁 Folder Structure

```
src/content/docs/
├── guides/
│   ├── ansible/
│   ├── arr-stack/
│   ├── coding/
│   ├── cyber/
│   ├── docker/
│   ├── docker-swarm/
│   ├── kubernetes/
│   ├── linux/
│   │   ├── ubuntu-debian/
│   │   └── ssh-fundamentals.mdx
│   ├── networking/
│   ├── radio/
│   ├── terraform/
│   └── windows/
├── cheatsheets/
│   ├── ansible/
│   ├── arr-stack/
│   ├── coding/
│   ├── cyber/
│   ├── docker/
│   ├── docker-swarm/
│   ├── go/
│   ├── kubernetes/
│   ├── linux/
│   ├── networking/
│   ├── radio/
│   ├── terraform/
│   └── windows/
├── projects/
├── misc/
└── roadmaps/
  ├── ansible-learning-path.mdx
  ├── arr-stack-learning-path.mdx
  ├── coding-learning-path.mdx
  ├── cyber-learning-path.mdx
  ├── docker-learning-path.mdx
  ├── kubernetes-learning-path.mdx
  ├── linux-learning-path.mdx
  ├── networking-learning-path.mdx
  ├── radio-learning-path.mdx
  ├── server-learning-path.mdx
  ├── terraform-learning-path.mdx
  └── windows-learning-path.mdx
```

---

## 🏝️ Orphan Articles (Misc Category)

Articles in the `misc/` folder are standalone content that does NOT belong to any learning path or roadmap. These cover topics outside core DevOps/IT focus areas (e.g., UX design theory, business concepts).

**Rules for Misc Articles:**

- Use `<Badge text="Misc" class="misc" />` category badge
- Do NOT add to any roadmap
- No ProgressCheck component required
- Quiz/Flashcard components optional

---

## 🏷️ Available Categories

| Category     | Badge Class    | Color         |
| ------------ | -------------- | ------------- |
| Docker       | `docker`       | Emerald Green |
| Linux        | `linux`        | Sky Blue      |
| Server       | `server`       | Indigo        |
| Networking   | `networking`   | Amber         |
| Cyber        | `cyber`        | Red           |
| Radio        | `radio`        | Purple        |
| Electronics  | `electronics`  | Fuchsia/Pink  |
| Productivity | `productivity` | Teal          |
| Homelab      | `homelab`      | Lime Green    |
| Kubernetes   | `kubernetes`   | Orange        |
| Ansible      | `ansible`      | Rose          |
| Terraform    | `terraform`    | Violet        |
| VM           | `vm`           | Slate Blue    |
| SSH          | `ssh`          | Cyan          |
| Windows      | `windows`      | Blue          |
| ARR-Stack    | `arr-stack`    | Yellow Green  |
| Coding       | `coding`       | Emerald       |
| Misc         | `misc`         | Gray          |
| DevOps       | `devops`       | Slate         |

### Programming Language Badges

| Language   | Badge Class  | Color         |
| ---------- | ------------ | ------------- |
| Python     | `python`     | Yellow        |
| JavaScript | `javascript` | Gold          |
| TypeScript | `typescript` | Blue          |
| HTML       | `html`       | Orange/Red    |
| CSS        | `css`        | Indigo        |
| C#         | `csharp`     | Purple        |
| C++        | `cpp`        | Blue          |
| PHP        | `php`        | Indigo/Purple |
| SQL        | `sql`        | Cyan          |
| Go         | `go`         | Teal          |
| Rust       | `rust`       | Orange        |

---

## 🎯 Difficulty Levels

| Level    | Sidebar Badge        | In-Article Badge                             |
| -------- | -------------------- | -------------------------------------------- |
| Novice   | `variant: "tip"`     | `<Badge text="Novice" variant="tip" />`      |
| Mid      | `variant: "caution"` | `<Badge text="Mid" variant="caution" />`     |
| Advanced | `variant: "danger"`  | `<Badge text="Advanced" variant="danger" />` |
| Expert   | `variant: "success"` | `<Badge text="Expert" variant="success" />`  |
| Theory   | `variant: "note"`    | `<Badge text="Theory" variant="note" />`     |

---

## 📝 Multi-Category Articles

**Important Rule:** Articles tagged with multiple categories MUST appear in ALL corresponding roadmaps.

Example: An article with `<Badge text="Linux" />` and `<Badge text="Server" />` must be linked in:

- `linux-learning-path.mdx`
- `server-learning-path.mdx`

---

## 🔧 Component Import Paths

Import paths depend on folder depth:

| Location                    | Import Path                  |
| --------------------------- | ---------------------------- |
| `guides/docker/*.mdx`       | `../../../../components/`    |
| `guides/linux/*.mdx`        | `../../../../components/`    |
| `guides/linux/ubuntu/*.mdx` | `../../../../../components/` |
| `guides/terraform/*.mdx`    | `../../../../components/`    |
| `guides/docker-swarm/*.mdx` | `../../../../components/`    |
| `guides/kubernetes/*.mdx`   | `../../../../components/`    |
| `cheatsheets/linux/*.mdx`   | `../../../../components/`    |
| `cheatsheets/docker/*.mdx`  | `../../../../components/`    |
| `projects/linux/*.mdx`      | `../../../../components/`    |
| `misc/*.mdx`                | `../../../components/`       |

---

## 🎮 Interactive Components Reference

### Quiz Component

Single question with multiple choice answers.

```mdx
import Quiz from "../../../../components/Quiz.astro";

<Quiz
  question="What port does SSH use by default?"
  options={["21", "22", "80", "443"]}
  correct={1}
  explanation="SSH uses port 22 by default. Port 21 is FTP, 80 is HTTP, 443 is HTTPS."
/>
```

**Props:**

- `question` (string) - The question text
- `options` (string[]) - Array of 4 answer options
- `correct` (number) - Index of correct answer (0-3)
- `explanation` (string, optional) - Shown after answering

**Usage:** Add 1-3 Quiz per article to test knowledge.

---

### Flashcard Component

Flip cards for memorization. **Minimum 3 cards required.**

```mdx
import Flashcard from "../../../../components/Flashcard.astro";

<Flashcard
  title="Docker Concepts"
  cards={[
    {
      front: "What is a container?",
      back: "A lightweight, isolated process running from an image",
    },
    {
      front: "What is an image?",
      back: "A read-only template with instructions to create a container",
    },
    {
      front: "What is a volume?",
      back: "Persistent data storage that survives container restarts",
    },
  ]}
/>
```

**Props:**

- `title` (string) - Title displayed above cards
- `cards` (array) - Array of objects with `front` and `back` strings

**Usage:** Use for key concepts, terminology, or quick recall items.

---

### DragDrop Component

Fill in blanks by dragging words.

```mdx
import DragDrop from "../../../../components/DragDrop.astro";

<DragDrop
  instruction="Complete the Docker command to run a container:"
  template="docker {{blank1}} -d --name {{blank2}} -p 8080:80 {{blank3}}"
  blanks={{ blank1: "run", blank2: "webserver", blank3: "nginx" }}
/>
```

**Props:**

- `instruction` (string) - Instructions for the user
- `template` (string) - Text with `{{blankN}}` placeholders
- `blanks` (object) - Key-value pairs mapping blank names to answers

**Usage:** Great for command syntax, configuration patterns.

---

### FillBlank Component

Type the missing word/command.

```mdx
import FillBlank from "../../../../components/FillBlank.astro";

<FillBlank
  instruction="Type the command to list all running containers:"
  answer="docker ps"
  hint="Two words starting with 'docker'"
/>
```

**Props:**

- `instruction` (string) - What to type
- `answer` (string) - Correct answer (case-insensitive)
- `hint` (string, optional) - Hint text

**Usage:** Use for commands that should be memorized.

---

### MatchPairs Component

Connect matching items with lines.

```mdx
import MatchPairs from "../../../../components/MatchPairs.astro";

<MatchPairs
  title="Match Docker Commands"
  pairs={[
    { left: "docker run", right: "Create and start a container" },
    { left: "docker build", right: "Create image from Dockerfile" },
    { left: "docker push", right: "Upload image to registry" },
    { left: "docker pull", right: "Download image from registry" },
  ]}
/>
```

**Props:**

- `title` (string) - Title above the pairs
- `pairs` (array) - Array of objects with `left` and `right` strings

**Usage:** Use for concept-definition matching, command-purpose mapping.

---

### Terminal Component

Simulated terminal with command/output display.

```mdx
import Terminal from "../../../../components/Terminal.astro";

<Terminal
  commands={[
    { input: "docker ps", output: "CONTAINER ID   IMAGE   COMMAND   STATUS" },
    { input: "docker images", output: "REPOSITORY   TAG   IMAGE ID   SIZE" },
  ]}
/>
```

**Props:**

- `commands` (array) - Array of objects with `input` and `output` strings

**Usage:** Show expected command outputs, demonstrate workflows.

---

### FileTree Component

Display directory structure with badges.

```mdx
import FileTree from "../../../../components/FileTree.astro";

<FileTree
  title="Project Structure"
  structure={[
    { name: "Dockerfile", badge: "create" },
    { name: "docker-compose.yml", badge: "create" },
    {
      name: "src/",
      type: "folder",
      children: [
        { name: "app.py", badge: "edit" },
        { name: "requirements.txt", badge: "create" },
      ],
    },
  ]}
/>
```

**Props:**

- `title` (string) - Title above the tree
- `structure` (array) - Nested array of file/folder objects
  - `name` (string) - File or folder name
  - `type` (string, optional) - "folder" for directories
  - `badge` (string, optional) - "create", "edit", "delete"
  - `children` (array, optional) - Nested items for folders

**Usage:** Show project structure, files to create/modify.

---

## 📊 Component Usage Guidelines

| Article Type          | Recommended Components                                 |
| --------------------- | ------------------------------------------------------ |
| **Tutorial/Guide**    | Quiz (1-3), Flashcard (1), DragDrop or FillBlank (1-2) |
| **Theory**            | Flashcard (1-2), Quiz (1-2), MatchPairs (1)            |
| **Install/Setup**     | Terminal (1-2), FileTree (1), Quiz (1)                 |
| **Command Reference** | DragDrop (2-3), Terminal (1-2), FillBlank (1-2)        |

**Rules:**

- Every guide should have at least 2 interactive components
- Flashcard must have minimum 3 cards
- Place Quiz components in "Knowledge Check" section near end
- Use DragDrop/FillBlank for command practice inline with content

---

## 📄 Guide Template

```mdx
---
title: "Article Title"
description: "Brief description of the article."
sidebar:
  label: "Sidebar Label"
  order: 1
  badge:
    text: "Novice"
    variant: "tip"
tableOfContents: true
---

import {
  Aside,
  Badge,
  Steps,
  CardGrid,
  LinkCard,
} from "@astrojs/starlight/components";
import Quiz from "../../../../components/Quiz.astro";
import Flashcard from "../../../../components/Flashcard.astro";
import ProgressCheck from "../../../../components/ProgressCheck.astro";

<Badge text="Linux" class="linux" />

Introduction paragraph explaining what this guide covers.

<Aside type="tip" title="Quick Tip">
  Helpful tip for the reader.
</Aside>

---

## Section 1

Content here...

---

## Knowledge Check

<Quiz
  id="unique-quiz-id"
  title="Quiz Title"
  questions={[
    {
      question: "Question text?",
      options: ["Option A", "Option B", "Option C", "Option D"],
      correctAnswer: 0,
      explanation: "Explanation of correct answer.",
    },
  ]}
/>

---

## Progress Checklist

<ProgressCheck
  id="unique-progress-id"
  title="Checklist Title"
  items={["Task 1", "Task 2", "Task 3"]}
/>

---

## Source

Based on [Source Name](https://example.com) and DevHub examples.
```

---

## 📋 Cheatsheet Template

```mdx
---
title: "Cheatsheet Title"
description: "Quick reference for..."
sidebar:
  label: "Cheatsheet Label"
  order: 1
  badge:
    text: "Novice"
    variant: "tip"
tableOfContents: true
---

import { Badge, Aside } from "@astrojs/starlight/components";

<Badge text="Linux" class="linux" />

## Section 1

\`\`\`bash
command here
\`\`\`

---

## Section 2

| Command | Description |
| ------- | ----------- |
| `cmd1`  | Does X      |
| `cmd2`  | Does Y      |
```

---

## 🗺️ Roadmap Template

```mdx
---
title: "Category Learning Path"
description: "Complete learning path for..."
sidebar:
  label: "Category Path"
  order: 1
tableOfContents: true
---

import {
  Badge,
  CardGrid,
  LinkCard,
  Aside,
} from "@astrojs/starlight/components";
import ProgressCheck from "../../../components/ProgressCheck.astro";

<Badge text="Category" class="category" />

Introduction text.

<Aside type="tip" title="How to Use This Path">
  Follow the guides in order. Check off items as you complete them.
</Aside>

---

## Overview

|               |                  |
| ------------- | ---------------- |
| 📚 **Guides** | X available      |
| 🎯 **Goal**   | Goal description |

---

## Section Name

### 1. Topic <Badge text="Available" variant="tip" /> <Badge text="Novice" variant="tip" />

Description.

<LinkCard
  title="Guide Title"
  description="Guide description"
  href="/guides/category/guide-name/"
/>

---

## 🛠️ Projects

Hands-on projects.

<Aside type="note" title="Coming Soon">
  Projects will be added here.
</Aside>

---

## Track Your Progress

<ProgressCheck
  id="category-learning-path"
  title="Checklist Title"
  items={["Topic 1", "Topic 2"]}
/>
```

---

## 🛠️ Project Template

```mdx
---
title: "Project Title"
description: "Build and deploy..."
sidebar:
  label: "Project Label"
  order: 1
  badge:
    text: "Mid"
    variant: "caution"
tableOfContents: true
---

import { Aside, Badge, Steps, CardGrid } from "@astrojs/starlight/components";
import ProgressCheck from "../../../../components/ProgressCheck.astro";

<Badge text="Linux" class="linux" />
<Badge text="Server" class="server" />

Project introduction.

<Aside type="note" title="Project Overview">
  **Difficulty**: Mid **Time**: ~30 minutes **Skills**: Skill 1, Skill 2
</Aside>

---

## Prerequisites

- Requirement 1
- Requirement 2

---

## Step-by-Step Guide

<Steps>

1. **Step 1**

   \`\`\`bash
   command
   \`\`\`

2. **Step 2**

   Explanation...

</Steps>

---

## Progress Checklist

<ProgressCheck
  id="project-id"
  title="Project Checklist"
  items={["Step 1", "Step 2", "Step 3"]}
/>

---

## Source

Based on [Source Name](https://example.com) and DevHub examples.
```

---

## 📌 Vault Note Format

When creating notes in the vault for automation:

```markdown
[default] (category1), (category2#subcategory)

# Title

Content here...

[---]

[Cheatsheet] (category)

# Cheatsheet Section

Quick reference content...
```

### Markers

| Marker                   | Purpose                 |
| ------------------------ | ----------------------- |
| `[default]`              | Main article content    |
| `(category)`             | Category badge          |
| `(category#subcategory)` | Category with subfolder |
| `[---]`                  | Section separator       |
| `[Cheatsheet]`           | Cheatsheet section      |

---

## 🔗 Link Format

Always use full paths from root:

```
/guides/linux/ssh-fundamentals/
/guides/linux/ubuntu/nginx-setup/
/guides/terraform/terraform-fundamentals/
/cheatsheets/linux/ssh-cheatsheet/
/projects/linux/scribbler-game/
/roadmaps/linux-learning-path/
```

---

## ✅ Checklist for New Content

- [ ] Correct folder location
- [ ] Proper import paths for components
- [ ] Category badges added
- [ ] Difficulty badge in sidebar
- [ ] Interactive components (Quiz, Flashcard, ProgressCheck)
- [ ] Added to relevant roadmap(s)
- [ ] Multi-category articles in ALL roadmaps
- [ ] Source attribution included

---

## 🛠️ DevHub AI Agent Prompts

- When using the FillBlank component, always provide the required prop `sentence` using the `[BLANK:answer]` syntax. Example:

  ```mdx
  <FillBlank
    instruction="Type the command to reload your bash configuration after adding an alias:"
    sentence="Type the command to reload your bash configuration after adding an alias: [BLANK:source ~/.bashrc]"
    hint="Starts with 's' and targets the hidden bash config file"
  />
  ```

- Do NOT use `answer` as a prop for FillBlank. Only `sentence` is required for blanks to work.
- Always check component props in `/src/components/` before using them in new content.

---

## 🌐 Example Sources by Category

When writing the `Source` section, always include at least one real, useful, and verifiable resource. Here are recommended links for each main category:

- **Linux:**
  - [GNU Bash Manual](https://www.gnu.org/software/bash/manual/)
  - [Arch Wiki](https://wiki.archlinux.org/)
  - [Linuxize Tutorials](https://linuxize.com/)
- **Docker:**
  - [Docker Official Docs](https://docs.docker.com/)
  - [Play with Docker](https://labs.play-with-docker.com/)
- **Kubernetes:**
  - [Kubernetes Official Docs](https://kubernetes.io/docs/)
  - [Learn Kubernetes](https://www.learnk8s.io/)
- **Networking:**
  - [Cisco Networking Basics](https://www.cisco.com/c/en/us/solutions/enterprise-networks/what-is-networking.html)
  - [NetworkLessons.com](https://networklessons.com/)
- **Cybersecurity:**
  - [OWASP Top Ten](https://owasp.org/www-project-top-ten/)
  - [Kali Linux Tools](https://tools.kali.org/tools-listing)
- **Radio:**
  - [ARRL (Amateur Radio Relay League)](http://www.arrl.org/)
  - [RTL-SDR Blog](https://www.rtl-sdr.com/)
- **Windows:**
  - [Microsoft Docs](https://docs.microsoft.com/en-us/windows/)
  - [SS64 Windows Commands](https://ss64.com/nt/)
- **Ansible:**
  - [Ansible Docs](https://docs.ansible.com/)
- **Terraform:**
  - [Terraform Docs](https://developer.hashicorp.com/terraform/docs)
- **Go:**
  - [Go by Example](https://gobyexample.com/)
  - [Go Official Docs](https://go.dev/doc/)
- **Python:**
  - [Python Official Docs](https://docs.python.org/3/)
  - [Real Python](https://realpython.com/)
- **JavaScript/TypeScript:**
  - [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  - [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- **SQL:**
  - [SQLBolt](https://sqlbolt.com/)
  - [PostgreSQL Docs](https://www.postgresql.org/docs/)
- **General DevOps:**
  - [DevOps Handbook](https://itrevolution.com/products/devops-handbook)
  - [Awesome DevOps](https://github.com/ligurio/awesome-devops)

Always prefer official documentation, reputable tutorials, or well-known community resources. Add more as needed for new categories.

---
