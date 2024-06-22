import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";

function Footer() {
	return (
		<footer className="bg-darckblue">
			<div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8 lg:pt-24">
				<div className="text-center">
					<h2 className="text-3xl font-extrabold text-gray-900 sm:text-5xl">
						keep in controll of every detail
					</h2>

					<p className="mx-auto mt-4 max-w-sm text-gray-500">
						your farm is your business, keep track of every detail and make the
						best decisions for your
					</p>

					<a
						href="#"
						className="mt-8 inline-block rounded-full border border-black-600 px-12 py-3 text-sm font-medium text-black hover:bg-darkerblue hover:text-white focus:outline-none focus:ring active:bg-gray-50 active:text-gray-800 transition duration-300 "
					>
						Get Started
					</a>
				</div>

				<div className="mt-16 border-t border-gray-100 pt-8 sm:flex sm:items-center sm:justify-between lg:mt-24">
					<ul className="flex flex-wrap justify-center gap-4 text-lg lg:justify-end">
						<li>
							<a href="#" className="text-gray-500 transition hover:opacity-75">
								{" "}
								Terms & Conditions{" "}
							</a>
						</li>

						<li>
							<a href="#" className="text-gray-500 transition hover:opacity-75">
								{" "}
								Privacy Policy{" "}
							</a>
						</li>

						<li>
							<a href="#" className="text-gray-500 transition hover:opacity-75">
								{" "}
								Cookies{" "}
							</a>
						</li>
						<li>
							<a
								href="#"
								className="text-gray-500 transition hover:opacity-75 font-honk"
							>
								happy Farm
							</a>
						</li>
					</ul>

					<ul className="mt-8 flex justify-center gap-6 sm:mt-0 lg:justify-end text-slate-200 text-xl">
						<li className="cursor-pointer">
							<a href="#" className="text-xl cursor-pointer hover:text-red-500">
								<FaGithub />
							</a>
						</li>

						<li className="cursor-pointer">
							<a href="#" className="text-xl cursor-pointer hover:text-red-500">
								<FaFacebook />
							</a>
						</li>

						<li className="cursor-pointer">
							<a href="#" className="text-xl cursor-pointer hover:text-red-500">
								<FaInstagram />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
