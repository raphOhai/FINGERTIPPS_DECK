import { motion } from "framer-motion";
import { Users, DollarSign, TrendingUp } from "lucide-react";
import SlideContent, { staggerItem } from "../SlideContent";

const metrics = [
  { value: "200+", label: "Users via organic channels", sub: "in 1 year", icon: Users },
  { value: "₦25M+", label: "Total Processed Volume", sub: "Jan 2025 – Date", icon: DollarSign },
  { value: "20%", label: "Month-over-Month Growth", sub: "consistent", icon: TrendingUp },
];

const Slide11 = () => (
  <SlideContent>
    <motion.p variants={staggerItem} className="text-sm sm:text-base md:text-lg font-bold tracking-[0.2em] uppercase text-primary mb-4">
      Traction
    </motion.p>
    <motion.h2 variants={staggerItem} className="text-4xl sm:text-5xl md:text-7xl font-black text-foreground text-center leading-[1.05]">
      Early <span className="text-primary">Momentum</span>
    </motion.h2>
    <motion.p variants={staggerItem} className="mt-4 text-base sm:text-lg text-muted-foreground text-center max-w-2xl">
      Investors care about momentum. Here's what we've achieved so far.
    </motname>
    </motion.p>

    <motion.div variants={staggerItem} className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl w-full">
      {metrics.map(({ value, label, sub, icon: Icon }) => (
        <div key={label} className="bg-gradient-to-br from-primary/15 to-secondary/40 rounded-2xl p-6 border border-primary/30 relative overflow-hidden">
          <Icon className="absolute -bottom-4 -right-4 w-24 h-24 text-primary/10" />
          <p className="text-4xl sm:text-5xl font-black text-primary relative">{value}</p>
          <p className="text-sm sm:text-base font-semibold text-foreground mt-3 relative">{label}</p>
          <p className="text-xs text-muted-foreground mt-1 relative">{sub}</p>
        </div>
      ))}
    </motion.div>
  </SlideContent>
);

export default Slide11;
