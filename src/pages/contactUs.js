import React, {useState} from 'react'
import {Button, Link, Container, Grid, CardMedia, TextField, Typography } from '@material-ui/core'
import ITPeople from '../assets/contact-us.png'
import BGImage from '../assets/mainContainerBG-large.png'
import { Dialog, DialogTitle, DialogContent} from '@material-ui/core'
import PrivacyPolicy from '../components/privacyPolicy'

const styles = {
    background: {
        backgroundImage: `url(${BGImage})`,
        height: '78vh',
    },
    backgroundOverlay: {
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
    }
}

function ContactUs() {

    const [openDialog, setOpenDialog] = useState(false)

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
                                Contact Us
                            </Typography>
                            <Typography style={{marginBottom: "8%",}}>
                                Please contact us if you have any concerns by filling out the form below.
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
                                label="Your Concern"
                                variant="outlined"
                                style={{marginBottom: "4%"}}
                                helperText="Please explain your concern to us"
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
                                    setOpenDialog(true)
                                    console.log("Privacy policy clicked.")
                                }}> Privacy Policy
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
            </Grid>
        </Grid>

        <Dialog open={openDialog} onClose={()=>setOpenDialog(false)}>
            <DialogTitle><b>PRIVACY POLICY</b></DialogTitle>
            <DialogContent>
                <PrivacyPolicy />
            </DialogContent>
        </Dialog>
        
        </>
    )
}

export default ContactUs