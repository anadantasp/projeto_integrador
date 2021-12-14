import React from "react";
import { AppBar, Toolbar, Typography, Box, Grid } from '@material-ui/core';
import { createStyles, makeStyles, Theme, MuiThemeProvider, createTheme, alpha } from '@material-ui/core/styles'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Link, useHistory } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import './Navbar.css'
import './Search'
import Search from "./Search";




const useStyles = makeStyles(() =>
    createStyles({

        customizeToolbar: {
            minHeight: 36

        },
        title: {
            flexGrow: 1,
            textAlign: "center",
            marginLeft: '75px',
            marginRight: '75px',
            textDecoration:'none'


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
            boxShadow: 'none',
            backgroundColor: '#C9E265'
        },

        appbarColor: {
            backgroundColor: '#C9E265'
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
            marginTop: '14rem'
        }
    })
);


export function Navbar() {
    const classes = useStyles();

    let history = useHistory(); // para redireccionar
    const [token, setToken] = useLocalStorage('token'); // para guardar el token en el localstorage
    function logout() {
        setToken(''); // para apagar el token del localstorage
        history.push('/login'); // para redireccionar a la pagina de login
    }

    return (
        <>
            <Grid container direction='column' className={classes.Margemtop} justifyContent='flex-start' alignItems='flex-start'>
                <Grid item alignItems='center' xs={6}>
                    <Box>
                        <AppBar position='absolute' className={classes.appbarColor} >
                            <Toolbar variant='dense'  >
                                <Box display='flex' >
                                    <Box>
                                        <img src="https://i.imgur.com/ljg0ZMX.png" alt="logo" height='155px' width='155px' />
                                    </Box>
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


                        </AppBar>

                    </Box>
                </Grid>

                <Grid item alignItems='center' xs={6}>
                    <AppBar position='absolute' className={classes.appbar}>
                        <Toolbar variant='dense' className={classes.customizeToolbar} >
                            <Box display='flex' justifyContent='space-around'>
                                <div>
                                    <Link to="/home" className='title'>
                                        <Box mx={1}>
                                            <Typography variant="h6" color="initial" className={classes.title}>Home</Typography>
                                        </Box>
                                    </Link>
                                </div>
                                <div>
                                    <Link to="/categorias" className='title'>
                                        <Box mx={1}>
                                            <Typography variant="h6" color="initial" className={classes.title}>Categorias</Typography>
                                        </Box>
                                    </Link>
                                </div>
                                <div>
                                    <Link to="/produtos" className='title'>
                                        <Box mx={1}>
                                            <Typography variant="h6" color="initial" className={classes.title}>Produtos</Typography>
                                        </Box>
                                    </Link>
                                </div>
                                <div>
                                    <Link to="/produtosdev" className='title'>
                                        <Box mx={1}>
                                            <Typography variant="h6" color="initial" className={classes.title}>Produtos Admin</Typography>
                                        </Box>
                                    </Link>
                                </div>
                                <div>
                                    <Link to="/categoriasdev" className='title'>
                                        <Box mx={1}>
                                            <Typography variant="h6" color="initial" className='{classes.title}'>Categorias Admin</Typography>
                                        </Box>
                                    </Link>
                                </div>
                                <div>
                                    <Box mx={1}>
                                        <Typography variant="h6" color="initial" className={classes.title}>Sobre Nós</Typography>
                                    </Box>
                                </div>
                            </Box>
                        </Toolbar>
                    </AppBar>
                </Grid>
            </Grid>
        </>
    )
}

export default Navbar;