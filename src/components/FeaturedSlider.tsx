"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
function FeaturedSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 10000,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="w-full max-w-[1460px] mx-auto">
      <Slider {...settings}>
        <div>
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
        </div>
        <div>
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
        </div>
        <div>
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
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
        <div>
          <h3>7</h3>
        </div>
        <div>
          <h3>8</h3>
        </div>
        <div>
          <h3>9</h3>
        </div>
      </Slider>
    </div>
  );
}

export default FeaturedSlider;
