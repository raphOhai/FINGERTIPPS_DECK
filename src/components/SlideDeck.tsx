import { useState, useCallback, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Slide1 from "./slides/Slide1";
import Slide2 from "./slides/Slide2";
import Slide3 from "./slides/Slide3";
import Slide4 from "./slides/Slide4";
import Slide5 from "./slides/Slide5";
import Slide6 from "./slides/Slide6";
import Slide7 from "./slides/Slide7";
import Slide8 from "./slides/Slide8";

const slides = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8];

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
};

const SlideDeck = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = useCallback(
    (dir: number) => {
      setDirection(dir);
      setIndex((i) => Math.max(0, Math.min(slides.length - 1, i + dir)));
    },
    []
  );

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

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-gradient-to-br from-background to-secondary select-none">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={index}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Slide />
        </motion.div>
      </AnimatePresence>

      {/* Nav buttons */}
      {index > 0 && (
        <button
          onClick={() => go(-1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full text-muted-foreground hover:text-foreground transition-colors"
        >
          <ChevronLeft size={32} />
        </button>
      )}
      {index < slides.length - 1 && (
        <button
          onClick={() => go(1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full text-muted-foreground hover:text-foreground transition-colors"
        >
          <ChevronRight size={32} />
        </button>
      )}

      {/* Progress dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === index ? "bg-primary scale-125" : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SlideDeck;
