'use client';

import { IBanner, IProduct } from './types';
import { Card, CardFooter, CardHeader, Image, Link } from '@nextui-org/react';

export default function ChooseProduct({
  banner,
  items,
}: {
  banner: IBanner;
  items: IProduct[];
}) {
  return (
    <section className="bg-lightC-100">
      <div className="w-screen h-[350px] relative flex justify-center items-center">
        <div className="w-screen h-[350px] top-0 left-0 absolute z-10 bg-gradient-to-t from-blackC-100"></div>

        <h1 className="w-full absolute z-10 max-w-[1280px] px-6 sm:px-10 lg:px-none md:text-4xl lg:text-5xl text-2xl font-semibold mt-[50px]">
          {banner?.title}
        </h1>
        <Image
          className="w-screen h-[350px] z-0 object-cover object-top"
          src={banner?.imageSrc}
          alt={banner?.alt}
          loading="lazy"
        ></Image>

        <div className="custom-shape-divider-top-1691601869">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <rect x="1200" height="3.6"></rect>
            <rect height="3.6"></rect>
            <path
              d="M0,0V3.6H580.08c11,0,19.92,5.09,19.92,13.2,0-8.14,8.88-13.2,19.92-13.2H1200V0Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
      <div className="m-auto py-[100px] grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center max-w-[1280px] px-6 sm:px-10 lg:px-none">
        {items?.map((image) => (
          <Link key={image.id} href={image.href}>
            <Card isFooterBlurred className="w-full h-[300px]">
              <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <p className="text-tiny text-white/60 uppercase font-bold">
                  {banner.title}
                </p>
              </CardHeader>
              <Image
                removeWrapper
                className="z-0 w-full h-full object-cover"
                alt={image.title}
                src={image.imageSrc}
                loading="lazy"
              />
              <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                <div className="flex flex-grow gap-2 items-center">
                  <h2 className="text-white/90 font-medium text-xl">
                    {image.title}
                  </h2>
                </div>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
