"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AchievementCardProps {
  title: string;
  content: string;
  classname?: string;
}

export default function AchievementCard({
  title,
  content,
  classname,
}: AchievementCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      whileHover={{ scale: 1.015 }}
      className={`relative w-full py-4 bg-dark-700 md:bg-shade-700/10 rounded-lg md:rounded-xl flex flex-col items-center text-center gap-[10px] md:backdrop-blur-[10px] md:border md:border-primary-500/20 ${classname}`}
    >
      <div className="font-medium text-shade-600 uppercase leading-[150%] lg:text-sm lg:mb-4">
        {title}
      </div>
      <div className="font-semibold text-[40px] text-primary-800">
        {content}
      </div>
    </motion.div>
  );
}
