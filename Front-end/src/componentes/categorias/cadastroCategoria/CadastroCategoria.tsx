import React, { useState, useEffect, ChangeEvent } from 'react'
import { Container, Typography, TextField, Button, Box } from "@material-ui/core"
import Categoria from '../../../models/Categoria';
import { buscaId, post, put } from '../../../services/Service';
import { useHistory, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';


function CadastroCategoria() {

    let history = useHistory();
    const { id } = useParams<{ id: string }>();
    const [token, setToken] = useLocalStorage('token');

    const [categoria, setCategoria] = useState<Categoria>({
        id: 0,
        descricao: '',
        categoria: '',
        palavraChave: '',
    })

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
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
        })
    }

    function updatedCategoria(e: ChangeEvent<HTMLInputElement>) {

        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value,
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log("categoria " + JSON.stringify(categoria))

        if (id !== undefined) {
            console.log(categoria)
            put(`/categorias`, categoria, setCategoria, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Categoria atualizado com sucesso');
        } else {
            post(`/categorias`, categoria, setCategoria, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Categoria cadastrado com sucesso');
        }
        back()

    }

    function back() {
        history.push('/categorias')
    }



    return (
        <Box paddingTop={7}>
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro categoria</Typography>
                <TextField value={categoria.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCategoria(e)} id="descricao" label="descriçao" variant="outlined" name="descricao" margin="normal" fullWidth />
                <TextField value={categoria.categoria} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCategoria(e)} id="categoria" label="categoria" variant="outlined" name="categoria" margin="normal" fullWidth />
                <TextField value={categoria.palavraChave} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCategoria(e)} id="palavraChave" label="palavra-chave" variant="outlined" name="palavraChave" margin="normal" fullWidth />
                <Button type="submit" variant="contained" color="primary">
                    Finalizar
                </Button>
            </form>
        </Container>
        </Box>
    )
}

export default CadastroCategoria;