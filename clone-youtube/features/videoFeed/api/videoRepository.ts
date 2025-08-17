//импорты

import type { IYouTubeResponse } from '@/entities/video/model/types';
import type { IVideoRepository } from '@/entities/video/api/repository';  

const apiKey = import.meta.env.VITE_API_KEY;

export const videoRepository:IVideoRepository = {
async fetchPopular(): Promise<IYouTubeResponse> {
			const videosRes = await fetch(
				`https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&key=${apiKey}`
			);
			//валидация запроса
			if (!videosRes.ok) {
				throw new Error(`HTTP error! status: ${videosRes.status}`);
			}
            return await videosRes.json();
},
async fetchChannels(ids: string[]): Promise<any> {
            const cnannelsRes = await fetch(
                `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${ids.join(',')}&key=${apiKey}`
            );
            //валидация запроса
            if (!cnannelsRes.ok) {
                throw new Error(`HTTP error! status: ${cnannelsRes.status}`);
            }
            return await cnannelsRes.json();
}
};