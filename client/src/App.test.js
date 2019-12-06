import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('renders all elements', () => {
  const { getByText, getAllByText } = render(<App />);
  const cardElements = getAllByText(/name/i);
  const darkElement = getByText(/ball/i);

  cardElements.forEach((e) => expect(e).toBeInTheDocument())
  expect(darkElement).toBeInTheDocument();
});