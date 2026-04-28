import { motion } from "framer-motion";
import { Sparkles, Bot, Store, Banknote } from "lucide-react";
import SlideContent, { staggerItem, Eyebrow } from "../SlideContent";

const items = [
  {
    icon: Sparkles,
    title: "AI Website Builder",
    desc: "Build a complete website by describing it in a single chat.",
    status: "Next",
  },
  {
    icon: Bot,
    title: "Lira AI Expansion",
    desc: "Advanced sales automation, customer support, and lead qualification.",
    status: "Q3 2026",
  },
  {
    icon: Store,
    title: "Marketplace Layer",
    desc: "Discover and buy from Fingertipps merchants in a unified storefront.",
    status: "Q4 2026",
  },
  {
    icon: Banknote,
    title: "Embedded Finance",
    desc: "Working capital, BNPL, and instant payouts - built on top of merchant cash-flow.",
    status: "2027",
  },
];

const Slide13 = () => (
  <SlideContent>
    <Eyebrow index="10">Roadmap</Eyebrow>

    <motion.h2
      variants={staggerItem}
      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-foreground text-center leading-[0.95] tracking-tight"
    >
      What's <span className="text-primary">coming next.</span>
    </motion.h2>

    <motion.div variants={staggerItem} className="mt-4 sm:mt-5 max-w-5xl w-full">
      {/* Timeline rail */}
      <div className="hidden md:flex items-center justify-center gap-4 mb-3">
        {items.map((_, i) => (
          <div key={i} className="flex items-center">
            <span className="text-[8px] font-mono tracking-[0.22em] uppercase text-primary">
              {String(i + 1).padStart(2, "0")}
            </span>
            {i < items.length - 1 && <span className="w-16 h-px bg-border/60 ml-4" />}
          </div>
        ))}
      </div>

      {/* Milestone cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5">
        {items.map(({ icon: Icon, title, desc, status }, i) => (
          <div
            key={title}
            className="bg-secondary/25 rounded-xl sm:rounded-2xl p-3.5 sm:p-4.5 border border-border/50 hover:border-primary/35 transition-colors"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="inline-flex items-center gap-2">
                <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-background border border-primary/30 flex items-center justify-center">
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" strokeWidth={1.75} />
                </span>
                <span className="text-[8px] sm:text-[9px] font-mono tracking-[0.22em] text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <span className="text-[8px] sm:text-[9px] font-mono tracking-[0.16em] uppercase text-primary border border-primary/40 px-1.5 sm:px-2 py-0.5 rounded-full whitespace-nowrap">
                {status}
              </span>
            </div>

            <h3 className="text-sm sm:text-base md:text-lg font-bold text-foreground leading-tight">
              {title}
            </h3>
            <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground mt-1.5 leading-relaxed">
              {desc}
            </p>
          </div>
        ))}
      </div>
    </motion.div>

    <motion.p
      variants={staggerItem}
      className="mt-4 sm:mt-5 text-[11px] sm:text-xs md:text-sm text-muted-foreground text-center max-w-2xl px-2"
    >
      The path from commerce platform to{" "}
      <span className="text-foreground font-semibold">embedded SMB OS</span>.
    </motion.p>
  </SlideContent>
);

export default Slide13;
