import NavBar from "components/NavBar/NavBar";
import { Outlet } from "react-router-dom";

const LayoutWrapper = () => {
	return (
		<div>
			<NavBar />
			<Outlet />
		</div>
	);
};

export default LayoutWrapper;
