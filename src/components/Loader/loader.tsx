import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import loaderAnimation from "@/components/Loader/Loader.json"; // Replace with the path to your JSON file

export const Loader = () => {
    return (
        <div className="position-fixed inset-0 d-flex justify-content-center align-items-center">
            <Player
                autoplay
                loop
                src={loaderAnimation}
                style={{ width: "150px", height: "150px" }}
            />
        </div>
    );
};
