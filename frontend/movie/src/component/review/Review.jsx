const Review = ({ reviews = [] }) => {
  if (!reviews.length) {
    return <p className="review-empty">No reviews yet. Be the first to write one.</p>;
  }

  return (
    <section className="review-list">
      <h3>Reviews</h3>
      <div className="review-items">
        {reviews.map((review, index) => {
          const content = review.body || review.reviewBody || "";
          const reviewKey =
            review?.id?.$oid ||
            review?._id?.$oid ||
            (typeof review?.id === "string" ? review.id : null) ||
            (typeof review?._id === "string" ? review._id : null) ||
            `${content.slice(0, 20)}-${index}`;

          return (
            <article key={reviewKey} className="review-item">
              {content}
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Review;
