import { PupilaBrandProviders } from "@src/Providers/PupilaBrandProviders";
import { GalleryContainer } from "@src/features/image-manager";
import { Header } from "@src/features/image-manager/components/Header";
import { Box } from "theme-ui";

const Gallery = () => {
  return (
    <PupilaBrandProviders>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 24, justifyContent: 'center', padding: '24px 48px' }}>
        <Header />
        <Box>
          <GalleryContainer />
        </Box>
      </Box>
    </PupilaBrandProviders>
  )
}

export default Gallery;