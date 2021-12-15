import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import useLocalStorage from 'react-use-localstorage';
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import Produto from '../../../models/Produto';
import { busca } from '../../../services/Service';
import './ListaProduto.css';

function ListaPoduto() {

  const [produtos, setProdutos] = useState<Produto[]>([])
  const [token, setToken] = useLocalStorage('token');
  let history = useHistory();

  useEffect(() => {
    if (token == '') {
      alert('Você precisa esstar logado')
      history.push("/login")
    }
  }, [token])

  async function getProduto() {
    await busca("/produtos", setProdutos, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {
    getProduto()
  }, [produtos.length])

  return (
    <>
      {
        produtos.map(produto => (
          <Box m={2} >
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h5" component="h2">
                  {produto.nome}
                </Typography>
                <Typography variant="body2" component="p">
                  {produto.preco}
                </Typography>
                <Typography variant="body2" component="p">
                  {produto.categoria?.descricao}
                </Typography>
              </CardContent>
              <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5}>

                  <Link to={`/formularioProduto/${produto.id}`} className="text-decorator-none" >
                    <Box mx={1}>
                      <Button variant="contained" className="marginLeft btnAtualizarProduto" size='small'  >
                        atualizar
                      </Button>
                    </Box>
                  </Link>
                  <Link to={`/deletarProduto/${produto.id}`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" size='small' className="btnDeletarProduto">
                        deletar
                      </Button>
                    </Box>
                  </Link>
                </Box>
              </CardActions>
            </Card>
          </Box>
        ))
      }
    </>)
}

export default ListaPoduto;