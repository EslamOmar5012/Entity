export type Language = 'en' | 'ar';

export interface LocalizedString {
  en: string;
  ar: string;
}

export function getLocalizedField<T extends Record<string, any>>(
  item: T,
  field: string,
  lang: Language
): string {
  const arField = `${field}_ar`;
  const enField = `${field}_en`;
  if (lang === 'ar' && arField in item) {
    return item[arField];
  }
  if (lang === 'en' && enField in item) {
    return item[enField];
  }
  return item[field] || '';
}
