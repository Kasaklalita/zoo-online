import React from "react";
import { ITestimonial } from "../types";

export default function TestimonialCard({
  fullName,
  description,
  picture,
}: ITestimonial) {
  return (
    <div className="min-h-72 flex justify-center flex-col gap-4 items-center px-20 pt-12 pb-12 bg-white rounded-lg shadow-lg max-sm:py-6 max-sm:px-6">
      <img src={picture} alt="" className="w-16 h-16 shrink-0 rounded-full" />
      <h1 className="text-xl font-black text-[#333333]">{fullName}</h1>
      <p className="text-sm text-[#4f4f4f]">{description}</p>
    </div>
  );
}
