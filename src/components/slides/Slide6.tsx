import { motion } from "framer-motion";
import { Globe, Boxes, Receipt, Users, Megaphone, Bot, LineChart } from "lucide-react";
import SlideContent, { staggerItem } from "../SlideContent";

const products = [
  { icon: Globe, title: "Website Builder", desc: "Launch a branded online store in minutes", featured: false },
  { icon: Boxes, title: "Inventory Automation", desc: "Stock updates with every sale", featured: false },
  { icon: Receipt, title: "Invoice Payments", desc: "Send invoices with one-click pay links", featured: false },
  { icon: Users, title: "Affiliate Engine", desc: "Turn customers into sales partners", featured: false },
  { icon: Megaphone, title: "Marketing Campaigns", desc: "Send targeted email campaigns", featured: false },
  { icon: Bot, title: "AI Agent — Lira", desc: "AI that talks to customers & recommends products", featured: true },
  { icon: LineChart, title: "Business Analytics", desc: "Understand sales performance & growth", featured: false },
];

const Slide6 = () => (
  <SlideContent>
    <motion.p variants={staggerItem} className="text-sm sm:text-base md:text-lg font-bold tracking-[0.2em] uppercase text-primary mb-4">
      Product Demo
    </motion.p>
    <motion.h2 variants={staggerItem} className="text-4xl sm:text-5xl md:text-7xl font-black text-foreground text-center leading-[1.05]">
      The Full <span className="text-primary">Commerce Stack</span>
    </motion.h2>

    <motion.div variants={staggerItem} className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl w-full">
      {products.map(({ icon: Icon, title, desc, featured }) => (
        <div
          key={title}
          className={`rounded-2xl p-5 border transition-all hover:-translate-y-0.5 ${
            featured
              ? "bg-gradient-to-br from-primary/20 to-primary/5 border-primary/40"
              : "bg-secondary/40 border-border hover:border-primary/30"
          }`}
        >
          <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-3 ${
            featured ? "bg-primary/30 border border-primary/50" : "bg-primary/15 border border-primary/30"
          }`}>
            <Icon className="w-5 h-5 text-primary" />
          </div>
          <h3 className="text-base font-bold text-foreground mb-1">{title}</h3>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{desc}</p>
        </div>
      ))}
    </motion.div>
  </SlideContent>
);

export default Slide6;
