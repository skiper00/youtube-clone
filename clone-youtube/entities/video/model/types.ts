interface IThumbnail {
    url: string;
    width: number;
    height: number;
}

export interface IVideoSnippet {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
        default: IThumbnail;
        medium: IThumbnail;
        high: IThumbnail;
        standard?: IThumbnail;
        maxres?: IThumbnail;
    };
    channelTitle: string;
    tags?: string[];
    categoryId: string;
    liveBroadcastContent: string;
    localized: {
        title: string;
        description: string;
    };
}

export interface IVideoContentDetails {
    duration: string;
    dimension: string;
    definition: string;
    caption: string;
    projection:string,
    licensedContent: boolean;
}

export interface IVideoStatistics {
    viewCount: string;
    likeCount: string;
    favoriteCount: string;
    commentCount: string;
}
export interface IVideo {
    id: string;
    snippet: IVideoSnippet;
    contentDetails: IVideoContentDetails;
    statistics: IVideoStatistics;
}

export interface IYouTubeResponse {
    etag: string;
    items: IVideo[];
    nextPageToken?: string;
    kind: string;
    pageInfo: {
        totalResults: number;
        resultsPerPage: number;
    };
}