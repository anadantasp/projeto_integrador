import React from 'react';
import { Box, Grid, Button} from '@material-ui/core';
import './Home.css';

function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='background'>
                <Grid alignItems="center" item xs={12}>
                    <Box paddingX={30} alignItems="center">
                        <img src="https://i.imgur.com/k1YPN4L.png" alt="site em andamento" width="800px" height="300px" />
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Button variant="outlined" className='botao'>Comprar</Button>
                    </Box>
                    <Grid container spacing={1}>
                        <Grid container item xs={12} spacing={3}>
                            <h1>
                                item 1
                            </h1>
                        </Grid>
                        <Grid container item xs={12} spacing={3}>
                            <h1>
                                item 2
                            </h1>
                        </Grid>
                        <Grid container item xs={12} spacing={3}>
                            <h1>
                                item 3
                            </h1>
                        </Grid>
                    </Grid>
                    </Grid>
                    </Grid>

                </>
                ); 
}
                export default Home;
