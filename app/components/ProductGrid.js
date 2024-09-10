import Link from 'next/link';
import Image from 'next/image';

export default function ProductGrid({ products }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <Link href={`/product/${product.id}`} key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
          <Image 
            src={product.thumbnail} 
            alt={product.title} 
            width={250}
            height={250}
            objectFit="cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-2 truncate">{product.title}</h2>
            <p className="text-green-600 font-bold">${product.price}</p>
            <p className="text-sm text-gray-600 mt-1">{product.category}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}