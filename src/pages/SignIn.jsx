import AuthContext from "../context/userContext";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import logo from "../assets/logo.png";
import stockImg from "../assets/Assets/background.jpg";
import auth from "../api/auth";

function SignIn() {
	const [loading, setLoading] = useState(false);
	const { setToken, setUser} = useContext(AuthContext);
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState(null);
	const navigate = useNavigate();

	const handleLogin = (token, user) => {
		setToken(token);
		localStorage.setItem("token", token);
		localStorage.setItem("user", JSON.stringify(user));
		// navigate("/");
	};

	useEffect(() => {
		const tokenFromStorage = localStorage.getItem("token");
		const userFromStorage = localStorage.getItem("user");
		if (tokenFromStorage) {
			setToken(tokenFromStorage);
			setUser(JSON.parse(userFromStorage));
			navigate("/");
		}
	}, []);

	const handleSignIn = (data) => {
		auth
			.login(data)
			.then((res) => {
				console.log("🚀 ~ .then ~ res:", res)
				setToken(res.data.token);
				setUser({name:res.data.name,id:res.data.userId,role:res.data.role});
				handleLogin(res.data.token, {name:res.data.name,id:res.data.userId,role:res.data.role});
			})
			.catch((err) => {
				setLoading(false);
				console.log(err);
				setError(err.response.data);
			});
	};

	const handleSubmit = (e) => {
		setLoading(true);
		e.preventDefault();
		handleSignIn(data);
	};

	return (
		<section className="bg-white">
			<div className="lg:grid lg:min-h-screen lg:grid-cols-12">
				<section className="relative flex h-32 items-end  bg-[url(src/assets/Assets/background.jpg)] bg-no-repeat bg-cover lg:col-span-5 lg:h-full xl:col-span-6">
					<img
						alt=""
						src={stockImg}
						className="absolute inset-0 h-full w-full object-cover opacity-80"
					/>

					<div className="hidden lg:relative lg:block lg:p-12">
						<span className="block text-white" href="#">
							<img src={logo} alt="magdy yacoub img" className="w-40" />
						</span>

						<h2 className="mt-6 text-2xl font-bold text-gray-400 sm:text-3xl md:text-4xl">
							Welcome to{" "}
							<span className="font-protest text-black drop-shadow-lg">
								Magdi Yacoub
							</span>
						</h2>
					</div>
				</section>

				<div className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6 bg-slate-200">
					<div className="max-w-xl lg:max-w-3xl bg-[#BCFBF3] px-8 py-8 rounded-xl shadow-cyan-700 shadow-2xl">
						<h1 className="text-center text-2xl font-bold text-gray-700 sm:text-3xl">
							Sign in to your account
						</h1>
						<form
							onSubmit={handleSubmit}
							className="mb-0 mt-6 space-y-4 rounded-lg p-4 sm:p-6 lg:p-8"
						>
							<div>
								<label htmlFor="email" className="sr-only">
									email
								</label>

								<div className="relative">
									<input
										value={data.email}
										onChange={(e) =>
											setData({ ...data, email: e.target.value })
										}
										type="email"
										className="w-full rounded-lg text-slate-300 bg-darckblue p-4 pe-12 text-sm shadow-sm focus:outline-none"
										placeholder="Enter email"
									/>
								</div>
							</div>

							<div>
								<label htmlFor="password" className="sr-only">
									Password
								</label>

								<div className="relative">
									<input
										value={data.password}
										onChange={(e) =>
											setData({ ...data, password: e.target.value })
										}
										type="password"
										className="w-full rounded-lg text-slate-300 bg-darckblue focus:outline-none p-4 pe-12 text-sm shadow-sm"
										placeholder="Enter password"
									/>
								</div>
							</div>

							<button
								type="submit"
								className="block w-full rounded-lg bg-darckblue px-5 py-3 text-sm font-medium text-white"
							>
								Sign in
							</button>

							{error && (
								<p className="text-red-500 text-lg font-protest p-2 rounded-md border border-red-500 text-center mx-auto w-full">
									{error.message}
								</p>
							)}

							{loading && <Loading />}
							<p className="text-center text-sm text-gray-500 flex gap-2 justify-center items-center">
								No account?
								<Link to="/signup" className="underline text-gray-700">
									Sign up
								</Link>
							</p>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}

export default SignIn;
