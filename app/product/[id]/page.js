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
      <Link href="/" className={styles.backLink}>Back to Products</Link>
      <h1 className={styles.productTitle}>{product.title}</h1>
      <ImageGallery images={product.images} />
      <p className={styles.price}>${product.price}</p>
      <p className={styles.description}>{product.description}</p>
      <p className={styles.info}>Category: {product.category}</p>
      <div className={styles.tags}>
        {product.tags.map((tag, index) => (
          <span key={index} className={styles.tag}>{tag}</span>
        ))}
      </div>
      <p className={styles.info}>Rating: {product.rating}</p>
      <p className={styles.info}>Stock: {product.stock} {product.stock > 0 ? '(In Stock)' : '(Out of Stock)'}</p>
      <Reviews reviews={product.reviews} />
    </div>
  );
}
