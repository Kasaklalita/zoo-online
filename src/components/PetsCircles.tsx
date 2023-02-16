import React from "react";
import { pets } from "../data";
import { IPet } from "../types";

export default function PetsCircles() {
  return (
    <div className="flex flex-col gap-2.5">
      {pets.map((pet: IPet) => (
        <p>{pet.name}</p>
      ))}
    </div>
  );
}
