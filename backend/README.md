# Movie Reviews
Spring Boot + MongoDB backend for a movie reviews application, with a separate `frontend/` directory for UI work.

## Project structure
- `backend/` — Java Spring Boot API (Maven project)
- `frontend/` — frontend application code

## Backend tech stack
- Java 21
- Spring Boot
- Spring Web MVC
- Spring Data MongoDB
- Maven

## Prerequisites
- Java 21+
- Maven (or use the included Maven wrapper scripts in `backend/`)
- Access to a MongoDB instance (MongoDB Atlas URI format is currently expected)

## Environment variables
The backend reads MongoDB settings from environment variables:
- `MONGO_DATABASE`
- `MONGO_USER`
- `MONGO_PASSWORD`
- `MONGO_CLUSTER`

Example `.env` content:

```env
MONGO_DATABASE=movies
MONGO_USER=your_user
MONGO_PASSWORD=your_password
MONGO_CLUSTER=your-cluster-url
```

## Run the backend
From the `backend/` directory:

```bash
./mvnw spring-boot:run
```

Or with Maven installed globally:

```bash
mvn spring-boot:run
```

Default local URL:
- `http://localhost:8080`

## API endpoints (current)
- `GET /api/v1/movies` — fetch all movies
- `GET /api/v1/movies/{imdbId}` — fetch one movie by IMDb ID
- `POST /api/v1/reviews` — create a review for a movie

## Run tests
From `backend/`:

```bash
./mvnw test
```
