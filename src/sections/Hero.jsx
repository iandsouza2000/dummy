import React from "react";
import { motion } from "framer-motion";

import hero from "../assets/imgs/hero.png";
import dummy from "../assets/imgs/dummy-model.png";

const Hero = () => {
  const screenWidth = screen.width;
  return (
    <div id="home" className="h-screen md:auto">
      {screenWidth > 750 ? (
        <div className="relative">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            src={hero}
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute top-[290px] right-[270px] text-primary font-bold text-xl"
          >
            Where Fashion Meets Technology
          </motion.p>
        </div>
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
