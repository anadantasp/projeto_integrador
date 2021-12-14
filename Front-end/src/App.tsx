import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './componentes/navbar/Navbar';
import Footer from './componentes/footer/Footer';
import { } from '@material-ui/core';
import Home from './paginas/home/Home'
import Login from './paginas/login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import CarouselComponent from './componentes/carousel/CarouselComponent';
import './App.css';
import CadastroCategoria from './componentes/categorias/cadastroCategoria/CadastroCategoria';
import DeletarCategoria from './componentes/categorias/deletarCategoria/DeletarCategoria';
import ListaCategoria from './componentes/categorias/listacategoria/ListaCategoria';

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
            <CarouselComponent />
            <Home />
          </Route>

          <Route path='/categorias'>
            <ListaCategoria />
          </Route>



          <Route path='/cadastrousuario'>
            <CadastroUsuario />
          </Route>

          <Route exact path='/formularioCategoria'>
            <CadastroCategoria />
          </Route>
          <Route exact path='/formularioCategoria/:id'>
            <CadastroCategoria />
          </Route>

          <Route path='/deletarCategoria/:id'>
            < DeletarCategoria />
          </Route>

        </div>
      </Switch>
      <Footer />
    </Router >

  );
}

export default App;
