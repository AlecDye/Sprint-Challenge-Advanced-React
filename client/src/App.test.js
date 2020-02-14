import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Navbar from './components/Navbar';

test('App renders without crashing', () => {
  render(<App />)

});

test('Header is rendering', () => {
  const { getByText } = render(<Navbar />)

  const header = getByText(/women's worldcup search trends/i)

  expect(header).not.toBeFalsy();
  expect(header).toBeTruthy();
})
