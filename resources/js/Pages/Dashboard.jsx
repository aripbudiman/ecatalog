import Sidebar from "../DaisyUi/Sidebar";
import { Link } from "@inertiajs/react";
import App from "@/Layouts/App";
export default function Dashboard(props) {
    console.log(props);
    return (
        <App title="Dashboard">
            <h1>Hello World</h1>
        </App>
    );
}
