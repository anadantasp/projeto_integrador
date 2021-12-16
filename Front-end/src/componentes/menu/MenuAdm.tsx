import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { busca } from '../../services/Service';
import Categoria from '../../models/Categoria';
import { Typography, Box } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/styles';
import { fontSize } from '@mui/system';
import { TokenState } from '../../store/tokens/tokensReducer';
import { useSelector } from 'react-redux';
import styled from '@emotion/styled/types/base';

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

        }
    })
);


export default function MenuAdm() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const classes = useStyles();

    const tipo = useSelector<TokenState, TokenState["tipos"]>(
        (state) => state.tipos
    );

    const handleClose = () => {
        setAnchorEl(null);
    };

    const [categorias, setCategorias] = useState<Categoria[]>([])
    const [token, setToken] = useLocalStorage('token');
    let history = useHistory();

    useEffect(() => {
        if (token == '') {
            toast.error('Você precisa estar logado!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "dark",
                progress: undefined,
            })
            history.push("/login")
        }
    }, [token])

    
    var produtosAdmin
    var categoriasAdmin
    var formularioProduto
    var formularioCategoria
    if (tipo == "Admin") {
        produtosAdmin = <Link to="/produtosdev" className='title' style={{ textDecoration: 'none', color: '#6eb658' }}>
            <Box mx={1}>
                <Typography variant="h6" color="initial" className={classes.title}>Produtos Admin</Typography>
            </Box>
        </Link>
        categoriasAdmin =
            <div><Link to="/categoriasdev" className='title' style={{ textDecoration: 'none', color: '#6eb658' }}>
                <Box mx={1}>
                    <Typography variant="h6" color="initial" className={classes.title}>Categorias Admin</Typography>
                </Box>
            </Link>
            </div>
        formularioProduto =
            <div>
                <Link to="/formularioProduto" className='title' style={{ textDecoration: 'none', color: '#6eb658' }}>
                    <Box mx={1}>
                        <Typography variant="h6" color="initial" className={classes.title}>Cadastro Produto</Typography>
                    </Box>
                </Link>
            </div>
        formularioCategoria = <div>
            <Link to="/formularioCategoria" className='title' style={{ textDecoration: 'none', color: '#6eb658' }}>
                <Box mx={1}>
                    <Typography variant="h6" color="initial" className={classes.title}>Cadastro Categoria</Typography>
                </Box>
            </Link>
        </div>
    }


    return (
        

        <div>
            <Typography
                variant="h6"
                id="demo-positioned-button"
                aria-controls="demo-positioned-menu"
                aria-haspopup="true"
                onMouseEnter={handleClick}
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                Operações Admin ˅
            </Typography>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onMouseLeave={handleClose}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                
                    <MenuItem className='MenuItem' onClick={handleClose}>{produtosAdmin}</MenuItem>
                    <MenuItem className='MenuItem' onClick={handleClose}>{categoriasAdmin}</MenuItem>
                    <MenuItem className='MenuItem' onClick={handleClose}>{formularioProduto}</MenuItem>
                    <MenuItem className='MenuItem' onClick={handleClose}>{formularioCategoria}</MenuItem>
                    
            </Menu>
        </div>
    );
}
