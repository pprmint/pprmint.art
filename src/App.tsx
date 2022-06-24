import React from "react";
import { Helmet } from "react-helmet";
import Lottie from "react-lottie";
import { useState } from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect,
	NavLink,
} from "react-router-dom";
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
	RiChat1Line,
	RiDiscordLine,
	RiGithubLine,
	RiHeartFill,
	RiHomeLine,
	RiMenu2Line,
	RiMenu3Line,
	RiPencilRuler2Line,
	RiUserLine,
	RiYoutubeLine,
} from "react-icons/ri";

// Imports of all the pages
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";
import PrivacyPolicy from "./pages/privacypolicy/PrivacyPolicy";
// Project pages
import MintsansDL from "./pages/projects/mintsans/Mintsans";
import MintBitDL from "./pages/projects/mintbit/MintBit";
import MintAltDL from "./pages/projects/mintalternative/MintAlt";
import MintcraftDL from "./pages/projects/mintcraft/Mintcraft";
import MintcraftSplashes from "./pages/projects/mintcraft/Splashes";
import Win10TilesDL from "./pages/projects/win10tiles/Win10Tiles";
// Info pages
import Error404 from "./pages/404/Error404";
import UnderConstruction from "./pages/wip/UnderConstruction";
// Works 2022
import Book from "./pages/projects/gallery/2022/Book";
import MintBanners from "./pages/projects/gallery/2022/MintBanners";
import WiiMenu from "./pages/projects/gallery/2022/WiiMenu";
import Geoices from "./pages/projects/gallery/2022/Geoices";
import suseRebrand from "./pages/projects/gallery/2022/suseRebrand";
import Statistics from "./pages/projects/gallery/2022/LikeStatistics";
import Ipad from "./pages/projects/gallery/2022/iPad"; // this hurts
import ArchWall from "./pages/projects/gallery/2022/ArchWall";
import Ford from "./pages/projects/gallery/2022/Ford";
// Works 2021
import ManjaroWall from "./pages/projects/gallery/2021/manjarowall/ManjaroWall";
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
// import "./globalassets/fonts/basier_mono.css";

const nav = [
	{
		name: "common.nav.home",
		key: "home",
		link: "/",
		exact: true,
		icon: <RiHomeLine />,
	},
	{
		name: "common.nav.about",
		key: "about",
		link: "/about",
		icon: <RiUserLine />,
	},
	{
		name: "common.nav.projects",
		key: "projects",
		link: "/projects",
		icon: <RiPencilRuler2Line />,
	},
	{
		name: "common.nav.contact",
		key: "contact",
		link: "/contact",
		icon: <RiChat1Line />,
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
	animationData: PrideWordmark,
	rendererSettings: {
		preserveAspectRatio: "xMidYMid slice",
	},
};

function App() {
	const { t } = useTranslation();
	const [open, setOpen] = useState<boolean>(false);
	return (
		<Router>
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
								<RiMenu2Line color="var(--textSecondary)" />
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
									<RiMenu3Line />
								</IconButton>
							</Box>
							<Divider />
							<List className="mobileNav" sx={{ flex: "1" }}>
								{nav.map((item) => {
									const exact = item.exact ? true : false;
									return (
										<NavLink
											onClick={() => setOpen(false)}
											exact={item.exact}
											activeClassName="active"
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
									width={150}
									height={48}
                                    isClickToPauseDisabled={true}
                                    style={{margin: "none", borderRadius: "24px"}}
								/>
							</Link>
						</Box>
						<Box
							className="desktopNav"
							sx={{ display: { md: "flex", xs: "none" }, flexGrow: 1 }}
						>
							<Stack spacing={1} direction="row">
								{nav.map((item) => {
									const exact = item.exact ? true : false;
									return (
										<NavLink
											exact={item.exact}
											activeClassName="active"
											to={item.link}
											key={item.key}
										>
											<Button
												color="inherit"
												startIcon={item.icon}
											>
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
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/about" exact component={UnderConstruction} />

					<Route path="/projects" exact component={Projects} />
					<Route path="/projects/mintsans" component={MintsansDL} />
					<Route path="/projects/mintcraft" exact component={MintcraftDL} />
					<Route
						path="/projects/mintcraft/splashes"
						component={MintcraftSplashes}
					/>
					<Route path="/projects/win10tiles" component={Win10TilesDL} />

					{/* Works of 2022 */}
					<Route path="/projects/2022/book" component={Book} />
					<Route path="/projects/2022/mintbanners" component={MintBanners} />
					<Route path="/projects/2022/wiimenu" component={WiiMenu} />
					<Route path="/projects/2022/geoices" component={Geoices} />
					<Route path="/projects/2022/suserebrand" component={suseRebrand} />
					<Route path="/projects/2022/statistics" component={Statistics} />
					<Route path="/projects/2022/ipad" component={Ipad} />
					<Route path="/projects/2022/ford" component={Ford} />
					<Route path="/projects/2022/archwall" component={ArchWall} />

					{/* Works of 2021 */}
					<Route path="/projects/2021/manjarowall" component={ManjaroWall} />

					<Route path="/contact" exact component={Contact} />
					<Route path="/privacy" exact component={PrivacyPolicy} />
					<Route path="/test" exact component={Test} />
					<Route path="/healthsafety" exact component={HealthSafety} />

					<Redirect from="/works" to="/projects" />
					<Redirect from="/downloads" to="/projects" />
					<Redirect from="/projects/2022" exact to="/projects" />
					<Redirect from="/projects/2021" exact to="/projects" />
					<Redirect from="/faq" to="/contact" />
					<Redirect from="/mintcraft" to="/projects/mintcraft" />
					<Redirect from="/splashes" exact to="/projects/mintcraft/splashes" />
					<Redirect from="/mintsans" to="/projects/mintsans" />
					<Redirect from="/mintalt" to="/projects/mintalt" />
					<Redirect from="/win10tiles" to="/projects/win10tiles" />

					<Route component={Error404} />
				</Switch>

				<footer>
					<Divider />
					<div className="copyright">
						<Typography variant="body2">
							{t("common.footer.madeWith")}
							<RiHeartFill color="var(--redSecondary)" />
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
							<RiYoutubeLine />
						</IconLink>
						<IconLink href="https://github.com/pprmint">
							<RiGithubLine />
						</IconLink>
						<IconLink href="https://discord.com/invite/Vw9JXwr">
							<RiDiscordLine />
						</IconLink>
					</Stack>
				</footer>
			</ScrollToTop>
		</Router>
	);
}

export default App;
