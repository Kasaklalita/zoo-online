import React from "react";
import panda from "./../assets/panda.jpg";
import eagle from "./../assets/eagle.jpg";
import gorilla from "./../assets/gorilla.jpg";
import crocodile from "./../assets/crocodile.jpg";
import PetCard from "./PetCard";

export default function PetsList() {
  const pets = [
    {
      picture: panda,
      description:
        "Panda’s name is Bei Bei. He is 2 years old. Bei Bei is from China. He loves bamboos.",
    },
    {
      picture: eagle,
      description:
        "Panda’s name is Bei Bei. He is 2 years old. Bei Bei is from China. He loves bamboos.",
    },
    {
      picture: gorilla,
      description:
        "Panda’s name is Bei Bei. He is 2 years old. Bei Bei is from China. He loves bamboos.",
    },
    {
      picture: crocodile,
      description:
        "Panda’s name is Bei Bei. He is 2 years old. Bei Bei is from China. He loves bamboos.",
    },
  ];

  return (
    <div className="flex gap-8">
      {pets.map((pet) => (
        <PetCard picture={pet.picture} description={pet.description} />
      ))}
    </div>
  );
}
