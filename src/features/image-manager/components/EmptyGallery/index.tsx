import { Card, Text } from "theme-ui";

export function EmptyGallery() {
  return(
    <Card sx={{ justifySelf: 'center' }}>
      <Text>Parece que não encontramos nenhuma foto por aqui</Text>
    </Card>
  )
}