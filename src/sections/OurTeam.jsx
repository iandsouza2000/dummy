import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useElementOnScreen } from "../utils/hooks";

const team = [
  {
    name: "Bruce Wayne",
    role: "The Batman",
    image:
      "https://s3-us-west-2.amazonaws.com/files.geekgirlauthority.com/wp-content/uploads/2017/10/BatmanPoster-JusticeLeague-691x1024.jpg",
    description: "The Dark Knight Of Gotham.",
  },
  {
    name: "Arthur Curry",
    role: "Aquaman",
    image:
      "https://gamespot.com/a/uploads/original/1557/15576725/3296254-justice_league_1.jpg",
    description: "The King of The Seas",
  },
  {
    name: "Victor Stone",
    role: "Cyborg",
    image:
      "https://mlpnk72yciwc.i.optimole.com/cqhiHLc.IIZS~2ef73/w:auto/h:auto/q:75/https://bleedingcool.com/wp-content/uploads/2017/10/justice-league-3.jpg",
    description: "The Man/Machine",
  },
  {
    name: "Barry Allen",
    role: "The Flash",
    image:
      "https://pbs.twimg.com/media/DK3m4BXVwAATziK?format=jpg&name=4096x4096",
    description: "The Fastest Man Alive",
  },
  {
    name: "Bruce Wayne",
    role: "The Batman",
    image:
      "https://s3-us-west-2.amazonaws.com/files.geekgirlauthority.com/wp-content/uploads/2017/10/BatmanPoster-JusticeLeague-691x1024.jpg",
    description: "The Dark Knight Of Gotham.",
  },
  {
    name: "Arthur Curry",
    role: "Aquaman",
    image:
      "https://gamespot.com/a/uploads/original/1557/15576725/3296254-justice_league_1.jpg",
    description: "The King of The Seas",
  },
  {
    name: "Victor Stone",
    role: "Cyborg",
    image:
      "https://mlpnk72yciwc.i.optimole.com/cqhiHLc.IIZS~2ef73/w:auto/h:auto/q:75/https://bleedingcool.com/wp-content/uploads/2017/10/justice-league-3.jpg",
    description: "The Man/Machine",
  },
  {
    name: "Barry Allen",
    role: "The Flash",
    image:
      "https://pbs.twimg.com/media/DK3m4BXVwAATziK?format=jpg&name=4096x4096",
    description: "The Fastest Man Alive",
  },
];
const OurTeam = () => {
  const width = screen.width;

  const [titleRef, isVisible] = useElementOnScreen(0);
  const [cardRef, isCardsVisible] = useElementOnScreen(width > 700 ? 0.3 : 0.2);

  return (
    <div id="team" ref={titleRef}>
      <div className="py-12">
        {isVisible && (
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-[32px] font-bold mb-6 md:text-[52px] md:mb-10"
          >
            MEET THE TEAM
          </motion.h2>
        )}

        <div
          className={`flex gap-x-5 justify-around mx-5 gap-y-8 md:gap-y-16 flex-wrap`}
          ref={cardRef}
        >
          {isCardsVisible &&
            team.map((item) => (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.6,
                }}
                className="text-left relative group"
              >
                <div className="absolute inset-0 h-full bg-black bg-opacity-50 px-5 py-6 flex flex-col justify-between font-medium  opacity-100 hover:opacity-0 transition duration-500 ease-in-out"></div>
                <div className="absolute px-4 pb-6 flex flex-col justify-end bottom-0 w-full h-40 group-hover:opacity-100 transition duration-500 ease-in-out">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    <div className="text-xl font-bold md:text-2xl md:mb-1 uppercase">
                      {item.name}
                    </div>
                    <div className="text-xs font-bold text-gray-400 uppercase">
                      {item.role}
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }} // Start with opacity 0 and a slight y offset
                    animate={{ opacity: 1, y: 0 }} // Animate to full opacity and original position
                    transition={{ duration: 0.5 }} // Transition smoothly
                    className="text-xs mt-3 hidden group-hover:block"
                  >
                    {item.description}
                  </motion.div>
                </div>
                <img
                  className="h-[450px] w-[300px] md:h-[500px] md:w-[350px]"
                  src={item.image}
                  alt="Team"
                />
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
