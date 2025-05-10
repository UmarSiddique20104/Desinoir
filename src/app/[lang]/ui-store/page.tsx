import React from "react";
// import '../../globals.css';
import { Locale } from "../../../i18n.config";
import { getDictionary } from "@/dictionary";
import UiStore from "./UiStore";
import { fetchMetaData } from "@/components/Utilts/Helper";

export async function generateMetadata() {
  const metaTag = await fetchMetaData("6712340737202e2d5cc7ce6a");
  console.log("UISTORE=>", metaTag)
  return {
    title: metaTag?.title,
    description: metaTag?.description,
    openGraph: {
      images: [metaTag?.image],
    },
  };
}
async function Page({ params: { lang } }: { params: { lang: Locale } }) {
  const direction = lang == "en" ? "ltr" : "rtl";
  const { parent }: any = await getDictionary(lang);
  return (
    <>
      <UiStore lang={lang} parent={parent} direction={direction} />
    </>
  );
}

export default Page;
