/** @format */

import "./App.css";
import Header from "./components/Header";
import Product from "./components/Product";
import productData from "./data";

function App() {
	const productElements = productData.map((product) => (
		<Product key={product.id} {...product} />
	));

	return (
		<div className="App">
			<Header />
			<div className="mx-3">
				<section className="mx-auto max-w-[1000px] ">
					<div className="mb-6 bg-[#f8f8f8] py-12 px-2 text-center shadow-md sm:px-0">
						<h2 className="text-2xl">Products</h2>
						<p>
							Discover the perfect solution for your needs with
							our top-quality products.
						</p>
					</div>

					<div className="grid max-w-[1000px] grid-cols-2 gap-x-4 gap-y-8 border-t-[1px] border-t-[#f1f1f1] px-3 pt-6 sm:grid-cols-3 xs:grid-cols-4">
						{productElements}
					</div>
				</section>
			</div>
		</div>
	);
}

export default App;
