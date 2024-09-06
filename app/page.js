import Link from 'next/link';
import { fetchProducts } from './api';
import ProductGrid from './components/ProductGrid';
import Pagination from './components/Pagination';
import styles from './page.module.css';

export default async function Home({ searchParams }) {
  const page = Number(searchParams.page) || 1;
  let products;
  let error;

  try {
    products = await fetchProducts(page);
  } catch (e) {
    error = e.message;
  }

  if (error) {
    return <div className={styles.error}>Error: {error}</div>;
  }

  return (
    <div className={styles.container}>
      <h1>E-commerce Store</h1>
      <ProductGrid products={products} />
      <Pagination currentPage={page} hasMore={products.length === 20} />
    </div>
  );
}
