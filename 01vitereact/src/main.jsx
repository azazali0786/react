import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Test from './Test.jsx';

function MyApp() {
  return (
    <div>
      <h1>Custom App</h1>
    </div>
  );
}

const anotherElement = (
  <a href="https://google.com" target="_blank">Visit Google</a>
);

const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'Click me to visit Google'
);

createRoot(document.getElementById('root')).render(
  // reactElement
  <>
    {reactElement}
    <MyApp />
    <Test />
    <App />
  </>
)
