import React from "react";
import { Head, router, useForm } from "@inertiajs/react";
import Logo from "@/DaisyUi/Logo";

const Login = () => {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
        password: "",
        remember: false,
    });
    console.log(data);
    function submit(e) {
        e.preventDefault();
        post("/login");
    }
    return (
        <div>
            <Head title="Login" />
            <div className="flex justify-center items-center min-h-screen bg-sky-200">
                <div className="card w-96 bg-blue-900 shadow-xl p-5">
                    <Logo />
                    <h1 className="text-5xl text-white font-extrabold text-center mb-5">
                        Login
                    </h1>
                    <div className="flex flex-col w-full">
                        <form onSubmit={submit}>
                            <input
                                type="text"
                                placeholder="Email"
                                className="input input-bordered w-full mb-5"
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                            />
                            {errors.email && (
                                <span className="text-red-500">
                                    {errors.email}
                                </span>
                            )}
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full mb-3"
                                value={data.password}
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                            />
                            {errors.password && (
                                <span className="text-red-500">
                                    {errors.password}
                                </span>
                            )}
                            <label className="cursor-pointer label justify-start gap-x-3">
                                <input
                                    type="checkbox"
                                    className="checkbox checkbox-accent"
                                    checked={data.remember}
                                    onChange={(e) =>
                                        setData("remember", e.target.checked)
                                    }
                                />
                                <span className="label-text text-white">
                                    Remember me
                                </span>
                            </label>
                            <button className="btn bg-sky-600 w-full text-white hover:bg-sky-700 hover:text-white">
                                Masuk
                            </button>
                        </form>
                        <p className="text-white mt-1">
                            Belum punya akun?{" "}
                            <a
                                href="/register"
                                className="text-sky-600 hover:text-sky-200"
                            >
                                Register
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
