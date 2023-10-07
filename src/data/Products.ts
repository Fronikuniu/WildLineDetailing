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
        service: 'Roczna powłoka ceramiczna',
        small: '500zł',
        medium: '700zł',
        big: '900zł',
        bus: 'od 1000zł',
      },
      {
        key: '2',
        service: '3-letnia powłoka ceramiczna',
        small: '1100zł',
        medium: '1300zł',
        big: '1500zł',
        bus: 'od 1600zł',
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
        service: 'Aplikacja wosku',
        small: '100zł',
        medium: '100zł',
        big: '150zł',
        bus: 'od 250zł',
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
        service: 'Zabezpieczenie felg',
        small: '250zł',
        medium: '250zł',
        big: '250zł',
        bus: '250zł',
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
        service: 'Niewidzialna wycieraczka (komplet szyb)',
        small: '150zł',
        medium: '150zł',
        big: '150zł',
        bus: '150zł',
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
    includes: [
      'Bezpieczne mycie karoserii metodą na "dwa wiadra"',
      'Dokładne mycie wnęk i nadkoli',
      'Osuszanie',
    ],
    price: [
      {
        key: '1',
        service: 'Podstawowe mycie detailingowe',
        small: '60zł',
        medium: '70zł',
        big: '80zł',
        bus: '90zł',
      },
    ],
    whyWorthIt: [
      'Idealnie i szczegółowo umyty samochód',
      'Mycie bezpieczne bez zarysowań',
      'Wykorzystanie najlepszych kosmetyków',
      'Bezpieczne osuszenie karoserii',
    ],
    desc: 'Mycie detailingowe to złożony wieloetapowy proces czyszczenia elementów nadwozia przy pomocy profesjonalnych kosmetyków o bezpiecznym pH dla lakieru. Pozwala to na uzyskanie idealnej czystości wszystkich elementów karoserii.',
  },
  {
    id: 'comprehensive_detailing_wash',
    imageSrc: '/comprehensive-detailing-wash.webp',
    title: 'Kompleksowe mycie detailingowe',
    href: '/care/comprehensive_detailing_wash',
    includes: [
      'Bezpieczne mycie karoserii metodą na "dwa wiadra"',
      'Dokładne mycie wnęk i nadkoli',
      'Osuszanie',
      'Dekontaminacja i deironizacja lakieru',
      'Mycie za pomocą bezpiecznych kosmetyków',
    ],
    price: [
      {
        key: '1',
        service: 'Kompleksowe mycie detailingowe',
        small: '110zł',
        medium: '120zł',
        big: '130zł',
        bus: '140zł',
      },
    ],
    whyWorthIt: [
      'Idealnie i szczegółowo umyty samochód',
      'Mycie bezpieczne bez zarysowań',
      'Nieporównywalny efekt do zwykłego mycia',
      'Wykorzystanie najlepszych kosmetyków',
      'Usunięcie nalotów organicznych i środowiskowych',
      'Bezpieczne osuszenie karoserii',
    ],
    desc: 'Mycie detailingowe to złożony wieloetapowy proces czyszczenia elementów nadwozia przy pomocy profesjonalnych kosmetyków o bezpiecznym pH dla lakieru. Pozwala to na uzyskanie idealnej czystości wszystkich elementów karoserii.',
  },
  {
    id: 'basic_interior_detailing',
    imageSrc: '/basic-interior-detailing.webp',
    title: 'Podstawowy detailing wnętrza',
    href: '/care/basic_interior_detailing',
    includes: [
      'Odkurzanie wnętrza, w tym podłogi, foteli, bagażnika, dywaników i szczelin',
      'Przecieranie plastików, deski rozdzielczej, konsoli środkowej, boczków drzwi i innych elementów z tworzywa sztucznego',
      'Mycie wycieraczek i szyb',
      'Perfumowanie wnętrza',
    ],
    price: [
      {
        key: '1',
        service: 'Podstawowy detailing wnętrza',
        small: '50zł',
        medium: '60zł',
        big: '70zł',
        bus: 'Wycena indywidualna',
      },
    ],
    whyWorthIt: [
      'Bardzo dokładne sprzątanie i czyszczenie wnętrza',
      'Poprawiona estetyka kabiny',
      'Przyjemy zapach i lśniące czystością wnętrze',
      'Zachowanie wartości samochodu',
    ],
    desc: 'Detailing wnętrza sprawi, że wnętrze Twojego samochodu znów będzie lśnić i pachnieć nowością. Pranie tapicerki i bardzo dokładne czyszczenie każdego elementu wnętrza spowoduje, że znów będziesz odczuwał frajdę z jazdy samochodem. Do wnętrza podchodzimy bardzo rygorystycznie - każdy element będzie dokładnie wyczyszczony i zabezpieczony, a tapicerka dokładnie wyprana. Stosujemy wysokiej jakości bardzo skuteczne kosmetyki do pielęgnacji Twojego wnętrza.',
  },
  {
    id: 'comprehensive_interior_detailing',
    imageSrc: '/comprehensive-interior-detailing.webp',
    title: 'Kompleksowy detailing wnętrza',
    href: '/care/comprehensive_interior_detailing',
    includes: [
      'Pranie i czyszczenie tapicerki (fotele, kanapa, boczki, podsufitka, bagażnik, podłoga)',
      'Czyszczenie i impregnacja tapicerki skórzanej lub winylowej',
      'Czyszczenie i dressing plastików, uszczelek i innych elementów z tworzywa sztucznego',
      'Czyszczenie odrzwi, pedałów, gałki zmiany biegów, kierownicy i innych elementów metalowych lub gumowych',
      'Czyszczenie szyb od wewnątrz i na zewnątrz',
    ],
    price: [
      {
        key: '1',
        service: 'Kompleksowy detailing wnętrza',
        small: '300zł',
        medium: '350zł',
        big: '400zł',
        bus: 'Wycena indywidualna',
      },
    ],
    whyWorthIt: [
      'Bardzo dokładne sprzątanie i czyszczenie wnętrza',
      'Poprawiona estetyka kabiny',
      'Przyjemy zapach i lśniące czystością wnętrze',
      'Zachowanie wartości samochodu',
    ],
    desc: 'Detailing wnętrza sprawi, że wnętrze Twojego samochodu znów będzie lśnić i pachnieć nowością. Pranie tapicerki i bardzo dokładne czyszczenie każdego elementu wnętrza spowoduje, że znów będziesz odczuwał frajdę z jazdy samochodem. Do wnętrza podchodzimy bardzo rygorystycznie - każdy element będzie dokładnie wyczyszczony i zabezpieczony, a tapicerka dokładnie wyprana. Stosujemy wysokiej jakości bardzo skuteczne kosmetyki do pielęgnacji Twojego wnętrza.',
  },
  {
    id: 'washing_upholstery',
    imageSrc: '/washing-upholstery.webp',
    title: 'Czyszczenie tapicerki',
    href: '/care/washing_upholstery',
    includes: [
      'Pranie tapicerki materiałowej',
      'Czyszczenie i impregnacja tapicerki skórzanej',
    ],
    price: [
      {
        key: '1',
        service: 'Pranie tapicerki materiałowej',
        small: '150zł',
        medium: '150zł',
        big: '150zł',
        bus: 'Wycena indywidualna',
      },
      {
        key: '1',
        service: 'Czyszczenie i impregnacja tapicerki skórzanej',
        small: '150zł',
        medium: '150zł',
        big: '150zł',
        bus: 'Wycena indywidualna',
      },
    ],
    whyWorthIt: ['Odświeżenie wyglądu tapicerki'],
    desc: 'Czyszczenie tapicerki materiałowej i skórzanej to usługa, która polega na usunięciu zabrudzeń, plam, zapachów i bakterii z powierzchni siedzeń, boczków, podsufitki i innych elementów wykończenia wnętrza samochodu. Czyszczenie tapicerki materiałowej wykonuje się za pomocą specjalnych środków czyszczących i urządzeń do prania ekstrakcyjnego lub parowego. Czyszczenie tapicerki skórzanej wymaga użycia delikatnych preparatów i szczotek, które nie uszkodzą naturalnej struktury skóry. Po czyszczeniu tapicerkę należy zaimpregnować, aby zwiększyć jej odporność na wilgoć i zabrudzenia. Czyszczenie tapicerki poprawia nie tylko estetykę, ale także komfort i higienę jazdy.',
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
        service: 'Jednoetapowa korekta lakieru (usuwanie 50-70% rys z lakieru)',
        small: '600zł',
        medium: '700zł',
        big: '800zł',
        bus: 'od 900zł',
      },
      {
        key: '2',
        service: 'Dwuetapowa korekta lakieru (usuwanie 70-90% rys z lakieru)',
        small: '800zł',
        medium: '900zł',
        big: '1000zł',
        bus: 'od 1100zł',
      },
      {
        key: '3',
        service: 'Wieloetapowa korekta lakieru (usuwanie 90-99% rys z lakieru)',
        small: '1200zł',
        medium: '1400zł',
        big: '1600zł',
        bus: 'od 1800zł',
      },
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
    includes: ['Podstawowe mycie detailingowe', 'Podstawowy detailing wnętrza'],
    price: [
      {
        key: '1',
        service: 'Pakiet podstawowy',
        small: '100zł',
        medium: '110zł',
        big: '120zł',
        bus: 'Wycena indywidualna',
      },
    ],
  },
  {
    id: 'comprehensive_package',
    imageSrc: '/comprehensive-package.webp',
    title: 'Pakiet kompleksowy',
    href: '/packages/comprehensive_package',
    includes: [
      'Kompleksowe mycie detailingowe',
      'Kompleksowe detailing wnętrza',
    ],
    price: [
      {
        key: '1',
        service: 'test',
        small: '350zł',
        medium: '400zł',
        big: '450zł',
        bus: 'Wycena indywidualna',
      },
    ],
  },
  {
    id: 'prepare_for_sale',
    imageSrc: '/prepare-for-sale.webp',
    title: 'Przygotowanie pojazdu do sprzedaży',
    href: '/packages/prepare_for_sale',
    includes: [
      'Mycie detailingowe',
      'Detailing wnętrza',
      'Jednoetapowa korekta lakieru',
      'Aplikacja wosku',
    ],
    price: [
      {
        key: '1',
        service: 'Przygotowanie pojazdu do sprzedaży',
        small: '700zł',
        medium: '800zł',
        big: '900zł',
        bus: 'od 1000zł',
      },
    ],
    whyWorthIt: [
      'Zwiększenie walorów estetycznych samochodu',
      'Podniesienie wartości rynkowej auta',
      'Doskonały wygląd i szybsza sprzedaż samochodu',
      'Poprawiona estetyka kabiny',
    ],
    desc: 'Dobrze wyglądający samochód sam przyciąga naszą uwagę. Ponad 70% kupujących "kupuje wzrokiem". Kto nie chciałby ładnego błyszczącego i zadbanego lakieru, czy lśniącego i pachnącego wnętrza? Dlatego warto przed sprzedażą zadbać również o aspekt podnoszący nie tylko wartość samochodu, ale również poprawiający szybkość sprzedaży. Wizerunek czystego samochodu sprawi, że potencjalny kupujący postrzega samochód jako zadbany przymykając nieco oko na inne mankamenty.',
  },
];

export const products: Record<string, IProduct[]> = {
  care: careProducts,
  packages: packagesProducts,
  protection: protectionProducts,
  renovation: renovationProducts,
};
