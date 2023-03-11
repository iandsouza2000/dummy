import { useEffect, useState } from "react";
import FAQs from "./sections/FAQs";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import OurTeam from "./sections/OurTeam";
import Roadmap from "./sections/Roadmap";
import Vision from "./sections/Vision";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Roadmap />
      <OurTeam />
      <FAQs />
      <Footer />
    </>
  );
}

export default App;
