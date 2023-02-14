import React from "react";
import cls from "./IntroSection.module.css";
import PlayActionButton from "./UI/PlayActionButton";

export default function IntroSection() {
  return (
    <div className={cls.introSection}>
      <div>
        <h1 className={cls.title}>Watch your favorite animal online</h1>
        <PlayActionButton text="Watch online" />
      </div>
    </div>
  );
}
