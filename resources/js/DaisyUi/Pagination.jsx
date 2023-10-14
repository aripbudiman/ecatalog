import React from "react";
import { Link } from "@inertiajs/react";

const Pagination = ({ data, total }) => {
    const newLinks = data.filter((item) => {
        return !isNaN(item.label);
    });
    const PrevNext = data.filter((item) => {
        return isNaN(item.label);
    });
    return (
        <div className="flex justify-between items-center px-5">
            <p className="text-primary text-lg font-medium">
                Showing {newLinks.length} of {total}
            </p>
            <div className="join mt-2">
                <Link
                    href={PrevNext[0].url}
                    className="join-item bg-white hover:btn-primary btn"
                >
                    &laquo;
                </Link>
                {newLinks.map((item, index) => (
                    <Link
                        href={item.url}
                        key={index}
                        className={
                            `join-item hover:bg-primary hover:text-white btn ` +
                            (item.active
                                ? "btn-primary text-white"
                                : "bg-white")
                        }
                    >
                        {item.label}
                    </Link>
                ))}
                <Link
                    href={PrevNext[1].url}
                    className="join-item bg-white hover:btn-primary btn"
                >
                    &raquo;
                </Link>
            </div>
        </div>
    );
};

export default Pagination;
