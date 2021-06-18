import React from "react";
import {withRouter, Link} from "react-router-dom";
import {AppBar, Toolbar, Typography, Button, makeStyles, Dialog,
    TextField, DialogContent, DialogActions} from '@material-ui/core';
import ContactUsIcon from '@material-ui/icons/HeadsetMicRounded';
import InfoIcon from '@material-ui/icons/InfoRounded';
import AccountIcon from '@material-ui/icons/AccountCircle';


import {useState, useEffect} from 'react';
import { authentication } from "../firebase";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import LogoS from "../assets/logo_s.png"

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#D99818',
            contrastText: '#FFFFFF',
        },
        secondary: {
            main: '#FFFFFF',
            contrastText: '#111111',
        },
        contrastThreshold: 3,
        tonalOffset:0.2,
    },
});

const styles = makeStyles( (theme) => ({
    title: {
        flexGrow: 1,
    },
    logo: {
        maxWidth: 32,
        margin: 8,
    },
}));

const Header = props => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [user, setUser] = useState('');
    const {history} = props;
    const classes = styles();
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
    };

    const handleLogin = () => {
        setErrorMessage('');
        authentication
            .signInWithEmailAndPassword(email, password)
            .then(user => {
                
                if(authentication.currentUser.emailVerified){
                    handleClose();
                    console.log(user);
                } else {
                    setErrorMessage("Your account has not yet been verified, please check your email and verify.");
                    handleLogout();
                }
            })
            .catch(error => {
                setErrorMessage(error.message);
            });
    };

    const handleLogout = () => {
        authentication.signOut().then(result => {
            setUser('');
        });
    };

    useEffect(() => {
        const unsubscribe = authentication.onAuthStateChanged(user => {
            setUser(user);
          });
      
        // Cleanup subscription on unmount
        return () => unsubscribe();
    });

    return (
        <> 
        <ThemeProvider theme={theme}>
            <AppBar position="sticky" color="secondary" style={{paddingInline: "4%"}}>
            <Toolbar>
                <>
                    <img src = {LogoS} alt="logo" className={classes.logo}/>
                    <Typography 
                    style={{cursor: "pointer"}}
                    className={classes.title}
                    variant="h6"
                    onClick={()=>history.push('/')}
                    >
                        WEAVE<b>hub</b>
                    </Typography>
                </>

                <Button 
                    color="inherit"
                    startIcon={<InfoIcon />}
                    onClick={()=>history.push('/about')}
                >
                    About
                </Button>

                <Button 
                    color="inherit"
                    startIcon={<ContactUsIcon />}
                    onClick={()=>history.push('/contactUs')}
                >
                    Contact Us
                </Button>

                {user && (
                    <>
                        <Button
                        color="inherit"
                        startIcon={<AccountIcon />}
                        onClick={handleLogout}
                        >
                            Logout
                        </Button>
                    </>
                )}
                {!user && (
                    <>
                        <Button
                        color="inherit"
                        startIcon={<AccountIcon />}
                        onClick={handleClickOpen}
                        >
                            Login
                        </Button>
                    </>
                )}
                
            </Toolbar>
            </AppBar>

            <Dialog open={open} onClose={handleClose}>
                <DialogContent>
                    <Typography variant="h4" style={{
                        marginBottom: "4%",
                    }}>
                        Log in
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
                    >
                        Cancel
                    </Button>
                    <Button
                        color="primary"
                        variant="contained"
                        style={{marginLeft: "2%"}}
                        onClick={handleLogin}
                    >
                        Login
                    </Button>
                </DialogActions>
            </Dialog>
            </ThemeProvider>
        </>
    );
}

export default withRouter(Header);