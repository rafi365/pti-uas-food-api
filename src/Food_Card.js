import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    marginLeft: 160,
    marginTop: 20,
    alignItems: 'center',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  console.log(props.foodie);
  return (
    <Card className={classes.root}>
      <CardHeader
        title={props.foodie.food.label}
        subheader={props.foodie.food.category}
      />
      <CardMedia
        className={classes.media}
        image={props.foodie.food.image}
        title={props.foodie.food.label}
      />
      <CardContent>
      <Typography variant="body2" color="textSecondary" component="p">
      Food Content Label: {props.foodie.food.foodContentsLabel}
      <Typography paragraph>Nutrients</Typography>
                <Typography paragraph>
                ENERC_KCAL:{props.foodie.food.nutrients.ENERC_KCAL.toFixed(2)}<br/>
                PROCNT:{props.foodie.food.nutrients.PROCNT.toFixed(2)}<br/>
                FAT:{props.foodie.food.nutrients.FAT.toFixed(2)}<br/>
                CHOCDF:{props.foodie.food.nutrients.CHOCDF.toFixed(2)}<br/>
                FIBTG:{props.foodie.food.nutrients.FIBTG.toFixed(2)}
                </Typography>
          </Typography>
        
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <Typography paragraph>Measures:</Typography>
          {props.foodie.measures.map((data) => {
              return (
                <Typography paragraph>
                {data.label}<br/>
                Weight:{data.weight.toFixed(2)}
                </Typography>
              );
            }) }
        </CardContent>
      </Collapse>
    </Card>
  );
}