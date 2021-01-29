import React from 'react'
import { Grid } from '@material-ui/core';

export default function NavBar() {
  return (
    <Grid item>
    <nav className="navbar navbar-expand-lg fixed-top">
        <div>
          <a className='mr-3' href="chris@rojas.com">Home</a>
          <a href="chris@rojas.com" className="float-right">About</a>
      </div>
      </nav>
      </Grid>
  )
}
