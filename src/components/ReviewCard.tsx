import React from 'react';
import { Card, CardHeader, CardBody, Divider, Image } from '@nextui-org/react';
import { IReview } from './types';
import { FaStar } from 'react-icons/fa6';

export default function ReviewCard({ item }: { item: IReview }) {
  return (
    <Card className="w-[300px] bg-blackC-100 shadow-none">
      <CardHeader className="flex gap-3 justify-between">
        <div className="flex gap-3">
          <Image
            alt="nextui logo"
            height={40}
            radius="sm"
            src={item.imageSrc}
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-md">{item.name}</p>
            <p className="text-small text-default-500">{item.company}</p>
          </div>
        </div>

        <div className="flex gap-2 items-center text-yellowC-100 text-lg font-semibold">
          <p>{item.stars}</p>
          <FaStar />
        </div>
      </CardHeader>
      <Divider />
      <CardBody className="max-h-[120px]">
        <p>{item.opinion}</p>
      </CardBody>
    </Card>
  );
}
