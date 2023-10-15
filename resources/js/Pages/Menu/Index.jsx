import React from "react";
import App from "@/Layouts/App";
import Navbar from "@/DaisyUi/Navbar";
const Index = () => {
    return (
        <>
            <App title="Menu">
                <Navbar>
                    <div className="flex gap-x-3 items-center w-1/2 md:w-2/3">
                        <h1 className="text-2xl font-semibold">Menu</h1>
                        <input
                            type="text"
                            placeholder="Search menu"
                            className="input rounded-full h-10 w-2/3  md:w-full shadow-sm"
                        />
                    </div>
                </Navbar>
                <div className="p-3">
                    <h1 className="text-xl font-semibold">
                        Special Menu For You
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-5 mt-3">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
            </App>
        </>
    );
};

const Card = () => {
    return (
        <div className="card w-full bg-base-100 shadow-md">
            <figure className="p-1.5 h-[157px] object-cover">
                <img
                    src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                    alt="Shoes"
                    className="rounded-xl"
                />
            </figure>
            <div className="card-body -my-8 -mb-5 -mx-4">
                <h2 className="card-title">Shoes!</h2>
                <p className="leading-5">
                    If a dog chews shoes whose shoes does he choose?
                </p>
                <div className="card-actions justify-between">
                    <h2 className="text-lg font-semibold">Rp 4.000</h2>
                    <button className="btn btn-xs btn-secondary">Order</button>
                </div>
            </div>
        </div>
    );
};

export default Index;
