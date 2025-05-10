"use client";
import React from "react";
import ShareIdea from "./ShareIdea";
import LogoImage from "./LogoImage";
import BackToTop from "./BackToTop";
import Link from "next/link";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";

function Footer({ welnote, parent, direction, lang }: any) {
  const footer = useSelector((state: RootState) => state.data.footer?.data);

  return (
    <div className="dark:bg-[#061E2C]  bg-[#F2F6F5]  pb-[45px] relative ">
      {welnote && (
        <div className="lg:pt-[130px] pt-[50px]">
          <ShareIdea parent={parent} direction={direction} lang={lang} footer={footer}  />
        </div>
      )}
      <div className="relative max-w-[1460px] max-lg:w-11/12 w-[90%]  min-xl:w-10/12 mx-auto  grid grid-cols-12 border dark:border-[#FFFFFF40] border-[#061E2C26] rounded-[30px]">
        <LogoImage parent={parent} direction={direction} lang={lang} footer={footer} />
        <div className="grid grid-cols-12 col-span-12 lg:col-span-8">
          <div className="col-span-6 lg:col-span-4 h-full  pt-[80px] pb-[50px]">
            <div className="flex justify-center items-center">
              <div>
                <p className="mb-[20px] mx-0 text-[18px] font-[500] dark:text-white text-[#061E2C]">
                  {parent?.footer?.MainPage}
                </p>
                <ul className="text-justify">
                  <li className="text-[#989CAA] hover:dark:text-[white] hover:text-[#061E2C] transition-all duration-300 mb-[10px]">
                    <Link href={`/${lang}`}>{parent?.footer?.Home}</Link>
                  </li>
                  <li className="text-[#989CAA] hover:dark:text-[white] hover:text-[#061E2C] transition-all duration-300 mb-[10px]">
                    <Link href={`/${lang}/about`}>
                      {parent?.footer?.About}
                    </Link>
                  </li>
                  <li className="text-[#989CAA] hover:dark:text-[white] hover:text-[#061E2C] transition-all duration-300 mb-[10px]">
                    <Link href={`/${lang}/our-services`}>
                      {parent?.footer?.Services}
                    </Link>
                  </li>

                  <li className="text-[#989CAA]  hover:text-[#061E2C]  hover:dark:text-[white] transition-all duration-300 mb-[10px]">
                    <Link href={`/${lang}/our-work`}>
                      {parent?.footer?.OurProjects}
                    </Link>
                  </li>
                  <li className="text-[#989CAA] hover:dark:text-[white] hover:text-[#061E2C]  transition-all duration-300 mb-[10px]">
                    <Link href={`/${lang}/article`}>
                      {parent?.footer?.Articles}
                    </Link>
                  </li>
                  <li className="text-[#989CAA] hover:dark:text-[white] hover:text-[#061E2C]  transition-all duration-300 mb-[10px]">
                    <Link href={`/${lang}/ui-store`}>
                      {parent?.footer?.UIStore}
                    </Link>
                  </li>
                  <li className="text-[#989CAA] hover:dark:text-[white] hover:text-[#061E2C]  transition-all duration-300 mb-[10px]">
                    <Link href={`/${lang}/our-team`}>
                      {parent?.footer?.OurTeam}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-6 lg:col-span-4 h-full pt-[80px] pb-[50px]">
            <div className="flex justify-center items-center">
              <div>
                <p className="mb-[20px] mx-0 text-[18px] font-[500] hover:dark:text-[white] hover:text-[#061E2C] transition-all duration-300 dark:text-white text-start text-[#061E2C]">
                  {parent?.footer?.Services}
                </p>
                <ul className="text-justify">
                  <li className="text-[#989CAA] hover:dark:text-[white] hover:text-[#061E2C] transition-all duration-300 mb-[10px]">
                    <Link href={`/${lang}/services/ui-ux-design-services-in-texas`}>
                      {parent?.footer?.uiux}
                    </Link>
                  </li>
                  <li className="text-[#989CAA] hover:dark:text-[white] hover:text-[#061E2C] transition-all duration-300 mb-[10px]">
                    <Link href={`/${lang}/services/graphic-designer-in-texas`}>
                      {parent?.footer?.graphics}
                    </Link>
                  </li>
                  <li className="text-[#989CAA] hover:dark:text-[white] hover:text-[#061E2C] transition-all duration-300 mb-[10px]">
                    <Link href={`/${lang}/services/motion-graphics-design-services-in-texas`}>
                      {parent?.footer?.motionGraphics}
                    </Link>
                  </li>
                  <li className="text-[#989CAA] hover:dark:text-[white] hover:text-[#061E2C] transition-all duration-300 mb-[10px]">
                    <Link href={`/${lang}/services/business-branding-services-in-texas`}>
                      {parent?.footer?.Branding}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4 h-full lg:pt-[80px] lg:pb-[50px]">
            <div className="flex justify-between items-start lg:justify-center lg:flex-col">
              <div className="flex max-lg:ps-3 w-6/12 lg:w-full items-center justify-center lg:justify-start">
                <div className="">
                  <p className="mb-[20px] text-start mx-0 text-[18px] font-[500] dark:text-white text-[#061E2C]">
                    {parent?.footer?.OurEmail}
                  </p>
                  <ul className="text-justify max-w-[200px]">
                    <li className="text-[#989CAA] mb-[10px]">
                      <Link
                        className="text-[#989CAA] hover:dark:text-[white] hover:text-[#061E2C] transition-all duration-300"
                        href={`tel:${footer?.contactInfo?.phone?.includes('(') || footer?.contactInfo?.phone?.includes(')') || footer?.contactInfo?.phone?.includes(' ') ? footer.contactInfo.phone.replace(/[()\s]/g, '') : footer?.contactInfo?.phone}`}>
                        {footer?.contactInfo?.phone}
                      </Link>
                    </li>


                    <li className="text-[#989CAA] mb-[10px]">
                      <Link
                        className="text-[#989CAA] hover:dark:text-[white] hover:text-[#061E2C] transition-all duration-300 "
                        href={`mailto:${footer?.contactInfo?.email}`}>
                        {footer?.contactInfo?.email}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex max-lg:justify-center w-6/12 lg:w-full">
                <div className="flex items-start justify-start flex-col">
                  <p className="mb-[20px] text-start lg:mt-[40px] mx-0 text-[18px] font-[500] dark:text-white text-[#061E2C] ">
                    {parent?.footer?.AddressTitle}
                  </p>
                  <ul className="lg:text-start lg:pe-2 max-lg:w-[130px] space-y-[10px]">
                    <li className="text-[#989CAA] hover:dark:text-[white] hover:text-[#061E2C] transition-all duration-300  w-full">
                      <Link className="tracking-normal text-[16px]" href="#">
                        {footer?.contactInfo?.address}
                      </Link>
                    </li>
                    {/* <li className="text-[#989CAA] hover:dark:text-[white] hover:text-[#061E2C] transition-all duration-300  w-full">
                      <Link className="tracking-normal text-[16px]" href="#">
                        {parent?.footer?.Address2}
                      </Link>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 border-t-[1px] py-5  dark:border-[#FFFFFF40] border-[#061E2C26]">
            <div className="flex items-center justify-between px-2 sm:px-5 gap-1 lg:px-20 h-full">
              <p className=" mb-0 lg:ps-5 text-[#989CAA] max-w-[70%]">
                ©{footer?.rights} Desinoir Design Agency, All rights reserved.
              </p>
              <p className=" mb-0 text-[#989CAA]">
                {parent?.footer?.Powered}&nbsp;
                <Link
                  href="https://www.virtuenetz.com/"
                  target="_blank"
                  title="Design and Development Agency"
                >
                  <span className="dark:text-white text-[#061E2C] font-[500]">
                    VirtueNetz
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <BackToTop parent={parent} direction={direction} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
