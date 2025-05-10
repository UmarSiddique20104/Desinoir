import Image from "next/image";
import React from "react";
import { Bai_Jamjuree } from "next/font/google";
const inter = Bai_Jamjuree({ subsets: ["latin"], weight: "500" });
function ChooseUs({ parent, lang }: any) {
  return (
    <div className="dark:bg-[#061E2C] bg-[#F2F6F5] ">
      <div className="max-w-[1460px] md:w-10/12 max-md:px-5 mx-auto">
        <div className="flex items-center gap-[50px] flex-wrap lg:flex-nowrap justify-between">
          <div className="w-full lg:w-1/2 relative">
            <Image
              src={parent?.whyDesignoirImage}
              width={500}
              height={500}
              className="w-full"
              alt="image"
            />
            <div
              className={`${
                lang === "en" ? "right-[-10%]" : "left-[-10%]"
              } absolute hidden lg:block bottom-[12%] `}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="148"
                height="148"
                viewBox="0 0 148 148"
              >
                <circle
                  cx="74"
                  cy="74"
                  r="74"
                  className="dark:fill-[#061E2C] fill-[#F2F6F5] "
                />
                <circle
                  cx="74.0002"
                  cy="74.0002"
                  r="57.4328"
                  className="dark:fill-[#02111B] fill-[#DEE9EE] "
                />
                <path
                  d="M101.613 61.0626V84.5641L63.4883 46.4395H86.9956L101.613 61.0626Z"
                  fill="#20D091"
                />
                <path
                  d="M101.52 85.4809L85.4633 101.537C85.1152 101.886 84.6509 102.077 84.1635 102.077H46.4219V64.5385C46.4219 63.5636 46.8107 62.6236 47.5012 61.933L63.0644 46.4395V85.4809H101.52Z"
                  fill="#197BFF"
                />
              </svg>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="uppercase dark:text-[#EFCB1C] text[20px] text-[#FF895B]">
              {parent?.title}
            </h2>
            <h3 className="lg:text-[47px] text-[30px] font-[500] leading-normal mb-0 dark:text-white text-[#061E2C]">
              {parent?.subtitle}
            </h3>
            {/* <h3 className="lg:text-[47px] text-[30px]  font-[500] leading-[50px] dark:text-white text-[#061E2C]">
              {parent?.aboutPage?.heading2}
            </h3> */}
            <div className="w-full lg:max-w-[345px] lg:ms-[70px]">
              <div className="flex items-center justify-between mt-[20px] lg:mt-[50px] border-b border-t dark:border-[#FFFFFF40] py-[10px] lg:py-[15px] border-[#061E2C26]">
                <p className="dark:text-[#ffffff] text-[#061E2C] font-[500] text-[26px]">
                  {parent?.flow1}
                </p>
                <h4
                  className={`${inter.className} opacity-80 text-[36px] text-[#FFFFFF] outlinee-bg`}
                >
                  01
                </h4>
              </div>
              <div className="flex items-center justify-between border-b  dark:border-[#FFFFFF40] py-[15px] border-[#061E2C26]">
                <p className="dark:text-[#ffffff] text-[#061E2C] font-[500] text-[26px]">
                  {parent?.flow2}
                </p>
                <h4
                  className={`${inter.className} opacity-80 text-[36px] text-[#FFFFFF]  outlinee-bg`}
                >
                  02
                </h4>
              </div>
              <div className="flex items-center justify-between border-b dark:border-[#FFFFFF40] py-[15px] border-[#061E2C26]">
                <p className="dark:text-[#ffffff] text-[#061E2C] font-[500] text-[26px]">
                  {parent?.flow3}
                </p>
                <h4
                  className={`${inter.className} opacity-80  text-[#FFFFFF] text-[36px] outlinee-bg`}
                >
                  03
                </h4>
              </div>
              <div className="flex items-center justify-between border-b  dark:border-[#FFFFFF40] py-[15px] border-[#061E2C26]">
                <p className="dark:text-[#ffffff] text-[#061E2C] font-[500] text-[26px]">
                  {parent?.flow4}
                </p>
                <h4
                  className={`${inter.className} opacity-80 text-[36px] text-[#FFFFFF] outlinee-bg`}
                >
                  04
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseUs;
