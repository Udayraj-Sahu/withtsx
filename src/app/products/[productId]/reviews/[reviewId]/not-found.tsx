'use client'

import { usePathname } from "next/navigation";
import path from "path";

export default function NotFound() {
	const pathname = usePathname();
	const productId = pathname.split("/")[2];
	const reviewId = pathname.split("/")[4];

	return <h1>Review {reviewId} of {productId} Not Found</h1>;
}
