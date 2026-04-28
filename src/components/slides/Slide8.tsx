import { motion } from "framer-motion";
import { Smartphone, CreditCard, Cpu } from "lucide-react";
import SlideContent, { staggerItem, Eyebrow } from "../SlideContent";

const trends = [
  {
    icon: Smartphone,
    title: "Social Commerce",
    stat: "64%",
    statLabel: "of small businesses sell on social",
    desc: "Most African vendors already operate on Instagram, TikTok, and WhatsApp.",
    source: {
      label: "Moniepoint, 2026",
      url: "https://moniepoint.com/blog/nigeria-small-business-statistics",
    },
  },
  {
    icon: CreditCard,
    title: "Digital Payments",
    stat: "57.7M",
    statLabel: "Nigerians are in the financial inclusion bracket (52% of adults)",
    desc: "NIP volumes grew from 2B (2020) to 11B (2024), a 53% CAGR. Transaction value grew from $457B to $1.1T, a 27% CAGR.",
    source: {
      label: "SIIPS 2025 / NIP Nigeria Case Study",
      url: "https://www.africanenda.org/uploads/files/siips2025/siips_2025_NIP-Nigeria_CaseStudy_en.pdf",
    },
  },
  {
    icon: Cpu,
    title: "AI Adoption",
    stat: "AI Boom",
    statLabel: "Now is the inflection point",
    desc: "SMBs are starting to adopt AI tools to automate operations and sales &mdash; the platforms that bake it in win.",
    source: null,
  },
];

const Slide8 = () => (
  <SlideContent>
    <Eyebrow index="04">Why Now</Eyebrow>

    <motion.h2
      variants={staggerItem}
      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-foreground text-center leading-[0.95] tracking-tight"
    >
      Three trends,
      <br />
      <span className="text-primary">converging.</span>
    </motion.h2>

    <motion.div
      variants={staggerItem}
      className="mt-5 sm:mt-6 grid grid-cols-1 md:grid-cols-3 gap-2.5 sm:gap-3 max-w-5xl w-full"
    >
      {trends.map(({ icon: Icon, title, stat, statLabel, desc, source }, i) => (
        <div
          key={title}
          className="bg-secondary/25 rounded-xl sm:rounded-2xl p-3.5 sm:p-4 md:p-4.5 border border-border/50 flex flex-col"
        >
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <span className="text-[8px] sm:text-[9px] font-mono tracking-[0.22em] text-primary">
              {String(i + 1).padStart(2, "0")}
            </span>
            <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-muted-foreground" strokeWidth={1.5} />
          </div>

          <p className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground tracking-tight leading-none">
            {stat}
          </p>
          <p className="text-[10px] sm:text-[11px] text-muted-foreground mt-1 sm:mt-1.5">{statLabel}</p>

          <div className="my-2.5 sm:my-3 h-px bg-border/60" />

          <h3 className="text-xs sm:text-sm font-bold text-foreground">{title}</h3>
          <p
            className="text-[10px] sm:text-[11px] md:text-xs text-muted-foreground mt-1 leading-snug flex-1"
            dangerouslySetInnerHTML={{ __html: desc }}
          />
          {source && (
            <p className="mt-2.5 sm:mt-3 text-[8px] sm:text-[9px] font-mono uppercase tracking-[0.16em] text-muted-foreground/60">
              Source &middot;{" "}
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-primary transition-colors"
              >
                {source.label}
              </a>
            </p>
          )}
        </div>
      ))}
    </motion.div>

    <motion.p
      variants={staggerItem}
      className="mt-4 sm:mt-5 text-xs sm:text-sm text-foreground text-center max-w-3xl px-2"
    >
      Fingertipps sits at the intersection of all three.
    </motion.p>
  </SlideContent>
);

export default Slide8;
