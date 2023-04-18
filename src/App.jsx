import { useEffect, useState } from "react";
import FAQs from "./sections/FAQs";
import Footer from "./sections/Footer";
import Gallery from "./sections/Gallery";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import OurTeam from "./sections/OurTeam";
import Roadmap from "./sections/Roadmap";
import Vision from "./sections/Vision";

import ReactGA from "react-ga";

const TRACKING_ID = "G-FRJKDEVJ2V";
ReactGA.initialize(TRACKING_ID);

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <Gallery />
      <Roadmap />
      <OurTeam />
      <FAQs />
      <Footer />
    </>
  );
}

export default App;
