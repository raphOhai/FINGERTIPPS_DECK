import { motion } from "framer-motion";
import SlideContent, { staggerItem, Eyebrow } from "../SlideContent";

const supporting = [
  {
    value: "$8.9B",
    label: "Nigerian e-commerce revenue (2023)",
    sub: "1st in Africa",
  },
  {
    value: "48%",
    label: "SME contribution to Nigeria's GDP",
    sub: "Engine of the economy",
  },
  {
    value: "$15B+",
    label: "Projected Nigerian e-commerce by 2029",
    sub: "+10% CAGR",
  },
];

const Slide9 = () => (
  <SlideContent>
    <Eyebrow index="05">Market</Eyebrow>

    <motion.h2
      variants={staggerItem}
      className="text-2xl sm:text-3xl md:text-5xl font-black text-foreground text-center leading-[0.95] tracking-tight max-w-5xl"
    >
      A massive
      <br />
      <span className="text-primary">addressable market.</span>
    </motion.h2>

    <motion.div
      variants={staggerItem}
      className="mt-5 sm:mt-6 grid grid-cols-3 gap-px bg-border/60 rounded-xl sm:rounded-2xl overflow-hidden border border-border/60 max-w-5xl w-full"
    >
      {supporting.map((s, i) => (
        <div
          key={s.label}
          className="bg-background p-3 sm:p-3.5 md:p-4.5 flex flex-col items-start"
        >
          <span className="text-[8px] sm:text-[10px] font-mono tracking-[0.22em] uppercase text-primary mb-2 sm:mb-2.5">
            {String(i + 1).padStart(2, "0")}
          </span>
          <p className="text-2xl sm:text-4xl md:text-5xl font-black text-foreground tracking-tight leading-none">
            {s.value}
          </p>
          <p className="mt-2 sm:mt-2.5 text-[10px] sm:text-xs md:text-sm text-foreground font-medium leading-snug">
            {s.label}
          </p>
          <p className="mt-0.5 text-[9px] sm:text-[11px] text-muted-foreground">{s.sub}</p>
        </div>
      ))}
    </motion.div>

    <motion.p
      variants={staggerItem}
      className="mt-4 sm:mt-5 text-xs sm:text-sm text-foreground text-center font-medium px-2"
    >
      Targeting <span className="text-primary">millions</span> of digital-first sellers.
    </motion.p>

    <motion.p
      variants={staggerItem}
      className="mt-2 text-[8px] sm:text-[10px] font-mono uppercase tracking-[0.16em] text-muted-foreground/60 text-center"
    >
      Source &middot;{" "}
      <a
        href="https://www.mordorintelligence.com/industry-reports/nigeria-ecommerce-market"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-primary transition-colors"
      >
        Mordor Intelligence
      </a>
    </motion.p>
  </SlideContent>
);

export default Slide9;
