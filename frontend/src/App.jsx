import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { getPosts } from './actions/posts';

import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import memories from './images/memories.png';
import Form from './components/Form/Form';
import Posts from './components/Posts/posts';
import useStyle from './styles';

function App() {
  const classes = useStyle();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts);
  }, []);
  
  return (
    <Container maxWidth="lg">
    <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography className={classes.heading} variant='h2' align='center'>Memories</Typography>
        <img className={classes.image} src={memories} alt="memories" height="60" width="60"/>
      </AppBar>
      <Grow in> 
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={4}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default App
