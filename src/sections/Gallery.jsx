import React from "react";
import { motion } from "framer-motion";
import dummyModel from "../assets/imgs/dummy-model.png";
import dummy from "../assets/imgs/dummy.jpeg";

const Gallery = () => {
  return (
    <div id="gallery" className="h-screen">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-[42px] font-bold mb-5 md:mb-3 md:text-[42px]"
      >
        What Kind Of A Beast Are You ?
      </motion.h2>
      <div className="flex space-x-20 items-center justify-center">
        <img width={300} src={dummyModel} />
        <div className="w-[500px] space-y-8 text-left">
          <div className="text-primary text-2xl font-bold">Avatar Name</div>
          <div>
            <div className="font-bold text-lg">Strengths</div>
            <div className="text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
              alias tenetur est nostrum rem eum veritatis maiores eaque quas
              quod et quam dolor hic optio, asperiores ea nulla maxime repellat.
            </div>
          </div>
          <div>
            <div className="font-bold text-lg">Personality Traits</div>
            <div className="text-sm">Honest, Loud, Dark</div>
          </div>
        </div>
      </div>
      <div className="flex justify-center space-x-8 pt-2">
        <img
          src={dummy}
          className="h-12 w-12 object-cover border rounded-full bg-primary"
        />
        <img
          src={dummy}
          className="h-12 w-12 object-cover border rounded-full bg-primary"
        />
        <img
          src={dummy}
          className="h-12 w-12 object-cover border rounded-full bg-primary"
        />
        <img
          src={dummy}
          className="h-12 w-12 object-cover border rounded-full bg-primary"
        />
      </div>
    </div>
  );
};

export default Gallery;
