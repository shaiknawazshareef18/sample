import React, { useState } from 'react'
import {Button, Grid, Typography, Dialog} from '@material-ui/core'
import { DialogContent, DialogActions } from '@material-ui/core'

const styles = {
    background:{
        backgroundColor: '#000000',
        padding: '1%',
    },
    text: {
        marginBottom: "1%",
    },
}



function Footer(){

    

    const [openDialog, setOpenDialog] = useState(false)
    
    const handleClickOpen = () => {
        setOpenDialog(true);
      };
    
      const handleClose = () => {
        setOpenDialog(false);
      };

    return (
        <>
        <Grid container justify="center" style={styles.background} >
            <Grid item>
                <Typography align="center" color="secondary">
                    © WeaveHub 2021
                </Typography>
                <Grid container xs justify="center" style={styles.background} >
                    <Grid item>
                        <Typography align="center" color="secondary" style={styles.text}>
                            Made by the UC CS Team
                        </Typography>
                    </Grid>
                    <Grid item
                        style={{marginBottom: '3%'}}>
                        <Button size="small" color="primary"
                        onClick={()=>setOpenDialog(true)}
                        >
                            Admin Login
                        </Button>
                    </Grid>
                </Grid>

                <Typography align="center" color="secondary"
                style={{
                    fontWeight: 'lighter',
                }}>
                    Vector images from Vecteezy.com
                </Typography>
            </Grid>
        </Grid>

        <Dialog
            open={openDialog}
            onClose={handleClose}>

            <DialogContent>
                <Typography gutterBottom variant="h3">
                    Note:
                </Typography>
                <Typography gutterBottom>
                    Please contact the administrator for instructions in opening the admin page.
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={handleClose}
                    color="primary"
                    variant="outlined">
                        Close
                </Button>
                <Button
                    color="primary"
                    variant="contained">
                        Contact Admin
                </Button>
            </DialogActions>

        </Dialog>
        </>
    )
}

export default Footer