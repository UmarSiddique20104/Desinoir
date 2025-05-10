import React from "react";
// import '../../globals.css';
import { getDictionary } from "@/dictionary";
import { Locale } from "@/i18n.config";
import ProjectDetailsNav from "./ProjectDetailsNav";
import { fetchMetaData } from "@/components/Utilts/Helper";
export async function generateMetadata() {
  const metaTag = await fetchMetaData("ourWorkDetail");
  return {
    title: metaTag.title,
    description: metaTag.description,
    openGraph: {
      images: [metaTag.image],
    },
  };
}
async function Page({ params }: { params: { lang: Locale; slug: any } }) {
  const direction = params.lang == "en" ? "ltr" : "rtl";
  const { parent }: any = await getDictionary(params.lang);

  return (
    <>
      <ProjectDetailsNav
        parent={parent}
        direction={direction}
        lang={params.lang}
        slug={params.slug}
      />
    </>
  );
}

export default Page;
