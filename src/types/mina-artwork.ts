import Artist from "./artist";

export default interface MinaArtwork {
	id: number;
	attributes: {
		artist: {
			data: Artist;
		};
		nsfw: boolean;
		heart: boolean;
		creationDate: string;
		focus: string;
		createdAt: string;
		updatedAt: string;
		publishedAt: string;
		artwork: {
			data: [
				{
					id: number;
					attributes: {
						name: string;
						alternativeText: string;
						caption: string;
						width: number;
						height: number;
						formats: {
							thumbnail: {
								name: string;
								hash: string;
								ext: string;
								mime: string;
								path: string;
								width: number;
								height: number;
								size: number;
								url: string;
							};
							large: {
								name: string;
								hash: string;
								ext: string;
								mime: string;
								path: string;
								width: number;
								height: number;
								size: number;
								url: string;
							};
							medium: {
								name: string;
								hash: string;
								ext: string;
								mime: string;
								path: string;
								width: number;
								height: number;
								size: number;
								url: string;
							};
							small: {
								name: string;
								hash: string;
								ext: string;
								mime: string;
								path: string;
								width: number;
								height: number;
								size: number;
								url: string;
							};
						};
						hash: string;
						ext: string;
						mime: string;
						size: number;
						url: string;
						previewUrl: string;
						provider: string;
						provider_metadata: string;
						createdAt: string;
						updatedAt: string;
					};
				}
			];
		};
	};
}

export interface MinaArtworksMeta {
	pagination: {
		page: number;
		pageSize: number;
		pageCount: number;
		total: number;
	};
}

export interface MinaArtworks {
	data: MinaArtwork[];
	meta: MinaArtworksMeta;
}
