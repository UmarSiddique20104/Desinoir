import React from "react";
// import '../../globals.css';
import { Locale } from "../../../i18n.config";
import { getDictionary } from "@/dictionary";
import NavArticles from "./NavArticles";
import Pagesheader from "@/components/common/Pagesheader";
import { Metadata } from "next";
import { useSelector } from "react-redux";
import { RootState } from "@/components/redux/store";
import { fetchMetaData } from "@/components/Utilts/Helper";
export async function generateMetadata() {
  const metaTag = await fetchMetaData("6712ccd113afdf18a566279e"); 
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
    <div dir={direction}>
      <NavArticles lang={lang} parent={parent} direction={direction} />
    </div>
  );
}

export default Page;
