import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface CtaButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'glow-cyan' | 'glow-purple';
  href?: string;
  target?: string;
}

export const CtaButton: React.FC<CtaButtonProps> = ({
  children,
  className,
  variant = 'primary',
  href,
  target,
  ...props
}) => {
  const baseClasses = 'relative px-6 py-3 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 overflow-hidden flex items-center justify-center gap-2 group';

  const variantClasses = {
    primary: 'bg-accent-blue text-white shadow-glow-blue border border-accent-blue/50 hover:bg-accent-blue/90',
    secondary: 'bg-transparent text-text-primary border border-text-secondary/30 hover:border-accent-blue/50 hover:bg-accent-blue/5',
    'glow-cyan': 'bg-accent-cyan/10 text-accent-cyan shadow-[0_0_15px_rgba(6,182,212,0.15)] border border-accent-cyan/30 hover:bg-accent-cyan/20',
    'glow-purple': 'bg-accent-purple/10 text-accent-purple shadow-[0_0_15px_rgba(124,58,237,0.15)] border border-accent-purple/30 hover:bg-accent-purple/20',
  };

  const buttonElement = (
    <motion.button 
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseClasses, variantClasses[variant], className)} 
      {...props as any}
    >
      {/* Laser Light Overlay on Hover */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
      {children}
    </motion.button>
  );

  if (href) {
    return (
      <a 
        href={href} 
        target={target} 
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className="inline-block"
      >
        {buttonElement}
      </a>
    );
  }

  return buttonElement;
};
export default CtaButton;
