import { useState, useCallback, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import logo from "@/assets/fingertipps-logo.png";
import Slide1 from "./slides/Slide1";
import Slide2 from "./slides/Slide2";
import Slide4 from "./slides/Slide4";
import Slide6 from "./slides/Slide6";
import Slide8 from "./slides/Slide8";
import Slide9 from "./slides/Slide9";
import Slide10 from "./slides/Slide10";
import Slide11 from "./slides/Slide11";
import Slide12 from "./slides/Slide12";
import Slide13 from "./slides/Slide13";
import Slide14 from "./slides/Slide14";
import Slide15 from "./slides/Slide15";
import Slide16 from "./slides/Slide16";
import Slide17 from "./slides/Slide17";
import Slide18 from "./slides/Slide18";

const slides = [
  Slide1, Slide2, Slide4, Slide8, Slide9,
  Slide6, Slide10, Slide11, Slide12,
  Slide13, Slide14, Slide15, Slide16, Slide17, Slide18,
];

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
};

const SlideDeck = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = useCallback((dir: number) => {
    setDirection(dir);
    setIndex((i) => Math.max(0, Math.min(slides.length - 1, i + dir)));
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        go(1);
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        go(-1);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [go]);

  const Slide = slides[index];
  const total = slides.length;
  const num = String(index + 1).padStart(2, "0");
  const totalStr = String(total).padStart(2, "0");

  return (
    <div className="relative w-screen h-[100dvh] overflow-hidden bg-background select-none">
      {/* Slide content */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={index}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Slide />
        </motion.div>
      </AnimatePresence>

      {/* Top chrome */}
      <div className="pointer-events-none absolute top-0 inset-x-0 h-12 sm:h-14 flex items-center justify-between px-4 sm:px-8 z-10">
        <div className="pointer-events-auto flex items-center gap-3">
          <img src={logo} alt="Fingertipps" className="h-4 sm:h-5 w-auto" />
        </div>
        <span className="text-[9px] sm:text-[10px] font-mono font-semibold tracking-[0.25em] text-muted-foreground/70">
          {num} <span className="text-muted-foreground/30">/</span> {totalStr}
        </span>
      </div>

      {/* Bottom chrome */}
      <div className="pointer-events-none absolute bottom-0 inset-x-0 z-10">
        <div className="mx-4 sm:mx-8 h-px bg-border/50" />
        <div className="px-4 sm:px-8 h-12 sm:h-14 flex items-center justify-between gap-3">
          <span className="text-[9px] sm:text-[10px] font-mono font-semibold tracking-[0.25em] uppercase text-muted-foreground/60 truncate">
            <span className="hidden sm:inline">Fingertipps &middot; </span>PITCH DECK
          </span>
          <div className="pointer-events-auto flex items-center gap-1 sm:gap-1.5">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > index ? 1 : -1);
                  setIndex(i);
                }}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-[3px] rounded-full transition-all duration-300 ${
                  i === index
                    ? "w-5 sm:w-6 bg-primary"
                    : "w-2 sm:w-2.5 bg-muted-foreground/25 hover:bg-muted-foreground/60"
                }`}
              />
            ))}
          </div>
          <span className="text-[9px] sm:text-[10px] font-mono font-semibold tracking-[0.25em] uppercase text-muted-foreground/60 hidden md:block">
            {num} / {totalStr}
          </span>
        </div>
      </div>

      {/* Side navigation */}
      {index > 0 && (
        <button
          onClick={() => go(-1)}
          aria-label="Previous slide"
          className="absolute left-1 sm:left-3 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 rounded-full text-muted-foreground/60 hover:text-primary transition-colors z-10"
        >
          <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={1.5} />
        </button>
      )}
      {index < total - 1 && (
        <button
          onClick={() => go(1)}
          aria-label="Next slide"
          className="absolute right-1 sm:right-3 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 rounded-full text-muted-foreground/60 hover:text-primary transition-colors z-10"
        >
          <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={1.5} />
        </button>
      )}
    </div>
  );
};

export default SlideDeck;
