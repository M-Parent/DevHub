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
| Component | Description |
|-----------|-------------|
| **Question** | Q&A with reveal answer + optional hints |
| **Quiz** | Multiple choice with instant feedback |
| **DragDrop** | Drag words into blanks |
| **Flashcard** | Flip cards for memorization |
| **MatchPairs** | Connect matching items |
| **FillBlank** | Type missing words |
| **CodeChallenge** | Interactive code exercises |
| **Terminal** | Simulated terminal for command practice |
| **ProgressCheck** | Checklist saved to localStorage |
| **FileTree** | Directory structure with create/edit badges |

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
│   │   ├── ProgressCheck.astro
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

| Command | Action |
|:--------|:-------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview build locally |

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

```mdx
import Quiz from '../components/Quiz.astro';
import FileTree from '../components/FileTree.astro';

<FileTree
  title="Files to Create"
  structure={[
    { name: "autoinstall.yaml", badge: "create" },
    { name: "custom_iso/", type: "folder", children: [
      { name: "nocloud/", type: "folder", children: [
        { name: "user-data", badge: "create" },
        { name: "meta-data", badge: "create" }
      ]}
    ]}
  ]}
/>

<Quiz
  question="What port does SSH use?"
  options={["21", "22", "80", "443"]}
  correct={1}
  explanation="SSH uses port 22 by default."
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
