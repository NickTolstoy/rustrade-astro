import type { Lang } from '@/i18n';
import { t, getBaseUrl } from '@/i18n';

export interface NavItem {
  name: string;
  href: string;
  icon?: string;
  dropdown?: NavItem[];
}

// Icon definitions for dropdown items
export const dropdownIcons = {
  // Home icon
  home: '<g class="icon-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></g>',
  
  // Components icons
  blades: '<path class="icon-blades" d="M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z" /><circle cx="12" cy="12" r="2" />',
  oilCoolers: '<g class="icon-cooler"><rect x="2" y="3" width="20" height="18" rx="2" /><path d="M6 3v18M10 3v18M14 3v18M18 3v18" /></g>',
  condensers: '<g class="icon-condenser"><path d="M5 6v12a7 3 0 0 0 14 0V6" /><ellipse cx="12" cy="6" rx="7" ry="3" /><circle cx="9" cy="10" r="1" /><circle cx="12" cy="10" r="1" /><circle cx="15" cy="10" r="1" /><circle cx="9" cy="14" r="1" /><circle cx="12" cy="14" r="1" /><circle cx="15" cy="14" r="1" /></g>',
  
  // About icons
  about: '<g class="icon-about-sub"><circle cx="12" cy="7" r="4"/><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/></g>',
  cases: '<path class="icon-case" d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>',
  news: '<g class="icon-news"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8M15 18h-5M10 6h8v4h-8z"/></g>',
  cooperation: '<g class="icon-cooperation"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></g>',
  contacts: '<path class="icon-contact" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
  faq: '<g class="icon-faq"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M12 17h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></g>',
  presentation: '<g class="icon-presentation"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline class="icon-presentation-arrow" points="7 10 12 15 17 10"/><line class="icon-presentation-arrow" x1="12" y1="15" x2="12" y2="3"/></g>',
  
  // Top level icons
  design: '<path class="icon-line" d="M2 20h20"/><path class="icon-pen" d="M15.5 3.5a2.121 2.121 0 0 1 3 3L7 18l-4 1 1-4L15.5 3.5z"/>',
  turbines: '<path class="icon-fan" d="M12 12c0-3 2.5-5 5-5 2.5 0 5 1.5 5 5s-2.5 5-5 5c-2.5 0-5-2-5-5zm0 0c0 3-2.5 5-5 5-2.5 0-5-1.5-5-5s2.5-5 5-5c2.5 0 5 2 5 5zm0 0c3 0 5-2.5 5-5 0-2.5-1.5-5-5-5-3 0-5 2.5-5 5 0 2.5 2 5 5 5zm0 0c-3 0-5 2.5-5 5 0 2.5 1.5 5 5 5 3 0 5-2.5 5-5 0-2.5-2-5-5-5z"/>',
  turbogenerators: '<polygon class="icon-bolt" points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>'
};

export function getMainNavigation(lang: Lang): NavItem[] {
  const base = getBaseUrl(lang);

  return [
    {
      name: t('nav.design', lang),
      href: `${base}/design`,
      icon: 'design'
    },
    {
      name: t('nav.turbines', lang),
      href: `${base}/turbines`,
      icon: 'turbines'
    },
    {
      name: t('nav.turbogenerators', lang),
      href: `${base}/turbogenerators`,
      icon: 'turbogenerators'
    },
    {
      name: t('nav.components', lang),
      href: `${base}/components`,
      dropdown: [
        { name: t('components.blades', lang), href: `${base}/blades`, icon: 'blades' },
        { name: t('components.oilCoolers', lang), href: `${base}/oil-coolers`, icon: 'oilCoolers' },
        { name: t('components.condensers', lang), href: `${base}/condensers`, icon: 'condensers' }
      ]
    },
    {
      name: t('nav.about', lang),
      href: `${base}/about`,
      dropdown: [
        { name: t('about.title', lang), href: `${base}/about`, icon: 'about' },
        { name: t('cases.title', lang), href: `${base}/cases`, icon: 'cases' },
        { name: t('news.title', lang), href: `${base}/news`, icon: 'news' },
        { name: t('nav.faq', lang), href: `${base}/faq`, icon: 'faq' },
        { name: t('nav.cooperation', lang), href: `${base}/cooperation`, icon: 'cooperation' },
        { name: t('nav.contacts', lang), href: `${base}/contacts`, icon: 'contacts' },
        { name: t('footer.downloadPresentation', lang), href: '/Презентация РУСТРЕЙД.pdf', icon: 'presentation' }
      ]
    }
  ];
}

export function getMobileNavigation(lang: Lang): NavItem[] {
  const base = getBaseUrl(lang);
  
  return [
    { name: t('nav.home', lang), href: base || '/', icon: 'home' },
    { name: t('nav.design', lang), href: `${base}/design`, icon: 'design' },
    { name: t('nav.turbines', lang), href: `${base}/turbines`, icon: 'turbines' },
    { name: t('nav.turbogenerators', lang), href: `${base}/turbogenerators`, icon: 'turbogenerators' },
    { name: t('components.blades', lang), href: `${base}/blades`, icon: 'blades' },
    { name: t('components.oilCoolers', lang), href: `${base}/oil-coolers`, icon: 'oilCoolers' },
    { name: t('components.condensers', lang), href: `${base}/condensers`, icon: 'condensers' },
    { name: t('nav.about', lang), href: `${base}/about`, icon: 'about' },
    { name: t('cases.title', lang), href: `${base}/cases`, icon: 'cases' },
    { name: t('news.title', lang), href: `${base}/news`, icon: 'news' },
    { name: t('nav.faq', lang), href: `${base}/faq`, icon: 'faq' },
    { name: t('nav.cooperation', lang), href: `${base}/cooperation`, icon: 'cooperation' },
    { name: t('nav.contacts', lang), href: `${base}/contacts`, icon: 'contacts' }
  ];
}

export function getFooterNavigation(lang: Lang): NavItem[] {
  const base = getBaseUrl(lang);
  
  return [
    { name: t('cases.title', lang), href: `${base}/cases` },
    { name: t('nav.turbines', lang), href: `${base}/turbines` },
    { name: t('nav.turbogenerators', lang), href: `${base}/turbogenerators` },
    { name: t('nav.design', lang), href: `${base}/design` },
    { name: t('nav.about', lang), href: `${base}/about` },
    { name: t('nav.cooperation', lang), href: `${base}/cooperation` },
    { name: t('nav.contacts', lang), href: `${base}/contacts` },
    { name: t('nav.faq', lang), href: `${base}/faq` },
    { name: t('news.title', lang), href: `${base}/news` },
    { name: t('components.blades', lang), href: `${base}/blades` },
    { name: t('components.oilCoolers', lang), href: `${base}/oil-coolers` },
    { name: t('components.condensers', lang), href: `${base}/condensers` }
  ];
}
