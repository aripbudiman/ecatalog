import App from "@/Layouts/App";
import React from "react";
import { useForm } from "@inertiajs/react";
const Index = ({ categories }) => {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
    });
    const submit = (e) => {
        e.preventDefault();
        if (errors.name) {
            return false;
        } else {
            post("/category");
        }
    };
    return (
        <App title="Category">
            <form onSubmit={submit} className="p-3 flex gap-x-3">
                <input
                    type="text"
                    value={data.name}
                    onChange={(e) => setData("name", e.target.value)}
                    placeholder="Name Category"
                    className="input input-bordered input-primary w-full max-w-xs"
                />
                <button className="btn btn-primary">Add New Category</button>
            </form>
            <div className="p-3 w-2/3">
                <div className="overflow-x-auto">
                    <table className="table table-sm bg-white shadow-md">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories.map((category, index) => (
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{category.name}</td>
                                    <td>
                                        <button className="btn btn-xs btn-success">
                                            Edit
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </App>
    );
};

export default Index;
