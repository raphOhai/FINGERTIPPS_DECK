import { motion } from "framer-motion";
import { GraduationCap, Share2, Send } from "lucide-react";
import SlideContent, { staggerItem, Eyebrow } from "../SlideContent";

const loops = [
  {
    icon: GraduationCap,
    title: "Campus Expansion",
    desc: "Universities are dense clusters of student entrepreneurs &mdash; perfect first-customer beachheads.",
  },
  {
    icon: Share2,
    title: "Affiliate Distribution",
    desc: "Creators earn commissions promoting Fingertipps. Built-in incentive to grow with us.",
  },
  {
    icon: Send,
    title: "Direct Outreach",
    desc: "High-intent vendors on Instagram and WhatsApp converted via personalized outreach.",
  },
];

const Slide9 = () => (
  <SlideContent>
    <Eyebrow index="09">Go-to-Market</Eyebrow>

    <motion.h2
      variants={staggerItem}
      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-foreground text-center leading-[0.95] tracking-tight"
    >
      Three <span className="text-primary">growth loops.</span>
    </motion.h2>

    <motion.div
      variants={staggerItem}
      className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 max-w-5xl w-full"
    >
      {loops.map(({ icon: Icon, title, desc }, i) => (
        <div
          key={i}
          className="relative bg-secondary/25 rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-border/50 hover:border-primary/40 transition-colors"
        >
          <div className="flex items-start justify-between mb-5 sm:mb-6">
            <span className="text-4xl sm:text-5xl md:text-6xl font-black text-primary tracking-tight leading-none">
              {String(i + 1).padStart(2, "0")}
            </span>
            <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground mt-2" strokeWidth={1.5} />
          </div>
          <div className="my-4 h-px bg-border/60" />
          <h3 className="text-base sm:text-lg font-bold text-foreground">{title}</h3>
          <p
            className="text-xs sm:text-sm text-muted-foreground leading-relaxed mt-1.5 sm:mt-2"
            dangerouslySetInnerHTML={{ __html: desc }}
          />
        </div>
      ))}
    </motion.div>

    <motion.p
      variants={staggerItem}
      className="mt-6 sm:mt-8 text-sm sm:text-base text-foreground text-center max-w-3xl px-2"
    >
      A path to <span className="text-primary font-semibold">50,000+</span> businesses.
    </motion.p>
  </SlideContent>
);

export default Slide9;
