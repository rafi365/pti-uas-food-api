import React from 'react';
import CardAboutUs from './Card_Aboutus';
import Grid from '@material-ui/core/Grid';

const biodata = [
    {
      name: 'Muhammad Rafi Sofyan',
      image: 'https://cdn.discordapp.com/attachments/765461987718332416/789502688366297118/14733523_1343399709045949_46677451169857536_a.png',
      programstudi: "Informatika",
      NIM: "00000039757",
      Jeniskelamin: "Laki-laki",
    },
    {
        name: 'Umar Haqi',
        image: 'https://cdn.discordapp.com/attachments/754318617256132623/773443449453019136/IMG_20201103_212021_198.jpg',
        programstudi: "Informatika",
        NIM: "00000041073",
        Jeniskelamin: "Laki-laki",
    },
    {
        name: 'Edrick Sugiharto Putra',
        image: 'https://cdn.discordapp.com/attachments/765461987718332416/789504072331165706/Eatboss2018_-_cropped.jpg',
        programstudi: "Informatika",
        NIM: "00000041062",
        Jeniskelamin: "Laki-laki",
    },
  ];
export default function MediaCard() {

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
