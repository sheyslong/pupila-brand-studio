import { render, screen } from "@testing-library/react"
import { Header } from "."

describe('Header', () => {
  it('should render component', () => {
    render(<Header />)
  })

  it('should render text', () => {
    render(<Header />)

    const title = screen.getByText('Purrfectly Pawsome Photos')
  
    expect(title).toBeInTheDocument()
  })
})