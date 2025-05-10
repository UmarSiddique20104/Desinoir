import React from "react";
import BrandSlider from "../common/Slider";

function Branding({ sliders }: any) {
  const background = {
    background: "linear-gradient(90deg, #20D091 0%, #197BFF 100%)",
  };
  return (
    <div>
      <div
        className="lg:h-[410px] h-[150px] flex justify-center items-center"
        style={background}
      >
        <BrandSlider chnaged={false} sliders={sliders} />
      </div>
    </div>
  );
}

export default Branding;
