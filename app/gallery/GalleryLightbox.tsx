"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type GalleryImage = {
  src: string;
  alt: string;
  title: string;
};

export default function GalleryLightbox({ images }: { images: GalleryImage[] }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selectedImage = selectedIndex === null ? null : images[selectedIndex];

  useEffect(() => {
    if (selectedIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setSelectedIndex(null);
      if (event.key === "ArrowLeft") {
        setSelectedIndex((current) => current === null ? null : (current - 1 + images.length) % images.length);
      }
      if (event.key === "ArrowRight") {
        setSelectedIndex((current) => current === null ? null : (current + 1) % images.length);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [images.length, selectedIndex]);

  function showPrevious() {
    setSelectedIndex((current) => current === null ? null : (current - 1 + images.length) % images.length);
  }

  function showNext() {
    setSelectedIndex((current) => current === null ? null : (current + 1) % images.length);
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {images.map((image, index) => (
          <figure key={image.src} className="group overflow-hidden rounded-md border border-gray-100 bg-white shadow-sm">
            <button
              type="button"
              onClick={() => setSelectedIndex(index)}
              aria-label={`Open image: ${image.title}`}
              className="relative block aspect-4/3 w-full overflow-hidden bg-gray-100 text-left"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, (max-width: 1279px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </button>
            <figcaption className="border-t border-gray-100 px-4 py-3 text-sm font-semibold text-dark heading-font">
              {image.title}
            </figcaption>
          </figure>
        ))}
      </div>

      {selectedImage && selectedIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.title}
          onClick={() => setSelectedIndex(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-8"
        >
          <button
            type="button"
            onClick={() => setSelectedIndex(null)}
            aria-label="Close image viewer"
            className="absolute right-4 top-4 z-10 flex size-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6 sm:top-6"
          >
            <X className="size-6" />
          </button>

          <button
            type="button"
            onClick={(event) => { event.stopPropagation(); showPrevious(); }}
            aria-label="Previous image"
            className="absolute left-3 z-10 flex size-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-6 sm:size-12"
          >
            <ChevronLeft className="size-7" />
          </button>

          <div className="flex max-h-full max-w-6xl flex-col items-center gap-4" onClick={(event) => event.stopPropagation()}>
            <div className="relative h-[min(72vh,800px)] w-[min(82vw,1200px)]">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                sizes="90vw"
                className="object-contain"
                priority
              />
            </div>
            <p className="max-w-[80vw] text-center text-sm font-semibold text-white sm:text-base">
              {selectedImage.title} <span className="ml-2 font-normal text-white/65">{selectedIndex + 1} / {images.length}</span>
            </p>
          </div>

          <button
            type="button"
            onClick={(event) => { event.stopPropagation(); showNext(); }}
            aria-label="Next image"
            className="absolute right-3 z-10 flex size-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6 sm:size-12"
          >
            <ChevronRight className="size-7" />
          </button>
        </div>
      )}
    </>
  );
}