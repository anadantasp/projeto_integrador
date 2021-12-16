import React from "react";
import { AppBar, Toolbar, Typography, Box, Grid } from '@material-ui/core';
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

        customizeToolbar: {
            minHeight: 36,
            justifyContent: 'center',
        },
        title: {
            flexGrow: 1,
            textAlign: "center",
            marginLeft: '75px',
            marginRight: '75px',
            textDecoration: 'none'

        },
        title2: {
            flexGrow: 1,
            textAlign: "center",
            marginLeft: '5px',
            marginRight: '5px',
            cursor: 'pointer'
        },
        appbar: {
            alignItems: 'center',
            marginTop: '210px',
            backgroundColor: '#C9E265'
        },
        appbarColor: {
            backgroundColor: '#C9E265',
            boxShadow: 'none',
        },
        barra: {
            align: 'center',
            textAlign: 'center'
        },
        box: {
            marginRight: 'auto',
            marginLeft: 'auto',
            width: '500px'
        },
        Margemtop: {
            marginTop: '10rem'
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
        opcaoAdmin = <MenuAdm/>
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
        history.push('/login'); // para redirecionar a pagina de login
    }

    var navbarComponent;

    if(token != ""){
        navbarComponent = <Grid container direction='column' justifyContent='flex-start' alignItems='flex-start'>
        <Grid alignItems='center' xs={6}>
            <Box className={classes.Margemtop}>
                
                <AppBar position='absolute' className={classes.appbarColor} >
                    <Toolbar variant='dense'  >
                        <Box display='flex' >
                            <img src="https://i.imgur.com/kSloteU.png" alt="logo" height='18px' width='100%' />

                            <Box display='flex' className='login'>
                                <Typography variant="h6" color="initial" className={classes.title2} onClick={() => logout()}>Logout</Typography>
                                <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank" className={classes.title2}>
                                    <ShoppingCartIcon className=" redes" />
                                </a>
                            </Box>
                        </Box>
                    </Toolbar>

                    <Box className={classes.box}>
                        <Search />
                    </Box>

                    <Box >
                        <Toolbar variant='dense' className={classes.customizeToolbar} >
                            <Box display='flex' >
                                <div>
                                    <Link to="/home" className='title'>
                                        <Box mx={1}>
                                            <Typography variant="h6" color="initial" className={classes.title}>Home</Typography>
                                        </Box>
                                    </Link>
                                </div>
                                <div>
                                    <MenuComponent/>
                                </div>
                                <div>
                                    <Link to="/produtos" className='title'>
                                        <Box mx={1}>
                                            <Typography variant="h6" color="initial" className={classes.title}>Produtos</Typography>
                                        </Box>
                                    </Link>
                                </div>
                                <div>
                                    {opcaoAdmin}
                                </div>
                                
                                
                                
                                <div>
                                    <Box mx={1}>
                                        <Typography variant="h6" color="initial" className={classes.title}>Sobre Nós</Typography>
                                    </Box>
                                </div>
                            </Box>
                        </Toolbar>
                    </Box>
                </AppBar>

            </Box>
        </Grid>
    </Grid>
    }

    return (
        <>
            {navbarComponent}
        </>
    )
}

export default Navbar;