import {render, screen} from 'test-utils'
import ContactPage from '../ContactPage'

test('renders Contact Page', () => {
    render(ContactPage())
    const contactText = screen.getByText(/contact/i)
    expect(contactText).toBeInTheDocument()
})
