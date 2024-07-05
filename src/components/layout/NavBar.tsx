"use client";
import { useLocale } from "next-intl";
import Image from "next/image";
import { Link, usePathname, locales } from "src/navigation";

import DesktopNavigation from "./navigation/Desktop";
import MobileNavigation from "./navigation/Mobile";

import Wordmark from "public/assets/wordmark.svg";
import { useEffect, useState } from "react";
import { useTransition, a } from "@react-spring/web";

export default function NavBar() {
	const pathname = usePathname();
	const currentLocale = useLocale();
	const otherLocale = locales?.find((cur) => cur !== currentLocale);

	return (
		<div
			className="z-90 fixed h-16 pl-6 md:pl-9 pr-2 md:pr-5 top-0 left-0 right-0 bg-neutral-950 border-b border-b-neutral-900 flex items-center justify-between duration-300"
		>
			<Link href="/" className="z-80 my-auto drop-shadow-[0px_2px_12px_#1118]">
				<Image src={Wordmark} alt="pprmint. logo" className="h-auto w-[150px] mt-1 duration-250" />
			</Link>
			<div className="hidden z-80 md:flex">
				<DesktopNavigation />
			</div>
			<div className="block z-80 md:hidden">
				<MobileNavigation />
			</div>
			<div className="hidden md:inline-flex justify-end z-70 w-[150px] duration-250">
				<Link
					href={pathname}
					locale={otherLocale}
					scroll={false}
					className="inline-flex p-0.5 hover:bg-neutral-50/10 active:opacity-75 rounded-full border border-neutral-50/10 duration-100 active:duration-75"
				>
					{locales.map((locale, _) => (
						<span
							key={locale}
							className={`text-sm py-0.5 w-9 text-center uppercase ${
								currentLocale === locale
									? "bg-gradient-to-b from-neutral-50 to-neutral-100 text-neutral-950 shadow-sm"
									: "text-neutral-50/80"
							} rounded-full`}
						>
							{locale}
						</span>
					))}
				</Link>
			</div>
		</div>
	);
}
