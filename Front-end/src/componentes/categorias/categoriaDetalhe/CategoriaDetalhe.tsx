import { useHistory } from "react-router-dom";
import { Card, Typography, Button } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { CardContent, CardActions } from "@material-ui/core";
import { useState } from "react";
import useLocalStorage from "react-use-localstorage";
import Categoria from "../../../models/Categoria";
import { ChangeEvent } from "react";
import { useEffect } from "react";
import { busca, buscaId,post, put } from "../../../services/Service";
import Produto from "../../../models/Produto";
import { Box } from "@material-ui/core";

import Product from "../../produtos/cardprodutos/Produto";
import styled from "styled-components";

function CategoriaDetalhe() {
    const { id } = useParams<{ id: string }>();
    const [categoria, setCategoria] = useState<Categoria>({
        id: 0,
        descricao: '',
        categoria: '',
        palavraChave: '',
        produto: []
    })
    const [token, setToken] = useLocalStorage('token');
    let history = useHistory();
    

    useEffect(() => {
        if (token == '') {
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
            produto: []
        })
    }

    const Container = styled.div`
padding: 20px;
display: flex;
flex-wrap: wrap;
    justify-content: space-around;
`
    

    return (
        <>
                    <Container>
                        
                                    {categoria.categoria}
                                
                                {categoria.produto.map(produto => (
                                    <Product item={produto} key={produto.id} />
                                ))}
                            
                    </Container>
        </>
    );
}
export default CategoriaDetalhe;