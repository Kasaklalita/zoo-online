import React from "react";
import cls from "./NavigationLink.module.css";

interface INavigationLinkProps {
  text: string;
}

export default function ({ text }: INavigationLinkProps) {
  return <div className={cls.navigationLink}>{text}</div>;
}
