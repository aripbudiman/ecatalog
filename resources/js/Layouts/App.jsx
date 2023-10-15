import React from "react";
import { Head } from "@inertiajs/react";
import Sidebar from "../DaisyUi/Sidebar";
import Navbar from "@/DaisyUi/Navbar";
const App = ({ children, title }) => {
    return (
        <div className="flex items-start">
            <Head title={title} />
            <Sidebar />
            <div className="w-full lg:ml-60 ">{children}</div>
        </div>
    );
};

export default App;
