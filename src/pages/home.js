import React from 'react';
import { withRouter } from 'react-router-dom';
import { sizing } from '@material-ui/system';

import Logo from '../assets/logo_b.png';
import BGImage from '../assets/mainContainerBG.png';
import IndigenousPeople from '../assets/indigenousPeople.png';
import SampleImages from '../components/imageListSample';
import BontocImg from '../assets/weaves-samples/Bontoc.jpg';
import IbaloiImg from '../assets/weaves-samples/Ibaloi.jpg';
import IfugaoImg from '../assets/weaves-samples/Ifugao.jpg';
import IsnegImg from '../assets/weaves-samples/Isneg.jpg';
import KalingaImg from '../assets/weaves-samples/Kalinga.jpg';
import KankanaeyImg from '../assets/weaves-samples/Kankanaey.jpg';
import TinggianImg from '../assets/weaves-samples/Tinggian.jpg';

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
  Divider,
} from '@material-ui/core';

const styles = {
  bg: {
    backgroundImage: `url(${BGImage})`,
    padding: '1rem',
    minHeight: '15rem',
  },
  logo: {
    width: '10rem',
    height: '10rem',
    marginRight: '1rem',
  },
  noPadding: {
    padding: 0,
  },
  noMargin: {
    margin: 0,
  },
  gridContainer: {
    justifyContent: 'space-around',
  },
  resetPosition: {
    left: 0,
  },
  secondaryContainer: {
    padding: '1%',
    marginTop: '2%',
  },
  hasVerticalSpacer: {
    marginTop: '1rem',
  },
  hasHorizontalScroll: {
    overflowX: 'scroll',
  },
  cardDisplay: {
    cardMargin: {
      margin: '1rem 0rem',
    },
    root: {
      maxWidth: '14rem',
    },
    media: {
      height: '15rem',
    },
  },
  containerTopMargin: {
    marginTop: '2%',
  },
  creamBackground: {
    marginTop: '2%',
    paddingTop: '1%',
    paddingBottom: '1%',
    backgroundColor: '#898C26',
  },
};

function Home(props) {
  const { classes, history, setCategory, visibility, setVisibility } = props;

  function handleGallery(category) {
    setCategory(category);
    setVisibility(visibility);
    history.push('/gallery');
  }

  return (
    <div
      className={(classes.inline, classes.container)}
      style={styles.noPadding}
    >
      <div className={classes.inline} style={styles.bg}>
        <img src={Logo} style={styles.logo} />
        <div>
          <Typography variant="h2" color="primary">
            <b>WEAVE</b>hub
          </Typography>
          <Typography>
            An online repository for the preservation of Cordilleran Weaving
            Artifacts
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={() => {
              history.push('/about');
            }}
            style={styles.hasVerticalSpacer}
          >
            Learn more
          </Button>
        </div>
      </div>
      <Divider />
      <Container
        className={classes.centerContent}
        style={styles.hasVerticalSpacer}
      >
        <Typography variant="h2" align="center" color="primary">
          Ethnolinguistic Groups
        </Typography>
      </Container>
      <Container className={classes.centerContent}>
        <Typography align="center">
          Most Weaving Artifacts can be differentiated by analyzing their unique
          patterns. Different ethnolinguistic groups have different techniques
          to produce weavings that show their respective identities and
          cultures. There are seven (7) major ethnolinguistic groups when it
          comes to Weaving Artifacts. These are the following:
        </Typography>
      </Container>

      <div className={classes.spaceAround} style={styles.hasVerticalSpacer}>
        <Grid container className={classes.inline} style={styles.gridContainer}>
          <Grid item style={styles.cardDisplay.cardMargin}>
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
                    Nullam pharetra, lectus quis iaculis pretium, quam risus
                    ornare quam.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => handleGallery('Bontoc')}
                >
                  View Gallery
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item style={styles.cardDisplay.cardMargin}>
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
                    Nullam pharetra, lectus quis iaculis pretium, quam risus
                    ornare quam.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => handleGallery('Ibaloi')}
                >
                  View Gallery
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item style={styles.cardDisplay.cardMargin}>
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
                    Nullam pharetra, lectus quis iaculis pretium, quam risus
                    ornare quam.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => handleGallery('Ifugao')}
                >
                  View Gallery
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item style={styles.cardDisplay.cardMargin}>
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
                    Nullam pharetra, lectus quis iaculis pretium, quam risus
                    ornare quam.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => handleGallery('Isneg')}
                >
                  View Gallery
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item style={styles.cardDisplay.cardMargin}>
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
                    Nullam pharetra, lectus quis iaculis pretium, quam risus
                    ornare quam.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => handleGallery('Kalinga')}
                >
                  View Gallery
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item style={styles.cardDisplay.cardMargin}>
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
                    Nullam pharetra, lectus quis iaculis pretium, quam risus
                    ornare quam.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => handleGallery('Kankanaey')}
                >
                  View Gallery
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item style={styles.cardDisplay.cardMargin}>
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
                    Nullam pharetra, lectus quis iaculis pretium, quam risus
                    ornare quam.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => handleGallery('Tinggian')}
                >
                  View Gallery
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
    // <>
    //   <Grid container style={styles.mainContainer} justify="center">
    //     <Grid item container xs>
    //       <Grid item style={{ marginRight: '3%' }}>
    //         <CardMedia
    //           component="img"
    //           title="WEAVE App Logo"
    //           alt="WEAVE App Logo"
    //           image={Logo}
    //           style={{
    //             width: '200px',
    //           }}
    //         />
    //       </Grid>
    //       <Grid item xs>
    //         <Typography variant="h1" color="primary">
    //           WEAVE<b>hub</b>
    //         </Typography>
    //         <Typography gutterBottom>
    //           An online repository for the preservation of Cordilleran Weaving
    //           Artifacts.
    //         </Typography>
    //         <Button
    //           variant="contained"
    //           color="primary"
    //           onClick={() => history.push('/about')}
    //         >
    //           Learn More
    //         </Button>
    //       </Grid>
    //     </Grid>
    //     <Grid item xs>
    //       <CardMedia
    //         component="img"
    //         title="Indigenous People"
    //         alt="Indigenous People"
    //         image={IndigenousPeople}
    //         style={{
    //           maxWidth: '700px',
    //           minWidth: '300px',
    //         }}
    //       />
    //     </Grid>
    //   </Grid>
    //   <Container style={styles.containerTopMargin}>
    //     <Typography gutterBottom variant="h2" align="center" color="primary">
    //       Ethnolinguistic Groups
    //     </Typography>

    //     <Typography gutterBottom align="center">
    // Most Weaving Artifacts can be differentiated by analyzing their unique
    // patterns. Different ethnolinguistic groups have different techniques
    // to produce weavings that show their respective identities and
    // cultures. There are seven (7) major ethnolinguistic groups when it
    // comes to Weaving Artifacts. These are the following:
    //     </Typography>
    //   </Container>

    //   <Grid container justify="center">
    // {/* Bontoc */}
    // <Grid item xs={2} style={styles.cardDisplay.cardMargin}>
    //   <Card style={styles.cardDisplay.root}>
    //     <CardActionArea>
    //       <CardMedia
    //         style={styles.cardDisplay.media}
    //         component="img"
    //         alt="Bontoc"
    //         image={BontocImg}
    //         title="Bontoc Pattern"
    //       />
    //       <CardContent>
    //         <Typography gutterBottom variant="h5" component="h2">
    //           Bontoc
    //         </Typography>

    //         <Typography variant="body2" component="p">
    //           Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    //           Nullam pharetra, lectus quis iaculis pretium, quam risus
    //           ornare quam.
    //         </Typography>
    //       </CardContent>
    //     </CardActionArea>
    //     <CardActions>
    //       <Button
    //         size="small"
    //         color="primary"
    //         onClick={() => handleGallery('Bontoc')}
    //       >
    //         View Gallery
    //       </Button>
    //     </CardActions>
    //   </Card>
    // </Grid>

    // {/* Ibaloi */}
    // <Grid item xs={2} style={styles.cardDisplay.cardMargin}>
    //   <Card style={styles.cardDisplay.root}>
    //     <CardActionArea>
    //       <CardMedia
    //         style={styles.cardDisplay.media}
    //         component="img"
    //         alt="Ibaloi"
    //         image={IbaloiImg}
    //         title="Ibaloi Pattern"
    //       />
    //       <CardContent>
    //         <Typography gutterBottom variant="h5" component="h2">
    //           Ibaloi
    //         </Typography>

    //         <Typography variant="body2" component="p">
    //           Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    //           Nullam pharetra, lectus quis iaculis pretium, quam risus
    //           ornare quam.
    //         </Typography>
    //       </CardContent>
    //     </CardActionArea>
    //     <CardActions>
    //       <Button
    //         size="small"
    //         color="primary"
    //         onClick={() => handleGallery('Ibaloi')}
    //       >
    //         View Gallery
    //       </Button>
    //     </CardActions>
    //   </Card>
    // </Grid>

    // {/* Ifugao */}
    // <Grid item xs={2} style={styles.cardDisplay.cardMargin}>
    //   <Card style={styles.cardDisplay.root}>
    //     <CardActionArea>
    //       <CardMedia
    //         style={styles.cardDisplay.media}
    //         component="img"
    //         alt="Ifugao"
    //         image={IfugaoImg}
    //         title="Ifugao Pattern"
    //       />
    //       <CardContent>
    //         <Typography gutterBottom variant="h5" component="h2">
    //           Ifugao
    //         </Typography>

    //         <Typography variant="body2" component="p">
    //           Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    //           Nullam pharetra, lectus quis iaculis pretium, quam risus
    //           ornare quam.
    //         </Typography>
    //       </CardContent>
    //     </CardActionArea>
    //     <CardActions>
    //       <Button
    //         size="small"
    //         color="primary"
    //         onClick={() => handleGallery('Ifugao')}
    //       >
    //         View Gallery
    //       </Button>
    //     </CardActions>
    //   </Card>
    // </Grid>

    //   {/* Isneg */}
    //   <Grid item xs={2} style={styles.cardDisplay.cardMargin}>
    //     <Card style={styles.cardDisplay.root}>
    //       <CardActionArea>
    //         <CardMedia
    //           style={styles.cardDisplay.media}
    //           component="img"
    //           alt="Isneg"
    //           image={IsnegImg}
    //           title="Isneg Pattern"
    //         />
    //         <CardContent>
    //           <Typography gutterBottom variant="h5" component="h2">
    //             Isneg
    //           </Typography>

    //           <Typography variant="body2" component="p">
    //             Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    //             Nullam pharetra, lectus quis iaculis pretium, quam risus
    //             ornare quam.
    //           </Typography>
    //         </CardContent>
    //       </CardActionArea>
    //       <CardActions>
    //         <Button
    //           size="small"
    //           color="primary"
    //           onClick={() => handleGallery('Isneg')}
    //         >
    //           View Gallery
    //         </Button>
    //       </CardActions>
    //     </Card>
    //   </Grid>
    // </Grid>

    //   <Grid container justify="center">
    // {/* Kalinga */}
    // <Grid item xs={2} style={styles.cardDisplay.cardMargin}>
    //   <Card style={styles.cardDisplay.root}>
    //     <CardActionArea>
    //       <CardMedia
    //         style={styles.cardDisplay.media}
    //         component="img"
    //         alt="Kalinga"
    //         image={KalingaImg}
    //         title="Kalinga Pattern"
    //       />
    //       <CardContent>
    //         <Typography gutterBottom variant="h5" component="h2">
    //           Kalinga
    //         </Typography>

    //         <Typography variant="body2" component="p">
    //           Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    //           Nullam pharetra, lectus quis iaculis pretium, quam risus
    //           ornare quam.
    //         </Typography>
    //       </CardContent>
    //     </CardActionArea>
    //     <CardActions>
    //       <Button
    //         size="small"
    //         color="primary"
    //         onClick={() => handleGallery('Kalinga')}
    //       >
    //         View Gallery
    //       </Button>
    //     </CardActions>
    //   </Card>
    // </Grid>

    // {/* Kankanaey */}
    // <Grid item xs={2} style={styles.cardDisplay.cardMargin}>
    //   <Card style={styles.cardDisplay.root}>
    //     <CardActionArea>
    //       <CardMedia
    //         style={styles.cardDisplay.media}
    //         component="img"
    //         alt="Kankanaey"
    //         image={KankanaeyImg}
    //         title="Kankanaey Pattern"
    //       />
    //       <CardContent>
    //         <Typography gutterBottom variant="h5" component="h2">
    //           Kankanaey
    //         </Typography>

    //         <Typography variant="body2" component="p">
    //           Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    //           Nullam pharetra, lectus quis iaculis pretium, quam risus
    //           ornare quam.
    //         </Typography>
    //       </CardContent>
    //     </CardActionArea>
    //     <CardActions>
    //       <Button
    //         size="small"
    //         color="primary"
    //         onClick={() => handleGallery('Kankanaey')}
    //       >
    //         View Gallery
    //       </Button>
    //     </CardActions>
    //   </Card>
    // </Grid>

    //   {/* Tinggian */}
    //   <Grid item xs={2} style={styles.cardDisplay.cardMargin}>
    //     <Card style={styles.cardDisplay.root}>
    //       <CardActionArea>
    //         <CardMedia
    //           style={styles.cardDisplay.media}
    //           component="img"
    //           alt="Tinggian"
    //           image={TinggianImg}
    //           title="Tinggian Pattern"
    //         />
    //         <CardContent>
    //           <Typography gutterBottom variant="h5" component="h2">
    //             Tinggian
    //           </Typography>

    //           <Typography variant="body2" component="p">
    //             Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    //             Nullam pharetra, lectus quis iaculis pretium, quam risus
    //             ornare quam.
    //           </Typography>
    //         </CardContent>
    //       </CardActionArea>
    //       <CardActions>
    //         <Button
    //           size="small"
    //           color="primary"
    //           onClick={() => handleGallery('Tinggian')}
    //         >
    //           View Gallery
    //         </Button>
    //       </CardActions>
    //     </Card>
    //   </Grid>
    // </Grid>

    //   <Grid style={styles.creamBackground}>
    //     <Container>
    //       <Typography variant="h2" align="center" color="secondary">
    //         Galleries
    //       </Typography>

    //       <Typography gutterBottom align="center" color="secondary">
    //         The following showcases the galleries featuring the weaving artifact
    //         patterns from the seven (7) different ethnolinguistic groups.
    //       </Typography>
    //     </Container>

    //     <Container style={styles.secondaryContainer}>
    //       <Grid container justify="center">
    //         <Grid item xs>
    //           <Typography variant="h4" color="secondary">
    //             Bontoc
    //           </Typography>
    //         </Grid>
    //         <Grid item>
    //           <Button
    //             variant="outlined"
    //             color="secondary"
    //             onClick={() => handleGallery('Bontoc')}
    //           >
    //             See all
    //           </Button>
    //         </Grid>
    //       </Grid>
    //       <SampleImages data="bontoc" />
    //     </Container>

    //     <Container style={styles.secondaryContainer}>
    //       <Grid container justify="center">
    //         <Grid item xs>
    //           <Typography variant="h4" color="secondary">
    //             Ibaloi
    //           </Typography>
    //         </Grid>
    //         <Grid item>
    //           <Button
    //             variant="outlined"
    //             color="secondary"
    //             onClick={() => handleGallery('Ibaloi')}
    //           >
    //             See all
    //           </Button>
    //         </Grid>
    //       </Grid>
    //       <SampleImages data="ibaloi" />
    //     </Container>

    //     <Container style={styles.secondaryContainer}>
    //       <Grid container justify="center">
    //         <Grid item xs>
    //           <Typography variant="h4" color="secondary">
    //             Ifugao
    //           </Typography>
    //         </Grid>
    //         <Grid item>
    //           <Button
    //             variant="outlined"
    //             color="secondary"
    //             onClick={() => handleGallery('Ifugao')}
    //           >
    //             See all
    //           </Button>
    //         </Grid>
    //       </Grid>
    //       <SampleImages data="ifugao" />
    //     </Container>

    //     <Container style={styles.secondaryContainer}>
    //       <Grid container justify="center">
    //         <Grid item xs>
    //           <Typography variant="h4" color="secondary">
    //             Isneg
    //           </Typography>
    //         </Grid>
    //         <Grid item>
    //           <Button
    //             variant="outlined"
    //             color="secondary"
    //             onClick={() => handleGallery('Isneg')}
    //           >
    //             See all
    //           </Button>
    //         </Grid>
    //       </Grid>
    //       <SampleImages data="isneg" />
    //     </Container>

    //     <Container style={styles.secondaryContainer}>
    //       <Grid container justify="center">
    //         <Grid item xs>
    //           <Typography variant="h4" color="secondary">
    //             Kalinga
    //           </Typography>
    //         </Grid>
    //         <Grid item>
    //           <Button
    //             variant="outlined"
    //             color="secondary"
    //             onClick={() => handleGallery('Kalinga')}
    //           >
    //             See all
    //           </Button>
    //         </Grid>
    //       </Grid>
    //       <SampleImages data="kalinga" />
    //     </Container>

    //     <Container style={styles.secondaryContainer}>
    //       <Grid container justify="center">
    //         <Grid item xs>
    //           <Typography variant="h4" color="secondary">
    //             Kankanaey
    //           </Typography>
    //         </Grid>
    //         <Grid item>
    //           <Button
    //             variant="outlined"
    //             color="secondary"
    //             onClick={() => handleGallery('Kankanaey')}
    //           >
    //             See all
    //           </Button>
    //         </Grid>
    //       </Grid>
    //       <SampleImages data="kankanaey" />
    //     </Container>

    //     <Container style={styles.secondaryContainer}>
    //       <Grid container justify="center">
    //         <Grid item xs>
    //           <Typography variant="h4" color="secondary">
    //             Tinggian
    //           </Typography>
    //         </Grid>
    //         <Grid item>
    //           <Button
    //             variant="outlined"
    //             color="secondary"
    //             onClick={() => handleGallery('Tinggian')}
    //           >
    //             See all
    //           </Button>
    //         </Grid>
    //       </Grid>
    //       <SampleImages data="tinggian" />
    //     </Container>
    //   </Grid>
    // </div>
  );
}

export default withRouter(Home);
