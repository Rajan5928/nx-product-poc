# 🛍️ Nx Product Monorepo (Web + Admin Dashboard)

A scalable frontend monorepo built using **Nx**, showcasing modular architecture with shared libraries, reusable components, and clean separation of concerns.

---

## 🚀 Live Demo

| App | URL |
|-----|-----|
| Web App | *(add after deployment)* |
| Admin Dashboard | *(add after deployment)* |

---

## 🧱 Tech Stack

- [Nx Monorepo](https://nx.dev/)
- [React](https://react.dev/) (Vite)
- TypeScript
- Modular Architecture (Apps + Shared Libraries)

---

## 📂 Project Structure

```
apps/
  web/        → Customer-facing product store
  admin/      → Admin dashboard

libs/
  shared-ui/     → Reusable UI components
  shared-types/  → Type definitions
  shared-utils/  → Business logic (cart management)
```

---

## ✨ Features

### 🛍️ Web App
- Product listing
- Buy Now functionality
- Cart state management
- Responsive product grid
- Dynamic UI updates

### 📊 Admin Dashboard
- Sidebar layout
- Dashboard overview
- Product listing
- Action buttons (Edit / Delete)
- Summary cards (Total Products, Revenue)

### ♻️ Shared Libraries
- Reusable `ProductCard` and `Button` components
- Centralized type definitions
- Shared cart logic across apps

---

## 🧠 Nx Concepts Used

- Monorepo architecture
- Dependency graph visualization (`nx graph`)
- Code sharing via libraries
- Separation of concerns
- Scalable project structure

---

## ⚙️ Commands Used

### 🏗️ Create Nx Workspace

```bash
npx create-nx-workspace@latest
```

### 📦 Generate Apps

```bash
nx g @nx/react:app web
nx g @nx/react:app admin
```

### 📚 Generate Libraries

```bash
nx g @nx/react:lib shared-ui
nx g @nx/js:lib shared-types
nx g @nx/js:lib shared-utils
```

### ▶️ Run Applications

```bash
nx serve web
nx serve admin
```

### 🏗️ Build Applications

```bash
nx build web
nx build admin
```

### 📊 Dependency Graph

```bash
nx graph
```

---

## 🧩 Architecture Overview

- `web` and `admin` apps consume shared libraries
- `shared-ui` depends on `shared-types`
- `shared-utils` handles business logic (cart operations)
- Clean modular structure ensures scalability and maintainability

---

## 🌐 Deployment

Both apps are deployed independently using **Vercel**.

| App | Root Directory |
|-----|----------------|
| Web | `apps/web` |
| Admin | `apps/admin` |

**Build Commands:**

```bash
nx build web
nx build admin
```

**Output Directories:**

```
dist/apps/web
dist/apps/admin
```

---

## 📌 Future Improvements

- [ ] Add backend (Node.js / NestJS)
- [ ] Implement authentication & authorization
- [ ] Persist cart (localStorage / database)
- [ ] Integrate real APIs
- [ ] Add state management (Redux / Zustand)
- [ ] Add unit & integration testing

---

## 👨‍💻 Author

**Prasoon Kumar**

---