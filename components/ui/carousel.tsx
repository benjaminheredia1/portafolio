"use client";
import { IconArrowNarrowRight, IconArrowNarrowLeft } from "@tabler/icons-react";
import { useState, useRef, useId } from "react";

interface SlideData {
  title: string;
  button: string;
  src: string;
}

interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
  handleSlideClick: (index: number) => void;
}

const Slide = ({ slide, index, current, handleSlideClick }: SlideProps) => {
  const slideRef = useRef<HTMLLIElement>(null);
  const isCurrent = current === index;
  const { src, button, title } = slide;

  return (
    <li
      ref={slideRef}
      className={`relative flex-shrink-0 w-full cursor-pointer transition-all duration-500 ease-out ${
        isCurrent ? "opacity-100 scale-100" : "opacity-40 scale-95"
      }`}
      onClick={() => handleSlideClick(index)}
    >
      <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full bg-gradient-to-br from-zinc-900 to-black rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-white/5">
        <img
          className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out"
          style={{
            filter: isCurrent ? "brightness(1)" : "brightness(0.6)",
          }}
          alt={title}
          src={src}
          loading="eager"
          decoding="sync"
        />
        {/* Gradient overlay */}
        <div 
          className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500 ${
            isCurrent ? "opacity-100" : "opacity-60"
          }`} 
        />

        {/* Content overlay */}
        <article
          className={`absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 transition-all duration-500 ease-in-out ${
            isCurrent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold tracking-wide text-white drop-shadow-lg">
            {title}
          </h2>
          <div className="flex justify-start mt-3 sm:mt-4">
            <button className="px-3 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-medium text-white bg-white/10 backdrop-blur-md border border-white/20 rounded-lg sm:rounded-xl hover:bg-white/20 hover:border-white/30 transition-all duration-300 flex items-center gap-2 group/btn">
              {button}
              <IconArrowNarrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </article>
      </div>
    </li>
  );
};

interface CarouselControlProps {
  type: string;
  title: string;
  handleClick: () => void;
}

const CarouselControl = ({
  type,
  title,
  handleClick,
}: CarouselControlProps) => {
  return (
    <button
      className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-zinc-900/80 backdrop-blur-sm border border-zinc-700/50 rounded-full focus:border-zinc-500 focus:outline-none hover:bg-zinc-800 hover:border-zinc-600 active:scale-95 transition-all duration-300 group"
      title={title}
      onClick={handleClick}
    >
      {type === "previous" ? (
        <IconArrowNarrowLeft className="w-3 h-3 sm:w-4 sm:h-4 text-zinc-400 group-hover:text-white transition-colors duration-300" />
      ) : (
        <IconArrowNarrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-zinc-400 group-hover:text-white transition-colors duration-300" />
      )}
    </button>
  );
};

interface CarouselProps {
  slides: SlideData[];
}

export default function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? slides.length - 1 : previous);
  };

  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next === slides.length ? 0 : next);
  };

  const handleSlideClick = (index: number) => {
    if (current !== index) {
      setCurrent(index);
    }
  };

  const id = useId();

  // Touch/swipe support para móvil
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50;

    if (diff > threshold) {
      handleNextClick();
    } else if (diff < -threshold) {
      handlePreviousClick();
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto px-4"
      aria-labelledby={`carousel-heading-${id}`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides container */}
      <div className="overflow-hidden rounded-xl sm:rounded-2xl">
        <ul
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <Slide
              key={index}
              slide={slide}
              index={index}
              current={current}
              handleSlideClick={handleSlideClick}
            />
          ))}
        </ul>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-3 sm:gap-4 mt-4 sm:mt-6">
        <CarouselControl
          type="previous"
          title="Go to previous slide"
          handleClick={handlePreviousClick}
        />

        {/* Slide indicators */}
        <div className="flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 bg-zinc-900/70 backdrop-blur-sm rounded-full">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideClick(index)}
              className={`rounded-full transition-all duration-300 ${
                current === index 
                  ? "w-4 sm:w-5 h-1.5 bg-white" 
                  : "w-1.5 h-1.5 bg-zinc-500 hover:bg-zinc-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <CarouselControl
          type="next"
          title="Go to next slide"
          handleClick={handleNextClick}
        />
      </div>
    </div>
  );
}
