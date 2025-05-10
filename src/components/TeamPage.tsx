"use client";
import BrandDesigns from "@/components/common/BrandDesigns";
import Footer from "@/components/common/Footer";
import Pagesheader from "@/components/common/Pagesheader";
import Team from "@/components/home/Team";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { fetchHeader } from "./Utilts/Helper";
import { setHeader } from "./redux/slicedata";
const Teams = [
  {
    id: 1,
    img: "/assets/about/shehzad.png",
    img2: "/assets/about/shehzad.color.png",
    name: "Shahzad Jameel",
    arabicname: "شهزاد جميل",
    role: "Founder",
    arabicrole: "مؤسس",
  },
  {
    id: 2,
    img: "/assets/about/umar.png",
    img2: "/assets/about/umar.color.png",
    name: "Muhammad Umer",
    arabicname: "محمد عمر",
    role: "CEO",
    arabicrole: " المدير التنفيذي",
  },
  {
    id: 3,
    img: "/assets/about/umar.J.png",
    img2: "/assets/about/umar.jcolor.png",
    name: "Umer Maqsood",
    arabicname: "عمر مقصود",
    role: "UI/UX Expert",
    arabicrole: "خبير واجهة المستخدم/تجربة المستخدم",
  },
  {
    id: 4,
    img: "/assets/about/farhan.png",
    img2: "/assets/about/farhancolor.png",
    name: "Farhan Ali",
    arabicname: "فرحان علي",
    role: "QA Expert",
    arabicrole: "خبير ضمان الجودة",
  },
  {
    id: 5,
    img: "/assets/about/usman.png",
    img2: "/assets/about/usmancolor.png",
    name: "Usman Saeed",
    arabicname: "عثمان سعيد",
    role: "Project Manager",
    arabicrole: "مدير المشروع",
  },
  {
    id: 6,
    img: "/assets/about/maaz.png",
    img2: "/assets/about/maazcolor.png",
    name: "Muhammad Maaz",
    arabicname: "محمد معاذ",
    role: "Content Writer",
    arabicrole: "كاتب محتوى",
  },
  {
    id: 7,
    img: "/assets/about/sheroz.png",
    img2: "/assets/about/shehrozcolor.png",
    name: "Shahroz Shakeel",
    arabicname: "شهروز شكيل",
    role: "Creative Director",
    arabicrole: "مخرج مبدع",
  },
  {
    id: 8,
    img: "/assets/about/tayyab.png",
    img2: "/assets/about/tayyabcolor.png",
    name: "Tayyab Ali",
    arabicname: "الطيب علي",
    role: "Motion Graphics Expert",
    arabicrole: "خبير موشن جرافيك",
  },
  {
    id: 9,
    img: "/assets/about/amir.png",
    img2: "/assets/about/Amircolor.png",
    name: "Amir Nazir",
    arabicname: "امير نذير",
    role: "UI/UX Expert",
    arabicrole: "خبير واجهة المستخدم/تجربة المستخدم",
  },
];

function TeamPage({ parent, direction, lang }: any) {
  const dispatch = useDispatch();
  const [header, setHeaders] = useState("Our");
  const [header2, setHeader2] = useState("Creative Crew");
  const [team, setTeam] = useState();
 

  const teamHeader = useSelector(
    (state: RootState) => state?.data?.header?.data?.[0]?.headerTitle || " "
  );
  const homeTeamSection = useSelector(
    (state: RootState) => state?.data?.teamMember
  );
  useEffect(() => {
    if (lang === "en") {
      setHeaders("Our");
      setHeader2("Creative Crew");
    } else {
      setHeaders("ملكنا");
      setHeader2("الطاقم الإبداعي");
    }
  }, [lang]);

  return (
    <div>
      <Pagesheader
        parent={parent}
        type="team"
        direction={direction}
        lang={lang}
        txt1={teamHeader}
        txt2={header2}
        img="/assets/OBJECTS2.png"
      />
      <Team
        bgchange={true}
        TeamMemnbers={homeTeamSection?.data}
        btn={false}
        lang={lang}
      />
      <div className="bg-[#F2F6F5] px-5 dark:bg-[#061E2C]  text-center">
        <h3 className="text-[47px] font-[500] leading-normal dark:text-white text-[#061E2C]">
          We Strive to Innovate
        </h3>
        <p className="text-[#989CAA] font-[400] text-[16px] max-w-[768px] pb-[80px] mx-auto">
          Desinoir is a design agency that specialized in Product, UI/UX,
          Graphic Designing and Branding. We collaborate with startups and
          leading brands to create premium web, mobile App, Saas and Digital
          products. We help them successfully build strong brands, leverage
          their story telling channels.
        </p>
        <BrandDesigns />
        <Footer
          parent={parent}
          direction={direction}
          lang={lang}
          welnote={true}
        />
      </div>
    </div>
  );
}
Pagesheader;
export default TeamPage;
