import React from "react";
import "./Home.css";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

function Waiting() {
  return (
    <div>
      <Container style={{ padding: "50px" }} maxWidth="lg">
        <div class="container">
          <div class="row">
            <div class="col">
              {" "}
              <img
                src="Mission X Images\Home Page\teacher-4784916_1920.png"
                alt="class"
                style={{ width: "90%" }}
              />
            </div>
            <div class="col">
              <h2
                style={{
                  fontWeight: "bold",
                  textAlign: "left",
                  paddingTop: "10%",
                }}
              >
                What are you waiting for?
              </h2>
              <h3>Start teaching Digital Technologies today.</h3>
              <p className="section2-p">
                If you need more information, we are happy to answer any
                question you may have.{" "}
              </p>
              <Button>
                <img
                  src="Mission X Images\Home Page\CTA Button.png"
                  alt="learn more"
                />
              </Button>
              <Button>
                <img
                  src="Mission X Images\Home Page\CTA Button-7.png"
                  alt="learn more"
                />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Waiting;
