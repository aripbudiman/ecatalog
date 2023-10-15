import React from "react";

const Input = ({ label, className, ...props }) => {
    return (
        <div className="form-control w-full">
            <label className="label">
                <span className="label-text first-letter:uppercase lowercase">
                    {label}
                </span>
            </label>
            <input
                {...props}
                type="text"
                placeholder={label}
                className={"input shadow-sm input-bordered w-full " + className}
            />
        </div>
    );
};

export default Input;
