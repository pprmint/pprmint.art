import React from "react";
import { useTranslation } from "react-i18next";
import {
	useTheme,
	Button,
	Dialog,
	Typography,
	useMediaQuery,
	IconButton,
	Divider,
	Box,
} from "@mui/material";
import { RiCloseLine, RiSettings4Line } from "react-icons/ri";
import LanguageSetting from "./LanguageInit";
import ThemeSetting from "./ThemeInit";

const SettingsButton = () => {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<Button
			variant="text"
			color="inherit"
			startIcon={<RiSettings4Line />}
			onClick={handleClick}
			sx={{
				ml: "16px",
				mr: "16px",
				pl: "15px",
				pr: "15px",
				borderRadius: "20px",
			}}
		></Button>
	);
};

const Settings = () => {
	const { t } = useTranslation();
	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<>
			<Button
				variant="text"
				color="inherit"
				startIcon={<RiSettings4Line />}
				onClick={handleClick}
				sx={{
					ml: "16px",
					mr: "16px",
					pl: "15px",
					pr: "15px",
					borderRadius: "20px",
				}}
			>
				{t("common.settings.title")}
			</Button>
			<Dialog
				maxWidth="sm"
				fullWidth
				fullScreen={fullScreen}
				open={open}
				onClose={handleClose}
				onBackdropClick={handleClose}
				scroll="body"
			>
				<Box sx={{ display: "flex", backgroundColor: "#333" }}>
					<Box pl={1.5} pr={1.5} pt={0.75} pb={0.75}>
						<IconButton onClick={handleClose} size="large">
							<RiCloseLine />
						</IconButton>
					</Box>
					<Typography
						sx={{
							mt: "12px",
							flexGrow: 1,
							fontSize: "1.75rem",
							fontFamily: "var(--fontPrimary)",
							fontWeight: 500,
							color: "var(--textSecondary)",
						}}
					>
						{t("common.settings.title")}
					</Typography>
					<Box pr={1.5} pt={0.75} pb={0.75}>
						<IconButton size="large" disabled>
							<RiSettings4Line />
						</IconButton>
					</Box>
				</Box>
				<Divider />
				<LanguageSetting />
				{/* <Divider />
                <ThemeSetting /> */}
			</Dialog>
		</>
	);
};
export default Settings;
