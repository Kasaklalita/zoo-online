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
        <NavigationLink to="/" text="About" />
        <NavigationLink to="/zoo" text="Zoos" />
        <NavigationLink to="/" text="Map" />
        <NavigationLink to="/" text="Contact Us" />
        <NavigationLink to="/" text="Design" />
      </nav>
      <ThemeToggler />
    </div>
  );
}
