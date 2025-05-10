"use client";
import Image from "next/image";
import React from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { socialLinks } from "./SocialLinks";
function LogoImage({ parent, direction, footer }: any) {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <div
        className={`col-span-12 lg:col-span-4 px-[20px] xl:px-[80px] dark:bg-[#FFFFFF14] pt-[30px] pb-[30px] xl:pt-[80px] xl:pb-[230px]   ${direction == "rtl"
          ? "border-l rounded-r-[30px]"
          : "border-r rounded-l-[30px]"
          } dark:border-[#FFFFFF40] max-lg:rounded-[30px] border-[#061E2C26] bg-[#061E2C0D]`}
      >
        <div>
          {theme == "dark" ? (
            <Image
              src="/assets/home/logo-main.svg"
              width={200}
              height={50}
              alt="image"
            />
          ) : (
            <Image
              src="/assets/home/logodark.png"
              width={200}
              height={50}
              alt="image"
            />
          )}

          <p className="dark:text-[#989CAA] text-start my-[20px] lg:w-[300px] text-[#061E2C]">
            {parent?.footer?.sideheading}
          </p>
          <div className="flex items-center gap-4 ">
            <Link target="_blank" href={footer?.socialLinks?.facebook || "#"}
              className="w-[50px] group flex items-center justify-center hover:bg-[#197BFF] transition-all duration-[.6s] cursor-pointer h-[50px] dark:bg-[#FFFFFF14] bg-[white] hover:dark:bg-[#197BFF]  rounded-[15px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="31"
                viewBox="0 0 30 31"
                className="fill-[#434750] group-hover:fill-[white] transition-all duration-[.6s] dark:fill-[#ffffff]"
              >
                <path d="M15 3.51562C8.373 3.51562 3 8.88863 3 15.5156C3 21.5316 7.432 26.4996 13.206 27.3676V18.6956H10.237V15.5416H13.206V13.4426C13.206 9.96763 14.899 8.44263 17.787 8.44263C19.17 8.44263 19.902 8.54563 20.248 8.59163V11.3446H18.278C17.052 11.3446 16.624 12.5076 16.624 13.8176V15.5416H20.217L19.73 18.6956H16.624V27.3926C22.481 26.5986 27 21.5906 27 15.5156C27 8.88863 21.627 3.51562 15 3.51562Z" />
              </svg>
            </Link>

            <Link target="_blank" href={footer?.socialLinks?.instagram || "#"} className="w-[50px] group flex items-center justify-center hover:bg-[#197BFF] transition-all duration-[.6s] cursor-pointer h-[50px] dark:bg-[#FFFFFF14] bg-[white]  hover:dark:bg-[#197BFF] rounded-[15px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="31"
                viewBox="0 0 30 31"
                className="fill-[#434750] group-hover:fill-[white] transition-all duration-[.6s] dark:fill-[#ffffff]"
              >
                <path d="M15 2.51562C7.832 2.51562 2 8.34762 2 15.5156C2 22.6836 7.832 28.5156 15 28.5156C22.168 28.5156 28 22.6836 28 15.5156C28 8.34762 22.168 2.51562 15 2.51562ZM11.666 6.51562H18.332C21.457 6.51562 24 9.05764 24 12.1816V18.8477C24 21.9727 21.458 24.5156 18.334 24.5156H11.668C8.54297 24.5156 6 21.9736 6 18.8496V12.1836C6 9.05859 8.54202 6.51562 11.666 6.51562ZM11.666 8.51562C9.64502 8.51562 8 10.1616 8 12.1836V18.8496C8 20.8706 9.64597 22.5156 11.668 22.5156H18.334C20.355 22.5156 22 20.8697 22 18.8477V12.1816C22 10.1606 20.354 8.51562 18.332 8.51562H11.666ZM19.668 10.1816C20.036 10.1816 20.334 10.4797 20.334 10.8477C20.334 11.2157 20.036 11.5156 19.668 11.5156C19.3 11.5156 19 11.2157 19 10.8477C19 10.4797 19.3 10.1816 19.668 10.1816ZM15 10.5156C17.757 10.5156 20 12.7586 20 15.5156C20 18.2726 17.757 20.5156 15 20.5156C12.243 20.5156 10 18.2726 10 15.5156C10 12.7586 12.243 10.5156 15 10.5156ZM15 12.5156C14.2044 12.5156 13.4413 12.8317 12.8787 13.3943C12.3161 13.9569 12 14.72 12 15.5156C12 16.3113 12.3161 17.0743 12.8787 17.6369C13.4413 18.1996 14.2044 18.5156 15 18.5156C15.7956 18.5156 16.5587 18.1996 17.1213 17.6369C17.6839 17.0743 18 16.3113 18 15.5156C18 14.72 17.6839 13.9569 17.1213 13.3943C16.5587 12.8317 15.7956 12.5156 15 12.5156Z" />
              </svg>
            </Link>

            <Link target="_blank" href={footer?.socialLinks?.linkedIn || "#"} className="w-[50px] group flex items-center justify-center hover:bg-[#197BFF] transition-all duration-[.6s] cursor-pointer h-[50px] dark:bg-[#FFFFFF14]  bg-[white] hover:dark:bg-[#197BFF] rounded-[15px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="31"
                viewBox="0 0 30 31"
                className="fill-[#434750] group-hover:fill-[white] transition-all duration-[.6s] dark:fill-[#ffffff]"
              >
                <path d="M15 3.51562C8.373 3.51562 3 8.88863 3 15.5156C3 22.1426 8.373 27.5156 15 27.5156C21.627 27.5156 27 22.1426 27 15.5156C27 8.88863 21.627 3.51562 15 3.51562ZM10.496 8.91862C11.338 8.91862 11.899 9.47962 11.899 10.2276C11.899 10.9756 11.338 11.5366 10.403 11.5366C9.561 11.5376 9 10.9756 9 10.2276C9 9.47962 9.561 8.91862 10.496 8.91862ZM12 20.5156H9V12.5156H12V20.5156ZM22 20.5156H19.176V16.1436C19.176 14.9346 18.423 14.6556 18.141 14.6556C17.859 14.6556 16.917 14.8416 16.917 16.1436C16.917 16.3296 16.917 20.5156 16.917 20.5156H14V12.5156H16.918V13.6316C17.294 12.9806 18.047 12.5156 19.459 12.5156C20.871 12.5156 22 13.6316 22 16.1436V20.5156Z" />
              </svg>
            </Link>

            <Link target="_blank" href={footer?.socialLinks?.dribble || "#"} className="w-[50px] group flex items-center justify-center hover:bg-[#197BFF] transition-all duration-[.6s] cursor-pointer h-[50px] dark:bg-[#FFFFFF14]  bg-[white] hover:dark:bg-[#197BFF] rounded-[15px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="31"
                viewBox="0 0 30 31"
                className="fill-[#434750] group-hover:fill-[white] transition-all duration-[.6s] dark:fill-[#ffffff]"
              >
                <path d="M14 3.56641C11.17 3.80041 8.62241 5.01314 6.69141 6.86914C8.53141 8.93614 9.72522 11.5926 9.94922 14.5156H14V3.56641ZM16 3.56641V14.5156H20.0508C20.2748 11.5926 21.4695 8.93709 23.3105 6.87109C21.3785 5.01409 18.83 3.80141 16 3.56641ZM5.35742 8.39258C4.06942 10.1346 3.23978 12.2316 3.05078 14.5156H7.94922C7.73822 12.1896 6.79242 10.0756 5.35742 8.39258ZM24.6426 8.39258C23.2076 10.0756 22.2618 12.1886 22.0508 14.5156H26.9492C26.7602 12.2316 25.9316 10.1346 24.6426 8.39258ZM3.05078 16.5156C3.23978 18.7996 4.06842 20.8967 5.35742 22.6387C6.79242 20.9557 7.73822 18.8416 7.94922 16.5156H3.05078ZM9.94922 16.5156C9.72522 19.4386 8.53045 22.0942 6.68945 24.1602C8.62045 26.0172 11.168 27.2308 13.998 27.4648V16.5156H9.94922ZM16 16.5156V27.4648C18.83 27.2308 21.3776 26.0181 23.3086 24.1621C21.4686 22.0951 20.2748 19.4386 20.0508 16.5156H16ZM22.0508 16.5156C22.2618 18.8416 23.2076 20.9557 24.6426 22.6387C25.9316 20.8967 26.7602 18.8006 26.9492 16.5156H22.0508Z" />
              </svg>
            </Link>

          </div>
        </div>
      </div>
    </>
  );
}

export default LogoImage;
