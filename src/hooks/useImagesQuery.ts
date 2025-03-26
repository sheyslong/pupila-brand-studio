import { fetchImages } from "@src/services/images";
import { GalleryImagesResponse } from "@src/types/ImageTypes";
import { useQuery } from "@tanstack/react-query";

const IMAGE_QUERY_KEY = 'image-query-key';

export const useImagesQuery = () => {
  const { data, ...props } = useQuery<GalleryImagesResponse>({
    queryKey: [IMAGE_QUERY_KEY],
    queryFn: fetchImages,
  })

  return {gallery: data?.results, total: data?.total,  ...props }
}