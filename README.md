# Lobox Interview Task – React + TypeScript + Vite

## 📋 Assignment Definition

Implement a multi drop-down select component with the ability to add new items by typing it in an input and pressing Enter. It should be closed by clicking outside of it.

### Requirements

- Use ReactJS
- Make the code reusable
- Use TypeScript
- Use SCSS, and try to implement it similarly to the image as much as possible

> **Design reference:** [Figma / Image](https://drive.google.com/file/d/1zmB8q-v94pc4D-qCCUr4XnIR6COJ43Vz/view?usp=drive_link)

> **Note:** Do not use ChatGPT or pre-made code from Gitlab, as per the provided documentation.

A minimal, fast, and type-safe React setup powered by **Vite**.  
Built for the **Lobox interview task** to showcase project structure, clean code, and TypeScript best practices.

---

## 🚀 Tech Stack

- **React 18** + **TypeScript**
- **Vite** (dev server, HMR, optimized builds)
- **ESLint** (with TypeScript-aware rules) + **Prettier**

> Optional: React-specific lint rules via `eslint-plugin-react-x` and `eslint-plugin-react-dom`.

---

## 🧰 Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9 (or `pnpm` / `yarn`, adjust commands accordingly)

---

## 📦 Setup

```bash
git clone https://github.com/your-username/lobox-interview-task.git
cd lobox-interview-task
npm install
```

---

## 🏃 Scripts

```bash
# Start dev server with HMR
npm run dev

# Type-check + build for production
npm run build

# Preview the production build locally
npm run preview

# Lint the project
npm run lint

# Format with Prettier (if configured)
npm run format
```

## <!--

## 📂 Project Structure

````
## 📂 Project Structure

```
lobox-interview-task/
├── node_modules/
├── public/
├── src/
│   ├── components/
│   ├── models/
│   ├── modules/
│   ├── pages/
│   ├── service/
│   ├── styles/
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
``` -->

---

## 🧹 Linting & Type Safety

The project is configured for **type-aware linting**.
To enable stricter or stylistic TypeScript rules, adjust `eslint.config.js`:

- `...tseslint.configs.recommendedTypeChecked`
- `...tseslint.configs.strictTypeChecked`
- `...tseslint.configs.stylisticTypeChecked`

Optional React-specific linting:

- `eslint-plugin-react-x`
- `eslint-plugin-react-dom`

---

## 🛠️ Development Notes

- Keep components **small and focused**.
- Prefer **TypeScript types/interfaces** over `any`.
- Co-locate component styles and tests when applicable.
- Use **absolute imports** if configured in `tsconfig.json`.

---

## 📜 License

This project is provided for interview purposes.
Add a license (e.g., MIT) if you plan to reuse it publicly.
````
