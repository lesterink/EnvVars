// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders EnvVars title', () => {
    render(<App />);
    const titleElement = screen.getByText(/EnvVars/i);
    expect(titleElement).toBeInTheDocument();
});
