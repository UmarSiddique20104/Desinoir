import React, { useRef } from "react";
import { Bai_Jamjuree } from "next/font/google";
import Image from "next/image";
const inter = Bai_Jamjuree({ subsets: ["latin"], weight: "500" });

function Blog5({ parent, lang, bgchange, service }: any) {
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
  const BrandingBlogData = [
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
            d="M31.9999 58.6667V16C31.9999 10.9717 31.9999 8.45756 30.4378 6.89548C28.8757 5.33337 26.3616 5.33337 21.3333 5.33337H15.9999C10.9716 5.33337 8.45744 5.33337 6.89536 6.89548C5.33325 8.45756 5.33325 10.9717 5.33325 16V48C5.33325 53.0283 5.33325 55.5424 6.89536 57.1046C8.45744 58.6667 10.9716 58.6667 15.9999 58.6667H31.9999Z"
            stroke="#1DE2CF"
            stroke-width="3"
          />
          <path
            d="M32 58.6667H48C53.0283 58.6667 55.5424 58.6667 57.1045 57.1046C58.6667 55.5424 58.6667 53.0283 58.6667 48V32C58.6667 26.9718 58.6667 24.4576 57.1045 22.8955C55.5424 21.3334 53.0283 21.3334 48 21.3334H32"
            stroke="#1DE2CF"
            stroke-width="3"
          />
          <path
            d="M49.3333 42.6667H41.3333M49.3333 32H41.3333"
            stroke="#1DE2CF"
            stroke-width="3"
            stroke-linecap="round"
          />
          <path
            d="M22.6667 37.3333H14.6667M22.6667 26.6667H14.6667M22.6667 16H14.6667"
            stroke="#1DE2CF"
            stroke-width="3"
            stroke-linecap="round"
          />
        </svg>
      ),
      title:
        lang === "en"
          ? "Proven Expertise in Corporate Branding"
          : "خبرة مثبتة في العلامات التجارية للشركات",
      description:
        lang === "en"
          ? "We've successfully assisted companies of all sizes — from start-ups to multinational corporations — in developing strong, recognisable personal brands. You can rely on us to point you in the right direction since we’ve expertise and know what works and what doesn't."
          : "لقد قمنا بمساعدة الشركات من جميع الأحجام — من الشركات الناشئة إلى الشركات متعددة الجنسيات — في تطوير علامات تجارية قوية وقابلة للتعرف عليها. يمكنك الاعتماد علينا في توجيهك في الاتجاه الصحيح لأن لدينا الخبرة ونعرف ما ينفع وما لا ينفع.",
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
            d="M5.33325 32C5.33325 20.0577 5.33325 14.0866 9.04323 10.3766C12.7532 6.66663 18.7243 6.66663 30.6666 6.66663C42.6087 6.66663 48.5799 6.66663 52.2901 10.3766C55.9999 14.0866 55.9999 20.0577 55.9999 32C55.9999 43.9421 55.9999 49.9133 52.2901 53.6234C48.5799 57.3333 42.6087 57.3333 30.6666 57.3333C18.7243 57.3333 12.7532 57.3333 9.04323 53.6234C5.33325 49.9133 5.33325 43.9421 5.33325 32Z"
            stroke="#FF895B"
            stroke-width="3"
            stroke-linejoin="round"
          />
          <path
            d="M32.9701 20.5922L35.3165 25.3238C35.6365 25.9825 36.4898 26.6142 37.2095 26.7352L41.4626 27.4477C44.1823 27.9048 44.8221 29.8941 42.8623 31.8565L39.5559 35.1904C38.9962 35.7549 38.6895 36.8437 38.8629 37.6232L39.8093 41.7498C40.5559 45.0165 38.8362 46.28 35.9698 44.5728L31.9837 42.1936C31.2637 41.7634 30.077 41.7634 29.3439 42.1936L25.3576 44.5728C22.5046 46.28 20.7714 45.0029 21.518 41.7498L22.4646 37.6232C22.6379 36.8437 22.3313 35.7549 21.7713 35.1904L18.465 31.8565C16.5186 29.8941 17.1452 27.9048 19.8649 27.4477L24.1178 26.7352C24.8243 26.6142 25.6776 25.9825 25.9975 25.3238L28.3439 20.5922C29.6239 18.0248 31.7037 18.0248 32.9701 20.5922Z"
            stroke="#FF895B"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      title:
        lang === "en"
          ? "Trusted by Businesses Like Yours"
          : "موثوق به من قبل شركات مثل شركتك",
      description:
        lang === "en"
          ? "1000s of companies who depend on us for their branding requirements have trusted us. Our clients appreciate our ability to work together, come up with original solutions, and be results-driven. Being a part of their success stories makes us proud."
          : "ثقة آلاف الشركات التي تعتمد علينا لتلبية احتياجاتها في العلامات التجارية. يقدّر عملاؤنا قدرتنا على التعاون، وابتكار حلول أصلية، والاهتمام بالنتائج. أن نكون جزءًا من قصص نجاحهم يجعلنا فخورين.",
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
            d="M42.6666 24C42.6666 13.6907 34.3093 5.33337 23.9999 5.33337C13.6906 5.33337 5.33325 13.6907 5.33325 24C5.33325 34.3094 13.6906 42.6667 23.9999 42.6667"
            stroke="#FD346E"
            stroke-width="3"
          />
          <path
            d="M42.6667 24H40C32.4576 24 28.6864 24 26.3431 26.3431C24 28.6864 24 32.4576 24 40V42.6667C24 50.2091 24 53.9803 26.3431 56.3235C28.6864 58.6667 32.4576 58.6667 40 58.6667H42.6667C50.2091 58.6667 53.9803 58.6667 56.3235 56.3235C58.6667 53.9803 58.6667 50.2091 58.6667 42.6667V40C58.6667 32.4576 58.6667 28.6864 56.3235 26.3431C53.9803 24 50.2091 24 42.6667 24Z"
            stroke="#FD346E"
            stroke-width="3"
          />
        </svg>
      ),
      title:
        lang === "en"
          ? "Solutions Tailored to Your Business"
          : "حلول مصممة خصيصًا لعملك",
      description:
        lang === "en"
          ? "Since each company is different, we'll work closely with you to identify your particular needs and objectives. After that, we'll create a unique branding plan that works with your budget and yields obvious outcomes."
          : "نظرًا لأن كل شركة مختلفة، فسنعمل عن كثب معك لتحديد احتياجاتك وأهدافك الخاصة. بعد ذلك، سنقوم بإنشاء خطة علامة تجارية فريدة تتناسب مع ميزانيتك وتحقق نتائج واضحة.",
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
                    className={`flex-item last:lg:pe-20 last:pe-6`}
                    key={index}
                  >
                    <div className="text-center bg-[#061E2C] dark:text-white rounded-[30px] w-[600px] max-[1380px]:w-[500px] max-[1180px]:w-[450px] max-[1180px]:h-full h-[357px] relative">
                      <div className="w-full h-full flex flex-col gap-[30px] px-[60px] py-[70px]">
                        <div className="w-full rounded-full">
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

export default Blog5;
