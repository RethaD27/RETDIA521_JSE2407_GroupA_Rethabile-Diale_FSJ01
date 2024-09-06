import styles from './Reviews.module.css';

export default function Reviews({ reviews }) {
  return (
    <div className={styles.reviews}>
      <h2>Customer Reviews</h2>
      {reviews.map((review, index) => (
        <div key={index} className={styles.review}>
          <div className={styles.reviewHeader}>
            <span className={styles.reviewerName}>{review.reviewerName}</span>
            <span className={styles.reviewDate}>{new Date(review.date).toLocaleDateString()}</span>
          </div>
          <p className={styles.rating}>Rating: {review.rating} / 5</p>
          <p className={styles.comment}>{review.comment}</p>
        </div>
      ))}
    </div>
  );
}