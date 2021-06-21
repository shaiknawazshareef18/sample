// Other Functions
import React from "react"
import {withRouter} from "react-router-dom"

// Designs
import {AppBar, Toolbar, Typography, Button} from '@material-ui/core'
import ContactUsIcon from '@material-ui/icons/HeadsetMicRounded'
import InfoIcon from '@material-ui/icons/InfoRounded'
import LogoS from "../assets/logo_s.png"

const styles = {
    title: {
        cursor: "pointer",
        flexGrow: 1,
    },
    logo: {
        maxWidth: 32,
        margin: 8,
    },
}

function Header(props) {
    const {history} = props
    return (
        <> 
            <AppBar position="sticky" color="secondary" style={{paddingInline: "4%"}}>
            <Toolbar>
                <>
                <img src = {LogoS} alt="logo" style={styles.logo}/>
                <Typography
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
                
            </Toolbar>
            </AppBar>
        </>
    )
}

export default withRouter(Header)