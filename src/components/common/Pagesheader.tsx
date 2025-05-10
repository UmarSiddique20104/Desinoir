"use client";
import React, { useEffect, useState } from "react";
import Index from "../header/Index";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

interface PagesheaderProps {
  lang: any;
  parent: string;
  textSize?: boolean;
  direction: string;
  txt1: string;
  txt2: string;
  img: string;
  type: string;
  imgshow?: boolean;
}

const Pagesheader: React.FC<PagesheaderProps> = ({
  lang,
  parent,
  textSize,
  direction,
  txt1,
  txt2,
  img,
  type,
  imgshow = true,
}) => {
  const [txT1, setTxt1] = useState("");
  const [txT2, setTxt2] = useState("");


  useEffect(() => {
    const splitText = txt1?.split(" ");
    setTxt1(splitText?.[0] || "");
    setTxt2(splitText?.slice(1)?.join(" "));
  }, [txt1]);
  return (
    <div>
      <div className="dark:bg-[#02111B] bg-[#061E2C] max-h-[440px] h-[300px] lg:h-[610px] w-full">
        <Index type={type} lang={lang} parent={parent} direction={direction} />

        <div className="flex lg:pt-[200px] pt-[100px] justify-between items-center max-w-[1460px] md:w-10/12 mx-auto max-md:px-5">
          <div className="xl:max-w-[100%]">
            <h1
              className={`${
                textSize
                  ? "text-[30px] lg:text-[54px] "
                  : "lg:text-[70px] md:text-[50px] text-[30px]"
              } text-white font-[500] `}
            >
              {txT1} <span className="font-[100]">{txT2}</span>
            </h1>
            {/* <h1
              className={`${
                textSize
                  ? "text-[30px] lg:text-[54px] "
                  : "lg:text-[70px] md:text-[50px] text-[30px]"
              } text-white font-[500] truncate max-w-full`}
              title={txt1} // Tooltip for full text
            >
              {txt1}
            </h1> */}
          </div>
          <Image
            src={img}
            alt=".."
            width={200}
            height={200}
            className={`${imgshow === false ? "hidden " : "block"}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Pagesheader;
