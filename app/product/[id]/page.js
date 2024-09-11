import { fetchProductById } from '../../api';
import Link from 'next/link';
import ImageGallery from '../../components/ImageGallery';
import Reviews from '../../components/Reviews';

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
    return <div className="text-red-500 text-center p-4">Error: {error}</div>;
  }

  return (
    <div className="py-12">
      {/* Updated back link without the <a> tag */}
      <Link href="/" className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 mb-8 transition-colors duration-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        <span className="font-semibold">Go Back</span>
      </Link>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2">
            <ImageGallery images={product.images} />
          </div>
          <div className="md:w-1/2 p-8">
            <h1 className="text-3xl font-bold mb-4 text-gray-800">{product.title}</h1>
            <p className="text-2xl font-semibold text-indigo-600 mb-4">${product.price.toFixed(2)}</p>
            <p className="text-gray-700 mb-6">{product.description}</p>
            <p className="text-sm text-gray-600 mb-2">Category: {product.category}</p>
            <div className="mb-4">
              {product.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-sm text-gray-600 mb-2">Rating: {product.rating} / 5</p>
            <p className="text-sm text-gray-600 mb-4">
              Stock: {product.stock}
              {product.stock > 0 ? (
                <span className="text-green-600 ml-2">(In Stock)</span>
              ) : (
                <span className="text-red-600 ml-2">(Out of Stock)</span>
              )}
            </p>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <Reviews reviews={product.reviews} />
    </div>
  );
}
