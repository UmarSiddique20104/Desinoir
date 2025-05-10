import Image from "next/image";
import Link from "next/link";
import React from "react";

import FeaturedSlider from "../FeaturedSlider";
function FeaturedProduct() {
  return (
    <div className="dark:bg-[#061E2C] bg-[#ffffff] pt-[100px] pb-[100px]">
      <div className="">
        <div className="flex items-center justify-between max-w-[1460px] w-10/12 mx-auto">
          <div className="">
            <p className="uppercase !dark:text-[#EFCB1C] text[20px] !text-[#FF895B]">
              Latest Work
            </p>
            <h3 className="text-[50px] font-[500] dark:text-white leading-normal flex justify-center items-center gap-1 !text-[#061E2C]">
              Featured Projects
            </h3>
          </div>
          <div className="">
            <Link href="#!">
              <p className=" relative  uppercase text-[18px] font-[400] inline-flex items-center gap-4 group-hoverbtn dark:text-[#061E2C] text-[#ffffff] ">
                <span className="relative z-20">View All Projects</span>
                <span className="rounded-move2 z-10 rounded-full absolute top-0 left-0 w-[40px] h-[40px] bg-[#FFFFFF14] dark:bg-[#ECECEC]"></span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="14"
                  viewBox="0 0 18 14"
                  className=" fill-white z-20 dark:fill-[#061E2C]"
                >
                  <path d="M1.08317 8.04154H14.4019L10.9717 11.4717C10.5649 11.8785 10.5649 12.5379 10.9717 12.9447C11.1754 13.1483 11.4415 13.2499 11.7082 13.2499C11.9748 13.2499 12.241 13.1483 12.4446 12.9447L17.653 7.73633C17.8483 7.54154 17.9582 7.27643 17.9582 6.99987C17.9582 6.72331 17.8483 6.45872 17.653 6.26341L12.4446 1.05508C12.0379 0.648307 11.3785 0.648307 10.9717 1.05508C10.5649 1.46185 10.5649 2.12122 10.9717 2.52799L14.4019 5.9582H1.08317C0.508171 5.9582 0.0415039 6.42487 0.0415039 6.99987C0.0415039 7.57487 0.508171 8.04154 1.08317 8.04154Z" />
                </svg>
              </p>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center mt-[80px] gap-[50px]">
          <div className="relative card-hover">
            <Image
              src="/assets/home/Rectangle 8.png"
              width={600}
              height={600}
              alt="image"
            />
            <div className="bg-[#02111B] hover-div flex p-[20px] gap-5 absolute bottom-[-50px] left-[50%] w-[70%] translate-x-[-50%] rounded-[15px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="45"
                viewBox="0 0 44 45"
                fill="none"
              >
                <rect
                  x="44"
                  y="44.5"
                  width="44"
                  height="44"
                  rx="22"
                  transform="rotate(-180 44 44.5)"
                  fill="white"
                />
                <path
                  d="M28.5572 26.7882C28.5784 26.7882 28.9835 26.5455 29.4573 26.2488C29.9312 25.952 30.3095 25.6915 30.2982 25.6699C30.2868 25.6484 30.0592 25.3411 29.7924 24.9871C29.2567 24.2762 28.741 23.3364 28.5124 22.6547C27.8001 20.53 28.1279 18.3238 29.4206 16.5429L29.7497 16.0894L29.1231 15.4628L28.4965 14.8361L28.0823 15.1313C25.3686 17.0652 22.1161 16.8427 19.2325 14.5259C19.0443 14.3746 18.8833 14.2579 18.8748 14.2664C18.7964 14.3448 17.8108 15.9563 17.811 16.0057C17.8112 16.0413 17.9835 16.1873 18.194 16.3299C20.5249 17.9092 23.1917 18.4241 25.2531 17.6931L25.7476 17.5177L18.8728 24.4175L14.5256 28.7805L15.7938 30.0487L20.168 25.6903L27.0517 18.8318L26.8431 19.4689C26.3019 21.1216 26.5235 23.0802 27.4754 25.0549C27.7465 25.6175 28.477 26.7878 28.5572 26.7882Z"
                  fill="#061E2C"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2"
                height="51"
                viewBox="0 0 2 51"
                fill="none"
              >
                <path
                  d="M1 1.5L0.999998 49.5"
                  stroke="white"
                  strokeOpacity="0.25"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <div className="text-white ">
                <p className="text-[16px] font-[500] uppercase text-white dark:text-[#061E2C]">
                  Ui/UX Design
                </p>
                <p className="dark:text-[#061E2C]">Water Purification</p>
              </div>
            </div>
          </div>
          <div className="relative card-hover">
            <Image
              src="/assets/home/Rectangle 9.png"
              width={600}
              height={600}
              alt="image"
            />
            <div className="bg-[#02111B] hover-div flex p-[20px] gap-5 absolute bottom-[-50px] left-[50%] w-[70%] translate-x-[-50%] rounded-[15px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="45"
                viewBox="0 0 44 45"
                fill="none"
              >
                <rect
                  x="44"
                  y="44.5"
                  width="44"
                  height="44"
                  rx="22"
                  transform="rotate(-180 44 44.5)"
                  fill="white"
                />
                <path
                  d="M28.5572 26.7882C28.5784 26.7882 28.9835 26.5455 29.4573 26.2488C29.9312 25.952 30.3095 25.6915 30.2982 25.6699C30.2868 25.6484 30.0592 25.3411 29.7924 24.9871C29.2567 24.2762 28.741 23.3364 28.5124 22.6547C27.8001 20.53 28.1279 18.3238 29.4206 16.5429L29.7497 16.0894L29.1231 15.4628L28.4965 14.8361L28.0823 15.1313C25.3686 17.0652 22.1161 16.8427 19.2325 14.5259C19.0443 14.3746 18.8833 14.2579 18.8748 14.2664C18.7964 14.3448 17.8108 15.9563 17.811 16.0057C17.8112 16.0413 17.9835 16.1873 18.194 16.3299C20.5249 17.9092 23.1917 18.4241 25.2531 17.6931L25.7476 17.5177L18.8728 24.4175L14.5256 28.7805L15.7938 30.0487L20.168 25.6903L27.0517 18.8318L26.8431 19.4689C26.3019 21.1216 26.5235 23.0802 27.4754 25.0549C27.7465 25.6175 28.477 26.7878 28.5572 26.7882Z"
                  fill="#061E2C"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2"
                height="51"
                viewBox="0 0 2 51"
                fill="none"
              >
                <path
                  d="M1 1.5L0.999998 49.5"
                  stroke="white"
                  strokeOpacity="0.25"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <div className="text-white ">
                <p className="text-[16px] font-[500] uppercase text-white">
                  Ui/UX Design
                </p>
                <p>Water Purification</p>
              </div>
            </div>
          </div>
          <div className="relative card-hover">
            <Image
              src="/assets/home/Rectangle 10.png"
              width={600}
              height={600}
              alt="image"
            />
            <div className="bg-[#02111B] hover-div flex p-[20px] gap-5 absolute bottom-[-50px] left-[50%] w-[70%] translate-x-[-50%] rounded-[15px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="45"
                viewBox="0 0 44 45"
                fill="none"
              >
                <rect
                  x="44"
                  y="44.5"
                  width="44"
                  height="44"
                  rx="22"
                  transform="rotate(-180 44 44.5)"
                  fill="white"
                />
                <path
                  d="M28.5572 26.7882C28.5784 26.7882 28.9835 26.5455 29.4573 26.2488C29.9312 25.952 30.3095 25.6915 30.2982 25.6699C30.2868 25.6484 30.0592 25.3411 29.7924 24.9871C29.2567 24.2762 28.741 23.3364 28.5124 22.6547C27.8001 20.53 28.1279 18.3238 29.4206 16.5429L29.7497 16.0894L29.1231 15.4628L28.4965 14.8361L28.0823 15.1313C25.3686 17.0652 22.1161 16.8427 19.2325 14.5259C19.0443 14.3746 18.8833 14.2579 18.8748 14.2664C18.7964 14.3448 17.8108 15.9563 17.811 16.0057C17.8112 16.0413 17.9835 16.1873 18.194 16.3299C20.5249 17.9092 23.1917 18.4241 25.2531 17.6931L25.7476 17.5177L18.8728 24.4175L14.5256 28.7805L15.7938 30.0487L20.168 25.6903L27.0517 18.8318L26.8431 19.4689C26.3019 21.1216 26.5235 23.0802 27.4754 25.0549C27.7465 25.6175 28.477 26.7878 28.5572 26.7882Z"
                  fill="#061E2C"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2"
                height="51"
                viewBox="0 0 2 51"
                fill="none"
              >
                <path
                  d="M1 1.5L0.999998 49.5"
                  stroke="white"
                  strokeOpacity="0.25"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <div className="text-white ">
                <p className="text-[16px] font-[500] uppercase text-white">
                  Ui/UX Design
                </p>
                <p>Water Purification</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <FeaturedSlider /> */}
    </div>
  );
}

export default FeaturedProduct;
