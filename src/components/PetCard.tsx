import React from "react";

interface IPetCardProps {
  picture: any;
  description: string;
}

export default function PetCard({ picture, description }: IPetCardProps) {
  return (
    <div>
      <img src={picture} alt="" />
    </div>
  );
}
