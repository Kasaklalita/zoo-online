import React from "react";

interface ISecondaryInputProps {
  placeholder: string;
  onChange: any;
  value: string;
}

export default function SecondaryInput(props: ISecondaryInputProps) {
  return (
    <div className="relative pt-2 shrink-0">
      <input
        {...props}
        style={{ width: "335px" }}
        className="w-full border border-[#828282] rounded-md p-4 outline-none"
        type="input"
      ></input>
      <p className="font-medium text-[#828282] text-sm absolute px-4 -top-0.5 left-2 bg-white">
        {props.placeholder}
      </p>
    </div>
  );
}
