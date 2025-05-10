import Link from "next/link";
import { notFound } from "next/navigation";
import { Bai_Jamjuree } from "next/font/google";
import Image from "next/image";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/dictionary";
import Pagesheader from "@/components/common/Pagesheader";
import Footer from "@/components/common/Footer";
import Index from "@/components/header/Index";
const inter = Bai_Jamjuree({ subsets: ["latin"], weight: "500" });
export default async function NotFoundCatchAll({
  params,
}: {
  params: { lang: Locale };
}) {
  const direction = params.lang == "en" ? "ltr" : "rtl";
  const { parent }: any = await getDictionary(params.lang);
  return (
    <>
      <div className="min-h-full flex flex-col">
        <div className=" dark:bg-[#02111B] bg-[#061E2C] h-[90svh] w-full">
          <Index lang={params.lang} parent={parent} direction={direction} type="service" />
          <div className="h-full  ">
            <div className="w-full h-full  absolute -z-0 top-0 flex justify-center items-center">
              <Image
                src="/assets/about/404Error.png"
                alt="404"
                width={500}
                height={500}
                className="max-xl:w-[500px] xl:w-[500px] !lg:w-[500px] max-lg:w-[500px] max-md:w-[400px] 2xl:w-[750px] object-contain h-[500px]"
              />
            </div>
          </div>
        </div>
        <div className="pb-[130px] h-full pt-[130px]  dark:bg-[#061E2C]  bg-[#F2F6F5] px-5">
          <div className="text-center max-w-[700px] w-full mx-auto">
            <h4 className="lg:text-[90px] text-[30px] md:text-[50px] font-[100] leading-[113%] dark:text-white text-[#061E2C]">
              <span className="font-[500] flex flex-col">
                {parent?.footer?.heading404}{" "}
              </span>
              {parent?.footer?.heading2404}
            </h4>
            <p className="text-[18px] md:text-[20px] lg:text-[24px] font-[400] my-[30px] text-[#989CAA]">
              {parent?.footer?.description404}
            </p>
          </div>
          <div className="text-center">
            <Link
              href="/contact-us"
              className="  relative uppercase  text-[18px] font-[400] inline-flex items-center gap-4 group "
            >
              <p className="relative z-20 uppercase dark:text-[#ffffff] text-[#061E2C]">
                {parent.confused.btn}
              </p>
              <span
                className={`${
                  direction == "ltr"
                    ? "group-hover:translate-x-[125px] left-[-10px]"
                    : "group-hover:translate-x-[-65px] right-[-10px]"
                } rounded-full absolute top-[-7px] z-[0] transition-all duration-1000 left-[-5px] w-[40px] h-[40px] bg-[#197BFF]`}
              ></span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`${
                  direction == "ltr" ? "" : "rotate-[180deg]"
                } fill-[#000d1e] group-hover:fill-[#ffffff] transition-all duration-1200 dark:fill-white relative z-10 `}
                width="18"
                height="14"
                viewBox="0 0 18 14"
              >
                <path d="M1.08317 8.04154H14.4019L10.9717 11.4717C10.5649 11.8785 10.5649 12.5379 10.9717 12.9447C11.1754 13.1483 11.4415 13.2499 11.7082 13.2499C11.9748 13.2499 12.241 13.1483 12.4446 12.9447L17.653 7.73633C17.8483 7.54154 17.9582 7.27643 17.9582 6.99987C17.9582 6.72331 17.8483 6.45872 17.653 6.26341L12.4446 1.05508C12.0379 0.648307 11.3785 0.648307 10.9717 1.05508C10.5649 1.46185 10.5649 2.12122 10.9717 2.52799L14.4019 5.9582H1.08317C0.508171 5.9582 0.0415039 6.42487 0.0415039 6.99987C0.0415039 7.57487 0.508171 8.04154 1.08317 8.04154Z" />
              </svg>
            </Link>
          </div>
        </div>
        <Footer
          parent={parent}
          lang={params.lang}
          direction={direction}
          welnote={false}
        />
      </div>
    </>
  );
}
