import { motion } from "framer-motion";
import SlideContent, { staggerItem } from "../SlideContent";

const Slide1 = () => (
  <SlideContent>
    <motion.div variants={staggerItem} className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
      <span className="h-px w-6 sm:w-10 bg-primary" />
      <span className="text-[9px] sm:text-[11px] font-mono tracking-[0.3em] uppercase text-primary whitespace-nowrap">
        Investor Deck &middot; 2026
      </span>
      <span className="h-px w-6 sm:w-10 bg-primary" />
    </motion.div>

    <motion.h1
      variants={staggerItem}
      className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-foreground leading-[0.9] tracking-tight text-center"
    >
      Finger<span className="text-primary">tipps</span>
    </motion.h1>

    <motion.div variants={staggerItem} className="mt-6 sm:mt-8 max-w-2xl text-center px-2">
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground font-medium leading-snug">
        AI-powered commerce infrastructure
        <br className="hidden sm:block" />
        <span className="sm:hidden"> </span>for small businesses.
      </p>
    </motion.div>

    <motion.div
      variants={staggerItem}
      className="mt-5 sm:mt-7 flex items-center gap-2 sm:gap-4 text-[10px] sm:text-xs font-mono tracking-[0.2em] uppercase text-muted-foreground"
    >
      <span>Launch</span>
      <span className="w-1 h-1 rounded-full bg-primary/60" />
      <span>Sell</span>
      <span className="w-1 h-1 rounded-full bg-primary/60" />
      <span>Automate</span>
      <span className="w-1 h-1 rounded-full bg-primary/60" />
      <span>Grow</span>
    </motion.div>

    <motion.div
      variants={staggerItem}
      className="mt-10 sm:mt-12 grid grid-cols-3 gap-4 sm:gap-10 md:gap-16 text-center w-full max-w-2xl"
    >
      <div>
        <p className="text-[9px] sm:text-[10px] font-mono tracking-[0.2em] sm:tracking-[0.25em] uppercase text-muted-foreground/70">
          Founder
        </p>
        <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm md:text-base text-foreground font-semibold">
          Emmanuel Orilade
        </p>
      </div>
      <div>
        <p className="text-[9px] sm:text-[10px] font-mono tracking-[0.2em] sm:tracking-[0.25em] uppercase text-muted-foreground/70">
          Based In
        </p>
        <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm md:text-base text-foreground font-semibold">
          Lagos, Nigeria
        </p>
      </div>
      <div>
        <p className="text-[9px] sm:text-[10px] font-mono tracking-[0.2em] sm:tracking-[0.25em] uppercase text-muted-foreground/70">
          Web
        </p>
        <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm md:text-base text-primary font-semibold break-all">
          Fingertipps.com
        </p>
      </div>
    </motion.div>
  </SlideContent>
);

export default Slide1;
