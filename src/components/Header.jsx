/** @format */

import React from "react";
import cartSVG from "/shopping-cart-icon.svg";

// a responsive search bar component with an svg icon
const SearchBar = () => {
	return (
		<div className="ml-10 mr-4 flex w-full">
			<div className="flex w-full flex-row">
				<input
					className="h-10 w-full border-2 border-gray-300 px-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600"
					type="text"
					placeholder="Search"
				/>
				<button className="h-10 w-10 bg-gray-800 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:ring-opacity-50">
					<svg
						className="m-auto h-5 w-5 text-white"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						></path>
					</svg>
				</button>
			</div>
		</div>
	);
};

// a cart component with an svg icon
const CartIcon = () => {
	return (
		<div className="mr-2 flex">
			<button className="h-10 w-10">
				<img
					src={cartSVG}
					className="m-auto h-8 w-8 text-white"
					alt="cart icon"
				/>
			</button>
		</div>
	);
};

const Header = () => {
	const [count, setCount] = React.useState(0);

	return (
		<header className="mb-12 flex h-20 shadow-[0px_2px_5px_rgba(0,0,0,0.2)]">
			<div
				className="m-auto flex w-[1000px] justify-around align-middle hover:cursor-pointer"
				onClick={() => setCount((count) => count + 1)}
			>
				<div className="ml-2 flex">
					<img
						src="https://zennithyattare.github.io/productPage/vite.svg"
						className="inline-block"
						alt="Vite logo"
					/>
					{count <= 6 ? (
						<span className="ml-2 select-none text-3xl font-semibold">
							Vite
						</span>
					) : (
						<a
							href="https://youtu.be/dQw4w9WgXcQ"
							target={"_blank"}
							className="ml-2 select-none text-3xl font-semibold"
						>
							Vite
						</a>
					)}
				</div>
				<SearchBar />
				<CartIcon />
			</div>
		</header>
	);
};

export default Header;
