import React from "react";
import cls from "./MainContainer.module.css";

interface IMainContainerProps {
  children: any;
}

export default function MainContainer({ children }: IMainContainerProps) {
  return <div className={cls.mainContainer}>{children}</div>;
}
