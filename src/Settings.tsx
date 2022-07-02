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
import { FiX, FiSettings } from "react-icons/fi";
import LanguageSetting from "./LanguageInit";
import ThemeSetting from "./ThemeInit";

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
		<React.Fragment>
			<Button
				color="inherit"
				startIcon={<FiSettings />}
				onClick={handleClick}
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
					{/* Mobile close button, same placement as menu button */}
					<Box pl={1.5} pr={1.5} pt={0.75} pb={0.75}>
						<IconButton
							onClick={handleClose}
							size="large"
							sx={{ display: { xs: "inline-flex", md: "none" } }}
						>
							<FiX />
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
					{/* Desktop close button, opposite side */}
					<Box pr={1.5} pt={0.75} pb={0.75}>
						<IconButton
							onClick={handleClose}
							size="large"
							sx={{ display: { xs: "none", md: "inline-flex" } }}
						>
							<FiX />
						</IconButton>
					</Box>
				</Box>
				<Divider />
				<LanguageSetting />
				{/* <Divider />
                <ThemeSetting /> */}
			</Dialog>
		</React.Fragment>
	);
};
export default Settings;
