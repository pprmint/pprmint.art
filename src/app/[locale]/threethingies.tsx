"use client";
import { Link } from "src/navigation";
import { useTranslations } from "next-intl";

import Image from "next/image";
import ArrowRight from "src/icons/ArrowRight";
import ArrowUpRight from "src/icons/ArrowUpRight";

export default function ThreeThingies() {
	const t = useTranslations("HOME");
	return (
		<section className="relative grid grid-rows-3 lg:grid-rows-1 lg:grid-cols-3 min-h-screen w-screen overflow-clip">
			<Link
				href="/gallery?dimension=2d"
				className="group relative flex p-6 md:p-9 pb-20 size-full lg:items-center lg:justify-center"
			>
				<div className="z-10 lg:text-center">
					<h1>
						{t("Content.TheThreeThingies.Vectors.heading")}
						<span className="text-green">.</span>
					</h1>
					<div className="lg:text-balance lg:w-full">
						<p>{t("Content.TheThreeThingies.Vectors.text1")}</p>
						<p>{t("Content.TheThreeThingies.Vectors.text2")}</p>
					</div>
				</div>
				<div className="z-10 absolute right-9 md:right-12 lg:inset-x-0 flex items-center lg:justify-center gap-3 md:gap-6 bottom-6 md:bottom-9">
					<p className="font-medium text-neutral-50 text-lg md:text-xl lg:text-2xl">
						{t("Content.TheThreeThingies.moreOnGallery")}
					</p>
					<ArrowRight className="size-6 text-green" />
				</div>
				<Image
					src="https://static.pprmint.art/uploads/dark2_80a3e41e9f.png"
					fill
					className="z-0 object-cover saturate-0 opacity-10 group-hover:opacity-20 group-focus-visible:opacity-20 duration-200"
					alt=""
				/>
			</Link>
			<Link
				href="/gallery?dimension=3d"
				className="group relative flex p-6 md:p-9 pb-20 size-full lg:items-center lg:justify-center"
			>
				<div className="z-10 lg:text-center">
					<h1>
						{t("Content.TheThreeThingies.Polygons.heading")}
						<span className="text-blue">.</span>
					</h1>
					<div className="lg:text-balance lg:w-full">
						<p>{t("Content.TheThreeThingies.Polygons.text1")}</p>
						<p>{t("Content.TheThreeThingies.Polygons.text2")}</p>
					</div>
				</div>
				<div className="z-10 absolute right-9 md:right-12 lg:inset-x-0 flex items-center lg:justify-center gap-3 md:gap-6 bottom-6 md:bottom-9">
					<p className="font-medium text-neutral-50 text-lg md:text-xl lg:text-2xl">
						{t("Content.TheThreeThingies.moreOnGallery")}
					</p>
					<ArrowRight className="size-6 text-blue" />
				</div>
				<Image
					src="https://static.pprmint.art/uploads/Crystal_Cave_light_c60ed75104.png"
					fill
					className="z-0 object-cover saturate-0 opacity-10 group-hover:opacity-20 group-focus-visible:opacity-20 duration-200"
					alt=""
				/>
			</Link>
			<Link
				href="https://github.com/pprmint"
				target="_blank"
				rel="noopener noreferrer"
				className="group relative flex p-6 md:p-9 pb-20 size-full lg:items-center lg:justify-center"
			>
				<div className="z-10 lg:text-center">
					<h1>
						{t("Content.TheThreeThingies.Code.heading")}
						<span className="text-red">.</span>
					</h1>
					<div className="text-balance lg:w-full">
						<p>{t.rich("Content.TheThreeThingies.Code.text1", { i: (chunks) => <i>{chunks}</i> })}</p>
						<p>{t("Content.TheThreeThingies.Code.text2")}</p>
					</div>
				</div>
				<div className="z-10 absolute right-9 md:right-12 lg:inset-x-0 flex items-center lg:justify-center gap-3 md:gap-6 bottom-6 md:bottom-9">
					<p className="font-medium text-neutral-50 text-lg md:text-xl lg:text-2xl">
						{t("Content.TheThreeThingies.moreOnGitHub")}
					</p>
					<ArrowUpRight className="size-6 text-red" />
				</div>
				<Image
					src="https://static.pprmint.art/uploads/Zoompaper_aecb0eee13.png"
					fill
					className="z-0 object-cover saturate-0 opacity-10 group-hover:opacity-20 group-focus-visible:opacity-20 duration-200"
					alt=""
				/>
			</Link>
		</section>
	);
}
