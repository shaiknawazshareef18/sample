import React from 'react';
import InigenousPeopleImage from '../assets/indigenous-people-vector.png';
import SampleImages from './imageListSample';

import {Container, Divider, Grid, Box} from '@material-ui/core';
import {Typography, CardMedia, Button} from '@material-ui/core';

import {withRouter} from 'react-router-dom';

const Home = props => {
    const {history} = props;

    return (
        <>
            <Container style={{padding: "7%"}}>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <CardMedia 
                            component="img"
                            title = "Indigenous People"
                            alt = "Indigenous People"
                            image = {InigenousPeopleImage}
                        />
                    </Grid>
                    <Grid item xs={6} >
                        <Typography variant="h3" align="center" style={{padding: "4%", fontWeight: "bolder"}}>A respository for storing indigenous artifacts</Typography>
                        <Typography gutterBottom>
                            Lorem ipsum keme keme keme 48 years at nang effem at tamalis warla ng majubis shonga at jutay balaj balaj bokot at 
                            nang chapter tamalis at jowabelles tanders mabaho buya bakit na mahogany sa shonget matod bakit ang juts 48 years
                            mashumers intonses jowa sa ganda lang at ang makyonget chuckie paminta ano Mike kemerloo nang lorem ipsum keme keme 
                            shala nang thunder at wasok.
                        </Typography>              
                        <Button variant="outlined" color="primary" onClick={()=> history.push('/about')}>Learn More</Button>      
                    </Grid>
                </Grid>
            </Container>

            <Typography variant="h2" align="center" style={{fontWeight: "bolder"}}>7 Cordilleran Ethnics Groups</Typography>

            <Container>
                <Box p={5}>
                    <Typography variant="h3" gutterBottom>Bontoc</Typography>
                    <SampleImages />
                    <Box textAlign='center'>
                        <Button style={{margin: "3%"}} color="primary" variant="contained">See More</Button>
                    </Box>
                </Box>
                <Divider />
                <Box p={5}>
                    <Typography variant="h3" gutterBottom>Ibaloi</Typography>
                    <SampleImages />
                    <Box textAlign='center'>
                        <Button style={{margin: "3%"}} color="primary" variant="contained">See More</Button>
                    </Box>
                </Box>
                <Divider />
                <Box p={5}>
                    <Typography variant="h3" gutterBottom>Ifugao</Typography>
                    <SampleImages />
                    <Box textAlign='center'>
                        <Button style={{margin: "3%"}} color="primary" variant="contained">See More</Button>
                    </Box>
                </Box>
                <Divider />
                <Box p={5}>
                    <Typography variant="h3" gutterBottom>Isneg</Typography>
                    <SampleImages />
                    <Box textAlign='center'>
                        <Button style={{margin: "3%"}} color="primary" variant="contained">See More</Button>
                    </Box>
                </Box>
                <Divider />
                <Box p={5}>
                    <Typography variant="h3" gutterBottom>Kalinga</Typography>
                    <SampleImages />
                    <Box textAlign='center'>
                        <Button style={{margin: "3%"}} color="primary" variant="contained">See More</Button>
                    </Box>
                </Box>
                <Divider />
                <Box p={5}>
                    <Typography variant="h3" gutterBottom>Kankanaey</Typography>
                    <SampleImages />
                    <Box textAlign='center'>
                        <Button style={{margin: "3%"}} color="primary" variant="contained">See More</Button>
                    </Box>
                </Box>
                <Divider />
                <Box p={5}>
                    <Typography variant="h3" gutterBottom>Tinggian</Typography>
                    <SampleImages />
                    <Box textAlign='center'>
                        <Button style={{margin: "3%"}} color="primary" variant="contained">See More</Button>
                    </Box>
                </Box>
            </Container>
        </>
    );
}

export default withRouter(Home);