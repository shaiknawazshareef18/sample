import React from 'react'
import {Button, Link, Container, Grid, CardMedia, TextField, Typography } from '@material-ui/core'
import ConstructionPeople from '../assets/underConstruction.png'
import BGImage from '../assets/mainContainerBG-large.png'

const styles = {
    background: {
        backgroundImage: `url(${BGImage})`,
        height: '78vh',
    },
    backgroundOverlay: {
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
    }
}

function WeaveHunt () {
    return (
        <>
        <Grid container style={styles.background}>
            <Grid container alignItems="center" style={styles.backgroundOverlay}>
                <Container>
                    <Grid container>
                        <Grid item xs style={{padding: "4%" }}>
                        <>
                            <>
                            <Typography variant="h3">
                                &#x2699; Under development 
                            </Typography>
                            <Typography style={{marginBottom: "8%",}}>
                                This feature is still under construction.
                                If you have any requests or concerns, please contact us by filling the fields below.
                            </Typography>
                            </>

                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Your Email Address"
                                variant="outlined"
                                style={{marginBottom: "4%"}}
                                helperText="We'll never share your email"
                                />

                            <TextField
                                required
                                fullWidth
                                id="concern"
                                label="Your Request/Concern"
                                variant="outlined"
                                style={{marginBottom: "4%"}}
                                helperText="Please enter your request or concern"
                                />
                            <Grid container xs>

                                <Button 
                                    variant="contained"
                                    color="primary"
                                    style={{
                                        marginBottom: '8%',
                                    }}>
                                        Send
                                </Button>

                            </Grid>

                            <Link 
                                href="#"
                                variant="button"
                                onClick={() => {
                                    console.log("Privacy policy clicked.")
                                }}> Privacy Policy
                            </Link>
                        </>
                        </Grid>
                            
                        <Grid item xs>
                            <CardMedia 
                                component="img"
                                title = "Construction People"
                                alt = "Construction People"
                                image = {ConstructionPeople}
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
        </Grid>
        
        </>
    )
}

export default WeaveHunt