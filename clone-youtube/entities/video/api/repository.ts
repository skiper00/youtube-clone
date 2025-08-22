import type { IYouTubeResponse } from '@/entities/video/model/types';

// Интерфейс (контракт) репозитория для работы с видео
// Он описывает, какие методы обязаны быть реализованы в videoRepository
export interface IVideoRepository {
	// Метод для получения списка видео
	fetchPopular(): Promise<IYouTubeResponse>;
	// Метод для получения данных о каналах по их id
	fetchChannels(ids: string[]): Promise<any>;
}
