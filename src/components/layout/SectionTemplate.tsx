import React from "react";
import MainContainer from "./MainContainer";

interface IPetsInZooSectionProps {
  title: string;
  children: any;
}

export default function SectionTemplate({
  title,
  children,
}: IPetsInZooSectionProps) {
  return (
    <div className="flex justify-around py-24">
      <MainContainer>
        <h1 className="text-5xl font-black text-[#333333] text-center">
          {title}
        </h1>
        {children}
      </MainContainer>
    </div>
  );
}
