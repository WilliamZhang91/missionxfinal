import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Offer from "./Offer";
import Skills from "./Skills";
import Section3 from "./Section3";
import Waiting from "./Waiting";
import Footer from "./Footer";
import Container from '@material-ui/core/Container';



function Home() {
  return (
    <div>
    <Container>
    <Navbar/>
    <Hero/>
    <Offer />
    <Skills />
    <Section3 />
    <Waiting />
    <Footer/>
    </Container>
  
    </div>
  );
}

export default Home;
