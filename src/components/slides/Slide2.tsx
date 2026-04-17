import { motion } from "framer-motion";
import SlideContent, { staggerItem } from "../SlideContent";
import problemImg from "@/assets/problem-illustration.jpg";

const painPoints = [
  "WhatsApp DMs for orders",
  "Manual payment confirmation",
  "Manual inventory management",
  "Endless customer messages",
  "High cost of setting up a storefront",
  "No automation or analytics",
];

const results = [
  "Lost sales",
  "Payment confusion",
  "Operational inefficiency",
  "Poor customer experience",
  "Limited ability to scale",
];

const Slide2 = () => (
  <SlideContent>
    <motion.p variants={staggerItem} className="text-base md:text-lg font-bold tracking-[0.2em] uppercase text-primary mb-5">
      The Problem
    </motion.p>
    <motion.h2 variants={staggerItem} className="text-5xl md:text-7xl font-black text-foreground text-center leading-tight">
      Small Businesses Run in Chaos
    </motion.h2>
    <motion.div variants={staggerItem} className="mt-8 flex flex-col md:flex-row items-start gap-10 max-w-5xl">
      <div className="flex-1">
        <p className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">Most businesses still rely on:</p>
        <div className="flex flex-col gap-2">
          {painPoints.map((text, i) => (
            <div key={i} className="flex items-start gap-2.5">
              <span className="mt-1.5 w-2 h-2 rounded-full bg-destructive flex-shrink-0" />
              <span className="text-base text-muted-foreground">{text}</span>
            </div>
          ))}
        </div>
      </div>
      <img src={problemImg} alt="Fragmented business operations" loading="lazy" className="w-48 h-48 rounded-2xl object-cover opacity-80 hidden md:block" />
      <div className="flex-1">
        <p className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">This results in:</p>
        <div className="flex flex-col gap-2">
          {results.map((text, i) => (
            <div key={i} className="flex items-start gap-2.5">
              <span className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
              <span className="text-base text-muted-foreground">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
    <motion.p variants={staggerItem} className="mt-8 text-xl font-semibold text-foreground text-center">
      Millions of African businesses are stuck running manually.
    </motion.p>
  </SlideContent>
);

export default Slide2;
