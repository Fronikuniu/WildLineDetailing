'use client';

import { contactBanner } from '@/data/Banners';
import { business } from '@/data/Business';
import { days, getDay, openAt } from '@/data/WhenOpen';
import { Image, Link } from '@nextui-org/react';
import { formatNumber } from 'libphonenumber-js';

export default function Contact() {
  const formattedPhoneNumber = formatNumber(business.phone, 'INTERNATIONAL');

  const fromDayNum = getDay(openAt.fromDay);
  const toDayNum = getDay(openAt.toDay);
  const fromDay = days[fromDayNum];
  const toDay = days[toDayNum];

  const isOpen = () => {
    const now = new Date();
    const dayOfWeek = now.getDay();
    const hour = now.getHours();

    return (
      dayOfWeek >= fromDayNum &&
      dayOfWeek <= toDayNum &&
      hour >= openAt.fromHour &&
      hour < openAt.toHour
    );
  };

  return (
    <section className="bg-lightC-100">
      <div className="w-screen h-[350px] relative flex justify-center items-center">
        <div className="w-screen h-[350px] top-0 left-0 absolute z-10 bg-gradient-to-t from-blackC-100"></div>

        <h1 className="w-full absolute z-10 max-w-[1280px] px-6 sm:px-10 lg:px-none md:text-4xl lg:text-5xl text-2xl font-semibold mt-[50px]">
          {contactBanner.title}
        </h1>
        <Image
          className="w-screen h-[350px] z-0 object-cover object-top"
          src={contactBanner.imageSrc}
          alt={contactBanner.alt}
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
      <div className="m-auto py-[100px] grid gap-16 grid-cols-1 sm:grid-cols-2 sm:gap-5 items-center max-w-[1280px] px-6 sm:px-10 lg:px-none">
        <div className="w-full text-blackC-100 flex flex-col justify-center items-center gap-7">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/logo_transparent.png"
              alt="WildLine Detailing logo"
              className="w-[90%] m-auto"
            ></Image>
            <p className="text-2xl lg:text-3xl font-semibold">
              WILDLINE DETAILING
            </p>
            <div className="text-lg lg:text-xl text-center">
              <p>Otwarte:</p>
              <p className="font-semibold text-primaryC-100">
                {fromDay} - {toDay}
              </p>
              <p className="font-semibold text-primaryC-100">
                {openAt.fromHour}:00 - {openAt.toHour}:00
              </p>
              <p className="font-semibold">
                {isOpen() ? (
                  <span className="text-[#38d132]">OTWARTE</span>
                ) : (
                  <span className="text-[#ff6347]">ZAMKNIĘTE</span>
                )}
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <Link
              isExternal
              href={business.addressLink}
              className="text-lg lg:text-xl font-semibold text-primaryC-100"
            >
              {business.address}
            </Link>
            <Link
              isExternal
              href={`mailto:${business.email}`}
              className="text-lg lg:text-xl font-semibold text-primaryC-100"
            >
              {business.email}
            </Link>
            <Link
              isExternal
              href={`tel:+48${business.phone}`}
              className="text-lg lg:text-xl font-semibold text-primaryC-100"
            >
              {formattedPhoneNumber}
            </Link>
          </div>
        </div>

        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1282.8469688860562!2d22.021170098225156!3d49.979598043217415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473cf9fe7a4800a1%3A0xbb532598ec6b84da!2sAleja%20Genera%C5%82a%20W%C5%82adys%C5%82awa%20Sikorskiego%20443%2C%2035-304%20Rzesz%C3%B3w!5e0!3m2!1spl!2spl!4v1691688406428!5m2!1spl!2spl"
            className="w-full h-[400px] border-none rounded-2xl"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
