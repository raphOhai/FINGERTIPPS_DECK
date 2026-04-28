import { motion } from "framer-motion";
import {
  Globe,
  Boxes,
  Receipt,
  Users,
  Megaphone,
  Bot,
  LineChart,
} from "lucide-react";
import SlideContent, { staggerItem, Eyebrow } from "../SlideContent";

const products = [
  { icon: Bot, title: "Lira &mdash; AI Agent", desc: "Manages operations, talks to customers and recommends products.", featured: true },
  { icon: Globe, title: "Website Builder", desc: "Launch a branded online store in minutes." },
  { icon: Boxes, title: "Inventory Automation", desc: "Stock updates with every sale." },
  { icon: Receipt, title: "Invoice Payments", desc: "Send invoices with one-click pay links." },
  { icon: Users, title: "Affiliate Engine", desc: "Turn customers into sales partners." },
  { icon: Megaphone, title: "Marketing Campaigns", desc: "Targeted email and social campaigns." },
  { icon: LineChart, title: "Business Analytics", desc: "Understand sales performance and growth." },
];

const Slide6 = () => (
  <SlideContent>
    <Eyebrow index="06">Product</Eyebrow>

    <motion.h2
      variants={staggerItem}
      className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-black text-foreground text-center leading-[0.95] tracking-tight"
    >
      The full
      <br />
      <span className="text-primary">commerce stack.</span>
    </motion.h2>

    <motion.p
      variants={staggerItem}
      className="mt-2 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/40 bg-primary/10 text-[10px] sm:text-xs text-primary text-center font-semibold"
    >
      Click on cards to learn more.
    </motion.p>

    <motion.div
      variants={staggerItem}
      className="mt-4 sm:mt-6 grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-2.5 max-w-5xl w-full"
    >
      {products.map(({ icon: Icon, title, desc, featured }, i) => (
        <div
          key={title}
          className={`relative rounded-lg sm:rounded-xl p-2.5 sm:p-3 border transition-colors ${
            featured
              ? "bg-primary/[0.14] border-primary/70 sm:col-span-2 lg:col-span-1 ring-1 ring-primary/40"
              : "bg-secondary/25 border-border/50 hover:border-primary/30"
          }`}
        >
          <div className="flex items-center justify-between mb-1.5 sm:mb-2">
            <Icon className={`${featured ? "w-4 h-4 sm:w-5 sm:h-5" : "w-3.5 h-3.5 sm:w-4 sm:h-4"} text-primary`} strokeWidth={1.9} />
            {featured ? (
              <span className="text-[7px] sm:text-[9px] font-mono tracking-[0.16em] sm:tracking-[0.2em] uppercase text-primary bg-primary/20 border border-primary/40 px-1.5 sm:px-2 py-0.5 rounded-full">
                Fingertipps Flagship
              </span>
            ) : (
              <span className="text-[8px] sm:text-[9px] font-mono text-muted-foreground/50 tracking-widest">
                {String(i + 1).padStart(2, "0")}
              </span>
            )}
          </div>
          <h3
            className={`${featured ? "text-xs sm:text-base" : "text-[11px] sm:text-sm"} font-bold text-foreground leading-tight`}
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <p className={`${featured ? "text-[10px] sm:text-xs text-foreground/90" : "text-[9px] sm:text-[11px] text-muted-foreground"} leading-snug mt-0.5`}>
            {desc}
          </p>
          {featured && (
            <p className="mt-1.5 text-[9px] sm:text-[11px] text-primary font-medium hidden sm:block">
              AI operations and sales agent powering the full commerce workflow.
            </p>
          )}
        </div>
      ))}
    </motion.div>
  </SlideContent>
);

export default Slide6;
