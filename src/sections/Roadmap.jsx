import React from "react";
import { useState } from "react";

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

const Roadmap = () => {
  const [currentDiv, setCurrentDiv] = useState(0);

  const nextDiv = () => {
    setCurrentDiv((currentDiv + 1) % cards.length);
  };

  const prevDiv = () => {
    setCurrentDiv((currentDiv - 1 + cards.length) % cards.length);
  };
  return (
    <div className="mb-40">
      <div className="my-10 w-full px-4 flex justify-center items-center space-x-10 overflow-auto">
        {cards.map((item, i) => {
          return (
            <div
              className={`w-[350px] rounded-xl h-[450px] py-5 px-10 text-left`}
              style={{
                backgroundColor: "#120338",
              }}
            >
              <div className="text-primary font-bold">PHASE {item?.number}</div>
              <div className="text-3xl font-bold mt-4 mb-8">{item?.title}</div>
              <div>{item?.description}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Roadmap;
