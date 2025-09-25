//Server Side Compnonents
import Link from "next/link";

export default async function NewsArticles({
	params,
	searchParams,
}: {
	params: Promise<{ articleId: string }>;
	searchParams: Promise<{ lang?: "en" | "fr" | "es" }>;
}) {
	const { articleId } = await params;
	const { lang } = await searchParams;
	return (
		<>
			<h1>News articles {articleId}</h1>
			<p>Reading in {lang}</p>

			<div>
				<Link href={`/articles/${articleId}?lang=en`}>English</Link>
				<Link href={`/articles/${articleId}?lang=fr`}>French</Link>
				<Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
			</div>
		</>
	);
}

// CLient side server components
//'use client'
// import Link from "next/link";

// export default async function NewsArticles({
// 	params,
// 	searchParams,
// }: {
// 	params: Promise<{ articleId: string }>;
// 	searchParams: Promise<{ lang?: "en" | "fr" | "es" }>;
// }) {
// 	const { articleId } = use(params);
// 	const { lang } = use(searchParams);
// 	return (
// 		<>
// 			<h1>News articles {articleId}</h1>
// 			<p>Reading in {lang}</p>

// 			<div>
// 				<Link href={`/articles/${articleId}?lang=en`}>English</Link>
// 				<Link href={`/articles/${articleId}?lang=fr`}>French</Link>
// 				<Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
// 			</div>
// 		</>
// 	);
// }
