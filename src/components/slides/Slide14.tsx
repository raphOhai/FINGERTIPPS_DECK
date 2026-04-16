import { motion } from "framer-motion";
import SlideContent, { staggerItem } from "../SlideContent";

const competitors = [
  { name: "Shopify", store: true, inventory: false, invoices: false, affiliate: false, marketing: false, ai: false, affordable: false },
  { name: "Flutterwave Store", store: true, inventory: false, invoices: true, affiliate: false, marketing: false, ai: false, affordable: true },
  { name: "Selar", store: true, inventory: false, invoices: false, affiliate: true, marketing: false, ai: false, affordable: true },
  { name: "Paystack Storefronts", store: true, inventory: false, invoices: false, affiliate: false, marketing: false, ai: false, affordable: true },
  { name: "Fingertipps", store: true, inventory: true, invoices: true, affiliate: true, marketing: true, ai: true, affordable: true },
];

const cols = ["Store", "Inventory", "Invoices", "Affiliate", "Marketing", "AI", "Affordable"];
const keys = ["store", "inventory", "invoices", "affiliate", "marketing", "ai", "affordable"] as const;

const Slide14 = () => (
  <SlideContent>
    <motion.p variants={staggerItem} className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">
      Competitive Landscape
    </motion.p>
    <motion.h2 variants={staggerItem} className="text-4xl md:text-5xl font-bold text-foreground text-center">
      Fingertipps vs. The Rest
    </motion.h2>
    <motion.div variants={staggerItem} className="mt-8 w-full max-w-4xl overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border">
            <th className="text-left py-3 px-3 text-muted-foreground font-medium">Platform</th>
            {cols.map((c) => (
              <th key={c} className="text-center py-3 px-2 text-muted-foreground font-medium text-xs">{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {competitors.map((comp) => (
            <tr
              key={comp.name}
              className={`border-b border-border ${comp.name === "Fingertipps" ? "bg-primary/10" : ""}`}
            >
              <td className={`py-3 px-3 font-semibold ${comp.name === "Fingertipps" ? "text-primary" : "text-foreground"}`}>
                {comp.name}
              </td>
              {keys.map((k) => (
                <td key={k} className="text-center py-3 px-2">
                  <span className={comp[k] ? "text-primary" : "text-muted-foreground/30"}>
                    {comp[k] ? "✓" : "✗"}
                  </span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  </SlideContent>
);

export default Slide14;
