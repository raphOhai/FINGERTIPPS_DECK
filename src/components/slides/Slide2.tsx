import { motion } from "framer-motion";
import { Store, MessageCircle, Boxes } from "lucide-react";
import SlideContent, { staggerItem, Eyebrow } from "../SlideContent";

const painGroups = [
  {
    label: "Launch",
    icon: Store,
    headline: "Stuck offline.",
    bullets: [
      "Costly storefront tools",
      "Tools that don't talk to each other",
      "No real online presence",
    ],
  },
  {
    label: "Sell",
    icon: MessageCircle,
    headline: "Sales slip away.",
    bullets: [
      "Orders trapped in WhatsApp DMs",
      "Manual payment confirmation",
      "Confusion at checkout",
    ],
  },
  {
    label: "Operate",
    icon: Boxes,
    headline: "Operations choke.",
    bullets: [
      "Manual inventory tracking",
      "Endless customer messages",
      "No automation or analytics",
    ],
  },
];

const Slide2 = () => (
  <SlideContent>
    <Eyebrow index="02">The Problem</Eyebrow>

    <motion.h2
      variants={staggerItem}
      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-foreground text-center leading-[0.95] tracking-tight max-w-4xl"
    >
      Small businesses run in
      <br />
      <span className="text-primary">chaos.</span>
    </motion.h2>

    <motion.p
      variants={staggerItem}
      className="mt-3 sm:mt-4 max-w-2xl text-center text-xs sm:text-sm text-muted-foreground leading-relaxed px-2"
    >
      Across Africa, millions of vendors run their entire business out of a phone &mdash;
      stitching together half a dozen tools that were never built to work together.
    </motion.p>

    <motion.div
      variants={staggerItem}
      className="mt-5 sm:mt-6 grid grid-cols-1 md:grid-cols-3 gap-2.5 sm:gap-3 max-w-5xl w-full"
    >
      {painGroups.map(({ label, icon: Icon, headline, bullets }, i) => (
        <div
          key={label}
          className="relative bg-secondary/25 rounded-xl sm:rounded-2xl p-4 sm:p-4.5 border border-border/50 hover:border-primary/40 transition-colors flex flex-col"
        >
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <span className="text-[8px] sm:text-[9px] font-mono tracking-[0.22em] uppercase text-primary">
              {String(i + 1).padStart(2, "0")} / {label}
            </span>
            <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-muted-foreground" strokeWidth={1.5} />
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-black text-foreground tracking-tight leading-tight">
            {headline}
          </h3>
          <div className="my-3 sm:my-3.5 h-px bg-border/60" />
          <ul className="flex flex-col gap-1.5 sm:gap-2">
            {bullets.map((b) => (
              <li
                key={b}
                className="flex items-start gap-2 text-[11px] sm:text-xs text-foreground/90 leading-snug"
              >
                <span className="mt-1.5 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                {b}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </motion.div>

    <motion.div
      variants={staggerItem}
      className="mt-4 sm:mt-5 inline-flex items-center gap-2 px-3.5 sm:px-4.5 py-1.5 sm:py-2 rounded-full border border-primary/40"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
      <span className="text-[10px] sm:text-[11px] md:text-xs font-medium text-foreground">
        Millions of African businesses are stuck running manually
      </span>
    </motion.div>
  </SlideContent>
);

export default Slide2;
