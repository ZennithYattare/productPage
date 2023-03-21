/** @format */

import React from "react";
import Cart from "./Cart";

// a component using props.rating to display the rating with stars
const Rating = (props) => {
	return (
		<div className="my-auto flex" title={props.rating}>
			{[1, 2, 3, 4, 5].map((rating) => (
				<svg
					key={rating}
					className={`h-3 w-3 ${
						rating <= props.rating
							? "text-yellow-500"
							: "text-gray-300"
					}`}
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						d="M9.5 14.25l-5.584 2.936 1.066-6.218L.465 6.564l6.243-.907L9.5 0l2.792 5.657 6.243.907-4.517 4.404 1.066 6.218"
						clipRule="evenodd"
					/>
				</svg>
			))}
		</div>
	);
};

// if props.title is longer than 26 characters, append ellipses and shorten string to 26 characters
const shortenTitle = (title) => {
	if (title.length > 48) {
		return title.substring(0, 48) + "...";
	} else {
		return title;
	}
};

const Product = (props) => {
	return (
		<div className="max-w-[230px] cursor-pointer p-2 transition hover:shadow-[0px_0px_4px_1px_#a1a1aa]">
			<div>
				<img
					className="mx-auto h-48 w-48 object-contain"
					src={props.thumbnail}
					alt={props.title}
				/>
			</div>
			<div className="h-10 cursor-pointer text-[13px] transition-colors hover:text-[#1a9cb7]">
				{shortenTitle(props.title)}
			</div>
			<div className="text-lg text-[#ee4d2d]">₱{props.price}</div>
			<div className="text-[10px] text-[#757575]">
				{props.discountPercentage}% off
			</div>
			<div className="mt-1 flex text-xs">
				{props.stock} sold
				<span className="mx-2 w-[1px] bg-slate-300"></span>
				<Rating rating={props.rating} />
			</div>
			<div className="">
				<Cart />
			</div>
		</div>
	);
};

export default Product;
