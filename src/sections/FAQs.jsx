import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { useState } from "react";

const IconRightArrow = (
  <svg
    width="7"
    height="12"
    viewBox="0 0 7 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 6C6 6.14384 5.94887 6.28769 5.85174 6.3855L1.79755 10.8446C1.71063 10.9425 1.59816 11 1.47035 11C1.2045 11 1 10.7698 1 10.4707C1 10.3326 1.05112 10.1945 1.13292 10.0967L4.85481 6L1.13292 1.90334C1.05112 1.80552 1 1.67319 1 1.52934C1 1.23015 1.2045 1 1.47035 1C1.59816 1 1.71063 1.05754 1.80266 1.15535L5.85174 5.6145C5.94887 5.72382 6 5.8504 6 6Z"
      fill="currentColor"
      stroke="currentColor"
    />
  </svg>
);

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
    q: "How many Sehsaa NFT’s will be minted?",
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
        className="font-bold text-xl flex justify-between items-center cursor-pointer"
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
            <p className="pt-3"> {item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQs = () => {
  return (
    <div className="my-20 text-left w-[750px] mx-auto bg-[#1a1229] rounded-xl px-10 py-4">
      {questions.map((item, index) => (
        <Section item={item} index={index} />
      ))}
    </div>
  );
};

export default FAQs;