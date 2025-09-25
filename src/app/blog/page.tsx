import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
	title: {
		absolute: "Blog",
	},
};
async function Blog() {
	await new Promise((resolve) => {
		setTimeout(() => {
			resolve("Internional Delay");
		}, 2000);
	});
	return <h1>My Blog</h1>;
}

export default Blog;
