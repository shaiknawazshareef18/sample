import React, {useState, useEffect, useRef} from 'react'
import {Typography, Box, Button} from '@material-ui/core'
import * as mobilenet from '@tensorflow-models/mobilenet'

function MLBeta() {

    const [model, setModel] = useState(null)
    const [isModelLoading, setModelLoading] = useState(false)
    const [imageURL, setImageURL] = useState(null) 
    const [results, setResults] = useState([])

    const imageRef = useRef()

    async function loadModel() {
        setModelLoading(true)
        try{
            const model = await mobilenet.load()
            setModel(model)
            setModelLoading(false)
        } catch (error){
            console.log(error)
            setModelLoading(false)
        }
    }

    function uploadImage(event) {
        console.log(event.target.files)
        if(event.target.files.length > 0){
            const url = URL.createObjectURL(event.target.files[0])
            setImageURL(url)
        } else {
            setImageURL(null) 
        }
    }

    async function identify() {
        const results = await model.classify(imageRef.current)
        setResults(results)
        console.log(results)
    }

    useEffect(()=>{
        loadModel()
    }, []) 

    if(isModelLoading){
        return <Typography variant='h2' align='center'>Mobilenet model is Loading</Typography>
    }

    return(
        <>
            <Typography variant='h2' align='center'>TF.JS Image Classification Test</Typography>
            <Box m={5}>
                <input type='file' accept='image/*' capture='camera' onChange={uploadImage}/>
                <Button color='primary' variant='contained' onClick={identify}>Identify Image</Button>
                <Typography>Results:
                {
                    results.map((data)=>(
                        <p>Object:<b>{data.className}</b> Probability:{data.probability}%</p>
                    ))
                }
                </Typography>
            </Box>
            <Box m={5}>
                {imageURL && (
                    <img src={imageURL} alt="Attached" crossOrigin="anonymous" ref={imageRef} />
                )}
            </Box>
        </>
    )
}

export default MLBeta