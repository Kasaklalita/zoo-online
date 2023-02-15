import React from "react";
import playIcon from "./../../assets/play.svg";
import cls from "./ActionButton.module.css";

interface IActionButtonProps {
  text: string;
}

export default function ActionButton({ text }: IActionButtonProps) {
  return (
    <div className={cls.actionButton}>
      <h1 className={cls.text}>{text}</h1>
    </div>
  );
}
