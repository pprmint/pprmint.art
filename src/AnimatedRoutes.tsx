import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

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
import Works from "./pages/works/Works";
// Works 2022
import Lights from "./pages/works/gallery/2022/Lights";
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
import ManjaroWall from "./pages/works/gallery/2021/ManjaroWall";
import GS from "./pages/works/gallery/2021/GS";
import NotVLC from "./pages/works/gallery/2021/NotVLC";
import LightStudy from "./pages/works/gallery/2021/LightStudy";
// Easter eggs...? I dunno.
import HealthSafety from "./pages/wii/HealthSafety";
import Test from "./pages/test/Test";

export default function AnimatedRoutes() {
	const location = useLocation();
	return (
		<Routes location={location} key={location.pathname}>
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

			<Route path="/works" element={<Works />} />
			{/* Works of 2022 */}
			<Route path="/works/2022/lights" element={<Lights />} />
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
			<Route path="/works/2021/gs" element={<GS />} />
			<Route path="/works/2021/notvlc" element={<NotVLC />} />
			<Route path="/works/2021/lightstudy" element={<LightStudy />} />

			<Route path="/contact" element={<Contact />} />
			<Route path="/privacy" element={<PrivacyPolicy />} />
			<Route path="/test" element={<Test />} />
			<Route path="/healthsafety" element={<HealthSafety />} />

			<Route path="/faq" element={<Navigate replace to="/contact" />} />
			<Route
				path="/mintcraft"
				element={<Navigate replace to="/downloads/mintcraft" />}
			/>
			<Route
				path="/splashes"
				element={<Navigate replace to="/downloads/mintcraft/splashes" />}
			/>
			<Route
				path="/mintsans"
				element={<Navigate replace to="/downloads/mintsans" />}
			/>
			<Route
				path="/mintalt"
				element={<Navigate replace to="/downloads/mintalt" />}
			/>
			<Route
				path="/win10tiles"
				element={<Navigate replace to="/downloads/win10tiles" />}
			/>

			<Route path="*" element={<Error404 />} />
		</Routes>
	);
}
