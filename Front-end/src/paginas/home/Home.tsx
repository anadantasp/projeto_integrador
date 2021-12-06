import React from 'react';
import { Box, Grid, Button } from '@material-ui/core';
import './Home.css';

function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='background'>
                <Grid alignItems="center" item xs={12}>
                    <Grid container spacing={1}>
                        <Grid container item xs={4} >
                            <h1>
                                item 1
                            </h1>
                        </Grid>
                        <Grid container item xs={4} >
                            <h1>
                                item 2
                            </h1>
                        </Grid>
                        <Grid container item xs={4} >
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
