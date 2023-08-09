import ChooseProduct from '@/components/ChooseProduct';
import { packagesBanner } from '@/data/Banners';
import { packagesProducts } from '@/data/Products';

export default function Packages() {
  return (
    <ChooseProduct
      banner={packagesBanner}
      items={packagesProducts}
    ></ChooseProduct>
  );
}
