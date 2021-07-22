import React from 'react';
import ReactDOM from 'react-dom';
//import FirstApp from './FirstApp';
import CounterApp from './CounterApp';
import './index.css';
const main = document.querySelector('#root');

//ReactDOM.render(<FirstApp hello='Hola, soy Carlos' />, main);
ReactDOM.render(<CounterApp value={100} />, main);