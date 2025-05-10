import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import LocaleSwitcher2 from "./common/LocaleSwitcher2";

function MegaMenu({ menu, setMegamenu, lang, parent }: any) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  let timeoutId: any;

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200); // Adjust the delay time as needed
  };
  const dropdownOptionsArabic = [
    {
      name: "تصميم واجهة المستخدم وتجربة المستخدم",
      url: "services/ui-ux-design-services",
    },
    { name: "العلامات التجارية", url: "services/brand-identity-design-services" },
    { name: "تصميم الجرافيك", url: "services/graphic-design-services" },
    {
      name: "تصميم الرسوم المتحركة",
      url: "services/motion-graphic-services",
    },
  ];

  const dropdownOptions = [
    {
      name: "UI/UX Designing",
      url: "services/ui-ux-design-services",
    },
    {
      name: "Branding",
      url: "services/brand-identity-design-services",
    },
    {
      name: "Graphic Designing",
      url: "services/graphic-design-services",
    },
    {
      name: "Motion Graphic Designing",
      url: "services/motion-graphic-services",
    },
  ];
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="">
      <div
        className={`megamenuclass overflow-y-auto pb-[30px] ${menu ? "open" : ""
          } bg-[#02111B]`}
      >
        <div className="flex flex-col h-full items-center justify-between">
          <div className="flex items-center justify-between max-w-[1460px] pt-[20px] md:py-[23px] w-11/12 px-2 md:px-0 md:w-10/12 mx-auto">
            <Link href={`/${lang}`}>
              <Image
                className="md:w-[220px] w-[160px] h-auto"
                src="/assets/home/logo-main.svg"
                alt="logo"
                width={100}
                height={54}
              />
            </Link>
            <button
              type="button"
              className="text-white"
              onClick={() => setMegamenu(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-[40px ] w-[30px] md:w-[40px]"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M32.4853 5.80882C32.0448 5.81921 31.6264 6.00354 31.3215 6.32151L19.9999 17.6431L8.67828 6.32151C8.52278 6.16166 8.33677 6.03463 8.13129 5.94797C7.9258 5.8613 7.70501 5.81675 7.482 5.81695C7.15058 5.81736 6.82681 5.91656 6.55204 6.10188C6.27728 6.28719 6.06399 6.5502 5.93943 6.85732C5.81487 7.16444 5.78469 7.50172 5.85275 7.82608C5.92081 8.15043 6.08401 8.44713 6.32151 8.67828L17.6431 19.9999L6.32151 31.3215C6.16156 31.4751 6.03385 31.659 5.94588 31.8626C5.8579 32.0661 5.81142 32.2852 5.80917 32.5069C5.80691 32.7287 5.84892 32.9486 5.93274 33.1539C6.01655 33.3592 6.14049 33.5457 6.29729 33.7025C6.45408 33.8593 6.64059 33.9832 6.84589 34.0671C7.05118 34.1509 7.27114 34.1929 7.49288 34.1906C7.71461 34.1884 7.93367 34.1419 8.13721 34.0539C8.34076 33.9659 8.52471 33.8382 8.67828 33.6783L19.9999 22.3567L31.3215 33.6783C31.4751 33.8382 31.659 33.9659 31.8626 34.0539C32.0661 34.1419 32.2852 34.1884 32.5069 34.1906C32.7287 34.1929 32.9486 34.1509 33.1539 34.0671C33.3592 33.9832 33.5457 33.8593 33.7025 33.7025C33.8593 33.5457 33.9833 33.3592 34.0671 33.1539C34.1509 32.9486 34.1929 32.7287 34.1906 32.5069C34.1884 32.2852 34.1419 32.0661 34.0539 31.8626C33.9659 31.659 33.8382 31.4751 33.6783 31.3215L22.3567 19.9999L33.6783 8.67828C33.9208 8.44573 34.0874 8.14531 34.1562 7.81642C34.225 7.48753 34.1927 7.14553 34.0637 6.83527C33.9348 6.52501 33.715 6.26099 33.4333 6.07781C33.1516 5.89464 32.8212 5.80087 32.4853 5.80882Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
          <div className="grid overflow-y-auto lg:pb-[20px] sm:pt-14  max-sm:pt-14  min-[1600px]:pb-[90px] scrollbar grid-cols-12 max-w-[1460px] w-10/12 mx-auto">
            <div
              className={`${menu ? "open" : ""
                } md:col-span-4 col-span-12 justify-between listing`}
            >
              <ul className="flex flex-col gap-[15px] lg:gap-[20px] min-[1600px]:gap-[40px]">
                <li className="inline-flex">
                  {" "}
                  <Link
                    href={`/${lang}`}
                    className={`${
                      // currentPath === `/${lang}`
                      lang === "en" ? "text-[#ffffff]" : "text-[#ffffff]"
                      } hover:text-[#20D091]  group relative font-[500] min-[1600px]:text-[50px] lg::text-[30px] text-[30px] leading-[60px]`}
                  >
                    <span className=" group-hover:ps-[32px] transition-all duration-500">
                      {parent?.page?.Home}
                    </span>
                    <span
                      className={`${
                        // currentPath === `/${lang}`
                        lang === "en" ? "left-0" : "right-0"
                        } absolute top-[50%] transition-all duration-500 translate-y-[-50%] group-hover:w-[15px] group-hover:h-[15px] h-0 w-0 opacity-0 group-hover:opacity-100 bg-[#20D091] rounded-full
                    `}
                    ></span>
                  </Link>
                </li>
                <li className="inline-flex">
                  <Link
                    href={`/${lang}/about`}
                    className={`${
                      // currentPath === `/${lang}`
                      lang === "en" ? "text-[#ffffff]" : "text-[#ffffff]"
                      } hover:text-[#20D091]  group relative font-[500] min-[1600px]:text-[50px] lg:text-[30px] text-[30px] leading-[60px]`}
                  >
                    <span className=" group-hover:ps-[32px] transition-all duration-500">
                      {parent?.page?.AboutUs}
                    </span>
                    <span
                      className={`${
                        // currentPath === `/${lang}`
                        lang === "en" ? "left-0" : "right-0"
                        } absolute top-[50%] transition-all duration-500 translate-y-[-50%] group-hover:w-[15px] group-hover:h-[15px] h-0 w-0 opacity-0 group-hover:opacity-100 bg-[#20D091] rounded-full
                    `}
                    ></span>
                  </Link>
                </li>
                <li className="inline-flex">
                  <Link
                    href={`/${lang}/our-services`}
                    className={`${
                      // currentPath === `/${lang}`
                      lang === "en" ? "text-[#ffffff]" : "text-[#ffffff]"
                      } hover:text-[#20D091]  group relative font-[500] min-[1600px]:text-[50px] lg::text-[30px] text-[30px] leading-[60px]`}
                  >
                    <span className=" group-hover:ps-[32px] transition-all duration-500">
                      {parent?.footer?.Services}
                    </span>
                    <span
                      className={`${
                        // currentPath === `/${lang}`
                        lang === "en" ? "left-0" : "right-0"
                        } absolute top-[50%] transition-all duration-500 translate-y-[-50%] group-hover:w-[15px] group-hover:h-[15px] h-0 w-0 opacity-0 group-hover:opacity-100 bg-[#20D091] rounded-full
                    `}
                    ></span>
                  </Link>
                </li>
                <li className="inline-flex">
                  <Link
                    href={`/${lang}/our-work`}
                    className={`${
                      // currentPath === `/${lang}`
                      lang === "en" ? "text-[#ffffff]" : "text-[#ffffff]"
                      } hover:text-[#20D091]  group relative font-[500] min-[1600px]:text-[50px] lg::text-[30px] text-[30px] leading-[60px]`}
                  >
                    <span className=" group-hover:ps-[32px] transition-all duration-500">
                      {parent?.page?.OurProjectsnav}
                    </span>
                    <span
                      className={`${
                        // currentPath === `/${lang}`
                        lang === "en" ? "left-0" : "right-0"
                        } absolute top-[50%] transition-all duration-500 translate-y-[-50%] group-hover:w-[15px] group-hover:h-[15px] h-0 w-0 opacity-0 group-hover:opacity-100 bg-[#20D091] rounded-full
                    `}
                    ></span>
                  </Link>
                </li>
                <li className="inline-flex">
                  <Link
                    href={`/${lang}/article`}
                    className={`${
                      // currentPath === `/${lang}`
                      lang === "en" ? "text-[#ffffff]" : "text-[#ffffff]"
                      } hover:text-[#20D091]  group relative font-[500] min-[1600px]:text-[50px] lg::text-[30px] text-[30px] leading-[60px]`}
                  >
                    <span className=" group-hover:ps-[32px] transition-all duration-500">
                      {parent?.page?.Article}
                    </span>
                    <span
                      className={`${
                        // currentPath === `/${lang}`
                        lang === "en" ? "left-0" : "right-0"
                        } absolute top-[50%] transition-all duration-500 translate-y-[-50%] group-hover:w-[15px] group-hover:h-[15px] h-0 w-0 opacity-0 group-hover:opacity-100 bg-[#20D091] rounded-full
                    `}
                    ></span>
                  </Link>
                </li>
                <li className="inline-flex">
                  <Link
                    href={`/${lang}/ui-store`}
                    className={`${
                      // currentPath === `/${lang}`
                      lang === "en" ? "text-[#ffffff]" : "text-[#ffffff]"
                      } hover:text-[#20D091]  group relative font-[500] min-[1600px]:text-[50px] lg::text-[30px] text-[30px] leading-[60px]`}
                  >
                    <span className=" group-hover:ps-[32px] transition-all duration-500">
                      {parent?.page?.UIStorenav}
                    </span>
                    <span
                      className={`${
                        // currentPath === `/${lang}`
                        lang === "en" ? "left-0" : "right-0"
                        } absolute top-[50%] transition-all duration-500 translate-y-[-50%] group-hover:w-[15px] group-hover:h-[15px] h-0 w-0 opacity-0 group-hover:opacity-100 bg-[#20D091] rounded-full
                    `}
                    ></span>
                  </Link>
                </li>



              </ul>
              <LocaleSwitcher2 lang={lang} />
            </div>
            <div
              className={`${menu ? "open" : ""
                }  col-span-1 lg:flex hidden  listing items-center`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1"
                height="350"
                viewBox="0 0 1 350"
                fill="none"
              >
                <path
                  opacity="0.5"
                  d="M0.5 1L0.500015 349"
                  stroke="#989CAA"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            
            <div
              className={`${menu ? "open" : ""
                } lg:col-span-3 col-span-12 max-lg:mt-[20px] min listing`}
            >
              <Link
                href={`/${lang}/services/ui-ux-design-services`}
                className="text-[#ffffff] font-[500] text-[30px]"
              >
                {parent?.aboutPage?.option1}
              </Link>
              <ul className="flex flex-col gap-[15px] mt-[20px] mb-[45px]">
                <li className="text-[#ffffff] flex gap-[10px] items-center font-[400] text-[16px] leading-normal">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M9.99984 1.66675C5.40484 1.66675 1.6665 5.40508 1.6665 10.0001C1.6665 14.5951 5.40484 18.3334 9.99984 18.3334C14.5948 18.3334 18.3332 14.5951 18.3332 10.0001C18.3332 5.40508 14.5948 1.66675 9.99984 1.66675ZM13.5669 8.56716L9.40025 12.7338C9.27817 12.8559 9.11817 12.9167 8.95817 12.9167C8.79817 12.9167 8.63817 12.8559 8.51609 12.7338L6.43275 10.6505C6.18859 10.4063 6.18859 10.0109 6.43275 9.76675C6.67692 9.52258 7.07234 9.52258 7.3165 9.76675L8.95775 11.408L12.6823 7.68341C12.9265 7.43925 13.3219 7.43925 13.5661 7.68341C13.8103 7.92758 13.8107 8.323 13.5669 8.56716Z"
                      fill="#989CAA"
                    />
                  </svg>{" "}
                  {parent?.megaMenu?.iserResearch}
                </li>
                <li className="text-[#ffffff] flex gap-[10px] items-center font-[400] text-[16px] leading-normal">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M9.99984 1.66675C5.40484 1.66675 1.6665 5.40508 1.6665 10.0001C1.6665 14.5951 5.40484 18.3334 9.99984 18.3334C14.5948 18.3334 18.3332 14.5951 18.3332 10.0001C18.3332 5.40508 14.5948 1.66675 9.99984 1.66675ZM13.5669 8.56716L9.40025 12.7338C9.27817 12.8559 9.11817 12.9167 8.95817 12.9167C8.79817 12.9167 8.63817 12.8559 8.51609 12.7338L6.43275 10.6505C6.18859 10.4063 6.18859 10.0109 6.43275 9.76675C6.67692 9.52258 7.07234 9.52258 7.3165 9.76675L8.95775 11.408L12.6823 7.68341C12.9265 7.43925 13.3219 7.43925 13.5661 7.68341C13.8103 7.92758 13.8107 8.323 13.5669 8.56716Z"
                      fill="#989CAA"
                    />
                  </svg>
                  {parent?.megaMenu?.informationArchitecture}
                </li>
                <li className="text-[#ffffff] flex gap-[10px] items-center font-[400] text-[16px] leading-normal">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M9.99984 1.66675C5.40484 1.66675 1.6665 5.40508 1.6665 10.0001C1.6665 14.5951 5.40484 18.3334 9.99984 18.3334C14.5948 18.3334 18.3332 14.5951 18.3332 10.0001C18.3332 5.40508 14.5948 1.66675 9.99984 1.66675ZM13.5669 8.56716L9.40025 12.7338C9.27817 12.8559 9.11817 12.9167 8.95817 12.9167C8.79817 12.9167 8.63817 12.8559 8.51609 12.7338L6.43275 10.6505C6.18859 10.4063 6.18859 10.0109 6.43275 9.76675C6.67692 9.52258 7.07234 9.52258 7.3165 9.76675L8.95775 11.408L12.6823 7.68341C12.9265 7.43925 13.3219 7.43925 13.5661 7.68341C13.8103 7.92758 13.8107 8.323 13.5669 8.56716Z"
                      fill="#989CAA"
                    />
                  </svg>{" "}
                  {parent?.megaMenu?.visualDesign}
                </li>
                <li className="text-[#ffffff] flex gap-[10px] items-center font-[400] text-[16px] leading-normal">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M9.99984 1.66675C5.40484 1.66675 1.6665 5.40508 1.6665 10.0001C1.6665 14.5951 5.40484 18.3334 9.99984 18.3334C14.5948 18.3334 18.3332 14.5951 18.3332 10.0001C18.3332 5.40508 14.5948 1.66675 9.99984 1.66675ZM13.5669 8.56716L9.40025 12.7338C9.27817 12.8559 9.11817 12.9167 8.95817 12.9167C8.79817 12.9167 8.63817 12.8559 8.51609 12.7338L6.43275 10.6505C6.18859 10.4063 6.18859 10.0109 6.43275 9.76675C6.67692 9.52258 7.07234 9.52258 7.3165 9.76675L8.95775 11.408L12.6823 7.68341C12.9265 7.43925 13.3219 7.43925 13.5661 7.68341C13.8103 7.92758 13.8107 8.323 13.5669 8.56716Z"
                      fill="#989CAA"
                    />
                  </svg>{" "}
                  {parent?.megaMenu?.accessibilityTesting}
                </li>
                <li className="text-[#ffffff] flex gap-[10px] items-center font-[400] text-[16px] leading-normal">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M9.99984 1.66675C5.40484 1.66675 1.6665 5.40508 1.6665 10.0001C1.6665 14.5951 5.40484 18.3334 9.99984 18.3334C14.5948 18.3334 18.3332 14.5951 18.3332 10.0001C18.3332 5.40508 14.5948 1.66675 9.99984 1.66675ZM13.5669 8.56716L9.40025 12.7338C9.27817 12.8559 9.11817 12.9167 8.95817 12.9167C8.79817 12.9167 8.63817 12.8559 8.51609 12.7338L6.43275 10.6505C6.18859 10.4063 6.18859 10.0109 6.43275 9.76675C6.67692 9.52258 7.07234 9.52258 7.3165 9.76675L8.95775 11.408L12.6823 7.68341C12.9265 7.43925 13.3219 7.43925 13.5661 7.68341C13.8103 7.92758 13.8107 8.323 13.5669 8.56716Z"
                      fill="#989CAA"
                    />
                  </svg>{" "}
                  {parent?.megaMenu?.designHandoff}
                </li>
              </ul>
              <Link
                href={`/${lang}/services/brand-identity-design-services`}
                className="text-[#ffffff] font-[500] text-[30px]"
              >
                {parent?.megaMenu?.heading3}
              </Link>
              <ul className="flex flex-col gap-[15px] mt-[20px]">
                <li className="text-[#ffffff] flex gap-[10px] items-center font-[400] text-[16px] leading-normal">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M9.99984 1.66675C5.40484 1.66675 1.6665 5.40508 1.6665 10.0001C1.6665 14.5951 5.40484 18.3334 9.99984 18.3334C14.5948 18.3334 18.3332 14.5951 18.3332 10.0001C18.3332 5.40508 14.5948 1.66675 9.99984 1.66675ZM13.5669 8.56716L9.40025 12.7338C9.27817 12.8559 9.11817 12.9167 8.95817 12.9167C8.79817 12.9167 8.63817 12.8559 8.51609 12.7338L6.43275 10.6505C6.18859 10.4063 6.18859 10.0109 6.43275 9.76675C6.67692 9.52258 7.07234 9.52258 7.3165 9.76675L8.95775 11.408L12.6823 7.68341C12.9265 7.43925 13.3219 7.43925 13.5661 7.68341C13.8103 7.92758 13.8107 8.323 13.5669 8.56716Z"
                      fill="#989CAA"
                    />
                  </svg>{" "}
                  {parent?.megaMenu?.brandStrategy}
                </li>
                <li className="text-[#ffffff] flex gap-[10px] items-center font-[400] text-[16px] leading-normal">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M9.99984 1.66675C5.40484 1.66675 1.6665 5.40508 1.6665 10.0001C1.6665 14.5951 5.40484 18.3334 9.99984 18.3334C14.5948 18.3334 18.3332 14.5951 18.3332 10.0001C18.3332 5.40508 14.5948 1.66675 9.99984 1.66675ZM13.5669 8.56716L9.40025 12.7338C9.27817 12.8559 9.11817 12.9167 8.95817 12.9167C8.79817 12.9167 8.63817 12.8559 8.51609 12.7338L6.43275 10.6505C6.18859 10.4063 6.18859 10.0109 6.43275 9.76675C6.67692 9.52258 7.07234 9.52258 7.3165 9.76675L8.95775 11.408L12.6823 7.68341C12.9265 7.43925 13.3219 7.43925 13.5661 7.68341C13.8103 7.92758 13.8107 8.323 13.5669 8.56716Z"
                      fill="#989CAA"
                    />
                  </svg>{" "}
                  {parent?.megaMenu?.brandDesign}
                </li>
                <li className="text-[#ffffff] flex gap-[10px] items-center font-[400] text-[16px] leading-normal">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M9.99984 1.66675C5.40484 1.66675 1.6665 5.40508 1.6665 10.0001C1.6665 14.5951 5.40484 18.3334 9.99984 18.3334C14.5948 18.3334 18.3332 14.5951 18.3332 10.0001C18.3332 5.40508 14.5948 1.66675 9.99984 1.66675ZM13.5669 8.56716L9.40025 12.7338C9.27817 12.8559 9.11817 12.9167 8.95817 12.9167C8.79817 12.9167 8.63817 12.8559 8.51609 12.7338L6.43275 10.6505C6.18859 10.4063 6.18859 10.0109 6.43275 9.76675C6.67692 9.52258 7.07234 9.52258 7.3165 9.76675L8.95775 11.408L12.6823 7.68341C12.9265 7.43925 13.3219 7.43925 13.5661 7.68341C13.8103 7.92758 13.8107 8.323 13.5669 8.56716Z"
                      fill="#989CAA"
                    />
                  </svg>{" "}
                  {parent?.megaMenu?.brandAudits}
                </li>
                <li className="text-[#ffffff] flex gap-[10px] items-center font-[400] text-[16px] leading-normal">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M9.99984 1.66675C5.40484 1.66675 1.6665 5.40508 1.6665 10.0001C1.6665 14.5951 5.40484 18.3334 9.99984 18.3334C14.5948 18.3334 18.3332 14.5951 18.3332 10.0001C18.3332 5.40508 14.5948 1.66675 9.99984 1.66675ZM13.5669 8.56716L9.40025 12.7338C9.27817 12.8559 9.11817 12.9167 8.95817 12.9167C8.79817 12.9167 8.63817 12.8559 8.51609 12.7338L6.43275 10.6505C6.18859 10.4063 6.18859 10.0109 6.43275 9.76675C6.67692 9.52258 7.07234 9.52258 7.3165 9.76675L8.95775 11.408L12.6823 7.68341C12.9265 7.43925 13.3219 7.43925 13.5661 7.68341C13.8103 7.92758 13.8107 8.323 13.5669 8.56716Z"
                      fill="#989CAA"
                    />
                  </svg>{" "}
                  {parent?.megaMenu?.brandStorytelling}
                </li>
                <li className="text-[#ffffff] flex gap-[10px] items-center font-[400] text-[16px] leading-normal">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M9.99984 1.66675C5.40484 1.66675 1.6665 5.40508 1.6665 10.0001C1.6665 14.5951 5.40484 18.3334 9.99984 18.3334C14.5948 18.3334 18.3332 14.5951 18.3332 10.0001C18.3332 5.40508 14.5948 1.66675 9.99984 1.66675ZM13.5669 8.56716L9.40025 12.7338C9.27817 12.8559 9.11817 12.9167 8.95817 12.9167C8.79817 12.9167 8.63817 12.8559 8.51609 12.7338L6.43275 10.6505C6.18859 10.4063 6.18859 10.0109 6.43275 9.76675C6.67692 9.52258 7.07234 9.52258 7.3165 9.76675L8.95775 11.408L12.6823 7.68341C12.9265 7.43925 13.3219 7.43925 13.5661 7.68341C13.8103 7.92758 13.8107 8.323 13.5669 8.56716Z"
                      fill="#989CAA"
                    />
                  </svg>{" "}
                  {parent?.megaMenu?.brandRefresh}
                </li>
              </ul>
            </div>

            <div
              className={`${menu ? "open" : ""
                } lg:col-span-3 col-span-12 max-lg:mt-[40px] listing`}
            >
              <Link
                href={`/${lang}/services/graphic-design-services`}
                className="text-[#ffffff] font-[500] text-[30px]"
              >
                {parent?.megaMenu?.heading2}
              </Link>
              <ul className="flex flex-col gap-[15px] mt-[20px] mb-[45px]">
                <li className="text-[#ffffff] flex gap-[10px] items-center font-[400] text-[16px] leading-normal">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M9.99984 1.66675C5.40484 1.66675 1.6665 5.40508 1.6665 10.0001C1.6665 14.5951 5.40484 18.3334 9.99984 18.3334C14.5948 18.3334 18.3332 14.5951 18.3332 10.0001C18.3332 5.40508 14.5948 1.66675 9.99984 1.66675ZM13.5669 8.56716L9.40025 12.7338C9.27817 12.8559 9.11817 12.9167 8.95817 12.9167C8.79817 12.9167 8.63817 12.8559 8.51609 12.7338L6.43275 10.6505C6.18859 10.4063 6.18859 10.0109 6.43275 9.76675C6.67692 9.52258 7.07234 9.52258 7.3165 9.76675L8.95775 11.408L12.6823 7.68341C12.9265 7.43925 13.3219 7.43925 13.5661 7.68341C13.8103 7.92758 13.8107 8.323 13.5669 8.56716Z"
                      fill="#989CAA"
                    />
                  </svg>{" "}
                  {parent?.megaMenu?.printDesign}
                </li>
                <li className="text-[#ffffff] flex gap-[10px] items-center font-[400] text-[16px] leading-normal">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M9.99984 1.66675C5.40484 1.66675 1.6665 5.40508 1.6665 10.0001C1.6665 14.5951 5.40484 18.3334 9.99984 18.3334C14.5948 18.3334 18.3332 14.5951 18.3332 10.0001C18.3332 5.40508 14.5948 1.66675 9.99984 1.66675ZM13.5669 8.56716L9.40025 12.7338C9.27817 12.8559 9.11817 12.9167 8.95817 12.9167C8.79817 12.9167 8.63817 12.8559 8.51609 12.7338L6.43275 10.6505C6.18859 10.4063 6.18859 10.0109 6.43275 9.76675C6.67692 9.52258 7.07234 9.52258 7.3165 9.76675L8.95775 11.408L12.6823 7.68341C12.9265 7.43925 13.3219 7.43925 13.5661 7.68341C13.8103 7.92758 13.8107 8.323 13.5669 8.56716Z"
                      fill="#989CAA"
                    />
                  </svg>{" "}
                  {parent?.megaMenu?.packagingDesign}
                </li>
                <li className="text-[#ffffff] flex gap-[10px] items-center font-[400] text-[16px] leading-normal">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M9.99984 1.66675C5.40484 1.66675 1.6665 5.40508 1.6665 10.0001C1.6665 14.5951 5.40484 18.3334 9.99984 18.3334C14.5948 18.3334 18.3332 14.5951 18.3332 10.0001C18.3332 5.40508 14.5948 1.66675 9.99984 1.66675ZM13.5669 8.56716L9.40025 12.7338C9.27817 12.8559 9.11817 12.9167 8.95817 12.9167C8.79817 12.9167 8.63817 12.8559 8.51609 12.7338L6.43275 10.6505C6.18859 10.4063 6.18859 10.0109 6.43275 9.76675C6.67692 9.52258 7.07234 9.52258 7.3165 9.76675L8.95775 11.408L12.6823 7.68341C12.9265 7.43925 13.3219 7.43925 13.5661 7.68341C13.8103 7.92758 13.8107 8.323 13.5669 8.56716Z"
                      fill="#989CAA"
                    />
                  </svg>{" "}
                  {parent?.megaMenu?.illustration}
                </li>
                <li className="text-[#ffffff] flex gap-[10px] items-center font-[400] text-[16px] leading-normal">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M9.99984 1.66675C5.40484 1.66675 1.6665 5.40508 1.6665 10.0001C1.6665 14.5951 5.40484 18.3334 9.99984 18.3334C14.5948 18.3334 18.3332 14.5951 18.3332 10.0001C18.3332 5.40508 14.5948 1.66675 9.99984 1.66675ZM13.5669 8.56716L9.40025 12.7338C9.27817 12.8559 9.11817 12.9167 8.95817 12.9167C8.79817 12.9167 8.63817 12.8559 8.51609 12.7338L6.43275 10.6505C6.18859 10.4063 6.18859 10.0109 6.43275 9.76675C6.67692 9.52258 7.07234 9.52258 7.3165 9.76675L8.95775 11.408L12.6823 7.68341C12.9265 7.43925 13.3219 7.43925 13.5661 7.68341C13.8103 7.92758 13.8107 8.323 13.5669 8.56716Z"
                      fill="#989CAA"
                    />
                  </svg>{" "}
                  {parent?.megaMenu?.infographicDesign}
                </li>
                <li className="text-[#ffffff] flex gap-[10px] items-center font-[400] text-[16px] leading-normal">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M9.99984 1.66675C5.40484 1.66675 1.6665 5.40508 1.6665 10.0001C1.6665 14.5951 5.40484 18.3334 9.99984 18.3334C14.5948 18.3334 18.3332 14.5951 18.3332 10.0001C18.3332 5.40508 14.5948 1.66675 9.99984 1.66675ZM13.5669 8.56716L9.40025 12.7338C9.27817 12.8559 9.11817 12.9167 8.95817 12.9167C8.79817 12.9167 8.63817 12.8559 8.51609 12.7338L6.43275 10.6505C6.18859 10.4063 6.18859 10.0109 6.43275 9.76675C6.67692 9.52258 7.07234 9.52258 7.3165 9.76675L8.95775 11.408L12.6823 7.68341C12.9265 7.43925 13.3219 7.43925 13.5661 7.68341C13.8103 7.92758 13.8107 8.323 13.5669 8.56716Z"
                      fill="#989CAA"
                    />
                  </svg>{" "}
                  {parent?.megaMenu?.layoutComposition}
                </li>
              </ul>
              <Link
                href={`/${lang}/services/motion-graphic-services`}
                className="text-[#ffffff] font-[500] text-[30px]"
              >
                {parent?.megaMenu?.heading4}
              </Link>
              <ul className="flex flex-col gap-[15px] mt-[20px]">
                <li className="text-[#ffffff] flex gap-[10px] items-center font-[400] text-[16px] leading-normal">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M9.99984 1.66675C5.40484 1.66675 1.6665 5.40508 1.6665 10.0001C1.6665 14.5951 5.40484 18.3334 9.99984 18.3334C14.5948 18.3334 18.3332 14.5951 18.3332 10.0001C18.3332 5.40508 14.5948 1.66675 9.99984 1.66675ZM13.5669 8.56716L9.40025 12.7338C9.27817 12.8559 9.11817 12.9167 8.95817 12.9167C8.79817 12.9167 8.63817 12.8559 8.51609 12.7338L6.43275 10.6505C6.18859 10.4063 6.18859 10.0109 6.43275 9.76675C6.67692 9.52258 7.07234 9.52258 7.3165 9.76675L8.95775 11.408L12.6823 7.68341C12.9265 7.43925 13.3219 7.43925 13.5661 7.68341C13.8103 7.92758 13.8107 8.323 13.5669 8.56716Z"
                      fill="#989CAA"
                    />
                  </svg>{" "}
                  {parent?.megaMenu?.animation}
                </li>
                <li className="text-[#ffffff] flex gap-[10px] items-center font-[400] text-[16px] leading-normal">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M9.99984 1.66675C5.40484 1.66675 1.6665 5.40508 1.6665 10.0001C1.6665 14.5951 5.40484 18.3334 9.99984 18.3334C14.5948 18.3334 18.3332 14.5951 18.3332 10.0001C18.3332 5.40508 14.5948 1.66675 9.99984 1.66675ZM13.5669 8.56716L9.40025 12.7338C9.27817 12.8559 9.11817 12.9167 8.95817 12.9167C8.79817 12.9167 8.63817 12.8559 8.51609 12.7338L6.43275 10.6505C6.18859 10.4063 6.18859 10.0109 6.43275 9.76675C6.67692 9.52258 7.07234 9.52258 7.3165 9.76675L8.95775 11.408L12.6823 7.68341C12.9265 7.43925 13.3219 7.43925 13.5661 7.68341C13.8103 7.92758 13.8107 8.323 13.5669 8.56716Z"
                      fill="#989CAA"
                    />
                  </svg>{" "}
                  {parent?.megaMenu?.videoEditing}
                </li>
                <li className="text-[#ffffff] flex gap-[10px] items-center font-[400] text-[16px] leading-normal">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M9.99984 1.66675C5.40484 1.66675 1.6665 5.40508 1.6665 10.0001C1.6665 14.5951 5.40484 18.3334 9.99984 18.3334C14.5948 18.3334 18.3332 14.5951 18.3332 10.0001C18.3332 5.40508 14.5948 1.66675 9.99984 1.66675ZM13.5669 8.56716L9.40025 12.7338C9.27817 12.8559 9.11817 12.9167 8.95817 12.9167C8.79817 12.9167 8.63817 12.8559 8.51609 12.7338L6.43275 10.6505C6.18859 10.4063 6.18859 10.0109 6.43275 9.76675C6.67692 9.52258 7.07234 9.52258 7.3165 9.76675L8.95775 11.408L12.6823 7.68341C12.9265 7.43925 13.3219 7.43925 13.5661 7.68341C13.8103 7.92758 13.8107 8.323 13.5669 8.56716Z"
                      fill="#989CAA"
                    />
                  </svg>{" "}
                  {parent?.megaMenu?.motionGraphics}
                </li>
                <li className="text-[#ffffff] flex gap-[10px] items-center font-[400] text-[16px] leading-normal">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M9.99984 1.66675C5.40484 1.66675 1.6665 5.40508 1.6665 10.0001C1.6665 14.5951 5.40484 18.3334 9.99984 18.3334C14.5948 18.3334 18.3332 14.5951 18.3332 10.0001C18.3332 5.40508 14.5948 1.66675 9.99984 1.66675ZM13.5669 8.56716L9.40025 12.7338C9.27817 12.8559 9.11817 12.9167 8.95817 12.9167C8.79817 12.9167 8.63817 12.8559 8.51609 12.7338L6.43275 10.6505C6.18859 10.4063 6.18859 10.0109 6.43275 9.76675C6.67692 9.52258 7.07234 9.52258 7.3165 9.76675L8.95775 11.408L12.6823 7.68341C12.9265 7.43925 13.3219 7.43925 13.5661 7.68341C13.8103 7.92758 13.8107 8.323 13.5669 8.56716Z"
                      fill="#989CAA"
                    />
                  </svg>{" "}
                  {parent?.megaMenu?.explainerVideos}
                </li>
                <li className="text-[#ffffff] flex gap-[10px] items-center font-[400] text-[16px] leading-normal">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M9.99984 1.66675C5.40484 1.66675 1.6665 5.40508 1.6665 10.0001C1.6665 14.5951 5.40484 18.3334 9.99984 18.3334C14.5948 18.3334 18.3332 14.5951 18.3332 10.0001C18.3332 5.40508 14.5948 1.66675 9.99984 1.66675ZM13.5669 8.56716L9.40025 12.7338C9.27817 12.8559 9.11817 12.9167 8.95817 12.9167C8.79817 12.9167 8.63817 12.8559 8.51609 12.7338L6.43275 10.6505C6.18859 10.4063 6.18859 10.0109 6.43275 9.76675C6.67692 9.52258 7.07234 9.52258 7.3165 9.76675L8.95775 11.408L12.6823 7.68341C12.9265 7.43925 13.3219 7.43925 13.5661 7.68341C13.8103 7.92758 13.8107 8.323 13.5669 8.56716Z"
                      fill="#989CAA"
                    />
                  </svg>{" "}
                  {parent?.megaMenu?.kineticTypography}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MegaMenu;
