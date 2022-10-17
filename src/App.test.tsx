import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app', () => {
  render(<App />);
  const firstHeader = screen.getByText(/Hey Stranger/i);
  const secondHeader = screen.getByText(/Tell me your name/i);

  expect(firstHeader).toBeInTheDocument();
  expect(secondHeader).toBeInTheDocument();
});
