import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
	Button,
	Typography,
	Grid,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Card,
	CardContent,
	CardMedia,
	CardActions,
	Container,
	Stack,
} from "@mui/material";
import Image from "material-ui-image";
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
	{ text: "There will never be a light mode for this!" },
	{ text: "Shameless plug: pprmint.de" },
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
	{ text: "youtu.be/nROvY9uiYYk?t=74 - Demo zucchini naru." },
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
		text: "Just went shopping with my limited edition Crash Bandicoot tote bag.",
	},
	{ text: "If Illustrator was a child, I'd kick it." },
	{ text: "The WHAT now?" },
	{
		text: "It's interesting how people, to this day, continue to laugh their asses off, but none seem to continue the tradition of rolling on the floor while laughing.",
	},
	{
		text: "Your pet falling asleep on you is one of the best things that can happen.",
	},
	{ text: "Finally, sleep." },
	{ text: "Gonna get my missing daily dose of cute anime girls real quick." },
	{ text: "Why did I open Twitter again...?" },
	{ text: "I'm sick of this overheating micropenis USB stick." },
	{
		text: "Think my parents are watching horror movies next room or something. Time to watch more Tamako Market.",
	},
	{ text: "Fork in hell, mate." },
	{ text: "I made a ` mistake." },
	{ text: "Kinda want to throw an egg out of the window." },
	{ text: "Fucking had to go. No more fucking allowed." },
	{ text: "Fußgängerüberweg." },
	{ text: "America is weird." },
	{ text: "I think I nailed that guilt." },
	{
		text: "Nah, I think I would actually rather use Premiere Pro instead of Filmora, thanks literally everyone on YouTube for some reason.",
	},
	{ text: "Trends for you: Words" },
	{ text: "Imagine being reincarnated. As a fly." },
	{ text: "Having a penis is quite annoying sometimes." },
	{ text: "How to be funny. Step 1: Ask someone else than me." },
	{ text: "Mettbrötchen." },
	{ text: "Fußgängerüberweg." },
	{ text: "i love bein out of character" },
	{
		text: "Imagine using an online alias anyone can pronounce correctly on their first attempt.",
	},
	{ text: "Lol this song slaps." },
	{ text: "America is weird." },
	{ text: "Funny tweets end here!" },
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
		text: "Adobe ain't great, but at least they like the Wii U Download Management music!",
	},
	{ text: "This is sample splash!" },
	{ text: "Now with 0.2 more decimals!" },
	{ text: "Now with 100% more pepper!" },
	{ text: "'This is truly the moment if the century.' -@gaming" },
	{ text: "With extra mint flavor!" },
	{
		text: "You don't always have to be 'fine'. So if something sad happens, It's okay to feel sad. - Yuki Takeya",
	},
	{
		text: "It's sad that nothing can last forever, but I think it's better that way. - Yuki Takeya",
	},
	{
		text: "If you bottle up your sadness too much, you'll forget what's really important. - Yuki Takeya",
	},
	{
		text: "my current mouse is so sticky and unpleasant to touch that sometimes i lowkey regret returning the mx master lol",
	},
	{ text: "Free encyclopedia not included!" },
	{ text: "" },
	{ text: "Featuring quotes from @Gamer_Kold!" },
	{ text: "Featuring quotes from @ScreamRepeat!" },
	{ text: "Featuring quotes from @notkoutsie!" },
	{ text: "Featuring quotes from @Voluna_Awoo!" },
	{ text: "Featuring quotes from @TaromaruYuki (?!?!)" },
	{ text: "Featuring quotes from @emplexx!" },
	{ text: "Featuring quotes from @foxylucklol!" },
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
			</Helmet>
			<Container className="title">
				<Typography variant="h1">{t("title.splashes.main")}</Typography>
				<Typography variant="h2">{t("title.splashes.sub")}</Typography>
			</Container>
			<div className="content">
				<div className="section" id="changes">
					<Container>
						<List>
							{splashes.map((item) => (
								<ListItem>
									<ListItemText>{item.text}</ListItemText>
								</ListItem>
							))}
						</List>
					</Container>
				</div>
			</div>
		</>
	);
}

export default MintcraftSplashes;
