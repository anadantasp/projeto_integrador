import React, { useEffect, useState } from 'react'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { buscaId, deleteId } from '../../../services/Service';
import Categoria from '../../../models/Categoria';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';


function ProdutoPorCategoria() {

  let history = useHistory();
  const { id } = useParams<{ id: string }>();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
);

  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    categoria: "",
    descricao: "",
    palavraChave: "",
    produto: [],
  })

  useEffect(() => {
    if (token == "") {
      toast.error("Você precisa estar logado", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "light",
        progress: undefined,
      })
      history.push("/login")
    }
  }, [token])

  useEffect(() => {
    if (id !== undefined) {
      findById(id)
    }

  }, [id])

  async function findById(id: string) {
    buscaId(`/categorias/${id}`, setCategoria, {
      headers: {
        'Authorization': token
      }
    });
  }


  return (
    <>
      {
        categoria.produto.map(prod => (
          <Box m={2} >
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h5" component="h2">
                  {prod.nome}
                </Typography>
                <Typography variant="body2" component="p">
                  {prod.preco}
                </Typography>
                <Typography variant="body2" component="p">
                  {prod.categoria?.descricao}
                </Typography>
              </CardContent>
              <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5}>
                </Box>
              </CardActions>
            </Card>
          </Box>
        ))
      }
    </>)
}
export default ProdutoPorCategoria;
