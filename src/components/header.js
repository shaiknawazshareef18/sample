// Other Functions
import React from "react"
import {withRouter, Link} from "react-router-dom"
import {useState, useEffect} from 'react'

// Designs
import {AppBar, Toolbar, Typography, Button, makeStyles, Dialog,
    TextField, DialogContent, DialogActions} from '@material-ui/core'
import ContactUsIcon from '@material-ui/icons/HeadsetMicRounded'
import InfoIcon from '@material-ui/icons/InfoRounded'
import AccountIcon from '@material-ui/icons/AccountCircle'
import LogoS from "../assets/logo_s.png"

// Firebase 
import { authentication } from "../firebase";

const styles = {
    title: {
        flexGrow: 1,
    },
    logo: {
        maxWidth: 32,
        margin: 8,
    },
}

function Header(props) {
    const {history} = props
    // // State Variables
    // const [email, setEmail] = useState(null)
    // const [password, setPassword] = useState(null)
    // const [errorMessage, setErrorMessage] = useState(null)
    // const [user, setUser] = useState(null)
    // const [open, setOpen] = useState(false)
    // const classes = styles()

    // // Functions
    // const handleClose = (value) => {
    //     clearLoginForm()
    //     setOpen(false)
    // }
    // const clearLoginForm = () => {
    //     setErrorMessage(null)
    //     setEmail(null)
    //     setPassword(null)
    // }
    // const handleLogin = () => {
    //     setErrorMessage(null);
    //     authentication
    //         .signInWithEmailAndPassword(email, password)
    //         .then(user => {
    //             if(authentication.currentUser.emailVerified){
    //                 clearLoginForm()
    //                 handleClose()
    //                 setUser(user)
    //                 history.push('/dashboard')
    //             } else {
    //                 setErrorMessage("Your account has not yet been verified, please check your email and verify.")
    //                 handleLogout()
    //             }
    //         })
    //         .catch(error => {
    //             setErrorMessage(error.message)
    //         })
    // }
    // const handleLogout = () => {
    //     authentication.signOut().then(result => {
    //         setUser(null)
    //         history.push(null)
    //     })
    // }
    // useEffect(() => {
    //     const unsubscribe = authentication.onAuthStateChanged(user => {
    //         setUser(user)
    //       })
    //     return () => unsubscribe()
    // },[])

    return (
        <> 
            <AppBar position="sticky" color="secondary" style={{paddingInline: "4%"}}>
            <Toolbar>
                <>
                <img src = {LogoS} alt="logo" style={styles.logo}/>
                <Typography 
                style={{cursor: "pointer"}}
                style={styles.title}
                variant="h6"
                onClick={()=>history.push('/')}
                >WEAVE<b>hub</b>
                </Typography>
                </>

                <Button 
                    startIcon={<InfoIcon />}
                    onClick={()=>history.push('/about')}
                >About
                </Button>

                <Button 
                    startIcon={<ContactUsIcon />}
                    onClick={()=>history.push('/contactUs')}
                >
                    Contact Us
                </Button>
{/* 
                {user && (
                    <>
                    <Button
                    color="inherit"
                    startIcon={<AccountIcon />}
                    onClick={handleLogout}
                    >Logout
                    </Button>
                    </>
                )}
                {!user && (
                    <>
                    <Button
                    color="inherit"
                    startIcon={<AccountIcon />}
                    onClick={()=>setOpen(true)}
                    > Login
                    </Button>
                    </>
                )} */}
                
            </Toolbar>
            </AppBar>

            {/* <Dialog open={open} onClose={handleClose}>
                <DialogContent>
                    <Typography variant="h4" style={{
                        marginBottom: "4%",
                    }}>Log in
                    </Typography>
                    <Typography>{errorMessage}</Typography>
                    <TextField
                        required 
                        fullWidth 
                        autoFocus
                        variant="outlined"
                        margin="dense"
                        label="Email"
                        type="email"
                        onChange={(event) => setEmail(event.target.value)} />
                    <TextField
                        required
                        fullWidth
                        variant="outlined" 
                        margin="dense"
                        label="Password"
                        type="password"
                        onChange={(event) => setPassword(event.target.value)}/>
                    <Typography style={{marginTop: "4%"}}>
                        Don't have an account yet?&nbsp;
                        <Link to="/register" variant="body2" onClick={handleClose}>
                            Register...
                        </Link>
                    </Typography>
                </DialogContent>
                
                <DialogActions style={{margin: "4%", marginTop: "0"}}>
                    <Button
                        color="primary"
                        variant="outlined"
                        onClick={handleClose}
                    >Cancel
                    </Button>
                    <Button
                        color="primary"
                        variant="contained"
                        style={{marginLeft: "2%"}}
                        onClick={handleLogin}
                    >Login
                    </Button>
                </DialogActions>
            </Dialog> */}
        </>
    )
}

export default withRouter(Header)