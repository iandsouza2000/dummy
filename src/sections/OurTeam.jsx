import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import dummyImg from "../assets/imgs/dummy.jpeg";

const team = [
  {
    name: "Kshitij",
    role: "Founder",
    description:
      "Meet Kshitij, the visionary designer behind Sehsaa, a luxury resort and swimwear brand based in Mumbai, India. Kshitij's passion for fashion and design shines through in his work, as he strives to create the most stylish and sophisticated clothing for your next vacation.",
  },
  {
    name: "Jeet",
    role: "Founder",
    description:
      "Meet Jeet, the IT lead for our project. Jeet is responsible for leading and managing multiple teams that handle crucial aspects of our project, including 3D designing, contract creation, and social media marketing. ",
  },
  {
    name: "Rian",
    role: "Marketing Head",
    description:
      "Meet Rian, the talented fashion designer behind our latest project. With his expertise in fashion design, Rian is leading the charge in creating stunning sketches and clothing designs for our NFT avatars.",
  },
];

const OurTeam = () => {
  return (
    <div className="my-20 mx-10 flex justify-around mx-auto gap-y-10 w-[80%] flex-wrap">
      {team.map((item) => (
        <div className="text-left relative">
          <div className="absolute inset-0 h-[500px] bg-black bg-opacity-70 px-10 py-20 flex flex-col justify-between font-medium  opacity-0 hover:opacity-100 transition duration-500 ease-in-out">
            <div>{item.description}</div>
            <div className="flex justify-center space-x-5">
              <FontAwesomeIcon
                className="cursor-pointer font-semibold hover:glow"
                icon={faLinkedin}
              />
              <FontAwesomeIcon
                className="cursor-pointer font-semibold hover:glow"
                icon={faInstagram}
              />
              <FontAwesomeIcon
                className="cursor-pointer font-semibold hover:glow"
                icon={faTwitter}
              />
            </div>
          </div>
          <img
            className="w-[400px] h-[500px] mb-6 rounded-xl border-2 border-primary transition duration-500 ease-in-out"
            src={dummyImg}
            alt="Team"
          />
          <div className="text-2xl text-primary font-bold mb-1">
            {item.name}
          </div>
          <div>{item.role}</div>
        </div>
      ))}
    </div>
  );
};

export default OurTeam;
