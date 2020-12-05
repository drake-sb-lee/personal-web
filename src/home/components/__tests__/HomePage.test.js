import {render, screen} from 'test-utils'
import HomePage from '../HomePage'

test('renders About Page', () => {
    render(HomePage())
    const aboutLink = screen.getByText(/about/i)
    const workLink = screen.getByText(/work/i)
    const contactLink = screen.getByText(/contact/i)

    expect(aboutLink).toBeInTheDocument()
    expect(workLink).toBeInTheDocument()
    expect(contactLink).toBeInTheDocument()
})
