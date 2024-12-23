import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/App'; // Adjust the path based on your project structure

test('renders welcome message', () => {
    render(<App />);
    const linkElement = screen.getByText(/welcome to your app/i);
    expect(linkElement).toBeInTheDocument();
});