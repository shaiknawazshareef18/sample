import React, {useState, useRef}from 'react'
import {OpenCvProvider, useOpenCv} from 'opencv-react'
import { Button } from '@material-ui/core'
import weaveModel from '../../test_model/model.json'
import * as tf from '@tensorflow/tfjs'

function WeaveComponent() {
    const [imageURL, setImageURL] = useState(null)
    const [model, setModel] = useState(null)
    const {loaded, cv} = useOpenCv()
    const imageRef = useRef()

    function uploadImage(event) {
        if(event.target.files.length > 0){
            const url = URL.createObjectURL(event.target.files[0])
            setImageURL(url)
        } else {
            setImageURL(null) 
        }
    }

    function predictImage() {
        const outputCanvas = document.getElementById('outputCanvas')
        const image = cv.imread(document.getElementById('canvasxd'))
        const dsize = new cv.Size(256, 256)
        let newImage = new cv.Mat()

        cv.resize(image, newImage, dsize, 0, 0, cv.INTER_AREA);
        cv.cvtColor(newImage, newImage, cv.COLOR_RGBA2RGB, 0);
        cv.imshow(outputCanvas, newImage)

        var convImage = []
        newImage.data.map((data)=>{
            convImage.push(data)
            return true
        })
        convImage = convImage.splice(0,12288)
        console.log(convImage)

        image.delete();
        newImage.delete();
    }

    async function loadModel() {
        var model = await tf.loadLayersModel(weaveModel)
        setModel(model)
    }


    if(!loaded){
        loadModel()
        return (<h1>OPENCV IS LOADING XD</h1>)
    }

    return(
        <>
            <h1>OPENCV.JS IN REACT TEST</h1>
            <input type='file' accept='image/*' capture='camera' onChange={uploadImage}/>
            {imageURL && (
                <>
                <Button onClick={predictImage} color='primary' variant='contained' >XD</Button>
                <br/>
                <img id="canvasxd" src={imageURL} alt="Attached" crossOrigin="anonymous" ref={imageRef} style={{width: '60%'}} />
                <canvas id="outputCanvas" />
                </>
            )}
        </>
    )
}

const Weave = () => {
    const onLoaded = (cv) => {
      console.log('opencv loaded')
    }
    return (
      <OpenCvProvider onLoad={onLoaded}>
        <WeaveComponent />
      </OpenCvProvider>
    )
}

export default Weave
