import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { busca } from '../../services/Service';
import Categoria from '../../models/Categoria';
import { Box, Typography } from '@material-ui/core';
import { makeStyles, createStyles, styled } from '@material-ui/styles';
import { fontSize } from '@mui/system';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';

const useStyles = makeStyles(() =>
  createStyles({
    title: {
      flexGrow: 1,
      textAlign: "center",
      marginLeft: '75px',
      marginRight: '75px',
      textDecoration: 'none',
      cursor: 'pointer'
    },
    menuItemStyle: {
      textDecoration: 'none',
      color: '#6eb658',

    }
  })
);

export default function MenuComponent() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const classes = useStyles();


  const handleClose = () => {
    setAnchorEl(null);
  };

  const [categorias, setCategorias] = useState<Categoria[]>([])
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
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


  async function getCategoria() {
    await busca("/categorias", setCategorias, {
      headers: {
        'Authorization': token
      }
    })
  }


  useEffect(() => {
    getCategoria()
  }, [categorias.length])


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
        Categorias ˅
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
        {categorias.map(categoria => (
          <div>
            <Link to={`/categoriaDetalhe/${categoria.id}`} className={classes.menuItemStyle} >
              <Box mx={4} className={classes.menuItemStyle}>

                <MenuItem onClick={handleClose}>
                  <Typography variant="h6" color="initial" className={classes.title}>
                    {categoria.categoria}</Typography>
                </MenuItem>

              </Box>
            </Link>
          </div>
        ))
        }
      </Menu>
    </div>
  );
}
