import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function getRouteFromUrl(url: URL): string | undefined {
  const [, lang, ...rest] = url.pathname.split('/');
  if (lang in ui) {
    if (rest.length === 0) return '/';
    return `/${rest.join('/')}`;
  }
  return url.pathname;
}

export function localizePath(path: string, lang: string): string {
  if (path.startsWith('http') || path.startsWith('mailto:') || path.startsWith('tel:')) {
    return path;
  }
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `/${lang}/${cleanPath}`;
}
