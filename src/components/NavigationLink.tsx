import React from "react";
import { Link } from "react-router-dom";
import cls from "./NavigationLink.module.css";

interface INavigationLinkProps {
  text: string;
  to: string;
}

export default function NavigationLink({ text, to }: INavigationLinkProps) {
  return (
    <Link to={to} className={cls.navigationLink}>
      {text}
    </Link>
  );
}
