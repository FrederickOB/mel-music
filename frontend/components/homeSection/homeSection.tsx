import React from "react";
import HomeCard from "../homeCard/homeCard";

interface HomeSectionProps {
  heading: string;
}

const HomeSection = ({ heading }: HomeSectionProps) => {
  return (
    <div>
      <h1 className="mb-2 text-xl">{heading}</h1>
      <div className="flex justify-between w-full">
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
      </div>
    </div>
  );
};
export default HomeSection;
