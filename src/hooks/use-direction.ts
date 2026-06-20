import { useLanguage } from './use-language';

export function useDirection() {
  const { direction } = useLanguage();
  return {
    direction,
    isRtl: direction === 'rtl',
    isLtr: direction === 'ltr',
  };
}
export default useDirection;
