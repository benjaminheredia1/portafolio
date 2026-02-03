"use client";
import { IconArrowNarrowRight, IconArrowNarrowLeft } from "@tabler/icons-react";
import { useState, useRef, useId, useEffect } from "react";

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

  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef<number>();

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;

      const x = xRef.current;
      const y = yRef.current;

      slideRef.current.style.setProperty("--x", `${x}px`);
      slideRef.current.style.setProperty("--y", `${y}px`);

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const handleMouseMove = (event: React.MouseEvent) => {
    const el = slideRef.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
    yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
  };

  const handleMouseLeave = () => {
    xRef.current = 0;
    yRef.current = 0;
  };

  const imageLoaded = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.style.opacity = "1";
  };

  const { src, button, title } = slide;
  const isCurrent = current === index;

  return (
    <div className="[perspective:1200px] [transform-style:preserve-3d]">
      <li
        ref={slideRef}
        className="flex flex-1 flex-col items-center justify-center relative text-center text-white opacity-100 transition-all duration-500 ease-in-out w-[50vmin] h-[50vmin] mx-[2vmin] z-10 cursor-pointer group"
        onClick={() => handleSlideClick(index)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: isCurrent
            ? "scale(1) rotateX(0deg)"
            : "scale(0.95) rotateX(8deg)",
          transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
          transformOrigin: "bottom",
        }}
      >
        <div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-zinc-900 to-black rounded-2xl overflow-hidden transition-all duration-300 ease-out shadow-2xl border border-white/5"
          style={{
            transform: isCurrent
              ? "translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)"
              : "none",
          }}
        >
          <img
            className="absolute inset-0 w-[120%] h-[120%] object-cover transition-all duration-500 ease-in-out"
            style={{
              opacity: isCurrent ? 1 : 0.4,
              filter: isCurrent ? "brightness(1)" : "brightness(0.6)",
            }}
            alt={title}
            src={src}
            onLoad={imageLoaded}
            loading="eager"
            decoding="sync"
          />
          {/* Gradient overlay */}
          <div 
            className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-500 ${
              isCurrent ? "opacity-100" : "opacity-60"
            }`} 
          />
          {/* Subtle shine effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <article
          className={`absolute bottom-0 left-0 right-0 p-6 md:p-8 transition-all duration-500 ease-in-out ${
            isCurrent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-wide text-white drop-shadow-lg">
            {title}
          </h2>
          <div className="flex justify-start mt-4">
            <button className="px-5 py-2.5 text-sm font-medium text-white bg-white/10 backdrop-blur-md border border-white/20 rounded-xl hover:bg-white/20 hover:border-white/30 transition-all duration-300 flex items-center gap-2 group/btn">
              {button}
              <IconArrowNarrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </article>
      </li>
    </div>
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
      className={`w-10 h-10 flex items-center mx-2 justify-center bg-zinc-900/80 backdrop-blur-sm border border-zinc-700/50 rounded-full focus:border-zinc-500 focus:outline-none hover:bg-zinc-800 hover:border-zinc-600 hover:scale-105 active:scale-95 transition-all duration-300 group`}
      title={title}
      onClick={handleClick}
    >
      {type === "previous" ? (
        <IconArrowNarrowLeft className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors duration-300" />
      ) : (
        <IconArrowNarrowRight className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors duration-300" />
      )}
    </button>
  );
};

interface CarouselProps {
  slides: SlideData[];
}

export default function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(0);

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

  return (
    <div
      className="relative w-[50vmin] h-[50vmin] mx-auto"
      aria-labelledby={`carousel-heading-${id}`}
    >
      <ul
        className="absolute flex mx-[-2vmin] transition-transform duration-700 ease-out"
        style={{
          transform: `translateX(-${current * (100 / slides.length)}%)`,
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

      {/* Controls - positioned at bottom center of slide */}
      <div className="absolute flex items-center justify-center w-full bottom-4 z-20">
        <CarouselControl
          type="previous"
          title="Go to previous slide"
          handleClick={handlePreviousClick}
        />

        {/* Slide indicators */}
        <div className="flex items-center gap-1.5 mx-3 px-3 py-1.5 bg-zinc-900/70 backdrop-blur-sm rounded-full">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideClick(index)}
              className={`rounded-full transition-all duration-300 ${
                current === index 
                  ? "w-5 h-1.5 bg-white" 
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
