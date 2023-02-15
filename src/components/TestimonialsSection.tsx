import React from "react";
import SectionTemplate from "./layout/SectionTemplate";
import { ITestimonial } from "../types";
import TestimonialCard from "./TestimonialCard";
import ProgressBar from "./UI/ProgressBar";
import ActionButton from "./UI/ActionButton";

export default function TestimonialsSection() {
  const testimonials: ITestimonial[] = [
    {
      fullName: "Veniamin Polienko",
      description:
        "As a voice for wildlife, we are devastated by the impact of the 2020 Australian bushfires on precious species and their habitat.",
      picture: null,
    },
    {
      fullName: "Veniamin Polienko",
      description:
        "As a voice for wildlife, we are devastated by the impact of the 2020 Australian bushfires on precious species and their habitat.",
      picture: null,
    },
  ];
  return (
    <div>
      <SectionTemplate title="Testimonials">
        <div className="flex flex-col gap-8 items-center">
          <div className="flex gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard {...testimonial} />
            ))}
          </div>
          <ProgressBar currentValue={2} maxValue={8} />
          <ActionButton text="leave feedback" />
        </div>
      </SectionTemplate>
    </div>
  );
}
