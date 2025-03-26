import { serverImageApi } from '@src/api/images';
import { GalleryImagesResponse } from '@src/types/ImageTypes';

export const fetchImages = async (): Promise<GalleryImagesResponse> => {
  const { response, errors } = await serverImageApi.search.getPhotos({
    query: 'cat',
    page: 1,
    perPage: 10,
    color: 'green',
    orientation: 'portrait',
  });

  if (errors || !response) {
    throw new Error('Erro ao buscar imagens');
  }

  return response as GalleryImagesResponse;
};

