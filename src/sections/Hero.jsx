import React from "react";
import { motion } from "framer-motion";

import hero from "../assets/imgs/hero.png";
import dummy from "../assets/imgs/dummy-model.png";

const Hero = () => {
  const screenWidth = screen.width;
  return (
    <div id="home" className="h-screen md:auto">
      {screenWidth > 750 ? (
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          src={hero}
        />
      ) : (
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          src={dummy}
        />
      )}
    </div>
  );
};

export default Hero;
