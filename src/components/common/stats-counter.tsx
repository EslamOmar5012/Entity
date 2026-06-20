import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

interface StatsCounterProps {
  value: string;
  label: string;
}

export const StatsCounter: React.FC<StatsCounterProps> = ({ value, label }) => {
  const [displayValue, setDisplayValue] = useState('0');
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    // Parse the numerical portion of the value
    const numericMatch = value.match(/\d+/);
    if (!numericMatch) {
      setDisplayValue(value);
      return;
    }

    const targetNum = parseInt(numericMatch[0], 10);
    const suffix = value.replace(numericMatch[0], ''); // e.g. '+' or '%'
    const prefix = value.split(numericMatch[0])[0] || '';

    let start = 0;
    const duration = 2000; // 2 seconds
    const stepTime = Math.max(Math.floor(duration / targetNum), 20);

    const timer = setInterval(() => {
      start += Math.ceil(targetNum / 35); // incremental step
      if (start >= targetNum) {
        clearInterval(timer);
        setDisplayValue(value);
      } else {
        setDisplayValue(`${prefix}${start}${suffix}`);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center p-6 rounded-2xl bg-background-tertiary/40 border border-border-glow/50 backdrop-blur-sm relative group overflow-hidden">
      {/* Decorative vertical glow line */}
      <div className="absolute left-0 top-1/4 bottom-1/4 w-[2px] bg-gradient-to-b from-accent-blue via-accent-cyan to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
      
      <div className="text-4xl md:text-5xl font-black text-text-cyan text-glow-cyan mb-2">
        {displayValue}
      </div>
      <div className="text-sm font-semibold text-text-secondary tracking-wider uppercase">
        {label}
      </div>
    </div>
  );
};
export default StatsCounter;
