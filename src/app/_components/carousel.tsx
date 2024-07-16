'use client'

import ImageGallery from "react-image-gallery";

type Props = {
  images: string[]
}

const createGallery = (images: string[]) => {
  return images.map(image => ({original: image, thumbnail: image}));
}

export const Carousel = ({ images }: Props) => {
  return <ImageGallery items={createGallery(images)} />;
}