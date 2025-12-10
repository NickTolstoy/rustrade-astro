import ru from './ru.json';
import en from './en.json';

export type Lang = 'ru' | 'en';

const translations: Record<Lang, typeof ru> = { ru, en };

/**
 * Get translation by key path (e.g., 'nav.home', 'forms.submit')
 */
export function t(key: string, lang: Lang = 'ru'): string {
  const keys = key.split('.');
  let result: unknown = translations[lang];
  
  for (const k of keys) {
    if (result && typeof result === 'object' && k in result) {
      result = (result as Record<string, unknown>)[k];
    } else {
      // Fallback to Russian if key not found
      result = translations.ru;
      for (const fallbackKey of keys) {
        if (result && typeof result === 'object' && fallbackKey in result) {
          result = (result as Record<string, unknown>)[fallbackKey];
        } else {
          return key; // Return key if not found
        }
      }
      break;
    }
  }
  
  return typeof result === 'string' ? result : key;
}

/**
 * Get all translations for a language
 */
export function getTranslations(lang: Lang) {
  return translations[lang];
}

/**
 * Get available languages
 */
export const languages: Lang[] = ['ru', 'en'];

/**
 * Default language
 */
export const defaultLang: Lang = 'ru';

/**
 * Language labels for display
 */
export const langLabels: Record<Lang, string> = {
  ru: 'RU',
  en: 'EN'
};

/**
 * URL helpers:
 * - Russian: / (root)
 * - English: /eng/
 */

/**
 * Get base URL for language
 */
export function getBaseUrl(lang: Lang): string {
  return lang === 'en' ? '/eng' : '';
}

/**
 * Get URL for a specific page
 */
export function getPageUrl(lang: Lang, page: string): string {
  const base = getBaseUrl(lang);
  if (page === '' || page === '/') {
    return base || '/';
  }
  return `${base}/${page}`;
}

/**
 * Parse URL to get lang
 */
export function parseUrl(pathname: string): { lang: Lang } {
  const parts = pathname.split('/').filter(Boolean);
  
  if (parts[0] === 'eng') {
    return { lang: 'en' };
  }
  
  return { lang: 'ru' };
}

/**
 * Generate alternate URL for language switch
 */
export function getAlternateUrl(currentPath: string, targetLang: Lang): string {
  const { lang: currentLang } = parseUrl(currentPath);
  
  // Get the page part (everything after lang prefix)
  let pagePart = currentPath;
  
  if (currentLang === 'en') {
    pagePart = pagePart.replace(/^\/eng\/?/, '/');
  }
  
  // Build new URL
  if (targetLang === 'en') {
    return `/eng${pagePart === '/' ? '' : pagePart}`;
  }
  
  // Russian - root
  return pagePart || '/';
}
