import { render, screen } from 'test-utils'
import App from './App'

test('renders main links', () => {
  render(<App/>)
  const aboutLink = screen.getByText(/about/i)
  const workLink = screen.getByText(/work/i)
  const contactLink = screen.getByText(/contact/i)

  expect(aboutLink).toBeInTheDocument()
  expect(workLink).toBeInTheDocument()
  expect(contactLink).toBeInTheDocument()
})
