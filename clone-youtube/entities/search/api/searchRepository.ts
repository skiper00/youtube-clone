import type { IYouTubeResponse } from '@/entities/video/model/types';

export interface ISearchVieos {
	searchVideos(query: string): Promise<IYouTubeResponse>;
}
