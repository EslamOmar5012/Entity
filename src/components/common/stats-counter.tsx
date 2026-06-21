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

    const numericMatch = value.match(/\d+/);
    if (!numericMatch) {
      setDisplayValue(value);
      return;
    }

    const targetNum = parseInt(numericMatch[0], 10);
    const suffix = value.replace(numericMatch[0], ''); // e.g. '+' or '%'
    const prefix = value.split(numericMatch[0])[0] || '';

    let start = 0;
    const duration = 1800; // 1.8 seconds
    const stepTime = Math.max(Math.floor(duration / targetNum), 15);

    const timer = setInterval(() => {
      start += Math.ceil(targetNum / 25); // incremental step
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
    <div 
      ref={ref} 
      className="text-center p-4 bg-transparent border-none"
    >
      {/* Display Value (Serif Font) */}
      <div className="text-4xl md:text-5.5xl font-black text-text-heading font-serif mb-2 leading-none">
        {displayValue}
      </div>
      {/* Label (Sans Font) */}
      <div className="text-[10px] md:text-xs font-bold text-text-secondary tracking-widest uppercase select-none leading-relaxed">
        {label}
      </div>
    </div>
  );
};
export default StatsCounter;
