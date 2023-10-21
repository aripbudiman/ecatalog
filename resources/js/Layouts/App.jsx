import React, { useContext } from "react";
import { Head } from "@inertiajs/react";
import Sidebar from "../DaisyUi/Sidebar";
import Navbar from "@/DaisyUi/Navbar";
import { Context, Provider } from "@/Pages/MyContext";
const App = ({ children, title }) => {
    return (
        <Provider>
            <Main title={title} children={children} />
        </Provider>
    );
};

const Main = ({ children, title }) => {
    return (
        <div className="flex items-start">
            <Head title={title} />
            <Sidebar />
            <div className="w-full lg:ml-60 ">{children}</div>
        </div>
    );
};

export default App;
