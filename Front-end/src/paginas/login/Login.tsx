import React, { useState, useEffect, ChangeEvent } from "react";
import { Grid, Box, Typography, TextField, Button, Paper } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { login } from "../../services/Service";
import UserLogin from "../../models/UserLogin";
import './Login.css';
import { useDispatch } from "react-redux";
import { addToken, addTipo } from "../../store/tokens/action";
import { toast } from "react-toastify";
import styled from "styled-components";

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#70A25C',
    },
    '& .MuiFormLabel-root': {
        color: '#70A25C',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'black',
    },
    '& .MuiInputBase-input': {
        color: '#70A25C',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'green',
        },
        '&:hover fieldset': {
            borderColor: '#70A25C',
            boxShadow: '2px 2px 2px #70A25C',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#70A25C',
            boxShadow: 'none',
        },
    },
});

function Login() {

    let history = useHistory();
    const dispatch = useDispatch();
    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            usuario: '',
            tipo: '',
            senha: '',
            token: ''
        }
    )

    const [respUserLogin, setRespUserLogin] = useState<UserLogin>(
        {
            id: 0,
            usuario: '',
            tipo: '',
            senha: '',
            token: ''
        }
    )

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }



    useEffect(() => {

        if (respUserLogin.token != '') {
            dispatch(addToken(respUserLogin.token));

            // adicione dispacth para tipo
            dispatch(addTipo(respUserLogin.tipo));
            history.push('/home')
        }
    }, [respUserLogin.token])


    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await login(`/usuarios/logar`, userLogin, setRespUserLogin)
            toast.success('Usuário logado com sucesso!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        } catch (error) {
            toast.error('Dados do usuário inconsistentes. Erro ao logar!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        }
    }



    return (
        <Box className='container-login'>

            <Paper elevation={15} className='paperStyle-login'>
                <Box className='box-img' >
                    <img src="https://i.imgur.com/xh6eNEB.png" width='80%' alt="logo" className='img' />
                </Box>
                <Box>
                    <form onSubmit={onSubmit}>
                        <Box className='box-login'>
                            <Typography variant='h5' align='center' className='loginText'>
                                Login
                            </Typography>
                            <CssTextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                            <CssTextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                            <Button type='submit' variant="contained" className="button-login">
                                Login
                            </Button>
                        </Box>
                        <Box>
                            <Typography variant='subtitle1' gutterBottom align='center' className='font'>Não tem uma conta?
                                <Link to='/cadastrousuario' className='login-link-cadastro'>
                                    Cadastre-se
                                </Link>
                            </Typography>
                        </Box>
                    </form>
                </Box>
            </Paper>
        </Box >
    );
}

export default Login;