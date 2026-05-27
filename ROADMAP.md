# 🗺️ SkillxPro Development Roadmap (GSSoC 2026)

Welcome to our GSSoC Feature Roadmap! This document details upcoming features, refactors, and styling improvements categorized by difficulty. Feel free to claim any backlog item by opening a GitHub issue!

---

## 🟢 Easy Level Milestones (10 Points)

- [ ] **Marketplace Categories Sliders**
  - *Goal*: Add more filters to the carousel categories (e.g., Marketing, Language) and style active tags with a subtle green border glow.
  - *Files*: `src/pages/Dashboard.tsx`
- [ ] **FAQ Expandable Accordions**
  - *Goal*: Add two new common GSSoC FAQ questions in the landing page accordion list.
  - *Files*: `src/pages/Home.tsx`
- [ ] **Scroll Indicator Progress Bar**
  - *Goal*: Add a subtle top progress bar that animates horizontally as the user scrolls down the landing page.
  - *Files*: `src/components/Navbar.tsx` or `src/App.tsx`
- [ ] **Sidebar Badges**
  - *Goal*: Add indicator numbers (e.g. `New`) beside the direct chat sidebar tab in the dashboard navigation list.
  - *Files*: `src/pages/Dashboard.tsx`

---

## 🟡 Medium Level Milestones (20 Points)

- [ ] **Stateful Direct Messaging Filter**
  - *Goal*: Add a search bar inside the chat hub sidebar directory to filter contacts by name live.
  - *Files*: `src/pages/Dashboard.tsx`
- [ ] **Instructor Ratings & Reviews Modal**
  - *Goal*: Add a simple pop-up dialog inside the dashboard classes deck where students can rate the teacher (1-5 stars) and write a short review when clicking "Log Completed".
  - *Files*: `src/pages/Dashboard.tsx`
- [ ] **Profile Avatar Customization Carousel**
  - *Goal*: Add a select dropdown of pre-defined avatar themes (using Dicebear API or Unsplash profiles) inside settings, letting users choose their picture instantly.
  - *Files*: `src/pages/Dashboard.tsx` (Settings Tab)
- [ ] **Custom Token Package Purchases Slider**
  - *Goal*: Refactor the token purchase dropdown into an interactive visual range slider, letting users dynamically drag tokens from 50 to 1000 and displaying a simulated conversion cost.
  - *Files*: `src/pages/Dashboard.tsx` (Tokens Tab)

---

## 🔴 Hard Level Milestones (30 Points)

- [ ] **Direct Messaging Sound Effects & Vibrations**
  - *Goal*: Integrate HTML5 audio APIs to trigger a clean futuristic sound chirp when a simulated peer replies inside the direct message panel.
  - *Files*: `src/pages/Dashboard.tsx` or `src/context/AuthContext.tsx`
- [ ] **Web Workers Syncing**
  - *Goal*: Refactor direct messaging threads to trigger updates in the background, keeping multiple browser windows synced in real-time.
  - *Files*: `src/context/AuthContext.tsx`
- [ ] **Real Backend API Integrations**
  - *Goal*: Set up a mock json-server or real Node/Express backend endpoints. Replace all `localStorage` reads/writes with structured API `fetch` requests using asynchronous thunks.
  - *Files*: `src/context/AuthContext.tsx`
- [ ] **Integrated Video Call Class Rooms (WebRTC)**
  - *Goal*: Embed a mock iframe or integrate a free Jitsi Meet API to trigger video classrooms when clicking "Log Completed" or class schedules indicators.
  - *Files*: `src/pages/Dashboard.tsx`
