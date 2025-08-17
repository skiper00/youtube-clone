import type { IYouTubeResponse } from '@/entities/video/model/types';

export interface IVideoRepository {
    fetchVideos(): Promise<IYouTubeResponse>;
    fetchChannels(ids: string[]): Promise<any>;
}