import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ListaClientes from './screens/clientes/listaTodosClientes'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'antd/dist/antd.css';
import CriaClientes from './screens/clientes/CriaClientes';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/clientes" component={ListaClientes} />
            <Route path="/cadastracliente" component={CriaClientes} />
        </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
