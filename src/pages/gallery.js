import React, {useState, useEffect} from 'react'
import {Typography, GridList, GridListTile} from '@material-ui/core'
import {firestore} from '../firebase'

function Gallery(props){

    const [images, setImages] = useState([])

    useEffect(()=>{
        const unsubscribe = firestore.collection(props.category)
        .onSnapshot((querySnapshot)=> {
            setImages(querySnapshot.docs.map((doc)=>({
                key: doc.id,
                url: doc.data().imageURL,
                title: doc.data().title
            })))
        })
        return () => unsubscribe
    },[images, props.category])

    return(
        <>
            <Typography variant='h2' align='center'>{props.category}</Typography>
            <GridList cellHeight={200} cols={6}>
                {images.map((tile) => (
                <GridListTile key={tile.key} cols={1}>
                    <img src={tile.url} alt={tile.title} />
                </GridListTile>
                ))}
            </GridList>
        </>
    )
}

export default Gallery