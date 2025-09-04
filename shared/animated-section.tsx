"use client";
import * as motion from "motion/react-client";

type Props = {
  children: React.ReactNode;
  id: string;
};

export const AnimatedSection = ({ children, id }: Props) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="pt-20 md:pt-32"
    >
      {children}
    </motion.section>
  );
};
