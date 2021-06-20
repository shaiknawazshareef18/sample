import React from 'react'
import { Link, Container, Grid, CardMedia, TextField, Typography } from '@material-ui/core'
import ITPeople from '../assets/contact-us.png'

function ContactUs() {
    return (
        <>
        <Container style={{padding: "5%"}}>
            <Grid container>
                <Grid item xs style={{padding: "4%" }}>
                <>
                    <>
                    <Typography variant="h3">
                        Contact Us
                    </Typography>
                    <Typography style={{marginBottom: "8%",}}>
                        Please contact us if you have any concerns by filling out the form below.
                    </Typography>
                    </>

                    <TextField
                        required
                        fullWidth
                        id="concern"
                        label="Your Concern"
                        variant="outlined"
                        style={{marginBottom: "8%"}}
                        helperText="Please explain your concern to us"
                        />

                    <Link 
                        href="#"
                        onClick={() => {
                            console.log("Privacy policy clicked.")
                        }}
                        variant="body2"
                    > Privacy Policy
                    </Link>
                </>
                </Grid>
                    
                <Grid item xs>
                    <CardMedia 
                        component="img"
                        title = "IT People"
                        alt = "IT People"
                        image = {ITPeople}
                    />
                </Grid>
            </Grid>
        </Container>
        </>
    )
}

export default ContactUs