# 🤝 Contributing to SkillxPro

We are thrilled that you want to contribute to SkillxPro! Whether you are fixing a UI styling bug, writing TypeScript types, or proposing advanced features from our development roadmap, your support is invaluable.

Please review this comprehensive guide to align your development setup with our standards.

---

## 🛠️ Developer Setup & Git Workflow

### 1. Fork & Clone
Fork the repository to your own GitHub account and clone it to your local environment:
```bash
git clone https://github.com/Sandeep6135/SkillxPro.git
cd SkillxPro
```

### 2. Branching Standards
Always create a clean, descriptive branch before working on code changes:
*   For UI improvements and new features:
    ```bash
    git checkout -b feat/your-feature-name
    ```
*   For bugs and optimization tweaks:
    ```bash
    git checkout -b fix/your-bug-description
    ```

### 3. Run Locally
Navigate to the web application workspace, install dependencies, and launch the hot-reloading development server:
```bash
cd apps/web
npm install
npm run dev
```

### 4. Code Compilation Checks
Before opening a pull request, ensure the TypeScript compiler checks and production builds run successfully without errors:
```bash
npm run build
```

### 5. Semantic Commits & PRs
Use semantic commit messaging conventions to describe your changes:
*   `feat(web): add ratings model and modal inputs`
*   `fix(web): solve balance arithmetic state sync bug`
Push to your fork and submit a Pull Request against our main repository branch.

---

## 📝 Design & Coding Guidelines

To preserve the premium, custom-coded experience of SkillxPro, please adhere to these guidelines:

*   **Typography:** Maintain the **Outfit** typography system across all page elements.
*   **Colors (Tailwind Theme):** Use tailwind mapping colors (e.g. `bg`, `bg2`, `primary`, `accent`, `textPrimary`, and `textSecondary`) to sustain the dark mode HSL palette.
*   **TypeScript Accuracy:** Declare strongly typed interfaces in `src/types.ts`. Avoid assigning the `any` type to functions or variable assignments.
*   **Glassmorphism styling:** Standardize cards and backdrop panels using light opacity blurs, subtle board glows, and smooth transition scaling.
