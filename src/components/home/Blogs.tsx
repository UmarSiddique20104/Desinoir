import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { selectCard } from "../redux/slicedata";

function Blogs({ parent, lang, bgchange, data, selectedCard }: any) {
  const dispatch = useDispatch();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const d = new Date();
  const newDate = d.getDate();
  const article = useSelector((state: RootState) => state.data?.article?.data);
  const background = {
    background: "linear-gradient(133deg, #197BFF 11.04%, #20D091 100%)",
    borderRadius: "15px",
  };
  return (
    <div
      className={` ${
        bgchange
          ? "dark:bg-[#061E2C] bg-[#F2F6F5]"
          : "bg-[#061E2C] dark:bg-[#02111B]"
      }  lg:py-[90px] py-[50px] `}
    >
      <div className="max-w-[1460px] w-10/12 mx-auto">
        {bgchange ? (
          <div className="text-[50px] font-[500] text-[#061E2C] dark:text-white ">
            <h3>{lang == "en" ? "More Articles" : "المزيد من المقالات"}</h3>
          </div>
        ) : (
          <div className="mb-[80px] text-center">
            <h2 className="uppercase text-[#EFCB1C] text-[20px]">
              {parent?.BlogsSection?.title}
            </h2>
            <h3 className="lg:text-[50px] text-[30px] font-[500] leading-normal text-white">
              {parent?.BlogsSection?.heading}
            </h3>
          </div>
        )}
        <div className="flex items-center justify-center flex-wrap lg:flex-nowrap gap-10">
          {article?.slice(0, 2)?.map((item: any, index: any) => (
            <div
              key={index}
              className="relative w-full"
              onClick={() => dispatch(selectCard(item))}
            >
              <Link className="block" href={`/${lang}/article/${item._id}`}>
                <Image
                  src={item.primaryImage}
                  width={700}
                  className="w-full lg:max-w-[700px] h-auto"
                  height={540}
                  alt="image"
                />
                <div className="absolute bottom-[-30px] left-[50%] translate-x-[-50%] w-[90%] sm:w-[550px] lg:w-[90%]">
                  <div className="flex items-center justify-center gap-2 lg:gap-5">
                    <div
                      style={background}
                      className="flex items-center justify-center md:w-[110px] md:h-[110px] max-sm:h-[80px] sm:h-[110px] max-sm:w-[90px] p-2 lg:p-2 sm:w-[110px] "
                    >
                      <div className="text-[#FFFFFF] flex flex-col font-[500]  max-w-[50px] text-center leading-normal text-[14px] sm:text-[30px] lg:text-[20px] xl:text-[30px] mb-0">
                        <div>{monthNames[d.getMonth()].slice(0, 3)}</div>
                        <div>
                          {" "}
                          {newDate.toString().length === 1
                            ? `0${newDate}`
                            : `${newDate}`}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center w-3/3 lg:w-[430px] h-[80px] sm:h-[110px] text-white bg-[#061E2C] w-full p-3 lg:px-[40px] rounded-[15px]">
                      <p className="text-[#FFFFFF] text-[16px] sm:text-[24px] mb-0">
                        {lang == "en" ? item.title.en : item.title.ar}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
          {/* <div className="relative w-full max-lg:mt-[20px]">
            <Link href={`/${lang}/article/Responsive web design`}>
              <Image
                src="/assets/home/stats2.png"
                width={700}
                className="w-full lg:max-w-[700px] h-auto"
                height={540}
                alt="image"
              />
              <div className="absolute bottom-[-30px] left-[50%] translate-x-[-50%] w-[90%] sm:w-[550px] lg:w-[90%]">
                <div className="flex items-center justify-center gap-2 lg:gap-5">
                  <div
                    style={background}
                    className="flex items-center  justify-center  md:w-[90px] md:h-[90px] h-[60px] w-[60px] p-2 lg:p-2 sm:w-[110px]  xl:h-[110px]"
                  >
                    <div className="text-[#FFFFFF] flex flex-col font-[500]  max-w-[50px] text-center leading-normal text-[14px] sm:text-[30px] lg:text-[20px] xl:text-[30px] mb-0">
                      <div>{monthNames[d.getMonth()].slice(0, 3)}</div>
                      <div>
                        {newDate.toString().length === 1
                          ? `0${newDate}`
                          : `${newDate}`}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center w-3/3 lg:w-[430px] sm:h-[110px] text-white bg-[#061E2C] p-3 lg:px-[40px] rounded-[15px]">
                    <p className="text-[#FFFFFF] text-[14px] sm:text-[24px] mb-0">
                      {`${parent?.BlogsSection?.description2
                        .split(" ")
                        .slice(0, 7)
                        .join(" ")}...`}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
