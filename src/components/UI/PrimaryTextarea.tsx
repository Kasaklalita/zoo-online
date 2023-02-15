import React from "react";

interface IPrimaryTextareaProps {
  placeholder: string;
  onClick: any;
}

export default function PrimaryTextarea(props: any) {
  return (
    <textarea
      {...props}
      className="w-full outline-none p-2 text-sm bg-transparent border border-[#bdbdbd] rounded placeholder:text-sm placeholder:text-[#e0e0e0] text-[#e0e0e0]"
    />
  );
}
