"use client";
import { ReactNode, useEffect, useRef, useState } from "react";
import { Link } from "src/navigation";
import { useTranslations } from "next-intl";
import * as Dialog from "@radix-ui/react-dialog";
import * as Toast from "@radix-ui/react-toast";
import FadingImage from "src/components/ui/FadingImage";
import { config, useTransition, a } from "@react-spring/web";

import ReferenceFront from "public/assets/mina/ref/front.webp";
import ReferenceBack from "public/assets/mina/ref/back.webp";
import ReferenceHand from "public/assets/mina/ref/hand.webp";
import ReferenceShoes from "public/assets/mina/ref/shoes.webp";
import ReferenceHairbowFront from "public/assets/mina/ref/head_front.svg";
import ReferenceHairbowBack from "public/assets/mina/ref/head_back.svg";

import Button from "src/components/ui/Button";

import { X } from "lucide-react";

function ColorPickerToast(props: {
	color: string;
	open: boolean;
	onOpenChange: ((open: boolean) => void) | undefined;
}) {
	const t = useTranslations("COMMON");
	return (
		<Toast.Provider swipeDirection="right" duration={3000}>
			<Toast.Root
				className="flex gap-5 items-center p-3 rounded-xl shadow-lg shadow-neutral-950/50 backdrop-blur-xl backdrop-brightness-[40%] backdrop-contrast-[77.5%] border border-neutral-950 ring-1 ring-inset ring-neutral-50/10 data-[state=open]:animate-toast-slide-in data-[state=closed]:animate-fade-out-scale-down data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out] data-[swipe=end]:animate-toast-slide-out"
				open={props.open}
				onOpenChange={props.onOpenChange}
			>
				<div
					className="w-[30px] h-[30px] rounded-full border border-neutral-50/10"
					style={{ backgroundColor: props.color }}
				/>
				<Toast.Description>{t("copied")}</Toast.Description>
				<Toast.Close className="hover:bg-neutral-50/10 active:bg-neutral-50/5 rounded-full duration-100 active:duration-75">
					<i className="ri-close-line text-neutral-50 p-1" />
				</Toast.Close>
			</Toast.Root>
			<Toast.Viewport className="[--viewport-padding:_25px] fixed bottom-0 right-0 p-[var(--viewport-padding)] flex flex-col w-max z-[9999] outline-none" />
		</Toast.Provider>
	);
}

function CyclingFrontBackRef() {
	// Cycle between front and back full-body drawing.
	const [showBack, setShowBack] = useState(false);
	useEffect(() => {
		//Implementing the setInterval method
		const interval = setInterval(() => {
			setShowBack(!showBack);
		}, 5000);

		//Clearing the interval
		return () => clearInterval(interval);
	}, [showBack]);

	const cycleTransition = useTransition(showBack, {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
		config: config.stiff,
		exitBeforeEnter: true,
	});

	return cycleTransition((styles, item) =>
		item ? (
			<a.div className="h-full w-fit object-contain" style={styles}>
				<FadingImage
					src={ReferenceBack}
					alt="Drawing of a hand with a rectangular ring, spanning across the ring and middle finger."
					className="h-full max-h-[90vh] object-contain"
				/>
			</a.div>
		) : (
			<a.div className="h-full w-fit object-contain" style={styles}>
				<FadingImage
					src={ReferenceFront}
					alt="Drawing of a hand with a rectangular ring, spanning across the ring and middle finger."
					className="h-full max-h-[90vh] object-contain"
				/>
			</a.div>
		)
	);
}

export default function RefSheet() {
	const t = useTranslations("MINA");

	// Toasts for copying palette colors.
	const [toastOpen, setToastOpen] = useState(false);
	const timerRef = useRef(0);
	const [currentColor, setCurrentColor] = useState("");

	function ColorSwatch({ color, ring }: { color: string; ring?: boolean }) {
		function handleClick() {
			navigator.clipboard.writeText(color.substring(1));
			setToastOpen(false);
			window.clearTimeout(timerRef.current);
			timerRef.current = window.setTimeout(() => {
				setCurrentColor(color);
				setToastOpen(true);
			}, 100);
		}
		return (
			<div
				className={`active:scale-95 size-12 rounded-full duration-150 ease-out cursor-pointer ${
					ring && "ring-1 ring-neutral-800"
				}`}
				style={{ backgroundColor: color }}
				onClick={handleClick}
			/>
		);
	}

	// Detail cards.
	function InfoDialog({
		title,
		description,
		reference,
		col,
	}: {
		title: string;
		description: ReactNode;
		reference: ReactNode;
		col?: boolean;
	}) {
		return (
			<Dialog.Portal>
				<Dialog.Overlay className="bg-neutral-950/90 data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out fixed inset-0 z-50" />
				<Dialog.Content
					className={`fixed z-[9999] flex flex-col ${
						!col && "xl:flex-row"
					} gap-12 items-center top-1/2 left-1/2 max-h-[90vh] w-full max-w-5xl -translate-x-1/2 -translate-y-1/2 p-3 md:p-6 xl:p-9 bg-neutral-950 border border-neutral-900 ring-1 ring-neutral-950 shadow-xl shadow-neutral-950/50 rounded-xl data-[state=open]:animate-scale-up data-[state=closed]:animate-scale-down focus:outline-none origin-top-left overflow-clip`}
				>
					{reference}
					<div>
						<Dialog.Title asChild>
							<h2>
								{title}
								<span className="text-green">.</span>
							</h2>
						</Dialog.Title>
						<Dialog.Description>{description}</Dialog.Description>
					</div>
					<Dialog.Close asChild>
						<button
							className="absolute inline-flex items-center justify-center top-3 md:top-5 right-3 md:right-5 size-10 rounded-full text-neutral-50 hover:bg-neutral-800 duration-100"
							aria-label="Close"
						>
							<X />
						</button>
					</Dialog.Close>
				</Dialog.Content>
			</Dialog.Portal>
		);
	}

	return (
		<section id="design" className="my-20 max-w-7xl mx-auto px-2">
			<div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 grid-rows-4 md:grid-rows-3 xl:grid-rows-2 grid-flow-dense gap-3 md:max-h-[800px]">
				<Dialog.Root>
					<Dialog.Trigger asChild>
						<div
							id="hand"
							className="flex items-center justify-center bg-neutral-900 border border-neutral-800 hover:ring-2 ring-neutral-800 duration-100 rounded-xl p-6 cursor-pointer"
						>
							<FadingImage
								src={ReferenceHand}
								className="w-auto max-h-full object-contain"
								alt="Drawing of a hand with a rectangular ring, spanning across the ring and middle finger."
							/>
						</div>
					</Dialog.Trigger>
					<InfoDialog
						title={t("Content.Reference.Rings.heading")}
						description={
							<>
								<p>{t("Content.Reference.Rings.text1")}</p>
								<p>{t("Content.Reference.Rings.text2")}</p>
								<p>{t("Content.Reference.Rings.text3")}</p>
							</>
						}
						reference={
							<FadingImage
								src={ReferenceHand}
								alt="Drawing of a hand with a rectangular ring, spanning across the ring and middle finger."
								className="w-2/3 h-auto object-contain"
							/>
						}
					/>
				</Dialog.Root>
				<Dialog.Root>
					<Dialog.Trigger asChild>
						<div
							id="front"
							className="flex items-center justify-center bg-neutral-900 border border-neutral-800 hover:ring-2 ring-neutral-800 duration-100 rounded-xl row-span-2 p-3 cursor-pointer"
						>
							<FadingImage
								src={ReferenceFront}
								className="w-auto max-h-full object-contain"
								alt="Full-body drawing of Mina doing a peace sign, front perspective."
								priority
							/>
						</div>
					</Dialog.Trigger>
					<Dialog.Trigger asChild>
						<div
							id="back"
							className="flex items-center justify-center bg-neutral-900 border border-neutral-800 hover:ring-2 ring-neutral-800 duration-100 rounded-xl row-span-2 p-3 cursor-pointer"
						>
							<FadingImage
								src={ReferenceBack}
								className="w-auto max-h-full object-contain"
								alt="Full-body drawing of Mina doing a peace sign, back perspective."
								priority
							/>
						</div>
					</Dialog.Trigger>
					<InfoDialog
						title={t("Content.Reference.Outfit.heading")}
						description={
							<>
								<p>{t("Content.Reference.Outfit.text1")}</p>
								<p>{t("Content.Reference.Outfit.text2")}</p>
								<p>{t("Content.Reference.Outfit.text3")}</p>
							</>
						}
						reference={<CyclingFrontBackRef />}
					/>
				</Dialog.Root>
				<Dialog.Root>
					<Dialog.Trigger asChild>
						<div
							id="hairbow"
							className="flex md:col-span-2 xl:col-span-1 items-center justify-center gap-6 bg-neutral-900 border border-neutral-800 hover:ring-2 ring-neutral-800 duration-100 rounded-xl p-6 cursor-pointer"
						>
							<FadingImage
								src={ReferenceHairbowBack}
								className="w-auto max-h-full object-contain"
								alt="Outline of Mina's head, viewed from the back."
								priority
							/>
							<FadingImage
								src={ReferenceHairbowFront}
								className="w-auto max-h-full object-containm hidden md:block xl:hidden"
								alt="Outline of Mina's head, viewed from the front."
								priority
							/>
						</div>
					</Dialog.Trigger>
					<InfoDialog
                        col
						title={t("Content.Reference.Hairbow.heading")}
						description={
							<>
								<p>{t("Content.Reference.Hairbow.text1")}</p>
								<p>{t("Content.Reference.Hairbow.text2")}</p>
							</>
						}
						reference={
							<div className="flex w-3/4">
								<FadingImage
									src={ReferenceHairbowFront}
									alt="Drawing of a hand with a rectangular ring, spanning across the ring and middle finger."
									className="h-full max-h-[90vh] object-contain"
								/>
								<FadingImage
									src={ReferenceHairbowBack}
									alt="Drawing of a hand with a rectangular ring, spanning across the ring and middle finger."
									className="h-full max-h-[90vh] object-contain"
								/>
							</div>
						}
					/>
				</Dialog.Root>
				<Dialog.Root>
					<Dialog.Trigger asChild>
						<div
							id="shoe"
							className="flex items-center justify-center bg-neutral-900 border border-neutral-800 hover:ring-2 ring-neutral-800 duration-100 rounded-xl p-6 cursor-pointer"
						>
							<FadingImage
								src={ReferenceShoes}
								className="w-auto max-h-full object-contain"
								alt="Full-body drawing of Mina doing a peace sign, front perspective."
							/>
						</div>
					</Dialog.Trigger>
					<InfoDialog
						title={t("Content.Reference.Shoes.heading")}
						description={
							<>
								<p>{t("Content.Reference.Shoes.text1")}</p>
								<p>{t("Content.Reference.Shoes.text2")}</p>
							</>
						}
						reference={
							<FadingImage
								src={ReferenceShoes}
								alt="Drawing of a hand with a rectangular ring, spanning across the ring and middle finger."
								className="w-full max-h-[90vh] object-contain"
							/>
						}
					/>
				</Dialog.Root>
				<div
					id="colorpalette"
					className="flex items-center justify-center bg-neutral-900 border border-neutral-800 hover:ring-2 ring-neutral-800 duration-100 rounded-xl"
				>
					<ColorPickerToast color={currentColor} open={toastOpen} onOpenChange={setToastOpen} />
					<div className="flex flex-col gap-2 h-full justify-center">
						<div className="flex gap-5 px-6">
							<ColorSwatch color="#63e4a3" />
							<ColorSwatch color="#22ccff" />
							<ColorSwatch color="#111111" />
							<ColorSwatch color="#ffeee4" />
						</div>
						<div className="flex gap-2 px-4 items-center">
							<div className="flex gap-5 p-2 ring-2 ring-neutral-800 rounded-full">
								<ColorSwatch color="#00cc66" />
								<ColorSwatch color="#4499ee" />
								<ColorSwatch color="#222222" ring />
							</div>
							<p className="text-xs font-medium text-neutral-600">PRIMARY</p>
						</div>
						<div className="flex gap-5 px-6">
							<ColorSwatch color="#008b45" />
							<ColorSwatch color="#196bc0" />
							<ColorSwatch color="#111111" />
						</div>
					</div>
				</div>
			</div>
			<div className="flex items-center justify-between pt-6">
				<p>
					Reference drawings made by{" "}
					<Link href="https://twitter.com/nekomimiwubs" rel="noopener noreferrer" className="text-link-external">
						Nekomimi
					</Link>
					.
				</p>
				<Link href="https://static.pprmint.art/download/Mina/Mina_ref_sheet_(by_nekomimi).png" target="_blank" download>
					<Button>
						<i className="ri-download-2-line" /> Download reference sheet
					</Button>
				</Link>
			</div>
		</section>
	);
}