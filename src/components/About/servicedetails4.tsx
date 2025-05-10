import Image from "next/image";
import React, { useRef } from "react";
function ServiceDetails4({ data, service }: any) {
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
      option: data?.option1,
      plan: data?.plan1,
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
            d="M50.6667 10.6667H21.3333C19.8613 10.6667 18.6667 11.8614 18.6667 13.3334V26.6667H13.3333C10.3867 26.6667 8 29.0534 8 32.0001V53.3334C8 56.2801 10.3867 58.6667 13.3333 58.6667H40C42.9467 58.6667 45.3333 56.2801 45.3333 53.3334V42.6667H50.6667C53.6133 42.6667 56 40.2801 56 37.3334V16.0001C56 13.0534 53.6133 10.6667 50.6667 10.6667Z"
            fill="#1DE2CF"
          />
          <path
            d="M18.6665 26.6666H45.3332L18.6665 13.3333V26.6666Z"
            fill="#1DE2CF"
          />
        </svg>
      ),
    },
    {
      option: data?.option2,
      plan: data?.plan2,
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
            d="M48 56H16C11.5813 56 8 52.4187 8 48V13.3333C8 10.3867 10.3867 8 13.3333 8H50.6667C53.6133 8 56 10.3867 56 13.3333V48C56 52.4187 52.4187 56 48 56Z"
            fill="#5458B1"
          />
          <path
            d="M37.3333 16C36.8373 16 27.1627 16 26.6667 16C25.1947 16 24 17.1947 24 18.6667C24 20.1387 25.1947 21.3333 26.6667 21.3333C27.1627 21.3333 36.8373 21.3333 37.3333 21.3333C38.8053 21.3333 40 20.1387 40 18.6667C40 17.1947 38.8053 16 37.3333 16Z"
            fill="#5458B1"
          />
          <path
            d="M45.3332 42.6667C44.8372 42.6667 37.8292 42.6667 37.3332 42.6667C35.8612 42.6667 34.6665 43.8614 34.6665 45.3334C34.6665 46.8054 35.8612 48.0001 37.3332 48.0001C37.8292 48.0001 44.8372 48.0001 45.3332 48.0001C46.8052 48.0001 47.9998 46.8054 47.9998 45.3334C47.9998 43.8614 46.8052 42.6667 45.3332 42.6667Z"
            fill="#5458B1"
          />
        </svg>
      ),
    },
    {
      option: data?.option3,
      plan: data?.plan3,
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
            d="M42.6668 42.6667H26.6668C23.7202 42.6667 21.3335 40.28 21.3335 37.3333V21.3333C21.3335 13.9707 27.3042 8 34.6668 8C46.4482 8 56.0002 17.552 56.0002 29.3333C56.0002 36.696 50.0295 42.6667 42.6668 42.6667Z"
            fill="#FF895B"
          />
          <path
            d="M38.6668 21.3333C36.4588 21.3333 34.6668 23.1253 34.6668 25.3333C34.6668 25.4053 34.6828 25.4719 34.6881 25.5413L21.5308 38.6986C22.0188 40.5413 23.4588 41.9813 25.3014 42.4693L38.4588 29.3119C38.5281 29.3173 38.5948 29.3333 38.6668 29.3333C40.8748 29.3333 42.6668 27.5413 42.6668 25.3333C42.6668 23.1253 40.8748 21.3333 38.6668 21.3333Z"
            fill="#FF895B"
          />
          <path
            d="M57.3602 10.9626L51.7042 5.30663C49.6215 3.22396 46.2455 3.22396 44.1628 5.30663L40.6108 8.85863C46.9335 10.6906 52.0375 15.36 54.4615 21.408L57.3628 18.5066C59.4428 16.4213 59.4428 13.0453 57.3602 10.9626Z"
            fill="#FF895B"
          />
          <path
            d="M38.6667 50.6667C36.4747 50.6667 34.5493 51.7387 33.3333 53.3707V53.3334C20.8347 53.3334 10.6667 43.1654 10.6667 30.6667H10.6293C12.2613 29.4507 13.3333 27.5254 13.3333 25.3334C13.3333 21.6507 10.3493 18.6667 6.66667 18.6667C2.984 18.6667 0 21.6507 0 25.3334C0 27.5254 1.072 29.4507 2.704 30.6667H2.66667C2.66667 47.5761 16.424 61.3334 33.3333 61.3334V61.2961C34.5493 62.9281 36.4747 64.0001 38.6667 64.0001C42.3493 64.0001 45.3333 61.0161 45.3333 57.3334C45.3333 53.6507 42.3493 50.6667 38.6667 50.6667Z"
            fill="#FF895B"
          />
        </svg>
      ),
    },
    {
      option: data?.option4,
      plan: data?.plan4,
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
            d="M32.0002 5.33325C17.2722 5.33325 5.3335 17.2719 5.3335 31.9999C5.3335 46.7279 17.2722 58.6666 32.0002 58.6666C46.7282 58.6666 58.6668 46.7279 58.6668 31.9999C58.6668 17.2719 46.7282 5.33325 32.0002 5.33325ZM32.0002 39.9999C27.5815 39.9999 24.0002 36.4186 24.0002 31.9999C24.0002 27.5813 27.5815 23.9999 32.0002 23.9999C36.4188 23.9999 40.0002 27.5813 40.0002 31.9999C40.0002 36.4186 36.4188 39.9999 32.0002 39.9999Z"
            fill="#FD346E"
          />
          <path
            d="M34.9947 5.49873C33.4053 5.32273 32 6.55206 32 8.15206C32 11.8907 32 18.6427 32 24.0107C36.4 24.0054 39.9947 27.6001 40 32.0001H55.8347C57.4347 32.0001 58.68 30.5947 58.5013 29.0054C57.1227 16.6694 47.3307 6.87739 34.9947 5.49873Z"
            fill="#FD346E"
          />
        </svg>
      ),
    },
    {
      option: data?.option5,
      plan: data?.plan5,
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
            d="M50.6668 48.0001H13.3335C8.91483 48.0001 5.3335 44.4187 5.3335 40.0001V18.6667C5.3335 14.2481 8.91483 10.6667 13.3335 10.6667H50.6668C55.0855 10.6667 58.6668 14.2481 58.6668 18.6667V40.0001C58.6668 44.4187 55.0855 48.0001 50.6668 48.0001Z"
            fill="#1DE2CF"
          />
          <path
            d="M41.3332 48C40.8638 48 23.1358 48 22.6665 48C20.4585 48 18.6665 49.792 18.6665 52C18.6665 54.208 20.4585 56 22.6665 56C23.1358 56 40.8638 56 41.3332 56C43.5412 56 45.3332 54.208 45.3332 52C45.3332 49.792 43.5412 48 41.3332 48Z"
            fill="#1DE2CF"
          />
          <path
            d="M24 21.3333H18.6667C17.1947 21.3333 16 22.5279 16 23.9999V37.3333C16 38.8053 17.1947 39.9999 18.6667 39.9999H24C25.472 39.9999 26.6667 38.8053 26.6667 37.3333V23.9999C26.6667 22.5279 25.472 21.3333 24 21.3333Z"
            fill="#1DE2CF"
          />
          <path
            d="M45.3333 18.6667H34.6667C33.1947 18.6667 32 19.8614 32 21.3334V37.3334C32 38.8054 33.1947 40.0001 34.6667 40.0001H45.3333C46.8053 40.0001 48 38.8054 48 37.3334V21.3334C48 19.8614 46.8053 18.6667 45.3333 18.6667Z"
            fill="#1DE2CF"
          />
        </svg>
      ),
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

export default ServiceDetails4;
