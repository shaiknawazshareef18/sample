import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { Typography, Grid, GridList, GridListTile } from '@material-ui/core';
import { firestore } from '../firebase';

function Gallery(props) {
  const { classes, visibility } = props;
  const [images, setImages] = useState([]);

  useEffect(() => {
    const unsubscribe = firestore
      .collection(props.category)
      .orderBy('createdAt', 'desc')
      .onSnapshot((querySnapshot) => {
        setImages(
          querySnapshot.docs.map((doc) => ({
            key: doc.id,
            url: doc.data().imageURL,
            title: doc.data().title,
          }))
        );
      });
    return () => unsubscribe;
  }, [images, props.category]);

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
      </Grid>
    </>
  );
}

export default Gallery;
