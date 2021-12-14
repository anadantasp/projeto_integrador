import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import useLocalStorage from 'react-use-localstorage';
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import Produto from '../../../models/Produto';
import { busca } from '../../../services/Service';
import styled from 'styled-components'
import Product from './Produto';
const Container = styled.div`
padding: 20px;
display: flex;
flex-wrap: wrap;
    justify-content: space-between;
`

function Products() {

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

        <Container>
            {produtos.map(item => (
                <Product item={item} key={item.id} />
            ))}
        </Container>

    )
}

export default Products;