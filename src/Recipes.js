import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CameraIcon from '@material-ui/icons/RestaurantMenu';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

const classes = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));
class Recipes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isModalOpen: false};
  }
  
  render() {
    console.log(this.props.recipe.ingredients);
    return (
      <React.Fragment>
      <CssBaseline />
      <Grid item key={0} xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        
        <img src={this.props.recipe.image} alt="food"/>
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
          {this.props.recipe.label}
          </Typography>
          <Typography>
            <h1>ingredients</h1>
            {this.props.recipe.ingredients.map(data=>{
              return(
                <div>
                  <h1>{data.text}</h1>
                  <h3>{data.weight}</h3>
                  <img src={data.image} alt="food"/>
                </div>
              );
            })}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            View
          </Button>
          <Button size="small" color="primary">
            Edit
          </Button>
        </CardActions>
      </Card>
    </Grid>
    </React.Fragment>
    );
  }
}

export default Recipes;

