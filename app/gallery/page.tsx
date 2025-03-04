"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Example image paths for development (replace with actual paths from backend later)
const allImages = [
  "/images/gallery/image1.jpg",
  "/images/gallery/image2.jpg",
  "/images/gallery/image3.jpg",
  "/images/gallery/image4.jpg",
  "/images/gallery/image5.jpg",
  "/images/gallery/image6.jpg",
  "/images/gallery/image7.jpg",
  "/images/gallery/image8.jpg",
  "/images/gallery/image9.jpg",
  "/images/gallery/image10.jpg",
  "/images/gallery/image11.jpg",
  "/images/gallery/image12.jpg",
  "/images/gallery/image13.jpg",
  "/images/gallery/image14.jpg",
  "/images/gallery/image15.jpg",
].reverse(); // Sorting so the last uploaded image appears first

export default function GalleryPage() {
  const [visibleCount, setVisibleCount] = useState(10); // Initial images to load

  // Function to load more images on scroll
  const loadMoreImages = () => {
    if (visibleCount < allImages.length) {
      setTimeout(() => setVisibleCount((prev) => prev + 6), 500); // Load in batches of 6
    }
  };

  // Infinite Scroll Event
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 100) {
        loadMoreImages();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visibleCount]);

  return (
    <div className="container mx-auto px-6 py-12">
      <motion.h1
        className="text-4xl font-bold text-center mb-8 text-primary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Gallery
      </motion.h1>

      {/* Masonry Grid Layout */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {allImages.slice(0, visibleCount).map((image, index) => (
          <motion.div
            key={index}
            className="w-full break-inside-avoid shadow-lg rounded-lg overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Image
              src={image}
              alt={`Gallery Image ${index + 1}`}
              width={600} // Dynamic width
              height={900} // Dynamic height
              layout="intrinsic" // Keep aspect ratio
              className="rounded-lg hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        ))}
      </div>

      {/* Loading Indicator */}
      {visibleCount < allImages.length && (
        <motion.div
          className="text-center mt-6 text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Loading more images...
        </motion.div>
      )}
    </div>
  );
}
