import ChooseProduct from '@/components/ChooseProduct';
import { banners } from '@/data/Banners';
import { products } from '@/data/Products';

export default function Page({ params }: { params: { mainRoute: string } }) {
  const banner = banners[params.mainRoute];
  const product = products[params.mainRoute];

  return <ChooseProduct banner={banner} items={product}></ChooseProduct>;
}
