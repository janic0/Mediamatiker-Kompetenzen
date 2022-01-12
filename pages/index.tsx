import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import data, { node } from "../data";

export interface tileProps extends node {
	copyMode: boolean;
}

function Tile(props: tileProps) {
	const [opened, setOpened] = useState(false);
	const [copied, setCopied] = useState(false);
	useEffect(() => {
		if (copied) {
			setTimeout(() => {
				setCopied(false);
			}, 1000);
		}
	}, [copied]);
	return (
		<div>
			<div
				className="flex bg-slate-300 dark:bg-slate-600 rounded p-4 cursor-pointer justify-between items-center"
				onClick={() => setOpened(!opened)}
			>
				<h1
					title={props.copyMode ? "Click to copy" : props.title}
					className=""
					onClick={(e) => {
						if (props.copyMode) {
							if ((document.body as any).createTextRange) {
								const range = (document.body as any).createTextRange();
								range.moveToElementText(e.target);
								range.select();
								setCopied(true);
							} else if (window.getSelection) {
								const selection = window.getSelection();
								const range = document.createRange();
								range.selectNodeContents(e.target as any);
								setCopied(true);
								if (selection) {
									selection.removeAllRanges();
									selection.addRange(range);
								}
							}
							navigator.clipboard.writeText(props.title);
						}
					}}
				>
					{props.title}
				</h1>
				{props.children ? (
					<span className="chevron w-4 h-4 transition-transform" style={{ transform: opened ? "rotate(90deg)" : "rotate(0deg)" }}></span>
				) : null}
			</div>
			<div
				className="clear-both overflow-hidden transition-transform"
				style={{
					height: opened ? "auto" : "0px",
					transform: opened ? "scaleY(1)" : "scaleY(0)",
				}}
			>
				{props.children ? (
					<div className="mt-5 ml-4 md:ml-12 flex flex-col gap-4">
						{props.children.map((cld, i) => (
							<Tile
								key={i}
								title={cld.title}
								children={cld.children}
								copyMode={props.copyMode}
							/>
						))}
					</div>
				) : null}
			</div>
		</div>
	);
}

function App(props: { data: node[] }) {
	const [copyMode, setCopyMode] = useState(false);
	return (
		<>
			<Head>
				<title>Mediamatiker-Kompetenzen</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta name="description" content="Liste der Kompetenzen eines Mediamatikers in EFZ in der Schweiz" />
				<meta name="theme-color" content="#1E2933" />
				<link rel="icon" href="/favicon.ico" />
				<script src="https://kit.fontawesome.com/8d8c0ed3fe.js" crossOrigin="anonymous"></script>
			</Head>
			<div className="dark:text-white dark:bg-slate-800 bg-white">
				<header className="w-full mt-20">
					<h1 className="text-xl md:text-3xl text-center">
						Mediamatiker-Kompetenzen
					</h1>
					<div className="w-full h-full flex justify-center p-12">
						<div className="w-full h-full md:w-1/2 flex flex-col gap-8">
							{/* copy mode */}
							<div className="flex gap-4 items-center">
								<h1>Copy Elements on Click</h1>
								<div
									className={
										"cursor-pointer mt-0 relative rounded-full w-12 h-6 transition duration-200 ease-linear " +
										(copyMode ? "bg-green-400" : "bg-gray-400")
									}
								>
									<label
										htmlFor="toggle"
										className={
											"absolute left-0 bg-white border-2 mb-2 w-6 h-6 rounded-full transition transform duration-100 ease-linear cursor-pointer " +
											(copyMode
												? "translate-x-full border-green-400"
												: "translate-x-0 border-gray-400")
										}
									/>
									<input
										type="checkbox"
										id="toggle"
										name="toggle"
										className="appearance-none w-full h-full active:outline-none focus:outline-none"
										onClick={() => setCopyMode(!copyMode)}
									/>
								</div>
							</div>
							{/* copy mode */}
							{props.data.map((elem, i) => (
								<Tile
									key={i}
									title={elem.title}
									children={elem.children}
									copyMode={copyMode}
								/>
							))}
						</div>
					</div>
				</header>
				<footer className="sticky top-0 w-full mb-4">
					<p className="text-center">
						This page does not collect any user data.{" "}
						<a
							target="_blank"
							rel="noopener noreferrer"
							className="text-blue-700 dark:text-blue-300"
							href="https://github.com/janic0/Mediamatiker-Kompetenzen"
						>
							View Source
						</a>
					</p>
				</footer>
			</div>
		</>
	);
}

export default App;

export const getStaticProps: GetStaticProps = async () => {
	return {
		props: {
			data: data,
		},
	};
};
