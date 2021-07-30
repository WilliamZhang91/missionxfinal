import "./Home.css";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Example from "./carousel";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container"

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1
    },
    
    button: {
      borderRadius: "12px",
      width: "120px",
      height: "120px",
      background: "#57BAEC",
      textAlign: "center",
      margin: "3px",
      color: "white",
    }
    
  }));

  export default function Offer() {
    const classes = useStyles();


  return (
    <div>
      <Container style={{ padding: "30px" }} maxWidth="lg">
        <div class="container">
          <div class="row">
            <div class="col-8 col-md-6 ">
              <h2
                style={{
                  fontWeight: "bold",
                  textAlign: "left",
                  paddingTop: "10%",
                }}
              >
                What we offer
              </h2>
              <p className="section2-p">
                The Creative Problem Solving programme is series of digital
                creation projects aimed to encourage self-motivation and student
                agency, designed by New Zealand's leading IT industry experts
                and schools..
              </p>
              <h3
                style={{
                  fontWeight: "bold",
                  textAlign: "left",
                  paddingTop: "3%",
                }}
              >
                What will students create?
              </h3>
              {/* used figure and gic caption toadd text to button */}
              <Button className={classes.button}>
                <figure>
                  <img
                    src="Mission X Images\Home Page\frame copy.png"
                    className="twoimg"
                  />
                  <figcaption>Animation</figcaption>
                </figure>
              </Button>
              <Button className={classes.button}>
                <figure>
                  <img
                    src="Mission X Images\Home Page\joystick copy.png"
                    className="twoimg"
                  />
                  <figcaption>Games</figcaption>
                </figure>
              </Button>
              <Button className={classes.button}>
                <figure>
                  <img
                    src="Mission X Images\Home Page\robotic copy.png"
                    className="twoimg"
                  />
                  <figcaption>Chatbots</figcaption>
                </figure>
              </Button>
              <Button className={classes.button}>
                <figure>
                  <img
                    src="Mission X Images\Home Page\augmented-reality copy.png"
                    className="twoimg"
                  />
                  <figcaption style={{fontSize:"10px",}}>Augmented Reality</figcaption>
                </figure>
              </Button>
            </div>
            <div class="col-8 col-md-6">
            {/* Example is the carousel, the code for which can be found in carousel.js */}
             <Example></Example>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}


