import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
    <>
        <App countBy={1} fontSize={12} />
        <App countBy={2} fontSize={24} />
        <App countBy={10} fontSize={36} />
        <button>Do Nothing</button>
    </>,
  document.getElementById('root')
);
