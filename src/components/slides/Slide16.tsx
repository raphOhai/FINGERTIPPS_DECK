import { motion } from "framer-motion";
import { Users, TrendingUp, Clock } from "lucide-react";
import SlideContent, { staggerItem, Eyebrow } from "../SlideContent";

const Slide16 = () => (
  <SlideContent>
    <Eyebrow index="13">The Ask</Eyebrow>

    <motion.h2
      variants={staggerItem}
      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-foreground text-center leading-[0.95] tracking-tight"
    >
      Investment <span className="text-primary">opportunity.</span>
    </motion.h2>

    <motion.div
      variants={staggerItem}
      className="mt-4 sm:mt-5 bg-primary/[0.06] rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-primary/40 text-center max-w-lg w-full"
    >
      <div className="flex items-center justify-center gap-2 sm:gap-2.5 mb-3 sm:mb-4">
        <span className="h-px w-6 sm:w-8 bg-primary" />
        <span className="text-[8px] sm:text-[9px] font-mono tracking-[0.24em] uppercase text-primary">
          Pre-Seed Round
        </span>
        <span className="h-px w-6 sm:w-8 bg-primary" />
      </div>
      <p className="text-5xl sm:text-6xl md:text-7xl font-black text-primary tracking-tight leading-none">
        $250K
      </p>
      <div className="mt-3.5 sm:mt-4 inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full border border-primary/40 bg-background">
        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
        <p className="text-[11px] sm:text-xs md:text-sm text-foreground font-bold">
          For 10% &middot; $2.5M post-money
        </p>
      </div>
    </motion.div>

    {/* Runway */}
    <motion.div
      variants={staggerItem}
      className="mt-3 sm:mt-4 inline-flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full border border-border/60 bg-secondary/25"
    >
      <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary" strokeWidth={1.75} />
      <span className="text-[10px] sm:text-[11px] md:text-xs text-foreground/90">
        <span className="font-mono text-[8px] sm:text-[9px] tracking-[0.2em] uppercase text-muted-foreground/80 mr-1.5">
          Runway
        </span>
        ~18 months to hit 50,000 paying businesses
      </span>
    </motion.div>

    {/* 24-month milestones */}
    <motion.div
      variants={staggerItem}
      className="mt-4 sm:mt-5 max-w-3xl w-full"
    >
      <div className="flex items-center gap-2.5 mb-2">
        <span className="text-[8px] sm:text-[9px] font-mono tracking-[0.2em] uppercase text-muted-foreground/80">
          24-Month Milestones
        </span>
        <span className="flex-1 h-px bg-border/60" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border/60 rounded-xl sm:rounded-2xl overflow-hidden border border-border/60">
        <div className="bg-background p-3 sm:p-4 md:p-4.5 flex items-start gap-3">
          <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary mt-1 flex-shrink-0" strokeWidth={1.5} />
          <div>
            <p className="text-xl sm:text-2xl md:text-3xl font-black text-foreground tracking-tight leading-none">
              50,000+
            </p>
            <p className="text-[10px] sm:text-[11px] md:text-xs text-muted-foreground mt-1 sm:mt-1.5">
              Paying businesses
            </p>
          </div>
        </div>
        <div className="bg-background p-3 sm:p-4 md:p-4.5 flex items-start gap-3">
          <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary mt-1 flex-shrink-0" strokeWidth={1.5} />
          <div>
            <p className="text-xl sm:text-2xl md:text-3xl font-black text-foreground tracking-tight leading-none">
              $2M+
            </p>
            <p className="text-[10px] sm:text-[11px] md:text-xs text-muted-foreground mt-1 sm:mt-1.5">
              Annual recurring revenue
            </p>
          </div>
        </div>
      </div>
    </motion.div>

    <motion.p
      variants={staggerItem}
      className="mt-3 sm:mt-4 text-[10px] sm:text-[11px] md:text-xs text-muted-foreground text-center max-w-2xl px-2"
    >
      Year 1 &mdash; <span className="text-foreground font-semibold">25K businesses, ₦1.5B ARR</span>.
      Year 2 &mdash; <span className="text-foreground font-semibold">50K+ businesses, $2M+ ARR</span>.
    </motion.p>
  </SlideContent>
);

export default Slide16;
