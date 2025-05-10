"use client";
import Pagesheader from "@/components/common/Pagesheader";
import Image from "next/image";
import React from "react";
import Footer from "@/components/common/Footer";
import StillConfused from "@/components/common/StillConfused";
import Accordion from "@/components/common/Accordion";
import { useTheme } from "next-themes";
import Link from "next/link";
import Accordion2 from "../common/Accordion2";
import Blog2 from "../Blog2";
import FeatureProject from "../FeatureProject";
import Testimonial from "../common/Testimonials";
import BrandSlider2 from "../common/Slider2";
import ServiceDetails2 from "../About/servicedetails2";
import ServiceDetails3 from "../About/servicedetails3";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
const items = [
  {
    title: "Initial Consultation and Needs Assessment",
    content:
      "We begin by discussing your objectives and what you hope to achieve. Then, jointly, we developed a strategy.",
  },
  {
    title: "Wireframing and Prototyping",
    content:
      "To begin, we create wireframes, which are simply sketches that show you the general layout of your product. This enables us to receive your input at an early stage of the UX/UI design process.",
  },
  {
    title: "User Research and Testing",
    content:
      "After that, we develop a test version, or prototype, of your product so you can try it and provide feedback.",
  },
  {
    title: "Iterative Design and Development",
    content:
      "We take your feedback and make changes to the prototype until you're happy",
  },
  {
    title: "Final Delivery and Optimization",
    content:
      "Once everything looks perfect, we give you the final designs, ready for your developers to turn them into a real product.",
  },
];

const items2 = [
  {
    title: "Why hire a professional UI/UX design company in Texas?",
    content:
      "User interaction and product value are greatly affected by skilled UI/UX design. Better brand awareness, happier customers, and more revenue are possible outcomes.",
  },
  {
    title: "How do I get started with Desinoir's UI/UX design services?",
    content:
      "Please get in touch with us by email or phone. We'll arrange a meeting so that we can talk about the project and get you a free estimate.",
  },
  {
    title: "What are the services of UI/UX design?",
    content:
      "We handle every aspect of the project — from designing the functionality of your product to doing user research (interviewing your target market).",
  },
  {
    title: "What does UI/UX design do?",
    content:
      "Making a product that is both enjoyable and easy to use is the primary goal of UI/UX design. And in simple words, giving your clients an amazing experience.",
  },
  {
    title: "How much do UI/UX designers charge?",
    content:
      "It is based upon your requirements. According to the size and scope of your project, we will provide you with a personalized quotation.",
  },
  {
    title: "What is UX and service design?",
    content:
      "User Experience (UX) design is centered around the user's experience with your product. Service design, on the other hand, is a more broad concept that takes into account every encounter a consumer has with your company, online and off.",
  },
];
const itemsArabic2 = [
  {
    title: "لماذا توظيف شركة تصميم UI/UX محترفة في تكساس؟",
    content:
      "تأثر تفاعل المستخدم وقيمة المنتج بشكل كبير بتصميم UI/UX المهاري. يمكن أن تكون النتائج وعي أكبر بالعلامة التجارية، عملاء أكثر سعادة، وإيرادات أعلى.",
  },
  {
    title: "كيف أبدأ مع خدمات تصميم UI/UX من Desinoir؟",
    content:
      "يرجى التواصل معنا عبر البريد الإلكتروني أو الهاتف. سنقوم بترتيب اجتماع للحديث عن المشروع وتقديم تقدير مجاني لك.",
  },
  {
    title: "ما هي خدمات تصميم UI/UX؟",
    content:
      "نتعامل مع كل جانب من جوانب المشروع — من تصميم وظيفة منتجك إلى إجراء بحث المستخدم (مقابلة السوق المستهدف).",
  },
  {
    title: "ما هو دور تصميم UI/UX؟",
    content:
      "الهدف الرئيسي من تصميم UI/UX هو إنشاء منتج ممتع وسهل الاستخدام. وبكلمات بسيطة، توفير تجربة رائعة لعملائك.",
  },
  {
    title: "كم يتقاضى مصممو UI/UX؟",
    content:
      "يعتمد ذلك على متطلباتك. وفقًا لحجم ونطاق مشروعك، سنقدم لك عرض سعر مخصص.",
  },
  {
    title: "ما هو تصميم UX وتصميم الخدمات؟",
    content:
      "تصميم تجربة المستخدم (UX) يتمحور حول تجربة المستخدم مع منتجك. أما تصميم الخدمات، فهو مفهوم أوسع يأخذ في الاعتبار كل تفاعل للمستهلك مع شركتك، سواء عبر الإنترنت أو خارجه.",
  },
];

const itemsArabic = [
  {
    title: "التشاور الأولي وتقييم الاحتياجات",
    content:
      "نبدأ بمناقشة أهدافك وما تأمل في تحقيقه. ثم نقوم بتطوير استراتيجية مشتركة.",
  },
  {
    title: "تصميم الإطارات والنماذج الأولية",
    content:
      "للبدء، نقوم بإنشاء إطارات سلكية، وهي ببساطة رسومات تظهر لك التخطيط العام لمنتجك. هذا يمكننا من تلقي ملاحظاتك في مرحلة مبكرة من عملية تصميم واجهة المستخدم/تجربة المستخدم.",
  },
  {
    title: "بحث المستخدم والاختبار",
    content:
      "بعد ذلك، نقوم بتطوير نسخة تجريبية، أو نموذج أولي، من منتجك بحيث يمكنك تجربته وتقديم ملاحظاتك.",
  },
  {
    title: "التصميم والتطوير التكراري",
    content: "نأخذ ملاحظاتك ونجري تغييرات على النموذج الأولي حتى تكون سعيدًا.",
  },
  {
    title: "التسليم النهائي والتحسين",
    content:
      "بمجرد أن يكون كل شيء مثاليًا، نقدم لك التصاميم النهائية، جاهزة للمطورين لتحويلها إلى منتج حقيقي.",
  },
];

function DetailPage({ parent, lang, direction }: any) {
  const { theme, setTheme } = useTheme();

  const data = parent.UIUXDetail;
  const service = useSelector(
    (state: RootState) => state.data.service?.data[0]
  );
  // console.log("Service UIUX=>", service);
  const faqs = useSelector((state: RootState) => state.data.faqs?.data);
  const sliders = useSelector((state: RootState) => state.data.slide?.data);
  const Testimonail = useSelector((state: RootState) => state.data.testimonail);
  const ourWork = useSelector((state: RootState) => state.data.ourwork?.data);
  const Type = useSelector((state: RootState) => state.data.types);
  const uiuxHeader = useSelector(
    (state: RootState) => state?.data?.header?.data?.[0]?.headerTitle || " "
  );
  console.log("Type ------------",Type)

  return (
    <div dir={direction} className="bg-[#F2F6F5] dark:bg-[#061E2C]">
      <div className="">
        <Pagesheader
          parent={parent}
          direction={direction}
          type="670fa0d2ee6cc63acd780dbf"
          lang={lang}
          txt1={uiuxHeader}
          txt2={data.mainHeading2}
          img=""
          imgshow={false}
        />
        <div className="dark:bg-[#061E2C]   py-[20px] bg-[#F2F6F5]">
          <div className=" grid w-full max-w-[1460px] md:w-10/12 mx-auto max-md:px-5 grid-cols-12  lg:pt-[130px] pt-[50px]  ">
            <div className=" col-span-12 w-full min-h-svh lg:col-span-7     text-white">
              <Image
                quality={100}
                src={service?.servicePrimaryImage}
                width={792}
                height={445}
                alt="image"
                className="col-span-12 object-cover rounded-[30px] w-full h-full  lg:col-span-7 min-[1600px]:col-start-1"
              />
            </div>
            <div className="col-span-12 max-lg:pt-4 lg:col-span-5 col-start-1 lg:col-start-8 lg:ps-10 ">
              <div className="h-full justify-start text-start flex flex-col gap-[40px]">
                <div className="flex flex-col gap-[15px]">
                  <h3 className="lg:text-[16px] w-[80%] text-[14px] font-[500] leading-[32px] dark:text-white text-[#061E2C]">
                    {service?.serviceTitle}
                  </h3>
                  <p className="text-[#434750] dark:text-[#989CAA] font-[400] text-[16px]">
                    {/* {service?.serviceDescription} */}
                    <div>
                      <div
                        className="customQuill dark:quillDark customQuillMain"
                        dangerouslySetInnerHTML={{
                          __html: service?.serviceDescription,
                        }}
                      />
                    </div>
                  </p>
                </div>
                <div className="">
                  <Link
                    href={`/${lang}/contact-us`}
                    className="  relative uppercase mt-[30px] text-[18px] font-[400] inline-flex items-center gap-4 group "
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
            </div>
          </div>
        </div>
        <div className="mx-auto 2xl:container">
          <ServiceDetails3
            lang={lang}
            direction={direction}
            data={data}
            service={service}
          />
        </div>

        <div className="text-center max-w-[1460px] mx-auto  md:w-10/12 lg:pt-0">
          {theme === "light" ? (
            <Image
              quality={100}
              src={service?.serviceSecondaryImage}
              alt="map"
              width={1460}
              height={710}
              className="mx-auto object-cover w-full"
            />
          ) : (
            <Image
              quality={100}
              src={service?.serviceSecondaryImage}
              alt="map"
              width={1460}
              height={710}
              className="mx-auto object-cover w-full"
            />
          )}
        </div>
        {sliders?.length && (
          <BrandSlider2
            page="ui/ux"
            chnaged={true}
            color="#20D091"
            sliders={sliders}
          />
        )}
        <div className="mx-auto max-lg:w-10/12 max-md:w-full max-w-[1460px]  2xl:container ">
          <div className="dark:bg-[#061E2C] bg-[#F2F6F5] py-[50px] lg:py-[130px]">
            <div className="ps-28 max-lg:px-10 max-md:px-6 lg:ms-auto max-lg:mx-auto">
              <div className="flex  gap-5 flex-wrap lg:flex-nowrap justify-between">
                <div className="w-full flex flex-col gap-[30px] lg:w-1/2 lg:pe-5">
                  <div>
                    <h2 className="uppercase dark:text-[#EFCB1C] text[20px] text-[#FF895B]">
                      {service?.ourProcessMainSubTitle}
                    </h2>
                    <h3 className="lg:text-[35px] !tracking-[0.5px] min-[1600px]:text-[47px] text-[30px] font-[500] leading-normal dark:text-white text-[#061E2C]">
                      {service?.ourProcessMainTitle}
                      <h3 className="block text-base font-normal text-[#989CAA]">
                        {" "}
                        {/* {service?.ourProcessMainDescription} */}
                        <div>
                          <div
                            className="customQuill dark:quillDark customQuillMain"
                            dangerouslySetInnerHTML={{
                              __html: service?.ourProcessMainDescription,
                            }}
                          />
                        </div>
                      </h3>
                    </h3>
                  </div>
                  <Accordion2
                    items={lang == "en" ? items : itemsArabic}
                    service={service}
                  />
                </div>
                <div className="w-full  lg:w-2/3 ">
                  <Image
                    quality={1000}
                    unoptimized
                    src={service?.image}
                    width={2000}
                    height={2000}
                    className={`w-full object-cover ${
                      direction === "ltr"
                        ? "rounded-l-[30px] max-lg:rounded-[30px]"
                        : "rounded-r-[30px]"
                    } ms-auto`}
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <Blog2
            parent={parent}
            lang={lang}
            direction={direction}
            service={service}
          />
        </div>
        <div className="w-full mx-auto 2xl:container">
          <FeatureProject
            direction={direction}
            parent={parent}
            lang={lang}
            LatestWork={ourWork}
          />
          <Testimonial
            parent={Testimonail?.data[0]?.data?.en?.testimonials}
            brandshow={true}
          />
        </div>
        <div className="  bg-[#02111B]     xl:px-[230px] xl:py-[90px] md:px-[90px]  md:py-[50px] max-sm:px-[10px] max-sm:py-[40px] mx-auto pt-[30px] pb-[80px] ">
          <div className=" w-full max-w-[1460px] px-4 mx-auto">
            <div className="text-center pb-[20px] lg:pb-[40px]">
              <h2 className="uppercase dark:text-[#EFCB1C] text[20px] text-[#FF895B]">
                {data.title4}
              </h2>
              <h3 className="lg:text-[47px] text-[30px] font-[500] mb-0 leading-normal  text-white">
                {data.heading4}
              </h3>
            </div>
            <div className="accordionBorder border border-[#989CAA] dark:border-[#FFFFFF40] p-[20px] lg:py-[80px] lg:px-[100px]">
              <div className="relative z-0 hidden lg:block">
                <div className="absolute  right-[70px]">
                  <Image
                    quality={100}
                    className="w-[421px] h-[424px]"
                    width={421}
                    height={424}
                    src={"/accordionBackground.png"}
                    alt="image"
                  />
                </div>
              </div>
              <Accordion
                items={lang == "en" ? items2 : itemsArabic2}
                faqs={faqs}
              />
            </div>
          </div>
        </div>

        <div className="py-[50px] lg:py-[130px] mx-auto 2xl:container">
          <StillConfused lang={lang} direction={direction} parent={parent} />
        </div>
        <Footer lang={lang} parent={parent} direction={direction} />
      </div>
    </div>
  );
}

export default DetailPage;
