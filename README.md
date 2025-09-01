# Lobox Interview Task – React + TypeScript + Vite

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
lobox-interview-task/
├── public/              # Static assets
├── src/                 # App source (components, hooks, utils)
│   ├── main.tsx         # App entry
│   ├── App.tsx          # Root component
│   └── assets/          # Local images, styles
├── index.html
├── tsconfig.json        # TypeScript config
├── eslint.config.js     # ESLint config
├── vite.config.ts       # Vite config
└── README.md
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
