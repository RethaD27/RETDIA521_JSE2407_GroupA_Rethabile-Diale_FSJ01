import Link from 'next/link';
import Image from 'next/image';
import styles from './ProductGrid.module.css';

export default function ProductGrid({ products }) {
  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <Link href={`/product/${product.id}`} key={product.id} className={styles.card}>
          <Image 
            src={product.thumbnail} 
            alt={product.title} 
            width={250}
            height={250}
            objectFit="cover"
          />
          <div className={styles.cardContent}>
            <h2>{product.title}</h2>
            <p className={styles.price}>${product.price}</p>
            <p>{product.category}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
