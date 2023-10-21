import React from "react";
import { usePage } from "@inertiajs/react";
import { Icon } from "@iconify/react";
const Table = () => {
    const { orders } = usePage().props;
    return (
        <div className="overflow-x-auto bg-white mx-5 shadow-sm rounded-md">
            <table className="table">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Tanggal</th>
                        <th>Invoice</th>
                        <th>Payment Method</th>
                        <th>Amount</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, index) => (
                        <tr>
                            <th>{index + 1}</th>
                            <td>{order.trx_date}</td>
                            <td className="underline text-primary cursor-pointer flex items-center gap-x-1">
                                <Icon icon="gg:copy" /> {order.invoice}
                            </td>
                            <td>{order.payment_method}</td>
                            <td>{order.amount}</td>
                            <td>
                                {order.status == "paid" ? (
                                    <div className="badge badge-primary">
                                        Paid
                                    </div>
                                ) : (
                                    <div className="badge badge-secondary">
                                        Unpaid
                                    </div>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
