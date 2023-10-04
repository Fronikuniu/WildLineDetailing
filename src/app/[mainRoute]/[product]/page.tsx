'use client';

import { products } from '@/data/Products';
import { Image } from '@nextui-org/react';

export default function Page({
  params,
}: {
  params: { mainRoute: string; product: string };
}) {
  const product = products[params.mainRoute].find(
    (product) => product.id === params.product
  );
  return (
    <section className="bg-lightC-100 pt-[150px] pb-[100px]">
      <h1 className="text-3xl md:text-4xl font-semibold text-blackC-100 text-center">
        {product?.title}
      </h1>
      <div className="m-auto pt-[60px] pb-[100px] grid gap-16 grid-cols-1 sm:grid-cols-2 sm:gap-5 items-center max-w-[1280px] px-6 sm:px-10 lg:px-none">
        <div className="w-full text-blackC-100 flex flex-col justify-center items-center gap-7">
          <div className="flex flex-col justify-center items-center gap-2 text-center">
            <p>{product?.desc}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src={product?.imageSrc}
              alt="Product image"
              className="w-[90%] m-auto"
            ></Image>
          </div>
        </div>

        <div className="flex flex-col gap-4 text-blackC-100 text-center">
          {product?.includes && (
            <div className="flex flex-col gap-1">
              <h2 className="text-xl md:text-2xl">Co zawiera usługa?:</h2>
              <ul className="text-lg md:text-xl">
                {product.includes.map((product) => (
                  <li key={product}>• {product}</li>
                ))}
              </ul>
            </div>
          )}
          {product?.priceFrom && (
            <div className="flex flex-col gap-1">
              <h2 className="text-xl md:text-2xl">Koszt realizacji:</h2>
              <p className="text-lg md:text-xl">
                Od {product.priceFrom}
                {'zł netto '}
                {product.priceTo && 'Do ' + product.priceTo}{' '}
              </p>
            </div>
          )}
          {product?.implementation && (
            <div className="flex flex-col gap-1">
              <h2 className="text-xl md:text-2xl">Czas realizacji:</h2>
              <p className="text-lg md:text-xl">{product.implementation}</p>
            </div>
          )}
          {product?.options && (
            <div className="flex flex-col gap-1">
              <h2 className="text-xl md:text-2xl">Dodatkowe opcje:</h2>
              <ul className="text-lg md:text-xl">
                {product.options.map((product) => (
                  <li key={product}>• {product}</li>
                ))}
              </ul>
            </div>
          )}
          {product?.whyWorthIt && (
            <div className="flex flex-col gap-1">
              <h2 className="text-xl md:text-2xl">Dlaczego warto?:</h2>
              <ul className="text-lg md:text-xl">
                {product.whyWorthIt.map((product) => (
                  <li key={product}>• {product}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
