import { useEffect, useState } from "react";
import FAQs from "./sections/FAQs";
import Footer from "./sections/Footer";
import Navbar from "./sections/Navbar";
import OurTeam from "./sections/OurTeam";
import Roadmap from "./sections/Roadmap";
import Vision from "./sections/Vision";

function App() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const updateScrollPercentage = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const scrollDistance = documentHeight - windowHeight;
      const scrollPercentage = Math.min(scrollTop / scrollDistance, 1) * 100;

      setScrollPercentage(scrollPercentage);
    };

    window.addEventListener("scroll", updateScrollPercentage);

    return () => {
      window.removeEventListener("scroll", updateScrollPercentage);
    };
  }, []);

  return (
    <>
      <Navbar />
      <Roadmap />
      <OurTeam />
      <FAQs />
      <Footer />
    </>
  );
}

export default App;
