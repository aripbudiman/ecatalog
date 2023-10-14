import React, { useState } from "react";
import App from "@/Layouts/App";
import ModalAddCustomer from "./ModalAddCustomer";
import ModalEditCustomer from "./ModalEditCustomer";
import Pagination from "@/DaisyUi/Pagination";
const Index = (props) => {
    console.log(props);
    return (
        <App title="Customers">
            <div className="p-3">
                <button
                    onClick={() =>
                        document.getElementById("modalAddCustomer").showModal()
                    }
                    className="btn btn-outline btn-primary"
                >
                    Add New Customer
                </button>
                <ModalAddCustomer />
            </div>
            <div className="overflow-x-auto mb-10">
                <Table customers={props.customers.data} />
                <Pagination
                    data={props.customers.links}
                    total={props.customers.total}
                />
            </div>
        </App>
    );
};

const Table = ({ customers }) => {
    const [data, setData] = useState();
    const [keyword, setKeyword] = useState("");
    const handleSearch = () => {
        if (keyword === "") {
            return customers;
        }
        return customers.filter((customer) =>
            customer.name.toLowerCase().includes(keyword.toLowerCase())
        );
    };
    const newCustomers = handleSearch();
    return (
        <div className="mx-5 my-2">
            <div className="flex justify-between">
                <div></div>
                <input
                    type="text"
                    placeholder="Search"
                    className="input input-bordered w-full max-w-xs"
                    onChange={(e) => setKeyword(e.target.value)}
                />
            </div>
            <table className="table table-xs bg-white mt-2">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>No Handphone</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {newCustomers.map((customer, index) => (
                        <tr key={index}>
                            <th>{index + 1}</th>
                            <td>{customer.name}</td>
                            <td>{customer.no_hp}</td>
                            <td>
                                <button
                                    onClick={() => {
                                        setData(customer);
                                        document
                                            .getElementById("modalEditCustomer")
                                            .showModal();
                                    }}
                                    className="btn btn-xs btn-success"
                                >
                                    Edit
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <ModalEditCustomer data={data} />
        </div>
    );
};

export default Index;
