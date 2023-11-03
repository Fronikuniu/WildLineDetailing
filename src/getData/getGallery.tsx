import React, { useEffect, useState } from 'react';
import Gallery from '@/components/Gallery';
import { IImage } from '@/components/types';

const KEY =
  'IGQWRPc084RHVKamJGc2hMZAXNoOFNydjRMT2JvVVNLR05tR0gwT2h0LS00aUxSQWk3UEtEcTBqZA00tN1lTaEhxY0s3ZA1hXU0FlSzNSd0VjYmt1TGZAUWUFyZAEFYNV93cEQ0cE15YmRkeFNfWDdEYno1ZAHZABRWpoMDgZD';

const getGallery = async () => {
  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=${KEY}`;
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
