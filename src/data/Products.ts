import { IProduct } from '@/components/types';

export const protectionProducts: IProduct[] = [
  {
    id: 'lorem0',
    imageSrc: '/car_dark.png',
    title: 'Lorem 0',
    href: '/protection/lorem0',
    implementation: '',
    includes: ['', ''],
    options: ['', ''],
    price: 1000,
    whyWorthIt: ['', ''],
    desc: '',
  },
  {
    id: 'lorem1',
    imageSrc: '/car_dark.png',
    title: 'Lorem 1',
    href: '/protection/lorem1',
    implementation: '5h',
    includes: ['test1', 'test2'],
    options: ['z kolorem', 'Bez koloru'],
    price: 5000,
    whyWorthIt: ['No bo tak', 'jeszcze jak'],
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum consequatur itaque quasi tempore. Fuga doloremque sed dignissimos modi assumenda praesentium culpa ipsum, optio ad hic sunt, asperiores quis expedita reprehenderit, id perspiciatis nihil! Veniam voluptatibus eligendi iusto excepturi omnis. Laboriosam.',
  },
  {
    id: 'lorem2',
    imageSrc: '/car_dark.png',
    title: 'Lorem 2',
    href: '/protection/lorem2',
    implementation: '',
    includes: ['', ''],
    options: ['', ''],
    price: 1000,
    whyWorthIt: ['', ''],
    desc: '',
  },
  {
    id: 'lorem3',
    imageSrc: '/car_dark.png',
    title: 'Lorem 3',
    href: '/protection/lorem3',
    implementation: '',
    includes: ['', ''],
    options: ['', ''],
    price: 1000,
    whyWorthIt: ['', ''],
    desc: '',
  },
];

export const careProducts: IProduct[] = [
  {
    id: 'lorem0',
    imageSrc: '/car_dark.png',
    title: 'Lorem 0',
    href: '/care/lorem0',
    implementation: '',
    includes: ['', ''],
    options: ['', ''],
    price: 1000,
    whyWorthIt: ['', ''],
    desc: '',
  },
  {
    id: 'lorem1',
    imageSrc: '/car_dark.png',
    title: 'Lorem 1',
    href: '/care/lorem1',
    implementation: '',
    includes: ['', ''],
    options: ['', ''],
    price: 1000,
    whyWorthIt: ['', ''],
    desc: '',
  },
  {
    id: 'lorem2',
    imageSrc: '/car_dark.png',
    title: 'Lorem 2',
    href: '/care/lorem2',
    implementation: '',
    includes: ['', ''],
    options: ['', ''],
    price: 1000,
    whyWorthIt: ['', ''],
    desc: '',
  },
  {
    id: 'lorem3',
    imageSrc: '/car_dark.png',
    title: 'Lorem 3',
    href: '/care/lorem3',
    implementation: '',
    includes: ['', ''],
    options: ['', ''],
    price: 1000,
    whyWorthIt: ['', ''],
    desc: '',
  },
];
export const renovationProducts: IProduct[] = [
  {
    id: 'lorem0',
    imageSrc: '/car_dark.png',
    title: 'Lorem 0',
    href: '/renovation/lorem0',
    implementation: '',
    includes: ['', ''],
    options: ['', ''],
    price: 1000,
    whyWorthIt: ['', ''],
    desc: '',
  },
  {
    id: 'lorem1',
    imageSrc: '/car_dark.png',
    title: 'Lorem 1',
    href: '/renovation/lorem1',
    implementation: '',
    includes: ['', ''],
    options: ['', ''],
    price: 1000,
    whyWorthIt: ['', ''],
    desc: '',
  },
  {
    id: 'lorem2',
    imageSrc: '/car_dark.png',
    title: 'Lorem 2',
    href: '/renovation/lorem2',
    implementation: '',
    includes: ['', ''],
    options: ['', ''],
    price: 1000,
    whyWorthIt: ['', ''],
    desc: '',
  },
  {
    id: 'lorem3',
    imageSrc: '/car_dark.png',
    title: 'Lorem 3',
    href: '/renovation/lorem3',
    implementation: '',
    includes: ['', ''],
    options: ['', ''],
    price: 1000,
    whyWorthIt: ['', ''],
    desc: '',
  },
];
export const packagesProducts: IProduct[] = [
  {
    id: 'lorem0',
    imageSrc: '/car_dark.png',
    title: 'Lorem 0',
    href: '/packages/lorem0',
    implementation: '',
    includes: ['', ''],
    options: ['', ''],
    price: 1000,
    whyWorthIt: ['', ''],
    desc: '',
  },
  {
    id: 'lorem1',
    imageSrc: '/car_dark.png',
    title: 'Lorem 1',
    href: '/packages/lorem1',
    implementation: '',
    includes: ['', ''],
    options: ['', ''],
    price: 1000,
    whyWorthIt: ['', ''],
    desc: '',
  },
  {
    id: 'lorem2',
    imageSrc: '/car_dark.png',
    title: 'Lorem 2',
    href: '/packages/lorem2',
    implementation: '',
    includes: ['', ''],
    options: ['', ''],
    price: 1000,
    whyWorthIt: ['', ''],
    desc: '',
  },
  {
    id: 'lorem3',
    imageSrc: '/car_dark.png',
    title: 'Lorem 3',
    href: '/packages/lorem3',
    implementation: '',
    includes: ['', ''],
    options: ['', ''],
    price: 1000,
    whyWorthIt: ['', ''],
    desc: '',
  },
];

export const products: Record<string, IProduct[]> = {
  care: careProducts,
  packages: packagesProducts,
  protection: protectionProducts,
  renovation: renovationProducts,
};
