import { AnimatePresence, easeInOut, motion } from "framer-motion";
import React from "react";

import { IconClose, IconOpenSea } from "../utils/icons";

import logo from "../assets/imgs/sehsaa.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const MobileMenu = ({ show, onClose, openRoadmap }) => {
  return (
    <>
      {show && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black bg-opacity-60 h-screen w-screen z-10"
        ></div>
      )}
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            exit={{ x: "100vw" }}
            transition={{ ease: easeInOut, duration: 0.4 }}
            className="fixed no-scrollbar overflow-hidden bg-primary h-screen inset-y-0 z-50 left-0 py-6 text-left px-4 w-screen"
          >
            <div className="flex justify-between items-center relative">
              <div className="w-24">
                <img src={logo} />
              </div>
              <div
                onClick={onClose}
                className="rounded-full p-2 bg-white text-black"
              >
                {IconClose}
              </div>
            </div>

            <div className="mt-32 space-y-8 font-bold text-3xl">
              <div>HOME</div>
              <div
                onClick={() => {
                  openRoadmap();
                  onClose();
                }}
              >
                ROADMAP
              </div>
              <div>THE TEAM</div>
            </div>

            <div className="flex justify-center w-[80%] items-center space-x-6 absolute bottom-16">
              <FontAwesomeIcon
                className="cursor-pointer font-semibold hover:glow"
                icon={faDiscord}
                onClick={() => window.open("https://discord.gg/uE33kBzWVh")}
              />
              <FontAwesomeIcon
                className="cursor-pointer font-semibold hover:glow"
                icon={faInstagram}
                onClick={() =>
                  window.open("https://www.instagram.com/sehsaa_digi/")
                }
              />
              <FontAwesomeIcon
                className="cursor-pointer font-semibold hover:glow"
                icon={faTwitter}
                onClick={() => window.open("https://twitter.com/sehsaa_digi")}
              />
              <div className="!ml-5 cursor-pointer font-semibold hover:glow">
                {IconOpenSea}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;
