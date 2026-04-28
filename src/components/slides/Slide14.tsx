import { motion } from "framer-motion";
import { Check, Minus } from "lucide-react";
import SlideContent, { staggerItem, Eyebrow } from "../SlideContent";

type Row = {
  name: string;
  customization: boolean;
  marketing: boolean;
  ai: boolean;
  affiliate: boolean;
  pricing: boolean;
};

const competitors: Row[] = [
  { name: "Fingertipps",       customization: true,  marketing: true,  ai: true,  affiliate: true,  pricing: true  },
  { name: "Shopify",           customization: true,  marketing: true,  ai: false, affiliate: false, pricing: false },
  { name: "Flutterwave Store", customization: false, marketing: false, ai: false, affiliate: false, pricing: true  },
  { name: "Selar",             customization: false, marketing: false, ai: false, affiliate: true,  pricing: true  },
  { name: "Bumpa",             customization: false, marketing: false, ai: false, affiliate: false, pricing: true  },
];

const cols = [
  { key: "customization", label: "Customizability" },
  { key: "marketing", label: "Marketing" },
  { key: "ai", label: "AI Agent" },
  { key: "affiliate", label: "Affiliate" },
  { key: "pricing", label: "Naira Pricing" },
] as const;

const Slide14 = () => (
  <SlideContent>
    <Eyebrow index="11">Competition</Eyebrow>

    <motion.h2
      variants={staggerItem}
      className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-foreground text-center leading-[0.95] tracking-tight"
    >
      Fingertipps vs.{" "}
      <span className="text-muted-foreground/60">the rest.</span>
    </motion.h2>

    <motion.p
      variants={staggerItem}
      className="mt-2 max-w-3xl text-center text-[10px] sm:text-xs text-muted-foreground leading-relaxed px-2"
    >
      Global platforms are built for global merchants. Local platforms are
      single-purpose. Fingertipps is{" "}
      <span className="text-foreground font-semibold">AI-native</span> and{" "}
      <span className="text-foreground font-semibold">Africa-native</span>.
    </motion.p>

    <motion.div
      variants={staggerItem}
      className="mt-3 sm:mt-4 w-full max-w-5xl rounded-xl sm:rounded-2xl border border-border/60 overflow-hidden"
    >
      <div className="overflow-x-auto">
        <table className="w-full text-[10px] sm:text-xs min-w-[560px]">
          <thead>
            <tr className="border-b border-border/60">
              <th className="text-left py-1.5 sm:py-2 px-2 sm:px-3 text-[8px] sm:text-[9px] font-mono tracking-[0.18em] sm:tracking-[0.22em] uppercase text-muted-foreground/80">
                Platform
              </th>
              {cols.map((c) => (
                <th
                  key={c.key}
                  className="text-center py-1.5 sm:py-2 px-0.5 sm:px-1 text-[8px] sm:text-[9px] font-mono tracking-[0.08em] sm:tracking-[0.14em] uppercase text-muted-foreground/80 whitespace-nowrap"
                >
                  {c.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {competitors.map((comp) => {
              const isUs = comp.name === "Fingertipps";
              return (
                <tr
                  key={comp.name}
                  className={`border-t border-border/40 ${isUs ? "bg-primary/[0.06]" : ""}`}
                >
                  <td className="py-1.5 sm:py-2 px-2 sm:px-3">
                    <div className="flex items-center gap-2 sm:gap-3">
                      {isUs && <span className="w-1 h-3.5 sm:h-4 bg-primary rounded-full" />}
                      <span
                        className={`font-bold text-[10px] sm:text-xs ${
                          isUs ? "text-primary" : "text-foreground"
                        }`}
                      >
                        {comp.name}
                      </span>
                    </div>
                  </td>
                  {cols.map((c) => (
                    <td key={c.key} className="text-center py-1.5 sm:py-2 px-0.5 sm:px-1">
                      {comp[c.key] ? (
                        <Check
                          className={`w-3 h-3 sm:w-3.5 sm:h-3.5 mx-auto ${
                            isUs ? "text-primary" : "text-foreground/80"
                          }`}
                          strokeWidth={2.5}
                        />
                      ) : (
                        <Minus
                          className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-muted-foreground/30 mx-auto"
                          strokeWidth={2}
                        />
                      )}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </motion.div>

    <motion.p
      variants={staggerItem}
      className="mt-2.5 sm:mt-3 text-[10px] sm:text-xs text-foreground text-center px-2"
    >
      The only platform built{" "}
      <span className="text-primary font-semibold">AI-first</span>, for{" "}
      <span className="text-primary font-semibold">African SMBs</span>.
    </motion.p>
  </SlideContent>
);

export default Slide14;
