import App from "@/Layouts/App";
import Navbar from "@/DaisyUi/Navbar";
import Stat from "@/DaisyUi/Stat";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

export default function Dashboard(props) {
    console.log(props);
    ChartJS.register(ArcElement, Tooltip, Legend);
    const data = {
        labels: [0, 0],
        datasets: [
            {
                data: [0, 0],
                backgroundColor: ["#570df8", "#f000b8"],
                hoverBackgroundColor: ["#570df8", "#f000b8"],
            },
        ],
    };
    return (
        <App title="Dashboard">
            <Navbar></Navbar>
            <div className="p-5 grid grid-cols-1 lg:grid-cols-3 gap-x-5 w-full">
                <div className="col-span-2">
                    <Stat />
                </div>
                <div className="bg-white w-full flex justify-center rounded-xl shadow-md my-5 lg:my-0  py-2">
                    {data && <Doughnut data={data} />}
                </div>
            </div>
        </App>
    );
}
