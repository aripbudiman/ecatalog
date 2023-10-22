import React, { useContext, useState } from "react";
import { Icon } from "@iconify/react";
import { router, usePage } from "@inertiajs/react";
import { Context } from "@/Pages/MyContext";
const OrderDetail = ({ data }) => {
    const { setIsOpen, subtotal, setSubtotal } = useContext(Context);
    const [snap, setSnap] = useState(false);
    const newSubtotal = subtotal.reduce((total, item) => {
        const itemTotal = parseFloat(item.price) * item.qty;
        return total + itemTotal;
    }, 0);

    return (
        <div className="px-7 pt-10 relative">
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
            {snap && (
                <div
                    id="snap-container"
                    className="w-full absolute inset-0"
                ></div>
            )}
            <div className="my-5 flex flex-col gap-y-3">
                <button
                    onClick={() => {
                        setSnap(true);
                        router.post(
                            "/sales",
                            {
                                subtotal: subtotal,
                                grossAmount: newSubtotal,
                            },
                            {
                                onSuccess: (props) => {
                                    console.log(props.props.response.response);
                                    window.snap.embed(
                                        props.props.response.response,
                                        {
                                            embedId: "snap-container",
                                            onSuccess: function (result) {
                                                alert("payment success!");
                                                console.log(result);
                                                setSubtotal([]);
                                                setSnap(false);
                                            },
                                            onPending: function (result) {
                                                alert("wating your payment!");
                                                console.log(result);
                                            },
                                            onError: function (result) {
                                                alert("payment failed!");
                                                console.log(result);
                                            },
                                            onClose: function () {
                                                alert(
                                                    "you closed the popup without finishing the payment"
                                                );
                                            },
                                        }
                                    );
                                },
                            }
                        );
                    }}
                    className="btn btn-primary w-full"
                >
                    Checkout
                </button>
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
