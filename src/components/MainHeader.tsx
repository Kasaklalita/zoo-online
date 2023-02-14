import React from "react";
import Logo from "./Logo";
import NavigationLink from "./NavigationLink";
import logoLight from "./../assets/logo_light.svg";
import ThemeToggler from "./ThemeToggler";

export default function MainHeader() {
  return (
    <div className="w-full px-36 h-24 flex justify-between items-center">
      <img src={logoLight} className="w-14 shrink-0" />
      <nav className="h-full flex justify-between gap-20 items-center">
        <NavigationLink text="About" />
        <NavigationLink text="Zoos" />
        <NavigationLink text="Map" />
        <NavigationLink text="Contact Us" />
        <NavigationLink text="Design" />
      </nav>
      <ThemeToggler />
    </div>
  );
}
