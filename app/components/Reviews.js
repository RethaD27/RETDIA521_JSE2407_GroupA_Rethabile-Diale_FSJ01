import styles from './Reviews.module.css';

export default function Reviews({ reviews }) {
  return (
    <div className={styles.reviews}>
      <h2>Reviews</h2>
      {reviews.map((review, index) => (
        <div key={index} className={styles.review}>
          <p>Rating: {review.rating}</p>
          <p>Comment: {review.comment}</p>
          <p>By: {review.reviewerName}</p>
          <p>Date: {new Date(review.date).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
}