import React from "react";
import MainFooter from "./../MainFooter";
import MainHeader from "./../MainHeader";

interface IPageTemplateProps {
  children: any;
}

export default function PageTemplate({ children }: IPageTemplateProps) {
  return (
    <div>
      <MainHeader />
      {children}
      <MainFooter />
    </div>
  );
}
