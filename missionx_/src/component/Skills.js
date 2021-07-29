import React from "react";
import "../App.css";
import Container from "@material-ui/core/Container";

function Skills() {
  return (
    <div>
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
            <div class="col-sm">
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
      </Container>
    </div>
  );
}

export default Skills;
