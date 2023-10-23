import React, { useContext } from "react";
import { usePage } from "@inertiajs/react";
import { Context, Provider } from "@/Pages/MyContext";
const Stat = () => {
    const { formattedFirstDay, formattedLastDay } = useContext(Context);
    const props = usePage().props;
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="stats shadow">
                <div className="stat">
                    <div className="stat-title">Total Order</div>
                    <div className="stat-value">{props.totalOrder}</div>
                    <div className="stat-desc">
                        {formattedFirstDay} - {formattedLastDay}
                    </div>
                </div>
            </div>
            <div className="stats shadow">
                <div className="stat">
                    <div className="stat-title">Total Omset</div>
                    <div className="stat-value">
                        {parseFloat(props.totalOmset).toLocaleString("id-ID")}
                    </div>
                    <div className="stat-desc">
                        {formattedFirstDay} - {formattedLastDay}
                    </div>
                </div>
            </div>
            <div className="stats shadow">
                <div className="stat">
                    <div className="stat-title">Total Omset</div>
                    <div className="stat-value">
                        {parseFloat(props.totalOmset).toLocaleString("id-ID")}
                    </div>
                    <div className="stat-desc">
                        {formattedFirstDay} - {formattedLastDay}
                    </div>
                </div>
            </div>
            <div className="stats shadow">
                <div className="stat">
                    <div className="stat-title">Total Omset</div>
                    <div className="stat-value">
                        {parseFloat(props.totalOmset).toLocaleString("id-ID")}
                    </div>
                    <div className="stat-desc">
                        {formattedFirstDay} - {formattedLastDay}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stat;
