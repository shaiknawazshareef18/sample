import React from 'react';
import {
  Button,
  Typography,
  Divider,
  Grid
} from '@material-ui/core';

import Logo from '../assets/logo_b.png';
import BGImage from '../assets/mainContainerBG.png';
import SingleGallery from './gallery';

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
  imageContainer: {
    padding: '1rem 0rem',
    height: '20rem',
    overflowY: 'auto',
    marginBottom: '1rem',
    backgroundColor: '#898C26',
  },
  container: {
    display: 'flex',
    padding: '1rem',
  },
};
function Galleries(props) {
  const { classes, history, visibility, setVisibility, setCategory } = props;

  function handleGallery(category) {
    setCategory(category);
    setVisibility(visibility);
    history.push('/gallery');
  }

  return (
    <>
      <div className={classes.inline} style={styles.bg}>
        <img src={Logo} style={styles.logo} alt="Weave Hub Logo"/>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h5" color="primary">
              WEAVE<b>hub</b>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h2">Galleries</Typography>
          </Grid>
        </Grid>
      </div>
      <Divider />
      <Grid container>
        <Grid item xs={11} style={styles.container}>
          <Typography variant="h4" style={{ flexGrow: 1 }}>
            Bontoc
          </Typography>

          <Button
            color="primary"
            onClick={() => handleGallery('Bontoc')}
            variant="contained"
          >
            View All
          </Button>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={11} style={styles.imageContainer}>
          <SingleGallery
            visibility={!visibility}
            classes={classes}
            category={'Bontoc'}
          />
        </Grid>
        <Divider />

        <Grid container>
          <Grid item xs={11} style={styles.container}>
            <Typography variant="h4" style={{ flexGrow: 1 }}>
              Ibaloi
            </Typography>

            <Button
              color="primary"
              onClick={() => handleGallery('Ibaloi')}
              variant="contained"
            >
              View All
            </Button>
          </Grid>
        </Grid>

        <Grid item xs={11} style={styles.imageContainer}>
          <SingleGallery
            visibility={!visibility}
            classes={classes}
            category={'Ibaloi'}
          />
        </Grid>
        <Divider />

        <Grid container>
          <Grid item xs={11} style={styles.container}>
            <Typography variant="h4" style={{ flexGrow: 1 }}>
              Ifugao
            </Typography>

            <Button
              color="primary"
              onClick={() => handleGallery('Ifugao')}
              variant="contained"
            >
              View All
            </Button>
          </Grid>
        </Grid>

        <Grid item xs={11} style={styles.imageContainer}>
          <SingleGallery
            visibility={!visibility}
            classes={classes}
            category={'Ifugao'}
          />
        </Grid>
        <Divider />

        <Grid container>
          <Grid item xs={11} style={styles.container}>
            <Typography variant="h4" style={{ flexGrow: 1 }}>
              Isneg
            </Typography>

            <Button
              color="primary"
              onClick={() => handleGallery('Isneg')}
              variant="contained"
            >
              View All
            </Button>
          </Grid>
        </Grid>

        <Grid item xs={11} style={styles.imageContainer}>
          <SingleGallery
            visibility={!visibility}
            classes={classes}
            category={'Isneg'}
          />
        </Grid>
        <Divider />

        <Grid container>
          <Grid item xs={11} style={styles.container}>
            <Typography variant="h4" style={{ flexGrow: 1 }}>
              Kalinga
            </Typography>

            <Button
              color="primary"
              onClick={() => handleGallery('Kalinga')}
              variant="contained"
            >
              View All
            </Button>
          </Grid>
        </Grid>

        <Grid item xs={11} style={styles.imageContainer}>
          <SingleGallery
            visibility={!visibility}
            classes={classes}
            category={'Kalinga'}
          />
        </Grid>
        <Divider />

        <Grid container>
          <Grid item xs={11} style={styles.container}>
            <Typography variant="h4" style={{ flexGrow: 1 }}>
              Kankanaey
            </Typography>

            <Button
              color="primary"
              onClick={() => handleGallery('Kankanaey')}
              variant="contained"
            >
              View All
            </Button>
          </Grid>
        </Grid>

        <Grid item xs={11} style={styles.imageContainer}>
          <SingleGallery
            visibility={!visibility}
            classes={classes}
            category={'Kankanaey'}
          />
        </Grid>
        <Divider />

        <Grid container>
          <Grid item xs={11} style={styles.container}>
            <Typography variant="h4" style={{ flexGrow: 1 }}>
              Tinggian
            </Typography>

            <Button
              color="primary"
              onClick={() => handleGallery('Tinggian')}
              variant="contained"
            >
              View All
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={11} style={styles.imageContainer}>
          <SingleGallery
            visibility={!visibility}
            classes={classes}
            category={'Tinggian'}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default Galleries;
