'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './ImageGallery.module.css';

export default function ImageGallery({ images }) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className={styles.gallery}>
      <Image src={images[currentImage]} alt="Product" width={400} height={400} />
      {images.length > 1 && (
        <div className={styles.controls}>
          <button onClick={prevImage}>Previous</button>
          <button onClick={nextImage}>Next</button>
        </div>
      )}
    </div>
  );
}