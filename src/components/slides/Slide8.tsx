import { motion } from "framer-motion";
import { Users, DollarSign, TrendingUp } from "lucide-react";
import SlideContent, { staggerItem, Eyebrow } from "../SlideContent";

const metrics = [
  {
    value: "200+",
    label: "Users via organic channels",
    sub: "in 1 year",
    icon: Users,
  },
  {
    value: "₦25M+",
    label: "Total processed volume",
    sub: "Jan 2025 — Date",
    icon: DollarSign,
  },
  {
    value: "20%",
    label: "Month-over-month growth",
    sub: "consistent",
    icon: TrendingUp,
  },
];

const Slide8 = () => (
  <SlideContent>
    <Eyebrow index="08">Traction</Eyebrow>

    <motion.h2
      variants={staggerItem}
      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-foreground text-center leading-[0.95] tracking-tight"
    >
      Early <span className="text-primary">momentum.</span>
    </motion.h2>

    <motion.p
      variants={staggerItem}
      className="mt-4 sm:mt-5 max-w-2xl text-center text-sm sm:text-base text-muted-foreground leading-relaxed px-2"
    >
      Here's what we've achieved without paid acquisition.
    </motion.p>

    <motion.div
      variants={staggerItem}
      className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 max-w-5xl w-full"
    >
      {metrics.map(({ value, label, sub, icon: Icon }, i) => (
        <div
          key={label}
          className="relative bg-secondary/25 rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-border/50 overflow-hidden"
        >
          <div className="flex items-center justify-between mb-5 sm:mb-6">
            <span className="text-[9px] sm:text-[10px] font-mono tracking-[0.25em] text-primary">
              KPI / {String(i + 1).padStart(2, "0")}
            </span>
            <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" strokeWidth={1.5} />
          </div>
          <p className="text-5xl sm:text-6xl md:text-7xl font-black text-foreground tracking-tight leading-none">
            {value}
          </p>
          <div className="mt-4 sm:mt-5 h-px bg-border/60" />
          <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-foreground font-medium">{label}</p>
          <p className="mt-1 text-[11px] sm:text-xs text-muted-foreground">{sub}</p>
        </div>
      ))}
    </motion.div>

    <motion.p
      variants={staggerItem}
      className="mt-6 sm:mt-8 text-xs sm:text-sm text-muted-foreground text-center max-w-2xl px-2"
    >
      Strong organic signal. Low CAC. Repeatable growth motions ready to scale.
    </motion.p>
  </SlideContent>
);

export default Slide8;
