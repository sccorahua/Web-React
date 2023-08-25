import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import AppC from './AppC';
import AppFA from './AppFA'; 
//import App from './App';

//el import solo se coloca el archivo main donde se va a renderizar
//bootstrap necesita dos import
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

//router-dom y le colocamos el alias de Router
import { BrowserRouter as Router} from 'react-router-dom';
//redux import que recibe un objeto
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
  //llamamos al contadorReducer, nosotros indicamos ruta
import contadorReducer from './comp-redux/features/contador';
import productoReducer from './comp-redux/features/prodB';

//para redux
//recibe uno o varios reducer, es un objeto
const store=configureStore({
  reducer:{
    contador:contadorReducer,
    producto_bodega:productoReducer, 
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <AppFA />
      </Router>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

