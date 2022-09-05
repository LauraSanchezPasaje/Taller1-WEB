import React from 'react';
import ReactDOM from 'react-dom/client';
import './Diseño.css';
import reportWebVitals from './reportWebVitals';
import Ejercicio1 from './Ejercicio1';
import Ejercicio2 from './Ejercicio2';
import Ejercicio3 from './Ejercicio3';
import Ejercicio4 from './Ejercicio4';
import Ejercicio5 from './Ejercicio5';
import Ejercicio6 from './Ejercicio6';
import Ejercicio7 from './Ejercicio7';
import Ejercicio8 from './Ejercicio8';
import Ejercicio9 from './Ejercicio9';
import Ejercicio11 from './Ejercicio11';
import Ejercicio12 from './Ejercicio12';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Ejercicio1 />
    <Ejercicio2 />
    <Ejercicio3 />
    <Ejercicio4 />
    <Ejercicio5 />
    <Ejercicio6 />
    <Ejercicio7 />
    <Ejercicio8 />     
    <Ejercicio11 />
    <Ejercicio12 />
    <Ejercicio9 /> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
