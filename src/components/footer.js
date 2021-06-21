import React from 'react'
import {Button, Grid, Typography} from '@material-ui/core'

const styles = {
    background:{
        backgroundColor: '#000000',
        padding: '1%',
    },
    text: {
        marginBottom: "1%",
    }
}

function Footer(){
    return (
        <Grid container justify="center" style={styles.background} >
            <Grid item>
                <Typography align="center" color="secondary">
                    © WeaveHub 2021
                </Typography>
                <Grid container xs justify="center" style={styles.background} >
                    <Grid item>
                        <Typography align="center" color="secondary" style={styles.text}>
                            Made by the UC CS Team
                        </Typography>
                    </Grid>
                    <Grid item
                    style={{
                        marginBottom: '3%',
                    }}>
                        <Button size="small" color="primary"
                        >
                            Admin Login
                        </Button>
                    </Grid>
                </Grid>

                <Typography align="center" color="secondary"
                style={{
                    fontWeight: 'lighter',
                }}>
                    Vector images from Vecteezy.com
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Footer