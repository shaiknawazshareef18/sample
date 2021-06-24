import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import {firestore} from '../firebase'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    margin: '1%',
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },
});

export default function SingleLineGridList(props) {
  const classes = useStyles();
  const [bontoc, setBontoc] = useState([])
  const [ibaloi, setIbaloi] = useState([])
  const [ifugao, setIfugao] = useState([])
  const [isneg, setIsneg] = useState([])
  const [kalinga, setKalinga] = useState([])
  const [kankanaey, setKankanaey] = useState([])
  const [tinggian, setTinggian] = useState([]) 

  useEffect(()=>{
    const unsubsribe = firestore.collection('Bontoc').orderBy('createdAt').limit(11)
      .onSnapshot((querySnapshot) => {
        setBontoc(querySnapshot.docs.map((doc)=> ({
          key: doc.id,
          url: doc.data().imageURL,
          title: doc.data().title
        })))
      })
    return () => unsubsribe
  },[])

  useEffect(()=>{
    const unsubsribe = firestore.collection('Ibaloi').orderBy('createdAt').limit(11)
      .onSnapshot((querySnapshot) => {
        setIbaloi(querySnapshot.docs.map((doc)=> ({
          key: doc.id,
          url: doc.data().imageURL,
          title: doc.data().title
        })))
      })
    return () => unsubsribe
  },[])

  useEffect(()=>{
    const unsubsribe = firestore.collection('Ifugao').orderBy('createdAt').limit(11)
      .onSnapshot((querySnapshot) => {
        setIfugao(querySnapshot.docs.map((doc)=> ({
          key: doc.id,
          url: doc.data().imageURL,
          title: doc.data().title
        })))
      })
    return () => unsubsribe
  },[])

  useEffect(()=>{
    const unsubsribe = firestore.collection('Isneg').orderBy('createdAt').limit(11)
      .onSnapshot((querySnapshot) => {
        setIsneg(querySnapshot.docs.map((doc)=> ({
          key: doc.id,
          url: doc.data().imageURL,
          title: doc.data().title
        })))
      })
    return () => unsubsribe
  },[])

  useEffect(()=>{
    const unsubsribe = firestore.collection('Kalinga').orderBy('createdAt').limit(11)
      .onSnapshot((querySnapshot) => {
        setKalinga(querySnapshot.docs.map((doc)=> ({
          key: doc.id,
          url: doc.data().imageURL,
          title: doc.data().title
        })))
      })
    return () => unsubsribe
  },[])

  useEffect(()=>{
    const unsubsribe = firestore.collection('Kankanaey').orderBy('createdAt').limit(11)
      .onSnapshot((querySnapshot) => {
        setKankanaey(querySnapshot.docs.map((doc)=> ({
          key: doc.id,
          url: doc.data().imageURL,
          title: doc.data().title
        })))
      })
    return () => unsubsribe
  },[])

  useEffect(()=>{
    const unsubsribe = firestore.collection('Tinggian').orderBy('createdAt').limit(11)
      .onSnapshot((querySnapshot) => {
        setTinggian(querySnapshot.docs.map((doc)=> ({
          key: doc.id,
          url: doc.data().imageURL,
          title: doc.data().title
        })))
      })
    return () => unsubsribe
  },[])

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={5}>
        {
          props.data === 'bontoc' && (
            bontoc.map((tile) => (
              <GridListTile key={tile.key}>
                <img
                  src={tile.url}
                  alt={tile.title}
                  />
              </GridListTile>
            ))
          )
        }
        {
          props.data === 'ibaloi' && (
            ibaloi.map((tile) => (
              <GridListTile key={tile.key}>
                <img
                  src={tile.url}
                  alt={tile.title}
                  />
              </GridListTile>
            ))
          )
        }
        {
          props.data === 'ifugao' && (
            ifugao.map((tile) => (
              <GridListTile key={tile.key}>
                <img
                  src={tile.url}
                  alt={tile.title}
                  />
              </GridListTile>
            ))
          )
        }
        {
          props.data === 'isneg' && (
            isneg.map((tile) => (
              <GridListTile key={tile.key}>
                <img
                  src={tile.url}
                  alt={tile.title}
                  />
              </GridListTile>
            ))
          )
        }
        {
          props.data === 'kalinga' && (
            kalinga.map((tile) => (
              <GridListTile key={tile.key}>
                <img
                  src={tile.url}
                  alt={tile.title}
                  />
              </GridListTile>
            ))
          )
        }
        {
          props.data === 'kankanaey' && (
            kankanaey.map((tile) => (
              <GridListTile key={tile.key}>
                <img
                  src={tile.url}
                  alt={tile.title}
                  />
              </GridListTile>
            ))
          )
        }
        {
          props.data === 'tinggian' && (
            tinggian.map((tile) => (
              <GridListTile key={tile.key}>
                <img
                  src={tile.url}
                  alt={tile.title}
                  />
              </GridListTile>
            ))
          )
        }
      </GridList>
    </div>
  );
}
