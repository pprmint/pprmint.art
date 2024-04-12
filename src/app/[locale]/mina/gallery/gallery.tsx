"use client";
import * as Dialog from "@radix-ui/react-dialog";
import { EyeOff, Globe, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import FadingImage from "src/components/ui/FadingImage";
import { Link } from "src/navigation";
import { MinaArtworks } from "src/types/mina-artwork";

export default function Gallery(artworks: { artworks: MinaArtworks }) {
	const t = useTranslations("MINA");
	const [selectedVariant, setSelectedVariant] = useState(0);

	// Reset to 0 after the lightbox is closed.
	function handleClose() {
		setTimeout(() => {
			setSelectedVariant(0);
		}, 200);
	}
	return (
		<div className="group mb-10 grid md:gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
			{artworks.artworks.data.map((art) => (
				<Dialog.Root key={art.id} onOpenChange={handleClose}>
					<Dialog.Trigger asChild>
						<button
							className="group/button relative overflow-clip md:rounded-lg hover:rounded-lg focus-visible:rounded-lg bg-neutral-950
    							odd:origin-left even:origin-right
    							md:odd:origin-center md:even:origin-center
    							md:[&:nth-child(3n+1)]:origin-left md:[&:nth-child(3n)]:origin-right
    							lg:[&:nth-child(3n+1)]:origin-center lg:[&:nth-child(3n)]:origin-center
    							lg:[&:nth-child(4n+1)]:origin-left lg:[&:nth-child(4n)]:origin-right
    							xl:[&:nth-child(4n+1)]:origin-center xl:[&:nth-child(4n)]:origin-center
    							xl:[&:nth-child(5n+1)]:origin-left xl:[&:nth-child(5n)]:origin-right
    							hover:scale-[1.03] focus-visible:scale-[1.03] active:scale-[1.015] hover:z-10 focus-visible:z-10 justify ring-1 ring-inset ring-neutral-50/10 hover:shadow-2xl hover:shadow-neutral-950/50 focus-visible:shadow-2xl duration-250 ease-out-quart active:duration-75 cursor-pointer aspect-square"
						>
							<FadingImage
								src={`https://static.pprmint.art${art.attributes.artwork.data[0].attributes.url}`}
								width={art.attributes.artwork.data[0].attributes.width}
								height={art.attributes.artwork.data[0].attributes.height}
								alt=""
								className={`h-full min-w-full object-cover ${art.attributes.focus} [.group:hover_&:not(:hover)]:opacity-50 active:opacity-75 duration-250 active:duration-75 ease-out-quint group-focus-visible/button:animate-pulse`}
								unoptimized={art.attributes.artwork.data[0].attributes.url.includes(".gif")}
							/>
							{art.attributes.nsfw && (
								<div className="absolute inset-0 backdrop-blur-lg group-focus-visible/button:backdrop-blur-sm bg-neutral-950/75 group-focus-visible/button:bg-transparent group-hover/button:opacity-0 duration-300 ease-out-quint pointer-events-none">
									<EyeOff
										size={36}
										className="stroke-neutral-50 opacity-75 ri-eye-off-line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
									/>
								</div>
							)}
						</button>
					</Dialog.Trigger>
					<Dialog.Portal>
						<Dialog.Overlay className="bg-neutral-950 data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out fixed inset-0 z-90" />
						<Dialog.Content
							className={`fixed z-100 flex flex-col gap-12 items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-h-svh w-screen max-w-max data-[state=open]:animate-scale-up data-[state=closed]:animate-scale-down origin-top-left overflow-clip duration-200 focus-visible:outline-none`}
						>
							<FadingImage
								src={`https://static.pprmint.art${art.attributes.artwork.data[selectedVariant]?.attributes.url}`}
								width={art.attributes.artwork.data[selectedVariant]?.attributes.width}
								height={art.attributes.artwork.data[selectedVariant]?.attributes.height}
								alt=""
								className="max-h-svh max-w-[90vw] w-auto py-16"
								unoptimized
							/>
							<div className="absolute flex items-center top-0 inset-x-0 h-16 text-xl font-display">
								<div className="flex items-center flex-grow gap-3">
									<Dialog.Title asChild>
										<p>
											{t("Content.Artworks.drawnBy")}
											<span className="font-semibold text-neutral-50">
												{art.attributes.artist.data.attributes.name}
											</span>
											{art.attributes.heart && <span className="text-red"> ♥</span>}
										</p>
									</Dialog.Title>
									{art.attributes.artist.data.attributes.creditUrl && (
										<Link
											href={art.attributes.artist.data.attributes.creditUrl!}
											target="_blank"
											rel="noopener noreferrer"
											className="rounded-full"
										>
											<button
												tabIndex={-1}
												className="text-neutral-50 inline-flex items-center justify-center size-9 rounded-full bg-neutral-50/10 hover:bg-neutral-50/20 duration-100 text-xl"
											>
												{art.attributes.artist.data.attributes.creditUrl!.startsWith(
													"https://twitter.com/"
												) ? (
													<svg
														role="img"
														viewBox="0 0 24 24"
														xmlns="http://www.w3.org/2000/svg"
														className="size-4 fill-neutral-50"
													>
														<path d="M21.543 7.104c.015.211.015.423.015.636 0 6.507-4.954 14.01-14.01 14.01v-.003A13.94 13.94 0 0 1 0 19.539a9.88 9.88 0 0 0 7.287-2.041 4.93 4.93 0 0 1-4.6-3.42 4.916 4.916 0 0 0 2.223-.084A4.926 4.926 0 0 1 .96 9.167v-.062a4.887 4.887 0 0 0 2.235.616A4.928 4.928 0 0 1 1.67 3.148 13.98 13.98 0 0 0 11.82 8.292a4.929 4.929 0 0 1 8.39-4.49 9.868 9.868 0 0 0 3.128-1.196 4.941 4.941 0 0 1-2.165 2.724A9.828 9.828 0 0 0 24 4.555a10.019 10.019 0 0 1-2.457 2.549z" />
													</svg>
												) : art.attributes.artist.data.attributes.creditUrl!.startsWith(
														"https://www.instagram.com/"
												  ) ? (
													<svg
														role="img"
														viewBox="0 0 24 24"
														xmlns="http://www.w3.org/2000/svg"
														className="size-4 fill-neutral-50"
													>
														<path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
													</svg>
												) : art.attributes.artist.data.attributes.creditUrl!.startsWith(
														"https://www.youtube.com/"
												  ) ? (
													<svg
														role="img"
														viewBox="0 0 24 24"
														xmlns="http://www.w3.org/2000/svg"
														className="size-4 fill-neutral-50"
													>
														<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
													</svg>
												) : (
													<Globe size={16} />
												)}
											</button>
										</Link>
									)}
								</div>
								<Dialog.Close asChild>
									<button className="text-neutral-50 inline-flex items-center justify-center size-9 rounded-full bg-neutral-50/10 hover:bg-neutral-50/20 duration-100 text-xl">
										<X />
									</button>
								</Dialog.Close>
							</div>
							{art.attributes.artwork.data.length >= 2 && (
								<div className="absolute flex items-center justify-center bottom-0 inset-x-0 h-16">
									{art.attributes.artwork.data.map((variant, index) => (
										<button
											key={index}
											className={`group h-full ${
												index === selectedVariant ? "w-16" : "w-9"
											} px-2 duration-200 ease-out-quint`}
											onClick={() => setSelectedVariant(index)}
										>
											<div
												className={`h-2 ${
													index === selectedVariant
														? "bg-neutral-50"
														: "bg-neutral-800 group-hover:bg-neutral-700"
												} rounded-full duration-200 ease-out-quint`}
											/>
										</button>
									))}
								</div>
							)}
						</Dialog.Content>
					</Dialog.Portal>
				</Dialog.Root>
			))}
		</div>
	);
}
