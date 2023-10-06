'use client';

import { business } from '@/data/Business';
import { menuItems } from '@/data/Links';
import { Divider, Image, Link } from '@nextui-org/react';
import { formatNumber } from 'libphonenumber-js';
import { getURL } from 'next/dist/shared/lib/utils';
import { useEffect, useState } from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa6';

export default function Footer() {
  const [url, setUrl] = useState('');
  const formattedPhoneNumber = formatNumber(business.phone, 'INTERNATIONAL');

  useEffect(() => {
    setUrl(getURL());
  }, []);

  return (
    <footer className="relative bg-blackC-100 pt-[50px] pb-6 border-b-5 border-yellowC-100">
      <div className="custom-shape-divider-bottom-1691248774">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="shape-fill"
          ></path>
        </svg>
      </div>

      <div className="w-full px-6 lg:px-0 max-w-[1024px] m-auto ">
        <div className="grid grid-cols-1 md:gap-0 md:grid-cols-2 pb-12">
          <div className="flex flex-col justify-center items-center sm:flex-row gap-10">
            <Image
              src="/logo-white-transparent.webp"
              alt="WildLine Detailing Logo"
              className="object-contain"
              width={200}
            ></Image>
            <div className="flex gap-x-10 gap-y-5 flex-col">
              <div className="flex flex-col">
                <p>Email: </p>
                <Link
                  isExternal
                  color="foreground"
                  href={`mailto:${business.email}`}
                  // className="text-lg lg:text-xl font-semibold text-primaryC-100"
                >
                  {business.email}
                </Link>
              </div>
              <div className="flex flex-col">
                <p>Telefon: </p>
                <Link
                  isExternal
                  color="foreground"
                  href={`tel:+48${business.phone}`}
                  // className="text-lg lg:text-xl font-semibold text-primaryC-100"
                >
                  {formattedPhoneNumber}
                </Link>
              </div>
              <div className="flex flex-col">
                <p>Adres: </p>
                <Link
                  isExternal
                  color="foreground"
                  href={business.addressLink}
                  // className="text-lg lg:text-xl font-semibold text-primaryC-100"
                >
                  {business.address}
                </Link>
              </div>
            </div>
          </div>

          <Divider className="my-[30px] md:hidden" />

          <div className="flex flex-row justify-evenly items-center gap-10">
            <div className="flex flex-col gap-2">
              {menuItems.map((item, i) => (
                <Link
                  key={`${item}-${i}`}
                  color="foreground"
                  className={`text-lg ${
                    url.includes(item.href) ? 'text-yellowC-100' : ''
                  }`}
                  href={item.href}
                >
                  {item.label.toUpperCase()}
                </Link>
              ))}
            </div>
            <div className="text-3xl flex flex-col gap-3">
              <Link
                className="text-3xl"
                color="foreground"
                title="Instagram WildLine Detailing"
                href={business.link1}
              >
                <FaInstagram className="cursor-pointer transition-colors duration-300 ease-in-out hover:text-yellowC-100" />
              </Link>
              <Link
                className="text-3xl"
                color="foreground"
                title="Facebook WildLine Detailing"
                href={business.link2}
              >
                <FaFacebook className="cursor-pointer transition-colors duration-300 ease-in-out hover:text-yellowC-100" />
              </Link>
              <Link
                className="text-3xl"
                color="foreground"
                title="Instagram krzzzychu"
                href={business.link3}
              >
                <FaInstagram className="cursor-pointer transition-colors duration-300 ease-in-out hover:text-yellowC-100" />
              </Link>
            </div>
          </div>
        </div>
        <Divider />
        <div className="flex justify-between items-center pt-6">
          <div className="flex items-center gap-2">
            © 2023 {business.name}. All rights reserved.
          </div>
          <p className="text-grayC-100">Created by: FroniuDev</p>
        </div>
      </div>
    </footer>
  );
}
