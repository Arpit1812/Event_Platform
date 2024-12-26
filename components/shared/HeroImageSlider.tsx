"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function HeroImageSlider() {
  const images = [
    '/assets/images/a.jpeg',
    '/assets/images/b.jpeg',
    '/assets/images/d.jpg',
    '/assets/images/e.jpg',
    '/assets/images/f.jpg',
    '/assets/images/g.jpeg',
    '/assets/images/h.jpeg',
    '/assets/images/i.jpeg',
    '/assets/images/k.jpeg',
    '/assets/images/j.jpeg',
    '/assets/images/l.jpg',
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000); // 8 seconds
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
