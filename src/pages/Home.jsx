import { useContext, useState } from "react";
import AuthContext from "../context/userContext";

function Home() {
	const { user } = useContext(AuthContext);
	console.log("🚀 ~ Home ~ user:", user)

	const [IsLoading, setIsLoading] = useState(false);
	console.log("🚀 ~ Home ~ setIsLoading:", setIsLoading)

	console.log("🚀 ~ Home ~ IsLoading:", IsLoading)


	return (
		<div
			className={`grid grid-cols-1 gap-4 justify-items-center align-items-center`}
		>
		</div>
	);
}

export default Home;
