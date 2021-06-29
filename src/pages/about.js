import React from 'react';
import {
  Container,
  Card,
  CardContent,
  Grid,
  CardMedia,
  Typography,
} from '@material-ui/core';

import BGImage from '../assets/mainContainerBG-large.png';
import CITCSCHED from '../assets/citcs-ched-b.png';
import Logo from '../assets/logo_b.png';
import LogoHunt from '../assets/weaveHuntLogo-B.png';

const styles = {
  mainContainer: {
    backgroundImage: `url(${BGImage})`,
  },
  titleContainer: {
    marginBottom: '2%',
    padding: '1%',
  },
  logo: {
    minWidth: '20rem',
    height: '20rem',
  },
  citcschedlogo: {
    minWidth: '20rem',
    height: '20rem',
  },
  hasVerticalSpacer: {
    marginTop: '1rem',
  },
  bottomPadded: {
    paddingBottom: '2rem',
  },
};

function About(props) {
  const { classes } = props;
  return (
    <div>
      <Grid container style={styles.mainContainer}>
        <Grid item xs>
          <Card className={classes.aboutCardRoot}>
            <CardMedia style={styles.logo} image={Logo} title="Logo" />
            <div className={classes.aboutCardDetails}>
              <CardContent className={classes.aboutCardContent}>
                <Typography variant="h3" color="primary">
                  WEAVE<b>hub</b>
                </Typography>
                <Typography gutterBottom variant="h6">
                  An online repository for the preservation of Cordilleran
                  Weaving Artifacts
                </Typography>
                <Typography>
                  WeaveHub is an open-source website created with the aim of
                  preserving the weaving patterns of Cordillera's 7
                  ethnolinguistic groups, these are Bontoc, Ibaloi, Ifugao,
                  Isneg, Kalinga, Kankanaey, and Tinggian. It contains digitized
                  images of the different weaving textiles or patterns of the
                  said groups.
                </Typography>
              </CardContent>
            </div>
          </Card>
        </Grid>

        <Grid item xs>
          <Card className={classes.aboutCardRoot}>
            <CardMedia style={styles.logo} image={LogoHunt} title="Logo" />
            <div className={classes.aboutCardDetails}>
              <CardContent className={classes.aboutCardContent}>
                <Typography variant="h3" color="primary">
                  WEAVE<b>hunt</b>
                </Typography>
                <Typography gutterBottom variant="h6">
                  An online tool for classifying Cordilleran Weaving Artifacts
                  based on patterns using Artificial Intelligence.
                </Typography>
                <Typography>
                  WeaveHub is an open-source website created with the aim of
                  preserving the weaving patterns of Cordillera's 7
                  ethnolinguistic groups, these are Bontoc, Ibaloi, Ifugao,
                  Isneg, Kalinga, Kankanaey, and Tinggian. It contains digitized
                  images of the different weaving textiles or patterns of the
                  said groups.
                </Typography>
              </CardContent>
            </div>
          </Card>
        </Grid>
      </Grid>
      <Container style={styles.bottomPadded}>
        <Typography
          variant="h2"
          align="center"
          color="primary"
          style={styles.hasVerticalSpacer}
        >
          University of the Cordilleras
        </Typography>
        <Typography align="center" variant="h5">
          College of Information Technology and Computer Science
        </Typography>

        <Typography align="center" style={styles.hasVerticalSpacer}>
          Pranella shonget mahogany makyonget matod ng at fayatollah kumenis ano
          ganda lang sangkatuts mahogany katol ang pranella antibiotic nang na
          kasi jowabelles kemerloo katol , pamin makyonget ang katagalugan
          jupang-pang at at bakit , katagalugan shonget sudems na ang shogal
          tetetet borta bakit at nang kemerloo bella valaj wiz na ang at nang
          lulu kemerloo ng thunder jowabella ng fayatollah kumenis chopopo sa
          nakakalurky klapeypey-klapeypey kasi guash at bella nang chopopo
          klapeypey-klapeypey bakit at kirara na ang lulu mashumers bakit
          krung-krung at planggana kasi waz kasi chopopo kasi at na nang shala
          conalei at nang jowabelles.
        </Typography>
        <Grid container justify="center" style={styles.hasVerticalSpacer}>
          <img src={CITCSCHED} style={styles.citcschedlogo} />
        </Grid>

        <Typography variant="h2" align="center" color="primary">
          Constitution on Higher Education (CHED)
        </Typography>

        <Typography align="center">
          Pranella shonget mahogany makyonget matod ng at fayatollah kumenis ano
          ganda lang sangkatuts mahogany katol ang pranella antibiotic nang na
          kasi jowabelles kemerloo katol , pamin makyonget ang katagalugan
          jupang-pang at at bakit , katagalugan shonget sudems na ang shogal
          tetetet borta bakit at nang kemerloo bella valaj wiz na ang at nang
          lulu kemerloo ng thunder jowabella ng fayatollah kumenis chopopo sa
          nakakalurky klapeypey-klapeypey kasi guash at bella nang chopopo
          klapeypey-klapeypey bakit at kirara na ang lulu mashumers bakit
          krung-krung at planggana kasi waz kasi chopopo kasi at na nang shala
          conalei.
        </Typography>
      </Container>
    </div>
  );
}

export default About;
