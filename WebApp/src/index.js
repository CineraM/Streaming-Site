// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// FIX FIX FIX
// react-dom is depricated, use this apporach to render 
// https://bobbyhadz.com/blog/react-reacdom-render-no-longer-supported-in-react-18
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

import App from './App';

// 👇️ IMPORTANT: use correct ID of your root element
// this is the ID of the div in your index.html file
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// 👇️ if you use TypeScript, add non-null (!) assertion operator
// const root = createRoot(rootElement!);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);