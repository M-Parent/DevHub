# 🚀 DevHub

> **Interactive Technical Documentation Wiki** powered by Astro + Starlight

DevHub is a personal knowledge base and learning platform for DevOps, Linux, networking, cybersecurity, and homelab projects. Built with a focus on **interactive learning** through quizzes, flashcards, drag-and-drop exercises, and hands-on terminal practice.

![Built with Astro](https://img.shields.io/badge/Built%20with-Astro-ff5d01?style=flat&logo=astro)
![Starlight](https://img.shields.io/badge/Docs-Starlight-blue?style=flat)
![License](https://img.shields.io/badge/License-MIT-green?style=flat)

---

## ✨ Features

### 📚 Content Types

- **Guides** - Step-by-step tutorials with interactive components
- **Cheatsheets** - Quick reference cards for commands and concepts
- **Roadmaps** - Sequential learning paths with progress tracking
- **Advanced Guides** - In-depth technical deep-dives

### 🎮 Interactive Components

| Component         | Description                                 | Usage                                 |
| ----------------- | ------------------------------------------- | ------------------------------------- |
| **Question**      | Q&A with reveal answer + optional hints     | Single question with hidden answer    |
| **Quiz**          | Multiple choice with instant feedback       | Knowledge checks, min 1 per article   |
| **DragDrop**      | Drag words into blanks                      | Fill-in exercises for commands/syntax |
| **Flashcard**     | Flip cards for memorization                 | **Min 3 cards** per component         |
| **MatchPairs**    | Connect matching items                      | Concept-definition matching           |
| **FillBlank**     | Type missing words                          | Command practice                      |
| **CodeChallenge** | Interactive code exercises                  | Code completion tasks                 |
| **Terminal**      | Simulated terminal for command practice     | Safe command practice                 |
| **FileTree**      | Directory structure with create/edit badges | Project structure visualization       |

### 🎨 Design

- Clean dark theme (`#070A12` background)
- Pink H2 / Blue H3 in Table of Contents
- Responsive and accessible
- Custom scrollbars and smooth animations

---

## 📁 Project Structure

```
DevHub/
├── public/                  # Static assets (favicon, etc.)
├── src/
│   ├── assets/img/         # Images and icons
│   ├── components/         # Interactive Astro components
│   │   ├── Question.astro
│   │   ├── Quiz.astro
│   │   ├── DragDrop.astro
│   │   ├── Flashcard.astro
│   │   ├── MatchPairs.astro
│   │   ├── FillBlank.astro
│   │   ├── CodeChallenge.astro
│   │   ├── Terminal.astro
│   │   └── FileTree.astro
│   ├── content/
│   │   ├── docs/           # Published articles
│   │   │   ├── cheatsheets/
│   │   │   ├── guides/
│   │   │   └── roadmaps/
│   │   └── vault/          # Obsidian notes (source)
│   ├── styles/
│   │   └── custom.css      # Dark theme styling
│   └── template/           # Templates for N8N/AI automation
│       ├── cheatsheets/
│       ├── guides/
│       ├── roadmaps/
│       └── README.md       # AI Agent instructions
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

---

## 🛠️ Tech Stack

- **[Astro](https://astro.build)** - Static site generator
- **[Starlight](https://starlight.astro.build)** - Documentation theme
- **MDX** - Markdown with components
- **TypeScript** - Type safety
- **Custom CSS** - Dark theme styling

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/devhub.git
cd devhub

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

### Commands

| Command           | Action                               |
| :---------------- | :----------------------------------- |
| `npm install`     | Install dependencies                 |
| `npm run dev`     | Start dev server at `localhost:4321` |
| `npm run build`   | Build production site to `./dist/`   |
| `npm run preview` | Preview build locally                |

---

## 🤖 Content Automation

DevHub includes a template system for automating content creation with **N8N + Gemini/GPT**.

### Workflow

1. Write notes in Obsidian with tags like `[default]`, `[CheatSheet]`, `[Roadmap(linux)]`
2. N8N watches for new notes
3. AI agent transforms notes into MDX articles using templates
4. Articles include interactive components automatically

See [`src/template/README.md`](src/template/README.md) for complete AI agent instructions.

---

## 📝 Writing Content

### Using Interactive Components

#### Quiz Component

```mdx
import Quiz from "../../../../components/Quiz.astro";

<Quiz
  question="What port does SSH use?"
  options={["21", "22", "80", "443"]}
  correct={1}
  explanation="SSH uses port 22 by default."
/>
```

#### Flashcard Component (min 3 cards)

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

#### DragDrop Component

```mdx
import DragDrop from "../../../../components/DragDrop.astro";

<DragDrop
  instruction="Complete the Docker run command:"
  template="docker {{blank1}} -d --name {{blank2}} nginx"
  blanks={{ blank1: "run", blank2: "webserver" }}
/>
```

#### FillBlank Component

```mdx
import FillBlank from "../../../../components/FillBlank.astro";

<FillBlank
  instruction="Type the command to list running containers:"
  answer="docker ps"
  hint="Two words starting with 'docker'"
/>
```

#### MatchPairs Component

```mdx
import MatchPairs from "../../../../components/MatchPairs.astro";

<MatchPairs
  title="Match Docker Commands"
  pairs={[
    { left: "docker run", right: "Create and start container" },
    { left: "docker build", right: "Create image from Dockerfile" },
    { left: "docker push", right: "Upload image to registry" },
  ]}
/>
```

#### FileTree Component

```mdx
import FileTree from "../../../../components/FileTree.astro";

<FileTree
  title="Files to Create"
  structure={[
    { name: "autoinstall.yaml", badge: "create" },
    {
      name: "custom_iso/",
      type: "folder",
      children: [
        {
          name: "nocloud/",
          type: "folder",
          children: [
            { name: "user-data", badge: "create" },
            { name: "meta-data", badge: "create" },
          ],
        },
      ],
    },
  ]}
/>
```

#### Terminal Component

```mdx
import Terminal from "../../../../components/Terminal.astro";

<Terminal
  commands={[
    { input: "docker ps", output: "CONTAINER ID   IMAGE   STATUS" },
    { input: "docker images", output: "REPOSITORY   TAG   IMAGE ID" },
  ]}
/>
```

---

## 📄 License

MIT License - feel free to use this for your own documentation projects!

---

## 🙏 Acknowledgments

- [Astro](https://astro.build) team for the amazing framework
- [Starlight](https://starlight.astro.build) for the documentation theme
- The open-source community for inspiration
