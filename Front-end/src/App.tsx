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
import ListaCategoria from './componentes/categoria/listacategoria/ListaCategoria';
import ListaProduto from './componentes/produtos/listaproduto/ListaProduto';
import CadastroProduto from './componentes/produtos/cadastroproduto/CadastroProduto';
import CadastroCategoria from './componentes/categoria/cadastrocategoria/CadastroCategoria';
import DeletarProduto from './componentes/produtos/deletarproduto/DeletarProduto';
import DeletarCategoria from './componentes/categoria/deletarcategoria/DeletarCategoria';


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

          <Route path='/cadastrousuario'>
            <CadastroUsuario />
          </Route>

          <Route path='/categorias'>
            <ListaCategoria />
          </Route>

          <Route path='/produtos'>
            <ListaProduto />
          </Route>

          <Route exact path='/formularioProduto/'>
            <CadastroProduto />
          </Route>

          <Route exact path='/formularioProduto/:id'>
            <CadastroProduto />
          </Route>

          <Route exact path='/formularioCategoria'>
            <CadastroCategoria />
          </Route>

          <Route exact path='/formularioCategoria/:id'>
            <CadastroCategoria />
          </Route>

          <Route exact path='/deletarProduto/:id'>
            <DeletarProduto />
          </Route>

          <Route exact path='/deletarCategoria/:id'>
            <DeletarCategoria />
          </Route>

        </div>
      </Switch>
      <Footer />
    </Router >

  );
}

export default App;
