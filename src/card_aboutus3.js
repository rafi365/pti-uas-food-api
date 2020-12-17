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

export default function MediaCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="https://akcdn.detik.net.id/visual/2020/02/17/1976941e-2f59-43fa-9b86-f09617c12d44_169.jpeg?w=700&q=90"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Edrick Sugiharto Putra
          </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Program Studi : Informatika<br/>
                        NIM           : 0000004162<br/>
                        Jenis Kelamin : Laki-laki
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
