import ChooseProduct from '@/components/ChooseProduct';
import { renovationBanner } from '@/data/Banners';
import { renovationProducts } from '@/data/Products';

export default function Renovation() {
  return (
    <ChooseProduct
      banner={renovationBanner}
      items={renovationProducts}
    ></ChooseProduct>
  );
}
