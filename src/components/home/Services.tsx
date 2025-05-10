"use client";
import { Bai_Jamjuree } from "next/font/google";
const inter = Bai_Jamjuree({ subsets: ["latin"], weight: "500" });
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { fetchHeader, fetchHomeData } from "../Utilts/Helper";
import { setHeader, setHomeSection } from "../redux/slicedata";

function ServiceItem({
  icon,
  title,
  expertise,
  link,
  type,
  lang,
  bgchange,
  viewmore,
  direction,
  expertise2,
  description,
  index,
}: any) {
  const [iconPosition, setIconPosition] = useState({ x: 0, y: 0 });
  const [isIconVisible, setIsIconVisible] = useState(false);
  const dispatch = useDispatch();
  const handleClick = async (type: any) => {
    try {
      const header = await fetchHeader(lang, type);
      dispatch(setHeader(header));
    } catch (error) {
      console.error("Failed to fetch FAQs:", error);
    }
  };
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const newPosX =
      direction == "ltr"
        ? e.clientX - e.currentTarget.getBoundingClientRect().left - 0
        : e.clientX - e.currentTarget.getBoundingClientRect().right - 0;
    const newPosY =
      e.clientY - e.currentTarget.getBoundingClientRect().top - 120;
    setIconPosition({ x: newPosX, y: newPosY });
    setIsIconVisible(true);
  };

  const handleMouseLeave = () => {
    setIsIconVisible(false);
  };

  return (
    <div
      dir={direction}
      className={`border-b-[1px] ${bgchange
          ? "border-[#FFFFFF14]"
          : "border-[#00000013] dark:border-[#FFFFFF14]"
        } border-t-[1px] py-[50px] relative  cursor-pointer`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-start flex-wrap px-5 md:justify-between relative">
        <div className="w-2/12 sm:w-1/12">
          <Image src={icon} width={80} height={80} alt="icon" />
        </div>
        <div className="ms-5 md:ms-0 w-8/12 md:w-3/12">
          <h4
            className={`font-[500] ${bgchange ? "text-[#ffffff]" : "dark:text-white text-[#061E2C]"
              } tracking-[-0.5px] text-[30px]  mb-0 `}
          >
            {title}
          </h4>
          <h4
            className={` ${inter.className}  ${bgchange ? "text-[#ffffff]" : "dark:text-white text-[#061E2C]"
              } outlinee-bg leading-normal text-[100px] mb-0 opacity-[0.4]`}
          >
            0{index + 1}
          </h4>
        </div>
        <div className="w-full md:w-5/12 md:px-5">
          <p
            className={`mb-0 text-[16px] font-[400] ${bgchange ? "text-[#989CAA]" : "text-[#989CAA]"
              } `}
          >
            <div>
              <div
                className="customQuill dark:quillDark customQuillMain"
                dangerouslySetInnerHTML={{
                  __html: description,
                }}
              />
            </div>
          </p>
          {/* <ul className="text-[16px] font-[400] text-[#989CAA] mt-[20px] relative">
            <li className="flex items-center gap-[10px] cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="14"
                viewBox="0 0 18 14"
                fill="none"
              >
                <path
                  d="M16.9003 0.742062C16.6838 0.748512 16.4783 0.838995 16.3273 0.99434L6.0832 11.2385L1.67239 6.82767C1.5956 6.7477 1.50363 6.68384 1.40186 6.63986C1.30008 6.59587 1.19055 6.57263 1.07969 6.5715C0.968821 6.57037 0.858843 6.59138 0.756196 6.63329C0.653548 6.67519 0.560294 6.73716 0.481895 6.81556C0.403496 6.89396 0.341528 6.98721 0.299621 7.08986C0.257713 7.19251 0.236708 7.30249 0.237836 7.41335C0.238964 7.52422 0.262202 7.63375 0.306189 7.73552C0.350176 7.8373 0.414029 7.92927 0.494006 8.00606L5.49401 13.0061C5.65029 13.1623 5.86222 13.25 6.0832 13.25C6.30417 13.25 6.51611 13.1623 6.67239 13.0061L17.5057 2.17273C17.6261 2.05567 17.7084 1.90497 17.7417 1.74037C17.775 1.57577 17.7578 1.40495 17.6923 1.2503C17.6269 1.09564 17.5162 0.964369 17.3749 0.873678C17.2336 0.782988 17.0681 0.737111 16.9003 0.742062Z"
                  fill="#989CAA"
                />
              </svg>
              <span className="text-[#989CAA]">{expertise}</span>
            </li>
            <li className="flex items-center gap-[10px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="14"
                viewBox="0 0 18 14"
                fill="none"
              >
                <path
                  d="M16.9003 0.742062C16.6838 0.748512 16.4783 0.838995 16.3273 0.99434L6.0832 11.2385L1.67239 6.82767C1.5956 6.7477 1.50363 6.68384 1.40186 6.63986C1.30008 6.59587 1.19055 6.57263 1.07969 6.5715C0.968821 6.57037 0.858843 6.59138 0.756196 6.63329C0.653548 6.67519 0.560294 6.73716 0.481895 6.81556C0.403496 6.89396 0.341528 6.98721 0.299621 7.08986C0.257713 7.19251 0.236708 7.30249 0.237836 7.41335C0.238964 7.52422 0.262202 7.63375 0.306189 7.73552C0.350176 7.8373 0.414029 7.92927 0.494006 8.00606L5.49401 13.0061C5.65029 13.1623 5.86222 13.25 6.0832 13.25C6.30417 13.25 6.51611 13.1623 6.67239 13.0061L17.5057 2.17273C17.6261 2.05567 17.7084 1.90497 17.7417 1.74037C17.775 1.57577 17.7578 1.40495 17.6923 1.2503C17.6269 1.09564 17.5162 0.964369 17.3749 0.873678C17.2336 0.782988 17.0681 0.737111 16.9003 0.742062Z"
                  fill="#989CAA"
                />
              </svg>
              <span className="text-[#989CAA]">{expertise2}</span>
            </li>
          </ul> */}
        </div>
        <div className="w-full md:w-2/12 my-auto relative flex px-5 md:px-0 max-md:mt-10 md:justify-center">
          <Link href={`/${lang}${link}`}>
            <p
              className={`relative z-20 uppercase text-[18px] lg:text-[17px] ${bgchange
                  ? "text-[#ffffff]"
                  : "dark:text-[#ffffff] text-[#061E2C]"
                } font-[400] inline-flex items-center gap-4 group `}
              onClick={() => handleClick(type)}
            >
              {viewmore}
              <span
                className={`${direction == "ltr"
                    ? "group-hover:translate-x-[120px] left-[-10px]"
                    : "group-hover:translate-x-[-92px] right-[-10px]"
                  } z-[-1] ${bgchange
                    ? "bg-[#FFFFFF14]"
                    : "dark:bg-[#FFFFFF14] bg-[#ECECEC]"
                  } rounded-full absolute w-[40px] h-[40px] transition-all duration-1000 `}
              ></span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="14"
                viewBox="0 0 18 14"
                className={`${direction == "ltr" ? "" : "rotate-[180deg]"} ${bgchange ? "fill-[#ffffff]" : "dark:fill-white fill-[#061E2C]"
                  } opacity-0 group-hover:opacity-100 transition-all duration-1000`}
              >
                <path d="M1.08317 8.04154H14.4019L10.9717 11.4717C10.5649 11.8785 10.5649 12.5379 10.9717 12.9447C11.1754 13.1483 11.4415 13.2499 11.7082 13.2499C11.9748 13.2499 12.241 13.1483 12.4446 12.9447L17.653 7.73633C17.8483 7.54154 17.9582 7.27643 17.9582 6.99987C17.9582 6.72331 17.8483 6.45872 17.653 6.26341L12.4446 1.05508C12.0379 0.648307 11.3785 0.648307 10.9717 1.05508C10.5649 1.46185 10.5649 2.12122 10.9717 2.52799L14.4019 5.9582H1.08317C0.508171 5.9582 0.0415039 6.42487 0.0415039 6.99987C0.0415039 7.57487 0.508171 8.04154 1.08317 8.04154Z" />
              </svg>
            </p>
          </Link>
        </div>
        {isIconVisible && (
          <Image
            dir={direction}
            src={icon}
            width={150}
            height={150}
            alt="moving icon"
            className="absolute top-0 transition-transform duration-100"
            style={{
              transform: `translate3d(${iconPosition.x}px, ${iconPosition.y}px, 0)`,
            }}
          />
        )}
      </div>
    </div>
  );
}

export default function Services({ bgchange, parent, direction, lang }: any) {
  const dispatch = useDispatch();
  const homeSection = useSelector((state: RootState) => state.data.homeSection);
  const servicesData = [
    {
      id: 1,
      type: "670fa0d2ee6cc63acd780dbf",
      viewmore: lang === "en" ? "VIEW MORE" : "عرض المزيد",
      icon:
        lang === "en"
          ? homeSection?.data?.en?.serviceSection?.uiuxIcon
          : homeSection?.data?.ar?.serviceSection?.uiuxIcon,
      title:
        lang === "en"
          ? homeSection?.data?.en?.serviceSection?.uiuxTitle
          : homeSection?.data?.ar?.serviceSection?.uiuxTitle,
      expertise:
        lang === "en" ? "User Interface Design" : "تصميم واجهة المستخدم",
      expertise2:
        lang === "en" ? "User Experience Design" : "تصميم تجربة المستخدم",
      link: "/services/ui-ux-design-services",

      description:
        lang === "en"
          ? homeSection?.data?.en?.serviceSection?.uiuxDescription
          : homeSection?.data?.ar?.serviceSection?.uiuxDescription,
    },
    {
      id: 2,
      type: "670fcab23d7506c7a1441a54",
      viewmore: lang === "en" ? "VIEW MORE" : "عرض المزيد",
      icon:
        lang === "en"
          ? homeSection?.data?.en?.serviceSection?.brandingIcon
          : homeSection?.data?.ar?.serviceSection?.brandingIcon,
      title:
        lang === "en"
          ? homeSection?.data?.en?.serviceSection?.brandingTitle
          : homeSection?.data?.ar?.serviceSection?.brandingTitle,
      expertise:
        lang === "en" ? "Brand Strategy" : "استراتيجية العلامة التجارية",
      expertise2: lang === "en" ? "Brand Identity" : "هوية العلامة التجارية",
      link: "/services/brand-identity-design-services",

      description:
        lang === "en"
          ? homeSection?.data?.en?.serviceSection?.brandingDescription
          : homeSection?.data?.ar?.serviceSection?.brandingDescription,
    },
    {
      id: 3,
      type: "670fbe5434c1b0ab899f167d",
      viewmore: lang === "en" ? "VIEW MORE" : "عرض المزيد",
      icon:
        lang === "en"
          ? homeSection?.data?.en?.serviceSection?.graphicDesignIcon
          : homeSection?.data?.ar?.serviceSection?.graphicDesignIcon,
      title:
        lang === "en"
          ? homeSection?.data?.en?.serviceSection?.graphicDesignTitle
          : homeSection?.data?.ar?.serviceSection?.graphicDesignTitle,
      expertise: lang === "en" ? "Digital Design" : "تصميم رقمي",
      expertise2: lang === "en" ? "Print Design" : "تصميم الطباعة",
      link: "/services/graphic-design-services",
      description:
        lang === "en"
          ? homeSection?.data?.en?.serviceSection?.graphicDesignDescription
          : homeSection?.data?.ar?.serviceSection?.graphicDesignDescription,
    },
    {
      id: 4,
      type: "67113f72f4000f7bc55137bb",
      viewmore: lang === "en" ? "VIEW MORE" : "عرض المزيد",
      icon:
        lang === "en"
          ? homeSection?.data?.en?.serviceSection?.motionGraphicDesignIcon
          : homeSection?.data?.ar?.serviceSection?.motionGraphicDesignIcon,
      title:
        lang === "en"
          ? homeSection?.data?.en?.serviceSection?.motionGraphicDesignTitle
          : homeSection?.data?.ar?.serviceSection?.motionGraphicDesignTitle,
      expertise: lang === "en" ? "Infographics" : "إنفوجرافيك",
      expertise2:
        lang === "en"
          ? "Social Media Videos"
          : "مقاطع الفيديو على وسائل التواصل الاجتماعي",
      link: "/services/motion-graphic-services",
      description:
        lang === "en"
          ? homeSection?.data?.en?.serviceSection?.motionGraphicDesignDescription
          : homeSection?.data?.ar?.serviceSection?.motionGraphicDesignDescription,
    },
  ];

  const servicesDataArabic = [
    {
      id: 1,
      viewmore: "عرض المزيد",
      icon: "/assets/home/view_quilt.svg",
      title: "تصميم واجهة المستخدم/تجربة المستخدم",
      expertise: "تصميم واجهة المستخدم",
      expertise2: "تصميم تجربة المستخدم",
      link: "/services/ui-ux-design-services",
      description:
        "نقوم بخلق تجارب رقمية بديهية وجذابة لجمهورك المستهدف. تتضمن خدمات تصميم واجهة المستخدم/تجربة المستخدم تصميم واجهة تطبيقات الويب والهواتف المحمولة، تصميم واجهة المستخدم وتصميم تجربة المستخدم، تصميم التفاعل، وأكثر من ذلك.",
    },
    {
      id: 2,
      viewmore: "عرض المزيد",
      icon: "/assets/home/branding.svg",
      title: "العلامة التجارية",
      expertise: "استراتيجية العلامة التجارية",
      expertise2: "هوية العلامة التجارية",
      link: "/services/brand-identity-design-services",
      description:
        "نساعد الشركات على إقامة تمثيل بصري قوي من خلال أنظمة الهوية الإبداعية. تتضمن خدمات العلامة التجارية لدينا استراتيجية وتموضعًا، تصميم الشعار والهوية، إرشادات العلامة التجارية، وأكثر من ذلك.",
    },
    {
      id: 3,
      viewmore: "عرض المزيد",
      icon: "/assets/home/create_icon.svg",
      title: "تصميم واجهة المستخدم/تجربة المستخدم",
      expertise: "تصميم رقمي",
      expertise2: "تصميم الطباعة",
      link: "/services/graphic-design-services",
      description:
        "نقوم بخلق تجارب رقمية بديهية وجذابة لجمهورك المستهدف. تتضمن خدمات تصميم واجهة المستخدم/تجربة المستخدم تصميم واجهة تطبيقات الويب والهواتف المحمولة، تصميم واجهة المستخدم وتصميم تجربة المستخدم، تصميم التفاعل، وأكثر من ذلك.",
    },
    {
      id: 4,
      viewmore: "عرض المزيد",
      icon: "/assets/home/cinema_film_play.svg",
      title: "العلامة التجارية",
      expertise: "إنفوجرافيك",
      link: "/services/motion-graphic-services",
      expertise2: "مقاطع الفيديو على وسائل التواصل الاجتماعي",
      description:
        "نساعد الشركات على إقامة تمثيل بصري قوي من خلال أنظمة الهوية الإبداعية. تتضمن خدمات العلامة التجارية لدينا استراتيجية وتموضعًا، تصميم الشعار والهوية، إرشادات العلامة التجارية، وأكثر من ذلك.",
    },
  ];

  return (
    <section
      dir={`${direction}`}
      className={`${bgchange
          ? "dark:bg-[#02111B] bg-[#061E2C]"
          : "dark:bg-[#061E2C] bg-[#F2F6F5]"
        } overflow-hidden`}
    >
      <div className="max-w-[1460px] md:w-10/12 mx-auto ">
        <div className="w-full  px-5 md:px-0 md:w-1/2 mb-[40px]">
          <h2 className="uppercase dark:text-[#EFCB1C] text-[#FF895B] text-[20px]">
            {lang === "en"
              ? homeSection?.data?.en?.serviceSection?.mainServiceTitle
              : homeSection?.data?.ar?.serviceSection?.mainServiceTitle}
          </h2>
          <h3
            className={`text-[30px] lg:text-[50px] mb-0 font-[500] ${bgchange ? "text-[#ffffff]" : "dark:text-[#ffffff] text-[#061E2C]"
              }  leading-normal max-md:leading-[60px]`}
          >
            <h3 className={`block`}>
              {lang === "en"
                ? homeSection?.data?.en?.serviceSection?.mainServiceSubTitle
                : homeSection?.data?.ar?.serviceSection?.mainServiceSubTitle}
            </h3>
            {/* <h3 className={`block`}>
              {parent?.offerSection?.TurnInformation2}
            </h3> */}
          </h3>
        </div>
        {direction === "ltr"
          ? servicesData.map((service, index) => (
            <ServiceItem
              index={index}
              direction={direction}
              lang={lang}
              bgchange={bgchange}
              key={service.id}
              {...service}
            />
          ))
          : servicesData.map((service, index) => (
            <ServiceItem
              index={index}
              direction={direction}
              lang={lang}
              bgchange={bgchange}
              key={service.id}
              {...service}
            />
          ))}
      </div>
    </section>
  );
}
