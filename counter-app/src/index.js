import React from 'react';
import ReactDOM from 'react-dom';
//import FirstApp from './FirstApp';
import CounterApp from './CounterApp';
import './index.css';
const main = document.querySelector('#root');

ReactDOM.render(<CounterApp value={12312348123} />, main);