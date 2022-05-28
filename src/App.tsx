import React from "react";
import { Helmet } from "react-helmet";
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

// Imports of all the pages
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";

import MintsansDL from "./pages/projects/mintsans/Mintsans";
import MintBitDL from "./pages/projects/mintbit/MintBit";
import MintAltDL from "./pages/projects/mintalternative/MintAlt";
import MintcraftDL from "./pages/projects/mintcraft/Mintcraft";
import MintcraftSplashes from "./pages/projects/mintcraft/Splashes";
import Win10TilesDL from "./pages/projects/win10tiles/Win10Tiles";

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

import Contact from "./pages/contact/Contact";
import PrivacyPolicy from "./pages/privacypolicy/PrivacyPolicy";
import Error404 from "./pages/404/Error404";
import UnderConstruction from "./pages/wip/UnderConstruction";
import HealthSafety from "./pages/wii/HealthSafety";
import Test from "./pages/test/Test";

import ScrollToTop from "./ScrollToTop";
import Settings from "./Settings";
import CookieSnackbar from "./CookieSnackbar";

import Wordmark from "./globalassets/wordmark.svg";

import "./globalassets/fonts/silka.css";
import "./globalassets/fonts/basier_square.css";

import {
	RiBehanceLine,
	RiChat1Line,
	RiDiscordLine,
	RiGithubLine,
	RiHeartFill,
	RiHomeLine,
	RiMenu2Line,
	RiMenu3Line,
	RiPencilRuler2Line,
	RiTwitterLine,
	RiUserLine,
	RiYoutubeLine,
} from "react-icons/ri";

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
					<Toolbar>
						<Box
							pl={{ xs: 1, sm: 0 }}
							pr={{ xs: 1.5, md: 0 }}
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
								marginTop: "9px",
								flexGrow: 1,
								display: { xs: "flex", md: "block" },
							}}
						>
							<Link to="/">
								<img src={Wordmark} height="30px" alt="pprmint." />
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
												sx={{
													width: "max-content",
													borderRadius: "20px",
													pl: 2,
													pr: 2,
												}}
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
					<Route path="/projects/2022/Book" component={Book} />
					<Route path="/projects/2022/MintBanners" component={MintBanners} />
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
						<IconLink href="https://twitter.com/npprmint">
							<RiTwitterLine />
						</IconLink>
						<IconLink href="https://www.youtube.com/c/pprmint">
							<RiYoutubeLine />
						</IconLink>
						<IconLink href="https://www.behance.net/pprmint">
							<RiBehanceLine />
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
