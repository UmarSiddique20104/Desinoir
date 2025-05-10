import React from "react";
// import '../../globals.css';
import { getDictionary } from "@/dictionary";
import { Locale } from "@/i18n.config";
import ArticleDetailsNew from "./ArticleDetailsNew";
import { Metadata } from "next";
import { fetchMetaData } from "@/components/Utilts/Helper";
export async function generateMetadata() {
  const metaTag = await fetchMetaData("articleDetail");
  return {
    title: metaTag.title,
    description: metaTag.description,
    openGraph: {
      images: [metaTag.image],
    },
  };
}
async function Page({ params }: { params: { lang: Locale; slug: string } }) {
  const { parent }: any = await getDictionary(params.lang);
  const article = decodeURIComponent(params.slug).replace(/-/g, " ");

  return (
    <>
      <ArticleDetailsNew slug={article} parent={parent} lang={params.lang} />
    </>
  );
}

export default Page;
