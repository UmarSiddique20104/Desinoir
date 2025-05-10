import Image from "next/image";
import React from "react";
import { useTheme } from "next-themes";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
function BrandDesigns() {
  const { theme, setTheme } = useTheme();

  const logos = useSelector((state: RootState) => state.data.logo?.data);

  return (
    <div className="overflow-x-auto">
      <div className="flex max-w-[1460px] md:w-10/12 mx-auto max-md:px-5 flex-nowrap items-center justify-start gap-10 lg:gap-[100px]">
        {logos?.map((logo: any, index: any) => (
          <div key={index}>
            <Image
              src={
                theme === "dark"
                  ? logo?.darkModeLogo?.imagePath
                  : logo?.lightModeLogo?.imagePath
              }
              width={240}
              height={56}
              alt=""
              className="lg:w-[240px] w-[130px]"
            />
          </div>
        ))}
      </div>
    </div>


    // <div className="">
    //   <div className="flex max-w-[1460px] md:w-10/12 mx-auto max-md:px-5 flex-wrap xl:flex-nowrap items-center justify-center gap-10  lg:gap-[100px]">
    //     <div>
    //       {theme == "dark" ? (
    //         <Image
    //           src={"/assets/home/dev.png"}
    //           width={240}
    //           height={56}
    //           alt=""
    //           className="lg:w-[240px] w-[130px]"
    //         />
    //       ) : (
    //         <Image
    //           src={"/assets/home/devdark (1).png"}
    //           width={240}
    //           height={56}
    //           alt=""
    //           className="lg:w-[240px] w-[130px]"
    //         />
    //       )}
    //     </div>
    //     <div>
    //       {theme == "dark" ? (
    //         <Image
    //           src={"/assets/home/resume.png"}
    //           width={240}
    //           height={56}
    //           alt=""
    //           className="lg:w-[240px] w-[130px]"
    //         />
    //       ) : (
    //         <Image
    //           src={"/assets/home/devdark (2).png"}
    //           width={240}
    //           height={56}
    //           alt=""
    //           className="lg:w-[240px] w-[130px]"
    //         />
    //       )}
    //     </div>
    //     <div>
    //       {theme == "dark" ? (
    //         <Image
    //           src={"/assets/home/psf.png"}
    //           width={240}
    //           height={56}
    //           alt=""
    //           className="lg:w-[240px] w-[130px]"
    //         />
    //       ) : (
    //         <Image
    //           src={"/assets/home/devdark (3).png"}
    //           width={240}
    //           height={56}
    //           alt=""
    //           className="lg:w-[240px] w-[130px]"
    //         />
    //       )}
    //     </div>
    //     <div>
    //       {theme == "dark" ? (
    //         <Image
    //           src={"/assets/home/bizz.png"}
    //           width={240}
    //           height={56}
    //           alt=""
    //           className="lg:w-[240px] w-[130px]"
    //         />
    //       ) : (
    //         <Image
    //           src={"/assets/home/devdark (4).png"}
    //           width={240}
    //           height={56}
    //           alt=""
    //           className="lg:w-[240px] w-[130px]"
    //         />
    //       )}
    //     </div>
    //     <div>
    //       {theme == "dark" ? (
    //         <Image
    //           src={"/assets/home/ads.png"}
    //           width={240}
    //           height={56}
    //           alt=""
    //           className="lg:w-[240px] w-[130px]"
    //         />
    //       ) : (
    //         <Image
    //           src={"/assets/home/devdark (5).png"}
    //           width={240}
    //           height={56}
    //           alt=""
    //           className="lg:w-[240px] w-[130px]"
    //         />
    //       )}
    //     </div>
    //   </div>
    // </div>
  );
}

export default BrandDesigns;
