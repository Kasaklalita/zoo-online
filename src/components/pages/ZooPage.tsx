import React, { useEffect, useState } from "react";
import AnimalDescriptionItem from "../AnimalDescriptionItem";
import ActionButton from "../UI/ActionButton";
import PageTemplate from "./PageTemplate";
import { pets } from "../../data";
import PetsCircles from "../PetsCircles";

export default function ZooPage() {
  const [selectedPet, setSelectedPet] = useState({});

  useEffect(() => {
    setSelectedPet(pets[0]);
    console.log(selectedPet);
  }, []);

  return (
    <PageTemplate>
      <div className="flex gap-44 px-7 pt-16 pb-24">
        <div className="flex flex-col gap-2">
          <PetsCircles />
        </div>
        <div className="">
          <h1 className="text-[#333333] text-5xl font-black mb-10">
            The Beijing Zoo
          </h1>
          <div className="flex gap-8">
            <div className="flex flex-col gap8">asdf asdf</div>
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
