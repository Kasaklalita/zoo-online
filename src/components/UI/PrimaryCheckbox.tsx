import React from "react";

interface IPrimaryCheckboxProps {
  placeholder: string;
  onChange: any;
}

export default function PrimaryCheckbox({
  placeholder,
  onChange,
}: IPrimaryCheckboxProps) {
  return (
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        name="primaryCheckbox"
        className="w-4 h-4 shrink-0"
        onChange={onChange}
      />
      <label htmlFor="primaryCheckbox" className="text-sm text-[#e0e0e0]">
        {placeholder}
      </label>
    </div>
  );
}
