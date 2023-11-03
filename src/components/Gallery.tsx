import { IImage } from './types';
import { Image, Link } from '@nextui-org/react';
import NextImage from 'next/image';
import { FaInstagram } from 'react-icons/fa6';

export default function Gallery({ items }: { items: IImage[] }) {
  return (
    <>
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center max-w-[1280px] px-6 sm:px-10 lg:px-none">
        {items?.map((image, i) => (
          <Link
            className="group relative flex items-center justify-center"
            href={image.permalink}
            key={image.id}
            isExternal
          >
            <Image
              as={NextImage}
              isZoomed
              className="w-full object-cover object-bottom aspect-square cursor-pointer"
              width={290}
              height={290}
              alt={image.caption || `Instagram image ${i}`}
              src={image.media_url}
            />
            <FaInstagram className="hidden group-hover:block absolute z-10 text-5xl rounded-xl text-yellowC-100 p-1 bg-blackC-100" />
          </Link>
        ))}
      </div>
    </>
  );
}
