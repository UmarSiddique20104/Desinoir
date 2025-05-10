"use client";
import Branding from "@/components/About/Branding";
import ChooseUs from "@/components/About/ChooseUs";
import CompletedProjects from "@/components/CompletedProjects";
import Footer from "@/components/common/Footer";
import Pagesheader from "@/components/common/Pagesheader";
import Testimonial from "@/components/common/Testimonials";
import Creativity from "@/components/home/Creativity";
import Experties from "@/components/home/Experties";
import Team from "@/components/home/Team";
import { RootState } from "@/components/redux/store";
// import { getDictionary } from "@/dictionary";
// import { Locale } from "@/i18n.config";
// import { Metadata } from "next";
import React from "react";
import { useSelector } from "react-redux";

const points = {
  pt1: `UI/UX Designing`,
  pt2: `Branding`,
  pt3: `Graphic Designing`,
  pt4: `Motion Graphic Designing`,
};
const pointsArabic = {
  pt1: "تصميم واجهة المستخدم / تجربة المستخدم",
  pt2: "تسويق العلامة التجارية",
  pt3: "تصميم الجرافيك",
  pt4: "تصميم الجرافيك المتحرك",
};
const Teams = [
  {
    id: 1,
    img: "/assets/about/shehzad.png",
    img2: "/assets/about/shehzad.color.png",
    name: "Shahzad Jameel",
    arabicname: "شهزاد جميل",
    role: "Founder",
    arabicrole: "مؤسس",
  },
  {
    id: 2,
    img: "/assets/about/umar.png",
    img2: "/assets/about/umar.color.png",
    name: "Muhammad Umer",
    arabicname: "محمد عمر",
    role: "CEO",
    arabicrole: " المدير التنفيذي",
  },
  {
    id: 3,
    img: "/assets/about/umar.J.png",
    img2: "/assets/about/umar.jcolor.png",
    name: "Umer Maqsood",
    arabicname: "عمر مقصود",
    role: "UI/UX Expert",
    arabicrole: "خبير واجهة المستخدم/تجربة المستخدم",
  },
];

function About({ direction, lang, parent }: any) {
  const homeSection = useSelector((state: RootState) => state.data.homeSection);
  const homeTeamSection = useSelector(
    (state: RootState) => state.data.teamMember
  );
  const Testimonail = useSelector((state: RootState) => state.data?.testimonail);
  const about = useSelector((state: RootState) => state.data?.about);
  const sliders = useSelector((state: RootState) => state.data.slide?.data);
  const aboutHeader = useSelector(
    (state: RootState) => state?.data?.header?.data?.[0]?.headerTitle || " "
  );
  const CreativityData: any = {
    title:
      lang === "en"
        ? about?.data?.en?.creativitySection?.title
        : about?.data?.ar?.creativitySection?.title,
    subtitle:
      lang === "en"
        ? about?.data?.en?.creativitySection?.subtitle
        : about?.data?.ar?.creativitySection?.subtitle,
    description:
      lang === "en"
        ? about?.data?.en?.creativitySection?.description
        : about?.data?.ar?.creativitySection?.description,
    image:
      lang === "en"
        ? about?.data?.en?.creativitySection?.image
        : about?.data?.ar?.creativitySection?.image,
    creativityYearsOfExperience:
      lang === "en"
        ? about?.data?.en?.creativitySection?.creativityYearsOfExperience
        : about?.data?.ar?.creativitySection?.creativityYearsOfExperience,
  };
  return (
    <div dir={direction}>
      <Pagesheader
        direction={direction}
        type="about"
        lang={lang}
        parent={parent}
        txt1={aboutHeader}
        txt2={aboutHeader}
        img="/assets/about/OBJECTS.svg"
      />
      <div>
        <Creativity
          direction={direction}
          parent={lang === "en" ? about?.data?.en : about?.data?.ar}
          Data={CreativityData}
          lang={lang}
          showtools={true}
          tools={lang == "en" ? points : pointsArabic}
          show={false}
          btn={true}
        />
      </div>
      <CompletedProjects
        parent={lang === "en" ? about?.data?.en : about?.data?.ar}
        lang={lang}
      />
      {sliders?.length && <Branding sliders={sliders} />}
      <div className=" dark:bg-[#061E2C] bg-[#F2F6F5] pt-[30px]   lg:pt-[130px]">
        <ChooseUs
          parent={
            lang === "en"
              ? about?.data?.en?.whyDesignoir
              : about?.data?.ar?.whyDesignoir
          }
          lang={lang}
        />
      </div>
      <div className="">
        <Testimonial
          parent={Testimonail?.data[0]?.data?.en?.testimonials}
          brandshow={true}
          lang={lang}
        />
      </div>
      <Team
        parent={parent}
        bgchange={false}
        direction={direction}
        lang={lang}
        TeamMemnbers={homeTeamSection?.data.slice(0, 3)}
        btn={true}
      />
      <Experties
        aboutpb={false}
        parent={lang === "en" ? homeSection?.data?.en : homeSection?.data?.ar}
        direction={direction}
        lang={lang}
      />
      <Footer
        direction={direction}
        lang={lang}
        parent={parent}
        welnote={false}
      />
    </div>
  );
}

export default About;
