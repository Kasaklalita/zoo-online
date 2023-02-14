import React from "react";
import playIcon from "./../../assets/play.svg";
import cls from "./PlayActionButton.module.css";

interface IPlayActionButtonProps {
  text: string;
}

export default function PlayActionButton({ text }: IPlayActionButtonProps) {
  return (
    <div className={cls.playActionButton}>
      <img src={playIcon} alt="" className="w-8 h-8 shrink-0" />
      <h1 className={cls.text}>{text}</h1>
    </div>
  );
}
