import React from 'react'
import {Grid, Container, Typography, Button, Link} from '@material-ui/core'

import BGImage from '../assets/mainContainerBG-large.png'
import { LaptopWindowsSharp } from '@material-ui/icons'

const styles = {
    background: {
        backgroundImage: `url(${BGImage})`,
        height: '78vh',
    },
    backgroundOverlay: {
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
    },
    linkPointer: {
        cursor: 'pointer',
    },
}

function Error404(props) {
    const {history} = props

    return (
        
        <Grid container style={styles.background}>
            <Grid container alignItems="center" style={styles.backgroundOverlay}>
                <Container>
                    <Typography variant="h1" style={{margin: "5%"}} align="center">Error 404</Typography>
                        <Typography gutterBottom variant="h3">
                            Hi there!
                        </Typography>
                        <Typography variant="h5">
                            {window.location.href.charAt(31) === 'a' 
                            && (
                                "It seems like the account you are accessing has been logged out for security reasons. Try to loging in again for you to access it. "
                            )}
                            {window.location.href.charAt(31) !== 'a' 
                            && (
                                "It looks like the page you are trying to access is not available. "
                            )}
                            If you think that this shouldn't have happened,
                            please report it immediately by <Link style={styles.linkPointer} onClick={()=>history.push('/contactUs')}>contacting us</Link>.
                        </Typography>
                        <Button
                            variant="outlined"
                            color="primary"
                            style={{
                                marginTop: '5%',
                            }}
                            onClick={()=>history.push('./')}>
                            Go back to Home
                        </Button>
                </Container>
            </Grid>
        </Grid>
    )
}

export default Error404