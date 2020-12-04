import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//we are importing App from App.js (the .js is not included, but still implied). 
//= syntax to import something that is the default export of another file:


ReactDOM.render(<App />, document.getElementById('root'));
