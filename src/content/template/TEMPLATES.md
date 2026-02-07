# DevHub Template System

This file contains templates for creating new content in DevHub using the n8n/Gemini automation pipeline.

---

## 📁 Folder Structure

```
src/content/docs/
├── guides/
│   ├── linux/
│   │   ├── ssh-fundamentals.mdx
│   │   ├── linux-user-management.mdx
│   │   ├── linux-file-permissions.mdx
│   │   ├── linux-distributions.mdx
│   │   ├── openvpn-setup.mdx
│   │   └── ubuntu/
│   │       ├── sudoers-configuration.mdx
│   │       ├── create-certificate-authority.mdx
│   │       ├── create-csr-certificate.mdx
│   │       ├── pkcs12-conversion.mdx
│   │       ├── verify-ssl-certificates.mdx
│   │       ├── nginx-setup.mdx
│   │       └── custom-ubuntu-iso.mdx
│   ├── windows/
│   │   └── docker-install-windows.mdx
│   ├── docker/
│   │   ├── docker-fundamentals.mdx
│   │   └── docker-install-linux.mdx
│   ├── terraform/
│   │   ├── terraform-fundamentals.mdx
│   │   ├── terraform-state.mdx
│   │   ├── terraform-variables.mdx
│   │   └── terraform-modules.mdx
│   ├── networking/
│   │   └── dns-theory.mdx
│   ├── radio/
│   │   └── radio-fundamentals.mdx
│   ├── coding/
│   │   └── (empty - for future content)
│   └── arr-stack/
│       └── arr-stack-theory.mdx
├── cheatsheets/
│   ├── linux/
│   │   ├── ssh-cheatsheet.mdx
│   │   └── openvpn-cheatsheet.mdx
│   ├── radio/
│   │   └── radio-theory.mdx
│   └── arr-stack/
│       └── arr-stack.mdx
├── projects/
│   └── linux/
│       └── scribbler-game.mdx
└── roadmaps/
    ├── linux-learning-path.mdx
    ├── server-learning-path.mdx
    ├── windows-learning-path.mdx
    ├── docker-learning-path.mdx
    ├── terraform-learning-path.mdx
    ├── networking-learning-path.mdx
    ├── radio-learning-path.mdx
    ├── arr-stack-learning-path.mdx
    ├── coding-learning-path.mdx
    ├── kubernetes-learning-path.mdx
    ├── ansible-learning-path.mdx
    └── cyber-learning-path.mdx
```

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
| `cheatsheets/linux/*.mdx`   | `../../../../components/`    |
| `projects/linux/*.mdx`      | `../../../../components/`    |

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
