"use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import Modal from "./Modal";
// import { images, ImageData } from "../utils/imageData";

// export default function Gallery() {
//   const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);
//   const [currentIndex, setCurrentIndex] = useState<number | null>(null);

//   const openModal = (image: ImageData) => {
//     setSelectedImage(image);
//     setCurrentIndex(index);
//   };

//   const closeModal = () => {
//     setSelectedImage(null);
//     setCurrentIndex(null);
//   };

//   const handlePrev = () => {
//     if (currentIndex !== null) {
//       setCurrentIndex((currentIndex - 1 + images.length) % images.length);
//     }
//   };

//   const handleNext = () => {
//     if (currentIndex !== null) {
//       setCurrentIndex((currentIndex + 1) % images.length);
//     }
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-8 text-center text-black">
//         Photo Gallery
//       </h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className="relative aspect-[3/2] cursor-pointer overflow-hidden rounded-lg shadow-md transition-transform hover:scale-105"
//             onClick={() => openModal(image)}
//           >
//             <Image
//               src={image.src}
//               alt={image.alt}
//               fill
//               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//               className="object-cover"
//             />
//           </div>
//         ))}
//       </div>
//       {selectedImage && <Modal image={selectedImage} onClose={closeModal} />}
//     </div>
//   );
// }

import React, { useState } from "react";
import Image from "next/image";
import Modal from "./Modal";
import { images, ImageData } from "../utils/imageData";

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const openModal = (index: number) => {
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setCurrentIndex(null);
  };

  const handlePrev = () => {
    if (currentIndex !== null) {
      setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    }
  };

  const handleNext = () => {
    if (currentIndex !== null) {
      setCurrentIndex((currentIndex + 1) % images.length);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-10 text-center text-[#006ec7]">
        New Office Inaugration - adesso India
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative aspect-[3/2] cursor-pointer overflow-hidden rounded-lg shadow-md transition-transform hover:scale-105"
            onClick={() => openModal(index)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {currentIndex !== null && (
        <Modal
          image={images[currentIndex]}
          onClose={closeModal}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </div>
  );
}
