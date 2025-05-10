"use client";
import { useState, useEffect } from "react";
import { Bai_Jamjuree } from "next/font/google";

const inter = Bai_Jamjuree({ subsets: ["latin"], weight: "500" });

const Counter = ({ num }: { num?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Remove non-numeric characters and convert to a number
    const cleanedNum = parseInt(num?.replace(/[^0-9]/g, "") || "0", 10);

    if (isNaN(cleanedNum) || cleanedNum <= 0) {
      console.error("Invalid num prop:", num);
      return;
    }

    const totalSteps = 72;
    const intervalDuration = 1000 / totalSteps;
    const stepValue = Math.ceil(cleanedNum / totalSteps);

    const updateCount = () => {
      setCount((prevCount) => {
        const newCount = prevCount + stepValue;
        if (newCount >= cleanedNum) {
          setCount(cleanedNum);
          clearInterval(interval);
        }
        return newCount;
      });
    };

    const interval = setInterval(updateCount, intervalDuration);

    return () => clearInterval(interval);
  }, [num]);

  return (
    <div>
      <p className={`${inter.className} outlinee-bg leading-normal text-[100px]`}>
        {count}
      </p>
    </div>
  );
};

export default Counter;
