import { fetchProducts } from './api';
import ProductGrid from './components/ProductGrid';
import Pagination from './components/Pagination';

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
    return <div className="text-red-500 text-center p-4">Error: {error}</div>;
  }

  return (
    <div className="py-12">
      <header className="text-center mb-12">
        <h1 className="font-['Dancing_Script'] text-6xl text-indigo-600 mb-4">QuickCart Emporium</h1>
        <p className="text-xl text-gray-600">Discover Amazing Products at Great Prices</p>
      </header>
      <ProductGrid products={products} />
      <Pagination currentPage={page} hasMore={products.length === 20} />
    </div>
  );
}