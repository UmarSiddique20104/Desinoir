import React from "react";
import { getDictionary } from "@/dictionary";
import { Locale } from "@/i18n.config";
import { Metadata } from "next";
import Branding from "@/components/services/Branding";
import { fetchMetaData, fetchPages } from "@/components/Utilts/Helper";
export async function generateMetadata() {
  const pages = await fetchPages();

  if (Array.isArray(pages.data)) {
    const pagedata = pages.data.find(
      (page: any) => page.pages.toLowerCase() === "branding service".toLowerCase()
    );

    console.log("pagedata ----", pagedata); // For debugging purposes

    if (pagedata) {
      // Fetch metadata based on the page ID or another field if needed
      const metaTag = await fetchMetaData(pagedata._id);

      return {
        title: metaTag?.title || "Desinoir | Branding Service ",
        description: metaTag?.description || "Desinoir",
        openGraph: {
          images: [metaTag?.image || ""],
        },
      };
    } else {
      console.log("Ui/Ux Service page not found");
    }
  } else {
    console.error("pages.data is not an array");
  }
}
async function Page({ params }: { params: { lang: Locale } }) {
  const direction = params.lang == "en" ? "ltr" : "rtl";
  const { parent }: any = await getDictionary(params.lang);

  return (
    <>
      <Branding parent={parent} direction={direction} lang={params.lang} />
    </>
  );
}

export default Page;
