import React from "react";
import { Head } from "@inertiajs/react";
import { Link } from "@inertiajs/react";
import { Icon } from "@iconify/react";
const Sidebar = () => {
    return (
        <>
            <ul className="menu bg-primary w-60 min-h-screen gap-y-3 fixed hidden lg:block">
                <h1 className="text-center text-white font-bold text-3xl">
                    Budiman
                </h1>
                <li className="text-lg text-white mt-10">
                    <Link href="/dashboard" className="hover:bg-sky-300/50">
                        <Icon icon="radix-icons:dashboard" />
                        Dashboard
                    </Link>
                </li>
                <li className="text-lg text-white">
                    <Link className="hover:bg-sky-300/50">
                        <Icon icon="uiw:pay" />
                        Payment
                    </Link>
                </li>
                <li className="text-lg text-white">
                    <Link className="hover:bg-sky-300/50">
                        <Icon icon="ic:outline-inventory-2" />
                        Menu
                    </Link>
                </li>
                <li className="text-lg text-white">
                    <Link href="/customer" className="hover:bg-sky-300/50">
                        <Icon icon="ph:users" />
                        Customers
                    </Link>
                </li>
                <li className="text-lg text-white">
                    <Link className="hover:bg-sky-300/50">
                        <Icon icon="iconoir:verified-user" />
                        Employee
                    </Link>
                </li>
                <li className="text-lg text-white">
                    <Link className="hover:bg-sky-300/50">
                        <Icon icon="mdi:report-box-outline" />
                        Report
                    </Link>
                </li>
            </ul>
        </>
    );
};

export default Sidebar;
