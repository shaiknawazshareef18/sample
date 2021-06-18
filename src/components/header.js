import React from "react";
import {withRouter, Link} from "react-router-dom";
import LogoS from "../assets/logo_s.png"
import {AppBar, Toolbar, Typography, Button, makeStyles, Dialog, TextField, DialogContent, DialogActions} from '@material-ui/core';
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import {useState, useEffect} from 'react';
import { authentication } from "../firebase";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#D99818',
        },
        secondary: {
            accent: '#898C26',
            main: '#FFF1DC',
            contrastText: '#111111'
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
            <AppBar position="sticky" color="secondary">
            <Toolbar>
                <>
                    <img src = {LogoS} alt="logo" className={classes.logo}/>
                    <Typography 
                    style={{cursor: "pointer"}}
                    className={classes.title}
                    variant="h6"
                    onClick={()=>history.push('/')}
                    >
                        Indigenous Artifacts Hub
                    </Typography>
                </>
                <Button 
                    color="inherit"
                    startIcon={<InfoRoundedIcon />}
                    onClick={()=>history.push('/about')}
                >
                    About
                </Button>
                {user && (
                    <>
                        <Button
                        color="inherit"
                        startIcon={<AccountCircleIcon />}
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
                        startIcon={<AccountCircleIcon />}
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
                    <Typography>
                        Don't have yet an account, 
                        <Link to="/register" onClick={handleClose}>register</Link> 
                        here.
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button
                        color="primary"
                        variant="contained"
                        style={{margin: "3%",marginTop: "0"}}
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