import About from "./About";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/dictionary";
import { fetchMetaData } from "@/components/Utilts/Helper";

export async function generateMetadata() {
  const metaTag = await fetchMetaData("about");
  console.log("metaTag", metaTag.image);
  return {
    title: metaTag.title,
    description: metaTag.description,
    openGraph: {
      images: [metaTag.image],
    },
  };
}

async function Page({ params: { lang } }: { params: { lang: Locale } }) {
  const direction = lang === "en" ? "ltr" : "rtl";
  const { parent }: any = await getDictionary(lang);

  return (
    <div>
      <About direction={direction} parent={parent} lang={lang} />
    </div>
  );
}

export default Page;
