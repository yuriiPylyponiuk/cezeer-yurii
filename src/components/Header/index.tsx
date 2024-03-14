"use client";
import { useTheme } from "next-themes";
import Link from "next/link";
import React, { useState } from "react";
import { Switch } from "../ui/switch";

export const Header = () => {
  const [isChecked, setChecked] = useState(true);
  const { setTheme } = useTheme();

  const changeMode = () => {
    console.log(isChecked);

    setChecked((prev) => !prev);
    if (isChecked) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <div className="flex justify-between items-center mx-16 my-8 py-2 border-b-2 border-primary">
      <div className="logo">
        <h1 className="text-primary text-[30px] font-bold">
          <Link href={"/"}>CEEZAR</Link>
        </h1>
      </div>
      <div className="flex card">
        <Switch className="mr-10" id="airplane-mode" checked={isChecked} onCheckedChange={changeMode} />
        <Link href={"/card"}>card</Link>
      </div>
    </div>
  );
};
