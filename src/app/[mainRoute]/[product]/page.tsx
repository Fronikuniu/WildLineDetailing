'use client';

import { priceColumns, products } from '@/data/Products';
import {
  Button,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
  getKeyValue,
  useDisclosure,
} from '@nextui-org/react';
import { FaCircleInfo } from 'react-icons/fa6';

export default function Page({
  params,
}: {
  params: { mainRoute: string; product: string };
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleOpen = () => {
    onOpen();
  };

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

        <div className="flex flex-col gap-5 text-blackC-100 text-center">
          {product?.includes && (
            <div className="flex flex-col gap-3">
              <h2 className="text-xl md:text-2xl font-semibold">
                Co zawiera usługa?:
              </h2>
              <ul className="text-lg md:text-xl">
                {product.includes.map((product) => (
                  <li key={product}>• {product}</li>
                ))}
              </ul>
            </div>
          )}
          {product?.price && (
            <div className="flex flex-col gap-3">
              <h2 className="text-xl md:text-2xl font-semibold">
                Koszt realizacji:
              </h2>

              <div className="relative w-max m-auto">
                <Button
                  className="text-md bg-blackC-100"
                  onClick={() => handleOpen()}
                >
                  Sprawdź koszty realizacji!
                </Button>
                <span className="absolute flex h-3 w-3 -top-[2px] -right-[2px]">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellowC-100 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-yellowC-100"></span>
                </span>
              </div>

              <Modal size="xl" isOpen={isOpen} onClose={onClose}>
                <ModalContent>
                  <>
                    <ModalHeader className="flex flex-col gap-1">
                      Koszta realizacji dla usługi: {product?.title}
                    </ModalHeader>
                    <ModalBody className="p-0">
                      <Table aria-label="Example table with dynamic content">
                        <TableHeader columns={priceColumns}>
                          {(column) => (
                            <TableColumn key={column.key}>
                              <p className="flex items-center gap-1">
                                {column.label}
                                {column.tooltip && (
                                  <Popover
                                    placement="top"
                                    className="bg-yellowC-100 text-blackC-100"
                                  >
                                    <PopoverTrigger>
                                      <Button isIconOnly variant="light">
                                        <FaCircleInfo></FaCircleInfo>
                                      </Button>
                                    </PopoverTrigger>
                                    <PopoverContent>
                                      <div className="px-1 py-2">
                                        <p>{column.tooltip}</p>
                                      </div>
                                    </PopoverContent>
                                  </Popover>
                                )}
                              </p>
                            </TableColumn>
                          )}
                        </TableHeader>
                        <TableBody items={product.price}>
                          {(item) => (
                            <TableRow key={item.key}>
                              {(columnKey) => (
                                <TableCell
                                  className={
                                    (columnKey === 'service' &&
                                      'bg-default-100 rounded-lg') ||
                                    ''
                                  }
                                >
                                  {getKeyValue(item, columnKey)}
                                </TableCell>
                              )}
                            </TableRow>
                          )}
                        </TableBody>
                      </Table>
                    </ModalBody>
                    <ModalFooter className="flex-col items-end">
                      {['ceramic_coatings', 'wax_application'].includes(
                        product.id
                      ) && <p>Należy doliczyć koszta korekty lakieru.</p>}
                      <p className="text-sm w-max">
                        ** Wszystkie ceny są cenami netto.
                      </p>
                    </ModalFooter>
                  </>
                </ModalContent>
              </Modal>
            </div>
          )}
          {product?.implementation && (
            <div className="flex flex-col gap-3">
              <h2 className="text-xl md:text-2xl font-semibold">
                Czas realizacji:
              </h2>
              <p className="text-lg md:text-xl">{product.implementation}</p>
            </div>
          )}
          {product?.options && (
            <div className="flex flex-col gap-3">
              <h2 className="text-xl md:text-2xl font-semibold">
                Dodatkowe opcje:
              </h2>
              <ul className="text-lg md:text-xl">
                {product.options.map((product) => (
                  <li key={product}>• {product}</li>
                ))}
              </ul>
            </div>
          )}
          {product?.whyWorthIt && (
            <div className="flex flex-col gap-3">
              <h2 className="text-xl md:text-2xl font-semibold">
                Dlaczego warto?:
              </h2>
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
