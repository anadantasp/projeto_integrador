import React, {useState, useEffect, ChangeEvent} from "react";
import './CadastroUsuario.css';
import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import User from "../../models/User";
import { cadastroUsuario } from "../../services/Service";

function CadastroUsuario() {

    let history = useHistory();
    const [confirmarSenha,setConfirmarSenha] = useState<String>("")
    const [user, setUser] = useState<User>(
        {
            id: 0,
            nomeCompleto: '',
            usuario: '',
            senha: ''
        })

    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nomeCompleto: '',
            usuario: '',
            senha: ''
        })

    useEffect(() => {
        if (userResult.id != 0) {
            history.push("/login")
            
        }
    }, [userResult])


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>){
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
        if(confirmarSenha == user.senha){
        cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
        alert('Usuario cadastrado com sucesso')
        }else{
            alert('Dados inconsistentes. Favor verificar as informações de cadastro.')
        }
    }

    return (
        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid item xs={6} className="imagem-cadastro"></Grid>
            <Grid item xs={6} alignItems="center">
                <Box className='padding-10'>
                    <form onSubmit={onSubmit}>
                        <Typography
                            variant="h3"
                            gutterBottom
                            color="textPrimary"
                            component="h3"
                            align="center"
                            className="texto-bold"
                        >
                            Cadastre-se com seu e-mail
                        </Typography>
                        <TextField value={user.nomeCompleto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            type="text"
                            id="nomeCompleto"
                            label="nomeCompleto"
                            variant="outlined"
                            name="nomeCompleto"
                            margin="normal"
                            fullWidth
                        />
                        <TextField value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            type="email"
                            id="usuario"
                            label="Usuario"
                            variant="outlined"
                            name="usuario"
                            margin="normal"
                            fullWidth
                        />
                        <TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            type="password"
                            id="senha"
                            label="Senha"
                            variant="outlined"
                            name="senha"
                            margin="normal"
                            fullWidth
                        />
                        <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)}
                            type="password"
                            id="conf-senha"
                            label="Confirmar Senha"
                            variant="outlined"
                            name="conf-senha"
                            margin="normal"
                            fullWidth
                        />
                        <Box marginTop={2} textAlign="center">
                            <Link to="/login" className="text-decoration">
                                <Button className='btn-cancelar' variant="contained">
                                    Cancelar
                                </Button>
                            </Link>
                            <Link to="/login" className="text-decoration">
                            <Button type='submit' variant="contained" className='btn-cadastrar'>
                                Cadastrar
                            </Button>
                            </Link>
                        </Box>
                    </form>
                </Box>
            </Grid>
        </Grid>
    );

}

export default CadastroUsuario;