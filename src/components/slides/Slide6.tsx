import { motion } from "framer-motion";
import SlideContent, { staggerItem } from "../SlideContent";
import aiImg from "@/assets/ai-automation.jpg";

const products = [
  { title: "Website Builder", desc: "Launch a branded online store in minutes" },
  { title: "Inventory Automation", desc: "Stock updates automatically with every sale" },
  { title: "Invoice Payments", desc: "Send invoices with one-click payment links" },
  { title: "Affiliate Engine", desc: "Turn customers into sales partners" },
  { title: "Marketing Campaigns", desc: "Send targeted email campaigns" },
  { title: "AI Agent — Lira", desc: "AI that talks to customers & recommends products" },
  { title: "Business Analytics", desc: "Understand sales performance & growth" },
];

const Slide6 = () => (
  <SlideContent>
    <motion.p variants={staggerItem} className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">
      Product Demo
    </motion.p>
    <motion.h2 variants={staggerItem} className="text-4xl md:text-6xl font-bold text-foreground text-center">
      The Full Commerce Stack
    </motion.h2>
    <motion.div variants={staggerItem} className="mt-8 flex flex-col md:flex-row items-start gap-8 max-w-5xl w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 flex-1">
        {products.map((p) => (
          <div key={p.title} className="bg-secondary/50 rounded-xl p-4 border border-border">
            <h3 className="text-sm font-bold text-primary mb-1">{p.title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
      <img src={aiImg} alt="Platform features" loading="lazy" className="w-56 h-56 rounded-2xl object-cover flex-shrink-0 hidden md:block" />
    </motion.div>
  </SlideContent>
);

export default Slide6;
