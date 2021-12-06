import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './componentes/navbar/Navbar';
import Footer from './componentes/footer/Footer';
import { } from '@material-ui/core';
import Home from './paginas/home/Home'
import Login from './paginas/login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import './App.css';

function App() {
  return (
    <Router>
      
      <Switch>
        <div style={{ minHeight: '100vh' }}>

        <Route exact path='/'>
            <Login />
          </Route>

          <Route path='/login'>
            <Login />
          </Route>

          <Route path='/home'>
          <Navbar />
            <Home />
          </Route>

          <Route path='/cadastrousuario'>
            <CadastroUsuario />
          </Route>
        </div>
      </Switch>
      <Footer />
    </Router >
  
  );
}

export default App;
