import React from 'react'
import styled from 'styled-components'
import './Carrinho.css'
import { Add, Remove } from '@material-ui/icons';
const Container = styled.div``;

const Wrapper = styled.div`
padding: 20px;
`;

const Title = styled.h1`
font-weight: 300;
text-align: center;
`;

const TopButton = styled.button`
padding: 10px;
font-weight: 500;
cursor: pointer;
`;

const TopButton2 = styled.button`
padding: 10px;
font-weight: 500;
cursor: pointer;
border: none;
background-color: black;
color: white;
`;

const TopTexts = styled.div`
`;

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`;


const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
`;

const Bottom = styled.div`
display: flex;
justify-content: space-between;`;

const Info = styled.div`
flex: 3;
`;



const Product = styled.div`
display: flex;
justify-content: space-between;`;

const ProductDetail = styled.div`
flex: 2;
display: flex;
`;

const Details = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
`;

const ProductName = styled.span``;
const ProductId = styled.span``;

const PriceDetail = styled.div`
flex:1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const Hr = styled.hr`
background-color: #eee;
border: none;
height: 1px;
`;
const ProductAmountContainer = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
`;

const ProductAmount = styled.div`
font-size: 24px;
margin: 5px;
`;

const ProductPrice = styled.div`
font-size: 30px;
font-weight: 200
`;

const Summary = styled.div`
flex: 1;
border: 0.5px solid lightgray;
border-radius: 10px;
padding: 20px;
height: 50vh;
`;

const SummaryTitle = styled.h1`
font-weight: 200`;

const SummaryItem = styled.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;
`;

const SummaryItem2 = styled.span`
margin: 30px 0px;
display: flex;
justify-content: space-between;
font-weight: 500;
font-size: 24px;
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
width: 100%;
padding: 10px;
background-color: black;
color: white;
font-weight: 600;
`;


export const Carrinho = () => {
    return (
        <Container>
            <Wrapper>
                <Title>
                    Seu carrinho
                </Title>
                <Top>
                <TopButton>
                    Continuar Comprando
                </TopButton>
                    <TopTexts>
                        <TopText>Seu Carrinho(2)</TopText>
                        
                    </TopTexts>
                    <TopButton2>
                        Comprar Agora
                    </TopButton2>
                </Top>
                <Bottom>

                    <Info>
                        <Product>
                            <ProductDetail>
                                <img src="https://i.imgur.com/a6uCjwF.jpg" className='imgdetail'/>
                                <Details>
                                    <ProductName><b>Produto:</b> Colher de cozinha de bambu</ProductName>
                                    <ProductId><b>Id:</b> 99991709</ProductId>
                                    
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>2</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice>R$ 30.00</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr/>
                        <Product>
                            <ProductDetail>
                                <img src="https://i.imgur.com/jV4iGhm.jpg" className='imgdetail' />
                                <Details>
                                    <ProductName><b>Produto:</b> Marmita Inox</ProductName>
                                    <ProductId><b>Id:</b> 99991709</ProductId>

                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>1</ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                <ProductPrice>R$ 38.00</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr />
                    </Info>
                    <Summary>
                        <SummaryTitle>
                            Resumo da Compra
                        </SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>R$ 68.00</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Frete Estimado</SummaryItemText>
                            <SummaryItemPrice>R$ 4.50</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Desconto de Entrega</SummaryItemText>
                            <SummaryItemPrice>R$ -9.00</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem2>
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>R$ 63.50</SummaryItemPrice>
                        </SummaryItem2>
                        <Button>COMPRAR</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
        </Container>
    )
}
