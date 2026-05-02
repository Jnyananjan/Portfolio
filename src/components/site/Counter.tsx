import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";

interface CounterProps {
  value: number;
  duration?: number;
  prefix?: string;
}

export function Counter({ value, duration = 2, prefix = "+" }: CounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState("00");

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(count, value, {
      duration: duration,
      ease: "easeOut",
    });

    return controls.stop;
  }, [count, value, duration, isInView]);

  useEffect(() => {
    return rounded.on("change", (latest) => {
      setDisplayValue(latest.toString().padStart(2, "0"));
    });
  }, [rounded]);

  return (
    <motion.span ref={ref}>
      {prefix}{displayValue}
    </motion.span>
  );
}
