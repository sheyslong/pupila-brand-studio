import { ImageMetadata } from "@src/types/ImageTypes";
import { Box, Image, Text } from "theme-ui";

interface ImageCardProps {
  image: ImageMetadata
}
export function ImageCard({ image }: ImageCardProps) {
  const { id, color, urls, alt_description } = image;
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        borderRadius: 4,
        overflow: 'hidden',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        background: color
      }}>
        <Image src={urls.regular} alt={alt_description} />
        <Box
          sx={{
            padding: '8px',
            color: '#fcfcfc'
          }}>
          <Text>{alt_description}</Text>
        </Box>
    </Box>
  )
}