"use client";
import FeatureProject from "@/components/FeatureProject";
import { fetchHomeData, fetchTeam } from "@/components/Utilts/Helper";
import Counter from "@/components/common/Counter";
import Footer from "@/components/common/Footer";
import BrandSlider from "@/components/common/Slider";
import Testimonial from "@/components/common/Testimonials";
import Index from "@/components/header/Index";
import Blogs from "@/components/home/Blogs";
import Creativity from "@/components/home/Creativity";
import Experties from "@/components/home/Experties";
import Services from "@/components/home/Services";
import Team from "@/components/home/Team";
import { setHomeSection, setTeam } from "@/components/redux/slicedata";
import { RootState } from "@/components/redux/store";
import { getDictionary } from "@/dictionary";
import { Locale } from "@/i18n.config";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import StyledText from "./styleText/StyledText";

interface HomeProps {
  params: { lang: Locale };
  parent: any;
}

const Home: React.FC<HomeProps> = ({ params, parent }) => {
  const direction = params.lang === "en" ? "ltr" : "rtl";
  const dispatch = useDispatch();
  const homeSection = useSelector((state: RootState) => state.data.homeSection);
  const homeTeamSection = useSelector(
    (state: RootState) => state.data.teamMember
  );
  const ourWork = useSelector((state: RootState) => state.data.ourwork?.data);
  const sliders = useSelector((state: RootState) => state.data.slide?.data);

  const CreativityData: any = {
    title:
      params.lang === "en"
        ? homeSection?.data?.en?.creativitySection?.creativityTitle
        : homeSection?.data?.ar?.creativitySection?.creativityTitle,
    subtitle:
      params.lang === "en"
        ? homeSection?.data?.en?.creativitySection?.creativitySubtitle
        : homeSection?.data?.ar?.creativitySection?.creativitySubtitle,
    description:
      params.lang === "en"
        ? homeSection?.data?.en?.creativitySection?.creativityDescription
        : homeSection?.data?.ar?.creativitySection?.creativityDescription,
    image:
      params.lang === "en"
        ? homeSection?.data?.en?.creativitySection?.creativityImage
        : homeSection?.data?.ar?.creativitySection?.creativityImage,
    creativityYearsOfExperience:
      params.lang === "en"
        ? homeSection?.data?.en?.creativitySection?.creativityYearsOfExperience
        : homeSection?.data?.ar?.creativitySection?.creativityYearsOfExperience,
  };
  const Testimonail = useSelector((state: RootState) => state.data.testimonail);
  const article = useSelector((state: RootState) => state.data?.article?.data);
  const text =
    params.lang === "en"
      ? homeSection?.data?.en?.mainBanner?.title
      : homeSection?.data?.ar?.mainBanner?.title;

  console.log("Home Data=>", homeSection);

  return (
    <div dir={direction}>
      <div className="min-h-screen flex items-center justify-center">
        <main className="dark:bg-[#02111B] bg-[#061E2C] background-img min-h-screen w-full">
          <Index
            parent={parent}
            direction={direction}
            lang={params.lang}
            type="service"
          />
          <div className="w-full max-w-[1460px] items-center grid lg:grid-cols-12 md:w-10/12 md:px-0 mx-auto lg:gap-5 py-[50px] sm:py-[150px] max-sm:py-[190px] min-[1600px]:pt-[150px]">
            <div className="flex-col order-2 lg:order-1 col-span-12 lg:col-span-4 items-center justify-center gap-[50px]">
              <div className="text-start grid grid-cols-12">
                <div className=" col-span-12 lg:col-span-8 lg:mb-[30px] mx-auto min-[1500px]:mb-[50px] my-5 lg:my-0">
                  <Counter
                    num={
                      params.lang === "en"
                        ? homeSection?.data?.en?.mainBanner?.count
                        : homeSection?.data?.ar?.mainBanner?.count
                    }
                  />
                  <p className="2xl:text-[26px] text-[20px] font-[500] text-white">
                    {params.lang === "en"
                      ? homeSection?.data?.en?.mainBanner?.completedProjects
                      : homeSection?.data?.ar?.mainBanner?.completedProjects}
                  </p>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-4 px-5 text-center border-none lg:text-start md:px-0">
                <Image
                  src={
                    params.lang === "en"
                      ? homeSection?.data?.en?.mainBanner?.image
                      : homeSection?.data?.ar?.mainBanner?.image
                  }
                  width={1000}
                  height={1000}
                  alt="image"
                  className="w-full h-full object-cover inline-flex 2xl:w-[340px] border-none md:h-[280px] md:w-[280px] 2xl:h-[340px]"
                />
              </div>
            </div>
            <div className="col-span-12 order-1 lg:order-2 px-5 lg:col-span-8 relative">
              <Image
                src={"/assets/home/Ellipse.svg"}
                width={518}
                height={518}
                alt="image"
                className="w-full h-full 2xl:w-[518px] 2xl:h-[518px] lg:w-[400px] lg:h-[400px] max-w-[600px] mx-auto lg:mx-0"
              />
              <div className="absolute top-[50%] left-[50%] translate-x-[-50%] w-[80%] sm:w-[60%] lg:w-[100%] min-[1220px]:w-[90%] min-[1300px]:w-[100%] translate-y-[-50%] ">
                <h1 className=" transform-none md:ps-20 font-[100] sm:text-start text-center leading-[113%] mb-0 text-white text-[40px] sm:text-[50px] lg:text-[50px] min-[1300px]:text-[70px] min-[1600px]:text-[90px] ">
                  <StyledText text={text} />
                </h1>
                <div className=" relative md:ps-24  sm:ps-24 mt-[20px] sm:text-start text-center">
                  <Link href={`/${params.lang}/our-services`}>
                    <p className=" relative uppercase group text-[18px] font-[400] inline-flex items-center gap-4 text-[#ffffff]">
                      {parent.homeSection.ourService}
                      <span
                        className={`${
                          direction == "ltr"
                            ? "group-hover:translate-x-[143px]  left-[-10px]"
                            : "group-hover:translate-x-[-68px] right-[-10px]"
                        } transition-all duration-1000 rounded-full absolute   w-[40px] h-[40px] bg-[#FFFFFF14]`}
                      ></span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="14"
                        className={`${
                          direction == "ltr" ? "" : "rotate-180"
                        } opacity-0 group-hover:opacity-100 transition-all duration-1000`}
                        viewBox="0 0 18 14"
                        fill="none"
                      >
                        <path
                          d="M1.08317 8.04154H14.4019L10.9717 11.4717C10.5649 11.8785 10.5649 12.5379 10.9717 12.9447C11.1754 13.1483 11.4415 13.2499 11.7082 13.2499C11.9748 13.2499 12.241 13.1483 12.4446 12.9447L17.653 7.73633C17.8483 7.54154 17.9582 7.27643 17.9582 6.99987C17.9582 6.72331 17.8483 6.45872 17.653 6.26341L12.4446 1.05508C12.0379 0.648307 11.3785 0.648307 10.9717 1.05508C10.5649 1.46185 10.5649 2.12122 10.9717 2.52799L14.4019 5.9582H1.08317C0.508171 5.9582 0.0415039 6.42487 0.0415039 6.99987C0.0415039 7.57487 0.508171 8.04154 1.08317 8.04154Z"
                          fill="white"
                        />
                      </svg>
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div className="dark:bg-[#061E2C] bg-[#F2F6F5] lg:pt-[130px] pt-[40px]">
        <Services
          direction={direction}
          parent={parent}
          bgchange={false}
          lang={params.lang}
        />
      </div>
      <div className=" dark:bg-[#061E2C]  bg-[#F2F6F5] ">
        <Creativity
          parent={
            params.lang === "en" ? homeSection?.data?.en : homeSection?.data?.ar
          }
          Data={CreativityData}
          direction={direction}
          lang={params.lang}
          showtools={false}
          show={true}
          btn={false}
        />
      </div>

      <div className="dark:bg-[#061E2C] relative lg:h-[400px] h-[150px] flex justify-center items-center bg-[#F2F6F5]">
        {sliders?.length && (
          <BrandSlider chnaged={true} bgchange={false} sliders={sliders} />
        )}
        <span className="absolute bottom-0 w-[100%] max-w-[1460px] bg-[#DEE9EE] dark:bg-[#FFFFFF14] h-[2px]"></span>
      </div>

      <Experties
        aboutpb={true}
        direction={direction}
        parent={
          params.lang === "en" ? homeSection?.data?.en : homeSection?.data?.ar
        }
        bgchange={false}
        lang={params.lang}
      />
      <Team
        parent={parent}
        bgchange={false}
        TeamMemnbers={homeTeamSection?.data?.slice(0, 3)}
        lang={params.lang}
        direction={direction}
        btn={true}
      />
      <FeatureProject
        direction={direction}
        parent={parent}
        lang={params.lang}
        LatestWork={ourWork}
      />
      <Testimonial
        parent={Testimonail?.data[0]?.data?.en?.testimonials}
        brandshow={true}
        lang={params.lang}
      />
      <Blogs
        parent={parent}
        lang={params.lang}
        direction={direction}
        data={article}
      />
      <Footer
        parent={parent}
        lang={params.lang}
        direction={direction}
        welnote={true}
      />
    </div>
  );
};
export default Home;
