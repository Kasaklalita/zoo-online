import React from "react";
import cls from "./IntroSection.module.css";
import PlayActionButton from "./UI/PlayActionButton";
import instagram from "./../assets/instagram.svg";
import twitter from "./../assets/twitter.svg";
import vk from "./../assets/vk.svg";
import youtube from "./../assets/youtube.svg";
import SocialMediaIcon from "./UI/SocialMediaIcon";

export default function IntroSection() {
  return (
    <div className={cls.introSection}>
      <div>
        <h1 className={cls.title}>Watch your favorite animal online</h1>
        <PlayActionButton text="Watch online" />
      </div>
      <div className={cls.socialMedia}>
        <a href="https://www.instagram.com/" target="blank">
          <i className="fa-brands fa-instagram text-xl text-[#ffffff]"></i>
        </a>
        <a href="https://twitter.com/" target="blank">
          <i className="fa-brands fa-twitter text-xl text-[#ffffff]"></i>
        </a>
        <a href="https://www.youtube.com/" target="blank">
          <i className="fa-brands fa-youtube text-xl text-[#ffffff]"></i>
        </a>
        <a href="https://vk.com/" target="blank">
          <i className="fa-brands fa-vk text-xl text-[#ffffff]"></i>
        </a>

        {/* <SocialMediaIcon icon={instagram} to="https://www.instagram.com/" />
        <SocialMediaIcon icon={twitter} to="https://twitter.com/" />
        <SocialMediaIcon icon={youtube} to="https://www.youtube.com/" />
        <SocialMediaIcon icon={vk} to="https://vk.com" /> */}
      </div>
    </div>
  );
}
