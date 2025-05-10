import React from "react";
// import '../../globals.css';
import { Locale } from "../../../i18n.config";
import { getDictionary } from "@/dictionary";
import Projects from "./Projects";
import { Metadata } from "next";
import { fetchMetaData } from "@/components/Utilts/Helper";
export async function generateMetadata() {
  const metaTag = await fetchMetaData("ourWork"); 
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
      <Projects lang={lang} direction={direction} parent={parent} />
    </>
  );
}

export default Page;
