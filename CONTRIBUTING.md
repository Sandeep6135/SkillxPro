# 🤝 Contributing to SkillxPro (GSSoC 2026)

First off, thank you for taking the time to contribute! 🎉 

As a **GirlScript Summer of Code (GSSoC) 2026** project, we encourage open collaboration, code quality, and positive community interactions. Contributions that improve user interfaces, resolve typescript alerts, or add sandbox mockup features are highly appreciated.

Please read through the contributing guidelines below to ensure a smooth merge process.

---

## 🛠️ Step-by-Step Contribution Flow

1. **Find an Open Issue**
   - Head over to the GitHub [Issues page](https://github.com/your-username/completeproject/issues).
   - Review issues tagged with `gssoc-2026`, `easy`, `medium`, or `hard`.
   - Comment on the issue asking to be assigned (e.g., *"Please assign this issue to me. I'd love to work on this!"*).
   - **Do not start working until a maintainer assigns the issue to you.**

2. **Fork and Clone**
   - Fork this repository by clicking the **Fork** button at the top right of the page.
   - Clone your fork locally:
     ```bash
     git clone https://github.com/your-username/completeproject.git
     cd completeproject
     ```

3. **Branching Architecture**
   - Create a separate branch with a descriptive name incorporating the issue tag:
     ```bash
     # For new page features:
     git checkout -b feat/issue-<issue-id>-<description>
     
     # For bugs or styling fixes:
     git checkout -b fix/issue-<issue-id>-<description>
     ```

4. **Install and Run Locally**
   ```bash
   cd apps/web
   npm install
   npm run dev
   ```
   *Make edits and check the visual layout in your browser!*

5. **Run Linting and Bundling Checks**
   - Before committing, ensure there are zero typescript or build errors:
     ```bash
     npm run build
     ```
   - PRs failing compiling checks will be flagged by our maintainers.

6. **Submit a Pull Request**
   - Commit your changes with a meaningful message:
     ```bash
     git add .
     git commit -m "feat(web): added search query matching inside skill marketplace"
     ```
   - Push your branch to your origin fork:
     ```bash
     git push origin feat/issue-<issue-id>-<description>
     ```
   - Create a Pull Request against our main branch using our premium PR template!

---

## 📝 Commit Standards

We enforce descriptive, semantic commit messages:
- `feat(web): ...` for new page features, components, or simulation logic.
- `fix(web): ...` for styling adjustments, typescript compiler fixes, or layout fixes.
- `docs: ...` for readme, contributor roadmaps, or markdown code corrections.
- `chore: ...` for package setup upgrades, vite configs, or build scripts.

---

## 💅 Code Styling Guidelines

- **Typography & Font**: Always use standard Outfit classes. Avoid hardcoded tailwind font definitions.
- **Color System**: Utilize theme colors (`bg`, `bg2`, `primary`, `accent`, `textPrimary`, `textSecondary`) to maintain dark theme consistency.
- **TypeScript Strictness**: Always define descriptive types in `src/types.ts`. Avoid utilizing `any` inside types or interfaces.
- **Aesthetics Matters**: Always build components with glassmorphism values and smooth transitional hover scales to match our premium user experience.

---

## 💬 Code of Conduct

By participating, you agree to uphold our [CODE_OF_CONDUCT.md](file:///c:/Users/Sandeep/Downloads/completeproject/CODE_OF_CONDUCT.md). Please treat all fellow contributors with kindness and professionalism.

Happy Hacking GSSoC 2026! 🚀
