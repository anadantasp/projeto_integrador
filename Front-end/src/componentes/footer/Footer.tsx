import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { Typography, Box, Grid } from '@material-ui/core';
import './Footer.css';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import { Link } from 'react-router-dom';

function Footer() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    var footerComponent;

    if (token != "") {
        footerComponent = <Grid container >
            <Grid alignItems="center" item xs={12}>
                <Box className='box1'>
                    <Box display="flex" alignItems="center" justifyContent="center" >

                        <Box className='redessociais' marginLeft="auto" marginBottom="auto" paddingX={3} paddingTop={2}>
                            <a href="https://www.instagram.com/desembalamenos/" target="_blank">
                                <InstagramIcon fontSize="large" className='redes-sociais' />
                            </a>
                            <a href="https://github.com/anadantasp/projeto_integrador" target="_blank">
                                <GitHubIcon fontSize="large" className='redes-sociais' />
                            </a>
                            <a href="https://www.linkedin.com/in/anadantasp/" target="_blank">
                                <LinkedInIcon fontSize="large" className='redes-sociais' />
                            </a>
                        </Box>
                    </Box>

                    <Box display="flex" alignItems="center" justifyContent="center" paddingBottom={3} paddingTop={3} className="borda">
                        <Box marginRight="auto" marginBottom="auto" paddingLeft={7}>
                            <Typography variant='h6' align="right" gutterBottom className="justify titulos">Produtos</Typography>
                            <Link to="/produtos" className='title'>
                                <Typography variant='subtitle1' align="right" gutterBottom className="justify">Todos os produtos</Typography>
                            </Link>
                            <Link to="/categoriaDetalhe/5" className='title'>
                                <Typography variant='subtitle1' align="right" gutterBottom className="justify">Para casa</Typography>
                            </Link>
                            <Link to="/categoriaDetalhe/3" className='title'>
                                <Typography variant='subtitle1' align="right" gutterBottom className="justify">Para você</Typography>
                            </Link>
                            <Link to="/categoriaDetalhe/4" className='title'>
                                <Typography variant='subtitle1' align="right" gutterBottom className="justify">Aromaterapia</Typography>
                            </Link>
                            <Link to="/categoriaDetalhe/6" className='title'>
                                <Typography variant='subtitle1' align="right" gutterBottom className="justify">Sustentáveis</Typography>
                            </Link>
                        </Box>
                        <Box marginRight="auto" marginBottom="auto" paddingLeft={16}>
                            <Typography variant='h6' align="right" gutterBottom className="justify titulos">Ajuda</Typography>
                            <Typography variant='subtitle1' align="right" gutterBottom className="justify">Dúvidas frequentes</Typography>
                            <Typography variant='subtitle1' align="right" gutterBottom className="justify">Formas de pagamento</Typography>
                            <Typography variant='subtitle1' align="right" gutterBottom className="justify">Política de entrega</Typography>
                            <Typography variant='subtitle1' align="right" gutterBottom className="justify">Trocas e devoluções</Typography>
                            <Typography variant='subtitle1' align="right" gutterBottom className="justify">Política de privacidade</Typography>
                        </Box>

                        <Box marginRight="auto" marginBottom="auto" paddingLeft={16}>
                            <Typography variant='h6' align="right" gutterBottom className="justify titulos">Para ler</Typography>
                            <Link to="/sobreNos" className='title'>
                                <Typography variant='subtitle1' align="right" gutterBottom className="justify">Sobre nós</Typography>
                            </Link>
                            <Link to="/porqueUsar" className='title'>
                                <Typography variant='subtitle1' align="right" gutterBottom className="justify">Por que usar?</Typography>
                            </Link>
                        </Box>
                        <Box marginRight="auto" marginBottom="auto" paddingLeft={16}>

                            <Typography variant='h6' align="right" gutterBottom className="justify titulos">Atendimento</Typography>
                            <Typography variant='subtitle1' align="right" gutterBottom className="justify"><EmailIcon fontSize="medium" className='redes-sociais' /> desembalamenos@gmail.com</Typography>
                            <Typography variant='subtitle1' align="right" gutterBottom className="justify"><WhatsAppIcon fontSize="medium" className='redes-sociais' /> (11) 98888-8888</Typography>

                        </Box>
                    </Box>

                    <Box className="borda" paddingTop={2}>
                        <Typography variant="subtitle2" align="center" gutterBottom className='texto2' >© 2021 DesembalaMenos. CNPJ:50.201.181/0001-92. Rua Funchal 305 - São Paulo/SP - CEP:04551-906 </Typography>
                    </Box>

                </Box>
            </Grid>
        </Grid>
    }

    return (
        <>
            {footerComponent}
        </>
    )
}

export default Footer
