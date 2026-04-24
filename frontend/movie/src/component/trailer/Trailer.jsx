import { Link, useParams } from "react-router-dom";
import "./Trailer.css";
import Review from "../review/Review";
import ReviewForm from "../review/ReviewForm";

const toEmbedUrl = (url = "") => {
  if (!url) return "";
  if (url.includes("embed")) return url;

  const match = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/shorts\/)([^&?/]+)/
  );

  return match ? `https://www.youtube.com/embed/${match[1]}` : url;
};

const Trailer = ({ movies = [], onReviewAdded }) => {
  const { imdbId } = useParams();
  const movie = movies.find((item) => item.imdbId === imdbId);
  const reviews = Array.isArray(movie?.reviews) ? movie.reviews : [];

  if (!movie) {
    return (
      <section className="trailer-page">
        <h2>Trailer not found</h2>
        <p>Could not find this movie in the current list.</p>
        <Link to="/">Back to Home</Link>
      </section>
    );
  }

  const embedUrl = toEmbedUrl(movie.trailerLink);

  return (
    <section className="trailer-page">
      <h2>{movie.title}</h2>
      {embedUrl ? (
        <div className="trailer-frame-wrapper">
          <iframe
            src={embedUrl}
            title={`${movie.title} trailer`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : (
        <p>No trailer URL available for this movie.</p>
      )}
      <ReviewForm
        imdbId={imdbId}
        onReviewAdded={(newReview) => onReviewAdded?.(imdbId, newReview)}
      />
      <Review reviews={reviews} />
      <Link to="/">Back to Home</Link>
    </section>
  );
};

export default Trailer;
