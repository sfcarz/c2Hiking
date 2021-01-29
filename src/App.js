import './App.css';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import NavBar from './components/navbar';
import Landing from './components/landing';
import Hiking from './components/hiking'
import sunrise from './components/images/sunrise.jpg';

const useStyles = makeStyles({
  first: {
    width: 'auto',
    height: '100vh',
    backgroundImage: `url(${sunrise})`,
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    position: 'center center'
  },
})

function App() {

  const classes = useStyles()

  return (
    <Grid>

      <Grid
        className={classes.first}
        container
        direction='column'
        justify='center'
        alignItems='flex-start'>
        <NavBar />
        <Landing />
      </Grid>

      <Grid
        container
        direction='column'
        justify='center'
        alignItems='flex-start'>
      </Grid>
    <Hiking />
    </Grid>
  );
}

export default App;
