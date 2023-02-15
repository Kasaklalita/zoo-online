import React from "react";

interface IPrimaryButtonProps {
  placeholder: string;
  onChange: any;
  type: string;
  value: string;
}

export default function PrimaryInput(props: IPrimaryButtonProps) {
  return (
    <input
      {...props}
      className="w-full outline-none bg-transparent border-b border-[#bdbdbd] pb-2.5 text-sm placeholder:text-sm placeholder:text-[#e0e0e0] text-[#e0e0e0]"
    />
  );
}
