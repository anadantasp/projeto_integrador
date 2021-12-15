import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import Categoria from '../../../models/Categoria';
import './ListaCategoria.css';
import useLocalStorage from 'react-use-localstorage';
import { useHistory } from 'react-router-dom';
import { busca } from '../../../services/Service';

function ListaCategoria() {
    const [categorias, setCategorias] = useState<Categoria[]>([])
    const [token, setToken] = useLocalStorage('token');
    let history = useHistory();

    useEffect(() => {
        if (token == '') {
            alert("Você precisa estar logado")
            history.push("/login")
        }
    }, [token])


    async function getCategoria() {
        await busca("/categorias", setCategorias, {
            headers: {
                'Authorization': token
            }
        })
    }


    useEffect(() => {
        getCategoria()
    }, [categorias.length])

    return (
        <>
            {
                categorias.map(categoria => (
                    <Box m={2} paddingBottom={3}>
                        <Card variant="outlined">
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    Categoria
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {categoria.descricao}
                                </Typography>
                                <Typography variant="h6" component="h2">
                                    {categoria.palavraChave}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Box display="flex" justifyContent="center" mb={1.5} >

                                    <Link to={`/formularioCategoria/${categoria.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button variant="contained" className="marginLeft botaoCategoriaAtualizar" size='small' >
                                                atualizar
                                            </Button>
                                        </Box>
                                    </Link>
                                    <Link to={`/deletarCategoria/${categoria.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button variant="contained" size='small' className='botaoCategoriaDeletar'>
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
        </>
    );
}


export default ListaCategoria;