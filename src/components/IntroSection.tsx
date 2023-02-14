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
      <div className="absolute bottom-28 left-36 flex flex-col gap-4">
        <SocialMediaIcon icon={instagram} to="https://www.instagram.com/" />
        <SocialMediaIcon icon={twitter} to="https://twitter.com/" />
        <SocialMediaIcon icon={youtube} to="https://www.youtube.com/" />
        <SocialMediaIcon icon={vk} to="https://vk.com" />
      </div>
    </div>
  );
}
