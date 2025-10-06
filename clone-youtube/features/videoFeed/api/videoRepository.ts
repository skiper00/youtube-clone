import type { IYouTubeResponse } from '@/entities/video/model/types';
// Импортируем контракт репозитория (описывает, какие методы должен реализовать videoRepository)
import type { IVideoRepository } from '@/entities/video/api/repository';

const apiKey = import.meta.env.VITE_API_KEY;

export const videoRepository: IVideoRepository = {
	// Метод для получения популярных видео
	async fetchPopular(pageToken: string | null): Promise<IYouTubeResponse> {
		let url = `/api/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&key=${apiKey}`;
		if (pageToken) {
			url += `&pageToken=${pageToken}`;
		}
		const videosRes = await fetch(url);
		//валидация запроса
		if (!videosRes.ok) {
			throw new Error(`HTTP error! status: ${videosRes.status}`);
		}
		return await videosRes.json();
	},
	// Метод для получения информации о каналах по списку их ID
	async fetchChannels(ids: string[]): Promise<any> {
		const cnannelsRes = await fetch(
			`/api/youtube/v3/channels?part=snippet&id=${ids}&key=${apiKey}`,
		);
		//валидация запроса
		if (!cnannelsRes.ok) {
			throw new Error(`HTTP error! status: ${cnannelsRes.status}`);
		}
		return await cnannelsRes.json();
	},
};
