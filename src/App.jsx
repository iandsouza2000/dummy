import { useEffect, useState } from "react";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import OurTeam from "./components/OurTeam";
import Roadmap from "./components/Roadmap";
import Vision from "./components/Vision";

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

  console.log(scrollPercentage);
  return (
    <>
      <Navbar />
      <Vision />
      <OurTeam />
      <FAQs />
      <Footer />
    </>
  );
}

export default App;
