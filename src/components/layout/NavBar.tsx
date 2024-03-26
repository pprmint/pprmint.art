import { Link } from "src/navigation";
import Image from "next/image";

import DesktopNavigation from "./Navbar/Desktop";
import MobileNavigation from "./Navbar/Mobile";

import Wordmark from "public/assets/wordmark.svg";

export default function NavBar() {
	return (
		<div className={`z-50 fixed w-full h-16 flex items-start bg-neutral-950 border-b border-neutral-900 shadow-lg`}>
			<Link href="/" className="z-50 pl-3 md:pl-6 my-auto mr-auto">
				<Image src={Wordmark} alt="pprmint. logo" className="h-9 w-[142px] mt-1" />
			</Link>
			<div className="hidden z-50 md:flex">
				<DesktopNavigation />
			</div>
			<div className="block z-50 md:hidden">
				<MobileNavigation />
			</div>
		</div>
	);
}
