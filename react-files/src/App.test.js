import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('renders the upload button', () => {
  test('should render the upload button', () => {
    render(<App />);
    const uploadButton = screen.getByText(/Upload CSV/i);
    expect(uploadButton).toBeInTheDocument();
  });
});

describe('renders the search button', () => {
  test('should render the search button', () => {
    render(<App />);
    const searchButton = screen.getByText(/Search/i);
    expect(searchButton).toBeInTheDocument();
  });
});

