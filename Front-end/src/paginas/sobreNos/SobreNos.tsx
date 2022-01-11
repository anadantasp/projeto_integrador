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
            history.push("/login")

        }
    }, [token])

    const paperStyle = {
        paddinn: 20,
        height: "70vh",
        width: 400,
        margin: "45px auto",
        backgroundColor: "#b7e4c7",
        borderRadius: "50px",
    };

    return (
        <Grid container>
            <Grid item xs={12} className="background-nossaEquipe">
                <Box p={5} className="margin-bottom">
                    <Typography className="titulo-equipe">Nossa Equipe</Typography>
                </Box>
            </Grid>
            <Grid className="grid-sobreNos margin-bottom" item xs={4}>
                <Box paddingX={15}>
                    <img
                        className="imagem-equipe transitionSize"
                        src="https://i.imgur.com/aIvjzlm.jpg."
                    />
                </Box>
                <Typography className="nomes titulos">Ana Prado</Typography>
                <Typography className="cargo-titulo">Product Owner</Typography>
                {/* <Box className="justify" p={2}>
          <Typography variant="body1" color="initial">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto
            reprehenderit consequuntur velit! Veniam, eius animi. Nisi, atque
            magnam mollitia soluta, quas nulla sed temporibus praesentium labore
            incidunt exercitationem molestias officiis? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Repellat dolor ducimus dolore ut
            expedita perferendis, voluptates odio hic! Dolor possimus beatae
            maiores unde totam incidunt velit atque sed, adipisci explicabo.
          </Typography>
        </Box> */}
                <Box>
                    <a href="https://www.linkedin.com/in/anadantasp/" target="_blank">
                        <LinkedInIcon style={{ fontSize: 30, color: "black" }} />
                    </a>
                    <a href="https://github.com/anadantasp" target="_blank">
                        <GitHubIcon style={{ fontSize: 30, color: "black" }} />{" "}
                    </a>
                </Box>
            </Grid>
            <Grid className="grid-sobreNos2 margin-bottom" item xs={4}>
                <Box paddingX={15}>
                    <img
                        className="imagem-equipe transitionSize"
                        src="https://i.imgur.com/FZ5Z3BZ.jpg"
                    />
                </Box>
                <Typography className="nomes titulos">Gustavo Sabino</Typography>
                <Typography className="cargo-titulo">Desenvolvedor Web</Typography>
                {/* <Box className="justify" p={2}>
          <Typography variant="body1" color="initial">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto
            reprehenderit consequuntur velit! Veniam, eius animi. Nisi, atque
            magnam mollitia soluta, quas nulla sed temporibus praesentium labore
            incidunt exercitationem molestias officiis? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Repellat dolor ducimus dolore ut
            expedita perferendis, voluptates odio hic! Dolor possimus beatae
            maiores unde totam incidunt velit atque sed, adipisci explicabo.
          </Typography>
        </Box> */}
                <Box paddingX={15}>
                    <a target="_blank" href="https://github.com/sabinorush">
                        <GitHubIcon style={{ fontSize: 30, color: "black" }} />
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/gustavosabino/">
                        <LinkedInIcon style={{ fontSize: 30, color: "black" }} />
                    </a>
                </Box>
            </Grid>
            <Grid className="grid-cor-todos margin-bottom" item xs={4}>
                <Box paddingX={15}>
                    <img
                        className="imagem-equipe transitionSize"
                        src="https://i.imgur.com/nWGu3Jh.jpg."
                    />
                </Box>
                <Typography className="nomes  titulos">Kevin Leal</Typography>
                <Typography className="cargo-titulo">Desenvolvedor Web</Typography>
                {/* <Box className="justify" p={2}>
          <Typography variant="body1" color="initial">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto
            reprehenderit consequuntur velit! Veniam, eius animi. Nisi, atque
            magnam mollitia soluta, quas nulla sed temporibus praesentium labore
            incidunt exercitationem molestias officiis? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Repellat dolor ducimus dolore ut
            expedita perferendis, voluptates odio hic! Dolor possimus beatae
            maiores unde totam incidunt velit atque sed, adipisci explicabo.
          </Typography>
        </Box> */}
                <Box>
                    <a target="_blank" href="https://github.com/Tihuanna">
                        <GitHubIcon style={{ fontSize: 30, color: "black" }} />
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/kevin-leal1/">
                        <LinkedInIcon style={{ fontSize: 30, color: "black" }} />
                    </a>
                </Box>
            </Grid>
            <Grid className="grid-cor-todos margin-bottom" item xs={4}>
                <Box paddingX={15}>
                    <img
                        className="imagem-equipe transitionSize"
                        src="https://i.imgur.com/RkFFtlU.jpg"
                    />
                </Box>
                <Typography className="nomes  titulos">Luan Rodrigues</Typography>
                <Typography className="cargo-titulo">Scrum Master</Typography>
                {/* <Box className="justify" p={2}>
          <Typography variant="body1" color="initial">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto
            reprehenderit consequuntur velit! Veniam, eius animi. Nisi, atque
            magnam mollitia soluta, quas nulla sed temporibus praesentium labore
            incidunt exercitationem molestias officiis? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Repellat dolor ducimus dolore ut
            expedita perferendis, voluptates odio hic! Dolor possimus beatae
            maiores unde totam incidunt velit atque sed, adipisci explicabo.
          </Typography>
        </Box> */}
                <Box paddingX={15}>
                    <a target="_blank" href="https://github.com/luan998">
                        <GitHubIcon style={{ fontSize: 30, color: "black" }} />
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/luanrodrigues98/">
                        <LinkedInIcon style={{ fontSize: 30, color: "black" }} />
                    </a>
                </Box>
            </Grid>
            <Grid className="grid-cor-todos margin-bottom" item xs={4}>
                <Box paddingX={15}>
                    <img
                        className="imagem-equipe transitionSize"
                        src="https://i.imgur.com/fE5fOlN.jpg."
                    />
                </Box>
                <Typography className="nomes  titulos">Raquel Lima</Typography>
                <Typography className="cargo-titulo">Desenvolvedora Web</Typography>
                {/* <Box className="justify" p={2}>
          <Typography variant="body1" color="initial">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto
            reprehenderit consequuntur velit! Veniam, eius animi. Nisi, atque
            magnam mollitia soluta, quas nulla sed temporibus praesentium labore
            incidunt exercitationem molestias officiis? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Repellat dolor ducimus dolore ut
            expedita perferendis, voluptates odio hic! Dolor possimus beatae
            maiores unde totam incidunt velit atque sed, adipisci explicabo.
          </Typography>
        </Box> */}
                <Box>
                    <a target="_blank" href="https://github.com/limaraquel">
                        <GitHubIcon style={{ fontSize: 30, color: "black" }} />
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/raquel-oliveira-2701b9221/">
                        <LinkedInIcon style={{ fontSize: 30, color: "black" }} />
                    </a>
                </Box>
            </Grid>
            <Grid className="grid-cor-todos margin-bottom" item xs={4}>
                <Box paddingX={15}>
                    <img
                        className="imagem-equipe transitionSize "
                        src="https://i.imgur.com/Uhs22Yd.jpg"
                    />
                </Box>
                <Typography className="nomes  titulos">Shiellyn Ferreira</Typography>
                <Typography className="cargo-titulo">Desenvolvedora Web</Typography>
                {/* <Box className="justify" p={2}>
          <Typography variant="body1" color="initial">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto
            reprehenderit consequuntur velit! Veniam, eius animi. Nisi, atque
            magnam mollitia soluta, quas nulla sed temporibus praesentium labore
            incidunt exercitationem molestias officiis? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Repellat dolor ducimus dolore ut
            expedita perferendis, voluptates odio hic! Dolor possimus beatae
            maiores unde totam incidunt velit atque sed, adipisci explicabo.
          </Typography>
        </Box> */}
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
            </Grid>
        </Grid>
    );
}

export default SobreNos;
