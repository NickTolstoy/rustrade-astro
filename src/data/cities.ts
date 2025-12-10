import type { Lang } from '@/i18n';

export interface City {
  id: string;
  name: Record<Lang, string>;
  phone: string;
  email: string;
  address: Record<Lang, string>;
  coordinates: { lat: number; lng: number };
  workingHours: Record<Lang, string>;
  timezone: string;
}

export const cities: City[] = [
  {
    id: 'moscow',
    name: { ru: 'Москва', en: 'Moscow' },
    phone: '8(916) 111-4-555',
    email: 'office@rustrade.pro',
    address: {
      ru: 'Россия, Москва',
      en: 'Russia, Moscow'
    },
    coordinates: { lat: 55.7558, lng: 37.6173 },
    workingHours: { ru: 'Пн-Пт: 9:00-18:00', en: 'Mon-Fri: 9:00-18:00' },
    timezone: 'Europe/Moscow'
  },
  {
    id: 'perm',
    name: { ru: 'Пермь', en: 'Perm' },
    phone: '8(342) 111-4-555',
    email: 'perm@rustrade.pro',
    address: {
      ru: 'Россия, Пермь, ул. Олега Кошевого, д.31, пом.20',
      en: 'Russia, Perm, Oleg Koshevoy st., 31, office 20'
    },
    coordinates: { lat: 58.0105, lng: 56.2502 },
    workingHours: { ru: 'Пн-Пт: 9:00-18:00', en: 'Mon-Fri: 9:00-18:00' },
    timezone: 'Asia/Yekaterinburg'
  }
];

export const defaultCity = 'moscow';

export function getCityById(id: string): City | undefined {
  return cities.find(c => c.id === id);
}

export function getCityIds(): string[] {
  return cities.map(c => c.id);
}

