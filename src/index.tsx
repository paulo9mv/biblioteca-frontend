import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ListaClientes from './screens/clientes/listaTodosClientes'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'antd/dist/antd.css';
import CriaClientes from './screens/clientes/CriaClientes';
import ListaLivros from './screens/livros/listaTodosLivros';
import CriaLivros from './screens/livros/CriaLivros';
import Main from './screens/Main';
import Emprestimo from './screens/emprestimo/Emprestimo';
import ListaEmprestimo from './screens/emprestimo/ListaEmprestimo';
import EditaClientes from './screens/clientes/EditaClientes';
import EditaLivros from './screens/livros/EditaLivros';
import App from './screens/homepage/App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Main>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/clientes" component={ListaClientes} />
            <Route path="/cadastracliente" component={CriaClientes} />
            <Route path="/editacliente/:id" component={EditaClientes} />
            <Route path="/livros" component={ListaLivros} />
            <Route path="/cadastralivros" component={CriaLivros} />
            <Route path="/editalivro/:id" component={EditaLivros} />
            <Route path="/emprestimo" component={Emprestimo} />
            <Route path="/visualizarEmprestimo" component={ListaEmprestimo} />
        </Switch>
      </Main>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
