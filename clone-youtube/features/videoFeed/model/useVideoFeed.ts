import { ref } from 'vue';
import type { IYouTubeResponse } from '@entities/video/model/types';
import { videoRepository } from '../api/videoRepository';
import { useMapVideos } from '../../../composable/useMapVideos';

export default function useVideoFeed() {
	// Создаём реактивную переменную, в которой будут храниться данные о видео
	const videos = ref<IYouTubeResponse | null>(null);
	const pageToken = ref<string | null>(null);
	const hasMore = ref(true);

	const { buildAvatarMap, mapVideos } = useMapVideos();

	const fetchVideos = async () => {
		if (!hasMore.value) return;
		//Получаем список популярных видео
		const data = await videoRepository.fetchPopular(pageToken.value);
		pageToken.value = data.nextPageToken || null;
		hasMore.value = !!pageToken.value;

		const channelIds = data.items.map((item) => item.snippet.channelId);
		const cnannelsData = await videoRepository.fetchChannels(channelIds);

		const avatarMap = buildAvatarMap(cnannelsData);
		const newVideos = mapVideos(data, avatarMap);

		if (!videos.value) {
			videos.value = { ...data, items: newVideos };
		} else {
			videos.value.items.push(...newVideos);
		}
	};

	return { videos, fetchVideos, hasMore };
}
