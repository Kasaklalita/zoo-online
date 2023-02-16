import React from "react";
import OurFeature from "./OurFeature";
import MainContainer from "./layout/MainContainer";
import love from "./../assets/love.svg";
import inspiration from "./../assets/inspiration.svg";
import achievement from "./../assets/achievement.svg";

export default function AboutUsSection() {
  const ourFeatures = [
    {
      image: inspiration,
      title: "What inspires us?",
      description:
        "As a voice for wildlife, we are devastated by the impact of the 2020 Australian bushfires on precious species and their habitat, and we are determined to assist in all aspects, including providing veterinary support and raising much-needed emergency funds.",
    },
    {
      image: achievement,
      title: "Our mission",
      description:
        "Zoo Online saves wildlife and inspires everyone to make conservation a priority in their lives.",
    },
    {
      image: love,
      title: "What we beleive in?",
      description:
        "Animals have the right to a pain-free and happy life. They have equal claim to the resources of this planet, and deserve a life of dignity and compassion.",
    },
  ];

  return (
    <div className="bg-[#F2F2F2] flex justify-around pt-24 pb-32">
      <MainContainer>
        <div className="flex justify-between gap-8">
          {ourFeatures.map((feature) => (
            <OurFeature
              key={feature.title}
              image={feature.image}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </MainContainer>
    </div>
  );
}
