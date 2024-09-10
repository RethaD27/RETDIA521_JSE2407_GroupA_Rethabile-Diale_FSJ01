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

  const handleImageClick = (index) => {
    setCurrentImage(index);
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
        <>
          <button 
            onClick={prevImage} 
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-800 transition-colors duration-300"
          >
            &lt;
          </button>
          <button 
            onClick={nextImage} 
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-800 transition-colors duration-300"
          >
            &gt;
          </button>

          <div className="flex justify-center mt-4 space-x-2">
            {images.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                width={100} 
                height={100}
                objectFit="cover"
                className={`h-16 w-16 object-cover cursor-pointer ${currentImage === index ? 'border-2 border-amber-600' : 'border'}`}
                onClick={() => handleImageClick(index)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
