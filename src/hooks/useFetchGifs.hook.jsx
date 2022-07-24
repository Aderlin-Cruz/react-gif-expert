import React, {useEffect, useState} from "react";
import { getGifts } from '../helpers/getGifs';

export const useFetchGifs = (categorie) => {

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getImages = async () => {
      const newImages = await getGifts(categorie);
      setLoading(false)
      setImages(newImages);
    };

    getImages();
  }, []);

  return {
    images,
    loading,
  };
};
