import React, {useState} from 'react'
import {Typography, Box, TextField, Button} from '@material-ui/core'
import { authentication, firestore } from '../../firebase'
import {Link, useHistory} from 'react-router-dom'

// THIS IS JUST TEMPORARY HAHHHAA (Users can login, create account, and upload images here)

function UploadBeta(props){

    const [errorMessage, setErrorMessage] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const history = useHistory()

    function loginUser(){
        setErrorMessage(null)
        if(email === null || password === null || email === '' || password === ''){
            setErrorMessage('Please fill in all required fields')
        } else {
            authentication.signInWithEmailAndPassword(email, password)
            .then((authResult) => {
                if(authResult.user.emailVerified){
                    firestore.collection('users').doc(authResult.user.uid).get()
                    .then((doc) => {
                        props.setUser((
                            {
                                id: authResult.user.uid, 
                                firstname: doc.data().firstname,
                                middlename: doc.data().middlename,
                                lastname: doc.data().lastname
                            }
                        ))
                        props.setAuth(true)
                        history.push('./test/dashboard')
                    })
                    .catch((error)=>setErrorMessage(error.message))
                } else {
                    setErrorMessage('Your email is not yet verified, please verify your email for you to proceed. If you have concerns or problems, please contact us immedialtely. ')
                }
            })
            .catch((error)=>setErrorMessage(error.message))
        }
    }

    return(
        <>
            <Typography variant='h2'>Weaver's Login </Typography>
            <Box m={5}>
                <Typography>{errorMessage}</Typography>
                <TextField 
                    required
                    fullWidth
                    label='Email'
                    type='email'
                    variant='outlined'
                    onChange={(event)=>setEmail(event.target.value)}/>
                <TextField 
                    required
                    fullWidth
                    label='Password'
                    type='password'
                    variant='outlined'
                    onChange={(event)=>setPassword(event.target.value)}/>
                <Link to='./test/register'>Create your account</Link>
                <Button variant='contained' color='primary' onClick={loginUser}>Login</Button>
            </Box>
        </>
    )
}

export default UploadBeta