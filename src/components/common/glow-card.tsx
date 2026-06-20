import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'blue' | 'cyan' | 'purple' | 'magenta';
  onClick?: () => void;
}

export const GlowCard: React.FC<GlowCardProps> = ({
  children,
  className,
  glowColor = 'blue',
  onClick,
}) => {
  const glowColorsMap = {
    blue: 'group-hover:shadow-[0_0_25px_rgba(37,99,235,0.25)] group-hover:border-accent-blue/40 border-accent-blue/10',
    cyan: 'group-hover:shadow-[0_0_25px_rgba(6,182,212,0.25)] group-hover:border-accent-cyan/40 border-accent-cyan/10',
    purple: 'group-hover:shadow-[0_0_25px_rgba(124,58,237,0.25)] group-hover:border-accent-purple/40 border-accent-purple/10',
    magenta: 'group-hover:shadow-[0_0_25px_rgba(217,70,239,0.25)] group-hover:border-accent-magenta/40 border-accent-magenta/10',
  };

  const bgGlowMap = {
    blue: 'bg-accent-blue/5',
    cyan: 'bg-accent-cyan/5',
    purple: 'bg-accent-purple/5',
    magenta: 'bg-accent-magenta/5',
  };

  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      onClick={onClick}
      className={cn(
        'group relative overflow-hidden rounded-2xl border bg-background-card p-6 backdrop-blur-md transition-all duration-300',
        glowColorsMap[glowColor],
        onClick ? 'cursor-pointer' : '',
        className
      )}
    >
      {/* Background Radial Glow on Hover */}
      <div 
        className={cn(
          "absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none -z-10 blur-xl",
          bgGlowMap[glowColor]
        )}
      />

      {/* Decorative Border Corner Highlights */}
      <div className="absolute top-0 left-0 w-8 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-white/30 transition-all duration-500" />
      <div className="absolute top-0 left-0 w-[1px] h-8 bg-gradient-to-b from-transparent via-white/10 to-transparent group-hover:via-white/30 transition-all duration-500" />

      {children}
    </motion.div>
  );
};
export default GlowCard;
