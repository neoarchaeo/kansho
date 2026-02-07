"use client";

import { useState } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";

interface ImageCarouselProps {
  images: string[];
  alt: string;
}

export default function ImageCarousel({ images, alt }: ImageCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const navigate = (dir: number) => {
    setDirection(dir);
    setCurrent((prev) => {
      const next = prev + dir;
      if (next < 0) return images.length - 1;
      if (next >= images.length) return 0;
      return next;
    });
  };

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x > 60) navigate(-1);
    else if (info.offset.x < -60) navigate(1);
  };

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      filter: "hue-rotate(90deg) brightness(1.5)",
    }),
    center: {
      x: 0,
      opacity: 1,
      filter: "hue-rotate(0deg) brightness(1)",
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
      filter: "hue-rotate(-90deg) brightness(0.5)",
    }),
  };

  return (
    <div className="relative w-full" role="region" aria-label="Product image gallery" aria-roledescription="carousel">
      {/* Image container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-kansho-black/5 border-2 border-frame-dark console-frame">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: "easeInOut" }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragEnd={handleDragEnd}
            className="absolute inset-0 cursor-grab active:cursor-grabbing"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={images[current]}
              alt={`${alt} - view ${current + 1} of ${images.length}`}
              className="w-full h-full object-contain"
              draggable={false}
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation arrows - desktop */}
        <button
          onClick={() => navigate(-1)}
          className="absolute left-2 top-1/2 -translate-y-1/2 hidden sm:flex items-center justify-center w-8 h-8 bg-parchment/80 border border-frame-mid hover:border-kansho-red hover:text-kansho-red transition-all text-sm"
          aria-label="Previous image"
        >
          ◄
        </button>
        <button
          onClick={() => navigate(1)}
          className="absolute right-2 top-1/2 -translate-y-1/2 hidden sm:flex items-center justify-center w-8 h-8 bg-parchment/80 border border-frame-mid hover:border-kansho-red hover:text-kansho-red transition-all text-sm"
          aria-label="Next image"
        >
          ►
        </button>

        {/* Image counter */}
        <div className="absolute bottom-2 right-2 text-[10px] tracking-wider text-frame-mid bg-parchment/80 px-2 py-0.5 border border-frame-mid" aria-hidden="true">
          {String(current + 1).padStart(2, "0")}/{String(images.length).padStart(2, "0")}
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-3" role="tablist" aria-label="Image navigation">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > current ? 1 : -1);
              setCurrent(i);
            }}
            role="tab"
            aria-selected={i === current}
            aria-label={`View image ${i + 1}`}
            className={`w-2 h-2 border transition-all ${
              i === current
                ? "bg-kansho-red border-kansho-red"
                : "bg-transparent border-frame-mid hover:border-kansho-red"
            }`}
          />
        ))}
      </div>

      {/* Mobile swipe hint */}
      <p className="sm:hidden text-center text-[10px] text-frame-mid mt-1 tracking-wider">
        SWIPE TO NAVIGATE
      </p>
    </div>
  );
}
