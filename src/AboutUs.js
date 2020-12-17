import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardAboutUs from './card_aboutus';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    root: {
        maxWidth: 700,
        marginTop: 80,
        marginLeft: 200,
    },
    media: {
        height: 300,
    },
});

const biodata = [
    {
      name: 'Muhammad Rafi Sofyan',
      image: 'https://cdn-2.tstatic.net/travel/foto/bank/images/nasgor-surabaya.jpg',
      programstudi: "Informatika",
      NIM: "00000039757",
      Jeniskelamin: "Laki-laki",
    },
    {
        name: 'Umar Haqi',
        image: 'https://ik.imagekit.io/tvlk/cul-asset/guys1L+Yyer9kzI3sp-pb0CG1j2bhflZGFUZOoIf1YOBAm37kEUOKR41ieUZm7ZJ/tvlk-prod-cul-assets/culinary/asset/REST_Nas-1059x720-FIT_AND_TRIM-b8f8e1ba5da08927a6aa082ded6a487f.jpeg?tr=q-40,c-at_max,w-1080,h-1920&amp;_src=imagekit',
        programstudi: "Informatika",
        NIM: "00000041073",
        Jeniskelamin: "Laki-laki",
    },
    {
        name: 'Edrick Sugiharto Putra',
        image: 'https://akcdn.detik.net.id/visual/2020/02/17/1976941e-2f59-43fa-9b86-f09617c12d44_169.jpeg?w=700&q=90',
        programstudi: "Informatika",
        NIM: "00000041062",
        Jeniskelamin: "Laki-laki",
    },
  ];
export default function MediaCard() {
    const classes = useStyles();

    return (
    <div>
        <br/>
        <h1>ABOUT US</h1>
        <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        >
            {biodata.map((props) => {
                return (
                    <CardAboutUs 
                    bio={props}
                    />
                );
                }) 
            }
        </Grid>
        
    </div>
    );
}
