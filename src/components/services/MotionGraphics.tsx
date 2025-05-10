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
import Blog3 from "../common/Blog3";
import Blog4 from "../common/Blog4";
import ServiceDetails from "../About/servicedetails";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import ServiceDetails3 from "../About/servicedetails3";
const items = [
  {
    title: "Initial Consultation and Understanding Client Needs",
    content:
      "We start by chatting to learn about your business goals and what you envision for your digital product.",
  },
  {
    title: "Concept Development and Storyboarding",
    content:
      "We create simple blueprints (wireframes) to show you the basic layout and how users will interact with your website or app.",
  },
  {
    title: "Design and Animation",
    content:
      "Our design team then creates the look and feel of your product, making sure it's easy to use and matches your brand perfectly. We'll build a working model (prototype) so you can see it in action.",
  },
  {
    title: "Review and Feedback",
    content:
      "We want you to be happy, so we'll share the prototype with you and get your feedback. We'll tweak and improve it until it's just right.",
  },
  {
    title: "Final Delivery",
    content:
      "Once you're happy with the design, we'll hand over the final files, ready for your development team to build.",
  },
];

const items2 = [
  {
    title: "What is a motion graphics service?",
    content:
      "Motion graphics are like adding cool effects and movement to pictures or words. A motion graphics service takes your ideas and turns them into eye-catching animations or videos. This could be anything from a simple animated logo to a full-blown explainer video.",
  },
  {
    title: "How can motion graphics enhance my brand?",
    content:
      "Motion graphics make your brand more memorable and interesting. They grab attention, explain things clearly, and make your content more fun to watch. This can help you stay competitive and connect with your audience.",
  },
  {
    title: "What do motion graphic designers do?",
    content:
      "Motion graphic designers are like artists who use computers to create moving visuals. They use their creativity and technical skills to bring your ideas to life, adding animation, special effects, and sound to make your content pop.",
  },
  {
    title:
      "What are the benefits of hiring a professional motion graphics design company in Texas?",
    content:
      "Hiring pros means you get high-quality work that looks polished and professional. You also get access to their experience and expertise, so you know your project is in good hands. Plus, they’ve the right tools and software to get the job done right.",
  },
  {
    title: "How much does it cost to make a motion graphic?",
    content:
      "Simple animations cost less, while longer or more detailed videos might be more expensive. It's best to contact us for a free quote tailored to your specific needs.",
  },
  {
    title: "How do I get started with your motion graphics design services?",
    content:
      "Just reach out to us! We'll chat about your project, give you a free quote, and guide you through the whole process. We can't wait to bring your ideas to life!",
  },
];
const itemsArabic2 = [
  {
    title: "ما هي خدمة الرسوم المتحركة؟",
    content:
      "الرسوم المتحركة هي مثل إضافة تأثيرات وحركة رائعة للصور أو الكلمات. تأخذ خدمة الرسوم المتحركة أفكارك وتحولها إلى رسوم متحركة أو فيديوهات ملفتة للنظر. يمكن أن يكون هذا أي شيء من شعار متحرك بسيط إلى فيديو توضيحي كامل.",
  },
  {
    title: "كيف يمكن أن تعزز الرسوم المتحركة علامتي التجارية؟",
    content:
      "تجعل الرسوم المتحركة علامتك التجارية أكثر تذكرًا وجاذبية. إنها تلفت الانتباه، وتوضح الأمور بوضوح، وتجعل محتواك أكثر متعة للمشاهدة. هذا يمكن أن يساعدك على البقاء تنافسيًا والتواصل مع جمهورك.",
  },
  {
    title: "ماذا يفعل مصممو الرسوم المتحركة؟",
    content:
      "مصممو الرسوم المتحركة هم مثل الفنانين الذين يستخدمون الكمبيوتر لإنشاء صور متحركة. يستخدمون إبداعهم ومهاراتهم التقنية لإحياء أفكارك، مضيفين الرسوم المتحركة والتأثيرات الخاصة والصوت لجعل محتواك بارزًا.",
  },
  {
    title: "ما هي فوائد توظيف شركة تصميم الرسوم المتحركة المحترفة في تكساس؟",
    content:
      "توظيف المحترفين يعني أنك ستحصل على عمل عالي الجودة يبدو مصقولًا واحترافيًا. ستحصل أيضًا على الاستفادة من خبرتهم ومهاراتهم، لذا تعرف أن مشروعك في أيدٍ أمينة. بالإضافة إلى ذلك، لديهم الأدوات والبرامج المناسبة لإنجاز العمل بشكل صحيح.",
  },
  {
    title: "كم يكلف إنشاء رسم متحرك؟",
    content:
      "الرسوم المتحركة البسيطة تكلف أقل، في حين أن الفيديوهات الأطول أو الأكثر تفصيلًا قد تكون أكثر تكلفة. من الأفضل الاتصال بنا للحصول على عرض سعر مجاني مصمم لاحتياجاتك الخاصة.",
  },
  {
    title: "كيف أبدأ مع خدمات تصميم الرسوم المتحركة الخاصة بكم؟",
    content:
      "ما عليك سوى التواصل معنا! سنتحدث عن مشروعك، ونعطيك عرض سعر مجاني، ونرشدك خلال العملية بأكملها. لا يمكننا الانتظار لإحياء أفكارك!",
  },
];

const itemsArabic = [
  {
    title: "الاستشارة الأولية وفهم احتياجات العميل",
    content: "نبدأ بالدردشة لمعرفة أهداف عملك وما تتخيله لمنتجك الرقمي.",
  },
  {
    title: "تطوير المفهوم ورسم القصة",
    content:
      "نقوم بإنشاء مخططات بسيطة (wireframes) لنوضح لك التخطيط الأساسي وكيف سيتفاعل المستخدمون مع موقعك الإلكتروني أو تطبيقك.",
  },
  {
    title: "التصميم والرسوم المتحركة",
    content:
      "ثم يقوم فريق التصميم لدينا بإنشاء الشكل والشعور لمنتجك، مع التأكد من سهولة استخدامه ومطابقته تمامًا لعلامتك التجارية. سنبني نموذجًا عمليًا (prototype) حتى تتمكن من رؤيته قيد العمل.",
  },
  {
    title: "المراجعة والتغذية الراجعة",
    content:
      "نريدك أن تكون سعيدًا، لذلك سنشارك النموذج الأولي معك ونحصل على ملاحظاتك. سنقوم بالتعديل والتحسين حتى يكون على أفضل وجه.",
  },
  {
    title: "التسليم النهائي",
    content:
      "بمجرد أن تكون سعيدًا بالتصميم، سنقوم بتسليم الملفات النهائية جاهزة لفريق التطوير لديك للبناء.",
  },
];

function MotionGraphics({ parent, lang, direction }: any) {
  const { theme, setTheme } = useTheme();

  const data = parent.MotionGraphics;
  const service = useSelector(
    (state: RootState) => state.data.service?.data[0]
  );
  console.log("Sereices Motion=>", service);
  const faqs = useSelector((state: RootState) => state.data.faqs?.data);
  const sliders = useSelector((state: RootState) => state.data.slide?.data);
  const Testimonail = useSelector((state: RootState) => state.data.testimonail);
  const ourWork = useSelector((state: RootState) => state.data.ourwork?.data);
  const motionHeader = useSelector(
    (state: RootState) => state?.data?.header?.data?.[0]?.headerTitle || " "
  );
  return (
    <div dir={direction} className="bg-[#F2F6F5] dark:bg-[#061E2C]">
      <div className="">
        <Pagesheader
          parent={parent}
          type="motionGraphic"
          direction={direction}
          lang={lang}
          txt1={motionHeader}
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
                width={1000}
                height={1000}
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
            page="Motion-Graphics"
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

export default MotionGraphics;
