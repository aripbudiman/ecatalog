import React, { useState, useEffect } from "react";
import { useForm } from "@inertiajs/react";

const ModalEditCustomer = (props) => {
    const { data, setData, put, processing, errors } = useForm({
        name: "",
        no_hp: "",
    });

    useEffect(() => {
        if (props.data) {
            setData({
                name: props.data.name,
                no_hp: props.data.no_hp,
            });
        }
    }, [props.data]);
    const submit = (e) => {
        e.preventDefault();
        if (errors.name || errors.no_hp) {
            return false;
        } else {
            put("/customer/" + parseInt(props.data.id));
            document.getElementById("modalEditCustomer").close();
            setData({ name: "", no_hp: "" });
        }
    };
    return (
        <dialog id="modalEditCustomer" className="modal">
            <div className="modal-box">
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                    </button>
                </form>
                <h3 className="font-bold text-lg">Edit Customers!</h3>
                <form onSubmit={submit} className="py-4 flex flex-col gap-y-5">
                    <input
                        type="text"
                        placeholder="Name Customer"
                        className="input input-bordered w-full"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                    />
                    {errors.name && (
                        <p className="text-red-500">{errors.name}</p>
                    )}
                    <input
                        type="text"
                        placeholder="No Handphone"
                        className="input input-bordered w-full"
                        value={data.no_hp}
                        onChange={(e) => setData("no_hp", e.target.value)}
                    />
                    {errors.no_hp && (
                        <p className="text-red-500">{errors.no_hp}</p>
                    )}
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        </dialog>
    );
};

export default ModalEditCustomer;
