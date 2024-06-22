import { useContext, useEffect, useState, useRef } from "react";
import { FaRegCopy } from "react-icons/fa";
import AuthContext from "../context/userContext";
import { useSnackbar } from "../context/SnackBarContext";
import { Link } from "react-router-dom";
import axios from "axios";
function Header() {
	const [menuOpen, setMenuOpen] = useState(false);
	const { user } = useContext(AuthContext);

	const menuRef = useRef();

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (menuRef.current && !menuRef.current.contains(event.target)) {
				setMenuOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);
	return (
		<header className="max-w-screen w-full px-4 py-8 sm:px-6 sm:py-12 lg:px-8 bg-darkerblue/80 relative z-30">
			<div className="flex flex-row justify-between items-center">
				<div className="flex justify-center items-end gap-2">
					<Link
						to={"/"}
						className="font-protest text-xl font-bold text-green hover:text-black capitalize w-20 md:w-fit sm:text-3xl duration-300"
					>
						elmazr3a elsa3eda
					</Link>
				</div>
				<div className="flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
					<div
						ref={menuRef}
						onClick={() => setMenuOpen(!menuOpen)}
						className="cursor-pointer flex items-center justify-center h-12 w-12 bg-green hover:bg-black group duration-300 rounded-full"
					>
						<span className="text-black text-3xl font-bold capitalize group-hover:text-white">
							{user?.username?.[0]}
						</span>
						{menuOpen && <Menu />}
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;

function Menu() {
	const copyRef = useRef();
	const { openSnackbar } = useSnackbar();
	const { token, setToken } = useContext(AuthContext);

	const handleLogout = () => {
		setToken(null);
		localStorage.clear();
		delete axios.defaults.headers.common["Authorization"];
	};

	const copyToClipboard = () => {
		navigator.clipboard
			.writeText(copyRef.current.innerText)
			.then(() => {
				openSnackbar("ID Copied to Clipboard");
			})
			.catch((err) => {
				console.error("Could not copy text: ", err);
			});
	};

	const { user } = useContext(AuthContext);
	return (
		<div
			className="absolute  top-24 right-6 end-0 z-10 mt-2 rounded-md border border-darkerblue bg-green shadow-lg"
			role="menu"
		>
			<div className="w-full p-4 flex flex-col gap-2">
				<div className="md:hidden w-full flex flex-col justify-center items-start gap-2 text-xl">
					<Link className="pb-1 border-b border-slate-800 w-full" to={"/"}>
						Home
					</Link>
					<Link
						className="pb-1 border-b border-slate-800 w-full"
						to={"/"}
					>
						C
					</Link>
					<Link className="pb-1 border-b border-slate-800 w-full" to={"/crops"}>
						Crops
					</Link>
					<Link
						className="pb-1 border-b border-slate-800 w-full"
						to={"/notifications"}
					>
						Notifications
					</Link>
					<Link to={"/settings"}>Settings</Link>
				</div>
				<p className="w-full flex gap-2 items-center">
					ID: <span ref={copyRef}>{user?._id}</span>
					<span className="bg-darkerblue text-white p-1 rounded hover:bg-white hover:text-darkerblue duration-300">
						<FaRegCopy onClick={copyToClipboard} />
					</span>
				</p>
				<button
					onClick={handleLogout}
					className="text-xl font-normal text-white w-full p-2 rounded bg-darkerblue hover:bg-red-500 duration-300"
				>
					Logout
				</button>
			</div>
		</div>
	);
}
