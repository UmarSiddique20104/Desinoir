import Link from "next/link";
import React from "react";

function StillConfused({ parent, direction, lang }: any) {

  return (
    <div>
      <div className="text-center flex flex-col gap-[30px]">
        <div className="flex flex-col gap-[30px]">
          <h2 className="lg:text-[90px] text-[30px] leading-[113%] font-[500] dark:text-white text-[#061E2C]">
            {parent.confused.Heading1}
            <h2 className="block font-[100]"> {parent.confused.Heading2}</h2>
          </h2>
          <p className="text-[#989CAA] max-lg:px-4 leading-[33.6px] font-[400] text-[24px] max-w-[768px] mx-auto">
            {parent.confused.description}
          </p>
        </div>
        <div className="text-center">
          <Link
            href={`/${lang}/contact-us`}
            className="  relative uppercase  text-[18px] font-[400] inline-flex items-center gap-4 group "
          >
            <p className="relative z-20 uppercase dark:text-[#ffffff] text-[#061E2C]">
              {parent.confused.btn}
            </p>
            <span
              className={`${direction == "ltr"
                  ? "group-hover:translate-x-[125px] left-[-10px]"
                  : "group-hover:translate-x-[-65px] right-[-10px]"
                } rounded-full absolute top-[-7px] z-[0] transition-all duration-1000 left-[-5px] w-[40px] h-[40px] bg-[#197BFF]`}
            ></span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`${direction == "ltr" ? "" : "rotate-[180deg]"
                } fill-[#000d1e] group-hover:fill-[#ffffff] transition-all duration-1200 dark:fill-white relative z-10 `}
              width="18"
              height="14"
              viewBox="0 0 18 14"
            >
              <path d="M1.08317 8.04154H14.4019L10.9717 11.4717C10.5649 11.8785 10.5649 12.5379 10.9717 12.9447C11.1754 13.1483 11.4415 13.2499 11.7082 13.2499C11.9748 13.2499 12.241 13.1483 12.4446 12.9447L17.653 7.73633C17.8483 7.54154 17.9582 7.27643 17.9582 6.99987C17.9582 6.72331 17.8483 6.45872 17.653 6.26341L12.4446 1.05508C12.0379 0.648307 11.3785 0.648307 10.9717 1.05508C10.5649 1.46185 10.5649 2.12122 10.9717 2.52799L14.4019 5.9582H1.08317C0.508171 5.9582 0.0415039 6.42487 0.0415039 6.99987C0.0415039 7.57487 0.508171 8.04154 1.08317 8.04154Z" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default StillConfused;
