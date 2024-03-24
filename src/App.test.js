import { render, screen } from '@testing-library/react'
import App from './App'

test('app test check', () => {
	render(<App />)
	const linkElement = screen.getByText(/test check/i)
	expect(linkElement).toBeInTheDocument()
})
