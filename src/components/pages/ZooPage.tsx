import React from "react";
import AnimalDescriptionItem from "../AnimalDescriptionItem";
import ActionButton from "../UI/ActionButton";
import PageTemplate from "./PageTemplate";

export default function ZooPage() {
  return (
    <PageTemplate>
      <div className="flex gap-44 px-7 pt-16 pb-24">
        <div className="flex flex-col gap-2">asdf</div>
        <div className="">
          <h1 className="text-[#333333] text-5xl font-black mb-10">
            The Beijing Zoo
          </h1>
          <div className="flex gap-8">
            <div className="flex flex-col gap8">asdf asdf</div>
            <div className="flex flex-col gap-4">
              <AnimalDescriptionItem
                title="Population:"
                description="About 1,590 individuals"
              />
              <AnimalDescriptionItem
                title="Habitat:"
                description="Temperate forests high in the mountains of southwest China"
              />
              <AnimalDescriptionItem
                title="Diet:"
                description="A panda's daily diet consists almost entirely of the leaves,
                stems and shoots of various bamboo species. Bamboo contains
                very little nutritional value so pandas must eat 12-38kg every
                day to meet their energy needs."
              />
              <ActionButton text="Feed" />
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
