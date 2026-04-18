import { motion } from "framer-motion";
import SlideContent, { staggerItem } from "../SlideContent";

const tam = [
  { tier: "TAM", value: "$200B+", label: "Global SMB Commerce Software", size: "max-w-full" },
  { tier: "SAM", value: "$20B+", label: "African SMB Software Market", size: "max-w-[80%]" },
  { tier: "SOM", value: "$2B+", label: "Nigerian Digital Sellers", size: "max-w-[55%]" },
];

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

    <motion.div variants={staggerItem} className="mt-10 flex flex-col gap-3 max-w-3xl w-full">
      {tam.map((t, i) => (
        <div
          key={t.tier}
          className={`mx-auto w-full ${t.size} bg-gradient-to-r from-primary/30 to-primary/10 rounded-2xl p-4 sm:p-5 border border-primary/40 flex items-center justify-between gap-4`}
          style={{ opacity: 1 - i * 0.15 }}
        >
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="text-xs font-bold text-primary-foreground bg-primary px-2.5 py-1 rounded-md">{t.tier}</span>
            <span className="text-xs sm:text-sm text-foreground font-medium">{t.label}</span>
          </div>
          <span className="text-2xl sm:text-4xl font-black text-primary">{t.value}</span>
        </div>
      ))}
    </motion.div>

    <motion.div variants={staggerItem} className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl w-full">
      {supporting.map((s) => (
        <div key={s.label} className="bg-secondary/40 rounded-xl p-4 border border-border text-center">
          <p className="text-xl sm:text-2xl font-black text-foreground">{s.value}</p>
          <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
        </div>
      ))}
    </motion.div>

    <motion.p variants={staggerItem} className="mt-6 text-base sm:text-lg font-semibold text-primary text-center">
      Targeting millions of digital-first sellers.
    </motion.p>
  </SlideContent>
);

export default Slide9;
