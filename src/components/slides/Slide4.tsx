import { motion } from "framer-motion";
import { Globe, Bot, ShoppingBag, Package, FileText, Mail, Users, BarChart3 } from "lucide-react";
import SlideContent, { staggerItem } from "../SlideContent";

const features = [
  { icon: Globe, text: "Launch a website in under 3 minutes" },
  { icon: Bot, text: "Automate operations with AI (Lira)" },
  { icon: ShoppingBag, text: "Sell products & accept payments" },
  { icon: Package, text: "Manage inventory automatically" },
  { icon: FileText, text: "Create & send invoices with payment links" },
  { icon: Mail, text: "Run social media and email marketing campaigns" },
  { icon: Users, text: "Launch affiliate programs" },
  { icon: BarChart3, text: "Analyze business performance" },
];

const Slide4 = () => (
  <SlideContent>
    <motion.p variants={staggerItem} className="text-xs sm:text-sm md:text-base font-bold tracking-[0.2em] uppercase text-primary mb-3">
      The Solution
    </motion.p>
    <motion.h2 variants={staggerItem} className="text-3xl sm:text-4xl md:text-6xl font-black text-foreground text-center leading-[1.05]">
      Fingertipps — One Dashboard,
      <br />
      <span className="text-primary">Total Control.</span>
    </motion.h2>
    <motion.p variants={staggerItem} className="mt-4 text-sm sm:text-lg text-muted-foreground max-w-3xl text-center leading-relaxed">
      An AI-powered commerce system that helps small businesses{" "}
      <span className="text-primary font-semibold">launch</span>,{" "}
      <span className="text-primary font-semibold">sell</span>,{" "}
      <span className="text-primary font-semibold">automate</span>, and{" "}
      <span className="text-primary font-semibold">grow</span> — all from one platform.
    </motion.p>

    <motion.div variants={staggerItem} className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-2.5 max-w-5xl w-full">
      {features.map(({ icon: Icon, text }, i) => (
        <div
          key={i}
          className="group flex flex-col items-center text-center gap-1.5 bg-secondary/40 hover:bg-secondary/70 hover:border-primary/40 transition-colors rounded-xl p-2.5 sm:p-3 border border-border"
        >
          <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/25 transition-colors">
            <Icon className="w-4 h-4 text-primary" />
          </span>
          <span className="text-xs sm:text-sm text-foreground font-medium leading-snug">{text}</span>
        </div>
      ))}
    </motion.div>

    <motion.div variants={staggerItem} className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 border border-primary/30">
      <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
      <span className="text-xs sm:text-sm font-semibold text-primary">Everything runs from one unified platform</span>
    </motion.div>
  </SlideContent>
);

export default Slide4;
