import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'

import Bontoc from '../data/bontoc'
import Ibaloi from '../data/ibaloi'
import Ifugao from '../data/ifugao'
import Isneg from '../data/isneg'
import Kalinga from '../data/kalinga'
import Kankanaey from '../data/kankanaey'
import Tinggian from '../data/tinggian'

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

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={5}>
        {
          props.data === 'bontoc' && (
            Bontoc.map((tile) => (
              <GridListTile key={tile.img}>
                <img
                  src={tile.img}
                  alt={tile.title}
                  />
              </GridListTile>
            ))
          )
        }
        {
          props.data === 'ibaloi' && (
            Ibaloi.map((tile) => (
              <GridListTile key={tile.img}>
                <img
                  src={tile.img}
                  alt={tile.title}
                  />
              </GridListTile>
            ))
          )
        }
        {
          props.data === 'ifugao' && (
            Ifugao.map((tile) => (
              <GridListTile key={tile.img}>
                <img
                  src={tile.img}
                  alt={tile.title}
                  />
              </GridListTile>
            ))
          )
        }
        {
          props.data === 'isneg' && (
            Isneg.map((tile) => (
              <GridListTile key={tile.img}>
                <img
                  src={tile.img}
                  alt={tile.title}
                  />
              </GridListTile>
            ))
          )
        }
        {
          props.data === 'kalinga' && (
            Kalinga.map((tile) => (
              <GridListTile key={tile.img}>
                <img
                  src={tile.img}
                  alt={tile.title}
                  />
              </GridListTile>
            ))
          )
        }
        {
          props.data === 'kankanaey' && (
            Kankanaey.map((tile) => (
              <GridListTile key={tile.img}>
                <img
                  src={tile.img}
                  alt={tile.title}
                  />
              </GridListTile>
            ))
          )
        }
        {
          props.data === 'tinggian' && (
            Tinggian.map((tile) => (
              <GridListTile key={tile.img}>
                <img
                  src={tile.img}
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
