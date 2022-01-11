import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import Produto from '../../../models/Produto';
import { busca } from '../../../services/Service';
import styled from 'styled-components'
import Product from './Produto';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
const Container = styled.div`
padding: 20px;
display: flex;
flex-wrap: wrap;
    justify-content: space-between;
`


const Container2 = styled.div`
    flex:1;
    margin: 15px;
    min-width:  350px;
    max-width: 350px;
    height: 480px;
    
}
`;

function Products() {

    const [produtos, setProdutos] = useState<Produto[]>([])
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
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
        <Container>
            {produtos.map(item => (
                <Product item={item} key={item.id} />
            ))}
        </Container>
        
        </>
    )
}

export default Products;