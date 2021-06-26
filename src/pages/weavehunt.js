import React, {useState} from 'react'
import {Button, Link, Container, Grid, CardMedia, TextField, Typography } from '@material-ui/core'
import {Dialog, DialogTitle, DialogContent} from '@material-ui/core'
import ConstructionPeople from '../assets/underConstruction.png'
import BGImage from '../assets/mainContainerBG-large.png'
import PrivacyPolicy from '../components/privacyPolicy'
import EmailJS from 'emailjs-com'

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

    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [waiting, setWaiting] = useState(false)
    const [email, setEmail] = useState('')
    const [concern, setConcern] = useState('')
    const [errorMessage, setErrorMessage] = useState(null)
    
    function handleRequest() {
        setErrorMessage(null)
        setWaiting(true)
        if(email === '' || concern === ''){
            setWaiting(false)
            setErrorMessage('Please fill in all required fields')
        } else {
            var templateParams = {
                message: concern,
                reply_to: email,
                to_name: email,
                page: 'Weave Hunt',
                title_header: 'Weave Hub x Weave Hunt',
                logo: 'https://firebasestorage.googleapis.com/v0/b/uc-cs-proj.appspot.com/o/ESSENTIALS%2FWeaveHuntLogo.png?alt=media&token=c5bad129-edfd-4499-9cdf-dbf3963880f3'
            }
            EmailJS.send('service_aj5o5yz', 'template_8ixnn2t', templateParams, 'user_gK0T1e9ZsggqRi3gZgoht')
            .then(function(response){
                EmailJS.send('service_aj5o5yz', 'template_3kux3tr', templateParams, 'user_gK0T1e9ZsggqRi3gZgoht')
                .then(function(response){
                    setOpen2(true)
                    setEmail('')
                    setConcern('')
                    setWaiting(false)
                }, function(error){
                    setErrorMessage(error.text)
                    setWaiting(false)
                })
            }, function(error){
                setErrorMessage(error.text)
                setWaiting(false)
            })
        }
    }

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
                                Under Development 
                            </Typography>
                            <Typography style={{marginBottom: "8%",}}>
                                This feature is still under construction.
                                If you have any requests or concerns, please contact us by filling the fields below.
                            </Typography>
                            </>
                            
                            <Typography variant='h6'>{errorMessage}</Typography>

                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Your Email Address"
                                variant="outlined"
                                style={{marginBottom: "4%"}}
                                helperText="We'll never share your email"
                                value={email}
                                onChange={(event)=>setEmail(event.target.value)}
                                />

                            <TextField
                                required
                                fullWidth
                                id="concern"
                                label="Your Request/Concern"
                                variant="outlined"
                                style={{marginBottom: "4%"}}
                                helperText="Please enter your request or concern"
                                value={concern}
                                onChange={(event)=>setConcern(event.target.value)}
                                />
                            <Grid container>
                            {
                                !waiting && (<Button 
                                    variant="contained"
                                    color="primary"
                                    style={{
                                        marginBottom: '8%',
                                    }}
                                    onClick={handleRequest}>
                                        Send
                                </Button>)
                            }
                            {
                                waiting && (
                                    <Typography>Concern is Sending, please wait</Typography>
                                )
                            }
                            </Grid>

                            <Link 
                                href="#"
                                variant="button"
                                onClick={() => {
                                    setOpen(true)
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

        <Dialog open={open} onClose={()=>setOpen(false)}>
            <DialogTitle><b>PRIVACY POLICY</b></DialogTitle>
            <DialogContent>
                <PrivacyPolicy />
            </DialogContent>
        </Dialog>

        <Dialog open={open2} onClose={()=>setOpen2(false)}>
            <DialogTitle><b>Concern Successfuly Sent</b></DialogTitle>
            <DialogContent>
                <Typography>
                    Your concern has been sucessfuly sent, you may check your email for further verification.
                    Were sorry as Weave hunt is still under development but rest assured that your concern/s
                    will be addressed by us. Thank you for your kind consideration.
                </Typography>
            </DialogContent>
        </Dialog>
        
        </>
    )
}

export default WeaveHunt