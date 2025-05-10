"use client"
import Link from "next/link";
import React from "react";

function ShareIdea({ parent, lang, direction, footer }: any) {
  return (
    <div className="lg:pb-[130px] pb-[50px] px-5">
      <div className="text-center max-w-[700px] w-full mx-auto">
        <h4 className="lg:text-[90px] text-[30px] md:text-[50px] font-[100] leading-[113%] dark:text-white text-[#061E2C]">
          <h2 className="font-[500]">
            {/* {parent?.footer?.heading} */}
            {footer?.greetingTitle}
          </h2>

        </h4>
        <p className="text-[18px] md:text-[20px] lg:text-[24px] font-[400] my-[30px] text-[#989CAA]">
          {footer?.greetingDescription}
        </p>
      </div>
      <div className="text-center">
        <Link
          href={`/${lang}/contact-us`}
          className="  relative uppercase text-[18px] font-[400] inline-flex items-center gap-4 group"
        >
          <p className="relative z-20 dark:text-[#ffffff] text-[#061E2C]">
            {parent?.footer?.btn}
          </p>
          <span
            className={`${direction == "ltr"
              ? "group-hover:translate-x-[155px] left-[-10px]"
              : "group-hover:translate-x-[-103px] right-[-10px]"
              } rounded-full transition-all duration-1000 absolute z-[0] w-[40px] h-[40px] bg-[#197BFF]`}
          ></span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`${direction == "ltr" ? "" : "rotate-[180deg]"
              } fill-[#000d1e] opacity-0 group-hover:opacity-100 transition-all duration-1200 dark:fill-white relative z-10 `}
            width="18"
            height="14"
            viewBox="0 0 18 14"
            fill="none"
          >
            <path d="M1.08317 8.04154H14.4019L10.9717 11.4717C10.5649 11.8785 10.5649 12.5379 10.9717 12.9447C11.1754 13.1483 11.4415 13.2499 11.7082 13.2499C11.9748 13.2499 12.241 13.1483 12.4446 12.9447L17.653 7.73633C17.8483 7.54154 17.9582 7.27643 17.9582 6.99987C17.9582 6.72331 17.8483 6.45872 17.653 6.26341L12.4446 1.05508C12.0379 0.648307 11.3785 0.648307 10.9717 1.05508C10.5649 1.46185 10.5649 2.12122 10.9717 2.52799L14.4019 5.9582H1.08317C0.508171 5.9582 0.0415039 6.42487 0.0415039 6.99987C0.0415039 7.57487 0.508171 8.04154 1.08317 8.04154Z" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default ShareIdea;
