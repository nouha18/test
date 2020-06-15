import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Puzzle from 'react-image-puzzle';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
//https://upload.wikimedia.org/wikipedia/fr/8/87/Disney_Channel_2014.png
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
