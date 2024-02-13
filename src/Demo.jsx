import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Sidebar from "./components/Sidebar";
import { IconMenu, IconOpenSea } from "./utils/icons";
import MobileMenu from "./sections/MobileMenu";
import logo from "./assets/imgs/sehsaa.svg";

const IconMap = (
  <svg
    width="16"
    height="16"
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="m20.5 3-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5ZM10 5.47l4 1.4v11.66l-4-1.4V5.47Zm-5 .99 3-1.01v11.7l-3 1.16V6.46Zm14 11.08-3 1.01V6.86l3-1.16v11.84Z"></path>
  </svg>
);

const Demo = () => {
  const [currentAvatar, setCurrentAvatar] = useState(0);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const isMobile = window.screen.width < 600;

  const characters = [
    "https://res.cloudinary.com/dgysi2348/video/upload/v1705426034/vid2_ll1dqb.webm",
    "https://res.cloudinary.com/dgysi2348/video/upload/v1705426031/vid1_mn5gqd.webm",
    "https://res.cloudinary.com/dgysi2348/video/upload/v1705426025/vid3_j2ccdh.webm",
  ];

  const mobileCharacters = [
    "https://res.cloudinary.com/dgysi2348/video/upload/v1707848888/dummy_kgoxxo.mp4",
  ];

  return (
    <>
      <div className="h-screen">
        <div className="flex justify-between items-center py-4 md:py-8 px-4 md:px-12">
          <div className="w-20 md:w-24">
            <img src={logo} />
          </div>
          {!isMobile ? (
            <div className="flex justify-center items-center space-x-6">
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
          ) : (
            <div
              onClick={() => setShowMobileMenu(true)}
              className="hover:bg-primary p-2 rounded-full"
            >
              {" "}
              {IconMenu}{" "}
            </div>
          )}
        </div>
        <div className="hidden absolute left-12 bottom-8 md:flex items-center">
          <div
            onClick={() => setShowSidebar(true)}
            className="bg-primary text-sm font-bold px-4 py-2 rounded-3xl flex items-center cursor-pointer bg-opacity-60 group"
          >
            OUR ROADMAP{" "}
            <div className="ml-1 text-black group-hover:bg-slate-800 rounded-full p-2 bg-white group-hover:text-white">
              {IconMap}
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 flex items-center left-[50%] transform translate-x-[-50%]">
          <div
            onClick={() =>
              setCurrentAvatar(currentAvatar === 2 ? 0 : currentAvatar + 1)
            }
            className="bg-primary border-white text-sm font-bold px-4 py-2 rounded-3xl flex items-center cursor-pointer bg-opacity-50 group"
          >
            SWITCH AVATAR
          </div>
        </div>
        <video
          id="video1"
          className="h-[500px] md:h-[600px] absolute top-[45%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]"
          autoPlay
          loop
          muted
          src={
            isMobile
              ? mobileCharacters[currentAvatar]
              : characters[currentAvatar]
          }
        />
      </div>

      <Sidebar show={showSidebar} onClose={() => setShowSidebar(false)} />

      <MobileMenu
        show={showMobileMenu}
        onClose={() => setShowMobileMenu(false)}
        openRoadmap={() => setShowSidebar(true)}
      />
    </>
  );
};

export default Demo;
