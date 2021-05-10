import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Link from 'next/link'

const useStyles = makeStyles({
  root: {
    maxWidth: "30%",
    marginBottom: "30px",
    "@media (max-width: 770px)": {
      maxWidth: "47%",
    },
    "@media (max-width: 450px)": {
      maxWidth: "98%",
    },
  },
  media: {
    transition: 'transform .2s',
    "&:hover": {
      '-ms-transform': 'scale(1.5)',
  '-webkit-transform': 'scale(1.5)',
  transform: 'scale(1.5)' 
    },

  },
  root2: {
    maxWidth: "47%",
    marginBottom: "30px",

    "@media (max-width: 450px)": {
      maxWidth: "98%",
    },
  },
});

export default function ImgMediaCard({ sub,sub2 }) {
  const classes = useStyles();
  return (
    <Link href="/dasd">
    <Card className={sub ? classes.root2 : classes.root}>
      <CardActionArea>
        <div style={{overflow:'hidden'}}>
        <CardMedia
        className={classes.media}

          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={sub2.url}
          title="Contemplative Reptile"
        />
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {sub2.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {sub2.content}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>
    
  );
}
