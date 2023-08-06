'use client';

import React, { useState } from 'react';
import { IImage } from './types';
import {
  Button,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
} from '@nextui-org/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

export default function Gallery({ items }: { items: IImage[] }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [modalData, setModalData] = useState<IImage>();

  const handleImageClick = (image: IImage) => {
    setModalData(image);
    onOpen();
  };

  const selectPrevImage = () => {
    const currentData = modalData;
    if (currentData) {
      const prevID =
        currentData?.id - 1 !== -1 ? currentData?.id - 1 : items.length - 1;
      const prevData = items.find((card) => card.id === prevID);
      setModalData(prevData);
    }
  };
  const selectNextImage = () => {
    const currentData = modalData;
    if (currentData) {
      const prevID =
        currentData?.id + 1 !== items.length ? currentData?.id + 1 : 0;
      const prevData = items.find((card) => card.id === prevID);
      setModalData(prevData);
    }
  };

  return (
    <>
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center max-w-[1280px] px-6 sm:px-10 lg:px-none">
        {items.map((image) => (
          <Image
            key={image.id}
            isZoomed
            onClick={() => {
              handleImageClick(image);
            }}
            className="w-full object-contain cursor-pointer "
            alt={image.title}
            src={image.imageSrc}
          />
        ))}
      </div>
      <Modal
        hideCloseButton
        size="5xl"
        placement="center"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody className="relative px-14">
                <Button
                  onClick={selectPrevImage}
                  isIconOnly
                  variant="bordered"
                  size="lg"
                  radius="full"
                  aria-label="Przewiń w lewo"
                  className="absolute left-[4px] z-20 top-[45%] border-yellowC-100 text-yellowC-100"
                >
                  <FaChevronLeft />
                </Button>
                {modalData && (
                  <Image
                    className="w-full object-contain"
                    alt={modalData.title}
                    src={modalData.imageSrc}
                    onClick={onClose}
                  />
                )}
                <Button
                  onClick={selectNextImage}
                  isIconOnly
                  variant="bordered"
                  radius="full"
                  size="lg"
                  aria-label="Przewiń w prawo"
                  className="absolute right-[4px] z-20 top-[45%] border-yellowC-100 text-yellowC-100"
                >
                  <FaChevronRight />
                </Button>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
