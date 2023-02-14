import React from "react";

interface IProgressBarProps {
  currentValue: number;
  maxValue: number;
}

export default function ProgressBar({
  currentValue,
  maxValue,
}: IProgressBarProps) {
  return (
    <div
      className="@apply flex flex-col items-center shrink-0"
      style={{ width: "245px" }}
    >
      <div>
        <span className="text-[#333333] font-black text-2xl">
          {currentValue}/
        </span>
        <span className="text-[#BDBDBD] font-black">{maxValue}</span>
      </div>
      <div className="w-full h-1.5 bg-[#BDBDBD91] relative">
        <div
          className="bg-[#333333] absolute h-2.5 -top-0.5 left-0"
          style={{ width: `${(100 / maxValue) * currentValue}%` }}
        ></div>
      </div>
    </div>
  );
}
