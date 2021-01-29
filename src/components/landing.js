import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import '../App.css';

const useStyles = makeStyles({
  first: {
    marginLeft: '10rem',
  },
  second: {
    marginTop: '60px',
    marginLeft: '2rem',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    color: '#eee'
  },
  search: {
    color: '#eee',
  }
})

export default function First() {

  const classes = useStyles()

  const success = (position) => {
  console.log(position);
  }
  
  navigator.geolocation.getCurrentPosition(success)

  return (
    <Grid item xl={4} lg={4} md={6} sm={8} xs={10}>
      <div className={classes.first}>
        <Typography variant='h3' className='text-dark font-weight-bold border-bottom pb-3 border-dark'>
          Welcome to the Hiking App.
        </Typography>
        <Typography className='font-weight-bold pt-3 text-light'>
          Start by searching the location you would like to find a trail.
        </Typography>
        <form>
          <TextField noValidate label='Search City' className='mt-5' />
          <Button
            variant='contained' className={classes.second}>Search</Button>
        </form>
        </div>
    </Grid>
  )
}
