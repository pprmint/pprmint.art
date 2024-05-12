"use client";
import * as React from "react";
import { useSpring, a } from "@react-spring/web";
import ArrowDown from "src/icons/ArrowDown";

export default function Title(
	props: React.PropsWithChildren<{
		title: string;
		description: string;
		accentColor?: string;
	}>
) {
	const { accentColor = "text-green" } = props;
	return (
		<div
			className={`relative w-screen ${
				props.children ? "h-screen max-h-svh" : "h-60 xl:h-96 mb-20 md:mb-32 xl:mb-40"
			} overflow-hidden`}
		>
			{props.children && (
				<>
					<div className="absolute w-full h-full">{props.children}</div>
					<div className="absolute w-full h-full bg-gradient-to-t from-neutral-950 via-transparent" />
				</>
			)}
			<div className="absolute bottom-0 flex w-full gap-3 p-6 md:p-12 items-end">
				<div className="flex-grow">
					<h1 className="relative font-display font-semibold text-neutral-50 text-4xl md:text-5xl lg:text-6xl xl:text-8xl pb-1 md:pb-3">
						{props.title}
						<span className={accentColor}>.</span>
					</h1>
					<p className="text-neutral text-xl md:text-2xl xl:text-3xl">{props.description}</p>
				</div>
				{props.children && <ArrowDown className={`${accentColor} size-9 animate-arrow-fade-down opacity-0`} />}
			</div>
		</div>
	);
}
