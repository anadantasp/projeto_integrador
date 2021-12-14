import { Typography } from '@material-ui/core';
import styled from 'styled-components'
import { busca } from '../../../services/Service';
import React from 'react';
import './Produto.css';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Produto';
const Button = styled.button`
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;
justify-content: center;
display: flex;
opacity: 0;
}
`;

const Container = styled.div`
    flex:1;
    margin: 15px;
    min-width:  350px;
    max-width: 350px;
    height: 480px;
    background-color: none;
    z-index: 3;
    justify-content: center;
    
    position: relative;
    border-radius: 20px;
    border-style: solid;
    border-width: 2px;
    border-color: grey;
    

    &:hover{
        background-color: #a5e293;
        transform-origin: top;
        height: 500px;
        transition: all .5s ease-in-out;
    }
    &:hover ${Button}{
    opacity: 1;
}
`;






const Product = ({ item }: any) => {


    return (

        <Container >

            <Link to={"/produtoDetalhe/" + item.id}  >
                <img src={item.imagem} className='imag' />
            </Link>

            <Box justifyContent='center' display='flex'>
                <Typography>
                    {item.nome}

                </Typography>
            </Box>
            <Box justifyContent='center' display='flex'>
                <Typography>
                    {item.preco}

                </Typography>
            </Box>
            <Box justifyContent='center' className='display' >
                <Button className='btn'>Comprar</Button>
            </Box>

        </Container>
    )
}

export default Product;