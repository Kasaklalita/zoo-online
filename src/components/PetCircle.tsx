import React, { ChangeEvent } from "react";
import { IPet } from "../types";

interface IPetCircleProps {
  pet: IPet;
  onClick: any;
  isActive?: boolean;
}

export default function PetCircle(props: IPetCircleProps) {
  const petCircleClass = props.isActive
    ? ""
    : "w-28 h-28 bg-center bg-no-repeat bg-cover rounded-full";
  return (
    <>
      {props.isActive == true ? (
        <div
          className="p-1 rounded-full"
          style={{
            background:
              "linear-gradient(103.3deg, #07EEE0 -15.1%, #DF496D 92.15%)",
          }}
        >
          <div
            onClick={props.onClick}
            className="w-36 h-36 rounded-full bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${props.pet.picture})` }}
          ></div>
        </div>
      ) : (
        <div
          onClick={props.onClick}
          className={petCircleClass}
          style={{ backgroundImage: `url(${props.pet.picture})` }}
        ></div>
      )}
    </>
  );
}
