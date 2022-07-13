import React from 'react';

import * as ReactDOM from 'react-dom';

const hi = React.createElement(
  'h1',
  [null],
  ['Hello, React!']
);

console.log(hi);

const container = document.querySelector('#root');

const root = ReactDOM.createRoot(container);

root.render(hi);
