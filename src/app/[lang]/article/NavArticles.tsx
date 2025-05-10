"use client";
import { useEffect, useRef, useState } from "react";
import "./navArticles.css";
import { useTheme } from "next-themes";
import articleImg from "../../../../public/articleImg.png";
import articleImg2 from "../../../../public/articleImg2.png";
import articleImg3 from "../../../../public/articleImg3.png";
import articleImg4 from "../../../../public/articleImg4.png";
import articleImg5 from "../../../../public/articleImg5.png";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/common/Footer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/components/redux/store";
import { selectCard, setArticle } from "@/components/redux/slicedata";
import Pagesheader from "@/components/common/Pagesheader";
import { fetchArticle, fetchType } from "@/components/Utilts/Helper";

interface NavItem {
  title: string;
}

interface WorkItem {
  types?: string;
  title: {
    en: string;
  };
  primaryImage: string;
}

// const typeDisplayMap: { [key: string]: string } = {
//   branding: "Branding",
//   uiux: "UI/UX Design",
//   motiongraphic: "Motion Graphic Designing",
//   graphicdesign: "Graphic Designing",
// };

const NavArticles = ({ parent, direction, lang }: any) => {
  const typeDisplayMap: { [key: string]: string } = {
    branding: lang === "en" ? "Branding" : "العلامة التجارية",
    uiux: lang === "en" ? "UI/UX Design" : "تصميم UI/UX",
    motiongraphic:
      lang === "en" ? "Motion Graphic Designing" : "تصميم الرسوم المتحركة",
    graphicdesign: lang === "en" ? "Graphic Designing" : "تصميم الجرافيك",
  };
  const images = [
    { image: articleImg },
    { image: articleImg2 },
    { image: articleImg3 },
    { image: articleImg4 },
    { image: articleImg5 },
  ];

  const { theme } = useTheme();
  const dispatch = useDispatch();
  const [selectedTab, setSelectedTab] = useState(0);
  const [visibleItems, setVisibleItems] = useState(4);
  const [typesList, setTypesList] = useState([]); // To store types from API
  const [selectedTypeId, setSelectedTypeId] = useState<string | null>(null);
  const article: WorkItem[] = useSelector(
    (state: RootState) => state.data?.article?.data
  );
  const firstBtnRef = useRef<HTMLButtonElement>(null);

  // Ensure types are displayed properly
  const navItems: NavItem[] = [
    //@ts-ignore
    { id: null, title: "All" },
    //@ts-ignore
    ...Array.from(
      new Set(
        article
          ?.map((item: any) => item.types?.trim().toLowerCase())
          .filter(Boolean)
      )
    ).map((typeId: string) => {
      const matchingType = typesList.find((typeItem: any) => typeItem._id === typeId);
      //@ts-ignore
      return matchingType ? { id: matchingType._id, title: matchingType.type } : null;
    })
      .filter(Boolean),
  ];

  const filteredItems =
    selectedTab === 0
      ? article
      : article.filter(
        (item: any) => item?.types === navItems[selectedTab]?.title
      );

  const displayTypeName = (type: string) => {
    return typeDisplayMap[type] || "";
  };

  const handleLoadMore = () => {
    setVisibleItems((prev) => prev + 4);
  };

  useEffect(() => {
    if (lang === "en") {
      setHeading("Exploring the World");
      setHeading2("Through Our Articles");
    } else {
      setHeading("استكشاف العالم");
      setHeading2("من خلال مقالاتنا");
    }
  }, [lang]);

  const [heading, setHeading] = useState("Exploring the World");
  const [heading2, setHeading2] = useState("Through Our Articles");

  const inputRef = useRef(null);
  const [email, setEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const subscribeUser = async (e: any) => {
    e.preventDefault();
    const res = await fetch(`/${lang}/api/newsletter`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ Email: email }),
    });

    const data = await res.json();
    if (data.success === false) {
      setErrorMsg("Check connection or email is not acceptable");
      setTimeout(() => setErrorMsg(""), 1500);
    } else {
      setSuccessMsg("Subscription successful!");
      setEmail("");
      setTimeout(() => {
        setErrorMsg("");
        setSuccessMsg("");
      }, 1500);
    }
  };
  const articleHeader = useSelector(
    (state: RootState) => state?.data?.header?.data?.[0]?.headerTitle || " "
  );
  const onchange = (e: any) => setEmail(e.target.value);
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const month = date.toLocaleString("en-US", { month: "short" }); // Get the month in short format (e.g., "Sept")
    const day = date.toLocaleString("en-US", { day: "2-digit" }); // Get the day in 2-digit format (e.g., "06")

    return `${month}\n${day}`; // Return the formatted string with a line break
  };

  const fetchTypesApi = async () => {
    try {
      // Fetch the types data from your API

      const response = await fetchType() // Replace with actual API endpoint
      // const data = await response.json();
      console.log("TYPE API", response?.data)
      setTypesList(response?.data); // Store types in state
    } catch (error) {
      console.error("Error fetching types:", error);
    }
  };
  useEffect(() => {
    const fetchData = async (typeId: string | null = null) => {
      try {
        const article = await fetchArticle(lang);
        dispatch(setArticle(article));
        await fetchTypesApi();
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(selectedTypeId); // Fetch based on selected type
  }, [lang, selectedTypeId]);

  const background = {
    background: "linear-gradient(133deg, #197BFF 11.04%, #20D091 100%)",
    borderRadius: "15px",
  };
  return (
    <div dir={direction}>
      <Pagesheader
        lang={lang}
        type="article"
        direction={direction}
        parent={parent}
        txt1={articleHeader}
        txt2=""
        img="/OBJECTS4.png"
      />
      <div className="dark:bg-[#061E2C] bg-[#F2F6F5] h-full lg:pt-[130px] pt-[30px]">
        <div className="max-w-[1460px] md:w-10/12 mx-auto sm:h-auto">
          <div className="max-md:px-5">
            <div className="flex flex-col gap-y-2 full">
              <div className="">
                <div className="grid grid-cols-12 items-end">
                  <div className="col-span-5 max-md:col-span-12 max-lg:col-span-12">
                    <h2 className="text-[50px] max-sm:text-[30px] max-md:text-[40px] dark:text-[#FFFFFF] text-[#061E2C] font-[500] mb-0">
                      {heading}
                      <br />
                      {heading2}
                    </h2>
                  </div>
                  <div className="p-1 justify-end max-sm:justify-start max-md:justify-start max-lg:justify-start col-span-7 max-md:col-span-12 max-md:pt-[20px] max-lg:pt-[20px] max-lg:col-span-12 rounded-xl flex flex-wrap gap-5 font-[500] text-white">
                    {navItems.map((item: any, index: number) => (
                      <button
                        ref={index === 0 ? firstBtnRef : null}
                        key={index}
                        onClick={() => {
                          setSelectedTab(index);
                          setSelectedTypeId(item.id); // Update selected type ID on click
                        }}
                        className={`outline-none rounded-[30px] border-2 dark:border-white border-[rgba(6, 30, 44, 0.07)] dark:border-opacity-[0.08] py-[14.5px] px-[26px] text-[16px] hover:text-white hover:bg-[#02111B] text-[#989CAA] dark:text-white text-start focus:bg-[#02111B] focus:bg-[#02111B]-400 
      ${selectedTab === index
                            ? "bg-[#02111B] text-white border-[0px]"
                            : "dark:text-white text-[#989CAA]"}
    `}
                      >
                        {item.title === "All"
                          ? lang === "en"
                            ? "All"
                            : "الجميع"
                          : item?.title}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div
                className={`grid lg:grid-cols-2 md:grid-cols-2 ${filteredItems?.length < visibleItems && "mb-32"
                  } sm:grid-cols-1 gap-10`}
              >
                {filteredItems
                  ?.slice(0, visibleItems)
                  ?.map((item: any, index: any) => (
                    <div
                      key={index}
                      className="flex items-center gap-10"
                      onClick={() => dispatch(selectCard(item))}
                    >
                      <div className="relative pt-[80px]">
                        <Link
                          href={`/${lang}/article/${item._id}`}
                          className="group cursor-pointer"
                        >
                          <Image
                            src={item.primaryImage}
                            width={700}
                            height={540}
                            alt={item.title.en}
                          />
                          <div className="absolute bottom-[-54px] pt-[80px] left-[50%] translate-x-[-50%] max-w-screen-xl mx-auto w-full">
                            <div className="flex items-center justify-center gap-5 max-sm:gap-2 max-lg:gap-2">
                              <div
                                style={background}
                                className="flex items-center justify-center w-[110px]  max-sm:w-[110px] h-[110px] max-sm:h-[90px]"
                              >
                                <div className="text-[#FFFFFF] text-center font-[500] text-[30px] max-sm:text-[16px] max-md:text-[15px] max-lg:text-[19px]  mb-0">
                                  <div
                                    style={{
                                      whiteSpace: "pre",
                                      textAlign: "center",
                                    }}
                                  >
                                    {formatDate(item?.createdAt)}
                                  </div>
                                </div>
                              </div>

                              <div className="flex items-center w-full sm:w-[430px] max-sm:w-[400px] h-[110px] max-sm:h-[90px] text-white bg-[#02111B] p-5 px-[40px] rounded-[15px]">
                                <p className="text-[24px] max-sm:text-[14px] max-md:text-[15px] max-lg:text-[16px] text-[#FFFFFF] mb-0 overflow-hidden whitespace-nowrap text-ellipsis">
                                  {lang == "en" ? item.title.en : item.title.ar}
                                </p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  ))}
              </div>
              {filteredItems?.length > visibleItems && (
                <div className="flex justify-center  my-16">
                  <button type="button" onClick={handleLoadMore}>
                    <p className="relative z-20 uppercase text-[18px] font-[400] inline-flex items-center gap-4 group dark:text-[#ffffff] text-[#061E2C]">
                      {parent.ourProject?.loadMore}
                      <span
                        className={`${direction == "ltr"
                          ? "group-hover:translate-x-[118px] left-[-10px]"
                          : "group-hover:translate-x-[-85px] right-[-10px]"
                          } z-[-1] rounded-full absolute transition-all duration-1000 w-[40px] h-[40px] dark:bg-[#FFFFFF14] bg-[#ECECEC]`}
                      ></span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="14"
                        viewBox="0 0 18 14"
                        className={`${direction == "ltr" ? "" : "rotate-180"
                          } opacity-0 group-hover:opacity-100 transition-all duration-1000 dark:fill-white fill-[#061E2C]`}
                      >
                        <path d="M1.08317 8.04154H14.4019L10.9717 11.4717C10.5649 11.8785 10.5649 12.5379 10.9717 12.9447C11.1754 13.1483 11.4415 13.2499 11.7082 13.2499C11.9748 13.2499 12.241 13.1483 12.4446 12.9447L17.653 7.73633C17.8483 7.54154 17.9582 7.27643 17.9582 6.99987C17.9582 6.72331 17.8483 6.45872 17.653 6.26341L12.4446 1.05508C12.0379 0.648307 11.3785 0.648307 10.9717 1.05508C10.5649 1.46185 10.5649 2.12122 10.9717 2.52799L14.4019 5.9582H1.08317C0.508171 5.9582 0.0415039 6.42487 0.0415039 6.99987C0.0415039 7.57487 0.508171 8.04154 1.08317 8.04154Z" />
                      </svg>
                    </p>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer
        parent={parent}
        direction={direction}
        lang={lang}
        welnote={false}
      />
    </div>
  );
};

export default NavArticles;
