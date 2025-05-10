"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Locale } from "@/i18n.config";
import Image from "next/image";

export default function LocaleSwitcher({ lang }: { lang: Locale }) {
  const pathName = usePathname();

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };
  let direction: string;
  if (lang === "en") {
    direction = "ltr";
  } else if (lang === "ar") {
    direction = "rtl";
  }

  return (
    <div className="w-[130px] relative hidden  min-[1460px]:flex items-center justify-between border border-[#1DE2CF26] bg-[#061E2C] rounded-3xl px-[5px] h-[40px]">
      <Link
        href={redirectedPathName("en")}
        className="z-30  w-[130px] flex items-center justify-center cursor-pointer"
      >
        <Image src="/assets/home/usa.svg" alt="search" width={20} height={20} />
        <p className="text-[16px] font-regular text-white">En</p>
      </Link>
      <Link
        href={redirectedPathName("ar")}
        className="z-30 w-[130px] flex items-center justify-center cursor-pointer"
      >
        <Image
          src="/assets/home/arabic.svg"
          alt="search"
          width={20}
          height={20}
        />
        <p className="text-[16px] font-regular text-white">Ar</p>
      </Link>
      <span
        className={`w-[60px] h-[28px] absolute bg-[#02111B] top-[50%] translate-y-[-50%]  ${
          lang === "en" ? "left-2" : "left-2"
        } rounded-full`}
      ></span>
    </div>
  );
}
