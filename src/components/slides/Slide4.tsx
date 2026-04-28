import { motion } from "framer-motion";
import { Rocket, ShoppingBag, Sparkles } from "lucide-react";
import SlideContent, { staggerItem, Eyebrow } from "../SlideContent";

const outcomes = [
  {
    label: "Launch",
    icon: Rocket,
    headline: "Online in minutes.",
    bullets: [
      "Branded website builder",
      "Automatic Inventory & order management",
      "Custom domain & checkout",
    ],
  },
  {
    label: "Sell",
    icon: ShoppingBag,
    headline: "Anywhere, get paid.",
    bullets: [
      "Seamless payments",
      "Send invoices with payment links",
      "Run Affiliate programs",
    ],
  },
  {
    label: "Automate & Grow",
    icon: Sparkles,
    headline: "Powered by AI.",
    bullets: [
      "Lira AI operations and sales agent",
      "Run email and social campaigns",
      "Business analytics",
    ],
  },
];

const Slide4 = () => (
  <SlideContent>
    <Eyebrow index="03">The Solution</Eyebrow>

    <motion.h2
      variants={staggerItem}
      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-foreground text-center leading-[0.95] tracking-tight max-w-5xl"
    >
      One dashboard.
      <br />
      <span className="text-primary">Total control.</span>
    </motion.h2>

    <motion.p
      variants={staggerItem}
      className="mt-3 sm:mt-4 max-w-2xl text-center text-xs sm:text-sm text-muted-foreground leading-relaxed px-2"
    >
      Fingertipps unifies the entire commerce stack into three outcomes &mdash; so
      a small business can run from a single dashboard.
    </motion.p>

    <motion.div
      variants={staggerItem}
      className="mt-5 sm:mt-6 grid grid-cols-1 md:grid-cols-3 gap-2.5 sm:gap-3 max-w-5xl w-full"
    >
      {outcomes.map(({ label, icon: Icon, headline, bullets }, i) => (
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
        Everything runs from one unified platform
      </span>
    </motion.div>
  </SlideContent>
);

export default Slide4;
