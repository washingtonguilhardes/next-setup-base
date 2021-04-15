import React from 'react';

import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@src/Components/Athoms/Typography';

const useStyles = makeStyles({
  root: {
    padding: '16px',
    height: '100%',
    margin: 54,
  },
  title: {
    textAlign: 'center',
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Typography variant="h1" className={classes.title}>
        EXAMPLE
      </Typography>
    </Paper>
  );
};

export default Home;
