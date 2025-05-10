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
// import Blog2 from "../Blog2";
import FeatureProject from "../FeatureProject";
import Testimonial from "../common/Testimonials";
import BrandSlider2 from "../common/Slider2";
// import ServiceDetails2 from "../About/servicedetails2";
import Blog3 from "../common/Blog3";
import ServiceDetails3 from "../About/servicedetails3";
import ServiceDetails4 from "../About/servicedetails4";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import Blog2 from "../Blog2";
const items = [
  {
    title: "Initial Consultation",
    content:
      "We'll sit down with you (virtually or in person) to discuss your project goals, target audience, and brand identity. We'll ask questions and listen carefully to your ideas to get a clear understanding of your vision.",
  },
  {
    title: "Concept Development and Feedback",
    content:
      "Based on our initial consultation, we'll develop a few design concepts for your review. We'll then work closely with you to gather feedback and refine the concepts until we land on the perfect direction for your project.",
  },
  {
    title: "Finalization and Delivery",
    content:
      "Once we've nailed down the concept, we'll finalize the design, adding any necessary revisions and ensuring it meets all your requirements. We'll then deliver the final product in the format you need — ready to be used.",
  },
  {
    title: "Ongoing Support and Revisions",
    content:
      "We believe in building lasting relationships with our clients. We offer ongoing support and are always available for revisions or updates as your needs evolve.",
  },
];

const items2 = [
  {
    title: "How does Desinoir differ from other Graphic Design companies?",
    content:
      "Establishing trusting relationships with our clients is a top priority for us at Desinoir. We take the time to fully understand your objectives and desires so that each design we produce fits in with the unique personality of your business. We're not just a service provider — we're your best graphic design companies in texas.",
  },
  {
    title: "What is a graphic design company?",
    content:
      "Texas graphic design firms are companies that offer artistic services to assist organizations and people in graphically communicating their message. Creating visual material like logos, brochures, websites, social media graphics, and more is their area of expertise.",
  },
  {
    title: "How graphic design companies serve their customers?",
    content:
      "Graphic design firms collaborate extensively with their customers to learn about their objectives and demands. They then create visual solutions that satisfy those demands by applying their creative abilities. This can vary from upgrading current materials to starting from fresh with new designs.",
  },
  {
    title: "How does a graphic design company work?",
    content:
      "An initial consultation, idea development, design production, feedback and changes, and final delivery are usually steps in the workflow of a graphic design firm. They work with other experts like copywriters and web developers to provide a finished product, and they employ a range of tools and technologies to build their designs.",
  },
  {
    title: "What can a graphic design company do for me?",
    content:
      "For your brand, a graphic design firm can help you in developing a compelling visual identity. They can develop websites, social media graphics, marketing collateral, and other visual content to assist you draw in and keep the interest of your target market.",
  },
  {
    title: "What are the benefits of hiring a graphic design company?",
    content:
      "Employing a graphic design firm can help you save cash and time. They possess the knowledge and tools necessary to produce superior designs that you might not be able to do on your own. Also, they may assist you in creating a single visual brand identity, which will increase consumer loyalty and brand awareness.",
  },
];
const itemsArabic2 = [
  {
    title: "كيف يختلف Desinoir عن شركات التصميم الجرافيكي الأخرى؟",
    content:
      "إقامة علاقات ثقة مع عملائنا هي أولوية قصوى لنا في Desinoir. نأخذ الوقت الكافي لفهم أهدافك ورغباتك بشكل كامل بحيث يتناسب كل تصميم ننتجه مع الشخصية الفريدة لعملك. نحن لسنا مجرد مقدم خدمة - نحن أفضل شركات التصميم الجرافيكي في تكساس.",
  },
  {
    title: "ما هي شركة التصميم الجرافيكي؟",
    content:
      "شركات التصميم الجرافيكي في تكساس هي شركات تقدم خدمات فنية لمساعدة المنظمات والأفراد في توصيل رسالتهم بشكل مرئي. تخصصهم هو إنشاء محتوى مرئي مثل الشعارات والكتيبات والمواقع الإلكترونية والرسومات لوسائل التواصل الاجتماعي والمزيد.",
  },
  {
    title: "كيف تخدم شركات التصميم الجرافيكي عملائها؟",
    content:
      "تتعاون شركات التصميم الجرافيكي بشكل مكثف مع عملائها لمعرفة أهدافهم واحتياجاتهم. ثم يخلقون حلولًا بصرية تلبي تلك الاحتياجات باستخدام قدراتهم الإبداعية. يمكن أن يتراوح ذلك من تحديث المواد الحالية إلى البدء من جديد بتصميمات جديدة.",
  },
  {
    title: "كيف تعمل شركة التصميم الجرافيكي؟",
    content:
      "عادةً ما تشمل خطوات العمل في شركة التصميم الجرافيكي استشارة أولية، وتطوير الفكرة، وإنتاج التصميم، والتغذية الراجعة والتعديلات، والتسليم النهائي. يعملون مع خبراء آخرين مثل كتاب المحتوى ومطوري الويب لتقديم منتج نهائي، ويستخدمون مجموعة من الأدوات والتقنيات لإنشاء تصميماتهم.",
  },
  {
    title: "ماذا يمكن أن تفعل شركة التصميم الجرافيكي من أجلي؟",
    content:
      "يمكن أن تساعدك شركة التصميم الجرافيكي في تطوير هوية بصرية قوية لعلامتك التجارية. يمكنهم تطوير مواقع ويب، ورسومات لوسائل التواصل الاجتماعي، ومواد تسويقية، ومحتوى مرئي آخر لمساعدتك في جذب والاحتفاظ باهتمام جمهورك المستهدف.",
  },
  {
    title: "ما هي فوائد توظيف شركة تصميم جرافيكي؟",
    content:
      "يمكن أن يساعدك توظيف شركة تصميم جرافيكي في توفير المال والوقت. لديهم المعرفة والأدوات اللازمة لإنتاج تصميمات عالية الجودة قد لا تتمكن من إنجازها بنفسك. أيضًا، يمكنهم مساعدتك في إنشاء هوية بصرية موحدة للعلامة التجارية، مما سيزيد من ولاء العملاء ووعي العلامة التجارية.",
  },
];

const itemsArabic = [
  {
    title: "الاستشارة الأولية",
    content:
      "سنجتمع معك (افتراضيًا أو شخصيًا) لمناقشة أهداف مشروعك والجمهور المستهدف وهوية العلامة التجارية. سنطرح الأسئلة ونستمع بعناية لأفكارك للحصول على فهم واضح لرؤيتك.",
  },
  {
    title: "تطوير المفهوم والتغذية الراجعة",
    content:
      "بناءً على استشارتنا الأولية، سنطور بعض مفاهيم التصميم لمراجعتك. ثم سنعمل عن كثب معك لجمع التغذية الراجعة وتنقيح المفاهيم حتى نصل إلى الاتجاه المثالي لمشروعك.",
  },
  {
    title: "النهائية والتسليم",
    content:
      "بمجرد أن نحصل على المفهوم، سنكمل التصميم، بإضافة أي تعديلات ضرورية والتأكد من أنه يلبي جميع متطلباتك. ثم سنسلم المنتج النهائي بالشكل الذي تحتاجه — جاهز للاستخدام.",
  },
  {
    title: "الدعم المستمر والتعديلات",
    content:
      "نؤمن ببناء علاقات دائمة مع عملائنا. نحن نقدم دعمًا مستمرًا ونكون دائمًا متاحين لإجراء التعديلات أو التحديثات حسب تطور احتياجاتك.",
  },
];

function GraphicDesigning({ parent, lang, direction }: any) {
  const { theme, setTheme } = useTheme();

  const data = parent.GraphicDesigning;
  const service = useSelector(
    (state: RootState) => state.data.service?.data[0]
  );
  const faqs = useSelector((state: RootState) => state.data.faqs?.data);
  const sliders = useSelector((state: RootState) => state.data.slide?.data);
  const Testimonail = useSelector((state: RootState) => state.data.testimonail);
  const ourWork = useSelector((state: RootState) => state.data.ourwork?.data);
  const graphicHeader = useSelector(
    (state: RootState) => state?.data?.header?.data?.[0]?.headerTitle || " "
  );
  return (
    <div dir={direction} className="bg-[#F2F6F5] dark:bg-[#061E2C]">
      <div className="">
        <Pagesheader
          parent={parent}
          direction={direction}
          type="graphicdesign"
          lang={lang}
          txt1={graphicHeader}
          txt2={""}
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
            page="Graphic"
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
            lang={lang}
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

export default GraphicDesigning;
