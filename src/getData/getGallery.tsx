import React, { useEffect, useState } from 'react';
import Gallery from '@/components/Gallery';
import { IImage } from '@/components/types';

const getGallery = async () => {
  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_KEY}`;
  const data = await fetch(url);
  const feed = await data.json();
  return feed.data as IImage[];
};

export default function GalleryData() {
  const [images, setImages] = useState<IImage[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      const fetchedImages = await getGallery();
      setImages(fetchedImages);
    };
    fetchImages();
  }, []);

  return <Gallery items={images?.slice(0, 6)} />;
}
