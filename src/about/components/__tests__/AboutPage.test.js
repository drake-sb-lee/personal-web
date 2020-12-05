import {render, screen} from 'test-utils'
import AboutPage from '../AboutPage'

test('renders About Page', () => {
    render(AboutPage())
    const aboutText = screen.getByText(/about/i)
    expect(aboutText).toBeInTheDocument()
})
