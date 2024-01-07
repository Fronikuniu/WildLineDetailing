import React, { useEffect, useState } from 'react';
import Gallery from '@/components/Gallery';
import { IImage } from '@/components/types';

const getReviews = async () => {
  const url = ``;
  const data = await fetch(url);
  const feed = await data.json();
  console.log(feed);
  return feed.data as IImage[];
};

export default function ReviewsData() {
  const [images, setImages] = useState<IImage[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      const fetchedImages = await getReviews();
      console.log(fetchedImages);
      setImages(fetchedImages);
    };
    fetchImages();
  }, []);

  return <Gallery items={images?.slice(0, 6)} />;
}
