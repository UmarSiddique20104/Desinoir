"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Index from "../header/Index";
import Link from "next/link";

function ProjectDetail({
  txt1,
  txt2,
  showbtn,
  parent,
  lang,
  direction,
  type,
}: any) {
  const [txT1, setTxt1] = useState("");
  const [txT2, setTxt2] = useState("");

  useEffect(() => {
    const splitText = txt1?.split(" ");
    setTxt1(splitText?.[0] || "");
    setTxt2(splitText?.slice(1)?.join(" "));
  }, [txt1]);
  return (
    <div>
      <div className=" dark:bg-[#02111B]   bg-[#061E2C] max-h-[610px] h-[300px] lg:h-[410px] xl:h-[610px] w-full">
        <Index parent={parent} lang={lang} direction={direction} type={type} />

        <div className="flex pt-[80px] lg:pt-[80px] xl:pt-[140px] max-w-[1460px] md:w-10/12 max-md:px-5 mx-auto">
          <div>
            <h1 className="text-white text-[40px] lg:text-[50px] leading-[100%] capitalize xl:text-[90px] font-[500]">
              {txT1} <span className="font-[100]">{txT2}</span>
            </h1>
            {showbtn && (
              <div className="inline-flex">
                <Link
                  href="/"
                  className="group block max-md:mt-[20px] mt-[30px]"
                >
                  <p className=" relative z-20 uppercase text-[18px] font-[400] inline-flex items-center gap-4 text-[#ffffff] ">
                    {parent?.uiStoreDetails?.viewMore}
                    <span
                      className={`${
                        direction == "ltr"
                          ? "group-hover:translate-x-[177px] left-[-10px]"
                          : "group-hover:translate-x-[-90px] right-[-10px]"
                      } z-[-1] rounded-full absolute transition-all duration-1000 w-[40px] h-[40px] bg-[#FFFFFF14] dark:bg-[#727272a6]`}
                    ></span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="14"
                      viewBox="0 0 18 14"
                      className={`${
                        direction == "ltr"
                          ? " group-hover:rotate-[90deg] fill-white"
                          : "rotate-[180deg] group-hover:rotate-[90deg]"
                      } transition-all duration-1000 opacity-0 group-hover:opacity-100 fill-[#FFFFFF] dark:fill-white `}
                    >
                      <path d="M1.08317 8.04154H14.4019L10.9717 11.4717C10.5649 11.8785 10.5649 12.5379 10.9717 12.9447C11.1754 13.1483 11.4415 13.2499 11.7082 13.2499C11.9748 13.2499 12.241 13.1483 12.4446 12.9447L17.653 7.73633C17.8483 7.54154 17.9582 7.27643 17.9582 6.99987C17.9582 6.72331 17.8483 6.45872 17.653 6.26341L12.4446 1.05508C12.0379 0.648307 11.3785 0.648307 10.9717 1.05508C10.5649 1.46185 10.5649 2.12122 10.9717 2.52799L14.4019 5.9582H1.08317C0.508171 5.9582 0.0415039 6.42487 0.0415039 6.99987C0.0415039 7.57487 0.508171 8.04154 1.08317 8.04154Z" />
                    </svg>
                  </p>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
