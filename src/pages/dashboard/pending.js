import React, {useState, useEffect} from 'react'
import {
    Box, 
    Typography, 
    Table, 
    TableHead, 
    TableCell, 
    TableBody, 
    TableRow, 
    Button, 
    TextField, 
    Dialog, 
    DialogTitle,
    DialogContent, 
    DialogActions} from '@material-ui/core'
import { firestore } from '../../firebase'

function Pending(props) {

    const [tickets, setTickets] = useState([])
    const [openDialog2, setOpenDialog2] = useState(false)
    const [openDialog3, setOpenDialog3] = useState(false)
    const [chosenDocument, setChosenDocument] = useState(null)
    const [chosenTicket, setChosenTicket] = useState(null)
    const [placedComments, setPlacedComments] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)

    function handleApprove() {
        firestore.collection('tickets').doc(chosenDocument).update({
            adminID: props.user.id,
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
            adminID: props.user.id,
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
        <>
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

export default Pending