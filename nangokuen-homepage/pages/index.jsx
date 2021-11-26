import Head from "next/head";

export default function Home() {
	return (
		<div className="container">
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<div className="title-components">
					<img className="title-image" src="./image_01.png" alt="title-image" />
					<div className="title-text">
						<h1 className="title">南国園</h1>
						<a className="title">お花を作る農家さん</a>
					</div>
				</div>
				<div className="intro-components">
					<p>From CHIKUMA</p>
					<h2>
						長野の北部で<br></br>スターチスを作っています
					</h2>
					<p>
						南国園は、千曲川の近くのビニールハウスでスターチス・ダリア・クレマチスなどを栽培して、東京や大阪の市場に発送しています。特に、南国園独自のメリクロン栽培によるオリジナリティあるスターチスは、市場でも高い評価をいただいております。また秋には、ハロウィンに合わせて装飾用のトウガラシを栽培・発送しております。
					</p>
					<img className="" src="./image_02.png" alt="intro-image" />
				</div>

				{/* <div className="grid">
					<a href="https://nextjs.org/docs" className="card">
						<h3>Documentation &rarr;</h3>
						<p>Find in-depth information about Next.js features and API.</p>
					</a>

					<a href="https://nextjs.org/learn" className="card">
						<h3>Learn &rarr;</h3>
						<p>Learn about Next.js in an interactive course with quizzes!</p>
					</a>

					<a
						href="https://github.com/vercel/next.js/tree/master/examples"
						className="card"
					>
						<h3>Examples &rarr;</h3>
						<p>Discover and deploy boilerplate example Next.js projects.</p>
					</a>

					<a
						href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
						className="card"
					>
						<h3>Deploy &rarr;</h3>
						<p>
							Instantly deploy your Next.js site to a public URL with Vercel.
						</p>
					</a>
				</div> */}
			</main>

			<footer>
				{/* <a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by <img src="/vercel.svg" alt="Vercel" className="logo" />
				</a> */}
			</footer>

			<style jsx>{`
				.container {
					// min-height: 100vh;
					// padding: 0 0.5rem;
					// display: flex;
					// flex-direction: column;
					// justify-content: center;
					// align-items: center;
				}

				main {
					padding: 5rem 0;
					// flex: 1;
					// display: flex;
					// flex-direction: column;
					// justify-content: center;
					// align-items: center;
				}

				.title-components {
					display: flex;
					justify-content: space-between;
				}

				.title-text {
					display: flex;
					margin: 0;
					padding-right: 10rem;
					line-height: 1.15;
				}

				.title-text h1 {
					font-size: 4rem;
					margin: 0;
				}

				title-text a {
					font-size: 1rem;
				}

				.title {
					-webkit-writing-mode: vertical-rl;
					-moz-writing-mode: vertical-rl;
					-o-writing-mode: vertical-rl;
					writing-mode: vertical-rl;
					-ms-writing-mode: vertical-rl;
					-ms-writing-mode: tb-rl;
				}
				.title-image {
					height: 100vh;
					width: 70vw;
				}

				// .title,
				// .description {
				// 	text-align: center;
				// }

				// footer {
				// 	width: 100%;
				// 	height: 100px;
				// 	border-top: 1px solid #eaeaea;
				// 	display: flex;
				// 	justify-content: center;
				// 	align-items: center;
				// }

				// footer img {
				// 	margin-left: 0.5rem;
				// }

				// footer a {
				// 	display: flex;
				// 	justify-content: center;
				// 	align-items: center;
				// }

				a {
					color: inherit;
					text-decoration: none;
				}

				.title a {
					font-size: 1rem;
				}

				.br_::after {
					content: "\A";
					white-space: pre;
				}

				// .title a:hover,
				// .title a:focus,
				// .title a:active {
				// 	text-decoration: underline;
				// }

				// .description {
				// 	line-height: 1.5;
				// 	font-size: 1.5rem;
				// }

				code {
					background: #fafafa;
					border-radius: 5px;
					padding: 0.75rem;
					font-size: 1.1rem;
					font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
						DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
				}

				.grid {
					display: flex;
					align-items: center;
					justify-content: center;
					flex-wrap: wrap;

					max-width: 800px;
					margin-top: 3rem;
				}

				.card {
					margin: 1rem;
					flex-basis: 45%;
					padding: 1.5rem;
					text-align: left;
					color: inherit;
					text-decoration: none;
					border: 1px solid #eaeaea;
					border-radius: 10px;
					transition: color 0.15s ease, border-color 0.15s ease;
				}

				.card:hover,
				.card:focus,
				.card:active {
					color: #0070f3;
					border-color: #0070f3;
				}

				.card h3 {
					margin: 0 0 1rem 0;
					font-size: 1.5rem;
				}

				.card p {
					margin: 0;
					font-size: 1.25rem;
					line-height: 1.5;
				}

				.logo {
					height: 1em;
				}

				@media (max-width: 600px) {
					.grid {
						width: 100%;
						flex-direction: column;
					}
				}
			`}</style>

			<style jsx global>{`
				html,
				body {
					padding: 0;
					margin: 0;
					font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
						Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
						sans-serif;
				}

				* {
					box-sizing: border-box;
				}
			`}</style>
		</div>
	);
}
