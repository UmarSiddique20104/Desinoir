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
import MainServicePage from "./MainServicePage";
import { fetchMetaData } from "@/components/Utilts/Helper";
export async function generateMetadata() {
  const metaTag = await fetchMetaData("services");
  return {
    title: metaTag.title,
    description: metaTag.description,
    openGraph: {
      images: [metaTag.image],
    },
  };
}

async function Page({ params: { lang } }: { params: { lang: Locale } }) {
  const direction = lang == "en" ? "ltr" : "rtl";
  const { parent }: any = await getDictionary(lang);

  return (
    <>
      <MainServicePage lang={lang} parent={parent} direction={direction} />
    </>
  );
}
export default Page;
