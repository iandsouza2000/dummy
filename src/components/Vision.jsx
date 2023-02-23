import React from "react";
import fashionWorldImage from "../assets/imgs/fashion-world.png";
import personalizedImage from "../assets/imgs/personalized.png";
import communityImage from "../assets/imgs/community.png";

const cards = [
  {
    title: "Be Part Of The Fashion World",
    description:
      "Sehsaa NFT gives you a chance to be embrace fashion in the most modernized tech way possible.",
    img: fashionWorldImage,
  },
  {
    title: "Highly Exclusive Community",
    description:
      " Be part of a community that consists of fashion designers, critics and enthusiasts from throughout the world.",
    img: communityImage,
  },
  {
    title: "Personalized To Your Liking",
    description:
      "With a wide range of models and outfits, you can create NFTS that suit you best.",
    img: personalizedImage,
  },
];

const Card = ({ item }) => {
  return (
    <div className="glass w-[250px] text-left h-[350px] px-6 py-8 rounded-xl">
      <img src={item.img} width={50} />
      <div className="font-bold text-xl text-primary mt-8">{item.title}</div>
      <div className="text-sm mt-2">{item.description}</div>
    </div>
  );
};

const Vision = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-[650px] text-left">
        <h1 className="text-[56px] font-bold">
          What is <span className="text-bolder text-primary">SEHSAA</span> NFT ?
        </h1>
        <p className="text-justify w-[540px]">
          Sehsaa NFT is the result of a deep-seated passion for fashion, style,
          and self-expression. As leaders within the fashion industry, we wanted
          to bring the same level of joy, excitement, and awe that we experience
          every day in our field to the Metaverse.
        </p>
      </div>
      <div className="flex items-center ">
        <div className="space-y-5 mr-5">
          {cards.map((item, index) => {
            if (index < 2) return <Card item={item} />;
          })}
        </div>
        <div>
          <Card item={cards[2]} />
        </div>
      </div>
    </div>
  );
};

export default Vision;
