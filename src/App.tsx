import React from "react";
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
	ThemeProvider,
	Theme,
	createTheme,
	StyledEngineProvider,
	CssBaseline,
	Typography,
	IconButton,
	AppBar,
	Toolbar,
	Box,
	SwipeableDrawer,
	List,
	ListItem,
	ListItemText,
	useScrollTrigger,
    Button,
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
import Win10TilesDL from "./pages/projects/win10tiles/Win10Tiles";

// Works 2022
import Statistics from "./pages/projects/gallery/2022/statistics/LikeStatistics";
import Ipad from "./pages/projects/gallery/2022/ipad/iPad"; // this hurts
import ArchWall from "./pages/projects/gallery/2022/archwall/ArchWall";
import Ford from "./pages/projects/gallery/2022/ford/Ford";

// Works 2021
import ManjaroWall from "./pages/projects/gallery/2021/manjarowall/ManjaroWall";

import Contact from "./pages/contact/Contact";
import Error404 from "./pages/404/Error404";
import UnderConstruction from "./pages/wip/UnderConstruction";
import HealthSafety from "./pages/wii/HealthSafety";
import Test from "./pages/test/Test";

import ScrollToTop from "./ScrollToTop";

import Wordmark from "./globalassets/wordmark.svg";

/* import "./globalassets/fonts/archia.css"; */
import "./globalassets/fonts/silka.css";
import "./globalassets/fonts/basier_square.css";

import {
	RiArrowDownSLine,
	RiBehanceLine,
	RiGithubLine,
	RiHeartFill,
	RiMenu2Line,
	RiMenu3Line,
	RiTwitterLine,
	RiYoutubeLine,
} from "react-icons/ri";

const nav = [
	{
		id: "nav.home",
		link: "/",
		exact: true,
	},
	{
		id: "nav.about",
		link: "/about",
	},
	{
		id: "nav.projects",
		link: "/projects",
	},
	{
		id: "nav.contact",
		link: "/contact",
	},
];

const theme = createTheme({
	palette: {
		mode: "dark",
		primary: {
			light: "#0C6",
			main: "#0C6",
			dark: "#095",
			contrastText: "#111",
		},
		secondary: {
			light: "#19F",
			main: "#19F",
			dark: "#17c",
			contrastText: "#111",
		},
		background: {
			default: "#111",
			paper: "#222",
		},
		text: {
			primary: "#EEE",
			secondary: "#BBB",
		},
		error: {
			light: "#F34",
			main: "#F34",
			dark: "#f34",
			contrastText: "#111",
		},
		warning: {
			light: "#FB2",
			main: "#FB2",
			dark: "#d92",
			contrastText: "#111",
		},
		info: {
			light: "#19F",
			main: "#19F",
			dark: "#17c",
			contrastText: "#111",
		},
		success: {
			light: "#0C6",
			main: "#0C6",
			dark: "#095",
			contrastText: "#111",
		},
	},
	typography: {
		fontFamily: "var(--fontSecondary)",
		h1: {
			fontFamily: "var(--fontPrimary)",
			color: "#EEE",
			fontSize: "4rem",
			fontWeight: 600,
			lineHeight: 1.1,
			paddingBottom: "1rem",
		},
		h2: {
			fontFamily: "var(--fontPrimary)",
			color: "#EEE",
			fontSize: "2rem",
			fontWeight: 500,
			padding: ".3rem 0",
			lineHeight: 1.1,
		},
		h3: {
			fontFamily: "var(--fontPrimary)",
			color: "#EEE",
			fontSize: "1.5rem",
			fontWeight: 400,
			padding: ".3rem 0",
		},
		body1: {
			color: "#BBB",
			lineHeight: 1.5,
		},
	},
	shape: {
		borderRadius: 6,
	},
	components: {
		MuiSkeleton: {
			styleOverrides: {
				root: {
					backgroundColor: "#222",
				},
			},
		},
	},
});

function IconLink(
	props: React.PropsWithChildren<{ href: string; delay: string }>
) {
	return (
		<IconButton
			href={props.href}
			target="_blank"
			rel="noopener noreferrer"
			size="large"
			style={{ animationDelay: props.delay }}
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
		sx: trigger ? { boxShadow: 3 } : { boxShadow: 0 },
		color: trigger ? "primary" : "transparent",
		elevation: 0,
	});
}

function App() {
	const { t } = useTranslation();
	const [open, setOpen] = useState<boolean>(false);
	return (
		<StyledEngineProvider injectFirst>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Router>
					<ElevationScroll>
						<AppBar
							position="fixed"
							sx={{
								transition: "all 0.375s",
							}}
						>
							<Toolbar>
								<IconButton
									size="large"
									edge="start"
									color="inherit"
									aria-label="menu"
									onClick={() => setOpen(true)}
									sx={{ mr: 2, display: { xs: "inline-flex", md: "none" } }}
								>
									<RiMenu3Line />
								</IconButton>
								<SwipeableDrawer
									sx={{
										width: "280px",
										flexShrink: 0,
										[`& .MuiDrawer-paper`]: {
											width: "280px",
											boxSizing: "border-box",
										},
									}}
									anchor="left"
									elevation={2}
									open={open}
									onClose={() => setOpen(false)}
									onOpen={() => {}}
								>
									<Box
										pl={{ xs: 2, sm: 3 }}
										pt={{ xs: 0, sm: 1 }}
										pb={{ xs: 0, sm: 1 }}
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
									<List>
										{nav.map((item) => {
											const exact = item.exact ? true : false;
											return (
												<NavLink
													onClick={() => setOpen(false)}
													exact={item.exact}
													activeClassName="active"
													to={item.link}
												>
													<ListItem
														button
														sx={{
															margin: "0 10px",
															padding: "8px 16px",
															borderRadius: "24px 0 0 24px",
														}}
													>
														<ListItemText
															primary={t(item.id)}
															className="navlink"
														/>
													</ListItem>
												</NavLink>
											);
										})}
									</List>
								</SwipeableDrawer>
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
									className="navlink"
									sx={{ display: { md: "block", xs: "none" } }}
								>
									{nav.map((item) => {
										const exact = item.exact ? true : false;
										return (
											<NavLink
												exact={item.exact}
												activeClassName="active"
												to={item.link}
											>
												{t(item.id)}
											</NavLink>
										);
									})}
								</Box>
                                {/* <Button variant="outlined" color="inherit" endIcon={<RiArrowDownSLine />} sx={{ml: "15px"}}>Sprache</Button> */}
							</Toolbar>
						</AppBar>
					</ElevationScroll>
					<ScrollToTop>
						{/* All the different pages that exist here, pretty much. */}
						<Switch>
							<Route path="/" exact component={Home} />
							<Route path="/about" exact component={UnderConstruction} />

							<Route path="/projects" exact component={Projects} />
							<Route path="/projects/mintsans" component={MintsansDL} />
							<Route path="/projects/mintcraft" component={MintcraftDL} />
							<Route path="/projects/win10tiles" component={Win10TilesDL} />

							{/* Works of 2022 */}
							<Route
								path="/projects/works/2022/statistics"
								component={Statistics}
							/>
							<Route path="/projects/works/2022/ipad" component={Ipad} />
							<Route path="/projects/works/2022/ford" component={Ford} />
							<Route
								path="/projects/works/2022/archwall"
								component={ArchWall}
							/>

							{/* Works of 2021 */}
							<Route
								path="/projects/works/2021/manjarowall"
								component={ManjaroWall}
							/>

							<Route path="/contact" exact component={Contact} />
							<Route path="/test" exact component={Test} />
							<Route path="/healthsafety" exact component={HealthSafety} />

							<Redirect from="/works" to="/projects" />
							<Redirect from="/downloads" to="/projects" />
							<Redirect from="/projects/works/2022" exact to="/projects" />
							<Redirect from="/projects/works/2021" exact to="/projects" />
							<Redirect from="/faq" to="/contact" />
							<Redirect from="/mintcraft" to="/projects/mintcraft" />
							<Redirect from="/mintsans" to="/projects/mintsans" />
							<Redirect from="/mintalt" to="/projects/mintalt" />
							<Redirect from="/win10tiles" to="/projects/win10tiles" />

							<Route component={Error404} />
						</Switch>
					</ScrollToTop>
				</Router>
				<footer>
					<div className="copyright">
						<Typography variant="body2">
							Made with <RiHeartFill color="var(--redSecondary)" /> and coffee
							by pprmint.
						</Typography>
					</div>
					<div className="iconLinks">
						<IconLink href="https://twitter.com/npprmint" delay="0.12s">
							<RiTwitterLine />
						</IconLink>
						<IconLink href="https://www.youtube.com/c/pprmint" delay="0.16s">
							<RiYoutubeLine />
						</IconLink>
						<IconLink href="https://www.behance.net/pprmint" delay="0.2s">
							<RiBehanceLine />
						</IconLink>
						<IconLink href="https://github.com/pprmint" delay="0.24s">
							<RiGithubLine />
						</IconLink>
					</div>
				</footer>
			</ThemeProvider>
		</StyledEngineProvider>
	);
}

export default App;
