import { Route, Routes } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/userContext";
import Header from "../components/Header";
// import Bubbles from "../components/Bubbles";
// import SideNav from "../components/SideNav";
import Home from "./Home";
import Footer from "../components/Footer";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
function Layout() {
	const { token } = useContext(AuthContext);
	console.log("🚀 ~ Layout ~ token:", token);

	return (
		<div className="w-screen min-h-screen overflow-x-hidden  relative">
			<div className="w-full md:w-full lg:w-full h-full z-10">
				<QueryClientProvider client={queryClient}>
					<Routes>
						<Route path="/" element={<Home />} />
					</Routes>
				</QueryClientProvider>
			</div>
			{/* <Footer /> */}
		</div>
	);
}

export default Layout;
