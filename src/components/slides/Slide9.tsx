import { motion } from "framer-motion";
import SlideContent, { staggerItem } from "../SlideContent";

const metrics = [
  { value: "$200B+", label: "TAM — Global SMB Commerce Software" },
  { value: "$20B+", label: "SAM — African SMB Software Market" },
  { value: "$2B+", label: "SOM — Nigerian Digital Sellers" },
];

const supporting = [
  { value: "$8.9B+", label: "Nigerian e-commerce revenue 2023 (1st in Africa)" },
  { value: "48%", label: "SMEs' contribution to Nigeria's GDP" },
  { value: "$15B+", label: "Projected Nigerian e-commerce revenue by 2029" },
];

const Slide9 = () => (
  <SlideContent>
    <motion.p variants={staggerItem} className="text-base md:text-lg font-bold tracking-[0.2em] uppercase text-primary mb-5">
      Market Size
    </motion.p>
    <motion.h2 variants={staggerItem} className="text-5xl md:text-7xl font-black text-foreground text-center leading-tight">
      A Massive Addressable Market
    </motion.h2>
    <motion.div variants={staggerItem} className="mt-10 flex gap-6 max-w-4xl w-full justify-center">
      {metrics.map((m) => (
        <div key={m.label} className="flex-1 bg-secondary/50 rounded-2xl p-6 border border-border text-center">
          <p className="text-4xl md:text-5xl font-black text-primary">{m.value}</p>
          <p className="text-xs text-muted-foreground mt-2">{m.label}</p>
        </div>
      ))}
    </motion.div>
    <motion.div variants={staggerItem} className="mt-6 flex gap-4 max-w-4xl w-full justify-center">
      {supporting.map((s) => (
        <div key={s.label} className="flex-1 bg-primary/5 rounded-xl p-4 border border-primary/20 text-center">
          <p className="text-2xl font-bold text-foreground">{s.value}</p>
          <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
        </div>
      ))}
    </motion.div>
    <motion.p variants={staggerItem} className="mt-6 text-base font-semibold text-primary text-center">
      Fingertipps is targeting millions of digital-first sellers.
    </motion.p>
  </SlideContent>
);

export default Slide9;
