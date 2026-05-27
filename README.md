# 🎓 SkillxPro — Borderless Peer-to-Peer Skill Exchange Network

SkillxPro is a borderless, decentralized learning ecosystem designed to facilitate direct peer-to-peer knowledge transfers. Traditional currency is replaced by **Knowledge Tokens**, fostering a collaborative economy where anyone can be a student today and an expert educator tomorrow.

Built as a high-fidelity Single Page Application using **React 18 + TypeScript + Tailwind CSS**, the platform integrates rich visual aesthetics, a fully persistent client-side database, and a supercharged administrator terminal.

---

## ⚡ Core Philosophy & Mechanics

Traditional education systems place teaching and learning in separate silos. SkillxPro bridges this gap using a self-sustaining collaborative ledger:

*   **The Equalizer Bonus:** Every new profile is credited with `200 Knowledge Tokens` to jumpstart their learning journey.
*   **Knowledge Liquidity:** Host sessions in your areas of strength to earn tokens directly from peers.
*   **Limitless Growth:** Reinvest your earned balance to enroll in expert classes spanning technology, marketing, design, and business.
*   **True Sandbox Isolation:** The entire application operates inside a persistent `localStorage` database. Enjoy a stateful direct messaging inbox, a transaction ledger, class completion controls, and superadmin configuration overrides without needing to configure complex external backends.

---

## 📁 Architecture Overview

SkillxPro is organized as a neat workspace monorepo:

```
SkillxPro/
├── .github/                 # Git issue forms & validation templates
├── apps/
│   └── web/                 # Main React + TS + Tailwind SPA (Vite Dev Server)
│       ├── src/
│       │   ├── components/  # Core shared elements (Navbar, Footer, Glass cards)
│       │   ├── context/     # Auth system & reactive localStorage ledger engine
│       │   ├── pages/       # Responsive views (Home, Login, Dashboard, Admin)
│       │   ├── types.ts     # Rigid typescript interfaces
│       │   └── main.tsx     # SPA entry point
├── CONTRIBUTING.md          # Guidelines for open-source participation
├── ROADMAP.md               # Feature backlog & complexity guides
└── LICENSE                  # MIT License
```

---

## ✨ Platform Highlights

### 1. 🛡️ Secure Reactive Authentication (`AuthContext.tsx`)
*   Passwordless email verification link simulation and SMS login paths.
*   Intelligent profile generation with custom avatars and tags stored reactively.
*   Strict session preservation on page reloads.

### 2. 💬 Stateful Direct Message Hub (`Dashboard.tsx`)
*   Persistent inbox allowing learners to message teachers directly.
*   Interactive sidebar directory with active conversation tracking.
*   Schedule-request integration to request custom classes and sync timings.

### 3. 🛍️ Fluid Course Marketplace (`Dashboard.tsx`)
*   Instantly query courses using title, tag, or educator search criteria.
*   Sleek category filters with interactive border glowing.
*   Automated balance verification to prevent double-spending or enrollment on insufficient funds.

### 4. 🎛️ Command-Center SuperAdmin Deck (`Admin.tsx`)
*   Platform-wide analytics (circulating tokens, registration counts, active courses).
*   Live controls to suspend accounts, distribute token rewards, or add new skills.
*   Configuration toggles for maintenance mode, registration locks, and mock transaction fees.

---

## 🚀 Local Development Guide

### Prerequisites
*   **Node.js** (v18.0.0 or higher)
*   **npm** (or yarn)

### Quick Setup

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/Sandeep6135/SkillxPro.git
    cd SkillxPro
    ```

2.  **Install Workspace Dependencies**
    ```bash
    cd apps/web
    npm install
    ```

3.  **Launch Dev Server**
    ```bash
    npm run dev
    ```
    *Access your local copy at [http://localhost:3000](http://localhost:3000)*

4.  **Validate Build Correctness**
    ```bash
    npm run build
    ```

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
