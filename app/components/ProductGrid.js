'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const ProductCard = ({ product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e) => {
    e.preventDefault();
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % product.images.length
    );
  };

  const prevImage = (e) => {
    e.preventDefault();
    setCurrentImageIndex((prevIndex) => 
      (prevIndex - 1 + product.images.length) % product.images.length
    );
  };

  return (
    <Link href={`/product/${product.id}`} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <div className="relative">
        <Image 
          src={product.images[currentImageIndex]} 
          alt={product.title} 
          width={250}
          height={250}
          objectFit="cover"
        />
        {product.images.length > 1 && (
          <>
            <button 
              onClick={prevImage} 
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full w-8 h-8 flex items-center justify-center text-xl"
            >
              &#8249;
            </button>
            <button 
              onClick={nextImage} 
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full w-8 h-8 flex items-center justify-center text-xl"
            >
              &#8250;
            </button>
          </>
        )}
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2 truncate">{product.title}</h2>
        <p className="text-green-600 font-bold">${product.price}</p>
        <p className="text-sm text-gray-600 mt-1">{product.category}</p>
      </div>
    </Link>
  );
};

export default function ProductGrid({ products }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}