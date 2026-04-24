# Movie Frontend (React + Vite)

Frontend client for the Movie Discovery app.

## Features

- Movie home page with hero carousel
- Trailer page by IMDb ID
- Watch list page (stored in `localStorage`)
- Review form connected to backend review API

## Routes

- `/` - home
- `/watchList` - watch list
- `/trailer/:imdbId` - trailer and reviews

## Local Development

```bash
npm install
npm run dev
```

App URL: `http://localhost:5173`

## Build and Lint

```bash
npm run lint
npm run build
npm run preview
```

## Backend Requirement

The frontend expects backend API at `http://localhost:8080`.

Configured in:

- `src/Api/axiosConfig.js`
