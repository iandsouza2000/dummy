import React from "react";
import { motion } from "framer-motion";

import hero from "../assets/imgs/hero.png";

const Hero = () => {
  return (
    <div id="home">
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        src={hero}
      />
    </div>
  );
};

export default Hero;
