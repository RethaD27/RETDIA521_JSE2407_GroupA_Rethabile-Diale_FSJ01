import { fetchProductById } from '../../api';

export default async function ProductPage({ params }) {
  const { id } = params;
  let product;
  let error;

  try {
    product = await fetchProductById(id);
  } catch (e) {
    error = e.message;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
      <p>Category: {product.category}</p>
      <p>Rating: {product.rating}</p>
      <h2>Reviews</h2>
      <ul>
        {product.reviews.map((review, index) => (
          <li key={index}>
            <p>Rating: {review.rating}</p>
            <p>Comment: {review.comment}</p>
            <p>By: {review.reviewerName}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}