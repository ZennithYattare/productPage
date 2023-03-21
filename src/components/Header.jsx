/** @format */

import React from "react";

const Header = () => {
	return (
		<header className="mb-12 flex h-20 shadow-[0px_2px_5px_rgba(0,0,0,0.2)]">
			<div
				className="m-auto flex align-middle hover:cursor-pointer"
				onClick={() => console.log("I was clicked")}
			>
				<img src="/vite.svg" className="inline-block" alt="Vite logo" />
				<span className="ml-2 select-none text-3xl font-semibold">
					Vite
				</span>
			</div>
		</header>
	);
};

export default Header;
