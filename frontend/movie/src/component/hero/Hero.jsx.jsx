import { useState } from "react";
import "./Hero.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";

const WATCHLIST_KEY = "gold_watchlist";

const Hero = ({ movies = [] }) => {
  const [watchListIds, setWatchListIds] = useState(() =>
    JSON.parse(localStorage.getItem(WATCHLIST_KEY) || "[]")
  );

  const toggleWatchList = (imdbId) => {
    const updatedList = watchListIds.includes(imdbId)
      ? watchListIds.filter((id) => id !== imdbId)
      : [...watchListIds, imdbId];

    setWatchListIds(updatedList);
    localStorage.setItem(WATCHLIST_KEY, JSON.stringify(updatedList));
  };

  if (!Array.isArray(movies) || movies.length === 0) {
    return <section className="status-message">No movies found.</section>;
  }

  return (
    <div className="movie-carousel-container">
      <Swiper modules={[Navigation]} navigation spaceBetween={20} slidesPerView={1} loop>
        {movies.map((movie) => (
          <SwiperSlide key={movie.imdbId}>
            <div className="movie-card-container">
              <div
                className="movie-card"
                style={{
                  "--img": `url(${movie.backdrops?.[0] || movie.poster || ""})`,
                }}
              >
                <div className="movie-detail">
                  <div className="movie-poster">
                    <img
                      src={movie.poster || movie.backdrops?.[0] || ""}
                      alt={movie.title}
                    />
                  </div>

                  <div className="movie-title">
                    <h4>{movie.title}</h4>
                  </div>

                  <div className="movie-buttons-container">
                    <Link className="hero-button" to={`/trailer/${movie.imdbId}`}>
                      Trailer
                    </Link>
                    <button
                      className="hero-button watchlist-button"
                      onClick={() => toggleWatchList(movie.imdbId)}
                    >
                      {watchListIds.includes(movie.imdbId)
                        ? "Remove from Watch List"
                        : "Add to Watch List"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;