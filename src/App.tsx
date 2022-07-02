import React from "react";
import { Helmet } from "react-helmet";
import Lottie from "react-lottie";
import { useState } from "react";
import { Routes, Route, Link, Navigate, NavLink } from "react-router-dom";
import {
	Typography,
	IconButton,
	AppBar,
	Toolbar,
	Box,
	Drawer,
	List,
	ListItem,
	ListItemText,
	useScrollTrigger,
	Button,
	Stack,
	Divider,
	ListItemIcon,
} from "@mui/material";
import { useTranslation } from "react-i18next";

import {
	FiMessageSquare,
	FiHeart,
	FiHome,
	FiMenu,
	FiX,
	FiDownload,
	FiImage,
} from "react-icons/fi";

import { SiYoutube, SiGithub, SiDiscord } from "react-icons/si";

// Imports of all the pages
import Home from "./pages/home/Home";
import Downloads from "./pages/downloads/Downloads";
import Contact from "./pages/contact/Contact";
import PrivacyPolicy from "./pages/privacypolicy/PrivacyPolicy";
// Project pages
import MintsansDL from "./pages/downloads/mintsans/Mintsans";
import MintBitDL from "./pages/downloads/mintbit/MintBit";
import MintAltDL from "./pages/downloads/mintalternative/MintAlt";
import MintcraftDL from "./pages/downloads/mintcraft/Mintcraft";
import MintcraftSplashes from "./pages/downloads/mintcraft/Splashes";
import Win10TilesDL from "./pages/downloads/win10tiles/Win10Tiles";
// Info pages
import Error404 from "./pages/404/Error404";
import UnderConstruction from "./pages/wip/UnderConstruction";
// Works 2022
import Works from "./pages/works/Works";
import Book from "./pages/works/gallery/2022/Book";
import MintBanners from "./pages/works/gallery/2022/MintBanners";
import WiiMenu from "./pages/works/gallery/2022/WiiMenu";
import Geoices from "./pages/works/gallery/2022/Geoices";
import SuseRebrand from "./pages/works/gallery/2022/suseRebrand";
import Statistics from "./pages/works/gallery/2022/LikeStatistics";
import Ipad from "./pages/works/gallery/2022/iPad"; // this hurts
import ArchWall from "./pages/works/gallery/2022/ArchWall";
import Ford from "./pages/works/gallery/2022/Ford";
// Works 2021
import ManjaroWall from "./pages/works/gallery/2021/manjarowall/ManjaroWall";
// Easter eggs...? I dunno.
import HealthSafety from "./pages/wii/HealthSafety";
import Test from "./pages/test/Test";
// Control thingies
import ScrollToTop from "./ScrollToTop";
import Settings from "./Settings";
import CookieSnackbar from "./CookieSnackbar";

// ppmint.
import Wordmark from "./globalassets/wordmark.json";
// Pride animation wordmark
import PrideWordmark from "./globalassets/pride_wordmark.json";
// Fonts
import "./globalassets/fonts/silka.css";
import "./globalassets/fonts/basier_square.css";
import "./globalassets/fonts/basier_square_mono.css";

const nav = [
	{
		name: "common.nav.home",
		key: "home",
		link: "/",
		exact: true,
		icon: <FiHome />,
	},
	{
		name: "common.nav.works",
		key: "works",
		link: "/works",
		icon: <FiImage />,
	},
	{
		name: "common.nav.downloads",
		key: "downloads",
		link: "/downloads",
		icon: <FiDownload />,
	},
	{
		name: "common.nav.contact",
		key: "contact",
		link: "/contact",
		icon: <FiMessageSquare />,
	},
];

function IconLink(props: React.PropsWithChildren<{ href: string }>) {
	return (
		<IconButton
			href={props.href}
			target="_blank"
			rel="noopener noreferrer"
			size="large"
		>
			{props.children}
		</IconButton>
	);
}

interface Props {
	children: React.ReactElement;
}

// Transparent app bar when at top of page, backdrop filter + divider line once scrolling down
function ElevationScroll(props: Props) {
	const { children } = props;
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
	});
	return React.cloneElement(children, {
		sx: trigger
			? {
					backdropFilter: "blur(20px)",
					backgroundColor: "#111111cc",
					borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
					boxShadow: "0px 2px 8px -1px #111111",
			  }
			: {
					backdropFilter: "blur(0px)",
					backgroundColor: "#11111100",
					borderBottom: "0px solid rgba(255, 255, 255, 0)",
					boxShadow: "0 0 0 0 #111111",
			  },
	});
}

const lottieOptions = {
	loop: false,
	autoplay: true,
	animationData: Wordmark,
	rendererSettings: {
		preserveAspectRatio: "xMidYMid slice",
	},
};

export default function App() {
	const { t } = useTranslation();
	const [open, setOpen] = useState<boolean>(false);
	return (
		<React.Fragment>
			<ElevationScroll>
				<AppBar
					position="fixed"
					color="transparent"
					sx={{
						transition: "all 0.15s",
					}}
				>
					<Toolbar
						sx={{
							paddingLeft: "0px !important",
						}}
					>
						<Box
							pl={{ xs: 3, md: 0 }}
							pr={{ xs: 1.5, md: 2 }}
							pt={0.75}
							pb={0.75}
						>
							<IconButton
								size="large"
								edge="start"
								color="inherit"
								aria-label="menu"
								onClick={() => setOpen(true)}
								sx={{ display: { xs: "inline-flex", md: "none" } }}
							>
								<FiMenu color="var(--textSecondary)" />
							</IconButton>
						</Box>
						<Drawer
							sx={{
								width: "280px",
								flexShrink: 0,
								[`& .MuiDrawer-paper`]: {
									width: "280px",
									boxSizing: "border-box",
								},
							}}
							anchor="left"
							elevation={1}
							open={open}
							onClose={() => setOpen(false)}
						>
							<Box
								pl={3}
								pt={0.75}
								pb={0.75}
								sx={{ background: "var(--backgroundTertiary)" }}
							>
								<IconButton
									size="large"
									edge="start"
									color="inherit"
									aria-label="menu"
									onClick={() => setOpen(false)}
									sx={{ mr: 2 }}
								>
									<FiX />
								</IconButton>
							</Box>
							<Divider />
							<List className="mobileNav" sx={{ flex: "1" }}>
								{nav.map((item) => {
									const exact = item.exact ? true : false;
									return (
										<NavLink
											onClick={() => setOpen(false)}
											// exact={item.exact}
											// activeClassName="active"
											to={item.link}
											key={item.key}
										>
											<ListItem
												button
												sx={{
													margin: "0 10px 10px 0",
													padding: "10px 28px 10px 28px",
													borderRadius: "0 24px 24px 0",
													width: "max-content",
												}}
											>
												<ListItemIcon sx={{ minWidth: "36px" }}>
													{item.icon}
												</ListItemIcon>
												{t(item.name)}
											</ListItem>
										</NavLink>
									);
								})}
							</List>
							<Divider />
							<Box
								p={1}
								sx={{
									backgroundColor: "var(--backgroundTertiary)",
									textAlign: "center",
								}}
							>
								<Settings />
							</Box>
						</Drawer>
						<Box
							sx={{
								flexGrow: 1,
								display: { xs: "flex", md: "block" },
							}}
						>
							<Link to="/">
								<Lottie
									options={lottieOptions}
									width={160}
									height={64}
									isClickToPauseDisabled={true}
									style={{ margin: "none" }}
								/>
							</Link>
						</Box>
						<Box
							className="desktopNav"
							sx={{ display: { md: "flex", xs: "none" }, flexGrow: 1 }}
						>
							<Stack spacing={1} direction="row">
								{nav.map((item) => {
									return (
										<NavLink to={item.link} key={item.key}>
											<Button color="inherit" startIcon={item.icon}>
												{t(item.name)}
											</Button>
										</NavLink>
									);
								})}
							</Stack>
						</Box>
						<Settings />
					</Toolbar>
				</AppBar>
			</ElevationScroll>
			<CookieSnackbar />

			<ScrollToTop>
				{/* All the different pages that exist here, pretty much. */}
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<UnderConstruction />} />

					<Route path="/downloads" element={<Downloads />} />
					<Route path="/downloads/mintsans" element={<MintsansDL />} />
					<Route path="/downloads/mintcraft" element={<MintcraftDL />} />
					<Route
						path="/downloads/mintcraft/splashes"
						element={<MintcraftSplashes />}
					/>
					<Route path="/downloads/win10tiles" element={<Win10TilesDL />} />

					{/* Works of 2022 */}
					<Route path="/works" element={<Works />} />
					<Route path="/works/2022/book" element={<Book />} />
					<Route path="/works/2022/mintbanners" element={<MintBanners />} />
					<Route path="/works/2022/wiimenu" element={<WiiMenu />} />
					<Route path="/works/2022/geoices" element={<Geoices />} />
					<Route path="/works/2022/suserebrand" element={<SuseRebrand />} />
					<Route path="/works/2022/statistics" element={<Statistics />} />
					<Route path="/works/2022/ipad" element={<Ipad />} />
					<Route path="/works/2022/ford" element={<Ford />} />
					<Route path="/works/2022/archwall" element={<ArchWall />} />

					{/* Works of 2021 */}
					<Route path="/works/2021/manjarowall" element={<ManjaroWall />} />

					<Route path="/contact" element={<Contact />} />
					<Route path="/privacy" element={<PrivacyPolicy />} />
					<Route path="/test" element={<Test />} />
					<Route path="/healthsafety" element={<HealthSafety />} />

					<Route path="/faq" element={<Navigate replace to="/contact" />} />
					<Route path="/mintcraft" element={<Navigate replace to="/downloads/mintcraft" />} />
					<Route path="/splashes" element={<Navigate replace to="/downloads/mintcraft/splashes" />} />
					<Route path="/mintsans" element={<Navigate replace to="/downloads/mintsans" />} />
					<Route path="/mintalt" element={<Navigate replace to="/downloads/mintalt" />} />
					<Route path="/win10tiles" element={<Navigate replace to="/downloads/win10tiles" />} />

					<Route path="*" element={<Error404 />} />
				</Routes>
			</ScrollToTop>

			<footer>
				<Divider />
				<div className="copyright">
					<Typography variant="body2">
						{t("common.footer.madeWith")}
						<FiHeart color="var(--redSecondary)" />
						{t("common.footer.andCoffee")}
					</Typography>
					<Typography>
						<Link to="/privacy">{t("common.footer.privacyPolicy")}</Link>
					</Typography>
				</div>
				<br />
				<Stack
					id="footerButtons"
					spacing={2}
					direction="row"
					sx={{ justifyContent: "center", alignItems: "center" }}
				>
					<IconLink href="https://www.youtube.com/c/pprmint">
						<SiYoutube />
					</IconLink>
					<IconLink href="https://github.com/pprmint">
						<SiGithub />
					</IconLink>
					<IconLink href="https://discord.com/invite/Vw9JXwr">
						<SiDiscord />
					</IconLink>
				</Stack>
			</footer>
		</React.Fragment>
	);
}
