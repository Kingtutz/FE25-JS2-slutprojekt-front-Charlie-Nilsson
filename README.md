# Scrum Board Frontend

Frontend for a simple Scrum board built with Vite and TypeScript.

The app lets you:
- Add members by category (`frontend`, `backend`, `ux`)
- Add assignments
- Assign assignments to matching members
- Move assignments through `New` → `Ongoing` → `Done`
- Remove completed or ongoing assignments

## Tech Stack

- TypeScript
- Vite
- Native DOM APIs + Fetch

## Prerequisites

- Node.js 18+
- A backend API running on `http://localhost:3000/`

## Expected Backend Endpoints

The frontend calls these routes:

- `GET /members`
- `POST /members`
- `GET /assignments`
- `POST /assignments`
- `PATCH /assignments` (payload includes `id`, and optional `status`/`member`)
- `DELETE /assignments?id=<assignmentId>`

## Installation

```bash
npm install
```

## Run Locally

```bash
npm run dev
```

Vite will print the local URL (usually `http://localhost:5173`).

## Build

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

## Available Scripts

- `npm run dev` — start development server
- `npm run build` — type-check and build for production
- `npm run preview` — preview the production build locally

## Project Structure

```text
src/
  main.ts
  style.css
  assignments/
    assignmentfunctions.ts
    assignmentgetters.ts
    assignmenttypes.ts
  members/
    getmembersfunc.ts
    membersfunctions.ts
    memberstypes.ts
  render/
    renderassignments.ts
```

## Notes

If your backend runs on another URL, update `baseUrl` in `src/main.ts`.