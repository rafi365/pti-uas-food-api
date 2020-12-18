import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 700,
        marginTop: 80,
    },
    media: {
        height: 300,
    },
});

export default function MediaCard(props) {
    const classes = useStyles();
    return (
        
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={props.bio.image}
                    title={props.bio.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.bio.name}
          </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Program Studi : {props.bio.programstudi}<br/>
                        NIM           : {props.bio.NIM}<br/>
                        Jenis Kelamin : {props.bio.Jeniskelamin}
          </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Learn More
        </Button>
            </CardActions>

        </Card>

    );
}
