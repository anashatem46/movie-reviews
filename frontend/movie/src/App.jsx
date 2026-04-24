import { useState, useEffect } from "react";
import "./App.css";
import api from "./Api/axiosConfig";
import { Layout } from "./component/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./component/home/Home";
import Header from "./component/header/header";
import WatchList from "./component/watchlist/WatchList";
import Trailer from "./component/trailer/Trailer";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const getMovies = async () => {
    try {
      const response = await api.get("/api/v1/movies");
      setMovies(response.data);
      setError("");
    } catch {
      setError("Could not load movies. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      getMovies();
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  const handleReviewAdded = (imdbId, review) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) => {
        if (movie.imdbId !== imdbId) return movie;
        const existingReviews = Array.isArray(movie.reviews) ? movie.reviews : [];

        return {
          ...movie,
          reviews: [review, ...existingReviews],
        };
      })
    );
  };

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={<Home movies={movies} isLoading={isLoading} error={error} />}
          />
          <Route path="watchList" element={<WatchList movies={movies} />} />
          <Route
            path="trailer/:imdbId"
            element={<Trailer movies={movies} onReviewAdded={handleReviewAdded} />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;