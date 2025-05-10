"use client";
import Footer from "@/components/common/Footer";
import Pagesheader from "@/components/common/Pagesheader";
import Blogs from "@/components/home/Blogs";
import { selectCard } from "@/components/redux/slicedata";
import { RootState } from "@/components/redux/store";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// Define your types
interface Post {
  _id: string;
  primaryImage: string;
  createdAt: string;
  title?: {
    en?: string;
    ar?: string;
  };
}

interface Props {
  data: {
    keyword: string;
  };
  selectedCard?: {
    relatedPosts?: Post[];
  };
  lang: string;
}

const ArticleDetailsNew = ({ parent, lang, slug }: any) => {
  const direction = lang == "en" ? "ltr" : "rtl";
  const dispatch = useDispatch();
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const article = useSelector((state: RootState) => state.data?.article?.data);
  const selectedCard = useSelector(
    (state: RootState) => state?.data?.selectedCard
  );
  const HandlePost = (id: any) => {
    const FilterData = article.find((item: any) => id === item._id);
    dispatch(selectCard(FilterData));
    setFilteredPosts(FilterData?.relatedPosts);
  };
  const data = parent.projectDetails;
  const columns = [[], [], []];
  selectedCard?.MajorScreensImages?.forEach((image: any, index: any) => {
    //@ts-ignore
    columns[index % 3].push(image);
  });
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "short",
      year: "numeric",
    };

    return date.toLocaleDateString("en-GB", options);
  };
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // if (selectedCard?.relatedPosts) {
    //   const results = selectedCard.relatedPosts.filter((post: any) => {
    //     const titleEn = post.title?.en?.toLowerCase() || "";
    //     const titleAr = post.title?.ar?.toLowerCase() || "";
    //     const query = searchQuery.toLowerCase();
    //     return titleEn.includes(query) || titleAr.includes(query);
    //   });
    setFilteredPosts(selectedCard?.relatedPosts);
  }, [selectedCard]);

  return (
    <>
      <div dir={direction}>
        <Pagesheader
          textSize={true}
          type="article"
          parent={parent}
          direction={direction}
          lang={lang}
          txt1={
            lang == "ar" ? selectedCard?.title?.ar : selectedCard?.title?.en
          }
          txt2={""}
          img="/OBJECTS4.png"
        />
        <div className="dark:bg-[#061E2C] bg-[#F2F6F5] pt-[30px] lg:pt-[130px]">
          <div className="max-w-[1460px] md:w-10/12 max-md:px-5 mx-auto  sm:h-auto">
            <div className="">
              <div className="">
                <div className="flex flex-col-reverse md:flex-col-reverse  lg:flex-row py-[40px] gap-[40px] m-auto ">
                  <div className=" w-[100%]">
                    <Image
                      src={selectedCard?.secondaryImage}
                      width={1000}
                      height={2000}
                      className="w-[100%] rounded-[30px]"
                      alt=""
                    />

                    <div className="py-[40px] flex gap-[30px] ">
                      <div>
                        <div>
                          <p className="flex items-center text-[20px]  font-medium text-[#061E2C] dark:text-[#FFF]">
                            <span className="pe-[4px]">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                viewBox="0 0 30 30"
                                fill="none"
                              >
                                <path
                                  opacity="0.35"
                                  d="M15 15C18.4518 15 21.25 12.2018 21.25 8.75C21.25 5.29822 18.4518 2.5 15 2.5C11.5482 2.5 8.75 5.29822 8.75 8.75C8.75 12.2018 11.5482 15 15 15Z"
                                  fill="#197BFF"
                                />
                                <path
                                  d="M22.5 18.75H7.5C5.42875 18.75 3.75 20.4288 3.75 22.5C3.75 24.5712 5.42875 26.25 7.5 26.25H22.5C24.5712 26.25 26.25 24.5712 26.25 22.5C26.25 20.4288 24.5712 18.75 22.5 18.75Z"
                                  fill="#197BFF"
                                />
                              </svg>
                            </span>{" "}
                            {lang === "en"
                              ? selectedCard?.name?.en
                              : selectedCard?.name?.ar}
                          </p>
                        </div>
                      </div>
                      <div>
                        <p className="flex items-center text-[20px] font-medium text-[#061E2C] dark:text-[#FFF] ">
                          <span className="pe-[4px]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="30"
                              height="30"
                              viewBox="0 0 30 30"
                              fill="none"
                            >
                              <path
                                opacity="0.35"
                                d="M22.5 26.25H7.5C5.42875 26.25 3.75 24.5712 3.75 22.5V7.5H26.25V22.5C26.25 24.5712 24.5712 26.25 22.5 26.25Z"
                                fill="#197BFF"
                              />
                              <path
                                d="M22.5 3.75H7.5C5.42875 3.75 3.75 5.42875 3.75 7.5V8.75H26.25V7.5C26.25 5.42875 24.5712 3.75 22.5 3.75Z"
                                fill="#197BFF"
                              />
                              <path
                                d="M17.5 23.75C18.1904 23.75 18.75 23.1904 18.75 22.5C18.75 21.8096 18.1904 21.25 17.5 21.25C16.8096 21.25 16.25 21.8096 16.25 22.5C16.25 23.1904 16.8096 23.75 17.5 23.75Z"
                                fill="#197BFF"
                              />
                              <path
                                d="M12.5 23.75C13.1904 23.75 13.75 23.1904 13.75 22.5C13.75 21.8096 13.1904 21.25 12.5 21.25C11.8096 21.25 11.25 21.8096 11.25 22.5C11.25 23.1904 11.8096 23.75 12.5 23.75Z"
                                fill="#197BFF"
                              />
                              <path
                                d="M7.5 23.75C8.19036 23.75 8.75 23.1904 8.75 22.5C8.75 21.8096 8.19036 21.25 7.5 21.25C6.80964 21.25 6.25 21.8096 6.25 22.5C6.25 23.1904 6.80964 23.75 7.5 23.75Z"
                                fill="#197BFF"
                              />
                              <path
                                d="M10 18.75C12.0711 18.75 13.75 17.0711 13.75 15C13.75 12.9289 12.0711 11.25 10 11.25C7.92893 11.25 6.25 12.9289 6.25 15C6.25 17.0711 7.92893 18.75 10 18.75Z"
                                fill="#197BFF"
                              />
                              <path
                                d="M22.5 18.75C23.1904 18.75 23.75 18.1904 23.75 17.5C23.75 16.8096 23.1904 16.25 22.5 16.25C21.8096 16.25 21.25 16.8096 21.25 17.5C21.25 18.1904 21.8096 18.75 22.5 18.75Z"
                                fill="#197BFF"
                              />
                              <path
                                d="M22.5 13.75C23.1904 13.75 23.75 13.1904 23.75 12.5C23.75 11.8096 23.1904 11.25 22.5 11.25C21.8096 11.25 21.25 11.8096 21.25 12.5C21.25 13.1904 21.8096 13.75 22.5 13.75Z"
                                fill="#197BFF"
                              />
                              <path
                                d="M17.5 13.75C18.1904 13.75 18.75 13.1904 18.75 12.5C18.75 11.8096 18.1904 11.25 17.5 11.25C16.8096 11.25 16.25 11.8096 16.25 12.5C16.25 13.1904 16.8096 13.75 17.5 13.75Z"
                                fill="#197BFF"
                              />
                              <path
                                d="M17.5 18.75C18.1904 18.75 18.75 18.1904 18.75 17.5C18.75 16.8096 18.1904 16.25 17.5 16.25C16.8096 16.25 16.25 16.8096 16.25 17.5C16.25 18.1904 16.8096 18.75 17.5 18.75Z"
                                fill="#197BFF"
                              />
                            </svg>
                          </span>
                          {formatDate(selectedCard?.createdAt)}
                        </p>
                      </div>
                    </div>

                    {/* <div>
                      <p className="text-[16px] font-normal leading-[24px] text-justify text-[#434750] dark:text-[#989CAA]">
                        {data.description} <br /> <br />
                        {data.description2}
                        <br />
                        <br />
                        {data.description3}
                      </p>
                    </div> */}
                    {/* Big 1  */}
                    {/* <div>
                      <p className="m-[0px] text-[34px] pt-[40px] pb-[20px] md:text-[50px] text-[#061E2C] font-medium  dark:text-[#FFF] leading-normal">
                        {lang === "en"
                          ? selectedCard?.mainTitle?.en
                          : selectedCard?.mainTitle?.ar}
                      </p>
                    </div>
                    <div className="pb-[20px]">
                      <div className="text-[16px] font-normal leading-[24px] text-justify text-[#434750] list-disc	dark:text-[#989CAA]">
                        {lang === "en"
                          ? selectedCard?.title?.en
                          : selectedCard?.title?.ar}
                      </div>
                    </div> */}
                    <div>
                      <div
                        className="customQuill dark:quillDark customQuillMain"
                        dangerouslySetInnerHTML={{
                          __html: lang === "en"
                              ? selectedCard?.content?.en
                              : selectedCard?.content?.ar,
                        }}
                      />
                    </div>

                    {/* End   */}

                    {/* Conclusion  */}
                    <div>
                      <p className="m-[0px] text-[34px] pt-[40px] pb-[20px] md:text-[50px] text-[#061E2C] font-medium  dark:text-[#FFF] leading-normal">
                        {data.heading8}
                      </p>
                    </div>

                    <div className="pb-[20px]">
                      <div
                        className="customQuill dark:quillDark customQuillMain"
                        dangerouslySetInnerHTML={{
                          __html:
                            lang === "en"
                              ? selectedCard?.conclusion?.en
                              : selectedCard?.conclusion?.ar,
                        }}
                      />
                    </div>

                    <div className="border-[#061e2c26] dark:border-[#FFFFFF26] border-[1px] rounded-tl-[30px] rounded-tr-[30px] rounded-br-[30px] rounded-bl-[109px] flex max-md:flex-col items-center px-[20px] max-md:py-[30px] xl:mt-[40px] leading-[21px] my-[20px] md:gap-[40px] gap-[10px]">
                      <div className=" py-[10px] h-max ">
                        <Image
                          src={selectedCard?.adminFeedback?.adminImage}
                          width={175}
                          height={200}
                          className=" rounded-full"
                          alt=""
                        />
                      </div>
                      <div className="pt-[10px] pb-[30px] md:py-[40px] w-[100%] md:w-[70%]">
                        <div>
                          <p className="text-[24px]  font-[600] leading-[24px]   dark:text-[#FFF] text-[#061E2C] py-[7px]">
                            {lang === "en"
                              ? selectedCard?.adminFeedback?.name?.en
                              : selectedCard?.adminFeedback?.name?.ar}
                          </p>
                        </div>

                        <div
                          className="customQuill dark:quillDark customQuillMain"
                          dangerouslySetInnerHTML={{
                            __html:
                              lang === "en"
                                ? selectedCard?.adminFeedback?.feedback?.en
                                : selectedCard?.adminFeedback?.feedback?.ar,
                          }}
                        />
                      </div>
                    </div>

                    <div className="flex items-center gap-[20px]">
                      <p className="text-[24px] font-normal leading-[140%] text-justify text-[#061E2C] dark:text-[#FFF]">
                        {data.Share}
                      </p>

                      <div className="flex items-center gap-4 ">
                        <div className="w-[50px] group flex items-center justify-center hover:bg-[#197BFF] transition-all duration-[.6s] cursor-pointer h-[50px] dark:bg-[#FFFFFF14] bg-[#E1E7E7] hover:dark:bg-[#197BFF]  rounded-[15px]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="31"
                            viewBox="0 0 30 31"
                            className="fill-[#434750] group-hover:fill-[white] transition-all duration-[.6s] dark:fill-[#ffffff]"
                          >
                            <path d="M15 3.51562C8.373 3.51562 3 8.88863 3 15.5156C3 21.5316 7.432 26.4996 13.206 27.3676V18.6956H10.237V15.5416H13.206V13.4426C13.206 9.96763 14.899 8.44263 17.787 8.44263C19.17 8.44263 19.902 8.54563 20.248 8.59163V11.3446H18.278C17.052 11.3446 16.624 12.5076 16.624 13.8176V15.5416H20.217L19.73 18.6956H16.624V27.3926C22.481 26.5986 27 21.5906 27 15.5156C27 8.88863 21.627 3.51562 15 3.51562Z" />
                          </svg>
                        </div>
                        <div className="w-[50px] group flex items-center justify-center hover:bg-[#197BFF] transition-all duration-[.6s] cursor-pointer h-[50px] dark:bg-[#FFFFFF14] bg-[#E1E7E7]  hover:dark:bg-[#197BFF] rounded-[15px]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="31"
                            viewBox="0 0 30 31"
                            className="fill-[#434750] group-hover:fill-[white] transition-all duration-[.6s] dark:fill-[#ffffff]"
                          >
                            <path d="M15 2.51562C7.832 2.51562 2 8.34762 2 15.5156C2 22.6836 7.832 28.5156 15 28.5156C22.168 28.5156 28 22.6836 28 15.5156C28 8.34762 22.168 2.51562 15 2.51562ZM11.666 6.51562H18.332C21.457 6.51562 24 9.05764 24 12.1816V18.8477C24 21.9727 21.458 24.5156 18.334 24.5156H11.668C8.54297 24.5156 6 21.9736 6 18.8496V12.1836C6 9.05859 8.54202 6.51562 11.666 6.51562ZM11.666 8.51562C9.64502 8.51562 8 10.1616 8 12.1836V18.8496C8 20.8706 9.64597 22.5156 11.668 22.5156H18.334C20.355 22.5156 22 20.8697 22 18.8477V12.1816C22 10.1606 20.354 8.51562 18.332 8.51562H11.666ZM19.668 10.1816C20.036 10.1816 20.334 10.4797 20.334 10.8477C20.334 11.2157 20.036 11.5156 19.668 11.5156C19.3 11.5156 19 11.2157 19 10.8477C19 10.4797 19.3 10.1816 19.668 10.1816ZM15 10.5156C17.757 10.5156 20 12.7586 20 15.5156C20 18.2726 17.757 20.5156 15 20.5156C12.243 20.5156 10 18.2726 10 15.5156C10 12.7586 12.243 10.5156 15 10.5156ZM15 12.5156C14.2044 12.5156 13.4413 12.8317 12.8787 13.3943C12.3161 13.9569 12 14.72 12 15.5156C12 16.3113 12.3161 17.0743 12.8787 17.6369C13.4413 18.1996 14.2044 18.5156 15 18.5156C15.7956 18.5156 16.5587 18.1996 17.1213 17.6369C17.6839 17.0743 18 16.3113 18 15.5156C18 14.72 17.6839 13.9569 17.1213 13.3943C16.5587 12.8317 15.7956 12.5156 15 12.5156Z" />
                          </svg>
                        </div>
                        <div className="w-[50px] group flex items-center justify-center hover:bg-[#197BFF] transition-all duration-[.6s] cursor-pointer h-[50px] dark:bg-[#FFFFFF14]  bg-[#E1E7E7] hover:dark:bg-[#197BFF] rounded-[15px]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="31"
                            viewBox="0 0 30 31"
                            className="fill-[#434750] group-hover:fill-[white] transition-all duration-[.6s] dark:fill-[#ffffff]"
                          >
                            <path d="M15 3.51562C8.373 3.51562 3 8.88863 3 15.5156C3 22.1426 8.373 27.5156 15 27.5156C21.627 27.5156 27 22.1426 27 15.5156C27 8.88863 21.627 3.51562 15 3.51562ZM10.496 8.91862C11.338 8.91862 11.899 9.47962 11.899 10.2276C11.899 10.9756 11.338 11.5366 10.403 11.5366C9.561 11.5376 9 10.9756 9 10.2276C9 9.47962 9.561 8.91862 10.496 8.91862ZM12 20.5156H9V12.5156H12V20.5156ZM22 20.5156H19.176V16.1436C19.176 14.9346 18.423 14.6556 18.141 14.6556C17.859 14.6556 16.917 14.8416 16.917 16.1436C16.917 16.3296 16.917 20.5156 16.917 20.5156H14V12.5156H16.918V13.6316C17.294 12.9806 18.047 12.5156 19.459 12.5156C20.871 12.5156 22 13.6316 22 16.1436V20.5156Z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="sm:w-[100%] md:w-[100%] lg:w-[50%]">
                    <div>
                      <div className="bg-[#061e2c0d] rounded-[20px] dark:bg-[#ffffff14] px-[20px] py-[35px]">
                        <form action="" className="flex relative">
                          <input
                            type="search"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className={`px-[35px] py-[19px] text-[#989CAA] rounded-[50px] grow w-full dark:bg-[#02111B] ${
                              lang === "en" ? "pe-[80px]" : "pe-[80px]"
                            }`}
                            placeholder={data.keyword}
                          />
                          <button
                            type="submit"
                            className={`absolute top-[17%] bg-[#197BFF] p-2 rounded-[60px] ${
                              lang === "en" ? "right-[30px]" : "left-[30px]"
                            }`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="26"
                              height="26"
                              viewBox="0 0 26 26"
                              fill="none"
                            >
                              <path
                                d="M11.1771 3.625C7.01852 3.625 3.625 7.01852 3.625 11.1771C3.625 15.3356 7.01852 18.7292 11.1771 18.7292C12.8819 18.7292 14.4526 18.1526 15.7191 17.1931L20.5968 22.0698C20.6928 22.1698 20.8078 22.2496 20.935 22.3046C21.0622 22.3596 21.1991 22.3886 21.3377 22.39C21.4763 22.3915 21.6138 22.3652 21.7421 22.3128C21.8704 22.2604 21.987 22.183 22.085 22.085C22.183 21.987 22.2604 21.8704 22.3128 21.7421C22.3652 21.6138 22.3915 21.4763 22.39 21.3377C22.3886 21.1991 22.3596 21.0622 22.3046 20.935C22.2496 20.8078 22.1698 20.6928 22.0698 20.5968L17.1931 15.7191C18.1526 14.4526 18.7292 12.8819 18.7292 11.1771C18.7292 7.01852 15.3356 3.625 11.1771 3.625ZM11.1771 5.70833C14.2097 5.70833 16.6458 8.14444 16.6458 11.1771C16.6458 12.6332 16.0802 13.9482 15.1606 14.9257C15.0711 14.9905 14.9925 15.0691 14.9277 15.1586C13.9501 16.0794 12.6342 16.6458 11.1771 16.6458C8.14443 16.6458 5.70833 14.2097 5.70833 11.1771C5.70833 8.14444 8.14443 5.70833 11.1771 5.70833Z"
                                fill="white"
                              />
                            </svg>
                          </button>
                        </form>
                      </div>

                      <div className="py-[25px] px-[30px] bg-[#061e2c0d] dark:bg-[#ffffff14] rounded-[20px] my-[30px] md:my-[20px] lg:my-[30px]">
                        <p className="text-[26px] text-[#061E2C] dark:text-[#ffffff] font-medium tracking-[0.5px]">
                          {lang === "en" ? "Recent Posts" : "المشاركات الأخيرة"}
                        </p>
                        {filteredPosts?.length > 0 ? (
                          filteredPosts?.map((item) => (
                            <div
                              key={item?._id} // Changed from item.id to item._id if that's the correct identifier
                              className="flex gap-[20px] lg:gap-[20px] pb-[10px] pt-[25px] cursor-pointer"
                              onClick={() => HandlePost(item?._id)}
                            >
                              <div>
                                <Image
                                  width={80}
                                  height={80}
                                  src={item?.primaryImage}
                                  className="w-[100%] max-w-[80px] h-auto rounded-[10px]"
                                  alt="Post image"
                                />
                              </div>
                              <div className="w-[70%]">
                                <p className="text-[14px] font-normal text-[#989CAA] leading-[140%]">
                                  {formatDate(item?.createdAt)}
                                </p>
                                <p className="text-[16px] font-normal text-[#434750] dark:text-[#fff] leading-[22.4px]">
                                  {item?.title?.en
                                    ? item.title.en
                                    : item?.title?.ar}
                                </p>
                              </div>
                            </div>
                          ))
                        ) : (
                          <p className="text-[16px] text-[#434750] dark:text-[#fff]">
                            No posts found.
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="py-[25px] px-[20px] bg-[#061e2c0d] dark:bg-[#ffffff14] rounded-[20px] my-[10px] ">
                      <p className="text-[26px] text-[#061E2C] dark:text-[#fff] font-medium  tracking-[0.5px]">
                        {data.categoryList}
                      </p>

                      <div className=" flex justify-between py-[10px]">
                        <div className="w-[85%] ">
                          <p className="text-[20px] text-[#434750] dark:text-[#fff] font-medium  leading-[28px]">
                            {lang === "en"
                              ? selectedCard?.categoryCounts?.branding?.text?.en
                              : selectedCard?.categoryCounts?.branding?.text
                                  ?.ar}
                          </p>
                        </div>
                        <div className="w-[15%]">
                          <p className="text-[16px] font-normal leading-[22.4px] bg-[#197BFF] rounded-[20px] text-[#fff] px-[19px] py-[3px] justify-center flex">
                            {lang === "en"
                              ? selectedCard?.categoryCounts?.branding?.count
                              : selectedCard?.categoryCounts?.branding?.count}
                          </p>
                        </div>
                      </div>

                      <div className="flex justify-between py-[10px]">
                        <div className="w-[85%] ">
                          <p className="text-[20px] text-[#434750] dark:text-[#fff] font-medium  leading-[28px]">
                            {lang === "en"
                              ? selectedCard?.categoryCounts?.uiux?.text?.en
                              : selectedCard?.categoryCounts?.uiux?.text?.ar}
                          </p>
                        </div>
                        <div className="w-[15%]">
                          <p className="text-[16px] font-normal leading-[22.4px] bg-[#197BFF] rounded-[20px] text-[#fff] px-[19px] py-[3px] justify-center flex">
                            {lang === "en"
                              ? selectedCard?.categoryCounts?.uiux?.count
                              : selectedCard?.categoryCounts?.uiux?.count}
                          </p>
                        </div>
                      </div>

                      <div className="flex justify-between py-[10px]">
                        <div className="w-[85%] ">
                          <p className="text-[20px] text-[#434750] dark:text-[#fff] font-medium  leading-[28px]">
                            {lang === "en"
                              ? selectedCard?.categoryCounts?.motionGraphic
                                  ?.text?.en
                              : selectedCard?.categoryCounts?.motionGraphic
                                  ?.text?.ar}
                          </p>
                        </div>
                        <div className="w-[15%]">
                          <p className="text-[16px] font-normal leading-[22.4px] bg-[#197BFF] rounded-[20px] text-[#fff] px-[19px] py-[3px] justify-center flex">
                            {lang === "en"
                              ? selectedCard?.categoryCounts?.motionGraphic
                                  ?.count
                              : selectedCard?.categoryCounts?.motionGraphic
                                  ?.count}
                          </p>
                        </div>
                      </div>

                      <div className="flex justify-between py-[10px]">
                        <div className="w-[85%] ">
                          <p className="text-[20px] text-[#434750] dark:text-[#fff] font-medium  leading-[28px]">
                            {lang === "en"
                              ? selectedCard?.categoryCounts?.graphicDesign
                                  ?.text?.en
                              : selectedCard?.categoryCounts?.graphicDesign
                                  ?.text?.ar}
                          </p>
                        </div>
                        <div className="w-[15%]">
                          <p className="text-[16px] font-normal leading-[22.4px] bg-[#197BFF] rounded-[20px] text-[#fff] px-[19px] py-[3px] justify-center flex">
                            {lang === "en"
                              ? selectedCard?.categoryCounts?.graphicDesign
                                  ?.count
                              : selectedCard?.categoryCounts?.graphicDesign
                                  ?.count}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {selectedCard?.relatedPosts?.length ? (
            <Blogs
              lang={lang}
              parent={parent}
              bgchange={true}
              direction={direction}
              selectedCard={selectedCard}
            />
          ) : (
            ""
          )}

          <div className="max-w-[900px] mx-auto px-5 lg:py-[70px] py-[40px]">
            <h2 className="text-center xl:text-[90px] font-[100] lg:text-[50px] text-[40px] dark:text-white text-[#061E2C] leading-normal">
              <span className="font-[500]">
                {" "}
                {parent.contactUS?.footerHeading}
              </span>
              <span className="block font-[100]">
                {" "}
                {parent.contactUS?.footerHeading2}
              </span>
            </h2>
            <div className="relative max-w-[440px] mt-[50px] mx-auto">
              <input
                dir={direction}
                type="text"
                className="placeholder:uppercase py-[27px] px-[35px] w-full appearance-none bg-[#DEE9EE] text-white dark:bg-[#FFFFFF14] rounded-[50px]"
                placeholder={`${
                  direction == "ltr"
                    ? "Enter your email"
                    : "أدخل بريدك الإلكتروني"
                }`}
              />
              <button
                type="submit"
                className={` absolute top-[50%] translate-y-[-50%] ${
                  direction == "ltr" ? "right-[35px]" : "left-[35px]"
                } bg-[#197BFF]  h-[42px] w-[42px] flex items-center justify-center rounded-[50%]`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  className={`${direction == "ltr" ? "" : "rotate-180"} `}
                  height="14"
                  viewBox="0 0 18 14"
                  fill="none"
                >
                  <path
                    d="M1.08268 8.04154H14.4014L10.9712 11.4717C10.5645 11.8785 10.5645 12.5379 10.9712 12.9447C11.1749 13.1483 11.441 13.2499 11.7077 13.2499C11.9743 13.2499 12.2405 13.1483 12.4441 12.9447L17.6525 7.73633C17.8478 7.54154 17.9577 7.27643 17.9577 6.99987C17.9577 6.72331 17.8478 6.45872 17.6525 6.26341L12.4441 1.05508C12.0374 0.648307 11.378 0.648307 10.9712 1.05508C10.5645 1.46185 10.5645 2.12122 10.9712 2.52799L14.4014 5.9582H1.08268C0.507683 5.9582 0.0410156 6.42487 0.0410156 6.99987C0.0410156 7.57487 0.507683 8.04154 1.08268 8.04154Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </div>
          <Footer
            parent={parent}
            lang={lang}
            direction={direction}
            welnote={false}
          />
        </div>
      </div>
    </>
  );
};
export default ArticleDetailsNew;
