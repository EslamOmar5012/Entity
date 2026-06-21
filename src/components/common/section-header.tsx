import React from 'react';
import { motion } from 'framer-motion';
import { SectionBadge } from './section-badge';
import { useSectionAnimation } from '../../hooks/use-section-animation';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  badge?: string;
  align?: 'center' | 'left' | 'right';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  badge,
  align = 'center',
}) => {
  const { fadeInUp } = useSectionAnimation();

  const alignmentClasses = {
    center: 'items-center text-center',
    left: 'items-start text-left',
    right: 'items-end text-right',
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={fadeInUp}
      className={`flex flex-col mb-12 md:mb-16 max-w-3xl mx-auto ${alignmentClasses[align]}`}
    >
      {badge && <SectionBadge text={badge} />}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-text-heading">
        {title}
      </h2>
      <div className="w-20 h-[3px] rounded-full bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-purple mb-4" />
      <p className="text-base md:text-lg text-text-secondary font-medium max-w-2xl leading-relaxed">
        {subtitle}
      </p>
    </motion.div>
  );
};
export default SectionHeader;
