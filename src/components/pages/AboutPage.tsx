import React from "react";
import DonationForm from "../DonationForm";
import AboutUsSection from "./../AboutUsSection";
import AboutWorkSection from "./../AboutWorkSection";
import IntroSection from "./../IntroSection";

import PetsInZooSection from "./../PetsInZooSection";
import PlayAndFeedSection from "./../PlayAndFeedSection";
import TestimonialsSection from "./../TestimonialsSection";
import PageTemplate from "./PageTemplate";

export default function AboutPage() {
  return (
    <PageTemplate>
      <IntroSection />
      <AboutWorkSection />
      <AboutUsSection />
      <PetsInZooSection />
      <PlayAndFeedSection />
      <TestimonialsSection />
      <DonationForm />
    </PageTemplate>
  );
}
