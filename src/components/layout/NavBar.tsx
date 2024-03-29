import { Link } from "src/navigation";
import Image from "next/image";

import DesktopNavigation from "./Navbar/Desktop";
import MobileNavigation from "./Navbar/Mobile";

import Wordmark from "public/assets/wordmark.svg";

export default function NavBar() {
	return (
		<div
			className={`z-50 fixed w-full h-16 flex items-start duration-300`}
		>
            <div
				style={{ maskImage: "linear-gradient(rgba(0,0,0,1) 0%, rgba(0,0,0,.4) 50%, rgba(0,0,0,0) 100%)", maskRepeat: "space", backgroundRepeat: "repeat" }}
				className="fixed inset-x-0 top-0 h-32 z-20 bg-neutral-950/75 backdrop-blur-md pointer-events-none"
			/>
			<Link href="/" className="z-50 pl-3 md:pl-6 my-auto mr-auto drop-shadow-[0px_2px_12px_#1118]">
				<Image src={Wordmark} alt="pprmint. logo" className="h-9 w-[184px] mt-1" />
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
