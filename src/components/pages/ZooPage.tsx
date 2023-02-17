import React, { useEffect, useState } from "react";
import AnimalDescriptionItem from "../AnimalDescriptionItem";
import ActionButton from "../UI/ActionButton";
import PageTemplate from "./PageTemplate";
import { pets } from "../../data";
import PetsCircles from "../PetsCircles";
import { IPet } from "../../types";

export default function ZooPage() {
  const [selectedPet, setSelectedPet] = useState<IPet>(pets[0]);

  const changeSelectedPet = (pet: IPet) => {
    setSelectedPet(pet);
  };

  return (
    <PageTemplate>
      <div className="flex max-sm:flex-col max-md:gap-6 md:gap-9 lg:gap-16 2xl:gap-44 max-sm:px-2.5 max-sm:pt-9 max-sm:pb-16 px-7 pt-16 pb-24">
        <div className="flex flex-col gap-2">
          <PetsCircles
            selectedPet={selectedPet}
            changeSelectedPet={changeSelectedPet}
          />
        </div>
        <div className="">
          <h1 className="text-[#333333] max-sm:text-2xl text-5xl font-black mb-10">
            {selectedPet.title}
          </h1>
          <div className="flex gap-8 max-lg:flex-col">
            <div className="flex flex-col gap-8">
              <img src={selectedPet.picture} alt="" />
            </div>
            <div className="flex flex-col gap-4">
              <AnimalDescriptionItem
                title="Population:"
                description={selectedPet.population}
              />
              <AnimalDescriptionItem
                title="Habitat:"
                description={selectedPet.habitat}
              />
              <AnimalDescriptionItem
                title="Diet:"
                description={selectedPet.diet}
              />
              <ActionButton text="Feed" />
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
