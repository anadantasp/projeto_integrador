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

export default function MenuComponent() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
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
        theme: "light",
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
      <Button
        id="demo-positioned-button"
        aria-controls="demo-positioned-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Categorias
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        {categorias.map(categoria => (
          <Link to={`/produtoPorCategoria/${categoria.id}`} className="text-decorator-none">
            <MenuItem onClick={handleClose}>{categoria.descricao}</MenuItem>
          </Link>
        ))
        }


      </Menu>
    </div>
  );
}
