export interface IReview {
  imageSrc: string;
  name: string;
  company: string;
  opinion: string;
  stars: number;
}

export interface IImage {
  id: number;
  imageSrc: string;
  title: string;
  href?: string;
}

export interface IBanner {
  imageSrc: string;
  title: string;
  alt: string;
}
