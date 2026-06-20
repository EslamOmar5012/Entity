import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import { useLanguage } from '../../hooks/use-language';
import { useDirection } from '../../hooks/use-direction';

interface WhatsappFloatProps {
  phone?: string;
  message?: string;
}

export const WhatsappFloat: React.FC<WhatsappFloatProps> = ({
  phone = '201000000000',
  message = 'Hello ENTITY, I would like to inquire about your smart solutions.'
}) => {
  const { t } = useLanguage();
  const { isRtl } = useDirection();
  const [showTooltip, setShowTooltip] = React.useState(false);

  const encodedMsg = encodeURIComponent(message);
  const waUrl = `https://wa.me/${phone}?text=${encodedMsg}`;

  return (
    <div 
      className={`fixed bottom-6 z-50 ${isRtl ? 'left-6' : 'right-6'}`}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className={`absolute bottom-16 bg-background-tertiary text-text-primary px-4 py-2 rounded-xl border border-accent-cyan/30 shadow-glow-cyan text-xs font-semibold whitespace-nowrap backdrop-blur-md z-50 ${
              isRtl ? 'left-0 origin-bottom-left' : 'right-0 origin-bottom-right'
            }`}
          >
            {t('whatsappFloatTooltip')}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact ENTITY on WhatsApp"
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        whileHover={{ scale: 1.1, rotate: 8 }}
        whileTap={{ scale: 0.9 }}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-green-500 to-emerald-400 text-white shadow-lg hover:shadow-green-500/50 transition-shadow duration-300"
      >
        {/* Customized SVG/Lucide to look futuristic and clean */}
        <MessageSquare className="w-7 h-7 animate-pulse" />
        
        {/* Glow Halo */}
        <div className="absolute inset-0 rounded-full bg-green-500/20 animate-ping -z-10" />
      </motion.a>
    </div>
  );
};
export default WhatsappFloat;
