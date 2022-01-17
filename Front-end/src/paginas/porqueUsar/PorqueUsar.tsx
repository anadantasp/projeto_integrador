import React from "react";
import { Grid, Typography, TextField, Button, Paper } from "@material-ui/core";
import { Box } from "@mui/material";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import './PorqueUsar.css'
import { green } from "@material-ui/core/colors";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { TokenState } from "../../store/tokens/tokensReducer";

function PorqueUsar() {

    let history = useHistory();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == "") {
            toast.error("Você precisa estar logado", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
            history.push("/login")

        }
    }, [token])

    const paperStyle = {
        paddinn: 20,
        height: "70vh",
        width: 420,
        margin: "45px auto",
        backgroundColor: "#96BE8C",
        borderRadius: "20px",
    };

    const btnStyle = {
        margin: "8px 0",
    };

    return (
        <Grid container>
            <Grid item xs={12} className="background-gradient-pq">
                <Box p={5} className="margin-bottom-pq">
                    <Typography className="titulo-porqueUsar-pq">Por que usar ?</Typography>
                </Box>
            </Grid>

            <Grid item xs={6} className="fundo-background-pq">
                <Box p={2} className="justify-pq">
                    <Typography className="margin-bottom titulos-pq">
                        Sustentabilidade
                    </Typography>
                    <Typography variant="h6" color="initial" className="texto-principal-pq">
                        Precisamos cuidar dos recursos naturais para que sejam preservados;
                        e os produtos ecológicos foram criados justamente para que haja uma
                        diminuição significativa da poluição, desmatamento, além da redução
                        na produção de lixo. A utilização de produtos de limpeza, higiene (e
                        até alguns cosméticos), fazem total diferença na rotina de cada
                        indivíduo que deseja contribuir com a manutenção da fauna, flora e
                        recursos naturais.Quando um produto ecológico é produzido, ele é
                        pensado de uma forma estratégica para elevar a sua vida útil e a sua
                        capacidade de usabilidade.Dessa maneira, você adquire um material
                        muito resistente, e que é capaz de sanar as suas necessidades de uma
                        forma consistente e muito benéfica.
                    </Typography>
                </Box>
            </Grid>

            <Grid
                item
                xs={6}
                className="imagem-sustentabilidade-pq fundo-background-pq"
            ></Grid>

            <Grid className="grid-4-pq margin-bottom" item xs={4}>
                <Box paddingX={22}>
                    <img
                        className="icon-economico-pq"
                        src="https://i.imgur.com/FVYoB1R.png"
                    />
                </Box>
                <Typography className="text-center-pq titulos-pq">Econômico</Typography>
                <Box className="justify-pq" p={2}>
                    <Typography className="paragrafos-pq" variant="body1" color="initial">
                        Os produtos da DesembalaMenos são pensados para promover o uso
                        inteligente de recursos naturais, produtos economicamente
                        sustentaveis considerando o consumo a longo prazo afim de promover
                        mais qualidade de vida aliada a preservação do meio ambiente.
                    </Typography>
                </Box>
                <Box>
                    <Box paddingX={18} className="margin-bottom-pq">
                        <Button className="button-pq">Saiba mais</Button>
                    </Box>
                </Box>
            </Grid>

            <Grid className="grid-4-pq margin-bottom-pq" item xs={4}>
                <Box paddingX={22}>
                    <img className="icon-social-pq" src="https://i.imgur.com/OQwdLWz.png" />
                </Box>
                <Typography className="text-center-pq  titulos-pq">Social</Typography>
                <Box className="justify-pq" p={2}>
                    <Typography className="paragrafos-pq" variant="body1" color="initial">
                        A DesembalaMenos oferece um ambiente de trabalho agradavél a seus
                        colaboradores, prezamos a saúde e o bem estar dos nossos
                        funcionários. além de levarmos mais qualidade de vida a todos os
                        consumidores por meio dos nossos produtos.
                    </Typography>
                </Box>
                <Box paddingX={18} className="margin-bottom-pq">
                    <Button variant="outlined" className="button-pq">
                        Saiba mais
                    </Button>
                </Box>
            </Grid>
            <Grid className="grid-4-pq margin-bottom-pq" item xs={4}>
                <Grid item xs={12}>
                    <Box paddingX={22}>
                        <img
                            className="icon-sustentavel-pq"
                            src="https://i.imgur.com/Kz7xmDB.png"
                        />
                    </Box>
                </Grid>
                <Typography className="text-center-pq titulos-pq">Ambiental</Typography>
                <Box className="justify-pq" p={2}>
                    <Typography className="paragrafos-pq" variant="body1" color="initial">
                        Os produtos da DesembalaMenos possuem embalagem mínima ou ecológica. Além disso têm como características a durabilidade e a resistência,
                        consideradas importantes mecanismos para a preservação do meio
                        ambiente.
                    </Typography>
                </Box>
                <Box paddingX={18} className="margin-bottom-pq">
                    <Button variant="outlined" className="button-pq">
                        Saiba mais
                    </Button>
                </Box>
            </Grid>

            <Grid item xs={6} className="fundo-background-pq">
                <Box p={5}>
                    <img className="img-pq" src="https://i.imgur.com/vyefQjF.png" />
                </Box>
            </Grid>

            <Grid item xs={6} className="fundo-background-pq">
                <Paper elevation={8} style={paperStyle}>
                    <Grid>
                        <h2 className="card-titulo-pq">Faça a diferença</h2>
                    </Grid>
                    <Typography className="texto-card-pq paragrafos-pq">
                        Não fique em dívidas com planeta, adote princípios sustentáveis e
                        ajude a construir um mundo melhor!
                    </Typography>
                    <Typography className="texto-card-pq paragrafos-pq">
                        Semear ideias ecológicas e plantar sustentabilidade é ter a garantia de colhermos um futuro fértil e consciente.
                    </Typography>
                    <Typography className="texto-card-pq paragrafos-pq"> ⁠Sustentabilidade não é moda, é uma necessidade. Pensar em sustentabilidade é pensar na família, no próximo e em você mesmo.</Typography>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default PorqueUsar;
