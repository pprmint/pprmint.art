import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
	IconButton,
	AppBar,
	Toolbar,
	Box,
	Drawer,
	List,
	ListItem,
	useScrollTrigger,
	Button,
	Stack,
	Divider,
	ListItemIcon,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import Settings from "./Settings";

import {
	FiMessageSquare,
	FiHome,
	FiMenu,
	FiX,
	FiDownload,
	FiImage,
} from "react-icons/fi";

import Lottie from "react-lottie";

// ppmint.
import Wordmark from "./globalassets/wordmark.json";
// Pride animation wordmark
import PrideWordmark from "./globalassets/pride_wordmark.json";

const lottieOptions = {
	loop: false,
	autoplay: true,
	animationData: Wordmark,
	rendererSettings: {
		preserveAspectRatio: "xMidYMid slice",
	},
};

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

export default function NavBar() {
	const { t } = useTranslation();
	const [open, setOpen] = useState<boolean>(false);
	return (
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
	);
}
