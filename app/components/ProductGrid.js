import Link from 'next/link';
import Image from 'next/image';
import styles from './ProductGrid.module.css';

export default function ProductGrid({ products }) {
  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <Link href={`/product/${product.id}`} key={product.id} className={styles.card}>
          <Image src={product.thumbnail} alt={product.title} width={200} height={200} />
          <h2>{product.title}</h2>
          <p>Price: ${product.price}</p>
          <p>Category: {product.category}</p>
        </Link>
      ))}
    </div>
  );
}