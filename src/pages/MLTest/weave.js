import React, {useState, useRef}from 'react'
import {OpenCvProvider, useOpenCv} from 'opencv-react'
import { Button, Typography } from '@material-ui/core'
import * as tf from '@tensorflow/tfjs'

function WeaveComponent() {
    const [imageURL, setImageURL] = useState(null)
    const [model, setModel] = useState(null)
    const [result, setResult] = useState([])
    const {loaded, cv} = useOpenCv()
    const imageRef = useRef()

    function uploadImage(event) {
        setResult([])
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
        cv.cvtColor(image, newImage, cv.COLOR_RGBA2RGB, 0);
        // cv.imshow(outputCanvas, newImage)

        var convImage = []
        newImage.data.map((data)=>{
            convImage.push(data)
            return true
        })
        convImage = convImage.splice(0,12288)

        const resulttf = model.predict(tf.tensor([convImage]))
        resulttf.data().then(async (data) => setResult(data))
        image.delete();
        newImage.delete();
    }

    async function loadModel() {
        var model = await tf.loadLayersModel('https://tensorflowjsweavetestmodel.s3.jp-tok.cloud-object-storage.appdomain.cloud/model.json')
        setModel(model)
    }

    if(!loaded){
        loadModel()
        return (<h1>OPENCV AND MODEL IS LOADING XD</h1>)
    }

    return(
        <>
            <h1>WEAVE MODEL TEST</h1>
            <input type='file' accept='image/*' capture='camera' onChange={uploadImage}/>
            {imageURL && (
                <>
                <Button onClick={predictImage} color='primary' variant='contained' >Predict Weave</Button>
                {result.length > 0 && (
                    <>
                    <Typography><b>RESULT</b></Typography>
                    <Typography><b>Bontoc:</b> {(result[0] * 100).toFixed(2)}%</Typography>
                    <Typography><b>Ibaloi:</b> {(result[1] * 100).toFixed(2)}%</Typography>
                    <Typography><b>Ifugao:</b> {(result[2] * 100).toFixed(2)}%</Typography>
                    <Typography><b>Isneg:</b> {(result[3] * 100).toFixed(2)}%</Typography>
                    <Typography><b>Kalinga:</b> {(result[4] * 100).toFixed(2)}%</Typography>
                    <Typography><b>Kankanaey:</b> {(result[5] * 100).toFixed(2)}%</Typography>
                    <Typography><b>Tinggian:</b> {(result[6] * 100).toFixed(2)}%</Typography>
                    </>
                )}
                <br/>
                <img id="canvasxd" src={imageURL} alt="Attached" crossOrigin="anonymous" ref={imageRef} style={{height: '60%'}} />
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
