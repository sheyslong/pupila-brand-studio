type ImageUrls = {
  full: string
  regular: string
  small: string
}

type ImageLink = {
  html: string
  download: string
}

export type ImageMetadata = {
  id: string
  alt_description: string
  links: ImageLink
  urls: ImageUrls
  color: string
}

export interface GalleryImagesResponse {
  total: number
  total_pages: number
  results: ImageMetadata[]
}