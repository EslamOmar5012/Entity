export const transitionFast = { duration: 0.2, ease: 'easeOut' };
export const transitionNormal = { duration: 0.4, ease: 'easeInOut' };
export const transitionSlow = { duration: 0.8, ease: [0.16, 1, 0.3, 1] }; // Custom cubic-bezier for high-end slide-reveal

export const hoverScale = { scale: 1.02 };
export const hoverScaleLg = { scale: 1.05 };

export const staggerChildren = (delay: number = 0.1) => ({
  animate: {
    transition: {
      staggerChildren: delay,
    },
  },
});
export const glowPulseAnimation = {
  animate: {
    boxShadow: [
      '0 0 10px rgba(59, 130, 246, 0.2)',
      '0 0 25px rgba(6, 182, 212, 0.5)',
      '0 0 10px rgba(59, 130, 246, 0.2)'
    ],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};
export const subtleFloatAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};
