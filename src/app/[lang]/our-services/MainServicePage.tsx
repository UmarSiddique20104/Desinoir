"use client";
import Branding from "@/components/About/Branding";
import ChooseUs from "@/components/About/ChooseUs";
import Footer from "@/components/common/Footer";
import Pagesheader from "@/components/common/Pagesheader";
import Testimonial from "@/components/common/Testimonials";
import Experties from "@/components/home/Experties";
import Services from "@/components/home/Services";
import { RootState } from "@/components/redux/store";
import { getDictionary } from "@/dictionary";
import { Locale } from "@/i18n.config";
import { Metadata } from "next";
import React from "react";
import { useSelector } from "react-redux";

const MainServicePage = ({ parent, lang }: any) => {
  const direction = lang == "en" ? "ltr" : "rtl";
  const sliders = useSelector((state: RootState) => state?.data?.slide?.data);
  const Testimonail = useSelector((state: RootState) => state?.data?.testimonail);
  const about = useSelector((state: RootState) => state?.data?.about);
  const homeSection = useSelector((state: RootState) => state?.data?.homeSection);
  const serviceHeader = useSelector(
    (state: RootState) => state?.data?.header?.data?.[0]?.headerTitle || " "
  );

  return (
    <div>
      <Pagesheader
        txt1={serviceHeader}
        type="service"
        txt2="service"
        img="/assets/about/OBJECTS3.png"
        parent={parent}
        lang={lang}
        direction={direction}
      />
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
      <div className="dark:bg-[#02111B] bg-[#061E2C]  lg:py-[90px] p-[40px]">
        <Services
          parent={parent}
          direction={direction}
          lang={lang}
          bgchange={true}
        />
      </div>

      <Testimonial
        parent={Testimonail?.data[0]?.data?.en?.testimonials}
        brandshow={true}
        lang={lang}
      />
      <Experties
        aboutpb={true}
        direction={direction}
        parent={lang === "en" ? homeSection?.data?.en : homeSection?.data?.ar}
        bgchange={false}
        lang={lang}
      />
      {sliders?.length && <Branding sliders={sliders} />}
      <Footer
        parent={parent}
        direction={direction}
        lang={lang}
        welnote={true}
      />
    </div>
  );
};

export default MainServicePage;
