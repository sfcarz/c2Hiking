import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';

// import sunrise from './images/sunrise.jpg';

const useStyles = makeStyles({
  first: {
    marginLeft: '10rem',
  }
})

export default function First() {

  const classes = useStyles()

  return (
    <Grid item xl={4} lg={4} md={6} sm={8} xs={10}>
      <div className={classes.first}>
        <Typography variant='h3' className='text-dark font-weight-bold border-bottom pb-3 border-dark'>
          Welcome to the Hiking App.
        </Typography>
        <Typography className='font-weight-bold pt-3 text-light'>
          Start by searching the location you would like to find a trail.
        </Typography>
        </div>
    </Grid>
  )
}
