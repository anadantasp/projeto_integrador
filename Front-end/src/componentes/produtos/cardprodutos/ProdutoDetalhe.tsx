import { useHistory, useParams } from 'react-router';
import React, { useState, useEffect, ChangeEvent } from 'react'
import { buscaId } from '../../../services/Service';
import Produto from '../../../models/Produto';
import useLocalStorage from 'react-use-localstorage';
import { busca } from '../../../services/Service';
import Categoria from '../../../models/Categoria';
import styled from 'styled-components';
import './ProdutoDetalhe.css'
import { Add, AddAlarm, Remove } from '@material-ui/icons';

function ProdutoDetalhe(){
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
            palavraChave: '',
            produto: [],
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

    const Container = styled.div`
    margin-top: 80px;
    `;

    const Wrapper = styled.div`
    pagging: 50px;
    display: flex;
    `;

    const ImgContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    `;

    const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 30px;`;

    const Title = styled.h1`
    font-weight: 200;`;

    const Date = styled.h3`
    font-weight: 300;`;

    const Desc = styled.p`
    margin: 20px 0px;`;

    const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
    `;

    const AddContainer = styled.div`
    width: 50%;
    display:flex;
    align-items: center;
    justify-content: space-between;
    `;

    const AmountContainer = styled.div`
    display:flex;
    align-items: center;
    font-weight: 600;
    `;

    const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
    `;

    const Button = styled.button`font-size: 1em;
margin: 1em;
padding: 15px;
border: 2px solid teal;
justify-content: center;
display: flex;
background-color: #e0e0e0;
border-color: #5d5d5d;
color: black;
cursor: pointer;
font-weight: 500;
&:hover{
    background-color: #858585;
}
`;
    



    return (
        <>
        <Container>
        <Wrapper>
            <ImgContainer>
            <img src={produto.imagem} className='image-detail' />
            </ImgContainer>        
        <InfoContainer>
            <Title>{produto.nome}</Title>
            <Date>{produto.dtfabricacao}</Date>
            <Desc>{produto.descricao}</Desc>
            <Price>{produto.preco}</Price>
            <AddContainer>
                <AmountContainer>
                    <Remove/>
                    <Amount>1</Amount>
                    <Add/>
                </AmountContainer>
                <Button>Comprar</Button>
            </AddContainer>
        </InfoContainer>
        </Wrapper>
        </Container>
        </>
    )
}

export default ProdutoDetalhe;
