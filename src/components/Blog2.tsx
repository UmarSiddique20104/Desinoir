import React, { useRef } from "react";
import { Bai_Jamjuree } from "next/font/google";
import { title } from "process";
import Image from "next/image";
const inter = Bai_Jamjuree({ subsets: ["latin"], weight: "500" });

function Blog2({ parent, lang, bgchange, service }: any) {
  // console.log("UIUX Design=>", service);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const lastX = useRef(0);
  const velocity = useRef(0);
  const lastMoveTime = useRef(Date.now());

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    isDragging.current = true;
    lastX.current = e.pageX - (scrollContainerRef.current?.offsetLeft || 0);
    velocity.current = 0;
    lastMoveTime.current = Date.now();
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isDragging.current) return;
    e.preventDefault();

    const x = e.pageX - (scrollContainerRef.current?.offsetLeft || 0);
    const now = Date.now();
    const timeDelta = now - lastMoveTime.current;
    const distance = x - lastX.current;
    velocity.current = distance / timeDelta;

    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= velocity.current * 13;
    }

    lastX.current = x;
    lastMoveTime.current = now;
  };
  const background = {
    background: "linear-gradient(133deg, #197BFF 11.04%, #20D091 100%)",
    borderRadius: "15px",
  };
  const BlogData = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
        >
          <path
            d="M42.6673 23.9987C42.6673 13.6894 34.31 5.33203 24.0006 5.33203C13.6913 5.33203 5.33398 13.6894 5.33398 23.9987C5.33398 34.308 13.6913 42.6654 24.0006 42.6654"
            stroke="#1DE2CF"
            strokeWidth="3"
          />
          <path
            d="M42.6667 24H40C32.4576 24 28.6864 24 26.3431 26.3431C24 28.6864 24 32.4576 24 40V42.6667C24 50.2091 24 53.9803 26.3431 56.3235C28.6864 58.6667 32.4576 58.6667 40 58.6667H42.6667C50.2091 58.6667 53.9803 58.6667 56.3235 56.3235C58.6667 53.9803 58.6667 50.2091 58.6667 42.6667V40C58.6667 32.4576 58.6667 28.6864 56.3235 26.3431C53.9803 24 50.2091 24 42.6667 24Z"
            stroke="#1DE2CF"
            strokeWidth="3"
          />
        </svg>
      ),
      titleEn: "Intuitive and User-Centric Interfaces",
      titleAr: "واجهات بديهية ومركزة على المستخدم؟",
      descriptionEn:
        "Our designs are clear, meaning they're easy to figure out and use. We prioritize your users in all that we do.",
      descriptionAr:
        "تصاميمنا واضحة، مما يعني أنها سهلة الفهم والاستخدام. نحن نولي الأولوية لمستخدميك في كل ما نقوم به",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
        >
          <path
            d="M15.9993 10.668H26.666M10.666 26.668V16.0013M31.9993 16.0013V26.668M15.9993 32.0013H26.666M37.3327 32.0013H47.9994M53.3327 37.3346V48.0013M31.9993 37.3346V48.0013M37.3327 53.3346H47.9994"
            stroke="#FF895B"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.6673 15.9987C13.6128 15.9987 16.0007 13.6109 16.0007 10.6654C16.0007 7.71985 13.6128 5.33203 10.6673 5.33203C7.7218 5.33203 5.33398 7.71985 5.33398 10.6654C5.33398 13.6109 7.7218 15.9987 10.6673 15.9987Z"
            stroke="#FF895B"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.6673 37.3346C13.6128 37.3346 16.0007 34.9468 16.0007 32.0013C16.0007 29.0558 13.6128 26.668 10.6673 26.668C7.7218 26.668 5.33398 29.0558 5.33398 32.0013C5.33398 34.9468 7.7218 37.3346 10.6673 37.3346Z"
            stroke="#FF895B"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M31.9993 15.9987C34.9449 15.9987 37.3327 13.6109 37.3327 10.6654C37.3327 7.71985 34.9449 5.33203 31.9993 5.33203C29.0538 5.33203 26.666 7.71985 26.666 10.6654C26.666 13.6109 29.0538 15.9987 31.9993 15.9987Z"
            stroke="#FF895B"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M31.9993 37.3346C34.9449 37.3346 37.3327 34.9468 37.3327 32.0013C37.3327 29.0558 34.9449 26.668 31.9993 26.668C29.0538 26.668 26.666 29.0558 26.666 32.0013C26.666 34.9468 29.0538 37.3346 31.9993 37.3346Z"
            stroke="#FF895B"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M53.3333 37.3346C56.2789 37.3346 58.6667 34.9468 58.6667 32.0013C58.6667 29.0558 56.2789 26.668 53.3333 26.668C50.3878 26.668 48 29.0558 48 32.0013C48 34.9468 50.3878 37.3346 53.3333 37.3346Z"
            stroke="#FF895B"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M31.9993 58.6667C34.9449 58.6667 37.3327 56.2789 37.3327 53.3333C37.3327 50.3878 34.9449 48 31.9993 48C29.0538 48 26.666 50.3878 26.666 53.3333C26.666 56.2789 29.0538 58.6667 31.9993 58.6667Z"
            stroke="#FF895B"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M53.3333 58.6667C56.2789 58.6667 58.6667 56.2789 58.6667 53.3333C58.6667 50.3878 56.2789 48 53.3333 48C50.3878 48 48 50.3878 48 53.3333C48 56.2789 50.3878 58.6667 53.3333 58.6667Z"
            stroke="#FF895B"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      titleEn: "Latest Tools and Tricks",
      titleAr: "أحدث الأدوات والحيل",
      descriptionEn:
        "We make sure your product is trendy and appealing by using the newest design tools and keeping up with the newest fashions.",
      descriptionAr:
        "نتأكد من أن منتجك عصري وجذاب من خلال استخدام أحدث أدوات التصميم ومواكبة أحدث الصيحات",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
        >
          <path
            d="M32.0006 58.668L26.6673 42.668H5.33398L10.6673 58.668H32.0006ZM32.0006 58.668H42.6673"
            stroke="#FD346E"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M31.9993 34.668V33.3346C31.9993 28.3064 31.9993 25.7922 30.4372 24.2301C28.8751 22.668 26.361 22.668 21.3327 22.668C16.3044 22.668 13.7902 22.668 12.2281 24.2301C10.666 25.7922 10.666 28.3064 10.666 33.3346V34.668"
            stroke="#FD346E"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M50.6667 34.6654C50.6667 37.611 48.2789 39.9987 45.3333 39.9987C42.3877 39.9987 40 37.611 40 34.6654C40 31.7198 42.3877 29.332 45.3333 29.332C48.2789 29.332 50.6667 31.7198 50.6667 34.6654Z"
            stroke="#FD346E"
            strokeWidth="3"
          />
          <path
            d="M26.6667 10.6654C26.6667 13.6109 24.2789 15.9987 21.3333 15.9987C18.3878 15.9987 16 13.6109 16 10.6654C16 7.71984 18.3878 5.33203 21.3333 5.33203C24.2789 5.33203 26.6667 7.71984 26.6667 10.6654Z"
            stroke="#FD346E"
            strokeWidth="3"
          />
          <path
            d="M37.334 46.668H53.334C56.2796 46.668 58.6673 49.0557 58.6673 52.0013V53.3346C58.6673 56.2802 56.2796 58.668 53.334 58.668H50.6673"
            stroke="#FD346E"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      ),
      titleEn: "Expert Team with Industry Experience",
      titleAr: "فريق خبراء ذو تجربة في الصناعة",
      descriptionEn:
        "Experienced designers and user experience experts who are passionate about creating outstanding user experiences make up our team.",
      descriptionAr:
        "يتكون فريقنا من مصممين ذوي خبرة وخبراء تجربة المستخدم الذين يتمتعون بشغف في خلق تجارب مستخدم متميزة ",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
        >
          <path
            d="M58.6666 32C58.6666 46.7275 46.7274 58.6667 31.9999 58.6667C17.2723 58.6667 5.33325 46.7275 5.33325 32M22.6666 7.01233C25.5715 5.92684 28.7165 5.33337 31.9999 5.33337C35.2834 5.33337 38.4284 5.92684 41.3332 7.01233"
            stroke="#1DE2CF"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20.0489 14.4887L21.4567 17.3277C21.6487 17.7229 22.1606 18.1019 22.5926 18.1745L25.1443 18.602C26.7761 18.8762 27.1601 20.0699 25.9842 21.2474L24.0004 23.2475C23.6645 23.5863 23.4805 24.2396 23.5845 24.7074L24.1524 27.1832C24.6004 29.1432 23.5685 29.9014 21.8487 28.8771L19.4569 27.4496C19.025 27.1915 18.313 27.1915 17.8731 27.4496L15.4814 28.8771C13.7696 29.9014 12.7297 29.1352 13.1776 27.1832L13.7456 24.7074C13.8496 24.2396 13.6656 23.5863 13.3296 23.2475L11.3458 21.2474C10.178 20.0699 10.5539 18.8762 12.1857 18.602L14.7374 18.1745C15.1614 18.1019 15.6733 17.7229 15.8653 17.3277L17.2732 14.4887C18.0411 12.9483 19.2889 12.9483 20.0489 14.4887Z"
            stroke="#1DE2CF"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M46.7153 14.4887L48.1231 17.3277C48.3151 17.7229 48.8271 18.1019 49.2591 18.1745L51.8108 18.602C53.4425 18.8762 53.8265 20.0699 52.6505 21.2474L50.6668 23.2475C50.3308 23.5863 50.1468 24.2396 50.2508 24.7074L50.8188 27.1832C51.2668 29.1432 50.2348 29.9014 48.5151 28.8771L46.1234 27.4496C45.6914 27.1915 44.9796 27.1915 44.5396 27.4496L42.1479 28.8771C40.4361 29.9014 39.3961 29.1352 39.8441 27.1832L40.4121 24.7074C40.5159 24.2396 40.3321 23.5863 39.9961 23.2475L38.0124 21.2474C36.8444 20.0699 37.2204 18.8762 38.8521 18.602L41.4039 18.1745C41.8279 18.1019 42.3399 17.7229 42.5319 17.3277L43.9396 14.4887C44.7076 12.9483 45.9553 12.9483 46.7153 14.4887Z"
            stroke="#1DE2CF"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M21.3333 40C23.7656 43.2384 27.6381 45.3333 31.9999 45.3333C36.3618 45.3333 40.2343 43.2384 42.6666 40"
            stroke="#1DE2CF"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      titleEn: "Proven Track Record of Successful Projects",
      titleAr: "سجل حافل من المشاريع الناجحة",
      descriptionEn:
        "With our UX/UI design services, we've assisted several companies in producing profitable products, and we're 100% sure we can do the same for you.",
      descriptionAr:
        "من خلال خدمات تصميم واجهة المستخدم وتجربة المستخدم لدينا، ساعدنا العديد من الشركات في إنتاج منتجات مربحة، ونحن على يقين بنسبة 100٪ أننا يمكننا القيام بالمثل من أجلك.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
        >
          <path
            d="M36.6068 9.18451L41.2996 18.6477C41.9396 19.965 43.646 21.2286 45.086 21.4705L53.5917 22.8954C59.0311 23.8094 60.3111 27.7883 56.3914 31.7134L49.7789 38.3806C48.6589 39.5096 48.0458 41.6872 48.3922 43.2467L50.2855 51.5C51.7786 58.0328 48.3388 60.56 42.6063 57.1456L34.6338 52.3872C33.194 51.527 30.821 51.527 29.3543 52.3872L21.382 57.1456C15.6759 60.56 12.2096 58.0059 13.7028 51.5L15.5959 43.2467C15.9426 41.6872 15.3293 39.5096 14.2094 38.3806L7.59682 31.7134C3.70392 27.7883 4.95712 23.8094 10.3965 22.8954L18.9022 21.4705C20.3154 21.2286 22.0219 19.965 22.6618 18.6477L27.3546 9.18451C29.9143 4.04966 34.0738 4.04966 36.6068 9.18451Z"
            stroke="#FF895B"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      titleEn: "Commitment to Client Satisfaction and Collaboration",
      titleAr: "الالتزام برضا العملاء والتعاون",
      descriptionEn:
        "We like collaborating closely with our clients and make sure they're happy every step of the way.",
      descriptionAr:
        "نحب التعاون عن كثب مع عملائنا ونتأكد من رضاهم في كل خطوة على الطريق.",
    },
  ];
  return (
    <>
      <style jsx>{`
        .hide-scrollbar {
          overflow: auto;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none; /* For WebKit browsers (Chrome, Safari) */
        }
        .hide-scrollbar {
          scrollbar-width: none; /* For Firefox */
          -ms-overflow-style: none; /* IE and Edge */
        }
      `}</style>
      <div
        className={` ${
          bgchange
            ? "dark:bg-[#02111B] bg-[#F2F6F5]"
            : "bg-[#02111B] dark:bg-[#02111B]"
        } pt-[50px] lg:pt-[90px] pb-[50px] lg:pb-[90px] `}
      >
        <div className=" w-full flex flex-col gap-10  lg:ps-28  max-lg:ps-20 max-md:ps-6 2xl:container mx-auto  ">
          {bgchange ? (
            <div className="text-[50px] font-[500] text-[#02111B] dark:text-white mb-[40px]">
              <h2>{`${
                lang === "en" ? "Why Choose Desinoir?" : "لماذا تختار Desinoir؟"
              }`}</h2>
            </div>
          ) : (
            <div className=" ">
              {/* <p className="uppercase text-[#EFCB1C] text-[20px]">
              {parent?.BlogsSection?.title}
            </p> */}
              <h3 className="lg:text-[50px] text-[30px] font-[500] leading-normal text-white">
                {/* {`${lang === "en"
                    ? "Why Choose Desinoir?"
                    : "لماذا تختار Desinoir؟"
                  }`} */}

                {service?.whyChooseDesiniorMainTitle}
              </h3>
            </div>
          )}
          <div
            className="w-full    hide-scrollbar gap-[40px] cursor-grab select-none"
            ref={scrollContainerRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            <div className="flex w-full gap-10 ">
              {service?.whyChooseDesiniorData?.map(
                (item: any, index: number) => (
                  <div
                    className={` flex-item  last:lg:pe-20 last:pe-6`}
                    key={index}
                  >
                    <div className="text-center bg-[#061E2C]   dark:text-white rounded-[30px]   w-[600px] max-[1380px]:w-[500px] max-[1180px]:w-[450px]  max-[1180px]:h-full  h-[357px]   relative ">
                      <div className="w-full overflow-hidden h-full flex flex-col gap-[30px] px-[60px] py-[70px]   ">
                        <div className=" w-full   rounded-full">
                          <Image
                            quality={100}
                            src={item?.icon}
                            alt="map"
                            width={64}
                            height={64}
                            className="object-cover"
                          />
                        </div>
                        <div className="flex  flex-col relative">
                          <p className="font-[500] text-start leading-[30px] tracking-[0.5px] text-[20px] text-white">
                            {item?.title}
                          </p>
                          <p className="font-normal text-start leading-[22px] text-[16px] text-[#989CAA]">
                            {/* {item.description} */}
                            <div>
                              <div
                                className="customQuill dark:quillDark customQuillMain"
                                dangerouslySetInnerHTML={{
                                  __html: item.description,
                                }}
                              />
                            </div>
                          </p>
                          <div
                            className={`${inter.className} text-slate-500 opacity-20 !text-[90px] absolute -bottom-14 -z-0`}
                          >
                            {String(index + 1).padStart(2, "0")}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog2;
