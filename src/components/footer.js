import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Grid, Typography, Dialog } from '@material-ui/core';
import { DialogContent, DialogActions } from '@material-ui/core';

function Footer(props) {
  const { history, classes } = props;
  const [openDialog, setOpenDialog] = useState(false);
  return (
    <Grid container className={classes.footer}>
      <Typography className={classes.footerItem} color="secondary">
        © WeaveHub 2021
      </Typography>
      <Typography className={classes.footerItem} color="secondary">
        Made by the UCCS Team
      </Typography>
      <Typography
        className={classes.footerItem}
        color="secondary"
        style={{
          fontWeight: 'lighter',
        }}
      >
        Vector images from Vecteezy.com
      </Typography>
      <Button color="primary" onClick={() => setOpenDialog(true)}>
        Admin Login
      </Button>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogContent>
          <Typography gutterBottom variant="h3">
            Note:
          </Typography>
          <Typography gutterBottom>
            Please contact the administrator for instructions in opening the
            admin page.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setOpenDialog(false)}
            color="primary"
            variant="outlined"
          >
            Close
          </Button>
          <Button
            color="primary"
            variant="contained"
            onClick={() => {
              setOpenDialog(false);
              history.push('/contactUs');
            }}
          >
            Contact Admin
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
    // <>
    // <Grid container justify="center" style={styles.background} >
    //     <Grid item>
    //         <Typography align="center" color="secondary">
    //             © WeaveHub 2021
    //         </Typography>
    //         <Grid container justify="center" style={styles.background} >
    //             <Grid item>
    //                 <Typography align="center" color="secondary" style={styles.text}>
    //                     Made by the UC CS Team
    //                 </Typography>
    //             </Grid>
    //             <Grid item
    //                 style={{marginBottom: '3%'}}>
    //                 <Button size="small" color="primary"
    //                 onClick={()=>setOpenDialog(true)}
    //                 >
    //                     Admin Login
    //                 </Button>
    //             </Grid>
    //         </Grid>

    //         <Typography align="center" color="secondary"
    //         style={{
    //             fontWeight: 'lighter',
    //         }}>
    //             Vector images from Vecteezy.com
    //         </Typography>
    //     </Grid>
    // </Grid>

    // <Dialog
    //     open={openDialog}
    //     onClose={()=>setOpenDialog(false)}>

    //     <DialogContent>
    //         <Typography gutterBottom variant="h3">
    //             Note:
    //         </Typography>
    //         <Typography gutterBottom>
    //             Please contact the administrator for instructions in opening the admin page.
    //         </Typography>
    //     </DialogContent>
    //     <DialogActions>
    //         <Button
    //             onClick={()=>setOpenDialog(false)}
    //             color="primary"
    //             variant="outlined">
    //                 Close
    //         </Button>
    //         <Button
    //             onClick={()=>setOpenDialog(false)}
    //             color="primary"
    //             variant="contained">
    //                 Contact Admin
    //         </Button>
    //     </DialogActions>

    // </Dialog>
  );
}

export default withRouter(Footer);
