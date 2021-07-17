import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { Typography, Grid, GridList, GridListTile, Button } from '@material-ui/core';
import { firestore } from '../firebase';

function Gallery(props) {
  const { classes, visibility } = props;
  const [images, setImages] = useState([]);
  const [lastDoc, setLastDoc] = useState(null)
  const [noMoreData, setNoMoreData] = useState(false)

  useEffect(()=> {
    const unsub = firestore
    .collection(props.category)
    .orderBy('createdAt', 'desc')
    .limit(visibility ? 30 : 4)
    .get()
    .then((collections)=>{
      setImages(collections.docs.map((doc) => ({
        id: doc.id,
        url: doc.data().imageURL,
        title: doc.data().title,
      })))
      setLastDoc(collections.docs[collections.docs.length - 1])
      console.log('XD')
    })
    return ()=> unsub
  }, [props.category, visibility])

  function loadMoreImages() {
    if(lastDoc != null){
      firestore
      .collection(props.category)
      .orderBy('createdAt', 'desc')
      .startAfter(lastDoc)
      .limit(22)
      .get()
      .then((collections)=>{
        if(collections.size !== 0){
          const newData = (collections.docs.map((doc) => ({
            id: doc.id,
            url: doc.data().imageURL,
            title: doc.data().title,
          })))
          setImages(prevData => [...prevData, ...newData])
          setLastDoc(collections.docs[collections.docs.length - 1])
        } else {
          setNoMoreData(true)
        }
        console.log('XD')
        
      })
    }
  }

  return (
    <>
      <Grid
        container
        className={clsx({
          [classes.hide]: !visibility,
        })}
      >
        <Typography
          variant="h3"
          align="center"
          style={{ margin: '1rem 1rem 0rem 1rem' }}
        >
          {props.category}
        </Typography>
      </Grid>
      <Grid container style={{ padding: '0rem 1rem' }}>
        <Grid item>
          <GridList
            cellHeight={'10rem'}
            cols={'auto'}
            style={{ marginBottom: '1rem' }}
          >
            {images.map((tile) => (
              <GridListTile key={tile.key} cols={1}>
                <img src={tile.url} alt={tile.title} />
              </GridListTile>
            ))}
          </GridList>
        </Grid>
        {visibility && !noMoreData &&  
          <Button 
            variant='contained' 
            color='primary'
            onClick={loadMoreImages}
            > See more images
          </Button>}
        {noMoreData && <Typography variant='h3'> No more Images to show </Typography>}
      </Grid>
    </>
  );
}

export default Gallery;
