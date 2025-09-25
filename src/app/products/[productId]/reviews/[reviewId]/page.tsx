import React from "react";
import { redirect } from "next/navigation";

function getRandomInt(max: number) {
	return Math.floor(Math.random() * max);
}

async function Review({
	params,
}: {
	params: Promise<{ productId: string; reviewId: string }>;
}) {
	const random = getRandomInt(2);
	if (random === 1) {
		throw new Error("Something went wrong");
	}
	const { reviewId, productId } = await params;
	if (parseInt(reviewId) > 1000) {
		// notFound()
		return redirect("/products");
	}
	return (
		<h1>
			ProductId : {productId} <br />
			Review of : {reviewId}
		</h1>
	);
}

export default Review;
