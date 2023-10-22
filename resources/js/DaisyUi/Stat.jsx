import React, { useContext } from "react";
import { usePage } from "@inertiajs/react";
import { Context, Provider } from "@/Pages/MyContext";
const Stat = () => {
    const { formattedFirstDay, formattedLastDay } = useContext(Context);
    const props = usePage().props;
    return (
        <div className="stats stats-vertical lg:stats-horizontal shadow">
            <div className="stat">
                <div className="stat-title">Total Order</div>
                <div className="stat-value">{props.totalOrder}</div>
                <div className="stat-desc">
                    {formattedFirstDay} - {formattedLastDay}
                </div>
            </div>

            <div className="stat">
                <div className="stat-title">Total Omset</div>
                <div className="stat-value">
                    {parseFloat(props.totalOmset).toLocaleString("id-ID")}
                </div>
                <div className="stat-desc">↗︎ 400 (22%)</div>
            </div>

            <div className="stat">
                <div className="stat-title">Profit</div>
                <div className="stat-value">1,200</div>
                <div className="stat-desc">↘︎ 90 (14%)</div>
            </div>
        </div>
    );
};

export default Stat;
