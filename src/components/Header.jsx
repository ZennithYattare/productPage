/** @format */

import React from "react";

const Header = () => {
	const [count, setCount] = React.useState(0);

	return (
		<header className="mb-12 flex h-20 shadow-[0px_2px_5px_rgba(0,0,0,0.2)]">
			<div
				className="m-auto flex align-middle hover:cursor-pointer"
				onClick={() => setCount((count) => count + 1)}
			>
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
		</header>
	);
};

export default Header;
