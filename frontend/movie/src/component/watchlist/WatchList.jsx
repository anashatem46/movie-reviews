import { Link } from "react-router-dom";
import "./WatchList.css";

const WATCHLIST_KEY = "gold_watchlist";

const WatchList = ({ movies = [] }) => {
  const storedIds = JSON.parse(localStorage.getItem(WATCHLIST_KEY) || "[]");
  const watchListMovies = movies.filter((movie) => storedIds.includes(movie.imdbId));

  if (storedIds.length === 0) {
    return (
      <section className="watch-list-page">
        <h2>Watch List</h2>
        <p>Your watch list is empty. Add movies from Home.</p>
      </section>
    );
  }

  if (watchListMovies.length === 0) {
    return (
      <section className="watch-list-page">
        <h2>Watch List</h2>
        <p>Loading your saved movies...</p>
      </section>
    );
  }

  return (
    <section className="watch-list-page">
      <h2>Watch List</h2>
      <div className="watch-list-grid">
        {watchListMovies.map((movie) => (
          <article key={movie.imdbId} className="watch-list-card">
            <img src={movie.poster || movie.backdrops?.[0] || ""} alt={movie.title} />
            <h4>{movie.title}</h4>
            <Link to={`/trailer/${movie.imdbId}`}>Watch Trailer</Link>
          </article>
        ))}
      </div>
    </section>
  );
};

export default WatchList;
