import { useImagesQuery } from "@src/hooks/useImagesQuery";
import { ImageGallery } from "./components/ImageGallery";
import { Spinner } from "theme-ui";
import { EmptyGallery } from "./components/EmptyGallery";
import { ErrorGallery } from "./components/ErrorGallery";

export function GalleryContainer(){
  const { gallery, isFetching, isRefetching, isError, refetch } = useImagesQuery();
  
  if(isFetching || isRefetching) return <Spinner />
  if(isError) return <ErrorGallery retry={refetch} />
  if(!gallery) return <EmptyGallery />

  return <ImageGallery gallery={gallery}/>
}