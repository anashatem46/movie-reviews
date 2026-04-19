# Movie Discovery Web App
A full-stack movie discovery application with a React single-page frontend and a Spring Boot + MongoDB backend.

## Project Summary
Developed the frontend of a movie discovery web application using React.js, React Router, Axios, Bootstrap, and Material UI. Built UI components for browsing movies, viewing trailers, and submitting reviews in a responsive single-page application. Integrated the frontend with a Spring Boot REST API and MongoDB database to enable dynamic content and review functionality. Collaborated across frontend-backend integration tasks to ensure smooth API communication and consistent application behavior.

## Tech Stack
- Frontend: React.js, React Router, Axios, Bootstrap, Material UI
- Backend: Spring Boot, Java, REST APIs
- Database: MongoDB

## Frontend
The frontend is a responsive SPA that handles the user experience and routing flow.

Main responsibilities:
- Browse movie listings
- View movie details and trailers
- Submit movie reviews
- Consume backend REST endpoints using Axios
- Manage page navigation with React Router

Frontend code should live in `frontend/`.

## Backend
The backend is a Java Spring Boot REST API connected to MongoDB.

Main responsibilities:
- Serve movie data to the frontend
- Provide movie detail endpoints
- Handle business logic and data access through service/repository layers
- Expose REST endpoints under `/api/v1`

Current movie endpoints in this repository:
- `GET /api/v1/movies`
- `GET /api/v1/movies/{imdbId}`

Backend code is in `backend/`.

## Project Structure
- `backend/` — Spring Boot API (Maven project)
- `frontend/` — React frontend application

## Run Backend Locally
From `backend/`:

```bash
./mvnw spring-boot:run
```

Default URL:
- `http://localhost:8080`

For backend environment variables and additional backend notes, see `backend/README.md`.
