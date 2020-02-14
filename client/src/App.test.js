import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, getByTestId } from '@testing-library/react';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('renders a navbar', () => {
  const {getByTestId} = render(<App />);
    getByTestId(/nav-render/i);
})

test('renders a button on nav bar', () => {
  const {getByTestId} = render(<App />);
    getByTestId(/button-render/i);
})