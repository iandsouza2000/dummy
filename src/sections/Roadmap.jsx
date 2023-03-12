import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { useState } from "react";
import dummyModel from "../assets/imgs/dummy-model.png";

const cards = [
  {
    number: "01",
    title: "Genesis",
    description:
      "Within just 5 months after starting Sehsaa NFT, we accomplished our goal of making the garments and accessories as authentic and realistic as possible.",
  },
  {
    number: "02",
    title: "Sale",
    description:
      "After launch, 10,000 NFTs will become available on our site, and whitelisted discord members will be able to mint the NFTs.",
  },
  {
    number: "03",
    title: "Physical",
    description:
      "Sehsaa NFT holders can choose to have the garment from their NFT brought into real life and shipped to their address.",
  },
  {
    number: "04",
    title: "Metaverse",
    description:
      "We will be collaborating with leading Metaverse platforms in the Metaverse space. We are looking to the future, whilst putting our energy into the present to expand our horizons into the Metaverse.",
  },
];

const variants = {
  initial: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      // scale: 0.5,
    };
  },
  animate: {
    x: 0,
    opacity: 1,
    // scale: 1,
    // transition: 'ease-in',
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
    },
  },
  exit: (direction) => {
    return {
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      // scale: 0.5,
      // transition: 'ease-in',
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    };
  },
};

const Roadmap = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  function nextStep() {
    setDirection(1);
    if (index === cards.length - 1) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);
  }

  function prevStep() {
    setDirection(-1);
    if (index === 0) {
      setIndex(cards.length - 1);
      return;
    }
    setIndex(index - 1);
  }

  const arrowsClass = "border rounded-full p-2 cursor-pointer text-xs";

  return (
    <div id="roadmap" className="h-screen">
      <h2 className="text-[36px] font-bold mb-5 md:mb-10 md:text-[64px]">
        Sehsaa's Journey
      </h2>

      <div className="my-10 mx-auto flex items-center  justify-center space-x-2 px-2 md:space-x-4">
        <FontAwesomeIcon
          className={arrowsClass}
          onClick={prevStep}
          icon={faArrowLeft}
        />
        <AnimatePresence custom={direction}>
          <motion.div
            className={` rounded-xl p-5 text-left flex items-center w-[60vw] justify-between`}
            variants={variants}
            animate="animate"
            initial="initial"
            exit="exit"
            key={cards[index]}
            custom={direction}
          >
            <div className="mt-3 w-[500px]">
              <div className="text-primary text-xs font-bold md:text-base">
                PHASE {cards[index].number}
              </div>
              <div className="text-xl font-bold my-2 md:text-3xl md:my-4">
                {cards[index].title}
              </div>
              <div className="text-sm md:text-base">
                {cards[index].description}
              </div>
            </div>
            <img className="h-[450px]" src={dummyModel} />
          </motion.div>
        </AnimatePresence>
        <FontAwesomeIcon
          className={arrowsClass}
          onClick={nextStep}
          icon={faArrowRight}
        />

        {/* <AnimatePresence>
          {cards.map((item, i) => {
            if (i === 0)
              return (
                <motion.div
                  className={`w-[600px] rounded-xl  py-5 px-10 text-left flex items-center`}
                  style={{
                    backgroundColor: "#1a122a",
                  }}
                >
                  <img className="h-[350px] mx-10" src={dummyModel} />
                  <div>
                    <div className="text-primary font-bold">
                      PHASE {item?.number}
                    </div>
                    <div className="text-3xl font-bold mt-4 mb-4">
                      {item?.title}
                    </div>
                    <div>{item?.description}</div>
                  </div>
                </motion.div>
              );
          })}
        </AnimatePresence> */}
      </div>

      <div
        className="w-[250px] mx-auto rounded-xl md:w-[400px]"
        style={{
          backgroundColor: "#24027a",
        }}
      >
        <div
          className="h-2 rounded-xl transition translate"
          style={{
            width: (index + 1) * 25 + "%",
            transition: "all .2s linear",
            background: "rgb(72,0,255)",
            background:
              "radial-gradient(circle, rgba(72,0,255,1) 0%, rgba(226,56,236,1) 100%)",
          }}
        />
      </div>
    </div>
  );
};

export default Roadmap;
