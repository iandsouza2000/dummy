import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { useState } from "react";
import { useElementOnScreen } from "../utils/hooks";
import { IconRightArrow } from "../utils/icons";

const questions = [
  {
    q: "What are the benefits of buying this NFT?",
    a: "Joining this NFT's fashion project will get you exclusive access to some of the world’s top brands.",
  },
  {
    q: "When is the NFT going to launch?",
    a: "We'll announce the launch date on our discord.",
  },
  {
    q: "How many NFTs will be minted?",
    a: "There are just 10,000 Sehsaa NFTs. So, make sure you join our discord to get quick access to our NFT fashion collection launch.",
  },
  {
    q: "Will there be a whitelist?",
    a: "Yes! There are only 3,000 spots. Make sure to join our discord and stay active for a chance to get on the list.",
  },
  {
    q: "How do I get involved?",
    a: "Join our discord server, connect with fellow members, and share your ideas!",
  },
];

const Section = ({ item, index }) => {
  const [show, setShow] = useState(false);

  return (
    <div
      key={item.q}
      className={`${
        index !== questions.length - 1 && "border-b"
      } border-[#808080] mb-2 py-5`}
    >
      <div
        onClick={() => setShow(!show)}
        className="font-bold flex justify-between items-center cursor-pointer md:text-xl"
      >
        {item.q}
        <div
          className={`transition-all ${
            show ? "-rotate-[90deg]" : "rotate-[90deg]"
          }`}
        >
          {IconRightArrow}
        </div>
      </div>
      <AnimatePresence mode="wait">
        {show && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
          >
            <p className="pt-3 text-sm md:text-lg"> {item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQs = () => {
  const [containerRef, isVisible] = useElementOnScreen(0);

  return (
    <div
      id="faqs"
      className={`my-20 ${!isVisible ? "h-screen" : "h-auto"}`}
      ref={containerRef}
    >
      {isVisible && (
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-[36px] font-bold mb-5 md:mb-10 md:text-[64px]"
        >
          Asked Questions
        </motion.h2>
      )}
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="text-left w-[300px] mx-auto bg-[#1a1229] rounded-xl px-5 py-4 md:px-10 md:w-[750px]"
        >
          {questions.map((item, index) => (
            <Section item={item} index={index} />
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default FAQs;
