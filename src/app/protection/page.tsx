import ChooseProduct from '@/components/ChooseProduct';
import { protectionBanner } from '@/data/Banners';
import { protectionProducts } from '@/data/Products';

export default function Protection() {
  return (
    <ChooseProduct
      banner={protectionBanner}
      items={protectionProducts}
    ></ChooseProduct>
  );
}
