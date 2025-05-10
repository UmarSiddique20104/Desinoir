"use client";
import FeatureProject from "@/components/FeatureProject";
import Footer from "@/components/common/Footer";
import Pagesheader from "@/components/common/Pagesheader";
import { socialLinks } from "@/components/common/SocialLinks";
import { RootState } from "@/components/redux/store";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useSelector } from "react-redux";

export default function ContactUsMain({ parent, direction, lang }: any) {
  const { theme, setTheme } = useTheme();

  const dataMap = [
    { id: 1, label: "Less than a week" },
    { id: 2, label: "Less than 15" },
    { id: 3, label: "15-30" },
    { id: 4, label: "30-45" },
    { id: 5, label: "45-60" },
    { id: 6, label: "More than 60" },
  ];
  const data = [
    { id: 1, label: "UI/UX Designing" },
    { id: 2, label: "Branding" },
    { id: 3, label: "Graphic Designing" },
    { id: 4, label: "Motion Graphic Designing" },
    { id: 5, label: "Others" },
  ];
  const NewDAta = [
    { id: 1, label: "Less than 100" },
    { id: 2, label: "100-500" },
    { id: 3, label: "500-1k" },
    { id: 4, label: "1k-2k" },
    { id: 5, label: "More than 2k" },
  ];

  const dataMapArabic = [
    { id: 1, label: "أقل من أسبوع" },
    { id: 2, label: "أقل من 15" },
    { id: 3, label: "15-30" },
    { id: 4, label: "30-45" },
    { id: 5, label: "45-60" },
    { id: 6, label: "أكثر من 60" },
  ];

  const dataArabic = [
    { id: 1, label: "تصميم واجهة المستخدم/تجربة المستخدم" },
    { id: 2, label: "العلامة التجارية" },
    { id: 3, label: "تصميم الجرافيك" },
    { id: 4, label: "تصميم الجرافيك المتحرك" },
    { id: 5, label: "آخرون" },
  ];

  const newDataArabic = [
    { id: 1, label: "أقل من 100" },
    { id: 2, label: "100-500" },
    { id: 3, label: "500-1 ك" },
    { id: 4, label: "1 ك - 2 ك" },
    { id: 5, label: "أكثر من 2 ك" },
  ];

  const [singleSelect, setSingleSelect] = useState(null);
  const [multiSelect, setMultiSelect] = useState<any[]>([]);
  const [singleSelectNewData, setSingleSelectNewData] = useState(null);

  const [submitStatusError, setSubmitStatusError] = useState<string>("");
  const [submitStatusSuccess, setSubmitStatusSuccess] = useState<string>("");

  // const reCaptchaKey = "6Lc-qNUpAAAAAATV1RlcxyVs5zG3P9Vrlo7tof68";

  /////// key for localhost //////////////
  const reCaptchaKey = "6LeaMSgqAAAAAAgvpDlHAfPzZ8-gOCEFkvHlckJR";
  const [captchaValue, setCaptchaValue] = useState(null);
  const [email, setEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const footer = useSelector((state: RootState) => state.data.footer?.data);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCaptchaChange = (value: any) => {
    setCaptchaValue(value);
  };

  const handleSingleSelect = (item: any) => {
    setSingleSelect(item.id);
  };

  const getLabelById = (id: any, array: any[]) => {
    const item = array.find((item) => item.id === id);
    return item ? item.label : null;
  };

  const handleMultiSelect = (id: any, label: any) => {
    if (multiSelect.includes(id)) {
      setMultiSelect(multiSelect.filter((item) => item !== id));
    } else {
      setMultiSelect([...multiSelect, id]);
      setSingleSelect(null);
      setSingleSelectNewData(null);
    }
  };
  const handleSingleSelectNewData = (id: any) => {
    setSingleSelectNewData(id);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setSubmitStatusSuccess("");
    setSubmitStatusError("");
    const { name, email, phone, message } = formData;
    const selectedServices = multiSelect
      .sort()
      .map((id) => getLabelById(id, data));
    const selectedBudget = getLabelById(singleSelect, NewDAta);
    const selectedDeliveryTime = getLabelById(singleSelectNewData, dataMap);
    if (!selectedServices.length) {
      setSubmitStatusError("Please select at least one service.");
      return;
    }
    if (!selectedBudget) {
      setSubmitStatusError("Please select your budget.");
      return;
    }
    if (!selectedDeliveryTime) {
      setSubmitStatusError("Please select a delivery time.");
      return;
    }
    if (!name) {
      setSubmitStatusError("Please enter your name.");
      return;
    }
    if (!email) {
      setSubmitStatusError("Please enter your email.");
      return;
    }
    // if (!phone) {
    //   setSubmitStatusError("Please enter your phone number.");
    //   return;
    // }
    if (!message) {
      setSubmitStatusError("Please enter a message.");
      return;
    }
    // if (
    //   !name ||
    //   !email ||
    //   !message ||
    //   !selectedServices.length ||
    //   !selectedBudget ||
    //   !selectedDeliveryTime
    // ) {
    //   setSubmitStatusError("Please fill in all required fields.");
    //   return;
    // }

    // If captcha is required, validate it as well
    // if (!captchaValue) {
    //   setSubmitStatusError("Please complete the captcha.");
    //   return;
    // }

    const formDatas = new FormData();
    formDatas.append("services", JSON.stringify(selectedServices));
    formDatas.append("budget", selectedBudget);
    formDatas.append("deliveryTime", selectedDeliveryTime);
    formDatas.append("name", name);
    formDatas.append("email", email);
    formDatas.append("phone", phone);
    formDatas.append("message", message);

    // Submit the form
    const response = await fetch(`/${lang}/api/sendEmail`, {
      method: "POST",
      body: formDatas,
    });

    // Handle response
    if (response.ok) {
      setSubmitStatusSuccess(
        lang == "en"
          ? "Thank you for contacting us!"
          : "أشكركم على الاتصال بنا!"
      );
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      setMultiSelect([]);
      setSingleSelect(null);
      setSingleSelectNewData(null);
    } else {
      lang == "en"
        ? setSubmitStatusError(
            "Something went wrong. Please try again later after some time."
          )
        : setSubmitStatusError(
            "هناك خطأ ما. الرجاء المحاولة مرة أخرى لاحقا بعد مرور بعض الوقت."
          );
    }
  };

  const inputRef = useRef(null);

  const subscribeUser = async (e: any) => {
    e.preventDefault();
    const res = await fetch(`/${lang}/api/newsletter`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ Email: email }),
    });

    const data = await res.json();
    if (data.success === false) {
      setErrorMsg("Check connection or email is not acceptable");
      setTimeout(() => {
        setErrorMsg("");
      }, 1500);
    }

    if (data.success) {
      setSuccessMsg("Subscription successful!");

      setEmail("");
      setTimeout(() => {
        setErrorMsg("");
        setSuccessMsg("");
      }, 1500);
    }
  };

  const onchange = (e: any) => {
    setEmail(e.target.value);
  };

  const langData = parent.contactUS;
  return (
    <>
      <div dir={direction} className="bg-[#ffffff]  dark:bg-[#061E2C] h-full ">
        <Pagesheader
          //@ts-ignore
          showbtn={false}
          type="contactUs"
          parent={parent}
          lang={lang}
          direction={direction}
          txt1={langData.mainHeading}
          txt2={langData.mainHeading2}
          imgshow={true}
          img="/contact.png"
        />

        <div className="max-w-[1460px] w-11/12 xl:w-10/12 mx-auto pt-[30px] lg:pt-[130px]  dark:bg-[#061E2C] sm:h-auto">
          <div className="">
            <main className="back">
              <div className="">
                <div className="block lg:flex justify-between	 items-center ">
                  <h2 className="text-[#061E2C] dark:text-white lg:text-[50px] tracking-[0.5px] lg:mr-2 max-sm:w-[100%] max-md:w-[100%] max-lg:w-[100%] max-xl:w-[48%] xl:w-[48%] 2xl:w-[35%] leading-normal">
                    {langData.heading}
                  </h2>

                  <div
                    className="max-sm:w-[100%] max-md:w-[100%] max-lg:w-[100%] max-xl:w-[35%] xl:w-[48%] 2xl:w-[35%] text-[#434750]
                                dark:text-gray-400 sm:text-xl md:text-xl lg:text-2xl font-normal  leading-[33.60px]"
                  >
                    {langData.description}
                  </div>
                </div>
              </div>

              <div className="mt-[60px]">
                <div className="border  border-[#061E2C26] dark:border-[#FFFFFF40] p-[20px] pb-0 xl:p-[50px] rounded-[30px] gap-[50px]">
                  <div className=" block lg:flex gap-[50px]">
                    <div className="  border-right">
                      <div className="width-40">
                        <div className="my-[40px]">
                          <span className="text-[#061E2C] dark:text-white sm:text-xl md:text-xl lg:text-2xl font-medium  tracking-[0.5px] ">
                            {langData.selectServices}{" "}
                          </span>
                          <span className="text-[#434750] dark:text-gray-400 text-lg font-normal  tracking-[0.5px]">
                            ({langData.option})
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-5 max-sm:w-[100%] md:w-[100%] lg:w-[90%]">
                          {lang == "en"
                            ? data.map((item, index) => (
                                <div
                                  key={index}
                                  onClick={() =>
                                    handleMultiSelect(item.id, item.label)
                                  }
                                  className={`${
                                    multiSelect.includes(item.id)
                                      ? "bg-[#434750] dark:bg-[#DEE9EE] text-[#fff] dark:text-[#061E2C]"
                                      : "dark:bg-[transparent] text-[#434750] dark:text-[#989CAA]"
                                  } cursor-pointer px-4 py-[10px] rounded-[30px] border border-[#061E2C26] dark:border-[#FFFFFF40] justify-center items-center gap-0.5 flex`}
                                >
                                  <div className="text-base font-[16px]  tracking-[0.5px]">
                                    {item.label}
                                  </div>
                                </div>
                              ))
                            : dataArabic.map((item, index) => (
                                <div
                                  key={index}
                                  onClick={() =>
                                    handleMultiSelect(item.id, item.label)
                                  }
                                  className={`${
                                    multiSelect.includes(item.id)
                                      ? "bg-[#434750] dark:bg-[#DEE9EE] text-[#fff] dark:text-[#061E2C]"
                                      : "dark:bg-[transparent] text-[#434750] dark:text-[#989CAA]"
                                  } cursor-pointer px-4 py-[10px] rounded-[30px] border border-[#061e2c26] dark:border-[#FFFFFF40]  justify-center items-center gap-0.5 flex`}
                                >
                                  <div className="text-base font-[16px]  tracking-[0.5px]">
                                    {item.label}
                                  </div>
                                </div>
                              ))}
                        </div>

                        <div className="my-[40px]">
                          <span className="text-[#061E2C] dark:text-white sm:text-xl md:text-xl lg:text-2xl font-medium  tracking-[0.5px] my-4">
                            {langData.yourBudget}{" "}
                          </span>
                          <span className="text-[#434750] dark:text-gray-400 text-lg font-medium  tracking-[0.5px]">
                            ({langData.usd})
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-5 max-sm:w-[100%] md:w-[100%] lg:w-[80%] min-[1600px]:w-[60%]">
                          {lang == "en"
                            ? NewDAta.map((item, index) => (
                                <div
                                  key={index}
                                  onClick={() => handleSingleSelect(item)}
                                  className={`${
                                    singleSelect === item.id
                                      ? "bg-[#434750] dark:bg-[#DEE9EE] text-[#fff] dark:text-[#061E2C]"
                                      : "dark:bg-[transparent] text-[#434750] dark:text-[#989CAA]"
                                  } cursor-pointer px-4 py-[10px]  rounded-[30px] border border-[#061e2c26] dark:border-[#FFFFFF40] border-opacity-25 justify-center items-center gap-0.5 flex`}
                                >
                                  <div className="text-base font-[16px]  tracking-[0.5px]">
                                    {item.label}
                                  </div>
                                </div>
                              ))
                            : newDataArabic.map((item, index) => (
                                <div
                                  key={index}
                                  onClick={() => handleSingleSelect(item)}
                                  className={`${
                                    singleSelect === item.id
                                      ? "bg-[#434750] dark:bg-[#DEE9EE] text-[#fff] dark:text-[#061E2C]"
                                      : "dark:bg-[transparent] text-[#434750] dark:text-[#989CAA]"
                                  } cursor-pointer px-4 py-[10px]  rounded-[30px] border border-[#061e2c26] dark:border-[#FFFFFF40] border-opacity-25 justify-center items-center gap-0.5 flex`}
                                >
                                  <div className="text-base font-[16px]  tracking-[0.5px]">
                                    {item.label}
                                  </div>
                                </div>
                              ))}
                        </div>

                        <div className="my-[40px]">
                          <span className="text-[#061E2C] dark:text-white sm:text-xl md:text-xl lg:text-2xl font-medium  tracking-[0.5px] my-4">
                            {langData.deliveryTime}{" "}
                          </span>
                          <span className="text-[#434750] dark:text-gray-400  text-lg font-medium  tracking-[0.5px]">
                            ({langData.inDays})
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-5 sm:w-[100%] md:w-[100%] lg:w-[80%] min-[1600px]:w-[60%]">
                          {lang == "en"
                            ? dataMap.map((item, index) => (
                                <div
                                  key={index}
                                  onClick={() =>
                                    handleSingleSelectNewData(item.id)
                                  }
                                  className={`${
                                    singleSelectNewData === item.id
                                      ? "bg-[#434750] dark:bg-[#DEE9EE] text-[#fff] dark:text-[#061E2C]"
                                      : "dark:bg-[transparent] text-[#434750] dark:text-[#989CAA]"
                                  } cursor-pointer px-4 py-[10px]  rounded-[30px] border border-[#061e2c26] dark:border-[#FFFFFF40] border-opacity-25 justify-center items-center gap-0.5 flex`}
                                >
                                  <div className="text-base font-[16px]  tracking-[0.5px]">
                                    {item.label}
                                  </div>
                                </div>
                              ))
                            : dataMapArabic.map((item, index) => (
                                <div
                                  key={index}
                                  onClick={() =>
                                    handleSingleSelectNewData(item.id)
                                  }
                                  className={`${
                                    singleSelectNewData === item.id
                                      ? "bg-[#434750] dark:bg-[#DEE9EE] text-[#fff] dark:text-[#061E2C]"
                                      : "dark:bg-[transparent] text-[#434750] dark:text-[#989CAA]"
                                  } cursor-pointer px-4 py-[13px]  rounded-[30px] border border-[#061e2c26] dark:border-[#FFFFFF40] border-opacity-25 justify-center items-center gap-0.5 flex`}
                                >
                                  <div className="text-base font-[16px]  tracking-[0.5px]">
                                    {item.label}
                                  </div>
                                </div>
                              ))}
                        </div>
                      </div>
                    </div>
                    <div className="mt-[66px] hidden lg:block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="2"
                        height="518"
                        viewBox="0 0 2 518"
                        fill="none"
                      >
                        <path
                          d="M1 1L0.999977 517"
                          stroke={`${theme == "dark" ? "#ffffff" : "#061E2C"} `}
                          strokeOpacity="0.07"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>

                    <div className=" ">
                      <div className="text-[#061E2C] dark:text-white text-2xl font-medium  tracking-[0.5px] my-[40px]">
                        {langData.contactDetails}
                      </div>
                      <div className="">
                        <div className="block lg:flex items-center">
                          <div className="name-max h-[61px] px-[30px] py-[20px] bg-[#DEE9EE] dark:bg-white dark:bg-opacity-10 rounded-[50px] justify-start items-center gap-2.5 inline-flex sm:my-[10px] lg:mr-2 w-[100%] md:w-[100%] lg:w-[50%] my-[20px]">
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              required
                              onChange={handleChange}
                              placeholder={`${langData.fullname}`}
                              className="text-gray-400 text-lg font-normal  uppercase tracking-[0.5px] bg-transparent border-none outline-none w-full"
                            />
                          </div>

                          <div className="name-max h-[61px] px-[30px] py-[20px] sm:my-[10px] bg-[#DEE9EE] dark:bg-white dark:bg-opacity-10 rounded-[50px] justify-start items-center gap-2.5 inline-flex lg:mr-2 w-[100%] md:w-[100%] lg:w-[50%]">
                            <input
                              name="email"
                              type="email"
                              required
                              value={formData.email}
                              onChange={handleChange}
                              placeholder={`${langData.email}`}
                              className="text-gray-400 text-lg font-normal  uppercase tracking-[0.5px] bg-transparent border-none outline-none w-full"
                            />
                          </div>
                        </div>
                        <div className="name-max  h-[61px] px-[30px] py-[19px] bg-[#DEE9EE] dark:bg-white dark:bg-opacity-10 rounded-[50px] justify-start items-center gap-2.5 inline-flex w-[100%] my-[20px]">
                          <input
                            name="phone"
                            onChange={handleChange}
                            value={formData.phone}
                            type="text"
                            placeholder={`${langData.whatsApp} (${langData.Optional})`}
                            className="text-gray-400 text-[12px] sm:text-lg font-normal tracking-[0.5px] bg-transparent border-none outline-none w-full"
                          />
                        </div>

                        <div className="name-max h-[293px] px-[30px] py-[22px]  bg-[#DEE9EE] dark:bg-white dark:bg-opacity-10 rounded-[25px] justify-start items-start gap-2.5 inline-flex w-[100%]">
                          <textarea
                            name="message"
                            id="projectDetails"
                            value={formData.message}
                            required
                            onChange={handleChange}
                            placeholder={`${langData.projectDetails} `}
                            className="text-gray-400 font-normal h-full tracking-[0.5px] bg-transparent border-none outline-none w-full resize-none text-lg"
                          ></textarea>
                        </div>

                        <div className="py-5">
                          <ReCAPTCHA
                            sitekey={reCaptchaKey}
                            onChange={handleCaptchaChange}
                          />
                        </div>

                        {submitStatusError && (
                          <p className="mt-4 text-md text-red-600">
                            {submitStatusError}
                          </p>
                        )}
                        {submitStatusSuccess && (
                          <p className="mt-4 text-md text-teal-500">
                            {submitStatusSuccess}
                          </p>
                        )}

                        <button
                          onClick={handleSubmit}
                          className="name-max h-[61px] px-[30px] py-[19px] bg-blue-600 rounded-[50px] justify-center items-center gap-2.5 inline-flex w-[100%] my-[20px]"
                        >
                          <span className="text-white text-lg font-normal  uppercase tracking-[0.5px]">
                            {langData.sendQuery}
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="margin-class pt-[70px]">
                    <span className=" text-[#434750] dark:text-white text-2xl font-normal  tracking-[0.5px]">
                      {langData.suggession}{" "}
                    </span>
                    <span className="text-[#434750] dark:text-white text-2xl font-normal  underline tracking-[0.5px]">
                      <Link href={"mailto:hello@desinoir.com"}>
                        {langData.suggessionII}
                      </Link>
                    </span>
                    <span className="text-[#434750] dark:text-white text-2xl font-normal  tracking-[0.5px]">
                      {" "}
                      {langData.suggessionIII}
                    </span>
                  </div>
                </div>
              </div>

              <div className=" pt-[130px]">
                <div>
                  <h2 className="max-sm:text-3xl md:text-5xl lg:text-[50px] font-[500] text-[#061E2C] dark:text-[#fff]">
                    {langData.followCreativity}
                  </h2>
                </div>

                <div className="flex lg:flex-row md:flex-col max-sm:flex-col gap-[50px] justify-center py-[60px]">
                  <div className="flex flex-col sm:w-[100%] lg:w-[705px] gap-[50px]">
                    <Link
                      href={footer?.socialLinks?.facebook || "#"}
                      target="_blank"
                      className="w-[100%] max-sm:py-[50px] sm:h-[479px] lg:h-[400px] flex flex-col items-center bg-[#197BFF1A] dark:[#197bff1a] rounded-[50px] justify-center"
                    >
                      <div>
                        <Image
                          src={"/facebok.png"}
                          alt="Facebook"
                          height="197"
                          width="200"
                        />
                      </div>
                      <div>
                        <p className="text-[#434750] dark:text-[#fff] text-[25px] md:text-[28px] lg:text-[30px] font-[500] ">
                          Facebook
                        </p>
                      </div>
                    </Link>
                    <Link
                      href={footer?.socialLinks?.linkedIn || "#"}
                      target="_blank"
                      className="w-[100%] max-sm:py-[50px] sm:h-[479px] lg:h-[479px] flex flex-col items-center bg-[#1DE2CF1A] dark:bg-[#1de2cf1a] rounded-[50px] justify-center	"
                    >
                      <div>
                        <Image
                          src={"/linkedin.png"}
                          alt="Linkedin"
                          height="201"
                          width="203"
                        />
                      </div>
                      <div>
                        <p className="text-[#434750] dark:text-[#fff] text-[25px] md:text-[28px] lg:text-[30px] font-[500] ">
                          Linkedin
                        </p>
                      </div>
                    </Link>
                  </div>

                  <div className="flex flex-col sm:w-[100%] lg:w-[705px] gap-[50px]">
                    <Link
                      href={footer?.socialLinks?.instagram || "#"}
                      target="_blank"
                      className="w-[100%] max-sm:py-[50px] sm:h-[479px] lg:h-[479px] flex flex-col items-center bg-[#5458b11a] dark:bg-[#5458b11a] rounded-[50px] justify-center	"
                    >
                      <div>
                        <Image
                          src={"/instagram.png"}
                          alt="Instagram"
                          height="201"
                          width="203"
                        />
                      </div>
                      <div>
                        <p className="text-[#434750] dark:text-[#fff] text-[25px] md:text-[28px] lg:text-[30px] font-[500] ">
                          Instagram
                        </p>
                      </div>
                    </Link>
                    <Link
                      href={footer?.socialLinks?.dribble || "#"}
                      target="_blank"
                      className="w-[100%] max-sm:py-[50px] m:h-[4079x] lg:h-[400px] flex flex-col items-center bg-[#fd346e1a] dark:bg-[#fd346e1a] rounded-[50px] justify-center	 "
                    >
                      <div>
                        <Image
                          src={"/dribble.png"}
                          alt="Dribble"
                          height="200"
                          width="203"
                        />
                      </div>
                      <div>
                        <p className="text-[#434750] dark:text-[#fff] text-[25px] md:text-[28px] lg:text-[30px] font-[500] ">
                          Dribbble
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <FeatureProject parent={parent} lang={lang} direction={direction} />
        <div className="max-w-[900px] lg:py-[130px] py-[50px] mx-auto">
          <div className="text-center xl:text-[90px] font-[100] lg:text-[50px] text-[40px] dark:text-white text-[#061E2C] leading-[113%]">
            <h2 className="font-[500]"> {parent.contactUS?.footerHeading}</h2>
            <h2 className="block font-[100]">
              {" "}
              {parent.contactUS?.footerHeading2}
            </h2>
          </div>
          <form
            onSubmit={subscribeUser}
            className="relative max-w-[440px] mt-[50px] mx-auto"
          >
            <input
              dir={direction}
              ref={inputRef}
              type="email"
              value={email}
              onChange={onchange}
              autoCapitalize="off"
              autoCorrect="off"
              className="placeholder:uppercase py-[27px] px-[35px] w-full appearance-none bg-[#DEE9EE] text-white dark:bg-[#FFFFFF14] rounded-[50px]"
              placeholder={`${
                direction == "ltr"
                  ? "Enter your email"
                  : "أدخل بريدك الإلكتروني"
              }`}
            />
            <button
              type="submit"
              className={` absolute top-[50%] translate-y-[-50%] ${
                direction == "ltr" ? "right-[35px]" : "left-[35px]"
              } bg-[#197BFF]  h-[42px] w-[42px] flex items-center justify-center rounded-[50%]`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                className={`${direction == "ltr" ? "" : "rotate-180"} `}
                height="14"
                viewBox="0 0 18 14"
                fill="none"
              >
                <path
                  d="M1.08268 8.04154H14.4014L10.9712 11.4717C10.5645 11.8785 10.5645 12.5379 10.9712 12.9447C11.1749 13.1483 11.441 13.2499 11.7077 13.2499C11.9743 13.2499 12.2405 13.1483 12.4441 12.9447L17.6525 7.73633C17.8478 7.54154 17.9577 7.27643 17.9577 6.99987C17.9577 6.72331 17.8478 6.45872 17.6525 6.26341L12.4441 1.05508C12.0374 0.648307 11.378 0.648307 10.9712 1.05508C10.5645 1.46185 10.5645 2.12122 10.9712 2.52799L14.4014 5.9582H1.08268C0.507683 5.9582 0.0410156 6.42487 0.0410156 6.99987C0.0410156 7.57487 0.507683 8.04154 1.08268 8.04154Z"
                  fill="white"
                />
              </svg>
            </button>
          </form>
          <div className=" max-w-[440px]  mx-auto">
            {successMsg ? (
              <p className="text-green-500 ">{successMsg}</p>
            ) : (
              <p className="text-red-500 ">{errorMsg}</p>
            )}
          </div>
        </div>
        <Footer
          parent={parent}
          lang={lang}
          direction={direction}
          welnote={false}
        />
      </div>
    </>
  );
}
