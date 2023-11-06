import React from "react";

const Midtrans = ({ snapToken }) => {
    const pay = () => {
        window.snap.embed(snapToken, {
            embedId: "snap-container",
            onSuccess: function (result) {
                alert("payment success!");
                console.log(result);
                window.location.href = "/menu";
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
                window.location.href = "/menu";
            },
        });
    };

    return (
        <div className="w-full lg:max-w-2xl h-screen mx-auto">
            <div id="snap-container" className="w-full max-h-full"></div>
            <button
                onClick={pay}
                className="btn btn-neutral w-full lg:max-w-2xl absolute bottom-0 rounded-none"
            >
                Pay
            </button>
        </div>
    );
};

export default Midtrans;
