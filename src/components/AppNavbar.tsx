'use client';

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Image,
} from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { getURL } from 'next/dist/shared/lib/utils';
import { menuItems } from '@/data/Links';

export default function AppNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [url, setUrl] = useState('');

  useEffect(() => {
    setUrl(getURL());
  }, []);

  return (
    <Navbar
      classNames={{
        base: ['fixed', 'top-0', 'left-0'],
        item: ['data-[active=true]:a:text-yellowC-100'],
      }}
      isBlurred
      height={'100px'}
      isBordered // @ts-ignore
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden pr-3" justify="start">
        <NavbarBrand>
          <Link href="/" className="hover:opacity-100">
            <Image
              src={'/logo-white-transparent.webp'}
              alt="logo"
              width={85}
              height={85}
            ></Image>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="start">
        <NavbarBrand>
          <Link href="/" className="hover:opacity-100">
            <Image
              src={'/logo-white-transparent.webp'}
              alt="logo"
              width={90}
              height={90}
            ></Image>
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        {menuItems.map((item, i) => (
          <NavbarItem isActive={url === item.href} key={`${item}-${i}`}>
            <Link
              color="foreground"
              className={url.includes(item.href) ? 'text-yellowC-100' : ''}
              href={item.href}
            >
              {item.label.toUpperCase()}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, i) => (
          <NavbarMenuItem key={`${item}-${i}`}>
            <Link
              color="foreground"
              className={`w-full ${
                url === item.href ? 'text-yellowC-100 font-semibold' : ''
              }`}
              href={item.href}
              size="lg"
            >
              {item.label.toUpperCase()}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
