import React from 'react'
import './CadastroUsuario.css';
import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

function CadastroUsuario() {
    return (
        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid item xs={6} className="imagem-cadastro"></Grid>
            <Grid item xs={6} alignItems="center">
                <Box className='padding-10'>
                    <form>
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
                        <TextField
                            type="text"
                            id="nome"
                            label="Nome"
                            variant="outlined"
                            name="nome"
                            margin="normal"
                            fullWidth
                        />
                        <TextField
                            type="email"
                            id="usuario"
                            label="Usuario"
                            variant="outlined"
                            name="usuario"
                            margin="normal"
                            fullWidth
                        />
                        <TextField
                            type="password"
                            id="senha"
                            label="Senha"
                            variant="outlined"
                            name="senha"
                            margin="normal"
                            fullWidth
                        />
                        <TextField
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
                            <Button type='submit' variant="contained" className='btn-cadastrar'>
                                Cadastrar
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Grid>
        </Grid>
    );

}

export default CadastroUsuario;