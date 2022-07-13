import React from 'react';

import ReactDOM from 'react-dom/client';

const button = React.createElement(
  'button',
  [null],
  ['Click Me!']
);

/* eslint-disable */
console.log(button);

const container = document.querySelector('#root');

const root = ReactDOM.createRoot(container);

root.render(button);
