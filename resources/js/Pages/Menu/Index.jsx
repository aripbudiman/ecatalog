import React from "react";
import App from "@/Layouts/App";
import Navbar from "@/DaisyUi/Navbar";
const Index = ({ menu }) => {
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
                    <div className="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-5 gap-5 mt-3">
                        {menu.map((item) => (
                            <Card key={item.id} data={item} />
                        ))}
                    </div>
                </div>
            </App>
        </>
    );
};

const Card = ({ data }) => {
    return (
        <div className="card w-full bg-base-100 shadow-md">
            <figure className="p-1.5">
                <img
                    src={data.image.replace("uploads", "/storage")}
                    alt="Shoes"
                    className="rounded-xl"
                />
            </figure>
            <div className="card-body -my-8 -mb-5 -mx-4">
                <h2 className="card-title">{data.name}</h2>
                <p className="leading-5">{data.description}</p>
                <div className="card-actions justify-between">
                    <h2 className="text-lg font-semibold">Rp 4.000</h2>
                    <button className="btn btn-xs btn-secondary">Order</button>
                </div>
            </div>
        </div>
    );
};

export default Index;
