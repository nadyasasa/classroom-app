import { Routes, Route } from "react-router-dom";
import DashboardRoom from "./pages/admin/dashboard-roomlist.jsx";
import DashboardBooking from "./pages/admin/dashboard-booking.jsx";
import AddBooking from "./pages/user/addbooking.jsx";
import "./index.css";

function App() {
	return (
		<>
			<Routes>
				<Route path="admin/dashboardroom" caseSensitive={false} element={<DashboardRoom />} />
				<Route path="admin/dashboardbooking" caseSensitive={false} element={<DashboardBooking />} />
				<Route path="user/addbooking" caseSensitive={false} element={<AddBooking />}/>
			</Routes>
		</>
	);
}

export default App;
