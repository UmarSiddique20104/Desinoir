"use client";
import React, { useState } from "react";
import "./project.css";
import { useTheme } from "next-themes";
import activeTabsIcon from "../../../../public/activeTabsIcon.svg";
import Link from "next/link";
import Pagesheader from "@/components/common/Pagesheader";
import BrandDesigns from "@/components/common/BrandDesigns";
import Footer from "@/components/common/Footer";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/components/redux/store";
interface NavItem {
  title: string;
}
interface WorkItem {
  types?: string;
}

const typeDisplayMap: { [key: string]: string } = {
  branding: "Branding",
  uiux: "UI/UX Design",
  motiongraphic: "Motion Graphic Designing",
  graphicdesign: "Graphic Designing",
};
const Projects = ({ parent, lang, direction }: any) => {
  const { theme } = useTheme();
  const [selectedTab, setSelectedTab] = useState(0);
  const [visibleItems, setVisibleItems] = useState(4);
  const workHeader = useSelector(
    (state: RootState) => state?.data?.header?.data?.[0]?.headerTitle || " "
  );
  const ourWork: WorkItem[] = useSelector(
    (state: RootState) => state.data.ourwork?.data
  );

  const navItems: NavItem[] = [
    { title: "All" },
    ...Array.from(
      new Set(
        ourWork
          ?.map((item: any) => item.types?.trim().toLowerCase())
          .filter(Boolean)
      )
    ).map((type) => ({ title: type })),
  ];

  const filteredItems =
    selectedTab === 0
      ? ourWork
      : ourWork.filter(
          (item: any) => item?.types === navItems[selectedTab]?.title
        );

  const displayTypeName = (type: string) => {
    return typeDisplayMap[type] || "";
  };

  const handleLoadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 4);
  };

  return (
    <div dir={direction}>
      <div>
        <Pagesheader
          direction={direction}
          type="ourWork"
          lang={lang}
          parent={parent}
          txt1={workHeader}
          txt2={workHeader}
          img="/OBJECTS4.png"
        />
        <div className="bg-[#F2F6F5] dark:bg-[#061E2C] h-full pt-[50px] lg:pt-[130px] ">
          <div className="max-w-[1460px] md:w-10/12 mx-auto max-md:px-5 sm:h-auto">
            <div className="">
              <div className="">
                <div className="flex flex-col gap-y-2 full">
                  <div
                    className="p-1 justify-start max-sm:justify-start 
                      max-md:justify-start max-lg:justify-start col-span-8
                      max-md:col-span-12  max-md:pt-[20px] max-lg:pt-[20px] max-lg:col-span-12  rounded-xl flex 
                       flex-wrap gap-5 font-[500] text-white"
                  >
                    {navItems.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedTab(index)}
                        className={`rounded-[30px] border-2 focus:border-none dark:border-[#FFFFFF14] py-[14.5px] px-[26px] text-[16px] hover:text-white hover:bg-[#02111B] text-[#989CAA] dark:text-white text-start focus:bg-[#02111B] focus:bg-[#02111B]-400 
                        ${
                          selectedTab === index
                            ? "bg-[#02111B] text-white border-[0px]"
                            : "dark:text-white text-[#989CAA]"
                        }`}
                      >
                        {item.title === "All"
                          ? item.title
                          : displayTypeName(item.title.toLowerCase())}
                      </button>
                    ))}
                  </div>

                  <div
                    className={`${
                      filteredItems?.length === 1
                        ? "sm:column-1 w-fit max-lg:w-full "
                        : "max-lg:columns-1 lg:columns-2"
                    } pt-[80px] mb-[70px]`}
                  >
                    {filteredItems
                      ?.slice(0, visibleItems)
                      ?.map((item: any, index: number) => (
                        <div key={index} className="">
                          <Link
                            href={`/${lang}/our-work/${item.title.replace(
                              /\s+/g,
                              "-"
                            )}-${item._id}`}
                            passHref
                            className="group"
                          >
                            <div className="relative">
                              <Image
                                quality={100}
                                className="lg:w-[680px] xl:w-full w-full custom-fade transform transition-transform ease-in-out duration-100 h-auto object-cover rounded-[30px]"
                                src={item.primaryImage}
                                width={1000}
                                height={2000}
                                alt={item.title}
                              />
                              <div className="absolute custom-fade transition-transform max-sm:hidden ease-in-out duration-100 !-bottom-[3.125rem] right-[70px] opacity-0 group-hover:opacity-100">
                                <Image
                                  width={175}
                                  height={2000}
                                  src={activeTabsIcon.src}
                                  alt={activeTabsIcon.src}
                                />
                              </div>
                            </div>
                            <h1 className="text-[24px] lg:mt-[60px] mt-[30px] max-sm:[18px] max-md:text-[20px]  font-[500px] dark:text-[#DEE9EE] text-[#989CAA] uppercase tracking-[0.5px] leading-[120%]">
                              {item.title}
                            </h1>
                            <p className="text-[50px]  max-sm:text-[30px] max-md:text-[40px]  font-[500px] dark:text-[#FFF] text-[#061E2C] leading-[120%] group-hover:text-[#20D091]">
                              {item.subtitle}
                            </p>
                            <div className="lg:mt-[90px]  cursor-pointer group mt-[35px] transition-opacity duration-500 ease-in-out"></div>
                          </Link>
                        </div>
                      ))}
                  </div>

                  {filteredItems?.length > visibleItems && (
                    <div className="flex justify-center lg:my-[35px] my-[40px]">
                      <button type="button" onClick={handleLoadMore}>
                        <p className="relative z-20 uppercase text-[18px] font-[400] inline-flex items-center gap-4 group dark:text-[#ffffff] text-[#061E2C]">
                          {parent.ourProject?.loadMore}
                          <span
                            className={`${
                              direction == "ltr"
                                ? "group-hover:translate-x-[118px] left-[-10px]"
                                : "group-hover:translate-x-[-85px] right-[-10px]"
                            } z-[-1] rounded-full absolute transition-all duration-1000 w-[40px] h-[40px] dark:bg-[#FFFFFF14] bg-[#ECECEC]`}
                          ></span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="14"
                            viewBox="0 0 18 14"
                            className={`${
                              direction == "ltr" ? "" : "rotate-180"
                            } opacity-0 group-hover:opacity-100 transition-all duration-1000 dark:fill-white fill-[#061E2C]`}
                          >
                            <path d="M1.08317 8.04154H14.4019L10.9717 11.4717C10.5649 11.8785 10.5649 12.5379 10.9717 12.9447C11.1754 13.1483 11.4415 13.2499 11.7082 13.2499C11.9748 13.2499 12.241 13.1483 12.4446 12.9447L17.653 7.73633C17.8483 7.54154 17.9582 7.27643 17.9582 6.99987C17.9582 6.72331 17.8483 6.45872 17.653 6.26341L12.4446 1.05508C12.0379 0.648307 11.3785 0.648307 10.9717 1.05508C10.5649 1.46185 10.5649 2.12122 10.9717 2.52799L14.4019 5.9582H1.08317C0.508171 5.9582 0.0415039 6.42487 0.0415039 6.99987C0.0415039 7.57487 0.508171 8.04154 1.08317 8.04154Z" />
                          </svg>
                        </p>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer parent={parent} lang={lang} direction={direction} />
    </div>
  );
};

export default Projects;
