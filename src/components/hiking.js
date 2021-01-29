import React from 'react'
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  first: {
    width: '100%',
    height: '100vh'
  }
})

export default function Hiking() {

  const classes = useStyles()
  return (
    <Grid>
    <div className={classes.first}>
      <h1>
        Christopher Rojas
      </h1>
    </div>
    </Grid>
  )
}
