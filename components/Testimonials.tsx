"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaQuoteRight, FaStar } from "react-icons/fa";
import HighlightedText from "./HighlightedText";
import siteData from "@/data";

const testimonials = siteData.testimonials;

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const items = testimonials.items;
  const total = items.length;

  // Auto-play interval: pauses when user hovers or touches
  useEffect(() => {
    if (isHovered || total <= 1) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered, total]);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
    setIsHovered(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setIsHovered(false);
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        // Swiped left -> next
        setActiveIndex((prev) => (prev + 1) % total);
      } else {
        // Swiped right -> prev
        setActiveIndex((prev) => (prev - 1 + total) % total);
      }
    }
    setTouchStartX(null);
  };

  // Duplicate items for continuous desktop carousel rotation
  const displayItems = total >= 3 ? [...items, ...items] : [...items, ...items, ...items];

  return (
    <section suppressHydrationWarning className="fluid relative isolate overflow-hidden bg-[#0d1b33] font-pop text-white">
      <Image
        src={testimonials.background}
        alt=""
        fill
        unoptimized
        sizes="100vw"
        className="-z-20 object-cover object-[center_30%]"
      />
      {/* dark tint over the photo */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[rgba(8,20,44,0.77)] backdrop-blur-[2px]" aria-hidden="true" />

      <div
        className="wrap px-5 py-14 sm:px-8 md:py-18 lg:h-147 lg:pb-0 lg:pt-12.25 lg:px-58.5"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="text-center">
          <div className="flex items-center justify-center gap-4 text-xs font-medium uppercase tracking-[0.1em] lg:gap-4 lg:fs-14 lg:leading-none">
            <span className="h-px w-8 bg-white/80 lg:w-9.25" />
            {testimonials.sectionSubtitle}
            <span className="h-px w-8 bg-white/80 lg:w-9.25" />
          </div>
          <h2 className="mt-3 font-pop text-[28px] font-semibold leading-[1.2] sm:text-[38px] lg:mt-4.25 lg:whitespace-pre-line lg:fs-44 lg:leading-[1.205]">
            <HighlightedText text={testimonials.title} highlight={testimonials.titleHighlight} className="text-[#2f6df6]" />
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed lg:mt-1.25 lg:max-w-none lg:whitespace-pre-line lg:fs-15 lg:leading-[1.333]">
            {testimonials.description}
          </p>
        </div>

        {/* Carousel Track Container */}
        <div className="mt-8 overflow-x-clip lg:mt-5.75">
          <div
            className="testimonial-track flex transition-transform duration-500 ease-out"
            style={
              {
                "--active-idx": activeIndex,
                transform: "translateX(calc(-1 * var(--slide-shift)))",
              } as React.CSSProperties
            }
          >
            {displayItems.map((item, idx) => (
              <div
                key={`${item.name}-${idx}`}
                aria-hidden={idx >= total ? true : undefined}
                className="w-full shrink-0 lg:w-[calc((100%-10*var(--spacing,0.25rem))/3)]"
              >
                <article className="flex h-full flex-col justify-between rounded-xl bg-white px-6 pb-5 pt-5 text-[#5c657d] shadow-lg transition-transform duration-300 hover:-translate-y-1 lg:r-10 lg:px-6.25 lg:pb-4.25 lg:pt-4">
                  <div>
                    <FaQuoteRight className="size-6 text-[#c9d6f7] lg:size-6.5" />
                    <p className="mt-3 text-sm leading-relaxed lg:mt-1.75 lg:whitespace-pre-line lg:fs-14.5 lg:leading-[1.31]">
                      {item.quote}
                    </p>
                  </div>
                  <div>
                    <span className="mt-3 block h-0.5 w-5.5 bg-[#2563eb] lg:mt-1.75" />
                    <div className="mt-3 flex items-center lg:mt-0.5">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={80}
                        height={80}
                        unoptimized
                        className="size-16 shrink-0 rounded-full object-cover lg:size-19.5"
                      />
                      <div className="ml-5 lg:ml-6">
                        <h3 className="font-pop text-[15px] font-semibold text-[#0b1230] lg:fs-15.5 lg:leading-[1.2]">
                          {item.name}
                        </h3>
                        <p className="mt-0.5 text-xs lg:fs-12.5 lg:leading-[1.4]">{item.role}</p>
                        <div className="mt-1.5 flex gap-1.25 text-[#2563eb] lg:mt-2">
                          {Array.from({ length: item.rating }, (_, i) => (
                            <FaStar key={i} className="size-3.5 lg:size-4" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Dots Pagination */}
        <div
          className="mt-7 flex items-center justify-center gap-2.75 lg:mt-8.25"
          role="tablist"
          aria-label="Testimonials pagination"
        >
          {items.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              // The button box keeps the design's dot spacing; ::before widens the clickable area without moving anything
              <button
                key={item.name || index}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`Go to slide ${index + 1}: ${item.name}`}
                onClick={() => setActiveIndex(index)}
                className="group relative flex size-2.75 cursor-pointer items-center justify-center rounded-full before:absolute before:-inset-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/70"
              >
                <span
                  className={`block rounded-full transition-all duration-300 ${
                    isActive ? "size-2.75 bg-[#2563eb]" : "size-1.5 bg-white/45 group-hover:bg-white/80"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
