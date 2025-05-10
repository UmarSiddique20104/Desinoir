import TeamPage from "@/components/TeamPage";
import { fetchMetaData } from "@/components/Utilts/Helper";
import { getDictionary } from "@/dictionary";
import { Locale } from "@/i18n.config";
import { Metadata } from "next";
import React from "react";
export async function generateMetadata() {
  const metaTag = await fetchMetaData("ourTeam"); 
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
    <div>
      <TeamPage parent={parent} direction={direction} lang={lang} />
    </div>
  );
}

export default Page;
