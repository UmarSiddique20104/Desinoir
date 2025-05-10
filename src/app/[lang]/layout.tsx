import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "../globals.css";
import Providers from "@/components/Themes/Provider";
import Defaultlayout from "@/components/common/Default-layout";
// const inter = Outfit({ subsets: ["latin"] });
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import { Locale } from "@/i18n.config";
import { ReduxProvider } from "@/components/redux/ReduxProvider";
import { fetchMetaData } from "@/components/Utilts/Helper";


// Font configurations
const inter = Outfit({
  subsets: ["latin"],
});
const amiri = IBM_Plex_Sans_Arabic({
  weight: "400",
  subsets: ["latin"],
});
//
export async function generateMetadata() {
  try {
    const metaTag = await fetchMetaData("home");

    return {
      title: metaTag?.title || "Default Title", // Fallback in case title is missing
      description: metaTag?.description || "Default description", // Fallback for description
      openGraph: {
        images: [
          {
            url: metaTag?.image || "/default-image.jpg", // Fallback for image
          },
        ],
      },
    };
  } catch (error) {
    console.error("Error fetching metadata:", error);
    return {
      title: "Default Title",
      description: "Default description",
      openGraph: {
        images: [
          {
            url: "/default-image.jpg",
          },
        ],
      },
    };
  }
}


export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang}>
      <head>
        <meta
          name="google-site-verification"
          content="2BZtDpO4XnG-ODViCL4V40v61KBRwjdH1zJfBszFqro"
        />
      </head>
      <ReduxProvider>
        <body
          className={`${
            params.lang == "en" ? inter.className : amiri.className
          }`}
          suppressHydrationWarning={true}
        >
          <Providers>
            <Defaultlayout>{children}</Defaultlayout>
          </Providers>
        </body>
      </ReduxProvider>
    </html>
  );
}
