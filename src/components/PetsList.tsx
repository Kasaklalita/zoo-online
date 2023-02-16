import React from "react";
import { pets } from "../data";
import PetCard from "./PetCard";

export default function PetsList() {
  return (
    <div className="flex gap-8">
      {pets.map((pet, index) => (
        <PetCard
          key={index}
          picture={pet.picture}
          description={pet.description}
        />
      ))}
    </div>
  );
}
