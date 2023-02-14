import React from "react";
import cls from "./Logo.module.css";

export default function Logo() {
  return (
    <div>
      <h1 className={cls.title}>zoo</h1>
      <p className={cls.subtitle}>online</p>
    </div>
  );
}
