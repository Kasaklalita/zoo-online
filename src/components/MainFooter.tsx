import React from "react";
import Logo from "./Logo";
import logoDark from "./../assets/logo_dark.svg";
import ContactUsFooterForm from "./ContactUsFooterForm";

export default function MainFooter() {
  return (
    <div className="px-36 pt-24 pb-16 bg-[#333333] flex justify-between">
      <div className="">
        <img src={logoDark} className="w-14 shrink-0" />
        <ContactUsFooterForm />
      </div>
    </div>
  );
}
