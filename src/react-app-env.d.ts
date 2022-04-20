/// <reference types="react-scripts" />

// React is stupid, so these allow me to actually use
// respective file types on my website.
declare module "*.mp4" {
	const src: string;
	export default src;
}
declare module "*.webm" {
	const src: string;
	export default src;
}
declare module "*.wav" {
	const src: string;
	export default src;
}
declare module "*.ogg" {
	const src: string;
	export default src;
}

declare module "react-helmet";
