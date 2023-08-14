import { IBanner } from '@/components/types';

export const protectionBanner: IBanner = {
  title: 'Ochrona',
  imageSrc: '/banner.jpg',
  alt: 'Baner ochrona samochodu',
};

export const careBanner: IBanner = {
  title: 'Pielęgnacja',
  imageSrc: '/banner.jpg',
  alt: 'Baner pielęgnacja samochodu',
};

export const renovationBanner: IBanner = {
  title: 'Renowacja',
  imageSrc: '/banner.jpg',
  alt: 'Baner renowacja samochodu',
};

export const packagesBanner: IBanner = {
  title: 'Pakiety',
  imageSrc: '/banner.jpg',
  alt: 'Baner pakiety',
};

export const contactBanner: IBanner = {
  title: 'Kontakt',
  imageSrc: '/banner.jpg',
  alt: 'Kontakty baner',
};

export const banners: Record<string, IBanner> = {
  care: careBanner,
  packages: packagesBanner,
  protection: protectionBanner,
  renovation: renovationBanner,
};
