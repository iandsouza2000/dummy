import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { useState } from "react";
import dummyModel from "../assets/imgs/dummy-model.png";
import { useElementOnScreen } from "../utils/hooks";
import { IconRightArrow } from "../utils/icons";

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

  const [titleRef, isTitleVisible] = useElementOnScreen(0);
  const [cardRef, isCardsVisible] = useElementOnScreen(0.3);

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

  const arrowsClass = "cursor-pointer h-7 w-7";

  return (
    <div ref={titleRef} id="roadmap">
      <div ref={cardRef} id="roadmap" className="h-[800px]">
        {isTitleVisible && (
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-[36px] font-bold md:mb-10 md:text-[64px]"
          >
            Sehsaa's Journey
          </motion.h2>
        )}

        {isCardsVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mb-10 mt-0 mx-auto flex items-end  justify-center space-x-2 px-2 md:space-x-4 md:items-center md:my-3"
          >
            <div
              onClick={prevStep}
              className={arrowsClass + " rotate-180 mr-5"}
            >
              {IconRightArrow}
            </div>
            <AnimatePresence custom={direction}>
              <motion.div
                className={`rounded-xl p-5  text-left flex flex-col items-center w-[60vw] justify-between md:flex-row`}
                variants={variants}
                animate="animate"
                initial="initial"
                exit="exit"
                key={cards[index]}
                custom={direction}
              >
                <div className="mt-3 h-[230px] w-[300px] md:h-auto md:w-[500px]">
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
                <img
                  className="h-[250px] -mt-10 md:h-[450px]"
                  src={dummyModel}
                />
              </motion.div>
            </AnimatePresence>
            <div onClick={nextStep} className={arrowsClass}>
              {IconRightArrow}
            </div>
          </motion.div>
        )}

        {isCardsVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
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
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Roadmap;
