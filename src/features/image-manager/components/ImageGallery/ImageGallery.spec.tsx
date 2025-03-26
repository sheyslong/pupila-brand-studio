import { render, screen } from '@testing-library/react'
import { ImageGallery } from '.'
import { ImageMetadata } from '@src/types/ImageTypes';

const MOCK_URL_REGULAR = 'MOCK_URL_REGULAR'

const mockGallery: ImageMetadata[] = [
  {
    id: "1",
    color: "#735940",
    alt_description: "image one",
    urls: {
        full: "https://images.unsplash.com/photo-1614079878578-1301ea379ac7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3Mjg3NTZ8MHwxfHNlYXJjaHwxfHxjYXR8ZW58MHwxfHxncmVlbnwxNzQyOTg4NzQxfDA&ixlib=rb-4.0.3&q=85",
        regular: MOCK_URL_REGULAR,
        small: "https://images.unsplash.com/photo-1614079878578-1301ea379ac7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mjg3NTZ8MHwxfHNlYXJjaHwxfHxjYXR8ZW58MHwxfHxncmVlbnwxNzQyOTg4NzQxfDA&ixlib=rb-4.0.3&q=80&w=400",
    },
    links: {
        html: "https://unsplash.com/photos/brown-tabby-cat-on-white-surface-jQ4u59JuqAY",
        download: "https://unsplash.com/photos/jQ4u59JuqAY/download?ixid=M3w3Mjg3NTZ8MHwxfHNlYXJjaHwxfHxjYXR8ZW58MHwxfHxncmVlbnwxNzQyOTg4NzQxfDA",
    },
  },
  {
    id: "2",
    color: "#735940",
    alt_description: "image two",
    urls: {
        full: "https://images.unsplash.com/photo-1614079878578-1301ea379ac7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3Mjg3NTZ8MHwxfHNlYXJjaHwxfHxjYXR8ZW58MHwxfHxncmVlbnwxNzQyOTg4NzQxfDA&ixlib=rb-4.0.3&q=85",
        regular: MOCK_URL_REGULAR,
        small: "https://images.unsplash.com/photo-1614079878578-1301ea379ac7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mjg3NTZ8MHwxfHNlYXJjaHwxfHxjYXR8ZW58MHwxfHxncmVlbnwxNzQyOTg4NzQxfDA&ixlib=rb-4.0.3&q=80&w=400",
    },
    links: {
        html: "https://unsplash.com/photos/brown-tabby-cat-on-white-surface-jQ4u59JuqAY",
        download: "https://unsplash.com/photos/jQ4u59JuqAY/download?ixid=M3w3Mjg3NTZ8MHwxfHNlYXJjaHwxfHxjYXR8ZW58MHwxfHxncmVlbnwxNzQyOTg4NzQxfDA",
    },
  },
  {
    id: "3",
    color: "#735940",
    alt_description: "image three",
    urls: {
        full: "https://images.unsplash.com/photo-1614079878578-1301ea379ac7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3Mjg3NTZ8MHwxfHNlYXJjaHwxfHxjYXR8ZW58MHwxfHxncmVlbnwxNzQyOTg4NzQxfDA&ixlib=rb-4.0.3&q=85",
        regular: MOCK_URL_REGULAR,
        small: "https://images.unsplash.com/photo-1614079878578-1301ea379ac7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mjg3NTZ8MHwxfHNlYXJjaHwxfHxjYXR8ZW58MHwxfHxncmVlbnwxNzQyOTg4NzQxfDA&ixlib=rb-4.0.3&q=80&w=400",
    },
    links: {
        html: "https://unsplash.com/photos/brown-tabby-cat-on-white-surface-jQ4u59JuqAY",
        download: "https://unsplash.com/photos/jQ4u59JuqAY/download?ixid=M3w3Mjg3NTZ8MHwxfHNlYXJjaHwxfHxjYXR8ZW58MHwxfHxncmVlbnwxNzQyOTg4NzQxfDA",
    },
  },
];

describe('ImageGallery', () => {
  it('should render component', () => {
    render(<ImageGallery gallery={mockGallery}/>)
  })

  it.each(mockGallery)('should render all images text', (image) => {
    render(<ImageGallery gallery={mockGallery}/>)

    const descritpion = screen.getByText(image.alt_description)
    expect(descritpion).toBeInTheDocument()
  })

  it('should render all images', () => {
    render(<ImageGallery gallery={mockGallery}/>)

    const descritpion = screen.getAllByRole('img')
    expect(descritpion).toHaveLength(3)
  })
})