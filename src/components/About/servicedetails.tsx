import Image from "next/image";
import React, { useRef } from "react";

function ServiceDetails({ data, service }: any) {
  const plans = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="86"
          height="86"
          viewBox="0 0 86 86"
          fill="none"
        >
          <path
            opacity="0.35"
            d="M14.334 68.0837V17.917C14.334 11.9794 19.1464 7.16699 25.084 7.16699H50.1673L71.6673 28.667V68.0837C71.6673 74.0212 66.8549 78.8337 60.9173 78.8337H25.084C19.1464 78.8337 14.334 74.0212 14.334 68.0837Z"
            fill="#434750"
          />
          <path
            d="M50.166 21.5003V7.16699L71.666 28.667H57.3327C53.3731 28.667 50.166 25.4599 50.166 21.5003Z"
            className="fill-[#434750] dark:fill-white"
          />
          <path
            d="M53.7493 46.5837H32.2493C30.2678 46.5837 28.666 44.9783 28.666 43.0003C28.666 41.0223 30.2678 39.417 32.2493 39.417H53.7493C55.7309 39.417 57.3327 41.0223 57.3327 43.0003C57.3327 44.9783 55.7309 46.5837 53.7493 46.5837Z"
            className="fill-[#434750] dark:fill-white"
          />
          <path
            d="M46.5827 60.9167H32.2493C30.2678 60.9167 28.666 59.3113 28.666 57.3333C28.666 55.3553 30.2678 53.75 32.2493 53.75H46.5827C48.5643 53.75 50.166 55.3553 50.166 57.3333C50.166 59.3113 48.5643 60.9167 46.5827 60.9167Z"
            className="fill-[#434750] dark:fill-white"
          />
        </svg>
      ),
      title: data.plan1,
      description: data.plan1II,
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="86"
          height="86"
          viewBox="0 0 86 86"
          fill="none"
        >
          {/* icon paths */}
        </svg>
      ),
      title: data.plan2,
      description: data.plan21I,
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="86"
          height="86"
          viewBox="0 0 86 86"
          fill="none"
        >
          {/* icon paths */}
        </svg>
      ),
      title: data.plan3,
      description: data.plan3II,
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="86"
          height="86"
          viewBox="0 0 86 86"
          fill="none"
        >
          {/* icon paths */}
        </svg>
      ),
      title: data.plan4,
      description: data.plan4II,
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="86"
          height="86"
          viewBox="0 0 86 86"
          fill="none"
        >
          {/* icon paths */}
        </svg>
      ),
      title: data.plan5,
      description: data.plan5II,
    },
  ];

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

  const options = [
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
            opacity="0.35"
            d="M53.3335 26.6667C53.3335 17.8294 46.1708 10.6667 37.3335 10.6667C31.3735 10.6667 26.1868 13.9307 23.4322 18.7627C13.2802 19.7201 5.3335 28.2614 5.3335 38.6667C5.3335 49.7121 14.2882 58.6667 25.3335 58.6667C35.7388 58.6667 44.2802 50.7201 45.2375 40.5681C50.0695 37.8134 53.3335 32.6267 53.3335 26.6667Z"
            fill="#1DE2CF"
          />
          <path
            d="M38.6665 5.33325C27.6212 5.33325 18.6665 14.2879 18.6665 25.3333C18.6665 29.3093 19.8398 33.0026 21.8398 36.1146C24.7652 33.1893 30.1972 27.7573 32.6692 25.2853L30.0185 22.6399C28.5545 21.1733 29.5918 18.6666 31.6638 18.6666H41.5492C43.6398 18.6666 45.3332 20.3599 45.3332 22.4479V32.3333C45.3332 34.4053 42.8265 35.4453 41.3598 33.9786L38.7118 31.3306C36.2398 33.8026 30.8105 39.2319 27.8825 42.1599C30.9972 44.1599 34.6905 45.3333 38.6665 45.3333C49.7118 45.3333 58.6665 36.3786 58.6665 25.3333C58.6665 14.2879 49.7118 5.33325 38.6665 5.33325Z"
            fill="#1DE2CF"
          />
        </svg>
      ),
      title: data?.option1,
      description: data?.plan1,
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
            opacity="0.35"
            d="M32 16H50.6667C55.0853 16 58.6667 19.5813 58.6667 24V40C58.6667 44.4187 55.0853 48 50.6667 48H32V16Z"
            fill="#5458B1"
          />
          <path
            d="M32 8V56"
            stroke="#5458B1"
            stroke-width="16"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M32.0002 16H13.3335C8.91483 16 5.3335 19.5813 5.3335 24V40C5.3335 44.4187 8.91483 48 13.3335 48H32.0002V16Z"
            fill="#5458B1"
          />
        </svg>
      ),
      title: data?.option2,
      description: data?.plan2,
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
            opacity="0.35"
            d="M50.6665 10.6667H7.99984C5.05432 10.6667 2.6665 13.0546 2.6665 16.0001V42.6667C2.6665 45.6123 5.05432 48.0001 7.99984 48.0001H50.6665C53.612 48.0001 55.9998 45.6123 55.9998 42.6667V16.0001C55.9998 13.0546 53.612 10.6667 50.6665 10.6667Z"
            fill="#FF895B"
          />
          <path
            d="M38.7068 31.6187L25.3735 39.6187C24.9689 39.8618 24.5071 39.9931 24.0351 39.9993C23.5632 40.0055 23.098 39.8863 22.6872 39.6539C22.2764 39.4215 21.9346 39.0843 21.6968 38.6766C21.4589 38.2689 21.3336 37.8054 21.3335 37.3334V21.3334C21.3336 20.8614 21.4589 20.3979 21.6968 19.9902C21.9346 19.5825 22.2764 19.2452 22.6872 19.0129C23.098 18.7805 23.5632 18.6613 24.0351 18.6675C24.5071 18.6737 24.9689 18.805 25.3735 19.0481L38.7068 27.0481C39.1011 27.2851 39.4273 27.6202 39.6538 28.0206C39.8803 28.4211 39.9993 28.8733 39.9993 29.3334C39.9993 29.7935 39.8803 30.2457 39.6538 30.6461C39.4273 31.0466 39.1011 31.3817 38.7068 31.6187Z"
            fill="#FF895B"
          />
          <path
            d="M55.9998 16V42.6667C55.9998 44.0812 55.4379 45.4377 54.4377 46.4379C53.4375 47.4381 52.081 48 50.6665 48H10.6665C10.6665 49.3904 11.2189 50.7239 12.202 51.7071C13.1852 52.6903 14.5187 53.2427 15.9092 53.2427H55.9998C57.4143 53.2427 58.7709 52.6808 59.7711 51.6806C60.7713 50.6804 61.3332 49.3238 61.3332 47.9093V21.2427C61.3332 20.5542 61.1976 19.8725 60.9341 19.2364C60.6706 18.6003 60.2845 18.0224 59.7976 17.5355C59.3108 17.0487 58.7329 16.6625 58.0968 16.3991C57.4607 16.1356 56.779 16 56.0905 16H55.9998Z"
            fill="#FF895B"
          />
        </svg>
      ),
      title: data?.option3,
      description: data?.plan3,
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
            d="M32 32C36.4183 32 40 28.4183 40 24C40 19.5817 36.4183 16 32 16C27.5817 16 24 19.5817 24 24C24 28.4183 27.5817 32 32 32Z"
            fill="#FD346E"
          />
          <path
            d="M39.9998 37.3333H23.9998C22.5853 37.3333 21.2288 37.8952 20.2286 38.8954C19.2284 39.8955 18.6665 41.2521 18.6665 42.6666C18.6665 44.0811 19.2284 45.4376 20.2286 46.4378C21.2288 47.438 22.5853 47.9999 23.9998 47.9999H39.9998C41.4143 47.9999 42.7709 47.438 43.7711 46.4378C44.7713 45.4376 45.3332 44.0811 45.3332 42.6666C45.3332 41.2521 44.7713 39.8955 43.7711 38.8954C42.7709 37.8952 41.4143 37.3333 39.9998 37.3333Z"
            fill="#FD346E"
          />
          <path
            d="M19.3627 32.6906C18.0676 33.8476 16.4255 34.5425 14.6933 34.6666C14.5135 34.686 14.3316 34.6648 14.161 34.6047C13.9904 34.5445 13.8355 34.4469 13.7076 34.319C13.5797 34.1911 13.4821 34.0362 13.422 33.8656C13.3618 33.695 13.3406 33.5131 13.36 33.3333C13.4788 31.6032 14.1692 29.9616 15.3227 28.6666C16.6176 27.5132 18.2592 26.8227 19.9893 26.704C20.1692 26.6846 20.351 26.7058 20.5216 26.7659C20.6922 26.8261 20.8471 26.9237 20.975 27.0516C21.1029 27.1795 21.2005 27.3344 21.2607 27.505C21.3208 27.6756 21.342 27.8575 21.3227 28.0373C21.1984 29.7617 20.5096 31.397 19.3627 32.6906Z"
            fill="#FD346E"
          />
          <path
            opacity="0.35"
            d="M50.6668 10.6667H13.3335C8.91522 10.6667 5.3335 14.2485 5.3335 18.6667V45.3334C5.3335 49.7517 8.91522 53.3334 13.3335 53.3334H50.6668C55.0851 53.3334 58.6668 49.7517 58.6668 45.3334V18.6667C58.6668 14.2485 55.0851 10.6667 50.6668 10.6667Z"
            fill="#FD346E"
          />
        </svg>
      ),
      title: data?.option4,
      description: data?.plan4,
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
          <g clip-path="url(#clip0_1678_128)">
            <path
              d="M33.3333 56C31.704 56 30.1707 54.9973 29.5787 53.376L18.6667 23.6187L7.75468 53.3787C6.99201 55.4533 4.69068 56.5173 2.62135 55.7573C0.549346 54.9973 -0.517321 52.6987 0.242679 50.624L14.9093 10.624C15.488 9.048 16.9893 8 18.6667 8C20.344 8 21.8453 9.048 22.4213 10.6213L37.088 50.6213C37.848 52.696 36.784 54.9947 34.7093 55.7547C34.256 55.9227 33.7893 56 33.3333 56Z"
              fill="#1DE2CF"
            />
            <path
              d="M28.0002 45.3333H9.3335C7.12283 45.3333 5.3335 43.5439 5.3335 41.3333C5.3335 39.1226 7.12283 37.3333 9.3335 37.3333H28.0002C30.2108 37.3333 32.0002 39.1226 32.0002 41.3333C32.0002 43.5439 30.2108 45.3333 28.0002 45.3333Z"
              fill="#1DE2CF"
            />
            <path
              opacity="0.35"
              d="M63.7256 51.3413L55.0589 31.3413C54.5309 30.1226 53.3282 29.3333 52.0002 29.3333C50.6722 29.3333 49.4696 30.1226 48.9416 31.3413L40.2749 51.3413C39.5442 53.0293 40.3202 54.9946 42.0082 55.7252C43.7016 56.4586 45.6589 55.6826 46.3922 53.9919L47.8322 50.6666H56.1656L57.6056 53.9919C58.1549 55.2506 59.3816 55.9999 60.6669 55.9999C61.1096 55.9999 61.5576 55.9119 61.9922 55.7226C63.6802 54.9946 64.4562 53.0293 63.7256 51.3413ZM50.1442 45.3333L52.0002 41.0506L53.8562 45.3333H50.1442Z"
              fill="#1DE2CF"
            />
          </g>
          <defs>
            <clipPath id="clip0_1678_128">
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
                        className="col-span-12 object-cover rounded-[30px] w-20   lg:col-span-7 min-[1600px]:col-start-1"
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

export default ServiceDetails;
