import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import App from './App';
import 'notyf/notyf.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const name = "John Smith";

// const user = {
//   firstName: "Jane",
//   lastName: "Smith"
// }

// function formatName(user){
//   return user.firstName + " " + user.lastName;
// }

// // JSX allows us to create HTML elements and at the same time allows us to apply JavaScript code to these elements making it easy to write both HTML and JavaScript code in a single file as opposed to creating two separate files (One for HTML and another for JavaScript syntax).
// const element = <h1>Hello, {formatName(user)}</h1>


// // root variable created to select the root element found in the index.html file
// const root = ReactDOM.createRoot(document.getElementById('root'));


// // renders the JSX "element" in the root element
// root.render(element);


