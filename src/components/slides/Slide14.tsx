import { motion } from "framer-motion";
import { Megaphone, Code2, UserPlus, Building } from "lucide-react";
import SlideContent, { staggerItem, Eyebrow } from "../SlideContent";

const funds = [
  {
    pct: 40,
    label: "Marketing & Sales",
    points: [
      "Attract new customers and retain existing ones.",
      "Drive revenue growth through focused GTM execution.",
    ],
    icon: Megaphone,
  },
  {
    pct: 30,
    label: "Product Development",
    points: [
      "Further develop the product suite end-to-end.",
      "Keep offerings competitive and aligned with customer needs.",
    ],
    icon: Code2,
  },
  {
    pct: 20,
    label: "Strategic Hires",
    points: [
      "Hire key leaders including a CMO and compliance officer.",
      "Expand the core team to support long-term growth.",
    ],
    icon: UserPlus,
  },
  {
    pct: 10,
    label: "Operations & Legal",
    points: [
      "Strengthen operational infrastructure and controls.",
      "Cover legal, compliance, and governance requirements.",
    ],
    icon: Building,
  },
];

const Slide14 = () => (
  <SlideContent>
    <Eyebrow index="14">Use of Funds</Eyebrow>

    <motion.h2
      variants={staggerItem}
      className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-foreground text-center leading-[0.95] tracking-tight"
    >
      Where the <span className="text-primary">money goes.</span>
    </motion.h2>

    <motion.div
      variants={staggerItem}
      className="mt-3 sm:mt-4 max-w-4xl w-full overflow-hidden rounded-xl sm:rounded-2xl border border-border/60"
    >
      <div className="flex h-1.5 w-full">
        <div className="bg-primary" style={{ width: "40%" }} />
        <div className="bg-primary/70" style={{ width: "30%" }} />
        <div className="bg-primary/45" style={{ width: "20%" }} />
        <div className="bg-primary/25" style={{ width: "10%" }} />
      </div>

      <div className="grid grid-cols-2 gap-px bg-border/60">
        {funds.map(({ pct, label, points, icon: Icon }, i) => (
          <div key={label} className="bg-background p-2.5 sm:p-3.5 md:p-4">
            <div className="flex items-center justify-between mb-1.5 sm:mb-2">
              <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
                <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary flex-shrink-0" strokeWidth={1.5} />
                <span className="text-[7px] sm:text-[8px] font-mono tracking-[0.2em] uppercase text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <span className="text-xl sm:text-2xl md:text-3xl font-black text-foreground tracking-tight leading-none">
                {pct}%
              </span>
            </div>
            <h3 className="text-[11px] sm:text-xs md:text-sm font-bold text-foreground leading-snug">{label}</h3>
            <ul className="mt-0.5 sm:mt-1 flex flex-col gap-0.5 sm:gap-1">
              {points.map((point, idx) => (
                <li
                  key={point}
                  className={`flex items-start gap-1 text-[9px] sm:text-[10px] md:text-[11px] text-muted-foreground leading-snug ${idx > 0 ? "hidden sm:flex" : ""}`}
                >
                  <span className="mt-1 h-1 w-1 rounded-full bg-primary/70 flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>

    <motion.p
      variants={staggerItem}
      className="mt-2.5 sm:mt-4 text-[10px] sm:text-[11px] md:text-xs text-muted-foreground text-center max-w-2xl px-2 hidden sm:block"
    >
      Capital deployed where it produces the most leverage &mdash; growth,
      product, and the team.
    </motion.p>
  </SlideContent>
);

export default Slide14;
