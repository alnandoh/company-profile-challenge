"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

interface CardProps {
  className?: string;
  children: JSX.Element | ReactNode;
}

export default function Card({ className, children }: CardProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      whileHover={{ scale: 1.015 }}
      className={`${className} p-6 bg-dark-700 rounded-xl flex flex-col gap-5 md:p-14 relative`}
      ref={ref}
    >
      <div className="absolute inset-0 rounded-xl shadow-sm shadow-primary-600/30 -z-[1]"></div>
      {children}
    </motion.div>
  );
}
