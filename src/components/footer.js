import React, { useState } from 'react'
import {Button, Grid, Typography, Dialog} from '@material-ui/core'
import { DialogContent } from '@material-ui/core'

const styles = {
    background:{
        backgroundColor: '#000000',
        padding: '1%',
    },
    text: {
        marginBottom: "1%",
    }
}

function Footer(){

    const [openDialog, setOpenDialog] = useState(false)

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

        <Dialog open={openDialog} onClose={()=>setOpenDialog(false)}>
            <DialogContent>
                <Typography variant='h6'>
                    Admin Note: Please contact the administrator for instructions in opening the admin page.
                    Thank you :)
                </Typography>
            </DialogContent>
        </Dialog>
        </>
    )
}

export default Footer