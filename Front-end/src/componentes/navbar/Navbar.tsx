import React from "react";
import { AppBar, Toolbar, Typography, Box, Grid} from '@material-ui/core';
import { createStyles, makeStyles, Theme, MuiThemeProvider, createTheme, alpha} from '@material-ui/core/styles'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Link } from "react-router-dom";
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
            
            
        },
        title2: {
            flexGrow: 1,
            textAlign: "center",
            marginLeft: '5px',
            marginRight: '5px'
        },
        appbar: {
            alignItems: 'center',
            marginTop: '122px',
            boxShadow: 'none',
            backgroundColor: '#FD811F'
        },

        appbarColor: {
            backgroundColor: '#FD811F'
        },

        barra:{
            align: 'center',
            textAlign: 'center'
            
            
        },
        box:{
        marginRight: 'auto',
        marginLeft: 'auto',
        width: '500px' 
        }
    })
);


export function Navbar(){
    const classes = useStyles();

    return(
        <>
            <Grid container direction='column' justifyContent='flex-start' alignItems='flex-start'>
                <Grid item alignItems='center' xs={6}>
            <Box>
        <AppBar position='fixed' className= {classes.appbarColor} >
            <Toolbar variant='dense'  >
                <Box display='flex' >
                <Box> 
                    <img src="https://i.imgur.com/ESvAjMO.png" alt="logo" />
                </Box>
                <Box display= 'flex' className='login'> 
                    <Typography variant="h6" color="initial" className={classes.title2}>Login </Typography>
                    <Typography variant="h6" color="initial" className={classes.title2}>/</Typography>
                    <Typography variant="h6" color="initial" className={classes.title2}>Cadastro</Typography>
                                        <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank" className={classes.title2}>
                            <ShoppingCartIcon className=" redes" />
                        </a>
                </Box>
                </Box>

            </Toolbar>
                <Box className={classes.box}>
                    <Search/>
                </Box>
            
                
        </AppBar>
        
        </Box>
        </Grid>

                <Grid item alignItems='center' xs={6}>
                    <AppBar className={classes.appbar}>
                    <Toolbar variant='dense' className={classes.customizeToolbar} >
                        <Box display='flex' justifyContent='space-around'>
                            <div>
                                <Box mx={1}>
                                    <Typography variant="h6" color="initial" className={classes.title}>Home</Typography>
                                </Box>
                            </div>
                            <div>
                                <Box mx={1}>
                                    <Typography variant="h6" color="initial" className={classes.title}>Categorias</Typography>
                                </Box>
                            </div>
                            <div>
                                <Box mx={1}>
                                    <Typography variant="h6" color="initial" className={classes.title}>Produtos</Typography>
                                </Box>
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
