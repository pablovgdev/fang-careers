import Document, { Head, Html, Main, NextScript } from "next/document";


export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<script async src="https://www.googletagmanager.com/gtag/js?id=G-FL0T5CM901"></script>
					<script async src="/ga.js" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}