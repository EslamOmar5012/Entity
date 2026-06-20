import React from 'react';
import { motion } from 'framer-motion';

interface SectionBadgeProps {
  text: string;
}

export const SectionBadge: React.FC<SectionBadgeProps> = ({ text }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-blue/30 bg-accent-blue/10 text-accent-cyan text-xs font-semibold tracking-wider uppercase mb-3 shadow-[0_0_10px_rgba(6,182,212,0.1)]"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" />
      {text}
    </motion.div>
  );
};
export default SectionBadge;
