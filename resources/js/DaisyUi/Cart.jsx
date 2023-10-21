import React, { useContext, useState } from "react";
import { Icon } from "@iconify/react";
import { router } from "@inertiajs/react";
import { Context } from "@/Pages/MyContext";
const Cart = () => {
    const { OrderItems, subtotal, orderDetailStore, orderDetail, setIsOpen } =
        useContext(Context);
    const totalOrder = OrderItems.length;
    const newSubtotal = subtotal.reduce((total, item) => {
        const itemTotal = parseFloat(item.price) * item.qty;
        return total + itemTotal;
    }, 0);

    return (
        <div>
            <div className="mx-5 mt-10">
                <div className="flex flex-col gap-y-3">
                    {totalOrder > 0 &&
                        OrderItems.map((item, index) => (
                            <Card
                                key={index}
                                index={index}
                                data={item}
                                subtotal={subtotal[index]}
                            />
                        ))}
                </div>
            </div>
            <div className="mx-5 my-10 flex gap-x-3">
                <div className="flex justify-between w-full font-semibold pb-2 border-b">
                    <p className="text-xl">Subtotal</p>
                    <p className="text-xl">
                        {newSubtotal.toLocaleString("id-ID")}
                    </p>
                </div>
            </div>
            <div className="mx-5 my-10 flex gap-x-3">
                <button
                    onClick={() => {
                        orderDetailStore(subtotal);
                        setIsOpen(true);
                    }}
                    className="btn btn-primary w-1/2"
                >
                    Order Now
                </button>
                <button
                    onClick={() =>
                        confirm("Are you sure?") && window.location.reload()
                    }
                    className="btn btn-secondary w-1/2"
                >
                    Cancel
                </button>
            </div>
        </div>
    );
};

const Card = ({ data, index, subtotal }) => {
    const [price, setPrice] = useState(subtotal.price || data.size[0].price);
    const [size, setSize] = useState(subtotal.size || data.size[0].size);
    const { deleteOrder, plusQty, minusQty, updatePrice } = useContext(Context);
    const [qty, setQty] = useState(subtotal.qty || 1);
    return (
        <>
            <div className="w-full flex gap-x-5 border rounded-lg">
                <img
                    className="w-20 h-20 rounded-md"
                    src={data.image.replace("uploads", "/storage")}
                    alt={data.image.replace("uploads", "/storage")}
                />
                <div className="w-1/3">
                    <h1>{data.name}</h1>
                    <div className="flex gap-x-2">
                        {data.size.map((size) => (
                            <button
                                onClick={() => {
                                    setPrice(size.price);
                                    updatePrice(
                                        index,
                                        size.price,
                                        size.id,
                                        size.size
                                    );
                                    setSize(size.size);
                                }}
                                className={`btn btn-xs btn-accent font-semibold ${
                                    size.size === subtotal.size
                                        ? "btn-secondary"
                                        : ""
                                }`}
                                key={size.id}
                            >
                                {size.size}
                            </button>
                        ))}
                    </div>
                    <p>{parseFloat(price).toLocaleString("id-ID")}</p>
                </div>
                <div className="flex items-center gap-x-2">
                    <button
                        onClick={() => {
                            setQty(qty - 1);
                            minusQty(index);
                        }}
                        className={`btn btn-accent btn-circle btn-sm ${
                            qty <= 1 ? "btn-disabled" : ""
                        }`}
                    >
                        -
                    </button>
                    <span>{qty}</span>
                    <button
                        onClick={() => {
                            setQty(qty + 1);
                            plusQty(index);
                        }}
                        className="btn btn-accent btn-circle btn-sm"
                    >
                        +
                    </button>
                </div>
                <div className="flex flex-col justify-center items-start">
                    <p>{size}</p>
                    <p>{parseFloat(price * qty).toLocaleString("id-ID")}</p>
                </div>
                <div className="flex items-center justify-end">
                    <button
                        onClick={() => deleteOrder(index)}
                        className="btn btn-ghost"
                    >
                        <Icon
                            className="text-2xl text-red-600"
                            icon="ph:trash"
                        />
                    </button>
                </div>
            </div>
        </>
    );
};

export default Cart;
