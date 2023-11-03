export interface IReview {
  imageSrc: string;
  name: string;
  company: string;
  opinion: string;
  stars: number;
}

export interface IImage {
  id: string;
  media_url: string;
  timestamp: string;
  media_type: string;
  permalink: string;
  caption: string;
}

export interface IProduct {
  id: string;
  imageSrc: string;
  title: string;
  href: string;
  includes?: string[];
  price?: {
    key: string;
    service: string;
    small: string;
    medium: string;
    big: string;
    bus: string;
  }[];
  priceTo?: number;
  implementation?: string;
  options?: string[];
  whyWorthIt?: string[];
  desc?: string;
}

export interface IBanner {
  imageSrc: string;
  title: string;
  alt: string;
}

export interface IOpenAt {
  fromDay: TDay;
  toDay: TDay;
  fromHour: number;
  toHour: number;
}

export type TDay =
  | 'Niedziela'
  | 'Poniedziałek'
  | 'Wtorek'
  | 'Środa'
  | 'Czwartek'
  | 'Piątek'
  | 'Sobota';
