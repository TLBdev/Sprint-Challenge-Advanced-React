import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from '@testing-library/react';


test('why is this broken', () => {
  expect(1).toBe(1)
})

test('renders button', () => {
  const { getByText, getAllByText } = render(<App />);

  const darkElement = getByText(/dark/i);

  expect(darkElement).toBeTruthy();
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

