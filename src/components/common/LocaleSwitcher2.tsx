"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Locale } from "@/i18n.config";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function LocaleSwitcher2({ lang }: { lang: Locale }) {
  const pathName = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  let timeoutId: any;

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200); // Adjust the delay time as needed
  };
  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const dropdownOptions = [
    {
      name: "UI/UX Designing",
      url: "services/ui-ux-designing",
    },
    {
      name: "Branding",
      url: "services/branding",
    },
    {
      name: "Graphic Designing",
      url: "services/graphic-designing",
    },
    {
      name: "Motion Graphic Designing",
      url: "services/motion-graphic-designing",
    },
  ];
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
    <div className="flex items-center flex-wrap justify-start gap-5 lg:mt-[40px] my-[20px]">
      {/* <div>
        <li
          className={`z-30 w-[130px] flex items-center justify-center cursor-pointer border border-[#1DE2CF26] rounded-3xl px-[5px] py-[11px] ${
            isDropdownOpen ? "bg-[#061E2C]" : "bg-transparent"
          }`}
          //@ts-ignore
          ref={dropdownRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleToggleDropdown}
        >
          <div className="relative h-full flex items-center">
            <button className="flex items-center gap-3">
              <span
                className={`flex  text-[16px]  font-regular text-white items-center gap-[10px] hover:text-[#20D091]`}
              >
                Services
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-3 h-3 ${
                    isDropdownOpen ? "rotate-180" : "rotate-0"
                  } dark:fill-white fill-[#434750] hover:fill-[#20D091]`}
                  viewBox="0 0 16 16"
                >
                  <path d="M13.8619 4.19525L7.99992 10.0573L2.13792 4.19525C1.87758 3.93492 1.45558 3.93492 1.19525 4.19525C0.934917 4.45558 0.934917 4.87758 1.19525 5.13792L7.52858 11.4713C7.65892 11.6016 7.82925 11.6666 7.99992 11.6666C8.17058 11.6666 8.34092 11.6016 8.47125 11.4713L14.8046 5.13792C15.0649 4.87758 15.0649 4.45558 14.8046 4.19525C14.5443 3.93492 14.1222 3.93492 13.8619 4.19525Z" />
                </svg>
              </span>
            </button>

            <div
              className={`${
                isDropdownOpen
                  ? "opacity-100 translate-y-0 bg-[#061E2C]"
                  : "opacity-0 -translate-y-2 pointer-events-none"
              } absolute flex flex-col gap-3 w-[260px] top-10 -left-5 mt-1 p-3 border border-[#1DE2CF26] bg-[#061E2C] rounded-[10px] transition-all duration-300 ease-in-out z-40`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {dropdownOptions.map((option, index) => (
                <Link
                  key={index}
                  className="text-[16px] text-[#989CAA] hover:dark:text-[white] flex flex-col gap-[10px]"
                  href={`/${lang}/${option.url}`}
                >
                  {option.name}
                </Link>
              ))}
            </div>
          </div>
        </li>
      </div> */}

      <div className={`relative flex items-center justify-between`}>
        <Link
          href={redirectedPathName("en")}
          className={`z-30 w-[130px] flex items-center justify-center cursor-pointer border border-[#1DE2CF26] ${
            lang === "en" ? "bg-[#061E2C]" : ""
          } rounded-3xl px-[5px] py-[11px]`}
        >
          <Image
            src="/assets/home/usa.svg"
            alt="search"
            width={20}
            height={20}
          />
          <p className="text-[16px] font-regular text-white">English</p>
        </Link>
      </div>
      <div className={`relative flex items-center justify-between `}>
        <Link
          href={redirectedPathName("ar")}
          className={`z-30 w-[130px] flex items-center justify-center cursor-pointer border border-[#1DE2CF26] ${
            lang === "ar" ? "bg-[#061E2C]" : ""
          } rounded-3xl px-[5px] py-[11px]`}
        >
          <Image
            src="/assets/home/arabic.svg"
            alt="search"
            width={20}
            height={20}
          />
          <p className="text-[16px] font-regular text-white">Arabic</p>
        </Link>
      </div>
    </div>
  );
}
