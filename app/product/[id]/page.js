import { fetchProductById } from '../../api';
import Link from 'next/link';
import ImageGallery from '../../components/ImageGallery';
import Reviews from '../../components/Reviews';
import styles from './page.module.css';

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
    return <div className={styles.error}>Error: {error}</div>;
  }

  return (
    <div className={styles.container}>
      <Link href="/">Back to Products</Link>
      <h1>{product.title}</h1>
      <ImageGallery images={product.images} />
      <p className={styles.price}>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
      <p>Description: {product.description}</p>
      <p>Tags: {product.tags.join(', ')}</p>
      <p>Rating: {product.rating}</p>
      <p>Stock: {product.stock} {product.stock > 0 ? '(In Stock)' : '(Out of Stock)'}</p>
      <Reviews reviews={product.reviews} />
    </div>
  );
}