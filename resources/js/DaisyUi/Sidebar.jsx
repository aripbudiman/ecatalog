import React from "react";
import { Link } from "@inertiajs/react";
import { Icon } from "@iconify/react";
import "../../css/main.css";
const Sidebar = () => {
    return (
        <>
            <ul className="menu bg-primary w-60 min-h-screen gap-y-3 fixed hidden lg:block scrollable overflow-y-scroll">
                <h1 className="text-center text-white font-bold text-3xl">
                    Budiman
                </h1>
                <li className="text-lg text-white mt-10">
                    <Link
                        href="/dashboard"
                        className="hover:bg-sky-300/50 hover:text-sky-300"
                    >
                        <Icon icon="radix-icons:dashboard" />
                        Dashboard
                    </Link>
                </li>
                <li className="text-lg text-white">
                    <Link className="hover:bg-sky-300/50 hover:text-sky-300">
                        <Icon icon="uiw:pay" />
                        Payment
                    </Link>
                </li>
                <li className="text-lg text-white">
                    <Link
                        href="/menu"
                        className="hover:bg-sky-300/50 hover:text-sky-300"
                    >
                        <Icon icon="ic:outline-inventory-2" />
                        Menu
                    </Link>
                </li>
                <li className="text-lg text-white">
                    <Link
                        href="/customer"
                        className="hover:bg-sky-300/50 hover:text-sky-300"
                    >
                        <Icon icon="ph:users" />
                        Customers
                    </Link>
                </li>
                <li className="text-lg text-white">
                    <Link className="hover:bg-sky-300/50 hover:text-sky-300">
                        <Icon icon="iconoir:verified-user" />
                        Employee
                    </Link>
                </li>
                <li className="text-lg text-white">
                    <Link className="hover:bg-sky-300/50 hover:text-sky-300">
                        <Icon icon="mdi:report-box-outline" />
                        Report
                    </Link>
                </li>
                <li className="text-lg text-white">
                    <details>
                        <summary>
                            <Icon
                                icon="mdi-light:settings"
                                className="hover:bg-sky-300/50 hover:text-sky-300"
                            />
                            Settings
                        </summary>
                        <ul>
                            <li>
                                <Link
                                    href="/category"
                                    className="hover:text-sky-300"
                                >
                                    Category
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/menu/create"
                                    className="hover:text-sky-300"
                                >
                                    Add New Menu
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/size"
                                    className="hover:text-sky-300"
                                >
                                    Set Size Harga
                                </Link>
                            </li>
                        </ul>
                    </details>
                </li>
            </ul>
        </>
    );
};

export default Sidebar;
