import React from "react";
import App from "@/Layouts/App";
import Navbar from "@/DaisyUi/Navbar";
import Table from "./Table";
const Index = (props) => {
    return (
        <App title="List Order">
            <Navbar>
                <h1 className="text-3xl font-semibold">List Order</h1>
            </Navbar>
            <Table />
        </App>
    );
};

export default Index;
