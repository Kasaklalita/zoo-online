import React from "react";

interface IOurFeatureProps {
  image: any;
  title: string;
  description: string;
}

export default function OurFeature({
  image,
  title,
  description,
}: IOurFeatureProps) {
  return (
    <div className="flex flex-col flex-1 gap-4">
      <img src="" alt="" />
      <h1 className="font-black text-xl text-[#333333] text-center">{title}</h1>
      <p className="text-sm text-[#4f4f4f]">{description}</p>
    </div>
  );
}
