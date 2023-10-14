import React from "react";
import { Icon } from "@iconify/react";
const Logo = () => {
    return (
        <div className="flex flex-col justify-center items-center mb-10">
            <div className="bg-sky-500 p-2 rounded-2xl">
                <Icon
                    className="text-white text-6xl"
                    icon="mdi:cash-register"
                />
            </div>
            <h1 className="text-white text-lg font-bold">E-catalog</h1>
        </div>
    );
};

export default Logo;
