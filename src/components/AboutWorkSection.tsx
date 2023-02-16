import React from "react";
import deers from "./../assets/deers.jpg";
import PlayActionButton from "./UI/PlayActionButton";
import ProgressBar from "./UI/ProgressBar";
import cls from "./AboutWorkSection.module.css";

export default function AboutWorkSection() {
  return (
    <div
      className="flex justify-center
        max-sm:pb-12 max-xl:pb-16 pb-24
        max-sm:pt-12 pt-24"
    >
      <div className={cls.container}>
        <h1 className="max-sm:text-4xl font-black text-5xl leading-[1.2] text-[#333333]">
          How it works?
        </h1>
        <p className="text-sm text-[#4f4f4f]">
          As a voice for wildlife, we are devastated by the impact of the 2020
          Australian bushfires on precious species and their habitat, and we are
          determined to assist in all aspects, including providing veterinary
          support and raising much-needed emergency funds. Zoo Online saves
          wildlife and inspires everyone to make conservation a priority in
          their lives. Animals have the right to a pain-free and happy life.
          They have equal claim to the resources of this planet, and deserve a
          life of dignity and compassion.As a voice for wildlife, we are
          devastated by the impact of the 2020 Australian bushfires on precious
          species and their habitat.
        </p>
        <img src={deers} alt="" className="w-full" />
        <div className="flex flex-col items-center max-sm:gap-5 gap-8">
          <ProgressBar currentValue={1} maxValue={4} />
          <PlayActionButton text="watch online" />
        </div>
      </div>
    </div>
  );
}
