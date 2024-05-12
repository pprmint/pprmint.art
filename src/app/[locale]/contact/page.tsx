import { useTranslations } from "next-intl";
import Image from "next/image";
import Title from "src/components/layout/Title";

import TitleBackgroundEn from "public/assets/contact/title_en.webp";
import TitleBackgroundDe from "public/assets/contact/title_de.webp";
import PixelMina from "public/assets/mina64.gif";

import Letter from "public/assets/contact/letter.svg";
import Bubbles from "public/assets/contact/bubbles.svg";
import PaperPlane from "public/assets/contact/paperplane.svg";
import { Link } from "src/navigation";
import Button from "src/components/ui/Button";
import Chatbox from "./chatbox";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import Twitter from "src/icons/Twitter";

type Props = {
	params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props) {
	const t = await getTranslations({ locale, namespace: "CONTACT" });
	return {
		title: t("Head.title"),
		description: t("Head.description"),
	};
}

export default function Page({ params: { locale } }: Props) {
	unstable_setRequestLocale(locale);
	const t = useTranslations("CONTACT");
	return (
		<>
			<Title title={t("Head.title")} description={t("Head.description")}>
				<div className="relative w-screen h-screen max-h-svh">
					<p
						className="absolute right-0 top-1/2 -translate-y-1/2 z-100 px-1 py-2 rounded-l-md text-xs text-neutral-50 bg-neutral-950"
						style={{ writingMode: "vertical-rl" }}
					>
						<Twitter className="inline fill-blue rotate-90" /> @neko__draws
					</p>
					<Image
						src={locale == "de" ? TitleBackgroundDe : TitleBackgroundEn}
						alt=""
						quality={100}
						fill
						className="object-cover object-top xl:object-[0%_15%]"
					/>
				</div>
			</Title>
			<main>
				<section className="max-w-7xl mx-auto my-20 md:my-32 xl:my-40 px-6 md:px-9 flex flex-col items-center justify-center">
					<h2>{t("Content.Mina.heading")}</h2>
					<p className="pb-6">{t("Content.Mina.text")}</p>
					<Chatbox />
				</section>
				<section className="group relative w-full overflow-clip border-y border-y-neutral-900">
					<div className="max-w-7xl mx-auto py-12">
						<div className="max-w-xl lg:max-w-3xl px-6 md:px-9 py-9  h-full">
							<h2>
								{t("Content.Email.title")}
								<span className="text-green">.</span>
							</h2>
							<p className="pb-9">{t("Content.Email.text")}</p>
							<Link
								href={`mailto:mail@pprmint.art?subject=${t("Content.Message.subject")}&body=${t(
									"Content.Message.body"
								)}`}
							>
								<Button tabIndex={-1} color="green">
									mail@pprmint.art
								</Button>
							</Link>
						</div>
					</div>
					<Image
						src={Letter}
						alt=""
						className="absolute -z-10 w-1/2 md:w-1/3 h-auto bottom-0 md:top-1/2 md:-translate-y-1/2 right-0 xl:right-12 2xl:right-40 opacity-50"
					/>
				</section>
				<section className="group relative w-full overflow-clip border-b border-b-neutral-900">
					<div className="max-w-7xl mx-auto py-12">
						<div className="max-w-xl lg:max-w-3xl px-6 md:px-9 py-9 h-full">
							<h2>
								{t("Content.Telegram.title")}
								<span className="text-green">.</span>
							</h2>
							<p className="pb-9">{t("Content.Telegram.text")}</p>
							<div className="w-max">
								<Link href="https://t.me/npprmint" target="_blank" rel="noopener noreferrer">
									<Button tabIndex={-1} color="green">
										{t("Content.Telegram.button")}
									</Button>
								</Link>
							</div>
						</div>
					</div>
					<Image
						src={PaperPlane}
						alt=""
						className="absolute -z-10 w-1/2 md:w-1/4 h-auto bottom-0 md:top-1/2 md:-translate-y-1/2 right-0 xl:right-16 2xl:right-48 opacity-50"
					/>
				</section>
				<section className="group relative w-full overflow-clip border-b border-b-neutral-900">
					<div className="max-w-7xl mx-auto py-12">
						<div className="max-w-xl lg:max-w-3xl px-6 md:px-9 py-9 h-full">
							<h2>
								{t("Content.Twitter.title")}
								<span className="text-green">.</span>
							</h2>
							<p className="pb-9">{t("Content.Twitter.text")}</p>
							<div className="w-max">
								<Link
									href="https://twitter.com/messages/compose?recipient_id=1571518236394397699"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Button tabIndex={-1} color="green">
										{t("Content.Twitter.button")}
									</Button>
								</Link>
							</div>
						</div>
					</div>
					<Image
						src={Bubbles}
						alt=""
						className="absolute -z-10 w-1/2 md:w-1/4 h-auto bottom-0 md:top-1/2 md:-translate-y-1/2 right-0 xl:right-16 2xl:right-48 opacity-50"
					/>
				</section>
			</main>
		</>
	);
}
