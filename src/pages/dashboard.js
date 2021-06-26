import React, {useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import { Typography, Box, Button,TextField } from '@material-ui/core';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import {firestore, storage} from '../firebase';
import { Dialog, DialogContent, DialogTitle, DialogActions} from '@material-ui/core';

function Dashboard(props) {

    const [tickets, setTickets] = useState([])
    const [selectedImages, setSelectedImages] = useState([])
    const [openDialog, setOpenDialog] = useState(false)
    const [openDialog2, setOpenDialog2] = useState(false)
    const [openDialog3, setOpenDialog3] = useState(false)
    const [chosenDocument, setChosenDocument] = useState(null)
    const [chosenTicket, setChosenTicket] = useState(null)
    const [placedComments, setPlacedComments] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)
    const [errorMessage2, setErrorMessage2] = useState(null)
    const [category, setCategory] = useState('')
    const [author, setAuthor] = useState('')

    function handleSelectedImages(event) {
        if(event.target.files){
            const images = Array.from(event.target.files).map((file)=>(
                {
                    name: file['name'],
                    file: file,
                    key: file['lastMpdified']
                }
            ))
            setSelectedImages(images)
        }
    }

    function handleUpload() {
        setErrorMessage2(null)
        if(category === '' || author === '' || selectedImages.length <= 0){
            setErrorMessage2('Please fill in all required forms')
            setOpenDialog(false)
        } else {
            // eslint-disable-next-line
            selectedImages.map((image) => {
                const uploadTask = storage.ref(category+'/'+image.name).put(image.file)
                uploadTask.on("state_changed", 
                    snapshot => {},
                    error => {
                        setErrorMessage2(error.message)
                    },
                    () => {
                        storage.ref(category)
                        .child(image.name)
                        .getDownloadURL()
                        .then(url => {
                            firestore.collection(category).add({
                                createdAt: new Date(),
                                imageURL: url,
                                author: author,
                                title: image.name,
                                userID: props.user
                            })
                            .then(() => {
                                setOpenDialog(false)
                                setSelectedImages([])
                                setCategory('')
                                setAuthor('')
                            })
                            .catch((error) => {
                                setErrorMessage2(error.message)
                            })
                        })
                    })
                console.log(image.file)
            })
        }
    }

    function handleApprove() {
        firestore.collection('tickets').doc(chosenDocument).update({
            adminID: props.user,
            comments: placedComments,
            status: 'approved',
            administeredAt: new Date()
        })
        .then(() => {
            setOpenDialog2(false)
            setChosenDocument(null)
            setPlacedComments(null)
        })
        .catch((error)=>setErrorMessage(error.message))
    }

    function handleReject() {
        firestore.collection('tickets').doc(chosenDocument).update({
            adminID: props.user,
            comments: placedComments,
            status: 'rejected',
            administeredAt: new Date()
        })
        .then(() => {
            setOpenDialog3(false)
            setChosenDocument(null)
            setPlacedComments(null)
        })
        .catch((error)=>setErrorMessage(error.message))
    }

    useEffect(()=> {
        const unsubscribe = firestore.collection('tickets').where('status', '==', 'pending')
        .onSnapshot((querySnapshot)=>{
            setTickets(querySnapshot.docs.map(doc=>(
                {
                    id: doc.id, 
                    status: doc.data().status,
                    date: doc.data().createdAt.toDate().toString(),
                    ticketID: doc.data().ticketID,
                    comments: doc.data().comments
                }
            )))
        })
        return () => unsubscribe
    },[])

    return(
        // TODO: CREATE UI HERE
        <>
        <Box m={4}>
            <Typography variant='h4'>Upload Weaving Pattern Image/s</Typography>
            <Typography>{errorMessage2}</Typography>
            <input type='file' multiple onChange={handleSelectedImages}/>
            <br/>
            <TextField label='Category' variant='outlined' value={category} onChange={(event)=>setCategory(event.target.value)}/>
            <TextField label='Author' variant='outlined' value={author} onChange={(event)=>setAuthor(event.target.value)}/>
            <Button variant='contained' onClick={()=>setOpenDialog(true)}>Upload</Button>
            <Typography>Selected Images</Typography>
            {selectedImages.map((image) => (
                <TableRow key={image.key}>
                    <Typography>{image.name}</Typography>
                </TableRow>
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
                    {
                        tickets.map((ticket) => (
                            <TableRow key={ticket.id}>
                                <TableCell>{ticket.ticketID}</TableCell>
                                <TableCell>{ticket.date}</TableCell>
                                <TableCell>{ticket.comments}</TableCell>
                                <TableCell>{ticket.status}</TableCell>
                                <TableCell>
                                    <Button onClick={()=> {
                                        setOpenDialog3(true) 
                                        setChosenDocument(ticket.id)
                                        setChosenTicket(ticket.ticketID)
                                    }}>Reject</Button>
                                    <Button onClick={()=> {
                                        setOpenDialog2(true)
                                        setChosenDocument(ticket.id)
                                        setChosenTicket(ticket.ticketID)
                                    }}>Approve</Button>
                                </TableCell>
                            </TableRow>
                        ))
                    }
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
        <Dialog open={openDialog2} onClose={()=>{
            setOpenDialog2(false)
            setChosenDocument(null)
            setPlacedComments(null)
        }}>
            <DialogTitle>Approve Request ({chosenTicket})</DialogTitle>
            <DialogContent>
                <Typography>{errorMessage}</Typography>
                <Typography>
                    Add a comment if you want to place a comment,
                    click proceed to if you wish to approve this request.
                </Typography>
                <TextField fullWidth label='Comment' onChange={(event)=>setPlacedComments(event.target.value)}/>
            </DialogContent>
            <DialogActions>
                <Button onClick={()=>{
                    setOpenDialog2(false)
                    setChosenDocument(null)
                    setPlacedComments(null)
                }}>Cancel</Button>
                <Button onClick={handleApprove}>Proceed</Button>
            </DialogActions>
        </Dialog>
        <Dialog open={openDialog3} onClose={()=>{
            setOpenDialog3(false)
            setChosenDocument(null)
            setPlacedComments(null)
        }}>
            <DialogTitle>Reject Request ({chosenTicket})</DialogTitle>
            <DialogContent>
                <Typography>{errorMessage}</Typography>
                <Typography>
                    Add a comment if you want to place a comment,
                    click proceed if you wish to reject this request.
                </Typography>
                <TextField fullWidth label='Comment' onChange={(event)=>setPlacedComments(event.target.value)}/>
            </DialogContent>
            <DialogActions>
                <Button onClick={()=>{
                    setOpenDialog3(false)
                    setChosenDocument(null) 
                    setPlacedComments(null)
                }}>Cancel</Button>
                <Button onClick={handleReject}>Proceed</Button>
            </DialogActions>
        </Dialog>
        </>
    )
}

export default withRouter(Dashboard)