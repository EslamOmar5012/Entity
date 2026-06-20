import { useState, useEffect } from 'react';

export function useScrollSpy(sectionIds: string[], offset: number = 100): string {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      // Find the section that is currently at the top of the viewport
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          if (scrollPosition >= el.offsetTop) {
            setActiveId(id);
            return;
          }
        }
      }
      
      // Default to first section if scroll is at top
      if (sectionIds.length > 0) {
        setActiveId(sectionIds[0]);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Run once on mount
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return activeId;
}
export default useScrollSpy;
