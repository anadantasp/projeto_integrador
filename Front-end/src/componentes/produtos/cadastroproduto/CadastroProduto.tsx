import React, { ChangeEvent, useEffect, useState } from 'react'
import { Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText } from "@material-ui/core"
import './CadastroProduto.css';
import { useHistory, useParams } from 'react-router-dom';
import Categoria from '../../../models/Categoria';
import useLocalStorage from 'react-use-localstorage';
import Produto from '../../../models/Produto';
import { busca, buscaId, post, put } from '../../../services/Service';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

function CadastroProduto() {

  let history = useHistory();
  const { id } = useParams<{ id: string }>();
  const [categorias, setCategorias] = useState<Categoria[]>([])
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
);

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

  const [categoria, setCategoria] = useState<Categoria>(
    {
      id: 0,
      categoria: '',
      descricao: '',
      palavraChave: '',
      produto: []
    })

  const [categoriaReq, setCategoriaReq] = useState<Categoria>(
    {
      id: 0,
      categoria: '',
      descricao: '',
      palavraChave: '',
      produto: []
    })

  const [produto, setProduto] = useState<Produto>({
    id: 0,
    nome: "",
    preco: 0,
    dtfabricacao: "",
    descricao: "",
    imagem: "",
    ativo: false,
    categoria: null,
  })

  useEffect(() => {
    setProduto({
      ...produto,
      categoria: categoria,
    })
  }, [categoria])

  useEffect(() => {
    getTemas()
    if (id !== undefined) {
      findByIdPostagem(id)
    }
  }, [id])

  async function getTemas() {
    await busca("/categorias", setCategorias, {
      headers: {
        'Authorization': token
      }
    })
  }

  async function findByIdPostagem(id: string) {
    await buscaId(`produtos/${id}`, setProduto, {
      headers: {
        'Authorization': token
      }
    })
  }

  function updatedPostagem(e: ChangeEvent<HTMLInputElement>) {
    setCategoriaReq({
      id: categoria.id,
      categoria: '',
      descricao: '',
      palavraChave: '',
      produto: []
    })
    setProduto({
      ...produto,
      [e.target.name]: e.target.value,
      categoria: categoriaReq
    })

  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log("produto " + JSON.stringify(produto))

    if (id !== undefined) {
      put(`/produtos`, produto, setProduto, {
        headers: {
          'Authorization': token
        }
      })
      toast.success("Produto atualizado com sucesso!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "light",
        progress: undefined,
      })

    } else {
      post(`/produtos`, produto, setProduto, {
        headers: {
          'Authorization': token
        }
      })
      toast.success("Produto cadastrado com sucesso!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "light",
        progress: undefined,
      })
    }
    back()

  }

  function back() {
    history.push('/produtos')
  }

  return (
    <Container maxWidth="sm" className="topo">
      <form onSubmit={onSubmit}>

        <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro de produto</Typography>
        <TextField value={produto.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="texto" label="nome" name="nome" variant="outlined" margin="normal" fullWidth />
        <TextField value={produto.preco} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="preco" label="Preço" name="preco" variant="outlined" margin="normal" fullWidth />
        <TextField value={produto.dtfabricacao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="dtfabricacao" label="data de fabricação" name="dtfabricacao" variant="outlined" margin="normal" fullWidth />
        <TextField value={produto.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="descricao" label="descrição" variant="outlined" name="descricao" margin="normal" fullWidth />
        <TextField value={produto.imagem} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="imagem" label="imagem" name="imagem" variant="outlined" margin="normal" fullWidth />
      

        <FormControl >
          <InputLabel id="demo-simple-select-helper-label">Categoria </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            onChange={(e) => buscaId(`/categorias/${e.target.value}`, setCategoria, {
              headers: {
                'Authorization': token
              }
           
            })}>
            {
              categorias.map(categoria => (
                <MenuItem value={categoria.id}>{categoria.descricao}</MenuItem>
              ))
            }
          </Select>
          <FormHelperText>Escolha um tema para a postagem</FormHelperText>
          <Button type="submit" variant="contained" color="primary">
            Finalizar
          </Button>
        </FormControl>
      </form>
    </Container>
  )
}
export default CadastroProduto;