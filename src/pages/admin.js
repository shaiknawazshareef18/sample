import React, {useState} from 'react'
import {Grid, Container, CardMedia, Link, Typography, TextField, Button } from '@material-ui/core'
import {authentication} from '../firebase/'
import BGImage from '../assets/mainContainerBG-large.png'
import AdminImg from '../assets/admin.png'

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
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const {history} = props

    function handleLogin() {
        setErrorMessage(props.auth)
        if(email !== null || password !== null){
            authentication.signInWithEmailAndPassword(email,password)
            .then(() => {
                props.setAuth(true)
                props.setUser(authentication.currentUser.uid)
                if(props.user === null){
                    setErrorMessage('Please try again')
                } else {
                    history.push('/admin/dashboard')
                }
            })
            .catch((error) => setErrorMessage(error.message))
        } else {
            setErrorMessage('Cannot submit empty fields')
        }
    }

    return(
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
                                title = "AdminImg"
                                alt = "AdminImg"
                                image = {AdminImg}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
        </Grid>
    )
}

export default Admin