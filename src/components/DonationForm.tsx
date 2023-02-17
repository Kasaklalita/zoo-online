import React, { useState } from "react";
import mountains from "./../assets/mountains.jpg";
import ActionButton from "./UI/ActionButton";
import SecondaryInput from "./UI/SecondaryInput";

export default function DonationForm() {
  const [choosenAnimal, setChoosenAnimal] = useState("");
  const [toDonate, setToDonate] = useState("");

  return (
    <div className="flex">
      <img src={mountains} className="w-48" />
      <div className="flex flex-col gap-10 items-center px-36 pt-24 pb-20">
        <h1 className="text-[#313131] text-2xl font-bold uppercase">
          donate for your animal
        </h1>
        <div className="justify-center flex items-center gap-14">
          <SecondaryInput
            placeholder="Choose an animal"
            onChange={() => {}}
            value={choosenAnimal}
          />
          <SecondaryInput
            placeholder="To donate"
            onChange={() => {}}
            value={choosenAnimal}
          />
        </div>
        <div className="flex items-center gap-14">
          <div className="flex flex-col gap-5">
            <h1 className="text-lg text-[#4f4f4f] font-bold">About you</h1>
            <SecondaryInput
              placeholder="Name"
              onChange={() => {}}
              value={choosenAnimal}
            />
            <SecondaryInput
              placeholder="Email"
              onChange={() => {}}
              value={choosenAnimal}
            />
            <SecondaryInput
              placeholder="Phone"
              onChange={() => {}}
              value={choosenAnimal}
            />
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-lg text-[#4f4f4f] font-bold">Checkout</h1>
            <SecondaryInput
              placeholder="Card number"
              onChange={() => {}}
              value={choosenAnimal}
            />
            <SecondaryInput
              placeholder="Expiry date"
              onChange={() => {}}
              value={choosenAnimal}
            />
            <SecondaryInput
              placeholder="CVC"
              onChange={() => {}}
              value={choosenAnimal}
            />
          </div>
        </div>
        <p className="w-2/3 text-[#828282] text-sm font-medium text-center">
          If don’t cancel your subscription before the trial ends on April 15,
          2021, you agree that you will automatically be charged
        </p>
        <ActionButton text="Donate" />
      </div>
    </div>
  );
}
