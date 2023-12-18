import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement('h1', { id: 'heading' }, 'Namasthe React!');
const jsxHeading = <h1>Namaste React with jsx</h1>;
console.log(heading);
console.log(jsxHeading);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);
root.render(jsxHeading);