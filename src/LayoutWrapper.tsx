import Footer from "components/Footer/Footer";
import NavBar from "components/NavBar/NavBar";
import { Outlet } from "react-router-dom";

const LayoutWrapper = () => {
	return (
		<div>
			<NavBar />
			<Outlet />
			<Footer />
		</div>
	);
};

export default LayoutWrapper;
