import { motion } from "framer-motion";
import SlideContent, { staggerItem } from "../SlideContent";

const plans = [
  { name: "Starter", price: "$49/mo", features: ["AI Store Builder", "Up to 100 products", "Basic analytics", "Email support"] },
  { name: "Growth", price: "$149/mo", features: ["Everything in Starter", "Unlimited products", "Auto Marketing", "Priority support"], highlighted: true },
  { name: "Enterprise", price: "Custom", features: ["Everything in Growth", "Dedicated AI models", "Custom integrations", "24/7 account manager"] },
];

const Slide6 = () => (
  <SlideContent>
    <motion.p variants={staggerItem} className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">
      Pricing
    </motion.p>
    <motion.h2 variants={staggerItem} className="text-5xl md:text-7xl font-bold text-foreground text-center">
      Simple, Scalable Pricing
    </motion.h2>
    <motion.div variants={staggerItem} className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">
      {plans.map((plan) => (
        <div
          key={plan.name}
          className={`rounded-2xl p-6 border flex flex-col ${
            plan.highlighted
              ? "border-primary bg-primary/10 shadow-lg shadow-primary/20"
              : "border-border bg-secondary/30"
          }`}
        >
          <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
          <p className="text-3xl font-black text-primary mt-2">{plan.price}</p>
          <ul className="mt-5 flex flex-col gap-2 flex-1">
            {plan.features.map((f) => (
              <li key={f} className="text-sm text-muted-foreground flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </motion.div>
  </SlideContent>
);

export default Slide6;
