# Movie Discovery Web App

Full-stack movie discovery app with a React frontend and a Spring Boot + MongoDB backend.

## Features

- Browse movies from the backend API
- Home hero carousel with poster/backdrop previews
- Trailer page per movie (`/trailer/:imdbId`)
- Watch list page with local persistence in browser storage
- Submit movie reviews to backend

## Tech Stack

- Frontend: React, Vite, React Router, Axios, Bootstrap, MUI, Swiper
- Backend: Java 21, Spring Boot, Spring Web, Spring Data MongoDB
- Database: MongoDB

## Project Structure

- `backend/` - Spring Boot API (Maven)
- `frontend/movie/` - React application

## API Endpoints

- `GET /api/v1/movies` - fetch all movies
- `GET /api/v1/movies/{imdbId}` - fetch one movie by IMDb ID
- `POST /api/v1/reviews` - create a review (`reviewBody`, `imdbId`)

## Run Locally

### 1) Backend

From `backend/`:

```bash
./mvnw spring-boot:run
```

Backend runs at: `http://localhost:8080`

### 2) Frontend

From `frontend/movie/`:

```bash
npm install
npm run dev
```

Frontend runs at: `http://localhost:5173`

## Backend Environment Variables

Set these before starting backend:

- `MONGO_DATABASE`
- `MONGO_USER`
- `MONGO_PASSWORD`
- `MONGO_CLUSTER`

See `backend/README.md` for backend-specific details.
