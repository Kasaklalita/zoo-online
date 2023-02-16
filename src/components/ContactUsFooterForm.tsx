import React, { ChangeEvent, useState } from "react";
import PrimaryCheckbox from "./UI/PrimaryCheckbox";
import PrimaryInput from "./UI/PrimaryInput";
import PrimaryTextarea from "./UI/PrimaryTextarea";

export default function ContactUsFooterForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div className="max-w-96">
      <h1 className="text-[#fefefe] font-black text-xl mb-8">Contact Us</h1>
      <form className="flex flex-col gap-5">
        <PrimaryInput
          placeholder="Name"
          type="text"
          value={username}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setUsername(e.target.value);
          }}
        />
        <PrimaryInput
          placeholder="Email"
          type="text"
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setEmail(e.target.value);
          }}
        />
        <PrimaryTextarea placeholder="Please enter your message" rows={5} />
        <PrimaryCheckbox
          placeholder="I agree to the processing of Personal Data"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            console.log(e.target.value);
          }}
        />
        <button onClick={() => console.log("sent")} className="self-end">
          <h1 className="font-medium text-[#fefefe] uppercase">Send</h1>
        </button>
      </form>
    </div>
  );
}
