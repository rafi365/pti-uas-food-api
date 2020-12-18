import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    // display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(100),
      height: theme.spacing(50),

    },
  },
}));

export default function Variants() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper variant="outlined">
        
        <Typography variant="h3" >
            <br/>
            <br/>
            FOOD RECIPE
        </Typography>
        <Typography variant="h5">
            Healthy Food, Healthy life
        </Typography>
      </Paper>
    </div>
  );
}
