import React from "react";

const Loading = () => {
    return (
        <div>
            <div className="fixed inset-0 h-screen flex justify-center z-50 items-center bg-white/50">
                <span className="loading loading-ring w-44 h-44 z-50"></span>
            </div>
        </div>
    );
};

export default Loading;
