// import React, { useEffect } from "react";
// import Image from "next/image";
// import { ImageData } from "../utils/imageData";

// interface ModalProps {
//   image: ImageData;
//   onClose: () => void;
//   onPrev?: () => void;
//   onNext?: () => void;
// }

// export default function Modal({ image, onClose, onPrev, onNext }: ModalProps) {
//   useEffect(() => {
//     const handleKeyDown = (event: KeyboardEvent) => {
//       if (event.key === "Escape") onClose();
//     };

//     document.addEventListener("keydown", handleKeyDown);
//     return () => {
//       document.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [onClose]);

//   return (
//     <div
//       className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
//       onClick={onClose}
//     >
//       <div
//         className="relative w-full max-w-4xl"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-white bg-black rounded-full w-8 h-8 flex items-center justify-center opacity-50 hover:opacity-100 text-2xl z-10"
//           aria-label="Close modal"
//         >
//           &times;
//         </button>

//         {/* Previous Arrow */}
//         {onPrev && (
//           <button
//             onClick={onPrev}
//             className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black rounded-full w-8 h-8 flex items-center justify-center opacity-75 hover:opacity-100 z-10"
//             aria-label="Previous image"
//           >
//             &#8249;
//           </button>
//         )}

//         {/* Next Arrow */}
//         {onNext && (
//           <button
//             onClick={onNext}
//             className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black rounded-full w-8 h-8 flex items-center justify-center opacity-75 hover:opacity-100 z-10"
//             aria-label="Next image"
//           >
//             &#8250;
//           </button>
//         )}

//         <div className="relative w-full" style={{ paddingBottom: "66.66%" }}>
//           <Image
//             src={image.src}
//             alt={image.alt}
//             fill
//             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 60vw"
//             className="object-contain"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useEffect } from "react";
import Image from "next/image";
import { ImageData } from "../utils/imageData";

interface ModalProps {
  image: ImageData;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

export default function Modal({ image, onClose, onPrev, onNext }: ModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft" && onPrev) {
        onPrev();
      } else if (e.key === "ArrowRight" && onNext) {
        onNext();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white bg-black rounded-full w-8 h-8 flex items-center justify-center opacity-75 hover:opacity-100 text-2xl z-10"
          aria-label="Close modal"
        >
          &times;
        </button>

        {onPrev && (
          <button
            onClick={onPrev}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black rounded-full w-10 h-10 flex items-center justify-center opacity-75 hover:opacity-100 z-10"
            aria-label="Previous image"
            style={{ fontSize: "1.5rem" }}
          >
            &#8249; {/* Unicode for Left Arrow */}
          </button>
        )}

        {onNext && (
          <button
            onClick={onNext}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black rounded-full w-10 h-10 flex items-center justify-center opacity-75 hover:opacity-100 z-10"
            aria-label="Next image"
            style={{ fontSize: "1.5rem" }}
          >
            &#8250; {/* Unicode for Right Arrow */}
          </button>
        )}

        <div
          className="relative w-full px-5"
          style={{ paddingBottom: "66.66%" }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 60vw"
            className="object-contain rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
