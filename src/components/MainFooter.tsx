import React from "react";
import Logo from "./Logo";
import logoDark from "./../assets/logo_dark.svg";
import ContactUsFooterForm from "./ContactUsFooterForm";
import ActionButton from "./UI/ActionButton";
import SocialMediaIcon from "./UI/SocialMediaIcon";
import instagram from "./../assets/instagram.svg";
import twitter from "./../assets/twitter.svg";
import vk from "./../assets/vk.svg";
import youtube from "./../assets/youtube.svg";

export default function MainFooter() {
  return (
    <div className="px-36 pt-24 pb-16 bg-[#333333]">
      <div className="flex justify-between border border-[#fefefe]">
        <div className="">
          <img src={logoDark} className="w-14 shrink-0" />
          <ContactUsFooterForm />
        </div>
        <div className="flex flex-col">
          <div className="mb-16 flex items-center justify-between gap-32">
            <nav className="flex gap-16">
              <a href="" className="text-[#fefefe] font-medium">
                About
              </a>
              <a href="" className="text-[#fefefe] font-medium">
                Zoos
              </a>
              <a href="" className="text-[#fefefe] font-medium">
                Map
              </a>
              <a href="" className="text-[#fefefe] font-medium">
                Design
              </a>
            </nav>
            <ActionButton text="Donate for volunteers" />
          </div>
          <div className="">
            <h1 className="mb-9 text-sm uppercase text-[#fefefe] font-bold">
              Zoo online center
            </h1>
            <p className="text-sm text-[#fefefe]">
              132, Address District, Street
            </p>
            <p className="mb-5 text-sm text-[#fefefe]">
              Open Daily 10:00 am - 5:00 pm
            </p>
            <p className="text-sm text-[#fefefe]">T(702) 163-3433</p>
            <p className="mb-5 text-sm text-[#fefefe]">zoo.online@gmail.com</p>
            <div className="flex gap-4">
              <SocialMediaIcon
                icon={instagram}
                to="https://www.instagram.com/"
              />
              <SocialMediaIcon icon={twitter} to="https://twitter.com/" />
              <SocialMediaIcon icon={youtube} to="https://www.youtube.com/" />
              <SocialMediaIcon icon={vk} to="https://vk.com" />
            </div>
          </div>
        </div>
      </div>
      <hr className="w-full bg-[#fefefe] mt-16 mb-7"></hr>
      <div className="border border-[#bdbdbd]">
        <p className="mb-1.5 text-sm text-[#bdbdbd]">Veniamin Polienko</p>
        <p className="text-sm text-[#bdbdbd]">https://github.com/Kasaklalita</p>
      </div>
    </div>
  );
}
