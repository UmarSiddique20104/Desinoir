import React, { useRef } from "react";
import { Bai_Jamjuree } from "next/font/google";
import Image from "next/image";
const inter = Bai_Jamjuree({ subsets: ["latin"], weight: "500" });

function Blog3({ parent, lang, bgchange, service }: any) {
  console.log("Graphics Design=>", service);
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
  const benefits = [
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
            d="M23.9998 18.6666H39.9998C48.7993 18.6666 53.199 18.6666 55.9329 21.4003C58.6665 24.134 58.6665 28.5338 58.6665 37.3333V40C58.6665 48.7994 58.6665 53.1992 55.9329 55.933C53.199 58.6666 48.7993 58.6666 39.9998 58.6666H37.3332C28.5337 58.6666 24.1338 58.6666 21.4002 55.933C18.6665 53.1992 18.6665 48.7994 18.6665 40V24"
            stroke="#1DE2CF"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5.3335 18.6666H13.3335"
            stroke="#1DE2CF"
            stroke-width="3"
            stroke-linecap="round"
          />
          <path
            d="M18.6665 13.3334V5.33337"
            stroke="#1DE2CF"
            stroke-width="3"
            stroke-linecap="round"
          />
        </svg>
      ),
      title: lang === "en" ? "Custom, Unique Designs" : "تصاميم مخصصة وفريدة",
      description:
        lang === "en"
          ? "We don't believe in cookie-cutter solutions. Our designs are all one-of-a-kind customized to your specific needs and business identity."
          : "نحن لا نؤمن بالحلول الجاهزة. تصاميمنا كلها فريدة ومخصصة لاحتياجاتك الخاصة وهوية عملك.",
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
            d="M20.7168 21.3255C24.2923 19.1323 27.413 20.0162 29.2876 21.424C30.0564 22.0013 30.4407 22.2899 30.6668 22.2899C30.893 22.2899 31.2772 22.0013 32.046 21.424C33.9207 20.0162 37.0415 19.1323 40.617 21.3255C45.3095 24.2039 46.3711 33.6997 35.5474 41.7112C33.4858 43.2371 32.4551 44 30.6668 44C28.8786 44 27.8479 43.2371 25.7862 41.7112C14.9625 33.6997 16.0242 24.2039 20.7168 21.3255Z"
            stroke="#FF895B"
            stroke-width="3"
            stroke-linecap="round"
          />
          <path
            d="M5.3335 32C5.3335 20.0577 5.3335 14.0866 9.04347 10.3766C12.7535 6.66663 18.7246 6.66663 30.6668 6.66663C42.609 6.66663 48.5802 6.66663 52.2903 10.3766C56.0002 14.0866 56.0002 20.0577 56.0002 32C56.0002 43.9421 56.0002 49.9133 52.2903 53.6234C48.5802 57.3333 42.609 57.3333 30.6668 57.3333C18.7246 57.3333 12.7535 57.3333 9.04347 53.6234C5.3335 49.9133 5.3335 43.9421 5.3335 32Z"
            stroke="#FF895B"
            stroke-width="3"
            stroke-linejoin="round"
          />
        </svg>
      ),
      title:
        lang === "en"
          ? "High-Quality, Engaging Visuals"
          : "مرئيات عالية الجودة وجذابة",
      description:
        lang === "en"
          ? "We develop images that effectively convey your message while also being attractive by utilizing the newest design technologies together with our creative abilities."
          : "نقوم بتطوير صور تنقل رسالتك بفعالية بينما تكون جذابة باستخدام أحدث تقنيات التصميم مع مهاراتنا الإبداعية.",
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
            d="M5.3335 40C5.71422 41.1397 6.16078 42.2483 6.66848 43.3205M11.0014 49.9901C11.8444 50.9699 12.7495 51.8923 13.7105 52.7504M24.0002 58.6667C22.8061 58.2819 21.6455 57.8197 20.5239 57.2859"
            stroke="#FD346E"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M32 36C34.2091 36 36 34.2091 36 32C36 29.7909 34.2091 28 32 28C29.7909 28 28 29.7909 28 32M32 36C29.7909 36 28 34.2091 28 32M32 36V42.6667M28 32H16"
            stroke="#FD346E"
            stroke-width="3"
            stroke-linecap="round"
          />
          <path
            d="M32.0002 58.6667C46.7276 58.6667 58.6668 46.7275 58.6668 32C58.6668 17.2724 46.7276 5.33337 32.0002 5.33337C17.2726 5.33337 5.3335 17.2724 5.3335 32"
            stroke="#FD346E"
            stroke-width="3"
            stroke-linecap="round"
          />
        </svg>
      ),
      title:
        lang === "en"
          ? "Timely Delivery and Project Management"
          : "التسليم في الوقت المناسب وإدارة المشروع",
      description:
        lang === "en"
          ? "We are aware of how crucial deadlines are. We promise to complete your project on schedule, on budget, and to keep you informed at every stage of the process."
          : "نحن ندرك مدى أهمية المواعيد النهائية. نعد بإكمال مشروعك في الموعد المحدد، وفي حدود الميزانية، وإبقاءك على اطلاع في كل مرحلة من مراحل العملية.",
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
            d="M31.9998 58.6667C43.782 58.6667 53.3332 49.1155 53.3332 37.3334C53.3332 21.3334 31.9998 5.33337 31.9998 5.33337C30.9644 11.9652 29.9505 15.5243 26.6665 21.3334C23.4641 19.8531 22.6665 18.6667 21.3332 15.3334C15.9998 21.3334 10.6665 29.3334 10.6665 37.3334C10.6665 49.1155 20.2178 58.6667 31.9998 58.6667Z"
            stroke="#1DE2CF"
            stroke-width="3"
            stroke-linejoin="round"
          />
          <path
            d="M26.6665 45.3333L37.3332 34.6666"
            stroke="#1DE2CF"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M26.6665 34.6666H26.6905M37.3092 45.3333H37.3332"
            stroke="#1DE2CF"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      title: lang === "en" ? "Competitive Pricing" : "أسعار تنافسية",
      description:
        lang === "en"
          ? "We provide good value for your investment by delivering high-quality design services at affordable pricing."
          : "نحن نقدم قيمة جيدة لاستثمارك من خلال تقديم خدمات تصميم عالية الجودة بأسعار معقولة.",
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
            d="M45.3335 28.812C45.3335 27.8901 45.3335 27.4293 45.4722 27.0187C45.8754 25.8252 46.9383 25.362 48.0031 24.877C49.2002 24.3318 49.7986 24.0592 50.3916 24.0112C51.065 23.9567 51.7394 24.1018 52.3148 24.4248C53.0778 24.8529 53.6098 25.6665 54.1546 26.3281C56.6703 29.3835 57.9279 30.9115 58.3882 32.5963C58.7596 33.9557 58.7596 35.3776 58.3882 36.7371C57.717 39.1944 55.5962 41.2544 54.0263 43.1611C53.2234 44.1363 52.8218 44.624 52.3148 44.9085C51.7394 45.2315 51.065 45.3765 50.3916 45.3221C49.7986 45.2741 49.2002 45.0016 48.0031 44.4563C46.9383 43.9712 45.8754 43.5083 45.4722 42.3147C45.3335 41.904 45.3335 41.4432 45.3335 40.5213V28.812Z"
            stroke="#FF895B"
            stroke-width="3"
          />
          <path
            d="M18.6668 28.8123C18.6668 27.6517 18.6342 26.6086 17.6959 25.7925C17.3546 25.4957 16.9022 25.2896 15.9973 24.8775C14.8002 24.3322 14.2017 24.0596 13.6086 24.0116C11.8293 23.8677 10.8719 25.0822 9.84584 26.3285C7.33016 29.384 6.07232 30.9117 5.61206 32.5965C5.24064 33.9563 5.24064 35.3781 5.61206 36.7376C6.28336 39.1949 8.40422 41.2547 9.97406 43.1616C10.9636 44.3635 11.9089 45.46 13.6086 45.3227C14.2017 45.2747 14.8002 45.0019 15.9973 44.4568C16.9022 44.0445 17.3546 43.8384 17.6959 43.5416C18.6342 42.7256 18.6668 41.6827 18.6668 40.5219V28.8123Z"
            stroke="#FF895B"
            stroke-width="3"
          />
          <path
            d="M13.3335 24C13.3335 15.1634 21.6909 8 32.0002 8C42.3095 8 50.6668 15.1634 50.6668 24"
            stroke="#FF895B"
            stroke-width="3"
            stroke-linecap="square"
            stroke-linejoin="round"
          />
          <path
            d="M50.6665 45.3334V47.4667C50.6665 52.1795 45.8908 56 39.9998 56H34.6665"
            stroke="#FF895B"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      title:
        lang === "en"
          ? "Dedicated Customer Support and Communication"
          : "دعم العملاء والتواصل المخصص",
      description:
        lang === "en"
          ? "Throughout the whole design process, we are there to assist you. We'll make sure you're happy with the finished result, answer any questions you might have, and keep you updated."
          : "طوال عملية التصميم بأكملها، نحن هنا لمساعدتك. سنضمن أنك راضٍ عن النتيجة النهائية، ونجيب على أي أسئلة قد تكون لديك، ونبقيك على اطلاع.",
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

export default Blog3;
