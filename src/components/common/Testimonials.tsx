"use client";
import React, { useState, useEffect, useMemo } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import BrandDesigns from "./BrandDesigns";

const Testimonial = ({ brandshow, parent }: any) => {
  const { theme } = useTheme();
  const [index, setIndex] = useState(0);

  // Assuming voices data is passed as a prop from the parent component
  // const voices = parent?.voices || [];
  const voices = useMemo(() => parent?.voices || [], [parent?.voices]);
  useEffect(() => {
    const lastIndex = voices.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, voices]);

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <div className="dark:bg-[#061E2C] bg-[#F2F6F5] py-[50px] lg:py-[130px] relative">
      {theme === "dark" ? (
        <Image
          src={"/darklight2.png"}
          width={673}
          height={743}
          alt="image"
          className="absolute w-full h-[543px] max-w-[673px] max-h-[743px] top-0 left-0"
        />
      ) : (
        <Image
          src={"/lightdark1.png"}
          width={673}
          height={743}
          alt="image"
          className="absolute top-0 w-full h-full max-w-[673px] max-h-[743px] left-0"
        />
      )}

      <section className="section mx-auto max-w-[1460px] md:w-10/12 ">
        <div className="mb-[40px] text-center">
          <h2 className="uppercase dark:text-[#EFCB1C] text-[#FF895B] text-[20px]">
            {parent?.subtitle}
          </h2>
          <h3 className="lg:text-[50px] text-[30px] font-[500] leading-normal dark:text-white text-[#061E2C]">
            {parent?.title}
          </h3>
        </div>
        <div className="relative z-10 flex items-start justify-center max-h-[160px] h-auto max-md:h-[100px] mt-[100px] gap-5">
          <Image
            onClick={() =>
              setIndex(index - 1 < 0 ? voices.length - 1 : index - 1)
            }
            width={100}
            height={100}
            src={`${voices[index - 1 < 0 ? voices.length - 1 : index - 1]?.image
              }`}
            alt={"person"}
            unoptimized
            className="person-img lg:w-[180px] border-[4px] border-[#DEE9EE] dark:border-[#FFFFFF14] lg:h-[180px] w-[80px] h-[80px] cursor-pointer self-end"
          />

          <Image
            onClick={() =>
              setIndex(index < 0 || index > voices.length - 1 ? 0 : index)
            }
            width={100}
            height={100}
            src={`${voices[index < 0 || index > voices.length - 1 ? 0 : index]?.image
              }`}
            alt="person"
            className={`person-img person-active-image lg:w-[180px] lg:h-[180px] w-[80px] h-[80px] cursor-pointer self-start`}
            unoptimized
          />
          <Image
            onClick={() =>
              setIndex(index + 1 > voices.length - 1 ? 0 : index + 1)
            }
            width={100}
            height={100}
            src={`${voices[index + 1 > voices.length - 1 ? 0 : index + 1]?.image
              }`}
            alt={"person"}
            unoptimized
            className="person-img border-[4px] border-[#DEE9EE] dark:border-[#FFFFFF14] lg:w-[180px] lg:h-[180px] w-[80px] h-[80px]  cursor-pointer self-end"
          />
        </div>
        <div className="relative">
          <div className="section-center min-h-[250px] h-auto">
            <div className="min-[1500px]:w-[1300px] lg:w-[900px] overflow-hidden mx-auto">
              {voices?.length && voices.map((voice: any, voiceIndex: any) => {
                const { _id, image, name, clientInfo, reviews } = voice;
                let position = "nextSlide";
                if (voiceIndex === index) {
                  position = "activeSlide";
                }
                if (
                  voiceIndex === index - 1 ||
                  (index === 0 && voiceIndex === voices.length - 1)
                ) {
                  position = "lastSlide";
                }

                return (
                  <article className={`${position} lg:pt-[80px]`} key={_id}>
                    <p className="font[400] md:text-[24px] text-[18px] overflow-hidden lg:w-[800px] min-[1500px]:w-[1077px] mx-auto dark:text-[#DEE9EE] text-[#061E2C]">
                      {reviews}
                    </p>
                    <h4 className="text-[#20D091] font-[500] md:text-[24px] text-[18px] md:mt-[30px] mt-[20px]">
                      {name}
                    </h4>
                    <p className="title dark:text-[white] text-[#061E2C]">
                      {clientInfo}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
          <div className="hidden min-[1200px]:block">
            <button
              className="prev bg-[#ECECEC] dark:bg-[#ffffff14]"
              onClick={() => setIndex(index - 1)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="14"
                viewBox="0 0 18 14"
                className="dark:fill-white fill-[#061E2C]"
              >
                <path d="M16.9168 8.04154H3.59808L7.02829 11.4717C7.43506 11.8785 7.43506 12.5379 7.02829 12.9447C6.82464 13.1483 6.5585 13.2499 6.29183 13.2499C6.02516 13.2499 5.75902 13.1483 5.55537 12.9447L0.347038 7.73633C0.151726 7.54154 0.0418301 7.27643 0.0418301 6.99987C0.0418301 6.72331 0.151726 6.45872 0.347038 6.26341L5.55537 1.05508C5.96214 0.648307 6.62152 0.648307 7.02829 1.05508C7.43506 1.46185 7.43506 2.12122 7.02829 2.52799L3.59808 5.9582H16.9168C17.4918 5.9582 17.9585 6.42487 17.9585 6.99987C17.9585 7.57487 17.4918 8.04154 16.9168 8.04154Z" />
              </svg>
            </button>
            <button
              className="next bg-[#ECECEC] dark:bg-[#ffffff14] "
              onClick={() => setIndex(index + 1)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="14"
                viewBox="0 0 18 14"
                className="dark:fill-white fill-[#061E2C]"
              >
                <path d="M1.08317 8.04154H14.4019L10.9717 11.4717C10.5649 11.8785 10.5649 12.5379 10.9717 12.9447C11.1754 13.1483 11.4415 13.2499 11.7082 13.2499C11.9748 13.2499 12.241 13.1483 12.4446 12.9447L17.653 7.73633C17.8483 7.54154 17.9582 7.27643 17.9582 6.99987C17.9582 6.72331 17.8483 6.45872 17.653 6.26341L12.4446 1.05508C12.0379 0.648307 11.3785 0.648307 10.9717 1.05508C10.5649 1.46185 10.5649 2.12122 10.9717 2.52799L14.4019 5.9582H1.08317C0.508167 5.9582 0.0415039 6.42487 0.0415039 6.99987C0.0415039 7.57487 0.508167 8.04154 1.08317 8.04154Z" />
              </svg>
            </button>
          </div>
        </div>
      </section>
      {brandshow && (
        <div className="lg:pt-[90px] pt-[30px] ">
          <BrandDesigns />
        </div>
      )}
    </div>
  );
};

export default Testimonial;
