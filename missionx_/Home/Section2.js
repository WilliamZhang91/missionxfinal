// import React from "react";
import "../App.css";
// import Container from '@material-ui/core/Container';

// function Section2() {
//   return (
//     <div className="section2-container">
//     <Container maxWidth="lg">
//     <div className="section2-text">
//     <h2>What we offer</h2>
//       <p className="section2-p">
//         The Creative Problem Solving programme is series of digital creation
//         projects aimed to encourage self-motivation and student agency, designed
//         by New Zealand's leading IT industry experts and schools.
//       </p>
//       <h3>What will students create?</h3>
//       </div>
//        </Container>
//        <img src="Mission X Images\Home Page\Projects 04.png" className="twoimg"/>
//     </div>
   
//   );
// }

// export default Section2;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Example from "./carousel";
import Button from "@material-ui/core/Button";




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  button: {
    borderRadius: "12px",
    width: "140px",
    height: "140px",
    background: "#57BAEC",
    textAlign: "center",
    margin: "3px",
    color: "white",
  }
  
}));

export default function FullWidthGrid() {
  const classes = useStyles();
  

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <h2 style={{fontWeight: "bold", textAlign: "left", paddingTop:"10%"}}>What we offer</h2>
            <p className="section2-p">
              The Creative Problem Solving programme is series of digital
              creation projects aimed to encourage self-motivation and student
              agency, designed by New Zealand's leading IT industry experts and
              schools..
            </p>
            <h3 style={{fontWeight: "bold", textAlign: "left", paddingTop:"3%"}}>What will students create?</h3>
            
            <Button className={classes.button}><figure><img src="Mission X Images\Home Page\frame copy.png" className="twoimg"/><figcaption>Robot</figcaption></figure></Button>
            <Button className={classes.button}><figure><img src="Mission X Images\Home Page\joystick copy.png" className="twoimg"/><figcaption>Robot</figcaption></figure></Button>
            <Button className={classes.button}><figure><img src="Mission X Images\Home Page\robotic copy.png" className="twoimg"/><figcaption>Robot</figcaption></figure></Button>
            <Button className={classes.button}><figure><img src="Mission X Images\Home Page\augmented-reality copy.png" className="twoimg"/><figcaption>Robot</figcaption></figure></Button>
            
          </Paper>
        </Grid>
        <Grid item sm={6}>
          <Paper className={classes.paper}><Example></Example></Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}><h3 style={{fontWeight: "bold", paddingTop:"3%"}} >Teaching kids programming and digital skills is MORE than just
            writing code.</h3>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}><img src="Mission X Images\Home Page\girl-in-white-long-sleeve-dress-sitting-on-brown-wooden-4.png" className="twoimg"/></Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}><img src="Mission X Images\Home Page\markus-spiske-AoX_1zm1NOM-unsplash.png" className="twoimg"/></Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}><img src="Mission X Images\Home Page\girl-in-red-dress-playing-a-wooden-blocks-3662667.png" className="twoimg"/></Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}><img src="Mission X Images\Home Page\annie-spratt-xKJUnFwfz3s-unsplash.png" className="twoimg"/></Paper>
        </Grid>
      </Grid>
    </div>
  );
}
