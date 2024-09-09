'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function ImageGallery({ images }) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative">
      <Image 
        src={images[currentImage]} 
        alt="Product" 
        width={800} 
        height={600} 
        objectFit="cover"
        className="w-full h-auto rounded-lg shadow-md"
      />
      {images.length > 1 && (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-4">
          <button onClick={prevImage} className="bg-white bg-opacity-50 hover:bg-opacity-75 text-gray-800 font-bold py-2 px-4 rounded-l">
            Previous
          </button>
          <button onClick={nextImage} className="bg-white bg-opacity-50 hover:bg-opacity-75 text-gray-800 font-bold py-2 px-4 rounded-r">
            Next
          </button>
        </div>
      )}
    </div>
  );
}