import React, { useState } from "react";
import { useForm, router } from "@inertiajs/react";
import App from "@/Layouts/App";
import Navbar from "@/DaisyUi/Navbar";
import Input from "@/DaisyUi/Input";
import { Icon } from "@iconify/react";
import AlertSuccess from "@/DaisyUi/AlertSuccess";
const Create = ({ categories, message }) => {
    const [previewImage, setPreviewImage] = useState(null);
    const [errors, setErrors] = useState({});
    const imageRef = React.useRef();
    const { data, setData, post, processing } = useForm({
        name: "",
        category_id: "",
        description: "",
        image: null,
    });
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setData("image", file.name);
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setPreviewImage(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const submit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("category_id", data.category_id);
        formData.append("description", data.description);
        formData.append("image", imageRef.current.files[0]);
        router.post("/menu", formData, {
            forceFormData: true,
            onSuccess: () => {
                setPreviewImage(null);
                setData({
                    name: "",
                    category_id: "",
                    description: "",
                    image: null,
                });
            },
            onError: (errors) => {
                setErrors(errors);
            },
        });
    };

    return (
        <App title="Create">
            <Navbar>
                <h1 className="text-2xl font-semibold">Add New Menu</h1>
            </Navbar>
            {message && (
                <div className="w-full xl:w-2/3 px-3">
                    <AlertSuccess />
                </div>
            )}
            <form
                onSubmit={submit}
                encType="multipart/form-data"
                className="p-3 grid grid-cols-2 gap-x-5 xl:w-2/3"
            >
                <div>
                    <Input
                        label="name"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        className={errors.name && "border-red-500"}
                    />
                    {errors.name && (
                        <p className="text-red-500">{errors.name}</p>
                    )}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text first-letter:uppercase lowercase">
                                Category
                            </span>
                        </label>
                        <select
                            onChange={(e) =>
                                setData("category_id", parseInt(e.target.value))
                            }
                            value={data.category_id}
                            className={
                                "select select-bordered w-full " +
                                (errors.category_id && "border-red-500")
                            }
                        >
                            <option>Select Category</option>
                            {categories.map((category) => (
                                <option key={category.id} value={category.id}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                        {errors.category_id && (
                            <p className="text-red-500">{errors.category_id}</p>
                        )}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text first-letter:uppercase lowercase">
                                Description
                            </span>
                        </label>
                        <textarea
                            value={data.description}
                            onChange={(e) =>
                                setData("description", e.target.value)
                            }
                            className="textarea textarea-bordered"
                            placeholder="Description Product"
                        ></textarea>
                    </div>
                </div>
                <div>
                    <label htmlFor="image" className="group">
                        <figure className="h-60 object-cover w-full bg-white rounded-lg border-2 border-gray-400 border-dashed mt-10 flex justify-center items-center">
                            {previewImage ? (
                                <img
                                    src={previewImage}
                                    alt="Preview"
                                    className=" h-full object-cover"
                                />
                            ) : (
                                <Icon
                                    className="text-gray-400 text-8xl group-hover:scale-125 transition duration-150 ease-in-out"
                                    icon="formkit:uploadcloud"
                                />
                            )}
                        </figure>
                        {errors.image && (
                            <p className="text-red-500">{errors.image}</p>
                        )}
                    </label>
                    <input
                        id="image"
                        name="image"
                        type="file"
                        hidden
                        ref={imageRef}
                        onChange={handleImageChange}
                        accept="image/*"
                    />
                </div>
                <button className="btn btn-primary mt-5">Add Product</button>
                <button className="btn btn-warning mt-5">Cancel</button>
            </form>
        </App>
    );
};

export default Create;
