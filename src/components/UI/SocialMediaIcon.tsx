import React from "react";

interface ISocialMediaIconProps {
  icon: any;
  to: string;
}

export default function SocialMediaIcon({ icon, to }: ISocialMediaIconProps) {
  return (
    <a href={to}>
      <img src={icon} alt="" className="w-5 shrink-0" />
    </a>
  );
}
