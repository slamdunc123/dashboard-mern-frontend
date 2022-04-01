import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserAccMenu from '../UserAccMenu';

const mockHandleOpenUserMenu = jest.fn();

it('renders "Open Settings" button', async () => {
	render(<UserAccMenu />);

	const buttonElement = screen.getByRole('button', {
		name: /open settings/i,
	});
	expect(buttonElement).toBeInTheDocument();
});

it('fires "handleOpenUserMenu" when button clicked', async () => {
	render(<UserAccMenu handleOpenUserMenu={mockHandleOpenUserMenu} />);
	const paragraphElement = screen.getByText(/log in/i);
	const buttonElement = screen.getByRole('button', {
		name: /open settings/i,
	});
	fireEvent.click(buttonElement);
	expect(paragraphElement).toBeInTheDocument();
});
