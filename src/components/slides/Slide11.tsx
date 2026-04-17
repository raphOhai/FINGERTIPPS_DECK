import { motion } from "framer-motion";
import SlideContent, { staggerItem } from "../SlideContent";
import growthImg from "@/assets/growth-visual.jpg";

const metrics = [
  { value: "200+", label: "Users via organic channels in 1 year" },
  { value: "₦25M+", label: "Total Processed Volume (Jan 2025 – Date)" },
  { value: "20%", label: "Month-over-Month Growth" },
];

const Slide11 = () => (
  <SlideContent>
    <motion.p variants={staggerItem} className="text-base md:text-lg font-bold tracking-[0.2em] uppercase text-primary mb-5">
      Traction
    </motion.p>
    <motion.h2 variants={staggerItem} className="text-5xl md:text-7xl font-black text-foreground text-center leading-tight">
      Early Momentum
    </motion.h2>
    <motion.p variants={staggerItem} className="mt-3 text-lg text-muted-foreground text-center max-w-2xl">
      Investors care about momentum. Here's what we've achieved so far.
    </motion.p>
    <motion.div variants={staggerItem} className="mt-8 flex flex-col md:flex-row items-center gap-10 max-w-5xl w-full">
      <div className="flex flex-col gap-6 flex-1">
        {metrics.map((m) => (
          <div key={m.label} className="flex items-baseline gap-4">
            <span className="text-4xl md:text-5xl font-black text-primary">{m.value}</span>
            <span className="text-base text-muted-foreground">{m.label}</span>
          </div>
        ))}
      </div>
      <img src={growthImg} alt="Growth trajectory" loading="lazy" className="w-56 h-56 rounded-2xl object-cover opacity-90" />
    </motion.div>
  </SlideContent>
);

export default Slide11;
