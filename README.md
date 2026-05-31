# Role-Based Dashboard App

A multi-page React + TypeScript app with authentication, protected routes, and role-based UI rendering.

## Tech Stack

- React 18
- TypeScript
- React Router v6
- Vite

## Features

- Login system with three user roles (Admin, Editor, Viewer)
- Protected routes — redirects unauthenticated users to login
- Role-based dashboard — each role sees different content
- Settings page restricted to Admin only
- Persistent navbar with logout

## Project Structure

```
src/
├── App.tsx
├── AuthContext.tsx
├── ProtectedRoute.tsx
├── components/
│   └── Navbar.tsx
└── pages/
    ├── LoginPage.tsx
    ├── DashboardPage.tsx
    ├── ProfilePage.tsx
    └── SettingsPage.tsx
```

## Getting Started

1. Clone the repo and install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open your browser at `http://localhost:5173`

## User Roles

| Role | Dashboard | Profile | Settings |
|------|-----------|---------|----------|
| Admin | Admin controls | Yes | Yes |
| Editor | Content editor | Yes | No |
| Viewer | Read-only reports | Yes | No |

## How It Works

- User selects a username and role on the login page
- User data is stored in React Context and shared across all pages
- `ProtectedRoute` checks if the user is logged in before allowing access
- The dashboard renders a different panel depending on the user's role
- Logging out clears the context and redirects to login