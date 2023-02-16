import React from "react";
import { ITestimonial } from "../types";

export default function TestimonialCard({
  fullName,
  description,
  picture,
}: ITestimonial) {
  return (
    <div className="h-72 flex flex-col gap-4 items-center px-20 pt-12 bg-white rounded-lg shadow-lg mt-16">
      <img src={picture} alt="" className="w-16 h-16 shrink-0 rounded-full" />
      <h1 className="text-xl font-black text-[#333333]">{fullName}</h1>
      <p className="text-sm text-[#4f4f4f]">{description}</p>
    </div>
  );
}
