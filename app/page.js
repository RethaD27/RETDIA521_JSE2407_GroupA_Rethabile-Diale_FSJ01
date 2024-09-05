import Link from 'next/link';
import { fetchProducts } from './api';

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
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>E-commerce Store</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/product/${product.id}`}>
              {product.title} - ${product.price}
            </Link>
          </li>
        ))}
      </ul>
      <div>
        {page > 1 && (
          <Link href={`/?page=${page - 1}`}>Previous Page</Link>
        )}
        {products.length === 20 && (
          <Link href={`/?page=${page + 1}`}>Next Page</Link>
        )}
      </div>
    </div>
  );
}