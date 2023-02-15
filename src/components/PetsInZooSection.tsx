import React from "react";
import MainContainer from "./layout/MainContainer";
import SectionTemplate from "./layout/SectionTemplate";
import PetsList from "./PetsList";
import ActionButton from "./UI/ActionButton";
import ProgressBar from "./UI/ProgressBar";

export default function PetsInZooSection() {
  return (
    <div>
      <SectionTemplate title="Pets in Zoo">
        <div className="flex flex-col items-center gap-8 mt-9">
          <PetsList></PetsList>
          <ProgressBar currentValue={1} maxValue={8} />
          <ActionButton text="Choose your favorite" />
        </div>
      </SectionTemplate>
    </div>
  );
}
