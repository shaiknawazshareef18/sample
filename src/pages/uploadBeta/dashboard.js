import React, {useState, useEffect} from 'react'
import {Typography, Box, Button, TextField} from '@material-ui/core'
import {Dialog, DialogTitle, DialogContent} from '@material-ui/core'
import {Table, TableHead, TableCell, TableBody, TableRow} from '@material-ui/core'
import { firestore, storage } from '../../firebase'
import firebase from 'firebase/app'

function Dashboard(props) {

    const [selectedImages, setSelectedImages] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)
    const [category, setCategory] = useState('')
    const [ticket, setTicket] = useState(null)
    const [openDialog, setOpenDialog] = useState(false)
    const [isUploading, setIsUploading] = useState(false)
    const [myTickets, setMyTickets] = useState([])
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    function handleSelectedImages(event) {
        if(event.target.files){
            const images = Array.from(event.target.files).map((file)=>(
                {
                    name: file['name'],
                    file: file
                }
            ))
            setSelectedImages(images)
        }
    }

    async function checkUpload(){
        if(selectedImages === null || category === ''){
            setErrorMessage('Please fill all required fields')
        } else {
            setIsUploading(true)
            const referenceTicket = await generateTicket()
            await firestore.collection('tickets').add({
                'comments': null,
                'createdAt': new Date(),
                'status': 'pending',
                'ticketID' : referenceTicket,
                'userID': props.user.id,
                'category' : category,
            })
            .then(async (result)=>{
                
                await selectedImages.map(async (image)=>{
                    await storage.ref(`${category}/${referenceTicket}/${image.name}`).put(image.file)
                    .then(async ()=>{
                        await storage.ref(`${category}/${referenceTicket}/${image.name}`).getDownloadURL()
                        .then(async (url)=> {
                            firestore.collection('tickets').doc(result.id)
                            .update({
                                images: firebase.firestore.FieldValue.arrayUnion(url)
                            })
                        })
                    })
                    .catch((error)=>setErrorMessage(error.message))
                })

                setOpenDialog(true)
                setCategory('')
                setSelectedImages(null)
                setIsUploading(false)

            })
            .catch((error)=>{
                setErrorMessage(error.message)
            })
            
        }
    }

    async function generateTicket() {
        var result = ''
        var alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789'
        for (var i=0; i < 11; i++){
            result += await alphabets[Math.floor((Math.random() * alphabets.length-1) + 1)]
        }
        await setTicket(result)
        return result
    }

    useEffect(()=>{
        const unsubscribe = firestore.collection('tickets').where('userID', '==', props.user.id)
        .orderBy('createdAt', 'desc')
        .onSnapshot((result)=>{
            setMyTickets(
                result.docs.map((doc)=>{
                    if(doc.data().administeredAt === undefined){
                        return ({
                            key: doc.id,
                            date:
                            monthNames[doc.data().createdAt.toDate().getMonth()] + " " +
                            doc.data().createdAt.toDate().getDate() + ", " + 
                            doc.data().createdAt.toDate().getFullYear(),
                            status: doc.data().status,
                            ticketID: doc.data().ticketID,
                            comments: doc.data().comments,
                            category: doc.data().category,
                            dateAdmin: "-"
                        })
                    } else {
                        return ({
                            key: doc.id,
                            date:
                            monthNames[doc.data().createdAt.toDate().getMonth()] + " " +
                            doc.data().createdAt.toDate().getDate() + ", " + 
                            doc.data().createdAt.toDate().getFullYear(),
                            status: doc.data().status,
                            ticketID: doc.data().ticketID,
                            comments: doc.data().comments,
                            category: doc.data().category,
                            dateAdmin:
                            monthNames[doc.data().administeredAt.toDate().getMonth()] + " " +
                            doc.data().administeredAt.toDate().getDate() + ", " + 
                            doc.data().administeredAt.toDate().getFullYear(),
                        })
                    }
                })
            )
        })
        console.log(myTickets)
        return ()=> unsubscribe
    // eslint-disable-next-line
    },[])

    return(
        <>
            <Typography variant='h2' style={{margin: '5%'}}>Hi {props.user.firstname}</Typography>

            <Box m={5}>
                <Typography variant='h6'>Upload Image</Typography>
                <Typography>{errorMessage}</Typography>
                <input type='file' multiple onChange={handleSelectedImages}/>
                <TextField 
                    required 
                    label='category' 
                    variant='outlined'
                    value={category} 
                    onChange={(event)=>setCategory(event.target.value)} />
                <Button 
                    color='primary' 
                    variant='contained' 
                    onClick={checkUpload}
                    disabled={isUploading}
                >Request Upload Image/s</Button>
            </Box>

            <Box m={5}>
            {selectedImages && (
                <>
                    <Typography>Selected Images</Typography>
                    {selectedImages.map((image) => (
                        <Typography key={image.name}>{image.name}</Typography>
                    ))}
                </>
            )}
            </Box>

            <Box m={5}>
                <Table>
                    <TableHead>
                        <TableCell><b>Ticket Reference</b></TableCell>
                        <TableCell><b>Date</b></TableCell>
                        <TableCell><b>Category</b></TableCell>
                        <TableCell><b>Comments</b></TableCell>
                        <TableCell><b>Status</b></TableCell>
                        <TableCell><b>Date Administered</b></TableCell>
                    </TableHead>
                    <TableBody>
                        {myTickets.map((ticket)=>(
                            <TableRow key={ticket.key}>
                                <TableCell >{ticket.ticketID}</TableCell>
                                <TableCell>{ticket.date}</TableCell>
                                <TableCell>{ticket.category}</TableCell>
                                <TableCell>{ticket.comments}</TableCell>
                                <TableCell>{ticket.status}</TableCell>
                                <TableCell>{ticket.dateAdmin}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>

            <Dialog open={openDialog} onClose={()=>setOpenDialog(false)}>
                <DialogTitle>Request Status</DialogTitle>
                <DialogContent>
                    <Typography paragraph>
                    Your request has been successfully created, your ticket reference is <b>{ticket}</b>. 
                    Please wait for a moment for the admin's to review your request.
                    Please take note of your ticket reference so that you can track or follow 
                    up the status of your request.
                    </Typography>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default Dashboard