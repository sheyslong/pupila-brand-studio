import { Button, Card, Text } from "theme-ui";

interface ErrorGalleryProps {
  retry: () => void
}

export function ErrorGallery({ retry }: ErrorGalleryProps) {
  return(
    <Card sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      padding: 24,
      justifySelf: 'center',
      borderRadius: 4
    }}>
      <Text>Parece que não encontramos nenhuma foto por aqui</Text>
      <Button onClick={retry} sx={{ width: 'fit-content', alignSelf: 'center  '}}>Tentar novamente</Button>
    </Card>
  )
}