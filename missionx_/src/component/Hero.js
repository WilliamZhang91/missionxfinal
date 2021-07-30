import React from "react";
import "./Home.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "@material-ui/core/Button";
import { Grid} from "@material-ui/core";

var textContainer = {
  div: {
    paddingLeft: "20%",
    paddingRight: "5%",
    paddingTop: "7%",
    paddingBottom: "5px",
  }
}

function Hero() {
  return (
    <div className="section3-container">
    <Container>
  <Row>
    <Col style={{background: "#f3efef", paddingRight: "0", }} >
    <div style={textContainer.div}>
    <h1 className="heroTitle">Prepare young minds for a better <span style={{color: "#57BAEC"}}>future.</span></h1>
        {/* <p>
          Let us help you advance students in Digital Technologies and other
          learning areas with our project based learning programme.
        </p> */}
        <p  className="section2-p">
          Let us help you advance students in Digital Technologies and other
          learning areas with our project based learning programme.
        </p>
          <Button >
            <img style={{width: "90%"}}
              src="Mission X Images\Home Page\CTA Button-6.png"
              alt="learn more"
            />
          </Button>
          <Button >
            <img style={{width: "90%"}}
              src="Mission X Images\Home Page\CTA Button-7.png"
              alt="learn more"
            />
          </Button>
          </div></Col>
    <Col style={{background: "#f3efef", paddingLeft: "0", }}> <img
        className="heroImg"
        src="Mission X Images\Home Page\Hero Image.png"
        alt="hero"
      /></Col>
  </Row>
</Container>
</div>
  );
}


export default Hero;
