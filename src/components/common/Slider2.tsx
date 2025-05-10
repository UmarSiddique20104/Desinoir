"use client";

import React from "react";
import styles from "../Slider.module.css";
import { useTheme } from "next-themes";
import { Archivo } from "next/font/google";

const inter = Archivo({ subsets: ["latin"] });

type BrandPage = "Brand" | "ui/ux" | "Graphic" | "Motion-Graphics";

interface BrandSlider2Props {
  chnaged: boolean;
  page: BrandPage;
  color: string; // Update this if you have a specific type for color
  sliders: any;
}

const BrandSlider2: React.FC<BrandSlider2Props> = ({ chnaged, page, color, sliders }) => {
  const { theme } = useTheme();
  const sliderItems = [...sliders, ...sliders];
  return (
    <div dir="ltr" className={styles["slider-container"]}>
      <div
        className={`${theme == "dark" ? styles["slider-items"] : styles["slider-items-light"]}`}
      >
        {sliderItems?.map((item: any, index: number) => (
          <div
            key={index}
            className={`${theme == "dark" ? styles["slider-item"] : styles["slider-item-light"]} ${chnaged && "!text-[#20D091]"}  ${index % 2 === 1
              ? chnaged
                ? theme == "dark"
                  ? styles["alternate-item-light"]
                  : styles["alternate-item"]
                : styles["alternate-item-light"]
              : ""
              }`}
          >
            {chnaged ? (
              theme == "dark" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="58"
                  height="61"
                  viewBox="0 0 58 61"
                  fill="none"
                >
                  <path
                    d="M31.5466 19.7103L31.748 20.7967L32.5495 20.0361L44.2941 8.89226L37.3249 23.5057L36.8493 24.503L37.9448 24.3589L53.9966 22.2466L39.7688 29.9727L38.7979 30.5L39.7688 31.0273L53.9966 38.7534L37.9448 36.6412L36.8493 36.497L37.3249 37.4943L44.2941 52.1077L32.5495 40.9639L31.748 40.2033L31.5466 41.2897L28.5952 57.2086L25.6438 41.2897L25.4424 40.2033L24.6409 40.9639L12.8962 52.1077L19.8654 37.4943L20.341 36.497L19.2456 36.6412L3.19375 38.7534L17.4215 31.0273L18.3925 30.5L17.4215 29.9727L3.19375 22.2466L19.2456 24.3589L20.341 24.503L19.8654 23.5057L12.8962 8.89227L24.6409 20.0361L25.4424 20.7967L25.6438 19.7103L28.5952 3.79137L31.5466 19.7103Z"
                    stroke="#989CAA"
                    strokeWidth="1.2"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="58"
                  height="61"
                  viewBox="0 0 58 61"
                  fill="none"
                >
                  <path
                    d="M31.5466 19.7103L31.748 20.7967L32.5495 20.0361L44.2941 8.89226L37.3249 23.5057L36.8493 24.503L37.9448 24.3589L53.9966 22.2466L39.7688 29.9727L38.7979 30.5L39.7688 31.0273L53.9966 38.7534L37.9448 36.6412L36.8493 36.497L37.3249 37.4943L44.2941 52.1077L32.5495 40.9639L31.748 40.2033L31.5466 41.2897L28.5952 57.2086L25.6438 41.2897L25.4424 40.2033L24.6409 40.9639L12.8962 52.1077L19.8654 37.4943L20.341 36.497L19.2456 36.6412L3.19375 38.7534L17.4215 31.0273L18.3925 30.5L17.4215 29.9727L3.19375 22.2466L19.2456 24.3589L20.341 24.503L19.8654 23.5057L12.8962 8.89227L24.6409 20.0361L25.4424 20.7967L25.6438 19.7103L28.5952 3.79137L31.5466 19.7103Z"
                    stroke="#989CAA"
                    strokeWidth="1.2"
                  />
                </svg>
              )
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="58"
                height="61"
                viewBox="0 0 58 61"
                fill="none"
              >
                <path
                  d="M31.5466 19.7103L31.748 20.7967L32.5495 20.0361L44.2941 8.89226L37.3249 23.5057L36.8493 24.503L37.9448 24.3589L53.9966 22.2466L39.7688 29.9727L38.7979 30.5L39.7688 31.0273L53.9966 38.7534L37.9448 36.6412L36.8493 36.497L37.3249 37.4943L44.2941 52.1077L32.5495 40.9639L31.748 40.2033L31.5466 41.2897L28.5952 57.2086L25.6438 41.2897L25.4424 40.2033L24.6409 40.9639L12.8962 52.1077L19.8654 37.4943L20.341 36.497L19.2456 36.6412L3.19375 38.7534L17.4215 31.0273L18.3925 30.5L17.4215 29.9727L3.19375 22.2466L19.2456 24.3589L20.341 24.503L19.8654 23.5057L12.8962 8.89227L24.6409 20.0361L25.4424 20.7967L25.6438 19.7103L28.5952 3.79137L31.5466 19.7103Z"
                  stroke="white"
                  strokeOpacity="0.25"
                  strokeWidth="1.2"
                />
              </svg>
            )}
            <p className={`${inter.className} text-[60px] xl:text-[120px]`}>
              {item?.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandSlider2;
