import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography, Box, Grid } from '@material-ui/core';
import './Footer.css';

function Footer() {
    return (
        <>
            <Grid container >
                <Grid alignItems="center" item xs={12}>
                    <Box className='box1'>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="flex-end">
                            <Typography variant="h5" align="center" gutterBottom className='texto1'>Siga-nos nas redes sociais </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <Box className='logo' marginRight="auto">
                                <img src="https://i.imgur.com/ljg0ZMX.png" alt="logo" width='155px' height='155px' />
                            </Box>
                            <Box className='redessociais' marginLeft="auto">
                                <a href="https://www.instagram.com/anadantasp/" target="_blank">
                                    <InstagramIcon className='redes-sociais' />
                                </a>
                                <a href="https://github.com/anadantasp" target="_blank">
                                    <GitHubIcon className='redes-sociais' />
                                </a>
                                <a href="https://www.linkedin.com/in/anadantasp/" target="_blank">
                                    <LinkedInIcon className='redes-sociais' />
                                </a>
                            </Box>
                        </Box>

                    </Box>
                    <Box className='box2'>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom className='texto2' >© 2021 Copyright:</Typography>
                        </Box>
                        <Box>
                            <a target="_blank" href="https://brasil.generation.org">
                                <Typography variant="subtitle2" gutterBottom className='texto2' align="center">brasil.generation.org</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer
