import Home from "@/components/HomeSection";
import { fetchMetaData } from "@/components/Utilts/Helper";
import { getDictionary } from "@/dictionary";
import { Locale } from "@/i18n.config";
import { Metadata } from "next";
import React from "react";

export default async function page({ params }: { params: { lang: Locale } }) {
  const { parent }: any = await getDictionary(params.lang);

  return (
    <div>
      <Home params={params} parent={parent} />
    </div>
  );
}
