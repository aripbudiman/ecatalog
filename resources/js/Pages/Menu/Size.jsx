import React, { useState } from "react";
import { router } from "@inertiajs/react";
import App from "@/Layouts/App";
import Navbar from "@/DaisyUi/Navbar";
import Swal from "sweetalert2";
const Size = ({ menu }) => {
    const [data, setData] = useState(menu[0]);
    return (
        <App title={"Set Size"}>
            <Navbar>
                <h1 className="text-3xl font-semibold">Set Size</h1>
            </Navbar>
            <div className="p-5">
                <div className="overflow-x-auto w-2/3 bg-white rounded-lg shadow-md">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Size / Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {menu.map((item) => (
                                <tr key={item.id}>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-20 h-20">
                                                    <img
                                                        src={item.image.replace(
                                                            "uploads",
                                                            "/storage"
                                                        )}
                                                        alt="Avatar Tailwind CSS Component"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">
                                                    {item.name}
                                                </div>
                                                <div className="text-sm opacity-50">
                                                    {item.category.name}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="flex gap-x-4 items-center">
                                        <div className="flex flex-col gap-y-3 justify-center">
                                            {item.size.map((size) => (
                                                <span key={size.id}>
                                                    {size.size}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex flex-col gap-y-2 justify-center">
                                            {item.size.map((size) => (
                                                <p key={size.id}>
                                                    {parseFloat(
                                                        size.price
                                                    ).toLocaleString("id-ID")}
                                                </p>
                                            ))}
                                        </div>
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => {
                                                setData(item);
                                                document
                                                    .getElementById(
                                                        "modalUpdate"
                                                    )
                                                    .showModal();
                                            }}
                                            className="btn btn-secondary btn-sm"
                                        >
                                            Update
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Modal data={data} />
                </div>
            </div>
        </App>
    );
};

const Modal = ({ data }) => {
    const [items, setItems] = React.useState([{ id: 1, size: "M", price: "" }]);
    const addItem = () => {
        const newItem = { id: items.length + 1, size: "M", price: "" };
        setItems([...items, newItem]);
    };
    const handleSizeChange = (itemId, newSize) => {
        const updatedItems = items.map((item) =>
            item.id === itemId ? { ...item, size: newSize } : item
        );
        setItems(updatedItems);
    };
    const handlePriceChange = (itemId, newPrice) => {
        const updatedItems = items.map((item) =>
            item.id === itemId ? { ...item, price: newPrice } : item
        );
        setItems(updatedItems);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        router.post(
            "/size",
            { product_id: data.id, items: items },
            {
                onSuccess: () => {
                    document.getElementById("modalUpdate").close();
                    setItems([{ id: 1, size: "M", price: "" }]);
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Size has been updated",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                },
            }
        );
    };
    return (
        <dialog id="modalUpdate" className="modal">
            <div className="modal-box">
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                    </button>
                </form>
                <h3 className="font-bold text-lg">Update!</h3>
                <div className="py-4">
                    <div className="flex gap-x-3">
                        <img
                            className="w-24 h-24 border-2 rounded-lg"
                            src={data.image.replace("/uploads", "/storage")}
                        />
                        <div>
                            <h1 className="font-bold text-xl">{data.name}</h1>
                            <h2>{data.category.name}</h2>
                            <p>{data.description}</p>
                        </div>
                    </div>
                    <div className="py-2">
                        {items.map((item) => (
                            <div className="flex gap-4 my-3" key={item.id}>
                                <select
                                    onChange={(e) =>
                                        handleSizeChange(
                                            item.id,
                                            e.target.value
                                        )
                                    }
                                    className="select select-bordered"
                                >
                                    <option>M</option>
                                    <option>L</option>
                                    <option>XL</option>
                                </select>
                                <input
                                    type="text"
                                    placeholder="Price"
                                    className="input input-bordered w-full"
                                    value={item.price}
                                    onChange={(e) =>
                                        handlePriceChange(
                                            item.id,
                                            e.target.value
                                        )
                                    }
                                />
                            </div>
                        ))}
                        <div className="w-full flex gap-x-4 pr-4">
                            <button
                                onClick={handleSubmit}
                                className="btn btn-secondary w-1/2"
                            >
                                Update
                            </button>
                            <button
                                onClick={addItem}
                                className="btn btn-accent w-1/2"
                            >
                                Add Item
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </dialog>
    );
};

export default Size;
