# 🎓 SkillxPro - Collaborative Skill Exchange Portal

<div align="center">
  <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800" alt="SkillxPro Banner" width="100%" style="border-radius: 16px; border: 1px solid rgba(124, 111, 255, 0.2);" />
  
  <p align="center">
    <strong>Swap digital skills, teach classes, and level up your career for free with collaborative knowledge tokens.</strong>
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/GirlScript-GSSoC%202026-blueviolet?style=for-the-badge&logo=github" alt="GSSoC 2026" />
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge" alt="License" />
  </p>
</div>

---

## 🎯 GSSoC 2026 Overview

Welcome to **SkillxPro**, a prideful participant project for **GirlScript Summer of Code (GSSoC) 2026**! 

SkillxPro is a borderless peer-to-peer skill-sharing ecosystem where learning has zero financial friction. Users list courses they want to teach and topics they want to study. Transactions are regulated through secure client-side **knowledge tokens** (loaded automatically on registration). This monorepo is fully migrated to a premium **React + TypeScript + Tailwind CSS** architecture.

> [!IMPORTANT]
> **Contributor-Ready Sandbox Model**
> All stateful features (ledgers, direct message hub, class schedulers, and admin controls) run inside a robust, persistent **`localStorage` mock backend**. Contributors can build, test, and preview comprehensive features entirely client-side without configuring external server databases!

---

## 📁 Repository Structure

```
SkillxPro/
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug_report.md         # Creative bug reporting template
│   │   └── feature_request.md    # Standard feature proposal schema
│   └── pull_request_template.md  # Continuous integration validation list
├── apps/
│   └── web/                      # Main React + TS + Tailwind SPA (Vite Workspace)
│       ├── src/
│       │   ├── components/       # Modular UI components (Navbar, Footer)
│       │   ├── context/          # Stateful context layers (AuthContext ledger sync)
│       │   ├── pages/            # View routes (Home, Login, Dashboard, Admin)
│       │   ├── types.ts          # Strongly typed entity interfaces
│       │   └── main.tsx          # Virtual DOM entry point
│       └── tailwind.config.js    # HSL color system configuration
├── legacy/                       # Archived Vanilla HTML/CSS/JS files for study
├── CONTRIBUTING.md               # Ultimate guide for Git workflows & styles
├── ROADMAP.md                    # backlog milestones categorized by difficulty
├── CODE_OF_CONDUCT.md            # Community interaction guidelines
├── LICENSE                       # MIT Open Source License
└── README.md                     # This file
```

---

## ✨ Features Implemented

### 1. **Robust Authentication Context (`src/context/AuthContext.tsx`)**
- 🌟 Multi-mode simulated login using Gmail, mobile number, or superadmin credentials.
- 🌟 Integrated auto-creation of mock-user profiles inside browser local storage databases.
- 🌟 Escrowed distribution systems minting **200 tokens welcome bonus** for registrations and **150 tokens** for returning sessions.

### 2. **Stateful Direct Chat Hub (`src/pages/Dashboard.tsx`)**
- 💬 Persistent inbox panel displaying contacts and chat logs.
- 💬 Sandbox automated response simulation imitating replies from online instructors.
- 💬 Custom schedules calendars dispatching proposal cards directly in conversation.

### 3. **Searchable Course Marketplace (`src/pages/Dashboard.tsx`)**
- 🔍 Live search query matches scanning titles, syllabus descriptions, and names.
- 🔍 Category filters indexing courses by field (Development, Design, Data, Writing, etc.).
- 🔍 Stateful token validation blocking enrollments if current balance is insufficient.

### 4. **SuperAdmin Terminal Command Center (`src/pages/Admin.tsx`)**
- 👮 Full overview grid compiling platform metrics (total token supplies, user counts, active listings).
- 👮 Interactive peer suspensions deck immediate-toggling active / suspended status.
- 👮 Manual token mint distribution form logging custom awards into the recipients' ledgers.

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18 or higher) and `npm` installed.

### Setup Guide

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/completeproject.git
   cd completeproject
   ```

2. **Navigate to the Web App Workspace**
   ```bash
   cd apps/web
   ```

3. **Install Dependencies**
   ```bash
   npm install
   ```

4. **Launch the Development Server**
   ```bash
   npm run dev
   ```
   *The application will boot at [http://localhost:3000](http://localhost:3000)*

5. **Build for Production**
   ```bash
   npm run build
   ```

---

## 🎨 Premium Aesthetics System

Our application implements a custom-tailored dark mode matching GSSoC vibes:
- **Primary Indigo Glow**: `#7c6fff` (Vibrant accent borders and CTA gradient backgrounds)
- **Glassmorphism Grids**: High-end translucent cards built with Backdrop-filter blur and subtle glowing shadows.
- **Micro-Animations**: Smooth scale transforms on cards hover and coin spins simulating token ledger changes.

---

## 🤝 GSSoC Contributing Checkpoints

We welcome contributions of all skill levels! Please consult our [CONTRIBUTING.md](file:///c:/Users/Sandeep/Downloads/completeproject/CONTRIBUTING.md) and [ROADMAP.md](file:///c:/Users/Sandeep/Downloads/completeproject/ROADMAP.md) before pushing commits.

| Difficulty | Focus Area | Reward | Status |
|---|---|---|---|
| **Easy** | Add local styling features, fix responsive margins | 10 GSSoC points | Ready |
| **Medium** | Build out custom user profile tabs and avatars | 20 GSSoC points | Ready |
| **Hard** | Integrate real Backend JSON APIs, implement JWT | 30 GSSoC points | Backlog |

---

## 📄 License

Distributed under the MIT License. See [LICENSE](file:///c:/Users/Sandeep/Downloads/completeproject/LICENSE) for more details.

---

<div align="center">
  <p><strong>Made with ❤️ by GSSoC 2026 Contributors</strong></p>
</div>
