import React, { ChangeEvent } from "react";
import { pets } from "../data";
import { IPet } from "../types";
import PetCircle from "./PetCircle";

interface IPetsCirclesProps {
  selectedPet: IPet;
  changeSelectedPet: (pet: IPet) => void;
}

export default function PetsCircles(props: IPetsCirclesProps) {
  return (
    <div className="flex flex-col gap-2.5 items-center">
      {pets.map((pet: IPet) => (
        <PetCircle
          pet={pet}
          key={pet.name}
          onClick={(e: ChangeEvent<HTMLInputElement>) => {
            props.changeSelectedPet(pet);
          }}
          isActive={pet === props.selectedPet}
        />
      ))}
    </div>
  );
}
