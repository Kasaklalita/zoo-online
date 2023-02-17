import panda from "./../assets/panda.jpg";
import eagle from "./../assets/eagle.jpg";
import gorilla from "./../assets/gorilla.jpg";
import crocodile from "./../assets/crocodile.jpg";
import { IPet } from "../types";

export const pets: IPet[] = [
  {
    name: "panda",
    picture: panda,
    title: "The Beijing Zoo",
    description:
      "Panda’s name is Bei Bei. He is 2 years old. Bei Bei is from China. He loves bamboos.",
    population: "About 1,590 individuals",
    habitat: "Temperate forests high in the mountains of southwest China",
    diet: "A panda's daily diet consists almost entirely of the leaves, stems and shoots of various bamboo species. Bamboo contains very little nutritional value so pandas must eat 12-38kg every day to meet their energy needs.",
  },
  {
    name: "eagle",
    picture: eagle,
    title: "West End Bald Eagle Cam",
    description:
      "Eagle’s name is Bei Bei. He is 2 years old. Bei Bei is from China. He loves bamboos.",
    population: "More than 270 pairs in 2013",
    habitat: "Typically nest in forested areas adjacent to large bodies of water",
    diet: "Main live prey consists of medium sized mammals and birds such as rabbits, hares, grouse and ptarmigan. The diet of coastal birds includes gulls and other seabirds.",
  },
  {
    name: "gorilla",
    picture: gorilla,
    title: "GRACE Gorilla Forest Corridor Cam",
    description:
      "Panda’s name is Bei Bei. He is 2 years old. Bei Bei is from China. He loves bamboos.",
    population: "Over 100,000 western lowland gorillas",
    habitat: "Gorillas primarily inhabit tropical forest habitats.Tropical forests are characterized as having little variance in temperature (around 23°C) and length of daylight (around 12 hours).",
    diet: "Gorillas stick to a mainly vegetarian diet, feeding on stems, bamboo shoots and fruits. Western lowland gorillas, however, also have an appetite for termites and ants, and break open termite nests to eat the larvae.",
  },
  {
    name: "crocodile",
    picture: crocodile,
    title: "Alligator and Spoonbill Swamp Webcam",
    description:
      "Crocodile’s name is Bei Bei. He is 2 years old. Bei Bei is from China. He loves bamboos.",
    population: "Roughly 1.25 million",
    habitat: "Alligators can be found in slow-moving rivers, ponds, lakes and swamps.",
    diet: "Their diets include prey species that are abundant and easily accessible. Juvenile alligators eat primarily insects, amphibians, small fish, and other invertebrates. Adult alligators eat rough fish, snakes, turtles, small mammals, and birds.",
  },
];
