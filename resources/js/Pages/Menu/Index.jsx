import React, { useState } from "react";
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
    const [price, setPrice] = useState(data.size[0].price);
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
                <h2 className="card-title text-lg">{data.name}</h2>
                <div className="flex gap-x-1">
                    {data.size.map((size) => (
                        <button
                            onClick={() => setPrice(size.price)}
                            className="btn btn-xs btn-accent font-semibold"
                            key={size.id}
                        >
                            {size.size}
                        </button>
                    ))}
                </div>
                <div className="card-actions flex-col justify-between">
                    <h2 className="text-lg font-semibold">
                        Rp {parseFloat(price).toLocaleString("id-ID")}
                    </h2>
                    <button className="btn btn-sm w-full btn-secondary">
                        Order
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Index;
