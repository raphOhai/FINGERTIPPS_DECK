import { motion } from "framer-motion";
import SlideContent, { staggerItem } from "../SlideContent";

const supporting = [
  { value: "$8.9B+", label: "Nigerian e-commerce revenue 2023 (1st in Africa)" },
  { value: "48%", label: "SMEs' contribution to Nigeria's GDP" },
  { value: "$15B+", label: "Projected Nigerian e-commerce by 2029" },
];

const Slide9 = () => (
  <SlideContent>
    <motion.p variants={staggerItem} className="text-sm sm:text-base md:text-lg font-bold tracking-[0.2em] uppercase text-primary mb-4">
      Market Size
    </motion.p>
    <motion.h2 variants={staggerItem} className="text-4xl sm:text-5xl md:text-7xl font-black text-foreground text-center leading-[1.05]">
      A Massive <span className="text-primary">Addressable Market</span>
    </motion.h2>

    <motion.div variants={staggerItem} className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl w-full">
      {supporting.map((s) => (
        <div key={s.label} className="bg-secondary/40 rounded-xl p-5 border border-border text-center">
          <p className="text-2xl sm:text-3xl font-black text-foreground">{s.value}</p>
          <p className="text-xs sm:text-sm text-muted-foreground mt-2">{s.label}</p>
        </div>
      ))}
    </motion.div>

    <motion.p variants={staggerItem} className="mt-8 text-base sm:text-lg font-semibold text-primary text-center">
      Targeting millions of digital-first sellers.
    </motion.p>

    <motion.p variants={staggerItem} className="mt-6 self-start text-[10px] sm:text-xs text-muted-foreground/70">
      Source:{" "}
      <a
        href="https://www.mordorintelligence.com/industry-reports/nigeria-ecommerce-market"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-foreground break-all"
      >
        mordorintelligence.com/industry-reports/nigeria-ecommerce-market
      </a>
    </motion.p>
  </SlideContent>
);

export default Slide9;
