import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import SlideContent, { staggerItem } from "../SlideContent";

const competitors = [
  { name: "Fingertipps", store: true, marketing: true, ai: true, affiliate: true, affordable: true },
  { name: "Shopify", store: true, marketing: true, ai: false, affiliate: false, affordable: false },
  { name: "Flutterwave Store", store: false, marketing: false, ai: false, affiliate: false, affordable: true },
  { name: "Selar", store: false, marketing: false, ai: false, affiliate: true, affordable: true },
  { name: "Bumpa", store: false, marketing: false, ai: false, affiliate: false, affordable: true },
];

const cols = ["Customization", "Marketing", "AI", "Affiliates", "Affordable"];
const keys = ["store", "marketing", "ai", "affiliate", "affordable"] as const;

const Slide14 = () => (
  <SlideContent>
    <motion.p variants={staggerItem} className="text-sm sm:text-base md:text-lg font-bold tracking-[0.2em] uppercase text-primary mb-4">
      Competitive Landscape
    </motion.p>
    <motion.h2 variants={staggerItem} className="text-4xl sm:text-5xl md:text-6xl font-black text-foreground text-center leading-[1.05]">
      Fingertipps vs. <span className="text-muted-foreground">The Rest</span>
    </motion.h2>

    <motion.div variants={staggerItem} className="mt-8 w-full max-w-5xl overflow-x-auto rounded-2xl border border-border">
      <table className="w-full text-sm min-w-[600px]">
        <thead className="bg-secondary/50">
          <tr>
            <th className="text-left py-3 px-4 text-muted-foreground font-bold text-xs uppercase tracking-wider">Platform</th>
            {cols.map((c) => (
              <th key={c} className="text-center py-3 px-2 text-muted-foreground font-bold text-[10px] sm:text-xs uppercase tracking-wider">{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {competitors.map((comp) => (
            <tr
              key={comp.name}
              className={`border-t border-border ${comp.name === "Fingertipps" ? "bg-primary/15" : "hover:bg-secondary/20"}`}
            >
              <td className={`py-3.5 px-4 font-bold text-sm ${comp.name === "Fingertipps" ? "text-primary" : "text-foreground"}`}>
                {comp.name}
              </td>
              {keys.map((k) => (
                <td key={k} className="text-center py-3.5 px-2">
                  {comp[k] ? (
                    <Check className="w-4 h-4 text-primary mx-auto" strokeWidth={3} />
                  ) : (
                    <X className="w-4 h-4 text-muted-foreground/40 mx-auto" />
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>

    <motion.p variants={staggerItem} className="mt-6 text-sm sm:text-base font-semibold text-primary text-center">
      The only platform that does it all — affordably.
    </motion.p>
  </SlideContent>
);

export default Slide14;
