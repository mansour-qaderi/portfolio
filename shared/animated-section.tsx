"use client";
import * as motion from "motion/react-client";
import { useReducedMotion } from "motion/react";

type Props = {
  children: React.ReactNode;
  id: string;
  className?: string;
};

export const AnimatedSection = ({ children, id, className }: Props) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.15 }}
      className={`scroll-mt-14 py-24 md:py-32 ${className ?? ""}`}
    >
      {children}
    </motion.section>
  );
};
