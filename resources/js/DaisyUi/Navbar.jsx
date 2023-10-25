import React, { useState, useContext } from "react";
import { Icon } from "@iconify/react";
import { Link } from "@inertiajs/react";
import "../../css/main.css";
import { Context } from "@/Pages/MyContext";
import Cart from "./Cart";
const Navbar = ({ children, ...props }) => {
    const [open, setOpen] = useState(false);
    const { OrderItems, subtotal } = useContext(Context);
    const totalOrder = OrderItems.length;
    return (
        <>
            <div className="navbar ">
                <div className="flex-1">{children}</div>
                <div className="flex-none">
                    <label
                        onClick={() => setOpen(!open)}
                        tabIndex={0}
                        className="btn btn-ghost btn-circle"
                    >
                        <div className="indicator">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                />
                            </svg>
                            {totalOrder > 0 && (
                                <span className="badge badge-sm badge-secondary indicator-item w-5 h-5  flex justify-center item">
                                    {totalOrder}
                                </span>
                            )}
                        </div>
                    </label>

                    <div className="dropdown dropdown-end">
                        <label
                            tabIndex={0}
                            className="btn btn-ghost btn-circle avatar"
                        >
                            <div className="w-10 rounded-full">
                                <img src="https://mamo-app.my.id/arip.jpeg" />
                            </div>
                        </label>

                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li>
                                <a>Settings</a>
                            </li>
                            <li>
                                <Link
                                    href="/logout"
                                    as="button"
                                    method="post"
                                    type="button"
                                >
                                    Logout
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="leading-tight mx-3">
                        <h1 className="font-medium">Arip Budiman</h1>
                        <p>Admin</p>
                    </div>
                    {open && (
                        <div
                            className={`fixed overflow-y-scroll scrollable top-0 right-0 h-screen xl:w-1/3 w-2/3 bg-white  transform transition-transform z-50 ${
                                open
                                    ? "translate-x-0 transition duration-1000 ease-in"
                                    : "translate-x-full transition duration-1000 ease-out"
                            }`}
                        >
                            <button
                                onClick={() => setOpen(false)}
                                className="btn btn-sm rounded-none btn-neutral absolute  -left-0"
                            >
                                close
                                <Icon
                                    icon="material-symbols:double-arrow"
                                    className=""
                                />
                            </button>
                            <h1 className="font-semibold text-3xl text-right mr-10">
                                Order Summary
                            </h1>
                            <Cart />
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Navbar;
