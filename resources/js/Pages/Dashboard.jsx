import App from "@/Layouts/App";
import Navbar from "@/DaisyUi/Navbar";
import Stat from "@/DaisyUi/Stat";

export default function Dashboard(props) {
    return (
        <App title="Dashboard">
            <Navbar></Navbar>
            <div className="p-5">
                <Stat />
            </div>
        </App>
    );
}
