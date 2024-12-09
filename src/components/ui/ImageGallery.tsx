
import Image from 'next/image'
import React from 'react'


const images = [
  { src: "grey.png", alt: "Image 1" },
  { src: "ligthtsofa.png", alt: "Image 2" },
  { src: "dark.png", alt: "Image 3" },
  { src: "bag.png", alt: "Image 4" },
  { src: "watch.png", alt: "Image 5" },
  { src: "watch2.png", alt: "Image 6" },
  { src: "camera.png", alt: "Image 7" },
  { src: "hphone.png", alt: "Image 8" },
  { src: "watch3.png", alt: "Image 9" },
  { src: "redchair.png", alt: "Image 10" },
  { src: "pinksofa.png", alt: "Image 11" },
  { src: "blphone.png", alt: "Image 12" }
];

function ImageGallery() {
  return (
    <div className="px-4 sm:px-8 lg:px-24 xl:px-40 py-4">
    {/* Image Grid */}
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {images.map((image, index) => (
        <div key={index} className="bg-white p-4 border border-gray-200 rounded-md shadow-md">
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-auto object-cover rounded-md"
          />
        </div>
      ))}
    </div>
  </div>
  
      )}
export default ImageGallery;

