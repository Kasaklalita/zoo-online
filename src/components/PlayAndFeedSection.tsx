import React from "react";
import SectionTemplate from "./layout/SectionTemplate";
import panda from "./../assets/panda-circle.svg";
import zoo from "./../assets/zoo-circle.svg";
import visa from "./../assets/visa-circle.svg";
import arrow from "./../assets/big-arrow.svg";
import ActionButton from "./UI/ActionButton";

export default function PlayAndFeedSection() {
  return (
    <div className="bg-[#F2F2F2] px-5">
      <SectionTemplate title="Play and Feed">
        <div className="flex flex-col items-center mt-8">
          <p className="text-sm text-[#4f4f4f] text-center">
            The opportunity to easily and naturally (but as often as possible)
            donate to the needs of animals that you like.
          </p>
          <div className="w-full max-lg:flex-col flex items-center justify-between max-lg:mt-12  mt-24 mb-16 max-lg:mb-8 px-5">
            <img src={panda} />
            <img src={arrow} className="max-lg:rotate-90 max-lg:py-12" />
            <img src={zoo} />
            <img src={arrow} className="max-lg:rotate-90 max-lg:py-12" />
            <img src={visa} />
          </div>
          <ActionButton text="Donate" />
        </div>
      </SectionTemplate>
    </div>
  );
}
