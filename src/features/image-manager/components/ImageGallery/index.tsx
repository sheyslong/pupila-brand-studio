import type { ImageMetadata } from "@src/types/ImageTypes";
import { Grid } from "theme-ui";
import { ImageCard } from "../ImageCard";

interface ImageGalleryProps {
  gallery: ImageMetadata[]
}

export function ImageGallery({ gallery }: ImageGalleryProps){
  return (
    <Grid
      sx={{
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: 3,
        alignItems: 'center',
      }}
    >
      {gallery.map((image: ImageMetadata) => (
        <ImageCard key={image.id} image={image} />
      ))}
    </Grid>
  );
}