import Image from "next/image";
import React, { useRef } from "react";
function ServiceDetails2({ data, service }: any) {
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

  const plans = [
    {
      id: 1,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
        >
          <path
            d="M26.416 2.73071H12.2506C11.2746 2.73071 10.376 3.26405 9.90929 4.12005L3.36262 16.12C2.92795 16.9147 2.92795 17.8774 3.36262 18.6747L9.90929 30.6747C10.376 31.5307 11.2746 32.064 12.2506 32.064H26.4186C27.3946 32.064 28.2933 31.5307 28.76 30.6747L35.3066 18.6747C35.7413 17.88 35.7413 16.9174 35.3066 16.12L28.76 4.12005C28.2906 3.26405 27.392 2.73071 26.416 2.73071Z"
            fill="#1DE2CF"
          />
          <path
            opacity="0.35"
            d="M60.6373 30.7946L54.0906 18.7946C53.624 17.9386 52.7253 17.4053 51.7493 17.4053H37.5813C36.6053 17.4053 35.7066 17.9386 35.24 18.7946L28.6933 30.7946C28.2586 31.5919 27.3813 32.0639 26.4133 32.0639H12.2506C11.2746 32.0639 10.376 32.5973 9.90929 33.4533L3.36262 45.4533C2.92795 46.2479 2.92795 47.2106 3.36262 48.0079L9.90929 60.0079C10.376 60.8639 11.2746 61.3973 12.2506 61.3973H26.4186C27.3946 61.3973 28.2933 60.8639 28.76 60.0079L35.3066 48.0079C35.7413 47.2133 35.7413 46.2506 35.3066 45.4533L35.2613 45.3679C35.7333 46.2106 36.6186 46.7359 37.5866 46.7359H51.7546C52.7306 46.7359 53.6293 46.2026 54.096 45.3466L60.6426 33.3466C61.072 32.5546 61.072 31.5919 60.6373 30.7946Z"
            fill="#1DE2CF"
          />
          <path
            d="M20.0027 50.6666C18.7014 50.6666 17.4267 50.0346 16.6587 48.864C15.4427 47.0213 15.9547 44.5386 17.8027 43.3253L43.1361 26.6586C44.9814 25.448 47.4614 25.9573 48.6747 27.8026C49.8907 29.6453 49.3787 32.128 47.5307 33.3413L22.1974 50.008C21.5201 50.4533 20.7574 50.6666 20.0027 50.6666Z"
            fill="#1DE2CF"
          />
          <path
            d="M49.2426 25.6613L39.4026 24.024C37.9653 23.784 36.912 25.3413 37.664 26.5866L45.0053 38.7306C45.7573 39.976 47.6266 39.7653 48.0826 38.3813L51.2053 28.9093C51.6853 27.4533 50.7546 25.912 49.2426 25.6613Z"
            fill="#1DE2CF"
          />
        </svg>
      ),
      title: data?.option1,
      description: data?.plan1,
    },
    {
      id: 2,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
        >
          <g clip-path="url(#clip0_1678_60)">
            <path
              opacity="0.35"
              d="M50.6667 33.5093V16C50.6667 11.5813 47.0853 8 42.6667 8H10.6667C9.19467 8 8 9.19467 8 10.6667V53.3333C8 54.8053 9.19467 56 10.6667 56H42.6667C45.336 56 47.6853 54.68 49.1387 52.6693C49.2933 53.2427 49.4293 53.8213 49.552 54.3733C50.3147 57.8613 50.9627 60 54.552 60C57.3387 60 62.6693 54.9627 62.6693 47.0613C62.6667 40.0853 57.4133 34.3707 50.6667 33.5093Z"
              fill="#5458B1"
            />
            <path
              d="M36.0001 18.6667C34.9707 18.6667 23.6961 18.6667 22.6667 18.6667C20.4587 18.6667 18.6667 20.4587 18.6667 22.6667C18.6667 24.8747 20.4587 26.6667 22.6667 26.6667C23.6961 26.6667 34.9707 26.6667 36.0001 26.6667C38.2081 26.6667 40.0001 24.8747 40.0001 22.6667C40.0001 20.4587 38.2081 18.6667 36.0001 18.6667Z"
              fill="#5458B1"
            />
            <path
              d="M48.9361 32C40.2161 32 34.6667 38.3413 34.6667 44.6853C34.6667 47.5387 36.0001 50.6667 38.6667 50.6667C40.7307 50.6667 42.6667 49.3333 44.0001 49.3333C50.6667 49.3333 45.5387 61.3333 54.5467 61.3333C58.3494 61.3333 64.0001 55.3813 64.0001 47.064C64.0001 38.7467 57.2561 32 48.9361 32ZM56.0187 37.352C57.4827 37.352 58.6667 38.536 58.6667 40C58.6667 41.464 57.4827 42.648 56.0187 42.648C54.5547 42.648 53.3707 41.464 53.3707 40C53.3707 38.536 54.5547 37.352 56.0187 37.352ZM48.0001 40C46.5281 40 45.3334 38.8053 45.3334 37.3333C45.3334 35.8613 46.5281 34.6667 48.0001 34.6667C49.4721 34.6667 50.6667 35.8613 50.6667 37.3333C50.6667 38.8053 49.4721 40 48.0001 40ZM54.6747 57.3333C53.2054 57.3333 52.0161 56.144 52.0161 54.6747C52.0161 53.2053 53.2054 52.016 54.6747 52.016C56.1441 52.016 57.3334 53.2053 57.3334 54.6747C57.3334 56.144 56.1441 57.3333 54.6747 57.3333ZM58.6587 50.648C57.1894 50.648 56.0001 49.4587 56.0001 47.9893C56.0001 46.5227 57.1894 45.3333 58.6587 45.3333C60.1281 45.3333 61.3174 46.5227 61.3174 47.992C61.3147 49.4587 60.1254 50.648 58.6587 50.648Z"
              fill="#5458B1"
            />
          </g>
          <defs>
            <clipPath id="clip0_1678_60">
              <rect width="64" height="64" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      title: data?.option2,
      description: data?.plan2,
    },
    {
      id: 3,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
        >
          <path
            opacity="0.35"
            d="M53.3334 13.3333C53.3334 8.91459 49.7521 5.33325 45.3334 5.33325H18.6667C14.2481 5.33325 10.6667 8.91459 10.6667 13.3333V50.6666C10.6667 55.0852 14.2481 58.6666 18.6667 58.6666H45.3334C49.7521 58.6666 53.3334 55.0852 53.3334 50.6666V13.3333Z"
            fill="#FF895B"
          />
          <path
            d="M38.6666 10.6667H25.3333C23.1226 10.6667 21.3333 8.87475 21.3333 6.66675C21.3333 4.45875 23.1226 2.66675 25.3333 2.66675H38.6666C40.8773 2.66675 42.6666 4.45875 42.6666 6.66675C42.6666 8.87475 40.8773 10.6667 38.6666 10.6667Z"
            fill="#FF895B"
          />
          <path
            d="M42.6666 32.0001H31.9999C30.5253 32.0001 29.3333 30.8054 29.3333 29.3334C29.3333 27.8614 30.5253 26.6667 31.9999 26.6667H42.6666C44.1413 26.6667 45.3333 27.8614 45.3333 29.3334C45.3333 30.8054 44.1413 32.0001 42.6666 32.0001Z"
            fill="#FF895B"
          />
          <path
            d="M21.3334 32.0001C22.8062 32.0001 24.0001 30.8062 24.0001 29.3334C24.0001 27.8607 22.8062 26.6667 21.3334 26.6667C19.8607 26.6667 18.6667 27.8607 18.6667 29.3334C18.6667 30.8062 19.8607 32.0001 21.3334 32.0001Z"
            fill="#FF895B"
          />
          <path
            d="M42.6666 42.6666H31.9999C30.5253 42.6666 29.3333 41.4719 29.3333 39.9999C29.3333 38.5279 30.5253 37.3333 31.9999 37.3333H42.6666C44.1413 37.3333 45.3333 38.5279 45.3333 39.9999C45.3333 41.4719 44.1413 42.6666 42.6666 42.6666Z"
            fill="#FF895B"
          />
          <path
            d="M21.3333 44C23.5424 44 25.3333 42.2091 25.3333 40C25.3333 37.7909 23.5424 36 21.3333 36C19.1241 36 17.3333 37.7909 17.3333 40C17.3333 42.2091 19.1241 44 21.3333 44Z"
            fill="#FF895B"
          />
        </svg>
      ),
      title: data?.option3,
      description: data?.plan3,
    },
    {
      id: 4,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
        >
          <path
            d="M13.3333 18.6667C8.91459 18.6667 5.33325 22.2481 5.33325 26.6667V37.3334C5.33325 41.7521 8.91459 45.3334 13.3333 45.3334H23.9999V18.6667H13.3333Z"
            fill="#FD346E"
          />
          <path
            opacity="0.35"
            d="M52.7094 5.73868C50.7094 4.90935 48.4241 5.36801 46.8961 6.89601C43.6214 10.168 33.1254 18.6667 24.0001 18.6667C21.0561 18.6667 18.6667 21.056 18.6667 24V40C18.6667 42.944 21.0561 45.3334 24.0001 45.3334C33.0667 45.3334 43.6054 53.8347 46.8961 57.104C47.9174 58.1253 49.2774 58.6667 50.6667 58.6667C51.3547 58.6667 52.0481 58.5333 52.7094 58.2613C54.7014 57.4347 56.0001 55.4907 56.0001 53.3334V10.6667C56.0001 8.50935 54.7014 6.56535 52.7094 5.73868Z"
            fill="#FD346E"
          />
          <path
            d="M23.9999 34.6667H13.3333C13.3333 34.6667 15.9999 54.1974 15.9999 54.6667C15.9999 56.8747 17.7919 58.6667 19.9999 58.6667C22.2079 58.6667 23.9999 56.8747 23.9999 54.6667C23.9999 54.1974 23.9999 34.6667 23.9999 34.6667Z"
            fill="#FD346E"
          />
          <path
            d="M56 24.4907V39.5121C59.1013 38.4107 61.3333 35.4801 61.3333 32.0027C61.3333 28.5254 59.1013 25.5921 56 24.4907Z"
            fill="#FD346E"
          />
        </svg>
      ),
      title: data?.option4,
      description: data?.plan4,
    },
    {
      id: 5,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
        >
          <g clip-path="url(#clip0_1678_76)">
            <path
              opacity="0.35"
              d="M10.9335 40.7999C8.26683 40.7999 6.1335 38.9333 5.60016 36.2666C5.3335 34.9333 5.3335 33.3333 5.3335 31.9999C5.3335 17.3333 17.3335 5.33325 32.0002 5.33325C36.8002 5.33325 41.3335 6.66659 45.3335 8.79992C48.0002 10.3999 48.8002 13.5999 47.2002 15.9999C45.8668 18.6666 42.6668 19.7333 40.0002 18.1333C37.6002 16.7999 34.9335 15.9999 32.0002 15.9999C23.2002 15.9999 16.0002 23.1999 16.0002 31.9999C16.0002 32.7999 16.0002 33.5999 16.2668 34.3999C16.8002 37.3333 14.6668 39.9999 11.7335 40.5333C11.4668 40.5333 11.2002 40.7999 10.9335 40.7999Z"
              fill="#1DE2CF"
            />
            <path
              opacity="0.35"
              d="M31.9999 58.6666C27.1999 58.6666 22.6666 57.3333 18.6666 55.2C15.9999 53.6 15.1999 50.4 16.7999 48C18.1333 45.3333 21.3333 44.2666 23.9999 45.8666C26.3999 47.2 29.0666 48 31.9999 48C40.7999 48 47.9999 40.8 47.9999 32C47.9999 31.4666 47.9999 30.9333 47.9999 30.1333C47.7333 27.2 49.8666 24.5333 52.7999 24.2666C55.7333 24 58.3999 26.1333 58.6666 29.0666C58.6666 30.1333 58.9333 30.9333 58.9333 32C58.6666 46.6666 46.6666 58.6666 31.9999 58.6666Z"
              fill="#1DE2CF"
            />
            <path
              d="M2.40005 32H18.9334C21.0667 32 22.1334 34.4 20.8 36L14.1334 44C12.2667 46.1333 9.06671 46.1333 7.20005 44L0.533379 36C-0.799954 34.4 0.266713 32 2.40005 32Z"
              fill="#1DE2CF"
            />
            <path
              d="M61.5999 31.9999H45.0665C42.9332 31.9999 41.8666 29.5999 43.1999 27.9999L49.8665 19.9999C51.7332 17.8666 54.9332 17.8666 56.7999 19.9999L63.4665 27.9999C64.7999 29.5999 63.7332 31.9999 61.5999 31.9999Z"
              fill="#1DE2CF"
            />
          </g>
          <defs>
            <clipPath id="clip0_1678_76">
              <rect width="64" height="64" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      title: data?.option5,
      description: data?.plan5,
    },
  ];

  return (
    <>
      <style jsx>
        {`
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
        `}
      </style>
      <div className="relative w-full overflow-hidden bg-[#F2F6F5] dark:bg-[#061E2C]">
        <div className="w-full lg:ps-28  max-lg:ps-20 max-md:ps-6  py-[50px] lg:py-[130px] ">
          <div className="">
            <h2 className="uppercase dark:text-[#EFCB1C] text[20px] text-[#FF895B]">
              {service?.howWorksMainSubTitle}
            </h2>
            <h3 className="lg:text-[47px] text-[30px] font-[500] leading-normal dark:text-white text-[#061E2C]">
              {service?.howWorksMainTitle}
            </h3>
            <p className="text-[#989CAA] font-[400] text-[16px] pe-4">
              {/* {service?.howWorksMainDescription} */}
              <div>
                <div
                  className="customQuill dark:quillDark customQuillMain"
                  dangerouslySetInnerHTML={{
                    __html: service?.howWorksMainDescription,
                  }}
                />
              </div>
            </p>
          </div>
          <div
            className="flex py-3 relative items-center lg:pe-20 pe-6 h-fit z-50 overflow-x-scroll hide-scrollbar gap-10 max-md:gap-4 justify-start lg:justify-between pt-[80px] cursor-grab select-none"
            ref={scrollContainerRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            {service?.howWorksData?.map((plan: any, index: number) => (
              <div
                key={index}
                className="text-center relative min-[1100px]:pb-[50px]"
              >
                <div className="w-[450px] h-[400px] flex flex-col gap-[15px] border border-[#445661] px-[30px] py-[20px] rounded-[30px]">
                  <div className="bg-[#DEE9EE] dark:bg-[#FFFFFF14] w-[120px] h-[120px] rounded-full">
                    <div className="flex justify-center items-center w-full h-full">
                      <Image
                        quality={1000}
                        unoptimized
                        src={plan?.workIcon}
                        width={1000}
                        height={1000}
                        alt="image"
                        className="col-span-12 object-cover rounded-[30px] w-20  lg:col-span-7 min-[1600px]:col-start-1"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-[500] text-start leading-[30px] tracking-[0.5px] text-[20px] text-[#061E2C] dark:text-white">
                      {plan.workTitle}
                    </p>
                    <p className="font-normal text-start leading-[22px] text-[16px] text-[#061E2C] dark:text-[#989CAA]">
                      {/* {plan.workDescription} */}
                      <div>
                        <div
                          className="customQuill dark:quillDark customQuillMain"
                          dangerouslySetInnerHTML={{
                            __html: plan.workDescription,
                          }}
                        />
                      </div>
                    </p>
                  </div>
                </div>

                <div className="absolute max-[1160px]:hidden bottom-[-0px] left-[50%] translate-x-[-50%]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <circle cx="9" cy="9" r="6" fill="#20D091" />
                    <circle
                      cx="9"
                      cy="9"
                      r="8.5"
                      stroke="#989CAA"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeDasharray="3 3"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute w-full -z-0 -translate-y-[22px]  max-[1160px]:border-none border-b border-dashed border-[#061E2C] dark:border-white "></div>
        </div>
      </div>
    </>
  );
}

export default ServiceDetails2;
