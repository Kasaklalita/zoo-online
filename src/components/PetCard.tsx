import React from "react";
import cls from "./PetCard.module.css";

interface IPetCardProps {
  picture: any;
  description: string;
}

export default function PetCard({ picture, description }: IPetCardProps) {
  return (
    <div className="relative">
      <img src={picture} alt="" />
      <div className="absolute left-5 bottom-10 right-5">
        <p className="text-white text-sm w-3/4">{description}</p>
      </div>
    </div>
  );
}
