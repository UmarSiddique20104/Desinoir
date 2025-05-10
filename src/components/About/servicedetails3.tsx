import Image from "next/image";
import React, { useRef } from "react";
function ServiceDetails3({ data, service }: any) {
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
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
        >
          <g clipPath="url(#clip0_1427_189)">
            <path
              d="M57.1044 49.5631C56.3391 48.7978 51.9258 44.3844 49.6351 42.0938C47.7178 45.1391 45.1391 47.7178 42.0938 49.6351C44.3844 51.9258 48.7978 56.3391 49.5631 57.1044C51.6458 59.1871 55.0217 59.1871 57.1044 57.1044C59.1871 55.0217 59.1871 51.6458 57.1044 49.5631Z"
              fill="#1DE2CF"
            />
            <path
              opacity="0.35"
              d="M29.334 53.333C42.5888 53.333 53.334 42.5878 53.334 29.333C53.334 16.0782 42.5888 5.33301 29.334 5.33301C16.0792 5.33301 5.33398 16.0782 5.33398 29.333C5.33398 42.5878 16.0792 53.333 29.334 53.333Z"
              fill="#1DE2CF"
            />
            <path
              d="M16.0009 34.6671C15.3742 34.6671 14.7422 34.4457 14.2355 33.9977C13.1315 33.0217 13.0302 31.3364 14.0062 30.2324L20.4009 23.0004C22.2249 20.9391 25.7849 20.9364 27.6062 23.0004L30.0275 25.7391C30.5395 26.3151 31.3235 26.6137 32.0142 26.6324C32.7822 26.6324 33.4862 26.3151 33.9955 25.7417L38.6649 20.4884C39.6809 19.3444 41.1369 18.6457 42.6782 18.7071C44.2115 18.7204 45.6649 19.3977 46.6622 20.5631L48.6782 22.9151C49.2355 23.5657 50.0142 23.9417 50.8729 23.9737C51.7129 24.0057 52.5369 23.6884 53.1422 23.0857L59.4489 16.7791C60.4915 15.7364 62.1769 15.7364 63.2195 16.7791C64.2622 17.8217 64.2622 19.5071 63.2195 20.5497L56.9129 26.8564C55.2702 28.5017 52.9795 29.3924 50.6675 29.3044C48.3422 29.2137 46.1422 28.1497 44.6275 26.3844L42.6115 24.0297L37.9795 29.2857C36.4622 30.9924 34.3235 31.9231 32.0009 31.9657C29.7182 31.9631 27.5422 30.9791 26.0302 29.2697L24.0009 26.9791L17.9982 33.7684C17.4729 34.3631 16.7369 34.6671 16.0009 34.6671Z"
              fill="#1DE2CF"
            />
          </g>
          <defs>
            <clipPath id="clip0_1427_189">
              <rect width="64" height="64" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      title: data.option1,
      description: data.plan1,
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
            d="M42.6673 8H21.334C16.9233 8 13.334 11.5893 13.334 16V50.6667V56H50.6673V53.3333V50.6667V16C50.6673 11.5893 47.078 8 42.6673 8ZM18.6673 16C18.6673 14.528 19.862 13.3333 21.334 13.3333H42.6673C44.1393 13.3333 45.334 14.528 45.334 16V29.3333H18.6673V16ZM18.6673 50.6667V34.6667H45.334V50.6667H18.6673Z"
            fill="#5458B1"
          />
          <path
            d="M37.334 18.667H26.6673C23.7207 18.667 21.334 16.2803 21.334 13.3337V8.00033C21.334 5.05366 23.7207 2.66699 26.6673 2.66699H37.334C40.2807 2.66699 42.6673 5.05366 42.6673 8.00033V13.3337C42.6673 16.2803 40.2807 18.667 37.334 18.667Z"
            fill="#5458B1"
          />
          <path
            d="M21.334 40H10.6673C7.72065 40 5.33398 37.6133 5.33398 34.6667V29.3333C5.33398 26.3867 7.72065 24 10.6673 24H21.334C24.2807 24 26.6673 26.3867 26.6673 29.3333V34.6667C26.6673 37.6133 24.2807 40 21.334 40Z"
            fill="#5458B1"
          />
          <path
            d="M53.334 40H42.6673C39.7207 40 37.334 37.6133 37.334 34.6667V29.3333C37.334 26.3867 39.7207 24 42.6673 24H53.334C56.2807 24 58.6673 26.3867 58.6673 29.3333V34.6667C58.6673 37.6133 56.2807 40 53.334 40Z"
            fill="#5458B1"
          />
          <path
            d="M21.334 61.333H10.6673C7.72065 61.333 5.33398 58.9463 5.33398 55.9997V50.6663C5.33398 47.7197 7.72065 45.333 10.6673 45.333H21.334C24.2807 45.333 26.6673 47.7197 26.6673 50.6663V55.9997C26.6673 58.9463 24.2807 61.333 21.334 61.333Z"
            fill="#5458B1"
          />
          <path
            d="M53.334 61.333H42.6673C39.7207 61.333 37.334 58.9463 37.334 55.9997V50.6663C37.334 47.7197 39.7207 45.333 42.6673 45.333H53.334C56.2807 45.333 58.6673 47.7197 58.6673 50.6663V55.9997C58.6673 58.9463 56.2807 61.333 53.334 61.333Z"
            fill="#5458B1"
          />
        </svg>
      ),
      title: data.option2,
      description: data.plan2,
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
          <g clip-path="url(#clip0_1678_38)">
            <path
              opacity="0.35"
              d="M42.6673 42.6667H26.6673C23.7207 42.6667 21.334 40.28 21.334 37.3333V21.3333C21.334 13.9707 27.3047 8 34.6673 8C46.4487 8 56.0007 17.552 56.0007 29.3333C56.0007 36.696 50.03 42.6667 42.6673 42.6667Z"
              fill="#FF895B"
            />
            <path
              d="M38.6672 21.333C36.4592 21.333 34.6672 23.125 34.6672 25.333C34.6672 25.405 34.6833 25.4717 34.6886 25.541L21.5312 38.6983C22.0193 40.541 23.4592 41.981 25.3019 42.469L38.4592 29.3117C38.5286 29.317 38.5952 29.333 38.6672 29.333C40.8752 29.333 42.6672 27.541 42.6672 25.333C42.6672 23.125 40.8752 21.333 38.6672 21.333Z"
              fill="#FF895B"
            />
            <path
              d="M57.3607 10.9631L51.7047 5.30712C49.622 3.22445 46.246 3.22445 44.1633 5.30712L40.6113 8.85912C46.934 10.6911 52.038 15.3604 54.462 21.4084L57.3633 18.5071C59.4433 16.4218 59.4433 13.0458 57.3607 10.9631Z"
              fill="#FF895B"
            />
            <path
              d="M38.6667 50.667C36.4747 50.667 34.5493 51.739 33.3333 53.371V53.3337C20.8347 53.3337 10.6667 43.1657 10.6667 30.667H10.6293C12.2613 29.451 13.3333 27.5257 13.3333 25.3337C13.3333 21.651 10.3493 18.667 6.66667 18.667C2.984 18.667 0 21.651 0 25.3337C0 27.5257 1.072 29.451 2.704 30.667H2.66667C2.66667 47.5763 16.424 61.3337 33.3333 61.3337V61.2963C34.5493 62.9283 36.4747 64.0003 38.6667 64.0003C42.3493 64.0003 45.3333 61.0163 45.3333 57.3337C45.3333 53.651 42.3493 50.667 38.6667 50.667Z"
              fill="#FF895B"
            />
          </g>
          <defs>
            <clipPath id="clip0_1678_38">
              <rect width="64" height="64" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      title: data.option3,
      description: data.plan3,
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
            d="M48 56.0003H16C11.5813 56.0003 8 52.419 8 48.0003V18.667H56V48.0003C56 52.419 52.4187 56.0003 48 56.0003Z"
            fill="#FD346E"
          />
          <path
            d="M48 8H16C11.5813 8 8 11.5813 8 16V18.6667H56V16C56 11.5813 52.4187 8 48 8Z"
            fill="#FD346E"
          />
          <path
            d="M40 34.6664C39.3173 34.6664 38.6347 34.405 38.1147 33.885L35.448 31.2184C34.4053 30.1757 34.4053 28.4904 35.448 27.4477C36.4907 26.405 38.176 26.405 39.2187 27.4477L40 28.229L43.448 24.781C44.4907 23.7384 46.176 23.7384 47.2187 24.781C48.2613 25.8237 48.2613 27.509 47.2187 28.5517L41.8853 33.885C41.3653 34.405 40.6827 34.6664 40 34.6664Z"
            fill="#FD346E"
          />
          <path
            d="M26.6667 26.667C26.1707 26.667 19.1627 26.667 18.6667 26.667C17.1947 26.667 16 27.8617 16 29.3337C16 30.8057 17.1947 32.0003 18.6667 32.0003C19.1627 32.0003 26.1707 32.0003 26.6667 32.0003C28.1387 32.0003 29.3333 30.8057 29.3333 29.3337C29.3333 27.8617 28.1387 26.667 26.6667 26.667Z"
            fill="#FD346E"
          />
          <path
            d="M40 48.0003C39.3173 48.0003 38.6347 47.739 38.1147 47.219L35.448 44.5523C34.4053 43.5097 34.4053 41.8243 35.448 40.7817C36.4907 39.739 38.176 39.739 39.2187 40.7817L40 41.563L43.448 38.115C44.4907 37.0723 46.176 37.0723 47.2187 38.115C48.2613 39.1577 48.2613 40.843 47.2187 41.8857L41.8853 47.219C41.3653 47.739 40.6827 48.0003 40 48.0003Z"
            fill="#FD346E"
          />
          <path
            d="M26.6667 40C26.1707 40 19.1627 40 18.6667 40C17.1947 40 16 41.1947 16 42.6667C16 44.1387 17.1947 45.3333 18.6667 45.3333C19.1627 45.3333 26.1707 45.3333 26.6667 45.3333C28.1387 45.3333 29.3333 44.1387 29.3333 42.6667C29.3333 41.1947 28.1387 40 26.6667 40Z"
            fill="#FD346E"
          />
        </svg>
      ),
      title: data.option4,
      description: data.plan4,
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
            d="M32 37.333H16C11.5813 37.333 8 33.7517 8 29.333V13.333C8 8.91434 11.5813 5.33301 16 5.33301H32C36.4187 5.33301 40 8.91434 40 13.333V29.333C40 33.7517 36.4187 37.333 32 37.333Z"
            fill="#1DE2CF"
          />
          <path
            opacity="0.35"
            d="M50.666 58.667H34.666C30.2473 58.667 26.666 55.0857 26.666 50.667V34.667C26.666 30.2483 30.2473 26.667 34.666 26.667H50.666C55.0847 26.667 58.666 30.2483 58.666 34.667V50.667C58.666 55.0857 55.0847 58.667 50.666 58.667Z"
            fill="#1DE2CF"
          />
          <path
            d="M13.334 46.7253C13.334 45.4933 14.822 44.8719 15.6993 45.7386L21.9286 51.9093C22.7206 52.6933 22.7206 53.9759 21.9286 54.7599L15.6993 60.9306C14.822 61.7973 13.334 61.1759 13.334 59.9413V46.7253Z"
            fill="#1DE2CF"
          />
          <path
            d="M15.9993 56H10.666C6.25535 56 2.66602 52.4107 2.66602 48V42.6667C2.66602 41.1947 3.85802 40 5.33268 40C6.80735 40 7.99935 41.1947 7.99935 42.6667V48C7.99935 49.4693 9.19402 50.6667 10.666 50.6667H15.9993C17.474 50.6667 18.666 51.8613 18.666 53.3333C18.666 54.8053 17.474 56 15.9993 56Z"
            fill="#1DE2CF"
          />
        </svg>
      ),
      title: data.option5,
      description: data.plan5,
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

export default ServiceDetails3;
