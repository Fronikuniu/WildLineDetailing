import ChooseProduct from '@/components/ChooseProduct';
import { careBanner } from '@/data/Banners';
import { careProducts } from '@/data/Products';

export default function Care() {
  return (
    <ChooseProduct banner={careBanner} items={careProducts}></ChooseProduct>
  );
}
