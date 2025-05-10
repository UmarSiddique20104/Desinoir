"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchHeader } from "../Utilts/Helper";
import { setHeader } from "../redux/slicedata";
import { usePathname } from "next/navigation";

function Team({ bgchange, parent, direction, TeamMemnbers, btn, lang }: any) {
  const pathName = usePathname();
  const dispatch = useDispatch();
  const homeTeamSection = useSelector(
    (state: RootState) => state.data.teamMember
  );
  const teamTitle = useSelector(
    (state: RootState) => state.data.teamTitle
  );
  const [show, setShow] = useState(false);
  const [newIndex, setIndex] = useState();
  const handleClick = async (type: any) => {
    try {
      const header = await fetchHeader(lang, type);
      dispatch(setHeader(header));
    } catch (error) {
      console.error("Failed to fetch FAQs:", error);
    }
  };
  return (
    <div
      dir={direction}
      className={`${
        bgchange
          ? "dark:bg-[#061E2C] bg-[#F2F6F5]"
          : "dark:bg-[#02111B] bg-[#061E2C]"
      } pt-[50px] relative z-[1] lg:pt-[90px] pb-[50px] lg:pb-[90px] `}
    >
      <div className="mx-auto max-w-[1460px] md:w-10/12">
        <Image
          width={500}
          height={400}
          className="absolute top-40 left-0 hidden z-[-1] h-auto w-[100%] max-w-[500px] lg:block"
          src="/teambg.png"
          alt="image"
        />
        <div className="max-w-[1460px]  mx-auto">
          <div className={`text-center ${bgchange ? "hidden" : "block"}`}>
            <h2 className="uppercase text-[#EFCB1C] text-[20px]">
              {teamTitle?.data[0]?.title}
            </h2>
            <h3
              className={`lg:text-[50px] text-[30px] px-5 font-[500] leading-normal ${
                bgchange ? "hidden " : "text-white"
              } flex flex-wrap justify-center items-center gap-1`}
            >
              {teamTitle?.data[0]?.subTitle}
              <Image
                // src="/assets/home/fire.png"
                src={teamTitle?.data[0]?.emoji}
                width={60}
                height={60}
                alt="image"
              />
            </h3>
          </div>
          <div className="lg:grid lg:grid-cols-3 flex flex-wrap  items-center justify-center px-5 lg:px-0 gap-[50px] ">
            {TeamMemnbers?.map((item: any, index: any) => {
              return (
                <div
                  key={item._id}
                  className={`max-mad:w-full group  max-w-[453px] group hover:transition-all cursor-pointer duration-300 border ${
                    bgchange ? "border-[#061E2C26]" : "border-[#FFFFFF40]"
                  } dark:border-[#434750] rounded-[30px]`}
                >
                  <div className="text-center w-full h-full flex items-center justify-center p-[30px] lg:p-[50px] mx-auto">
                    <Image
                      src={item.image}
                      className="rounded-full grayscale group-hover:grayscale-0"
                      alt="image"
                      width={300}
                      height={300}
                    />
                  </div>
                  <div
                    className={`w-full group-hover:bg-[#197bff] transition-all duration-300 group-hover:border group-hover:border-[#197bff] text-center p-[10px] lg:p-[30px] border ${
                      bgchange ? "border-[#061E2C26]" : "border-[#434750]"
                    } dark:border-[#434750] rounded-[30px]`}
                  >
                    <p
                      className={`${
                        bgchange
                          ? "text-[#061E2C] dark:text-[#ffffff]"
                          : "text-[#ffffff]"
                      }  group-hover:text-white font-[500] text-[20px] xl:text-[30px]`}
                    >
                      {item.name}
                    </p>
                    <p
                      className={`${
                        bgchange
                          ? "text-[#061E2C] dark:text-[#DEE9EE]"
                          : "text-[#DEE9EE]"
                      } group-hover:text-white font-[500] text-[14px] lg:text-[16px] uppercase`}
                    >
                      {item?.designation}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {btn && (
          <div className="text-center" onClick={() => handleClick("team")}>
            {/* <Link href="/our-team"> */}
            <Link href={`/${lang}/our-team`}>
              <p className=" relative uppercase mt-[80px] text-[18px] font-[400] inline-flex items-center gap-4 group text-[#ffffff]">
                {parent?.teamMembersSection?.ViewAll}
                <span
                  className={`${
                    direction == "ltr"
                      ? "group-hover:translate-x-[100px] left-[-10px]"
                      : "group-hover:translate-x-[-88px] right-[-10px]"
                  } rounded-full absolute transition-all duration-1000 w-[40px] h-[40px] bg-[#FFFFFF14]`}
                ></span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="14"
                  viewBox="0 0 18 14"
                  className={`${direction == "ltr" ? "" : "rotate-180"}`}
                  fill="none"
                >
                  <path
                    d="M1.08317 8.04154H14.4019L10.9717 11.4717C10.5649 11.8785 10.5649 12.5379 10.9717 12.9447C11.1754 13.1483 11.4415 13.2499 11.7082 13.2499C11.9748 13.2499 12.241 13.1483 12.4446 12.9447L17.653 7.73633C17.8483 7.54154 17.9582 7.27643 17.9582 6.99987C17.9582 6.72331 17.8483 6.45872 17.653 6.26341L12.4446 1.05508C12.0379 0.648307 11.3785 0.648307 10.9717 1.05508C10.5649 1.46185 10.5649 2.12122 10.9717 2.52799L14.4019 5.9582H1.08317C0.508171 5.9582 0.0415039 6.42487 0.0415039 6.99987C0.0415039 7.57487 0.508171 8.04154 1.08317 8.04154Z"
                    fill="white"
                  />
                </svg>
              </p>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Team;
