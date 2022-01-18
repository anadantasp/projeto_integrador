import React from "react";
import { AppBar, Toolbar, Typography, Box, Grid, Badge } from '@material-ui/core';
import { createStyles, makeStyles, Theme, MuiThemeProvider, createTheme, alpha } from '@material-ui/core/styles'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Link, useHistory } from "react-router-dom";
import './Navbar.css'
import './Search'
import Search from "./Search";
import { toast } from 'react-toastify';
import MenuComponent from "../menu/MenuComponent";
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/tokensReducer";
import { addToken } from "../../store/tokens/action";
import MenuAdm from "../menu/MenuAdm";


const useStyles = makeStyles(() =>
    createStyles({
        appbarColor: {
            backgroundColor: '#C9E265',
            boxShadow: 'none',
        },
        Margemtop: {
            marginTop: '6.5rem',
        },
        MinHeitgh: {
            minHeight: 20,
        }
    })
);


export function Navbar() {
    const classes = useStyles();

    let history = useHistory(); // para redirecionar
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    const dispatch = useDispatch();

    const tipo = useSelector<TokenState, TokenState["tipos"]>(
        (state) => state.tipos
    );

    var opcaoAdmin
    if (tipo == "Admin") {
        opcaoAdmin = <MenuAdm />
    }

    function logout() {
        dispatch(addToken('')); // para apagar token do localstorage
        toast.info('usuario deslogado', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: 'light',
        })
        history.push('/login'); //para redirecionar a pagina de login
    }

    var navbarComponent;

    if (token != "") {
        navbarComponent =
            <Grid container direction='column' justifyContent='flex-start' alignItems='flex-start'>
                <Box className={classes.Margemtop}>
                    <AppBar position='absolute' className={classes.appbarColor} >
                        <Box display='flex'  >
                            <Box display='flex' className='login'>
                                <Typography variant="h6" color="initial" className='fonte-texto-menu' onClick={() => logout()}>Logout</Typography>
                                <Link to="/carrinho" className='title-nav'>
                                    <Badge badgeContent={2} color="primary">
                                        <ShoppingCartIcon className="carrinho" />
                                    </Badge>
                                </Link>
                            </Box>
                        </Box>

                        <Box>
                            <Box className='box-img-navbar'>
                                <img src="https://i.imgur.com/xh6eNEB.png" alt="logo" width='200px' />
                            </Box>
                            <Box className="box-search">
                                <Search />
                            </Box>
                        </Box>

                        <Box className="text-navbar">
                            <Box className="margin-right-navbar" >
                                <Link to="/home" className='title-nav'>
                                    <Typography variant="h6" color="initial" className="fonte-texto-menu">Home |</Typography>
                                </Link>
                            </Box>

                            <Box>
                                <MenuComponent />
                            </Box>

                            <Box className="margin-left-navbar" >
                                <Link to="/produtos" className='title-nav'>
                                    <Typography variant="h6" color="initial" className="fonte-texto-menu">| Produtos</Typography>
                                </Link>
                            </Box>

                            <Box className="margin-right-navbar" marginLeft={'7px'}>
                                <Link to="/sobreNos" className='title-nav'>
                                    <Typography variant="h6" color="initial" className="fonte-texto-menu">| Sobre Nós </Typography>
                                </Link>
                            </Box>

                            <Box>
                                {opcaoAdmin}
                            </Box>
                        </Box>

                    </AppBar>
                </Box>
            </Grid>
    }

    return (
        <>
            {navbarComponent}
        </>
    )
}

export default Navbar;