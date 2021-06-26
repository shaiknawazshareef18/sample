import React, {useState} from 'react'
import {Grid, Container, CardMedia, Link, Typography, TextField, Button } from '@material-ui/core'
import {Dialog, DialogTitle, DialogContent} from '@material-ui/core'
import {authentication, firestore} from '../firebase/'
import BGImage from '../assets/mainContainerBG-large.png'
import AdminImg from '../assets/admin.png'
import PrivacyPolicy from '../components/privacyPolicy'

const styles = {
    background: {
        backgroundImage: `url(${BGImage})`,
        height: '78vh',
    },
    backgroundOverlay: {
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
    },
    gridItemPadding: {
        padding: '5%',
    }
}

function Admin(props) {

    const [errorMessage, setErrorMessage] = useState(false)
    const [open, setOpen] = useState(false)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const {history} = props

    function handleLogin() {
        setErrorMessage(props.auth)
        if(email !== null || password !== null){
            authentication.signInWithEmailAndPassword(email,password)
            .then(() => {
                const uid = authentication.currentUser.uid
                firestore.collection('users').doc(uid).get().then((doc)=>{
                    if(doc.data().status === 'admin'){
                        props.setAuth(true)
                        props.setUser(uid)
                        history.push('/admin/dashboard')
                    } else {
                        firestore.collection('reports').add({
                            'userID': uid,
                            'status': 'attempt to login in the admin page',
                            'recordedAt': new Date()
                        })
                        setErrorMessage(
                            'You are not an admin, your account has been reported and will undergo for review, if you see this as an error, contact the developers immediately'
                        )
                    }
                }).catch((error)=>{
                    setErrorMessage(error.message)
                })
            })
            .catch((error) => setErrorMessage(error.message))
        } else {
            setErrorMessage('Cannot submit empty fields')
        }
    }

    return(
        <>
        <Grid container style={styles.background}>
            <Grid container alignItems="center" style={styles.backgroundOverlay}>
                <Container>
                    <Grid container>
                        <Grid item xs style={styles.gridItemPadding}>
                            <>
                                <Typography variant='h3'>
                                    Administration Login
                                </Typography>
                                <Typography
                                    style={{
                                        marginBottom: '6%',
                                    }}>
                                    Please enter your credentials to manage this repository.
                                </Typography>
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    label='Email'
                                    type='email' 
                                    onChange={(event)=>setEmail(event.target.value)}/>
                                
                                <Typography color="error">{errorMessage}</Typography>
                                
                                <TextField 
                                    fullWidth
                                    variant='outlined' 
                                    label='Password'
                                    type='password'
                                    onChange={(event)=>setPassword(event.target.value)}
                                    style={{
                                        marginTop: '2%',
                                    }}/>
                                <Grid container xs>

                                    <Button
                                        color="primary"
                                        size="large"
                                        variant='contained'
                                        onClick={handleLogin}
                                        style={{
                                            marginTop: '4%',
                                            marginBottom: '8%',
                                        }}>
                                        Login
                                    </Button>

                                </Grid>

                                <Link 
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
                                title = "AdminImg"
                                alt = "AdminImg"
                                image = {AdminImg}/>
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
        </>
    )
}

export default Admin