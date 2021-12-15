import React, { useState, useEffect, ChangeEvent } from "react";
import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { login } from "../../services/Service";
import UserLogin from "../../models/UserLogin";
import './Login.css';

function Login() {
    let history = useHistory();
    const [token, setToken] = useLocalStorage('token');
    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            usuario: '',
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
        if (token != '') {
            history.push('/home')
        }
    }, [token])



    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        try {
            await login(`/usuarios/logar`, userLogin, setToken)


            alert('Usuário logado com sucesso!')
        } catch (error) {
            alert('Dados do usuário inconsistentes. Erro ao logar!')

        }
    }




    return (
        <Grid container direction='row' justifyContent='center' alignItems='center' className='background'>
            <Grid className="tamanho" alignItems='center' xs={12}>
                <Box marginY={20} className="bordaLogin" paddingX={3} paddingY={8}>
                    <form onSubmit={onSubmit}>
                        <img className='logo' src="https://i.imgur.com/VzAOo5s.png" alt="logo-desemabala" width='150px' height='150px'>
                        </img>
                        <Typography className='email' variant='h5' gutterBottom color='textPrimary' component='h3' align='center'> Login </Typography>
                        <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center'>

                            <Button className='botaologin' type='submit' variant='contained' color='primary'>
                                Logar
                            </Button>

                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box>
                            <Typography className='textos' variant='subtitle1' gutterBottom align='center'>Não tem uma conta?  </Typography>
                        </Box>
                        <Link to='/cadastrousuario'>
                            <Typography variant='subtitle1' gutterBottom align='center' id='cadastre-se'> Cadastre-se</Typography>
                        </Link>
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} >

            </Grid>
        </Grid>
    );
}

export default Login;