"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function HeroImageSlider() {
  const images = [
    '/assets/images/1.jpg',
    '/assets/images/2.jpg',
    '/assets/images/3.jpg',
    '/assets/images/4.jpg',
    '/assets/images/5.jpg',
    '/assets/images/6.jpg',
    '/assets/images/7.jpg',
    '/assets/images/4.jpg',
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 600); // 8 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <Image
      src={images[currentImageIndex]}
      alt="hero"
      width={1000}
      height={1000}
      className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh] transition-opacity duration-1000 ease-in-out"
    />
  );
}
