"use client";
import ServiceDetails from "@/components/About/servicedetails";
import Pagesheader from "@/components/common/Pagesheader";
import BrandSlider from "@/components/common/Slider";
import Image from "next/image";
import { Archivo } from "next/font/google";
const inter = Archivo({ subsets: ["latin"] });
import React, { useState } from "react";
import Footer from "@/components/common/Footer";
import StillConfused from "@/components/common/StillConfused";
import Accordion from "@/components/common/Accordion";
import { useTheme } from "next-themes";
const items = [
  {
    title: "Will you provide website layout about design?",
    content: "Content for section 1...",
  },
  {
    title: "How much does cost to design website?",
    content: "Content for section 2...",
  },
  {
    title: "How many revisions can i make the design?",
    content: "Content for section 3...",
  },
  {
    title: "Will you provide website layout about design?",
    content: "Content for section 4...",
  },
  {
    title: "How much does cost to design website?",
    content: "Content for section 5...",
  },
  {
    title: "How many revisions can i make the design?",
    content: "Content for section 6...",
  },
];

const itemsArabic = [
  {
    title: "هل ستقدم تصميمًا لتخطيط موقع الويب؟",
    content: "المحتوى للقسم 1...",
  },
  {
    title: "كم تكلف تصميم موقع الويب؟",
    content: "المحتوى للقسم 2...",
  },
  {
    title: "كم عدد المراجعات التي يمكنني إجراؤها على التصميم؟",
    content: "المحتوى للقسم 3...",
  },
  {
    title: "هل ستقدم تصميمًا لتخطيط موقع الويب؟",
    content: "المحتوى للقسم 4...",
  },
  {
    title: "كم تكلف تصميم موقع الويب؟",
    content: "المحتوى للقسم 5...",
  },
  {
    title: "كم عدد المراجعات التي يمكنني إجراؤها على التصميم؟",
    content: "المحتوى للقسم 6...",
  },
];

function ServiceDetailsNav({ parent, lang, direction }: any) {
  const { theme, setTheme } = useTheme();

  const data = parent.serviceDetails;
  return (
    <div dir={direction} className="bg-[#F2F6F5] dark:bg-[#061E2C]">
      <div className="">
        <Pagesheader
          parent={parent}
          type=""
          direction={direction}
          lang={lang}
          txt1={data.mainHeading}
          txt2={data.mainHeading2}
          img="/assets/about/OBJECTS3.png"
        />
        <div className="dark:bg-[#061E2C] bg-[#F2F6F5]">
          <div className=" grid w-full max-w-[1460px] grid-cols-12 mx-auto pt-[130px] pb-[30px]">
            <div className=" col-span-12 w-full lg:w-[792px] lg:h-[711px] lg:col-span-7 pe-5 col-start-2 text-white">
              <Image
                src="/detailbg.png"
                width={792}
                height={711}
                alt="image"
                className="col-span-12 w-full lg:w-[950px]  lg:col-span-7 min-[1600px]:col-start-1"
              />
            </div>
            <div className="col-span-12 lg:col-span-5 col-start-1 lg:col-start-8 ps-10">
              <div className="mt-10">
                <p className="uppercase dark:text-[#EFCB1C] text[20px] text-[#FF895B]">
                  {data.title}
                </p>
                <h3 className="lg:text-[47px] text-[30px] font-[500] leading-normal dark:text-white text-[#061E2C]">
                  {data.heading1}
                </h3>
                <h3 className="lg:text-[47px] text-[30px] font-[500] leading-normal dark:text-white text-[#061E2C]">
                  {data.heading12}
                </h3>
                <p className="text-[#434750] dark:text-[#989CAA] font-[400] text-[16px]">
                  {data.description}
                </p>
                <ul className="text-[#434750] dark:text-[#989CAA] mt-[40px] flex gap-[15px] flex-col">
                  <li className="flex items-center gap-3">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      className="fill-[#434750] dark:fill-[#989CAA]"
                    >
                      <path d="M10.0003 1.6665C5.40533 1.6665 1.66699 5.40484 1.66699 9.99984C1.66699 14.5948 5.40533 18.3332 10.0003 18.3332C14.5953 18.3332 18.3337 14.5948 18.3337 9.99984C18.3337 5.40484 14.5953 1.6665 10.0003 1.6665ZM13.5674 8.56692L9.40074 12.7336C9.27866 12.8557 9.11866 12.9165 8.95866 12.9165C8.79866 12.9165 8.63866 12.8557 8.51657 12.7336L6.43324 10.6503C6.18908 10.4061 6.18908 10.0107 6.43324 9.7665C6.67741 9.52234 7.07282 9.52234 7.31699 9.7665L8.95824 11.4078L12.6828 7.68317C12.927 7.439 13.3224 7.439 13.5666 7.68317C13.8107 7.92734 13.8112 8.32275 13.5674 8.56692Z" />
                    </svg>{" "}
                    {data.option1}
                  </li>
                  <li className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      className="fill-[#434750] dark:fill-[#989CAA]"
                    >
                      <path d="M10.0003 1.6665C5.40533 1.6665 1.66699 5.40484 1.66699 9.99984C1.66699 14.5948 5.40533 18.3332 10.0003 18.3332C14.5953 18.3332 18.3337 14.5948 18.3337 9.99984C18.3337 5.40484 14.5953 1.6665 10.0003 1.6665ZM13.5674 8.56692L9.40074 12.7336C9.27866 12.8557 9.11866 12.9165 8.95866 12.9165C8.79866 12.9165 8.63866 12.8557 8.51657 12.7336L6.43324 10.6503C6.18908 10.4061 6.18908 10.0107 6.43324 9.7665C6.67741 9.52234 7.07282 9.52234 7.31699 9.7665L8.95824 11.4078L12.6828 7.68317C12.927 7.439 13.3224 7.439 13.5666 7.68317C13.8107 7.92734 13.8112 8.32275 13.5674 8.56692Z" />
                    </svg>
                    {data.option3}
                  </li>
                  <li className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      className="fill-[#434750] dark:fill-[#989CAA]"
                    >
                      <path d="M10.0003 1.6665C5.40533 1.6665 1.66699 5.40484 1.66699 9.99984C1.66699 14.5948 5.40533 18.3332 10.0003 18.3332C14.5953 18.3332 18.3337 14.5948 18.3337 9.99984C18.3337 5.40484 14.5953 1.6665 10.0003 1.6665ZM13.5674 8.56692L9.40074 12.7336C9.27866 12.8557 9.11866 12.9165 8.95866 12.9165C8.79866 12.9165 8.63866 12.8557 8.51657 12.7336L6.43324 10.6503C6.18908 10.4061 6.18908 10.0107 6.43324 9.7665C6.67741 9.52234 7.07282 9.52234 7.31699 9.7665L8.95824 11.4078L12.6828 7.68317C12.927 7.439 13.3224 7.439 13.5666 7.68317C13.8107 7.92734 13.8112 8.32275 13.5674 8.56692Z" />
                    </svg>
                    {data.option2}
                  </li>
                  <li className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      className="fill-[#434750] dark:fill-[#989CAA]"
                    >
                      <path d="M10.0003 1.6665C5.40533 1.6665 1.66699 5.40484 1.66699 9.99984C1.66699 14.5948 5.40533 18.3332 10.0003 18.3332C14.5953 18.3332 18.3337 14.5948 18.3337 9.99984C18.3337 5.40484 14.5953 1.6665 10.0003 1.6665ZM13.5674 8.56692L9.40074 12.7336C9.27866 12.8557 9.11866 12.9165 8.95866 12.9165C8.79866 12.9165 8.63866 12.8557 8.51657 12.7336L6.43324 10.6503C6.18908 10.4061 6.18908 10.0107 6.43324 9.7665C6.67741 9.52234 7.07282 9.52234 7.31699 9.7665L8.95824 11.4078L12.6828 7.68317C12.927 7.439 13.3224 7.439 13.5666 7.68317C13.8107 7.92734 13.8112 8.32275 13.5674 8.56692Z" />
                    </svg>
                    {data.option5}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <ServiceDetails lang={lang} direction={direction} data={data} />

        <div className="text-center max-w-[1460px] mx-auto w-10/12 lg:pt-0">
          {theme === "light" ? (
            <Image
              src="/lightservice.png"
              alt="map"
              width={1000}
              height={1000}
              className="mx-auto w-full"
            />
          ) : (
            <Image
              src="/darkservice.png"
              alt="map"
              width={1000}
              height={1000}
              className="mx-auto w-full"
            />
          )}
        </div>
        <BrandSlider chnaged={true} color="#20D091" />
        <div>
          <div className="dark:bg-[#061E2C] bg-[#F2F6F5] py-[100px]">
            <div className="max-w-[1660px] w-11/12 lg:ms-auto max-lg:mx-auto">
              <div className="flex items-center gap-10 flex-wrap lg:flex-nowrap justify-between">
                <div className="w-full lg:w-1/3 pe-5">
                  <p className="uppercase dark:text-[#EFCB1C] text[20px] text-[#FF895B]">
                    {data.title3}
                  </p>
                  <h3 className="lg:text-[35px] min-[1600px]:text-[47px] text-[30px] font-[500] leading-normal dark:text-white text-[#061E2C]">
                    {data.heading3}
                    <span className="block"> {data.heading3II}</span>
                  </h3>

                  <div className="w-full lg:max-w-[345px]">
                    <div className="flex items-center justify-between mt-[50px] border-b border-t dark:border-[#FFFFFF40] py-[15px] border-[#061E2C26]">
                      <p className="dark:text-[#ffffff] text-[#061E2C] font-[400] text-[26px]">
                        {data.heading3Option1}
                      </p>
                      <h4
                        className={`${inter.className} opacity-20 !text-[36px] outlinee-bg`}
                      >
                        01
                      </h4>
                    </div>
                    <div className="flex items-center justify-between border-b  dark:border-[#FFFFFF40] py-[15px] border-[#061E2C26]">
                      <p className="dark:text-[#ffffff] text-[#061E2C] font-[400] text-[26px]">
                        {data.heading3Option2}
                      </p>
                      <h4
                        className={`${inter.className} opacity-20 !text-[36px] outlinee-bg`}
                      >
                        02
                      </h4>
                    </div>
                    <div className="flex items-center justify-between border-b dark:border-[#FFFFFF40] py-[15px] border-[#061E2C26]">
                      <p className="dark:text-[#ffffff] text-[#061E2C] font-[400] text-[26px]">
                        {data.heading3Option3}
                      </p>
                      <h4
                        className={`${inter.className} opacity-20 !text-[36px] outlinee-bg`}
                      >
                        03
                      </h4>
                    </div>
                    <div className="flex items-center justify-between border-b  dark:border-[#FFFFFF40] py-[15px] border-[#061E2C26]">
                      <p className="dark:text-[#ffffff] text-[#061E2C] font-[400] text-[26px]">
                        {data.heading3Option4}
                      </p>
                      <h4
                        className={`${inter.className} opacity-20 !text-[36px] outlinee-bg`}
                      >
                        04
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-2/3 ">
                  <Image
                    src="/leftrightbg.png"
                    width={990}
                    height={531}
                    className={`w-full ${
                      direction === "ltr"
                        ? "rounded-l-[30px] max-lg:rounded-[30px]"
                        : "rounded-r-[30px]"
                    } ms-auto`}
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full max-w-[1460px] px-5 mx-auto pt-[30px] pb-[80px] ">
          <div className="text-center pb-[20px] lg:pb-[40px]">
            <p className="uppercase dark:text-[#EFCB1C] text[20px] text-[#FF895B]">
              {data.title4}
            </p>
            <h3 className="lg:text-[47px] text-[30px] font-[500] mb-0 leading-normal dark:text-white text-[#061E2C]">
              {data.heading4}
            </h3>
          </div>
          <div className="accordionBorder border border-[#989CAA] dark:border-[#FFFFFF40] p-[20px] lg:py-[80px] lg:px-[100px]">
            <div className="relative hidden lg:block">
              <div className="absolute right-[70px]">
                <Image
                  className="w-[421px] h-[424px]"
                  width={421}
                  height={424}
                  src={"/accordionBackground.png"}
                  alt="image"
                />
              </div>
            </div>
            <Accordion items={lang == "en" ? items : itemsArabic} />
          </div>
        </div>
        <StillConfused lang={lang} direction={direction} parent={parent} />
        <Footer lang={lang} parent={parent} direction={direction} />
      </div>
    </div>
  );
}

export default ServiceDetailsNav;
