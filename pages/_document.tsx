import Document, { Head, Html, Main, NextScript } from "next/document";


export default class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					{/* Global Site Tag (gtag.js) - Google Analytics */}
					<script async src="https://www.googletagmanager.com/gtag/js?id=G-FL0T5CM901"></script>
					<script dangerouslySetInnerHTML={{
						__html: `
							window.dataLayer = window.dataLayer || [];
  						function gtag() {
								dataLayer.push(arguments);
							}
  						gtag('js', new Date());
  						gtag('config', 'G-FL0T5CM901');
          	`
					}}
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}