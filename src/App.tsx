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
} from "@mui/material";

// Imports of all the pages
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";

import MintsansDL from "./pages/projects/mintsans/Mintsans";
import MintBitDL from "./pages/projects/mintbit/MintBit";
import MintAltDL from "./pages/projects/mintalternative/MintAlt";
import MintcraftDL from "./pages/projects/mintcraft/Mintcraft";
import Win10TilesDL from "./pages/projects/win10tiles/Win10Tiles";

// Works under /projects
import Statistics from "./pages/projects/gallery/2022/statistics/LikeStatistics";
import Ipad from "./pages/projects/gallery/2022/ipad/iPad"; // this hurts
import ArchWall from "./pages/projects/gallery/2022/archwall/ArchWall";
import Ford from "./pages/projects/gallery/2022/ford/Ford";

import Contact from "./pages/contact/Contact";
import Error404 from "./pages/404/Error404";
import UnderConstruction from "./pages/wip/UnderConstruction";
import Test from "./pages/test/Test";

import ScrollToTop from "./ScrollToTop";

import Wordmark from "./globalassets/wordmark.svg";

/* import "./globalassets/fonts/archia.css"; */
import "./globalassets/fonts/silka.css";
import "./globalassets/fonts/basier_square.css";

import {
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
		text: "Home",
		link: "/",
		exact: true,
		delay: "0.04",
	},
	{
		text: "About",
		link: "/about",
		delay: "0.08",
	},
	{
		text: "Projects",
		link: "/projects",
		delay: "0.12",
	},
	{
		text: "Contact & FAQ",
		link: "/contact",
		delay: "0.18",
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
		fontFamily:
			'"Basier Square", "Silka", "Roboto", Helvetica, Arial, sans-serif',
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

function MobileNavigation() {
	const [open, setOpen] = useState<boolean>(false);
	return (
		<AppBar
			elevation={2}
			position="fixed"
			sx={{ display: { xs: "block", lg: "none" } }}
		>
			<Toolbar>
				<IconButton
					size="large"
					edge="start"
					color="inherit"
					aria-label="menu"
					onClick={() => setOpen(true)}
					sx={{ mr: 2 }}
				>
					<RiMenu2Line />
				</IconButton>
				<SwipeableDrawer
					sx={{
						width: "281px",
						flexShrink: 0,
						[`& .MuiDrawer-paper`]: {
							width: "281px",
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
									<ListItem button>
										<ListItemText primary={item.text} className="navlink" />
									</ListItem>
								</NavLink>
							);
						})}
					</List>
				</SwipeableDrawer>
				<Link
					to="/"
					style={{
						marginTop: "9px",
					}}
				>
					<img src={Wordmark} height="30px" alt="pprmint." />
				</Link>
			</Toolbar>
		</AppBar>
	);
}

function App(props: Props) {
	return (
		<StyledEngineProvider injectFirst>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Router>
					<ElevationScroll {...props}>
						<AppBar
							position="fixed"
							sx={{
								display: { xs: "none", lg: "block" },
								transition: "all 0.375s",
							}}
						>
							<Toolbar>
								<Link
									to="/"
									style={{
										marginTop: "9px",
										flexGrow: "1",
									}}
								>
									<img src={Wordmark} height="30px" alt="pprmint." />
								</Link>
								<div className="navlink">
									{nav.map((item) => {
										const exact = item.exact ? true : false;
										return (
											<NavLink
												exact={item.exact}
												activeClassName="active"
												to={item.link}
											>
												{item.text}
											</NavLink>
										);
									})}
								</div>
							</Toolbar>
						</AppBar>
					</ElevationScroll>
					<MobileNavigation />
					<ScrollToTop>
						{/* All the different pages that exist here, pretty much. */}
						<Switch>
							<Route path={"/"} exact>
								<Home />
							</Route>
							<Route path={"/about"} exact>
								{/* <About /> */}
								<UnderConstruction />
							</Route>
							<Route path={"/projects"} exact>
								<Projects />
							</Route>
							<Route path={"/projects/mintsans"} exact>
								<MintsansDL />
							</Route>
							{/* <Route path={"/projects/mintbit"} exact>
									<MintBitDL />
                                    </Route>
                                    <Route path={"/projects/mintalt"} exact>
									<MintAltDL />
								</Route> */}
							<Route path={"/projects/mintcraft"} exact>
								<MintcraftDL />
							</Route>
							<Route path={"/projects/win10tiles"} exact>
								<Win10TilesDL />
							</Route>

							<Route path={"/projects/works/2022/statistics"} exact>
								<Statistics />
							</Route>
							<Route path={"/projects/works/2022/ipad"} exact>
								<Ipad /> {/* AAAAAAAAAA */}
							</Route>
							<Route path={"/projects/works/2022/ford"} exact>
								<Ford />
							</Route>
							<Route path={"/projects/works/2022/archwall"} exact>
								<ArchWall />
							</Route>

							<Route path={"/contact"} exact>
								<Contact />
							</Route>
							<Route path={"/test"} exact>
								<Test />
							</Route>

							<Route path={"/works"} exact>
								<Redirect to="/projects" />
							</Route>
							<Route path={"/downloads"} exact>
								<Redirect to="/projects" />
							</Route>
							<Route path={"/faq"} exact>
								<Redirect to="/contact" />
							</Route>
							<Route path={"/mintcraft"} exact>
								<Redirect to="/projects/mintcraft" />
							</Route>
							<Route path={"/mintsans"} exact>
								<Redirect to="/projects/mintsans" />
							</Route>
							<Route path={"/mintalt"} exact>
								<Redirect to="/projects/mintalt" />
							</Route>
							<Route path={"/win10tiles"} exact>
								<Redirect to="/projects/win10tiles" />
							</Route>

							<Route component={Error404}>
								<Error404 />
							</Route>

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
