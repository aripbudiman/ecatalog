import React, { useContext, useState } from "react";
import { Context } from "../MyContext";
import "../../../css/main.css";
import { router } from "@inertiajs/react";
const ModalPayment = () => {
    const {
        dataModalOrder,
        setOrderItems,
        setSubtotal,
        setOrderDetail,
        addOrder,
        setDataModalOrder,
        deleteAllOrder,
    } = useContext(Context);
    const [active, setActive] = useState(false);
    const snapToken = dataModalOrder.snapToken;
    const data = dataModalOrder.sales;
    const [change, setChange] = useState(0);
    const cash = () => {
        const token = window.csrf_token;
        router.post(
            "/cash",
            {
                id: data.id,
                _token: token,
            },
            {
                headers: {
                    "X-CSRF-TOKEN": token,
                },
                onSuccess: () => {
                    deleteAllOrder();
                    setChange(0);
                    document.getElementById("modal-payment").close();
                },
            }
        );
    };
    const midtrans = () => {
        window.snap.embed(snapToken, {
            embedId: "snap-container",
            onSuccess: function (result) {
                alert("payment success!");
                console.log(result);
                window.location.reload();
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
                alert("you closed the popup without finishing the payment");
            },
        });
    };
    return (
        <dialog id="modal-payment" className="modal relative">
            {data ? (
                <div className="modal-box w-11/12 max-w-lg scrollable">
                    <h3 className="font-bold text-lg">Order Details</h3>
                    <div className="flex flex-col gap-1">
                        <p>
                            <span className="font-semibold">Tanggal:</span>{" "}
                            {data.trx_date}
                        </p>
                        <p>
                            <span className="font-semibold">Status:</span>{" "}
                            {data.status}
                        </p>
                        <p>
                            <span className="font-semibold">Invoice:</span>{" "}
                            {data.invoice}
                        </p>
                    </div>
                    <div className="mt-3 flex flex-col gap-y-2">
                        {data.order.map((item, index) => (
                            <div
                                key={index}
                                className="flex gap-x-3 items-center border p-2 rounded-md "
                            >
                                <img
                                    src={item.size.product.image.replace(
                                        "uploads",
                                        "/storage"
                                    )}
                                    className="w-20 h-20 rounded-md border"
                                    alt={item.size.product.image}
                                />
                                <div>
                                    <div className="flex gap-x-5 text-lg">
                                        <p>{item.size.product.name}</p>
                                    </div>
                                    <div className="flex gap-x-5">
                                        <p>{item.size.size}</p>
                                        <p>{item.qty}</p>
                                        <p>
                                            {parseFloat(
                                                item.size.price
                                            ).toLocaleString("id-ID")}
                                        </p>
                                        <p className="font-semibold">
                                            {parseFloat(
                                                item.size.price * item.qty
                                            ).toLocaleString("id-ID")}
                                        </p>
                                    </div>
                                </div>
                                <div></div>
                            </div>
                        ))}
                        <div className="flex justify-end gap-x-3">
                            <button
                                className={`btn btn-xs ${
                                    !active ? "" : "btn-secondary"
                                }`}
                                onClick={() => setActive(true)}
                            >
                                Cash
                            </button>
                            <button
                                onClick={() => setActive(false)}
                                className={`btn btn-xs ${
                                    active ? "" : "btn-secondary"
                                }`}
                            >
                                Transfer
                            </button>
                        </div>
                        {active ? (
                            <>
                                <div className="grid grid-cols-2 gap-3">
                                    <label htmlFor="Subtotal">Subtotal</label>
                                    <input
                                        value={parseFloat(
                                            data.amount
                                        ).toLocaleString("id-ID")}
                                        type="text"
                                        placeholder="Nominal"
                                        className="input input-sm rounded-none input-bordered w-full"
                                        disabled
                                    />
                                    <label htmlFor="Nominal">Pay</label>
                                    <input
                                        onChange={(e) =>
                                            setChange(e.target.value)
                                        }
                                        value={change}
                                        type="text"
                                        placeholder="Nominal"
                                        className="input input-sm rounded-none input-bordered w-full"
                                    />
                                    <label htmlFor="Change">Change</label>
                                    <input
                                        disabled
                                        value={parseFloat(
                                            change - data.amount
                                        ).toLocaleString("id-ID")}
                                        type="text"
                                        placeholder="Change"
                                        className="input input-sm rounded-none input-bordered w-full"
                                    />
                                </div>
                                <div className="flex justify-between">
                                    <button
                                        onClick={cash}
                                        disabled={
                                            parseInt(change) >=
                                            parseInt(data.amount)
                                                ? false
                                                : true
                                        }
                                        className="btn btn-primary w-1/2 mr-2"
                                    >
                                        Pay Now
                                    </button>
                                    <button className="btn btn-secondary w-1/2 ml-2">
                                        Cancel
                                    </button>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="grid grid-cols-2 gap-3">
                                    <label htmlFor="Subtotal">Subtotal</label>
                                    <input
                                        value={parseFloat(
                                            data.amount
                                        ).toLocaleString("id-ID")}
                                        type="text"
                                        placeholder="Nominal"
                                        className="input input-sm rounded-none input-bordered w-full"
                                        disabled
                                    />
                                </div>
                                <div>
                                    <button
                                        onClick={midtrans}
                                        className="btn btn-primary w-full"
                                    >
                                        Pay Now
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            ) : null}
        </dialog>
    );
};

export default ModalPayment;
