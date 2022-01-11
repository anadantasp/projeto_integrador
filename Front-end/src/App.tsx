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
import ListaCategoria from './componentes/categorias/listacategoria/ListaCategoria';
import ListaProduto from './componentes/produtos/listaproduto/ListaProduto';
import CadastroProduto from './componentes/produtos/cadastroproduto/CadastroProduto';
import CadastroCategoria from './componentes/categorias/cadastroCategoria/CadastroCategoria';
import DeletarProduto from './componentes/produtos/deletarproduto/DeletarProduto';
import DeletarCategoria from './componentes/categorias/deletarCategoria/DeletarCategoria';
import Products from './componentes/produtos/cardprodutos/CardProdutos';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProdutoPorCategoria from './componentes/categorias/produtoPorCategoria/ProdutoPorCategoria';
import ProdutoDetalhe from './componentes/produtos/cardprodutos/ProdutoDetalhe';
import CategoriaDetalhe from './componentes/categorias/categoriaDetalhe/CategoriaDetalhe';
import { Provider } from 'react-redux';
import store from './store/store';
import SobreNos from './paginas/sobreNos/SobreNos';
import PorqueUsar from './paginas/porqueUsar/PorqueUsar';
import { Carrinho } from './paginas/carrinho/Carrinho';



function App() {
  return (
    <Provider store={store}>
    <Router>
      <ToastContainer />
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
            <Navbar />
            <ListaCategoria />
          </Route>
          <Route path='/categoriasdev'>
            <Navbar />
            <ListaCategoria />
          </Route>

          <Route path='/produtosdev'>
            <Navbar />
            <ListaProduto />
          </Route>

          <Route path='/produtos'>
            <Navbar />
            <Products />
          </Route>

          <Route exact path='/formularioProduto/'>
            <Navbar />
            <CadastroProduto />
          </Route>

          <Route exact path='/formularioProduto/:id'>
            <Navbar />
            <CadastroProduto />
          </Route>

          <Route exact path='/formularioCategoria'>
            <Navbar />
            <CadastroCategoria />
          </Route>

          <Route exact path='/formularioCategoria/:id'>
            <Navbar />
            <CadastroCategoria />
          </Route>

          <Route exact path='/deletarProduto/:id'>
            <Navbar />
            <DeletarProduto />
          </Route>

          <Route exact path='/produtoPorCategoria/:id'>
            <Navbar />
            <ProdutoPorCategoria />
          </Route>

          <Route exact path='/deletarCategoria/:id'>
            <Navbar />
            <DeletarCategoria />
          </Route>

          <Route exact path='/produtoDetalhe/:id'>
            <Navbar />
          </Route>
          <Route exact path='/produtoDetalhe/:id'>
            <Navbar />
            <ProdutoDetalhe/>
          </Route>
          <Route exact path='/categoriaDetalhe/:id'>
            <Navbar />
            <CategoriaDetalhe/>
          </Route>


            <Route exact path='/sobreNos'>
              <Navbar />
              <SobreNos/>
            </Route>

            <Route exact path='/porqueUsar'>
              <Navbar />
              <PorqueUsar/>
            </Route>

            <Route exact path='/carrinho'>
              <Navbar />
              <Carrinho/>
            </Route>

        </div>
      </Switch>
      <Footer />
    </Router >
    </Provider>
  );
}

export default App;
