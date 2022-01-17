import React, { useState, useEffect, ChangeEvent } from "react";
import { useHistory } from "react-router-dom";
import User from "../../models/User";
import { cadastroUsuario } from "../../services/Service";
import { Grid, Box, Typography, TextField, Button, Paper } from '@material-ui/core';
import { Link } from "react-router-dom";
import './CadastroUsuario.css';
import { FormControl, InputLabel, Select, FormHelperText, MenuItem } from "@material-ui/core";
import styled from "styled-components";
import './CadastroUsuario.css'
import { toast } from "react-toastify"

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

function CadastroUsuario() {
    let history = useHistory();
    const [confirmarSenha, setConfirmarSenha] = useState<String>("")
    const [user, setUser] = useState<User>(
        {
            id: 0,
            nomeCompleto: '',
            usuario: '',
            tipo: '',
            senha: ''
        })

    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nomeCompleto: '',
            usuario: '',
            tipo: '',
            senha: ''
        })

    useEffect(() => {
        if (userResult.id != 0) {
            history.push("/login")

        }
    }, [userResult])


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }


    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if (confirmarSenha == user.senha) {
            cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
            toast.success("Usuario cadastrado com sucesso!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "light",
                progress: undefined,
            })
        } else {
            toast.error("Dados inconsistentes. Favor verificar as informações de cadastro.", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "light",
                progress: undefined,
            })
        }
    }

    return (
        <Box className='container'>
            <Paper elevation={15} className='paperStyle'>
                <Box className='box-img-cadastro'>
                    <img src="https://i.imgur.com/xh6eNEB.png" width='60%' alt="logo" className='img-cadastro' />
                </Box>
                <form onSubmit={onSubmit}>

                    <Box className='box-cadastro'>
                        <Typography variant='h5' align='center' className='loginText'>Cadastro</Typography>
                        <CssTextField value={user.nomeCompleto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='nome' label='Nome' variant='outlined' name='nomeCompleto'
                            margin='normal' fullWidth />
                        <CssTextField value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usario' label='E-mail' variant='outlined' name='usuario'
                            margin='normal' fullWidth />
                        <CssTextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='Senha' variant='outlined' name='senha' type='password'
                            margin='normal' fullWidth />
                        <CssTextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id='confirmarsenha' label='Confirmar Senha' variant='outlined'
                            type='password' name='confirmarsenha' margin='normal' fullWidth />
                    </Box>
                    <Box>
                        <Box marginTop={2} textAlign='center'>
                            <Button type='submit' className='button-cadastro' variant="contained">
                                Cadastrar
                            </Button>
                            <Typography variant='subtitle1' gutterBottom align='center' className='font'> Já tem uma conta? Faça seu
                                <Link to='/login' className='link-login'>
                                    Login
                                </Link>
                            </Typography>
                        </Box>
                    </Box>
                </form>
            </Paper>
        </Box>
    );

}


export default CadastroUsuario;