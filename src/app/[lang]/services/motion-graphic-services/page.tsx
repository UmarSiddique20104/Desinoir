import React from "react";
// import '../../globals.css';
import { getDictionary } from "@/dictionary";
import { Locale } from "@/i18n.config";
import { Metadata } from "next";
import MotionGraphics from "@/components/services/MotionGraphics";
import { fetchMetaData } from "@/components/Utilts/Helper";
export async function generateMetadata() {
  const metaTag = await fetchMetaData("motionGraphic");
  return {
    title: metaTag.title,
    description: metaTag.description,
    openGraph: {
      images: [metaTag.image],
    },
  };
}
async function Page({ params }: { params: { lang: Locale } }) {
  const direction = params.lang == "en" ? "ltr" : "rtl";
  const { parent }: any = await getDictionary(params.lang);

  return (
    <>
      <MotionGraphics
        parent={parent}
        direction={direction}
        lang={params.lang}
      />
    </>
  );
}

export default Page;
