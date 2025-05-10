// components/Accordion2Custom.js
import { useState } from "react";
import { Archivo } from "next/font/google";
import { Bai_Jamjuree } from "next/font/google";
const inter = Bai_Jamjuree({ subsets: ["latin"], weight: "500" });

const Accordion2 = ({ items, service }: any) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" ">
      <hr className="h-px  bg-gray-200 border-0 dark:bg-[#FFFFFF14]" />
      {service?.ourProcessData?.map((item: any, index: number) => (
        <div key={index}>
          <div key={index} className="py-[6px]  lg:py-[20px]">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => handleToggle(index)}
            >
              <div className="flex gap-2 items-center">
                <div
                  className={` ${inter.className} ${openIndex === index
                      ? "text-[#20D091]  opacity-100 dark:text-white  "
                      : "text-slate-700 opacity-50 "
                    } !text-[36px] `}
                // outlinee-bg
                >
                  0{index + 1}
                </div>

                <div
                  className={`text-[18px] font-medium lg:text-[22px] ${openIndex === index
                      ? "text-[#20D091]"
                      : "text-[#061E2C] dark:text-[#fff]"
                    }`}
                >
                  {item?.process}
                </div>
              </div>
              <div>
                {openIndex === index ? (
                  <svg
                    width="27"
                    height="16"
                    viewBox="0 0 27 16"
                    className="fill-[#061E2C] w-[20px] h-[12px] dark:fill-slate-600"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M24.1999 14.1591L12.8668 3.52069L2.22838 14.8538C1.75593 15.3571 0.96507 15.3821 0.461764 14.9096C-0.0415416 14.4372 -0.0665448 13.6463 0.405912 13.143L11.8997 0.898694C12.1363 0.646719 12.4516 0.514813 12.7715 0.504701C13.0913 0.494589 13.4144 0.60631 13.6664 0.842841L25.9107 12.3367C26.414 12.8091 26.439 13.6 25.9665 14.1033C25.4941 14.6066 24.7032 14.6316 24.1999 14.1591Z" />
                  </svg>
                ) : (
                  <svg
                    width="27"
                    height="16"
                    viewBox="0 0 27 16"
                    className="fill-[#061E2C] w-[20px] h-[12px] dark:fill-slate-600"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M24.9911 0.366094L13.9998 11.3573L3.00859 0.366094C2.52047 -0.122031 1.72922 -0.122031 1.24109 0.366094C0.752969 0.854219 0.752969 1.64547 1.24109 2.13359L13.1161 14.0086C13.3605 14.253 13.6798 14.3748 13.9998 14.3748C14.3198 14.3748 14.6392 14.253 14.8836 14.0086L26.7586 2.13359C27.2467 1.64547 27.2467 0.854219 26.7586 0.366094C26.2705 -0.122031 25.4792 -0.122031 24.9911 0.366094Z" />
                  </svg>
                )}
              </div>
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-[200px] py-2" : "max-h-0 py-0"
                }`}
            >
              {openIndex === index && (
                <div className="mt-2  text-[#061E2C] dark:text-[#989CAA] text-[15px]">
                  {item?.explain}
                </div>
              )}
            </div>
          </div>
          <hr className="h-px bg-gray-200 border-0 dark:bg-[#FFFFFF14]" />
        </div>
      ))}
    </div>
  );
};

export default Accordion2;
