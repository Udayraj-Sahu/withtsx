"use client";
import { useRouter } from "next/router";

export default function OrderProduct() {
	const router = useRouter();
	const handleClick = () => {
		console.log("Order Placed");
		router.push("/");
	};
	return (
		<>
			<h1>Order Product</h1>
			<button onClick={handleClick}>Palce Order</button>
		</>
	);
}
