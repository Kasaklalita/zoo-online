import React from "react";
import cls from "./AnimalDescriptionItem.module.css";

interface IAnimalDescriptionItemProps {
  title: string;
  description: string;
}

export default function AnimalDescriptionItem({
  title,
  description,
}: IAnimalDescriptionItemProps) {
  return (
    <div className={cls.animalDescriptionItem}>
      <h1 className="text-[#333333] text-xl font-black mb-1.5">{title}</h1>
      <p className="text-sm text-[#4f4f4f]">{description}</p>
    </div>
  );
}
