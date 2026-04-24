import { useState } from "react";
import api from "../../Api/axiosConfig";

const ReviewForm = ({ imdbId, onReviewAdded }) => {
  const [reviewBody, setReviewBody] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const trimmed = reviewBody.trim();

    if (!trimmed) {
      setError("Review cannot be empty.");
      return;
    }

    try {
      setIsSubmitting(true);
      setError("");

      const response = await api.post("/api/v1/reviews", {
        reviewBody: trimmed,
        imdbId,
      });

      if (!response?.data) {
        throw new Error("Empty response from review endpoint");
      }

      onReviewAdded(response.data);
      setReviewBody("");
    } catch (err) {
      console.error("Review submit failed:", err);
      setError("Could not save review. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <label htmlFor="reviewBody">Write a review</label>
      <textarea
        id="reviewBody"
        rows="4"
        value={reviewBody}
        onChange={(event) => setReviewBody(event.target.value)}
        placeholder="What did you think about this movie?"
      />
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit Review"}
      </button>
      {error && <p className="review-error">{error}</p>}
    </form>
  );
};

export default ReviewForm;
