import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import logo from "../assets/logo.png";
import auth from "../api/auth";
import stockImg from "../assets/Assets/background.jpg";

function SignUp() {
	const [errors, setErrors] = useState({});
	const [serverError, setServerError] = useState(false);
	const [serverErrorMsg, setServerErrorMsg] = useState("");
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const [form, setForm] = useState({
		name: "",
		email: "",
		password: "",
		passwordConfirmation: "",
	});

	const handleSignupApi = (name, email, password) => {
		auth
			.signup({ name, email, password, role: "doctor" })
			.then((res) => {
				console.log(res);
				setLoading(false);
				// navigate("/signin");
			})
			.catch((err) => {
				console.log(err);
				setServerError(true);
				setServerErrorMsg("Something went wrong!");
				setLoading(false);
			});
	};

	const handleInputChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	useEffect(() => {
		if (isSubmitted) {
			setErrors(validate(form));
		}
	}, [form, isSubmitted]);

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsSubmitted(true);
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 3000);
		const formErrors = validate(form);
		setErrors(formErrors);
		if (!Object.keys(formErrors).length) {
			setLoading(!loading);
			console.log(form);
			handleSignupApi(form.name, form.email, form.password);
			console.log(form);
			navigate("/signin");
		}	
	};

	const validate = (form) => {
		let errors = {};
		if (!form.name) errors.name = "name is required";
		if (!form.email) errors.email = "Email is required";
		else if (!/\S+@\S+\.\S+/.test(form.email))
			errors.email = "Email is invalid";
		if (!form.password) errors.password = "Password is required";
		if (form.password !== form.passwordConfirmation){
			errors.passwordConfirmation = "Passwords must match";
		}
		return errors;
	};

	return (
		<section className="">
			{loading && <Loading />}
			<div className="lg:grid lg:min-h-screen lg:grid-cols-12">
				<section className="relative flex h-32 items-end lg:col-span-5 lg:h-full xl:col-span-6">
					<img
						alt=""
						src={stockImg}
						className="absolute inset-0 h-full w-full object-cover opacity-80"
					/>

					<div className="hidden lg:relative lg:block lg:p-12">
						<span className="block text-white" href="#">
							<img src={logo} alt="farm img" className="w-40" />
						</span>

						<h2 className="mt-6 text-2xl font-bold text-gray-400 sm:text-3xl md:text-4xl">
							Welcome to{" "}
							<span className="font-protest text-black drop-shadow-lg">
								Magdi Yacoub
							</span>
						</h2>
					</div>
				</section>

				<main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6 bg-slate-200">
					<div className="max-w-xl lg:max-w-3xl bg-[#BCFBF3] px-8 py-8 rounded-xl shadow-cyan-700 shadow-2xl">
						<form
							onSubmit={handleSubmit}
							className="mt-8 grid grid-cols-6 gap-6"
						>
							<div className="col-span-6">
								<label
									htmlFor="name"
									className="block text-sm font-medium text-gray-600"
								>
									Name
								</label>

								<input
									type="text"
									id="name"
									name="name"
									placeholder="Name"
									className="p-2 mt-1 w-full rounded-md border-gray-500  border-[1px] bg-darckblue text-sm text-gray-200 placeholder:text-gray-200 shadow-md focus:outline-none"
									onChange={handleInputChange}
								/>
								{isSubmitted && errors.name && (
									<p className="text-red-500 text-xs">{errors.name}</p>
								)}
							</div>

							<div className="col-span-6">
								<label
									htmlFor="Email"
									className="block text-sm font-medium text-gray-600"
								>
									{" "}
									Email{" "}
								</label>

								<input
									type="email"
									id="Email"
									name="email"
									placeholder="Email"
									className="p-2 mt-1 w-full rounded-md border-gray-500  border-[1px] bg-darckblue text-sm text-gray-200 placeholder:text-gray-200 shadow-md focus:outline-none"
									onChange={handleInputChange}
								/>
								{isSubmitted && errors.email && (
									<p className="text-red-500 text-xs">{errors.email}</p>
								)}
							</div>

							<div className="col-span-6 sm:col-span-3">
								<label
									htmlFor="Password"
									className="block text-sm font-medium text-gray-600"
								>
									{" "}
									Password{" "}
								</label>

								<input
									type="password"
									// value={password}
									// onChange={(e) => setPassword(e.target.value)}
									id="Password"
									name="password"
									placeholder="Password"
									className="p-2 mt-1 w-full rounded-md border-gray-500  border-[1px] bg-darckblue text-sm text-gray-200 placeholder:text-gray-200 shadow-md focus:outline-none"
									onChange={handleInputChange}
								/>
								{isSubmitted && errors.password && (
									<p className="text-red-500 text-xs">{errors.password}</p>
								)}
							</div>

							<div className="col-span-6 sm:col-span-3">
								<label
									htmlFor="PasswordConfirmation"
									className="block text-sm font-medium text-gray-600"
								>
									Password Confirmation
								</label>

								<input
									type="password"
									placeholder="Password Confirmation"
									id="PasswordConfirmation"
									name="passwordConfirmation"
									className="p-2 mt-1 w-full rounded-md border-gray-500  border-[1px] bg-darckblue text-sm text-gray-200 placeholder:text-gray-200 shadow-md focus:outline-none "
									onChange={handleInputChange}
								/>
								{isSubmitted && errors.passwordConfirmation && (
									<p className="text-red-500 text-xs">
										{errors.passwordConfirmation}
									</p>
								)}
							</div>

							{/* <div className="col-span-6">
								<label className="block text-sm font-medium text-gray-600">
									Role:
									<select
									className="p-2 mt-1 rounded-md border-gray-500  border-[1px] bg-darckblue text-sm text-gray-300 shadow-md"
                  type="select"
                  name="role"
                  id="role"
                  onChange={handleInputChange}
									>
										<option value="">Select Role</option>
										<option value="farmer">Doctor</option>
										<option value="engineer">Engineer</option>
										<option value="stakeholder">Stakeholder</option>
								</select>
                {isSubmitted && errors.role && <p className="text-red-500 text-xs">{errors.role}</p>}
								</label>
							</div> */}

							<div className="col-span-6">
								<p className="text-sm text-gray-500">
									By creating an account, you agree to our
									<a href="#" className="text-gray-600 underline">
										{" "}
										terms and conditions{" "}
									</a>
									and
									<a href="#" className="text-gray-600 underline">
										privacy policy
									</a>
									.
								</p>
							</div>

							<div className="col-span-6 sm:flex sm:items-center sm:gap-4">
								<button
									onClick={(e) => handleSubmit(e)}
									className="inline-block shrink-0 rounded-md border border-black bg-darckblue px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-black focus:outline-none focus:ring active:text-blue-500"
								>
									Create an account
								</button>
								{/* <Link
									to={"/signin"}
									className="inline-block shrink-0 rounded-md border border-black bg-darckblue px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-black focus:outline-none focus:ring active:text-blue-500"
								>
									Create an account
								</Link> */}
								<p className="mt-4 text-sm text-gray-500 sm:mt-0 flex items-center gap-2">
									Already have an account?
									<Link to={"/signin"} className="text-darkerblue underline">
										Sign In
									</Link>
								</p>
							</div>
							{serverError && (
								<p className="col-span-6 text-red-500 font-protest text-lg border-2 border-red-500 rounded-md w-full text-center">
									{serverErrorMsg}!
								</p>
							)}
						</form>
					</div>
				</main>
			</div>
		</section>
	);
}

export default SignUp;
