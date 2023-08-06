'use client';

import Gallery from '@/components/Gallery';
import ReviewCard from '@/components/ReviewCard';
import { images } from '@/data/Images';
import { opinions } from '@/data/Reviews';
import { Button, Image } from '@nextui-org/react';
import { useRef } from 'react';
import { FaArrowDown } from 'react-icons/fa6';
import useDraggableScroll from 'use-draggable-scroll';

export default function Home() {
  const ref = useRef(null);
  const { onMouseDown } = useDraggableScroll(ref, { direction: 'horizontal' });

  let height = 0;
  if (typeof window !== 'undefined') {
    height = window.innerHeight;
  }
  const scrollToBot = () => {
    window.scrollTo({
      top: height - 100,
      behavior: 'smooth',
    });
  };

  return (
    <main>
      <section className="bg-[url(/landing_image.png)] h-screen w-screen bg-no-repeat bg-cover bg-bottom">
        <div className="bg-gradient-to-t from-blackC-100 h-screen w-screen flex justify-start xl:justify-center items-center pt-[100px] relative">
          <p className="w-4/5 max-w-[1024px] px-6 md:text-4xl lg:text-5xl text-2xl">
            Lorem, <span className="text-yellowC-100 font-bold">ipsum</span>{' '}
            dolor sit amet consectetur adipisicing elit.
          </p>
          <Button
            className="absolute bottom-[10%] left-1/2 tra animate-bounce border-2 text-yellowC-100 border-yellowC-100 rounded-full bg-transparent"
            isIconOnly
            aria-label="Przewiń w dół"
            size="lg"
            onClick={scrollToBot}
          >
            <FaArrowDown></FaArrowDown>
          </Button>
        </div>
      </section>

      <section className="pr-[15px] w-screen relative bg-lightC-100 pt-[131px] pb-[250px] flex flex-col justify-center items-center gap-14">
        <div className="custom-shape-divider-top-1691178521 bg-lightC-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 0L0 0 892.25 114.72 1200 0z"
              className="shape-fill"
            ></path>
          </svg>
        </div>

        <h1 className="font-semibold text-3xl w-full max-w-[1024px] lg:text-5xl px-6 md:px-9 lg:px-6 text-blackC-100 text-center">
          Lorem ipsum dolor sit.
        </h1>

        <div className="flex flex-col-reverse md:flex-row gap-5 w-full items-center max-w-[1024px] px-6 md:px-9 lg:px-6">
          <div className="w-1/2 h-full flex justify-center items-center">
            <Image
              className="max-w-[300px] lg:max-w-[450px] object-contain"
              src="/logo_transparent.png"
              alt="My picture"
            ></Image>
          </div>
          <div className="w-100 sm:w-1/2">
            <p className="w-full text-blackC-100 text-center sm:px-7 lg:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis magnam corrupti id laudantium, blanditiis deserunt
              enim vel totam officia iusto eaque sequi. Dicta tempora architecto
              ea doloremque aperiam provident laudantium corrupti nihil quae
              vitae ullam officiis repellat cupiditate optio, sint accusantium
              libero in. Quia voluptate architecto repellat totam sapiente unde.
            </p>
          </div>
        </div>

        <div className="custom-shape-divider-bottom-1691186777">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </section>

      <section className="pr-[15px] w-screen bg-blackC-100 pt-[131px] pb-[100px] flex justify-center items-center">
        <Gallery items={images}></Gallery>
      </section>

      <section className="pr-[15px] w-screen relative bg-lightC-100 pt-[150px] pb-[150px] flex flex-col justify-center items-center ">
        <div className="custom-shape-divider-top-1691256564">
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

        <div className="w-full px-6 lg:px-0 max-w-[1024px]">
          <h2 className="mb-6 font-semibold text-3xl w-full max-w-[1024px] lg:text-5xl px-6 md:px-9 lg:px-6 text-blackC-100 text-center">
            Opinie o nas
          </h2>
          <div ref={ref} onMouseDown={onMouseDown} className="overflow-hidden">
            <div className="w-max flex gap-5">
              {opinions.map((opinion, i) => (
                <ReviewCard
                  key={`${opinion.name}-${i}`}
                  item={opinion}
                ></ReviewCard>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
