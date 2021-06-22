import React, {useState } from 'react';
import { withRouter } from 'react-router';
import { Typography, Box, Button,TextField } from '@material-ui/core';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import {firestore} from '../firebase';
import { Dialog, DialogContent, DialogTitle, DialogActions} from '@material-ui/core';

function Dashboard(props) {

    const [selectedImages, setSelectedImages] = useState([])
    const [openDialog, setOpenDialog] = useState(false)

    function handleSelectedImages(event) {
        if(event.target.files){
            const images = Array.from(event.target.files).map((file)=>file['name'])
            setSelectedImages(images)
            console.log(selectedImages)  
        }
    }

    function handleUpload() {
        setOpenDialog(false)
    }

    return(
        // TODO: CREATE UI HERE
        <>
        <Box m={4}>
            <Typography variant='h4'>Upload Weaving Pattern Image/s</Typography>
            <input type='file' multiple onChange={handleSelectedImages}/>
            <br/>
            <TextField label='Category' variant='outlined'/>
            <TextField label='Ticket' variant='outlined' />
            <Button variant='contained' onClick={()=>setOpenDialog(true)}>Upload</Button>
            <Typography>Selected Images</Typography>
            {selectedImages.map((image) => (
                <Typography>{image}</Typography>
            ))}
        </Box>
        <Box m={4}>
            <Typography variant='h4'>Pending Request/s</Typography>
            <Table>
                <TableHead>
                    <TableCell><b>Ticket</b></TableCell>
                    <TableCell><b>Date</b></TableCell>
                    <TableCell><b>Comment/s</b></TableCell>
                    <TableCell><b>Status</b></TableCell>
                    <TableCell><b>Actions</b></TableCell>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>qweqwe</TableCell>
                        <TableCell>qweqwe</TableCell>
                        <TableCell>qweqwe</TableCell>
                        <TableCell>qweqwe</TableCell>
                        <TableCell>qweqwe</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Box>
        <Dialog open={openDialog} onClose={()=>setOpenDialog(false)}>
            <DialogTitle>Note</DialogTitle>
            <DialogContent>
                Make sure that the images you are uploading are all images and is valid.
                Double check the Category name and the Ticket Reference if it is correct.
                All files that you have selected will be uploaded with no restrictions
                so make srue that you as the admin will check it properly.
                Are you sure you want to upload these images?
            </DialogContent>
            <DialogActions>
                <Button onClick={()=>setOpenDialog(false)}>Cancel</Button>
                <Button onClick={handleUpload}>Proceed</Button>
            </DialogActions>
        </Dialog>
        </>
    )
}

export default withRouter(Dashboard)