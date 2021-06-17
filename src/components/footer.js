import React from 'react';
import {Typography} from '@material-ui/core';

const Footer = () => {
    return (
        <div style={{backgroundColor: "black", color: "whitesmoke", padding: "3%"}}>
            <Typography align="center" variant="h6">© Indigenous Artifacts Hub 2021</Typography>
            <Typography align="center" variant="h6">Made by the UC CS Team</Typography>
        </div>
    );
}

export default Footer;