import { motion } from "framer-motion";
import { MessageCircle, CreditCard, Boxes, Inbox, DollarSign, BarChart, ArrowRight, AlertTriangle } from "lucide-react";
import SlideContent, { staggerItem } from "../SlideContent";

const painPoints = [
  { icon: MessageCircle, text: "WhatsApp DMs for orders" },
  { icon: CreditCard, text: "Manual payment confirmation" },
  { icon: Boxes, text: "Manual inventory tracking" },
  { icon: Inbox, text: "Endless customer messages" },
  { icon: DollarSign, text: "High cost of storefronts" },
  { icon: BarChart, text: "No automation or analytics" },
];

const results = ["Lost sales", "Payment confusion", "Operational chaos", "Poor customer experience", "Inability to scale"];

const Slide2 = () => (
  <SlideContent>
    <motion.p variants={staggerItem} className="text-sm sm:text-base md:text-lg font-bold tracking-[0.2em] uppercase text-primary mb-4">
      The Problem
    </motion.p>
    <motion.h2 variants={staggerItem} className="text-4xl sm:text-5xl md:text-7xl font-black text-foreground text-center leading-[1.05]">
      Small Businesses Run in <span className="text-destructive">Chaos</span>
    </motion.h2>

    <motion.div variants={staggerItem} className="mt-10 flex flex-col lg:flex-row items-stretch gap-6 max-w-5xl w-full">
      <div className="flex-1 bg-secondary/40 rounded-2xl p-5 sm:p-6 border border-border">
        <p className="text-xs font-bold text-destructive mb-4 uppercase tracking-wider">Most still rely on</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {painPoints.map(({ icon: Icon, text }, i) => (
            <div key={i} className="flex items-center gap-2.5 bg-background/40 rounded-lg p-2.5 border border-border/50">
              <Icon className="w-4 h-4 text-destructive flex-shrink-0" />
              <span className="text-xs sm:text-sm text-foreground">{text}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center lg:flex-col lg:w-12">
        <ArrowRight className="w-8 h-8 text-primary lg:rotate-0 rotate-90" />
      </div>

      <div className="flex-1 bg-destructive/10 rounded-2xl p-5 sm:p-6 border border-destructive/30">
        <div className="flex items-center gap-2 mb-4">
          <AlertTriangle className="w-4 h-4 text-destructive" />
          <p className="text-xs font-bold text-destructive uppercase tracking-wider">This results in</p>
        </div>
        <div className="flex flex-col gap-2.5">
          {results.map((text, i) => (
            <div key={i} className="flex items-start gap-2.5">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-destructive flex-shrink-0" />
              <span className="text-sm sm:text-base text-foreground font-medium">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>

    <motion.p variants={staggerItem} className="mt-8 text-base sm:text-xl font-semibold text-foreground text-center max-w-3xl">
      Millions of African businesses are stuck running <span className="text-primary">manually</span>.
    </motion.p>
  </SlideContent>
);

export default Slide2;
