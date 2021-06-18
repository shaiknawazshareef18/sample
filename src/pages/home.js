import React from 'react';
import InigenousPeopleImage from '../assets/indigenous-people-vector.png';
import SampleImages from '../components/imageListSample';

import {Container, Divider, Grid, Box} from '@material-ui/core';
import {Typography, CardMedia, Button} from '@material-ui/core';

import {withRouter} from 'react-router-dom';

const Home = props => {
    const {history} = props;

    return (
        <>
            <Container style={{padding: "4%"}}>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <CardMedia 
                            component="img"
                            title = "Indigenous People"
                            alt = "Indigenous People"
                            image = {InigenousPeopleImage}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        {/* Current progress */}
                        <Typography variant="h1" color="primary" style={{paddingBottom: "4%",}}>
                            WEAVE<b>hub</b></Typography>
                        <Typography gutterBottom>
                            An online repository for the preservation of Cordilleran Weaving Artifacts
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