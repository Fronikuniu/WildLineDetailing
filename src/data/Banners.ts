import { IBanner } from '@/components/types';

export const protectionBanner: IBanner = {
  title: 'Ochrona',
  imageSrc: '/banner.webp',
  alt: 'Baner ochrona samochodu',
};

export const careBanner: IBanner = {
  title: 'Pielęgnacja',
  imageSrc: '/banner.webp',
  alt: 'Baner pielęgnacja samochodu',
};

export const renovationBanner: IBanner = {
  title: 'Renowacja',
  imageSrc: '/banner.webp',
  alt: 'Baner renowacja samochodu',
};

export const packagesBanner: IBanner = {
  title: 'Pakiety',
  imageSrc: '/banner.webp',
  alt: 'Baner pakiety',
};

export const contactBanner: IBanner = {
  title: 'Kontakt',
  imageSrc: '/banner.webp',
  alt: 'Kontakty baner',
};

export const banners: Record<string, IBanner> = {
  pielegnacja: careBanner,
  pakiety: packagesBanner,
  ochrona: protectionBanner,
  renowacja: renovationBanner,
};
