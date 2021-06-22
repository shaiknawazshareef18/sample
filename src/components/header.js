// Other Functions
import React from "react"
import {withRouter} from "react-router-dom"

// Designs
import {AppBar, Toolbar, Typography, Button} from '@material-ui/core'
import ContactUsIcon from '@material-ui/icons/HeadsetMicRounded'
import InfoIcon from '@material-ui/icons/InfoRounded'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import LogoS from "../assets/logo_s.png"
import LogoHunt from "../assets/weaveHuntLogo.png"
import {authentication} from '../firebase'

const styles = {
    title: {
        cursor: 'pointer',
    },
    spacer: {
        flexGrow: 1,
    },
    logo: {
        maxWidth: 32,
        margin: 8,
    },
}


function Header(props) {
    const {history, user} = props

    function handleLogout(){
        authentication.signOut().then(()=>{
            history.push('/admin')
        }) 
    }

    return (
        <> 
            <AppBar
                position="sticky"
                color="secondary"
                style={{paddingInline: "4%"}}>
                <Toolbar>
                    <>
                        <img src = {LogoS} alt="logo" style={styles.logo}/>
                        <Typography
                            style={styles.title}
                            variant="h6"
                            onClick={()=>history.push('/')}>
                                WEAVE<b>hub</b>
                        </Typography>
                        <Typography style={styles.spacer}/>
                    </>
                    <Button
                        startIcon={<img alt='LogoHunt' src={LogoHunt} height="32"/>}
                        onClick={()=>history.push('/weavehunt')}>
                            WEAVEhunt
                    </Button>

                    <Button 
                        startIcon={<InfoIcon />}
                        onClick={()=>history.push('/about')}>
                            About
                    </Button>

                    <Button 
                        startIcon={<ContactUsIcon />}
                        onClick={()=>history.push('/contactUs')}>
                            Contact Us
                    </Button>
                    {user && (
                        <Button 
                        startIcon={<AccountCircleIcon />}
                        onClick={handleLogout}>
                            Logout
                        </Button>
                    )}
                </Toolbar>
            </AppBar>
        </>
    )
}

export default withRouter(Header)