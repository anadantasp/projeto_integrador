import React, { ChangeEvent, useEffect, useState } from 'react'
import { Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText } from "@material-ui/core"
import './CadastroProduto.css';
import { useHistory, useParams } from 'react-router-dom';
import Categoria from '../../../models/Categoria';
import useLocalStorage from 'react-use-localstorage';
import Produto from '../../../models/Produto';
import { busca, buscaId, post, put } from '../../../services/Service';

function CadastroProduto() {

  let history = useHistory();
  const { id } = useParams<{ id: string }>();
  const [categorias, setCategorias] = useState<Categoria[]>([])
  const [token, setToken] = useLocalStorage('token');

  useEffect(() => {
    if (token == "") {
      alert("Você precisa estar logado")
      history.push("/login")

    }
  }, [token])

  const [categoria, setCategoria] = useState<Categoria>(
    {
      id: 0,
      categoria: '',
      descricao: '',
      palavraChave: ''
    })
  const [produto, setProduto] = useState<Produto>({
    id: 0,
    nome: "",
    preco: 0,
    dtfabricacao: "",
    descricao: "",
    imagem: "",
    ativo: false,
    categoria: null
  })

  useEffect(() => {
    setProduto({
      ...produto,
      categoria: categoria
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

    setProduto({
      ...produto,
      [e.target.name]: e.target.value,
      categoria: categoria
    })

  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    if (id !== undefined) {
      put(`/produtos`, produto, setProduto, {
        headers: {
          'Authorization': token
        }
      })
      alert('Postagem atualizada com sucesso');
    } else {
      post(`/produtos`, produto, setProduto, {
        headers: {
          'Authorization': token
        }
      })
      alert('Postagem cadastrada com sucesso');
    }
    back()

  }

  function back() {
    history.push('/posts')
  }

  return (
    <Container maxWidth="sm" className="topo">
      <form onSubmit={onSubmit}>
        <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro postagem</Typography>
        <TextField value={produto.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="descricao" label="descricao" variant="outlined" name="descricao" margin="normal" fullWidth />
        <TextField value={produto.dtfabricacao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="dtfabricacao" label="dtfabricacao" name="dtfabricacao" variant="outlined" margin="normal" fullWidth />
        <TextField value={produto.imagem} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="imagem" label="imagem" name="imagem" variant="outlined" margin="normal" fullWidth />
        <TextField value={produto.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="texto" label="nome" name="nome" variant="outlined" margin="normal" fullWidth />

        <FormControl >
          <InputLabel id="demo-simple-select-helper-label">Tema </InputLabel>
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