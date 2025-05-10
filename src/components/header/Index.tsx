"use client";
import React, { useEffect, useRef, useState } from "react";
import ThemeSwitcher from "../Themes/ThemeSwitcher";
import Image from "next/image";
import Link from "next/link";
import MegaMenu from "../MegaMenu";
import { usePathname, useRouter } from "next/navigation";
import { Locale } from "@/i18n.config";
import { useTheme } from "next-themes";
import LocaleSwitcher from "../common/LanguageSwitcher";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import {
  fetchAbout,
  fetchArticle,
  fetchFaqs,
  fetchFooterData,
  fetchHeader,
  fetchHomeData,
  fetchOurWork,
  fetchServices,
  fetchServiceSliders,
  fetchTeam,
  fetchTeamTitle,
  fetchTestimonail,
  fetchType,
  fetchWebsiteLogo,
} from "../Utilts/Helper";
import {
  setAbout,
  setArticle,
  setFaqs,
  setFooter,
  setHeader,
  setHomeSection,
  setLogo,
  setOurWork,
  setService,
  setSliders,
  setTeam,
  setTestimonail,
  setTeamTitles,
  setTypes,
} from "../redux/slicedata";
import { Loader } from "../Loader/loader";

function Index({
  lang,
  parent,
  direction,
  type,
}: {
  lang: Locale;
  parent: any;
  direction: string;
  type: string;
}) {
  const { theme, setTheme } = useTheme();
  const pathName = usePathname();
  const [changesmall, setchnagesmallBg] = useState(false);
  const [menu, setMegamenu] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Initially set to true to show loader

  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.time("test_timer");
        const header = await fetchHeader(lang, type);
        dispatch(setHeader(header));
        const homeData = await fetchHomeData(lang);
        dispatch(setHomeSection(homeData));
        console.log(homeData);
        const homeTeam = await fetchTeam(lang);
        dispatch(setTeam(homeTeam));
        const homeTestimonail = await fetchTestimonail(lang);
        dispatch(setTestimonail(homeTestimonail));
        const ourWork = await fetchOurWork(lang);
        dispatch(setOurWork(ourWork));
        const about = await fetchAbout(lang);
        dispatch(setAbout(about));
        const service = await fetchServices(lang, type);
        dispatch(setService(service));
        const footer = await fetchFooterData(lang);
        dispatch(setFooter(footer));
        const article = await fetchArticle(lang);
        dispatch(setArticle(article));
        const logo = await fetchWebsiteLogo();
        dispatch(setLogo(logo));
        const faqs = await fetchFaqs(lang, type);
        dispatch(setFaqs(faqs));
        const serviceSliders = await fetchServiceSliders(lang, type);
        dispatch(setSliders(serviceSliders));
        const teamtitle = await fetchTeamTitle(lang);
        dispatch(setTeamTitles(teamtitle));
        const Types = await fetchType();
        dispatch(setTypes(Types));
        
        setIsLoading(false);
        console.timeEnd("test_timer");
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [dispatch, lang, type]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const dropdownOptionsArabic = [
    {
      name: "تصميم واجهة المستخدم وتجربة المستخدم",
      url: "services/ui-ux-design-services",
      type: "670fa0d2ee6cc63acd780dbf",
    },
    {
      name: "العلامات التجارية",
      url: "services/brand-identity-design-services",
      type: "670fcab23d7506c7a1441a54",
    },
    {
      name: "تصميم الجرافيك",
      url: "services/graphic-design-services",
      type: "670fbe5434c1b0ab899f167d",
    },
    {
      name: "تصميم الرسوم المتحركة",
      url: "services/motion-graphic-services",
      type: "67113f72f4000f7bc55137bb",
    },
  ];
  const handleClick = async (type: any) => {
    try {
      const header = await fetchHeader(lang, type);
      dispatch(setHeader(header));
    } catch (error) {
      console.error("Failed to fetch FAQs:", error);
    }
  };

  const dropdownOptions = [
    {
      name: "UI/UX Designing",
      url: "services/ui-ux-design-services",
      type: "670fa0d2ee6cc63acd780dbf",
    },
    {
      name: "Branding",
      url: "services/brand-identity-design-services",
      type: "670fcab23d7506c7a1441a54",
    },
    {
      name: "Graphic Designing",
      url: "services/graphic-design-services",
      type: "670fbe5434c1b0ab899f167d",
    },
    {
      name: "Motion Graphic Designing",
      url: "services/motion-graphic-services",
      type: "67113f72f4000f7bc55137bb",
    },
  ];

  const dropdownRef = useRef<HTMLDivElement | null>(null);
  let timeoutId: any;

  // Close dropdown if clicked outside
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

  const handleButtonClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200);
  };

  const handleLinkClick = () => {
    setIsDropdownOpen(false);
  };
  const handleLink = async (type: any) => {
    try {
      const header = await fetchHeader(lang, type);
      dispatch(setHeader(header));
    } catch (error) {
      console.error("Header Fail", error);
    }
  };
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
  useEffect(() => {
    setTimeout(() => {
      if (menu) {
        document.body.style.position = "fixed";
        document.body.style.top = "0";
        document.body.style.left = "0";
        document.body.style.right = "0";
        document.body.style.bottom = "0";
      } else {
        document.body.style.position = "";
      }
    }, 800);
    return () => {
      document.body.style.position = "";
    };
  }, [menu]);

  return (
    <div dir={`${direction}`}>
      {isLoading && (
        <div className="loaderScreen">
          <Loader />
        </div>
      )}
      {menu && (
        <MegaMenu
          parent={parent}
          lang={lang}
          menu={menu}
          setMegamenu={setMegamenu}
        />
      )}
      <header
        className={`fixed top-0 inset-x-0 z-[60] transition-colors duration-300 backdrop-blur-md ${
          isScrolled
            ? "bg-[#02111B]/70 shadow-2xl"
            : "bg-transparent backdrop-blur-none"
        }`}
      >
        <div className=" mx-auto">
          <section className="relative mx-auto max-w-[1460px] z-10 max-md:ps-5 py-2 2xl:px-0 md:w-10/12">
            <nav className="flex justify-between text-white">
              <div className=" pt-[20px] md:py-[15px] flex w-full justify-between items-center">
                <Link
                  className="text-3xl font-bold font-heading"
                  href={`/${lang}`}
                >
                  <Image
                    className="md:w-[220px] w-[160px] h-auto"
                    src="/assets/home/logo-main.svg"
                    alt="logo"
                    width={100}
                    height={54}
                  />
                </Link>
                <ul
                  dir={`${direction}`}
                  className=" hidden min-[1230px]:flex  items-center justify-between mx-auto !font-regular "
                >
                  <li className="px-4">
                    <Link
                      className={`${
                        pathName === `/${lang}`
                          ? "text-[#20D091]"
                          : "text-white"
                      } text-[14px] hover:text-[#20D091]`}
                      href={`/${lang}`}
                    >
                      {parent?.page?.Home}
                    </Link>
                  </li>
                  <li className="px-4">
                    <Link
                      className={`${
                        pathName === `/${lang}/about`
                          ? "text-[#20D091]"
                          : "text-white"
                      } text-[14px] hover:text-[#20D091]`}
                      href={`/${lang}/about`}
                    >
                      {parent?.page?.AboutUs}
                    </Link>
                  </li>
                  <li
                    className="px-4 flex items-center h-full"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      href={`/${lang}/our-services`}
                      className="relative h-full flex items-center"
                    >
                      <button className="flex items-center gap-3">
                        <span
                          className={`flex text-[14px] translate-y-[2px] items-center gap-[6px] ${
                            isDropdownOpen ? "text-[#20D091]" : "text-[#ffffff]"
                          } hover:text-[#20D091]`}
                        >
                          {lang === "en" ? "Services" : "خدمات"}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`w-3 h-3 ${
                              isDropdownOpen ? "rotate-180" : "rotate-0"
                            } dark:fill-white hover:fill-[#434750] fill-[#20D091] transition-all duration-500`}
                            viewBox="0 0 16 16"
                          >
                            <path d="M13.8619 4.19525L7.99992 10.0573L2.13792 4.19525C1.87758 3.93492 1.45558 3.93492 1.19525 4.19525C0.934917 4.45558 0.934917 4.87758 1.19525 5.13792L7.52858 11.4713C7.65892 11.6016 7.82925 11.6666 7.99992 11.6666C8.17058 11.6666 8.34092 11.6016 8.47125 11.4713L14.8046 5.13792C15.0649 4.87758 15.0649 4.45558 14.8046 4.19525C14.5443 3.93492 14.1222 3.93492 13.8619 4.19525Z" />
                          </svg>
                        </span>
                      </button>

                      <div
                        className={`${
                          isDropdownOpen
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 -translate-y-2 pointer-events-none"
                        } absolute flex flex-col gap-3 w-[260px] top-6 -left-5 mt-1 p-3 border border-[#1DE2CF26] bg-[#061E2C] rounded-[10px] transition-all duration-300 ease-in-out`}
                        ref={dropdownRef}
                      >
                        {(lang === "en"
                          ? dropdownOptions
                          : dropdownOptionsArabic
                        ).map((option, index) => (
                          <div key={index}>
                            <Link
                              key={index}
                              className={`text-[14px] hover:text-[#20D091]`}
                              href={`/${lang}/${option.url}`}
                              onClick={handleLinkClick}
                            >
                              {option.name}
                            </Link>
                          </div>
                        ))}
                      </div>
                    </Link>
                  </li>
                  <li className="px-4">
                    <Link
                      className={`${
                        pathName === `/${lang}/our-work`
                          ? "text-[#20D091]"
                          : "text-white"
                      } text-[14px] hover:text-[#20D091]`}
                      href={`/${lang}/our-work`}
                    >
                      {parent?.page?.OurProjectsnav}
                    </Link>
                  </li>
                  <li className="px-4">
                    <Link
                      className={`${
                        pathName === `/${lang}/article`
                          ? "text-[#20D091]"
                          : "text-white"
                      } text-[14px] hover:text-[#20D091]`}
                      href={`/${lang}/article`}
                    >
                      {parent?.page?.Article}
                    </Link>
                  </li>
                  <li className="px-4">
                    <Link
                      className={`${
                        pathName === `/${lang}/ui-store`
                          ? "text-[#20D091]"
                          : "text-white"
                      } text-[14px] hover:text-[#20D091]`}
                      href={`/${lang}/ui-store`}
                    >
                      {parent?.page?.UIStorenav}
                    </Link>
                  </li>
                </ul>
                <div className="flex items-center sm:space-x-5 ">
                  <Link href={`/${lang}/contact-us`}>
                    <div
                      dir={`${direction}`}
                      className="w-[50px] md:w-[130px] flex items-center justify-center cursor-pointer"
                    >
                      <Image
                        className={`${lang === "ar" ? "" : ""}
                        wave
                      w-[30px] h-[30px]`}
                        src="/assets/home/handbye.svg"
                        alt="search"
                        width={10}
                        height={10}
                      />

                      <p className="text-[14px] max-md:hidden sm:text-[20px] text-white font-[500]">
                        {parent?.page?.SayHello}
                      </p>
                    </div>
                  </Link>
                  <LocaleSwitcher lang={lang} />
                  <div className="flex items-center space-x-3 md:space-x-5">
                    <ThemeSwitcher lang={lang} />
                    <div
                      className="cursor-pointer"
                      onClick={() => setMegamenu(true)}
                    >
                      <Image
                        className={`${
                          lang == "ar" ? "!rotate-180 ms-2" : ""
                        } sm:w-[40px] sm:h-[40px]`}
                        src="/assets/home/hamburger.svg"
                        alt="logo"
                        width={30}
                        height={30}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </section>
        </div>
      </header>
    </div>
  );
}

export default Index;
