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
      descricao: '',
      palavraChave: ''
    })
  const [produto, setProduto] = useState<Produto>({
    id: 0,
    nome: '',
    preco: 0,
    dtfabricacao: '',
    descricao: '',
    imagem: '',
    ativo: true,
    categoria: null
  })

  useEffect(() => {
    setProduto({
      ...produto,
      categoria: categoria
    })
  }, [categoria, produto])

  useEffect(() => {
    getCategorias()
    if (id !== undefined) {
      findByIdProduto(id)
    }
  }, [id])

  async function getCategorias() {
    await busca("/categorias", setCategorias, {
      headers: {
        'Authorization': token
      }
    })
  }

  async function findByIdProduto(id: string) {
    await buscaId(`produtos/${id}`, setProduto, {
      headers: {
        'Authorization': token
      }
    })
  }

  function updatedProduto(e: ChangeEvent<HTMLInputElement>) {

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
      alert('Produto atualizado com sucesso');
    } else {
      post(`/produtos`, produto, setProduto, {
        headers: {
          'Authorization': token
        }
      })
      alert('Produto cadastrado com sucesso');
    }
    back()
  }

  function back() {
    history.push('/home')
  }

  return (
    <Container maxWidth="sm" className="topo">
      <form onSubmit={onSubmit} >
        <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro produto</Typography>
        <TextField value={produto.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="nome" label="nome" variant="outlined" name="nome" margin="normal" fullWidth />
        <TextField value={produto.preco} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="preco" label="preço" name="preco" variant="outlined" margin="normal" fullWidth />
        <TextField value={produto.dtfabricacao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="dtfabricacao" label="data de fabricação" name="dtfabricacao" variant="outlined" margin="normal" fullWidth />
        <TextField value={produto.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="descricao" label="descrição" name="descricao" variant="outlined" margin="normal" fullWidth />
        <TextField value={produto.imagem} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="imagem" label="imagem" name="imagem" variant="outlined" margin="normal" fullWidth />
        <TextField value={produto.ativo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="ativo" label="ativo" name="ativo" variant="outlined" margin="normal" fullWidth />

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
          <FormHelperText>Escolha uma categoria para a postagem</FormHelperText>
          <Button type="submit" variant="contained" color="primary">
            Finalizar
          </Button>
        </FormControl>
      </form>
    </Container>
  )
}

export default CadastroProduto;