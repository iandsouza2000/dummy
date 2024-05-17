import { AnimatePresence, easeInOut, motion } from "framer-motion";
import React from "react";
import { IconClose } from "../utils/icons";

const ROADMAP = [
  {
    img: "https://res.cloudinary.com/dgysi2348/image/upload/v1705426024/roadmap-1_r78abe.png",
    title: "Genesis Launch",
    desc: "We're kicking off with a bang! We're airdropping 2,000 unique avatars and making 10,000 available for purchase. Be part of the inaugural group to own these exclusive NFTs.",
  },
  {
    img: "https://res.cloudinary.com/dgysi2348/image/upload/v1705426033/roadmap-2_dsnho7.png",
    title: "Personal AI Unleashed",
    desc: "Experience cutting-edge personal AI technology. Your AI avatar, complete with a range of emotions and actions, will be at your fingertips",
  },
  {
    img: "https://res.cloudinary.com/dgysi2348/image/upload/v1705426023/roadmap-3_cwzbkm.png",
    title: "Phygital Integration",
    desc: "Dive into the seamless blend of physical and digital. Exclusive phygital orders will soon be available, enhancing the real-world connection with your digital entity.",
  },
  {
    img: "https://res.cloudinary.com/dgysi2348/image/upload/v1705426025/roadmap-4_ntccic.png",
    title: "A Call to Designers",
    desc: "The future is collaborative. We're opening our doors to talented designers worldwide. Join us in sculpting the digital identity landscape and grow our vibrant community.",
  },
];

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

const Sidebar = ({ show, onClose }) => {
  const isMobile = window.screen.width < 600;
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
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            exit={{ x: "-100vw" }}
            transition={{ ease: easeInOut, duration: 0.4 }}
            className="fixed no-scrollbar bg-primary overflow-auto h-screen inset-y-0 z-50 left-0 py-10 text-left px-8 w-screen md:w-[700px]"
          >
            <div className="border-l relative">
              <div
                onClick={onClose}
                className="right-0 top-0 rounded-full p-2 bg-white text-black absolute"
              >
                {IconClose}
              </div>
              <div className="h-2 w-2 bg-primary border-2 rounded-full absolute -left-1 top-0"></div>
              <div className="text-2xl pt-8 pl-8 md:pl-16 font-bold flex space-x-2 mb-4 md:mb-8">
                OUR ROADMAP
              </div>
              {!isMobile ? (
                <div className="space-y-8">
                  {ROADMAP.map((item) => (
                    <div className="flex pl-8 items-center space-x-8 relative">
                      <div className="h-1 w-1 bg-white rounded-full border-3 -left-[3px] absolute top-1/2 transform -translate-y-1/2 "></div>
                      <div className="aspect-[16/9] md:w-[300px] h-[200px] z-[1]">
                        <img
                          src={item.img}
                          className={
                            "relative rounded-md cursor-zoom-in w-full h-full object-cover"
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <div className="uppercase font-bold text-sm">
                          {item.title}
                        </div>
                        <div className="opacity-[0.5] text-xs leading-[22px]">
                          {item.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-8">
                  {ROADMAP.map((item) => (
                    <div className="flex flex-col space-x-8 relative">
                      <div className="h-1 w-1 bg-white rounded-full border-3 -left-[3px] absolute top-1/2 transform -translate-y-1/2 "></div>
                      <div className="uppercase font-bold text-sm mb-3">
                        {item.title}
                      </div>
                      <div className="aspect-[16/9] w-[250px] h-[150px] z-[1]">
                        <img
                          src={item.img}
                          className={
                            "relative rounded-md cursor-zoom-in w-full h-full object-cover"
                          }
                        />
                      </div>
                      <div className="mt-3 w-[250px] text-justify opacity-[0.5] text-xs leading-[22px]">
                        {item.desc}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
