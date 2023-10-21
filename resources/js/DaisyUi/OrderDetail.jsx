import React, { useContext, useState } from "react";
import { Icon } from "@iconify/react";
import { router } from "@inertiajs/react";
import { Context } from "@/Pages/MyContext";
const OrderDetail = ({ data }) => {
    const { setIsOpen, subtotal } = useContext(Context);
    const newSubtotal = subtotal.reduce((total, item) => {
        const itemTotal = parseFloat(item.price) * item.qty;
        return total + itemTotal;
    }, 0);
    return (
        <div className="px-7 pt-10">
            <div>
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="flex gap-x-2 border-b-2 pb-2 mb-2"
                    >
                        <img
                            className="w-16 h-16 border rounded-md"
                            src={item.img.replace("uploads", "/storage")}
                        />
                        <div className="flex justify-between w-full">
                            <div>
                                <p className="font-semibold text-xl">
                                    {item.name}
                                </p>
                                <p className="text-xl">{item.size}</p>
                            </div>
                            <div>
                                <p>
                                    {item.qty} X{" "}
                                    {parseFloat(item.price).toLocaleString(
                                        "id-ID"
                                    )}
                                </p>
                                <p className="text-xl">
                                    Rp{" "}
                                    {parseFloat(
                                        item.price * item.qty
                                    ).toLocaleString("id-ID")}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-between">
                <p className="font-semibold text-xl">GrandTotal:</p>
                <p className="font-semibold text-xl">
                    Rp {newSubtotal.toLocaleString("id-ID")}
                </p>
            </div>
            <div className="my-5 flex flex-col gap-y-3">
                <button className="btn btn-primary w-full">Pay Now</button>
                <button
                    onClick={() => setIsOpen(false)}
                    className="btn btn-secondary w-full"
                >
                    Back
                </button>
            </div>
        </div>
    );
};

export default OrderDetail;
