import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ScrollAnimation from "react-animate-on-scroll";
import { Typography, List, ListItem, Container } from "@mui/material";
import { useTranslation } from "react-i18next";

const splashes = [
	{ text: "Good today." },
	{ text: "Good today!" },
	{ text: "Greetings!" },
	{ text: "Hey there!" },
	{ text: "Hello!" },
	{ text: "Grüezi!" },
	{ text: "Servus!" },
	{ text: "Hallöle!" },
	{
		text: "The original splashes also had this one line of text that was ridiculously long. This right here is my attempt at creating practically unreadable text.",
	},
	{
		text: "This is another attempt at writing a practically unreadable line of text. While writing this I'm listening to Deichkind and am wondering whether there is a limit to how long these lines of text can be.",
	},
	{ text: "ppmint, haha." },
	{ text: "Making this resource pack was a pain!" },
	{
		text: (
			<a
				className="external"
				href="https://youtu.be/pwJtoZZFWio?t=241"
				target="_blank"
				rel="noopener noreferrer"
			>
				<span>There will never be a light mode for this!</span>
			</a>
		),
	},
	{ text: "Shameless plug: pprmint.art" },
	{ text: "This is sample text!" },
	{ text: "Uuuh!" },
	{ text: "Aaah!" },
	{ text: "Line 17 and I'm starting to run out of ideas!" },
	{ text: "Send help!" },
	{ text: "The cake is a truth!" },
	{ text: "How're ya doing?" },
	{ text: "MEMES!" },
	{ text: "</>" },
	{ text: "Period." },
	{ text: "splashes.txt" },
	{ text: "MINECRAFT" },
	{ text: "JAVA EDITION" },
	{ text: "Made in 2020 during a certain pandemic!" },
	{ text: "Does your ass hurt yet from all the sitting?" },
	{
		text: "Would be quite disturbing if the line of text above this one had an additional h in here!",
	},
	{ text: "H" },
	{ text: "What's the deal with people laughing at a single letter?" },
	{ text: "E" },
	{ text: "I don't get it." },
	{ text: "Or is it?" },
	{ text: "Did you ask your PC whether it wants to run this game?" },
	{ text: "Made by a German lad that hates bratwurst!" },
	{ text: "Lorem ipsum!" },
	{ text: "Losum iprem!" },
	{ text: "Laate night TV is scary!" },
	{ text: "Another shameless plug: @npprmint on Twitter!" },
	{ text: "177013" },
	{ text: "Hehe." },
	{
		text: (
			<a
				className="external"
				href="https://youtu.be/nROvY9uiYYk?t=74"
				target="_blank"
				rel="noopener noreferrer"
			>
				<span>youtu.be/nROvY9uiYYk?t=74 - Demo zucchini naru.</span>
			</a>
		),
	},
	{ text: "I only ever used hashtags as a joke!" },
	{ text: "My favorite numbers are 64 and 256." },
	{ text: "Most colors here are from Material design." },
	{ text: "Dead Voxels." },
	{ text: "xd" },
	{ text: "Fifty lines of text." },
	{ text: ":)" },
	{ text: ":]" },
	{ text: ":}" },
	{ text: "MISSINGNOMBER" },
	{ text: "I like trains! Like, I actually do." },
	{ text: "Bass-boosted and 8D reuploaded songs are cancer!" },
	{ text: "Time for some funny tweets!" },
	{
		text: (
			<a
				className="external"
				href="https://twitter.com/npprmint/status/1418568672935821315"
				target="_blank"
				rel="noopener norefferer"
			>
				<span>
					"Just went shopping with my limited edition Crash Bandicoot tote bag."
				</span>
			</a>
		),
	},
	{
		text: (
			<a
				className="external"
				href="https://twitter.com/npprmint/status/1417937743762665474"
				target="_blank"
				rel="noopener norefferer"
			>
				<span>"If Illustrator was a child, I'd kick it."</span>
			</a>
		),
	},
	{
		text: (
			<a
				className="external"
				href="https://twitter.com/npprmint/status/1409887524076597257"
				target="_blank"
				rel="noopener noreferrer"
			>
				<span>"The WHAT now?"</span>
			</a>
		),
	},
	{
		text: (
			<span>
				"It's interesting how people, to this day, continue to laugh their asses
				off, but none seem to continue the tradition of rolling on the floor
				while laughing."
			</span>
		),
	},
	{
		text: (
			<span>
				"Your pet falling asleep on you is one of the best things that can
				happen."
			</span>
		),
	},
	{
		text: <span>"Finally, sleep."</span>,
	},
	{
		text: (
			<span>
				"Gonna get my missing daily dose of cute anime girls real quick."
			</span>
		),
	},
	{
		text: <span>"Why did I open Twitter again...?"</span>,
	},
	{ text: <span>"I'm sick of this overheating micropenis USB stick."</span> },
	{
		text: (
			<span>
				"Think my parents are watching horror movies next room or something.
				Time to watch more Tamako Market."
			</span>
		),
	},
	{
		text: (
			<a className="external" href="" target="_blank" rel="noopener norefferer">
				<span>"Fork in hell, mate."</span>
			</a>
		),
	},
	{
		text: <span>"I made a ` mistake."</span>,
	},
	{
		text: <span>"Kinda want to throw an egg out of the window."</span>,
	},
	{
		text: <span>"Fucking had to go. No more fucking allowed."</span>,
	},
	{
		text: (
			<a
				className="external"
				href="https://twitter.com/npprmint/status/1325526328867741702"
				target="_blank"
				rel="noopener norefferer"
			>
				<span>"Fußgängerüberweg."</span>
			</a>
		),
	},
	{
		text: (
			<a
				className="external"
				href="https://twitter.com/npprmint/status/1324982552227164162"
				target="_blank"
				rel="noopener norefferer"
			>
				<span>"America is weird."</span>{" "}
			</a>
		),
	},
	{
		text: (
			<a
				className="external"
				href="https://twitter.com/npprmint/status/1323286767030751234"
				target="_blank"
				rel="noopener norefferer"
			>
				<span>"I think I nailed that guilt."</span>
			</a>
		),
	},
	{
		text: (
			<a
				className="external"
				href="https://twitter.com/npprmint/status/1322965708754587648"
				target="_blank"
				rel="noopener norefferer"
			>
				<span>
					"Nah, I think I would actually rather use Premiere Pro instead of
					Filmora, thanks literally everyone on YouTube for some reason."
				</span>
			</a>
		),
	},
	{
		text: (
			<a
				className="external"
				href="https://twitter.com/npprmint/status/1322830187881484288"
				target="_blank"
				rel="noopener norefferer"
			>
				<span>"Trends for you: Words"</span>
			</a>
		),
	},
	{
		text: (
			<a
				className="external"
				href="https://twitter.com/npprmint/status/1321158422293843969"
				target="_blank"
				rel="noopener norefferer"
			>
				<span>"Imagine being reincarnated. As a fly."</span>
			</a>
		),
	},
	{
		text: (
			<a
				className="external"
				href="https://twitter.com/npprmint/status/1319247464860438528"
				target="_blank"
				rel="noopener norefferer"
			>
				<span>"Having a penis is quite annoying sometimes."</span>
			</a>
		),
	},
	{
		text: (
			<a
				className="external"
				href="https://twitter.com/npprmint/status/1317524534837260289"
				target="_blank"
				rel="noopener norefferer"
			>
				<span>"How to be funny. Step 1: Ask someone else than me."</span>{" "}
			</a>
		),
	},
	{
		text: (
			<a
				className="external"
				href="https://twitter.com/npprmint/status/1328929259906355201"
				target="_blank"
				rel="noopener norefferer"
			>
				<span>"Mettbrötchen."</span>
			</a>
		),
	},
	{
		text: (
			<a className="external" href="" target="_blank" rel="noopener norefferer">
				<span>"i love bein out of character"</span>
			</a>
		),
	},
	{
		text: (
			<a
				className="external"
				href="https://twitter.com/npprmint/status/1327311406207627264"
				target="_blank"
				rel="noopener norefferer"
			>
				<span>
					"Imagine using an online alias anyone can pronounce correctly on their
					first attempt."
				</span>
			</a>
		),
	},
	{
		text: (
			<a
				className="external"
				href="https://twitter.com/AdobeCare/status/1326601231079530496"
				target="_blank"
				rel="noopener norefferer"
			>
				<span>"Lol this song slaps."</span>
			</a>
		),
	},
	{
		text: "Funny tweets end here!",
	},
	{ text: "Did I already add 'This is sample text'?" },
	{ text: "Yes!" },
	{ text: "Imagine a bear grills!" },
	{ text: "Sample text, this is!" },
	{ text: "Typography is annoying!" },
	{ text: "pp" },
	{ text: "Press alt f4 for free diamondzs works 2020 no clickbait!!" },
	{ text: "Blizzy was here" },
	{ text: "Don't check out my SoundCloud!" },
	{ text: "I don't even have a SoundCloud!" },
	{
		text: "What should I plug if a tweet of mi- nah, as if that ever happens.",
	},
	{ text: "rofl" },
	{ text: "Cat go brr!" },
	{ text: "Best before the heat death of the universe!" },
	{ text: "Best before the extinction of humanity!" },
	{ text: "Best before I fall asleep writing these spl" },
	{ text: "PPRMINT ISN'T YOU" },
	{ text: "Why do people like the Wii Disc Channel so much?" },
	{ text: "Nein!" },
	{ text: "I'm not using Arch btw!" },
	{ text: "Sadly, I'm stuck using Windows!" },
	{ text: "Windows 10 looks lovely. Until you open an app." },
	{ text: "I never really minded Windows updates that much." },
	{ text: "/shrug" },
	{
		text: "I feel sorry for the people stuck playing clones of this game on Android.",
	},
	{
		text: (
			<a
				className="external"
				href="https://twitter.com/AdobeCare/status/1326601231079530496"
				target="_blank"
				rel="noopener norefferer"
			>
				<span>
					Adobe ain't great, but at least they like the Wii U Download
					Management music!
				</span>
			</a>
		),
	},
	{ text: "This is sample splash!" },
	{ text: "<hr />" },
	{
		text: (
			<a
				className="external"
				href="https://twitter.com/Gamer_Kold/status/1404101125989613570"
				target="_blank"
				rel="noopener norefferer"
			>
				Now with 0.2 more decimals!
			</a>
		),
	},
	{
		text: (
			<a
				className="external"
				href="https://twitter.com/Gamer_Kold/status/1513304236674764802"
				target="_blank"
				rel="noopener norefferer"
			>
				Now with marginally better quality!
			</a>
		),
	},
	{
		text: (
			<span>
				Featuring quotes from{" "}
				<a
					className="external"
					href="https://twitter.com/Gamer_Kold"
					target="_blank"
					rel="noopener norefferer"
				>
					@Gamer_Kold
				</a>
				!
			</span>
		),
	},
	{
		text: (
			<a
				className="external"
				href="https://twitter.com/ScreamRepeat/status/1404099235939864576"
				target="_blank"
				rel="noopener norefferer"
			>
				Now with 100% more pepper!
			</a>
		),
	},
	{
		text: (
			<span>
				Featuring quotes from{" "}
				<a
					className="external"
					href="https://twitter.com/ScreamRepeat"
					target="_blank"
					rel="noopener norefferer"
				>
					@ScreamRepeat
				</a>
				!
			</span>
		),
	},
	{
		text: (
			<a
				className="external"
				href="https://twitter.com/notkoutsie/status/1404099376004448260"
				target="_blank"
				rel="noopener norefferer"
			>
				"This is truly the moment if the century." -@gaming
			</a>
		),
	},
	{
		text: (
			<span>
				Featuring quotes from{" "}
				<a
					className="external"
					href="https://twitter.com/notkoutsie"
					target="_blank"
					rel="noopener norefferer"
				>
					@notkoutsie
				</a>
				!
			</span>
		),
	},
	{
		text: (
			<a
				className="external"
				href="https://twitter.com/Voluna_Awoo/status/1404104415724908545"
				target="_blank"
				rel="noopener norefferer"
			>
				With extra mint flavor!
			</a>
		),
	},
	{
		text: (
			<span>
				Featuring quotes from{" "}
				<a
					className="external"
					href="https://twitter.com/Voluna_Awoo"
					target="_blank"
					rel="noopener norefferer"
				>
					@Voluna_Awoo
				</a>
				!
			</span>
		),
	},
	{
		text: (
			<a
				className="external"
				href="https://twitter.com/TaromaruYuki/status/1404106261516406785"
				target="_blank"
				rel="noopener norefferer"
			>
				You don't always have to be "fine". So if something sad happens, It's
				okay to feel sad. - Yuki Takeya
			</a>
		),
	},
	{
		text: (
			<a
				className="external"
				href="https://twitter.com/TaromaruYuki/status/1404106261516406785"
				target="_blank"
				rel="noopener norefferer"
			>
				It's sad that nothing can last forever, but I think it's better that
				way. - Yuki Takeya
			</a>
		),
	},
	{
		text: (
			<a
				className="external"
				href="https://twitter.com/TaromaruYuki/status/1404106372124454915"
				target="_blank"
				rel="noopener norefferer"
			>
				If you bottle up your sadness too much, you'll forget what's really
				important. - Yuki Takeya
			</a>
		),
	},
	{
		text: (
			<span>
				Featuring quotes from{" "}
				<a
					className="external"
					href="https://twitter.com/TaromaruYuki"
					target="_blank"
					rel="noopener norefferer"
				>
					@TaromaruYuki (?!?!)
				</a>
			</span>
		),
	},
	{
		text: (
			<a
				className="external"
				href="https://twitter.com/emplexx/status/1401247095898705922"
				target="_blank"
				rel="noopener norefferer"
			>
				my current mouse is so sticky and unpleasant to touch that sometimes i
				lowkey regret returning the mx master lol
			</a>
		),
	},
	{
		text: (
			<span>
				Featuring quotes from{" "}
				<a
					className="external"
					href="https://twitter.com/emplexx"
					target="_blank"
					rel="noopener norefferer"
				>
					@emplexx
				</a>
				!
			</span>
		),
	},
	{
		text: (
			<a
				className="external"
				href="https://twitter.com/foxylucklol/status/1404123552672993285"
				target="_blank"
				rel="noopener norefferer"
			>
				Free encyclopedia not included!
			</a>
		),
	},
	{
		text: (
			<span>
				Featuring quotes from{" "}
				<a
					className="external"
					href="https://twitter.com/foxylucklol"
					target="_blank"
					rel="noopener norefferer"
				>
					@foxylucklol
				</a>
				!
			</span>
		),
	},
	{
		text: (
			<a
				className="external"
				href="https://twitter.com/novotab51/status/1512880210533916682"
				target="_blank"
				rel="noopener norefferer"
			>
				robot chicken latino
			</a>
		),
	},
	{
		text: (
			<span>
				Featuring quotes from{" "}
				<a
					className="external"
					href="https://twitter.com/novotab51"
					target="_blank"
					rel="noopener norefferer"
				>
					@novotab51
				</a>
				!
			</span>
		),
	},
	{
		text: (
			<a
				className="external"
				href="https://twitter.com/fluxe__/status/1512939144967823361"
				target="_blank"
				rel="noopener norefferer"
			>
				penis cock shit
			</a>
		),
	},
	{
		text: (
			<span>
				Featuring "quotes" from{" "}
				<a
					className="external"
					href="https://twitter.com/fluxe__"
					target="_blank"
					rel="noopener norefferer"
				>
					@fluxe
				</a>
				...
			</span>
		),
	},
	{
		text: (
			<a
				className="external"
				href="https://twitter.com/IAmDraconium/status/1512948515953127427"
				target="_blank"
				rel="noopener norefferer"
			>
				brought to you by a filthy comedy captialist
			</a>
		),
	},
	{
		text: (
			<span>
				Featuring quotes from{" "}
				<a
					className="external"
					href="https://twitter.com/IAmDraconium"
					target="_blank"
					rel="noopener norefferer"
				>
					@IAmDraconium
				</a>
				!
			</span>
		),
	},
	{
		text: (
			<a
				className="external"
				href="https://twitter.com/LorAndCompany/status/1512962076272054273"
				target="_blank"
				rel="noopener norefferer"
			>
				oomfie bestie vibes
			</a>
		),
	},
	{
		text: (
			<span>
				Featuring quotes from{" "}
				<a
					className="external"
					href="https://twitter.com/LorAndCompany"
					target="_blank"
					rel="noopener norefferer"
				>
					@LorAndCompany
				</a>
				!
			</span>
		),
	},
	{
		text: (
			<a
				className="external"
				href="https://twitter.com/GrabsterTV/status/1513118004934029314"
				target="_blank"
				rel="noopener norefferer"
			>
				Buy reev pro to become an epic gamer
			</a>
		),
	},
	{
		text: (
			<span>
				Featuring <s>ads</s> quotes from{" "}
				<a
					className="external"
					href="https://twitter.com/GrabsterTV"
					target="_blank"
					rel="noopener norefferer"
				>
					@GrabsterTV
				</a>
				!
			</span>
		),
	},
	{
		text: (
			<a
				className="external"
				href="https://twitter.com/dlphesigns/status/1513127603225432067"
				target="_blank"
				rel="noopener norefferer"
			>
				<span style={{ color: "yellow" }}>#StandWith</span>
				<span style={{ color: "blue" }}>Ukraine</span>
			</a>
		),
	},
	{
		text: (
			<span>
				Featuring quotes from{" "}
				<a
					className="external"
					href="https://twitter.com/dlphesigns"
					target="_blank"
					rel="noopener norefferer"
				>
					@dlphesigns
				</a>
				! (I agree with what he said above.)
			</span>
		),
	},
	{
		text: (
			<a
				className="external"
				href="https://twitter.com/xparacosm/status/1513134014625894401"
				target="_blank"
				rel="noopener norefferer"
			>
				<span style={{ color: "aqua" }}>miku</span>
			</a>
		),
	},
	{
		text: (
			<span>
				Featuring quotes from{" "}
				<a
					className="external"
					href="https://twitter.com/xparacosm"
					target="_blank"
					rel="noopener norefferer"
				>
					@xparacosm
				</a>
				! (I definitely agree with what he said above.)
			</span>
		),
	},
	{
		text: (
			<a
				className="external"
				href="https://twitter.com/Febbuarie/status/1513140767505940484"
				target="_blank"
				rel="noopener norefferer"
			>
				The Ivaaden Family was here
			</a>
		),
	},
	{
		text: (
			<span>
				Featuring quotes from{" "}
				<a
					className="external"
					href="https://twitter.com/Febbuarie"
					target="_blank"
					rel="noopener norefferer"
				>
					@Febbuarie
				</a>
				!
			</span>
		),
	},
	{
		text: (
			<a
				className="external"
				href="https://twitter.com/The_Ruby872/status/1513227087594897415"
				target="_blank"
				rel="noopener norefferer"
			>
				The femboys are approaching.
			</a>
		),
	},
	{
		text: (
			<a
				className="external"
				href="https://twitter.com/The_Ruby872/status/1513755013864206337"
				target="_blank"
				rel="noopener norefferer"
			>
				Touch minecraft:grass
			</a>
		),
	},
	{
		text: (
			<a
				className="external"
				href="https://twitter.com/The_Ruby872/status/1513755013864206337"
				target="_blank"
				rel="noopener norefferer"
			>
				Check out @npprmint i heard he is a pretty cool guy
			</a>
		),
	},
	{
		text: (
			<a
				className="external"
				href="https://twitter.com/The_Ruby872/status/1513755013864206337"
				target="_blank"
				rel="noopener norefferer"
			>
				Making mental brealdowns over redstone since 2009
			</a>
		),
	},
	{
		text: (
			<span>
				Featuring quotes from{" "}
				<a
					className="external"
					href="https://twitter.com/The_Ruby872"
					target="_blank"
					rel="noopener norefferer"
				>
					@The_Ruby872
				</a>
				!
			</span>
		),
	},
	{
		text: (
			<a
				className="external"
				href="https://twitter.com/Iucidcelestial/status/1513425280576143366"
				target="_blank"
				rel="noopener norefferer"
			>
				neuro grindset 24/7
			</a>
		),
	},
	{
		text: (
			<span>
				Featuring quotes from{" "}
				<a
					className="external"
					href="https://twitter.com/Iucidcelestial"
					target="_blank"
					rel="noopener norefferer"
				>
					@Iucidcelestial
				</a>
				!
			</span>
		),
	},
];

function MintcraftSplashes() {
	const { t } = useTranslation("translation", {
		keyPrefix: "projects.mintcraft",
	});
	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>splashes.txt • pprmint.art</title>
				<meta
					name="description"
					content="The splashes seen in Mintcraft on the title screen."
				/>
				<meta name="theme-color" content="#ffbb22" />
				<meta
					property="og:description"
					content="The splashes seen in Mintcraft on the title screen."
				/>
				<meta
					property="og:image"
					content="https://pprmint.art/og/mintcraft.jpg"
				/>
				<meta property="og:image:width" content="1280" />
				<meta property="og:image:height" content="720" />
				<meta property="og:title" content="splashes.txt" />
				<meta property="og:url" content="https://pprmint.art/splashes" />
			</Helmet>
			<Container className="title">
				<Typography variant="h1">{t("title.splashes.main")}</Typography>
				<Typography variant="h2">{t("title.splashes.sub")}</Typography>
			</Container>
			<div className="section" id="changes">
				<Container>
					<ScrollAnimation animateIn="fadeBottom" animateOnce>
						<List>
							{splashes.map((item) => (
								<ListItem>
									<Typography>{item.text}</Typography>
								</ListItem>
							))}
						</List>
					</ScrollAnimation>
				</Container>
			</div>
		</>
	);
}

export default MintcraftSplashes;
