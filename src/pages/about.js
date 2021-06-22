import React from 'react'
import { Container, Grid, CardMedia, Typography } from '@material-ui/core'

import InigenousPeopleImage from '../assets/indigenousPeople.png'
import BGImage from '../assets/mainContainerBG.png'
import CITCSCHED from '../assets/citcs-ched-b.png'
import Logo from '../assets/logo_w_b.png'

const styles = {
    mainContainer: {
        backgroundImage: `url(${BGImage})`,
        alignItems: 'center',
        padding: '2%',
        paddingLeft: '5%',
        marginBottom: '2%',
    },
    titleContainer: {
        marginBottom: '2%',
        padding: '1%',
    },
}


function About() {
    return (
        <>
        <Grid container style={styles.mainContainer}>
            <Container>
                <Grid container justify="center" alignItems="center" style={styles.titleContainer}>
                    
                <Grid item xs="4">
                    <Grid container justify="center" style={styles.titleContainer}>
                        <img
                            src={Logo}
                            style={{
                                paddingTop: "3%",
                                width: '300px',
                            }}/>
                    </Grid>
                    <Grid container justify="center">
                        <Typography variant="h3" color="secondary">
                            WEAVE<b>hub</b>
                        </Typography>
                    </Grid>
                </Grid>
                    <Grid item xs>
                        <Typography gutterBottom variant="h3">
                            A respository for preserving indigenous weaving artifacts</Typography>
                        <Typography>
                            Lorem ipsum keme keme keme 48 years at nang effem at tamalis warla ng majubis shonga at jutay balaj balaj bokot at 
                            nang chapter tamalis at jowabelles tanders mabaho buya bakit na mahogany sa shonget matod bakit ang juts 48 years
                            mashumers intonses jowa sa ganda lang at ang makyonget chuckie paminta ano Mike kemerloo nang lorem ipsum keme keme 
                            shala nang thunder at wasok.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Grid>
       
        
        <Container>
            <Typography variant="h2" align="center" color="primary">
                University of the Cordilleras
            </Typography>

            <Typography align="center" style={{paddingBottom: "3%"}}>
                Pranella shonget mahogany makyonget matod ng at fayatollah kumenis ano ganda lang sangkatuts mahogany katol ang pranella 
                antibiotic nang na kasi jowabelles kemerloo katol , pamin makyonget ang katagalugan jupang-pang at at bakit , katagalugan 
                shonget sudems na ang shogal tetetet borta bakit at nang kemerloo bella valaj wiz na ang at nang lulu kemerloo ng thunder 
                jowabella ng fayatollah kumenis chopopo sa nakakalurky klapeypey-klapeypey kasi guash at bella nang chopopo klapeypey-klapeypey 
                bakit at kirara na ang lulu mashumers bakit krung-krung at planggana kasi waz kasi chopopo kasi at na nang shala conalei at nang
                jowabelles.
            </Typography>
            <Grid container justify="center">

            <CardMedia 
                component="img"
                title = "CITCS-CHED"
                alt = "CITCS-CHED"
                image = {CITCSCHED}
                style={{
                    paddingBottom: "3%",
                    maxWidth: '800px'}}/>
            </Grid>

            <Typography variant="h2" align="center" color="primary">
                Constitution on Higher Education (CHED)
            </Typography>

            <Typography align="center" style={{paddingBottom: "3%"}}>
                Pranella shonget mahogany makyonget matod ng at fayatollah kumenis ano ganda lang sangkatuts mahogany katol ang pranella 
                antibiotic nang na kasi jowabelles kemerloo katol , pamin makyonget ang katagalugan jupang-pang at at bakit , katagalugan 
                shonget sudems na ang shogal tetetet borta bakit at nang kemerloo bella valaj wiz na ang at nang lulu kemerloo ng thunder 
                jowabella ng fayatollah kumenis chopopo sa nakakalurky klapeypey-klapeypey kasi guash at bella nang chopopo klapeypey-klapeypey 
                bakit at kirara na ang lulu mashumers bakit krung-krung at planggana kasi waz kasi chopopo kasi at na nang shala conalei.
            </Typography>

        </Container>
        </>
    )
}

export default About