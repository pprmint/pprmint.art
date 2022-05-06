import M from "./mintBanner/m.svg";
import I from "./mintBanner/i.svg";
import N from "./mintBanner/n.svg";
import T from "./mintBanner/t.svg";
import Gradient from "./mintBanner/gradient.svg";

export default function MintBanner() {
	return (
		<div className="mintBanner">
			<img src={M} className="M" />
			<img src={I} className="I" />
			<img src={N} className="N" />
			<img src={T} className="T" />
			<img src={Gradient} className="gradient" />
		</div>
	);
}
