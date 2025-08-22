import { ref } from 'vue';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import duration from 'dayjs/plugin/duration';
import 'dayjs/locale/ru';

import type { IYouTubeResponse, IVideo } from '@/entities/video/model/types';
import { videoRepository } from '@features/videoFeed/api/videoRepository';

// Подключаем плагины
dayjs.extend(relativeTime);
dayjs.extend(duration);
dayjs.locale('ru');

export default function useVideoFeed() {
	// Создаём реактивную переменную, в которой будут храниться данные о видео
	const videos = ref<IYouTubeResponse | null>(null);
	const pageToken = ref<string | null>(null);
	const hasMore = ref(true);

	const fetchVideos = async () => {
		if (!hasMore.value) return;
		//Получаем список популярных видео
		const data = await videoRepository.fetchPopular(pageToken.value);
		pageToken.value = data.nextPageToken || null;
		hasMore.value = !!pageToken.value;

		//Достаём список ID каналов
		const channelsIds = data.items
			.map((item) => item.snippet.channelId)
			.join(',');

		//Отправляем запрос на получение информации о каналах (для аватарок)
		const channelsData = await videoRepository.fetchChannels(channelsIds);

		//Создаём объект вида { channelId: avatarUrl }, чтобы быстро доставать аватарку по ID
		const avatarMap: Record<string, string> = {};

		channelsData.items.map((ch: any) => {
			avatarMap[ch.id] = ch.snippet.thumbnails.default.url;
		});

		const newVideos = data.items.map((item) => {
			const dur = dayjs.duration(item.contentDetails.duration);
			const formattedDuration =
				dur.asSeconds() >= 3600 ? dur.format('H:mm:ss') : dur.format('m:ss');

			return {
				...item,
				snippet: {
					...item.snippet,
					publishedAt: dayjs(item.snippet.publishedAt).fromNow(),
					channelAvatar: avatarMap[item.snippet.channelId] || null,
				},
				contentDetails: {
					...item.contentDetails,
					duration: formattedDuration,
				},
			} as IVideo;
		});
		if (!videos.value) {
			videos.value = { ...data, items: newVideos };
		} else {
			videos.value.items.push(...newVideos);
		}
	};

	return { videos, fetchVideos, hasMore };
}
