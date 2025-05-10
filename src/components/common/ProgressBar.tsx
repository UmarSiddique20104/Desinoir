import React, { useEffect, useState } from "react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import { useInView } from "react-intersection-observer";
import "react-circular-progressbar/dist/styles.css";
function ProgressBar() {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: false,
    trackVisibility: true,
    delay: 500,
    threshold: 1,
  });
  useEffect(() => {
    let animationFrame: any;

    const animateCounter = (startTime: any) => {
      const currentTime = Date.now();
      const progress = (currentTime - startTime) / 3000;

      setCount((prevCount) => {
        const nextCount = Math.min(prevCount + progress * 10, 80);

        if (nextCount < 80) {
          animationFrame = requestAnimationFrame(() =>
            animateCounter(startTime)
          );
        }

        return nextCount;
      });
    };

    if (inView) {
      animationFrame = requestAnimationFrame(() => animateCounter(Date.now()));
    }

    return () => cancelAnimationFrame(animationFrame);
  }, [inView]);
  return (
    <div className="rotate-90 " ref={ref}>
      <CircularProgressbarWithChildren
        className=" lg:w-[134px] w-[60px] h-[60px] lg:h-[134px]"
        value={count}
        strokeWidth={10}
        styles={{
          path: {
            stroke: "#1DE2CF",
          },
          trail: {
            stroke: "transparent",
            fontSize: "16px",
          },
        }}
      >
        <div className="bg-[#FFFFFF40] h-8 w-8 lg:h-[74px] lg:w-[74px] rounded-full"></div>
      </CircularProgressbarWithChildren>
    </div>
  );
}

export default ProgressBar;
