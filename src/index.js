import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';
import CounterApp from './CounterApp';
// import FirsApp from './FirstApp';

const divRoot = document.querySelector('#root');

ReactDOM.render(<CounterApp value={10}></CounterApp>, divRoot);
// ReactDOM.render(<FirsApp saludo='Hola Mundo'></FirsApp>, divRoot);