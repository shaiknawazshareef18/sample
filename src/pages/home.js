import React from 'react'
import {withRouter} from 'react-router-dom'

import Logo from '../assets/logo_w_b.png'
import BGImage from '../assets/mainContainerBG.png'
import IndigenousPeople from '../assets/indigenousPeople.png'
import SampleImages from '../components/imageListSample'
import BontocImg from '../assets/weaves-samples/Bontoc.jpg'
import IbaloiImg from '../assets/weaves-samples/Ibaloi.jpg'
import IfugaoImg from '../assets/weaves-samples/Ifugao.jpg'
import IsnegImg from '../assets/weaves-samples/Isneg.jpg'
import KalingaImg from '../assets/weaves-samples/Kalinga.jpg'
import KankanaeyImg from '../assets/weaves-samples/Kankanaey.jpg'
import TinggianImg from '../assets/weaves-samples/Tinggian.jpg'

import {
    Typography,
    Button,
    Container,
    Grid,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
} from '@material-ui/core'

const styles = {
    mainContainer: {
        backgroundImage: `url(${BGImage})`,
        alignItems: 'center',
        padding: '2%',
        paddingLeft: '10%',
    },
    secondaryContainer: {
        padding: '1%',
        marginTop: '2%'
    },
    cardDisplay: {

        cardMargin: {
            margin: '1%'
        },
        root: {
            maxWidth: 345,
        },
          media: {
            height: 200,
        },
    },
    containerTopMargin: {
        marginTop: '2%'
    },
    creamBackground: {
        marginTop: '2%',
        paddingTop: '1%',
        paddingBottom: '1%',
        backgroundColor: '#898C26',
    }
}

function Home(props){
    
    const {history} = props

    return (
        <>
            <Grid container style={styles.mainContainer} justify="center">
                <Grid item container xs>
                    <Grid item style={{marginRight: '3%'}}>
                        <CardMedia 
                            component="img"
                            title = "WEAVE App Logo"
                            alt = "WEAVE App Logo"
                            image = {Logo}
                            style = {{
                                width: "200px",
                            }}/>
                    </Grid>
                    <Grid item xs>
                        <Typography variant="h1" color="secondary">
                            WEAVE<b>hub</b></Typography>
                        <Typography gutterBottom color="secondary">
                            An online repository for the preservation of Cordilleran Weaving Artifacts.
                        </Typography>              
                        <Button variant="contained" color="primary" onClick={()=> history.push('/about')}>
                            Learn More
                        </Button>
                    </Grid>  
                </Grid>
                <Grid item xs>
                    <CardMedia
                        component="img"
                        title = "Indigenous People"
                        alt = "Indigenous People"
                        image = {IndigenousPeople}
                        style = {{
                            maxWidth: '700px',
                            minWidth: '300px'
                        }}
                    />
                </Grid>
            </Grid>
        <Container style={styles.containerTopMargin}>
            <Typography 
                gutterBottom
                variant="h2"
                align="center"
                color="primary">
                    Ethnolinguistic Groups
            </Typography>

            <Typography 
                gutterBottom
                align="center">
                    Most Weaving Artifacts can be differentiated by analyzing their unique patterns.
                    Different ethnolinguistic groups have different techniques to produce weavings that
                    show their respective identities and cultures.
                    There are seven (7) major ethnolinguistic groups when it comes to Weaving Artifacts.
                    These are the following:
            </ Typography>
        </Container>

        <Grid container justify="center">

            {/* Bontoc */}
            <Grid item xs={2} style={styles.cardDisplay.cardMargin}>
                <Card style={styles.cardDisplay.root}>
                    <CardActionArea>
                        
                        <CardMedia
                            style={styles.cardDisplay.media}
                            component="img"
                            alt="Bontoc"
                            image={BontocImg}
                            title="Bontoc Pattern"
                        />
                        <CardContent>

                        <Typography gutterBottom variant="h5" component="h2">
                            Bontoc
                        </Typography>

                        <Typography variant="body2" component="p">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam pharetra, lectus quis iaculis pretium, quam risus ornare quam.
                        </Typography>

                    </CardContent>

                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                        View Gallery
                        </Button>
                    </CardActions>
                </Card>
            </Grid>

            {/* Ibaloi */}
            <Grid item xs={2} style={styles.cardDisplay.cardMargin}>
                <Card style={styles.cardDisplay.root}>
                    <CardActionArea>
                        
                        <CardMedia
                            style={styles.cardDisplay.media}
                            component="img"
                            alt="Ibaloi"
                            image={IbaloiImg}
                            title="Ibaloi Pattern"
                        />
                        <CardContent>

                        <Typography gutterBottom variant="h5" component="h2">
                            Ibaloi
                        </Typography>

                        <Typography variant="body2" component="p">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam pharetra, lectus quis iaculis pretium, quam risus ornare quam.
                        </Typography>

                    </CardContent>

                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                        View Gallery
                        </Button>
                    </CardActions>
                </Card>
            </Grid>

            {/* Ifugao */}
            <Grid item xs={2} style={styles.cardDisplay.cardMargin}>
                <Card style={styles.cardDisplay.root}>
                    <CardActionArea>
                        
                        <CardMedia
                            style={styles.cardDisplay.media}
                            component="img"
                            alt="Ifugao"
                            image={IfugaoImg}
                            title="Ifugao Pattern"
                        />
                        <CardContent>

                        <Typography gutterBottom variant="h5" component="h2">
                            Ifugao
                        </Typography>

                        <Typography variant="body2" component="p">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam pharetra, lectus quis iaculis pretium, quam risus ornare quam.
                        </Typography>

                    </CardContent>

                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                        View Gallery
                        </Button>
                    </CardActions>
                </Card>
            </Grid>

            {/* Isneg */}
            <Grid item xs={2} style={styles.cardDisplay.cardMargin}>
                <Card style={styles.cardDisplay.root}>
                    <CardActionArea>
                        
                        <CardMedia
                            style={styles.cardDisplay.media}
                            component="img"
                            alt="Isneg"
                            image={IsnegImg}
                            title="Isneg Pattern"
                        />
                        <CardContent>

                        <Typography gutterBottom variant="h5" component="h2">
                            Isneg
                        </Typography>

                        <Typography variant="body2" component="p">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam pharetra, lectus quis iaculis pretium, quam risus ornare quam.
                        </Typography>

                    </CardContent>

                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                        View Gallery
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>

        <Grid container justify="center">

            {/* Kalinga */}
            <Grid item xs={2} style={styles.cardDisplay.cardMargin}>
                <Card style={styles.cardDisplay.root}>
                    <CardActionArea>
                        
                        <CardMedia
                            style={styles.cardDisplay.media}
                            component="img"
                            alt="Kalinga"
                            image={KalingaImg}
                            title="Kalinga Pattern"
                        />
                        <CardContent>

                        <Typography gutterBottom variant="h5" component="h2">
                            Kalinga
                        </Typography>

                        <Typography variant="body2" component="p">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam pharetra, lectus quis iaculis pretium, quam risus ornare quam.
                        </Typography>

                    </CardContent>

                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                        View Gallery
                        </Button>
                    </CardActions>
                </Card>
            </Grid>

            {/* Kankanaey */}
            <Grid item xs={2} style={styles.cardDisplay.cardMargin}>
                <Card style={styles.cardDisplay.root}>
                    <CardActionArea>
                        
                        <CardMedia
                            style={styles.cardDisplay.media}
                            component="img"
                            alt="Kankanaey"
                            image={KankanaeyImg}
                            title="Kankanaey Pattern"
                        />
                        <CardContent>

                        <Typography gutterBottom variant="h5" component="h2">
                            Kankanaey
                        </Typography>

                        <Typography variant="body2" component="p">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam pharetra, lectus quis iaculis pretium, quam risus ornare quam.
                        </Typography>

                    </CardContent>

                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                        View Gallery
                        </Button>
                    </CardActions>
                </Card>
            </Grid>

            {/* Tinggian */}
            <Grid item xs={2} style={styles.cardDisplay.cardMargin}>
                <Card style={styles.cardDisplay.root}>
                    <CardActionArea>
                        
                        <CardMedia
                            style={styles.cardDisplay.media}
                            component="img"
                            alt="Tinggian"
                            image={TinggianImg}
                            title="Tinggian Pattern"
                        />
                        <CardContent>

                        <Typography gutterBottom variant="h5" component="h2">
                            Tinggian
                        </Typography>

                        <Typography variant="body2" component="p">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam pharetra, lectus quis iaculis pretium, quam risus ornare quam.
                        </Typography>

                    </CardContent>

                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                        View Gallery
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>

        <Grid style={styles.creamBackground}>
            <Container>
                <Typography 
                    variant="h2"
                    align="center"
                    color="secondary">
                        Galleries
                </Typography>

                <Typography 
                    gutterBottom
                    align="center"
                    color="secondary">
                        The following showcases the galleries featuring the weaving artifact patterns
                        from the seven (7) different ethnolinguistic groups.
                </ Typography>
            </Container>

            <Container style={styles.secondaryContainer}>
                <Grid container justify="center">
                    <Grid item xs>
                        <Typography variant="h4" color="secondary">
                            Bontoc
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" color="secondary">
                            See all
                        </Button>
                    </Grid>
                </Grid>
                <SampleImages data='bontoc'/>
            </Container>

            <Container style={styles.secondaryContainer}>
                <Grid container justify="center">
                    <Grid item xs>
                        <Typography variant="h4" color="secondary">
                            Ibaloi
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" color="secondary">
                            See all
                        </Button>
                    </Grid>
                </Grid>
                <SampleImages data='ibaloi'/>
            </Container>

            <Container style={styles.secondaryContainer}>
                <Grid container justify="center">
                    <Grid item xs>
                        <Typography variant="h4" color="secondary">
                            Ifugao
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" color="secondary">
                            See all
                        </Button>
                    </Grid>
                </Grid>
                <SampleImages data='ifugao'/>
            </Container>

            <Container style={styles.secondaryContainer}>
                <Grid container justify="center">
                    <Grid item xs>
                        <Typography variant="h4" color="secondary">
                            Isneg
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" color="secondary">
                            See all
                        </Button>
                    </Grid>
                </Grid>
                <SampleImages data='isneg'/>
            </Container>

            <Container style={styles.secondaryContainer}>
                <Grid container justify="center">
                    <Grid item xs>
                        <Typography variant="h4" color="secondary">
                            Kalinga
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" color="secondary">
                            See all
                        </Button>
                    </Grid>
                </Grid>
                <SampleImages data='kalinga'/>
            </Container>


            <Container style={styles.secondaryContainer}>
                <Grid container justify="center">
                    <Grid item xs>
                        <Typography variant="h4" color="secondary">
                            Kankanaey
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" color="secondary">
                            See all
                        </Button>
                    </Grid>
                </Grid>
                <SampleImages data='kankanaey' />
            </Container>

            <Container style={styles.secondaryContainer}>
                <Grid container justify="center">
                    <Grid item xs>
                        <Typography variant="h4" color="secondary">
                            Tinggian
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" color="secondary">
                            See all
                        </Button>
                    </Grid>
                </Grid>
                <SampleImages data='tinggian'/>
            </Container>
        </Grid>

        </>
    );
}

export default withRouter(Home);