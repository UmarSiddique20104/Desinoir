"use client";
import React, { useEffect } from "react";

function BackToTop({ parent, direction }: any) {
  const HandleBacktoTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="absolute group w-[45px] z-999 bottom-[100px] right-[-52px] cursor-pointer btn-backto-top">
      <div
        onClick={HandleBacktoTop}
        className="flex flex-col gap-[35px] justify-center items-center"
      >
        <span className=" div-to-move absolute bottom-[-60px] left-[50%] translate-x-[-50%] w-[42px] h-[42px] dark:bg-[#FFFFFF14] bg-[#ECECEC] rounded-full"></span>
        <div className="flex items-center w-[42px] h-[42px] justify-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 18"
            className=" dark:fill-white w-[20px] opacity-0 group-hover:opacity-100 transition-all duration-1000 h-[20px] relative z-60 fill-[#061E2C]"
          >
            <path d="M8.04105 16.9163L8.04105 3.59759L11.4713 7.0278C11.878 7.43457 12.5374 7.43457 12.9442 7.0278C13.1478 6.82415 13.2494 6.55801 13.2494 6.29134C13.2494 6.02467 13.1478 5.75853 12.9442 5.55488L7.73584 0.34655C7.54105 0.151237 7.27594 0.0413415 6.99938 0.0413415C6.72282 0.0413415 6.45823 0.151237 6.26292 0.34655L1.05459 5.55488C0.647818 5.96165 0.647819 6.62103 1.05459 7.0278C1.46136 7.43457 2.12073 7.43457 2.52751 7.0278L5.95771 3.59759L5.95771 16.9163C5.95771 17.4913 6.42438 17.958 6.99938 17.958C7.57438 17.958 8.04105 17.4913 8.04105 16.9163Z" />
          </svg>
        </div>
        <p
          className={`rotate-[-90deg] ${
            direction == "rtl" ? "text-left" : "text-left"
          } uppercase w-[120px] mb-0 dark:text-[#989CAA] text-[#061E2C]`}
        >
          {parent?.footer?.BackToTop}
        </p>
      </div>
    </div>
  );
}

export default BackToTop;
