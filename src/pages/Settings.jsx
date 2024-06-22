import { useContext } from "react";
import AuthContext from "../context/userContext";

function Settings() {
	const { user } = useContext(AuthContext);
	console.log("🚀 ~ Settings ~ user:", user)



	return (
		<div>
			<h1>Settings</h1>
			<div>
				<h2>Profile</h2>
				<p>Name:</p>
				<p>Email:</p>
			</div>
			<div>
			</div>
		</div>
	);
}

export default Settings;
