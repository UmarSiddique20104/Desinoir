import React, { useRef } from "react";
import { Bai_Jamjuree } from "next/font/google";
import Image from "next/image";
const inter = Bai_Jamjuree({ subsets: ["latin"], weight: "500" });

function Blog4({ parent, lang, bgchange, service }: any) {
  console.log("Motion =>", service);
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
  const MotionData = [
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
            d="M58.6668 32C58.6668 17.2724 46.7276 5.33337 32.0002 5.33337C17.2726 5.33337 5.3335 17.2724 5.3335 32C5.3335 46.7275 17.2726 58.6667 32.0002 58.6667C34.2447 58.6667 37.3335 58.9768 37.3335 56C37.3335 54.376 36.4887 53.1232 35.6498 51.8784C34.422 50.0574 33.2063 48.2542 34.6668 45.3334C36.4447 41.7779 39.4076 41.7779 43.9508 41.7779C46.2226 41.7779 48.8892 41.7779 52.0002 41.3334C57.6028 40.5331 58.6668 37.0891 58.6668 32Z"
            stroke="#1DE2CF"
            stroke-width="3"
          />
          <path
            d="M18.6665 40.0053L18.6897 39.9989"
            stroke="#1DE2CF"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M25.3335 26.6666C27.5426 26.6666 29.3335 24.8758 29.3335 22.6666C29.3335 20.4575 27.5426 18.6666 25.3335 18.6666C23.1244 18.6666 21.3335 20.4575 21.3335 22.6666C21.3335 24.8758 23.1244 26.6666 25.3335 26.6666Z"
            stroke="#1DE2CF"
            stroke-width="3"
          />
          <path
            d="M44 29.3334C46.2091 29.3334 48 27.5425 48 25.3334C48 23.1242 46.2091 21.3334 44 21.3334C41.7909 21.3334 40 23.1242 40 25.3334C40 27.5425 41.7909 29.3334 44 29.3334Z"
            stroke="#1DE2CF"
            stroke-width="3"
          />
        </svg>
      ),
      title: lang === "en" ? "Designs That Pop" : "تصاميم ملفتة للنظر",
      description:
        lang === "en"
          ? "We create designs that grab your attention and make you say 'wow!' Your brand will stand out with our unique and memorable visuals."
          : "نحن نبتكر تصاميم تجذب انتباهك وتجعلك تقول 'رائع!' سيبرز علامتك التجارية مع مرئياتنا الفريدة والتي لا تُنسى.",
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
      title:
        lang === "en"
          ? "State-of-the-Art Software and Tools"
          : "برامج وأدوات متقدمة",
      description:
        lang === "en"
          ? "We use the latest design tools and tech so your project looks awesome and gets done quickly."
          : "نستخدم أحدث أدوات وتقنيات التصميم بحيث يبدو مشروعك رائعًا ويتم إنجازه بسرعة.",
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
      title:
        lang === "en"
          ? "Skilled Professionals with Expertise"
          : "محترفون مهرة بخبرة",
      description:
        lang === "en"
          ? "Our designers know their stuff. They're passionate about design and have years of experience creating amazing things."
          : "مصممونا يعرفون عملهم. إنهم شغوفون بالتصميم ولديهم سنوات من الخبرة في إنشاء أشياء مذهلة.",
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
            d="M31.47 17.3053L35.4316 13.3438C39.8921 8.88317 45.7318 7.03296 51.9121 6.73061C54.3161 6.61301 55.518 6.55421 56.4817 7.51805C57.4457 8.48186 57.3868 9.68378 57.2692 12.0877C56.9668 18.268 55.1166 24.1078 50.6561 28.5682L46.6945 32.5298C43.4321 35.7922 42.5046 36.72 43.1894 40.2586C43.8654 42.9618 44.5196 45.5794 42.554 47.545C40.1697 49.9293 37.9948 49.9293 35.6105 47.545L16.4547 28.3893C14.0705 26.005 14.0704 23.8301 16.4547 21.4458C18.4203 19.4802 21.0379 20.1345 23.7411 20.8103C27.2798 21.4952 28.2076 20.5677 31.47 17.3053Z"
            stroke="#1DE2CF"
            stroke-width="3"
            stroke-linejoin="round"
          />
          <path
            d="M45.3223 18.6666H45.3463"
            stroke="#1DE2CF"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.6665 57.3333L19.9998 44"
            stroke="#1DE2CF"
            stroke-width="3"
            stroke-linecap="round"
          />
          <path
            d="M22.6665 57.3333L27.9998 52"
            stroke="#1DE2CF"
            stroke-width="3"
            stroke-linecap="round"
          />
          <path
            d="M6.6665 41.3333L11.9998 36"
            stroke="#1DE2CF"
            stroke-width="3"
            stroke-linecap="round"
          />
        </svg>
      ),
      title:
        lang === "en"
          ? "Track Record of Successful Projects"
          : "سجل حافل بالمشاريع الناجحة",
      description:
        lang === "en"
          ? "We've helped lots of businesses with their motion graphic design needs, and we're proud of the great results we've achieved. We’re one of the most experienced motion graphic design companies in Texas, and we’re here to show you what and how we’ve done everything."
          : "لقد ساعدنا العديد من الشركات في تلبية احتياجات تصميم الرسوم المتحركة الخاصة بها، ونحن فخورون بالنتائج الرائعة التي حققناها. نحن واحدة من أكثر شركات تصميم الرسوم المتحركة خبرة في تكساس، ونحن هنا لنوضح لك ما فعلناه وكيف فعلناه.",
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
            d="M36.6071 9.18451L41.2999 18.6477C41.9399 19.965 43.6463 21.2286 45.0863 21.4705L53.5919 22.8954C59.0314 23.8094 60.3114 27.7883 56.3916 31.7134L49.7791 38.3806C48.6591 39.5096 48.046 41.6872 48.3924 43.2467L50.2858 51.5C51.7788 58.0328 48.3391 60.56 42.6066 57.1456L34.634 52.3872C33.1943 51.527 30.8212 51.527 29.3546 52.3872L21.3822 57.1456C15.6762 60.56 12.2099 58.0059 13.7031 51.5L15.5962 43.2467C15.9428 41.6872 15.3295 39.5096 14.2097 38.3806L7.59707 31.7134C3.70416 27.7883 4.95736 23.8094 10.3967 22.8954L18.9025 21.4705C20.3157 21.2286 22.0221 19.965 22.6621 18.6477L27.3548 9.18451C29.9146 4.04966 34.074 4.04966 36.6071 9.18451Z"
            stroke="#FF895B"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      title:
        lang === "en"
          ? "Commitment to Satisfaction and Partnerships"
          : "الالتزام بالرضا والشراكات",
      description:
        lang === "en"
          ? "We love working closely with our clients to make sure they're happy with the final product. Your success is our success!"
          : "نحب العمل عن كثب مع عملائنا للتأكد من رضاهم عن المنتج النهائي. نجاحك هو نجاحنا!",
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
                  lang === "en"
                    ? "Why Choose Desinoir?"
                    : "لماذا تختار Desinoir؟"
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
              <div className="flex w-full   gap-10">
                {service?.whyChooseDesiniorData?.map(
                  (item: any, index: number) => (
                    <div
                      className={` flex-item last:lg:pe-20 last:pe-6`}
                      key={index}
                    >
                      <div className="text-center bg-[#061E2C]  dark:text-white rounded-[30px]   w-[600px] max-[1380px]:w-[500px] max-[1180px]:w-[450px]  max-[1180px]:h-full  h-[357px]   relative ">
                        <div className="w-full h-full flex flex-col gap-[30px] px-[60px] py-[70px]   ">
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
                          <div className="flex flex-col relative">
                            <p className="font-[500] text-start leading-[30px] tracking-[0.5px] text-[20px] text-white">
                              {item?.title}
                            </p>
                            <p className="font-normal text-start leading-[22px] text-[16px] text-[#989CAA]">
                              {/* {} */}
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
      </div>
    </>
  );
}

export default Blog4;
