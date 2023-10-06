import { IProduct } from '@/components/types';

export const priceColumns = [
  {
    key: 'service',
    label: 'USŁUGA',
  },
  {
    key: 'small',
    label: 'MAŁY',
    tooltip: 'hatchback',
  },
  {
    key: 'medium',
    label: 'ŚREDNI',
    tooltip: 'sedan, coupe',
  },
  {
    key: 'big',
    label: 'DUŻY',
    tooltip: 'suv, combi, limuzyna',
  },
  {
    key: 'bus',
    label: 'BUS',
    tooltip: 'van, bus',
  },
];
export const protectionProducts: IProduct[] = [
  {
    id: 'ceramic_coatings',
    imageSrc: '/ceramic-coatings.webp',
    title: 'Powłoki ceramiczne',
    href: '/protection/ceramic_coatings',
    includes: [
      'Bezpieczne mycie detailingowe z pełną dekontaminacją',
      'Przygotowanie lakieru poprzez korektę lakieru',
      'Aplikację powłoki ceramicznej (roczna lub 3-letnia)',
    ],
    price: [
      {
        key: '1',
        service: 'test',
        small: 'wiersz 1',
        medium: 'wiersz 2',
        big: 'wiersz 3',
        bus: 'wiersz 4',
      },
    ],
    whyWorthIt: [
      'Łatwiejsza bieżąca pielęgnacja samochodu',
      'Ochrona przed czynnikami zewnętrznymi i wpływem środowiska',
      'Głębszy kolor i niesamowity połysk',
      'Ochrona przed promieniowaniem UV i utlenianiem lakieru',
    ],
    desc: 'Powłoki ceramiczne to obecnie jedne z najpopularniejszych i najlepszych metod ochrony lakieru. Ochrona ceramiczna to idealne rozwiązanie, by Twój samochód wyglądał doskonale przez długi czas. Powłoka ceramiczna po aplikacji permanentnie wiąże się z lakierem, co zapewnia ochronę przed wpływem środowiska nawet do 10 lat. Dzięki swoim właściwościom ułatwia odprowadzanie wody z karoserii samochodu, dzięki czemu samochód mniej brudzi się w trakcie eksploatacji, jak również ułatwia to bieżącą pielęgnację. Dodatkowy efektem jest podniesienie poziomu połysku oraz uzyskanie dużej głębi koloru. Samochód dzięki powłoce wygląda jak oblany szkłem.',
  },
  {
    id: 'wax_application',
    imageSrc: '/wax-application.webp',
    title: 'Aplikacja wosku',
    href: '/protection/wax_application',
    includes: [
      'Bezpieczne mycie detailingowe z pełną dekontaminacją',
      'Aplikacja wosku',
    ],
    price: [
      {
        key: '1',
        service: 'test',
        small: 'wiersz 1',
        medium: 'wiersz 2',
        big: 'wiersz 3',
        bus: 'wiersz 4',
      },
    ],
    whyWorthIt: [
      'Łatwiejsza bieżąca pielęgnacja samochodu',
      'Ochrona przed czynnikami zewnętrznymi i wpływem środowiska',
      'Głębszy kolor i niesamowity połysk',
      'Ochrona przed promieniowaniem UV i utlenianiem lakieru',
    ],
    desc: 'Najbardziej podstawowym zabezpieczeniem stosowanym od wielu lat jest aplikacja wosku na lakier i elementy zewnętrzne samochodu. Efekt po woskowaniu utrzymuje się od kilku tygodni do nawet kilku miesięcy w zależności od zastosowanego wosku. Woskowanie prowadzi do wyrównania porów w lakierze dzięki czemu zyskuje on niewidzialną barierę przed czynnikami zewnętrznymi. Woskowanie poprawia walory estetyczne karoserii - kolor zyskuje wyraźną głębię i połysk. W naszej ofercie znajdziesz tylko najlepsze woski na rynku!',
  },
  {
    id: 'rim_protection',
    imageSrc: '/rim-protection.webp',
    title: 'Zabezpieczenie felg',
    href: '/protection/rim_protection',
    includes: [
      'Bezpieczne mycie detailingowe z pełną dekontaminacją',
      'Przygotowanie felg do aplikacji powłoki',
      'Aplikację powłoki ceramicznej',
    ],
    price: [
      {
        key: '1',
        service: 'test',
        small: 'wiersz 1',
        medium: 'wiersz 2',
        big: 'wiersz 3',
        bus: 'wiersz 4',
      },
    ],
    whyWorthIt: [
      'Aplikację powłoki ceramiczne',
      'Ochrona przed czynnikami zewnętrznymi i wpływem środowiska',
      'Głęboki kolor i niesamowity połysk',
      'Ochrona przed promieniowaniem UV i utlenianiem lakieru',
      'Bardzo łatwe mycie i codzienna eksploatacja',
    ],
    desc: 'Felgi w codziennej eksploatacji są wysoce narażone na niekorzystne warunki. Wysoka temparatura, pył z klocków hamulcowych powodują, że pielęgnacja ich staje się trudna, a same felgi bardzo ciężko umyć. Zabezpieczenie felg powłoką ceramiczną lub elastomerową spowoduje dużo łatwiejszą pielęgnację oraz ochronę przed wżerami z pyłu klocków hamulcowych. Dodatkowo Twoje felgi będą mieć niesamowity połysk i głebię koloru',
  },
  {
    id: 'invisible_wiper',
    imageSrc: '/invisible-wiper.webp',
    title: 'Niewidzialna wycieraczka',
    href: '/protection/invisible_wiper',
    includes: [
      'Bezpieczne mycie szyb i lusterek',
      'Przygotowanie szyb do aplikacji powłoki',
      'Aplikację powłoki na wybrane szyby / lusterka',
    ],
    price: [
      {
        key: '1',
        service: 'test',
        small: 'wiersz 1',
        medium: 'wiersz 2',
        big: 'wiersz 3',
        bus: 'wiersz 4',
      },
    ],
    whyWorthIt: [
      'Najlepsza ochrona przed zabrudzeniami i owadami',
      'Dłużej czyste i lśniące szyby',
      'Zwiększony komfort i bezpieczeństwo',
      'Zwiększony komfort i bezpieczeństwo',
    ],
    desc: 'Niewidzialna wycieraczka to powłoka hydrofobowa aplikowana na szyby i lusterka. Zadaniem tej niewidzialnej powłoki jest odpychanie cząstek wody, dzięki czemu krople wody spychane są przez pęd powietrza. Powyżej prędkości 60 km/h nie ma konieczności używania wycieraczek w trakcie padającego deszczu. Poprawia to znacznie komfort jazdy i bezpieczeństwo.  Czyszczenie i pielęgnacja szyb również jest łatwiejsza, a owady znajdujące się na szybie po dłuższej trasie są łatwe do usunięcia.',
  },
];

export const careProducts: IProduct[] = [
  {
    id: 'basic_detailing_wash',
    imageSrc: '/basic-detailing-wash.webp',
    title: 'Podstawowe mycie detailingowe',
    href: '/care/basic_detailing_wash',
    implementation: '',
    includes: ['', ''],
    options: ['', ''],
    price: [
      {
        key: '1',
        service: 'test',
        small: 'wiersz 1',
        medium: 'wiersz 2',
        big: 'wiersz 3',
        bus: 'wiersz 4',
      },
    ],
    whyWorthIt: ['', ''],
    desc: '',
  },
  {
    id: 'comprehensive_detailing_wash',
    imageSrc: '/comprehensive-detailing-wash.webp',
    title: 'Kompleksowe mycie detailingowe',
    href: '/care/comprehensive_detailing_wash',
    implementation: '',
    includes: ['', ''],
    options: ['', ''],
    price: [
      {
        key: '1',
        service: 'test',
        small: 'wiersz 1',
        medium: 'wiersz 2',
        big: 'wiersz 3',
        bus: 'wiersz 4',
      },
    ],
    whyWorthIt: ['', ''],
    desc: '',
  },
  {
    id: 'basic_interior_detailing',
    imageSrc: '/basic-interior-detailing.webp',
    title: 'Podstawowy detailing wnętrza',
    href: '/care/basic_interior_detailing',
    implementation: '',
    includes: ['', ''],
    options: ['', ''],
    price: [
      {
        key: '1',
        service: 'test',
        small: 'wiersz 1',
        medium: 'wiersz 2',
        big: 'wiersz 3',
        bus: 'wiersz 4',
      },
    ],
    whyWorthIt: ['', ''],
    desc: '',
  },
  {
    id: 'comprehensive_interior_detailing',
    imageSrc: '/comprehensive-interior-detailing.webp',
    title: 'Kompleksowy detailing wnętrza',
    href: '/care/comprehensive_interior_detailing',
    implementation: '',
    includes: ['', ''],
    options: ['', ''],
    price: [
      {
        key: '1',
        service: 'test',
        small: 'wiersz 1',
        medium: 'wiersz 2',
        big: 'wiersz 3',
        bus: 'wiersz 4',
      },
    ],
    whyWorthIt: ['', ''],
    desc: '',
  },
];
export const renovationProducts: IProduct[] = [
  {
    id: 'paint_renovation',
    imageSrc: '/paint-renovation.webp',
    title: 'Renowacja lakieru',
    href: '/renovation/paint_renovation',
    includes: [
      'Bezpieczne mycie detailingowe z pełną dekontaminacją',
      'Jedno, dwu lub wieloetapowa korekta lakieru',
    ],
    price: [
      {
        key: '1',
        service: 'test',
        small: 'wiersz 1',
        medium: 'wiersz 2',
        big: 'wiersz 3',
        bus: 'wiersz 4',
      },
    ],
    options: [
      'Jednoetapowa - od 599zł netto',
      'Dwuetapowa - od 999zł netto',
      'Wieloetapowa - od 1299zł netto',
    ],
    whyWorthIt: [
      'Usuwamy nawet 95% zarysowań i zmatowień',
      'Uzyskujemy wysoki połysk i głębię koloru',
    ],
    desc: 'Codzienna eksploatacja i mycie samochodu naraża lakier na powstawanie uszkodzeń i zarysowań. Duża ilość zarysowań i zmatowień pogarsza jego estetykę - lakier traci swoją głębię i połysk. Możemy pomóc przywrócić mu dawną świetność dzięki usłudze korekty lakieru. Obecnie na samochodach stosowane są bardzo miękkie lakiery wodne, dlatego nawet w nowych samochodach, które dopiero co opuściły Salon mogą zdarzyć się już zarysowania. Również wtedy lakier potrzebuje zabiegu renowacji.',
  },
];
export const packagesProducts: IProduct[] = [
  {
    id: 'basic_package',
    imageSrc: '/basic-package.webp',
    title: 'Pakiet podstawowy',
    href: '/packages/basic_package',
    implementation: '',
    includes: ['', ''],
    options: ['', ''],
    price: [
      {
        key: '1',
        service: 'test',
        small: 'wiersz 1',
        medium: 'wiersz 2',
        big: 'wiersz 3',
        bus: 'wiersz 4',
      },
    ],
    whyWorthIt: ['', ''],
    desc: '',
  },
  {
    id: 'comprehensive_package',
    imageSrc: '/comprehensive-package.webp',
    title: 'Pakiet kompleksowy',
    href: '/packages/comprehensive_package',
    implementation: '',
    includes: ['', ''],
    options: ['', ''],
    price: [
      {
        key: '1',
        service: 'test',
        small: 'wiersz 1',
        medium: 'wiersz 2',
        big: 'wiersz 3',
        bus: 'wiersz 4',
      },
    ],
    whyWorthIt: ['', ''],
    desc: '',
  },
  {
    id: 'prepare_for_sale',
    imageSrc: '/prepare-for-sale.webp',
    title: 'Przygotowanie pojazdu do sprzedaży',
    href: '/packages/prepare_for_sale',
    implementation: '',
    includes: ['', ''],
    options: ['', ''],
    price: [
      {
        key: '1',
        service: 'test',
        small: 'wiersz 1',
        medium: 'wiersz 2',
        big: 'wiersz 3',
        bus: 'wiersz 4',
      },
    ],
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
