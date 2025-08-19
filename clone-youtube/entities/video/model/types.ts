interface IThumbnail {
	url: string;
	width: number;
	height: number;
}

interface IVideoSnippet {
	publishedAt: string;
	channelId: string;
	title: string;
	description: string;
	thumbnails: {
		default: IThumbnail;
		medium: IThumbnail;
		high: IThumbnail;
		standard?: IThumbnail;
	};
	channelTitle: string;
	tags?: string[];
	categoryId: string;
	liveBroadcastContent: string;
	localized: {
		title: string;
		description: string;
	};
	channelAvatar: string | null;
}

interface IVideoContentDetails {
	duration: string;
	dimension: string;
	definition: string;
	caption: string;
	licensedContent: boolean;
	regionRestriction: {
		blocked: string[];
	};
	contentRating: any;
	projection: string;
}

interface IVideoStatistics {
	viewCount: string;
	likeCount: string;
	favoriteCount: string;
	commentCount: string;
}
interface IVideo {
	id: string;
	snippet: IVideoSnippet;
	contentDetails: IVideoContentDetails;
	statistics: IVideoStatistics;
}

interface IYouTubeResponse {
	etag: string;
	items: IVideo[];
	nextPageToken?: string;
	kind: string;
	pageInfo: {
		totalResults: number;
		resultsPerPage: number;
	};
}
export type {
	IVideoSnippet,
	IVideoContentDetails,
	IVideoStatistics,
	IVideo,
	IYouTubeResponse,
};
