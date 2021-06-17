import React from "react";
import {withRouter, Link} from "react-router-dom";

import {AppBar, Toolbar, Typography, Button, makeStyles, Dialog, TextField, DialogContent, DialogActions} from '@material-ui/core';
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import {useState} from 'react';

const styles = makeStyles( (theme) => ({
    title: {
        flexGrow: 1,
    },
}));

const Header = props => {

    const {history} = props;
    const classes = styles();
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = (value) => {
        setOpen(false);
    };

    return (
        <>  
            <AppBar position="sticky">
            <Toolbar>
                <Typography 
                    style={{cursor: "pointer"}}
                    className={classes.title}
                    variant="h6"
                    onClick={()=>history.push('/')}
                >
                    Indigenous Artifacts Hub
                </Typography>
                <Button 
                    color="inherit"
                    startIcon={<InfoRoundedIcon />}
                    onClick={()=>history.push('/about')}
                >
                    About
                </Button>
                <Button
                    color="inherit"
                    startIcon={<AccountCircleIcon />}
                    onClick={handleClickOpen}
                >
                    Login
                </Button>
            </Toolbar>
            </AppBar>

            <Dialog open={open} onClose={handleClose}>
                <DialogContent>
                    <TextField 
                        required 
                        fullWidth 
                        autoFocus 
                        variant="outlined"
                        margin="dense"
                        label="Email"
                        type="email"/>
                    <TextField
                        required
                        fullWidth
                        variant="outlined" 
                        margin="dense"
                        label="Password"
                        type="password"/>
                    <Typography>
                        Don't have yet an account, 
                        <Link to="/register" onClick={handleClose}>register</Link> 
                        here.
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button 
                        onClick={handleClose}
                        color="primary"
                        variant="contained"
                        style={{margin: "3%",marginTop: "0"}}
                    >
                        Login
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default withRouter(Header);