"use client";
import React, { useEffect } from "react";
import CountUp from "react-countup";
function CompletedProjects({ parent }: any) {
  useEffect(() => {}, [parent]);

  return (
    <div>
      <div className="dark:bg-[#061E2C] bg-[#F2F6F5] lg:py-[130px] py-[50px]">
        <div className="flex max-md:grid max-md:grid-cols-6   max-md:justify-items-center max-md:items-center  justify-center items-center h-[410px] lg:h-[610px] w-full relative max-w-[1460px]  mx-auto">
          <div className="flex items-center col-span-3  justify-center max-md:w-[180px] max-md:h-[180px]   w-[160px] h-[160px] md:w-[200px] md:h-[200px] lg:w-[360px] lg:h-[360px] dark:bg-[#061E2C] max-lg:top-0  md:absolute top-20 lg:top-50 left-10 border border-[#061E2C26] dark:border-[#FFFFFF40] rounded-[360px]">
            <div className="text-center">
              <h3 className="dark:text-white text-[#061E2C] mb-0 text-[40px] lg:text-[74px] font-[500] leading-[80px]">
                <CountUp
                  enableScrollSpy={true}
                  end={parent?.counters?.completedProjects?.count}
                />
                +
              </h3>
              <p className="font-[400] text-[#989CAA] dark:text-[#989CAA] md:text-[18px] text-[14px]">
                {/* {parent.aboutbubbles.completedProjects} */}
                {parent?.counters?.completedProjects?.text}
              </p>
            </div>
          </div>
          <div className="flex items-center col-span-3 justify-center w-[160px] max-md:w-[180px] max-md:h-[180px] h-[160px] md:w-[240px] md:h-[240px] lg:w-[390px] z-30 lg:h-[390px] dark:bg-[#02111B] bg-[#DEE9EE] max-xl:-bottom-20 md:absolute left-[7%] md:left-[23%] max-xl:left-[25%]  max-lg:bottom-0   bottom-5 border border-[#061E2C26]  dark:border-[#FFFFFF40] rounded-[390px]">
            <div className="text-center">
              <h3 className="dark:text-white text-[#061E2C] mb-0 text-[30px] md:text-[40px] lg:text-[74px] font-[500] md:leading-normal leading-[50px]">
                <CountUp
                  enableScrollSpy={true}
                  end={parent?.counters?.happyClients?.count}
                />
                +
              </h3>
              <p className="font-[400] text-[#989CAA] md:text-[18px] text-[14px]">
                {/* {parent.aboutbubbles.happyClients} */}
                {parent?.counters?.happyClients?.text}
              </p>
            </div>
          </div>
          <div className=" flex items-center col-span-3 justify-center w-[180px] h-[180px] md:w-[250px] md:h-[250px] lg:w-[390px] lg:h-[390px] dark:bg-[#061E2C] md:absolute top-0 left-[43%] border border-[#061E2C26] max-lg:left-[48%]  dark:border-[#FFFFFF40] rounded-[390px]">
            <div className="text-center">
              <h3 className="dark:text-white text-[#061E2C] mb-0 md:text-[40px] text-[30px] lg:text-[74px] font-[500] md:leading-normal leading-[50px]">
                <CountUp
                  enableScrollSpy={true}
                  end={parent?.counters?.positiveRating?.count}
                />
                %
              </h3>
              <p className="font-[400] text-[#989CAA] md:text-[18px] text-[14px]">
                {/* {parent.aboutbubbles.positiveRating} */}
                {parent?.counters?.positiveRating?.text}
              </p>
            </div>
          </div>
          <div className="flex items-center col-span-3 justify-center max-md:w-[180px] max-md:h-[180px]  w-[160px] h-[160px] md:w-[240px] md:h-[240px] lg:w-[450px] lg:h-[450px] dark:bg-[#02111B] max-lg:bottom-0 max-xl:-bottom-20 max-xl:right-5 bg-[#DEE9EE]  md:absolute bottom-0 right-14 border border-[#061E2C26]  dark:border-[#FFFFFF40] rounded-[390px]">
            <div className="text-center">
              <h3 className="text-[#20D091] md:text-[50px] text-[30px] mb-0 lg:text-[112px] font-[500] md:leading-normal leading-[50px]">
                <CountUp
                  enableScrollSpy={true}
                  end={parent?.counters?.yearsExperience?.count}
                />
                +
              </h3>
              <p className="font-[400] text-[#989CAA] md:text-[18px] text-[14px] ">
                {/* {parent.aboutbubbles.yearsExperience} */}
                {parent?.counters?.yearsExperience?.text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompletedProjects;
