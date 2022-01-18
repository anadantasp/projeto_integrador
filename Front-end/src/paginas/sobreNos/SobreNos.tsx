import React from "react";
import { Grid, Typography, TextField, Button, Paper } from "@material-ui/core";
import { Box } from "@mui/material";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import "./SobreNos.css";
import { green } from "@material-ui/core/colors";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useHistory } from "react-router-dom";
import { TokenState } from "../../store/tokens/tokensReducer";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function SobreNos() {
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
            history.push("/login");
        }
    }, [token]);

    const paperStyle = {
        height: "90%",
        width: "70%",
        margin: "45px auto",
        backgroundColor: "#96BE8C",
        borderRadius: "10px",
    };

    return (
        <Grid container className="background-quem-somos">

            <Grid xs={12} className="background-desembala-menos altura">
                <Box className="box-titulo-quemsomos">
                    <Typography className="titulo-quem-somos">Quem somos?</Typography>
                </Box>
                <Box p={2}>
                    <Typography
                        variant="h6"
                        color="initial"
                        className="texto-desembala-menos"
                    >
                        A DesembalaMenos é uma empresa que nasceu para oferecer ao mercado
                        consumidor brasileiro produtos e serviços que trazem benefícios ao
                        nosso dia a dia, com respeito ao ambiente em que vivemos. Precisamos
                        cuidar dos recursos naturais para que sejam preservados; e os
                        produtos ecológicos foram criados justamente para que haja uma
                        diminuição significativa da poluição, desmatamento, além da redução
                        na produção de lixo.
                    </Typography>
                    <Typography
                        variant="h6"
                        color="initial"
                        className="texto-desembala"
                    >
                        Precisamos cuidar dos recursos naturais para que sejam preservados;
                        e os produtos ecológicos foram criados justamente para que haja uma
                        diminuição significativa da poluição, desmatamento, além da redução
                        na produção de lixo.
                    </Typography>
                </Box>
            </Grid>

            <Grid
                className="grid-4 margin-bottom padding-v background-pagina"
                item
                xs={4}
            >
                <Typography className="text-center-pq titulos-v conteudo-secundario-titulo ">
                    Missão
                </Typography>
                <Box className="justify-pq" p={2}>
                    <Typography className="subtexto" variant="body1" color="initial">
                        • Produzir e distribuir produtos construidos a partir de fontes
                        renováveis, facilmente assimilados pela natureza contribuindo para o
                        desenvolvimento sustentável da sociedade.
                    </Typography>
                </Box>
            </Grid>

            <Grid
                className="grid-4 margin-bottom padding-v background-pagina"
                item
                xs={4}
            >
                <Typography className="text-center-pq titulos-v conteudo-secundario-titulo ">
                    Visão
                </Typography>
                <Box className="justify-pq" p={2}>
                    <Typography className="subtexto" variant="body1" color="initial">
                        • Ser uma empresa líder no desenvolvimento e distribuição de
                        soluções práticas e econômicas que reduzam a emissão dos resíduos
                        sólidos e de poluentes, através de tecnologias inovadoras, baseadas
                        em fontes renováveis.
                    </Typography>
                </Box>
            </Grid>
            <Grid
                className="grid-4 margin-bottom padding-v background-pagina"
                item
                xs={4}
            >
                <Typography className="text-center-pq titulos-v conteudo-secundario-titulo">
                    Valores
                </Typography>
                <Box className="justify-pq" p={2}>
                    <Typography className="subtexto" variant="body1" color="initial">
                        • Consciência ambiental – somos parte do meio ambiente, devemos
                        respeitar e buscar relações mais harmônicas, usos conscientes de
                        produtos e do espaço;
                    </Typography>
                    <Typography className="subtexto" variant="body1" color="initial">
                        • Ação transformadora – devemos promover o respeito e tolerância nas
                        relações com nosso mercado consumidor, bem como entre nossos
                        funcionários e parceiros comerciais;
                    </Typography>
                    <Typography className="subtexto" variant="body1" color="initial">
                        • Inovação – devemos buscar produtos, soluções e modelos de negócio
                        que acrescentem e aprofundem a difusão da consciência ambiental.
                    </Typography>
                </Box>
            </Grid>

            <Grid item xs={12} className="background-nossaEquipe">
                <Box p={5} className="margin-bottom">
                    <Typography className="equipe-titulo">Nossa Equipe</Typography>
                </Box>
            </Grid>
            <Grid className="grid-sobreNos margin-bottom" item xs={4}>
                <Paper elevation={8} style={paperStyle}>
                    <Grid>
                        <img
                            className="imagem-equipe transitionSize "
                            src="https://i.imgur.com/aIvjzlm.jpg."
                        />
                    </Grid>
                    <Typography className="nomes  titulos">Ana Prado</Typography>
                    <Typography className="cargo-titulo">Product Owner</Typography>
                    <Typography className="justify-texto-card">
                        Eu sou a Ana, tenho 25 anos e sou de São Paulo. Eu sempre quis de
                        alguma forma contribuir para o mundo e foi na tecnologia que
                        encontrei essa oportunidade. Durante o bootcamp da Generation pude
                        aprimorar as minhas habilidades comportamentais e adquirir
                        conhecimento técnico para colocar em prática as minhas aspirações. E
                        hoje pretendo continuar me especializando na área e trabalhar em
                        projetos que causem impacto social como o que desenvolvemos no
                        projeto integrador.
                    </Typography>
                    <Box paddingX={15}>
                        <a target="_blank" href="https://github.com/anadantasp">
                            <GitHubIcon style={{ fontSize: 30, color: "black" }} />
                        </a>
                        <a
                            target="_blank"
                            href="https://www.linkedin.com/in/anadantasp/"
                        >
                            <LinkedInIcon style={{ fontSize: 30, color: "black" }} />
                        </a>
                    </Box>
                </Paper>
            </Grid>
            <Grid className="grid-sobreNos2 margin-bottom" item xs={4}>
                <Paper elevation={8} style={paperStyle}>
                    <Grid>
                        <img
                            className="imagem-equipe transitionSize "
                            src="https://i.imgur.com/FZ5Z3BZ.jpg."
                        />
                    </Grid>
                    <Typography className="nomes  titulos">Gustavo Sabino</Typography>
                    <Typography className="cargo-titulo">Desenvolvedor Web</Typography>
                    <Typography className="justify-texto-card">
                        Olá! Sou o Gustavo Sabino, tenho 25 anos, São paulo - Capital.
                        Desenvolvedor fullstack java junior, apaixonado por tecnologia e por como ela pode mudar nossas vidas
                        atualmente focado no desenvolvimendo web/mobile com as tecnologias mais atuais do mercado, Java | MySQL | SpringBoot | Javascript | React | NodeJS.
                    </Typography>
                    <Box paddingX={15}>
                        <a target="_blank" href="https://github.com/sabinorush">
                            <GitHubIcon style={{ fontSize: 30, color: "black" }} />
                        </a>
                        <a
                            target="_blank"
                            href="https://www.linkedin.com/in/gustavosabino/"
                        >
                            <LinkedInIcon style={{ fontSize: 30, color: "black" }} />
                        </a>
                    </Box>
                </Paper>
            </Grid>
            <Grid className="grid-cor-todos margin-bottom" item xs={4}>
                <Paper elevation={8} style={paperStyle}>
                    <Grid>
                        <img
                            className="imagem-equipe transitionSize "
                            src="https://i.imgur.com/nWGu3Jh.jpg."
                        />
                    </Grid>
                    <Typography className="nomes  titulos">Kevin Leal</Typography>
                    <Typography className="cargo-titulo">Desenvolvedor Web</Typography>
                    <Typography className="justify-texto-card">
                        Sou o Kevin, tenho 21 anos e sou da Zona Leste de SP,
                        desde criança meus olhos brilhavam pra tecnologia e sempre tive o
                        desejo de trabalhar na área, durante a vida tive outros rumos e me formei
                        técnico em Administração onde pude desenvolver minhas Softskills como comunicação
                        e trabalho em equipe , alguns anos se passaram e conheci a Generation. agora aqui estou eu,
                        formado Full Stack Java JR com conhecimentos em SpringBoot e em  React com TypeScript,
                        pude também aperfeiçoar ainda mais as Softskills que já tinha visto anteriormente .
                        Agora sei que estou preparado pra seguir carreira na area onde amo e que  almejei desde que criança.
                    </Typography>
                    <Box paddingX={15}>
                        <a target="_blank" href="https://github.com/Tihuanna">
                            <GitHubIcon style={{ fontSize: 30, color: "black" }} />
                        </a>
                        <a
                            target="_blank"
                            href="https://www.linkedin.com/in/kevin-leal1/"
                        >
                            <LinkedInIcon style={{ fontSize: 30, color: "black" }} />
                        </a>
                    </Box>
                </Paper>
            </Grid>
            <Grid className="grid-cor-todos margin-bottom" item xs={4}>
                <Paper elevation={8} style={paperStyle}>
                    <Grid>
                        <img
                            className="imagem-equipe transitionSize "
                            src="https://i.imgur.com/RkFFtlU.jpg"
                        />
                    </Grid>
                    <Typography className="nomes  titulos">Luan Rodrigues</Typography>
                    <Typography className="cargo-titulo">Scrum Master</Typography>
                    <Typography className="justify-texto-card">
                        Olá eu sou o Luan, um amante de tecnologia que depois de muito vagar por diversas áreas acabou parando na área da programação. Sempre fui fascinado pela telinha e tenho conhecimentos em design e modelagem 3d até que finalmente me descobri na programação e com minha formação de desenvolvedor full stack junior me sinto preparado para qualquer desafio que vier pela frente.
                    </Typography>
                    <Box paddingX={15}>
                        <a target="_blank" href="https://github.com/luan998">
                            <GitHubIcon style={{ fontSize: 30, color: "black" }} />
                        </a>
                        <a
                            target="_blank"
                            href="https://www.linkedin.com/in/luanrodrigues98/"
                        >
                            <LinkedInIcon style={{ fontSize: 30, color: "black" }} />
                        </a>
                    </Box>
                </Paper>
            </Grid>
            <Grid className="grid-cor-todos margin-bottom" item xs={4}>
                <Paper elevation={8} style={paperStyle}>
                    <Grid>
                        <img
                            className="imagem-equipe transitionSize "
                            src="https://i.imgur.com/fE5fOlN.jpg."
                        />
                    </Grid>
                    <Typography className="nomes  titulos">Raquel Lima</Typography>
                    <Typography className="cargo-titulo">Desenvolvedora Web</Typography>
                    <Typography className="justify-texto-card">
                        Oi pessoal, meu nome é Raquel tenho 19 anos, moro sto andre sp. 
                        Desde pequena sempre tive curiosidade em saber como as coisas tecnológicas funcionavam. 
                        Porém meu primeiro contato com a tecnologia foi aos 18 anos no bootcamp da generation 
                        onde eu me apaixonei e pude desenvolver minhas softs e hards skills hoje eu me vejo 
                        capacitada para exercer o cargo na área e esou disposta a aprender sempre mais. 
                        Meu nome é Raquel e eu agradeço pela atenção!
                    </Typography>
                    <Box paddingX={15}>
                        <a target="_blank" href="https://github.com/limaraquel">
                            <GitHubIcon style={{ fontSize: 30, color: "black" }} />
                        </a>
                        <a
                            target="_blank"
                            href="https://www.linkedin.com/in/raquel-oliveira-2701b9221/"
                        >
                            <LinkedInIcon style={{ fontSize: 30, color: "black" }} />
                        </a>
                    </Box>
                </Paper>
            </Grid>
            <Grid className="grid-sobreNos margin-bottom" item xs={4}>
                <Paper elevation={8} style={paperStyle}>
                    <Grid>
                        <img
                            className="imagem-equipe transitionSize "
                            src="https://i.imgur.com/NxHlMgc.jpg"
                        />
                    </Grid>
                    <Typography className="nomes  titulos">Shiellyn Ferreira</Typography>
                    <Typography className="cargo-titulo">Desenvolvedora Web</Typography>
                    <Typography className="justify-texto-card">
                        Oi eu sou a Shiellyn tenho 19 anos e sou de Guarulhos- SP, eu sempre me 
                        interessei por diversos assuntos e acredito que isso me trouxe até a área 
                        da tecnologia, comprovei minha afinidade com a programação no bootcamp da 
                        Generation onde aprendi conhecimentos técnicos como Java, SprinBoot, React 
                        e outro e adquiri habilidades comportamentais como a persistencia, e hoje 
                        formada me sinto capacitada para continuar me desenvolvendo e aprendendo novas tecnologias.
                    </Typography>
                    <Box paddingX={15}>
                        <a target="_blank" href="https://github.com/ShiellynFerr">
                            <GitHubIcon style={{ fontSize: 30, color: "black" }} />
                        </a>
                        <a
                            target="_blank"
                            href="https://www.linkedin.com/in/shiellyn-ferreira/"
                        >
                            <LinkedInIcon style={{ fontSize: 30, color: "black" }} />
                        </a>
                    </Box>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default SobreNos;
