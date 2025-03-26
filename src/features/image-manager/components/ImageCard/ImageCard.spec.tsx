import { render, screen } from "@testing-library/react"
import { ImageCard } from "."

const MOCK_URL_REGULAR = 'MOCK_URL_REGULAR'
const MOCK_IMAGE_DESCRIPTION = 'MOCK_IMAGE_DESCRIPTION'

const imageMock = {
  id: "1",
  color: "#735940",
  alt_description: MOCK_IMAGE_DESCRIPTION,
  urls: {
      full: "https://images.unsplash.com/photo-1614079878578-1301ea379ac7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3Mjg3NTZ8MHwxfHNlYXJjaHwxfHxjYXR8ZW58MHwxfHxncmVlbnwxNzQyOTg4NzQxfDA&ixlib=rb-4.0.3&q=85",
      regular: MOCK_URL_REGULAR,
      small: "https://images.unsplash.com/photo-1614079878578-1301ea379ac7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mjg3NTZ8MHwxfHNlYXJjaHwxfHxjYXR8ZW58MHwxfHxncmVlbnwxNzQyOTg4NzQxfDA&ixlib=rb-4.0.3&q=80&w=400",
  },
  links: {
      html: "https://unsplash.com/photos/brown-tabby-cat-on-white-surface-jQ4u59JuqAY",
      download: "https://unsplash.com/photos/jQ4u59JuqAY/download?ixid=M3w3Mjg3NTZ8MHwxfHNlYXJjaHwxfHxjYXR8ZW58MHwxfHxncmVlbnwxNzQyOTg4NzQxfDA",
  }
}

describe('ImageCard', () => {
  it('should render component', () => {
    render(<ImageCard image={imageMock}/>)
  })

  it('should render image description', () => {
    render(<ImageCard image={imageMock}/>)

    const imageDescription = screen.getByText(MOCK_IMAGE_DESCRIPTION)
  
    expect(imageDescription).toBeInTheDocument()
  })

  it('should render url', () => {
    render(<ImageCard image={imageMock}/>)

    const imageURL = screen.getByRole('img')
  
    expect(imageURL).toHaveAttribute('src', MOCK_URL_REGULAR)
  })
})