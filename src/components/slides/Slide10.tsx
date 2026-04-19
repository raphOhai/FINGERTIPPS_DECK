import { motion } from "framer-motion";
import { Check } from "lucide-react";
import SlideContent, { staggerItem } from "../SlideContent";

const projections = [
  { value: "50,000", label: "Businesses (12-month projection)" },
  { value: "₦4,250", label: "Avg revenue / business" },
  { value: "₦1.5B", label: "Projected revenue after 12-months" },
];

const monthlyFeatures = ["All core features", "AI agent (Lira)", "Cancel anytime"];
const annualFeatures = ["Everything in Monthly", "15% discount", "Priority support"];

const Slide10 = () => (
  <SlideContent>
    <motion.p variants={staggerItem} className="text-sm sm:text-base md:text-lg font-bold tracking-[0.2em] uppercase text-primary mb-4">
      Business Model
    </motion.p>
    <motion.h2 variants={staggerItem} className="text-4xl sm:text-5xl md:text-7xl font-black text-foreground text-center leading-[1.05]">
      Subscription <span className="text-primary">SaaS</span>
    </motion.h2>

    <motion.div variants={staggerItem} className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl w-full">
      <div className="bg-secondary/40 rounded-2xl p-6 border border-border">
        <p className="text-sm text-muted-foreground uppercase tracking-wide font-bold">Monthly</p>
        <div className="flex items-baseline gap-2 mt-3">
          <p className="text-4xl sm:text-5xl font-black text-foreground">₦5,000</p>
          <span className="text-sm text-muted-foreground">/mo</span>
        </div>
        <p className="text-xs text-muted-foreground mt-1">~$3 / month</p>
        <div className="mt-5 flex flex-col gap-2">
          {monthlyFeatures.map((f) => (
            <div key={f} className="flex items-center gap-2 text-sm text-foreground">
              <Check className="w-4 h-4 text-primary" /> {f}
            </div>
          ))}
        </div>
      </div>

      <div className="relative bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-6 border border-primary/40">
        <span className="absolute -top-3 right-5 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">BEST VALUE</span>
        <p className="text-sm text-primary uppercase tracking-wide font-bold">Annual</p>
        <div className="flex items-baseline gap-2 mt-3">
          <p className="text-4xl sm:text-5xl font-black text-primary">₦51,000</p>
          <span className="text-sm text-muted-foreground">/yr</span>
        </div>
        <p className="text-xs text-muted-foreground mt-1">15% discount</p>
        <div className="mt-5 flex flex-col gap-2">
          {annualFeatures.map((f) => (
            <div key={f} className="flex items-center gap-2 text-sm text-foreground">
              <Check className="w-4 h-4 text-primary" /> {f}
            </div>
          ))}
        </div>
      </div>
    </motion.div>

    <motion.div variants={staggerItem} className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl w-full">
      {projections.map((p) => (
        <div key={p.label} className="bg-secondary/30 rounded-xl p-4 border border-border text-center">
          <p className="text-xl sm:text-2xl font-black text-primary">{p.value}</p>
          <p className="text-[11px] sm:text-xs text-muted-foreground mt-1 leading-snug">{p.label}</p>
        </div>
      ))}
    </motion.div>
  </SlideContent>
);

export default Slide10;
