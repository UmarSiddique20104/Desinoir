"use client";
import React from "react";
import img1 from "/public/img1.png";
import img2 from "/public/img2.png";
import men from "/public/men.png";
import Screen1 from "/public/Screen1.png";
import Screen2 from "/public/Screen2.png";
import Screen3 from "/public/Screen3.png";
import Screen4 from "/public/Screen4.png";
import Screen5 from "/public/Screen5.png";
import Screen6 from "/public/Screen6.png";
import "../project.css";
import ProjectDetail from "@/components/common/ProjectDetail";
import Footer from "@/components/common/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/components/redux/store";
const ProjectDetailsNav = ({ parent, lang, direction, slug }: any) => {
  const slugParts = slug.split("-");
  const itemId = slugParts[slugParts.length - 1]; // Get the last part as the ID
  const formattedSlug = slugParts.slice(0, -1).join(" ").replace(/-/g, " "); // Join all except the last part

  const ourWork = useSelector((state: RootState) => state.data.ourwork?.data);
  const matchingItem = ourWork?.find((item: any) => item._id === itemId);

  const splitTitle = formattedSlug?.split(" ", 2);
  const firstPart = splitTitle[0];
  const secondPart = formattedSlug?.substring(firstPart.length + 1);
  const data = parent.projectDetails;
  const columns = [[], [], []];
  matchingItem?.MajorScreensImages?.forEach((image: any, index: any) => {
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

  return (
    <div dir={direction} className="dark:bg-[#061E2C] bg-[#F2F6F5]">
      <ProjectDetail
        parent={parent}
        lang={lang}
        type="ourWork"
        showbtn={true}
        direction={direction}
        txt1={matchingItem?.title}
        txt2={""}
      />
      <div className="max-w-[1460px] md:w-10/12 mx-auto lg:pt-[130px] pt-[50px] sm:h-auto">
        <div className="max-md:px-5">
          <div className="">
            <p className="font-[400] text-[16px] leading-6 dark:text-[#989CAA] light:text-[#434750] pb-[80px]">
              {/* {matchingItem?.description} */}
              <div>
                <div
                  className="customQuill dark:quillDark customQuillMain"
                  dangerouslySetInnerHTML={{
                    __html: matchingItem?.description,
                  }}
                />
              </div>
            </p>

            <div className="flex flex-col md:flex-row  md:items-start gap-10">
              <div className="w-full md:w-[58%] lg:w-[972px]">
                <Image
                  src={matchingItem?.descriptionImage}
                  width={1000}
                  height={1000}
                  alt="Project"
                  className="w-full h-auto "
                />
              </div>
              <div className="w-[270px]  h-[200px] sm:h-[200px] lg:h-[254px]">
                <p className="text-[#989CAA] text-[16px] pt-4 leading-[22px] font-normal mb-1">
                  {data.Category}
                </p>
                <p className="text-[#061E2C] dark:text-[#fff] text-[24px] pb-4 leading-[22px] font-medium">
                  {matchingItem?.types == "branding"
                    ? "Branding"
                    : matchingItem?.types == "uiux"
                    ? "UI/UX Design"
                    : matchingItem?.types == "motiongraphic"
                    ? "Motion Graphic Designing"
                    : matchingItem?.types == "graphicdesign"
                    ? "Graphic Designing"
                    : ""}
                </p>
                <p className="text-[#989CAA] text-[16px] font-normal">
                  {data.client}
                </p>
                <p className="text-[#061E2C] dark:text-[#fff] text-[24px] pb-4 pt-[5px] leading-[22px] font-medium">
                  {matchingItem?.title}
                </p>
                <p className="text-[#989CAA] text-[16px] font-normal">
                  {data.Date}
                </p>
                <p className="text-[#061E2C] dark:text-[#fff] text-[24px] pb-4 pt-[5px] leading-[22px] font-medium">
                  {formatDate(matchingItem?.createdAt)}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-5 md:flex-row md:justify-between md:items-start lg:py-[80px] sm-my[30px]">
              <div className="w-full md:w-[38%]">
                <p className="text-[29px] sm:text-[29px] lg:text-[50px]  text-[#061E2C] dark:text-[#fff] font-medium max-lg:py-[20px]">
                  {matchingItem?.ProblemStatementTitle}
                </p>
              </div>
              <div className="w-full md:w-[58%]">
                <p className="text-[16px] text-[#434750] dark:text-[#989CAA]   leading-6 pb-5 font-normal">
                  <div>
                    <div
                      className="customQuill dark:quillDark customQuillMain"
                      dangerouslySetInnerHTML={{
                        __html: matchingItem?.ProblemStatementDescription,
                      }}
                    />
                  </div>
                </p>
              </div>
            </div>
            <div className="py-[20px] sm:py-[20px] lg:py-0">
              <Image
                src={matchingItem?.ProblemStatementImage}
                width={175}
                height={2000}
                alt="men"
                className="w-full h-auto "
              />
            </div>
            <div className="flex flex-col gap-5 md:flex-row md:justify-between !items-start md:items-start lg:pt-[80px]">
              <div className="w-full md:w-[35%]">
                <p className="text-[34px] sm:text-[34px] lg:text-[50px] text-[#061E2C] dark:text-[#fff] font-medium">
                  {matchingItem?.challengesTitle}
                </p>
              </div>

              <div className="w-full md:w-[58%]">
                <p className="text-[16px] text-[#434750]  dark:text-[#989CAA]  leading-6 pb-5 font-normal">
                  {/* {matchingItem?.challengesDescription} */}
                  <div>
                    <div
                      className="customQuill dark:quillDark customQuillMain"
                      dangerouslySetInnerHTML={{
                        __html:
                          matchingItem?.matchingItem?.challengesDescription,
                      }}
                    />
                  </div>
                </p>

                <div className="py-[20px] sm:py-[20px]  lg:py-[80px] w-full h-auto">
                  <Image
                    src={matchingItem?.challengeImage}
                    width={175}
                    height={2000}
                    alt="img2"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5 md:flex-row md:justify-between lg:pb-[80px] sm-my[30px]">
              <div className="w-full md:w-[35%]">
                <p className="text-[34px] sm:text-[34px]  lg:text-[50px] text-[#061E2C] dark:text-[#fff] font-medium sm:py-[20px]">
                  {matchingItem?.SolutionTitle}
                </p>
              </div>
              <div className="w-full md:w-[58%]">
                <p className="text-[16px] text-[#434750]  dark:text-[#989CAA]  leading-6 pb-5 font-normal">
                  {/* {matchingItem?.SolutionDescription} */}
                  <div>
                    <div
                      className="customQuill dark:quillDark customQuillMain"
                      dangerouslySetInnerHTML={{
                        __html: matchingItem?.SolutionDescription,
                      }}
                    />
                  </div>
                </p>
              </div>
            </div>

            <div>
              <p className="text-[34px] sm:text-[34px] lg:text-[50px] text-[#061E2C] dark:text-[#fff] font-medium py-[20px] sm:py-[20px] lg:py-0">
                {data.majorScreens}
              </p>
              <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row gap-10 lg:pt-[80px]">
                {columns.map((column, colIndex) => (
                  <div
                    key={colIndex}
                    className="w-full md:w-[50%] lg:w-[30%] xl:w-[30%] flex flex-col gap-[40px]"
                  >
                    {column.map((image, imgIndex) => (
                      <Image
                        key={imgIndex}
                        src={image}
                        width={175}
                        height={300}
                        alt={`Screen ${imgIndex + 1}`}
                        className="w-full h-[300px] md:h-[300px] lg:h-[300px] xl:h-[300px]"
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer
        parent={parent}
        direction={direction}
        lang={lang}
        welnote={true}
      />
    </div>
  );
};
export default ProjectDetailsNav;
