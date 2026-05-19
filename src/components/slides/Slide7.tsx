import { motion } from "framer-motion";
import { Check } from "lucide-react";
import SlideContent, { staggerItem, Eyebrow } from "../SlideContent";

const projections = [
  { value: "25,000", label: "Paying businesses by Year 1" },
  { value: "₦5,000", label: "Avg. ARPU / month" },
  { value: "₦1.5B+", label: "Year-1 exit ARR" },
];

const monthlyFeatures = ["All core features", "AI agent (Lira)", "Cancel anytime"];
const annualFeatures = ["Everything in Monthly", "15% discount", "Priority support"];

const Slide7 = () => (
  <SlideContent>
    <Eyebrow index="07">Business Model</Eyebrow>

    <motion.h2
      variants={staggerItem}
      className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-black text-foreground text-center leading-[0.95] tracking-tight"
    >
      Subscription <span className="text-primary">SaaS.</span>
    </motion.h2>

    <motion.p
      variants={staggerItem}
      className="mt-2 sm:mt-3 max-w-2xl text-center text-[10px] sm:text-xs text-muted-foreground leading-relaxed px-2 hidden sm:block"
    >
      Predictable, low-friction pricing tuned for the African SMB &mdash; designed to
      compound monthly recurring revenue at scale.
    </motion.p>

    <motion.div
      variants={staggerItem}
      className="mt-3 sm:mt-4 grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 max-w-4xl w-full"
    >
      <div className="bg-secondary/25 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-border/50">
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <p className="text-[8px] sm:text-[9px] font-mono tracking-[0.24em] uppercase text-muted-foreground">
            Monthly
          </p>
          <span className="text-[8px] sm:text-[9px] font-mono text-muted-foreground/50">01</span>
        </div>
        <div className="flex items-baseline gap-2">
          <p className="text-2xl sm:text-4xl md:text-[2rem] font-black text-foreground tracking-tight leading-none">
            ₦5,000
          </p>
          <span className="text-[11px] sm:text-xs text-muted-foreground">/mo</span>
        </div>
        <p className="text-[10px] sm:text-[11px] text-muted-foreground mt-1 sm:mt-1.5">~$3 / month</p>
        <div className="my-3 sm:my-3.5 h-px bg-border/60" />
        <div className="flex flex-col gap-1.5 sm:gap-2">
          {monthlyFeatures.map((f) => (
            <div key={f} className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-foreground/90 leading-snug">
              <Check className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-primary" strokeWidth={2.5} /> {f}
            </div>
          ))}
        </div>
      </div>

      <div className="relative bg-primary/[0.06] rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-primary/40">
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <p className="text-[8px] sm:text-[9px] font-mono tracking-[0.24em] uppercase text-primary">
            Annual
          </p>
          <span className="text-[8px] font-mono tracking-[0.16em] uppercase text-primary border border-primary/40 px-1.5 py-0.5 rounded-full">
            Best Value
          </span>
        </div>
        <div className="flex items-baseline gap-2">
          <p className="text-2xl sm:text-4xl md:text-[2rem] font-black text-primary tracking-tight leading-none">
            ₦51,000
          </p>
          <span className="text-[11px] sm:text-xs text-muted-foreground">/yr</span>
        </div>
        <p className="text-[10px] sm:text-[11px] text-muted-foreground mt-1 sm:mt-1.5">15% discount</p>
        <div className="my-3 sm:my-3.5 h-px bg-primary/30" />
        <div className="flex flex-col gap-1.5 sm:gap-2">
          {annualFeatures.map((f) => (
            <div key={f} className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-foreground/90 leading-snug">
              <Check className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-primary" strokeWidth={2.5} /> {f}
            </div>
          ))}
        </div>
      </div>

      {/* Projection panel moves inline on desktop for better fit */}
      <div className="bg-background/50 rounded-xl sm:rounded-2xl border border-border/60 p-2.5 sm:p-3.5 col-span-2 md:col-span-1">
        <div className="flex items-center gap-2 mb-2 sm:mb-2.5">
          <span className="text-[8px] sm:text-[9px] font-mono tracking-[0.2em] uppercase text-muted-foreground/80">
            Year-1 Projection
          </span>
          <span className="flex-1 h-px bg-border/60" />
        </div>
        <div className="grid grid-cols-3 md:grid-cols-1 gap-px bg-border/60 rounded-lg overflow-hidden border border-border/60">
          {projections.map((p) => (
            <div key={p.label} className="bg-background py-1.5 sm:py-2.5 px-1 sm:px-2 text-center md:text-left">
              <p className="text-xs sm:text-base md:text-xl font-black text-foreground tracking-tight">
                {p.value}
              </p>
              <p className="text-[7px] sm:text-[9px] md:text-[10px] text-muted-foreground mt-0.5 leading-tight">
                {p.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>

    <motion.p variants={staggerItem} className="mt-1.5 sm:mt-2 text-[8px] sm:text-[10px] text-muted-foreground/70 text-center max-w-4xl hidden sm:block">
      25,000 businesses &times; ₦5,000/mo &times; 12 = ₦1.5B+ ARR exit Year 1.
    </motion.p>
  </SlideContent>
);

export default Slide7;
