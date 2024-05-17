import React, { useEffect, useState } from "react";
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
    "https://res.cloudinary.com/dgysi2348/video/upload/v1708620904/Desktop%20Vids/03_Akiko_Render_0001-0120_qkpyxl.webm",
    "https://res.cloudinary.com/dgysi2348/video/upload/v1708620906/Desktop%20Vids/04_Brielle_Render_0001-0120_vcrmom.webm",
    "https://res.cloudinary.com/dgysi2348/video/upload/v1708620909/Desktop%20Vids/02_Nia_Render_0001-0120_iqxys9.webm",
    "https://res.cloudinary.com/dgysi2348/video/upload/v1708620909/Desktop%20Vids/05_Finn_Render_0001-0120_n6q4if.webm",
    "https://res.cloudinary.com/dgysi2348/video/upload/v1708620910/Desktop%20Vids/06_Locran_Render_0001-0120_jdpvyk.webm",
    "https://res.cloudinary.com/dgysi2348/video/upload/v1708620912/Desktop%20Vids/08_Jabari_Render_0001-0120_kaewpm.webm",
    "https://res.cloudinary.com/dgysi2348/video/upload/v1708620911/Desktop%20Vids/07_Khalon_Render_0001-0120_hme6km.webm",
    "https://res.cloudinary.com/dgysi2348/video/upload/v1708620911/Desktop%20Vids/01_Nia_Render_0001-0120_qpbwl0.webm",
  ];

  // const mobileCharacters = [
  //   "https://res.cloudinary.com/dgysi2348/video/upload/v1708621864/Mobile%20Vids/01_Nia_Render_0001-0120_Mobile_qonhce.webm",
  //   "https://res.cloudinary.com/dgysi2348/video/upload/v1708621864/Mobile%20Vids/03_Akiko_Render_0001-0120_Mobile_cnp3hf.webm",
  //   "https://res.cloudinary.com/dgysi2348/video/upload/v1708621864/Mobile%20Vids/02_Nia_Render_0001-0120_Mobile_z9pzuv.webm",
  //   "https://res.cloudinary.com/dgysi2348/video/upload/v1708621865/Mobile%20Vids/04_Brielle_Render_0001-0120_Mobile_epw1b3.webm",
  //   "https://res.cloudinary.com/dgysi2348/video/upload/v1708621865/Mobile%20Vids/05_Finn_Render_0001-0120_Mobile_iqdhpi.webm",
  //   "https://res.cloudinary.com/dgysi2348/video/upload/v1708621865/Mobile%20Vids/06_Locran_Render_0001-0120_Mobile_ue0zxu.webm",
  //   "https://res.cloudinary.com/dgysi2348/video/upload/v1708621866/Mobile%20Vids/07_Khalon_Render_0001-0120_Mobile_thlgal.webm",
  //   "https://res.cloudinary.com/dgysi2348/video/upload/v1708621867/Mobile%20Vids/08_Jabari_Render_0001-0120_Mobile_juw5b2.webm",
  // ];

  const mobileCharacters = [
    "https://res.cloudinary.com/dgysi2348/video/upload/v1709140364/Mobile%20Vids/mp4/02_Nia_Render_0001-0120_Mobile_zxvzeb.mp4",
    "https://res.cloudinary.com/dgysi2348/video/upload/v1709140364/Mobile%20Vids/mp4/03_Akiko_Render_0001-0120_Mobile_vxgwif.mp4",
    "https://res.cloudinary.com/dgysi2348/video/upload/v1709140363/Mobile%20Vids/mp4/01_Nia_Render_0001-0120_Mobile_lcissx.mp4",
  ];

  useEffect(() => {
    if (isMobile)
      mobileCharacters.map((item) => {
        var img = new Image();
        img.src = item;
      });
    else
      characters.map((item) => {
        var img = new Image();
        img.src = item;
      });
  }, []);

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
              setCurrentAvatar(currentAvatar < 8 ? currentAvatar + 1 : 0)
            }
            className="bg-primary border-white text-sm font-bold px-4 py-2 rounded-3xl flex items-center cursor-pointer bg-opacity-50 group"
          >
            SWITCH AVATAR
          </div>
        </div>
        <video
          id="video1"
          src={
            isMobile
              ? mobileCharacters[currentAvatar]
              : characters[currentAvatar]
          }
          className="h-[500px] md:h-[600px] absolute top-[40%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]"
          autoPlay
          loop
          muted
          playsInline
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
