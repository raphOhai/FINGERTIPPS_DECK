import { motion } from "framer-motion";
import SlideContent, { staggerItem } from "../SlideContent";

const projections = [
  { value: "50,000", label: "Businesses — 12-Month Projection" },
  { value: "₦60,000", label: "Avg Monthly Transaction Per Business" },
  { value: "₦3,000", label: "Avg Revenue Per Business" },
  { value: "₦1.5B", label: "Projected Revenue by Q4" },
];

const Slide10 = () => (
  <SlideContent>
    <motion.p variants={staggerItem} className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">
      Business Model
    </motion.p>
    <motion.h2 variants={staggerItem} className="text-4xl md:text-6xl font-bold text-foreground text-center">
      Subscription SaaS
    </motion.h2>
    <motion.div variants={staggerItem} className="mt-8 flex gap-6 max-w-3xl w-full justify-center">
      <div className="bg-secondary/50 rounded-2xl p-6 border border-border text-center flex-1">
        <p className="text-sm text-muted-foreground uppercase tracking-wide">Monthly</p>
        <p className="text-4xl font-black text-primary mt-2">₦5,000</p>
        <p className="text-xs text-muted-foreground mt-1">~$3/month</p>
      </div>
      <div className="bg-primary/10 rounded-2xl p-6 border border-primary/30 text-center flex-1">
        <p className="text-sm text-primary uppercase tracking-wide font-semibold">Annual</p>
        <p className="text-4xl font-black text-primary mt-2">₦51,000</p>
        <p className="text-xs text-muted-foreground mt-1">15% discount</p>
      </div>
    </motion.div>
    <motion.div variants={staggerItem} className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl w-full">
      {projections.map((p) => (
        <div key={p.label} className="bg-secondary/30 rounded-xl p-4 border border-border text-center">
          <p className="text-2xl font-bold text-foreground">{p.value}</p>
          <p className="text-xs text-muted-foreground mt-1">{p.label}</p>
        </div>
      ))}
    </motion.div>
  </SlideContent>
);

export default Slide10;
