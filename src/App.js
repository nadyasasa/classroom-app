import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard.jsx";
import UserBook from "./pages/UserBook.jsx";
import "./index.css";

function App() {
	return (
		<>
			<Routes>
				<Route path="/dashboard" caseSensitive={false} element={<Dashboard />} />
				<Route path="/UserBook" caseSensitive={false} element={<UserBook />}/>
			</Routes>
		</>
	);
}

export default App;
