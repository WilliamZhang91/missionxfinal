import React from "react";
import "./Home.css";
import Container from "@material-ui/core/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "@material-ui/core/Button";

function Skills() {
  return (
    <div>
    {/* Theoretically this is responsive code but might not work as expected since merged with other code on github */}
    {/* Update this should was resolved with using % for the skill caption */}
      <Container style={{ padding: "50px" }} maxWidth="lg">
        <h2 style={{textAlign:"center"}}>
          Teaching kids programming and digital skills is MORE than just writing
          code.
        </h2>
        <div class="container" style={{ paddingTop: "20px" }}>
          <div class="row">
            <div class="col-sm sk1">
              <img className="image1"
                src="Mission X Images\Home Page\skills1.png"
                alt="class"
                style={{ width: "90%" }}
              />
              <img
                className="image2"
                src="Mission X Images\Home Page\skillsicon1.png"
                alt="class"
                style={{ width: "30%" }}
              />
              <p className="skillsCaption">Creativity <br/> & Individuality </p>
            </div>
            <div class="col-sm sk1">
              <img className="image1"
                src="Mission X Images\Home Page\skills2.png"
                alt="class"
                style={{ width: "90%" }}
              />
              <img
                className="image2"
                src="Mission X Images\Home Page\skillsicon2.png"
                alt="class"
                style={{ width: "30%" }}
              />
              <p className="skillsCaption">Critical Thinking <br/> & Problem Solving </p>
            </div>
            <div class="col-sm sk1">
              <img className="image1"
                src="Mission X Images\Home Page\skills3.png"
                alt="class"
                style={{ width: "90%" }}
              />
              <img 
                className="image2"
                src="Mission X Images\Home Page\skillsicon3.png"
                alt="class"
                style={{ width: "30%" }}
              />
              <p className="skillsCaption">Communication <br/> & Collboration </p>
            </div>
            <div class="col-sm sk1">
              <img className="image1"
                src="Mission X Images\Home Page\skills4.png"
                alt="class"
                style={{ width: "90%" }}
              />
              <img
                className="image2"
                src="Mission X Images\Home Page\skillsicon4.png"
                alt="class"
                style={{ width: "30%" }}
              />
              <p className="skillsCaption">Technology <br/> & Future Focus </p>
            </div>
          </div>
        </div>
        {/* Buttons */}
        <div style={{textAlign: "center", paddingTop: "30px"}}>
        <h2 style={{paddingBottom: "15px"}}>How our programmes help teachers and schools</h2>
        <Row>
          <Col>
          <Button >
            <img style={{width: "90%"}}
              src="Mission X Images\Home Page\path1.png"
              alt="learn more"
            />
          </Button>
            <Button >
            <img style={{width: "90%"}}
              src="Mission X Images\Home Page\path2.png"
              alt="learn more"
            />
          </Button>
          <Button >
            <img style={{width: "90%"}}
              src="Mission X Images\Home Page\path3.png"
              alt="learn more"
            />
          </Button>
          <Button >
            <img style={{width: "90%"}}
              src="Mission X Images\Home Page\path4.png"
              alt="learn more"
            />
          </Button>
          </Col>
        </Row>
        </div>

      </Container>
    </div>
  );
}

export default Skills;
