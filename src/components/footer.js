import React from 'react';
import {Grid, Typography} from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#D99818',
            contrastText: '#FFFFFF',
        },
        secondary: {
            accent: '#898C26',
            main: '#FFF1DC',
            contrastText: '#111111',
        },
        transparent: {
            main: '#111111',
            contrastText: '#FFFFFF',
        },
        contrastThreshold: 3,
        tonalOffset:0.2,
    },
});

const Footer = () => {
    return (
        <Grid item style={{backgroundColor: '#111111', padding: "2%", alignItems: "center"}}>
            <Typography align="center" style={{color: "#FFFFFF"}}>
                    © Indigenous Artifacts Hub 2021
            </Typography>
            <Typography align="center" style={{color: "#FFFFFF", marginBottom: "1%"}}>
                    Made by the UC CS Team
            </Typography>
            <Typography align="center" style={{color: '#FFFFFF', fontSize: "10px"}}>
                Vector images from Vecteezy.com
            </Typography>
        </Grid>
    );
}

export default Footer;